<template>
  <div id="up">

      <div class="main" v-for="question in formList" v-bind:key="question">
        <blue-button></blue-button>
        <div class="ST">وضعیت : {{status}}</div>
        
        <div class="QN">{{question.qNumber}}  : تعداد پرسش </div>

        <div class="FN"> <span> پرسشنامه</span>  {{question.title}}</div>
        
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {

  data (){
    return {
      status : 'پاسخ داده نشده',
      formList : [],
    }
  },

  mounted () {
    axios.get('http://localhost:3000/questionnaire')
    .then(res =>{
      console.log(res.data);
      const data = res.data;

      data.forEach((element)=>{
            this.formList.push(element);
      })

      console.log(this.formList);
     
      // console.log(lists);
      // this.qNumber = lists[0].qnumber;
      // this.formName = lists[0].formName;
    })
    .catch(error => console.log(error))

  }

}
</script>

<style lang="scss">

    #up{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: right; 
         
    }
    .main{
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 19px;
        width: 845px;
        height : 85px;
        background-color: #ffffff;
        border-radius: 10px;
        // box-shadow: 0 5px 10px 0 #f1f1f2;
        

        .FN{
          margin-right: 32.5px;
          width : 30%;
          font-family: Shabnam;
          color: #2a3774;
      
          font-weight: 500;
          font-size: 17px;
          direction: rtl;
          
 
        }

        .QN{
            // margin-right: 174px;
            color: #7f86aa;
            font-size: 13px;
        }

        .ST{
            // margin-right: 40px;
            margin-left: 79.5px;
            color: #7f86aa;
            font-size: 13px;
        }
       
        
    }    

</style>