var fs = require('fs');
var path = require("path");
var assert = require('assert');
var polimiConverter = require("../schedule-to-ical");

function eventsMatch(input, expected) {
    if (input.length !== expected.length) {
        console.log("Events count mismatch: expected:" + expected.length + "\tfound:" + input.length);
        return false;
    }
    for (let a of input) {
        let match = false;
        for (let b of expected) {
            let aProps = Object.getOwnPropertyNames(a);
            let bProps = Object.getOwnPropertyNames(b);
            if (aProps.length !== bProps.length) {
                throw Error("Expected and actual does not have the same number of properties.\n"+aProps+"\n"+bProps);
            }
            let innerMatch = true;
            for (let i = 0; i < aProps.length; i++) {
                let propName = aProps[i];
                if (propName === "dtstamp") {
                    continue;
                }
                if (a[propName].toString().toLowerCase() !== b[propName].toString().toLowerCase()) {
                    innerMatch = false;
                }
            }
            match = match || innerMatch;
        }
        if (!match) {
            throw Error("Could not find any match for an input event\n" + JSON.stringify(a, null, 2));
        }
    }
    return true;
}

describe("Timetable conversion", function(){
    for (let i of fs.readdirSync(__dirname + '/input/')) {
        it(i, function(){
            let fileProp = path.parse(i);
            let obj = JSON.parse(fs.readFileSync(__dirname + "/output/" + fileProp.name + ".json", 'utf8'));
            let match = eventsMatch(JSON.parse(JSON.stringify(polimiConverter.parseText(fs.readFileSync(__dirname + '/input/' + i).toString()))), obj);
            assert.equal(match, true);
        })
    }
})
