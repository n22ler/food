<template>
    <div class="navbar">
        <div class="navbar__container">
            <div @click="$router.push('/')" class="">
                Тут лейбл
            </div>
            <div class="navbar__btns">
                <ButtonUI @click="$router.push('/auth')">Профиль</ButtonUI>
                <ButtonUI @click="$router.push('/')">Калькулятор</ButtonUI>
                <ButtonUI @click="$router.push('/profile')">Статистика</ButtonUI>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonUI from './ButtonUI.vue';
    export default {
    components: { ButtonUI }
}
</script>

<style lang="scss" scoped>
.navbar{
    max-width: 1380px;
    margin: auto;
    border: 2px solid $mainOne;
    border-top: none;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    padding: 20px 50px;
    max-height: 120px;
    background: $back;
}
.navbar:hover{
    border: 2px solid $mainTwo;
    border-top: none;
    transition: 0.5s;
}
.navbar__btns{
    margin-left: auto;
    max-width: 450px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.navbar__container{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
