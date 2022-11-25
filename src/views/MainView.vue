<template>
    <div class="main">
        <div class="main__content">
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
            />
        </div>
    </div>
</template>

<script>
import SelectUI from '@/components/UI/SelectUI.vue';
import axios from 'axios';
    export default {
        data(){
            return{
                selectCategory:'0',
                selectCategoryArray:[],
                selectSubtype:'',
                selectSubtypeArray:[],
                selectProduct:'',
                selectProductArray:[],
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
        components: { SelectUI }
}
</script>

<style lang="scss" scoped>
.main{
    overflow: hidden;
    transition: 1s;
}

.main__content{
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

.main__content:hover{
    border: 2px solid $accentTwo;
}
p{
    padding: 10px;
}


 

</style>