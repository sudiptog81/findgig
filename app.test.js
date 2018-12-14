const assert = require("assert");
const hello = require("./testci.js");

assert.strictEqual(hello(), "Passed", "Passed");
