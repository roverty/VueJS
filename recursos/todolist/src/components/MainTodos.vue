<template>
  <div>
    <AddTodo @add-todo="addTodo" />
    <div>
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todoProp="todo"
        v-on:del-todo="deleteTodo"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TodoItem from "@/components/TodoItem.vue";
import AddTodo from "@/components/AddTodo.vue";

export default {
  name: "MainTodos",
  components: {
    TodoItem,
    AddTodo,
  },
  data: () => ({
    // todos: [
    //   { id: 1, title: "Aprender JS", completed: false },
    //   { id: 2, title: "Aprender Ruby", completed: true },
    //   { id: 3, title: "Aprender programación funcional", completed: false },
    // ],
    todos: [],
  }),
  methods: {
    deleteTodo(id) {
      // Opcion 1
      // this.todos = this.todos.filter((t) => t.id !== id);
      // Opcion 2 (con axios)npm install --save axios
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(() => (this.todos = this.todos.filter((t) => t.id !== id)));
    },
    addTodo(todo) {
      // Opcion 1
      // this.todos = [...this.todos, todo];
      // Opcion 2 (axios)
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title: todo.title,
          completed: todo.completed,
        })
        .then((response) => {
          console.log("Si llegamos");
          this.todos = [...this.todos, response.data];
        })
        .catch((err) => console.log(err));
    },
    created() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((res) => {
          console.log(res);
          this.todos = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
