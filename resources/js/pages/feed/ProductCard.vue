<template>
    <div>
        <div class="flex flex-wrap gap-2 my-2 border border-purple-300 p-3 hover:shadow-md rounded-md">
            <div class=" bg-slate-300 rounded-md">
                <img src="props.image" class="w-40 rounded-md" alt="">
            </div>
                <div class="flex-auto items-start my-2">
                    <router-link :to="{name:'singleProduct', params:{id:id}}" >
                        <h1 class="text-2xl font-bold text-left md:text:md text-primary-color">{{ props.name }}</h1>
                    </router-link>
                        <p>{{ props.id }}</p>
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
                        <div>
                            <p>{{ props.description }}</p>
                        </div>
                    
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