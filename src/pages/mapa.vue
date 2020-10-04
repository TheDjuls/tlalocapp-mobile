<template>
  <q-page>
    <div class="row">
      <div class="col-12">
          <router-link to="/">
        <q-btn class="q-my-sm" color="accent" label="Regresar"></q-btn>
          </router-link>
      </div>
      <div class="col-12">
        <GmapMap
          :center="{ lat: 10, lng: 10 }"
          :zoom="7"
          map-type-id="terrain"
          style="width: 100%; height: 70vh"
        >
        </GmapMap>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style>
</style>