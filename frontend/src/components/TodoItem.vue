<template>
  <tr>
    <td>{{ text }}</td>
    <td>
      <p>
        <input
          type="checkbox"
          name="done"
          id="done"
          v-model="done"
          disabled>

        <button
          @click="$emit('handleAsDone', id)"
          :disabled="done">
          Feito
        </button>
        <button
          @click="$emit('handleRemove', id)">
          Remove
        </button>
      </p>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style>
</style>