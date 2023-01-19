<script setup>
import Header from "../components/header/Header.vue";
import Footer from "../components/footer/Footer.vue";

</script>

<template>
    <div class="">
        <Header/>
        
        <div class="bg-stone-200">
                <router-view v-slot="{Component, route}">
                    <div :key="route.path">
                        <Component :is="Component"/>
                    </div>
                </router-view>
        </div> 
        <Footer/>

    </div>

</template>

