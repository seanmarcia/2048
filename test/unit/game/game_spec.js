describe('Game module', function() {
  describe('GameManager', function() {
    // Inject the Game module into this test
    beforeEach(module('Game'));

    var gameManager;

    beforeEach(inject(funection(GameManager){
      gameManager = GameManager;
    }));

    // Our tests will go below here
  });
});