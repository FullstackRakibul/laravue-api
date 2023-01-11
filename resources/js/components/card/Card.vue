<template>
    <div>
        <a href="#" class="flex flex-col items-center p-1 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 ">
            <div class=" bg-slate-300 rounded-md">
                <img src="props.image" class="w-40 rounded-md" alt="">
            </div>

            <div class="flex flex-col justify-between p-4 leading-normal">
                
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary-color hover:text-green-700">{{props.name}}</h5>
                <p class="mb-3 font-normal text-gray-700 text-justify ">{{props.description}}</p>
                <div class="flex flex-wrap gap-3">
                        <span class="text-secondary-color">Author</span>
                        <span>:</span>
                        <span>{{props.author}}</span>
                    </div>
                    <div class="flex flex-wrap gap-3">
                        <span class="text-secondary-color">Owner</span>
                        <span class="">:</span>
                        <span>{{ props.owner }}</span>
                    </div>
                <div class="flex flex-wrap gap-3">
                    <span class="text-secondary-color">Expected Price</span>
                    <span class=""> : </span>
                    <span class="text-primary-color">৳ {{ props.expectedPrice }}</span>
                </div>
                <div class="flex flex-wrap gap-3">
                    <span class="text-secondary-color">Offer Price</span>
                    <span class=""> : </span>
                    <span class="text-primary-color">
                        <input type="text" class=" border border-b-primary-color">
                    </span>
                </div>
                <div class="flex flex-wrap gap-3">
                    <span class="">
                        <button class="bg-primary-color p-2 rounded-md hover:shadow-md text-white">Buy Now</button>
                    </span>
                    <span class="">
                        <button class="text-primary p-2 ">Buy Later</button>
                    </span>
                </div>
            </div>
        </a>
    </div>
</template>


<script setup>
 
 const props = defineProps({
    name:String,
    image :String,
    description:String,
    author:String,
    owner:String,
    expectedPrice:String,
 }); 


// import { ref } from 'vue';

// const name = ref('Test Name');

// const BookList = {
//     data() {
//         return[
//             {
//                 id: 1,
//                 name: 'Kajal',
//                 Img: '../../../assets/book/kajal.jpg',
//                 description:'This is a book about Kajal',
//             },
//             {
//                 id: 2,
//                 name: 'Tritiyo Purush',
//                 Img: '../../../assets/book/tritiyo-purursh.jpg',
//                 description:'This is a book about Tritiyo Purush',
//             }
//         ]
//     },
// }

// const BookList = [
//             {
//                 id: 1,
//                 name: 'Kajal',
//                 Img: '../../../assets/book/kajal.jpg',
//                 description:'This is a book about Kajal',
//             },
//             {
//                 id: 2,
//                 name: 'Tritiyo Purush',
//                 Img: '../../../assets/book/tritiyo-purursh.jpg',
//                 description:'This is a book about Tritiyo Purush',
//             }
//             ]


</script>