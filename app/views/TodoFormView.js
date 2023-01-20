import Marionette from 'backbone.marionette';
import template from '../templates/todo-form.jst';

export default Marionette.View.extend({
  template,
  ui: {
    form: 'form',
    text: '#text',
  },
  events: {
    'submit @ui.form': 'handleSubmit'
  },
  collectionEvents: {
    add: 'itemAdded'
  },
  handleSubmit() {
    const value = this.ui.text.val();

    this.collection.create({
      title: value,
      completed: false
    })
  },
  itemAdded() {
    this.ui.text.val('');
  }
});
