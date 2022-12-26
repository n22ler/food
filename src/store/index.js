import { createStore } from "vuex";
import { LoginModule } from "./LoginModule";
//сделать единый метод коннекта, в него передавать запрос, данные, урл.
export default createStore({
    modules:{
        auth: LoginModule
    }
})