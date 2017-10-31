<template>
<div class="center2">
<h1>Valoraciones por prestador</h1>

<select  v-on:click="hacerFalse()" v-model="selected">
    <option disabled value="">Seleccione un prestador</option>
      <option>Banmédica S.A.</option>
      <option>Chuquicamata Ltda.</option>
     <option>Colmena Golden Cross S.A.</option>
     <option>Consalud S.A.</option>
     <option>Cruz Blanca S.A.</option>
     <option>Cruz del Norte Ltda.</option>
     <option>Nueva Masvida S.A.</option>
     <option>Fundación Ltda.</option>
     <option>Fusat Ltda.</option>
     <option>Masvida S.A.</option>
     <option>Río Blanco Ltda.</option>
     <option>San Lorenzo Ltda.</option>
     <option>Vida Tres S.A.</option>
     <option>Fonasa</option>
</select>

<button v-on:click="hacerTrue()">Consultar</button>

<div v-if="selected != ''">
  <div v-if="clave == true">
  <h3>Información general</h3>
   <table v-for="prestador in prestadores" v-if="selected == prestador.nombre" style="margin-left: auto; margin-right: auto;">
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

<div v-if="selected != ''">
  <div v-if="clave == true">

    <div v-if="selected == 'Banmédica S.A.'">
    <app-valoracionUnica v-bind:nPrestador = 1 ></app-valoracionUnica>

    </div>
    <div v-else-if="selected == 'Chuquicamata Ltda.'">
    <app-valoracionUnica  v-bind:nPrestador = 2 ></app-valoracionUnica>

    </div>
    <div v-else-if="selected == 'Colmena Golden Cross S.A.'">
    <app-valoracionUnica  v-bind:nPrestador = 3 ></app-valoracionUnica>

    </div>
    <div v-else-if="selected == 'Consalud S.A.'">
    <app-valoracionUnica v-bind:nPrestador = 4 ></app-valoracionUnica>

    </div>
    <div v-else-if="selected == 'Cruz Blanca S.A.'">
    <app-valoracionUnica  v-bind:nPrestador = 5 ></app-valoracionUnica>

    </div>
    <div v-else-if="selected == 'Cruz del Norte Ltda.'">
    <app-valoracionUnica v-bind:nPrestador = 6 ></app-valoracionUnica>

    </div>
    <div v-else-if="selected == 'Nueva Masvida S.A.'">
    <app-valoracionUnica v-bind:nPrestador = 7 ></app-valoracionUnica>

    </div>
    <div v-else-if="selected == 'Fundación Ltda.'">
    <app-valoracionUnica  v-bind:nPrestador = 8 ></app-valoracionUnica>

    </div>
    <div v-else-if="selected == 'Fusat Ltda.'">
    <app-valoracionUnica v-bind:nPrestador = 9 ></app-valoracionUnica>

    </div>
    <div v-else-if="selected == 'Masvida S.A.'">
    <app-valoracionUnica  v-bind:nPrestador = 10 ></app-valoracionUnica>

    </div>
    <div v-else-if="selected == 'Río Blanco Ltda.'">
    <app-valoracionUnica v-bind:nPrestador = 11 ></app-valoracionUnica>

    </div>
    <div v-else-if="selected == 'San Lorenzo Ltda.'">
    <app-valoracionUnica v-bind:nPrestador = 12 ></app-valoracionUnica>

    </div>
    <div v-else-if="selected == 'Vida Tres S.A.'">
    <app-valoracionUnica  v-bind:nPrestador = 13 ></app-valoracionUnica>

    </div>
    <div v-else-if="selected == 'Fonasa'">
    <app-valoracionUnica  v-bind:nPrestador = 14 ></app-valoracionUnica>

    </div>

  </div>
</div>
</div>


</template>
<script>
    import Schart from 'vue-schart';
    import valor from './valoracionUnica.vue'

export default {
    components:{
       'app-valoracionUnica':valor
    },
    data() {
        return{
            prestadores:[],
            selected: '',
            clave: false
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
  },
  computed: {
    logo: function () {
    switch(this.selected){
    case 'Banmédica S.A.':
      return "http://www.supersalud.gob.cl/664/articles-2528_banmedica.jpg"
    case 'Chuquicamata Ltda.':
      return "http://www.supersalud.gob.cl/664/articles-2528_chuquicamata.bmp"
    case 'Colmena Golden Cross S.A.':
      return "http://www.supersalud.gob.cl/664/articles-2528_colmena.jpg"
    case 'Consalud S.A.':
      return "http://www.supersalud.gob.cl/664/articles-2528_consalud.jpg"
    case 'Cruz Blanca S.A.':
      return "http://www.supersalud.gob.cl/664/articles-2528_recurso_1.bmp"
    case 'Cruz del Norte Ltda.':
      return "http://www.supersalud.gob.cl/664/articles-2528_cruzdelNorte.png"
    case 'Nueva Masvida S.A.':
      return "http://www.supersalud.gob.cl/664/articles-2528_optima.jpg"
    case 'Fundación Ltda.':
      return "http://www.supersalud.gob.cl/664/articles-2528_fundacion.jpg"
    case 'Fusat Ltda.':
      return "http://www.supersalud.gob.cl/664/articles-2528_fusat.jpg"
    case 'Río Blanco Ltda.':
      return "http://www.supersalud.gob.cl/664/articles-2528_RioBlanco.jpg"
    case 'San Lorenzo Ltda.':
      return "http://www.supersalud.gob.cl/664/articles-2528_SanLorenzo.jpg"
    case 'Vida Tres S.A.':
      return "http://www.supersalud.gob.cl/664/articles-2528_VidaTres.jpg"
    case 'Fonasa':
      return "https://upload.wikimedia.org/wikipedia/commons/0/08/Logo_de_Fonasa.jpg"
    default:
      return "http://www.calculens.com:8080/Calculens/images/img_default.jpg"

    }
    }
  }
}

</script>
