<template>
  <div class="todo-item" :class="{ 'is-completed': todoProp.completed }">
    <p>
      <input
        type="checkbox"
        :checked="todoProp.completed"
        v-on:change="markCompleted"
      />
      {{ todoProp.title }}
      <button class="delete" v-on:click="sendDeleteRequest(todoProp.id)">
        x
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoITem",
  props: ["todoProp"],
  methods: {
    markCompleted() {
      this.todoProp.completed = !this.todoProp.completed;
    },
    sendDeleteRequest(id) {
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

.is-completed {
  text-decoration: line-through;
}

.delete {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
