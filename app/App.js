import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import RootView from './views/RootView';
import AppRouter from './AppRouter';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    const rootView = new RootView();
    const router = new AppRouter({rootView});

    console.log(router);
    this.showView(rootView);
    Backbone.history.start();
  },
});
