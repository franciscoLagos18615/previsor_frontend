<template>
	<div class="center2">
	<h1>Compara prestadores</h1>
	<p>Selecciona dos prestadores de previsión de salud para comparar la opinión pública en twitter.</p>
		<div style=" background-color: #f5f5f5; padding: 20px;">
			<div v-for="prestador in prestadores" style="display: inline-block; margin: 5px;">
		  <input type="checkbox" :id='prestador.prestadorId' :value='prestador.prestadorId' :disabled="selected.length > 1 && selected.indexOf(prestador.prestadorId) === -1" v-model="selected">
		  <label :for='prestador.prestadorId'>{{prestador.nombre}}</label>
		</div>
		</div>

		<br>
		<table style="width:100%">
		  <tr>
			<th v-for="prestador in prestadores" v-if="selected[0] == prestador.prestadorId">{{prestador.nombre}}</th> 
		  <th v-for="prestador in prestadores" v-if="selected[1] == prestador.prestadorId">{{prestador.nombre}}</th> 
		  </tr>

		  <tr>
		    <td v-for="prestador in prestadores" v-if="selected[0] == prestador.prestadorId">Twitts Analizados: {{prestador.valoraciones.length}}</td>
		    <td v-for="prestador in prestadores" v-if="selected[1] == prestador.prestadorId">Twitts Analizados: {{prestador.valoraciones.length}}</td>
		  </tr>

		  <!-- ACA DEBERÍA IR EL NUEVO GRÁFICO
		  <tr>
			<th v-for="prestador in prestadores" v-if="selected[0] == prestador.prestadorId"><app-valoracionUnica v-bind:nPrestador = prestador.prestadorId /></th> 
		  <th v-for="prestador in prestadores" v-if="selected[1] == prestador.prestadorId"><app-valoracionUnica v-bind:nPrestador = prestador.prestadorId /></th> 
		  </tr>
		  -->

		</table>
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
				selected: [],
				prestadores: [],
				valoraciones: []
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
		},
		computed: {

		},
	    mounted:function(){
	    this.$http.get('http://localhost:8082/previsor-back/prestador/')
	    .then(response=>{
	      this.prestadores = response.body;
	     console.log('prestadores',this.prestadores);
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