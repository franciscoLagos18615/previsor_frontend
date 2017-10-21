<template>
<div class="center2">
<h1>Valoraciones por prestador</h1>

<select  v-on:click="hacerFalse()" v-model="selected">
    <option disabled value="">Please select one</option>
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
    }



}

</script>
