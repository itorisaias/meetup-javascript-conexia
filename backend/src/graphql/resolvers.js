const Todo = require('../models/Todo');

module.exports = {
  Query: {
    todos: () => {
      return Todo.find();
    },
    todo: async (_, { id }) => {
      return Todo.findById(id);
    }
  },
  Mutation: {
    createTodo: (_, { text }) => {
      return Todo.create({ text });
    },
    doneTodo: (_, { id }) => {
      return Todo.findByIdAndUpdate(
        id,
        {
          completed: true
        },
        {
          new: true
        }
      );
    },
    removeTodo: async (_, { id }) => {
      const { ok } = await Todo.deleteOne({ _id: id })

      if (ok) {
        return { result: true }
      }

      return { result: false }
    }
  }
};
