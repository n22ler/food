<template>
    <div class="auth">
        <form class="auth__form" @submit.prevent>
            <label v-if="this.errors?.username == null" for="nickname">Укажите Логин</label>
            <label v-if="this.errors?.username != null" class="errors" for="mail">{{this.errors?.username[0]}}</label>
            <input v-model="username" type="text" name="nickname">
            <label v-if="this.errors?.email == null" for="mail">Укажите E-mail</label>
            <label v-if="this.errors?.email != null" class="errors" for="mail">{{this.errors?.email[0]}}</label>
            <input v-model="email" type="email" name="mail">
            <label v-if="this.errors?.password == null" for="pass">Задайте пароль</label>
            <label v-if="this.errors?.password != null" class="errors" for="pass">{{this.errors?.password[0]}}</label>
            <input v-model="password" type="password" name="pass">
            <button @click="goRegister">Войти</button>
            <!-- Сделать попап об активации email -->
        </form>
    </div>
</template>

<script>
import store from "@/store";
import router from "@/router"
    export default {
        data(){
            return{
                username:"",
                password:"",
                email:"",
                errors:{},
            }
        },
        methods:{
            async goRegister(){
                const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "username": this.username,
                                        "email": this.email,
                                        "password": this.password
                })
            };
            const response = await fetch("http://"+process.env.VUE_APP_API+":8000/api/auth/users/", requestOptions);
            this.errors= await response.json();
            store.commit('auth/setUserId', this.errors.id)
            localStorage.id = this.errors.id
            if(response.status ==201){
                console.log(this.errors)
                const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({  "id": this.errors.id,
                                        "email": this.errors.email,
                })};
                const response = await fetch("http://"+process.env.VUE_APP_API+":8000/api/user/"+this.errors.id+"/", requestOptions);
                this.errors= await response.json();
                console.log(this.errors)
                    if(response.status ==201){
                    router.push('/')
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.auth{
    overflow: hidden;
    transition: 1s;
}
.errors{
    font-weight: 600;
    color:$mainTwo
}
.auth__form{
    border-radius: 5px;
    display: flex;
    margin: auto;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid $mainOne;
    padding: 10px 25px 25px 25px;
    height: fit-content;
    background: $back;
    -webkit-animation: slide-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: slide-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
.auth__form:hover{
    border: 2px solid $accentTwo;
    transition: 0.5s;
}
label{
    font-size: 12px;
    font-weight: 500;
    color: $accentOne;
    max-width: 300px;
}
label:nth-child(odd){
    margin-top: 15px;
}
button{
    margin-top: 20px;
    padding: 16px 32px;
    border: none;
    border-radius: 5px;
    background: $mainOne;
    color: $accentOne;
    transition: 0.5s;
}
button:hover{
    border-radius: 30px;
    transition: 0.3s;
    background: $accentTwo;
    color:$mainOne;
}

input{
    border: 1px solid;
    margin-top: 5px;
    width: 300px;
    padding: 10px 20px;
    border-radius: 5px;
    border: 2px solid $mainOne;
    color: $back;
    transition: 0.5s;
}
input:focus-visible{
    outline: 1px solid $accentTwo;;
    border: 2px solid $accentTwo;
    border-radius: 30px;
    transition: 0.3s;
    padding: 10px 20px;
}
input:hover{
    outline: 1px solid $accentTwo;;
    border: 2px solid $accentTwo;
    border-radius: 30px;
    transition: 0.3s;
}

</style>