var bundle = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key2 of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key2) && key2 !== except)
          __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/luxon/build/cjs-browser/luxon.js
  var require_luxon = __commonJS({
    "node_modules/luxon/build/cjs-browser/luxon.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _extends() {
        _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key2 in source) {
              if (Object.prototype.hasOwnProperty.call(source, key2)) {
                target[key2] = source[key2];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [null];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key2, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key2 = sourceKeys[i];
          if (excluded.indexOf(key2) >= 0)
            continue;
          target[key2] = source[key2];
        }
        return target;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n2 = Object.prototype.toString.call(o).slice(8, -1);
        if (n2 === "Object" && o.constructor)
          n2 = o.constructor.name;
        if (n2 === "Map" || n2 === "Set")
          return Array.from(o);
        if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it)
          return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          return function() {
            if (i >= o.length)
              return {
                done: true
              };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var LuxonError = /* @__PURE__ */ function(_Error) {
        _inheritsLoose(LuxonError2, _Error);
        function LuxonError2() {
          return _Error.apply(this, arguments) || this;
        }
        return LuxonError2;
      }(/* @__PURE__ */ _wrapNativeSuper(Error));
      var InvalidDateTimeError = /* @__PURE__ */ function(_LuxonError) {
        _inheritsLoose(InvalidDateTimeError2, _LuxonError);
        function InvalidDateTimeError2(reason) {
          return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
        }
        return InvalidDateTimeError2;
      }(LuxonError);
      var InvalidIntervalError = /* @__PURE__ */ function(_LuxonError2) {
        _inheritsLoose(InvalidIntervalError2, _LuxonError2);
        function InvalidIntervalError2(reason) {
          return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
        }
        return InvalidIntervalError2;
      }(LuxonError);
      var InvalidDurationError = /* @__PURE__ */ function(_LuxonError3) {
        _inheritsLoose(InvalidDurationError2, _LuxonError3);
        function InvalidDurationError2(reason) {
          return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
        }
        return InvalidDurationError2;
      }(LuxonError);
      var ConflictingSpecificationError = /* @__PURE__ */ function(_LuxonError4) {
        _inheritsLoose(ConflictingSpecificationError2, _LuxonError4);
        function ConflictingSpecificationError2() {
          return _LuxonError4.apply(this, arguments) || this;
        }
        return ConflictingSpecificationError2;
      }(LuxonError);
      var InvalidUnitError = /* @__PURE__ */ function(_LuxonError5) {
        _inheritsLoose(InvalidUnitError2, _LuxonError5);
        function InvalidUnitError2(unit) {
          return _LuxonError5.call(this, "Invalid unit " + unit) || this;
        }
        return InvalidUnitError2;
      }(LuxonError);
      var InvalidArgumentError = /* @__PURE__ */ function(_LuxonError6) {
        _inheritsLoose(InvalidArgumentError2, _LuxonError6);
        function InvalidArgumentError2() {
          return _LuxonError6.apply(this, arguments) || this;
        }
        return InvalidArgumentError2;
      }(LuxonError);
      var ZoneIsAbstractError = /* @__PURE__ */ function(_LuxonError7) {
        _inheritsLoose(ZoneIsAbstractError2, _LuxonError7);
        function ZoneIsAbstractError2() {
          return _LuxonError7.call(this, "Zone is an abstract class") || this;
        }
        return ZoneIsAbstractError2;
      }(LuxonError);
      var n = "numeric";
      var s = "short";
      var l = "long";
      var DATE_SHORT = {
        year: n,
        month: n,
        day: n
      };
      var DATE_MED = {
        year: n,
        month: s,
        day: n
      };
      var DATE_MED_WITH_WEEKDAY = {
        year: n,
        month: s,
        day: n,
        weekday: s
      };
      var DATE_FULL = {
        year: n,
        month: l,
        day: n
      };
      var DATE_HUGE = {
        year: n,
        month: l,
        day: n,
        weekday: l
      };
      var TIME_SIMPLE = {
        hour: n,
        minute: n
      };
      var TIME_WITH_SECONDS = {
        hour: n,
        minute: n,
        second: n
      };
      var TIME_WITH_SHORT_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        timeZoneName: s
      };
      var TIME_WITH_LONG_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        timeZoneName: l
      };
      var TIME_24_SIMPLE = {
        hour: n,
        minute: n,
        hourCycle: "h23"
      };
      var TIME_24_WITH_SECONDS = {
        hour: n,
        minute: n,
        second: n,
        hourCycle: "h23"
      };
      var TIME_24_WITH_SHORT_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        hourCycle: "h23",
        timeZoneName: s
      };
      var TIME_24_WITH_LONG_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        hourCycle: "h23",
        timeZoneName: l
      };
      var DATETIME_SHORT = {
        year: n,
        month: n,
        day: n,
        hour: n,
        minute: n
      };
      var DATETIME_SHORT_WITH_SECONDS = {
        year: n,
        month: n,
        day: n,
        hour: n,
        minute: n,
        second: n
      };
      var DATETIME_MED = {
        year: n,
        month: s,
        day: n,
        hour: n,
        minute: n
      };
      var DATETIME_MED_WITH_SECONDS = {
        year: n,
        month: s,
        day: n,
        hour: n,
        minute: n,
        second: n
      };
      var DATETIME_MED_WITH_WEEKDAY = {
        year: n,
        month: s,
        day: n,
        weekday: s,
        hour: n,
        minute: n
      };
      var DATETIME_FULL = {
        year: n,
        month: l,
        day: n,
        hour: n,
        minute: n,
        timeZoneName: s
      };
      var DATETIME_FULL_WITH_SECONDS = {
        year: n,
        month: l,
        day: n,
        hour: n,
        minute: n,
        second: n,
        timeZoneName: s
      };
      var DATETIME_HUGE = {
        year: n,
        month: l,
        day: n,
        weekday: l,
        hour: n,
        minute: n,
        timeZoneName: l
      };
      var DATETIME_HUGE_WITH_SECONDS = {
        year: n,
        month: l,
        day: n,
        weekday: l,
        hour: n,
        minute: n,
        second: n,
        timeZoneName: l
      };
      function isUndefined(o) {
        return typeof o === "undefined";
      }
      function isNumber(o) {
        return typeof o === "number";
      }
      function isInteger(o) {
        return typeof o === "number" && o % 1 === 0;
      }
      function isString(o) {
        return typeof o === "string";
      }
      function isDate(o) {
        return Object.prototype.toString.call(o) === "[object Date]";
      }
      function hasRelative() {
        try {
          return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
        } catch (e) {
          return false;
        }
      }
      function maybeArray(thing) {
        return Array.isArray(thing) ? thing : [thing];
      }
      function bestBy(arr, by, compare) {
        if (arr.length === 0) {
          return void 0;
        }
        return arr.reduce(function(best, next) {
          var pair = [by(next), next];
          if (!best) {
            return pair;
          } else if (compare(best[0], pair[0]) === best[0]) {
            return best;
          } else {
            return pair;
          }
        }, null)[1];
      }
      function pick(obj, keys) {
        return keys.reduce(function(a, k) {
          a[k] = obj[k];
          return a;
        }, {});
      }
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      function integerBetween(thing, bottom, top) {
        return isInteger(thing) && thing >= bottom && thing <= top;
      }
      function floorMod(x, n2) {
        return x - n2 * Math.floor(x / n2);
      }
      function padStart(input, n2) {
        if (n2 === void 0) {
          n2 = 2;
        }
        var isNeg = input < 0;
        var padded;
        if (isNeg) {
          padded = "-" + ("" + -input).padStart(n2, "0");
        } else {
          padded = ("" + input).padStart(n2, "0");
        }
        return padded;
      }
      function parseInteger(string) {
        if (isUndefined(string) || string === null || string === "") {
          return void 0;
        } else {
          return parseInt(string, 10);
        }
      }
      function parseFloating(string) {
        if (isUndefined(string) || string === null || string === "") {
          return void 0;
        } else {
          return parseFloat(string);
        }
      }
      function parseMillis(fraction) {
        if (isUndefined(fraction) || fraction === null || fraction === "") {
          return void 0;
        } else {
          var f = parseFloat("0." + fraction) * 1e3;
          return Math.floor(f);
        }
      }
      function roundTo(number, digits, towardZero) {
        if (towardZero === void 0) {
          towardZero = false;
        }
        var factor = Math.pow(10, digits), rounder = towardZero ? Math.trunc : Math.round;
        return rounder(number * factor) / factor;
      }
      function isLeapYear(year) {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
      }
      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      }
      function daysInMonth(year, month) {
        var modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
        if (modMonth === 2) {
          return isLeapYear(modYear) ? 29 : 28;
        } else {
          return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
        }
      }
      function objToLocalTS(obj) {
        var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
        if (obj.year < 100 && obj.year >= 0) {
          d = new Date(d);
          d.setUTCFullYear(d.getUTCFullYear() - 1900);
        }
        return +d;
      }
      function weeksInWeekYear(weekYear) {
        var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
        return p1 === 4 || p2 === 3 ? 53 : 52;
      }
      function untruncateYear(year) {
        if (year > 99) {
          return year;
        } else
          return year > 60 ? 1900 + year : 2e3 + year;
      }
      function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
        if (timeZone === void 0) {
          timeZone = null;
        }
        var date = new Date(ts), intlOpts = {
          hourCycle: "h23",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        };
        if (timeZone) {
          intlOpts.timeZone = timeZone;
        }
        var modified = _extends({
          timeZoneName: offsetFormat
        }, intlOpts);
        var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function(m) {
          return m.type.toLowerCase() === "timezonename";
        });
        return parsed ? parsed.value : null;
      }
      function signedOffset(offHourStr, offMinuteStr) {
        var offHour = parseInt(offHourStr, 10);
        if (Number.isNaN(offHour)) {
          offHour = 0;
        }
        var offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
        return offHour * 60 + offMinSigned;
      }
      function asNumber(value2) {
        var numericValue = Number(value2);
        if (typeof value2 === "boolean" || value2 === "" || Number.isNaN(numericValue))
          throw new InvalidArgumentError("Invalid unit value " + value2);
        return numericValue;
      }
      function normalizeObject(obj, normalizer) {
        var normalized = {};
        for (var u in obj) {
          if (hasOwnProperty(obj, u)) {
            var v = obj[u];
            if (v === void 0 || v === null)
              continue;
            normalized[normalizer(u)] = asNumber(v);
          }
        }
        return normalized;
      }
      function formatOffset(offset2, format) {
        var hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign = offset2 >= 0 ? "+" : "-";
        switch (format) {
          case "short":
            return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);
          case "narrow":
            return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");
          case "techie":
            return "" + sign + padStart(hours, 2) + padStart(minutes, 2);
          default:
            throw new RangeError("Value format " + format + " is out of range for property format");
        }
      }
      function timeObject(obj) {
        return pick(obj, ["hour", "minute", "second", "millisecond"]);
      }
      var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/;
      var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
      function months2(length) {
        switch (length) {
          case "narrow":
            return [].concat(monthsNarrow);
          case "short":
            return [].concat(monthsShort);
          case "long":
            return [].concat(monthsLong);
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
          case "2-digit":
            return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
          default:
            return null;
        }
      }
      var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
      function weekdays2(length) {
        switch (length) {
          case "narrow":
            return [].concat(weekdaysNarrow);
          case "short":
            return [].concat(weekdaysShort);
          case "long":
            return [].concat(weekdaysLong);
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7"];
          default:
            return null;
        }
      }
      var meridiems = ["AM", "PM"];
      var erasLong = ["Before Christ", "Anno Domini"];
      var erasShort = ["BC", "AD"];
      var erasNarrow = ["B", "A"];
      function eras(length) {
        switch (length) {
          case "narrow":
            return [].concat(erasNarrow);
          case "short":
            return [].concat(erasShort);
          case "long":
            return [].concat(erasLong);
          default:
            return null;
        }
      }
      function meridiemForDateTime(dt) {
        return meridiems[dt.hour < 12 ? 0 : 1];
      }
      function weekdayForDateTime(dt, length) {
        return weekdays2(length)[dt.weekday - 1];
      }
      function monthForDateTime(dt, length) {
        return months2(length)[dt.month - 1];
      }
      function eraForDateTime(dt, length) {
        return eras(length)[dt.year < 0 ? 0 : 1];
      }
      function formatRelativeTime(unit, count, numeric, narrow) {
        if (numeric === void 0) {
          numeric = "always";
        }
        if (narrow === void 0) {
          narrow = false;
        }
        var units = {
          years: ["year", "yr."],
          quarters: ["quarter", "qtr."],
          months: ["month", "mo."],
          weeks: ["week", "wk."],
          days: ["day", "day", "days"],
          hours: ["hour", "hr."],
          minutes: ["minute", "min."],
          seconds: ["second", "sec."]
        };
        var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
        if (numeric === "auto" && lastable) {
          var isDay = unit === "days";
          switch (count) {
            case 1:
              return isDay ? "tomorrow" : "next " + units[unit][0];
            case -1:
              return isDay ? "yesterday" : "last " + units[unit][0];
            case 0:
              return isDay ? "today" : "this " + units[unit][0];
          }
        }
        var isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
        return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
      }
      function stringifyTokens(splits, tokenToString) {
        var s2 = "";
        for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done; ) {
          var token = _step.value;
          if (token.literal) {
            s2 += token.val;
          } else {
            s2 += tokenToString(token.val);
          }
        }
        return s2;
      }
      var _macroTokenToFormatOpts = {
        D: DATE_SHORT,
        DD: DATE_MED,
        DDD: DATE_FULL,
        DDDD: DATE_HUGE,
        t: TIME_SIMPLE,
        tt: TIME_WITH_SECONDS,
        ttt: TIME_WITH_SHORT_OFFSET,
        tttt: TIME_WITH_LONG_OFFSET,
        T: TIME_24_SIMPLE,
        TT: TIME_24_WITH_SECONDS,
        TTT: TIME_24_WITH_SHORT_OFFSET,
        TTTT: TIME_24_WITH_LONG_OFFSET,
        f: DATETIME_SHORT,
        ff: DATETIME_MED,
        fff: DATETIME_FULL,
        ffff: DATETIME_HUGE,
        F: DATETIME_SHORT_WITH_SECONDS,
        FF: DATETIME_MED_WITH_SECONDS,
        FFF: DATETIME_FULL_WITH_SECONDS,
        FFFF: DATETIME_HUGE_WITH_SECONDS
      };
      var Formatter = /* @__PURE__ */ function() {
        Formatter2.create = function create(locale, opts) {
          if (opts === void 0) {
            opts = {};
          }
          return new Formatter2(locale, opts);
        };
        Formatter2.parseFormat = function parseFormat(fmt) {
          var current = null, currentFull = "", bracketed = false;
          var splits = [];
          for (var i = 0; i < fmt.length; i++) {
            var c = fmt.charAt(i);
            if (c === "'") {
              if (currentFull.length > 0) {
                splits.push({
                  literal: bracketed,
                  val: currentFull
                });
              }
              current = null;
              currentFull = "";
              bracketed = !bracketed;
            } else if (bracketed) {
              currentFull += c;
            } else if (c === current) {
              currentFull += c;
            } else {
              if (currentFull.length > 0) {
                splits.push({
                  literal: false,
                  val: currentFull
                });
              }
              currentFull = c;
              current = c;
            }
          }
          if (currentFull.length > 0) {
            splits.push({
              literal: bracketed,
              val: currentFull
            });
          }
          return splits;
        };
        Formatter2.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
          return _macroTokenToFormatOpts[token];
        };
        function Formatter2(locale, formatOpts) {
          this.opts = formatOpts;
          this.loc = locale;
          this.systemLoc = null;
        }
        var _proto = Formatter2.prototype;
        _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
          if (this.systemLoc === null) {
            this.systemLoc = this.loc.redefaultToSystem();
          }
          var df = this.systemLoc.dtFormatter(dt, _extends({}, this.opts, opts));
          return df.format();
        };
        _proto.formatDateTime = function formatDateTime(dt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
          return df.format();
        };
        _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
          return df.formatToParts();
        };
        _proto.resolvedOptions = function resolvedOptions(dt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
          return df.resolvedOptions();
        };
        _proto.num = function num(n2, p) {
          if (p === void 0) {
            p = 0;
          }
          if (this.opts.forceSimple) {
            return padStart(n2, p);
          }
          var opts = _extends({}, this.opts);
          if (p > 0) {
            opts.padTo = p;
          }
          return this.loc.numberFormatter(opts).format(n2);
        };
        _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
          var _this = this;
          var knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = function string2(opts, extract) {
            return _this.loc.extract(dt, opts, extract);
          }, formatOffset2 = function formatOffset3(opts) {
            if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
              return "Z";
            }
            return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
          }, meridiem = function meridiem2() {
            return knownEnglish ? meridiemForDateTime(dt) : string({
              hour: "numeric",
              hourCycle: "h12"
            }, "dayperiod");
          }, month = function month2(length, standalone) {
            return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
              month: length
            } : {
              month: length,
              day: "numeric"
            }, "month");
          }, weekday = function weekday2(length, standalone) {
            return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
              weekday: length
            } : {
              weekday: length,
              month: "long",
              day: "numeric"
            }, "weekday");
          }, maybeMacro = function maybeMacro2(token) {
            var formatOpts = Formatter2.macroTokenToFormatOpts(token);
            if (formatOpts) {
              return _this.formatWithSystemDefault(dt, formatOpts);
            } else {
              return token;
            }
          }, era = function era2(length) {
            return knownEnglish ? eraForDateTime(dt, length) : string({
              era: length
            }, "era");
          }, tokenToString = function tokenToString2(token) {
            switch (token) {
              case "S":
                return _this.num(dt.millisecond);
              case "u":
              case "SSS":
                return _this.num(dt.millisecond, 3);
              case "s":
                return _this.num(dt.second);
              case "ss":
                return _this.num(dt.second, 2);
              case "uu":
                return _this.num(Math.floor(dt.millisecond / 10), 2);
              case "uuu":
                return _this.num(Math.floor(dt.millisecond / 100));
              case "m":
                return _this.num(dt.minute);
              case "mm":
                return _this.num(dt.minute, 2);
              case "h":
                return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
              case "hh":
                return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
              case "H":
                return _this.num(dt.hour);
              case "HH":
                return _this.num(dt.hour, 2);
              case "Z":
                return formatOffset2({
                  format: "narrow",
                  allowZ: _this.opts.allowZ
                });
              case "ZZ":
                return formatOffset2({
                  format: "short",
                  allowZ: _this.opts.allowZ
                });
              case "ZZZ":
                return formatOffset2({
                  format: "techie",
                  allowZ: _this.opts.allowZ
                });
              case "ZZZZ":
                return dt.zone.offsetName(dt.ts, {
                  format: "short",
                  locale: _this.loc.locale
                });
              case "ZZZZZ":
                return dt.zone.offsetName(dt.ts, {
                  format: "long",
                  locale: _this.loc.locale
                });
              case "z":
                return dt.zoneName;
              case "a":
                return meridiem();
              case "d":
                return useDateTimeFormatter ? string({
                  day: "numeric"
                }, "day") : _this.num(dt.day);
              case "dd":
                return useDateTimeFormatter ? string({
                  day: "2-digit"
                }, "day") : _this.num(dt.day, 2);
              case "c":
                return _this.num(dt.weekday);
              case "ccc":
                return weekday("short", true);
              case "cccc":
                return weekday("long", true);
              case "ccccc":
                return weekday("narrow", true);
              case "E":
                return _this.num(dt.weekday);
              case "EEE":
                return weekday("short", false);
              case "EEEE":
                return weekday("long", false);
              case "EEEEE":
                return weekday("narrow", false);
              case "L":
                return useDateTimeFormatter ? string({
                  month: "numeric",
                  day: "numeric"
                }, "month") : _this.num(dt.month);
              case "LL":
                return useDateTimeFormatter ? string({
                  month: "2-digit",
                  day: "numeric"
                }, "month") : _this.num(dt.month, 2);
              case "LLL":
                return month("short", true);
              case "LLLL":
                return month("long", true);
              case "LLLLL":
                return month("narrow", true);
              case "M":
                return useDateTimeFormatter ? string({
                  month: "numeric"
                }, "month") : _this.num(dt.month);
              case "MM":
                return useDateTimeFormatter ? string({
                  month: "2-digit"
                }, "month") : _this.num(dt.month, 2);
              case "MMM":
                return month("short", false);
              case "MMMM":
                return month("long", false);
              case "MMMMM":
                return month("narrow", false);
              case "y":
                return useDateTimeFormatter ? string({
                  year: "numeric"
                }, "year") : _this.num(dt.year);
              case "yy":
                return useDateTimeFormatter ? string({
                  year: "2-digit"
                }, "year") : _this.num(dt.year.toString().slice(-2), 2);
              case "yyyy":
                return useDateTimeFormatter ? string({
                  year: "numeric"
                }, "year") : _this.num(dt.year, 4);
              case "yyyyyy":
                return useDateTimeFormatter ? string({
                  year: "numeric"
                }, "year") : _this.num(dt.year, 6);
              case "G":
                return era("short");
              case "GG":
                return era("long");
              case "GGGGG":
                return era("narrow");
              case "kk":
                return _this.num(dt.weekYear.toString().slice(-2), 2);
              case "kkkk":
                return _this.num(dt.weekYear, 4);
              case "W":
                return _this.num(dt.weekNumber);
              case "WW":
                return _this.num(dt.weekNumber, 2);
              case "o":
                return _this.num(dt.ordinal);
              case "ooo":
                return _this.num(dt.ordinal, 3);
              case "q":
                return _this.num(dt.quarter);
              case "qq":
                return _this.num(dt.quarter, 2);
              case "X":
                return _this.num(Math.floor(dt.ts / 1e3));
              case "x":
                return _this.num(dt.ts);
              default:
                return maybeMacro(token);
            }
          };
          return stringifyTokens(Formatter2.parseFormat(fmt), tokenToString);
        };
        _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
          var _this2 = this;
          var tokenToField = function tokenToField2(token) {
            switch (token[0]) {
              case "S":
                return "millisecond";
              case "s":
                return "second";
              case "m":
                return "minute";
              case "h":
                return "hour";
              case "d":
                return "day";
              case "M":
                return "month";
              case "y":
                return "year";
              default:
                return null;
            }
          }, tokenToString = function tokenToString2(lildur) {
            return function(token) {
              var mapped = tokenToField(token);
              if (mapped) {
                return _this2.num(lildur.get(mapped), token.length);
              } else {
                return token;
              }
            };
          }, tokens = Formatter2.parseFormat(fmt), realTokens = tokens.reduce(function(found, _ref) {
            var literal = _ref.literal, val = _ref.val;
            return literal ? found : found.concat(val);
          }, []), collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function(t) {
            return t;
          }));
          return stringifyTokens(tokens, tokenToString(collapsed));
        };
        return Formatter2;
      }();
      var Invalid = /* @__PURE__ */ function() {
        function Invalid2(reason, explanation) {
          this.reason = reason;
          this.explanation = explanation;
        }
        var _proto = Invalid2.prototype;
        _proto.toMessage = function toMessage() {
          if (this.explanation) {
            return this.reason + ": " + this.explanation;
          } else {
            return this.reason;
          }
        };
        return Invalid2;
      }();
      var Zone = /* @__PURE__ */ function() {
        function Zone2() {
        }
        var _proto = Zone2.prototype;
        _proto.offsetName = function offsetName(ts, opts) {
          throw new ZoneIsAbstractError();
        };
        _proto.formatOffset = function formatOffset2(ts, format) {
          throw new ZoneIsAbstractError();
        };
        _proto.offset = function offset2(ts) {
          throw new ZoneIsAbstractError();
        };
        _proto.equals = function equals(otherZone) {
          throw new ZoneIsAbstractError();
        };
        _createClass(Zone2, [{
          key: "type",
          get: function get() {
            throw new ZoneIsAbstractError();
          }
        }, {
          key: "name",
          get: function get() {
            throw new ZoneIsAbstractError();
          }
        }, {
          key: "isUniversal",
          get: function get() {
            throw new ZoneIsAbstractError();
          }
        }, {
          key: "isValid",
          get: function get() {
            throw new ZoneIsAbstractError();
          }
        }]);
        return Zone2;
      }();
      var singleton$1 = null;
      var SystemZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose(SystemZone2, _Zone);
        function SystemZone2() {
          return _Zone.apply(this, arguments) || this;
        }
        var _proto = SystemZone2.prototype;
        _proto.offsetName = function offsetName(ts, _ref) {
          var format = _ref.format, locale = _ref.locale;
          return parseZoneInfo(ts, format, locale);
        };
        _proto.formatOffset = function formatOffset$1(ts, format) {
          return formatOffset(this.offset(ts), format);
        };
        _proto.offset = function offset2(ts) {
          return -new Date(ts).getTimezoneOffset();
        };
        _proto.equals = function equals(otherZone) {
          return otherZone.type === "system";
        };
        _createClass(SystemZone2, [{
          key: "type",
          get: function get() {
            return "system";
          }
        }, {
          key: "name",
          get: function get() {
            return new Intl.DateTimeFormat().resolvedOptions().timeZone;
          }
        }, {
          key: "isUniversal",
          get: function get() {
            return false;
          }
        }, {
          key: "isValid",
          get: function get() {
            return true;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (singleton$1 === null) {
              singleton$1 = new SystemZone2();
            }
            return singleton$1;
          }
        }]);
        return SystemZone2;
      }(Zone);
      RegExp("^" + ianaRegex.source + "$");
      var dtfCache = {};
      function makeDTF(zone) {
        if (!dtfCache[zone]) {
          dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
            hour12: false,
            timeZone: zone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          });
        }
        return dtfCache[zone];
      }
      var typeToPos = {
        year: 0,
        month: 1,
        day: 2,
        hour: 3,
        minute: 4,
        second: 5
      };
      function hackyOffset(dtf, date) {
        var formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted), fMonth = parsed[1], fDay = parsed[2], fYear = parsed[3], fHour = parsed[4], fMinute = parsed[5], fSecond = parsed[6];
        return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
      }
      function partsOffset(dtf, date) {
        var formatted = dtf.formatToParts(date), filled = [];
        for (var i = 0; i < formatted.length; i++) {
          var _formatted$i = formatted[i], type = _formatted$i.type, value2 = _formatted$i.value, pos = typeToPos[type];
          if (!isUndefined(pos)) {
            filled[pos] = parseInt(value2, 10);
          }
        }
        return filled;
      }
      var ianaZoneCache = {};
      var IANAZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose(IANAZone2, _Zone);
        IANAZone2.create = function create(name) {
          if (!ianaZoneCache[name]) {
            ianaZoneCache[name] = new IANAZone2(name);
          }
          return ianaZoneCache[name];
        };
        IANAZone2.resetCache = function resetCache() {
          ianaZoneCache = {};
          dtfCache = {};
        };
        IANAZone2.isValidSpecifier = function isValidSpecifier(s2) {
          return this.isValidZone(s2);
        };
        IANAZone2.isValidZone = function isValidZone(zone) {
          if (!zone) {
            return false;
          }
          try {
            new Intl.DateTimeFormat("en-US", {
              timeZone: zone
            }).format();
            return true;
          } catch (e) {
            return false;
          }
        };
        function IANAZone2(name) {
          var _this;
          _this = _Zone.call(this) || this;
          _this.zoneName = name;
          _this.valid = IANAZone2.isValidZone(name);
          return _this;
        }
        var _proto = IANAZone2.prototype;
        _proto.offsetName = function offsetName(ts, _ref) {
          var format = _ref.format, locale = _ref.locale;
          return parseZoneInfo(ts, format, locale, this.name);
        };
        _proto.formatOffset = function formatOffset$1(ts, format) {
          return formatOffset(this.offset(ts), format);
        };
        _proto.offset = function offset2(ts) {
          var date = new Date(ts);
          if (isNaN(date))
            return NaN;
          var dtf = makeDTF(this.name), _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date), year = _ref2[0], month = _ref2[1], day = _ref2[2], hour = _ref2[3], minute = _ref2[4], second = _ref2[5];
          var adjustedHour = hour === 24 ? 0 : hour;
          var asUTC = objToLocalTS({
            year,
            month,
            day,
            hour: adjustedHour,
            minute,
            second,
            millisecond: 0
          });
          var asTS = +date;
          var over = asTS % 1e3;
          asTS -= over >= 0 ? over : 1e3 + over;
          return (asUTC - asTS) / (60 * 1e3);
        };
        _proto.equals = function equals(otherZone) {
          return otherZone.type === "iana" && otherZone.name === this.name;
        };
        _createClass(IANAZone2, [{
          key: "type",
          get: function get() {
            return "iana";
          }
        }, {
          key: "name",
          get: function get() {
            return this.zoneName;
          }
        }, {
          key: "isUniversal",
          get: function get() {
            return false;
          }
        }, {
          key: "isValid",
          get: function get() {
            return this.valid;
          }
        }]);
        return IANAZone2;
      }(Zone);
      var singleton = null;
      var FixedOffsetZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose(FixedOffsetZone2, _Zone);
        FixedOffsetZone2.instance = function instance(offset2) {
          return offset2 === 0 ? FixedOffsetZone2.utcInstance : new FixedOffsetZone2(offset2);
        };
        FixedOffsetZone2.parseSpecifier = function parseSpecifier(s2) {
          if (s2) {
            var r = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (r) {
              return new FixedOffsetZone2(signedOffset(r[1], r[2]));
            }
          }
          return null;
        };
        function FixedOffsetZone2(offset2) {
          var _this;
          _this = _Zone.call(this) || this;
          _this.fixed = offset2;
          return _this;
        }
        var _proto = FixedOffsetZone2.prototype;
        _proto.offsetName = function offsetName() {
          return this.name;
        };
        _proto.formatOffset = function formatOffset$1(ts, format) {
          return formatOffset(this.fixed, format);
        };
        _proto.offset = function offset2() {
          return this.fixed;
        };
        _proto.equals = function equals(otherZone) {
          return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
        };
        _createClass(FixedOffsetZone2, [{
          key: "type",
          get: function get() {
            return "fixed";
          }
        }, {
          key: "name",
          get: function get() {
            return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
          }
        }, {
          key: "isUniversal",
          get: function get() {
            return true;
          }
        }, {
          key: "isValid",
          get: function get() {
            return true;
          }
        }], [{
          key: "utcInstance",
          get: function get() {
            if (singleton === null) {
              singleton = new FixedOffsetZone2(0);
            }
            return singleton;
          }
        }]);
        return FixedOffsetZone2;
      }(Zone);
      var InvalidZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose(InvalidZone2, _Zone);
        function InvalidZone2(zoneName) {
          var _this;
          _this = _Zone.call(this) || this;
          _this.zoneName = zoneName;
          return _this;
        }
        var _proto = InvalidZone2.prototype;
        _proto.offsetName = function offsetName() {
          return null;
        };
        _proto.formatOffset = function formatOffset2() {
          return "";
        };
        _proto.offset = function offset2() {
          return NaN;
        };
        _proto.equals = function equals() {
          return false;
        };
        _createClass(InvalidZone2, [{
          key: "type",
          get: function get() {
            return "invalid";
          }
        }, {
          key: "name",
          get: function get() {
            return this.zoneName;
          }
        }, {
          key: "isUniversal",
          get: function get() {
            return false;
          }
        }, {
          key: "isValid",
          get: function get() {
            return false;
          }
        }]);
        return InvalidZone2;
      }(Zone);
      function normalizeZone(input, defaultZone2) {
        if (isUndefined(input) || input === null) {
          return defaultZone2;
        } else if (input instanceof Zone) {
          return input;
        } else if (isString(input)) {
          var lowered = input.toLowerCase();
          if (lowered === "local" || lowered === "system")
            return defaultZone2;
          else if (lowered === "utc" || lowered === "gmt")
            return FixedOffsetZone.utcInstance;
          else
            return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
        } else if (isNumber(input)) {
          return FixedOffsetZone.instance(input);
        } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
          return input;
        } else {
          return new InvalidZone(input);
        }
      }
      var now = function now2() {
        return Date.now();
      };
      var defaultZone = "system";
      var defaultLocale = null;
      var defaultNumberingSystem = null;
      var defaultOutputCalendar = null;
      var throwOnInvalid;
      var Settings = /* @__PURE__ */ function() {
        function Settings2() {
        }
        Settings2.resetCaches = function resetCaches() {
          Locale.resetCache();
          IANAZone.resetCache();
        };
        _createClass(Settings2, null, [{
          key: "now",
          get: function get() {
            return now;
          },
          set: function set(n2) {
            now = n2;
          }
        }, {
          key: "defaultZone",
          get: function get() {
            return normalizeZone(defaultZone, SystemZone.instance);
          },
          set: function set(zone) {
            defaultZone = zone;
          }
        }, {
          key: "defaultLocale",
          get: function get() {
            return defaultLocale;
          },
          set: function set(locale) {
            defaultLocale = locale;
          }
        }, {
          key: "defaultNumberingSystem",
          get: function get() {
            return defaultNumberingSystem;
          },
          set: function set(numberingSystem) {
            defaultNumberingSystem = numberingSystem;
          }
        }, {
          key: "defaultOutputCalendar",
          get: function get() {
            return defaultOutputCalendar;
          },
          set: function set(outputCalendar) {
            defaultOutputCalendar = outputCalendar;
          }
        }, {
          key: "throwOnInvalid",
          get: function get() {
            return throwOnInvalid;
          },
          set: function set(t) {
            throwOnInvalid = t;
          }
        }]);
        return Settings2;
      }();
      var _excluded = ["base"];
      var _excluded2 = ["padTo", "floor"];
      var intlLFCache = {};
      function getCachedLF(locString, opts) {
        if (opts === void 0) {
          opts = {};
        }
        var key2 = JSON.stringify([locString, opts]);
        var dtf = intlLFCache[key2];
        if (!dtf) {
          dtf = new Intl.ListFormat(locString, opts);
          intlLFCache[key2] = dtf;
        }
        return dtf;
      }
      var intlDTCache = {};
      function getCachedDTF(locString, opts) {
        if (opts === void 0) {
          opts = {};
        }
        var key2 = JSON.stringify([locString, opts]);
        var dtf = intlDTCache[key2];
        if (!dtf) {
          dtf = new Intl.DateTimeFormat(locString, opts);
          intlDTCache[key2] = dtf;
        }
        return dtf;
      }
      var intlNumCache = {};
      function getCachedINF(locString, opts) {
        if (opts === void 0) {
          opts = {};
        }
        var key2 = JSON.stringify([locString, opts]);
        var inf = intlNumCache[key2];
        if (!inf) {
          inf = new Intl.NumberFormat(locString, opts);
          intlNumCache[key2] = inf;
        }
        return inf;
      }
      var intlRelCache = {};
      function getCachedRTF(locString, opts) {
        if (opts === void 0) {
          opts = {};
        }
        var _opts = opts;
        _opts.base;
        var cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, _excluded);
        var key2 = JSON.stringify([locString, cacheKeyOpts]);
        var inf = intlRelCache[key2];
        if (!inf) {
          inf = new Intl.RelativeTimeFormat(locString, opts);
          intlRelCache[key2] = inf;
        }
        return inf;
      }
      var sysLocaleCache = null;
      function systemLocale() {
        if (sysLocaleCache) {
          return sysLocaleCache;
        } else {
          sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
          return sysLocaleCache;
        }
      }
      function parseLocaleString(localeStr) {
        var uIndex = localeStr.indexOf("-u-");
        if (uIndex === -1) {
          return [localeStr];
        } else {
          var options;
          var smaller = localeStr.substring(0, uIndex);
          try {
            options = getCachedDTF(localeStr).resolvedOptions();
          } catch (e) {
            options = getCachedDTF(smaller).resolvedOptions();
          }
          var _options = options, numberingSystem = _options.numberingSystem, calendar = _options.calendar;
          return [smaller, numberingSystem, calendar];
        }
      }
      function intlConfigString(localeStr, numberingSystem, outputCalendar) {
        if (outputCalendar || numberingSystem) {
          localeStr += "-u";
          if (outputCalendar) {
            localeStr += "-ca-" + outputCalendar;
          }
          if (numberingSystem) {
            localeStr += "-nu-" + numberingSystem;
          }
          return localeStr;
        } else {
          return localeStr;
        }
      }
      function mapMonths(f) {
        var ms = [];
        for (var i = 1; i <= 12; i++) {
          var dt = DateTime2.utc(2016, i, 1);
          ms.push(f(dt));
        }
        return ms;
      }
      function mapWeekdays(f) {
        var ms = [];
        for (var i = 1; i <= 7; i++) {
          var dt = DateTime2.utc(2016, 11, 13 + i);
          ms.push(f(dt));
        }
        return ms;
      }
      function listStuff(loc, length, defaultOK, englishFn, intlFn) {
        var mode = loc.listingMode(defaultOK);
        if (mode === "error") {
          return null;
        } else if (mode === "en") {
          return englishFn(length);
        } else {
          return intlFn(length);
        }
      }
      function supportsFastNumbers(loc) {
        if (loc.numberingSystem && loc.numberingSystem !== "latn") {
          return false;
        } else {
          return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
        }
      }
      var PolyNumberFormatter = /* @__PURE__ */ function() {
        function PolyNumberFormatter2(intl, forceSimple, opts) {
          this.padTo = opts.padTo || 0;
          this.floor = opts.floor || false;
          opts.padTo;
          opts.floor;
          var otherOpts = _objectWithoutPropertiesLoose(opts, _excluded2);
          if (!forceSimple || Object.keys(otherOpts).length > 0) {
            var intlOpts = _extends({
              useGrouping: false
            }, opts);
            if (opts.padTo > 0)
              intlOpts.minimumIntegerDigits = opts.padTo;
            this.inf = getCachedINF(intl, intlOpts);
          }
        }
        var _proto = PolyNumberFormatter2.prototype;
        _proto.format = function format(i) {
          if (this.inf) {
            var fixed = this.floor ? Math.floor(i) : i;
            return this.inf.format(fixed);
          } else {
            var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
            return padStart(_fixed, this.padTo);
          }
        };
        return PolyNumberFormatter2;
      }();
      var PolyDateFormatter = /* @__PURE__ */ function() {
        function PolyDateFormatter2(dt, intl, opts) {
          this.opts = opts;
          var z;
          if (dt.zone.isUniversal) {
            var gmtOffset = -1 * (dt.offset / 60);
            var offsetZ = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
            if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
              z = offsetZ;
              this.dt = dt;
            } else {
              z = "UTC";
              if (opts.timeZoneName) {
                this.dt = dt;
              } else {
                this.dt = dt.offset === 0 ? dt : DateTime2.fromMillis(dt.ts + dt.offset * 60 * 1e3);
              }
            }
          } else if (dt.zone.type === "system") {
            this.dt = dt;
          } else {
            this.dt = dt;
            z = dt.zone.name;
          }
          var intlOpts = _extends({}, this.opts);
          if (z) {
            intlOpts.timeZone = z;
          }
          this.dtf = getCachedDTF(intl, intlOpts);
        }
        var _proto2 = PolyDateFormatter2.prototype;
        _proto2.format = function format() {
          return this.dtf.format(this.dt.toJSDate());
        };
        _proto2.formatToParts = function formatToParts() {
          return this.dtf.formatToParts(this.dt.toJSDate());
        };
        _proto2.resolvedOptions = function resolvedOptions() {
          return this.dtf.resolvedOptions();
        };
        return PolyDateFormatter2;
      }();
      var PolyRelFormatter = /* @__PURE__ */ function() {
        function PolyRelFormatter2(intl, isEnglish, opts) {
          this.opts = _extends({
            style: "long"
          }, opts);
          if (!isEnglish && hasRelative()) {
            this.rtf = getCachedRTF(intl, opts);
          }
        }
        var _proto3 = PolyRelFormatter2.prototype;
        _proto3.format = function format(count, unit) {
          if (this.rtf) {
            return this.rtf.format(count, unit);
          } else {
            return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
          }
        };
        _proto3.formatToParts = function formatToParts(count, unit) {
          if (this.rtf) {
            return this.rtf.formatToParts(count, unit);
          } else {
            return [];
          }
        };
        return PolyRelFormatter2;
      }();
      var Locale = /* @__PURE__ */ function() {
        Locale2.fromOpts = function fromOpts(opts) {
          return Locale2.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
        };
        Locale2.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
          if (defaultToEN === void 0) {
            defaultToEN = false;
          }
          var specifiedLocale = locale || Settings.defaultLocale;
          var localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
          var numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
          var outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
          return new Locale2(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
        };
        Locale2.resetCache = function resetCache() {
          sysLocaleCache = null;
          intlDTCache = {};
          intlNumCache = {};
          intlRelCache = {};
        };
        Locale2.fromObject = function fromObject(_temp) {
          var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, outputCalendar = _ref.outputCalendar;
          return Locale2.create(locale, numberingSystem, outputCalendar);
        };
        function Locale2(locale, numbering, outputCalendar, specifiedLocale) {
          var _parseLocaleString = parseLocaleString(locale), parsedLocale = _parseLocaleString[0], parsedNumberingSystem = _parseLocaleString[1], parsedOutputCalendar = _parseLocaleString[2];
          this.locale = parsedLocale;
          this.numberingSystem = numbering || parsedNumberingSystem || null;
          this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
          this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
          this.weekdaysCache = {
            format: {},
            standalone: {}
          };
          this.monthsCache = {
            format: {},
            standalone: {}
          };
          this.meridiemCache = null;
          this.eraCache = {};
          this.specifiedLocale = specifiedLocale;
          this.fastNumbersCached = null;
        }
        var _proto4 = Locale2.prototype;
        _proto4.listingMode = function listingMode() {
          var isActuallyEn = this.isEnglish();
          var hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
          return isActuallyEn && hasNoWeirdness ? "en" : "intl";
        };
        _proto4.clone = function clone2(alts) {
          if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
            return this;
          } else {
            return Locale2.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
          }
        };
        _proto4.redefaultToEN = function redefaultToEN(alts) {
          if (alts === void 0) {
            alts = {};
          }
          return this.clone(_extends({}, alts, {
            defaultToEN: true
          }));
        };
        _proto4.redefaultToSystem = function redefaultToSystem(alts) {
          if (alts === void 0) {
            alts = {};
          }
          return this.clone(_extends({}, alts, {
            defaultToEN: false
          }));
        };
        _proto4.months = function months$1(length, format, defaultOK) {
          var _this = this;
          if (format === void 0) {
            format = false;
          }
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, length, defaultOK, months2, function() {
            var intl = format ? {
              month: length,
              day: "numeric"
            } : {
              month: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this.monthsCache[formatStr][length]) {
              _this.monthsCache[formatStr][length] = mapMonths(function(dt) {
                return _this.extract(dt, intl, "month");
              });
            }
            return _this.monthsCache[formatStr][length];
          });
        };
        _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
          var _this2 = this;
          if (format === void 0) {
            format = false;
          }
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, length, defaultOK, weekdays2, function() {
            var intl = format ? {
              weekday: length,
              year: "numeric",
              month: "long",
              day: "numeric"
            } : {
              weekday: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this2.weekdaysCache[formatStr][length]) {
              _this2.weekdaysCache[formatStr][length] = mapWeekdays(function(dt) {
                return _this2.extract(dt, intl, "weekday");
              });
            }
            return _this2.weekdaysCache[formatStr][length];
          });
        };
        _proto4.meridiems = function meridiems$1(defaultOK) {
          var _this3 = this;
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, void 0, defaultOK, function() {
            return meridiems;
          }, function() {
            if (!_this3.meridiemCache) {
              var intl = {
                hour: "numeric",
                hourCycle: "h12"
              };
              _this3.meridiemCache = [DateTime2.utc(2016, 11, 13, 9), DateTime2.utc(2016, 11, 13, 19)].map(function(dt) {
                return _this3.extract(dt, intl, "dayperiod");
              });
            }
            return _this3.meridiemCache;
          });
        };
        _proto4.eras = function eras$1(length, defaultOK) {
          var _this4 = this;
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, length, defaultOK, eras, function() {
            var intl = {
              era: length
            };
            if (!_this4.eraCache[length]) {
              _this4.eraCache[length] = [DateTime2.utc(-40, 1, 1), DateTime2.utc(2017, 1, 1)].map(function(dt) {
                return _this4.extract(dt, intl, "era");
              });
            }
            return _this4.eraCache[length];
          });
        };
        _proto4.extract = function extract(dt, intlOpts, field) {
          var df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find(function(m) {
            return m.type.toLowerCase() === field;
          });
          return matching ? matching.value : null;
        };
        _proto4.numberFormatter = function numberFormatter(opts) {
          if (opts === void 0) {
            opts = {};
          }
          return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
        };
        _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
          if (intlOpts === void 0) {
            intlOpts = {};
          }
          return new PolyDateFormatter(dt, this.intl, intlOpts);
        };
        _proto4.relFormatter = function relFormatter(opts) {
          if (opts === void 0) {
            opts = {};
          }
          return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
        };
        _proto4.listFormatter = function listFormatter(opts) {
          if (opts === void 0) {
            opts = {};
          }
          return getCachedLF(this.intl, opts);
        };
        _proto4.isEnglish = function isEnglish() {
          return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
        };
        _proto4.equals = function equals(other) {
          return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
        };
        _createClass(Locale2, [{
          key: "fastNumbers",
          get: function get() {
            if (this.fastNumbersCached == null) {
              this.fastNumbersCached = supportsFastNumbers(this);
            }
            return this.fastNumbersCached;
          }
        }]);
        return Locale2;
      }();
      function combineRegexes() {
        for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
          regexes[_key] = arguments[_key];
        }
        var full = regexes.reduce(function(f, r) {
          return f + r.source;
        }, "");
        return RegExp("^" + full + "$");
      }
      function combineExtractors() {
        for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          extractors[_key2] = arguments[_key2];
        }
        return function(m) {
          return extractors.reduce(function(_ref, ex) {
            var mergedVals = _ref[0], mergedZone = _ref[1], cursor = _ref[2];
            var _ex = ex(m, cursor), val = _ex[0], zone = _ex[1], next = _ex[2];
            return [_extends({}, mergedVals, val), mergedZone || zone, next];
          }, [{}, null, 1]).slice(0, 2);
        };
      }
      function parse(s2) {
        if (s2 == null) {
          return [null, null];
        }
        for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          patterns[_key3 - 1] = arguments[_key3];
        }
        for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
          var _patterns$_i = _patterns[_i], regex = _patterns$_i[0], extractor = _patterns$_i[1];
          var m = regex.exec(s2);
          if (m) {
            return extractor(m);
          }
        }
        return [null, null];
      }
      function simpleParse() {
        for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          keys[_key4] = arguments[_key4];
        }
        return function(match2, cursor) {
          var ret = {};
          var i;
          for (i = 0; i < keys.length; i++) {
            ret[keys[i]] = parseInteger(match2[cursor + i]);
          }
          return [ret, null, cursor + i];
        };
      }
      var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
      var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
      var isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?");
      var isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?");
      var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
      var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
      var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
      var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
      var extractISOOrdinalData = simpleParse("year", "ordinal");
      var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/;
      var sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?");
      var sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");
      function int(match2, pos, fallback) {
        var m = match2[pos];
        return isUndefined(m) ? fallback : parseInteger(m);
      }
      function extractISOYmd(match2, cursor) {
        var item = {
          year: int(match2, cursor),
          month: int(match2, cursor + 1, 1),
          day: int(match2, cursor + 2, 1)
        };
        return [item, null, cursor + 3];
      }
      function extractISOTime(match2, cursor) {
        var item = {
          hours: int(match2, cursor, 0),
          minutes: int(match2, cursor + 1, 0),
          seconds: int(match2, cursor + 2, 0),
          milliseconds: parseMillis(match2[cursor + 3])
        };
        return [item, null, cursor + 4];
      }
      function extractISOOffset(match2, cursor) {
        var local = !match2[cursor] && !match2[cursor + 1], fullOffset = signedOffset(match2[cursor + 1], match2[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
        return [{}, zone, cursor + 3];
      }
      function extractIANAZone(match2, cursor) {
        var zone = match2[cursor] ? IANAZone.create(match2[cursor]) : null;
        return [{}, zone, cursor + 1];
      }
      var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$");
      var isoDuration = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
      function extractISODuration(match2) {
        var s2 = match2[0], yearStr = match2[1], monthStr = match2[2], weekStr = match2[3], dayStr = match2[4], hourStr = match2[5], minuteStr = match2[6], secondStr = match2[7], millisecondsStr = match2[8];
        var hasNegativePrefix = s2[0] === "-";
        var negativeSeconds = secondStr && secondStr[0] === "-";
        var maybeNegate = function maybeNegate2(num, force) {
          if (force === void 0) {
            force = false;
          }
          return num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
        };
        return [{
          years: maybeNegate(parseFloating(yearStr)),
          months: maybeNegate(parseFloating(monthStr)),
          weeks: maybeNegate(parseFloating(weekStr)),
          days: maybeNegate(parseFloating(dayStr)),
          hours: maybeNegate(parseFloating(hourStr)),
          minutes: maybeNegate(parseFloating(minuteStr)),
          seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
          milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
        }];
      }
      var obsOffsets = {
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };
      function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = {
          year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
          month: monthsShort.indexOf(monthStr) + 1,
          day: parseInteger(dayStr),
          hour: parseInteger(hourStr),
          minute: parseInteger(minuteStr)
        };
        if (secondStr)
          result.second = parseInteger(secondStr);
        if (weekdayStr) {
          result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
        }
        return result;
      }
      var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
      function extractRFC2822(match2) {
        var weekdayStr = match2[1], dayStr = match2[2], monthStr = match2[3], yearStr = match2[4], hourStr = match2[5], minuteStr = match2[6], secondStr = match2[7], obsOffset = match2[8], milOffset = match2[9], offHourStr = match2[10], offMinuteStr = match2[11], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
        var offset2;
        if (obsOffset) {
          offset2 = obsOffsets[obsOffset];
        } else if (milOffset) {
          offset2 = 0;
        } else {
          offset2 = signedOffset(offHourStr, offMinuteStr);
        }
        return [result, new FixedOffsetZone(offset2)];
      }
      function preprocessRFC2822(s2) {
        return s2.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
      }
      var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
      var rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
      var ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
      function extractRFC1123Or850(match2) {
        var weekdayStr = match2[1], dayStr = match2[2], monthStr = match2[3], yearStr = match2[4], hourStr = match2[5], minuteStr = match2[6], secondStr = match2[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
        return [result, FixedOffsetZone.utcInstance];
      }
      function extractASCII(match2) {
        var weekdayStr = match2[1], monthStr = match2[2], dayStr = match2[3], hourStr = match2[4], minuteStr = match2[5], secondStr = match2[6], yearStr = match2[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
        return [result, FixedOffsetZone.utcInstance];
      }
      var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
      var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
      var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
      var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
      var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
      var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
      var extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset);
      var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
      function parseISODate(s2) {
        return parse(s2, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
      }
      function parseRFC2822Date(s2) {
        return parse(preprocessRFC2822(s2), [rfc2822, extractRFC2822]);
      }
      function parseHTTPDate(s2) {
        return parse(s2, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
      }
      function parseISODuration(s2) {
        return parse(s2, [isoDuration, extractISODuration]);
      }
      var extractISOTimeOnly = combineExtractors(extractISOTime);
      function parseISOTimeOnly(s2) {
        return parse(s2, [isoTimeOnly, extractISOTimeOnly]);
      }
      var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
      var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
      var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
      var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
      function parseSQL(s2) {
        return parse(s2, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
      }
      var INVALID$2 = "Invalid Duration";
      var lowOrderMatrix = {
        weeks: {
          days: 7,
          hours: 7 * 24,
          minutes: 7 * 24 * 60,
          seconds: 7 * 24 * 60 * 60,
          milliseconds: 7 * 24 * 60 * 60 * 1e3
        },
        days: {
          hours: 24,
          minutes: 24 * 60,
          seconds: 24 * 60 * 60,
          milliseconds: 24 * 60 * 60 * 1e3
        },
        hours: {
          minutes: 60,
          seconds: 60 * 60,
          milliseconds: 60 * 60 * 1e3
        },
        minutes: {
          seconds: 60,
          milliseconds: 60 * 1e3
        },
        seconds: {
          milliseconds: 1e3
        }
      };
      var casualMatrix = _extends({
        years: {
          quarters: 4,
          months: 12,
          weeks: 52,
          days: 365,
          hours: 365 * 24,
          minutes: 365 * 24 * 60,
          seconds: 365 * 24 * 60 * 60,
          milliseconds: 365 * 24 * 60 * 60 * 1e3
        },
        quarters: {
          months: 3,
          weeks: 13,
          days: 91,
          hours: 91 * 24,
          minutes: 91 * 24 * 60,
          seconds: 91 * 24 * 60 * 60,
          milliseconds: 91 * 24 * 60 * 60 * 1e3
        },
        months: {
          weeks: 4,
          days: 30,
          hours: 30 * 24,
          minutes: 30 * 24 * 60,
          seconds: 30 * 24 * 60 * 60,
          milliseconds: 30 * 24 * 60 * 60 * 1e3
        }
      }, lowOrderMatrix);
      var daysInYearAccurate = 146097 / 400;
      var daysInMonthAccurate = 146097 / 4800;
      var accurateMatrix = _extends({
        years: {
          quarters: 4,
          months: 12,
          weeks: daysInYearAccurate / 7,
          days: daysInYearAccurate,
          hours: daysInYearAccurate * 24,
          minutes: daysInYearAccurate * 24 * 60,
          seconds: daysInYearAccurate * 24 * 60 * 60,
          milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
        },
        quarters: {
          months: 3,
          weeks: daysInYearAccurate / 28,
          days: daysInYearAccurate / 4,
          hours: daysInYearAccurate * 24 / 4,
          minutes: daysInYearAccurate * 24 * 60 / 4,
          seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
          milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
        },
        months: {
          weeks: daysInMonthAccurate / 7,
          days: daysInMonthAccurate,
          hours: daysInMonthAccurate * 24,
          minutes: daysInMonthAccurate * 24 * 60,
          seconds: daysInMonthAccurate * 24 * 60 * 60,
          milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
        }
      }, lowOrderMatrix);
      var orderedUnits$1 = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
      var reverseUnits = orderedUnits$1.slice(0).reverse();
      function clone$1(dur, alts, clear) {
        if (clear === void 0) {
          clear = false;
        }
        var conf = {
          values: clear ? alts.values : _extends({}, dur.values, alts.values || {}),
          loc: dur.loc.clone(alts.loc),
          conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
        };
        return new Duration(conf);
      }
      function antiTrunc(n2) {
        return n2 < 0 ? Math.floor(n2) : Math.ceil(n2);
      }
      function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
        var conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
        toMap[toUnit] += added;
        fromMap[fromUnit] -= added * conv;
      }
      function normalizeValues(matrix, vals) {
        reverseUnits.reduce(function(previous, current) {
          if (!isUndefined(vals[current])) {
            if (previous) {
              convert(matrix, vals, previous, vals, current);
            }
            return current;
          } else {
            return previous;
          }
        }, null);
      }
      var Duration = /* @__PURE__ */ function() {
        function Duration2(config) {
          var accurate = config.conversionAccuracy === "longterm" || false;
          this.values = config.values;
          this.loc = config.loc || Locale.create();
          this.conversionAccuracy = accurate ? "longterm" : "casual";
          this.invalid = config.invalid || null;
          this.matrix = accurate ? accurateMatrix : casualMatrix;
          this.isLuxonDuration = true;
        }
        Duration2.fromMillis = function fromMillis(count, opts) {
          return Duration2.fromObject({
            milliseconds: count
          }, opts);
        };
        Duration2.fromObject = function fromObject(obj, opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (obj == null || typeof obj !== "object") {
            throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
          }
          return new Duration2({
            values: normalizeObject(obj, Duration2.normalizeUnit),
            loc: Locale.fromObject(opts),
            conversionAccuracy: opts.conversionAccuracy
          });
        };
        Duration2.fromDurationLike = function fromDurationLike(durationLike) {
          if (isNumber(durationLike)) {
            return Duration2.fromMillis(durationLike);
          } else if (Duration2.isDuration(durationLike)) {
            return durationLike;
          } else if (typeof durationLike === "object") {
            return Duration2.fromObject(durationLike);
          } else {
            throw new InvalidArgumentError("Unknown duration argument " + durationLike + " of type " + typeof durationLike);
          }
        };
        Duration2.fromISO = function fromISO(text, opts) {
          var _parseISODuration = parseISODuration(text), parsed = _parseISODuration[0];
          if (parsed) {
            return Duration2.fromObject(parsed, opts);
          } else {
            return Duration2.invalid("unparsable", 'the input "' + text + `" can't be parsed as ISO 8601`);
          }
        };
        Duration2.fromISOTime = function fromISOTime(text, opts) {
          var _parseISOTimeOnly = parseISOTimeOnly(text), parsed = _parseISOTimeOnly[0];
          if (parsed) {
            return Duration2.fromObject(parsed, opts);
          } else {
            return Duration2.invalid("unparsable", 'the input "' + text + `" can't be parsed as ISO 8601`);
          }
        };
        Duration2.invalid = function invalid(reason, explanation) {
          if (explanation === void 0) {
            explanation = null;
          }
          if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
          }
          var invalid2 = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
          if (Settings.throwOnInvalid) {
            throw new InvalidDurationError(invalid2);
          } else {
            return new Duration2({
              invalid: invalid2
            });
          }
        };
        Duration2.normalizeUnit = function normalizeUnit2(unit) {
          var normalized = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
          }[unit ? unit.toLowerCase() : unit];
          if (!normalized)
            throw new InvalidUnitError(unit);
          return normalized;
        };
        Duration2.isDuration = function isDuration(o) {
          return o && o.isLuxonDuration || false;
        };
        var _proto = Duration2.prototype;
        _proto.toFormat = function toFormat(fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var fmtOpts = _extends({}, opts, {
            floor: opts.round !== false && opts.floor !== false
          });
          return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
        };
        _proto.toHuman = function toHuman(opts) {
          var _this = this;
          if (opts === void 0) {
            opts = {};
          }
          var l2 = orderedUnits$1.map(function(unit) {
            var val = _this.values[unit];
            if (isUndefined(val)) {
              return null;
            }
            return _this.loc.numberFormatter(_extends({
              style: "unit",
              unitDisplay: "long"
            }, opts, {
              unit: unit.slice(0, -1)
            })).format(val);
          }).filter(function(n2) {
            return n2;
          });
          return this.loc.listFormatter(_extends({
            type: "conjunction",
            style: opts.listStyle || "narrow"
          }, opts)).format(l2);
        };
        _proto.toObject = function toObject() {
          if (!this.isValid)
            return {};
          return _extends({}, this.values);
        };
        _proto.toISO = function toISO() {
          if (!this.isValid)
            return null;
          var s2 = "P";
          if (this.years !== 0)
            s2 += this.years + "Y";
          if (this.months !== 0 || this.quarters !== 0)
            s2 += this.months + this.quarters * 3 + "M";
          if (this.weeks !== 0)
            s2 += this.weeks + "W";
          if (this.days !== 0)
            s2 += this.days + "D";
          if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
            s2 += "T";
          if (this.hours !== 0)
            s2 += this.hours + "H";
          if (this.minutes !== 0)
            s2 += this.minutes + "M";
          if (this.seconds !== 0 || this.milliseconds !== 0)
            s2 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
          if (s2 === "P")
            s2 += "T0S";
          return s2;
        };
        _proto.toISOTime = function toISOTime(opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid)
            return null;
          var millis = this.toMillis();
          if (millis < 0 || millis >= 864e5)
            return null;
          opts = _extends({
            suppressMilliseconds: false,
            suppressSeconds: false,
            includePrefix: false,
            format: "extended"
          }, opts);
          var value2 = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
          var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
          if (!opts.suppressSeconds || value2.seconds !== 0 || value2.milliseconds !== 0) {
            fmt += opts.format === "basic" ? "ss" : ":ss";
            if (!opts.suppressMilliseconds || value2.milliseconds !== 0) {
              fmt += ".SSS";
            }
          }
          var str = value2.toFormat(fmt);
          if (opts.includePrefix) {
            str = "T" + str;
          }
          return str;
        };
        _proto.toJSON = function toJSON() {
          return this.toISO();
        };
        _proto.toString = function toString() {
          return this.toISO();
        };
        _proto.toMillis = function toMillis() {
          return this.as("milliseconds");
        };
        _proto.valueOf = function valueOf() {
          return this.toMillis();
        };
        _proto.plus = function plus(duration) {
          if (!this.isValid)
            return this;
          var dur = Duration2.fromDurationLike(duration), result = {};
          for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done; ) {
            var k = _step.value;
            if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
              result[k] = dur.get(k) + this.get(k);
            }
          }
          return clone$1(this, {
            values: result
          }, true);
        };
        _proto.minus = function minus(duration) {
          if (!this.isValid)
            return this;
          var dur = Duration2.fromDurationLike(duration);
          return this.plus(dur.negate());
        };
        _proto.mapUnits = function mapUnits(fn) {
          if (!this.isValid)
            return this;
          var result = {};
          for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
            var k = _Object$keys[_i];
            result[k] = asNumber(fn(this.values[k], k));
          }
          return clone$1(this, {
            values: result
          }, true);
        };
        _proto.get = function get(unit) {
          return this[Duration2.normalizeUnit(unit)];
        };
        _proto.set = function set(values) {
          if (!this.isValid)
            return this;
          var mixed = _extends({}, this.values, normalizeObject(values, Duration2.normalizeUnit));
          return clone$1(this, {
            values: mixed
          });
        };
        _proto.reconfigure = function reconfigure(_temp) {
          var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, conversionAccuracy = _ref.conversionAccuracy;
          var loc = this.loc.clone({
            locale,
            numberingSystem
          }), opts = {
            loc
          };
          if (conversionAccuracy) {
            opts.conversionAccuracy = conversionAccuracy;
          }
          return clone$1(this, opts);
        };
        _proto.as = function as(unit) {
          return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
        };
        _proto.normalize = function normalize() {
          if (!this.isValid)
            return this;
          var vals = this.toObject();
          normalizeValues(this.matrix, vals);
          return clone$1(this, {
            values: vals
          }, true);
        };
        _proto.shiftTo = function shiftTo() {
          for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
            units[_key] = arguments[_key];
          }
          if (!this.isValid)
            return this;
          if (units.length === 0) {
            return this;
          }
          units = units.map(function(u) {
            return Duration2.normalizeUnit(u);
          });
          var built = {}, accumulated = {}, vals = this.toObject();
          var lastUnit;
          for (var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits$1), _step2; !(_step2 = _iterator2()).done; ) {
            var k = _step2.value;
            if (units.indexOf(k) >= 0) {
              lastUnit = k;
              var own = 0;
              for (var ak in accumulated) {
                own += this.matrix[ak][k] * accumulated[ak];
                accumulated[ak] = 0;
              }
              if (isNumber(vals[k])) {
                own += vals[k];
              }
              var i = Math.trunc(own);
              built[k] = i;
              accumulated[k] = (own * 1e3 - i * 1e3) / 1e3;
              for (var down in vals) {
                if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
                  convert(this.matrix, vals, down, built, k);
                }
              }
            } else if (isNumber(vals[k])) {
              accumulated[k] = vals[k];
            }
          }
          for (var key2 in accumulated) {
            if (accumulated[key2] !== 0) {
              built[lastUnit] += key2 === lastUnit ? accumulated[key2] : accumulated[key2] / this.matrix[lastUnit][key2];
            }
          }
          return clone$1(this, {
            values: built
          }, true).normalize();
        };
        _proto.negate = function negate() {
          if (!this.isValid)
            return this;
          var negated = {};
          for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
          }
          return clone$1(this, {
            values: negated
          }, true);
        };
        _proto.equals = function equals(other) {
          if (!this.isValid || !other.isValid) {
            return false;
          }
          if (!this.loc.equals(other.loc)) {
            return false;
          }
          function eq(v1, v2) {
            if (v1 === void 0 || v1 === 0)
              return v2 === void 0 || v2 === 0;
            return v1 === v2;
          }
          for (var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits$1), _step3; !(_step3 = _iterator3()).done; ) {
            var u = _step3.value;
            if (!eq(this.values[u], other.values[u])) {
              return false;
            }
          }
          return true;
        };
        _createClass(Duration2, [{
          key: "locale",
          get: function get() {
            return this.isValid ? this.loc.locale : null;
          }
        }, {
          key: "numberingSystem",
          get: function get() {
            return this.isValid ? this.loc.numberingSystem : null;
          }
        }, {
          key: "years",
          get: function get() {
            return this.isValid ? this.values.years || 0 : NaN;
          }
        }, {
          key: "quarters",
          get: function get() {
            return this.isValid ? this.values.quarters || 0 : NaN;
          }
        }, {
          key: "months",
          get: function get() {
            return this.isValid ? this.values.months || 0 : NaN;
          }
        }, {
          key: "weeks",
          get: function get() {
            return this.isValid ? this.values.weeks || 0 : NaN;
          }
        }, {
          key: "days",
          get: function get() {
            return this.isValid ? this.values.days || 0 : NaN;
          }
        }, {
          key: "hours",
          get: function get() {
            return this.isValid ? this.values.hours || 0 : NaN;
          }
        }, {
          key: "minutes",
          get: function get() {
            return this.isValid ? this.values.minutes || 0 : NaN;
          }
        }, {
          key: "seconds",
          get: function get() {
            return this.isValid ? this.values.seconds || 0 : NaN;
          }
        }, {
          key: "milliseconds",
          get: function get() {
            return this.isValid ? this.values.milliseconds || 0 : NaN;
          }
        }, {
          key: "isValid",
          get: function get() {
            return this.invalid === null;
          }
        }, {
          key: "invalidReason",
          get: function get() {
            return this.invalid ? this.invalid.reason : null;
          }
        }, {
          key: "invalidExplanation",
          get: function get() {
            return this.invalid ? this.invalid.explanation : null;
          }
        }]);
        return Duration2;
      }();
      var INVALID$1 = "Invalid Interval";
      function validateStartEnd(start, end) {
        if (!start || !start.isValid) {
          return Interval.invalid("missing or invalid start");
        } else if (!end || !end.isValid) {
          return Interval.invalid("missing or invalid end");
        } else if (end < start) {
          return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
        } else {
          return null;
        }
      }
      var Interval = /* @__PURE__ */ function() {
        function Interval2(config) {
          this.s = config.start;
          this.e = config.end;
          this.invalid = config.invalid || null;
          this.isLuxonInterval = true;
        }
        Interval2.invalid = function invalid(reason, explanation) {
          if (explanation === void 0) {
            explanation = null;
          }
          if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
          }
          var invalid2 = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
          if (Settings.throwOnInvalid) {
            throw new InvalidIntervalError(invalid2);
          } else {
            return new Interval2({
              invalid: invalid2
            });
          }
        };
        Interval2.fromDateTimes = function fromDateTimes(start, end) {
          var builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
          var validateError = validateStartEnd(builtStart, builtEnd);
          if (validateError == null) {
            return new Interval2({
              start: builtStart,
              end: builtEnd
            });
          } else {
            return validateError;
          }
        };
        Interval2.after = function after(start, duration) {
          var dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
          return Interval2.fromDateTimes(dt, dt.plus(dur));
        };
        Interval2.before = function before(end, duration) {
          var dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
          return Interval2.fromDateTimes(dt.minus(dur), dt);
        };
        Interval2.fromISO = function fromISO(text, opts) {
          var _split = (text || "").split("/", 2), s2 = _split[0], e = _split[1];
          if (s2 && e) {
            var start, startIsValid;
            try {
              start = DateTime2.fromISO(s2, opts);
              startIsValid = start.isValid;
            } catch (e2) {
              startIsValid = false;
            }
            var end, endIsValid;
            try {
              end = DateTime2.fromISO(e, opts);
              endIsValid = end.isValid;
            } catch (e2) {
              endIsValid = false;
            }
            if (startIsValid && endIsValid) {
              return Interval2.fromDateTimes(start, end);
            }
            if (startIsValid) {
              var dur = Duration.fromISO(e, opts);
              if (dur.isValid) {
                return Interval2.after(start, dur);
              }
            } else if (endIsValid) {
              var _dur = Duration.fromISO(s2, opts);
              if (_dur.isValid) {
                return Interval2.before(end, _dur);
              }
            }
          }
          return Interval2.invalid("unparsable", 'the input "' + text + `" can't be parsed as ISO 8601`);
        };
        Interval2.isInterval = function isInterval(o) {
          return o && o.isLuxonInterval || false;
        };
        var _proto = Interval2.prototype;
        _proto.length = function length(unit) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
        };
        _proto.count = function count(unit) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          if (!this.isValid)
            return NaN;
          var start = this.start.startOf(unit), end = this.end.startOf(unit);
          return Math.floor(end.diff(start, unit).get(unit)) + 1;
        };
        _proto.hasSame = function hasSame(unit) {
          return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
        };
        _proto.isEmpty = function isEmpty() {
          return this.s.valueOf() === this.e.valueOf();
        };
        _proto.isAfter = function isAfter(dateTime) {
          if (!this.isValid)
            return false;
          return this.s > dateTime;
        };
        _proto.isBefore = function isBefore(dateTime) {
          if (!this.isValid)
            return false;
          return this.e <= dateTime;
        };
        _proto.contains = function contains(dateTime) {
          if (!this.isValid)
            return false;
          return this.s <= dateTime && this.e > dateTime;
        };
        _proto.set = function set(_temp) {
          var _ref = _temp === void 0 ? {} : _temp, start = _ref.start, end = _ref.end;
          if (!this.isValid)
            return this;
          return Interval2.fromDateTimes(start || this.s, end || this.e);
        };
        _proto.splitAt = function splitAt() {
          var _this = this;
          if (!this.isValid)
            return [];
          for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
            dateTimes[_key] = arguments[_key];
          }
          var sorted = dateTimes.map(friendlyDateTime).filter(function(d) {
            return _this.contains(d);
          }).sort(), results = [];
          var s2 = this.s, i = 0;
          while (s2 < this.e) {
            var added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
            results.push(Interval2.fromDateTimes(s2, next));
            s2 = next;
            i += 1;
          }
          return results;
        };
        _proto.splitBy = function splitBy(duration) {
          var dur = Duration.fromDurationLike(duration);
          if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
            return [];
          }
          var s2 = this.s, idx = 1, next;
          var results = [];
          while (s2 < this.e) {
            var added = this.start.plus(dur.mapUnits(function(x) {
              return x * idx;
            }));
            next = +added > +this.e ? this.e : added;
            results.push(Interval2.fromDateTimes(s2, next));
            s2 = next;
            idx += 1;
          }
          return results;
        };
        _proto.divideEqually = function divideEqually(numberOfParts) {
          if (!this.isValid)
            return [];
          return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
        };
        _proto.overlaps = function overlaps(other) {
          return this.e > other.s && this.s < other.e;
        };
        _proto.abutsStart = function abutsStart(other) {
          if (!this.isValid)
            return false;
          return +this.e === +other.s;
        };
        _proto.abutsEnd = function abutsEnd(other) {
          if (!this.isValid)
            return false;
          return +other.e === +this.s;
        };
        _proto.engulfs = function engulfs(other) {
          if (!this.isValid)
            return false;
          return this.s <= other.s && this.e >= other.e;
        };
        _proto.equals = function equals(other) {
          if (!this.isValid || !other.isValid) {
            return false;
          }
          return this.s.equals(other.s) && this.e.equals(other.e);
        };
        _proto.intersection = function intersection(other) {
          if (!this.isValid)
            return this;
          var s2 = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
          if (s2 >= e) {
            return null;
          } else {
            return Interval2.fromDateTimes(s2, e);
          }
        };
        _proto.union = function union(other) {
          if (!this.isValid)
            return this;
          var s2 = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
          return Interval2.fromDateTimes(s2, e);
        };
        Interval2.merge = function merge(intervals) {
          var _intervals$sort$reduc = intervals.sort(function(a, b) {
            return a.s - b.s;
          }).reduce(function(_ref2, item) {
            var sofar = _ref2[0], current = _ref2[1];
            if (!current) {
              return [sofar, item];
            } else if (current.overlaps(item) || current.abutsStart(item)) {
              return [sofar, current.union(item)];
            } else {
              return [sofar.concat([current]), item];
            }
          }, [[], null]), found = _intervals$sort$reduc[0], final = _intervals$sort$reduc[1];
          if (final) {
            found.push(final);
          }
          return found;
        };
        Interval2.xor = function xor(intervals) {
          var _Array$prototype;
          var start = null, currentCount = 0;
          var results = [], ends = intervals.map(function(i2) {
            return [{
              time: i2.s,
              type: "s"
            }, {
              time: i2.e,
              type: "e"
            }];
          }), flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends), arr = flattened.sort(function(a, b) {
            return a.time - b.time;
          });
          for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done; ) {
            var i = _step.value;
            currentCount += i.type === "s" ? 1 : -1;
            if (currentCount === 1) {
              start = i.time;
            } else {
              if (start && +start !== +i.time) {
                results.push(Interval2.fromDateTimes(start, i.time));
              }
              start = null;
            }
          }
          return Interval2.merge(results);
        };
        _proto.difference = function difference() {
          var _this2 = this;
          for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            intervals[_key2] = arguments[_key2];
          }
          return Interval2.xor([this].concat(intervals)).map(function(i) {
            return _this2.intersection(i);
          }).filter(function(i) {
            return i && !i.isEmpty();
          });
        };
        _proto.toString = function toString() {
          if (!this.isValid)
            return INVALID$1;
          return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
        };
        _proto.toISO = function toISO(opts) {
          if (!this.isValid)
            return INVALID$1;
          return this.s.toISO(opts) + "/" + this.e.toISO(opts);
        };
        _proto.toISODate = function toISODate() {
          if (!this.isValid)
            return INVALID$1;
          return this.s.toISODate() + "/" + this.e.toISODate();
        };
        _proto.toISOTime = function toISOTime(opts) {
          if (!this.isValid)
            return INVALID$1;
          return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
        };
        _proto.toFormat = function toFormat(dateFormat, _temp2) {
          var _ref3 = _temp2 === void 0 ? {} : _temp2, _ref3$separator = _ref3.separator, separator = _ref3$separator === void 0 ? " \u2013 " : _ref3$separator;
          if (!this.isValid)
            return INVALID$1;
          return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
        };
        _proto.toDuration = function toDuration(unit, opts) {
          if (!this.isValid) {
            return Duration.invalid(this.invalidReason);
          }
          return this.e.diff(this.s, unit, opts);
        };
        _proto.mapEndpoints = function mapEndpoints(mapFn) {
          return Interval2.fromDateTimes(mapFn(this.s), mapFn(this.e));
        };
        _createClass(Interval2, [{
          key: "start",
          get: function get() {
            return this.isValid ? this.s : null;
          }
        }, {
          key: "end",
          get: function get() {
            return this.isValid ? this.e : null;
          }
        }, {
          key: "isValid",
          get: function get() {
            return this.invalidReason === null;
          }
        }, {
          key: "invalidReason",
          get: function get() {
            return this.invalid ? this.invalid.reason : null;
          }
        }, {
          key: "invalidExplanation",
          get: function get() {
            return this.invalid ? this.invalid.explanation : null;
          }
        }]);
        return Interval2;
      }();
      var Info = /* @__PURE__ */ function() {
        function Info2() {
        }
        Info2.hasDST = function hasDST(zone) {
          if (zone === void 0) {
            zone = Settings.defaultZone;
          }
          var proto = DateTime2.now().setZone(zone).set({
            month: 12
          });
          return !zone.isUniversal && proto.offset !== proto.set({
            month: 6
          }).offset;
        };
        Info2.isValidIANAZone = function isValidIANAZone(zone) {
          return IANAZone.isValidZone(zone);
        };
        Info2.normalizeZone = function normalizeZone$1(input) {
          return normalizeZone(input, Settings.defaultZone);
        };
        Info2.months = function months3(length, _temp) {
          if (length === void 0) {
            length = "long";
          }
          var _ref = _temp === void 0 ? {} : _temp, _ref$locale = _ref.locale, locale = _ref$locale === void 0 ? null : _ref$locale, _ref$numberingSystem = _ref.numberingSystem, numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem, _ref$locObj = _ref.locObj, locObj = _ref$locObj === void 0 ? null : _ref$locObj, _ref$outputCalendar = _ref.outputCalendar, outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;
          return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
        };
        Info2.monthsFormat = function monthsFormat(length, _temp2) {
          if (length === void 0) {
            length = "long";
          }
          var _ref2 = _temp2 === void 0 ? {} : _temp2, _ref2$locale = _ref2.locale, locale = _ref2$locale === void 0 ? null : _ref2$locale, _ref2$numberingSystem = _ref2.numberingSystem, numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem, _ref2$locObj = _ref2.locObj, locObj = _ref2$locObj === void 0 ? null : _ref2$locObj, _ref2$outputCalendar = _ref2.outputCalendar, outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;
          return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
        };
        Info2.weekdays = function weekdays3(length, _temp3) {
          if (length === void 0) {
            length = "long";
          }
          var _ref3 = _temp3 === void 0 ? {} : _temp3, _ref3$locale = _ref3.locale, locale = _ref3$locale === void 0 ? null : _ref3$locale, _ref3$numberingSystem = _ref3.numberingSystem, numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem, _ref3$locObj = _ref3.locObj, locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;
          return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
        };
        Info2.weekdaysFormat = function weekdaysFormat(length, _temp4) {
          if (length === void 0) {
            length = "long";
          }
          var _ref4 = _temp4 === void 0 ? {} : _temp4, _ref4$locale = _ref4.locale, locale = _ref4$locale === void 0 ? null : _ref4$locale, _ref4$numberingSystem = _ref4.numberingSystem, numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem, _ref4$locObj = _ref4.locObj, locObj = _ref4$locObj === void 0 ? null : _ref4$locObj;
          return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
        };
        Info2.meridiems = function meridiems2(_temp5) {
          var _ref5 = _temp5 === void 0 ? {} : _temp5, _ref5$locale = _ref5.locale, locale = _ref5$locale === void 0 ? null : _ref5$locale;
          return Locale.create(locale).meridiems();
        };
        Info2.eras = function eras2(length, _temp6) {
          if (length === void 0) {
            length = "short";
          }
          var _ref6 = _temp6 === void 0 ? {} : _temp6, _ref6$locale = _ref6.locale, locale = _ref6$locale === void 0 ? null : _ref6$locale;
          return Locale.create(locale, null, "gregory").eras(length);
        };
        Info2.features = function features() {
          return {
            relative: hasRelative()
          };
        };
        return Info2;
      }();
      function dayDiff(earlier, later) {
        var utcDayStart = function utcDayStart2(dt) {
          return dt.toUTC(0, {
            keepLocalTime: true
          }).startOf("day").valueOf();
        }, ms = utcDayStart(later) - utcDayStart(earlier);
        return Math.floor(Duration.fromMillis(ms).as("days"));
      }
      function highOrderDiffs(cursor, later, units) {
        var differs = [["years", function(a, b) {
          return b.year - a.year;
        }], ["quarters", function(a, b) {
          return b.quarter - a.quarter;
        }], ["months", function(a, b) {
          return b.month - a.month + (b.year - a.year) * 12;
        }], ["weeks", function(a, b) {
          var days = dayDiff(a, b);
          return (days - days % 7) / 7;
        }], ["days", dayDiff]];
        var results = {};
        var lowestOrder, highWater;
        for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
          var _differs$_i = _differs[_i], unit = _differs$_i[0], differ = _differs$_i[1];
          if (units.indexOf(unit) >= 0) {
            var _cursor$plus;
            lowestOrder = unit;
            var delta = differ(cursor, later);
            highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));
            if (highWater > later) {
              var _cursor$plus2;
              cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
              delta -= 1;
            } else {
              cursor = highWater;
            }
            results[unit] = delta;
          }
        }
        return [cursor, results, highWater, lowestOrder];
      }
      function _diff(earlier, later, units, opts) {
        var _highOrderDiffs = highOrderDiffs(earlier, later, units), cursor = _highOrderDiffs[0], results = _highOrderDiffs[1], highWater = _highOrderDiffs[2], lowestOrder = _highOrderDiffs[3];
        var remainingMillis = later - cursor;
        var lowerOrderUnits = units.filter(function(u) {
          return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
        });
        if (lowerOrderUnits.length === 0) {
          if (highWater < later) {
            var _cursor$plus3;
            highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
          }
          if (highWater !== cursor) {
            results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
          }
        }
        var duration = Duration.fromObject(results, opts);
        if (lowerOrderUnits.length > 0) {
          var _Duration$fromMillis;
          return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
        } else {
          return duration;
        }
      }
      var numberingSystems = {
        arab: "[\u0660-\u0669]",
        arabext: "[\u06F0-\u06F9]",
        bali: "[\u1B50-\u1B59]",
        beng: "[\u09E6-\u09EF]",
        deva: "[\u0966-\u096F]",
        fullwide: "[\uFF10-\uFF19]",
        gujr: "[\u0AE6-\u0AEF]",
        hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
        khmr: "[\u17E0-\u17E9]",
        knda: "[\u0CE6-\u0CEF]",
        laoo: "[\u0ED0-\u0ED9]",
        limb: "[\u1946-\u194F]",
        mlym: "[\u0D66-\u0D6F]",
        mong: "[\u1810-\u1819]",
        mymr: "[\u1040-\u1049]",
        orya: "[\u0B66-\u0B6F]",
        tamldec: "[\u0BE6-\u0BEF]",
        telu: "[\u0C66-\u0C6F]",
        thai: "[\u0E50-\u0E59]",
        tibt: "[\u0F20-\u0F29]",
        latn: "\\d"
      };
      var numberingSystemsUTF16 = {
        arab: [1632, 1641],
        arabext: [1776, 1785],
        bali: [6992, 7001],
        beng: [2534, 2543],
        deva: [2406, 2415],
        fullwide: [65296, 65303],
        gujr: [2790, 2799],
        khmr: [6112, 6121],
        knda: [3302, 3311],
        laoo: [3792, 3801],
        limb: [6470, 6479],
        mlym: [3430, 3439],
        mong: [6160, 6169],
        mymr: [4160, 4169],
        orya: [2918, 2927],
        tamldec: [3046, 3055],
        telu: [3174, 3183],
        thai: [3664, 3673],
        tibt: [3872, 3881]
      };
      var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
      function parseDigits(str) {
        var value2 = parseInt(str, 10);
        if (isNaN(value2)) {
          value2 = "";
          for (var i = 0; i < str.length; i++) {
            var code = str.charCodeAt(i);
            if (str[i].search(numberingSystems.hanidec) !== -1) {
              value2 += hanidecChars.indexOf(str[i]);
            } else {
              for (var key2 in numberingSystemsUTF16) {
                var _numberingSystemsUTF = numberingSystemsUTF16[key2], min = _numberingSystemsUTF[0], max = _numberingSystemsUTF[1];
                if (code >= min && code <= max) {
                  value2 += code - min;
                }
              }
            }
          }
          return parseInt(value2, 10);
        } else {
          return value2;
        }
      }
      function digitRegex(_ref, append) {
        var numberingSystem = _ref.numberingSystem;
        if (append === void 0) {
          append = "";
        }
        return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
      }
      var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
      function intUnit(regex, post) {
        if (post === void 0) {
          post = function post2(i) {
            return i;
          };
        }
        return {
          regex,
          deser: function deser(_ref) {
            var s2 = _ref[0];
            return post(parseDigits(s2));
          }
        };
      }
      var NBSP = String.fromCharCode(160);
      var spaceOrNBSP = "( |" + NBSP + ")";
      var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
      function fixListRegex(s2) {
        return s2.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
      }
      function stripInsensitivities(s2) {
        return s2.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
      }
      function oneOf(strings2, startIndex) {
        if (strings2 === null) {
          return null;
        } else {
          return {
            regex: RegExp(strings2.map(fixListRegex).join("|")),
            deser: function deser(_ref2) {
              var s2 = _ref2[0];
              return strings2.findIndex(function(i) {
                return stripInsensitivities(s2) === stripInsensitivities(i);
              }) + startIndex;
            }
          };
        }
      }
      function offset(regex, groups) {
        return {
          regex,
          deser: function deser(_ref3) {
            var h = _ref3[1], m = _ref3[2];
            return signedOffset(h, m);
          },
          groups
        };
      }
      function simple(regex) {
        return {
          regex,
          deser: function deser(_ref4) {
            var s2 = _ref4[0];
            return s2;
          }
        };
      }
      function escapeToken(value2) {
        return value2.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }
      function unitForToken(token, loc) {
        var one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = function literal2(t) {
          return {
            regex: RegExp(escapeToken(t.val)),
            deser: function deser(_ref5) {
              var s2 = _ref5[0];
              return s2;
            },
            literal: true
          };
        }, unitate = function unitate2(t) {
          if (token.literal) {
            return literal(t);
          }
          switch (t.val) {
            case "G":
              return oneOf(loc.eras("short", false), 0);
            case "GG":
              return oneOf(loc.eras("long", false), 0);
            case "y":
              return intUnit(oneToSix);
            case "yy":
              return intUnit(twoToFour, untruncateYear);
            case "yyyy":
              return intUnit(four);
            case "yyyyy":
              return intUnit(fourToSix);
            case "yyyyyy":
              return intUnit(six);
            case "M":
              return intUnit(oneOrTwo);
            case "MM":
              return intUnit(two);
            case "MMM":
              return oneOf(loc.months("short", true, false), 1);
            case "MMMM":
              return oneOf(loc.months("long", true, false), 1);
            case "L":
              return intUnit(oneOrTwo);
            case "LL":
              return intUnit(two);
            case "LLL":
              return oneOf(loc.months("short", false, false), 1);
            case "LLLL":
              return oneOf(loc.months("long", false, false), 1);
            case "d":
              return intUnit(oneOrTwo);
            case "dd":
              return intUnit(two);
            case "o":
              return intUnit(oneToThree);
            case "ooo":
              return intUnit(three);
            case "HH":
              return intUnit(two);
            case "H":
              return intUnit(oneOrTwo);
            case "hh":
              return intUnit(two);
            case "h":
              return intUnit(oneOrTwo);
            case "mm":
              return intUnit(two);
            case "m":
              return intUnit(oneOrTwo);
            case "q":
              return intUnit(oneOrTwo);
            case "qq":
              return intUnit(two);
            case "s":
              return intUnit(oneOrTwo);
            case "ss":
              return intUnit(two);
            case "S":
              return intUnit(oneToThree);
            case "SSS":
              return intUnit(three);
            case "u":
              return simple(oneToNine);
            case "uu":
              return simple(oneOrTwo);
            case "uuu":
              return intUnit(one);
            case "a":
              return oneOf(loc.meridiems(), 0);
            case "kkkk":
              return intUnit(four);
            case "kk":
              return intUnit(twoToFour, untruncateYear);
            case "W":
              return intUnit(oneOrTwo);
            case "WW":
              return intUnit(two);
            case "E":
            case "c":
              return intUnit(one);
            case "EEE":
              return oneOf(loc.weekdays("short", false, false), 1);
            case "EEEE":
              return oneOf(loc.weekdays("long", false, false), 1);
            case "ccc":
              return oneOf(loc.weekdays("short", true, false), 1);
            case "cccc":
              return oneOf(loc.weekdays("long", true, false), 1);
            case "Z":
            case "ZZ":
              return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);
            case "ZZZ":
              return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
            case "z":
              return simple(/[a-z_+-/]{1,256}?/i);
            default:
              return literal(t);
          }
        };
        var unit = unitate(token) || {
          invalidReason: MISSING_FTP
        };
        unit.token = token;
        return unit;
      }
      var partTypeStyleToTokenVal = {
        year: {
          "2-digit": "yy",
          numeric: "yyyyy"
        },
        month: {
          numeric: "M",
          "2-digit": "MM",
          short: "MMM",
          long: "MMMM"
        },
        day: {
          numeric: "d",
          "2-digit": "dd"
        },
        weekday: {
          short: "EEE",
          long: "EEEE"
        },
        dayperiod: "a",
        dayPeriod: "a",
        hour: {
          numeric: "h",
          "2-digit": "hh"
        },
        minute: {
          numeric: "m",
          "2-digit": "mm"
        },
        second: {
          numeric: "s",
          "2-digit": "ss"
        }
      };
      function tokenForPart(part, locale, formatOpts) {
        var type = part.type, value2 = part.value;
        if (type === "literal") {
          return {
            literal: true,
            val: value2
          };
        }
        var style = formatOpts[type];
        var val = partTypeStyleToTokenVal[type];
        if (typeof val === "object") {
          val = val[style];
        }
        if (val) {
          return {
            literal: false,
            val
          };
        }
        return void 0;
      }
      function buildRegex(units) {
        var re = units.map(function(u) {
          return u.regex;
        }).reduce(function(f, r) {
          return f + "(" + r.source + ")";
        }, "");
        return ["^" + re + "$", units];
      }
      function match(input, regex, handlers) {
        var matches = input.match(regex);
        if (matches) {
          var all = {};
          var matchIndex = 1;
          for (var i in handlers) {
            if (hasOwnProperty(handlers, i)) {
              var h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
              if (!h.literal && h.token) {
                all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
              }
              matchIndex += groups;
            }
          }
          return [matches, all];
        } else {
          return [matches, {}];
        }
      }
      function dateTimeFromMatches(matches) {
        var toField = function toField2(token) {
          switch (token) {
            case "S":
              return "millisecond";
            case "s":
              return "second";
            case "m":
              return "minute";
            case "h":
            case "H":
              return "hour";
            case "d":
              return "day";
            case "o":
              return "ordinal";
            case "L":
            case "M":
              return "month";
            case "y":
              return "year";
            case "E":
            case "c":
              return "weekday";
            case "W":
              return "weekNumber";
            case "k":
              return "weekYear";
            case "q":
              return "quarter";
            default:
              return null;
          }
        };
        var zone = null;
        var specificOffset;
        if (!isUndefined(matches.z)) {
          zone = IANAZone.create(matches.z);
        }
        if (!isUndefined(matches.Z)) {
          if (!zone) {
            zone = new FixedOffsetZone(matches.Z);
          }
          specificOffset = matches.Z;
        }
        if (!isUndefined(matches.q)) {
          matches.M = (matches.q - 1) * 3 + 1;
        }
        if (!isUndefined(matches.h)) {
          if (matches.h < 12 && matches.a === 1) {
            matches.h += 12;
          } else if (matches.h === 12 && matches.a === 0) {
            matches.h = 0;
          }
        }
        if (matches.G === 0 && matches.y) {
          matches.y = -matches.y;
        }
        if (!isUndefined(matches.u)) {
          matches.S = parseMillis(matches.u);
        }
        var vals = Object.keys(matches).reduce(function(r, k) {
          var f = toField(k);
          if (f) {
            r[f] = matches[k];
          }
          return r;
        }, {});
        return [vals, zone, specificOffset];
      }
      var dummyDateTimeCache = null;
      function getDummyDateTime() {
        if (!dummyDateTimeCache) {
          dummyDateTimeCache = DateTime2.fromMillis(1555555555555);
        }
        return dummyDateTimeCache;
      }
      function maybeExpandMacroToken(token, locale) {
        if (token.literal) {
          return token;
        }
        var formatOpts = Formatter.macroTokenToFormatOpts(token.val);
        if (!formatOpts) {
          return token;
        }
        var formatter = Formatter.create(locale, formatOpts);
        var parts = formatter.formatDateTimeParts(getDummyDateTime());
        var tokens = parts.map(function(p) {
          return tokenForPart(p, locale, formatOpts);
        });
        if (tokens.includes(void 0)) {
          return token;
        }
        return tokens;
      }
      function expandMacroTokens(tokens, locale) {
        var _Array$prototype;
        return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function(t) {
          return maybeExpandMacroToken(t, locale);
        }));
      }
      function explainFromTokens(locale, input, format) {
        var tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map(function(t) {
          return unitForToken(t, locale);
        }), disqualifyingUnit = units.find(function(t) {
          return t.invalidReason;
        });
        if (disqualifyingUnit) {
          return {
            input,
            tokens,
            invalidReason: disqualifyingUnit.invalidReason
          };
        } else {
          var _buildRegex = buildRegex(units), regexString = _buildRegex[0], handlers = _buildRegex[1], regex = RegExp(regexString, "i"), _match = match(input, regex, handlers), rawMatches = _match[0], matches = _match[1], _ref6 = matches ? dateTimeFromMatches(matches) : [null, null, void 0], result = _ref6[0], zone = _ref6[1], specificOffset = _ref6[2];
          if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
            throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
          }
          return {
            input,
            tokens,
            regex,
            rawMatches,
            matches,
            result,
            zone,
            specificOffset
          };
        }
      }
      function parseFromTokens(locale, input, format) {
        var _explainFromTokens = explainFromTokens(locale, input, format), result = _explainFromTokens.result, zone = _explainFromTokens.zone, specificOffset = _explainFromTokens.specificOffset, invalidReason = _explainFromTokens.invalidReason;
        return [result, zone, specificOffset, invalidReason];
      }
      var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      var leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
      function unitOutOfRange(unit, value2) {
        return new Invalid("unit out of range", "you specified " + value2 + " (of type " + typeof value2 + ") as a " + unit + ", which is invalid");
      }
      function dayOfWeek(year, month, day) {
        var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
        return js === 0 ? 7 : js;
      }
      function computeOrdinal(year, month, day) {
        return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
      }
      function uncomputeOrdinal(year, ordinal) {
        var table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex(function(i) {
          return i < ordinal;
        }), day = ordinal - table[month0];
        return {
          month: month0 + 1,
          day
        };
      }
      function gregorianToWeek(gregObj) {
        var year = gregObj.year, month = gregObj.month, day = gregObj.day, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
        var weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
        if (weekNumber < 1) {
          weekYear = year - 1;
          weekNumber = weeksInWeekYear(weekYear);
        } else if (weekNumber > weeksInWeekYear(year)) {
          weekYear = year + 1;
          weekNumber = 1;
        } else {
          weekYear = year;
        }
        return _extends({
          weekYear,
          weekNumber,
          weekday
        }, timeObject(gregObj));
      }
      function weekToGregorian(weekData) {
        var weekYear = weekData.weekYear, weekNumber = weekData.weekNumber, weekday = weekData.weekday, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
        var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
        if (ordinal < 1) {
          year = weekYear - 1;
          ordinal += daysInYear(year);
        } else if (ordinal > yearInDays) {
          year = weekYear + 1;
          ordinal -= daysInYear(weekYear);
        } else {
          year = weekYear;
        }
        var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal.month, day = _uncomputeOrdinal.day;
        return _extends({
          year,
          month,
          day
        }, timeObject(weekData));
      }
      function gregorianToOrdinal(gregData) {
        var year = gregData.year, month = gregData.month, day = gregData.day;
        var ordinal = computeOrdinal(year, month, day);
        return _extends({
          year,
          ordinal
        }, timeObject(gregData));
      }
      function ordinalToGregorian(ordinalData) {
        var year = ordinalData.year, ordinal = ordinalData.ordinal;
        var _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal2.month, day = _uncomputeOrdinal2.day;
        return _extends({
          year,
          month,
          day
        }, timeObject(ordinalData));
      }
      function hasInvalidWeekData(obj) {
        var validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
        if (!validYear) {
          return unitOutOfRange("weekYear", obj.weekYear);
        } else if (!validWeek) {
          return unitOutOfRange("week", obj.week);
        } else if (!validWeekday) {
          return unitOutOfRange("weekday", obj.weekday);
        } else
          return false;
      }
      function hasInvalidOrdinalData(obj) {
        var validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
        if (!validYear) {
          return unitOutOfRange("year", obj.year);
        } else if (!validOrdinal) {
          return unitOutOfRange("ordinal", obj.ordinal);
        } else
          return false;
      }
      function hasInvalidGregorianData(obj) {
        var validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
        if (!validYear) {
          return unitOutOfRange("year", obj.year);
        } else if (!validMonth) {
          return unitOutOfRange("month", obj.month);
        } else if (!validDay) {
          return unitOutOfRange("day", obj.day);
        } else
          return false;
      }
      function hasInvalidTimeData(obj) {
        var hour = obj.hour, minute = obj.minute, second = obj.second, millisecond = obj.millisecond;
        var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
        if (!validHour) {
          return unitOutOfRange("hour", hour);
        } else if (!validMinute) {
          return unitOutOfRange("minute", minute);
        } else if (!validSecond) {
          return unitOutOfRange("second", second);
        } else if (!validMillisecond) {
          return unitOutOfRange("millisecond", millisecond);
        } else
          return false;
      }
      var INVALID = "Invalid DateTime";
      var MAX_DATE = 864e13;
      function unsupportedZone(zone) {
        return new Invalid("unsupported zone", 'the zone "' + zone.name + '" is not supported');
      }
      function possiblyCachedWeekData(dt) {
        if (dt.weekData === null) {
          dt.weekData = gregorianToWeek(dt.c);
        }
        return dt.weekData;
      }
      function clone(inst, alts) {
        var current = {
          ts: inst.ts,
          zone: inst.zone,
          c: inst.c,
          o: inst.o,
          loc: inst.loc,
          invalid: inst.invalid
        };
        return new DateTime2(_extends({}, current, alts, {
          old: current
        }));
      }
      function fixOffset(localTS, o, tz) {
        var utcGuess = localTS - o * 60 * 1e3;
        var o2 = tz.offset(utcGuess);
        if (o === o2) {
          return [utcGuess, o];
        }
        utcGuess -= (o2 - o) * 60 * 1e3;
        var o3 = tz.offset(utcGuess);
        if (o2 === o3) {
          return [utcGuess, o2];
        }
        return [localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3)];
      }
      function tsToObj(ts, offset2) {
        ts += offset2 * 60 * 1e3;
        var d = new Date(ts);
        return {
          year: d.getUTCFullYear(),
          month: d.getUTCMonth() + 1,
          day: d.getUTCDate(),
          hour: d.getUTCHours(),
          minute: d.getUTCMinutes(),
          second: d.getUTCSeconds(),
          millisecond: d.getUTCMilliseconds()
        };
      }
      function objToTS(obj, offset2, zone) {
        return fixOffset(objToLocalTS(obj), offset2, zone);
      }
      function adjustTime(inst, dur) {
        var oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = _extends({}, inst.c, {
          year,
          month,
          day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
        }), millisToAdd = Duration.fromObject({
          years: dur.years - Math.trunc(dur.years),
          quarters: dur.quarters - Math.trunc(dur.quarters),
          months: dur.months - Math.trunc(dur.months),
          weeks: dur.weeks - Math.trunc(dur.weeks),
          days: dur.days - Math.trunc(dur.days),
          hours: dur.hours,
          minutes: dur.minutes,
          seconds: dur.seconds,
          milliseconds: dur.milliseconds
        }).as("milliseconds"), localTS = objToLocalTS(c);
        var _fixOffset = fixOffset(localTS, oPre, inst.zone), ts = _fixOffset[0], o = _fixOffset[1];
        if (millisToAdd !== 0) {
          ts += millisToAdd;
          o = inst.zone.offset(ts);
        }
        return {
          ts,
          o
        };
      }
      function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
        var setZone = opts.setZone, zone = opts.zone;
        if (parsed && Object.keys(parsed).length !== 0) {
          var interpretationZone = parsedZone || zone, inst = DateTime2.fromObject(parsed, _extends({}, opts, {
            zone: interpretationZone,
            specificOffset
          }));
          return setZone ? inst : inst.setZone(zone);
        } else {
          return DateTime2.invalid(new Invalid("unparsable", 'the input "' + text + `" can't be parsed as ` + format));
        }
      }
      function toTechFormat(dt, format, allowZ) {
        if (allowZ === void 0) {
          allowZ = true;
        }
        return dt.isValid ? Formatter.create(Locale.create("en-US"), {
          allowZ,
          forceSimple: true
        }).formatDateTimeFromString(dt, format) : null;
      }
      function _toISODate(o, extended) {
        var longFormat = o.c.year > 9999 || o.c.year < 0;
        var c = "";
        if (longFormat && o.c.year >= 0)
          c += "+";
        c += padStart(o.c.year, longFormat ? 6 : 4);
        if (extended) {
          c += "-";
          c += padStart(o.c.month);
          c += "-";
          c += padStart(o.c.day);
        } else {
          c += padStart(o.c.month);
          c += padStart(o.c.day);
        }
        return c;
      }
      function _toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset) {
        var c = padStart(o.c.hour);
        if (extended) {
          c += ":";
          c += padStart(o.c.minute);
          if (o.c.second !== 0 || !suppressSeconds) {
            c += ":";
          }
        } else {
          c += padStart(o.c.minute);
        }
        if (o.c.second !== 0 || !suppressSeconds) {
          c += padStart(o.c.second);
          if (o.c.millisecond !== 0 || !suppressMilliseconds) {
            c += ".";
            c += padStart(o.c.millisecond, 3);
          }
        }
        if (includeOffset) {
          if (o.isOffsetFixed && o.offset === 0) {
            c += "Z";
          } else if (o.o < 0) {
            c += "-";
            c += padStart(Math.trunc(-o.o / 60));
            c += ":";
            c += padStart(Math.trunc(-o.o % 60));
          } else {
            c += "+";
            c += padStart(Math.trunc(o.o / 60));
            c += ":";
            c += padStart(Math.trunc(o.o % 60));
          }
        }
        return c;
      }
      var defaultUnitValues = {
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
      var defaultWeekUnitValues = {
        weekNumber: 1,
        weekday: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
      var defaultOrdinalUnitValues = {
        ordinal: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
      var orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
      var orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"];
      var orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
      function normalizeUnit(unit) {
        var normalized = {
          year: "year",
          years: "year",
          month: "month",
          months: "month",
          day: "day",
          days: "day",
          hour: "hour",
          hours: "hour",
          minute: "minute",
          minutes: "minute",
          quarter: "quarter",
          quarters: "quarter",
          second: "second",
          seconds: "second",
          millisecond: "millisecond",
          milliseconds: "millisecond",
          weekday: "weekday",
          weekdays: "weekday",
          weeknumber: "weekNumber",
          weeksnumber: "weekNumber",
          weeknumbers: "weekNumber",
          weekyear: "weekYear",
          weekyears: "weekYear",
          ordinal: "ordinal"
        }[unit.toLowerCase()];
        if (!normalized)
          throw new InvalidUnitError(unit);
        return normalized;
      }
      function quickDT(obj, opts) {
        var zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
        var ts, o;
        if (!isUndefined(obj.year)) {
          for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done; ) {
            var u = _step.value;
            if (isUndefined(obj[u])) {
              obj[u] = defaultUnitValues[u];
            }
          }
          var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
          if (invalid) {
            return DateTime2.invalid(invalid);
          }
          var offsetProvis = zone.offset(tsNow);
          var _objToTS = objToTS(obj, offsetProvis, zone);
          ts = _objToTS[0];
          o = _objToTS[1];
        } else {
          ts = tsNow;
        }
        return new DateTime2({
          ts,
          zone,
          loc,
          o
        });
      }
      function diffRelative(start, end, opts) {
        var round = isUndefined(opts.round) ? true : opts.round, format = function format2(c, unit2) {
          c = roundTo(c, round || opts.calendary ? 0 : 2, true);
          var formatter = end.loc.clone(opts).relFormatter(opts);
          return formatter.format(c, unit2);
        }, differ = function differ2(unit2) {
          if (opts.calendary) {
            if (!end.hasSame(start, unit2)) {
              return end.startOf(unit2).diff(start.startOf(unit2), unit2).get(unit2);
            } else
              return 0;
          } else {
            return end.diff(start, unit2).get(unit2);
          }
        };
        if (opts.unit) {
          return format(differ(opts.unit), opts.unit);
        }
        for (var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done; ) {
          var unit = _step2.value;
          var count = differ(unit);
          if (Math.abs(count) >= 1) {
            return format(count, unit);
          }
        }
        return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
      }
      function lastOpts(argList) {
        var opts = {}, args;
        if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
          opts = argList[argList.length - 1];
          args = Array.from(argList).slice(0, argList.length - 1);
        } else {
          args = Array.from(argList);
        }
        return [opts, args];
      }
      var DateTime2 = /* @__PURE__ */ function() {
        function DateTime3(config) {
          var zone = config.zone || Settings.defaultZone;
          var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
          this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
          var c = null, o = null;
          if (!invalid) {
            var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
            if (unchanged) {
              var _ref = [config.old.c, config.old.o];
              c = _ref[0];
              o = _ref[1];
            } else {
              var ot = zone.offset(this.ts);
              c = tsToObj(this.ts, ot);
              invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
              c = invalid ? null : c;
              o = invalid ? null : ot;
            }
          }
          this._zone = zone;
          this.loc = config.loc || Locale.create();
          this.invalid = invalid;
          this.weekData = null;
          this.c = c;
          this.o = o;
          this.isLuxonDateTime = true;
        }
        DateTime3.now = function now2() {
          return new DateTime3({});
        };
        DateTime3.local = function local() {
          var _lastOpts = lastOpts(arguments), opts = _lastOpts[0], args = _lastOpts[1], year = args[0], month = args[1], day = args[2], hour = args[3], minute = args[4], second = args[5], millisecond = args[6];
          return quickDT({
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond
          }, opts);
        };
        DateTime3.utc = function utc() {
          var _lastOpts2 = lastOpts(arguments), opts = _lastOpts2[0], args = _lastOpts2[1], year = args[0], month = args[1], day = args[2], hour = args[3], minute = args[4], second = args[5], millisecond = args[6];
          opts.zone = FixedOffsetZone.utcInstance;
          return quickDT({
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond
          }, opts);
        };
        DateTime3.fromJSDate = function fromJSDate(date, options) {
          if (options === void 0) {
            options = {};
          }
          var ts = isDate(date) ? date.valueOf() : NaN;
          if (Number.isNaN(ts)) {
            return DateTime3.invalid("invalid input");
          }
          var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
          if (!zoneToUse.isValid) {
            return DateTime3.invalid(unsupportedZone(zoneToUse));
          }
          return new DateTime3({
            ts,
            zone: zoneToUse,
            loc: Locale.fromObject(options)
          });
        };
        DateTime3.fromMillis = function fromMillis(milliseconds, options) {
          if (options === void 0) {
            options = {};
          }
          if (!isNumber(milliseconds)) {
            throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
          } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
            return DateTime3.invalid("Timestamp out of range");
          } else {
            return new DateTime3({
              ts: milliseconds,
              zone: normalizeZone(options.zone, Settings.defaultZone),
              loc: Locale.fromObject(options)
            });
          }
        };
        DateTime3.fromSeconds = function fromSeconds(seconds, options) {
          if (options === void 0) {
            options = {};
          }
          if (!isNumber(seconds)) {
            throw new InvalidArgumentError("fromSeconds requires a numerical input");
          } else {
            return new DateTime3({
              ts: seconds * 1e3,
              zone: normalizeZone(options.zone, Settings.defaultZone),
              loc: Locale.fromObject(options)
            });
          }
        };
        DateTime3.fromObject = function fromObject(obj, opts) {
          if (opts === void 0) {
            opts = {};
          }
          obj = obj || {};
          var zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
          if (!zoneToUse.isValid) {
            return DateTime3.invalid(unsupportedZone(zoneToUse));
          }
          var tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(opts);
          if ((containsGregor || containsOrdinal) && definiteWeekDef) {
            throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          }
          if (containsGregorMD && containsOrdinal) {
            throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
          }
          var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
          var units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
          if (useWeekData) {
            units = orderedWeekUnits;
            defaultValues = defaultWeekUnitValues;
            objNow = gregorianToWeek(objNow);
          } else if (containsOrdinal) {
            units = orderedOrdinalUnits;
            defaultValues = defaultOrdinalUnitValues;
            objNow = gregorianToOrdinal(objNow);
          } else {
            units = orderedUnits;
            defaultValues = defaultUnitValues;
          }
          var foundFirst = false;
          for (var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done; ) {
            var u = _step3.value;
            var v = normalized[u];
            if (!isUndefined(v)) {
              foundFirst = true;
            } else if (foundFirst) {
              normalized[u] = defaultValues[u];
            } else {
              normalized[u] = objNow[u];
            }
          }
          var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
          if (invalid) {
            return DateTime3.invalid(invalid);
          }
          var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse), tsFinal = _objToTS2[0], offsetFinal = _objToTS2[1], inst = new DateTime3({
            ts: tsFinal,
            zone: zoneToUse,
            o: offsetFinal,
            loc
          });
          if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
            return DateTime3.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
          }
          return inst;
        };
        DateTime3.fromISO = function fromISO(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseISODate = parseISODate(text), vals = _parseISODate[0], parsedZone = _parseISODate[1];
          return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
        };
        DateTime3.fromRFC2822 = function fromRFC2822(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseRFC2822Date = parseRFC2822Date(text), vals = _parseRFC2822Date[0], parsedZone = _parseRFC2822Date[1];
          return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
        };
        DateTime3.fromHTTP = function fromHTTP(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseHTTPDate = parseHTTPDate(text), vals = _parseHTTPDate[0], parsedZone = _parseHTTPDate[1];
          return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
        };
        DateTime3.fromFormat = function fromFormat(text, fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (isUndefined(text) || isUndefined(fmt)) {
            throw new InvalidArgumentError("fromFormat requires an input string and a format");
          }
          var _opts = opts, _opts$locale = _opts.locale, locale = _opts$locale === void 0 ? null : _opts$locale, _opts$numberingSystem = _opts.numberingSystem, numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem, localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
          }), _parseFromTokens = parseFromTokens(localeToUse, text, fmt), vals = _parseFromTokens[0], parsedZone = _parseFromTokens[1], specificOffset = _parseFromTokens[2], invalid = _parseFromTokens[3];
          if (invalid) {
            return DateTime3.invalid(invalid);
          } else {
            return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text, specificOffset);
          }
        };
        DateTime3.fromString = function fromString(text, fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          return DateTime3.fromFormat(text, fmt, opts);
        };
        DateTime3.fromSQL = function fromSQL(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseSQL = parseSQL(text), vals = _parseSQL[0], parsedZone = _parseSQL[1];
          return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
        };
        DateTime3.invalid = function invalid(reason, explanation) {
          if (explanation === void 0) {
            explanation = null;
          }
          if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
          }
          var invalid2 = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
          if (Settings.throwOnInvalid) {
            throw new InvalidDateTimeError(invalid2);
          } else {
            return new DateTime3({
              invalid: invalid2
            });
          }
        };
        DateTime3.isDateTime = function isDateTime(o) {
          return o && o.isLuxonDateTime || false;
        };
        var _proto = DateTime3.prototype;
        _proto.get = function get(unit) {
          return this[unit];
        };
        _proto.resolvedLocaleOptions = function resolvedLocaleOptions(opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this), locale = _Formatter$create$res.locale, numberingSystem = _Formatter$create$res.numberingSystem, calendar = _Formatter$create$res.calendar;
          return {
            locale,
            numberingSystem,
            outputCalendar: calendar
          };
        };
        _proto.toUTC = function toUTC(offset2, opts) {
          if (offset2 === void 0) {
            offset2 = 0;
          }
          if (opts === void 0) {
            opts = {};
          }
          return this.setZone(FixedOffsetZone.instance(offset2), opts);
        };
        _proto.toLocal = function toLocal() {
          return this.setZone(Settings.defaultZone);
        };
        _proto.setZone = function setZone(zone, _temp) {
          var _ref2 = _temp === void 0 ? {} : _temp, _ref2$keepLocalTime = _ref2.keepLocalTime, keepLocalTime = _ref2$keepLocalTime === void 0 ? false : _ref2$keepLocalTime, _ref2$keepCalendarTim = _ref2.keepCalendarTime, keepCalendarTime = _ref2$keepCalendarTim === void 0 ? false : _ref2$keepCalendarTim;
          zone = normalizeZone(zone, Settings.defaultZone);
          if (zone.equals(this.zone)) {
            return this;
          } else if (!zone.isValid) {
            return DateTime3.invalid(unsupportedZone(zone));
          } else {
            var newTS = this.ts;
            if (keepLocalTime || keepCalendarTime) {
              var offsetGuess = zone.offset(this.ts);
              var asObj = this.toObject();
              var _objToTS3 = objToTS(asObj, offsetGuess, zone);
              newTS = _objToTS3[0];
            }
            return clone(this, {
              ts: newTS,
              zone
            });
          }
        };
        _proto.reconfigure = function reconfigure(_temp2) {
          var _ref3 = _temp2 === void 0 ? {} : _temp2, locale = _ref3.locale, numberingSystem = _ref3.numberingSystem, outputCalendar = _ref3.outputCalendar;
          var loc = this.loc.clone({
            locale,
            numberingSystem,
            outputCalendar
          });
          return clone(this, {
            loc
          });
        };
        _proto.setLocale = function setLocale(locale) {
          return this.reconfigure({
            locale
          });
        };
        _proto.set = function set(values) {
          if (!this.isValid)
            return this;
          var normalized = normalizeObject(values, normalizeUnit), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
          if ((containsGregor || containsOrdinal) && definiteWeekDef) {
            throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          }
          if (containsGregorMD && containsOrdinal) {
            throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
          }
          var mixed;
          if (settingWeekStuff) {
            mixed = weekToGregorian(_extends({}, gregorianToWeek(this.c), normalized));
          } else if (!isUndefined(normalized.ordinal)) {
            mixed = ordinalToGregorian(_extends({}, gregorianToOrdinal(this.c), normalized));
          } else {
            mixed = _extends({}, this.toObject(), normalized);
            if (isUndefined(normalized.day)) {
              mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
            }
          }
          var _objToTS4 = objToTS(mixed, this.o, this.zone), ts = _objToTS4[0], o = _objToTS4[1];
          return clone(this, {
            ts,
            o
          });
        };
        _proto.plus = function plus(duration) {
          if (!this.isValid)
            return this;
          var dur = Duration.fromDurationLike(duration);
          return clone(this, adjustTime(this, dur));
        };
        _proto.minus = function minus(duration) {
          if (!this.isValid)
            return this;
          var dur = Duration.fromDurationLike(duration).negate();
          return clone(this, adjustTime(this, dur));
        };
        _proto.startOf = function startOf(unit) {
          if (!this.isValid)
            return this;
          var o = {}, normalizedUnit = Duration.normalizeUnit(unit);
          switch (normalizedUnit) {
            case "years":
              o.month = 1;
            case "quarters":
            case "months":
              o.day = 1;
            case "weeks":
            case "days":
              o.hour = 0;
            case "hours":
              o.minute = 0;
            case "minutes":
              o.second = 0;
            case "seconds":
              o.millisecond = 0;
              break;
          }
          if (normalizedUnit === "weeks") {
            o.weekday = 1;
          }
          if (normalizedUnit === "quarters") {
            var q = Math.ceil(this.month / 3);
            o.month = (q - 1) * 3 + 1;
          }
          return this.set(o);
        };
        _proto.endOf = function endOf(unit) {
          var _this$plus;
          return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
        };
        _proto.toFormat = function toFormat(fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
        };
        _proto.toLocaleString = function toLocaleString(formatOpts, opts) {
          if (formatOpts === void 0) {
            formatOpts = DATE_SHORT;
          }
          if (opts === void 0) {
            opts = {};
          }
          return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
        };
        _proto.toLocaleParts = function toLocaleParts(opts) {
          if (opts === void 0) {
            opts = {};
          }
          return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
        };
        _proto.toISO = function toISO(_temp3) {
          var _ref4 = _temp3 === void 0 ? {} : _temp3, _ref4$format = _ref4.format, format = _ref4$format === void 0 ? "extended" : _ref4$format, _ref4$suppressSeconds = _ref4.suppressSeconds, suppressSeconds = _ref4$suppressSeconds === void 0 ? false : _ref4$suppressSeconds, _ref4$suppressMillise = _ref4.suppressMilliseconds, suppressMilliseconds = _ref4$suppressMillise === void 0 ? false : _ref4$suppressMillise, _ref4$includeOffset = _ref4.includeOffset, includeOffset = _ref4$includeOffset === void 0 ? true : _ref4$includeOffset;
          if (!this.isValid) {
            return null;
          }
          var ext = format === "extended";
          var c = _toISODate(this, ext);
          c += "T";
          c += _toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset);
          return c;
        };
        _proto.toISODate = function toISODate(_temp4) {
          var _ref5 = _temp4 === void 0 ? {} : _temp4, _ref5$format = _ref5.format, format = _ref5$format === void 0 ? "extended" : _ref5$format;
          if (!this.isValid) {
            return null;
          }
          return _toISODate(this, format === "extended");
        };
        _proto.toISOWeekDate = function toISOWeekDate() {
          return toTechFormat(this, "kkkk-'W'WW-c");
        };
        _proto.toISOTime = function toISOTime(_temp5) {
          var _ref6 = _temp5 === void 0 ? {} : _temp5, _ref6$suppressMillise = _ref6.suppressMilliseconds, suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise, _ref6$suppressSeconds = _ref6.suppressSeconds, suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds, _ref6$includeOffset = _ref6.includeOffset, includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset, _ref6$includePrefix = _ref6.includePrefix, includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix, _ref6$format = _ref6.format, format = _ref6$format === void 0 ? "extended" : _ref6$format;
          if (!this.isValid) {
            return null;
          }
          var c = includePrefix ? "T" : "";
          return c + _toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset);
        };
        _proto.toRFC2822 = function toRFC2822() {
          return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
        };
        _proto.toHTTP = function toHTTP() {
          return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
        };
        _proto.toSQLDate = function toSQLDate() {
          if (!this.isValid) {
            return null;
          }
          return _toISODate(this, true);
        };
        _proto.toSQLTime = function toSQLTime(_temp6) {
          var _ref7 = _temp6 === void 0 ? {} : _temp6, _ref7$includeOffset = _ref7.includeOffset, includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset, _ref7$includeZone = _ref7.includeZone, includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone, _ref7$includeOffsetSp = _ref7.includeOffsetSpace, includeOffsetSpace = _ref7$includeOffsetSp === void 0 ? true : _ref7$includeOffsetSp;
          var fmt = "HH:mm:ss.SSS";
          if (includeZone || includeOffset) {
            if (includeOffsetSpace) {
              fmt += " ";
            }
            if (includeZone) {
              fmt += "z";
            } else if (includeOffset) {
              fmt += "ZZ";
            }
          }
          return toTechFormat(this, fmt, true);
        };
        _proto.toSQL = function toSQL(opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid) {
            return null;
          }
          return this.toSQLDate() + " " + this.toSQLTime(opts);
        };
        _proto.toString = function toString() {
          return this.isValid ? this.toISO() : INVALID;
        };
        _proto.valueOf = function valueOf() {
          return this.toMillis();
        };
        _proto.toMillis = function toMillis() {
          return this.isValid ? this.ts : NaN;
        };
        _proto.toSeconds = function toSeconds() {
          return this.isValid ? this.ts / 1e3 : NaN;
        };
        _proto.toUnixInteger = function toUnixInteger() {
          return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
        };
        _proto.toJSON = function toJSON() {
          return this.toISO();
        };
        _proto.toBSON = function toBSON() {
          return this.toJSDate();
        };
        _proto.toObject = function toObject(opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid)
            return {};
          var base = _extends({}, this.c);
          if (opts.includeConfig) {
            base.outputCalendar = this.outputCalendar;
            base.numberingSystem = this.loc.numberingSystem;
            base.locale = this.loc.locale;
          }
          return base;
        };
        _proto.toJSDate = function toJSDate() {
          return new Date(this.isValid ? this.ts : NaN);
        };
        _proto.diff = function diff(otherDateTime, unit, opts) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid || !otherDateTime.isValid) {
            return Duration.invalid("created by diffing an invalid DateTime");
          }
          var durOpts = _extends({
            locale: this.locale,
            numberingSystem: this.numberingSystem
          }, opts);
          var units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = _diff(earlier, later, units, durOpts);
          return otherIsLater ? diffed.negate() : diffed;
        };
        _proto.diffNow = function diffNow(unit, opts) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          if (opts === void 0) {
            opts = {};
          }
          return this.diff(DateTime3.now(), unit, opts);
        };
        _proto.until = function until(otherDateTime) {
          return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
        };
        _proto.hasSame = function hasSame(otherDateTime, unit) {
          if (!this.isValid)
            return false;
          var inputMs = otherDateTime.valueOf();
          var adjustedToZone = this.setZone(otherDateTime.zone, {
            keepLocalTime: true
          });
          return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
        };
        _proto.equals = function equals(other) {
          return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
        };
        _proto.toRelative = function toRelative(options) {
          if (options === void 0) {
            options = {};
          }
          if (!this.isValid)
            return null;
          var base = options.base || DateTime3.fromObject({}, {
            zone: this.zone
          }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
          var units = ["years", "months", "days", "hours", "minutes", "seconds"];
          var unit = options.unit;
          if (Array.isArray(options.unit)) {
            units = options.unit;
            unit = void 0;
          }
          return diffRelative(base, this.plus(padding), _extends({}, options, {
            numeric: "always",
            units,
            unit
          }));
        };
        _proto.toRelativeCalendar = function toRelativeCalendar(options) {
          if (options === void 0) {
            options = {};
          }
          if (!this.isValid)
            return null;
          return diffRelative(options.base || DateTime3.fromObject({}, {
            zone: this.zone
          }), this, _extends({}, options, {
            numeric: "auto",
            units: ["years", "months", "days"],
            calendary: true
          }));
        };
        DateTime3.min = function min() {
          for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
            dateTimes[_key] = arguments[_key];
          }
          if (!dateTimes.every(DateTime3.isDateTime)) {
            throw new InvalidArgumentError("min requires all arguments be DateTimes");
          }
          return bestBy(dateTimes, function(i) {
            return i.valueOf();
          }, Math.min);
        };
        DateTime3.max = function max() {
          for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            dateTimes[_key2] = arguments[_key2];
          }
          if (!dateTimes.every(DateTime3.isDateTime)) {
            throw new InvalidArgumentError("max requires all arguments be DateTimes");
          }
          return bestBy(dateTimes, function(i) {
            return i.valueOf();
          }, Math.max);
        };
        DateTime3.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
          if (options === void 0) {
            options = {};
          }
          var _options = options, _options$locale = _options.locale, locale = _options$locale === void 0 ? null : _options$locale, _options$numberingSys = _options.numberingSystem, numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys, localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
          });
          return explainFromTokens(localeToUse, text, fmt);
        };
        DateTime3.fromStringExplain = function fromStringExplain(text, fmt, options) {
          if (options === void 0) {
            options = {};
          }
          return DateTime3.fromFormatExplain(text, fmt, options);
        };
        _createClass(DateTime3, [{
          key: "isValid",
          get: function get() {
            return this.invalid === null;
          }
        }, {
          key: "invalidReason",
          get: function get() {
            return this.invalid ? this.invalid.reason : null;
          }
        }, {
          key: "invalidExplanation",
          get: function get() {
            return this.invalid ? this.invalid.explanation : null;
          }
        }, {
          key: "locale",
          get: function get() {
            return this.isValid ? this.loc.locale : null;
          }
        }, {
          key: "numberingSystem",
          get: function get() {
            return this.isValid ? this.loc.numberingSystem : null;
          }
        }, {
          key: "outputCalendar",
          get: function get() {
            return this.isValid ? this.loc.outputCalendar : null;
          }
        }, {
          key: "zone",
          get: function get() {
            return this._zone;
          }
        }, {
          key: "zoneName",
          get: function get() {
            return this.isValid ? this.zone.name : null;
          }
        }, {
          key: "year",
          get: function get() {
            return this.isValid ? this.c.year : NaN;
          }
        }, {
          key: "quarter",
          get: function get() {
            return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
          }
        }, {
          key: "month",
          get: function get() {
            return this.isValid ? this.c.month : NaN;
          }
        }, {
          key: "day",
          get: function get() {
            return this.isValid ? this.c.day : NaN;
          }
        }, {
          key: "hour",
          get: function get() {
            return this.isValid ? this.c.hour : NaN;
          }
        }, {
          key: "minute",
          get: function get() {
            return this.isValid ? this.c.minute : NaN;
          }
        }, {
          key: "second",
          get: function get() {
            return this.isValid ? this.c.second : NaN;
          }
        }, {
          key: "millisecond",
          get: function get() {
            return this.isValid ? this.c.millisecond : NaN;
          }
        }, {
          key: "weekYear",
          get: function get() {
            return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
          }
        }, {
          key: "weekNumber",
          get: function get() {
            return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
          }
        }, {
          key: "weekday",
          get: function get() {
            return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
          }
        }, {
          key: "ordinal",
          get: function get() {
            return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
          }
        }, {
          key: "monthShort",
          get: function get() {
            return this.isValid ? Info.months("short", {
              locObj: this.loc
            })[this.month - 1] : null;
          }
        }, {
          key: "monthLong",
          get: function get() {
            return this.isValid ? Info.months("long", {
              locObj: this.loc
            })[this.month - 1] : null;
          }
        }, {
          key: "weekdayShort",
          get: function get() {
            return this.isValid ? Info.weekdays("short", {
              locObj: this.loc
            })[this.weekday - 1] : null;
          }
        }, {
          key: "weekdayLong",
          get: function get() {
            return this.isValid ? Info.weekdays("long", {
              locObj: this.loc
            })[this.weekday - 1] : null;
          }
        }, {
          key: "offset",
          get: function get() {
            return this.isValid ? +this.o : NaN;
          }
        }, {
          key: "offsetNameShort",
          get: function get() {
            if (this.isValid) {
              return this.zone.offsetName(this.ts, {
                format: "short",
                locale: this.locale
              });
            } else {
              return null;
            }
          }
        }, {
          key: "offsetNameLong",
          get: function get() {
            if (this.isValid) {
              return this.zone.offsetName(this.ts, {
                format: "long",
                locale: this.locale
              });
            } else {
              return null;
            }
          }
        }, {
          key: "isOffsetFixed",
          get: function get() {
            return this.isValid ? this.zone.isUniversal : null;
          }
        }, {
          key: "isInDST",
          get: function get() {
            if (this.isOffsetFixed) {
              return false;
            } else {
              return this.offset > this.set({
                month: 1
              }).offset || this.offset > this.set({
                month: 5
              }).offset;
            }
          }
        }, {
          key: "isInLeapYear",
          get: function get() {
            return isLeapYear(this.year);
          }
        }, {
          key: "daysInMonth",
          get: function get() {
            return daysInMonth(this.year, this.month);
          }
        }, {
          key: "daysInYear",
          get: function get() {
            return this.isValid ? daysInYear(this.year) : NaN;
          }
        }, {
          key: "weeksInWeekYear",
          get: function get() {
            return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
          }
        }], [{
          key: "DATE_SHORT",
          get: function get() {
            return DATE_SHORT;
          }
        }, {
          key: "DATE_MED",
          get: function get() {
            return DATE_MED;
          }
        }, {
          key: "DATE_MED_WITH_WEEKDAY",
          get: function get() {
            return DATE_MED_WITH_WEEKDAY;
          }
        }, {
          key: "DATE_FULL",
          get: function get() {
            return DATE_FULL;
          }
        }, {
          key: "DATE_HUGE",
          get: function get() {
            return DATE_HUGE;
          }
        }, {
          key: "TIME_SIMPLE",
          get: function get() {
            return TIME_SIMPLE;
          }
        }, {
          key: "TIME_WITH_SECONDS",
          get: function get() {
            return TIME_WITH_SECONDS;
          }
        }, {
          key: "TIME_WITH_SHORT_OFFSET",
          get: function get() {
            return TIME_WITH_SHORT_OFFSET;
          }
        }, {
          key: "TIME_WITH_LONG_OFFSET",
          get: function get() {
            return TIME_WITH_LONG_OFFSET;
          }
        }, {
          key: "TIME_24_SIMPLE",
          get: function get() {
            return TIME_24_SIMPLE;
          }
        }, {
          key: "TIME_24_WITH_SECONDS",
          get: function get() {
            return TIME_24_WITH_SECONDS;
          }
        }, {
          key: "TIME_24_WITH_SHORT_OFFSET",
          get: function get() {
            return TIME_24_WITH_SHORT_OFFSET;
          }
        }, {
          key: "TIME_24_WITH_LONG_OFFSET",
          get: function get() {
            return TIME_24_WITH_LONG_OFFSET;
          }
        }, {
          key: "DATETIME_SHORT",
          get: function get() {
            return DATETIME_SHORT;
          }
        }, {
          key: "DATETIME_SHORT_WITH_SECONDS",
          get: function get() {
            return DATETIME_SHORT_WITH_SECONDS;
          }
        }, {
          key: "DATETIME_MED",
          get: function get() {
            return DATETIME_MED;
          }
        }, {
          key: "DATETIME_MED_WITH_SECONDS",
          get: function get() {
            return DATETIME_MED_WITH_SECONDS;
          }
        }, {
          key: "DATETIME_MED_WITH_WEEKDAY",
          get: function get() {
            return DATETIME_MED_WITH_WEEKDAY;
          }
        }, {
          key: "DATETIME_FULL",
          get: function get() {
            return DATETIME_FULL;
          }
        }, {
          key: "DATETIME_FULL_WITH_SECONDS",
          get: function get() {
            return DATETIME_FULL_WITH_SECONDS;
          }
        }, {
          key: "DATETIME_HUGE",
          get: function get() {
            return DATETIME_HUGE;
          }
        }, {
          key: "DATETIME_HUGE_WITH_SECONDS",
          get: function get() {
            return DATETIME_HUGE_WITH_SECONDS;
          }
        }]);
        return DateTime3;
      }();
      function friendlyDateTime(dateTimeish) {
        if (DateTime2.isDateTime(dateTimeish)) {
          return dateTimeish;
        } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
          return DateTime2.fromJSDate(dateTimeish);
        } else if (dateTimeish && typeof dateTimeish === "object") {
          return DateTime2.fromObject(dateTimeish);
        } else {
          throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
        }
      }
      var VERSION = "2.3.1";
      exports.DateTime = DateTime2;
      exports.Duration = Duration;
      exports.FixedOffsetZone = FixedOffsetZone;
      exports.IANAZone = IANAZone;
      exports.Info = Info;
      exports.Interval = Interval;
      exports.InvalidZone = InvalidZone;
      exports.Settings = Settings;
      exports.SystemZone = SystemZone;
      exports.VERSION = VERSION;
      exports.Zone = Zone;
    }
  });

  // node_modules/immutable-ics/dist/immutable-ics.umd.js
  var require_immutable_ics_umd = __commonJS({
    "node_modules/immutable-ics/dist/immutable-ics.umd.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : factory(global2["immutable-ics"] = {});
      })(exports, function(exports2) {
        "use strict";
        var commonjsGlobal = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
        function createCommonjsModule(fn, module2) {
          return module2 = { exports: {} }, fn(module2, module2.exports), module2.exports;
        }
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var classCallCheck = function(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        };
        var createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var inherits = function(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        };
        var possibleConstructorReturn = function(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        };
        var slicedToArray = function() {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"])
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();
        var toConsumableArray = function(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
              arr2[i] = arr[i];
            return arr2;
          } else {
            return Array.from(arr);
          }
        };
        var immutable = createCommonjsModule(function(e) {
          (function(t, r) {
            e.exports = r();
          })(commonjsGlobal, function() {
            "use strict";
            function e2(e3, t2) {
              t2 && (e3.prototype = Object.create(t2.prototype)), e3.prototype.constructor = e3;
            }
            function t(e3) {
              return i(e3) ? e3 : M(e3);
            }
            function r(e3) {
              return p(e3) ? e3 : k(e3);
            }
            function o(e3) {
              return n(e3) ? e3 : O(e3);
            }
            function a(e3) {
              return i(e3) && !s(e3) ? e3 : A(e3);
            }
            function i(e3) {
              return !!(e3 && e3[lr]);
            }
            function p(e3) {
              return !!(e3 && e3[yr]);
            }
            function n(e3) {
              return !!(e3 && e3[dr]);
            }
            function s(e3) {
              return p(e3) || n(e3);
            }
            function l(e3) {
              return !!(e3 && e3[cr]);
            }
            function _(e3) {
              return e3.value = false, e3;
            }
            function y(e3) {
              e3 && (e3.value = true);
            }
            function d() {
            }
            function c(e3, t2) {
              t2 = t2 || 0;
              for (var r2 = nr(0, e3.length - t2), o2 = Array(r2), a2 = 0; a2 < r2; a2++)
                o2[a2] = e3[a2 + t2];
              return o2;
            }
            function u(e3) {
              return e3.size === void 0 && (e3.size = e3.__iterate(m)), e3.size;
            }
            function h(e3, t2) {
              if (typeof t2 != "number") {
                var r2 = t2 >>> 0;
                if ("" + r2 !== t2 || r2 == 4294967295)
                  return NaN;
                t2 = r2;
              }
              return 0 > t2 ? u(e3) + t2 : t2;
            }
            function m() {
              return true;
            }
            function g(e3, t2, r2) {
              return (e3 === 0 || r2 !== void 0 && e3 <= -r2) && (t2 === void 0 || r2 !== void 0 && t2 >= r2);
            }
            function S(e3, t2) {
              return f(e3, t2, 0);
            }
            function I(e3, t2) {
              return f(e3, t2, t2);
            }
            function f(e3, t2, r2) {
              return e3 === void 0 ? r2 : 0 > e3 ? nr(0, t2 + e3) : t2 === void 0 ? e3 : Math.min(t2, e3);
            }
            function E(e3) {
              this.next = e3;
            }
            function z(e3, t2, r2, o2) {
              var a2 = e3 === 0 ? t2 : e3 === 1 ? r2 : [t2, r2];
              return o2 ? o2.value = a2 : o2 = { value: a2, done: false }, o2;
            }
            function w() {
              return { value: void 0, done: true };
            }
            function v(e3) {
              return !!q(e3);
            }
            function D(e3) {
              return e3 && typeof e3.next == "function";
            }
            function x(e3) {
              var t2 = q(e3);
              return t2 && t2.call(e3);
            }
            function q(e3) {
              var t2 = e3 && (wr && e3[wr] || e3[Dr]);
              if (typeof t2 == "function")
                return t2;
            }
            function b(e3) {
              return e3 && typeof e3.length == "number";
            }
            function M(e3) {
              return e3 === null || e3 === void 0 ? U() : i(e3) ? e3.toSeq() : W(e3);
            }
            function k(e3) {
              return e3 === null || e3 === void 0 ? U().toKeyedSeq() : i(e3) ? p(e3) ? e3.toSeq() : e3.fromEntrySeq() : B(e3);
            }
            function O(e3) {
              return e3 === null || e3 === void 0 ? U() : i(e3) ? p(e3) ? e3.entrySeq() : e3.toIndexedSeq() : j(e3);
            }
            function A(e3) {
              return (e3 === null || e3 === void 0 ? U() : i(e3) ? p(e3) ? e3.entrySeq() : e3 : j(e3)).toSetSeq();
            }
            function L(e3) {
              this._array = e3, this.size = e3.length;
            }
            function T(e3) {
              var t2 = Object.keys(e3);
              this._object = e3, this._keys = t2, this.size = t2.length;
            }
            function R(e3) {
              this._iterable = e3, this.size = e3.length || e3.size;
            }
            function N(e3) {
              this._iterator = e3, this._iteratorCache = [];
            }
            function K(e3) {
              return !!(e3 && e3[qr]);
            }
            function U() {
              return br || (br = new L([]));
            }
            function B(e3) {
              var t2 = Array.isArray(e3) ? new L(e3).fromEntrySeq() : D(e3) ? new N(e3).fromEntrySeq() : v(e3) ? new R(e3).fromEntrySeq() : (typeof e3 == "undefined" ? "undefined" : _typeof(e3)) === "object" ? new T(e3) : void 0;
              if (!t2)
                throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + e3);
              return t2;
            }
            function j(e3) {
              var t2 = H(e3);
              if (!t2)
                throw new TypeError("Expected Array or iterable object of values: " + e3);
              return t2;
            }
            function W(e3) {
              var t2 = H(e3) || (typeof e3 == "undefined" ? "undefined" : _typeof(e3)) === "object" && new T(e3);
              if (!t2)
                throw new TypeError("Expected Array or iterable object of values, or keyed object: " + e3);
              return t2;
            }
            function H(e3) {
              return b(e3) ? new L(e3) : D(e3) ? new N(e3) : v(e3) ? new R(e3) : void 0;
            }
            function C(e3, t2, r2, o2) {
              var a2 = e3._cache;
              if (a2) {
                for (var _2, i2 = a2.length - 1, p2 = 0; p2 <= i2; p2++)
                  if (_2 = a2[r2 ? i2 - p2 : p2], t2(_2[1], o2 ? _2[0] : p2, e3) === false)
                    return p2 + 1;
                return p2;
              }
              return e3.__iterateUncached(t2, r2);
            }
            function Y(e3, t2, r2, o2) {
              var a2 = e3._cache;
              if (a2) {
                var _2 = a2.length - 1, i2 = 0;
                return new E(function() {
                  var e4 = a2[r2 ? _2 - i2 : i2];
                  return i2++ > _2 ? w() : z(t2, o2 ? e4[0] : i2 - 1, e4[1]);
                });
              }
              return e3.__iteratorUncached(t2, r2);
            }
            function P(e3, t2) {
              return t2 ? J(t2, e3, "", { "": e3 }) : V(e3);
            }
            function J(e3, t2, r2, o2) {
              return Array.isArray(t2) ? e3.call(o2, r2, O(t2).map(function(r3, o3) {
                return J(e3, r3, o3, t2);
              })) : X(t2) ? e3.call(o2, r2, k(t2).map(function(r3, o3) {
                return J(e3, r3, o3, t2);
              })) : t2;
            }
            function V(e3) {
              return Array.isArray(e3) ? O(e3).map(V).toList() : X(e3) ? k(e3).map(V).toMap() : e3;
            }
            function X(e3) {
              return e3 && (e3.constructor === Object || e3.constructor === void 0);
            }
            function Q(e3, t2) {
              if (e3 === t2 || e3 !== e3 && t2 !== t2)
                return true;
              if (!e3 || !t2)
                return false;
              if (typeof e3.valueOf == "function" && typeof t2.valueOf == "function") {
                if (e3 = e3.valueOf(), t2 = t2.valueOf(), e3 === t2 || e3 !== e3 && t2 !== t2)
                  return true;
                if (!e3 || !t2)
                  return false;
              }
              return typeof e3.equals == "function" && typeof t2.equals == "function" && e3.equals(t2);
            }
            function F(e3, t2) {
              if (e3 === t2)
                return true;
              if (!i(t2) || e3.size !== void 0 && t2.size !== void 0 && e3.size !== t2.size || e3.__hash !== void 0 && t2.__hash !== void 0 && e3.__hash !== t2.__hash || p(e3) !== p(t2) || n(e3) !== n(t2) || l(e3) !== l(t2))
                return false;
              if (e3.size === 0 && t2.size === 0)
                return true;
              var r2 = !s(e3);
              if (l(e3)) {
                var o2 = e3.entries();
                return t2.every(function(e4, t3) {
                  var a3 = o2.next().value;
                  return a3 && Q(a3[1], e4) && (r2 || Q(a3[0], t3));
                }) && o2.next().done;
              }
              var a2 = false;
              if (e3.size === void 0)
                if (t2.size === void 0)
                  typeof e3.cacheResult == "function" && e3.cacheResult();
                else {
                  a2 = true;
                  var y2 = e3;
                  e3 = t2, t2 = y2;
                }
              var _2 = true, d2 = t2.__iterate(function(t3, o3) {
                if (r2 ? !e3.has(t3) : a2 ? !Q(t3, e3.get(o3, Sr)) : !Q(e3.get(o3, Sr), t3))
                  return _2 = false, false;
              });
              return _2 && e3.size === d2;
            }
            function G(e3, t2) {
              if (!(this instanceof G))
                return new G(e3, t2);
              if (this._value = e3, this.size = t2 === void 0 ? Infinity : nr(0, t2), this.size === 0) {
                if (Mr)
                  return Mr;
                Mr = this;
              }
            }
            function Z(e3, t2) {
              if (!e3)
                throw new Error(t2);
            }
            function $(e3, t2, r2) {
              if (!(this instanceof $))
                return new $(e3, t2, r2);
              if (Z(r2 !== 0, "Cannot step a Range by 0"), e3 = e3 || 0, t2 === void 0 && (t2 = Infinity), r2 = r2 === void 0 ? 1 : Math.abs(r2), t2 < e3 && (r2 = -r2), this._start = e3, this._end = t2, this._step = r2, this.size = nr(0, Math.ceil((t2 - e3) / r2 - 1) + 1), this.size === 0) {
                if (kr)
                  return kr;
                kr = this;
              }
            }
            function ee() {
              throw TypeError("Abstract");
            }
            function te() {
            }
            function re() {
            }
            function oe() {
            }
            function ae(e3) {
              return 1073741824 & e3 >>> 1 | 3221225471 & e3;
            }
            function _e(e3) {
              if (e3 === false || e3 === null || e3 === void 0)
                return 0;
              if (typeof e3.valueOf == "function" && (e3 = e3.valueOf(), e3 === false || e3 === null || e3 === void 0))
                return 0;
              if (e3 === true)
                return 1;
              var t2 = typeof e3 == "undefined" ? "undefined" : _typeof(e3);
              if (t2 === "number") {
                if (e3 !== e3 || e3 === Infinity)
                  return 0;
                var r2 = 0 | e3;
                for (r2 !== e3 && (r2 ^= 4294967295 * e3); 4294967295 < e3; )
                  e3 /= 4294967295, r2 ^= e3;
                return ae(r2);
              }
              if (t2 === "string")
                return e3.length > Ur ? ie(e3) : pe(e3);
              if (typeof e3.hashCode == "function")
                return e3.hashCode();
              if (t2 === "object")
                return ne(e3);
              if (typeof e3.toString == "function")
                return pe(e3.toString());
              throw new Error("Value type " + t2 + " cannot be hashed.");
            }
            function ie(e3) {
              var t2 = Wr[e3];
              return t2 === void 0 && (t2 = pe(e3), jr === Br && (jr = 0, Wr = {}), jr++, Wr[e3] = t2), t2;
            }
            function pe(e3) {
              for (var t2 = 0, r2 = 0; r2 < e3.length; r2++)
                t2 = 0 | 31 * t2 + e3.charCodeAt(r2);
              return ae(t2);
            }
            function ne(e3) {
              var t2;
              if (Rr && (t2 = Or.get(e3), t2 !== void 0))
                return t2;
              if (t2 = e3[Kr], t2 !== void 0)
                return t2;
              if (!Tr) {
                if (t2 = e3.propertyIsEnumerable && e3.propertyIsEnumerable[Kr], t2 !== void 0)
                  return t2;
                if (t2 = se(e3), t2 !== void 0)
                  return t2;
              }
              if (t2 = ++Nr, 1073741824 & Nr && (Nr = 0), Rr)
                Or.set(e3, t2);
              else if (Lr !== void 0 && Lr(e3) === false)
                throw new Error("Non-extensible objects are not allowed as keys.");
              else if (Tr)
                Object.defineProperty(e3, Kr, { enumerable: false, configurable: false, writable: false, value: t2 });
              else if (e3.propertyIsEnumerable !== void 0 && e3.propertyIsEnumerable === e3.constructor.prototype.propertyIsEnumerable)
                e3.propertyIsEnumerable = function() {
                  return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
                }, e3.propertyIsEnumerable[Kr] = t2;
              else if (e3.nodeType !== void 0)
                e3[Kr] = t2;
              else
                throw new Error("Unable to set a non-enumerable property on object.");
              return t2;
            }
            function se(e3) {
              if (e3 && 0 < e3.nodeType)
                switch (e3.nodeType) {
                  case 1:
                    return e3.uniqueID;
                  case 9:
                    return e3.documentElement && e3.documentElement.uniqueID;
                }
            }
            function le(e3) {
              Z(e3 !== Infinity, "Cannot perform this action with an infinite size.");
            }
            function ye(e3) {
              return e3 === null || e3 === void 0 ? ze() : de(e3) && !l(e3) ? e3 : ze().withMutations(function(t2) {
                var o2 = r(e3);
                le(o2.size), o2.forEach(function(e4, r2) {
                  return t2.set(r2, e4);
                });
              });
            }
            function de(e3) {
              return !!(e3 && e3[Hr]);
            }
            function ce(e3, t2) {
              this.ownerID = e3, this.entries = t2;
            }
            function ue(e3, t2, r2) {
              this.ownerID = e3, this.bitmap = t2, this.nodes = r2;
            }
            function he(e3, t2, r2) {
              this.ownerID = e3, this.count = t2, this.nodes = r2;
            }
            function me(e3, t2, r2) {
              this.ownerID = e3, this.keyHash = t2, this.entries = r2;
            }
            function ge(e3, t2, r2) {
              this.ownerID = e3, this.keyHash = t2, this.entry = r2;
            }
            function Se(e3, t2, r2) {
              this._type = t2, this._reverse = r2, this._stack = e3._root && fe(e3._root);
            }
            function Ie(e3, t2) {
              return z(e3, t2[0], t2[1]);
            }
            function fe(e3, t2) {
              return { node: e3, index: 0, __prev: t2 };
            }
            function Ee(e3, t2, r2, o2) {
              var a2 = Object.create(Cr);
              return a2.size = e3, a2._root = t2, a2.__ownerID = r2, a2.__hash = o2, a2.__altered = false, a2;
            }
            function ze() {
              return Yr || (Yr = Ee(0));
            }
            function ve(e3, t2, r2) {
              var o2, a2;
              if (!e3._root) {
                if (r2 === Sr)
                  return e3;
                a2 = 1, o2 = new ce(e3.__ownerID, [[t2, r2]]);
              } else {
                var i2 = _(Ir), p2 = _(fr);
                if (o2 = we(e3._root, e3.__ownerID, 0, void 0, t2, r2, i2, p2), !p2.value)
                  return e3;
                a2 = e3.size + (i2.value ? r2 === Sr ? -1 : 1 : 0);
              }
              return e3.__ownerID ? (e3.size = a2, e3._root = o2, e3.__hash = void 0, e3.__altered = true, e3) : o2 ? Ee(a2, o2) : ze();
            }
            function we(e3, t2, r2, o2, a2, _2, i2, p2) {
              return e3 ? e3.update(t2, r2, o2, a2, _2, i2, p2) : _2 === Sr ? e3 : (y(p2), y(i2), new ge(t2, o2, [a2, _2]));
            }
            function De(e3) {
              return e3.constructor === ge || e3.constructor === me;
            }
            function xe(e3, t2, r2, o2, a2) {
              if (e3.keyHash === o2)
                return new me(t2, o2, [e3.entry, a2]);
              var _2, i2 = (r2 === 0 ? e3.keyHash : e3.keyHash >>> r2) & gr, p2 = (r2 === 0 ? o2 : o2 >>> r2) & gr, n2 = i2 == p2 ? [xe(e3, t2, r2 + hr, o2, a2)] : (_2 = new ge(t2, o2, a2), i2 < p2 ? [e3, _2] : [_2, e3]);
              return new ue(t2, 1 << i2 | 1 << p2, n2);
            }
            function qe(e3, t2, r2, o2) {
              e3 || (e3 = new d());
              for (var a2, _2 = new ge(e3, _e(r2), [r2, o2]), i2 = 0; i2 < t2.length; i2++)
                a2 = t2[i2], _2 = _2.update(e3, 0, void 0, a2[0], a2[1]);
              return _2;
            }
            function be(e3, t2, r2, o2) {
              for (var a2, _2 = 0, i2 = 0, p2 = Array(r2), n2 = 0, s2 = 1, l2 = t2.length; n2 < l2; n2++, s2 <<= 1)
                a2 = t2[n2], a2 !== void 0 && n2 !== o2 && (_2 |= s2, p2[i2++] = a2);
              return new ue(e3, _2, p2);
            }
            function Me(e3, t2, r2, o2, a2) {
              for (var _2 = 0, i2 = Array(mr), p2 = 0; r2 !== 0; p2++, r2 >>>= 1)
                i2[p2] = 1 & r2 ? t2[_2++] : void 0;
              return i2[o2] = a2, new he(e3, _2 + 1, i2);
            }
            function ke(e3, t2, o2) {
              for (var a2 = [], _2 = 0; _2 < o2.length; _2++) {
                var p2 = o2[_2], n2 = r(p2);
                i(p2) || (n2 = n2.map(function(e4) {
                  return P(e4);
                })), a2.push(n2);
              }
              return Le(e3, t2, a2);
            }
            function Oe(e3, t2) {
              return e3 && e3.mergeDeep && i(t2) ? e3.mergeDeep(t2) : Q(e3, t2) ? e3 : t2;
            }
            function Ae(e3) {
              return function(t2, r2, o2) {
                if (t2 && t2.mergeDeepWith && i(r2))
                  return t2.mergeDeepWith(e3, r2);
                var a2 = e3(t2, r2, o2);
                return Q(t2, a2) ? t2 : a2;
              };
            }
            function Le(e3, t2, r2) {
              return r2 = r2.filter(function(e4) {
                return e4.size !== 0;
              }), r2.length === 0 ? e3 : e3.size !== 0 || e3.__ownerID || r2.length !== 1 ? e3.withMutations(function(e4) {
                for (var o2 = t2 ? function(r3, o3) {
                  e4.update(o3, Sr, function(e5) {
                    return e5 === Sr ? r3 : t2(e5, r3, o3);
                  });
                } : function(t3, r3) {
                  e4.set(r3, t3);
                }, a2 = 0; a2 < r2.length; a2++)
                  r2[a2].forEach(o2);
              }) : e3.constructor(r2[0]);
            }
            function Te(e3, t2, r2, o2) {
              var a2 = e3 === Sr, _2 = t2.next();
              if (_2.done) {
                var i2 = a2 ? r2 : e3, p2 = o2(i2);
                return p2 === i2 ? e3 : p2;
              }
              Z(a2 || e3 && e3.set, "invalid keyPath");
              var n2 = _2.value, s2 = a2 ? Sr : e3.get(n2, Sr), l2 = Te(s2, t2, r2, o2);
              return l2 === s2 ? e3 : l2 === Sr ? e3.remove(n2) : (a2 ? ze() : e3).set(n2, l2);
            }
            function Re(e3) {
              return e3 -= 1431655765 & e3 >> 1, e3 = (858993459 & e3) + (858993459 & e3 >> 2), e3 = 252645135 & e3 + (e3 >> 4), e3 += e3 >> 8, e3 += e3 >> 16, 127 & e3;
            }
            function Ne(e3, t2, r2, o2) {
              var a2 = o2 ? e3 : c(e3);
              return a2[t2] = r2, a2;
            }
            function Ke(e3, t2, r2, o2) {
              var a2 = e3.length + 1;
              if (o2 && t2 + 1 === a2)
                return e3[t2] = r2, e3;
              for (var _2 = Array(a2), i2 = 0, p2 = 0; p2 < a2; p2++)
                p2 === t2 ? (_2[p2] = r2, i2 = -1) : _2[p2] = e3[p2 + i2];
              return _2;
            }
            function Ue(e3, t2, r2) {
              var o2 = e3.length - 1;
              if (r2 && t2 === o2)
                return e3.pop(), e3;
              for (var a2 = Array(o2), _2 = 0, i2 = 0; i2 < o2; i2++)
                i2 === t2 && (_2 = 1), a2[i2] = e3[i2 + _2];
              return a2;
            }
            function Be(e3) {
              var t2 = Ye();
              if (e3 === null || e3 === void 0)
                return t2;
              if (je(e3))
                return e3;
              var r2 = o(e3), a2 = r2.size;
              return a2 === 0 ? t2 : (le(a2), 0 < a2 && a2 < mr ? Ce(0, a2, hr, null, new We(r2.toArray())) : t2.withMutations(function(e4) {
                e4.setSize(a2), r2.forEach(function(t3, r3) {
                  return e4.set(r3, t3);
                });
              }));
            }
            function je(e3) {
              return !!(e3 && e3[Xr]);
            }
            function We(e3, t2) {
              this.array = e3, this.ownerID = t2;
            }
            function He(e3, t2) {
              function r2(e4, t3, r3) {
                return t3 === 0 ? o2(e4, r3) : a2(e4, t3, r3);
              }
              function o2(e4, r3) {
                var o3 = r3 === p2 ? n2 && n2.array : e4 && e4.array, a3 = r3 > _2 ? 0 : _2 - r3, s2 = i2 - r3;
                return s2 > mr && (s2 = mr), function() {
                  if (a3 == s2)
                    return Gr;
                  var e5 = t2 ? --s2 : a3++;
                  return o3 && o3[e5];
                };
              }
              function a2(e4, o3, a3) {
                var p3, n3 = e4 && e4.array, s2 = a3 > _2 ? 0 : _2 - a3 >> o3, l2 = (i2 - a3 >> o3) + 1;
                return l2 > mr && (l2 = mr), function() {
                  do {
                    if (p3) {
                      var e5 = p3();
                      if (e5 !== Gr)
                        return e5;
                      p3 = null;
                    }
                    if (s2 == l2)
                      return Gr;
                    var _3 = t2 ? --l2 : s2++;
                    p3 = r2(n3 && n3[_3], o3 - hr, a3 + (_3 << o3));
                  } while (true);
                };
              }
              var _2 = e3._origin, i2 = e3._capacity, p2 = Ge(i2), n2 = e3._tail;
              return r2(e3._root, e3._level, 0);
            }
            function Ce(e3, t2, r2, o2, a2, _2, i2) {
              var p2 = Object.create(Qr);
              return p2.size = t2 - e3, p2._origin = e3, p2._capacity = t2, p2._level = r2, p2._root = o2, p2._tail = a2, p2.__ownerID = _2, p2.__hash = i2, p2.__altered = false, p2;
            }
            function Ye() {
              return Fr || (Fr = Ce(0, 0, hr));
            }
            function Pe(e3, t2, r2) {
              if (t2 = h(e3, t2), t2 !== t2)
                return e3;
              if (t2 >= e3.size || 0 > t2)
                return e3.withMutations(function(e4) {
                  0 > t2 ? Qe(e4, t2).set(0, r2) : Qe(e4, 0, t2 + 1).set(t2, r2);
                });
              t2 += e3._origin;
              var o2 = e3._tail, a2 = e3._root, i2 = _(fr);
              return t2 >= Ge(e3._capacity) ? o2 = Je(o2, e3.__ownerID, 0, t2, r2, i2) : a2 = Je(a2, e3.__ownerID, e3._level, t2, r2, i2), i2.value ? e3.__ownerID ? (e3._root = a2, e3._tail = o2, e3.__hash = void 0, e3.__altered = true, e3) : Ce(e3._origin, e3._capacity, e3._level, a2, o2) : e3;
            }
            function Je(e3, t2, r2, o2, a2, _2) {
              var i2 = o2 >>> r2 & gr, p2 = e3 && i2 < e3.array.length;
              if (!p2 && a2 === void 0)
                return e3;
              var n2;
              if (0 < r2) {
                var s2 = e3 && e3.array[i2], l2 = Je(s2, t2, r2 - hr, o2, a2, _2);
                return l2 === s2 ? e3 : (n2 = Ve(e3, t2), n2.array[i2] = l2, n2);
              }
              return p2 && e3.array[i2] === a2 ? e3 : (y(_2), n2 = Ve(e3, t2), a2 === void 0 && i2 == n2.array.length - 1 ? n2.array.pop() : n2.array[i2] = a2, n2);
            }
            function Ve(e3, t2) {
              return t2 && e3 && t2 === e3.ownerID ? e3 : new We(e3 ? e3.array.slice() : [], t2);
            }
            function Xe(e3, t2) {
              if (t2 >= Ge(e3._capacity))
                return e3._tail;
              if (t2 < 1 << e3._level + hr) {
                for (var r2 = e3._root, o2 = e3._level; r2 && 0 < o2; )
                  r2 = r2.array[t2 >>> o2 & gr], o2 -= hr;
                return r2;
              }
            }
            function Qe(e3, t2, r2) {
              t2 !== void 0 && (t2 |= 0), r2 !== void 0 && (r2 |= 0);
              var o2 = e3.__ownerID || new d(), a2 = e3._origin, _2 = e3._capacity, i2 = a2 + t2, p2 = r2 === void 0 ? _2 : 0 > r2 ? _2 + r2 : a2 + r2;
              if (i2 === a2 && p2 === _2)
                return e3;
              if (i2 >= p2)
                return e3.clear();
              for (var n2 = e3._level, s2 = e3._root, l2 = 0; 0 > i2 + l2; )
                s2 = new We(s2 && s2.array.length ? [void 0, s2] : [], o2), n2 += hr, l2 += 1 << n2;
              l2 && (i2 += l2, a2 += l2, p2 += l2, _2 += l2);
              for (var y2 = Ge(_2), c2 = Ge(p2); c2 >= 1 << n2 + hr; )
                s2 = new We(s2 && s2.array.length ? [s2] : [], o2), n2 += hr;
              var u2 = e3._tail, h2 = c2 < y2 ? Xe(e3, p2 - 1) : c2 > y2 ? new We([], o2) : u2;
              if (u2 && c2 > y2 && i2 < _2 && u2.array.length) {
                s2 = Ve(s2, o2);
                for (var m2, g2 = s2, S2 = n2; S2 > hr; S2 -= hr)
                  m2 = y2 >>> S2 & gr, g2 = g2.array[m2] = Ve(g2.array[m2], o2);
                g2.array[y2 >>> hr & gr] = u2;
              }
              if (p2 < _2 && (h2 = h2 && h2.removeAfter(o2, 0, p2)), i2 >= c2)
                i2 -= c2, p2 -= c2, n2 = hr, s2 = null, h2 = h2 && h2.removeBefore(o2, 0, i2);
              else if (i2 > a2 || c2 < y2) {
                for (l2 = 0; s2; ) {
                  var I2 = i2 >>> n2 & gr;
                  if (I2 != c2 >>> n2 & gr)
                    break;
                  I2 && (l2 += (1 << n2) * I2), n2 -= hr, s2 = s2.array[I2];
                }
                s2 && i2 > a2 && (s2 = s2.removeBefore(o2, n2, i2 - l2)), s2 && c2 < y2 && (s2 = s2.removeAfter(o2, n2, c2 - l2)), l2 && (i2 -= l2, p2 -= l2);
              }
              return e3.__ownerID ? (e3.size = p2 - i2, e3._origin = i2, e3._capacity = p2, e3._level = n2, e3._root = s2, e3._tail = h2, e3.__hash = void 0, e3.__altered = true, e3) : Ce(i2, p2, n2, s2, h2);
            }
            function Fe(e3, t2, r2) {
              for (var a2 = [], _2 = 0, p2 = 0; p2 < r2.length; p2++) {
                var n2 = r2[p2], s2 = o(n2);
                s2.size > _2 && (_2 = s2.size), i(n2) || (s2 = s2.map(function(e4) {
                  return P(e4);
                })), a2.push(s2);
              }
              return _2 > e3.size && (e3 = e3.setSize(_2)), Le(e3, t2, a2);
            }
            function Ge(e3) {
              return e3 < mr ? 0 : e3 - 1 >>> hr << hr;
            }
            function Ze(e3) {
              return e3 === null || e3 === void 0 ? tt() : $e(e3) ? e3 : tt().withMutations(function(t2) {
                var o2 = r(e3);
                le(o2.size), o2.forEach(function(e4, r2) {
                  return t2.set(r2, e4);
                });
              });
            }
            function $e(e3) {
              return de(e3) && l(e3);
            }
            function et(e3, t2, r2, o2) {
              var a2 = Object.create(Ze.prototype);
              return a2.size = e3 ? e3.size : 0, a2._map = e3, a2._list = t2, a2.__ownerID = r2, a2.__hash = o2, a2;
            }
            function tt() {
              return Zr || (Zr = et(ze(), Ye()));
            }
            function rt(e3, t2, r2) {
              var o2, a2, _2 = e3._map, p2 = e3._list, n2 = _2.get(t2), i2 = n2 !== void 0;
              if (r2 === Sr) {
                if (!i2)
                  return e3;
                p2.size >= mr && p2.size >= 2 * _2.size ? (a2 = p2.filter(function(e4, t3) {
                  return e4 !== void 0 && n2 !== t3;
                }), o2 = a2.toKeyedSeq().map(function(e4) {
                  return e4[0];
                }).flip().toMap(), e3.__ownerID && (o2.__ownerID = a2.__ownerID = e3.__ownerID)) : (o2 = _2.remove(t2), a2 = n2 === p2.size - 1 ? p2.pop() : p2.set(n2, void 0));
              } else if (i2) {
                if (r2 === p2.get(n2)[1])
                  return e3;
                o2 = _2, a2 = p2.set(n2, [t2, r2]);
              } else
                o2 = _2.set(t2, p2.size), a2 = p2.set(p2.size, [t2, r2]);
              return e3.__ownerID ? (e3.size = o2.size, e3._map = o2, e3._list = a2, e3.__hash = void 0, e3) : et(o2, a2);
            }
            function ot(e3, t2) {
              this._iter = e3, this._useKeys = t2, this.size = e3.size;
            }
            function at(e3) {
              this._iter = e3, this.size = e3.size;
            }
            function _t(e3) {
              this._iter = e3, this.size = e3.size;
            }
            function it(e3) {
              this._iter = e3, this.size = e3.size;
            }
            function pt(e3) {
              var t2 = bt(e3);
              return t2._iter = e3, t2.size = e3.size, t2.flip = function() {
                return e3;
              }, t2.reverse = function() {
                var t3 = e3.reverse.apply(this);
                return t3.flip = function() {
                  return e3.reverse();
                }, t3;
              }, t2.has = function(t3) {
                return e3.includes(t3);
              }, t2.includes = function(t3) {
                return e3.has(t3);
              }, t2.cacheResult = Mt, t2.__iterateUncached = function(t3, r2) {
                var o2 = this;
                return e3.__iterate(function(e4, r3) {
                  return t3(r3, e4, o2) !== false;
                }, r2);
              }, t2.__iteratorUncached = function(t3, r2) {
                if (t3 === vr) {
                  var o2 = e3.__iterator(t3, r2);
                  return new E(function() {
                    var e4 = o2.next();
                    if (!e4.done) {
                      var t4 = e4.value[0];
                      e4.value[0] = e4.value[1], e4.value[1] = t4;
                    }
                    return e4;
                  });
                }
                return e3.__iterator(t3 === zr ? Er : zr, r2);
              }, t2;
            }
            function nt(e3, t2, r2) {
              var o2 = bt(e3);
              return o2.size = e3.size, o2.has = function(t3) {
                return e3.has(t3);
              }, o2.get = function(o3, a2) {
                var _2 = e3.get(o3, Sr);
                return _2 === Sr ? a2 : t2.call(r2, _2, o3, e3);
              }, o2.__iterateUncached = function(o3, a2) {
                var _2 = this;
                return e3.__iterate(function(e4, a3, i2) {
                  return o3(t2.call(r2, e4, a3, i2), a3, _2) !== false;
                }, a2);
              }, o2.__iteratorUncached = function(o3, a2) {
                var _2 = e3.__iterator(vr, a2);
                return new E(function() {
                  var a3 = _2.next();
                  if (a3.done)
                    return a3;
                  var i2 = a3.value, p2 = i2[0];
                  return z(o3, p2, t2.call(r2, i2[1], p2, e3), a3);
                });
              }, o2;
            }
            function st(e3, t2) {
              var r2 = bt(e3);
              return r2._iter = e3, r2.size = e3.size, r2.reverse = function() {
                return e3;
              }, e3.flip && (r2.flip = function() {
                var t3 = pt(e3);
                return t3.reverse = function() {
                  return e3.flip();
                }, t3;
              }), r2.get = function(r3, o2) {
                return e3.get(t2 ? r3 : -1 - r3, o2);
              }, r2.has = function(r3) {
                return e3.has(t2 ? r3 : -1 - r3);
              }, r2.includes = function(t3) {
                return e3.includes(t3);
              }, r2.cacheResult = Mt, r2.__iterate = function(t3, r3) {
                var o2 = this;
                return e3.__iterate(function(e4, r4) {
                  return t3(e4, r4, o2);
                }, !r3);
              }, r2.__iterator = function(t3, r3) {
                return e3.__iterator(t3, !r3);
              }, r2;
            }
            function lt(e3, t2, r2, o2) {
              var a2 = bt(e3);
              return o2 && (a2.has = function(o3) {
                var a3 = e3.get(o3, Sr);
                return a3 !== Sr && !!t2.call(r2, a3, o3, e3);
              }, a2.get = function(o3, a3) {
                var _2 = e3.get(o3, Sr);
                return _2 !== Sr && t2.call(r2, _2, o3, e3) ? _2 : a3;
              }), a2.__iterateUncached = function(a3, _2) {
                var i2 = this, p2 = 0;
                return e3.__iterate(function(e4, _3, n2) {
                  if (t2.call(r2, e4, _3, n2))
                    return p2++, a3(e4, o2 ? _3 : p2 - 1, i2);
                }, _2), p2;
              }, a2.__iteratorUncached = function(a3, _2) {
                var i2 = e3.__iterator(vr, _2), p2 = 0;
                return new E(function() {
                  for (; ; ) {
                    var _3 = i2.next();
                    if (_3.done)
                      return _3;
                    var n2 = _3.value, s2 = n2[0], l2 = n2[1];
                    if (t2.call(r2, l2, s2, e3))
                      return z(a3, o2 ? s2 : p2++, l2, _3);
                  }
                });
              }, a2;
            }
            function yt(e3, t2, r2) {
              var o2 = ye().asMutable();
              return e3.__iterate(function(a2, _2) {
                o2.update(t2.call(r2, a2, _2, e3), 0, function(e4) {
                  return e4 + 1;
                });
              }), o2.asImmutable();
            }
            function dt(e3, t2, r2) {
              var o2 = p(e3), a2 = (l(e3) ? Ze() : ye()).asMutable();
              e3.__iterate(function(_3, i2) {
                a2.update(t2.call(r2, _3, i2, e3), function(e4) {
                  return e4 = e4 || [], e4.push(o2 ? [i2, _3] : _3), e4;
                });
              });
              var _2 = qt(e3);
              return a2.map(function(t3) {
                return wt(e3, _2(t3));
              });
            }
            function ct(e3, t2, r2, o2) {
              var a2 = e3.size;
              if (t2 !== void 0 && (t2 |= 0), r2 !== void 0 && (r2 === Infinity ? r2 = a2 : r2 |= 0), g(t2, r2, a2))
                return e3;
              var _2 = S(t2, a2), i2 = I(r2, a2);
              if (_2 !== _2 || i2 !== i2)
                return ct(e3.toSeq().cacheResult(), t2, r2, o2);
              var p2, n2 = i2 - _2;
              n2 == n2 && (p2 = 0 > n2 ? 0 : n2);
              var s2 = bt(e3);
              return s2.size = p2 === 0 ? p2 : e3.size && p2 || void 0, !o2 && K(e3) && 0 <= p2 && (s2.get = function(t3, r3) {
                return t3 = h(this, t3), 0 <= t3 && t3 < p2 ? e3.get(t3 + _2, r3) : r3;
              }), s2.__iterateUncached = function(t3, r3) {
                var a3 = this;
                if (p2 === 0)
                  return 0;
                if (r3)
                  return this.cacheResult().__iterate(t3, r3);
                var i3 = 0, n3 = true, s3 = 0;
                return e3.__iterate(function(e4, r4) {
                  if (!(n3 && (n3 = i3++ < _2)))
                    return s3++, t3(e4, o2 ? r4 : s3 - 1, a3) !== false && s3 !== p2;
                }), s3;
              }, s2.__iteratorUncached = function(t3, r3) {
                if (p2 !== 0 && r3)
                  return this.cacheResult().__iterator(t3, r3);
                var a3 = p2 !== 0 && e3.__iterator(t3, r3), i3 = 0, n3 = 0;
                return new E(function() {
                  for (; i3++ < _2; )
                    a3.next();
                  if (++n3 > p2)
                    return w();
                  var e4 = a3.next();
                  return o2 || t3 === zr ? e4 : t3 === Er ? z(t3, n3 - 1, void 0, e4) : z(t3, n3 - 1, e4.value[1], e4);
                });
              }, s2;
            }
            function ut(e3, t2, r2) {
              var o2 = bt(e3);
              return o2.__iterateUncached = function(o3, a2) {
                var _2 = this;
                if (a2)
                  return this.cacheResult().__iterate(o3, a2);
                var i2 = 0;
                return e3.__iterate(function(e4, a3, p2) {
                  return t2.call(r2, e4, a3, p2) && ++i2 && o3(e4, a3, _2);
                }), i2;
              }, o2.__iteratorUncached = function(o3, a2) {
                var _2 = this;
                if (a2)
                  return this.cacheResult().__iterator(o3, a2);
                var i2 = e3.__iterator(vr, a2), p2 = true;
                return new E(function() {
                  if (!p2)
                    return w();
                  var e4 = i2.next();
                  if (e4.done)
                    return e4;
                  var a3 = e4.value, n2 = a3[0], s2 = a3[1];
                  return t2.call(r2, s2, n2, _2) ? o3 === vr ? e4 : z(o3, n2, s2, e4) : (p2 = false, w());
                });
              }, o2;
            }
            function ht(e3, t2, r2, o2) {
              var a2 = bt(e3);
              return a2.__iterateUncached = function(a3, _2) {
                var i2 = this;
                if (_2)
                  return this.cacheResult().__iterate(a3, _2);
                var p2 = true, n2 = 0;
                return e3.__iterate(function(e4, _3, s2) {
                  if (!(p2 && (p2 = t2.call(r2, e4, _3, s2))))
                    return n2++, a3(e4, o2 ? _3 : n2 - 1, i2);
                }), n2;
              }, a2.__iteratorUncached = function(a3, _2) {
                var i2 = this;
                if (_2)
                  return this.cacheResult().__iterator(a3, _2);
                var p2 = e3.__iterator(vr, _2), n2 = true, s2 = 0;
                return new E(function() {
                  var e4, _3, l2;
                  do {
                    if (e4 = p2.next(), e4.done)
                      return o2 || a3 === zr ? e4 : a3 === Er ? z(a3, s2++, void 0, e4) : z(a3, s2++, e4.value[1], e4);
                    var y2 = e4.value;
                    _3 = y2[0], l2 = y2[1], n2 && (n2 = t2.call(r2, l2, _3, i2));
                  } while (n2);
                  return a3 === vr ? e4 : z(a3, _3, l2, e4);
                });
              }, a2;
            }
            function mt(e3, t2) {
              var o2 = p(e3), a2 = [e3].concat(t2).map(function(e4) {
                return i(e4) ? o2 && (e4 = r(e4)) : e4 = o2 ? B(e4) : j(Array.isArray(e4) ? e4 : [e4]), e4;
              }).filter(function(e4) {
                return e4.size !== 0;
              });
              if (a2.length === 0)
                return e3;
              if (a2.length === 1) {
                var _2 = a2[0];
                if (_2 === e3 || o2 && p(_2) || n(e3) && n(_2))
                  return _2;
              }
              var s2 = new L(a2);
              return o2 ? s2 = s2.toKeyedSeq() : !n(e3) && (s2 = s2.toSetSeq()), s2 = s2.flatten(true), s2.size = a2.reduce(function(e4, t3) {
                if (e4 !== void 0) {
                  var r2 = t3.size;
                  if (r2 !== void 0)
                    return e4 + r2;
                }
              }, 0), s2;
            }
            function gt(e3, t2, r2) {
              var o2 = bt(e3);
              return o2.__iterateUncached = function(o3, a2) {
                function _2(e4, s2) {
                  var l2 = this;
                  e4.__iterate(function(e5, a3) {
                    return (!t2 || s2 < t2) && i(e5) ? _2(e5, s2 + 1) : o3(e5, r2 ? a3 : p2++, l2) === false && (n2 = true), !n2;
                  }, a2);
                }
                var p2 = 0, n2 = false;
                return _2(e3, 0), p2;
              }, o2.__iteratorUncached = function(o3, a2) {
                var _2 = e3.__iterator(o3, a2), p2 = [], n2 = 0;
                return new E(function() {
                  for (; _2; ) {
                    var e4 = _2.next();
                    if (e4.done !== false) {
                      _2 = p2.pop();
                      continue;
                    }
                    var s2 = e4.value;
                    if (o3 === vr && (s2 = s2[1]), (!t2 || p2.length < t2) && i(s2))
                      p2.push(_2), _2 = s2.__iterator(o3, a2);
                    else
                      return r2 ? e4 : z(o3, n2++, s2, e4);
                  }
                  return w();
                });
              }, o2;
            }
            function St(e3, t2, r2) {
              var o2 = qt(e3);
              return e3.toSeq().map(function(a2, _2) {
                return o2(t2.call(r2, a2, _2, e3));
              }).flatten(true);
            }
            function It(e3, t2) {
              var r2 = bt(e3);
              return r2.size = e3.size && 2 * e3.size - 1, r2.__iterateUncached = function(r3, o2) {
                var a2 = this, _2 = 0;
                return e3.__iterate(function(e4) {
                  return (!_2 || r3(t2, _2++, a2) !== false) && r3(e4, _2++, a2) !== false;
                }, o2), _2;
              }, r2.__iteratorUncached = function(r3, o2) {
                var a2, _2 = e3.__iterator(zr, o2), i2 = 0;
                return new E(function() {
                  return (!a2 || i2 % 2) && (a2 = _2.next(), a2.done) ? a2 : i2 % 2 ? z(r3, i2++, t2) : z(r3, i2++, a2.value, a2);
                });
              }, r2;
            }
            function ft(e3, t2, r2) {
              t2 || (t2 = kt);
              var o2 = p(e3), a2 = 0, _2 = e3.toSeq().map(function(t3, o3) {
                return [o3, t3, a2++, r2 ? r2(t3, o3, e3) : t3];
              }).toArray();
              return _2.sort(function(e4, r3) {
                return t2(e4[3], r3[3]) || e4[2] - r3[2];
              }).forEach(o2 ? function(e4, t3) {
                _2[t3].length = 2;
              } : function(e4, t3) {
                _2[t3] = e4[1];
              }), o2 ? k(_2) : n(e3) ? O(_2) : A(_2);
            }
            function Et(e3, t2, r2) {
              if (t2 || (t2 = kt), r2) {
                var o2 = e3.toSeq().map(function(t3, o3) {
                  return [t3, r2(t3, o3, e3)];
                }).reduce(function(e4, r3) {
                  return zt(t2, e4[1], r3[1]) ? r3 : e4;
                });
                return o2 && o2[0];
              }
              return e3.reduce(function(e4, r3) {
                return zt(t2, e4, r3) ? r3 : e4;
              });
            }
            function zt(e3, t2, r2) {
              var o2 = e3(r2, t2);
              return o2 === 0 && r2 !== t2 && (r2 === void 0 || r2 === null || r2 !== r2) || 0 < o2;
            }
            function vt(e3, r2, o2) {
              var a2 = bt(e3);
              return a2.size = new L(o2).map(function(e4) {
                return e4.size;
              }).min(), a2.__iterate = function(e4, t2) {
                for (var r3, o3 = this.__iterator(zr, t2), a3 = 0; !(r3 = o3.next()).done && e4(r3.value, a3++, this) !== false; )
                  ;
                return a3;
              }, a2.__iteratorUncached = function(e4, a3) {
                var _2 = o2.map(function(e5) {
                  return e5 = t(e5), x(a3 ? e5.reverse() : e5);
                }), i2 = 0, p2 = false;
                return new E(function() {
                  var t2;
                  return p2 || (t2 = _2.map(function(e5) {
                    return e5.next();
                  }), p2 = t2.some(function(e5) {
                    return e5.done;
                  })), p2 ? w() : z(e4, i2++, r2.apply(null, t2.map(function(e5) {
                    return e5.value;
                  })));
                });
              }, a2;
            }
            function wt(e3, t2) {
              return K(e3) ? t2 : e3.constructor(t2);
            }
            function Dt(e3) {
              if (e3 !== Object(e3))
                throw new TypeError("Expected [K, V] tuple: " + e3);
            }
            function xt(e3) {
              return le(e3.size), u(e3);
            }
            function qt(e3) {
              return p(e3) ? r : n(e3) ? o : a;
            }
            function bt(e3) {
              return Object.create((p(e3) ? k : n(e3) ? O : A).prototype);
            }
            function Mt() {
              return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : M.prototype.cacheResult.call(this);
            }
            function kt(e3, t2) {
              return e3 > t2 ? 1 : e3 < t2 ? -1 : 0;
            }
            function Ot(e3) {
              var r2 = x(e3);
              if (!r2) {
                if (!b(e3))
                  throw new TypeError("Expected iterable or array-like: " + e3);
                r2 = x(t(e3));
              }
              return r2;
            }
            function At(e3, t2) {
              var r2, o2 = function(_2) {
                if (_2 instanceof o2)
                  return _2;
                if (!(this instanceof o2))
                  return new o2(_2);
                if (!r2) {
                  r2 = true;
                  var i2 = Object.keys(e3);
                  Rt(a2, i2), a2.size = i2.length, a2._name = t2, a2._keys = i2, a2._defaultValues = e3;
                }
                this._map = ye(_2);
              }, a2 = o2.prototype = Object.create($r);
              return a2.constructor = o2, o2;
            }
            function Lt(e3, t2, r2) {
              var o2 = Object.create(Object.getPrototypeOf(e3));
              return o2._map = t2, o2.__ownerID = r2, o2;
            }
            function Tt(e3) {
              return e3._name || e3.constructor.name || "Record";
            }
            function Rt(e3, t2) {
              try {
                t2.forEach(Nt.bind(void 0, e3));
              } catch (e4) {
              }
            }
            function Nt(e3, t2) {
              Object.defineProperty(e3, t2, { get: function get$$1() {
                return this.get(t2);
              }, set: function set$$1(e4) {
                Z(this.__ownerID, "Cannot set on an immutable record."), this.set(t2, e4);
              } });
            }
            function Kt(e3) {
              return e3 === null || e3 === void 0 ? Wt() : Ut(e3) && !l(e3) ? e3 : Wt().withMutations(function(t2) {
                var r2 = a(e3);
                le(r2.size), r2.forEach(function(e4) {
                  return t2.add(e4);
                });
              });
            }
            function Ut(e3) {
              return !!(e3 && e3[eo]);
            }
            function Bt(e3, t2) {
              return e3.__ownerID ? (e3.size = t2.size, e3._map = t2, e3) : t2 === e3._map ? e3 : t2.size === 0 ? e3.__empty() : e3.__make(t2);
            }
            function jt(e3, t2) {
              var r2 = Object.create(to);
              return r2.size = e3 ? e3.size : 0, r2._map = e3, r2.__ownerID = t2, r2;
            }
            function Wt() {
              return ro || (ro = jt(ze()));
            }
            function Ht(e3) {
              return e3 === null || e3 === void 0 ? Pt() : Ct(e3) ? e3 : Pt().withMutations(function(t2) {
                var r2 = a(e3);
                le(r2.size), r2.forEach(function(e4) {
                  return t2.add(e4);
                });
              });
            }
            function Ct(e3) {
              return Ut(e3) && l(e3);
            }
            function Yt(e3, t2) {
              var r2 = Object.create(oo);
              return r2.size = e3 ? e3.size : 0, r2._map = e3, r2.__ownerID = t2, r2;
            }
            function Pt() {
              return ao || (ao = Yt(tt()));
            }
            function Jt(e3) {
              return e3 === null || e3 === void 0 ? Qt() : Vt(e3) ? e3 : Qt().unshiftAll(e3);
            }
            function Vt(e3) {
              return !!(e3 && e3[_o]);
            }
            function Xt(e3, t2, r2, o2) {
              var a2 = Object.create(io);
              return a2.size = e3, a2._head = t2, a2.__ownerID = r2, a2.__hash = o2, a2.__altered = false, a2;
            }
            function Qt() {
              return po || (po = Xt(0));
            }
            function Ft(e3, t2) {
              var r2 = function(r3) {
                e3.prototype[r3] = t2[r3];
              };
              return Object.keys(t2).forEach(r2), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t2).forEach(r2), e3;
            }
            function Gt(e3, t2) {
              return t2;
            }
            function Zt(e3, t2) {
              return [t2, e3];
            }
            function $t(e3) {
              return function() {
                return !e3.apply(this, arguments);
              };
            }
            function er(e3) {
              return function() {
                return -e3.apply(this, arguments);
              };
            }
            function tr(e3) {
              return typeof e3 == "string" ? JSON.stringify(e3) : e3 + "";
            }
            function rr() {
              return c(arguments);
            }
            function or(e3, t2) {
              return e3 < t2 ? 1 : e3 > t2 ? -1 : 0;
            }
            function ar(e3) {
              if (e3.size === Infinity)
                return 0;
              var t2 = l(e3), r2 = p(e3), o2 = t2 ? 1 : 0, a2 = e3.__iterate(r2 ? t2 ? function(e4, t3) {
                o2 = 0 | 31 * o2 + ir(_e(e4), _e(t3));
              } : function(e4, t3) {
                o2 = 0 | o2 + ir(_e(e4), _e(t3));
              } : t2 ? function(e4) {
                o2 = 0 | 31 * o2 + _e(e4);
              } : function(e4) {
                o2 = 0 | o2 + _e(e4);
              });
              return _r(a2, o2);
            }
            function _r(e3, t2) {
              return t2 = Ar(t2, 3432918353), t2 = Ar(t2 << 15 | t2 >>> -15, 461845907), t2 = Ar(t2 << 13 | t2 >>> -13, 5), t2 = (0 | t2 + 3864292196) ^ e3, t2 = Ar(t2 ^ t2 >>> 16, 2246822507), t2 = Ar(t2 ^ t2 >>> 13, 3266489909), t2 = ae(t2 ^ t2 >>> 16), t2;
            }
            function ir(e3, t2) {
              return 0 | e3 ^ t2 + 2654435769 + (e3 << 6) + (e3 >> 2);
            }
            var pr = Math.imul, nr = Math.max, sr = Array.prototype.slice;
            e2(r, t), e2(o, t), e2(a, t), t.isIterable = i, t.isKeyed = p, t.isIndexed = n, t.isAssociative = s, t.isOrdered = l, t.Keyed = r, t.Indexed = o, t.Set = a;
            var lr = "@@__IMMUTABLE_ITERABLE__@@", yr = "@@__IMMUTABLE_KEYED__@@", dr = "@@__IMMUTABLE_INDEXED__@@", cr = "@@__IMMUTABLE_ORDERED__@@", ur = "delete", hr = 5, mr = 1 << hr, gr = mr - 1, Sr = {}, Ir = { value: false }, fr = { value: false }, Er = 0, zr = 1, vr = 2, wr = typeof Symbol == "function" && Symbol.iterator, Dr = "@@iterator", xr = wr || Dr;
            E.prototype.toString = function() {
              return "[Iterator]";
            }, E.KEYS = Er, E.VALUES = zr, E.ENTRIES = vr, E.prototype.inspect = E.prototype.toSource = function() {
              return this.toString();
            }, E.prototype[xr] = function() {
              return this;
            }, e2(M, t), M.of = function() {
              return M(arguments);
            }, M.prototype.toSeq = function() {
              return this;
            }, M.prototype.toString = function() {
              return this.__toString("Seq {", "}");
            }, M.prototype.cacheResult = function() {
              return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this;
            }, M.prototype.__iterate = function(e3, t2) {
              return C(this, e3, t2, true);
            }, M.prototype.__iterator = function(e3, t2) {
              return Y(this, e3, t2, true);
            }, e2(k, M), k.prototype.toKeyedSeq = function() {
              return this;
            }, e2(O, M), O.of = function() {
              return O(arguments);
            }, O.prototype.toIndexedSeq = function() {
              return this;
            }, O.prototype.toString = function() {
              return this.__toString("Seq [", "]");
            }, O.prototype.__iterate = function(e3, t2) {
              return C(this, e3, t2, false);
            }, O.prototype.__iterator = function(e3, t2) {
              return Y(this, e3, t2, false);
            }, e2(A, M), A.of = function() {
              return A(arguments);
            }, A.prototype.toSetSeq = function() {
              return this;
            }, M.isSeq = K, M.Keyed = k, M.Set = A, M.Indexed = O;
            var qr = "@@__IMMUTABLE_SEQ__@@";
            M.prototype[qr] = true, e2(L, O), L.prototype.get = function(e3, t2) {
              return this.has(e3) ? this._array[h(this, e3)] : t2;
            }, L.prototype.__iterate = function(e3, t2) {
              for (var r2 = this._array, o2 = r2.length - 1, a2 = 0; a2 <= o2; a2++)
                if (e3(r2[t2 ? o2 - a2 : a2], a2, this) === false)
                  return a2 + 1;
              return a2;
            }, L.prototype.__iterator = function(e3, t2) {
              var r2 = this._array, o2 = r2.length - 1, a2 = 0;
              return new E(function() {
                return a2 > o2 ? w() : z(e3, a2, r2[t2 ? o2 - a2++ : a2++]);
              });
            }, e2(T, k), T.prototype.get = function(e3, t2) {
              return t2 === void 0 || this.has(e3) ? this._object[e3] : t2;
            }, T.prototype.has = function(e3) {
              return this._object.hasOwnProperty(e3);
            }, T.prototype.__iterate = function(e3, t2) {
              for (var r2, o2 = this._object, a2 = this._keys, _2 = a2.length - 1, i2 = 0; i2 <= _2; i2++)
                if (r2 = a2[t2 ? _2 - i2 : i2], e3(o2[r2], r2, this) === false)
                  return i2 + 1;
              return i2;
            }, T.prototype.__iterator = function(e3, t2) {
              var r2 = this._object, o2 = this._keys, a2 = o2.length - 1, _2 = 0;
              return new E(function() {
                var i2 = o2[t2 ? a2 - _2 : _2];
                return _2++ > a2 ? w() : z(e3, i2, r2[i2]);
              });
            }, T.prototype[cr] = true, e2(R, O), R.prototype.__iterateUncached = function(e3, t2) {
              if (t2)
                return this.cacheResult().__iterate(e3, t2);
              var r2 = this._iterable, o2 = x(r2), a2 = 0;
              if (D(o2))
                for (var _2; !(_2 = o2.next()).done && e3(_2.value, a2++, this) !== false; )
                  ;
              return a2;
            }, R.prototype.__iteratorUncached = function(e3, t2) {
              if (t2)
                return this.cacheResult().__iterator(e3, t2);
              var r2 = this._iterable, o2 = x(r2);
              if (!D(o2))
                return new E(w);
              var a2 = 0;
              return new E(function() {
                var t3 = o2.next();
                return t3.done ? t3 : z(e3, a2++, t3.value);
              });
            }, e2(N, O), N.prototype.__iterateUncached = function(e3, t2) {
              if (t2)
                return this.cacheResult().__iterate(e3, t2);
              for (var r2 = this._iterator, o2 = this._iteratorCache, a2 = 0; a2 < o2.length; )
                if (e3(o2[a2], a2++, this) === false)
                  return a2;
              for (var _2, i2; !(_2 = r2.next()).done && (i2 = _2.value, o2[a2] = i2, e3(i2, a2++, this) !== false); )
                ;
              return a2;
            }, N.prototype.__iteratorUncached = function(e3, t2) {
              if (t2)
                return this.cacheResult().__iterator(e3, t2);
              var r2 = this._iterator, o2 = this._iteratorCache, a2 = 0;
              return new E(function() {
                if (a2 >= o2.length) {
                  var t3 = r2.next();
                  if (t3.done)
                    return t3;
                  o2[a2] = t3.value;
                }
                return z(e3, a2, o2[a2++]);
              });
            };
            var br;
            e2(G, O), G.prototype.toString = function() {
              return this.size === 0 ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]";
            }, G.prototype.get = function(e3, t2) {
              return this.has(e3) ? this._value : t2;
            }, G.prototype.includes = function(e3) {
              return Q(this._value, e3);
            }, G.prototype.slice = function(e3, t2) {
              var r2 = this.size;
              return g(e3, t2, r2) ? this : new G(this._value, I(t2, r2) - S(e3, r2));
            }, G.prototype.reverse = function() {
              return this;
            }, G.prototype.indexOf = function(e3) {
              return Q(this._value, e3) ? 0 : -1;
            }, G.prototype.lastIndexOf = function(e3) {
              return Q(this._value, e3) ? this.size : -1;
            }, G.prototype.__iterate = function(e3) {
              for (var t2 = 0; t2 < this.size; t2++)
                if (e3(this._value, t2, this) === false)
                  return t2 + 1;
              return t2;
            }, G.prototype.__iterator = function(e3) {
              var t2 = this, r2 = 0;
              return new E(function() {
                return r2 < t2.size ? z(e3, r2++, t2._value) : w();
              });
            }, G.prototype.equals = function(e3) {
              return e3 instanceof G ? Q(this._value, e3._value) : F(e3);
            };
            var Mr;
            e2($, O), $.prototype.toString = function() {
              return this.size === 0 ? "Range []" : "Range [ " + this._start + "..." + this._end + (this._step === 1 ? "" : " by " + this._step) + " ]";
            }, $.prototype.get = function(e3, t2) {
              return this.has(e3) ? this._start + h(this, e3) * this._step : t2;
            }, $.prototype.includes = function(e3) {
              var t2 = (e3 - this._start) / this._step;
              return 0 <= t2 && t2 < this.size && t2 === Math.floor(t2);
            }, $.prototype.slice = function(e3, t2) {
              return g(e3, t2, this.size) ? this : (e3 = S(e3, this.size), t2 = I(t2, this.size), t2 <= e3 ? new $(0, 0) : new $(this.get(e3, this._end), this.get(t2, this._end), this._step));
            }, $.prototype.indexOf = function(e3) {
              var t2 = e3 - this._start;
              if (t2 % this._step == 0) {
                var r2 = t2 / this._step;
                if (0 <= r2 && r2 < this.size)
                  return r2;
              }
              return -1;
            }, $.prototype.lastIndexOf = function(e3) {
              return this.indexOf(e3);
            }, $.prototype.__iterate = function(e3, t2) {
              for (var r2 = this.size - 1, o2 = this._step, a2 = t2 ? this._start + r2 * o2 : this._start, _2 = 0; _2 <= r2; _2++) {
                if (e3(a2, _2, this) === false)
                  return _2 + 1;
                a2 += t2 ? -o2 : o2;
              }
              return _2;
            }, $.prototype.__iterator = function(e3, t2) {
              var r2 = this.size - 1, o2 = this._step, a2 = t2 ? this._start + r2 * o2 : this._start, _2 = 0;
              return new E(function() {
                var i2 = a2;
                return a2 += t2 ? -o2 : o2, _2 > r2 ? w() : z(e3, _2++, i2);
              });
            }, $.prototype.equals = function(e3) {
              return e3 instanceof $ ? this._start === e3._start && this._end === e3._end && this._step === e3._step : F(this, e3);
            };
            var kr;
            e2(ee, t), e2(te, ee), e2(re, ee), e2(oe, ee), ee.Keyed = te, ee.Indexed = re, ee.Set = oe;
            var Or, Ar = typeof pr == "function" && true ? pr : function(e3, t2) {
              e3 |= 0, t2 |= 0;
              var r2 = 65535 & e3, o2 = 65535 & t2;
              return 0 | r2 * o2 + ((e3 >>> 16) * o2 + r2 * (t2 >>> 16) << 16 >>> 0);
            }, Lr = Object.isExtensible, Tr = function() {
              try {
                return Object.defineProperty({}, "@", {}), true;
              } catch (t2) {
                return false;
              }
            }(), Rr = typeof WeakMap == "function";
            Rr && (Or = /* @__PURE__ */ new WeakMap());
            var Nr = 0, Kr = "__immutablehash__";
            typeof Symbol == "function" && (Kr = Symbol(Kr));
            var Ur = 16, Br = 255, jr = 0, Wr = {};
            e2(ye, te), ye.of = function() {
              var e3 = sr.call(arguments, 0);
              return ze().withMutations(function(t2) {
                for (var r2 = 0; r2 < e3.length; r2 += 2) {
                  if (r2 + 1 >= e3.length)
                    throw new Error("Missing value for key: " + e3[r2]);
                  t2.set(e3[r2], e3[r2 + 1]);
                }
              });
            }, ye.prototype.toString = function() {
              return this.__toString("Map {", "}");
            }, ye.prototype.get = function(e3, t2) {
              return this._root ? this._root.get(0, void 0, e3, t2) : t2;
            }, ye.prototype.set = function(e3, t2) {
              return ve(this, e3, t2);
            }, ye.prototype.setIn = function(e3, t2) {
              return this.updateIn(e3, Sr, function() {
                return t2;
              });
            }, ye.prototype.remove = function(e3) {
              return ve(this, e3, Sr);
            }, ye.prototype.deleteIn = function(e3) {
              return this.updateIn(e3, function() {
                return Sr;
              });
            }, ye.prototype.update = function(e3, t2, r2) {
              return arguments.length === 1 ? e3(this) : this.updateIn([e3], t2, r2);
            }, ye.prototype.updateIn = function(e3, t2, r2) {
              r2 || (r2 = t2, t2 = void 0);
              var o2 = Te(this, Ot(e3), t2, r2);
              return o2 === Sr ? void 0 : o2;
            }, ye.prototype.clear = function() {
              return this.size === 0 ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = true, this) : ze();
            }, ye.prototype.merge = function() {
              return ke(this, void 0, arguments);
            }, ye.prototype.mergeWith = function(e3) {
              var t2 = sr.call(arguments, 1);
              return ke(this, e3, t2);
            }, ye.prototype.mergeIn = function(e3) {
              var t2 = sr.call(arguments, 1);
              return this.updateIn(e3, ze(), function(e4) {
                return typeof e4.merge == "function" ? e4.merge.apply(e4, t2) : t2[t2.length - 1];
              });
            }, ye.prototype.mergeDeep = function() {
              return ke(this, Oe, arguments);
            }, ye.prototype.mergeDeepWith = function(e3) {
              var t2 = sr.call(arguments, 1);
              return ke(this, Ae(e3), t2);
            }, ye.prototype.mergeDeepIn = function(e3) {
              var t2 = sr.call(arguments, 1);
              return this.updateIn(e3, ze(), function(e4) {
                return typeof e4.mergeDeep == "function" ? e4.mergeDeep.apply(e4, t2) : t2[t2.length - 1];
              });
            }, ye.prototype.sort = function(e3) {
              return Ze(ft(this, e3));
            }, ye.prototype.sortBy = function(e3, t2) {
              return Ze(ft(this, t2, e3));
            }, ye.prototype.withMutations = function(e3) {
              var t2 = this.asMutable();
              return e3(t2), t2.wasAltered() ? t2.__ensureOwner(this.__ownerID) : this;
            }, ye.prototype.asMutable = function() {
              return this.__ownerID ? this : this.__ensureOwner(new d());
            }, ye.prototype.asImmutable = function() {
              return this.__ensureOwner();
            }, ye.prototype.wasAltered = function() {
              return this.__altered;
            }, ye.prototype.__iterator = function(e3, t2) {
              return new Se(this, e3, t2);
            }, ye.prototype.__iterate = function(e3, t2) {
              var r2 = this, o2 = 0;
              return this._root && this._root.iterate(function(t3) {
                return o2++, e3(t3[1], t3[0], r2);
              }, t2), o2;
            }, ye.prototype.__ensureOwner = function(e3) {
              return e3 === this.__ownerID ? this : e3 ? Ee(this.size, this._root, e3, this.__hash) : (this.__ownerID = e3, this.__altered = false, this);
            }, ye.isMap = de;
            var Hr = "@@__IMMUTABLE_MAP__@@", Cr = ye.prototype;
            Cr[Hr] = true, Cr[ur] = Cr.remove, Cr.removeIn = Cr.deleteIn, ce.prototype.get = function(e3, t2, r2, o2) {
              for (var a2 = this.entries, _2 = 0, i2 = a2.length; _2 < i2; _2++)
                if (Q(r2, a2[_2][0]))
                  return a2[_2][1];
              return o2;
            }, ce.prototype.update = function(e3, t2, r2, o2, a2, _2, i2) {
              for (var p2 = a2 === Sr, n2 = this.entries, s2 = 0, l2 = n2.length; s2 < l2 && !Q(o2, n2[s2][0]); s2++)
                ;
              var d2 = s2 < l2;
              if (d2 ? n2[s2][1] === a2 : p2)
                return this;
              if (y(i2), (p2 || !d2) && y(_2), !(p2 && n2.length === 1)) {
                if (!d2 && !p2 && n2.length >= Pr)
                  return qe(e3, n2, o2, a2);
                var u2 = e3 && e3 === this.ownerID, h2 = u2 ? n2 : c(n2);
                return d2 ? p2 ? s2 == l2 - 1 ? h2.pop() : h2[s2] = h2.pop() : h2[s2] = [o2, a2] : h2.push([o2, a2]), u2 ? (this.entries = h2, this) : new ce(e3, h2);
              }
            }, ue.prototype.get = function(e3, t2, r2, o2) {
              t2 === void 0 && (t2 = _e(r2));
              var a2 = 1 << ((e3 === 0 ? t2 : t2 >>> e3) & gr), _2 = this.bitmap;
              return (_2 & a2) == 0 ? o2 : this.nodes[Re(_2 & a2 - 1)].get(e3 + hr, t2, r2, o2);
            }, ue.prototype.update = function(e3, t2, r2, o2, a2, _2, i2) {
              r2 === void 0 && (r2 = _e(o2));
              var p2 = (t2 === 0 ? r2 : r2 >>> t2) & gr, n2 = 1 << p2, s2 = this.bitmap, l2 = (s2 & n2) != 0;
              if (!l2 && a2 === Sr)
                return this;
              var y2 = Re(s2 & n2 - 1), d2 = this.nodes, c2 = l2 ? d2[y2] : void 0, u2 = we(c2, e3, t2 + hr, r2, o2, a2, _2, i2);
              if (u2 === c2)
                return this;
              if (!l2 && u2 && d2.length >= Jr)
                return Me(e3, d2, s2, p2, u2);
              if (l2 && !u2 && d2.length === 2 && De(d2[1 ^ y2]))
                return d2[1 ^ y2];
              if (l2 && u2 && d2.length === 1 && De(u2))
                return u2;
              var h2 = e3 && e3 === this.ownerID, m2 = l2 ? u2 ? s2 : s2 ^ n2 : s2 | n2, g2 = l2 ? u2 ? Ne(d2, y2, u2, h2) : Ue(d2, y2, h2) : Ke(d2, y2, u2, h2);
              return h2 ? (this.bitmap = m2, this.nodes = g2, this) : new ue(e3, m2, g2);
            }, he.prototype.get = function(e3, t2, r2, o2) {
              t2 === void 0 && (t2 = _e(r2));
              var a2 = (e3 === 0 ? t2 : t2 >>> e3) & gr, _2 = this.nodes[a2];
              return _2 ? _2.get(e3 + hr, t2, r2, o2) : o2;
            }, he.prototype.update = function(e3, t2, r2, o2, a2, _2, i2) {
              r2 === void 0 && (r2 = _e(o2));
              var p2 = (t2 === 0 ? r2 : r2 >>> t2) & gr, n2 = this.nodes, s2 = n2[p2];
              if (a2 === Sr && !s2)
                return this;
              var l2 = we(s2, e3, t2 + hr, r2, o2, a2, _2, i2);
              if (l2 === s2)
                return this;
              var y2 = this.count;
              if (!s2)
                y2++;
              else if (!l2 && (y2--, y2 < Vr))
                return be(e3, n2, y2, p2);
              var d2 = e3 && e3 === this.ownerID, c2 = Ne(n2, p2, l2, d2);
              return d2 ? (this.count = y2, this.nodes = c2, this) : new he(e3, y2, c2);
            }, me.prototype.get = function(e3, t2, r2, o2) {
              for (var a2 = this.entries, _2 = 0, i2 = a2.length; _2 < i2; _2++)
                if (Q(r2, a2[_2][0]))
                  return a2[_2][1];
              return o2;
            }, me.prototype.update = function(e3, t2, r2, o2, a2, _2, i2) {
              r2 === void 0 && (r2 = _e(o2));
              var p2 = a2 === Sr;
              if (r2 !== this.keyHash)
                return p2 ? this : (y(i2), y(_2), xe(this, e3, t2, r2, [o2, a2]));
              for (var n2 = this.entries, s2 = 0, l2 = n2.length; s2 < l2 && !Q(o2, n2[s2][0]); s2++)
                ;
              var d2 = s2 < l2;
              if (d2 ? n2[s2][1] === a2 : p2)
                return this;
              if (y(i2), (p2 || !d2) && y(_2), p2 && l2 === 2)
                return new ge(e3, this.keyHash, n2[1 ^ s2]);
              var u2 = e3 && e3 === this.ownerID, h2 = u2 ? n2 : c(n2);
              return d2 ? p2 ? s2 == l2 - 1 ? h2.pop() : h2[s2] = h2.pop() : h2[s2] = [o2, a2] : h2.push([o2, a2]), u2 ? (this.entries = h2, this) : new me(e3, this.keyHash, h2);
            }, ge.prototype.get = function(e3, t2, r2, o2) {
              return Q(r2, this.entry[0]) ? this.entry[1] : o2;
            }, ge.prototype.update = function(e3, t2, r2, o2, a2, _2, i2) {
              var p2 = a2 === Sr, n2 = Q(o2, this.entry[0]);
              return (n2 ? a2 === this.entry[1] : p2) ? this : (y(i2), p2) ? void y(_2) : n2 ? e3 && e3 === this.ownerID ? (this.entry[1] = a2, this) : new ge(e3, this.keyHash, [o2, a2]) : (y(_2), xe(this, e3, t2, _e(o2), [o2, a2]));
            }, ce.prototype.iterate = me.prototype.iterate = function(e3, t2) {
              for (var r2 = this.entries, o2 = 0, a2 = r2.length - 1; o2 <= a2; o2++)
                if (e3(r2[t2 ? a2 - o2 : o2]) === false)
                  return false;
            }, ue.prototype.iterate = he.prototype.iterate = function(e3, t2) {
              for (var r2, o2 = this.nodes, a2 = 0, _2 = o2.length - 1; a2 <= _2; a2++)
                if (r2 = o2[t2 ? _2 - a2 : a2], r2 && r2.iterate(e3, t2) === false)
                  return false;
            }, ge.prototype.iterate = function(e3) {
              return e3(this.entry);
            }, e2(Se, E), Se.prototype.next = function() {
              for (var e3 = this._type, t2 = this._stack; t2; ) {
                var r2, o2 = t2.node, a2 = t2.index++;
                if (o2.entry) {
                  if (a2 == 0)
                    return Ie(e3, o2.entry);
                } else if (o2.entries) {
                  if (r2 = o2.entries.length - 1, a2 <= r2)
                    return Ie(e3, o2.entries[this._reverse ? r2 - a2 : a2]);
                } else if (r2 = o2.nodes.length - 1, a2 <= r2) {
                  var _2 = o2.nodes[this._reverse ? r2 - a2 : a2];
                  if (_2) {
                    if (_2.entry)
                      return Ie(e3, _2.entry);
                    t2 = this._stack = fe(_2, t2);
                  }
                  continue;
                }
                t2 = this._stack = this._stack.__prev;
              }
              return w();
            };
            var Yr, Pr = mr / 4, Jr = mr / 2, Vr = mr / 4;
            e2(Be, re), Be.of = function() {
              return this(arguments);
            }, Be.prototype.toString = function() {
              return this.__toString("List [", "]");
            }, Be.prototype.get = function(e3, t2) {
              if (e3 = h(this, e3), 0 <= e3 && e3 < this.size) {
                e3 += this._origin;
                var r2 = Xe(this, e3);
                return r2 && r2.array[e3 & gr];
              }
              return t2;
            }, Be.prototype.set = function(e3, t2) {
              return Pe(this, e3, t2);
            }, Be.prototype.remove = function(e3) {
              return this.has(e3) ? e3 === 0 ? this.shift() : e3 === this.size - 1 ? this.pop() : this.splice(e3, 1) : this;
            }, Be.prototype.insert = function(e3, t2) {
              return this.splice(e3, 0, t2);
            }, Be.prototype.clear = function() {
              return this.size === 0 ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = hr, this._root = this._tail = null, this.__hash = void 0, this.__altered = true, this) : Ye();
            }, Be.prototype.push = function() {
              var e3 = arguments, t2 = this.size;
              return this.withMutations(function(r2) {
                Qe(r2, 0, t2 + e3.length);
                for (var o2 = 0; o2 < e3.length; o2++)
                  r2.set(t2 + o2, e3[o2]);
              });
            }, Be.prototype.pop = function() {
              return Qe(this, 0, -1);
            }, Be.prototype.unshift = function() {
              var e3 = arguments;
              return this.withMutations(function(t2) {
                Qe(t2, -e3.length);
                for (var r2 = 0; r2 < e3.length; r2++)
                  t2.set(r2, e3[r2]);
              });
            }, Be.prototype.shift = function() {
              return Qe(this, 1);
            }, Be.prototype.merge = function() {
              return Fe(this, void 0, arguments);
            }, Be.prototype.mergeWith = function(e3) {
              var t2 = sr.call(arguments, 1);
              return Fe(this, e3, t2);
            }, Be.prototype.mergeDeep = function() {
              return Fe(this, Oe, arguments);
            }, Be.prototype.mergeDeepWith = function(e3) {
              var t2 = sr.call(arguments, 1);
              return Fe(this, Ae(e3), t2);
            }, Be.prototype.setSize = function(e3) {
              return Qe(this, 0, e3);
            }, Be.prototype.slice = function(e3, t2) {
              var r2 = this.size;
              return g(e3, t2, r2) ? this : Qe(this, S(e3, r2), I(t2, r2));
            }, Be.prototype.__iterator = function(e3, t2) {
              var r2 = 0, o2 = He(this, t2);
              return new E(function() {
                var t3 = o2();
                return t3 === Gr ? w() : z(e3, r2++, t3);
              });
            }, Be.prototype.__iterate = function(e3, t2) {
              for (var r2, o2 = 0, a2 = He(this, t2); (r2 = a2()) !== Gr && !(e3(r2, o2++, this) === false); )
                ;
              return o2;
            }, Be.prototype.__ensureOwner = function(e3) {
              return e3 === this.__ownerID ? this : e3 ? Ce(this._origin, this._capacity, this._level, this._root, this._tail, e3, this.__hash) : (this.__ownerID = e3, this);
            }, Be.isList = je;
            var Xr = "@@__IMMUTABLE_LIST__@@", Qr = Be.prototype;
            Qr[Xr] = true, Qr[ur] = Qr.remove, Qr.setIn = Cr.setIn, Qr.deleteIn = Qr.removeIn = Cr.removeIn, Qr.update = Cr.update, Qr.updateIn = Cr.updateIn, Qr.mergeIn = Cr.mergeIn, Qr.mergeDeepIn = Cr.mergeDeepIn, Qr.withMutations = Cr.withMutations, Qr.asMutable = Cr.asMutable, Qr.asImmutable = Cr.asImmutable, Qr.wasAltered = Cr.wasAltered, We.prototype.removeBefore = function(e3, t2, r2) {
              if (r2 === t2 ? 1 << t2 : this.array.length === 0)
                return this;
              var o2 = r2 >>> t2 & gr;
              if (o2 >= this.array.length)
                return new We([], e3);
              var a2, _2 = o2 == 0;
              if (0 < t2) {
                var i2 = this.array[o2];
                if (a2 = i2 && i2.removeBefore(e3, t2 - hr, r2), a2 === i2 && _2)
                  return this;
              }
              if (_2 && !a2)
                return this;
              var p2 = Ve(this, e3);
              if (!_2)
                for (var n2 = 0; n2 < o2; n2++)
                  p2.array[n2] = void 0;
              return a2 && (p2.array[o2] = a2), p2;
            }, We.prototype.removeAfter = function(e3, t2, r2) {
              if (r2 === (t2 ? 1 << t2 : 0) || this.array.length === 0)
                return this;
              var o2 = r2 - 1 >>> t2 & gr;
              if (o2 >= this.array.length)
                return this;
              var a2;
              if (0 < t2) {
                var _2 = this.array[o2];
                if (a2 = _2 && _2.removeAfter(e3, t2 - hr, r2), a2 === _2 && o2 == this.array.length - 1)
                  return this;
              }
              var i2 = Ve(this, e3);
              return i2.array.splice(o2 + 1), a2 && (i2.array[o2] = a2), i2;
            };
            var Fr, Gr = {};
            e2(Ze, ye), Ze.of = function() {
              return this(arguments);
            }, Ze.prototype.toString = function() {
              return this.__toString("OrderedMap {", "}");
            }, Ze.prototype.get = function(e3, t2) {
              var r2 = this._map.get(e3);
              return r2 === void 0 ? t2 : this._list.get(r2)[1];
            }, Ze.prototype.clear = function() {
              return this.size === 0 ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : tt();
            }, Ze.prototype.set = function(e3, t2) {
              return rt(this, e3, t2);
            }, Ze.prototype.remove = function(e3) {
              return rt(this, e3, Sr);
            }, Ze.prototype.wasAltered = function() {
              return this._map.wasAltered() || this._list.wasAltered();
            }, Ze.prototype.__iterate = function(e3, t2) {
              var r2 = this;
              return this._list.__iterate(function(t3) {
                return t3 && e3(t3[1], t3[0], r2);
              }, t2);
            }, Ze.prototype.__iterator = function(e3, t2) {
              return this._list.fromEntrySeq().__iterator(e3, t2);
            }, Ze.prototype.__ensureOwner = function(e3) {
              if (e3 === this.__ownerID)
                return this;
              var t2 = this._map.__ensureOwner(e3), r2 = this._list.__ensureOwner(e3);
              return e3 ? et(t2, r2, e3, this.__hash) : (this.__ownerID = e3, this._map = t2, this._list = r2, this);
            }, Ze.isOrderedMap = $e, Ze.prototype[cr] = true, Ze.prototype[ur] = Ze.prototype.remove;
            var Zr;
            e2(ot, k), ot.prototype.get = function(e3, t2) {
              return this._iter.get(e3, t2);
            }, ot.prototype.has = function(e3) {
              return this._iter.has(e3);
            }, ot.prototype.valueSeq = function() {
              return this._iter.valueSeq();
            }, ot.prototype.reverse = function() {
              var e3 = this, t2 = st(this, true);
              return this._useKeys || (t2.valueSeq = function() {
                return e3._iter.toSeq().reverse();
              }), t2;
            }, ot.prototype.map = function(e3, t2) {
              var r2 = this, o2 = nt(this, e3, t2);
              return this._useKeys || (o2.valueSeq = function() {
                return r2._iter.toSeq().map(e3, t2);
              }), o2;
            }, ot.prototype.__iterate = function(e3, t2) {
              var r2, o2 = this;
              return this._iter.__iterate(this._useKeys ? function(t3, r3) {
                return e3(t3, r3, o2);
              } : (r2 = t2 ? xt(this) : 0, function(a2) {
                return e3(a2, t2 ? --r2 : r2++, o2);
              }), t2);
            }, ot.prototype.__iterator = function(e3, t2) {
              if (this._useKeys)
                return this._iter.__iterator(e3, t2);
              var r2 = this._iter.__iterator(zr, t2), o2 = t2 ? xt(this) : 0;
              return new E(function() {
                var a2 = r2.next();
                return a2.done ? a2 : z(e3, t2 ? --o2 : o2++, a2.value, a2);
              });
            }, ot.prototype[cr] = true, e2(at, O), at.prototype.includes = function(e3) {
              return this._iter.includes(e3);
            }, at.prototype.__iterate = function(e3, t2) {
              var r2 = this, o2 = 0;
              return this._iter.__iterate(function(t3) {
                return e3(t3, o2++, r2);
              }, t2);
            }, at.prototype.__iterator = function(e3, t2) {
              var r2 = this._iter.__iterator(zr, t2), o2 = 0;
              return new E(function() {
                var t3 = r2.next();
                return t3.done ? t3 : z(e3, o2++, t3.value, t3);
              });
            }, e2(_t, A), _t.prototype.has = function(e3) {
              return this._iter.includes(e3);
            }, _t.prototype.__iterate = function(e3, t2) {
              var r2 = this;
              return this._iter.__iterate(function(t3) {
                return e3(t3, t3, r2);
              }, t2);
            }, _t.prototype.__iterator = function(e3, t2) {
              var r2 = this._iter.__iterator(zr, t2);
              return new E(function() {
                var t3 = r2.next();
                return t3.done ? t3 : z(e3, t3.value, t3.value, t3);
              });
            }, e2(it, k), it.prototype.entrySeq = function() {
              return this._iter.toSeq();
            }, it.prototype.__iterate = function(e3, t2) {
              var r2 = this;
              return this._iter.__iterate(function(t3) {
                if (t3) {
                  Dt(t3);
                  var o2 = i(t3);
                  return e3(o2 ? t3.get(1) : t3[1], o2 ? t3.get(0) : t3[0], r2);
                }
              }, t2);
            }, it.prototype.__iterator = function(e3, t2) {
              var r2 = this._iter.__iterator(zr, t2);
              return new E(function() {
                for (; ; ) {
                  var t3 = r2.next();
                  if (t3.done)
                    return t3;
                  var o2 = t3.value;
                  if (o2) {
                    Dt(o2);
                    var a2 = i(o2);
                    return z(e3, a2 ? o2.get(0) : o2[0], a2 ? o2.get(1) : o2[1], t3);
                  }
                }
              });
            }, at.prototype.cacheResult = ot.prototype.cacheResult = _t.prototype.cacheResult = it.prototype.cacheResult = Mt, e2(At, te), At.prototype.toString = function() {
              return this.__toString(Tt(this) + " {", "}");
            }, At.prototype.has = function(e3) {
              return this._defaultValues.hasOwnProperty(e3);
            }, At.prototype.get = function(e3, t2) {
              if (!this.has(e3))
                return t2;
              var r2 = this._defaultValues[e3];
              return this._map ? this._map.get(e3, r2) : r2;
            }, At.prototype.clear = function() {
              if (this.__ownerID)
                return this._map && this._map.clear(), this;
              var e3 = this.constructor;
              return e3._empty || (e3._empty = Lt(this, ze()));
            }, At.prototype.set = function(e3, t2) {
              if (!this.has(e3))
                throw new Error('Cannot set unknown key "' + e3 + '" on ' + Tt(this));
              if (this._map && !this._map.has(e3)) {
                var r2 = this._defaultValues[e3];
                if (t2 === r2)
                  return this;
              }
              var o2 = this._map && this._map.set(e3, t2);
              return this.__ownerID || o2 === this._map ? this : Lt(this, o2);
            }, At.prototype.remove = function(e3) {
              if (!this.has(e3))
                return this;
              var t2 = this._map && this._map.remove(e3);
              return this.__ownerID || t2 === this._map ? this : Lt(this, t2);
            }, At.prototype.wasAltered = function() {
              return this._map.wasAltered();
            }, At.prototype.__iterator = function(e3, t2) {
              var o2 = this;
              return r(this._defaultValues).map(function(e4, t3) {
                return o2.get(t3);
              }).__iterator(e3, t2);
            }, At.prototype.__iterate = function(e3, t2) {
              var o2 = this;
              return r(this._defaultValues).map(function(e4, t3) {
                return o2.get(t3);
              }).__iterate(e3, t2);
            }, At.prototype.__ensureOwner = function(e3) {
              if (e3 === this.__ownerID)
                return this;
              var t2 = this._map && this._map.__ensureOwner(e3);
              return e3 ? Lt(this, t2, e3) : (this.__ownerID = e3, this._map = t2, this);
            };
            var $r = At.prototype;
            $r[ur] = $r.remove, $r.deleteIn = $r.removeIn = Cr.removeIn, $r.merge = Cr.merge, $r.mergeWith = Cr.mergeWith, $r.mergeIn = Cr.mergeIn, $r.mergeDeep = Cr.mergeDeep, $r.mergeDeepWith = Cr.mergeDeepWith, $r.mergeDeepIn = Cr.mergeDeepIn, $r.setIn = Cr.setIn, $r.update = Cr.update, $r.updateIn = Cr.updateIn, $r.withMutations = Cr.withMutations, $r.asMutable = Cr.asMutable, $r.asImmutable = Cr.asImmutable, e2(Kt, oe), Kt.of = function() {
              return this(arguments);
            }, Kt.fromKeys = function(e3) {
              return this(r(e3).keySeq());
            }, Kt.prototype.toString = function() {
              return this.__toString("Set {", "}");
            }, Kt.prototype.has = function(e3) {
              return this._map.has(e3);
            }, Kt.prototype.add = function(e3) {
              return Bt(this, this._map.set(e3, true));
            }, Kt.prototype.remove = function(e3) {
              return Bt(this, this._map.remove(e3));
            }, Kt.prototype.clear = function() {
              return Bt(this, this._map.clear());
            }, Kt.prototype.union = function() {
              var e3 = sr.call(arguments, 0);
              return e3 = e3.filter(function(e4) {
                return e4.size !== 0;
              }), e3.length === 0 ? this : this.size !== 0 || this.__ownerID || e3.length !== 1 ? this.withMutations(function(t2) {
                for (var r2 = 0; r2 < e3.length; r2++)
                  a(e3[r2]).forEach(function(e4) {
                    return t2.add(e4);
                  });
              }) : this.constructor(e3[0]);
            }, Kt.prototype.intersect = function() {
              var e3 = sr.call(arguments, 0);
              if (e3.length === 0)
                return this;
              e3 = e3.map(function(e4) {
                return a(e4);
              });
              var t2 = this;
              return this.withMutations(function(r2) {
                t2.forEach(function(t3) {
                  e3.every(function(e4) {
                    return e4.includes(t3);
                  }) || r2.remove(t3);
                });
              });
            }, Kt.prototype.subtract = function() {
              var e3 = sr.call(arguments, 0);
              if (e3.length === 0)
                return this;
              e3 = e3.map(function(e4) {
                return a(e4);
              });
              var t2 = this;
              return this.withMutations(function(r2) {
                t2.forEach(function(t3) {
                  e3.some(function(e4) {
                    return e4.includes(t3);
                  }) && r2.remove(t3);
                });
              });
            }, Kt.prototype.merge = function() {
              return this.union.apply(this, arguments);
            }, Kt.prototype.mergeWith = function() {
              var e3 = sr.call(arguments, 1);
              return this.union.apply(this, e3);
            }, Kt.prototype.sort = function(e3) {
              return Ht(ft(this, e3));
            }, Kt.prototype.sortBy = function(e3, t2) {
              return Ht(ft(this, t2, e3));
            }, Kt.prototype.wasAltered = function() {
              return this._map.wasAltered();
            }, Kt.prototype.__iterate = function(e3, t2) {
              var r2 = this;
              return this._map.__iterate(function(t3, o2) {
                return e3(o2, o2, r2);
              }, t2);
            }, Kt.prototype.__iterator = function(e3, t2) {
              return this._map.map(function(e4, t3) {
                return t3;
              }).__iterator(e3, t2);
            }, Kt.prototype.__ensureOwner = function(e3) {
              if (e3 === this.__ownerID)
                return this;
              var t2 = this._map.__ensureOwner(e3);
              return e3 ? this.__make(t2, e3) : (this.__ownerID = e3, this._map = t2, this);
            }, Kt.isSet = Ut;
            var eo = "@@__IMMUTABLE_SET__@@", to = Kt.prototype;
            to[eo] = true, to[ur] = to.remove, to.mergeDeep = to.merge, to.mergeDeepWith = to.mergeWith, to.withMutations = Cr.withMutations, to.asMutable = Cr.asMutable, to.asImmutable = Cr.asImmutable, to.__empty = Wt, to.__make = jt;
            var ro;
            e2(Ht, Kt), Ht.of = function() {
              return this(arguments);
            }, Ht.fromKeys = function(e3) {
              return this(r(e3).keySeq());
            }, Ht.prototype.toString = function() {
              return this.__toString("OrderedSet {", "}");
            }, Ht.isOrderedSet = Ct;
            var oo = Ht.prototype;
            oo[cr] = true, oo.__empty = Pt, oo.__make = Yt;
            var ao;
            e2(Jt, re), Jt.of = function() {
              return this(arguments);
            }, Jt.prototype.toString = function() {
              return this.__toString("Stack [", "]");
            }, Jt.prototype.get = function(e3, t2) {
              var r2 = this._head;
              for (e3 = h(this, e3); r2 && e3--; )
                r2 = r2.next;
              return r2 ? r2.value : t2;
            }, Jt.prototype.peek = function() {
              return this._head && this._head.value;
            }, Jt.prototype.push = function() {
              if (arguments.length === 0)
                return this;
              for (var e3 = this.size + arguments.length, t2 = this._head, r2 = arguments.length - 1; 0 <= r2; r2--)
                t2 = { value: arguments[r2], next: t2 };
              return this.__ownerID ? (this.size = e3, this._head = t2, this.__hash = void 0, this.__altered = true, this) : Xt(e3, t2);
            }, Jt.prototype.pushAll = function(e3) {
              if (e3 = o(e3), e3.size === 0)
                return this;
              le(e3.size);
              var t2 = this.size, r2 = this._head;
              return e3.reverse().forEach(function(e4) {
                t2++, r2 = { value: e4, next: r2 };
              }), this.__ownerID ? (this.size = t2, this._head = r2, this.__hash = void 0, this.__altered = true, this) : Xt(t2, r2);
            }, Jt.prototype.pop = function() {
              return this.slice(1);
            }, Jt.prototype.unshift = function() {
              return this.push.apply(this, arguments);
            }, Jt.prototype.unshiftAll = function(e3) {
              return this.pushAll(e3);
            }, Jt.prototype.shift = function() {
              return this.pop.apply(this, arguments);
            }, Jt.prototype.clear = function() {
              return this.size === 0 ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = true, this) : Qt();
            }, Jt.prototype.slice = function(e3, t2) {
              if (g(e3, t2, this.size))
                return this;
              var r2 = S(e3, this.size), o2 = I(t2, this.size);
              if (o2 !== this.size)
                return re.prototype.slice.call(this, e3, t2);
              for (var a2 = this.size - r2, _2 = this._head; r2--; )
                _2 = _2.next;
              return this.__ownerID ? (this.size = a2, this._head = _2, this.__hash = void 0, this.__altered = true, this) : Xt(a2, _2);
            }, Jt.prototype.__ensureOwner = function(e3) {
              return e3 === this.__ownerID ? this : e3 ? Xt(this.size, this._head, e3, this.__hash) : (this.__ownerID = e3, this.__altered = false, this);
            }, Jt.prototype.__iterate = function(e3, t2) {
              if (t2)
                return this.reverse().__iterate(e3);
              for (var r2 = 0, o2 = this._head; o2 && !(e3(o2.value, r2++, this) === false); )
                o2 = o2.next;
              return r2;
            }, Jt.prototype.__iterator = function(e3, t2) {
              if (t2)
                return this.reverse().__iterator(e3);
              var r2 = 0, o2 = this._head;
              return new E(function() {
                if (o2) {
                  var t3 = o2.value;
                  return o2 = o2.next, z(e3, r2++, t3);
                }
                return w();
              });
            }, Jt.isStack = Vt;
            var _o = "@@__IMMUTABLE_STACK__@@", io = Jt.prototype;
            io[_o] = true, io.withMutations = Cr.withMutations, io.asMutable = Cr.asMutable, io.asImmutable = Cr.asImmutable, io.wasAltered = Cr.wasAltered;
            var po;
            t.Iterator = E, Ft(t, { toArray: function toArray$$1() {
              le(this.size);
              var e3 = Array(this.size || 0);
              return this.valueSeq().__iterate(function(t2, r2) {
                e3[r2] = t2;
              }), e3;
            }, toIndexedSeq: function toIndexedSeq() {
              return new at(this);
            }, toJS: function toJS() {
              return this.toSeq().map(function(e3) {
                return e3 && typeof e3.toJS == "function" ? e3.toJS() : e3;
              }).__toJS();
            }, toJSON: function toJSON() {
              return this.toSeq().map(function(e3) {
                return e3 && typeof e3.toJSON == "function" ? e3.toJSON() : e3;
              }).__toJS();
            }, toKeyedSeq: function toKeyedSeq() {
              return new ot(this, true);
            }, toMap: function toMap() {
              return ye(this.toKeyedSeq());
            }, toObject: function toObject() {
              le(this.size);
              var e3 = {};
              return this.__iterate(function(t2, r2) {
                e3[r2] = t2;
              }), e3;
            }, toOrderedMap: function toOrderedMap() {
              return Ze(this.toKeyedSeq());
            }, toOrderedSet: function toOrderedSet() {
              return Ht(p(this) ? this.valueSeq() : this);
            }, toSet: function toSet() {
              return Kt(p(this) ? this.valueSeq() : this);
            }, toSetSeq: function toSetSeq() {
              return new _t(this);
            }, toSeq: function toSeq() {
              return n(this) ? this.toIndexedSeq() : p(this) ? this.toKeyedSeq() : this.toSetSeq();
            }, toStack: function toStack() {
              return Jt(p(this) ? this.valueSeq() : this);
            }, toList: function toList() {
              return Be(p(this) ? this.valueSeq() : this);
            }, toString: function toString2() {
              return "[Iterable]";
            }, __toString: function __toString(e3, t2) {
              return this.size === 0 ? e3 + t2 : e3 + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + t2;
            }, concat: function concat() {
              var e3 = sr.call(arguments, 0);
              return wt(this, mt(this, e3));
            }, includes: function includes(e3) {
              return this.some(function(t2) {
                return Q(t2, e3);
              });
            }, entries: function entries() {
              return this.__iterator(vr);
            }, every: function every(e3, t2) {
              le(this.size);
              var r2 = true;
              return this.__iterate(function(o2, a2, _2) {
                if (!e3.call(t2, o2, a2, _2))
                  return r2 = false, false;
              }), r2;
            }, filter: function filter(e3, t2) {
              return wt(this, lt(this, e3, t2, true));
            }, find: function find(e3, t2, r2) {
              var o2 = this.findEntry(e3, t2);
              return o2 ? o2[1] : r2;
            }, forEach: function forEach(e3, t2) {
              return le(this.size), this.__iterate(t2 ? e3.bind(t2) : e3);
            }, join: function join(e3) {
              le(this.size), e3 = e3 === void 0 ? "," : "" + e3;
              var t2 = "", r2 = true;
              return this.__iterate(function(o2) {
                r2 ? r2 = false : t2 += e3, t2 += o2 !== null && o2 !== void 0 ? o2.toString() : "";
              }), t2;
            }, keys: function keys() {
              return this.__iterator(Er);
            }, map: function map2(e3, t2) {
              return wt(this, nt(this, e3, t2));
            }, reduce: function reduce(e3, t2, r2) {
              le(this.size);
              var o2, a2;
              return 2 > arguments.length ? a2 = true : o2 = t2, this.__iterate(function(t3, _2, i2) {
                a2 ? (a2 = false, o2 = t3) : o2 = e3.call(r2, o2, t3, _2, i2);
              }), o2;
            }, reduceRight: function reduceRight() {
              var e3 = this.toKeyedSeq().reverse();
              return e3.reduce.apply(e3, arguments);
            }, reverse: function reverse() {
              return wt(this, st(this, true));
            }, slice: function slice(e3, t2) {
              return wt(this, ct(this, e3, t2, true));
            }, some: function some(e3, t2) {
              return !this.every($t(e3), t2);
            }, sort: function sort(e3) {
              return wt(this, ft(this, e3));
            }, values: function values() {
              return this.__iterator(zr);
            }, butLast: function butLast() {
              return this.slice(0, -1);
            }, isEmpty: function isEmpty() {
              return this.size === void 0 ? !this.some(function() {
                return true;
              }) : this.size === 0;
            }, count: function count(e3, t2) {
              return u(e3 ? this.toSeq().filter(e3, t2) : this);
            }, countBy: function countBy(e3, t2) {
              return yt(this, e3, t2);
            }, equals: function equals(e3) {
              return F(this, e3);
            }, entrySeq: function entrySeq() {
              var e3 = this;
              if (e3._cache)
                return new L(e3._cache);
              var t2 = e3.toSeq().map(Zt).toIndexedSeq();
              return t2.fromEntrySeq = function() {
                return e3.toSeq();
              }, t2;
            }, filterNot: function filterNot(e3, t2) {
              return this.filter($t(e3), t2);
            }, findEntry: function findEntry(e3, t2, r2) {
              var o2 = r2;
              return this.__iterate(function(r3, a2, _2) {
                if (e3.call(t2, r3, a2, _2))
                  return o2 = [a2, r3], false;
              }), o2;
            }, findKey: function findKey(e3, t2) {
              var r2 = this.findEntry(e3, t2);
              return r2 && r2[0];
            }, findLast: function findLast(e3, t2, r2) {
              return this.toKeyedSeq().reverse().find(e3, t2, r2);
            }, findLastEntry: function findLastEntry(e3, t2, r2) {
              return this.toKeyedSeq().reverse().findEntry(e3, t2, r2);
            }, findLastKey: function findLastKey(e3, t2) {
              return this.toKeyedSeq().reverse().findKey(e3, t2);
            }, first: function first() {
              return this.find(m);
            }, flatMap: function flatMap(e3, t2) {
              return wt(this, St(this, e3, t2));
            }, flatten: function flatten(e3) {
              return wt(this, gt(this, e3, true));
            }, fromEntrySeq: function fromEntrySeq() {
              return new it(this);
            }, get: function get$$1(e3, t2) {
              return this.find(function(t3, r2) {
                return Q(r2, e3);
              }, void 0, t2);
            }, getIn: function getIn(e3, t2) {
              for (var r2, o2, a2 = this, _2 = Ot(e3); !(r2 = _2.next()).done; )
                if (o2 = r2.value, a2 = a2 && a2.get ? a2.get(o2, Sr) : Sr, a2 === Sr)
                  return t2;
              return a2;
            }, groupBy: function groupBy(e3, t2) {
              return dt(this, e3, t2);
            }, has: function has(e3) {
              return this.get(e3, Sr) !== Sr;
            }, hasIn: function hasIn(e3) {
              return this.getIn(e3, Sr) !== Sr;
            }, isSubset: function isSubset(e3) {
              return e3 = typeof e3.includes == "function" ? e3 : t(e3), this.every(function(t2) {
                return e3.includes(t2);
              });
            }, isSuperset: function isSuperset(e3) {
              return e3 = typeof e3.isSubset == "function" ? e3 : t(e3), e3.isSubset(this);
            }, keyOf: function keyOf(e3) {
              return this.findKey(function(t2) {
                return Q(t2, e3);
              });
            }, keySeq: function keySeq() {
              return this.toSeq().map(Gt).toIndexedSeq();
            }, last: function last() {
              return this.toSeq().reverse().first();
            }, lastKeyOf: function lastKeyOf(e3) {
              return this.toKeyedSeq().reverse().keyOf(e3);
            }, max: function max(e3) {
              return Et(this, e3);
            }, maxBy: function maxBy(e3, t2) {
              return Et(this, t2, e3);
            }, min: function min(e3) {
              return Et(this, e3 ? er(e3) : or);
            }, minBy: function minBy(e3, t2) {
              return Et(this, t2 ? er(t2) : or, e3);
            }, rest: function rest() {
              return this.slice(1);
            }, skip: function skip(e3) {
              return this.slice(nr(0, e3));
            }, skipLast: function skipLast(e3) {
              return wt(this, this.toSeq().reverse().skip(e3).reverse());
            }, skipWhile: function skipWhile(e3, t2) {
              return wt(this, ht(this, e3, t2, true));
            }, skipUntil: function skipUntil(e3, t2) {
              return this.skipWhile($t(e3), t2);
            }, sortBy: function sortBy(e3, t2) {
              return wt(this, ft(this, t2, e3));
            }, take: function take(e3) {
              return this.slice(0, nr(0, e3));
            }, takeLast: function takeLast(e3) {
              return wt(this, this.toSeq().reverse().take(e3).reverse());
            }, takeWhile: function takeWhile(e3, t2) {
              return wt(this, ut(this, e3, t2));
            }, takeUntil: function takeUntil(e3, t2) {
              return this.takeWhile($t(e3), t2);
            }, valueSeq: function valueSeq() {
              return this.toIndexedSeq();
            }, hashCode: function hashCode() {
              return this.__hash || (this.__hash = ar(this));
            } });
            var no = t.prototype;
            no[lr] = true, no[xr] = no.values, no.__toJS = no.toArray, no.__toStringMapper = tr, no.inspect = no.toSource = function() {
              return this.toString();
            }, no.chain = no.flatMap, no.contains = no.includes, Ft(r, { flip: function flip() {
              return wt(this, pt(this));
            }, mapEntries: function mapEntries(e3, t2) {
              var r2 = this, o2 = 0;
              return wt(this, this.toSeq().map(function(a2, _2) {
                return e3.call(t2, [_2, a2], o2++, r2);
              }).fromEntrySeq());
            }, mapKeys: function mapKeys(e3, t2) {
              var r2 = this;
              return wt(this, this.toSeq().flip().map(function(o2, a2) {
                return e3.call(t2, o2, a2, r2);
              }).flip());
            } });
            var so = r.prototype;
            so[yr] = true, so[xr] = no.entries, so.__toJS = no.toObject, so.__toStringMapper = function(e3, t2) {
              return JSON.stringify(t2) + ": " + tr(e3);
            }, Ft(o, { toKeyedSeq: function toKeyedSeq() {
              return new ot(this, false);
            }, filter: function filter(e3, t2) {
              return wt(this, lt(this, e3, t2, false));
            }, findIndex: function findIndex(e3, t2) {
              var r2 = this.findEntry(e3, t2);
              return r2 ? r2[0] : -1;
            }, indexOf: function indexOf(e3) {
              var t2 = this.keyOf(e3);
              return t2 === void 0 ? -1 : t2;
            }, lastIndexOf: function lastIndexOf(e3) {
              var t2 = this.lastKeyOf(e3);
              return t2 === void 0 ? -1 : t2;
            }, reverse: function reverse() {
              return wt(this, st(this, false));
            }, slice: function slice(e3, t2) {
              return wt(this, ct(this, e3, t2, false));
            }, splice: function splice(e3, t2) {
              var r2 = arguments.length;
              if (t2 = nr(0 | t2, 0), r2 === 0 || r2 === 2 && !t2)
                return this;
              e3 = S(e3, 0 > e3 ? this.count() : this.size);
              var o2 = this.slice(0, e3);
              return wt(this, r2 === 1 ? o2 : o2.concat(c(arguments, 2), this.slice(e3 + t2)));
            }, findLastIndex: function findLastIndex(e3, t2) {
              var r2 = this.findLastEntry(e3, t2);
              return r2 ? r2[0] : -1;
            }, first: function first() {
              return this.get(0);
            }, flatten: function flatten(e3) {
              return wt(this, gt(this, e3, false));
            }, get: function get$$1(e3, t2) {
              return e3 = h(this, e3), 0 > e3 || this.size === Infinity || this.size !== void 0 && e3 > this.size ? t2 : this.find(function(t3, r2) {
                return r2 === e3;
              }, void 0, t2);
            }, has: function has(e3) {
              return e3 = h(this, e3), 0 <= e3 && (this.size === void 0 ? this.indexOf(e3) !== -1 : this.size === Infinity || e3 < this.size);
            }, interpose: function interpose(e3) {
              return wt(this, It(this, e3));
            }, interleave: function interleave() {
              var e3 = [this].concat(c(arguments)), t2 = vt(this.toSeq(), O.of, e3), r2 = t2.flatten(true);
              return t2.size && (r2.size = t2.size * e3.length), wt(this, r2);
            }, keySeq: function keySeq() {
              return $(0, this.size);
            }, last: function last() {
              return this.get(-1);
            }, skipWhile: function skipWhile(e3, t2) {
              return wt(this, ht(this, e3, t2, false));
            }, zip: function zip() {
              var e3 = [this].concat(c(arguments));
              return wt(this, vt(this, rr, e3));
            }, zipWith: function zipWith(e3) {
              var t2 = c(arguments);
              return t2[0] = this, wt(this, vt(this, e3, t2));
            } }), o.prototype[dr] = true, o.prototype[cr] = true, Ft(a, { get: function get$$1(e3, t2) {
              return this.has(e3) ? e3 : t2;
            }, includes: function includes(e3) {
              return this.has(e3);
            }, keySeq: function keySeq() {
              return this.valueSeq();
            } }), a.prototype.has = no.includes, a.prototype.contains = a.prototype.includes, Ft(k, r.prototype), Ft(O, o.prototype), Ft(A, a.prototype), Ft(te, r.prototype), Ft(re, o.prototype), Ft(oe, a.prototype);
            return { Iterable: t, Seq: M, Collection: ee, Map: ye, OrderedMap: Ze, List: Be, Stack: Jt, Set: Kt, OrderedSet: Ht, Record: At, Range: $, Repeat: G, is: Q, fromJS: P };
          });
        });
        var typed = createCommonjsModule(function(a, b) {
          (function(a2, c) {
            c(b, immutable);
          })(commonjsGlobal, function(a2) {
            "use strict";
            function b2(a3, b3) {
              for (var c2 = Object.getOwnPropertyNames(b3), d2 = 0; d2 < c2.length; d2++) {
                var e2 = c2[d2], f2 = Object.getOwnPropertyDescriptor(b3, e2);
                f2 && f2.configurable && a3[e2] === void 0 && Object.defineProperty(a3, e2, f2);
              }
              return a3;
            }
            function c(a3, b3) {
              if (!(a3 instanceof b3))
                throw new TypeError("Cannot call a class as a function");
            }
            function d(a3, c2) {
              if (typeof c2 != "function" && c2 !== null)
                throw new TypeError("Super expression must either be null or a function, not " + (typeof c2 == "undefined" ? "undefined" : _typeof(c2)));
              a3.prototype = Object.create(c2 && c2.prototype, { constructor: { value: a3, enumerable: false, writable: true, configurable: true } }), c2 && (Object.setPrototypeOf ? Object.setPrototypeOf(a3, c2) : b2(a3, c2));
            }
            function e() {
            }
            var f = function() {
              function a3(a4, b3) {
                for (var c2, d2 = 0; d2 < b3.length; d2++)
                  c2 = b3[d2], c2.enumerable = c2.enumerable || false, c2.configurable = true, "value" in c2 && (c2.writable = true), Object.defineProperty(a4, c2.key, c2);
              }
              return function(b3, c2, d2) {
                return c2 && a3(b3.prototype, c2), d2 && a3(b3, d2), b3;
              };
            }(), g = function(a3, b3, c2) {
              var d2 = true;
              _function:
                for (; d2; ) {
                  var e2 = a3, f2 = b3, g2 = c2;
                  d2 = false, e2 === null && (e2 = Function.prototype);
                  var h2 = Object.getOwnPropertyDescriptor(e2, f2);
                  if (h2 === void 0) {
                    var i2 = Object.getPrototypeOf(e2);
                    if (i2 === null)
                      return;
                    a3 = i2, b3 = f2, c2 = g2, d2 = true, h2 = i2 = void 0;
                    continue _function;
                  } else {
                    if ("value" in h2)
                      return h2.value;
                    var j2 = h2.get;
                    return j2 === void 0 ? void 0 : j2.call(g2);
                  }
                }
            };
            if (typeof h == "undefined") {
              var h = function(a3) {
                return "@@" + a3;
              };
              h["for"] = h;
            }
            a2.construct = function(a3) {
              return e.prototype = a3.constructor.prototype, new e();
            };
            var i = h["for"]("typed/type"), j = h["for"]("typed/store"), k = h["for"]("typed/empty"), l = h["for"]("typed/type/maybe"), m = h["for"]("typed/type/default"), n = h["for"]("typed/type/label"), o = h["for"]("transducer/init"), p = h["for"]("transducer/result"), q = h["for"]("transducer/step"), r = h["for"]("typed/type/read"), s = h["for"]("typed/type/parse"), t = h("typed/type/name"), u = h("typed/type/signature"), v = function(a3, b3, e2) {
              var f2 = function(a4) {
                function b4(a5) {
                  c(this, b4), g(Object.getPrototypeOf(b4.prototype), "constructor", this).call(this), this[m] = a5;
                }
                return d(b4, a4), b4;
              }(x), h2 = f2.prototype;
              h2[m] = e2, h2[s] = b3, h2[n] = a3;
              var i2 = function(a4) {
                return a4 === void 0 ? h2 : new f2(a4);
              };
              return i2.prototype = h2, i2;
            };
            a2.Typed = v, v.label = n, v.defaultValue = m, v.read = r, v.typeName = t, v.typeSignature = u, v.type = i, v.store = j, v.init = o, v.result = p, v.step = q, v.DELETE = "delete", v.empty = k;
            var w = function(a3) {
              return a3[t]();
            }, x = function() {
              function a3() {
                c(this, a3);
              }
              return f(a3, [{ key: v.read, value: function() {
                var a4 = 0 >= arguments.length || arguments[0] === void 0 ? this[m] : arguments[0];
                return this[s](a4);
              } }, { key: v.parse, value: function() {
                throw TypeError('Type implementation must implement "[read.symbol]" method');
              } }, { key: v.typeName, value: function() {
                var a4 = this[n], b3 = this[m];
                return b3 === void 0 ? a4 : a4 + "(" + JSON.stringify(b3) + ")";
              } }]), a3;
            }();
            a2.Type = x;
            var y = Object.prototype, z = Array.isArray || function(a3) {
              return y.toString.call(a3) === "[object Array]";
            }, A = function(a3) {
              return y.toString.call(a3) === "[object RegExp]";
            }, B = function(a3) {
              var b3 = 1 >= arguments.length || arguments[1] === void 0 ? typeof a3 == "undefined" ? "undefined" : _typeof(a3) : arguments[1];
              return function() {
                return a3 === void 0 ? a3 : a3 === null ? a3 : a3[r] ? a3 : a3.prototype && a3.prototype[r] ? a3.prototype : b3 === "number" ? new v.Number(a3) : b3 === "string" ? new v.String(a3) : b3 === "boolean" ? new v.Boolean(a3) : b3 === "symbol" ? new v.Symbol(a3) : z(a3) ? v.Array(a3) : A(a3) ? new v.RegExp(a3) : a3 === String ? v.String.prototype : a3 === Number ? v.Number.prototype : a3 === Boolean ? v.Boolean.prototype : a3 === RegExp ? v.RegExp.prototype : a3 === Array ? v.Array.prototype : a3 === h ? v.Symbol.prototype : a3 === Date ? v.Date.prototype : C;
              }();
            };
            a2.typeOf = B;
            var C = v("Any", function(a3) {
              return a3;
            })();
            a2.Any = C, v.Any = C, v.Number = v("Number", function(a3) {
              return typeof a3 == "number" ? a3 : TypeError('"' + a3 + '" is not a number');
            }), v.String = v("String", function(a3) {
              return typeof a3 == "string" ? a3 : TypeError('"' + a3 + '" is not a string');
            }), v.Symbol = v("Symbol", function(a3) {
              return (typeof a3 == "undefined" ? "undefined" : _typeof(a3)) === "symbol" ? a3 : TypeError('"' + a3 + '" is not a symbol');
            }), v.Array = v("Array", function(a3) {
              return z(a3) ? a3 : TypeError('"' + a3 + '" is not an array');
            }), v.RegExp = v("RegExp", function(a3) {
              return a3 instanceof RegExp ? a3 : TypeError('"' + a3 + '" is not a regexp');
            }), v.Boolean = v("Boolean", function(a3) {
              return !(a3 !== true) || a3 !== false && TypeError('"' + a3 + '" is not a boolean');
            }), v.Date = v("Date", function(a3) {
              var b3 = new Date(a3);
              return isNaN(b3.valueOf()) ? new TypeError('"' + a3 + '" is not a valid date.') : b3;
            });
            var D = function(a3) {
              function b3(a4) {
                c(this, b3), g(Object.getPrototypeOf(b3.prototype), "constructor", this).call(this), this[i] = a4;
              }
              return d(b3, a3), f(b3, [{ key: v.typeName, value: function() {
                return "Maybe(" + this[i][t]() + ")";
              } }, { key: v.read, value: function(a4) {
                var b4 = a4 == null ? null : this[i][r](a4);
                return b4 instanceof TypeError ? TypeError('"' + a4 + '" is not nully nor it is of ' + this[i][t]() + " type") : b4;
              } }]), b3;
            }(x), E = function(a3) {
              var b3 = B(a3);
              if (b3 === C)
                throw TypeError(a3 + " is not a valid type");
              return b3[l] || (b3[l] = new D(b3));
            };
            a2.Maybe = E, E.Type = D;
            var F = function(a3) {
              function b3(a4) {
                c(this, b3), g(Object.getPrototypeOf(b3.prototype), "constructor", this).call(this), this[i] = a4;
              }
              return d(b3, a3), f(b3, [{ key: v.typeName, value: function() {
                return "Union(" + this[i].map(w).join(", ") + ")";
              } }, { key: v.read, value: function(a4) {
                for (var b4, c2 = this[i], d2 = c2.length, e2 = 0; e2 < d2; ) {
                  if (b4 = c2[e2], a4 instanceof b4.constructor)
                    return a4;
                  ++e2;
                }
                for (e2 = 0; e2 < d2; ) {
                  var f2 = c2[e2][r](a4);
                  if (!(f2 instanceof TypeError))
                    return f2;
                  ++e2;
                }
                return TypeError('"' + a4 + '" does not satisfy ' + this[t]() + " type");
              } }]), b3;
            }(x), G = function(a3, b3) {
              return a3.filter(function(a4) {
                return 0 > b3.indexOf(a4);
              });
            }, H = function(a3, b3) {
              if (a3.length > b3.length) {
                var c2 = G(b3, a3);
                return c2.length === 0 ? a3 : a3.concat(c2);
              }
              var c2 = G(a3, b3);
              return c2.length === 0 ? b3 : c2.concat(b3);
            }, I = function() {
              for (var a3 = arguments.length, b3 = Array(a3), c2 = 0; c2 < a3; c2++)
                b3[c2] = arguments[c2];
              var d2 = b3.length;
              if (d2 === 0)
                throw TypeError("Union must be of at at least one type");
              for (var e2 = null, f2 = null, g2 = 0; g2 < d2; ) {
                var h2 = B(b3[g2]);
                if (h2 === C)
                  return C;
                if (!e2)
                  f2 = h2, e2 = f2 instanceof F ? f2[i] : [h2];
                else if (0 > e2.indexOf(h2))
                  if (h2 instanceof F) {
                    var j2 = H(e2, h2[i]);
                    j2 === h2[i] ? (f2 = h2, e2 = j2) : j2 !== e2 && (f2 = null, e2 = j2);
                  } else
                    f2 = null, e2.push(h2);
                ++g2;
              }
              return f2 ? f2 : new F(e2);
            };
            a2.Union = I, I.Type = F, v.Number.Range = function(a3, b3, c2) {
              return b3 === void 0 && (b3 = Infinity), v("Typed.Number.Range(" + a3 + ".." + b3 + ")", function(c3) {
                return typeof c3 == "number" ? c3 >= a3 && c3 <= b3 ? c3 : TypeError('"' + c3 + `" isn't in the range of ` + a3 + ".." + b3) : TypeError('"' + c3 + '" is not a number');
              }, c2);
            };
          });
        });
        var record = createCommonjsModule(function(a, b) {
          (function(a2, c) {
            c(b, typed, immutable);
          })(commonjsGlobal, function(a2, b2, c) {
            "use strict";
            function d(a3, b3) {
              for (var c2 = Object.getOwnPropertyNames(b3), d2 = 0; d2 < c2.length; d2++) {
                var e2 = c2[d2], f2 = Object.getOwnPropertyDescriptor(b3, e2);
                f2 && f2.configurable && a3[e2] === void 0 && Object.defineProperty(a3, e2, f2);
              }
              return a3;
            }
            function e(a3, b3, c2) {
              return b3 in a3 ? Object.defineProperty(a3, b3, { value: c2, enumerable: true, configurable: true, writable: true }) : a3[b3] = c2, a3;
            }
            function f(a3, b3) {
              if (!(a3 instanceof b3))
                throw new TypeError("Cannot call a class as a function");
            }
            function g(a3, b3) {
              if (typeof b3 != "function" && b3 !== null)
                throw new TypeError("Super expression must either be null or a function, not " + (typeof b3 == "undefined" ? "undefined" : _typeof(b3)));
              a3.prototype = Object.create(b3 && b3.prototype, { constructor: { value: a3, enumerable: false, writable: true, configurable: true } }), b3 && (Object.setPrototypeOf ? Object.setPrototypeOf(a3, b3) : d(a3, b3));
            }
            var h = function() {
              function a3(a4, b3) {
                var c2, d2 = [], e2 = true, f2 = false;
                try {
                  for (var g2, h2 = a4[Symbol.iterator](); !(e2 = (g2 = h2.next()).done) && (d2.push(g2.value), !(b3 && d2.length === b3)); e2 = true)
                    ;
                } catch (a5) {
                  f2 = true, c2 = a5;
                } finally {
                  try {
                    !e2 && h2["return"] && h2["return"]();
                  } finally {
                    if (f2)
                      throw c2;
                  }
                }
                return d2;
              }
              return function(b3, c2) {
                if (Array.isArray(b3))
                  return b3;
                if (Symbol.iterator in Object(b3))
                  return a3(b3, c2);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              };
            }(), i = function() {
              function a3(a4, b3) {
                for (var c2, d2 = 0; d2 < b3.length; d2++)
                  c2 = b3[d2], c2.enumerable = c2.enumerable || false, c2.configurable = true, "value" in c2 && (c2.writable = true), Object.defineProperty(a4, c2.key, c2);
              }
              return function(b3, c2, d2) {
                return c2 && a3(b3.prototype, c2), d2 && a3(b3, d2), b3;
              };
            }(), j = function(a3, b3, c2) {
              var d2 = true;
              _function:
                for (; d2; ) {
                  var e2 = a3, f2 = b3, g2 = c2;
                  d2 = false, e2 === null && (e2 = Function.prototype);
                  var h2 = Object.getOwnPropertyDescriptor(e2, f2);
                  if (h2 === void 0) {
                    var i2 = Object.getPrototypeOf(e2);
                    if (i2 === null)
                      return;
                    a3 = i2, b3 = f2, c2 = g2, d2 = true, h2 = i2 = void 0;
                    continue _function;
                  } else {
                    if ("value" in h2)
                      return h2.value;
                    var j2 = h2.get;
                    return j2 === void 0 ? void 0 : j2.call(g2);
                  }
                }
            }, k = c.Iterable.Keyed, l = function(a3) {
              return function() {
                return this.get(a3);
              };
            }, m = function(a3) {
              return function(b3) {
                if (!this.__ownerID)
                  throw TypeError("Cannot set on an immutable record.");
                this.set(a3, b3);
              };
            }, n = b2.Typed.store, o = b2.Typed.type, p = b2.Typed.step, q = b2.Typed.init, r = b2.Typed.result, s = b2.Typed.read, t = b2.Typed.label, u = b2.Typed.empty, v = b2.Typed.typeName, w = b2.Typed.typeSignature, x = function() {
            };
            x.prototype = c.Iterable.Keyed.prototype;
            var y = function(a3) {
              function d2() {
                f(this, d2), j(Object.getPrototypeOf(d2.prototype), "constructor", this).call(this);
              }
              return g(d2, a3), i(d2, [{ key: b2.Typed.init, value: function() {
                return (0, b2.construct)(this).asMutable();
              } }, { key: b2.Typed.result, value: function(a4) {
                return a4.asImmutable();
              } }, { key: b2.Typed.read, value: function(a4) {
                var b3 = this.constructor;
                if (a4 && a4 instanceof b3)
                  return a4;
                if (a4 === null || a4 && (typeof a4 == "undefined" ? "undefined" : _typeof(a4)) !== "object")
                  return TypeError('Invalid data structure "' + a4 + '" was passed to ' + this[v]());
                var d3 = (0, c.Seq)(a4), e2 = this[o], f2 = d3.size === 0;
                if (f2 && this[u])
                  return this[u];
                var g2;
                for (var h2 in e2) {
                  var i2 = e2[h2], j2 = d3.has(h2) ? d3.get(h2) : this.get(h2), k2 = i2[s](j2);
                  if (k2 instanceof TypeError)
                    return TypeError('Invalid value for "' + h2 + '" field:\n ' + k2.message);
                  g2 = this[p](g2 || this[q](), [h2, k2]);
                }
                return g2 = this[r](g2), f2 && (this[u] = g2), g2;
              } }, { key: b2.Typed.step, value: function(a4, d3) {
                var e2 = h(d3, 2), f2 = e2[0], g2 = e2[1], i2 = a4[n] ? a4[n].set(f2, g2) : new c.Map([[f2, g2]]);
                if (a4[n] === i2)
                  return a4;
                var j2 = a4.__ownerID ? a4 : (0, b2.construct)(a4);
                return j2[n] = i2, j2;
              } }, { key: b2.Typed.typeSignature, value: function() {
                var a4 = this[o], b3 = [];
                for (var c2 in a4)
                  b3.push(c2 + ": " + a4[c2][v]());
                return "Typed.Record({" + b3.join(", ") + "})";
              } }, { key: b2.Typed.typeName, value: function() {
                return this[t] || this[w]();
              } }, { key: "toString", value: function() {
                return this.__toString(this[v]() + "({", "})");
              } }, { key: "has", value: function(a4) {
                return !!this[o][a4];
              } }, { key: "get", value: function(a4, b3) {
                return this[o][a4] ? this[n] ? this[n].get(a4, b3) : b3 : b3;
              } }, { key: "clear", value: function() {
                return this.__ownerID ? (this[n] && this[n].clear(), this) : this[u] || (this[u] = new this.constructor());
              } }, { key: "remove", value: function(a4) {
                return this[o][a4] ? this.set(a4, void 0) : this;
              } }, { key: "set", value: function(a4, b3) {
                var c2 = this[o][a4];
                if (!c2)
                  throw TypeError('Cannot set unknown field "' + a4 + '" on "' + this[v]() + '"');
                var d3 = c2[s](b3);
                if (d3 instanceof TypeError)
                  throw TypeError("Invalid value for " + a4 + " field: " + d3.message);
                return this[p](this, [a4, d3]);
              } }, { key: "__iterator", value: function(a4, b3) {
                var c2 = this;
                return k(this[o]).map(function(a5, b4) {
                  return c2.get(b4);
                }).__iterator(a4, b3);
              } }, { key: "__iterate", value: function(a4, b3) {
                var c2 = this;
                return k(this[o]).map(function(a5, b4) {
                  return c2.get(b4);
                }).__iterate(a4, b3);
              } }, { key: "__ensureOwner", value: function(a4) {
                if (a4 === this.__ownerID)
                  return this;
                var c2 = this[n] && this[n].__ensureOwner(a4), d3 = a4 ? (0, b2.construct)(this) : this;
                return d3.__ownerID = a4, d3[n] = c2, d3;
              } }, { key: "wasAltered", value: function() {
                return this[n].wasAltered();
              } }]), d2;
            }(x), z = function(a3, c2) {
              if (a3 && (typeof a3 == "undefined" ? "undefined" : _typeof(a3)) === "object") {
                var d2 = /* @__PURE__ */ Object.create(null), f2 = Object.keys(a3), g2 = f2.length;
                if (0 < g2) {
                  var h2, i2 = function() {
                    for (var i3 = (h2 = { size: { value: g2 } }, e(h2, o, { value: d2 }), e(h2, t, { value: c2 }), h2), j2 = 0; j2 < g2; ) {
                      var k2 = f2[j2], p2 = (0, b2.typeOf)(a3[k2]);
                      if (p2)
                        d2[k2] = p2, i3[k2] = { get: l(k2), set: m(k2), enumerable: true };
                      else
                        throw TypeError('Invalid field descriptor provided for a "' + k2 + '" field');
                      ++j2;
                    }
                    var q2 = function a4(b3) {
                      var c3 = this instanceof a4, d3 = c3 ? this.constructor : a4;
                      if (b3 instanceof d3)
                        return b3;
                      var e2 = d3.prototype, f3 = e2[s](b3);
                      if (f3 instanceof TypeError)
                        throw f3;
                      return c3 ? void (this[n] = f3[n]) : f3;
                    };
                    i3.constructor = { value: q2 }, q2.prototype = Object.create(A, i3);
                    q2.prototype;
                    return { v: q2 };
                  }();
                  if ((typeof i2 == "undefined" ? "undefined" : _typeof(i2)) === "object")
                    return i2.v;
                } else
                  throw TypeError("Typed.Record descriptor must define at least one field");
              } else
                throw TypeError("Typed.Record must be passed a descriptor of fields");
            };
            a2.Record = z, z.Type = y, z.prototype = y.prototype;
            var A = y.prototype;
            A[b2.Typed.DELETE] = A.remove, A.deleteIn = c.Map.prototype.deleteIn, A.removeIn = c.Map.prototype.removeIn, A.merge = c.Map.prototype.merge, A.mergeWith = c.Map.prototype.mergeWith, A.mergeIn = c.Map.prototype.mergeIn, A.mergeDeep = c.Map.prototype.mergeDeep, A.mergeDeepWith = c.Map.prototype.mergeDeepWith, A.mergeDeepIn = c.Map.prototype.mergeDeepIn, A.setIn = c.Map.prototype.setIn, A.update = c.Map.prototype.update, A.updateIn = c.Map.prototype.updateIn, A.withMutations = c.Map.prototype.withMutations, A.asMutable = c.Map.prototype.asMutable, A.asImmutable = c.Map.prototype.asImmutable, A.map = void 0, A.filter = void 0, A.filterNot = void 0, A.flip = void 0, A.mapKeys = void 0, A.mapEntries = void 0, A.sort = void 0, A.sortBy = void 0, A.reverse = void 0, A.slice = void 0, A.butLast = void 0, A.flatMap = void 0, A.flatten = void 0, A.rest = void 0, A.skip = void 0, A.skipLast = void 0, A.skipWhile = void 0, A.skipUntil = void 0, A.sortBy = void 0, A.take = void 0, A.takeLast = void 0, A.takeWhile = void 0, A.takeUntil = void 0;
          });
        });
        var list = createCommonjsModule(function(a, b) {
          (function(a2, c) {
            c(b, typed, immutable);
          })(commonjsGlobal, function(a2, b2, c) {
            "use strict";
            function d(a3, b3) {
              for (var c2 = Object.getOwnPropertyNames(b3), d2 = 0; d2 < c2.length; d2++) {
                var e2 = c2[d2], f2 = Object.getOwnPropertyDescriptor(b3, e2);
                f2 && f2.configurable && a3[e2] === void 0 && Object.defineProperty(a3, e2, f2);
              }
              return a3;
            }
            function e(a3, b3, c2) {
              return b3 in a3 ? Object.defineProperty(a3, b3, { value: c2, enumerable: true, configurable: true, writable: true }) : a3[b3] = c2, a3;
            }
            function f(a3, b3) {
              if (!(a3 instanceof b3))
                throw new TypeError("Cannot call a class as a function");
            }
            function g(a3, b3) {
              if (typeof b3 != "function" && b3 !== null)
                throw new TypeError("Super expression must either be null or a function, not " + (typeof b3 == "undefined" ? "undefined" : _typeof(b3)));
              a3.prototype = Object.create(b3 && b3.prototype, { constructor: { value: a3, enumerable: false, writable: true, configurable: true } }), b3 && (Object.setPrototypeOf ? Object.setPrototypeOf(a3, b3) : d(a3, b3));
            }
            function h() {
            }
            var i = function() {
              function a3(a4, b3) {
                var c2, d2 = [], e2 = true, f2 = false;
                try {
                  for (var g2, h2 = a4[Symbol.iterator](); !(e2 = (g2 = h2.next()).done) && (d2.push(g2.value), !(b3 && d2.length === b3)); e2 = true)
                    ;
                } catch (a5) {
                  f2 = true, c2 = a5;
                } finally {
                  try {
                    !e2 && h2["return"] && h2["return"]();
                  } finally {
                    if (f2)
                      throw c2;
                  }
                }
                return d2;
              }
              return function(b3, c2) {
                if (Array.isArray(b3))
                  return b3;
                if (Symbol.iterator in Object(b3))
                  return a3(b3, c2);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              };
            }(), j = function() {
              function a3(a4, b3) {
                for (var c2, d2 = 0; d2 < b3.length; d2++)
                  c2 = b3[d2], c2.enumerable = c2.enumerable || false, c2.configurable = true, "value" in c2 && (c2.writable = true), Object.defineProperty(a4, c2.key, c2);
              }
              return function(b3, c2, d2) {
                return c2 && a3(b3.prototype, c2), d2 && a3(b3, d2), b3;
              };
            }(), k = function(a3, b3, c2) {
              var d2 = true;
              _function:
                for (; d2; ) {
                  var e2 = a3, f2 = b3, g2 = c2;
                  d2 = false, e2 === null && (e2 = Function.prototype);
                  var h2 = Object.getOwnPropertyDescriptor(e2, f2);
                  if (h2 === void 0) {
                    var i2 = Object.getPrototypeOf(e2);
                    if (i2 === null)
                      return;
                    a3 = i2, b3 = f2, c2 = g2, d2 = true, h2 = i2 = void 0;
                    continue _function;
                  } else {
                    if ("value" in h2)
                      return h2.value;
                    var j2 = h2.get;
                    return j2 === void 0 ? void 0 : j2.call(g2);
                  }
                }
            }, l = c.List, m = c.Iterable.Indexed, n = b2.Typed.store, o = b2.Typed.type, p = b2.Typed.read, q = b2.Typed.step, r = b2.Typed.init, s = b2.Typed.result, t = b2.Typed.label, u = b2.Typed.typeName, v = b2.Typed.empty, w = function(a3, c2) {
              var d2 = c2(a3[n]);
              if (d2 === a3[n])
                return a3;
              var e2 = a3.__ownerID ? a3 : (0, b2.construct)(a3);
              return e2[n] = d2, e2.size = d2.size, e2;
            }, x = function(a3) {
              return a3.clear();
            }, y = function(a3) {
              return a3.pop();
            }, z = function(a3) {
              return a3.shift();
            }, A = function(a3) {
              function c2() {
                f(this, c2), k(Object.getPrototypeOf(c2.prototype), "constructor", this).apply(this, arguments);
              }
              return g(c2, a3), j(c2, [{ key: b2.Typed.typeName, value: function() {
                return "TypeInferer";
              } }, { key: b2.Typed.read, value: function(a4) {
                var c3 = (0, b2.typeOf)(a4).constructor.prototype;
                return this.type = this.type ? (0, b2.Union)(this.type, c3) : c3, a4;
              } }]), c2;
            }(b2.Type);
            h.prototype = l.prototype;
            var B = function(a3) {
              function c2(a4) {
                return f(this, c2), k(Object.getPrototypeOf(c2.prototype), "constructor", this).call(this), c2.prototype[p](a4);
              }
              return g(c2, a3), j(c2, null, [{ key: "from", value: function(a4) {
                var c3 = (0, b2.construct)(this.prototype);
                return c3[n] = a4[n], c3.size = a4.size, c3;
              } }]), j(c2, [{ key: b2.Typed.init, value: function() {
                var a4 = (0, b2.construct)(this).asMutable();
                return a4[o] = new A(), a4;
              } }, { key: b2.Typed.result, value: function(a4) {
                var b3 = a4.asImmutable();
                return b3[o] = a4[o].type, b3;
              } }, { key: b2.Typed.read, value: function(a4) {
                var c3 = this.constructor;
                if (a4 === null || a4 === void 0) {
                  if (!this[v]) {
                    var d2 = (0, b2.construct)(this);
                    d2[n] = l(), d2.size = 0, this[v] = d2;
                  }
                  return this[v];
                }
                if (a4 instanceof c3 && a4 && a4.constructor === c3)
                  return a4;
                var e2 = m(a4), f2 = e2.size === 0;
                if (f2 && this[v])
                  return this[v];
                var g2 = this[r]();
                return g2.size = e2.size, e2.forEach(function(a5, b3) {
                  g2.set(b3, a5);
                }), g2 = this[s](g2), f2 && (this[v] = g2), g2;
              } }, { key: b2.Typed.step, value: function(a4, b3) {
                var c3 = i(b3, 2), d2 = c3[0], e2 = c3[1];
                return w(a4, function() {
                  var a5 = 0 >= arguments.length || arguments[0] === void 0 ? l() : arguments[0];
                  return a5.set(d2, e2);
                });
              } }, { key: b2.Typed.typeName, value: function() {
                return this[t] || "Typed.List(" + this[o][u]() + ")";
              } }, { key: "toString", value: function() {
                return this.__toString(this[u]() + "([", "])");
              } }, { key: "has", value: function(a4) {
                return this[n].has(a4);
              } }, { key: "get", value: function(a4, b3) {
                return this[n] ? this[n].get(parseInt(a4), b3) : b3;
              } }, { key: "clear", value: function() {
                return this.__ownerID ? w(this, x) : this[v] || this[p]();
              } }, { key: "insert", value: function(a4, b3) {
                if (a4 > this.size)
                  throw TypeError('Index "' + a4 + '" is out of bounds.');
                var c3 = this[o][p](b3);
                if (c3 instanceof TypeError)
                  throw TypeError("Invalid value: " + c3.message);
                return w(this, function(c4) {
                  return c4.insert(a4, b3);
                });
              } }, { key: "remove", value: function(a4) {
                return w(this, function(b3) {
                  return b3 && b3.remove(a4);
                });
              } }, { key: "set", value: function(a4, b3) {
                if (a4 > this.size)
                  throw TypeError('Index "' + a4 + '" is out of bounds.');
                var c3 = this[o][p](b3);
                if (c3 instanceof TypeError)
                  throw TypeError("Invalid value: " + c3.message);
                return this[q](this, [a4, c3]);
              } }, { key: "push", value: function() {
                for (var a4 = this[o], b3 = [], c3 = arguments.length, d2 = Array(c3), e2 = 0; e2 < c3; e2++)
                  d2[e2] = arguments[e2];
                for (var f2 = d2.length, g2 = 0; g2 < f2; ) {
                  var h2 = d2[g2], i2 = a4[p](h2);
                  if (i2 instanceof TypeError)
                    throw TypeError("Invalid value: " + i2.message);
                  b3.push(i2), ++g2;
                }
                return w(this, function(a5) {
                  return a5 ? a5.push.apply(a5, b3) : l.apply(void 0, b3);
                });
              } }, { key: "pop", value: function() {
                return w(this, y);
              } }, { key: "unshift", value: function() {
                for (var a4 = this[o], b3 = [], c3 = arguments.length, d2 = Array(c3), e2 = 0; e2 < c3; e2++)
                  d2[e2] = arguments[e2];
                for (var f2 = d2.length, g2 = 0; g2 < f2; ) {
                  var h2 = d2[g2], i2 = a4[p](h2);
                  if (i2 instanceof TypeError)
                    throw TypeError("Invalid value: " + i2.message);
                  b3.push(i2), ++g2;
                }
                return w(this, function(a5) {
                  return a5 ? a5.unshift.apply(a5, b3) : l.apply(void 0, b3);
                });
              } }, { key: "shift", value: function() {
                return w(this, z);
              } }, { key: "setSize", value: function(a4) {
                if (a4 > this.size)
                  throw TypeError("setSize may only downsize");
                return w(this, function(b3) {
                  return b3.setSize(a4);
                });
              } }, { key: "slice", value: function(a4, b3) {
                return w(this, function(c3) {
                  return c3 && c3.slice(a4, b3);
                });
              } }, { key: "wasAltered", value: function() {
                return this[n].wasAltered();
              } }, { key: "__ensureOwner", value: function(a4) {
                var c3 = this.__ownerID === a4 ? this : a4 ? (0, b2.construct)(this) : this;
                return c3.__ownerID = a4, c3[n] = this[n] ? this[n].__ensureOwner(a4) : l().__ensureOwner(a4), c3.size = c3[n].size, c3;
              } }, { key: "__iterator", value: function(a4, b3) {
                var c3 = this;
                return m(this[n]).map(function(a5, b4) {
                  return c3.get(b4);
                }).__iterator(a4, b3);
              } }, { key: "__iterate", value: function(a4, b3) {
                var c3 = this;
                return m(this[n]).map(function(a5, b4) {
                  return c3.get(b4);
                }).__iterate(a4, b3);
              } }]), c2;
            }(h);
            B.prototype[b2.Typed.DELETE] = B.prototype.remove;
            var C = function() {
            };
            C.prototype = B.prototype;
            var D = function(a3) {
              function c2() {
                f(this, c2), k(Object.getPrototypeOf(c2.prototype), "constructor", this).call(this);
              }
              return g(c2, a3), j(c2, [{ key: b2.Typed.init, value: function() {
                return (0, b2.construct)(this).asMutable();
              } }, { key: b2.Typed.result, value: function(a4) {
                return a4.asImmutable();
              } }, { key: "map", value: function(a4, c3) {
                if (this.size === 0)
                  return this;
                var d2 = B.from(this).map(a4, c3);
                if (this[n] === d2[n])
                  return this;
                if (d2[o] === this[o]) {
                  var e2 = (0, b2.construct)(this);
                  return e2[n] = d2[n], e2.size = d2.size, e2;
                }
                return d2;
              } }, { key: "flatMap", value: function(a4, c3) {
                if (this.size === 0)
                  return this;
                var d2 = B.from(this).flatMap(a4, c3);
                if (this[n] === d2[n])
                  return this;
                if (d2[o] === this[o]) {
                  var e2 = (0, b2.construct)(this);
                  return e2[n] = d2[n], e2.size = d2.size, e2;
                }
                return d2;
              } }]), c2;
            }(C), E = function(a3, d2) {
              var f2;
              if (a3 === void 0)
                throw TypeError("Typed.List must be passed a type descriptor");
              if (a3 === b2.Any)
                return c.List;
              var g2 = (0, b2.typeOf)(a3);
              if (g2 === b2.Any)
                throw TypeError("Typed.List was passed an invalid type descriptor: " + a3);
              var h2 = function a4(b3) {
                var c2 = this instanceof a4, d3 = c2 ? this.constructor : a4;
                if (b3 instanceof d3)
                  return b3;
                var e2 = d3.prototype[p](b3);
                if (e2 instanceof TypeError)
                  throw e2;
                if (c2 && !this[n])
                  this[n] = e2[n], this.size = e2.size;
                else
                  return e2;
                return this;
              };
              return h2.of = l.of, h2.prototype = Object.create(F, (f2 = { constructor: { value: h2 } }, e(f2, o, { value: g2 }), e(f2, t, { value: d2 }), f2)), h2;
            };
            a2.List = E, E.Type = D, E.prototype = D.prototype;
            var F = D.prototype;
          });
        });
        var map = createCommonjsModule(function(a, b) {
          (function(a2, c) {
            c(b, typed, immutable);
          })(commonjsGlobal, function(a2, b2, c) {
            "use strict";
            function d(a3, b3) {
              for (var c2 = Object.getOwnPropertyNames(b3), d2 = 0; d2 < c2.length; d2++) {
                var e2 = c2[d2], f2 = Object.getOwnPropertyDescriptor(b3, e2);
                f2 && f2.configurable && a3[e2] === void 0 && Object.defineProperty(a3, e2, f2);
              }
              return a3;
            }
            function e(a3, b3, c2) {
              return b3 in a3 ? Object.defineProperty(a3, b3, { value: c2, enumerable: true, configurable: true, writable: true }) : a3[b3] = c2, a3;
            }
            function f(a3, b3) {
              if (!(a3 instanceof b3))
                throw new TypeError("Cannot call a class as a function");
            }
            function g(a3, b3) {
              if (typeof b3 != "function" && b3 !== null)
                throw new TypeError("Super expression must either be null or a function, not " + (typeof b3 == "undefined" ? "undefined" : _typeof(b3)));
              a3.prototype = Object.create(b3 && b3.prototype, { constructor: { value: a3, enumerable: false, writable: true, configurable: true } }), b3 && (Object.setPrototypeOf ? Object.setPrototypeOf(a3, b3) : d(a3, b3));
            }
            var h = function() {
              function a3(a4, b3) {
                var c2, d2 = [], e2 = true, f2 = false;
                try {
                  for (var g2, h2 = a4[Symbol.iterator](); !(e2 = (g2 = h2.next()).done) && (d2.push(g2.value), !(b3 && d2.length === b3)); e2 = true)
                    ;
                } catch (a5) {
                  f2 = true, c2 = a5;
                } finally {
                  try {
                    !e2 && h2["return"] && h2["return"]();
                  } finally {
                    if (f2)
                      throw c2;
                  }
                }
                return d2;
              }
              return function(b3, c2) {
                if (Array.isArray(b3))
                  return b3;
                if (Symbol.iterator in Object(b3))
                  return a3(b3, c2);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              };
            }(), i = function() {
              function a3(a4, b3) {
                for (var c2, d2 = 0; d2 < b3.length; d2++)
                  c2 = b3[d2], c2.enumerable = c2.enumerable || false, c2.configurable = true, "value" in c2 && (c2.writable = true), Object.defineProperty(a4, c2.key, c2);
              }
              return function(b3, c2, d2) {
                return c2 && a3(b3.prototype, c2), d2 && a3(b3, d2), b3;
              };
            }(), j = function(a3, b3, c2) {
              var d2 = true;
              _function:
                for (; d2; ) {
                  var e2 = a3, f2 = b3, g2 = c2;
                  d2 = false, e2 === null && (e2 = Function.prototype);
                  var h2 = Object.getOwnPropertyDescriptor(e2, f2);
                  if (h2 === void 0) {
                    var i2 = Object.getPrototypeOf(e2);
                    if (i2 === null)
                      return;
                    a3 = i2, b3 = f2, c2 = g2, d2 = true, h2 = i2 = void 0;
                    continue _function;
                  } else {
                    if ("value" in h2)
                      return h2.value;
                    var j2 = h2.get;
                    return j2 === void 0 ? void 0 : j2.call(g2);
                  }
                }
            }, k = c.Map, l = c.Iterable.Keyed, m = b2.Typed.store, n = b2.Typed.type, o = b2.Typed.read, p = b2.Typed.step, q = b2.Typed.init, r = b2.Typed.result, s = b2.Typed.label, t = b2.Typed.typeName, u = b2.Typed.empty, v = function(a3) {
              function c2(a4, b3, d2) {
                f(this, c2), j(Object.getPrototypeOf(c2.prototype), "constructor", this).call(this), this.key = a4, this.value = b3, this.label = d2;
              }
              return g(c2, a3), i(c2, [{ key: b2.Typed.typeName, value: function() {
                return this.label || this.key[t]() + ", " + this.value[t]();
              } }, { key: b2.Typed.read, value: function(a4) {
                function b3() {
                  return a4.apply(this, arguments);
                }
                return b3.toString = function() {
                  return a4.toString();
                }, b3;
              }(function(a4) {
                var b3 = h(a4, 2), c3 = b3[0], d2 = b3[1], e2 = this.key[o](c3);
                if (e2 instanceof TypeError)
                  return TypeError("Invalid key: " + e2.message);
                var f2 = this.value[o](d2);
                return f2 instanceof TypeError ? TypeError("Invalid value: " + f2.message) : [e2, f2];
              }) }]), c2;
            }(b2.Type), w = function(a3) {
              function c2() {
                f(this, c2), j(Object.getPrototypeOf(c2.prototype), "constructor", this).call(this, key, value);
              }
              return g(c2, a3), i(c2, [{ key: "toStatic", value: function() {
                return new MapEntryType(this.key, this.value);
              } }, { key: b2.Typed.typeName, value: function() {
                var a4 = this.key ? this.key[t]() : "TypeInferred", b3 = this.value ? this.value[t]() : "TypeInferred";
                return a4 + ", " + b3;
              } }, { key: b2.Typed.read, value: function(a4) {
                var c3 = (0, b2.typeOf)(a4[0]).constructor.prototype;
                this.key = this.key ? (0, b2.Union)(this.key, c3) : c3;
                var d2 = (0, b2.typeOf)(a4[1]).constructor.prototype;
                return this.value = this.value ? (0, b2.Union)(this.value, d2) : d2, a4;
              } }]), c2;
            }(v), x = function() {
            };
            x.prototype = c.Map.prototype;
            var y = function(a3) {
              function c2(a4) {
                return f(this, c2), j(Object.getPrototypeOf(c2.prototype), "constructor", this).call(this), c2.prototype[o](a4);
              }
              return g(c2, a3), i(c2, [{ key: "advance", value: function(a4) {
                var c3 = a4.__ownerID ? this : (0, b2.construct)(this);
                return c3[m] = a4, c3.size = a4.size, c3.__ownerID = a4.__ownerID, c3;
              } }, { key: b2.Typed.init, value: function() {
                return this.advance(k()).asMutable();
              } }, { key: b2.Typed.step, value: function(a4, b3) {
                var c3 = this[n][o](b3);
                if (c3 instanceof TypeError)
                  throw c3;
                var d2 = h(c3, 2), e2 = d2[0], f2 = d2[1];
                return a4.advance(a4[m].set(e2, f2));
              } }, { key: b2.Typed.result, value: function(a4) {
                return a4.asImmutable();
              } }, { key: b2.Typed.read, value: function(a4) {
                var b3 = this.constructor;
                if (a4 === null || a4 === void 0)
                  return this[u] || (this[u] = this.advance(k())), this[u];
                var c3 = a4 instanceof b3 && a4.constructor === b3;
                if (c3)
                  return a4;
                for (var d2 = l(a4).entries(), e2 = this[n], f2 = this[q](); ; ) {
                  var g2 = d2.next(), h2 = g2.done, i2 = g2.value;
                  if (h2)
                    break;
                  var j2 = e2[o](i2);
                  if (j2 instanceof TypeError)
                    return j2;
                  f2 = f2[p](f2, j2);
                }
                return this[r](f2);
              } }, { key: b2.Typed.typeName, value: function() {
                return this[s] || "Typed.Map(" + this[n][t]() + ")";
              } }, { key: "toString", value: function() {
                return this.__toString(this[t]() + "({", "})");
              } }, { key: "has", value: function(a4) {
                return this[m].has(a4);
              } }, { key: "get", value: function(a4, b3) {
                return this[m].get(a4, b3);
              } }, { key: "clear", value: function() {
                return this.size === 0 ? this : this.__ownerID ? this.advance(this[m].clear()) : this[u] || this[o]();
              } }, { key: "remove", value: function(a4) {
                return this.advance(this[m].remove(a4));
              } }, { key: "set", value: function(a4, b3) {
                return this[p](this, [a4, b3]);
              } }, { key: "wasAltered", value: function() {
                return this[m].wasAltered();
              } }, { key: "__ensureOwner", value: function(a4) {
                var c3 = this.__ownerID === a4 ? this : a4 ? (0, b2.construct)(this) : this, d2 = this[m].__ensureOwner(a4);
                return c3[m] = d2, c3.size = d2.size, c3.__ownerID = a4, c3;
              } }, { key: "__iterator", value: function(a4, b3) {
                return this[m].__iterator(a4, b3);
              } }, { key: "__iterate", value: function(a4, b3) {
                return this[m].__iterate(a4, b3);
              } }]), c2;
            }(x);
            y.prototype[b2.Typed.DELETE] = y.prototype.remove;
            var z = function(a3) {
              function c2() {
                f(this, c2), j(Object.getPrototypeOf(c2.prototype), "constructor", this).call(this);
              }
              return g(c2, a3), i(c2, [{ key: b2.Typed.init, value: function() {
                var a4 = this.advance(k()).asMutable();
                return a4[n] = new w(), a4;
              } }, { key: b2.Typed.result, value: function(a4) {
                var b3 = a4.asImmutable();
                return b3[n] = a4[n].toStatic(), b3;
              } }]), c2;
            }(y), A = function(a3, c2, d2) {
              var f2;
              if (a3 === void 0)
                throw TypeError("Typed.Map must be passed a key type descriptor");
              if (c2 === void 0)
                throw TypeError("Typed.Map must be passed a value type descriptor");
              if (a3 === b2.Any && c2 === b2.Any)
                return k;
              var g2 = (0, b2.typeOf)(a3), h2 = (0, b2.typeOf)(c2);
              if (g2 === b2.Any && a3 !== b2.Any)
                throw TypeError("Typed.Map was passed an invalid key type descriptor: " + a3);
              if (h2 === b2.Any && c2 !== b2.Any)
                throw TypeError("Typed.Map was passed an invalid value type descriptor: " + c2);
              var i2 = new v(g2, h2, d2), j2 = function a4(b3) {
                var c3 = this instanceof a4, d3 = c3 ? this.constructor : a4;
                if (b3 instanceof d3)
                  return b3;
                var e2 = d3.prototype[o](b3);
                if (e2 instanceof TypeError)
                  throw e2;
                if (c3 && !this[m])
                  this[m] = e2[m], this.size = e2.size;
                else
                  return e2;
                return this;
              };
              return j2.of = function() {
                for (var a4 = arguments.length, b3 = Array(a4), c3 = 0; c3 < a4; c3++)
                  b3[c3] = arguments[c3];
                return j2().withMutations(function(a5) {
                  for (var c4 = 0; c4 < b3.length; c4 += 2) {
                    if (c4 + 1 >= b3.length)
                      throw new Error("Missing value for key: " + b3[c4]);
                    a5.set(b3[c4], b3[c4 + 1]);
                  }
                });
              }, j2.prototype = Object.create(B, (f2 = { constructor: { value: j2 } }, e(f2, n, { value: i2 }), e(f2, s, { value: d2 }), f2)), j2;
            };
            a2.Map = A, A.Type = y, A.prototype = y.prototype;
            var B = A.prototype;
          });
        });
        var lib$1 = createCommonjsModule(function(a, b) {
          (function(a2, c) {
            c(b, record, list, map, typed);
          })(commonjsGlobal, function(a2, b2, c, d, e) {
            "use strict";
            Object.defineProperty(a2, "Record", { enumerable: true, get: function() {
              return b2.Record;
            } }), Object.defineProperty(a2, "List", { enumerable: true, get: function() {
              return c.List;
            } }), Object.defineProperty(a2, "Map", { enumerable: true, get: function() {
              return d.Map;
            } }), Object.defineProperty(a2, "Typed", { enumerable: true, get: function() {
              return e.Typed;
            } }), Object.defineProperty(a2, "typeOf", { enumerable: true, get: function() {
              return e.typeOf;
            } }), Object.defineProperty(a2, "Type", { enumerable: true, get: function() {
              return e.Type;
            } }), Object.defineProperty(a2, "Any", { enumerable: true, get: function() {
              return e.Any;
            } }), Object.defineProperty(a2, "Union", { enumerable: true, get: function() {
              return e.Union;
            } }), Object.defineProperty(a2, "Maybe", { enumerable: true, get: function() {
              return e.Maybe;
            } });
          });
        });
        var lib_1 = lib$1.Typed;
        var lib_2 = lib$1.Record;
        var lib_3 = lib$1.List;
        var lib_4 = lib$1.Map;
        var lib_5 = lib$1.Any;
        var funcTag = "[object Function]";
        var genTag = "[object GeneratorFunction]";
        var objectProto = Object.prototype;
        var objectToString = objectProto.toString;
        function isFunction(a) {
          var b = isObject(a) ? objectToString.call(a) : "";
          return b == funcTag || b == genTag;
        }
        function isObject(a) {
          var b = typeof a == "undefined" ? "undefined" : _typeof(a);
          return !!a && (b == "object" || b == "function");
        }
        var lodash_isfunction = isFunction;
        function isNull(a) {
          return a === null;
        }
        var lodash_isnull = isNull;
        function isUndefined(a) {
          return a === void 0;
        }
        var lodash_isundefined = isUndefined;
        var lodash_isdate = createCommonjsModule(function(a, b) {
          function c(a2) {
            return !!a2 && (typeof a2 == "undefined" ? "undefined" : _typeof(a2)) == "object";
          }
          var d = _typeof(commonjsGlobal) == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal, e = b && !b.nodeType && b, f = e && true && a && !a.nodeType && a, g = f && f.exports === e, h = g && d.process, i = function() {
            try {
              return h && h.binding("util");
            } catch (a2) {
            }
          }(), j = i && i.isDate, k = Object.prototype, l = k.toString, m = j ? function(a2) {
            return function(b2) {
              return a2(b2);
            };
          }(j) : function(a2) {
            return c(a2) && l.call(a2) == "[object Date]";
          };
          a.exports = m;
        });
        var INFINITY = 1 / 0;
        var MAX_SAFE_INTEGER = 9007199254740991;
        var MAX_INTEGER = 17976931348623157e292;
        var NAN = 0 / 0;
        var symbolTag = "[object Symbol]";
        var reTrim = /^\s+|\s+$/g;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsOctal = /^0o[0-7]+$/i;
        var rsAstralRange = "\\ud800-\\udfff";
        var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
        var rsComboSymbolsRange = "\\u20d0-\\u20f0";
        var rsVarRange = "\\ufe0e\\ufe0f";
        var rsAstral = "[" + rsAstralRange + "]";
        var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
        var rsFitz = "\\ud83c[\\udffb-\\udfff]";
        var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
        var rsNonAstral = "[^" + rsAstralRange + "]";
        var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
        var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
        var rsZWJ = "\\u200d";
        var reOptMod = rsModifier + "?";
        var rsOptVar = "[" + rsVarRange + "]?";
        var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
        var rsSeq = rsOptVar + reOptMod + rsOptJoin;
        var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
        var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
        var reHasUnicode = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0\ufe0e\ufe0f]/;
        var freeParseInt = parseInt;
        var freeGlobal = _typeof(commonjsGlobal) == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
        var freeSelf = (typeof self == "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        var asciiSize = baseProperty("length");
        function asciiToArray(a) {
          return a.split("");
        }
        function baseProperty(a) {
          return function(b) {
            return b == null ? void 0 : b[a];
          };
        }
        function hasUnicode(a) {
          return reHasUnicode.test(a);
        }
        function stringSize(a) {
          return hasUnicode(a) ? unicodeSize(a) : asciiSize(a);
        }
        function stringToArray(a) {
          return hasUnicode(a) ? unicodeToArray(a) : asciiToArray(a);
        }
        function unicodeSize(a) {
          for (var b = reUnicode.lastIndex = 0; reUnicode.test(a); )
            b++;
          return b;
        }
        function unicodeToArray(a) {
          return a.match(reUnicode) || [];
        }
        var objectProto$1 = Object.prototype;
        var objectToString$1 = objectProto$1.toString;
        var _Symbol = root.Symbol;
        var nativeCeil = Math.ceil;
        var nativeFloor = Math.floor;
        var symbolProto = _Symbol ? _Symbol.prototype : void 0;
        var symbolToString = symbolProto ? symbolProto.toString : void 0;
        function baseRepeat(a, b) {
          var c = "";
          if (!a || 1 > b || b > MAX_SAFE_INTEGER)
            return c;
          do
            b % 2 && (c += a), b = nativeFloor(b / 2), b && (a += a);
          while (b);
          return c;
        }
        function baseSlice(a, b, c) {
          var d = -1, e = a.length;
          0 > b && (b = -b > e ? 0 : e + b), c = c > e ? e : c, 0 > c && (c += e), e = b > c ? 0 : c - b >>> 0, b >>>= 0;
          for (var f = Array(e); ++d < e; )
            f[d] = a[d + b];
          return f;
        }
        function baseToString(a) {
          if (typeof a == "string")
            return a;
          if (isSymbol(a))
            return symbolToString ? symbolToString.call(a) : "";
          var b = a + "";
          return b == "0" && 1 / a == -INFINITY ? "-0" : b;
        }
        function castSlice(a, b, c) {
          var d = a.length;
          return c = c === void 0 ? d : c, !b && c >= d ? a : baseSlice(a, b, c);
        }
        function createPadding(a, b) {
          b = b === void 0 ? " " : baseToString(b);
          var c = b.length;
          if (2 > c)
            return c ? baseRepeat(b, a) : b;
          var d = baseRepeat(b, nativeCeil(a / stringSize(b)));
          return hasUnicode(b) ? castSlice(stringToArray(d), 0, a).join("") : d.slice(0, a);
        }
        function isObject$1(a) {
          var b = typeof a == "undefined" ? "undefined" : _typeof(a);
          return !!a && (b == "object" || b == "function");
        }
        function isObjectLike(a) {
          return !!a && (typeof a == "undefined" ? "undefined" : _typeof(a)) == "object";
        }
        function isSymbol(a) {
          return (typeof a == "undefined" ? "undefined" : _typeof(a)) == "symbol" || isObjectLike(a) && objectToString$1.call(a) == symbolTag;
        }
        function toFinite(a) {
          if (!a)
            return a === 0 ? a : 0;
          if (a = toNumber(a), a === INFINITY || a === -INFINITY) {
            var b = 0 > a ? -1 : 1;
            return b * MAX_INTEGER;
          }
          return a === a ? a : 0;
        }
        function toInteger(a) {
          var b = toFinite(a), c = b % 1;
          return b === b ? c ? b - c : b : 0;
        }
        function toNumber(a) {
          if (typeof a == "number")
            return a;
          if (isSymbol(a))
            return NAN;
          if (isObject$1(a)) {
            var b = typeof a.valueOf == "function" ? a.valueOf() : a;
            a = isObject$1(b) ? b + "" : b;
          }
          if (typeof a != "string")
            return a === 0 ? a : +a;
          a = a.replace(reTrim, "");
          var c = reIsBinary.test(a);
          return c || reIsOctal.test(a) ? freeParseInt(a.slice(2), c ? 2 : 8) : reIsBadHex.test(a) ? NAN : +a;
        }
        function toString(a) {
          return a == null ? "" : baseToString(a);
        }
        function padStart(a, b, c) {
          a = toString(a), b = toInteger(b);
          var d = b ? stringSize(a) : 0;
          return b && d < b ? createPadding(b - d, c) + a : a;
        }
        var lodash_padstart = padStart;
        var formatDate = function(a) {
          return a.getFullYear() + lodash_padstart(a.getMonth() + 1, 2, 0) + lodash_padstart(a.getDate(), 2, 0);
        };
        var formatTime = function(a) {
          return lodash_padstart(a.getHours(), 2, 0) + lodash_padstart(a.getMinutes(), 2, 0) + lodash_padstart(a.getSeconds(), 2, 0);
        };
        var formatDateTime = function(a) {
          return formatDate(a) + "T" + formatTime(a);
        };
        var removeTimeZoneOffset = function(a) {
          var b = 6e4 * a.getTimezoneOffset();
          return new Date(a.getTime() + b);
        };
        var BOOLEAN = function(a) {
          return a ? "TRUE" : "FALSE";
        };
        var DATE = function(a) {
          return lodash_isdate(a) ? formatDate(removeTimeZoneOffset(a)) : a;
        };
        var DATETIME = function(a) {
          return lodash_isdate(a) ? formatDateTime(a) : a;
        };
        var FLOAT = function(a) {
          return Number.parseFloat(a);
        };
        var FLOAT__FIXED_1 = function() {
          return FLOAT.apply(void 0, arguments).toFixed(1);
        };
        var INTEGER = function(a) {
          return Number.parseInt(a);
        };
        var TEXT = function(a) {
          return a.toString().replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");
        };
        var TIME = function(a) {
          return lodash_isdate(a) ? formatTime(removeTimeZoneOffset(a)) : a;
        };
        var transformers = Object.freeze({
          BOOLEAN,
          DATE,
          DATETIME,
          FLOAT,
          FLOAT__FIXED_1,
          INTEGER,
          TEXT,
          TIME
        });
        var FOLD_SEPARATOR = "\r\n ";
        var LINE_SEPARATOR = "\r\n";
        var PARAMETER_SEPARATOR = ";";
        var PARAMETER_KV_SEPARATOR = "=";
        var PARAMETER_VALUE_KEY = "VALUE";
        var PROPERTY_KV_SEPARATOR = ":";
        var VALUE_SEPARATOR = ",";
        var FOLD_REGEX = new RegExp(/[\s\S]{1,75}/g);
        var PREFIX = "BEGIN";
        var SUFFIX = "END";
        var VALUE_TYPES = { BINARY: "BINARY", BOOLEAN: "BOOLEAN", CALADDRESS: "CALADDRESS", "CAL-ADDRESS": "CALADDRESS", DATE: "DATE", DATETIME: "DATETIME", "DATE-TIME": "DATETIME", DURATION: "DURATION", FLOAT: "FLOAT", INTEGER: "INTEGER", PERIOD: "PERIOD", RECUR: "RECUR", TEXT: "TEXT", TIME: "TIME", URI: "URI", UTCOFFSET: "UTCOFFSET", "UTC-OFFSET": "UTCOFFSET" };
        var DEFAULT_VALUE_TYPE = VALUE_TYPES.TEXT;
        var DEFAULT_VALUE_TYPES = { ATTACH: VALUE_TYPES.URI, ATTENDEE: VALUE_TYPES.CALADDRESS, CREATED: VALUE_TYPES.DATETIME, DTSTART: VALUE_TYPES.DATETIME, DTEND: VALUE_TYPES.DATETIME, DTSTAMP: VALUE_TYPES.DATETIME, DUE: VALUE_TYPES.DATETIME, DURATION: VALUE_TYPES.DURATION, EXDATE: VALUE_TYPES.DATETIME, FREEBUSY: VALUE_TYPES.PERIOD, "LAST-MODIFIED": VALUE_TYPES.DATETIME, ORGANIZER: VALUE_TYPES.CALADDRESS, "PERCENT-COMPLETE": VALUE_TYPES.INTEGER, PRIORITY: VALUE_TYPES.INTEGER, RDATE: VALUE_TYPES.DATETIME, "RECURRENCE-ID": VALUE_TYPES.DATETIME, REPEAT: VALUE_TYPES.INTEGER, RRULE: VALUE_TYPES.RECUR, SEQUENCE: VALUE_TYPES.INTEGER, TRIGGER: VALUE_TYPES.DURATION, TZOFFSETFROM: VALUE_TYPES.UTCOFFSET, TZOFFSETTO: VALUE_TYPES.UTCOFFSET, TZURL: VALUE_TYPES.URI, URL: VALUE_TYPES.URI, VERSION: VALUE_TYPES.FLOAT + "__FIXED_1" };
        var Property2 = function(a) {
          function b() {
            return classCallCheck(this, b), possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
          }
          return inherits(b, a), createClass(b, [{ key: "getTransformedValue", value: function getTransformedValue() {
            var a2 = this, b2 = VALUE_TYPES[this.parameters.get(PARAMETER_VALUE_KEY)] || DEFAULT_VALUE_TYPES[this.name] || DEFAULT_VALUE_TYPE, c = transformers[b2];
            return lodash_isfunction(c) ? Array.isArray(this.value) ? this.value.map(function(b3) {
              return c(b3, a2.parameters);
            }).join(VALUE_SEPARATOR) : c(this.value, this.parameters) : this.value;
          } }, { key: "toString", value: function toString2() {
            var a2 = this.name;
            0 < this.parameters.size && (a2 += PARAMETER_SEPARATOR + this.parameters.entrySeq().map(function(a3) {
              var b3 = slicedToArray(a3, 2), c = b3[0], d = b3[1];
              return c + PARAMETER_KV_SEPARATOR + d;
            }).join(PARAMETER_SEPARATOR));
            var b2 = this.transform ? this.getTransformedValue() : this.value;
            return lodash_isnull(b2) || lodash_isundefined(b2) || (a2 += PROPERTY_KV_SEPARATOR + b2), a2.match(FOLD_REGEX).join(FOLD_SEPARATOR);
          } }]), b;
        }(lib_2({ name: String, parameters: lib_4(String, lib_5), transform: true, value: lib_5 }));
        lib_1.Component = lib_1("Component", function(a) {
          return a instanceof Component2 ? a : TypeError('"' + a + '" is not a Component');
        }), lib_1.Property = lib_1("Property", function(a) {
          return a instanceof Property2 ? a : TypeError('"' + a + '" is not a Property');
        });
        var Component2 = function(a) {
          function b() {
            return classCallCheck(this, b), possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
          }
          return inherits(b, a), createClass(b, [{ key: "pushComponent", value: function pushComponent(a2) {
            return this.update("components", function(b2) {
              return b2.push(a2);
            });
          } }, { key: "pushProperty", value: function pushProperty(a2) {
            return this.update("properties", function(b2) {
              return b2.push(a2);
            });
          } }, { key: "clear", value: function clear() {
            return this.clearComponents().clearProperties();
          } }, { key: "clearComponents", value: function clearComponents() {
            return this.remove("components");
          } }, { key: "clearProperties", value: function clearProperties() {
            return this.remove("properties");
          } }, { key: "toString", value: function toString2() {
            return [new Property2({ name: PREFIX, value: this.name })].concat(toConsumableArray(this.properties), toConsumableArray(this.components), [new Property2({ name: SUFFIX, value: this.name })]).join(LINE_SEPARATOR);
          } }]), b;
        }(lib_2({ name: String, components: lib_3(lib_1.Component), properties: lib_3(lib_1.Property) }));
        exports2.Component = Component2;
        exports2.Property = Property2;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // node_modules/file-saver/dist/FileSaver.min.js
  var require_FileSaver_min = __commonJS({
    "node_modules/file-saver/dist/FileSaver.min.js"(exports, module) {
      (function(a, b) {
        if (typeof define == "function" && define.amd)
          define([], b);
        else if (typeof exports != "undefined")
          b();
        else {
          b(), a.FileSaver = { exports: {} }.exports;
        }
      })(exports, function() {
        "use strict";
        function b(a2, b2) {
          return typeof b2 == "undefined" ? b2 = { autoBom: false } : typeof b2 != "object" && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
        }
        function c(a2, b2, c2) {
          var d2 = new XMLHttpRequest();
          d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
            g(d2.response, b2, c2);
          }, d2.onerror = function() {
            console.error("could not download file");
          }, d2.send();
        }
        function d(a2) {
          var b2 = new XMLHttpRequest();
          b2.open("HEAD", a2, false);
          try {
            b2.send();
          } catch (a3) {
          }
          return 200 <= b2.status && 299 >= b2.status;
        }
        function e(a2) {
          try {
            a2.dispatchEvent(new MouseEvent("click"));
          } catch (c2) {
            var b2 = document.createEvent("MouseEvents");
            b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
          }
        }
        var f = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || (typeof window != "object" || window !== f ? function() {
        } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
          var i = f.URL || f.webkitURL, j = document.createElement("a");
          g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", typeof b2 == "string" ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
            i.revokeObjectURL(j.href);
          }, 4e4), setTimeout(function() {
            e(j);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
          if (g2 = g2 || f2.name || "download", typeof f2 != "string")
            navigator.msSaveOrOpenBlob(b(f2, h), g2);
          else if (d(f2))
            c(f2, g2, h);
          else {
            var i = document.createElement("a");
            i.href = f2, i.target = "_blank", setTimeout(function() {
              e(i);
            });
          }
        } : function(b2, d2, e2, g2) {
          if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), typeof b2 == "string")
            return c(b2, d2, e2);
          var h = b2.type === "application/octet-stream", i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
          if ((j || h && i || a) && typeof FileReader != "undefined") {
            var k = new FileReader();
            k.onloadend = function() {
              var a2 = k.result;
              a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
            }, k.readAsDataURL(b2);
          } else {
            var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
            g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
              l.revokeObjectURL(m);
            }, 4e4);
          }
        });
        f.saveAs = g.saveAs = g, typeof module != "undefined" && (module.exports = g);
      });
    }
  });

  // ui.js
  var ui_exports = {};
  __export(ui_exports, {
    handleClientLoad: () => handleClientLoad,
    hideOverlay: () => hideOverlay
  });

  // gapi-importer.js
  var CLIENT_ID = "845509487647-5786nh91r45rsm485m2mb4cqcfmis94g.apps.googleusercontent.com";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar";
  var authorizeButton = document.getElementById("authorize_button");
  var signoutButton = document.getElementById("signout_button");
  var loggedInSection = document.getElementById("logged_in_section");
  var loggedOutSection = document.getElementById("logged_out_section");
  function handleClientLoad() {
    gapi.load("client:auth2", initClient);
  }
  function initClient() {
    gapi.client.init({
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(function() {
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      authorizeButton.onclick = handleAuthClick;
      signoutButton.onclick = handleSignoutClick;
    }, function(error) {
      console.error(JSON.stringify(error, null, 2));
    });
  }
  function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      loggedOutSection.style.display = "none";
      loggedInSection.style.display = "block";
      getCalendars();
    } else {
      loggedOutSection.style.display = "block";
      loggedInSection.style.display = "none";
    }
  }
  function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }
  function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
  }
  function importMultipleEvents(genericEvents, calendarId, errorHandler) {
    let events = [];
    genericEvents.forEach(function(item, key2) {
      let resource = {
        summary: item.summary,
        start: {
          dateTime: item.start.setZone("Europe/Rome").toISO(),
          timeZone: "Europe/Rome"
        },
        end: {
          dateTime: item.end.setZone("Europe/Rome").toISO(),
          timeZone: "Europe/Rome"
        },
        recurrence: []
      };
      if (item.location !== void 0) {
        resource.location = item.location;
      }
      if (item.description !== void 0) {
        resource.description = item.description;
      }
      if (item.rrule !== void 0) {
        resource.recurrence.push("RRULE:" + item.rrule);
      }
      if (item.rdate !== void 0) {
        resource.recurrence.push("RDATE:" + item.rdate);
      }
      events.push(resource);
    });
    document.getElementById("importProgress").style.display = "block";
    const promises = events.map((e) => gapi.client.calendar.events.insert({ calendarId, resource: e }));
    Promise.all(promises).then(function(values) {
      console.log(`Imported ${values.length} events`);
      document.getElementById("importProgress").style.display = "none";
      document.getElementById("importOk").style.display = "block";
      setTimeout(function() {
        document.getElementById("importOk").style.display = "none";
      }, 5e3);
    }, function(err) {
      document.getElementById("importProgress").style.display = "none";
      document.getElementById("importFail").style.display = "block";
      setTimeout(function() {
        document.getElementById("creationFail").style.display = "none";
      }, 3e3);
      console.error("Unable to import some events to Calendar", err);
      errorHandler(err.body);
    });
  }
  function getCalendars() {
    return gapi.client.calendar.calendarList.list({}).then(function(response) {
      let s = document.getElementById("calendarId");
      let options = response.result.items;
      options.forEach(function(item, key2) {
        if (/Polimi|Universit/i.test(item.summary))
          s[key2] = new Option(item.summary, item.id, true, true);
        else
          s[key2] = new Option(item.summary, item.id);
      });
    }, function(err) {
      console.error("Execute error", err);
    });
  }
  function handleGcalendarImport(genericEvents, errorHandler) {
    const checkBox = document.getElementById("newCalendar");
    let calendarId = null;
    if (checkBox.checked === true) {
      document.getElementById("creationProgress").style.display = "block";
      const newName = document.getElementById("newName").value;
      gapi.client.calendar.calendars.insert({
        resource: {
          summary: newName,
          timeZone: "Europe/Rome"
        }
      }).then(function(response) {
        document.getElementById("creationProgress").style.display = "none";
        document.getElementById("creationOk").style.display = "block";
        setTimeout(function() {
          document.getElementById("creationOk").style.display = "none";
        }, 3e3);
        calendarId = response.result.id;
        importMultipleEvents(genericEvents, calendarId, errorHandler);
      }, function(err) {
        document.getElementById("creationProgress").style.display = "none";
        document.getElementById("creationFail").style.display = "block";
        setTimeout(function() {
          document.getElementById("creationFail").style.display = "none";
        }, 5e3);
        console.error("Execute error", err);
        errorHandler(err.body);
      });
    } else {
      const calendarIdOptions = document.getElementById("calendarId");
      calendarId = calendarIdOptions.options[calendarIdOptions.selectedIndex].value;
      importMultipleEvents(genericEvents, calendarId, errorHandler);
    }
  }

  // set-language.js
  var strings = {
    en: {
      text: {
        title: "PoliMi schedule converter",
        inputLabel: "Paste lessons copied from the text timetable",
        saveFile: " Save to file",
        importToGcal: " Import to Google Calendar",
        error: "Error! Unable to generate the calendar",
        selectCalText: "Choose which calendar to add the events to",
        calendarIdLabel: "Choose an existing calendar",
        orSelect: "or",
        newCalendarLabel: " Create new calendar",
        newNameLabel: "Name:",
        importButtonText: "Import",
        creationProgress: "Creating calendar...",
        creationOk: "Calendar created",
        creationFail: "Unable to create calendar",
        homeOverview: "Convert the timetable of the Politecnico di Milano courses into an iCalendar file or import it into Google Calendar",
        homeInfo: "PoliMi doesn't have any way to import the courses schedule into external calendars. With this converter you can transform the text timetable into a standard calendar format, iCalendar. Events in this format can be imported easily into most of calendar services and applications. In the following links you can see how to import them on some popular services:",
        homeImportGoogle: "Import to Google Calendar",
        homeImportOutlook: "Import to Outlook",
        homeDetails: "With this tool you can also import events directly to Google Calendar, without having to download any iCalendar file.<br>The tool is available at:",
        homeUserscriptInfo: "The converter can be used from the PoliMi website as a Userscript, installed by clicking <a href='https://github.com/bebora/polimi-schedule-js/raw/master/scripts/polimi-schedule.user.js'>here</a>. In this case you need to have an Userscript manager, such as Greasemonkey or Tampermonkey. Quick import to Google Calendar isn't available in this mode.",
        repoInfo: "You can read the converter code on its <a href='https://github.com/bebora/polimi-schedule-js'>Github repository</a>.",
        howToUseHead: "How to use?",
        howToUseContent: `Go to the timetable page you want to convert. You can use both the one from <a href='https://www.polimi.it/en/online-services/'>Online services</a> and the one from <a href='https://polimi.it/orario-lezioni'>Manifesto degli Studi</a>. In the latter case, make sure to enable the customized time schedule and choose some courses, then go to "View the schedule".<br>Click on "Text timetable" and select the courses with your mouse, then copy them with a right click or by pressing Ctrl+C (\u2318+C on Mac).`,
        howToUseEnd: "Go to the converter page and paste the text with a right click or by pressing Ctrl+V (\u2318+V on Mac). Click on the appropriate button to download the events or to import them to Google Calendar.",
        gcalendarHead: "Google Calendar integration",
        gcalendarText: "The app can directly insert events Google Calendar to simplify the import, without having to download any file.<br>In order to do so, it explicitly requests user consent to connect to their Google account. Specifically, the app needs to read the names of existing calendars to list them when the user chooses where to import the events. The user may want to create a new calendar for the events, so the app also needs write access on Google Calendar. Full access permissions(read+write) are then needed for the correct app operations, but it doesn't and will never use them for purposes other than those described here.<br>You can read the complete privacy policy by clicking on the link at the bottom of the page.",
        homepageFooter: "Home + How to use",
        howToLink: "How to use",
        importProgress: "Importing events...",
        importOk: "Events imported",
        importFail: "Unable to import the events",
        errorTitle: "Oops! Something went wrong",
        genericError: "The text you pasted isn't valid or it is in a new unsupported format.",
        googleErrorSuggestion: "If you are using Google Calendar, check that your connection works and that you gave the required permissions to the application.",
        errorContact: "The problem may happen to other users! You can report it on Telegram or GitHub.",
        telegramGroup: "Telegram group",
        githubIssue: "Open Issue",
        manualErrorPopup: "Not working?"
      },
      placeholder: {
        input: "Paste lessons copied from the text timetable"
      }
    },
    it: {
      text: {
        title: "Convertitore orario PoliMi",
        inputLabel: "Incolla le lezioni copiate dall'orario testuale",
        saveFile: " Salva su file",
        importToGcal: " Importa su Google Calendar",
        error: "Errore! Non riesco a generare il calendario",
        selectCalText: "Seleziona il calendario dove importare gli eventi",
        calendarIdLabel: "Scegli un calendario esistente",
        orSelect: "oppure",
        newCalendarLabel: " Crea nuovo calendario",
        newNameLabel: "Nome:",
        importButtonText: "Importa",
        creationProgress: "Creando il calendario...",
        creationOk: "Calendario creato",
        creationFail: "Creazione calendario fallita",
        homeOverview: "Converti le lezioni del Politecnico di Milano in un file iCalendar o importale su Google Calendar",
        homeInfo: "Il PoliMi non consente normalmente di importare gli orari delle lezioni su calendari esterni. Con questo convertitore \xE8 possibile trasformare l'orario testuale dei Servizi Online in un calendario in formato standard, ovvero iCalendar. Gli orari in formato iCalendar possono essere importati facilmente nella maggior parte delle applicazioni o servizi di calendario. Per esempio, nelle seguenti pagine \xE8 descritto come importare file iCalendar su alcuni servizi popolari:",
        homeImportGoogle: "Importazione su Google Calendar",
        homeImportOutlook: "Importazione su Outlook",
        homeDetails: "Con questo tool \xE8 inoltre possibile importare gli eventi direttamente su Google Calendar, senza dover scaricare il file iCalendar, per rendere l'importazione ancora pi\xF9 semplice.<br>Il tool \xE8 disponibile al seguente link:",
        homeUserscriptInfo: "Il convertitore pu\xF2 essere usato dal sito del PoliMi se installato come Userscript, cliccando <a href='https://github.com/bebora/polimi-schedule-js/raw/master/scripts/polimi-schedule.user.js'>qui</a>. In tal caso \xE8 necessario avere un Userscript manager, come Greasemonkey o Tampermonkey. Con questa modalit\xE0 non \xE8 integrata l'importazione veloce su Google Calendar.",
        repoInfo: "\xC8 possibile consultare il codice del tool nella sua <a href='https://github.com/bebora/polimi-schedule-js'>repository Github</a>.",
        howToUseHead: "Come si usa?",
        howToUseContent: `Vai sulla pagina degli orari che vuoi convertire. Puoi usare sia quella dei <a href='https://www.polimi.it/servizionline/'>Servizi Online</a> con gli orari dei tuoi corsi, sia quella del <a href='https://polimi.it/orario-lezioni'>Manifesto degli Studi</a>. In quest'ultimo caso, assicurati di abilitare l'orario personalizzato e scegliere delle materie, poi clicca su "Visualizza l'orario".<br>Clicca quindi su "Orario testuale" e seleziona gli orari con il mouse, poi copiali con il tasto destro oppure premendo Ctrl+C (\u2318+C su Mac).`,
        howToUseEnd: "Vai sulla pagina del convertitore ed incolla il testo con il tasto destro o premendo Ctrl+V (\u2318+V su Mac). Clicca sul bottone opportuno per scaricare il calendario o per importarlo su Google Calendar.",
        gcalendarHead: "Integrazione con Google Calendar",
        gcalendarText: "L'app pu\xF2 inserire gli eventi su Google Calendar direttamente per semplificare il pi\xF9 possibile l'importazione, senza dover scaricare nessun file.<br>Per fare ci\xF2, richiede esplicitamente il consenso dell'utente per collegarsi all'account Google. In particolare, l'app ha bisogno di leggere i nomi dei calendari esistenti per poi proporli se l'utente vuole importare gli eventi in un calendario esistente. L'utente pu\xF2 voler creare un nuovo calendario per gli eventi, quindi l'app ha bisogno anche dei permessi in scrittura sul calendario Google. Sono necessari quindi permessi completi sul calendario, ma l'app non usa ora n\xE9 user\xE0 mai i permessi per scopi differenti da quelli qui descritti.<br>\xC8 possibile vedere la privacy policy completa cliccando sul link a fondo pagina.",
        homepageFooter: "Home + Istruzioni d'uso",
        howToLink: "Istruzioni",
        importProgress: "Importando gli eventi...",
        importOk: "Eventi importati",
        importFail: "Impossibile importare gli eventi",
        errorTitle: "Ops! Qualcosa \xE8 andato storto",
        genericError: "Il testo che hai incollato non \xE8 valido oppure \xE8 in un nuovo formato non supportato.",
        googleErrorSuggestion: "Se stai usando Google Calendar, controlla di avere una connessione funzionante e di aver dato i permessi all'applicazione.",
        errorContact: "Il problema potrebbe capitare anche ad altri utenti! Puoi segnalarlo su Telegram o GitHub.",
        telegramGroup: "Gruppo Telegram",
        githubIssue: "Apri Issue",
        manualErrorPopup: "Qualcosa non va?"
      },
      placeholder: {
        input: "Incolla le lezioni copiate dall'orario testuale"
      }
    }
  };
  function setLanguage(lang) {
    let tempLang = "en";
    if (lang in strings) {
      tempLang = lang;
    }
    for (const [key2, value2] of Object.entries(strings[tempLang].text)) {
      let node = document.getElementById(key2);
      if (node !== null) {
        node.innerHTML = value2;
      }
    }
    for (const [key2, value2] of Object.entries(strings[tempLang].placeholder)) {
      let node = document.getElementById(key2);
      if (node !== null) {
        node.placeholder = value2;
      }
    }
    document.getElementById(tempLang + "Flag").classList.remove("grayscale");
    for (let i of Object.keys(strings).filter((item) => item !== tempLang)) {
      document.getElementById(i + "Flag").classList.add("grayscale");
    }
    document.title = strings[tempLang].text.title;
  }

  // schedule-to-ical.js
  var import_luxon = __toESM(require_luxon(), 1);
  var import_immutable_ics = __toESM(require_immutable_ics_umd(), 1);

  // node_modules/uuid/dist/esm-browser/rng.js
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }

  // node_modules/uuid/dist/esm-browser/regex.js
  var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

  // node_modules/uuid/dist/esm-browser/validate.js
  function validate(uuid) {
    return typeof uuid === "string" && regex_default.test(uuid);
  }
  var validate_default = validate;

  // node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).substr(1));
  }
  var i;
  function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
    if (!validate_default(uuid)) {
      throw TypeError("Stringified UUID is invalid");
    }
    return uuid;
  }
  var stringify_default = stringify;

  // node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return stringify_default(rnds);
  }
  var v4_default = v4;

  // schedule-to-ical.js
  var europeRomeIcalTimezone = `X-WR-TIMEZONE:Europe/Rome
BEGIN:VTIMEZONE
TZID:Europe/Rome
X-LIC-LOCATION:Europe/Rome
BEGIN:DAYLIGHT
TZOFFSETFROM:+0100
TZOFFSETTO:+0200
TZNAME:CEST
DTSTART:19700329T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:+0200
TZOFFSETTO:+0100
TZNAME:CET
DTSTART:19701025T030000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
END:STANDARD
END:VTIMEZONE
`.replace(/(?<=[^\r])\n/g, "\r\n");
  var weekdays = {
    Domenica: 7,
    Luned\u00EC: 1,
    Marted\u00EC: 2,
    Mercoled\u00EC: 3,
    Gioved\u00EC: 4,
    Venerd\u00EC: 5,
    Sabato: 6,
    Sunday: 7,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
  };
  var months = {
    jan: 1,
    feb: 2,
    mar: 3,
    apr: 4,
    may: 5,
    jun: 6,
    jul: 7,
    aug: 8,
    sep: 9,
    oct: 10,
    nov: 11,
    dec: 12,
    gen: 1,
    mag: 5,
    giu: 6,
    lug: 7,
    ago: 8,
    set: 9,
    ott: 10,
    dic: 12
  };
  var acceptableStartingMonths = [2, 3, 4, 9, 10];
  var acceptableEndingMonths = [4, 5, 6, 12, 1];
  var languageLookup = {
    Lezione: "it",
    Esercitazione: "it",
    "Laboratorio informatico": "it",
    Laboratorio: "it",
    Lesson: "en",
    Training: "en",
    Laboratory: "en",
    "Computer laboratory": "en"
  };
  var professorsLookup = {
    it: { one: "Docente:", many: "Docenti:" },
    en: { one: "Professor:", many: "Professors:" }
  };
  function insertVTimezone(rawCalendar) {
    return rawCalendar.replace(/(?<=\r\n)(?=BEGIN:VEVENT)/, europeRomeIcalTimezone);
  }
  function dateToLocalRuleText(date) {
    return date.toFormat("yyyyMMdd'T'HHmmss");
  }
  function dateToUTCRuleText(date) {
    return date.toUTC().toFormat("yyyyMMdd'T'HHmmss'Z'");
  }
  function setHourGenerator(firstDatetime) {
    return (otherDate) => {
      return otherDate.set({
        hour: firstDatetime.hour,
        minute: firstDatetime.minute
      });
    };
  }
  function isValidDate(line) {
    return /\d{2}-[a-z]{3}-\d{4}/gm.test(line);
  }
  function isCourseDdMmYyyy(startComponents, endComponents) {
    let ret = true;
    const startMonth = parseInt(startComponents[2]);
    const endMonth = parseInt(endComponents[2]);
    const startAsNumber = parseInt(startComponents[3] + startComponents[2] + startComponents[1]);
    const endAsNumber = parseInt(endComponents[3] + endComponents[2] + endComponents[1]);
    if (acceptableStartingMonths.indexOf(startMonth) === -1 || acceptableEndingMonths.indexOf(endMonth) === -1 || startMonth > 12 || endMonth > 12 || startAsNumber > endAsNumber) {
      ret = false;
    }
    return ret;
  }
  function createDateFromText(text) {
    let pieces = text.split("-");
    const year = parseInt(pieces[2]);
    const month = months[pieces[1].toLowerCase()];
    if (month === void 0) {
      throw new Error(`Invalid month in: ${text}`);
    }
    const day = parseInt(pieces[0]);
    return import_luxon.DateTime.fromObject({ year, month, day, hour: 12, minute: 0 }, { zone: "Europe/Rome" });
  }
  function buildProfessorsList(course, alreadyMatchedTitles) {
    let professorNames = [];
    for (let title of alreadyMatchedTitles) {
      if (title[3] !== void 0)
        professorNames.push(title[3].trim());
    }
    const virtualClassroomRegex = /^\s*(?:Aula virtuale|Virtual classroom)\s*-\s*(.*)$/gm;
    let virtualClassrooms = [...course.matchAll(virtualClassroomRegex)];
    for (let virtualClassroom of virtualClassrooms) {
      professorNames.push(virtualClassroom[1].trim());
    }
    professorNames = [...new Set(professorNames)];
    return professorNames;
  }
  function getProfessorString(lessonType, professorNames) {
    let pluralSelector = null;
    let languageTable = professorsLookup[languageLookup[lessonType] || "en"];
    if (professorNames.length === 1) {
      pluralSelector = "one";
    } else if (professorNames.length > 1) {
      pluralSelector = "many";
    }
    let professorString = "";
    if (pluralSelector != null) {
      professorString = languageTable[pluralSelector];
    }
    return professorString;
  }
  function parseAUICCourse(course, professorNames, courseName) {
    const events = [];
    let timeLocationRegex = /^\s*([^\s]*) (?:dalle|from) (\d{2}):(\d{2}) (?:alle|to) (\d{2}):(\d{2}), (.+?(?=\sin\s|\sClassroom\s|\sAula\s))(?: in (?:the)?\s*(?:aula|classroom|lecture theatre))*\s*(.*)$/gim;
    let timesLocations = [...course.split(timeLocationRegex)];
    timesLocations.splice(0, 1);
    let regexCapturingGroups = 8;
    let numberTimesLocations = timesLocations.length / regexCapturingGroups;
    for (let i = 0; i < numberTimesLocations; i++) {
      let startHour = timesLocations[i * regexCapturingGroups + 1];
      let startMinute = timesLocations[i * regexCapturingGroups + 2];
      let endHour = timesLocations[i * regexCapturingGroups + 3];
      let endMinute = timesLocations[i * regexCapturingGroups + 4];
      let lessonType = timesLocations[i * regexCapturingGroups + 5];
      lessonType = lessonType[0].toUpperCase() + lessonType.substring(1);
      let location2 = timesLocations[i * regexCapturingGroups + 6];
      let dates = timesLocations[i * regexCapturingGroups + 7].split("\n\n")[0].trim().split("\n");
      dates = dates.filter(isValidDate);
      const partialFirstDay = createDateFromText(dates.splice(0, 1)[0]);
      const firstDay = partialFirstDay.set({
        hour: startHour,
        minute: startMinute
      });
      const firstEnd = partialFirstDay.set({
        hour: endHour,
        minute: endMinute
      });
      let professorString = getProfessorString(lessonType, professorNames);
      let event = {
        summary: courseName,
        start: firstDay,
        end: firstEnd,
        dtstamp: import_luxon.DateTime.now(),
        location: location2,
        description: lessonType + "\n" + professorString + "\n" + professorNames.join("\n")
      };
      if (dates.length > 0) {
        event.rdate = dates.map(createDateFromText).map(setHourGenerator(firstDay)).map(dateToUTCRuleText).join(",");
      }
      events.push(event);
    }
    return { data: events, error: null };
  }
  function parseIIICourse(course, datesRegex, titleRegex, professorNames, courseName) {
    datesRegex.lastIndex = 0;
    let datesGroups = [...course.matchAll(datesRegex)];
    if (datesGroups.length > 1) {
      let subCourses = [];
      let tempCourse = "";
      for (let row of course.split("\n")) {
        if (titleRegex.test(row)) {
          tempCourse = tempCourse.trim();
          if (tempCourse !== "")
            subCourses.push(tempCourse);
          tempCourse = row;
        } else {
          tempCourse += "\n" + row;
        }
      }
      tempCourse = tempCourse.trim();
      if (tempCourse !== "")
        subCourses.push(tempCourse);
      const headingData = parseCourse(subCourses[0], professorNames);
      const followingData = parseCourse(subCourses.slice(1).join("\n"), professorNames);
      return {
        data: [...headingData.data, ...followingData.data],
        error: headingData.error || followingData.error
      };
    } else if (datesGroups.length === 1) {
      let datesMatch = datesGroups[0];
      const dateComponentsRegex = /(\d{2})\/(\d{2})\/(\d{4})/;
      const startComponents = dateComponentsRegex.exec(datesMatch[2]);
      const endComponents = dateComponentsRegex.exec(datesMatch[3]);
      const isDdMmYyyy = isCourseDdMmYyyy(startComponents, endComponents);
      const dateFormat = isDdMmYyyy ? "dd/MM/yyyy" : "MM/dd/yyyy";
      let start = import_luxon.DateTime.fromFormat(datesMatch[2], dateFormat, {
        zone: "Europe/Rome"
      });
      let end = import_luxon.DateTime.fromFormat(datesMatch[3], dateFormat, {
        zone: "Europe/Rome"
      });
      if (start.valueOf() > end.valueOf()) {
        return {
          data: [],
          error: `Start is unexpectedly greater than End (${start} > ${end})`
        };
      }
      const events = [];
      let courseDays = /[^\n]+\n[^\n]+\n?([\s\S]*)/.exec(course);
      if (courseDays !== null && courseDays[1] !== "") {
        let rows = courseDays[1].trim().split("\n\n")[0].split("\n");
        for (let j of rows) {
          let timeMatch = /([^\s]*) (?:dalle|from) (\d+)[:.](\d+)\s?(?<startMidday>(?:[ap])\.?m\.?)? (?:alle|to) (\d+)[:.](\d+)\s?(?<endMidday>(?:[ap])\.?m\.?)?/i.exec(j);
          if (timeMatch === null) {
            continue;
          }
          let noRoomTest = /.*? (?:Aula al momento non disponibile|Classroom not available yet).*/;
          let weekDay = weekdays[timeMatch[1]];
          let firstDay = start;
          if (weekDay < start.weekday) {
            firstDay = start.set({
              day: start.day - start.weekday + 7 + weekDay
            });
          } else {
            firstDay = start.set({ day: start.day - start.weekday + weekDay });
          }
          const startMiddayOffset = timeMatch.groups.startMidday !== void 0 && timeMatch.groups.startMidday[0] === "p" ? 12 : 0;
          firstDay = firstDay.set({
            hour: parseInt(timeMatch[2]) + startMiddayOffset,
            minute: parseInt(timeMatch[3])
          });
          let lastDay = end;
          if (weekDay <= end.weekday) {
            lastDay = end.set({ day: end.day - end.weekday + weekDay });
          } else {
            lastDay = end.set({ day: end.day - end.weekday - 7 + weekDay });
          }
          lastDay = lastDay.set({
            hour: firstDay.hour,
            minute: firstDay.minute
          });
          if (firstDay.valueOf() > lastDay.valueOf()) {
            return {
              data: events,
              error: `First day is unexpectedly greater than Last day (${firstDay} > ${lastDay})`
            };
          }
          let firstEnd = firstDay;
          const endMiddayOffset = timeMatch.groups.endMidday !== void 0 && timeMatch.groups.endMidday[0] === "p" ? 12 : 0;
          firstEnd = firstEnd.set({
            hour: parseInt(timeMatch[5]) + endMiddayOffset,
            minute: parseInt(timeMatch[6])
          });
          let location2 = null;
          let lessonType = null;
          if (!noRoomTest.test(j)) {
            let roomMatch = /,\s*(.+)\s+in\s+(?:.*?)(?:aula|classroom|lecture theatre|the classroom|the|room) (.*)/.exec(j);
            if (roomMatch === null) {
              let inaccurateRoomMatch = /,\s*(?:classroom lesson)?\s*(.*)/.exec(j);
              if (inaccurateRoomMatch !== null) {
                lessonType = "Lesson";
                location2 = inaccurateRoomMatch[1];
              }
            } else {
              lessonType = roomMatch[1][0].toUpperCase() + roomMatch[1].substring(1);
              location2 = roomMatch[2];
            }
          }
          let professorString = getProfessorString(lessonType, professorNames);
          events.push({
            summary: courseName,
            start: firstDay,
            end: firstEnd,
            dtstamp: import_luxon.DateTime.now(),
            location: location2,
            rrule: "FREQ=WEEKLY;UNTIL=" + dateToUTCRuleText(lastDay),
            description: lessonType + "\n" + professorString + "\n" + professorNames.join("\n")
          });
        }
      }
      return { data: events, error: null };
    }
  }
  function parseCourse(course, upperLevelProfessorNames = null, subcourseSeparator = null) {
    const titleRegex = /^\s*(\d{6}) - (.*?)(?:\s*\(\s*(?:Docente|Professor|Lecturer|Teacher):(.*)\)|$)/gm;
    const titles = [...course.matchAll(titleRegex)];
    if (titles.length === 0) {
      return { data: [], error: null };
    }
    let professorNames = buildProfessorsList(course, titles);
    if (professorNames.length === 0 && upperLevelProfessorNames !== null) {
      professorNames = upperLevelProfessorNames;
    }
    if (subcourseSeparator !== null && titles.length > 1) {
      if (course.includes(subcourseSeparator)) {
        let innerEvents = [];
        for (const wholeCourse of course.split(subcourseSeparator)) {
          const newSubcourse = parseCourse(wholeCourse.trim(), professorNames);
          innerEvents = [...innerEvents, ...newSubcourse.data];
          if (newSubcourse.error !== null) {
            return { data: innerEvents, error: newSubcourse.error };
          }
        }
        return { data: innerEvents, error: null };
      }
    }
    const noLessonTest = /\s*(?:L'orario non è stato definito|The schedule has not been defined)/;
    const noScheduleTest = /\s*(?:Nessun orario definito|No timetable defined)/;
    if (noLessonTest.test(course) || noScheduleTest.test(course)) {
      return { data: [], error: null };
    }
    const courseName = titles[titles.length - 1][2];
    const datesRegex = /(1|2|A|Annual(?:e*))?\s*(?:Inizio lezioni|Start of lessons|Lectures start|Lessons start): (\d{2}\/\d{2}\/\d{4})\s*(?:Fine lezioni|End of lesson(?:s*)|Lectures end|Lessons end): (\d{2}\/\d{2}\/\d{4})/g;
    if (!datesRegex.test(course)) {
      return parseAUICCourse(course, professorNames, courseName);
    } else {
      return parseIIICourse(course, datesRegex, titleRegex, professorNames, courseName);
    }
  }
  function preprocessText(userInput) {
    return userInput.replace(/\n\)/g, ")");
  }
  function parseText(allCourses) {
    try {
      const preprocessedInput = preprocessText(allCourses);
      let separator = "\n\n\n";
      if (preprocessedInput.trim().includes("\n\n\n\n")) {
        separator = "\n\n\n\n";
      }
      let coursesList = preprocessedInput.trim().split(separator);
      let events = [];
      for (let wholeCourse of coursesList) {
        const newCourse = parseCourse(wholeCourse.trim(), null, separator.slice(0, -1));
        events = [...events, ...newCourse.data];
        if (newCourse.error !== null) {
          return { data: events, error: newCourse.error };
        }
      }
      if (events.length === 0 && preprocessedInput.trim().length !== 0) {
        return { data: [], error: "No courses detected" };
      }
      return { data: events, error: null };
    } catch (err) {
      console.error("The website is no longer compatible with polimi-schedule-js. Please report the error message and the calendar text you are trying to convert. (" + err.message + ")");
      console.log(err);
      return { data: [], error: err.message };
    }
  }
  function getIcalendar(allCourses, logError = true) {
    let events = parseText(allCourses);
    if (events.error !== null) {
      if (logError) {
        console.error("Unable to create iCalendar file! Text may be invalid or empty. If you think your text is correct, retry and/or contact the website maintainer.");
      }
      return { data: "", error: events.error };
    } else {
      const versionProperty = new import_immutable_ics.Property({ name: "VERSION", value: 2 });
      const prodId = new import_immutable_ics.Property({ name: "PRODID", value: "bebora@github" });
      let calendar = new import_immutable_ics.Component({
        name: "VCALENDAR",
        properties: [versionProperty, prodId]
      });
      for (let e of events.data) {
        let newEvent = new import_immutable_ics.Component({
          name: "VEVENT",
          properties: [
            new import_immutable_ics.Property({
              name: "SUMMARY",
              value: e.summary
            }),
            new import_immutable_ics.Property({
              name: "DTSTART",
              parameters: { TZID: "Europe/Rome" },
              value: dateToLocalRuleText(e.start)
            }),
            new import_immutable_ics.Property({
              name: "DTEND",
              parameters: { TZID: "Europe/Rome" },
              value: dateToLocalRuleText(e.end)
            }),
            new import_immutable_ics.Property({
              name: "DTSTAMP",
              value: dateToUTCRuleText(e.dtstamp)
            }),
            new import_immutable_ics.Property({
              name: "UID",
              value: v4_default()
            })
          ]
        });
        if (e.location !== void 0) {
          newEvent = newEvent.pushProperty(new import_immutable_ics.Property({
            name: "LOCATION",
            value: e.location
          }));
        }
        if (e.description !== void 0) {
          newEvent = newEvent.pushProperty(new import_immutable_ics.Property({
            name: "DESCRIPTION",
            value: e.description
          }));
        }
        if (e.rrule !== void 0) {
          newEvent = newEvent.pushProperty(new import_immutable_ics.Property({
            name: "RRULE",
            value: e.rrule
          }));
        }
        if (e.rdate !== void 0) {
          newEvent = newEvent.pushProperty(new import_immutable_ics.Property({
            name: "RDATE",
            value: e.rdate
          }));
        }
        calendar = calendar.pushComponent(newEvent);
      }
      const rawCalendar = calendar.toString();
      return { data: insertVTimezone(rawCalendar), error: null };
    }
  }

  // ui.js
  var import_file_saver = __toESM(require_FileSaver_min(), 1);
  document.getElementById("download").addEventListener("click", function() {
    let icsContent = getIcalendar(document.getElementById("input").value);
    if (icsContent.error !== null) {
      document.getElementById("error").style.display = "inline-block";
      setTimeout(function() {
        document.getElementById("error").style.display = "none";
      }, 3e3);
      displayErrorPopup(icsContent.error);
    } else {
      let blob = new Blob([icsContent.data], {
        type: "text/plain;charset=utf-8"
      });
      (0, import_file_saver.saveAs)(blob, "orarioPolimi.ics");
    }
  });
  document.getElementById("import_button").addEventListener("click", function() {
    const events = parseText(document.getElementById("input").value);
    if (events.error !== null) {
      document.getElementById("error").style.display = "inline-block";
      setTimeout(function() {
        document.getElementById("error").style.display = "none";
      }, 3e3);
      console.error("Unable to parse courses data! Text may be invalid or empty. If you think your text is correct, retry and/or contact the website maintainer.");
      displayErrorPopup(events.error);
    } else {
      handleGcalendarImport(events.data, displayErrorPopup);
    }
  });
  document.getElementById("import-gcal").addEventListener("click", function() {
    showOverlay("google-pop");
  });
  document.querySelectorAll(".pop-window").forEach((el) => el.addEventListener("click", (event) => {
    event.stopPropagation();
  }));
  function hideOverlay(id) {
    document.getElementById(id).style.display = "none";
  }
  function showOverlay(id) {
    document.getElementById(id).style.display = "block";
  }
  function displayNewName() {
    const checkBox = document.getElementById("newCalendar");
    const inputElem = document.getElementById("inputElem");
    if (checkBox.checked === true) {
      inputElem.style.display = "block";
    } else {
      inputElem.style.display = "none";
    }
  }
  var telegram_dst = null;
  var piece1 = atob("cG9saW1p");
  var piece2 = [..."troppus_sj_eludehcs"].reverse().join("");
  var base_issue_url = "https://github.com/bebora/polimi-schedule-js/issues/new";
  function generateLinks(errorInfo = null) {
    if (telegram_dst === null) {
      telegram_dst = `https://t.me/${piece1}_${piece2}`;
      document.getElementById("telegram-link").href = telegram_dst;
    }
    const timetableInput = document.getElementById("input").value;
    let issueText = `<!-- Please add a title above and describe the problem on the next line -->



<details>
    <summary>Debug info</summary>

User agent: \`${navigator.userAgent}\`
Timetable input:
\`\`\`
${timetableInput}
\`\`\`
`;
    if (errorInfo !== null) {
      issueText += `Error info: \`${JSON.stringify(errorInfo, null, 0)}\`
`;
    }
    issueText += "</details>";
    document.getElementById("github-link").href = `${base_issue_url}?body=${encodeURIComponent(issueText)}`;
  }
  function displayErrorPopup(errorInfo = null) {
    generateLinks(errorInfo);
    showOverlay("error-pop");
    console.error("Error info:", errorInfo);
  }
  document.getElementById("manualErrorPopup").addEventListener("click", () => {
    displayErrorPopup();
  });
  function bindEventListeners() {
    document.getElementById("google-pop").addEventListener("click", () => {
      hideOverlay("google-pop");
    });
    document.getElementById("google-close-button").addEventListener("click", () => {
      hideOverlay("google-pop");
    });
    document.getElementById("error-pop").addEventListener("click", () => {
      hideOverlay("error-pop");
    });
    document.getElementById("error-close-button").addEventListener("click", () => {
      hideOverlay("error-pop");
    });
    document.getElementById("itFlag").addEventListener("click", () => {
      setLanguage("it");
    });
    document.getElementById("enFlag").addEventListener("click", () => {
      setLanguage("en");
    });
    document.getElementById("newCalendar").addEventListener("click", displayNewName);
  }
  function setupUi() {
    bindEventListeners();
    setLanguage((navigator.language || navigator.userLanguage).slice(0, 2));
  }
  setupUi();
  return __toCommonJS(ui_exports);
})();
//# sourceMappingURL=web-core-bundle.js.map
