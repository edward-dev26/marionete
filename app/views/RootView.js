import Marionette from 'backbone.marionette';
import _ from 'underscore';

import NavView from './NavView';
import ToDoView from './ToDoView';
import AboutView from './AboutView';

export default Marionette.View.extend({
  className: 'root',

  template: _.template('<nav id="nav"></nav><main id="main"></main>'), regions: {
    nav: '#nav', main: '#main',
  },

  onRender() {
    const navView = new NavView();

    this.showChildView('nav', navView);
  },

  showIndexPage() {
    const todoView = new ToDoView();

    this.showChildView('main', todoView);
  },

  showAboutPage() {
    const aboutView = new AboutView();

    this.showChildView('main', aboutView);
  }
});
