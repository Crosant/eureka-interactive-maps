<template>
    <SectionItem v-bind="$props" v-on="$listeners">
        <form>
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        ID
                    </label>
                    <input :value="item.id"
                        class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
                        type="text" readonly>
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Name
                    </label>
                    <input :value="item.name" @change="updateName"
                        class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
                        type="text">
                </div>
            </div>
            <div v-show="expanded">
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Level
                        </label>
                        <input :value="item.level" @change="updateLevel"
                            class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
                            type="number">
                    </div>
                    <Positions :positions="item.position" @updatePosition="updatePosition" @addPosition="addPosition" @setItemPosition="setItemPosition" :multiple="true" class="w-full md:w-1/2 px-3"></Positions>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Participants
                        </label>
                        <input :value="item.participants" @change="updateParticipants"
                            class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
                            type="number">
                    </div>
                    <Icon :icons="icons" :icon="item.icon" @updateIcon="updateIcon" class="w-full md:w-1/2 px-3"></Icon>
                    <Spawns :spawns="item.spawns" @updateSpawns="updateSpawns" @addSpawn="addSpawn" class="w-full md:w-1/2 px-3"></Spawns>
                </div>
            </div>
        </form>
    </SectionItem>
</template>

<script>
    import SectionItem from './SectionItem'
    import Positions from './Positions'
    import Icon from './Icon'
    import Spawns from './Spawns'
    import SectionItemMixin from './sectionitem.mixin'

    export default {
        name: 'CriticalEngagements',
        components: {
            SectionItem,
            Positions,
            Icon,
            Spawns
        },
        mixins: [SectionItemMixin],
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
        data() {
            return {
                icons: [
                    {
                        value: 'boss',
                        name: 'Boss'
                    },
                    {
                        value: 'duel',
                        name: 'Duel'
                    }
                ]
            }
        }
    }
</script>
