<template >
  <div id="app">
  <h3 class="center2">Mapa calor chile</h3>
    <ChoroplethMap :data="pyDepartmentsData" titleKey="department_name" idKey="department_id" :value="value" :extraValues="extraValues" geojsonIdKey="dpto" :geojson="paraguayGeojson" :center="center" :colorScale="colorScale" mapStyle="height: 700px;" :zoom="4.5" :mapOptions="mapOptions">
      <template scope="props">
        <InfoControl position="topright" :item="props.currentItem" :unit="props.unit" title="Region" placeholder="Informacion cantidad de tweets por region"></InfoControl>
        <ReferenceChart title="Tweets por Region" :colorScale="colorScale" :min="props.min" :max="props.max" position="topleft"></ReferenceChart>
      </template>
    </ChoroplethMap>
  </div>
</template>

<script>
import { ChoroplethMap, InfoControl, ReferenceChart } from 'vue-choropleth'
//import { geojson } from './data/py-departments-geojson'
import paraguayGeojson from './data/chile.json'
import { pyDepartmentsData } from './data/por_region_data'
export default {
  name: "app",
  components: { ChoroplethMap, InfoControl, ReferenceChart },
  data() {
    return {
      center: [-33.469100, -70.642000],
      
      pyDepartmentsData,
      paraguayGeojson,
      colorScale: ["e7d090", "e9ae7b", "de7062","F32C00"],
      value: {
        key: "amount_w",
        metric: "Tweets Asociados"
      },
      extraValues: [{
        key: "amount_m",
        metric: "% boys"
      }],
      mapOptions: {
        attributionControl: false
      }
    }
  }
}
</script>
<style>
@import "../node_modules/leaflet/dist/leaflet.css";


</style>