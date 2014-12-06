import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'paper-fab',
  attributeBindings: ['icon:icon'],
  click: function(){
    console.log("WoW");
  }
});
