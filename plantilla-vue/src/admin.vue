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
            <button v-on:click="ingreso">Ingresar</button>
            <button v-on:click="mostrarPass">Mostrar</button>
        </form>
        <form v-if="!submitted, autenticado">
            <label>Nueva keyword:</label>
            <input type="text" v-model="keyword"/>
            <br/>
            <button v-on:click="post">Confirmar</button>
        </form>

    </div>
</template>

<script>
// Imports

export default {
    data () {
        return {
                keyword: '',
            submitted: false,
            contrasena: '',
            autenticado: false,
            showPass: false,
        }
    },
    methods: {
        post: function(){
        console.log(this.keyword);

            this.$http.post('http://localhost:8082/previsor-back/keyword', {
                "palabra": this.keyword
            }).then(function(data){
                console.log(data);
                alert('Se ha insertado correctamente');

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
                    alert("Contraseña correcta");
                }
    });
        }
    }
}
</script>

<style>
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
