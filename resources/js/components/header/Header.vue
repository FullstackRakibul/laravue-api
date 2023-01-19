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

                <!-- Nav menu start from here -->
                <nav class="fixed top-0 left-0 bg-white w-full shadow z-50">
                        <div class="container m-auto flex justify-between item-center text-primary-color">
                                <h1 class="pl-8 py-4 text-xl font-semibold">Boi Haat</h1>
                                <ul class=" hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
                                    <li class="hover:bg-gray-300 py-4 px-8 ">Home</li>
                                    <li class="hover:bg-gray-300 py-4 px-8 ">Home</li>
                                    <li class="hover:bg-gray-300 py-4 px-8 ">Home</li>
                                    <li class="hover:bg-gray-300 py-4 px-8 ">Home</li>
                                </ul>
                                <button class=" block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-100 group  ">
                                        <ion-icon name="grid"></ion-icon>
                                        <div class="absolute top-0 -right-full opacity-0 h-screen w-8/12 bg-white border transform group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                                        <ul class="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                                                <li class="hover:bg-gray-200 py-4 px-6 w-full">Home</li>

                                        </ul>

                                        

                                        </div>
                                </button>
                        </div>
                </nav>
                <!--Navmenu ends here-->
                <!--Ends-->
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
