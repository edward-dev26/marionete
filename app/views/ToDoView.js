import Marionette from 'backbone.marionette';
import template from '../templates/todo.jst';
import TodoFormView from './TodoFormView';
import TodoListView from './TodoListView';
import {TodosCollection} from '../collection/todos.collection';

export default Marionette.View.extend({
  template,

  regions: {
    form: '#todo-form',
    list: '#todo-list'
  },

  initialize() {
    this.collection = new TodosCollection();
  },

  onRender() {
    const formView = new TodoFormView({collection: this.collection});
    const listView = new TodoListView({collection: this.collection});

    this.showChildView('form', formView);
    this.showChildView('list', listView);
  }
});
