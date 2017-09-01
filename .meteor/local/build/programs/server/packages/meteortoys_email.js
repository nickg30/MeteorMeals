(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Email = Package.email.Email;
var EmailInternals = Package.email.EmailInternals;
var check = Package.check.check;
var Match = Package.check.Match;

/* Package-scope variables */
var ToyKit, MeteorToys;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/meteortoys_email/server/main.js                          //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var _0x4524=["\x73\x65\x6E\x64","\x74\x69\x6D\x65\x73\x74\x61\x6D\x70","\x75\x6E\x72\x65\x61\x64","\x69\x6E\x73\x65\x72\x74","\x45\x6D\x61\x69\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74"];var OriginalEmailFunction=Email[_0x4524[0]];Email[_0x4524[0]]=function(_0x734ex2){var _0x734ex3= new OriginalEmailFunction(_0x734ex2);_0x734ex2[_0x4524[1]]= new Date();_0x734ex2[_0x4524[2]]=true;Package[_0x4524[6]][_0x4524[5]][_0x4524[4]][_0x4524[3]](_0x734ex2);return _0x734ex3;};
///////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/meteortoys_email/config/config.js                        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var _0xcba3=["\x45\x6D\x61\x69\x6C","\x31\x2E\x30\x2E\x30","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x6D\x61\x69\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x73\x74\x61\x72\x74\x75\x70"];ToyKit={name:_0xcba3[0],version:_0xcba3[1],template:_0xcba3[2],ToyKit:_0xcba3[1]};Meteor[_0xcba3[5]](function(){MeteorToys=Package[_0xcba3[4]][_0xcba3[3]]});
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['meteortoys:email'] = {}, {
  ToyKit: ToyKit
});

})();
