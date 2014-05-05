'use strict';

angular
.module('twentyfourtyeightApp', [])
.controller('GameController', function(GameManager) {
  this.game = GameManager;
});