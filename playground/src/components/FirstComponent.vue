<template>
  <div>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Bienvenido al curso de {{ curso }}</h2>
      <p>{{ logeado ? "Bienvenido" : "Debes logearte" }}</p>
    </div>
    <div class="header">
      <ul v-for="(alumno, index) in alumnos" :key="index">
        <li>{{ index + 1 }}. {{ alumno.nombre }} ({{ alumno.correo }})</li>
      </ul>
    </div>
    <div v-if="alumnos.length > 1">Tenemos más de un alumno</div>
    <div v-bind:class="{ alert: showAlert }"></div>
    <div v-bind:class="alertObject"></div>
    <div :style="styleAsObject"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => ({
    curso: "VueJS",
    logeado: true,
    alumnos: [
      { nombre: "Rodrigo Francisco", correo: "rodrigo@unam.mx" },
      { nombre: "Lizeth Durán", correo: "liz@unam.mx" },
    ],
    showAlert: true,
    alertObject: {
      alertYellow: true,
    },
    styleAsObject: {
      background: "red",
      height: "80px",
    },
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.alert {
  background: #3b3ee0;
  height: 80px;
}

.alertYellow {
  background: #ebfa1d;
  height: 80px;
}
</style>
