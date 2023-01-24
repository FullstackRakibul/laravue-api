<script setup>
import Header from "../components/header/Header.vue";
import Footer from "../components/footer/Footer.vue";
import Sidebar from "../components/header/Sidebar.vue";
import TopBar from "../components/header/TopBar.vue";

</script>

<template>
    <div class="">
        <div class="w-full h-full flex">
                <Sidebar/>
                <div class="w-full h-full">
                    <TopBar/>
                    <div class="w-full h-[cal(100vh-50px)] p-3">
                        <router-view v-slot="{ Component, route }">
                            <div :key="route.path">
                                <Component :is="Component"/>
                            </div>
                        </router-view>
                    </div>
                </div>
        </div> 
        <Footer/>

    </div>

</template>

