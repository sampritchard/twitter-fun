let chai = require('chai');
let expect = chai.expect;
let sinon = require("sinon");
let updateTwitter = require('../../app.js');
let updateStatus = require('../../app.js');

describe('#updateTwitter', function () {

    it('should call updateStatus', function () {
       let mySpy = sinon.spy(updateStatus);
       updateTwitter;
       expect(mySpy).calledOnce;
    });
});