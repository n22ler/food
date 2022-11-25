<template>
    <div class="auth">
        <form class="auth__form" @submit.prevent>
            <!-- <span class="errors" style="margin-bottom:10px; max-width:300px" v-if="errors.non_field_errors!=null">Не совпадают Логин И пароль</span> -->
            <label for="mail">Введите Логин</label>
            <input
                :model-value="login"
                @update:model-value="setLogin"
                type="email"
                name="mail">
            <label for="pass">Введите пароль</label>
            <input
                :model-value="password"
                @update:model-value="setPassword"
                type="password"
                name="pass"
                >
            <a @click="$router.push('/registration')">Зарегистрироваться</a>
            <button @click="goLogin" type="submit">Войти</button>
        </form>
    </div>
</template>

<script>
import {mapActions,mapGetters,mapMutations,mapState} from 'vuex'
    export default {
        data(){
            return{

            }
        },
        methods:{
            ...mapMutations({
                setLogin: 'auth/setLogin',
                setPassword: 'auth/setPassword'
            }),
            ...mapActions({
                goLogin: 'auth/goLogin'
            })
        },
        computed:{
            ...mapState({
                isAuth: 'auth/isAuth',
                login: 'auth/login',
                password: 'auth/password',
                errors: 'auth/errors',
                token: 'auth/token'
            }),
            ...mapGetters({

            })
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
    display: flex;
    margin: auto;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    border: 2px solid $mainOne;
    padding: 25px;
    height: fit-content;
    background: $back;
    -webkit-animation: slide-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: slide-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    
}
.auth__form:hover{
    border: 2px solid $accentTwo;
}
label{
    font-size: 12px;
    font-weight: 500;
    color: $accentOne;
}
label:nth-child(odd){
    margin-top: 15px;
}
a{
    margin: 20px 0;
    color: $accentOne;
    font-weight: 700;
    
}
a:hover{
    color:$mainTwo;
    cursor: pointer;
}
button{
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