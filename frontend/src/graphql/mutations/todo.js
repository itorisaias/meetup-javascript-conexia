import gql from 'graphql-tag'

export const CREATE_TODO_MUTATION = gql`
  mutation createTodo($text: String!) {
    createTodo(text: $text) {
      id
      text
      done: completed
    }
  }
`

export const DONE_TODO_MUTATION = gql`
  mutation doneTodo($id: ID!) {
    doneTodo(id: $id) {
      id
      text
      done: completed
    }
  }
`

export const REMOVE_TODO_MUTATION = gql`
  mutation removeTodo($id: ID!) {
    removeTodo(id: $id) {
      result
    }
  }
`
