<template>
    <div class="auth">
        <form class="auth__form" action="post">
            <label for="nickname">Укажите Имя</label>
            <input type="text" name="nickname">
            <label for="mail">Укажите E-mail</label>
            <input type="email" name="mail">
            <label for="pass">Задайте пароль</label>
            <input type="password" name="pass">
            <button type="submit">Войти</button>
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.auth{
    overflow: hidden;
    transition: 1s;
}
.auth__form{
    display: flex;
    margin: auto;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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