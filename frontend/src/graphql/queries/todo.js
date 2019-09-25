import gql from 'graphql-tag'

export const GET_ALL_TODOS_QUERY = gql`
  query todos {
    todos {
      id
      text
      done: completed
    }
  }
`
