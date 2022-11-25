export const LoginModule = {
    state:()=>({
        isAuth:false,
        login:'',
        password:'',
        errors:[],
        token:''
    }),
    getters:{ //computed()
    },
    mutations:{ //commit для вызова из компонента
        setIsAuth(state,bool){
            state.isAuth=bool
        },
        setErrors(state,value){
            state.errors = value
        },
        setToken(state,value){
            state.token = value
        },
        setLogin(state,value){
            state.login = value
        },
        setPassword(state,value){
            state.password = value
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
        const response = await fetch("http://127.0.0.1:8000/auth/token/login/", requestOptions);
        commit('setErrors', await response.json())
            if(response.status ==200){
                commit('setToken', response.auth_token)
                commit('setIsAuth', true)
            }
        }
    },
    namespaced: true
}