import * as fs from "fs";
import * as path from "path";
import * as assert from "assert";
import * as polimiConverter from "../schedule-to-ical.js";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function eventsMatch(input, expected) {
  if (input.length !== expected.length) {
    console.log(
      "Events count mismatch: expected:" +
        expected.length +
        "\tfound:" +
        input.length
    );
    return false;
  }
  for (let a of input) {
    let match = false;
    for (let b of expected) {
      let aProps = Object.getOwnPropertyNames(a);
      let bProps = Object.getOwnPropertyNames(b);
      // Older outputs do not have the description
      if (aProps.includes("description") && !bProps.includes("description")) {
        aProps.splice(aProps.indexOf("description"), 1);
      }
      const notCompatibleProps =
        aProps.map((prop) => bProps.indexOf(prop)).filter((a) => a === -1)
          .length !== 0;
      if (notCompatibleProps) {
        continue;
      }
      // aProps and bProps could be of different length in the same file e.g. when some events do have an rdate and some doesn't. The events would not match, so we can skip.
      if (aProps.length !== bProps.length) {
        // throw Error("Expected and actual does not have the same number of properties.\n"+aProps+"\n"+bProps);
        continue;
      }
      let innerMatch = true;
      for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];
        if (propName === "dtstamp") {
          continue;
        }

        if (
          a[propName].toString().toLowerCase() !==
          b[propName].toString().toLowerCase()
        ) {
          innerMatch = false;
        }
      }
      match = match || innerMatch;
    }
    if (!match) {
      throw Error(
        "Could not find any match for an input event\n" +
          JSON.stringify(a, null, 2)
      );
    }
  }
  return true;
}

describe("Timetable conversion", function () {
  for (let i of fs.readdirSync(__dirname + "/input/")) {
    it(i, function () {
      let fileProp = path.parse(i);
      let obj = JSON.parse(
        fs.readFileSync(
          __dirname + "/output/" + fileProp.name + ".json",
          "utf8"
        )
      );
      let match = eventsMatch(
        JSON.parse(
          JSON.stringify(
            polimiConverter.parseText(
              fs.readFileSync(__dirname + "/input/" + i).toString()
            ).data
          )
        ),
        obj
      );
      assert.equal(match, true);
    });
  }
});
