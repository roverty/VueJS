<template>
  <div>
    <!-- Slot -->
    <add-todo v-on:add-todo="addTodo" />
    <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :todoProp="todo"
      @del-todo="deleteTodo"
    />
  </div>
</template>

<script>
// @ := src/

import TodoItem from "./TodoItem.vue";
import AddTodo from "@/components/AddTodo.vue";

export default {
  name: "MainTodos",
  components: {
    TodoItem,
    AddTodo,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Aprender iOS",
          completed: false,
        },
        {
          id: 2,
          title: "Aprender Matlab",
          completed: false,
        },
        {
          id: 3,
          title: "Aprender VueJS",
          completed: true,
        },
      ],
    };
  },
  methods: {
    deleteTodo(id) {
      // ===  vs ==
      // !==  vs !=
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    addTodo(todo) {
      this.todos = [...this.todos, todo];
    },
  },
};
</script>
