<template>
    <div class="relative rounded overflow-hidden shadow-md bg-white mb-4 px-4 pb-4">
        <div class="mb-2 py-1 flex justify-between content-center border border-gray-100">
            <div class="mr-1">
                <input :checked="showOnMap" @click="updateShowOnMap($event, false)" type="checkbox" title="Show/Hide this section from the map" />
            </div>
            <div class="mr-auto">
                <span @click="deleteItem"><font-awesome-icon icon="times" class="cursor-pointer" /></span>
            </div>
            <div>
                <span v-show="expanded" @click="toggleExpanded"><font-awesome-icon icon="caret-up" class="cursor-pointer" /></span>
                <span v-show="!expanded" @click="toggleExpanded"><font-awesome-icon icon="caret-down" class="cursor-pointer" /></span>
            </div>
        </div>
        <div class="w-full">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SectionItem',
        props: {
            item: {
                type: Object,
                required: true
            },
            sectionKey: {
                type: String,
                required: true
            },
            jsonDataShow: {
                type: Object,
                required: true
            }
        },
        computed: {
            expanded() {
                if (this.jsonDataShow.hasOwnProperty(this.item.id) && this.jsonDataShow[this.item.id].hasOwnProperty('expanded')) {
                    return this.jsonDataShow[this.item.id].expanded
                }

                return true
            },
            showOnMap() {
                if (this.jsonDataShow.hasOwnProperty(this.item.id) && this.jsonDataShow[this.item.id].hasOwnProperty('showOnMap')) {
                    return this.jsonDataShow[this.item.id].showOnMap
                }

                return true
            }
        },
        methods: {
            updateShowOnMap(evt) {
                if (evt.altKey) {
                    this.$emit('updateAllItemShowData', this.sectionKey, 'showOnMap', evt.target.checked)
                } else {
                    this.$emit('updateItemShowData', this.item.id, 'showOnMap', evt.target.checked)
                }
            },
            toggleExpanded: function() {
                this.$emit('updateItemShowData', this.item.id, 'expanded', !this.expanded)
            },
            deleteItem: function() {
                if (confirm('You will be unable to recover this item after deleting. Are you sure?')) {
                    this.$emit('deleteItem', this.sectionKey, this.item.id)
                }
            }
        }
    }
</script>

<style>
</style>