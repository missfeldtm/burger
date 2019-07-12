var orm = require('../config/orm');

var burger = {
    all: function(cb) {
      orm.selectAll("products", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("products", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("products", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("products", condition, function(res) {
        cb(res);
      });
    }
  };



module.exports = burger;