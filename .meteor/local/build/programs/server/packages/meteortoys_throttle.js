(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var WebApp = Package.webapp.WebApp;
var WebAppInternals = Package.webapp.WebAppInternals;
var main = Package.webapp.main;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var check = Package.check.check;
var Match = Package.check.Match;

/* Package-scope variables */
var ToyKit, _0xb817x1, MeteorToys, tN, dcol;

(function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/meteortoys_throttle/config/config.js                           //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
var _0xd6d6=["\x54\x68\x72\x6F\x74\x74\x6C\x65","\x31\x2E\x30\x2E\x30","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x74\x68\x72\x6F\x74\x74\x6C\x65","\x63\x61\x6C\x6C","\x73\x6C\x69\x63\x65","\x61\x70\x70\x6C\x79","\x73\x65\x72\x76\x65\x72","\x73\x74\x72\x65\x61\x6D\x5F\x73\x65\x72\x76\x65\x72","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x77\x72\x69\x74\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x73\x74\x61\x72\x74\x75\x70"];ToyKit={name:_0xd6d6[0],version:_0xd6d6[1],template:_0xd6d6[2],ToyKit:_0xd6d6[1],onStartup:function(){_0xb817x1=function _0xb817x1(_0xb817x2,_0xb817x3,_0xb817x4){var _0xb817x5=_0xb817x2[_0xb817x3];_0xb817x2[_0xb817x3]=function(){var _0xb817x6=[][_0xd6d6[4]][_0xd6d6[3]](arguments);var _0xb817x7=this;_0xb817x4[_0xd6d6[3]](_0xb817x7,_0xb817x6,function(_0xb817x8){_0xb817x5[_0xd6d6[5]](_0xb817x7,_0xb817x8||_0xb817x6)});};};_0xb817x1(Meteor[_0xd6d6[6]][_0xd6d6[7]][_0xd6d6[6]]._events,_0xd6d6[8],function(_0xb817x6,_0xb817x9){_0xb817x1(_0xb817x6[0],_0xd6d6[9],function(_0xb817x6,_0xb817x9){setTimeout(_0xb817x9,1000)});_0xb817x9();});}};Meteor[_0xd6d6[12]](function(){MeteorToys=Package[_0xd6d6[11]][_0xd6d6[10]]});
/////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/meteortoys_throttle/server/main.js                             //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
Meteor.methods({
  'MeteorToys_q': function() {
      var col = Package["meteortoys:toykit"].MeteorToysData.Throttle;

      if (col.findOne()) {
      	col.remove({});
      } else {
      	col.insert({});
      }
  }
});


tN = Object.keys(Package["meteortoys:toykit"].MeteorToysData)[6];
dcol = Package["meteortoys:toykit"].MeteorToysData[tN].findOne() || false;

if (dcol) {
	ToyKit.onStartup();
}




/////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['meteortoys:throttle'] = {}, {
  ToyKit: ToyKit
});

})();
