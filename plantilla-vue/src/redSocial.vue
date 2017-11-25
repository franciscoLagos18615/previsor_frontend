<template>
<div id="add-blog">
<table style="width:100%;">
	<tr>
	<h2 style="text-align:center">Red Social</h2>
	</tr>
	<tr>
	<h3 style="text-align:center">Nivel de influencia por numero de seguidores</h3>
	</tr>
	<tr>
	<div id="centerDiv">

	<ul class="centerUL">
    <li><canvas id="circlecanvas" width="40" height="40"></canvas>Menos de 5000</li>
    <li><canvas id="circlecanvas2" width="40" height="40"></canvas> Entre 5000 y 10000</li>
    <li><canvas id="circlecanvas3" width="40" height="40"></canvas> Entre 10000 y 15000</li>

</ul>
</div>

	</tr>

	<tr>

		<select v-on:click="hacerFalse()" v-model="selected">
		    <option disabled value="">Seleccione un Prestador</option>
		                <option v-for="prestador in prestadores" :value='prestador.prestadorId'>{{prestador.nombre}}</option>
		</select>

		<button v-on:click="hacerTrue()">Consultar</button>
	</tr>
  	<tr>
			<div v-if="selected != ''">
			  <div v-if="clave == true">

	<app-graphic> </app-graphic>
</div>
</div>
	</tr>



</table>










</div>

</template>

<script>
	import Schart from 'vue-schart';
    import sigma from 'sigmajs'
import graph from './grafoUnico.vue'

	export default {
		name: 'comparacion',
		components:{
       		'SigmaJs':sigma,
           'app-graphic': graph
    	},
		props: {

		},
		data(){
			return{
				selected: '',
				clave: false,
				dato:'',
				labels: ['Positivos', 'Negativos','Neutros'],
				data: [1,2,3],
				data2:[3,4,5],
				nodos: [],
				twits:[],
				nodos:[],
				valoraciones: [],
          prestadores:[],
				mybackgroundcolor : ['rgba(75,0,192,0.1)','rgba(0,88,88,0.1)'],
        mybordercolor : ['rgba(75,192,192,1)','rgba(0,192,192,1)']

			}
		},
		methods: {
			indiceDe: function(nombre){
				for (var i = 1; i < this.prestadores.length; i++){container
  				if (this.prestadores[i].nombre == nombre){
				     return i;
				  }
				return 69;
				}
			},
			busqueda:function(idABuscar){
			console.log('estoy aqui');


		},
			hacerFalse:function(){
				console.log(this.selected);
				console.log(this.clave);
			 this.clave = false;
		 },
hacerTrue:function(){
	 this.clave = true;
	 console.log(this.selected);
	 console.log(this.clave);
	 //this.creaTweets();
}

		},
		computed: {
		},
	    mounted:function(){
			this.$http.get('http://localhost:8082/previsor-back/prestador') //Retorna prestadores
			.then(response=>{
					this.prestadores = response.body;
					console.log('primer',this.prestadores);

			}, response=>{
				 console.log('error cargando los prestadores');
			});
			// Let's first

		}
}
</script>

<style scoped>
div#centerDiv {
			 width: 100%;
			 text-align: center;
	 }
ul.centerUL {
			 margin: 2px auto;
			 line-height: 1.4;
			 padding-left: 0;
	 }
	 .centerUL li {
			 display: inline;
			 text-align: center;
	 }

.contenedor {
    max-width: 800px;
    height: 500px;
    margin: auto;
		 background-color: white;

  }
table {
    border-collapse: collapse;
    border-style: hidden;
    table-layout: fixed
}
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 1000px;
}


</style>
