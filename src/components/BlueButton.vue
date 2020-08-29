<template>
    <div class="btn">
        <button>
            <div class="mysho"><img src="../assets/arrowQ.png" alt="">
            </div>
            <div class="sho">
                شروع
            </div>
        </button>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .btn{
    
        margin-left: 16px;
        button{
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 50px;
            width:119px;
            border-radius: 10px;
            border: 0px;
            // box-shadow: 0 2px 5px 0 rgba(69, 112, 245, 0.6);
            background-color: #4570f5;  
            color: #ffffff;

        }
    
        .sho{
            margin-right: 15px;
            margin-bottom: 5px;
            font-family: shabnam;
            font-size: 15px;
        }
  }
</style>

