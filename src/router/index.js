//import * as Vue from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
//import Routes from './routes.js'
//import routes from './routes.js'
//import App from '../App.vue'
//import { createApp } from 'vue'
//const app = createApp(App)
//app.use(Router)


import Home from '../components/Home'
import Contribute from '../components/Contribute'
//import Changelog from '../components/Changelog'
import PyrosView from '../components/maps/pyros/View'
import PyrosEditor from '../components/maps/pyros/Edit'
import AnemosView from '../components/maps/anemos/View'
import AnemosEditor from '../components/maps/anemos/Edit'
import PagosView from '../components/maps/pagos/View'
import PagosEditor from '../components/maps/pagos/Edit'
import HydatosView from '../components/maps/hydatos/View'
import HydatosEditor from '../components/maps/hydatos/Edit'
import BozjanSouthernFrontView from '../components/maps/bozjansouthernfront/View'
import BozjanSouthernFrontEditor from '../components/maps/bozjansouthernfront/Edit'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contribute',
        name: 'Contribute',
        component: Contribute,
        meta: { title: 'Contribute' }
    },
/*        {
        path: '/changelog',
        name: 'Changelog',
        component: Changelog,
        meta: { title: 'Changelog' }
    },*/
    {
        path: '/pyros',
        name: 'Pyros',
        component: PyrosView,
        meta: { title: 'Pyros' }
    },
    {
        path: '/pyros/editor',
        name: 'Pyros-Editor',
        component: PyrosEditor,
        meta: { title: 'Pyros - Edit' }
    },
    {
        path: '/anemos',
        name: 'Anemos',
        component: AnemosView,
        meta: { title: 'Anemos' }
    },
    {
        path: '/anemos/editor',
        name: 'Anemos-Editor',
        component: AnemosEditor,
        meta: { title: 'Anemos - Edit' }
    },
    {
        path: '/pagos',
        name: 'Pagos',
        component: PagosView,
        meta: { title: 'Pagos' }
    },
    {
        path: '/pagos/editor',
        name: 'Pagos-Editor',
        component: PagosEditor,
        meta: { title: 'Pagos - Edit' }
    },
    {
        path: '/hydatos',
        name: 'Hydatos',
        component: HydatosView,
        meta: { title: 'Hydatos' }
    },
    {
        path: '/hydatos/editor',
        name: 'Hydatos-Editor',
        component: HydatosEditor,
        meta: { title: 'Hydatos - Edit' }
    },
    {
        path: '/bozjansouthernfront',
        name: 'Bozjansouthernfront',
        component: BozjanSouthernFrontView,
        meta: { title: 'Bozjan Southern Front' }
    },
    {
        path: '/bozjansouthernfront/editor',
        name: 'BozjanSouthernFront-Editor',
        component: BozjanSouthernFrontEditor,
        meta: { title: 'Bozjan Southern Front - Edit' }
    }
]


const router = createRouter({history: createWebHashHistory(),routes})

export default router