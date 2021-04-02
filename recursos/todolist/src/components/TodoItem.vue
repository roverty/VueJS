<template>
  <div class="todo-item" :class="{ 'is-complete': todoProp.completed }">
    <p>
      <input
        type="checkbox"
        :checked="todoProp.completed"
        v-on:change="markAsComplete"
      />
      {{ todoProp.title }}
      <button class="del" v-on:click="sendDeleteRequest(todoProp.id)">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todoProp"],
  methods: {
    markAsComplete() {
      this.todoProp.completed = !this.todoProp.completed;
    },
    sendDeleteRequest(id) {
      console.log("Propagando petición de borrado");
      this.$emit("del-todo", id);
    },
  },
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
