# Plantilla para Vue
## Taller de Base de Datos

Incluye:
* ejemplo básico de [Webpack](https://webpack.github.io/)
* plantilla para [Vue.js](https://vuejs.org/)

### Requisitos previos
 [Node js](https://nodejs.org/es/download/)

### Instalación plantilla Vue

* ir a carpeta `plantilla vue`
* instalar dependencias de node `npm install`
* ejecutar `npm run dev`
* generar distribuible `npm run build`
* SOLO UNA VES, Install [gjslint](https://developers.google.com/closure/utilities/docs/linter_howto?hl=en).


## Recuerden instalar ademas para nuestro proyecto

* En la carpeta Previsor_frontend, que es la carpeta principal, instalar:
* Para los graficos que coloco el victor, depedencia 1: npm install -g vue-cli

* En Plantilla-vue instalar 9 dependencias mas:

* Para ver los tweets se necesita, dependencia2: npm install vue-tweet-embed
* Para los graficos que coloco el victor ,depedencia 3: npm install chart.js chartkick hchs-vue-charts vue-chartjs vue-chartkick
* Para ver el pop-up(ventana) donde se muestra el tweet en el grafo de redSocial, dependencia 4: npm install vue-js-modal --save
* Para el mapa en general, dependencia 6: npm install leaflet
* Para ver el mapa cloropletico (mapa de calor en si), dependencia 7: npm install vue-choropleth --save
* Dependencia que usa vue-choropleth, dependencia 8: npm install vue2-leaflet --save
* Para ver el mapa cloropletico (estetica,zoom,colores,etc), dependencia 9: npm install axios --save

* Luego de todo esto, para ver el grafo de redSocial con el D3:
* 1) En previsor_frontend existe una carpeta llamada d3.
* 2) Hay que cortarla (ctrl-X) y acceder a : plantilla-vue/node_modules
* 3) Pegarla en esta carpeta.
