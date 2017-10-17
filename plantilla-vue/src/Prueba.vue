<template>
    
        
    
    <div id="grafico"  >
            <ul class="prestador-list">
      <li v-for="u,i in prestadores.slice(0,1)">
        <schart :canvasId="canvasId"
            :type="type"
            :width="width"
            :height="height"
            :data= "[
                {name: prestadores[0].nombre, value: prestadores[0].codigo_sis},
                {name: prestadores[1].nombre, value: prestadores[1].codigo_sis},
                {name: prestadores[2].nombre, value: prestadores[2].codigo_sis},
                {name: prestadores[3].nombre, value: prestadores[3].codigo_sis},
                {name: prestadores[4].nombre, value: prestadores[4].codigo_sis},
                {name: prestadores[5].nombre, value: prestadores[5].codigo_sis},
                {name: prestadores[6].nombre, value: prestadores[6].codigo_sis},
                {name: prestadores[7].nombre, value: prestadores[7].codigo_sis},
                {name: prestadores[8].nombre, value: prestadores[8].codigo_sis},

            ]"
            
            :options="options"
        ></schart>
        
      </li>

    </ul>
           
        
       
    </div>
    
</template>

<script>
    import Schart from 'vue-schart';
    //import algo from './otro.js';

    
export default {
    

    data() {

        return {

            prestadores:[],
            
            //var algo = 'pepe',
            canvasId: 'myCanvas',
            type: 'pie',
            width: 800,
            height: 450,
        
            options: {
                title: 'Grafico que representa la evaluacion positiva de la isapre'
            }
        }
    },
    components:{
        Schart
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

</script>