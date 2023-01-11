import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from 'node:url';


export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        vue({
            template: {
                compilerOptions: {
                  isCustomElement: (tag) => ['md-linedivider'].includes(tag),
                }
              }
            }),
    ],
    // resolve:{
    //   alias:{
    //     '@':fileURLToPath(new URL('./resources',import.meta.url))
    //   }
    // }
});
