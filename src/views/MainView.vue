<template>
    <div class="main">
        <div class="main__content">
            <div class="main__select">
                <SelectUI
                    v-model="selectCategory"
                    :options="getCategory()"
                    @change="goZeroSub()"
                />
                <p v-if="selectCategory!=0"></p>
                <SelectUI
                    v-if="selectCategory!=0"
                    v-model="selectSubtype"
                    :options="getSubtype()"
                    @change="goZeroProd()"
                />
                <p v-if="selectSubtype!=0 && selectCategory!=0"></p>
                <SelectUI
                    v-if="selectSubtype!=0 && selectCategory!=0"
                    v-model="selectProduct"
                    :options="getProduct()"
                    @change="takeProd()"
                />
            </div>
            <CalcForm
                v-if="selectProduct!=0 && selectSubtype!=0"
                :prod="currentProd"
            />
        </div>

    </div>
</template>

<script>

import SelectUI from '@/components/UI/SelectUI.vue';
import axios from 'axios';
import CalcForm from '@/components/CalcForm.vue';
import store from '@/store';
    export default {
        data(){
            return{
                selectCategory:'0',
                selectCategoryArray:[],
                selectSubtype:'',
                selectSubtypeArray:[],
                selectProduct:'',
                selectProductArray:[],
                currentProd:[],
                token: store.getters['auth/getToken']
            }
        },
        methods: {
            async fetchProd() { //вынести в компонент VueX
                try {
                    const requestOptions = {
                        method: "GET",
                        headers: { "Content-Type": "application/json", 'Authorization': "Token "+this.token },
        };
                    const response = await axios.get("http://"+process.env.VUE_APP_API+":8000/api/products/", requestOptions);
                    this.selectProductArray = [...response.data];
                }
                catch (e) {
                    alert("Не отрабатывает");
                }
            },
            async fetchCat() { //вынести в компонент VueX
                try {
                    const requestOptions = {
                        method: "GET",
                        headers: { "Content-Type": "application/json", 'Authorization': "Token "+this.token },
                    };
                    const response = await axios.get("http://"+process.env.VUE_APP_API+":8000/api/category/",requestOptions);
                    this.selectCategoryArray = [...response.data];
                    this.selectCategoryArray.unshift({
                        id: '0',
                        rus_name: 'Выберите из списка'
                    })
                }
                catch (e) {
                    alert("Не отрабатывает");
                }
            },
            async fetchSub() { //вынести в компонент VueX
                try {
                    const requestOptions = {
                        method: "GET",
                        headers: { "Content-Type": "application/json", 'Authorization': "Token "+this.token },
                    };
                    const response = await axios.get("http://"+process.env.VUE_APP_API+":8000/api/subtype/",requestOptions);
                    this.selectSubtypeArray = [...response.data];
                    
                }
                catch (e) {
                    alert("Не отрабатывает");
                }
            },
            goZeroSub(){
                this.selectSubtype = '0'
            },
            goZeroProd(){
                this.selectProduct = '0'
            },
            takeProd(){
                this.currentProd = []
                this.selectProductArray.forEach(prod=>{
                    if(this.selectProduct == prod.id)
                        this.currentProd.push(prod)
                })
            },
            getCategory() {
                let a =[]
                a.unshift({
                        id: '0',
                        rus_name: 'Выберите из списка'
                    })
                return a = [...this.selectCategoryArray]
            },
            getSubtype() {
                const a=[]
                a.unshift({
                        id: '0',
                        rus_name: 'Выберите из списка'
                    })
                this.selectSubtypeArray.forEach(sub=>{
                    if(this.selectCategory == sub.cat_id)
                        a.push(sub)
                })
                return a
            },
            getProduct() {
                const a=[]
                a.unshift({
                        id: '0',
                        rus_name: 'Выберите из списка'
                    })
                this.selectProductArray.forEach(prod=>{
                    if(this.selectSubtype == prod.sub)
                        a.push(prod)
                })
                return a
            }
        },
        mounted() {
            this.fetchCat();
            this.fetchSub();
            this.fetchProd();
        },
        components: { SelectUI, CalcForm }
}
</script>

<style lang="scss" scoped>
.main{
    display: flex;
    flex-direction: row;
    overflow: hidden;
    transition: 1s;
}
.main__content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
}
.main__select{
    display: flex;
    flex-direction: column;
    border: 2px solid $mainOne;
    padding: 25px;
    background: $back;
    border-radius: 5px;
    -webkit-animation: slide-bottom-px 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: slide-bottom-px 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.main__select:hover{
    border: 2px solid $accentTwo;
    transition: 0.5s;
}
.main__calc{
    width: 400px;
    height: 500px;
    border: 1px solid red
}
p{
    padding: 10px;
}


 

</style>