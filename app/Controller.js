import Marionette from 'backbone.marionette';

export default Marionette.Object.extend({
  default() {
    const rootView = this.getOption('rootView');

    rootView.showIndexPage();
  },

  aboutView() {
    const rootView = this.getOption('rootView');

    rootView.showAboutPage();
  }
});
