<template>

  <div class="search_categories">
    <div class="select">
       <select name="search_categories" id="search_categories">
         
          <option value="1" selected="selected">جدیدترین</option>
          <option value="2">محبوب ترین</option>
          
        </select>
     </div>
  </div>



</template>

<script>
export default {

}
</script>

<style lang="scss">

// .parent{
//   width: 104px;
//   height: 36px;
// }


.search_categories{
  height: 36px;
  width: 109px;
  font-size: 13px;
  padding: 0px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  position: relative;
 
}

.search_categories .select{
  width: 120%;
}

.search_categories .select select{
  background: transparent;
  line-height: 1;
  border: 0;
  padding: 0;
  border-radius: 0;
  width: 120%;
  position: relative;
  z-index: 10;
  font-size: 1em;
  height: 36px;
  width: 109px;
  text-align: right;
}

select{
  color: #aeaeae;
}

</style>