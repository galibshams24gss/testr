<template>
<div class="container">
    <div class="text-center">
    <h3 class="page-header">Locations</h3>
    <router-link class="btn btn-primary" v-bind:to="'/clients'"><i class="material-icons">&#xe5c4;</i></router-link>
    </div>
    <hr>
  <gmap-map
    v-bind:center="center"
    v-bind:zoom="3"
    v-bind:map-type-id="mapTypeId">
    <gmap-marker
      v-for="(item, index) in markers"
      v-bind:key="index"
      v-bind:position="item.position"
      v-on:click="center=item.position"/>
  </gmap-map>
</div>
</template>

<script>
export default {
  name: 'gmap',
  data() {
    return {
      center: { lat: -30.350235, lng: 140.995865 },
      mapTypeId: "terrain",
      markers: [
        { position: { lat: -37.814, lng: 144.96332 } },
        { position: { lat: -33.865143, lng: 151.209900 } },
        { position: { lat: -20.917574, lng: 142.702789 } }
      ]
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-map-container {
  height: 450px;
  max-width: 992px;
  width: 100%;
}

.btn{
    color: white;
    font-weight: bold;
    width: 95px;
}

.container{
    margin-top: 0px;
    margin-bottom: 0px;
}
</style>
