<template>
    <div class="head">
        <UserProfile></UserProfile>
        <div class="center-top">لیست پرسشنامه ها</div> 
        <div class="logo"> <img src="../assets/logo.png" alt=""></div>
    </div>
</template>

<script>
    import UserProfile from '@/components/UserProfile.vue'
    export default {
        components:{
            UserProfile
        }
    }
</script>

<style lang="scss">

.head{
    display: flex;
    justify-content: space-between;
    margin-bottom: 160px;
    position: relative;
    align-items: center;

    .logo{
        margin-right: 45px;
        margin-top: 10px;
    }

    .center-top {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        font-size: 18px;
        font-weight: 500;
        margin-top: 25px;
        // margin-right: 60px;
        color: #4570f5;
    }
}
   
</style>    