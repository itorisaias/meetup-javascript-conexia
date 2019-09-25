<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <TodoList
      :todos="todos"
      @handleAsDone="handleAsDone"
      @handleRemove="handleRemove"
    />
    
    <label for="todo">Nova Tarefa
      <input
        type="text"
        name="todo"
        id="todo"
        v-model="todo"
        v-on:keyup.enter="createTodo"
      >
    </label>

  </div>
</template>

<script>
import { GET_ALL_TODOS_QUERY } from './graphql/queries/todo'
import {
  CREATE_TODO_MUTATION,
  DONE_TODO_MUTATION,
  REMOVE_TODO_MUTATION
} from './graphql/mutations/todo'

export default {
  name: 'app',
  components: {
    TodoList: () => import('./components/TodoList')
  },
  data() {
    return {
      todo: null,
      todos: []
    }
  },
  async mounted () {
    const {
      data: {
        todos
      }
    } = await this.$apollo.query({ query: GET_ALL_TODOS_QUERY })
    this.todos = todos
  },
  methods: {
    async createTodo () {
      const {
        data: {
          createTodo
        }
      } = await this.$apollo.mutate({
        mutation: CREATE_TODO_MUTATION,
        variables: {
          text: this.todo
        }
      })
      this.todo = null
      this.todos.push(createTodo)
    },
    async handleAsDone (id) {
      const { data: { doneTodo } } = await this.$apollo.mutate({
        mutation: DONE_TODO_MUTATION,
        variables: { id }
      })
      this.todos = this.todos.map(todo => {
        if (todo.id === doneTodo.id) {
          return doneTodo
        }
        return todo
      })
    },
    async handleRemove (id) {
      const {
        data: {
          removeTodo: {
            result
          }
        }
      } = await this.$apollo.mutate({
        mutation: REMOVE_TODO_MUTATION,
        variables: { id }
      })

      if (result) {
        this.todos = this.todos.filter((todo) => (todo.id !== id))
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
