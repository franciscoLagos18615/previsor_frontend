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
	<div id="centerDiv">

	<select v-on:click="hacerFalse()" v-model="selected">
	    <option disabled value="">Seleccione un Prestador</option>
	                <option v-for="prestador in prestadores" :value='prestador.prestadorId'>{{prestador.nombre}}</option>
	</select>
	<button v-on:click="hacerTrue()">Consultar</button>
	</div>

	</tr>

	<tr>

	<div v-if="selected != ''">
	  <div v-if="clave == true">
	<app-grafoUnico> </app-grafoUnico>
	</div>
</div>
	</tr>



</table>










</div>

</template>

<script>
    import grafo from './grafoUnico.vue'

	export default {
		name: 'comparacion',
		components:{
       		'app-grafoUnico':grafo,
    	},
		props: {

		},
		data(){
			return{
				selected: '',
				clave: false,
				prestadores:[],
			}
		},
		methods: {
			hacerTrue:function(){
				 this.clave = true;
				 console.log(this.selected);
				 console.log(this.clave);
			},
			hacerFalse:function(){
				console.log(this.selected);
				console.log(this.clave);
			 this.clave = false;
			}

		},
		computed: {
		},
	  mounted:function(){
			this.$http.get('http://localhost:8082/previsor-back/prestador/')
			.then(response=>{
					this.prestadores = response.body;

					console.log('primer3.5',this.prestadores);

					var canvas = document.getElementById("circlecanvas");
					var context = canvas.getContext("2d");
					context.arc(20, 20, 20, 0, Math.PI * 2, false);
					context.fillStyle = "#f0e837";
					context.fill()

					var canvas = document.getElementById("circlecanvas2");
					var context = canvas.getContext("2d");
					context.arc(20, 20, 20, 0, Math.PI * 2, false);
					context.fillStyle = "#4e9a4e";
					context.fill()

					var canvas = document.getElementById("circlecanvas3");
					var context = canvas.getContext("2d");
					context.arc(20, 20, 20, 0, Math.PI * 2, false);
					context.fillStyle = "#ec5148";
					context.fill()
					// Let's first
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
