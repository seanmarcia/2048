describe('Game module', function() {
  describe('GameManager', function() {
    // Inject the Game module into this test
    beforeEach(module('Game'));

    var gameManager;

    beforeEach(inject(funection(GameManager){
      gameManager = GameManager;
    }));

    var _gridService;
    beforeEach(module(function($provide) {
      _gridService = {
        anyCellsAvailable: angular.noop,
        tileMatchesAvailable: angular.noop
      };

    // Switch out the real GridService for our
    // fake version
      $provide.value('GridService', _gridService);
    }));

    // Our tests will go below here
  });
});