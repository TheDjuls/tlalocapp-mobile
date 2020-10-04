<template>
    <q-page>
    <div class="row">
      <div class="col" style="width:95%">
        <h2 class="text-secondary text-center">Report</h2>
        <router-link :to="{name:'mapa'}">
        <q-btn class="q-mx-auto q-my-md flex"
          color="accent" style="width:95%" label="Seleccionar ubicación" />
        </router-link>
        <q-select  class="input q-my-md q-mx-auto" style="width:95%" outlined 
        v-model="req.tipo" :options="options" label="Tipo de Evento" />
        <q-input
          class="input q-my-md q-mx-auto"
          outlined
          v-model="req.desc"
          label="Descripción"
          style="width:95%"
        />

        <q-btn
          class="q-mx-auto q-my-md flex"
          color="accent"
          icon-right="save"
          style="width:95%"
          @click="saveData()"
          label="Enviar"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { db } from "boot/firebase";
export default {
  name: 'PageIndex',
  data: () => ({
   options: [
        'Flood', 'Drought'
      ],
    req:{
      tipo:"Flood"
    }
  }),
  methods:{
    async getData(){
       try {
        const res = await db.collection("user-alerts").get();
        res.forEach(res => {
          console.log(res.data())
          });
      } catch (error) {
        console.log(error);
      }
    },
    async saveData(){
      const query = await db.collection('user-alerts').add({
                alertType: this.req.tipo,
                descripcion: this.req.desc,
                longitude:"-92.9302800",
                latitude:"17.9868900"
        }).then(()=>{
          this.getData()
          this.$router.push({name:'alerts'})
        })
    }
  },
  mounted(){
    this.getData()
  }
}
</script>
