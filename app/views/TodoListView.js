import Marionette from 'backbone.marionette';

import TodoItemView from './TodoItemView';

export default Marionette.CollectionView.extend({
  initialize() {
    this.collection.fetch();
  },
  childView: TodoItemView,
  childViewOptions() {
    return {
      collection: this.collection
    }
  },
  className: 'todo-list-view'
});
