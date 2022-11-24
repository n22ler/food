<template>
    <button class="btn" >
        <slot></slot>
    </button>
</template>
    
<script>
        export default {
            name:'ButtonUI',
            data(){
                return{
                    isClicked:false
                }
                
            },
        }
</script>
    
<style lang="scss" scoped>
.btn{
    padding: 16px 32px;
    border: none;
    border-radius: 5px;
    background: $mainOne;
    color: $accentOne;
    transition: 0.5s;
    max-width: fit-content;
}
.btn:hover{
    border-radius: 30px;
    transition: 0.3s;
    background: $accentTwo;
    color:$mainOne;
}
</style>