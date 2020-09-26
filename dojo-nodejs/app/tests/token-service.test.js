const assert = require("chai").assert;
const getToken = require("../services/token.service.js");

describe("Token Service", function() {
    describe("Geto token", function() {
        it("get token", function() {
            const result   = getToken();
            console.log(result);
        });
    }); 
}); 