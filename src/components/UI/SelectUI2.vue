<template>
    <div class="select__box">
        <select class="select" v-model="localModelValue" @change="$emit('update:modelValue', $event.target.value)">
            <option
            v-for="option in options"
            :key="option.id"
            :value="option.id"
            default="0"
            >
            {{option.rus_name}}
            </option>
        </select>
        <i class="btn"></i>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isActive: true
            }
        },
        name: 'SelectUI',
        props:{
            modelValue:{
                type:String
            },
            options:{
                type:Array,
                default:()=>[]
            }
        },
        computed: {
            localModelValue: {
                get() {
                    return this.modelValue
                },
                set(newValue) {
                    this.$emit('update:modelValue', newValue)
                },
            },
        },
    }
</script>

<style lang="scss" scoped>
.select {
    width: 100%;
    border: 2px solid $mainOne;
    border-radius: 50px;
    padding: 8px;
    background: $back;
    color: $accentOne;
    width: 110px;
    border-radius: 5px;
    transition: 0.5s;
    appearance: none;
}
.select::-ms-expand{
    display: none;
}
.btn{
    width: 15px;
    height: 15px;
    border: 1px solid $accentOne;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0,-50%);
    border-radius: 5px;
    background: $back;
    pointer-events: none; 
}
.select__box{
    display: flex;
    align-items:center;
    position: relative;
}
.select:hover{
    outline: 1px solid $accentTwo;
    border: 2px solid $accentTwo;
    border-radius: 15px;
    transition: 0.3s;
}
.select:hover~.btn{
    background: $accentTwo;
    border:1px solid $accentTwo;
    border-radius: 50px;
    transition: 0.3s;
}
.btn>svg{
    fill:$accentOne;
    width:80%;
    height: 80%;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    rotate: -90deg;
}
.active {
    border:1px solid $accentTwo;
}
</style>