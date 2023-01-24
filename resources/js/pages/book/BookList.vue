<template>
    <div>
        <div class="">
            <div class="flex"> 
                <h2 class="text-2xl text-center"> All Book List Item </h2>
            </div>
            <div class="flex flex-wrap mx-auto justify-center gap-2 my-5">
                <!-- <a href="#" class="flex flex-col items-center p-1 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 " v-for="book of BookList" :key="book">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg transition-all duration-200 cursor-pointer filter grayscale hover:grayscale-0 " :src="book.Img" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary-color">{{ book.name }}</h5>
                        <p class="mb-3 font-normal text-gray-700 text-justify ">{{ book.description }}</p>
                    </div>
                </a> -->
                <Card 
                v-for="product in products" 
                :key="product" 
                :name="product.name"
                :image="product.image"
                :author="product.author"
                :owner="product.owner"
                :expectedPrice="product.expectedPrice"
                :description="product.description"
                /> 
                <!-- product.map((product) => {
                    return <Card 
                    :name="product.name"
                    :image="product.image"
                    :author="product.author"
                    :owner="product.owner"
                    :expectedPrice="product.expectedPrice"
                    :description="product.description"
                    />
                })
                 -->
            </div>
        </div>
    </div>
</template>

<script setup>
import Card from '../../components/card/Card.vue';

// const BookLists = [
//             {
//                 id: 1,
//                 name: 'Kajal',
//                 Img:"http://127.0.0.1:5173/resources/assets/book/kajal.jpg",
//                 description:'This is a book about Kajal',
//             },
//             {
//                 id: 2,
//                 name: 'Tritiyo Purush',
//                 Img: 'http://127.0.0.1:5173/resources/assets/book/tritiyo-purursh.jpg',
//                 description:'This is a book about Tritiyo Purush',
//             },
//             {
//                 id: 3,
//                 name: 'Kajal',
//                 Img:"http://127.0.0.1:5173/resources/assets/book/kajal.jpg",
//                 description:'This is a book about Kajal',
//             },
//             ]

// useEffect(() => {
//     fetch('/api/product')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
// }, [])

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