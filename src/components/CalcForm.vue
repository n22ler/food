<template>
    <div class="form">
        <h3>{{prod[0].rus_name}}</h3>
        <span>Характеристики, 100г:</span>
        <p>Калории: <span>{{currentArray.calories}}</span></p>
        <p>Белки: <span>{{currentArray.protein}}</span></p>
        <p>Жиры: <span>{{currentArray.fat}}</span></p>
        <p>Углеводы: <span>{{currentArray.carbo}}</span></p>
        <div class="">
            <label for="value">Введите вес, г:</label>
                <div class="form__post">
                    <input
                        v-model="currentValue"
                        type="text"
                        name="value"
                        maxlength="4"
                        >
                    <p></p>
                    <button @click="pushData">Записать</button>
                </div>
        </div>
        
    </div>
</template>

<script>
import store from '@/store'
    export default {
        props:{
            prod:{
               type:Array,
               required:true, 
            }
        },
        data(){
            return{
                currentArray:{},
                currentValue: null
            }
        },
        methods:{
            changeTypeValue(){
                this.currentArray['calories'] = ((parseFloat((this.prod[0].calories).replace(',','.')))*100).toFixed(1)
                this.currentArray['fat'] = ((parseFloat((this.prod[0].fat).replace(',','.')))*100).toFixed(1)
                this.currentArray['protein'] = ((parseFloat((this.prod[0].protein).replace(',','.')))*100).toFixed(1)
                this.currentArray['carbo'] = ((parseFloat((this.prod[0].carbo).replace(',','.')))*100).toFixed(1)
            },
            pushData(){
                console.log(store.state.auth.userId)
                console.log(this.currentValue)
            },

        },
        mounted(){
            this.changeTypeValue();
        },
        watch:{
            prod(){
                this.changeTypeValue();
            },
            currentValue(){
                this.currentValue = this.currentValue.replace(/[^0-9]/g,"")
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.form{
    display: flex;
    flex-direction: column;
    border: 2px solid $mainOne;
    padding: 25px;
    border-radius: 5px;
    color: $accentOne;
    background: $back;
    transition: 0.5s;
    -webkit-animation: slide-bottom-px 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: slide-bottom-px 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
.form:hover{
    border: 2px solid $accentTwo;
}
p{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
}
p>span{
    font-weight: 700;
    color:$mainTwo
}
h3{
    font-weight: 700;
    color:$mainTwo;
    text-align:center;
    margin-bottom: 10px;
}
input{
    border: 1px solid;
    width: 150px;
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
label{
    font-size: 14px;
    font-weight: 500;
    color: $accentOne;
}
.form>div{margin-top: 15px;}
.form__post>p{
    padding: 5px;
}
.form__post{
    display: flex;
    align-items: center;
    margin-top: 5px;}
button{
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: $mainOne;
    color: $accentOne;
    transition: 0.5s;
    font-size: 14px;
}
button:hover{
    border-radius: 30px;
    transition: 0.3s;
    background: $accentTwo;
    color:$mainOne;
}
</style>