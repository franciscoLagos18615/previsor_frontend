<template>

    <div id="grafico"  >
            <ul class="prestador-list">
      <li >
        <schart :canvasId="canvasId"
            :type="type"
            :width="width"
            :height="height"
            :data= "[
                {name: 'Positivo', value: 4},
                {name: 'Negativo', value: 5},
                {name: 'Neutral', value: 6}
//prestadores.negativas,positivas,neutrales
            ]"

            :options="{

            title: 'Grafico que representa la evaluacion positiva de la isapre ' + prestadores.nombre
            }"
        ></schart>

      </li>

    </ul>


    </div>

</template>

<script>
    import Schart from 'vue-schart';
    //import algo from './otro.js';


export default {
    props: {
        nPrestador:{
            type: Number,
            required:true
        }

    },

    data() {

        return {

            prestadores:[],
            canvasId: 'myCanvas',
            type: 'pie',
            width: 800,
            height: 450,

        }
    },
    components:{
        Schart
    },

    mounted:function(){
    console.log('Index.vue');
    var n = this.nPrestador.toString();
    // GET /someUrl
    this.$http.get('http://localhost:8082/previsor-back/prestador/'+n+'/'+'valoraciones')
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
