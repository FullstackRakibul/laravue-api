import Home from  '../pages/home/Home.vue';
import About from  '../pages/about/About.vue';
import Contact from  '../pages/contact/contact.vue';
import NotFound from  '../pages/NotFound.vue';
import BookList from '../pages/book/BookList.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home ,
    },
    {
        path: '/about',
        name: 'about',
        component: About ,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact ,
    },
    {
        path: '/booklist',
        name: 'booklist',
        component: BookList ,
    },
    {
        path:'/allProduct',
        name:'allProduct',
        component: () => import('../pages/feed/AllProduct.vue')
    },
    {
        path:'/singleproduct/:id',
        name:'singleProduct',
        component: () => import('../pages/feed/SingleProduct.vue')
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    },
];

export default routes;