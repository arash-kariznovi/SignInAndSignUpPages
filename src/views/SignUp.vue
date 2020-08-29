<template>
     <div class="signup-box">
            <form action="">
    
                <div class="form-section">
                   <div>
                        <p> نام و نام خانوادگی</p>
                        <img src="../assets/user.png" alt="">
                    </div>
                    <input type="text" 
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                    v-model="userData.name"
                    >
                </div>
                <hr>
                <div class="form-section">
                    <div>
                        <p>ایمیل</p>
                        <img src="../assets/email.png" style="height:10px;width:13px">
                    </div>
                    <input type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    v-model="userData.email"
                    >
                </div>
                <hr>
                <div class="form-section">
                    <div>
                        <p>رمز عبور</p>
                        <img src="../assets/lock.png" style="height:13px;width:10.4px">
                    </div> 
                    <input type="password" 
                    placeholder="رمز عبور خود را وارد کنید"
                    v-model="userData.password"
                    >
                </div>
                <hr>
                <div class="form-section">
                    <div>
                        <p>تکرار رمز عبور</p>
                        <img src="../assets/lock.png" 
                        style="height:13px;width:10.4px">
                    </div>
                    <input type="password" 
                    placeholder="رمز عبور خود را مجدد وارد کنید"
                    v-model="userData.password"
                    >
                </div>
               
            </form>
    </div>  
 
</template>

<script>
export default {
    data(){
        return{
            userData:{
            name: '',
            email: '',
            password: ''
            }  
        }  
    }
}
</script>

<style lang="scss">

    .signup-box{
        background-color:#ffffff;
        border-radius: 10px;
        width: 375px;
        height: 50%;
        box-shadow: 10px 8px 6px 0 #edeef5;
        font-size: 11px;
        line-height: 1.33;
        letter-spacing: -0.12px;
        text-align: right;
        color: #7f86aa;
        form{
            height: 100%;
            width: 100%;
            .form-section{
                height: 25%;
                margin-right: 19px;
                
                div {
                    display: flex;
                    justify-content: space-between;
                    align-items: top;
                    width: 100%;       
                         
                    p{
                        
                        margin: 0px;
                        display: flex;
                        align-items: top;
                        margin-top: 14px;
                    }
                    img{
                        height: 12px;
                        width: 12px;
                    } 
                }
                input{
                    border: 0px;
                    font-family: shabnam;
                    font-size: 11px;
                    width: 90%;
                    margin-bottom: 14px;

                    
                }

            }
            hr{
                margin: 0px;
                border: .5px solid #f3f4f8;;
            }
                
        }

        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: #c3c6d5;
                opacity: 1; /* Firefox */
            :-ms-input-placeholder {/* Internet Explorer 10-11 */
                color: #c3c6d5;
            }
            ::-ms-input-placeholder { /* Microsoft Edge */
                color: #c3c6d5;
            }
        } 

      

           
    }

</style>