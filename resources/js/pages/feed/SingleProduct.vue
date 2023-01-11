<template>
    <div>
        <div class="flex flex-wrap gap-2 my-2 border border-purple-600 p-3 hover:shadow-md rounded-md">
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
        </div>
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






