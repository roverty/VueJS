<template>
  <div class="home">
    <p>Holaaaaa</p>
    <p>{{ nombre }}</p>
    <p>{{ mensaje }}</p>

    <p v-if="logeado">Soy el usuario {{ nombre }}</p>
    <p v-else>No estas logeado</p>
    <br />
    <ul>
      <li v-for="alumno in alumnos" v-bind:key="alumno">{{ alumno }}</li>
    </ul>
    <br />

    <div v-bind:class="div1">Hola</div>
    <div v-bind:style="styleObject">Adios</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    nombre: "Rodrigo",
    logeado: false,
    alumnos: ["Erick Rodrigo", "Aylin", "Cesar Yair", "Diego Gal"],
    showAlert: true,
    // Estilos
    div1: { alert: true },
    styleObject: {
      height: "80px",
      background: "#3e7ee0",
    },
  }),
  computed: {
    mensaje() {
      return this.logeado ? "Bienvenido" : "Debes logearte";
    },
  },
};
</script>

<style scoped>
.alert {
  height: 80px;
  background: #3b3ee0;
}
</style>
