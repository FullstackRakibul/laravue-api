<template>
    <div class="animate__fadeInUp">
        <div class="p-2 border border-orange-300 rounded-sm ">
            <img src="https://scholarlykitchen.sspnet.org/wp-content/uploads/2017/03/iStock-507071472.jpg" alt="" class="w-full h-96 object-cover rounded-sm">

        </div>

        <div class=""> 
            <h2 class="text-2xl text-gray-800 my-3 font-semibold">Book Categories</h2>
        </div>
        <div class="my-5 border p-5 border-red-900 rounded-md flex justify-between gap-1"> 
            <div class="w-1/6 border border-red-300 rounded-sm p-2 mx-1 hover:bg-red-300 hover:border-primary-color flex flex-col justify-start items-center">
                <img class="my-2" src="https://cdn-icons-png.flaticon.com/512/562/562132.png" width="100" height="100" alt="">
                <h2 class="text-xl">Academic Book</h2>
            </div>

            <div class="w-1/6 border border-red-300 rounded-sm p-2 mx-1 hover:bg-red-300 hover:border-primary-color flex flex-col justify-start items-center">
                <img class="my-2" src="https://cdn-icons-png.flaticon.com/512/562/562132.png" width="100" height="100" alt="">
                <h2 class="text-xl">History Book</h2>
            </div>

            <div class="w-1/6 border border-red-300 rounded-sm p-2 mx-1 hover:bg-red-300 hover:border-primary-color flex flex-col justify-start items-center">
                <img class="my-2" src="https://cdn-icons-png.flaticon.com/512/562/562132.png" width="100" height="100" alt="">
                <h2 class="text-xl">Horror Book</h2>
            </div>

            <div class="w-1/6 border border-red-300 rounded-sm p-2 mx-1 hover:bg-red-300 hover:border-primary-color flex flex-col justify-start items-center">
                <img class="my-2" src="https://cdn-icons-png.flaticon.com/512/562/562132.png" width="100" height="100" alt="">
                <h2 class="text-xl">Ramantic Book</h2>
            </div>

            <div class="w-1/6 border border-red-300 rounded-sm p-2 mx-1 hover:bg-red-300 hover:border-primary-color flex flex-col justify-start items-center">
                <img class="my-2" src="https://cdn-icons-png.flaticon.com/512/562/562132.png" width="100" height="100" alt="">
                <h2 class="text-xl">Children Book</h2>
            </div>

            <div class="w-1/6 border border-red-300 rounded-sm p-2 mx-1 hover:bg-red-300 hover:border-primary-color flex flex-col justify-start items-center">
                <img class="my-2" src="https://cdn-icons-png.flaticon.com/512/562/562132.png" width="100" height="100" alt="">
                <h2 class="text-xl">Adventure Book</h2>
            </div>
        </div>

        <div class=""> 
            <h2 class=" text-2xl md:text-sm text-gray-800 my-3 font-semibold"> Best Selling Novel </h2>
        </div>
        <div class="my-5 border p-5 border-red-900 rounded-md flex justify-between gap-1"> 
            <div class="w-1/6 border border-red-300 rounded-sm p-2 mx-1 hover:bg-red-300 hover:border-primary-color flex flex-col justify-start items-center">
                <img class="my-2" src="https://cdn-icons-png.flaticon.com/512/562/562132.png" width="100" height="100" alt="">
                <h2 class="text-xl">Academic Book</h2>
            </div>

            <div class="w-1/6 border border-red-300 rounded-sm p-2 mx-1 hover:bg-red-300 hover:border-primary-color flex flex-col justify-start items-center">
                <img class="my-2" src="https://cdn-icons-png.flaticon.com/512/562/562132.png" width="100" height="100" alt="">
                <h2 class="text-xl">History Book</h2>
            </div>

            <div class="w-1/6 border border-red-300 rounded-sm p-2 mx-1 hover:bg-red-300 hover:border-primary-color flex flex-col justify-start items-center">
                <img class="my-2" src="https://cdn-icons-png.flaticon.com/512/562/562132.png" width="100" height="100" alt="">
                <h2 class="text-xl">Horror Book</h2>
            </div>

            <div class="w-1/6 border border-red-300 rounded-sm p-2 mx-1 hover:bg-red-300 hover:border-primary-color flex flex-col justify-start items-center">
                <img class="my-2" src="https://cdn-icons-png.flaticon.com/512/562/562132.png" width="100" height="100" alt="">
                <h2 class="text-xl">Ramantic Book</h2>
            </div>

            <div class="w-1/6 border border-red-300 rounded-sm p-2 mx-1 hover:bg-red-300 hover:border-primary-color flex flex-col justify-start items-center">
                <img class="my-2" src="https://cdn-icons-png.flaticon.com/512/562/562132.png" width="100" height="100" alt="">
                <h2 class="text-xl">Children Book</h2>
            </div>

            <div class="w-1/6 border border-red-300 rounded-sm p-2 mx-1 hover:bg-red-300 hover:border-primary-color flex flex-col justify-start items-center">
                <img class="my-2" src="https://cdn-icons-png.flaticon.com/512/562/562132.png" width="100" height="100" alt="">
                <h2 class="text-xl">Adventure Book</h2>
            </div>
        </div>
        <BookList/>




    </div>
</template>

<script  setup>
import BookList from "../book/BookList.vue"
</script>