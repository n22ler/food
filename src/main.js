import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import components from "@/components/UI";
import Particles from "vue3-particles";

document.title = 'Food App'
const app = createApp(App)

components.forEach(component=>{
    app.component(component.name, component)
})

app
    .use(Particles)
    .use(store)
    .use(router)
    .mount('#app')
    


