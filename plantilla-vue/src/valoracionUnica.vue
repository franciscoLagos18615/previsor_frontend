<template>

    <div id="grafico"  >

    <h3>Análisis</h3>

            <ul class="prestador-list">
      <li >
        <schart :canvasId="canvasId"
            :type="type"
            :width="width"
            :height="height"
            :data= "[
                {name: 'Positivo', value: Math.ceil( (prestadores.positivas*100)/(prestadores.positivas+prestadores.negativas+prestadores.neutrales))},
                {name: 'Negativo', value: Math.ceil((prestadores.negativas*100)/(prestadores.positivas+prestadores.negativas+prestadores.neutrales))},
                {name: 'Neutral', value: Math.ceil((prestadores.neutrales*100)/(prestadores.positivas+prestadores.negativas+prestadores.neutrales))},
//prestadores.negativas,positivas,neutrales
            ]"

            :options="{
            //title: 'Grafico que representa la evaluacion positiva de la isapre ' + prestadores.nombre
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
            cantidadValoraciones: 0

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
