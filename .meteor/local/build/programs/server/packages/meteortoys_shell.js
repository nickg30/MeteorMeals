(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var WebApp = Package.webapp.WebApp;
var WebAppInternals = Package.webapp.WebAppInternals;
var main = Package.webapp.main;
var check = Package.check.check;
var Match = Package.check.Match;

/* Package-scope variables */
var ToyKit;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/meteortoys_shell/server/main.js                          //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var _0x6c56=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x63\x61\x6C\x6C","\x28\x66\x75\x6E\x63\x74\x69\x6F\x6E\x28\x29\x20\x7B","\x7D\x29\x28\x29\x3B","\x6D\x65\x74\x68\x6F\x64\x73"];Meteor[_0x6c56[4]]({MeteorToys_r:function(_0x53d7x1){check(_0x53d7x1,Match.Any);var _0x53d7x2=false;Meteor[_0x6c56[1]](_0x6c56[0],function(_0x53d7x3,_0x53d7x4){_0x53d7x2=_0x53d7x4});if(!_0x53d7x2){return };return eval(_0x6c56[2]+_0x53d7x1+_0x6c56[3]);}});
///////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/meteortoys_shell/config/config.js                        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var _0x1f7f=["\x53\x68\x65\x6C\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x68\x65\x6C\x6C","\x6F\x72\x62"];ToyKit={name:_0x1f7f[0],template:_0x1f7f[1],type:_0x1f7f[2]};
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['meteortoys:shell'] = {}, {
  ToyKit: ToyKit
});

})();
