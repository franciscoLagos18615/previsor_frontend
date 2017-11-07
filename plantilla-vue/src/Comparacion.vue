<template>
	<div class="center2">
	<h1>Compara prestadores</h1>
	<p>Selecciona dos prestadores de previsión de salud para comparar la opinión pública en twitter.</p>
		<div style=" background-color: #f5f5f5; padding: 20px;">
			<div v-for="prestador in prestadores" style="display: inline-block; margin: 5px;">
		  <input type="checkbox" :id='prestador.prestadorId' :value='prestador.prestadorId' :disabled="selected.length > 1 && selected.indexOf(prestador.prestadorId) === -1" v-model="selected" @click="checkboxToggle" style="display: inline-block;">
		  <label :for='prestador.prestadorId'>{{prestador.nombre}}</label>
		</div>
		</div>

		<br>
		<table style="width:100%;">
		  <tr>
			<th v-for="prestador in prestadores" v-if="selected[0] == prestador.prestadorId">{{prestador.nombre}}</th>
		  <th v-for="prestador in prestadores" v-if="selected[1] == prestador.prestadorId">{{prestador.nombre}}</th>
		  </tr>

		  <tr>
		    <td v-for="prestador in prestadores" v-if="selected[0] == prestador.prestadorId">Tweets Analizados: {{prestador.valoraciones.length}}</td>
		    <td v-for="prestador in prestadores" v-if="selected[1] == prestador.prestadorId">Tweets Analizados: {{prestador.valoraciones.length}}</td>
		  </tr>

		</table>

		<div class="center2" v-show="selected.length == 2">
        <canvas id="mycanvas" count="1" width="350" height="150" ></canvas>
    	</div>

	</div>
</template>

<script>
	import Schart from 'vue-schart';
    import valor from './valoracionUnica.vue'

	export default {
		name: 'comparacion',
		components:{
       		'app-valoracionUnica':valor
    	},
		props: {

		},
		data(){
			return{
				labels: [' ',' '],
				datosPositivos: [0,0],
				datosNegativos: [0,0],
				datosNeutrales: [0,0],

				selected: [],
				prestadores: [],
				valoraciones: [],
				valoracionesIndexadas: [],
			}
		},
		methods: {
			indiceDe: function(nombre){
				for (var i = 1; i < this.prestadores.length; i++){
  				if (this.prestadores[i].nombre == nombre){
				     return i;
				  }
				return 69;
				}
			},
			checkboxToggle: function(){
				if(this.selected.length == 2){
					this.labels[0] = this.prestadores[this.selected[0]-1].nombre;
					this.labels[1] = this.prestadores[this.selected[1]-1].nombre;

					for (var i = this.valoracionesIndexadas[this.selected[0]-1].length - 1; i >= 0; i--) {
						this.datosPositivos[0] = this.datosPositivos[0] + this.valoracionesIndexadas[this.selected[0]-1][i].positivas;
						this.datosNegativos[0] = this.datosNegativos[0] + this.valoracionesIndexadas[this.selected[0]-1][i].negativas;
						this.datosNeutrales[0] = this.datosNeutrales[0] + this.valoracionesIndexadas[this.selected[0]-1][i].neutrales;
					}
					for (var i = this.valoracionesIndexadas[this.selected[1]-1].length - 1; i >= 0; i--) {
						this.datosPositivos[1] = this.datosPositivos[1] + this.valoracionesIndexadas[this.selected[1]-1][i].positivas;
						this.datosNegativos[1] = this.datosNegativos[1] + this.valoracionesIndexadas[this.selected[1]-1][i].negativas;
						this.datosNeutrales[1] = this.datosNeutrales[1] + this.valoracionesIndexadas[this.selected[1]-1][i].neutrales;
					}
					this.myChart.update();
				}
			},
			startChart: function() {
            var ctx = document.getElementById("mycanvas");
            var myDoughnut = this.myChart =  new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.labels,
                datasets: [{
                    label: 'positivos',
                    data: this.datosPositivos,
                    backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                    borderColor: ['rgba(54, 162, 235, 1)'],
                    borderWidth: 1
                },
                {
                    label: 'negativos',
                    data: this.datosNegativos,
                    backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                    borderColor: ['rgba(255,99,132,1)'],
                    borderWidth: 1
                },
                {
                    label: 'neutrales',
                    data: this.datosNeutrales,
                    borderWidth: 1
                },
                ]
            },
              options: {
                responsive: true,
                defaultFontColor: '#ffffff',        
              }
            });
     	}

		},
		computed: {

		},
	    mounted:function(){
	    this.$http.get('http://localhost:8082/previsor-back/prestador/')
	    .then(response=>{
	      this.prestadores = response.body;
	     console.log('prestadores',this.prestadores);

	     for (var i = this.prestadores.length - 1; i >= 0; i--) {
         this.valoracionesIndexadas.push(this.prestadores[i].valoraciones);
      	 }
      
      console.log('valoracionesIndexadas',this.valoracionesIndexadas);
	    }, response=>{
	       console.log('error cargando los prestadores');
	    });
	    this.$http.get('http://localhost:8082/previsor-back/valoracion/')
	    .then(response=>{
	      this.valoraciones = response.body;
	     console.log('valoraciones',this.valoraciones);
	    }, response=>{
	       console.log('error cargando las valoraciones');
	    });
	    this.startChart();
		}
}
</script>

<style scoped>

table {
    border-collapse: collapse;
    border-style: hidden;
    table-layout: fixed
}

table td, table th {
    border: 1px solid #ddd;
    padding: 15px;
    text-align: center;
}

</style>
