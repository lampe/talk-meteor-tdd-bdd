describe('Rock Paper Scissors Rest Api - Server', function () {
  var server = meteor({flavor: 'fiber'});
  var client = browser(server, {flavor: 'promise'});

  describe('- Initalize', function () {
    it('RoPaSc should be present on Server', function () {
      return server.execute(function () {
        expect(RoPaSc).to.be.an('object');
      });
    });
    it('RoPaSc should not be a empty object on the Server', function () {
      return server.execute(function () {
        expect(RoPaSc).not.to.be.empty;
      });
    });
  });

  describe('- RoPaSc properties', function () {
    it('the allowed moves should be a Array', function () {
      return server.execute(function () {
        expect(RoPaSc.allowedMoves).to.be.instanceof(Array);
      });
    });
    it('should have allowed moves', function () {
      return server.execute(function () {
        expect(RoPaSc.allowedMoves).not.to.be.empty;
      });
    });
    it('the winning moves should be a Object', function () {
      return server.execute(function () {
        expect(RoPaSc.winningMoves).to.be.instanceof(Object);
      });
    });
    it('should have winning moves', function () {
      return server.execute(function () {
        expect(RoPaSc.winningMoves).not.to.be.empty;
      });
    });
  });
});
