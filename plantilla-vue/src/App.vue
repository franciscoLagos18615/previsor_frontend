<template>
  <div>
    <header>
      <div class="branding">
        <img class ="logo-small" src="./img/PreVisor_logo_vector.svg" />

      </div>
      <nav>
        <a href="#/">Home</a>

        <a href="#/uno">Valoraciones</a>
        <a href="#/admin">Administración</a>
        <a href="#/comparacion">Compara</a>
        <a href="#/redSocial">Red Social</a>
        <a href="#/mapasPorCiudad">Mapa</a>

      </nav>

    </header>

    <main class="container">
      <router-view></router-view>
    </main>


    <footer>
      Grupo 7 - Taller de base de datos - 2do semestre 2017
    </footer>
</div>
</template>

<script>


</script>

<style >


  .leaflet-fake-icon-image-2x {
  background-image: url(../node_modules/leaflet/dist/images/marker-icon-2x.png);
}
.leaflet-fake-icon-shadow {
  background-image: url(../node_modules/leaflet/dist/images/marker-shadow.png);
}
@import "../node_modules/leaflet/dist/leaflet.css";

body {
  margin: 0px;
  font-family: Helvetica, Verdana, sans-serif;
}

#side {
  float:left;
  width:208px;
}

#full_div {
  position: absolute;
  overflow-x: auto;
  top: 0;
  right: 0;
  left: 208px;
  bottom: 0;
  padding-left: 8px;
  border-left: 1px solid #ccc;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}


li {
  font: 200 15px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
}

li:last-child {
  border: none;
}

li a {
  font-size: 15px;
  padding-left: 8px;
  text-decoration: none;
  color: #000;
  display: block;

  -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
  -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
  -o-transition: font-size 0.3s ease, background-color 0.3s ease;
  -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
  transition: font-size 0.3s ease, background-color 0.3s ease;
}

li a:hover {
  font-size: 20px;
  background: #f6f6f6;
}
</style>
