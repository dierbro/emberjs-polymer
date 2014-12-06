import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'paper-icon-button',
  attributeBindings: ['icon:icon'],
  click: function(){
    var drawer = document.getElementById(this.get("drawer"))
    drawer.togglePanel();
  }
});
