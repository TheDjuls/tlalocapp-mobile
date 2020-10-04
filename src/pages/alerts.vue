<template>
  <q-page>
    <div class="row">
      <div class="col-12">
        <q-card class="my-card" flat bordered v-for="(item,index) in arreglo" :key="index">
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">{{item.event}}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{item.cause}}</div>
          <div class="text-caption text-grey" >
            {{item.message?item.message:"Cause not yet determinated"}}
          </div>
        </q-card-section>

    
          <q-img style="max-width:300px"
            class="rounded-borders"
            src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/07/cars_in_flood_jpg_ajKMaIIQ-e1594192681165.jpg"
          />
       
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat color="secondary">
          {{item.latitude}}
        </q-btn>
        <q-btn flat color="secondary">
          {{item.longitude}}
        </q-btn>
      </q-card-actions>
    </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { db} from "boot/firebase";
export default {
name: 'alerts',
  data: () => ({
  arreglo:[]
  }),
  methods:{
    async getData(){
       try {
        const res = await db.collection("governmentAlerts").get();
        res.forEach(res => {
          const item = {
            event: res.data().event,
            cause: res.data().cause,
            message: res.data().message,
            latitude: res.data().longitude,
            longitude: res.data().latitude,
          };
          this.arreglo.push(item);
          });
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted(){
    this.getData()
  }
}
</script>

<style>

</style>