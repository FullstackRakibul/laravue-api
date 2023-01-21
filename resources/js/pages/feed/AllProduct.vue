<template>
    <div>

        <div class=" container flex flex-wrap gap-2 py-2">
            <!-- <div class=" h-96 bg-primary-color rounded-md w-32 text-white">
                <h2 class="text-xl text-black">Find in Genres</h2>
                <ul class="list-disc">
                    <li><a href="#" class="hover:text-black hover:ml-2">Adventure</a></li>
                    <li><a href="#" class="hover:text-black hover:ml-2">Biography</a></li>
                    <li><a href="#" class="hover:text-black hover:ml-2">Business</a></li>
                    <li><a href="#" class="hover:text-black hover:ml-2">Children</a></li>
                    <li><a href="#" class="hover:text-black hover:ml-2">Comics</a></li>
                    <li><a href="#" class="hover:text-black hover:ml-2">Cooking</a></li>
                    <li><a href="#" class="hover:text-black hover:ml-2">Crime</a></li>
                    <li><a href="#" class="hover:text-black hover:ml-2">Drama</a></li>
                    <li><a href="#" class="hover:text-black hover:ml-2">Fantasy</a></li>
                </ul>
            </div> -->
            <h2 class="text-secondary-color text-2xl">Selling Post</h2>
            <div class=" flex flex-wrap justify-center gap-3">
                <ProductCard 
                v-for="product in products" 
                :id="product.id"
                :key="product" 
                :name="product.name"
                :image="product.image"
                :author="product.author"
                :owner="product.owner"
                :expectedPrice="product.expectedPrice"
                :description="product.description"
                
                />
            </div>
            <!-- <div class="h-96 bg-primary-color rounded-md p-2 w-32 text-white">
                <h2 class="text-xl text-black">Find in Your City</h2>
                <ul class="list-disc">
                    <li><a href="#" class="hover:text-black hover:ml-2">Dhaka</a></li>
                    <li><a href="#" class="hover:text-black hover:ml-2">Chittagong</a></li>
                    <li><a href="#" class="hover:text-black hover:ml-2">Khulna</a></li>
                    <li><a href="#" class="hover:text-black hover:ml-2">Barisal</a></li>
                    <li><a href="#" class="hover:text-black hover:ml-2">Sylhet</a></li>
                    <li><a href="#" class="hover:text-black hover:ml-2">Rajshahi</a></li>
                    <li><a href="#" class="hover:text-black hover:ml-2">Rangpur</a></li>
                    <li><a href="#" class="hover:text-black hover:ml-2">Mymensingh</a></li>
                </ul>
            </div> -->
        </div>
        
    </div>
</template>

<script setup>

import ProductCard from './ProductCard.vue';


// const product = new Promise ((resolve, reject) => {
//     console.log(resolve,'Product is being prepared')
//     console.log(reject,'Product is not ready')
//     setTimeout(() => {
//         resolve('Product is ready')
//     }, 300)

// })
// console.log(product)


  

// const products = axios.get('/api/product').then(response => {
//     return response.data


//     data() {
//     return {
//       products: []
//     }
//   },
//     mounted() {
//         axios
//         .get('/api/product')
//         .then((response) => {
//             this.products = response.data
//         })
//     }
// })





</script>

<script>
export default {
    data() {
        return {
            products:[]
        }
    },
    mounted() {
        axios
        .get('/api/product')
        .then((response) => {
            this.products = response.data.data
        })
    }
}
</script>