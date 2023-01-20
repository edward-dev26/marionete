import Marionette from 'backbone.marionette';
import Controller from './Controller';

export default Marionette.AppRouter.extend({
  initialize(options) {
    this.controller = new Controller(options);
  },

  appRoutes: {
    '': 'default',
    'about': 'aboutView'
  }
});
