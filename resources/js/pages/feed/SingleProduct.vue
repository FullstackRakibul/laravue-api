<template>
    <div>

        <!-- Product Page design with tailwind css start-->
        <div class="container p-5">
            <form action="submit">
                            <div class="flex flex-wrap bg-white my-5 rounded-md">
                    <div class=" p-5 flex flex-col items-start lg:w-1/2 md:w-full">
                        <div class="flex items-center pr-10 space-x-2">
                            <span class="text-3xl text-primary-color font-semibold">01</span>
                            <span class="text-xl text-secondary-color font-normal">/04</span>
                        </div>
                        <div class="flex pr-10 space-x-16">
                            <button class="p-3">&#8592;</button>
                            <button class="p-3">&#8594;</button>
                        </div>
                        <img class="rounded-sm p-10 w-full h-full object-cover" :src="product.image"   alt="Product Image"/>
                        <!-- <div class=" absolute pl-1 w-[440px] h-[200px] bg-gradient-to-r from-transparent to-primary-color top-52 right-0" /> -->
                        <div class="flex pt-5 pr-20 space-x-4">
                            <div class="w-24 h-24 border-2 border-primary-color p-1 rounded-md">
                                <img class="w-full h-full object-cover" :src="product.image"   alt="Product Image"/>
                            </div>
                            <div class="w-24 h-24 border-2 border-primary-color p-1 rounded-md">
                                <img class="w-full h-full object-cover" :src="product.image"   alt="Product Image"/>
                            </div>
                            <div class="w-24 h-24 border-2 border-primary-color p-1 rounded-md">
                                <img class="w-full h-full object-cover" :src="product.image"   alt="Product Image"/>
                            </div>
                            <div class="w-24 h-24 border-2 border-primary-color p-1 rounded-md">
                                <img class="w-full h-full object-cover" :src="product.image"   alt="Product Image"/>
                            </div>
                        </div>
                </div>

                <div class=" p-5 rounded flex flex-col lg:w-1/2 md:w-full">
                <div class="max-w-md">
                    <div class="flex item-center text-sm pt-9">
                        <span class="text-secondary-color">Book &nbsp;</span>
                        <span class="text-primary-color">/ Single Book</span>
                    </div>
                    <div class="pt-10">
                        <h1 class=" text-3xl font-light text-primary-color tracking-wide">{{ product.name }}</h1>
                    </div>
                    <div class="flex items-center justify-between pt-4">
                        <span class="text-2xl">৳ {{ product.expectedPrice }}</span>
                        <div>
                            <div class="flex space-x-px">
                                <img src="../../../assets/star.png" alt="">
                                <img src="../../../assets/star.png" alt="">
                                <img src="../../../assets/star.png" alt="">
                                <img src="../../../assets/star.png" alt="">
                                <img src="../../../assets/star.png" alt="">
                                <span class="text-xs ml-2 text-primary-color font-semibold">156 Reviews</span>
                            </div>
                        </div>

                    </div>
                    <div class=" bg-bgcolor p-5">
                        <p class="font-normal text-secondary-color"> Owner Name : {{ product.owner }}</p>
                        <p>Author Namae : {{ product.author }}</p>
                    </div>
                    <div class="flex pt-8 space-x-4">
                        <button class="w-5 h-5 rounded-full bg-slate-600 hover:shadow-md"></button>
                        <button class="w-5 h-5 rounded-full bg-red-600 hover:shadow-md"></button>
                        <button class="w-5 h-5 rounded-full bg-lime-700 hover:shadow-md"></button>
                        <button class="w-5 h-5 rounded-full bg-emerald-800 hover:shadow-md"></button>
                    </div>
                    <div class="flex space-x-6 pt-9">
                        <div class="flex flex-auto items-center">
                            <input class=" text-secondary-color w-full h-full text-center rounded-md outline-none border border-primary-color "
                         type="text"/>
                        </div>
                        <button type="submit" class="py-4 text-sm uppercase px-14 font-normal text-white bg-primary-color hover:bg-white border hover:border-primary-color hover:shadow-sm hover:text-primary-color rounded-md ">
                            Create Offer
                        </button>
                    </div>
                    <div class="pt-8">
                        <p class="text-secondary-color ">2 Days delivery .</p>
                    </div>
                    <div>
                        <button class="flex flex-row gap-3 pt-6 hover:text-primary-color">
                            <span><img src="../../../assets/add-to-favorites.png" alt=""/></span>
                            <span>Add to Wishlist</span> 

                        </button>
                    </div>
                </div>
                </div>

            </div>
            </form>

        </div>
        <!-- Product Page design with tailwind css end-->




        
    </div>
</template>

<script setup>

const count = 1;

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
            product: [],
            value:0
        }
    },
    mounted() {
        axios
        .get(`/api/product/${this.$route.params.id}`)
        .then((response) => {
            this.product = response.data
        })
    },
    methods: {
        increment() {
            this.value +=1;
        },
        decrement() {
            this.value -=1;
        }
    },
    
    
}
</script>






