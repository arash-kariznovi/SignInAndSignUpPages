<template>
    <div>
        <Header></Header>
          <div class="sort">
            <div class="sort-bar">
              
              <SortBar></SortBar>  
              <div><p>مرتب سازی براساس </p></div> 
            </div>
            
            <p>  3   <span>پرسشنامه</span>   </p>
           
          </div>
        <List></List>
    </div>
</template>

<script>

import Header from '@/components/header.vue';
import List from '@/components/QuestionnaireList';
import SortBar from '@/components/SortBar.vue'

export default {
  name: 'Questionnaire',
  components: {
    Header,
    List,
    SortBar
  }
}

</script>

<style lang="scss">

  .sort{
    color: #7f86aa;;
    display: flex;
    justify-content: space-around;
      .sort-bar{
        display: flex;
        justify-content: space-around;
      #mysortbar{
        justify-content: center;
        align-items: center;
        border: 0px;
      }
    }
  }

</style>