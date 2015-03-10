if (typeof require == 'function') {
  var kart = require('./kart.js'); 
}
if (typeof QUnit == 'undefined') {
  QUnit = require('qunit-cli');  
}

QUnit.test( "api url test", function( assert ) {
  // this is a dumb, pointless test that will obviously be removed later
  assert.ok( kart.apiUrl == "/?kart" );
});

