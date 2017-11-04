<template>

    <div>
        <div class="center">
            <img class="logo-big" src="./img/PreVisor_logo_transp.png" style="max-width: 640px" />
            <p style="padding-top: 10px;padding-left: 50px;padding-right: 50px;padding-bottom: 50px;color: #FFFFFF">
              PreVisor es un observatorio de la opinión pública sobre el sistema de previsión de salud en Chile, tomando las opiniones de los usuarios de twitter, previsor entrega una mirada amplia sobre como responden los chilenos al servicio entregado por los múltiples prestadores del sistema.
            </p>
        </div>

    <ul class="prestador-list">
        <li v-for="u,i in prestadores.slice(0,1)">
            <schart :canvasId="canvasId"
                :type="type"
                :width="width"
                :height="height"
                :data= "[
                    {name: prestadores[0].nombre, value: prestadores[0].positivas},
                    {name: prestadores[1].nombre, value: prestadores[1].positivas},
                    {name: prestadores[2].nombre, value: prestadores[2].positivas},
                    {name: prestadores[3].nombre, value: prestadores[3].positivas},
                    {name: prestadores[4].nombre, value: prestadores[4].positivas},
                    {name: prestadores[5].nombre, value: prestadores[5].positivas},
                    

                ]"
                
                :options="options"
                :conditions="conditions"
            ></schart>
        </li>
    </ul>

    <p class="center2">
    El porcentaje de aprobación, que es una fracción entre los comentarios positivos y los negativos tomados desde twitter para cada prestador.
    </p>

    </div>

</template>
<script>
import Schart from 'vue-schart';
    //import algo from './otro.js';


export default {


    data() {

        return {

            prestadores:[],
            canvasId: 'myCanvas',
            type: 'bar',
            width: 1280,
            height: 500,
            
            options: {
                title: 'PORCENTAJE DE APROBACION DE LOS PRESTADORES DE SALUD ',display: false,
                bgColor: '#FFFFFF',//FONDO DEL GRAFICO
            titleColor: '#212121',//titulo
            fillColor: '  #4169E1', //barras
            axisColor: '  #4169E1', // border del grafico(titulos eje x e y)
            contentColor: ' #4169E1'//lineas del grafico
            
            },
            //conditions: clearRect(0,myCanvas.width)
        }
    },
    components:{
        Schart
    },

    mounted:function(){
    console.log('Index.vue');

    // GET /someUrl
    this.$http.get('http://localhost:8082/previsor-back/prestador/valoraciones')
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


<style>
  .small {
    max-width: 600px;
    margin:  100px auto;
  }
</style>
