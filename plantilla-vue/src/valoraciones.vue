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

    <div v-for="ptweet in lostweets" v-if="selected == ptweet.prestador" style="margin-left: auto; margin-right: auto;">

        <component-view :id=ptweet.tweetId></component-view>
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
            arregloTweets: [],
            lostweets:[]
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
      console.log('prestadores',this.prestadores);

      var a = [
    {"prestador": 1, "tweetId" : '927363782703239169' },
    {"prestador": 1, "tweetId" : '931936739463254016' },
    {"prestador": 1, "tweetId" : '934548067528912902' },
    {"prestador": 1, "tweetId" : '934543526079188992' },
    {"prestador": 1, "tweetId" : '927363782703239169' },
    {"prestador": 1, "tweetId" : '931936739463254016' },
    {"prestador": 1, "tweetId" : '934548067528912902' },
    {"prestador": 1, "tweetId" : '934543526079188992' },
    {"prestador": 2, "tweetId" : '927733352676954112' },
    {"prestador": 2, "tweetId" : '927734181446279170' },
    {"prestador": 2, "tweetId" : '927764249723785216' },
    {"prestador": 2, "tweetId" : '927337586661711872' },
    {"prestador": 2, "tweetId" : '927363095894396928' },
    {"prestador": 2, "tweetId" : '927708780829315073' },
    {"prestador": 2, "tweetId" : '927729744925388801' },
    {"prestador": 2, "tweetId" : '927730931741483014' },
    {"prestador": 2, "tweetId" : '927732458531049472' },
    {"prestador": 2, "tweetId" : '927734048193118209' },
    {"prestador": 3, "tweetId" : '933702110729986048' },
    {"prestador": 3, "tweetId" : '933054810860982272' },
    {"prestador": 3, "tweetId" : '927735602161823744' },
    {"prestador": 3, "tweetId" : '926967648046538752' },
    {"prestador": 3, "tweetId" : '927239259769196544' },
    {"prestador": 3, "tweetId" : '927733840080195584' },
    {"prestador": 3, "tweetId" : '933057255909466112' },
    {"prestador": 3, "tweetId" : '931581959167512577' },
    {"prestador": 4, "tweetId" : '934083863915253760' },
    {"prestador": 4, "tweetId" : '934083863915253760' },
    {"prestador": 4, "tweetId" : '933164265623633926' },
    {"prestador": 5, "tweetId" : '933528881843318785' },
    {"prestador": 5, "tweetId" : '927272351363866624' },
    {"prestador": 5, "tweetId" : '927639352091426816' },
    {"prestador": 5, "tweetId" : '927639836810403840' },
    {"prestador": 5, "tweetId" : '927268052357455873' },
    {"prestador": 5, "tweetId" : '931966529427656705' },
    {"prestador": 5, "tweetId" : '932932010116550658' },
    {"prestador": 5, "tweetId" : '933712141512794113' },
    {"prestador": 5, "tweetId" : '934552791321907201' },
    {"prestador": 5, "tweetId" : '934552802151555072' },
    {"prestador": 6, "tweetId" : '926901970165739522' },
    {"prestador": 6, "tweetId" : '926899753647878144' },
    {"prestador": 6, "tweetId" : '933707132553367552' },
    {"prestador": 6, "tweetId" : '933707132553367552' },
    {"prestador": 6, "tweetId" : '933707132553367552' },
    {"prestador": 6, "tweetId" : '933707132553367552' },
    {"prestador": 6, "tweetId" : '933707132553367552' },
    {"prestador": 6, "tweetId" : '933707132553367552' },
    {"prestador": 6, "tweetId" : '933707132553367552' },
    {"prestador": 6, "tweetId" : '933707132553367552' },
    {"prestador": 8, "tweetId" : '927599290750513152' },
    {"prestador": 8, "tweetId" : '927733352676954112' },
    {"prestador": 8, "tweetId" : '927734181446279170' },
    {"prestador": 8, "tweetId" : '927764249723785216' },
    {"prestador": 8, "tweetId" : '927337586661711872' },
    {"prestador": 8, "tweetId" : '927363095894396928' },
    {"prestador": 8, "tweetId" : '927708780829315073' },
    {"prestador": 8, "tweetId" : '927729744925388801' },
    {"prestador": 8, "tweetId" : '927730931741483014' },
    {"prestador": 8, "tweetId" : '927732458531049472' },
    {"prestador": 10, "tweetId" : '933406362637406209' },
    {"prestador": 10, "tweetId" : '931582860821237760' },
    {"prestador": 10, "tweetId" : '927362284053078016' },
    {"prestador": 10, "tweetId" : '927666253673705472' },
    {"prestador": 10, "tweetId" : '931338119470895104' },
    {"prestador": 10, "tweetId" : '933406700710883328' },
    {"prestador": 10, "tweetId" : '926885352832425984' },
    {"prestador": 10, "tweetId" : '927365386689024001' },
    {"prestador": 10, "tweetId" : '927735111159832578' },
    {"prestador": 10, "tweetId" : '931162802294796289' },
    {"prestador": 10, "tweetId" : '933406362637406209' },
    {"prestador": 10, "tweetId" : '931582860821237760' },
    {"prestador": 10, "tweetId" : '927362284053078016' },
    {"prestador": 10, "tweetId" : '927666253673705472' },
    {"prestador": 10, "tweetId" : '931338119470895104' },
    {"prestador": 10, "tweetId" : '933406700710883328' },
    {"prestador": 10, "tweetId" : '926885352832425984' },
    {"prestador": 10, "tweetId" : '927365386689024001' },
    {"prestador": 10, "tweetId" : '927735111159832578' },
    {"prestador": 10, "tweetId" : '931162802294796289' },
    {"prestador": 10, "tweetId" : '933406362637406209' },
    {"prestador": 10, "tweetId" : '931582860821237760' },
    {"prestador": 10, "tweetId" : '927362284053078016' },
    {"prestador": 10, "tweetId" : '927666253673705472' },
    {"prestador": 10, "tweetId" : '931338119470895104' },
    {"prestador": 10, "tweetId" : '933406700710883328' },
    {"prestador": 10, "tweetId" : '926885352832425984' },
    {"prestador": 10, "tweetId" : '927365386689024001' },
    {"prestador": 10, "tweetId" : '927735111159832578' },
    {"prestador": 10, "tweetId" : '931162802294796289' },
    {"prestador": 12, "tweetId" : '927357863810519040' },
    {"prestador": 12, "tweetId" : '927596652864720897' },
    {"prestador": 12, "tweetId" : '933131281642283009' },
    {"prestador": 12, "tweetId" : '933706297639350272' },
    {"prestador": 12, "tweetId" : '933706906589331456' },
    {"prestador": 12, "tweetId" : '927733352676954112' },
    {"prestador": 12, "tweetId" : '927734181446279170' },
    {"prestador": 12, "tweetId" : '927764249723785216' },
    {"prestador": 12, "tweetId" : '927337586661711872' },
    {"prestador": 12, "tweetId" : '927363095894396928' },
    {"prestador": 13, "tweetId" : '933706262872842242' },
    {"prestador": 13, "tweetId" : '933703397290758145' },
    {"prestador": 13, "tweetId" : '931333113149472768' },
    {"prestador": 13, "tweetId" : '933328023411183617' },
    {"prestador": 13, "tweetId" : '933328023411183617' },
    {"prestador": 13, "tweetId" : '933328023411183617' },
    {"prestador": 13, "tweetId" : '927741406382133248' },
    {"prestador": 13, "tweetId" : '931952193279873024' },
    {"prestador": 13, "tweetId" : '934641271477555200' },
    {"prestador": 13, "tweetId" : '931585541816180737' },
    {"prestador": 14, "tweetId" : '933420945036935169' },
    {"prestador": 14, "tweetId" : '927732636134596608' },
    {"prestador": 14, "tweetId" : '927261553782648832' },
    {"prestador": 14, "tweetId" : '927348115946004482' },
    {"prestador": 14, "tweetId" : '927362733611405312' },
    {"prestador": 14, "tweetId" : '927366076937236480' },
    {"prestador": 14, "tweetId" : '927369950842507264' },
    {"prestador": 14, "tweetId" : '927730098962337793' },
    {"prestador": 14, "tweetId" : '927730971578916865' },
    {"prestador": 14, "tweetId" : '927731472387190785' }
  ];
  this.lostweets = a;
  console.log(a);



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
