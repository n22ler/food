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
    export default {
        data(){
            return{
                selectCategory:'0',
                selectCategoryArray:[],
                selectSubtype:'',
                selectSubtypeArray:[],
                selectProduct:'',
                selectProductArray:[],
                currentProd:[]
            }
        },
        methods: {
            async fetchProd() { //вынести в компонент VueX
                try {
                    const response = await axios.get("http://127.0.0.1:8000/api/products/");
                    this.selectProductArray = [...response.data];
                }
                catch (e) {
                    alert("Не отрабатывает");
                }
            },
            async fetchCat() { //вынести в компонент VueX
                try {
                    const response = await axios.get("http://127.0.0.1:8000/api/category/");
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
                    const response = await axios.get("http://127.0.0.1:8000/api/subtype/");
                    this.selectSubtypeArray = [...response.data];
                    
                }
                catch (e) {
                    alert("Не отрабатывает");
                }
            },
            // getCurrentValue(array, field, selector){
            //     const a=[]
            //     a.unshift({
            //             id: '0',
            //             rus_name: 'Выберите из списка'
            //         })
            //     array.forEach(item=>{
            //         if(selector == item[{field}])
            //             a.push(item)
            //     })
            //     this.selectProduct = '0'
            //     return a
            // },
            goZeroSub(){
                this.selectSubtype = '0'
            },
            goZeroProd(){
                this.selectProduct = '0'
            },
            takeProd(){
                console.log('one')
                this.currentProd = []
                this.selectProductArray.forEach(prod=>{
                    if(this.selectProduct == prod.id)
                        this.currentProd.push(prod)
                        console.log('two')
                })
                console.log(this.currentProd)
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
        watch:{
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
    -webkit-animation: slide-bottom-px 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: slide-bottom-px 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.main__select:hover{
    border: 2px solid $accentTwo;
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