(function (){
  'use strict';

  var util = require('util');

  var port = "8080";
  var domain = "";
  process.argv.forEach(function (val, index, array) {
    var arg = val.split("=");
    if (arg.length > 1) {
      if (arg[0] == "--domain") {
        domain = "." + arg[1];
        console.log("Setting domain to:", domain);
      }
    }
  });

  module.exports = {
    catalogueUrl:  util.format("http://catalogue%s:%s", domain, port),
    tagsUrl:       util.format("http://catalogue%s:%s/tags", domain, port),
    cartsUrl:      util.format("http://cart%s:%s/carts", domain, port),
    ordersUrl:     util.format("http://orders%s:%s", domain, port),
    customersUrl:  util.format("http://user%s:%s/customers", domain, port),
    addressUrl:    util.format("http://user%s:%s/addresses", domain, port),
    cardsUrl:      util.format("http://user%s:%s/cards", domain, port),
    loginUrl:      util.format("http://user%s:%s/login", domain, port),
    registerUrl:   util.format("http://user%s:%s/register", domain, port),
  };
}());
