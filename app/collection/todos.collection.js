import Backbone from 'backbone'

export const TodosCollection = Backbone.Collection.extend({
  url: 'https://jsonplaceholder.typicode.com/todos',
})
