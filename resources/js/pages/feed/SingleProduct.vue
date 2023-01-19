<template>
    <div>

<!-- Treditional Product Page design start from here -->
        <!-- <form action="submit" class=" mx-auto p-5">
            <div class="container bg-white flex flex-wrap justify-around gap-3 border border-primary-color rounded-md  p-5">
                <div class="p-3">
                    <img class="border border-primary-color shadow-md rounded-md p-2" width="300" :src="product.image"   alt="Product Image">
                </div>
                <div class="p-3">
                    <h2 class="font-semibold text-2xl mb-2 text-primary-color">{{product.name}}
                    </h2>
                    <div class="flex flex-wrap">
                        <span class="w-5/12 text-secondary-color">Author</span>
                        <span class="w-2/12">:</span>
                        <span class="w-5/12">{{ product.author }}</span>
                    </div>
                    <div class="flex flex-wrap">
                        <span class="w-5/12 text-secondary-color">Owner</span>
                        <span class="w-2/12">:</span>
                        <span class="w-5/12">{{product.owner}}</span>
                    </div>
                    <div class="flex flex-wrap">
                        <span class="w-5/12 text-secondary-color">Expected Price</span>
                        <span class="w-2/12">:</span>
                        <span class="w-5/12 text-primary-color text-xl">৳ {{ product.expectedPrice }}</span>
                    </div>
                    <div class="flex flex-wrap">
                        <span class="w-5/12 text-secondary-color">Offer Price</span>
                        <span class="w-2/12">:</span>
                        <span class="w-5/12 text-primary-color text-xl">
                            <input type="text" class=" border border-b-primary-color">
                        </span>
                    </div>
                    <div class="flex flex-wrap justify-around gap-2 p-3">
                        <button type="submit" class="p-1.5 rounded-md px-3 bg-primary-color text-white border hover:border-primary-color hover:bg-white hover:text-black">Offer now</button>
                    </div>
                    
                    <div class="">
                        <div class="flex flex-wrap">
                            <h3 class="text-secondary-color">Description</h3>
                            <p>{{ product.description }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </form> -->

<!-- Treditional Product page design ends Here -->

        <!-- <div class="flex flex-wrap gap-2 my-2 border border-purple-600 p-3 hover:shadow-md rounded-md">
            <div class=" max-w-xs flex flex-wrap rounded overflow-hidden shadow-lg mx-auto bg-orange-500">
                <v-if status=flase>
                    <img class=" w-6/12 " src="../../../assets/book/kajal.jpg" alt="Product Image">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{{ product.name }}</div>
                        <p class="text-gray-700 text-base">
                        {{props.description}}
                        </p>
                        <p>Product Id  : {{ product.id }}</p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Author</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{ product.author }}</span>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Price</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{ product.expectedPrice }}</span>
                    </div>

                    <div class="px-6 py-4">
                        <span><button class="p-2 mx-2 bg-white hover:shadow-md rounded-md hover:rounded-xl ">Buy Now</button></span>
                        <span><button class="p-2 mx-2 bg-gray-300">Add to Cart</button></span>
                    </div>

                </v-if>
            </div>
        </div> -->


        <!-- profession card design with tailwind css start-->

        <div class="container py-5 mx-auto">
            <div class="card">
                <!-- product Image -->
                <img class="w-full h-full object-cover" :src="product.image"   alt="Product Image">
                <!-- product details -->
                <div class="py-5 px-2 flex flex-col gap-2">
                    <!-- product tile-->
                    <h2 class="product-title" title="{{ product.name }}">
                    {{ product.name }}
                    </h2>
                    <div class="flex items-center gap-2">
                        <span class="badge">{{ product.author }} </span>
                        <span class="badge">{{ product.owner }} </span>
                        
                    </div>
                <!-- product price -->
                <div class="product-price">
                    <span class="price">৳ {{ product.expectedPrice }}</span>
                    <div class="flex items-center gap-2 mt-1">
                        <span class="text-sm line-through opacity-50"> ৳ 500 </span>
                        <span class="discount-badge"> save 20%</span>
                    </div>
                    <!-- product rating -->
                    <span class="flex item-center mt-1">
                        <img src="../../../assets/star.png" alt="">
                        <img src="../../../assets/star.png" alt="">
                        <img src="../../../assets/star.png" alt="">
                        <img src="../../../assets/star.png" alt="">
                        <img src="../../../assets/star.png" alt="">
                        <span class="text-xs ml-2 text-gray-500">156 Reviews</span>
                    </span>

                    <!-- Product action Button -->

                    <div class="mt-5 flex gap-2">
                        <button class="buy-now">
                            Buy Now
                        </button>
                        <button class="wishlist">
                            <img class="" src="../../../assets/add-to-favorites.png" alt="">
                        </button>
                        <button class="wishlist">
                            <img class="" src="../../../assets/commit-git.png" alt="">
                        </button>
                    </div>
                </div>

                </div>
            </div>

        </div>
        <!-- profession card design with tailwind css end-->




        
    </div>
</template>

<script setup>

const props = defineProps({
    id:Number,
    name:String,
    image:String,
    author:String,
    owner:String,
    expectedPrice:String,
    description:String,
    

})
</script>

<script>


export default {
    
    data() {
        return {
            product:[]
        }
    },
    mounted() {
        axios
        .get(`/api/product/${this.$route.params.id}`)
        .then((response) => {
            this.product = response.data
        })
    }
}
</script>






