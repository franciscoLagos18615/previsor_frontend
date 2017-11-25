<template>
<div class="center2">
<h1>Valoraciones por prestador</h1>

<select v-on:click="hacerFalse()" v-model="selected">
    <option disabled value="">Seleccione un Prestador</option>
                <option v-for="prestador in prestadores" :value='prestador.prestadorId'>{{prestador.nombre}}</option>
</select>

<button v-on:click="hacerTrue()">Consultar</button>

<!-- INFO GENERAL -->
<div v-if="selected != ''">
  <div v-if="clave == true">
  <h3>Información general</h3>
   <table v-for="prestador in prestadores" v-if="selected == prestador.prestadorId" style="margin-left: auto; margin-right: auto;">
      <tr>
        <td rowspan="3">
        <img :src="logo" style="max-width: 200px; padding:10px" />
        </td>
        <td>Página Web: </td><td>{{prestador.enlace}}</td>
      </tr>
      <tr>
        <td>Teléfono 24x7: </td><td>{{prestador.fono24x7}}</td>
      </tr>
      <tr>
        <td>Código de la superintendencia: </td><td>{{prestador.codigo_sis}}</td>
      </tr>
    </table>

  </div>
</div>

<!-- GRAFICO -->
<div v-if="selected != ''">
  <div v-if="clave == true">
   <div v-for="prestador in prestadores" v-if="selected == prestador.prestadorId" style="margin-left: auto; margin-right: auto;">
      <app-valoracionUnica v-bind:nPrestador = "prestador.prestadorId" ></app-valoracionUnica>
    </div>
  </div>
</div>

<!-- TWEETS -->
<div  v-if="selected != ''">
  <div v-if="clave == true">
  <h3>Tweets</h3>

    <div v-for="ptweet in pTweets" v-if="selected == ptweet.prestadorId" style="margin-left: auto; margin-right: auto;">
      <div v-for="valoracion in ptweet.valoraciones">
        <component-view :id="valoracion.idTweet"></component-view>
      </div>
    </div>

  </div>
</div>

</div>

</template>

<script>
//import { Tweet, Moment } from 'vue-tweet-embed'
import Tweet from 'vue-tweet-embed/tweet'

    import Schart from 'vue-schart';
    import valor from './valoracionUnica.vue'
    //import TweetEmbed from 'react-tweet-embed'

export default {
    components:{
        'component-view': Tweet,
       'app-valoracionUnica':valor
       
    },
    data() {
        return{
            prestadores:[],
            selected: '',
            clave: false,
            valoraciones:[],
            pTweets: [],
            arregloTweets: []
        }
    },
    methods: {
      hacerTrue:function(){
         this.clave = true;
         console.log(this.selected);
         console.log(this.clave);
         this.creaTweets();
      },
      creaTweets: function(){
      this.arregloTweets = this.pTweets[this.selected - 1];
      console.log('this.arregloTweets: ',this.arregloTweets);
      },
      hacerFalse:function(){
        console.log(this.selected);
        console.log(this.clave);
       this.clave = false;
      }
    },
    mounted:function(){
    // GET /someUrl
    this.$http.get('http://localhost:8082/previsor-back/prestador/')
    .then(response=>{
       // get body data
      this.prestadores = response.body;
      console.log('prestadores',this.prestadores)

      for (var i = this.prestadores.length - 1; i >= 0; i--) {
        this.valoraciones.push(this.prestadores[i].valoraciones);
      }
      
      console.log('valoraciones',this.valoraciones);
    
    }, response=>{
       // error callback
       console.log('error cargando los prestadores');
    });

    this.$http.get('http://localhost:8082/previsor-back/prestador/tweets')
    .then(response=>{
       // get body data
      this.pTweets = response.body;
      console.log('pTweets',this.pTweets);

      for (var i = this.pTweets.length - 1; i >= 0; i--) {
        this.arregloTweets.push(this.pTweets[i].valoraciones);
      }
    
    }, response=>{
       // error callback
       console.log('error cargando los tweets');
    });
  },
  computed: {
    logo: function () {
    switch(this.selected){
    case 1:
      return "http://www.supersalud.gob.cl/664/articles-2528_banmedica.jpg"
    case 2:
      return "http://www.supersalud.gob.cl/664/articles-2528_chuquicamata.bmp"
    case 3:
      return "http://www.supersalud.gob.cl/664/articles-2528_colmena.jpg"
    case 4:
      return "http://www.supersalud.gob.cl/664/articles-2528_consalud.jpg"
    case 5:
      return "http://www.supersalud.gob.cl/664/articles-2528_recurso_1.bmp"
    case 6:
      return "http://www.supersalud.gob.cl/664/articles-2528_cruzdelNorte.png"
    case 7:
      return "http://www.supersalud.gob.cl/664/articles-2528_optima.jpg"
    case 8:
      return "http://www.supersalud.gob.cl/664/articles-2528_fundacion.jpg"
    case 9:
      return "http://www.supersalud.gob.cl/664/articles-2528_fusat.jpg"
    case 10:
      return "http://www.supersalud.gob.cl/664/articles-2528_RioBlanco.jpg"
    case 11:
      return "http://www.supersalud.gob.cl/664/articles-2528_SanLorenzo.jpg"
    case 12:
      return "http://www.supersalud.gob.cl/664/articles-2528_VidaTres.jpg"
    case 13:
      return "https://upload.wikimedia.org/wikipedia/commons/0/08/Logo_de_Fonasa.jpg"
    default:
      return "http://www.calculens.com:8080/Calculens/images/img_default.jpg"

    }
    }
  }
}
</script>
