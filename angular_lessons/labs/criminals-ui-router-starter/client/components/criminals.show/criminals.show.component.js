const controller = require('./criminals.show.controller.js');
const template = require('./criminals.show.html');

const component = {
  controller: controller,
  template: template
};

angular
  .module('criminals')

  //the criminalsShow has to be the camelCase but on the app.js it has to
  //be with a dash
  .component('criminalsShow', component);
