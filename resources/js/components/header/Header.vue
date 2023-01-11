<template>
        <div>
                <TopBar/>
                <div class="bg-gray-200 rounded-md sticky m-2 p-3 shadow-sm container mx-auto px-3 animate__bounceIn">
                        <div class="flex">
                                <div class="w-3/4 p-3">
                                        <!-- <router-link class="font-sans hover:font-serif text-pink-700 mx-3 text-lg hover:text-xl font-normal tracking-wider"  :to="{name:'home'}">Home</router-link>
                                        <router-link class="font-sans hover:font-serif text-pink-700 mx-3 text-lg hover:text-xl font-normal tracking-wider" :to="{name:'about'}" >About</router-link>
                                        <router-link class="font-sans hover:font-serif text-pink-700 mx-3 text-lg hover:text-xl font-normal tracking-wider" :to="{name:'contact'}" >Contact</router-link> -->

                                        <router-link class="font-sans hover:font-serif text-black hover:text-primary-color mx-3 text-lg hover:text-xl font-normal tracking-wider" v-for="nav of NavList" :key="nav" :to=nav.path>{{nav.name }}</router-link>
                                </div>
                                <div class="w-3-1 p-3 ">
                                        <h3>Test</h3>
                                </div>
                        </div>
                </div>
        </div>
        
</template>

<script setup >
import TopBar from './TopBar.vue'

const NavList = [
        {name:'Home', path:'/'},
        {name:'About', path:'/about'},
        {name:'Contact', path:'/contact'},
        {name:'BookList', path:'/booklist'},
        {name:'Products', path:'/allProduct'},

]














//import routes from '../../router/routes.js'
// const NavList = routes.map((routes) => {
//         return routes
// })

</script>
