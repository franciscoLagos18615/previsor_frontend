export default {

    data() {

        return {
            prestadores:[]
        }
    },

   
  
  mounted:function(){
    console.log('Index.vue');

    // GET /someUrl
    this.$http.get('http://localhost:8081/previsor-back/prestador')
    .then(response=>{
       // get body data
      this.prestadores = response.body;
     console.log('prestadores',this.prestadores)
    }, response=>{
       // error callback
       console.log('error cargando los prestadores');
    })
  }
    

}