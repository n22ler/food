<template>
    <div class="footer">
        <div class="footer__container">
            <div class="footer__content">
                <!-- <p>Автор проекта:<br><span>Никита Лернер</span></p>
                <p>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6.99996V9.50006C10 9.63271 9.94728 9.75978 9.85364 9.85364C9.76 9.9475 9.63271 10 9.50006 10C6.9826 9.99314 4.57014 8.99006 2.79004 7.20996C1.00994 5.42986 0.00685724 3.0174 0 0.499936C0 0.367291 0.052715 0.240218 0.146359 0.146359C0.240003 0.0525007 0.367291 0 0.499936 0H3.00004C3.11147 0 3.21969 0.0372862 3.30776 0.105859C3.39562 0.174431 3.45819 0.270432 3.48519 0.378648L3.98513 2.37861C4.0102 2.47868 4.00377 2.58411 3.96649 2.68011C3.92941 2.77633 3.86341 2.85861 3.77748 2.91583L1.85746 4.19577C2.69382 5.91608 4.0837 7.30596 5.80401 8.14233L7.08396 6.2223C7.14117 6.13659 7.22346 6.07059 7.31968 6.0333C7.41589 5.99623 7.52111 5.98959 7.62118 6.01466L9.62114 6.51459C9.72935 6.54159 9.82557 6.60417 9.89414 6.69202C9.96271 6.77988 10 6.88831 10 6.99974V6.99996Z" fill="#0079C2"/>
                    </svg>
                    Телефон: 
                     <a href="tel:+79097888722">+7 909 788 87 22</a> </p>
                <p>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0.500147V1.23001L5.00011 3.45496L0 1.23001V0.500147C0 0.367289 0.0527139 0.240216 0.14657 0.146573C0.240427 0.0529291 0.367497 0 0.500139 0H9.50007C9.63272 0 9.75979 0.0527148 9.85364 0.146573C9.9475 0.240431 10 0.367503 10 0.500147ZM5.00011 4.50004C4.92939 4.49961 4.85954 4.4844 4.79504 4.45504L0 2.32502V7.50007C0 7.63271 0.0527139 7.75978 0.146356 7.85364C0.239998 7.9475 0.367283 8.00021 0.499925 8.00021H9.49986C9.6325 8.00021 9.75957 7.9475 9.85343 7.85364C9.94729 7.75978 9.99979 7.63271 9.99979 7.50007V2.32502L5.20475 4.45504C5.14046 4.4844 5.07039 4.49983 4.99968 4.50004H5.00011Z" fill="#0079C2"/>
                    </svg>
                    E-mail: 
                    <a href="mailto:hznwork@gmail.com">hznwork@gmail.com</a> </p> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.footer {
    max-height: 280px;
    color: #6E828C
}
.footer__container{
    max-width: 1376px;
    margin: 75px auto;
}
.footer__content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
}
p:first-child{
    margin-bottom: 35px;
}
p>span{
    font-weight: 400;
}
p>a{
    cursor:pointer;
    text-decoration: none;
    color: inherit;
    font-weight: 400;
}
p>svg{
    margin-right: 7px;
}
</style>