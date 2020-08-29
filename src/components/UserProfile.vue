<template>
    <div class="profile">
        <div class="userName">
            <img src="../assets/arrow.png" alt="">
            <span>کاربر عزیز، خوش آمدید</span>
        </div>
        <div class="avatar">
            <img  src="../assets/avatar.png" alt="">
        </div>
    </div> 
</template>

<script>
export default {

}
</script>

<style lang="scss">

    .profile {
        height: 100%;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 45px;
        // margin-top: 15px;
        color: #4b5a9f;

        .userName{
            height: 100%;
            display: flex;
            align-items: center;
            // justify-content: ce;
        }

        .avatar {
            margin-left: 11px;
        }
    }

</style>