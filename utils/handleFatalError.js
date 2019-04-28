"use strict";

const chalk = require("chalk");

const handleFatalError = function(e) {
  console.log(`${chalk.red("[fatal error]")}`);
  console.log(e.message);
};

module.exports = handleFatalError;
