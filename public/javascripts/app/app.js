App = Ember.Application.create();

App.Router.map(function() {
  this.resource('device', {  path: '/device' });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.all('dashboarddevice');
  }
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();
