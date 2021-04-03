<template>
  <div>
    <main-todos />
  </div>
</template>

<script>
// @ is an alias to /src
import MainTodos from "@/components/MainTodos.vue";

export default {
  name: "Home",
  components: {
    MainTodos,
  },
};
</script>
