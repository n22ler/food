
import router from "@/router"
export const LoginModule = {
    state:()=>({
        login:'',
        password:'',
        userId:null,
        errors:[],
        token:localStorage.getItem('token')|| null,
        isAuth:localStorage.token|| false,
    }),
    getters:{ //computed()
        getToken(state){
            return state.token
        },
    },
    mutations:{ //commit для вызова из компонента
        setIsAuth(state,bool){
            state.isAuth=bool
        },
        setErrors(state,value){
            state.errors = value
        },
        setToken(state,value){
            state.token = value;
            localStorage.setItem('token', value)
        },
        setLogin(state,event){
            state.login = event.target.value
        },
        setPassword(state,event){
            state.password = event.target.value

        },
        deleteToken(state, event){
            state.token = event
        },
        setUserId(state, event){
            state.userId = event
        }
    },
    actions:{
        async goLogin({state, commit}){

            const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({  "username": state.login,
                                    "password": state.password
            })
        };
        const response = await fetch("http://"+process.env.VUE_APP_API+":8000/auth/token/login/", requestOptions);

        commit('setErrors', await response.json())

            if(response.status ==200){
                console.log(response)
                localStorage.token = state.errors.auth_token
                commit('setToken', state.errors.auth_token)
                localStorage.isAuth = true
                state.isAuth = true                
            } 
        router.push('/profile')
        },
        goExit({commit,state}){
            commit('deleteToken', null)
            delete localStorage.isAuth
            delete localStorage.token
            state.isAuth = false
            router.push('/')
        }
    },
    namespaced: true,
}