import Marionette from 'backbone.marionette';
import template from '../templates/todo-item.jst';

export default Marionette.View.extend({
  template,
  className: 'todo-item-view',
  ui: {
    delete: '#delete-item'
  },
  events: {
    'click @ui.delete': 'handleDelete'
  },
  handleDelete() {
    this.model.destroy();
  }
});
