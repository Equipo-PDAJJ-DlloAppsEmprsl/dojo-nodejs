const assert = require("chai").assert;
const getToken = require("../services/token.service.js");

describe("App functionalities ", function() {
    describe("Sporifi services", function() {
        it("get token", async function() {
            const result = await getToken();
            console.log(result);
            console.log("eoeoeo");
        });
    }); 
}); 