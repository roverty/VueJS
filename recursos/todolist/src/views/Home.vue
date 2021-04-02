<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <main-todos />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import MainTodos from "../components/MainTodos.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    MainTodos,
  },
};
</script>
