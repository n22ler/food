<template>
    <div class="profile">
        <div class="profile__container">
            <div class="profile__content">
                <p>Почта:  <span class="">{{profile.email}}</span></p>
                <br><br>
                <p>Никнейм:  <span class="">{{profile.username}}</span></p>
            </div>
            <ButtonUI @click="goExit">Выйти из аккаунта</ButtonUI>
        </div>
        <!-- Имя фамилия кнопка выйти -->
    </div>
</template>

<script>
import ButtonUI from '@/components/UI/ButtonUI.vue';
import store from '@/store';
import axios from 'axios'
import { mapActions} from 'vuex';
    export default {
    data() {
        return {
            profile: {},
            token: store.getters["auth/getToken"]
        };
    },
    methods: {
        async fetchProfile() {
            try {
                const requestOptions = {
                    method: "GET",
                    headers: { "Content-Type": "application/json", "Authorization": "Token " + this.token },
                };
                const response = await axios.get("http://" + process.env.VUE_APP_API + ":8000/api/auth/users/me/", requestOptions);
                this.profile = response.data;
            }
            catch (e) {
                alert("Не отрабатывает");
            }
        },
        ...mapActions({
            goExit: "auth/goExit"
        })
    },
    mounted() {
        this.fetchProfile();
    },
    components: { ButtonUI }
}
</script>

<style lang="scss" scoped>
.profile{
    display: flex;
    flex-direction: row;
    overflow: hidden;
    transition: 1s;
    
}
.profile__container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    max-width: 50vw;
    width: fit-content;
    border: 2px solid $mainOne;
    padding: 25px;
    border-radius: 25px;
    background-color: $back;
    -webkit-animation: slide-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: slide-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
.profile__container:hover{
    border: 2px solid $accentTwo;
    transition: 0.5s;
}
.profile__content{
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    width: 300px;
}
p{
    color: $accentOne;
    display: flex;
    justify-content: space-between;

}
p:nth-child(even){
    margin-top: 10px;
}
p>span{
    font-size: 16px;
    color: $mainTwo;
    font-weight: 600;
}

</style>