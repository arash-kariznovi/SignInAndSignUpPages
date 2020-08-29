<template>
    <div>
     <div class="logo"><img src="../assets/logo.png" alt=""></div>

     <div class="account">
         
            <div class="image-box"> 
                 
                <img class="circle-image" src="../assets/accountPageImage.png">
                <span id="outer"></span>
              <span class="dot"></span>
                
            </div>
         
        

        <div class="content-box">
                    
                    <strong>
                        <p class="welcome-text">
                        به سیستم پرسشنامه آنلاین خوش آمدید
                        </p>
                    </strong>
            
                <p class="guidence-text">
                چنانچه شما دارای حساب کاربری هستید لطفا وارد شوید
                </p>
            
            
            <router-view></router-view>

            <div class="forget-box"> 
                <div class="remember-me">
                    <input type="checkbox" checked="checked">
                     <p>مرا بخاطر داشته باش</p>
                </div>

                <div>
                     <a href=""><p id="underline-remember"> رمز عبور را فراموش کرده اید؟</p></a>
                </div>    
            </div>
            <div class="button-box">
                <button class="register-button" @click="()=> $router.push('signup')"  >ثبت نام</button>
                <button class="enter-button" @click="()=>$router.push('signin')">ورود</button>
            </div>
        </div>
        
       
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
body{


    
    .logo{

            display: flex;
            justify-content: flex-end;
            width: 100%;

            img{
                padding-top: 2%;
                margin-right: 12%;
                height: 44.4px;
                width: auto;
                
                  
            }
            padding-bottom: 1.3%;
        }

        .account{
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            height: 100%;
            margin-top: 0px;
            padding: 0px;
            img{
                
                z-index: 3;
                height: 360px;
                width: 360px;
                margin-top: 17px;
                margin-left: 15px;
            }
    .content-box{
        direction: rtl;
        margin-right: 12%;
           
            .welcome-text{
                margin: 0px;
                font-size: 24px;
                color: #2a3774;
                padding-bottom: .4%;
            }
            .guidence-text{
                margin: 0px;
                padding-bottom: 5%;
                font-size: 14px;
                color: #7f86aa;
            }
        
    }
    .image-box{
        padding-left: 18%;
        padding-top: 3%;
        
        .dot {
            height: 100px;
            width: 100px;
            border-radius: 50%;
            display: inline-block;
            background-image: linear-gradient(to bottom, #4570f5 5%, #8fa9f6);
            z-index: 2;
            position: relative;
            left: 45%;
            top: -20%;
            box-shadow: 10px 10px 26px 0 rgba(0, 0, 0, 0.16);
        }
      
        #outer {
            background-color: #f3f4f8;
            height: 150px;
            width: 150px;
            border-radius: 50%;
            display: inline-block;
            z-index: -1;
            position:relative;
            left: -70%;
            top: -40%;
            border: solid 15px #edeef5;
         }
    

  
    }
}   

.forget-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 1.5% 0%;
  

    .remember-me{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 0px;
        padding: 0px;
         div input{
        height: 13px;
        width: 13px;
    }
    }
   
    p{
        color: #7f86aa;
        font-size: 12px;  
    }

      #underline-remember{
            font-size: 14px;
            text-decoration: underline;
    }

   
}

.button-box{
    display: flex;
    justify-content: space-between;  
    margin-top: 1.5%;
    height: 10%;
    button{
        font-family: shabnam;
        height: 80%;
        width: 48.5%;
        border-radius: 5px;
        font-size: 16px;
        border:0px;        
    }

    .register-button{
        color: #ffffff;
        background-color:#4570f5;
        box-shadow: 0 3px 20px 0 rgba(69, 112, 245, 0.3);
    }
    .enter-button{
        background-color:#f3f4f8;
        color: #929db3;
        border: solid 1px #d1d1d2;
        box-shadow: 0 3px 20px 0 rgba(69, 112, 245, 0.3);
    }
}
    
}
   
strong p {
    width : 110%;
}
    


  
</style>