<template>
	<div class="center2">
		<div v-for="prestador in prestadores" style="display: inline-block; margin: 5px;">
		  <input type="checkbox" :id='prestador.nombre' :value='prestador.nombre' :disabled="selected.length > 1 && selected.indexOf(prestador.nombre) === -1" v-model="selected">
		  <label :for='prestador.nombre'>{{prestador.nombre}}</label>
		</div>
		<br>
		<table style="width:100%">
		  <tr>
			<th v-for="prestador in prestadores" v-if="selected[0] == prestador.nombre">{{prestador.nombre}}</td> 
		  </th>
		  <th v-for="prestador in prestadores" v-if="selected[1] == prestador.nombre">{{prestador.nombre}}</td> 
		  </th>
		  <tr>
		    <td v-for="prestador in prestadores" v-if="selected[0] == prestador.nombre">{{prestador.prestadorId}}</td>
		    <td v-for="prestador in prestadores" v-if="selected[1] == prestador.nombre">{{prestador.prestadorId}}</td>
		  </tr>
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
				prestadores: []
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
			}

		},
		computed: {

		},
	    mounted:function(){
	    // GET /someUrl
	    this.$http.get('http://localhost:8082/previsor-back/prestador/')
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

<style scoped>
	
</style>