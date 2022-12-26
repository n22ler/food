<template>
    <div class="profile">
        <div v-show="!changeVisible" class="profile__container">
            <div class="profile__content">
                <h4>Профиль:</h4>
                <p>Почта:<span class="">{{profile.email}}</span></p>
                <br><br>
                <p>Имя:<span class="">{{profile.first_name}}</span></p>
            </div>
            <ButtonUI @click="goExit">Выйти из аккаунта</ButtonUI>
            <div class="profile__content">
                <h4>Параметры:</h4>
                <p>Возраст:<span>{{profile.age}}</span></p>
                <p>Рост:<span>{{profile.growth}}</span></p>
                <p>Вес:<span>{{profile.weight}}</span></p>
                <p>Базовый обмен:<span>{{this.calcBaseMet()}}</span></p>
                <p v-if="profile.sex==1">Пол:<span>Мужской</span></p>
                <p v-else-if="profile.sex=0">Пол:<span>Женский</span></p>
                <p v-else>Пол:<span>{{profile.sex}}</span></p>
                <p>ИМТ:<span>{{bmi}}</span></p>
            </div>
            <ButtonUI @click="changeUserParams">Изменить параметры</ButtonUI>
        </div>
        <div v-show="changeVisible" class="profile__change">
            <h3>Изменить параметры</h3>
            <div class="row">
                Имя: 
                <div class="input">
                    <input v-model=profile.first_name maxlength="15">
                </div>
                <div class="after"></div>
            </div>
            <div class="row">
                Возраст: 
                <div class="input">
                    <input v-model=profile.age maxlength="2">
                </div><div class="after">
                    лет
                </div>
            </div>
            <div class="row">
                Рост: 
                <div class="input">
                    <input v-model=profile.growth maxlength="3">
                </div><div class="after">
                    см
                </div>
            </div>
            <div class="row">
                Вес: 
                <div class="input">
                    <input v-model=profile.weight maxlength="3">
                </div>
                <div class="after">
                    кг
                </div>
            </div>
            <div v-if="profile.sex==2" class="row">
                Пол: 
                <div class="select">
                    <SelectUI2
                        v-model="profile.sex"
                        :options="userSexArray"
                    />
                </div>
                <div class="after"> 
                </div>
            </div>
            <div class="btns">
                <ButtonUI @click="changeVisible=!changeVisible">Назад</ButtonUI>
                <ButtonUI @click="createChange">Принять изменения</ButtonUI>
            </div>
            
        <!-- Имя фамилия кнопка выйти -->
    </div>
</div>
</template>

<script>
import ButtonUI from '@/components/UI/ButtonUI.vue';
import SelectUI2 from '@/components/UI/SelectUI2.vue';
import store from '@/store';
import axios from 'axios';
import { mapActions} from 'vuex';
    export default {
    data() {
        return {
            profile: {},
            token: store.getters["auth/getToken"],
            bmi: null,
            changeVisible: false,
            userSexArray:[
                {
                    id: 0, rus_name: "Женский"
                },
                {
                    id: 1, rus_name: "Мужской"
                },
            ]
        };
    },
    methods: {
        async fetchUserData(){ //получаем данные 
            try{
                const requestOptions = {
                    method: "GET",
                    headers: { "Content-Type": "application/json"},
                };
                const response = await axios.get("http://" + process.env.VUE_APP_API + ":8000/api/user/"+store.state.auth.id+"/", requestOptions);
                this.profile = response.data[0];
                console.log(this.profile)
                console.log(this.profile.first_name)
            }
            catch (e){
                alert("trouble")
            }
            this.getBMI();
        },
        getBMI(){
             const a = Math.round(parseInt(this.profile.weight)/((parseInt(this.profile.growth)/100)*(parseInt(this.profile.growth)/100)))
             if(isNaN(a)) this.bmi = "Неизвестно"
             else this.bmi = a
        },
        changeUserParams(){ // вызываем окно для изменений данных, зачем функция?
            this.changeVisible = true
        },
        calcBaseMet(){ // расчет БОВ от пола.
            if(this.profile.sex==0){ //ж
                return Math.round(655.1 + (9.563*parseInt(this.profile.weight)) + (1.85*parseInt(this.profile.growth)) - (4.676*parseInt(this.profile.age)))
            }
            if(this.profile.sex==1){ //м
                return Math.round(66.5 + (13.75*parseInt(this.profile.weight)) + (5.003*parseInt(this.profile.growth)) - (6.775*parseInt(this.profile.age)))
            } else return 0
        },
        async createChange(){ //Сохраняем  изменения
            try{
                const requestOptions = {
                    method: "PUT",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify({  "first_name": this.profile.first_name,
                                            "age": parseInt(this.profile.age),
                                            "weight": parseInt(this.profile.weight),
                                            "growth": parseInt(this.profile.growth),
                                            "base_metabolism": this.calcBaseMet(),
                                            "sex": parseInt(this.profile.sex)

                    })
                };
                const response = await fetch("http://" + process.env.VUE_APP_API + ":8000/api/user/update/"+store.state.auth.id+"/", requestOptions);
                if(response.status==200)this.changeVisible = false
            }
            catch (e){
                alert("trouble")
            }
            this.getBMI();
        },
        ...mapActions({
            goExit: "auth/goExit"
        })
    },
    mounted() {
        this.fetchUserData();
    },
    components: { ButtonUI, SelectUI2 }
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
    border-radius: 5px;
    background-color: $back;
    -webkit-animation: slide-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: slide-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
.profile__container>button{
    align-self: flex-end;
    padding: 15px;
    margin-bottom: 10px;
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
    margin-top: 5px;
}
p>span{
    font-size: 16px;
    color: $mainTwo;
    font-weight: 600;
}
.row{
    color: $accentOne;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
}
h4{
    font-size: 18px;
    color: $mainTwo;
    font-weight: 600;
}
h3{
    font-size: 18px;
    color: $mainTwo;
    font-weight: 600;
    text-align: center;
}
.profile__change{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    max-width: 30vw;
    width: 350px;
    border: 2px solid $mainOne;
    padding: 25px;
    border-radius: 5px;
    background-color: $back;
    -webkit-animation: slide-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: slide-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
.profile__change>div>button{
    align-self: center;
    padding: 15px;
    margin-top: 20px;
}
.row{
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}
.input{
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
}
.row>div>input{
    border: 1px solid;
    width: 110px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 2px solid $mainOne;
    color: $accentOne;
    transition: 0.5s;
    background: $back;
    margin-right: 10px;
    text-align: end;
}
.row>div>input:focus-visible{
    outline: 1px solid $accentTwo;;
    border: 2px solid $accentTwo;
    border-radius: 30px;
    transition: 0.3s;
    padding: 5px 10px;
}
.row>div>input:hover{
    outline: 1px solid $accentTwo;;
    border: 2px solid $accentTwo;
    border-radius: 30px;
    transition: 0.3s;
}
.btns{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.after{
    max-width: 30px;
    width: 100%;
    text-align: end;
}
.select{
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
}
.select__box{
    align-content: flex-end;
    padding-right: 10px;
}
</style>