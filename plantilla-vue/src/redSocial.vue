<template>
<div id="container"> </div>

</template>

<script>
	import Schart from 'vue-schart';
    import sigma from 'sigmajs'

	export default {
		name: 'comparacion',
		components:{
       		'SigmaJs':sigma,
    	},
		props: {

		},
		data(){
			return{
				labels: ['Positivos', 'Negativos','Neutros'],
				data: [1,2,3],
				data2:[3,4,5],
				selected: [],
				prestadores: [],
				valoraciones: [],
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

		},
		computed: {

		},
	    mounted:function(){
			this.$http.get('http://localhost:8082/previsor-back/prestador/')
			.then(response=>{
				this.prestadores = response.body;
			 console.log('prestadores',this.prestadores);
			 const myObjStr = JSON.stringify(this.prestadores);
			var data = {
  "nodes": [
    {
      "id": "n0",
      "label": "A node",
      "x": 0,
      "y": 0,
      "size": 3
    },
    {
      "id": "n1",
      "label": "Another node",
      "x": 3,
      "y": 1,
      "size": 2
    },
  ],
  "edges": [
    {
      "id": "e0",
      "source": "n0",
      "target": "n1"
    },
  ]
};
console.log(data);
var s = new sigma({
        graph: data,
        container: 'container',
        settings: {
            defaultNodeColor: '#ec5148'
        }
});
			}, response=>{
				 console.log('error cargando los prestadores');
			});
			// Let's first

		}
}
</script>

<style scoped>
div {
    max-width: 800px;
    height: 800px;
    margin: auto;
		 background-color: white;

  }
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
