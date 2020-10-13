<template>
  <div id="app">

  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  created(){
    this.axios.get('http://localhost:7788/demo/userFindList').then(function (data) {
      console.log(data);
      
    })
  },
  methods:{
    getNewsList(){
      alert(11);
      this.axios.get('http://localhost:7788/demo/userFindList').then((response)=>{
        console.log()
        this.newsList=response.data.data;
      }).catch((response)=>{
        console.log(response);
      })
    },
  }
}
</script>

<style>
</style>
