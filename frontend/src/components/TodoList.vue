<template>
  <div>
    <h1>List</h1>
    <div v-for="(todo, index) in todos" :key="index">
      <tr>
        <td>Descrição</td>
        <td>Ações</td>
      </tr>
      <TodoItem
        :done="todo.done"
        :text="todo.text"
        :id="todo.id"
        @handleAsDone="$emit('handleAsDone', $event)"
        @handleRemove="$emit('handleRemove', $event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TodoItem: () => import('./TodoItem')
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>