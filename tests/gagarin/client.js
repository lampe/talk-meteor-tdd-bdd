describe('Rock Paper Scissors Rest Api - Client', function () {
  var server = meteor({flavor: 'fiber'});
  var client = browser(server, {flavor: 'promise'});
});
