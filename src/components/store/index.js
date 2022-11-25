import { createStore } from "vuex";
import { LoginModule } from "./LoginModule";

export default createStore({
    modules:{
        auth:LoginModule
    }
})