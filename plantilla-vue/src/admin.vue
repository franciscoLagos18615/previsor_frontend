<template>
    <div id="add-blog">
        <h2>Menu administrador</h2>
        <form v-if="!submitted">
            <label>Nueva keyword:</label>
            <input type="text" v-model="keyword"/>
            <p>                      </p>
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
            submitted: false
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
input[type="text"], textarea{
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
