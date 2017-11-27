<template >
  <div id="app">
  <h3 class="center2">MAPA CALOR DE CHILE </h3>
    <div id= "mapa">
      <ChoroplethMap :data="pyDepartmentsData" titleKey="department_name" idKey="department_id" :value="value" :extraValues="extraValues"  geojsonIdKey="dpto" :geojson="chilejson" :center="center" :colorScale="colorScale" mapStyle="height: 500px;width: 600px;position: absolute; top:15%; left:27%;margin auto  " :zoom="4.5" :mapOptions="mapOptions">
        <template scope="props">
          <InfoControl position="topright" :item="props.currentItem" :unit="props.unit" title="Region" placeholder="Prestador con mayor connotacion"></InfoControl>
        </template>
      </ChoroplethMap>


    </div>

  </div>
</template>

<script>
import { ChoroplethMap, InfoControl, ReferenceChart } from 'vue-choropleth'

import chilejson from './data/chile.json'
import { pyDepartmentsData } from './data/por_region_data'
export default {
  name: "app",
  components: { ChoroplethMap, InfoControl, ReferenceChart },
  data() {
    return {
      center: [-33.469100, -70.642000],
      
      pyDepartmentsData,
      chilejson,
      colorScale: ["000066", "006600", "660000","ccffff","ffffcc", "ff0000", "8c66ff","000000","0099ff", "73828c", "ffff00","0000ff","ff944d"],
     
      value: {
        key: "amount_w",
        metric: "% Aprobacion",
        

      },
      extraValues: [{

      
        key: "prestador",
        metric: "",

      }],

      mapOptions: {
        attributionControl: false
      }
    }
  }
}
</script>
<style scoped>
@import "../node_modules/leaflet/dist/leaflet.css";



</style>
