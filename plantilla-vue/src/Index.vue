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
            
            
        </li>
    </ul>
    <h3 class="center2">Ranking general</h3>
    <div class="center2">
        <canvas id="mycanvas" count="1" width="350" height="150" ></canvas>
    </div>
    <p class="center2">
    El porcentaje de aprobación, que es una fracción entre los comentarios positivos y los negativos tomados desde twitter para cada prestador.
    </p>
    </div>

</template>

<script>
import Schart from 'vue-schart';

export default {


    data() {

        return {

            prestadores:[],
            labels: [],
            datos: [],
            mybackgroundcolor : [],
            mybordercolor : []  ,
        }
    },
    components:{
        Schart
    },
    methods: {
            startChart: function() {
            var ctx = document.getElementById("mycanvas");
            var myDoughnut = this.myChart =  new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.labels,
                datasets: [{
                    label: 'Porcentaje de evaluacion positiva de las isapres y fonasa (%)',
                    data: this.datos,
                    backgroundColor: this.mybackgroundcolor,
                    borderColor: this.mybordercolor,
                    borderWidth: 1
                }]
            },
              options: {
                responsive: true,
                defaultFontColor: '#ffffff',        
              }
            });
      },
      getDatos: function(){
            for (var i = this.prestadores.length - 1; i >= 0; i--) {
                this.labels.push(this.prestadores[i].nombre);
                this.datos.push(this.prestadores[i].positivas);
                this.mybordercolor.push('rgba(54, 162, 235, 1)');
                this.mybackgroundcolor.push('rgba(54, 162, 235, 0.2)');
            }
            console.log("labels",this.labels);
            console.log("datos",this.datos);
      }

        },

    mounted:function(){
    console.log('Index.vue');

    // GET /someUrl
    this.$http.get('http://localhost:8082/previsor-back/prestador/valoraciones')
    .then(response=>{
       // get body data
      this.prestadores = response.body;
     console.log('prestadores',this.prestadores);
     this.getDatos();
     this.startChart();

    }, response=>{
       // error callback
       console.log('error cargando los prestadores');
    });
  }
}
</script>


<style>
  .small {
    max-width: 600px;
    margin:  100px auto;
  }
</style>
