<template>
    <div id="add-blog">
        <h2>Menu administrador</h2>

        <form v-if="!autenticado">
            <p>
            Ingrese su contraseña para desbloquear las funcionalidades de administrador.
            </p>
            <label>Contraseña:</label>
            <input type="password" v-model="contrasena" v-show="!showPass"/>
            <input type="text" v-model="contrasena" v-show="showPass"/>
            <br/>
            <button v-on:click="ingreso">Ingresar</button>
            <button v-on:click="mostrarPass">Mostrar</button>
        </form>

        <div v-if="autenticado">
            <h3>Prestadores</h3>
            <p>Revise los prestadores existentes en el sistema.</p>
            <table>
                <!--
                <thead>
                    <tr>
                        <th>Nombre</th><th></th>
                    </tr>    
                </thead>
                -->
            <tr v-for="prestador in prestadores">
                <th style="padding-bottom: 5px; padding-right: 30px">{{prestador.nombre}}</th>
                <th><button v-on:click="borrarPrestador('id')">Borrar</button></th>
            </tr>
            </table>
        </div>

        <div v-if="autenticado"style="padding-top: 10px; padding-bottom: 10px;"><hr></div>

        <form v-if="!submitted, autenticado">
            <h3>Agregar Keywords</h3>
            <p>
            Ingrese una nueva palabra clave para agregar a PreVisor.
            </p>
            <label>Nueva keyword:</label>
            <input type="text" v-model="keyword"/>
            <label style="display: inline-block">Asignado a un prestador?</label>
            <input type="checkbox" id="checkbox" v-model="pAsignado">
            <br/>
            <select v-model="prestadorSelected" v-show="pAsignado"style="margin-bottom: 20px">
                <option disabled value="">Seleccione un Prestador</option>
                <option v-for="prestador in prestadores" :value='prestador.prestadorId'>{{prestador.nombre}}</option>
            </select>
            <br/>
            <button v-on:click="post">Confirmar</button>
        </form>

        <div v-if="autenticado"style="padding-top: 10px; padding-bottom: 10px;"><hr></div>

        <form v-if="!submitted, autenticado">
            <h3>Agregar Prestadores</h3>
            <p>
            Ingrese un nuevo prestador para observar en PreVisor.
            </p>
            <label>Nombre:</label>
            <input type="text" v-model="pNombre"/>
            <label>Código superintendencia:</label>
            <input type="text" v-model="pCodigo"/>
            <label>Página Web:</label>
            <input type="text" v-model="pEnlace"/>
            <label>Teléfono 24x7:</label>
            <input type="text" v-model="pFono"/>
            <br/>
            <button v-on:click="postPrestador">Confirmar</button>
        </form>

        <div v-if="autenticado"style="padding-top: 10px; padding-bottom: 10px;"><hr></div>

        <form v-if="!submitted, autenticado">
            <h3>Actualización de contraseña</h3>
            <p>
            Ingrese la contraseña actual y la nueva para actualizarla.
            </p>
            <label>Contraseña actual:</label>
            <input type="password" v-model="contrasenaActual" v-show="!showPass"/>
            <input type="text" v-model="contrasenaActual" v-show="showPass"/>
            <label>Nueva contraseña:</label>
            <input type="password" v-model="contrasenaNueva" v-show="!showPass"/>
            <input type="text" v-model="contrasenaNueva" v-show="showPass"/>
            <br/>
            <button v-on:click="cambio">Cambiar</button>
            <button v-on:click="mostrarPass">Mostrar</button>
        </form>

    </div>
</template>

<script>
// Imports

export default {
    data () {
        return {
            prestadores:[],
            keyword: '',
            submitted: false,
            contrasena: '',
            autenticado: false,
            showPass: false,
            contrasenaActual: '',
            contrasenaNueva: '',
            actualBuena: false,
            pNombre: '',
            pCodigo: '',
            pEnlace: '',
            pFono: '',
            prestadorSelected: 0,
            pAsignado: false
        }
    },
    methods: {
        post: function(){
        console.log(this.keyword);

            this.$http.post('http://localhost:8082/previsor-back/keyword', {
                "palabra": this.keyword
            }).then(function(data){
                if(this.pAsignado){
                    this.$http.post('http://localhost:8082/previsor-back/keyword/' + data.body.keywordId + '/prestador/' +  this.prestadorSelected, {
                    }).then(function(data){
                        console.log(data);
                        alert('Se ha insertado correctamente y se ha asignado a un prestador');
                    });
                }
                else{
                    alert('Se ha insertado correctamente');
                }
            });
        },
        mostrarPass: function(){
            if(this.showPass === true){
                this.showPass = false;
            }
            else{
                this.showPass = true;
            }
            
        },
        ingreso: function(){
            this.$http.get('http://localhost:8082/previsor-back/user/verify/admin/' + this.contrasena).then(response=>{
                this.autenticado = response.body.estado;
                if(this.autenticado === false){
                    alert("Contraseña incorrecta");
                    this.contrasena = '';
                }
                else{
                    this.showPass = false;
                    alert("Contraseña correcta");
                }
    });
        },
        cambio: function(){
            this.$http.get('http://localhost:8082/previsor-back/user/verify/admin/' + this.contrasenaActual).then(response=>{
                this.actualBuena = response.body.estado;
                if(this.actualBuena === false){
                    alert("Contraseña actual incorrecta");
                }
                else{
                    // Rest para cambiar la contraseña
                    alert("La contraseña se ha modificado exitosamente");
                }
                this.contrasenaNueva = '';
                this.contrasenaActual = '';
    });
        },
        postPrestador: function(){
            this.$http.post('http://localhost:8082/previsor-back/prestador', {
                "nombre": this.pNombre,
                "enlace": this.pEnlace,
                "fono24x7": this.pFono,
                "codigo_sis": this.pCodigo
            }).then(function(data){
                console.log(data);
                alert('Se ha agregado un prestador correctamente');

            });
        }
        ,
        borrarPrestador: function(id){
            //TODO metodo get para borrar un prestador
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
  }
}
</script>

<style>
table{
    text-align: left;
    padding-bottom: 10px
}
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea, input[type="password"]{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 0;
}
</style>
