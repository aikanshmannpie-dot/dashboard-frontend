import {
  __commonJS,
  __require
} from "./chunk-C2MXH2NC.js";

// node_modules/xlsx/dist/xlsx.mini.min.js
var require_xlsx_mini_min = __commonJS({
  "node_modules/xlsx/dist/xlsx.mini.min.js"(exports, module) {
    var XLSX = {};
    function make_xlsx_lib(e) {
      e.version = "0.18.5";
      var r = 1200, t = 1252;
      var a = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4];
      var n = { 0: 1252, 1: 65001, 2: 65001, 77: 1e4, 128: 932, 129: 949, 130: 1361, 134: 936, 136: 950, 161: 1253, 162: 1254, 163: 1258, 177: 1255, 178: 1256, 186: 1257, 204: 1251, 222: 874, 238: 1250, 255: 1252, 69: 6969 };
      var i = function(e2) {
        if (a.indexOf(e2) == -1) return;
        t = n[0] = e2;
      };
      function s() {
        i(1252);
      }
      var l = function(e2) {
        r = e2;
        i(e2);
      };
      function o() {
        l(1200);
        s();
      }
      function c(e2) {
        var r2 = [];
        for (var t2 = 0, a2 = e2.length; t2 < a2; ++t2) r2[t2] = e2.charCodeAt(t2);
        return r2;
      }
      function f(e2) {
        var r2 = [];
        for (var t2 = 0; t2 < e2.length >> 1; ++t2) r2[t2] = String.fromCharCode(e2.charCodeAt(2 * t2) + (e2.charCodeAt(2 * t2 + 1) << 8));
        return r2.join("");
      }
      function u(e2) {
        var r2 = [];
        for (var t2 = 0; t2 < e2.length >> 1; ++t2) r2[t2] = String.fromCharCode(e2.charCodeAt(2 * t2 + 1) + (e2.charCodeAt(2 * t2) << 8));
        return r2.join("");
      }
      var h = function(e2) {
        var r2 = e2.charCodeAt(0), t2 = e2.charCodeAt(1);
        if (r2 == 255 && t2 == 254) return f(e2.slice(2));
        if (r2 == 254 && t2 == 255) return u(e2.slice(2));
        if (r2 == 65279) return e2.slice(1);
        return e2;
      };
      var p = function xc(e2) {
        return String.fromCharCode(e2);
      };
      var d = function Sc(e2) {
        return String.fromCharCode(e2);
      };
      var m = null;
      var v = true;
      var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      function b(e2) {
        var r2 = "";
        var t2 = 0, a2 = 0, n2 = 0, i2 = 0, s2 = 0, l2 = 0, o2 = 0;
        for (var c2 = 0; c2 < e2.length; ) {
          t2 = e2.charCodeAt(c2++);
          i2 = t2 >> 2;
          a2 = e2.charCodeAt(c2++);
          s2 = (t2 & 3) << 4 | a2 >> 4;
          n2 = e2.charCodeAt(c2++);
          l2 = (a2 & 15) << 2 | n2 >> 6;
          o2 = n2 & 63;
          if (isNaN(a2)) {
            l2 = o2 = 64;
          } else if (isNaN(n2)) {
            o2 = 64;
          }
          r2 += g.charAt(i2) + g.charAt(s2) + g.charAt(l2) + g.charAt(o2);
        }
        return r2;
      }
      function w(e2) {
        var r2 = "";
        var t2 = 0, a2 = 0, n2 = 0, i2 = 0, s2 = 0, l2 = 0, o2 = 0;
        e2 = e2.replace(/[^\w\+\/\=]/g, "");
        for (var c2 = 0; c2 < e2.length; ) {
          i2 = g.indexOf(e2.charAt(c2++));
          s2 = g.indexOf(e2.charAt(c2++));
          t2 = i2 << 2 | s2 >> 4;
          r2 += String.fromCharCode(t2);
          l2 = g.indexOf(e2.charAt(c2++));
          a2 = (s2 & 15) << 4 | l2 >> 2;
          if (l2 !== 64) {
            r2 += String.fromCharCode(a2);
          }
          o2 = g.indexOf(e2.charAt(c2++));
          n2 = (l2 & 3) << 6 | o2;
          if (o2 !== 64) {
            r2 += String.fromCharCode(n2);
          }
        }
        return r2;
      }
      var y = /* @__PURE__ */ (function() {
        return typeof Buffer !== "undefined" && false;
      })();
      var k = (function() {
        if (typeof Buffer !== "undefined") {
          var e2 = !Buffer.from;
          if (!e2) try {
            Buffer.from("foo", "utf8");
          } catch (r2) {
            e2 = true;
          }
          return e2 ? function(e3, r2) {
            return r2 ? new Buffer(e3, r2) : new Buffer(e3);
          } : Buffer.from.bind(Buffer);
        }
        return function() {
        };
      })();
      function x(e2) {
        if (y) return Buffer.alloc ? Buffer.alloc(e2) : new Buffer(e2);
        return typeof Uint8Array != "undefined" ? new Uint8Array(e2) : new Array(e2);
      }
      function S(e2) {
        if (y) return Buffer.allocUnsafe ? Buffer.allocUnsafe(e2) : new Buffer(e2);
        return typeof Uint8Array != "undefined" ? new Uint8Array(e2) : new Array(e2);
      }
      var C = function Cc(e2) {
        if (y) return k(e2, "binary");
        return e2.split("").map(function(e3) {
          return e3.charCodeAt(0) & 255;
        });
      };
      function _(e2) {
        if (typeof ArrayBuffer === "undefined") return C(e2);
        var r2 = new ArrayBuffer(e2.length), t2 = new Uint8Array(r2);
        for (var a2 = 0; a2 != e2.length; ++a2) t2[a2] = e2.charCodeAt(a2) & 255;
        return r2;
      }
      function A(e2) {
        if (Array.isArray(e2)) return e2.map(function(e3) {
          return String.fromCharCode(e3);
        }).join("");
        var r2 = [];
        for (var t2 = 0; t2 < e2.length; ++t2) r2[t2] = String.fromCharCode(e2[t2]);
        return r2.join("");
      }
      function T(e2) {
        if (typeof Uint8Array === "undefined") throw new Error("Unsupported");
        return new Uint8Array(e2);
      }
      function E(e2) {
        if (typeof ArrayBuffer == "undefined") throw new Error("Unsupported");
        if (e2 instanceof ArrayBuffer) return E(new Uint8Array(e2));
        var r2 = new Array(e2.length);
        for (var t2 = 0; t2 < e2.length; ++t2) r2[t2] = e2[t2];
        return r2;
      }
      var F = y ? function(e2) {
        return Buffer.concat(e2.map(function(e3) {
          return Buffer.isBuffer(e3) ? e3 : k(e3);
        }));
      } : function(e2) {
        if (typeof Uint8Array !== "undefined") {
          var r2 = 0, t2 = 0;
          for (r2 = 0; r2 < e2.length; ++r2) t2 += e2[r2].length;
          var a2 = new Uint8Array(t2);
          var n2 = 0;
          for (r2 = 0, t2 = 0; r2 < e2.length; t2 += n2, ++r2) {
            n2 = e2[r2].length;
            if (e2[r2] instanceof Uint8Array) a2.set(e2[r2], t2);
            else if (typeof e2[r2] == "string") {
              throw "wtf";
            } else a2.set(new Uint8Array(e2[r2]), t2);
          }
          return a2;
        }
        return [].concat.apply([], e2.map(function(e3) {
          return Array.isArray(e3) ? e3 : [].slice.call(e3);
        }));
      };
      function D(e2) {
        var r2 = [], t2 = 0, a2 = e2.length + 250;
        var n2 = x(e2.length + 255);
        for (var i2 = 0; i2 < e2.length; ++i2) {
          var s2 = e2.charCodeAt(i2);
          if (s2 < 128) n2[t2++] = s2;
          else if (s2 < 2048) {
            n2[t2++] = 192 | s2 >> 6 & 31;
            n2[t2++] = 128 | s2 & 63;
          } else if (s2 >= 55296 && s2 < 57344) {
            s2 = (s2 & 1023) + 64;
            var l2 = e2.charCodeAt(++i2) & 1023;
            n2[t2++] = 240 | s2 >> 8 & 7;
            n2[t2++] = 128 | s2 >> 2 & 63;
            n2[t2++] = 128 | l2 >> 6 & 15 | (s2 & 3) << 4;
            n2[t2++] = 128 | l2 & 63;
          } else {
            n2[t2++] = 224 | s2 >> 12 & 15;
            n2[t2++] = 128 | s2 >> 6 & 63;
            n2[t2++] = 128 | s2 & 63;
          }
          if (t2 > a2) {
            r2.push(n2.slice(0, t2));
            t2 = 0;
            n2 = x(65535);
            a2 = 65530;
          }
        }
        r2.push(n2.slice(0, t2));
        return F(r2);
      }
      var O = /\u0000/g, M = /[\u0001-\u0006]/g;
      function N(e2) {
        var r2 = "", t2 = e2.length - 1;
        while (t2 >= 0) r2 += e2.charAt(t2--);
        return r2;
      }
      function P(e2, r2) {
        var t2 = "" + e2;
        return t2.length >= r2 ? t2 : br("0", r2 - t2.length) + t2;
      }
      function I(e2, r2) {
        var t2 = "" + e2;
        return t2.length >= r2 ? t2 : br(" ", r2 - t2.length) + t2;
      }
      function R(e2, r2) {
        var t2 = "" + e2;
        return t2.length >= r2 ? t2 : t2 + br(" ", r2 - t2.length);
      }
      function L(e2, r2) {
        var t2 = "" + Math.round(e2);
        return t2.length >= r2 ? t2 : br("0", r2 - t2.length) + t2;
      }
      function B(e2, r2) {
        var t2 = "" + e2;
        return t2.length >= r2 ? t2 : br("0", r2 - t2.length) + t2;
      }
      var z = Math.pow(2, 32);
      function U(e2, r2) {
        if (e2 > z || e2 < -z) return L(e2, r2);
        var t2 = Math.round(e2);
        return B(t2, r2);
      }
      function W(e2, r2) {
        r2 = r2 || 0;
        return e2.length >= 7 + r2 && (e2.charCodeAt(r2) | 32) === 103 && (e2.charCodeAt(r2 + 1) | 32) === 101 && (e2.charCodeAt(r2 + 2) | 32) === 110 && (e2.charCodeAt(r2 + 3) | 32) === 101 && (e2.charCodeAt(r2 + 4) | 32) === 114 && (e2.charCodeAt(r2 + 5) | 32) === 97 && (e2.charCodeAt(r2 + 6) | 32) === 108;
      }
      var j = [["Sun", "Sunday"], ["Mon", "Monday"], ["Tue", "Tuesday"], ["Wed", "Wednesday"], ["Thu", "Thursday"], ["Fri", "Friday"], ["Sat", "Saturday"]];
      var H = [["J", "Jan", "January"], ["F", "Feb", "February"], ["M", "Mar", "March"], ["A", "Apr", "April"], ["M", "May", "May"], ["J", "Jun", "June"], ["J", "Jul", "July"], ["A", "Aug", "August"], ["S", "Sep", "September"], ["O", "Oct", "October"], ["N", "Nov", "November"], ["D", "Dec", "December"]];
      function V(e2) {
        if (!e2) e2 = {};
        e2[0] = "General";
        e2[1] = "0";
        e2[2] = "0.00";
        e2[3] = "#,##0";
        e2[4] = "#,##0.00";
        e2[9] = "0%";
        e2[10] = "0.00%";
        e2[11] = "0.00E+00";
        e2[12] = "# ?/?";
        e2[13] = "# ??/??";
        e2[14] = "m/d/yy";
        e2[15] = "d-mmm-yy";
        e2[16] = "d-mmm";
        e2[17] = "mmm-yy";
        e2[18] = "h:mm AM/PM";
        e2[19] = "h:mm:ss AM/PM";
        e2[20] = "h:mm";
        e2[21] = "h:mm:ss";
        e2[22] = "m/d/yy h:mm";
        e2[37] = "#,##0 ;(#,##0)";
        e2[38] = "#,##0 ;[Red](#,##0)";
        e2[39] = "#,##0.00;(#,##0.00)";
        e2[40] = "#,##0.00;[Red](#,##0.00)";
        e2[45] = "mm:ss";
        e2[46] = "[h]:mm:ss";
        e2[47] = "mmss.0";
        e2[48] = "##0.0E+0";
        e2[49] = "@";
        e2[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "';
        return e2;
      }
      var X = { 0: "General", 1: "0", 2: "0.00", 3: "#,##0", 4: "#,##0.00", 9: "0%", 10: "0.00%", 11: "0.00E+00", 12: "# ?/?", 13: "# ??/??", 14: "m/d/yy", 15: "d-mmm-yy", 16: "d-mmm", 17: "mmm-yy", 18: "h:mm AM/PM", 19: "h:mm:ss AM/PM", 20: "h:mm", 21: "h:mm:ss", 22: "m/d/yy h:mm", 37: "#,##0 ;(#,##0)", 38: "#,##0 ;[Red](#,##0)", 39: "#,##0.00;(#,##0.00)", 40: "#,##0.00;[Red](#,##0.00)", 45: "mm:ss", 46: "[h]:mm:ss", 47: "mmss.0", 48: "##0.0E+0", 49: "@", 56: '"上午/下午 "hh"時"mm"分"ss"秒 "' };
      var G = { 5: 37, 6: 38, 7: 39, 8: 40, 23: 0, 24: 0, 25: 0, 26: 0, 27: 14, 28: 14, 29: 14, 30: 14, 31: 14, 50: 14, 51: 14, 52: 14, 53: 14, 54: 14, 55: 14, 56: 14, 57: 14, 58: 14, 59: 1, 60: 2, 61: 3, 62: 4, 67: 9, 68: 10, 69: 12, 70: 13, 71: 14, 72: 14, 73: 15, 74: 16, 75: 17, 76: 20, 77: 21, 78: 22, 79: 45, 80: 46, 81: 47, 82: 0 };
      var Y = { 5: '"$"#,##0_);\\("$"#,##0\\)', 63: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)' };
      function J(e2, r2, t2) {
        var a2 = e2 < 0 ? -1 : 1;
        var n2 = e2 * a2;
        var i2 = 0, s2 = 1, l2 = 0;
        var o2 = 1, c2 = 0, f2 = 0;
        var u2 = Math.floor(n2);
        while (c2 < r2) {
          u2 = Math.floor(n2);
          l2 = u2 * s2 + i2;
          f2 = u2 * c2 + o2;
          if (n2 - u2 < 5e-8) break;
          n2 = 1 / (n2 - u2);
          i2 = s2;
          s2 = l2;
          o2 = c2;
          c2 = f2;
        }
        if (f2 > r2) {
          if (c2 > r2) {
            f2 = o2;
            l2 = i2;
          } else {
            f2 = c2;
            l2 = s2;
          }
        }
        if (!t2) return [0, a2 * l2, f2];
        var h2 = Math.floor(a2 * l2 / f2);
        return [h2, a2 * l2 - h2 * f2, f2];
      }
      function K(e2, r2, t2) {
        if (e2 > 2958465 || e2 < 0) return null;
        var a2 = e2 | 0, n2 = Math.floor(86400 * (e2 - a2)), i2 = 0;
        var s2 = [];
        var l2 = { D: a2, T: n2, u: 86400 * (e2 - a2) - n2, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
        if (Math.abs(l2.u) < 1e-6) l2.u = 0;
        if (r2 && r2.date1904) a2 += 1462;
        if (l2.u > 0.9999) {
          l2.u = 0;
          if (++n2 == 86400) {
            l2.T = n2 = 0;
            ++a2;
            ++l2.D;
          }
        }
        if (a2 === 60) {
          s2 = t2 ? [1317, 10, 29] : [1900, 2, 29];
          i2 = 3;
        } else if (a2 === 0) {
          s2 = t2 ? [1317, 8, 29] : [1900, 1, 0];
          i2 = 6;
        } else {
          if (a2 > 60) --a2;
          var o2 = new Date(1900, 0, 1);
          o2.setDate(o2.getDate() + a2 - 1);
          s2 = [o2.getFullYear(), o2.getMonth() + 1, o2.getDate()];
          i2 = o2.getDay();
          if (a2 < 60) i2 = (i2 + 6) % 7;
          if (t2) i2 = le(o2, s2);
        }
        l2.y = s2[0];
        l2.m = s2[1];
        l2.d = s2[2];
        l2.S = n2 % 60;
        n2 = Math.floor(n2 / 60);
        l2.M = n2 % 60;
        n2 = Math.floor(n2 / 60);
        l2.H = n2;
        l2.q = i2;
        return l2;
      }
      var q = new Date(1899, 11, 31, 0, 0, 0);
      var Z = q.getTime();
      var Q = new Date(1900, 2, 1, 0, 0, 0);
      function ee(e2, r2) {
        var t2 = e2.getTime();
        if (r2) t2 -= 1461 * 24 * 60 * 60 * 1e3;
        else if (e2 >= Q) t2 += 24 * 60 * 60 * 1e3;
        return (t2 - (Z + (e2.getTimezoneOffset() - q.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3);
      }
      function re(e2) {
        return e2.indexOf(".") == -1 ? e2 : e2.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
      }
      function te(e2) {
        if (e2.indexOf("E") == -1) return e2;
        return e2.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
      }
      function ae(e2) {
        var r2 = e2 < 0 ? 12 : 11;
        var t2 = re(e2.toFixed(12));
        if (t2.length <= r2) return t2;
        t2 = e2.toPrecision(10);
        if (t2.length <= r2) return t2;
        return e2.toExponential(5);
      }
      function ne(e2) {
        var r2 = re(e2.toFixed(11));
        return r2.length > (e2 < 0 ? 12 : 11) || r2 === "0" || r2 === "-0" ? e2.toPrecision(6) : r2;
      }
      function ie(e2) {
        var r2 = Math.floor(Math.log(Math.abs(e2)) * Math.LOG10E), t2;
        if (r2 >= -4 && r2 <= -1) t2 = e2.toPrecision(10 + r2);
        else if (Math.abs(r2) <= 9) t2 = ae(e2);
        else if (r2 === 10) t2 = e2.toFixed(10).substr(0, 12);
        else t2 = ne(e2);
        return re(te(t2.toUpperCase()));
      }
      function se(e2, r2) {
        switch (typeof e2) {
          case "string":
            return e2;
          case "boolean":
            return e2 ? "TRUE" : "FALSE";
          case "number":
            return (e2 | 0) === e2 ? e2.toString(10) : ie(e2);
          case "undefined":
            return "";
          case "object":
            if (e2 == null) return "";
            if (e2 instanceof Date) return Be(14, ee(e2, r2 && r2.date1904), r2);
        }
        throw new Error("unsupported value in General format: " + e2);
      }
      function le(e2, r2) {
        r2[0] -= 581;
        var t2 = e2.getDay();
        if (e2 < 60) t2 = (t2 + 6) % 7;
        return t2;
      }
      function oe(e2, r2, t2, a2) {
        var n2 = "", i2 = 0, s2 = 0, l2 = t2.y, o2, c2 = 0;
        switch (e2) {
          case 98:
            l2 = t2.y + 543;
          case 121:
            switch (r2.length) {
              case 1:
                ;
              case 2:
                o2 = l2 % 100;
                c2 = 2;
                break;
              default:
                o2 = l2 % 1e4;
                c2 = 4;
                break;
            }
            break;
          case 109:
            switch (r2.length) {
              case 1:
                ;
              case 2:
                o2 = t2.m;
                c2 = r2.length;
                break;
              case 3:
                return H[t2.m - 1][1];
              case 5:
                return H[t2.m - 1][0];
              default:
                return H[t2.m - 1][2];
            }
            break;
          case 100:
            switch (r2.length) {
              case 1:
                ;
              case 2:
                o2 = t2.d;
                c2 = r2.length;
                break;
              case 3:
                return j[t2.q][0];
              default:
                return j[t2.q][1];
            }
            break;
          case 104:
            switch (r2.length) {
              case 1:
                ;
              case 2:
                o2 = 1 + (t2.H + 11) % 12;
                c2 = r2.length;
                break;
              default:
                throw "bad hour format: " + r2;
            }
            break;
          case 72:
            switch (r2.length) {
              case 1:
                ;
              case 2:
                o2 = t2.H;
                c2 = r2.length;
                break;
              default:
                throw "bad hour format: " + r2;
            }
            break;
          case 77:
            switch (r2.length) {
              case 1:
                ;
              case 2:
                o2 = t2.M;
                c2 = r2.length;
                break;
              default:
                throw "bad minute format: " + r2;
            }
            break;
          case 115:
            if (r2 != "s" && r2 != "ss" && r2 != ".0" && r2 != ".00" && r2 != ".000") throw "bad second format: " + r2;
            if (t2.u === 0 && (r2 == "s" || r2 == "ss")) return P(t2.S, r2.length);
            if (a2 >= 2) s2 = a2 === 3 ? 1e3 : 100;
            else s2 = a2 === 1 ? 10 : 1;
            i2 = Math.round(s2 * (t2.S + t2.u));
            if (i2 >= 60 * s2) i2 = 0;
            if (r2 === "s") return i2 === 0 ? "0" : "" + i2 / s2;
            n2 = P(i2, 2 + a2);
            if (r2 === "ss") return n2.substr(0, 2);
            return "." + n2.substr(2, r2.length - 1);
          case 90:
            switch (r2) {
              case "[h]":
                ;
              case "[hh]":
                o2 = t2.D * 24 + t2.H;
                break;
              case "[m]":
                ;
              case "[mm]":
                o2 = (t2.D * 24 + t2.H) * 60 + t2.M;
                break;
              case "[s]":
                ;
              case "[ss]":
                o2 = ((t2.D * 24 + t2.H) * 60 + t2.M) * 60 + Math.round(t2.S + t2.u);
                break;
              default:
                throw "bad abstime format: " + r2;
            }
            c2 = r2.length === 3 ? 1 : 2;
            break;
          case 101:
            o2 = l2;
            c2 = 1;
            break;
        }
        var f2 = c2 > 0 ? P(o2, c2) : "";
        return f2;
      }
      function ce(e2) {
        var r2 = 3;
        if (e2.length <= r2) return e2;
        var t2 = e2.length % r2, a2 = e2.substr(0, t2);
        for (; t2 != e2.length; t2 += r2) a2 += (a2.length > 0 ? "," : "") + e2.substr(t2, r2);
        return a2;
      }
      var fe = /%/g;
      function ue(e2, r2, t2) {
        var a2 = r2.replace(fe, ""), n2 = r2.length - a2.length;
        return De(e2, a2, t2 * Math.pow(10, 2 * n2)) + br("%", n2);
      }
      function he(e2, r2, t2) {
        var a2 = r2.length - 1;
        while (r2.charCodeAt(a2 - 1) === 44) --a2;
        return De(e2, r2.substr(0, a2), t2 / Math.pow(10, 3 * (r2.length - a2)));
      }
      function pe(e2, r2) {
        var t2;
        var a2 = e2.indexOf("E") - e2.indexOf(".") - 1;
        if (e2.match(/^#+0.0E\+0$/)) {
          if (r2 == 0) return "0.0E+0";
          else if (r2 < 0) return "-" + pe(e2, -r2);
          var n2 = e2.indexOf(".");
          if (n2 === -1) n2 = e2.indexOf("E");
          var i2 = Math.floor(Math.log(r2) * Math.LOG10E) % n2;
          if (i2 < 0) i2 += n2;
          t2 = (r2 / Math.pow(10, i2)).toPrecision(a2 + 1 + (n2 + i2) % n2);
          if (t2.indexOf("e") === -1) {
            var s2 = Math.floor(Math.log(r2) * Math.LOG10E);
            if (t2.indexOf(".") === -1) t2 = t2.charAt(0) + "." + t2.substr(1) + "E+" + (s2 - t2.length + i2);
            else t2 += "E+" + (s2 - i2);
            while (t2.substr(0, 2) === "0.") {
              t2 = t2.charAt(0) + t2.substr(2, n2) + "." + t2.substr(2 + n2);
              t2 = t2.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
            }
            t2 = t2.replace(/\+-/, "-");
          }
          t2 = t2.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(e3, r3, t3, a3) {
            return r3 + t3 + a3.substr(0, (n2 + i2) % n2) + "." + a3.substr(i2) + "E";
          });
        } else t2 = r2.toExponential(a2);
        if (e2.match(/E\+00$/) && t2.match(/e[+-]\d$/)) t2 = t2.substr(0, t2.length - 1) + "0" + t2.charAt(t2.length - 1);
        if (e2.match(/E\-/) && t2.match(/e\+/)) t2 = t2.replace(/e\+/, "e");
        return t2.replace("e", "E");
      }
      var de = /# (\?+)( ?)\/( ?)(\d+)/;
      function me(e2, r2, t2) {
        var a2 = parseInt(e2[4], 10), n2 = Math.round(r2 * a2), i2 = Math.floor(n2 / a2);
        var s2 = n2 - i2 * a2, l2 = a2;
        return t2 + (i2 === 0 ? "" : "" + i2) + " " + (s2 === 0 ? br(" ", e2[1].length + 1 + e2[4].length) : I(s2, e2[1].length) + e2[2] + "/" + e2[3] + P(l2, e2[4].length));
      }
      function ve(e2, r2, t2) {
        return t2 + (r2 === 0 ? "" : "" + r2) + br(" ", e2[1].length + 2 + e2[4].length);
      }
      var ge = /^#*0*\.([0#]+)/;
      var be = /\).*[0#]/;
      var we = /\(###\) ###\\?-####/;
      function ye(e2) {
        var r2 = "", t2;
        for (var a2 = 0; a2 != e2.length; ++a2) switch (t2 = e2.charCodeAt(a2)) {
          case 35:
            break;
          case 63:
            r2 += " ";
            break;
          case 48:
            r2 += "0";
            break;
          default:
            r2 += String.fromCharCode(t2);
        }
        return r2;
      }
      function ke(e2, r2) {
        var t2 = Math.pow(10, r2);
        return "" + Math.round(e2 * t2) / t2;
      }
      function xe(e2, r2) {
        var t2 = e2 - Math.floor(e2), a2 = Math.pow(10, r2);
        if (r2 < ("" + Math.round(t2 * a2)).length) return 0;
        return Math.round(t2 * a2);
      }
      function Se(e2, r2) {
        if (r2 < ("" + Math.round((e2 - Math.floor(e2)) * Math.pow(10, r2))).length) {
          return 1;
        }
        return 0;
      }
      function Ce(e2) {
        if (e2 < 2147483647 && e2 > -2147483648) return "" + (e2 >= 0 ? e2 | 0 : e2 - 1 | 0);
        return "" + Math.floor(e2);
      }
      function _e(e2, r2, t2) {
        if (e2.charCodeAt(0) === 40 && !r2.match(be)) {
          var a2 = r2.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
          if (t2 >= 0) return _e("n", a2, t2);
          return "(" + _e("n", a2, -t2) + ")";
        }
        if (r2.charCodeAt(r2.length - 1) === 44) return he(e2, r2, t2);
        if (r2.indexOf("%") !== -1) return ue(e2, r2, t2);
        if (r2.indexOf("E") !== -1) return pe(r2, t2);
        if (r2.charCodeAt(0) === 36) return "$" + _e(e2, r2.substr(r2.charAt(1) == " " ? 2 : 1), t2);
        var n2;
        var i2, s2, l2, o2 = Math.abs(t2), c2 = t2 < 0 ? "-" : "";
        if (r2.match(/^00+$/)) return c2 + U(o2, r2.length);
        if (r2.match(/^[#?]+$/)) {
          n2 = U(t2, 0);
          if (n2 === "0") n2 = "";
          return n2.length > r2.length ? n2 : ye(r2.substr(0, r2.length - n2.length)) + n2;
        }
        if (i2 = r2.match(de)) return me(i2, o2, c2);
        if (r2.match(/^#+0+$/)) return c2 + U(o2, r2.length - r2.indexOf("0"));
        if (i2 = r2.match(ge)) {
          n2 = ke(t2, i2[1].length).replace(/^([^\.]+)$/, "$1." + ye(i2[1])).replace(/\.$/, "." + ye(i2[1])).replace(/\.(\d*)$/, function(e3, r3) {
            return "." + r3 + br("0", ye(i2[1]).length - r3.length);
          });
          return r2.indexOf("0.") !== -1 ? n2 : n2.replace(/^0\./, ".");
        }
        r2 = r2.replace(/^#+([0.])/, "$1");
        if (i2 = r2.match(/^(0*)\.(#*)$/)) {
          return c2 + ke(o2, i2[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i2[1].length ? "0." : ".");
        }
        if (i2 = r2.match(/^#{1,3},##0(\.?)$/)) return c2 + ce(U(o2, 0));
        if (i2 = r2.match(/^#,##0\.([#0]*0)$/)) {
          return t2 < 0 ? "-" + _e(e2, r2, -t2) : ce("" + (Math.floor(t2) + Se(t2, i2[1].length))) + "." + P(xe(t2, i2[1].length), i2[1].length);
        }
        if (i2 = r2.match(/^#,#*,#0/)) return _e(e2, r2.replace(/^#,#*,/, ""), t2);
        if (i2 = r2.match(/^([0#]+)(\\?-([0#]+))+$/)) {
          n2 = N(_e(e2, r2.replace(/[\\-]/g, ""), t2));
          s2 = 0;
          return N(N(r2.replace(/\\/g, "")).replace(/[0#]/g, function(e3) {
            return s2 < n2.length ? n2.charAt(s2++) : e3 === "0" ? "0" : "";
          }));
        }
        if (r2.match(we)) {
          n2 = _e(e2, "##########", t2);
          return "(" + n2.substr(0, 3) + ") " + n2.substr(3, 3) + "-" + n2.substr(6);
        }
        var f2 = "";
        if (i2 = r2.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
          s2 = Math.min(i2[4].length, 7);
          l2 = J(o2, Math.pow(10, s2) - 1, false);
          n2 = "" + c2;
          f2 = De("n", i2[1], l2[1]);
          if (f2.charAt(f2.length - 1) == " ") f2 = f2.substr(0, f2.length - 1) + "0";
          n2 += f2 + i2[2] + "/" + i2[3];
          f2 = R(l2[2], s2);
          if (f2.length < i2[4].length) f2 = ye(i2[4].substr(i2[4].length - f2.length)) + f2;
          n2 += f2;
          return n2;
        }
        if (i2 = r2.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
          s2 = Math.min(Math.max(i2[1].length, i2[4].length), 7);
          l2 = J(o2, Math.pow(10, s2) - 1, true);
          return c2 + (l2[0] || (l2[1] ? "" : "0")) + " " + (l2[1] ? I(l2[1], s2) + i2[2] + "/" + i2[3] + R(l2[2], s2) : br(" ", 2 * s2 + 1 + i2[2].length + i2[3].length));
        }
        if (i2 = r2.match(/^[#0?]+$/)) {
          n2 = U(t2, 0);
          if (r2.length <= n2.length) return n2;
          return ye(r2.substr(0, r2.length - n2.length)) + n2;
        }
        if (i2 = r2.match(/^([#0?]+)\.([#0]+)$/)) {
          n2 = "" + t2.toFixed(Math.min(i2[2].length, 10)).replace(/([^0])0+$/, "$1");
          s2 = n2.indexOf(".");
          var u2 = r2.indexOf(".") - s2, h2 = r2.length - n2.length - u2;
          return ye(r2.substr(0, u2) + n2 + r2.substr(r2.length - h2));
        }
        if (i2 = r2.match(/^00,000\.([#0]*0)$/)) {
          s2 = xe(t2, i2[1].length);
          return t2 < 0 ? "-" + _e(e2, r2, -t2) : ce(Ce(t2)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(e3) {
            return "00," + (e3.length < 3 ? P(0, 3 - e3.length) : "") + e3;
          }) + "." + P(s2, i2[1].length);
        }
        switch (r2) {
          case "###,##0.00":
            return _e(e2, "#,##0.00", t2);
          case "###,###":
            ;
          case "##,###":
            ;
          case "#,###":
            var p2 = ce(U(o2, 0));
            return p2 !== "0" ? c2 + p2 : "";
          case "###,###.00":
            return _e(e2, "###,##0.00", t2).replace(/^0\./, ".");
          case "#,###.00":
            return _e(e2, "#,##0.00", t2).replace(/^0\./, ".");
          default:
            ;
        }
        throw new Error("unsupported format |" + r2 + "|");
      }
      function Ae(e2, r2, t2) {
        var a2 = r2.length - 1;
        while (r2.charCodeAt(a2 - 1) === 44) --a2;
        return De(e2, r2.substr(0, a2), t2 / Math.pow(10, 3 * (r2.length - a2)));
      }
      function Te(e2, r2, t2) {
        var a2 = r2.replace(fe, ""), n2 = r2.length - a2.length;
        return De(e2, a2, t2 * Math.pow(10, 2 * n2)) + br("%", n2);
      }
      function Ee(e2, r2) {
        var t2;
        var a2 = e2.indexOf("E") - e2.indexOf(".") - 1;
        if (e2.match(/^#+0.0E\+0$/)) {
          if (r2 == 0) return "0.0E+0";
          else if (r2 < 0) return "-" + Ee(e2, -r2);
          var n2 = e2.indexOf(".");
          if (n2 === -1) n2 = e2.indexOf("E");
          var i2 = Math.floor(Math.log(r2) * Math.LOG10E) % n2;
          if (i2 < 0) i2 += n2;
          t2 = (r2 / Math.pow(10, i2)).toPrecision(a2 + 1 + (n2 + i2) % n2);
          if (!t2.match(/[Ee]/)) {
            var s2 = Math.floor(Math.log(r2) * Math.LOG10E);
            if (t2.indexOf(".") === -1) t2 = t2.charAt(0) + "." + t2.substr(1) + "E+" + (s2 - t2.length + i2);
            else t2 += "E+" + (s2 - i2);
            t2 = t2.replace(/\+-/, "-");
          }
          t2 = t2.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(e3, r3, t3, a3) {
            return r3 + t3 + a3.substr(0, (n2 + i2) % n2) + "." + a3.substr(i2) + "E";
          });
        } else t2 = r2.toExponential(a2);
        if (e2.match(/E\+00$/) && t2.match(/e[+-]\d$/)) t2 = t2.substr(0, t2.length - 1) + "0" + t2.charAt(t2.length - 1);
        if (e2.match(/E\-/) && t2.match(/e\+/)) t2 = t2.replace(/e\+/, "e");
        return t2.replace("e", "E");
      }
      function Fe(e2, r2, t2) {
        if (e2.charCodeAt(0) === 40 && !r2.match(be)) {
          var a2 = r2.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
          if (t2 >= 0) return Fe("n", a2, t2);
          return "(" + Fe("n", a2, -t2) + ")";
        }
        if (r2.charCodeAt(r2.length - 1) === 44) return Ae(e2, r2, t2);
        if (r2.indexOf("%") !== -1) return Te(e2, r2, t2);
        if (r2.indexOf("E") !== -1) return Ee(r2, t2);
        if (r2.charCodeAt(0) === 36) return "$" + Fe(e2, r2.substr(r2.charAt(1) == " " ? 2 : 1), t2);
        var n2;
        var i2, s2, l2, o2 = Math.abs(t2), c2 = t2 < 0 ? "-" : "";
        if (r2.match(/^00+$/)) return c2 + P(o2, r2.length);
        if (r2.match(/^[#?]+$/)) {
          n2 = "" + t2;
          if (t2 === 0) n2 = "";
          return n2.length > r2.length ? n2 : ye(r2.substr(0, r2.length - n2.length)) + n2;
        }
        if (i2 = r2.match(de)) return ve(i2, o2, c2);
        if (r2.match(/^#+0+$/)) return c2 + P(o2, r2.length - r2.indexOf("0"));
        if (i2 = r2.match(ge)) {
          n2 = ("" + t2).replace(/^([^\.]+)$/, "$1." + ye(i2[1])).replace(/\.$/, "." + ye(i2[1]));
          n2 = n2.replace(/\.(\d*)$/, function(e3, r3) {
            return "." + r3 + br("0", ye(i2[1]).length - r3.length);
          });
          return r2.indexOf("0.") !== -1 ? n2 : n2.replace(/^0\./, ".");
        }
        r2 = r2.replace(/^#+([0.])/, "$1");
        if (i2 = r2.match(/^(0*)\.(#*)$/)) {
          return c2 + ("" + o2).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i2[1].length ? "0." : ".");
        }
        if (i2 = r2.match(/^#{1,3},##0(\.?)$/)) return c2 + ce("" + o2);
        if (i2 = r2.match(/^#,##0\.([#0]*0)$/)) {
          return t2 < 0 ? "-" + Fe(e2, r2, -t2) : ce("" + t2) + "." + br("0", i2[1].length);
        }
        if (i2 = r2.match(/^#,#*,#0/)) return Fe(e2, r2.replace(/^#,#*,/, ""), t2);
        if (i2 = r2.match(/^([0#]+)(\\?-([0#]+))+$/)) {
          n2 = N(Fe(e2, r2.replace(/[\\-]/g, ""), t2));
          s2 = 0;
          return N(N(r2.replace(/\\/g, "")).replace(/[0#]/g, function(e3) {
            return s2 < n2.length ? n2.charAt(s2++) : e3 === "0" ? "0" : "";
          }));
        }
        if (r2.match(we)) {
          n2 = Fe(e2, "##########", t2);
          return "(" + n2.substr(0, 3) + ") " + n2.substr(3, 3) + "-" + n2.substr(6);
        }
        var f2 = "";
        if (i2 = r2.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
          s2 = Math.min(i2[4].length, 7);
          l2 = J(o2, Math.pow(10, s2) - 1, false);
          n2 = "" + c2;
          f2 = De("n", i2[1], l2[1]);
          if (f2.charAt(f2.length - 1) == " ") f2 = f2.substr(0, f2.length - 1) + "0";
          n2 += f2 + i2[2] + "/" + i2[3];
          f2 = R(l2[2], s2);
          if (f2.length < i2[4].length) f2 = ye(i2[4].substr(i2[4].length - f2.length)) + f2;
          n2 += f2;
          return n2;
        }
        if (i2 = r2.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
          s2 = Math.min(Math.max(i2[1].length, i2[4].length), 7);
          l2 = J(o2, Math.pow(10, s2) - 1, true);
          return c2 + (l2[0] || (l2[1] ? "" : "0")) + " " + (l2[1] ? I(l2[1], s2) + i2[2] + "/" + i2[3] + R(l2[2], s2) : br(" ", 2 * s2 + 1 + i2[2].length + i2[3].length));
        }
        if (i2 = r2.match(/^[#0?]+$/)) {
          n2 = "" + t2;
          if (r2.length <= n2.length) return n2;
          return ye(r2.substr(0, r2.length - n2.length)) + n2;
        }
        if (i2 = r2.match(/^([#0]+)\.([#0]+)$/)) {
          n2 = "" + t2.toFixed(Math.min(i2[2].length, 10)).replace(/([^0])0+$/, "$1");
          s2 = n2.indexOf(".");
          var u2 = r2.indexOf(".") - s2, h2 = r2.length - n2.length - u2;
          return ye(r2.substr(0, u2) + n2 + r2.substr(r2.length - h2));
        }
        if (i2 = r2.match(/^00,000\.([#0]*0)$/)) {
          return t2 < 0 ? "-" + Fe(e2, r2, -t2) : ce("" + t2).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(e3) {
            return "00," + (e3.length < 3 ? P(0, 3 - e3.length) : "") + e3;
          }) + "." + P(0, i2[1].length);
        }
        switch (r2) {
          case "###,###":
            ;
          case "##,###":
            ;
          case "#,###":
            var p2 = ce("" + o2);
            return p2 !== "0" ? c2 + p2 : "";
          default:
            if (r2.match(/\.[0#?]*$/)) return Fe(e2, r2.slice(0, r2.lastIndexOf(".")), t2) + ye(r2.slice(r2.lastIndexOf(".")));
        }
        throw new Error("unsupported format |" + r2 + "|");
      }
      function De(e2, r2, t2) {
        return (t2 | 0) === t2 ? Fe(e2, r2, t2) : _e(e2, r2, t2);
      }
      function Oe(e2) {
        var r2 = [];
        var t2 = false;
        for (var a2 = 0, n2 = 0; a2 < e2.length; ++a2) switch (e2.charCodeAt(a2)) {
          case 34:
            t2 = !t2;
            break;
          case 95:
            ;
          case 42:
            ;
          case 92:
            ++a2;
            break;
          case 59:
            r2[r2.length] = e2.substr(n2, a2 - n2);
            n2 = a2 + 1;
        }
        r2[r2.length] = e2.substr(n2);
        if (t2 === true) throw new Error("Format |" + e2 + "| unterminated string ");
        return r2;
      }
      var Me = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
      function Ne(e2) {
        var r2 = 0, t2 = "", a2 = "";
        while (r2 < e2.length) {
          switch (t2 = e2.charAt(r2)) {
            case "G":
              if (W(e2, r2)) r2 += 6;
              r2++;
              break;
            case '"':
              for (; e2.charCodeAt(++r2) !== 34 && r2 < e2.length; ) {
              }
              ++r2;
              break;
            case "\\":
              r2 += 2;
              break;
            case "_":
              r2 += 2;
              break;
            case "@":
              ++r2;
              break;
            case "B":
              ;
            case "b":
              if (e2.charAt(r2 + 1) === "1" || e2.charAt(r2 + 1) === "2") return true;
            case "M":
              ;
            case "D":
              ;
            case "Y":
              ;
            case "H":
              ;
            case "S":
              ;
            case "E":
              ;
            case "m":
              ;
            case "d":
              ;
            case "y":
              ;
            case "h":
              ;
            case "s":
              ;
            case "e":
              ;
            case "g":
              return true;
            case "A":
              ;
            case "a":
              ;
            case "上":
              if (e2.substr(r2, 3).toUpperCase() === "A/P") return true;
              if (e2.substr(r2, 5).toUpperCase() === "AM/PM") return true;
              if (e2.substr(r2, 5).toUpperCase() === "上午/下午") return true;
              ++r2;
              break;
            case "[":
              a2 = t2;
              while (e2.charAt(r2++) !== "]" && r2 < e2.length) a2 += e2.charAt(r2);
              if (a2.match(Me)) return true;
              break;
            case ".":
              ;
            case "0":
              ;
            case "#":
              while (r2 < e2.length && ("0#?.,E+-%".indexOf(t2 = e2.charAt(++r2)) > -1 || t2 == "\\" && e2.charAt(r2 + 1) == "-" && "0#".indexOf(e2.charAt(r2 + 2)) > -1)) {
              }
              break;
            case "?":
              while (e2.charAt(++r2) === t2) {
              }
              break;
            case "*":
              ++r2;
              if (e2.charAt(r2) == " " || e2.charAt(r2) == "*") ++r2;
              break;
            case "(":
              ;
            case ")":
              ++r2;
              break;
            case "1":
              ;
            case "2":
              ;
            case "3":
              ;
            case "4":
              ;
            case "5":
              ;
            case "6":
              ;
            case "7":
              ;
            case "8":
              ;
            case "9":
              while (r2 < e2.length && "0123456789".indexOf(e2.charAt(++r2)) > -1) {
              }
              break;
            case " ":
              ++r2;
              break;
            default:
              ++r2;
              break;
          }
        }
        return false;
      }
      function Pe(e2, r2, t2, a2) {
        var n2 = [], i2 = "", s2 = 0, l2 = "", o2 = "t", c2, f2, u2;
        var h2 = "H";
        while (s2 < e2.length) {
          switch (l2 = e2.charAt(s2)) {
            case "G":
              if (!W(e2, s2)) throw new Error("unrecognized character " + l2 + " in " + e2);
              n2[n2.length] = { t: "G", v: "General" };
              s2 += 7;
              break;
            case '"':
              for (i2 = ""; (u2 = e2.charCodeAt(++s2)) !== 34 && s2 < e2.length; ) i2 += String.fromCharCode(u2);
              n2[n2.length] = { t: "t", v: i2 };
              ++s2;
              break;
            case "\\":
              var p2 = e2.charAt(++s2), d2 = p2 === "(" || p2 === ")" ? p2 : "t";
              n2[n2.length] = { t: d2, v: p2 };
              ++s2;
              break;
            case "_":
              n2[n2.length] = { t: "t", v: " " };
              s2 += 2;
              break;
            case "@":
              n2[n2.length] = { t: "T", v: r2 };
              ++s2;
              break;
            case "B":
              ;
            case "b":
              if (e2.charAt(s2 + 1) === "1" || e2.charAt(s2 + 1) === "2") {
                if (c2 == null) {
                  c2 = K(r2, t2, e2.charAt(s2 + 1) === "2");
                  if (c2 == null) return "";
                }
                n2[n2.length] = { t: "X", v: e2.substr(s2, 2) };
                o2 = l2;
                s2 += 2;
                break;
              }
              ;
            case "M":
              ;
            case "D":
              ;
            case "Y":
              ;
            case "H":
              ;
            case "S":
              ;
            case "E":
              l2 = l2.toLowerCase();
            case "m":
              ;
            case "d":
              ;
            case "y":
              ;
            case "h":
              ;
            case "s":
              ;
            case "e":
              ;
            case "g":
              if (r2 < 0) return "";
              if (c2 == null) {
                c2 = K(r2, t2);
                if (c2 == null) return "";
              }
              i2 = l2;
              while (++s2 < e2.length && e2.charAt(s2).toLowerCase() === l2) i2 += l2;
              if (l2 === "m" && o2.toLowerCase() === "h") l2 = "M";
              if (l2 === "h") l2 = h2;
              n2[n2.length] = { t: l2, v: i2 };
              o2 = l2;
              break;
            case "A":
              ;
            case "a":
              ;
            case "上":
              var m2 = { t: l2, v: l2 };
              if (c2 == null) c2 = K(r2, t2);
              if (e2.substr(s2, 3).toUpperCase() === "A/P") {
                if (c2 != null) m2.v = c2.H >= 12 ? "P" : "A";
                m2.t = "T";
                h2 = "h";
                s2 += 3;
              } else if (e2.substr(s2, 5).toUpperCase() === "AM/PM") {
                if (c2 != null) m2.v = c2.H >= 12 ? "PM" : "AM";
                m2.t = "T";
                s2 += 5;
                h2 = "h";
              } else if (e2.substr(s2, 5).toUpperCase() === "上午/下午") {
                if (c2 != null) m2.v = c2.H >= 12 ? "下午" : "上午";
                m2.t = "T";
                s2 += 5;
                h2 = "h";
              } else {
                m2.t = "t";
                ++s2;
              }
              if (c2 == null && m2.t === "T") return "";
              n2[n2.length] = m2;
              o2 = l2;
              break;
            case "[":
              i2 = l2;
              while (e2.charAt(s2++) !== "]" && s2 < e2.length) i2 += e2.charAt(s2);
              if (i2.slice(-1) !== "]") throw 'unterminated "[" block: |' + i2 + "|";
              if (i2.match(Me)) {
                if (c2 == null) {
                  c2 = K(r2, t2);
                  if (c2 == null) return "";
                }
                n2[n2.length] = { t: "Z", v: i2.toLowerCase() };
                o2 = i2.charAt(1);
              } else if (i2.indexOf("$") > -1) {
                i2 = (i2.match(/\$([^-\[\]]*)/) || [])[1] || "$";
                if (!Ne(e2)) n2[n2.length] = { t: "t", v: i2 };
              }
              break;
            case ".":
              if (c2 != null) {
                i2 = l2;
                while (++s2 < e2.length && (l2 = e2.charAt(s2)) === "0") i2 += l2;
                n2[n2.length] = { t: "s", v: i2 };
                break;
              }
              ;
            case "0":
              ;
            case "#":
              i2 = l2;
              while (++s2 < e2.length && "0#?.,E+-%".indexOf(l2 = e2.charAt(s2)) > -1) i2 += l2;
              n2[n2.length] = { t: "n", v: i2 };
              break;
            case "?":
              i2 = l2;
              while (e2.charAt(++s2) === l2) i2 += l2;
              n2[n2.length] = { t: l2, v: i2 };
              o2 = l2;
              break;
            case "*":
              ++s2;
              if (e2.charAt(s2) == " " || e2.charAt(s2) == "*") ++s2;
              break;
            case "(":
              ;
            case ")":
              n2[n2.length] = { t: a2 === 1 ? "t" : l2, v: l2 };
              ++s2;
              break;
            case "1":
              ;
            case "2":
              ;
            case "3":
              ;
            case "4":
              ;
            case "5":
              ;
            case "6":
              ;
            case "7":
              ;
            case "8":
              ;
            case "9":
              i2 = l2;
              while (s2 < e2.length && "0123456789".indexOf(e2.charAt(++s2)) > -1) i2 += e2.charAt(s2);
              n2[n2.length] = { t: "D", v: i2 };
              break;
            case " ":
              n2[n2.length] = { t: l2, v: l2 };
              ++s2;
              break;
            case "$":
              n2[n2.length] = { t: "t", v: "$" };
              ++s2;
              break;
            default:
              if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(l2) === -1) throw new Error("unrecognized character " + l2 + " in " + e2);
              n2[n2.length] = { t: "t", v: l2 };
              ++s2;
              break;
          }
        }
        var v2 = 0, g2 = 0, b2;
        for (s2 = n2.length - 1, o2 = "t"; s2 >= 0; --s2) {
          switch (n2[s2].t) {
            case "h":
              ;
            case "H":
              n2[s2].t = h2;
              o2 = "h";
              if (v2 < 1) v2 = 1;
              break;
            case "s":
              if (b2 = n2[s2].v.match(/\.0+$/)) g2 = Math.max(g2, b2[0].length - 1);
              if (v2 < 3) v2 = 3;
            case "d":
              ;
            case "y":
              ;
            case "M":
              ;
            case "e":
              o2 = n2[s2].t;
              break;
            case "m":
              if (o2 === "s") {
                n2[s2].t = "M";
                if (v2 < 2) v2 = 2;
              }
              break;
            case "X":
              break;
            case "Z":
              if (v2 < 1 && n2[s2].v.match(/[Hh]/)) v2 = 1;
              if (v2 < 2 && n2[s2].v.match(/[Mm]/)) v2 = 2;
              if (v2 < 3 && n2[s2].v.match(/[Ss]/)) v2 = 3;
          }
        }
        switch (v2) {
          case 0:
            break;
          case 1:
            if (c2.u >= 0.5) {
              c2.u = 0;
              ++c2.S;
            }
            if (c2.S >= 60) {
              c2.S = 0;
              ++c2.M;
            }
            if (c2.M >= 60) {
              c2.M = 0;
              ++c2.H;
            }
            break;
          case 2:
            if (c2.u >= 0.5) {
              c2.u = 0;
              ++c2.S;
            }
            if (c2.S >= 60) {
              c2.S = 0;
              ++c2.M;
            }
            break;
        }
        var w2 = "", y2;
        for (s2 = 0; s2 < n2.length; ++s2) {
          switch (n2[s2].t) {
            case "t":
              ;
            case "T":
              ;
            case " ":
              ;
            case "D":
              break;
            case "X":
              n2[s2].v = "";
              n2[s2].t = ";";
              break;
            case "d":
              ;
            case "m":
              ;
            case "y":
              ;
            case "h":
              ;
            case "H":
              ;
            case "M":
              ;
            case "s":
              ;
            case "e":
              ;
            case "b":
              ;
            case "Z":
              n2[s2].v = oe(n2[s2].t.charCodeAt(0), n2[s2].v, c2, g2);
              n2[s2].t = "t";
              break;
            case "n":
              ;
            case "?":
              y2 = s2 + 1;
              while (n2[y2] != null && ((l2 = n2[y2].t) === "?" || l2 === "D" || (l2 === " " || l2 === "t") && n2[y2 + 1] != null && (n2[y2 + 1].t === "?" || n2[y2 + 1].t === "t" && n2[y2 + 1].v === "/") || n2[s2].t === "(" && (l2 === " " || l2 === "n" || l2 === ")") || l2 === "t" && (n2[y2].v === "/" || n2[y2].v === " " && n2[y2 + 1] != null && n2[y2 + 1].t == "?"))) {
                n2[s2].v += n2[y2].v;
                n2[y2] = { v: "", t: ";" };
                ++y2;
              }
              w2 += n2[s2].v;
              s2 = y2 - 1;
              break;
            case "G":
              n2[s2].t = "t";
              n2[s2].v = se(r2, t2);
              break;
          }
        }
        var k2 = "", x2, S2;
        if (w2.length > 0) {
          if (w2.charCodeAt(0) == 40) {
            x2 = r2 < 0 && w2.charCodeAt(0) === 45 ? -r2 : r2;
            S2 = De("n", w2, x2);
          } else {
            x2 = r2 < 0 && a2 > 1 ? -r2 : r2;
            S2 = De("n", w2, x2);
            if (x2 < 0 && n2[0] && n2[0].t == "t") {
              S2 = S2.substr(1);
              n2[0].v = "-" + n2[0].v;
            }
          }
          y2 = S2.length - 1;
          var C2 = n2.length;
          for (s2 = 0; s2 < n2.length; ++s2) if (n2[s2] != null && n2[s2].t != "t" && n2[s2].v.indexOf(".") > -1) {
            C2 = s2;
            break;
          }
          var _2 = n2.length;
          if (C2 === n2.length && S2.indexOf("E") === -1) {
            for (s2 = n2.length - 1; s2 >= 0; --s2) {
              if (n2[s2] == null || "n?".indexOf(n2[s2].t) === -1) continue;
              if (y2 >= n2[s2].v.length - 1) {
                y2 -= n2[s2].v.length;
                n2[s2].v = S2.substr(y2 + 1, n2[s2].v.length);
              } else if (y2 < 0) n2[s2].v = "";
              else {
                n2[s2].v = S2.substr(0, y2 + 1);
                y2 = -1;
              }
              n2[s2].t = "t";
              _2 = s2;
            }
            if (y2 >= 0 && _2 < n2.length) n2[_2].v = S2.substr(0, y2 + 1) + n2[_2].v;
          } else if (C2 !== n2.length && S2.indexOf("E") === -1) {
            y2 = S2.indexOf(".") - 1;
            for (s2 = C2; s2 >= 0; --s2) {
              if (n2[s2] == null || "n?".indexOf(n2[s2].t) === -1) continue;
              f2 = n2[s2].v.indexOf(".") > -1 && s2 === C2 ? n2[s2].v.indexOf(".") - 1 : n2[s2].v.length - 1;
              k2 = n2[s2].v.substr(f2 + 1);
              for (; f2 >= 0; --f2) {
                if (y2 >= 0 && (n2[s2].v.charAt(f2) === "0" || n2[s2].v.charAt(f2) === "#")) k2 = S2.charAt(y2--) + k2;
              }
              n2[s2].v = k2;
              n2[s2].t = "t";
              _2 = s2;
            }
            if (y2 >= 0 && _2 < n2.length) n2[_2].v = S2.substr(0, y2 + 1) + n2[_2].v;
            y2 = S2.indexOf(".") + 1;
            for (s2 = C2; s2 < n2.length; ++s2) {
              if (n2[s2] == null || "n?(".indexOf(n2[s2].t) === -1 && s2 !== C2) continue;
              f2 = n2[s2].v.indexOf(".") > -1 && s2 === C2 ? n2[s2].v.indexOf(".") + 1 : 0;
              k2 = n2[s2].v.substr(0, f2);
              for (; f2 < n2[s2].v.length; ++f2) {
                if (y2 < S2.length) k2 += S2.charAt(y2++);
              }
              n2[s2].v = k2;
              n2[s2].t = "t";
              _2 = s2;
            }
          }
        }
        for (s2 = 0; s2 < n2.length; ++s2) if (n2[s2] != null && "n?".indexOf(n2[s2].t) > -1) {
          x2 = a2 > 1 && r2 < 0 && s2 > 0 && n2[s2 - 1].v === "-" ? -r2 : r2;
          n2[s2].v = De(n2[s2].t, n2[s2].v, x2);
          n2[s2].t = "t";
        }
        var A2 = "";
        for (s2 = 0; s2 !== n2.length; ++s2) if (n2[s2] != null) A2 += n2[s2].v;
        return A2;
      }
      var Ie = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
      function Re(e2, r2) {
        if (r2 == null) return false;
        var t2 = parseFloat(r2[2]);
        switch (r2[1]) {
          case "=":
            if (e2 == t2) return true;
            break;
          case ">":
            if (e2 > t2) return true;
            break;
          case "<":
            if (e2 < t2) return true;
            break;
          case "<>":
            if (e2 != t2) return true;
            break;
          case ">=":
            if (e2 >= t2) return true;
            break;
          case "<=":
            if (e2 <= t2) return true;
            break;
        }
        return false;
      }
      function Le(e2, r2) {
        var t2 = Oe(e2);
        var a2 = t2.length, n2 = t2[a2 - 1].indexOf("@");
        if (a2 < 4 && n2 > -1) --a2;
        if (t2.length > 4) throw new Error("cannot find right format for |" + t2.join("|") + "|");
        if (typeof r2 !== "number") return [4, t2.length === 4 || n2 > -1 ? t2[t2.length - 1] : "@"];
        switch (t2.length) {
          case 1:
            t2 = n2 > -1 ? ["General", "General", "General", t2[0]] : [t2[0], t2[0], t2[0], "@"];
            break;
          case 2:
            t2 = n2 > -1 ? [t2[0], t2[0], t2[0], t2[1]] : [t2[0], t2[1], t2[0], "@"];
            break;
          case 3:
            t2 = n2 > -1 ? [t2[0], t2[1], t2[0], t2[2]] : [t2[0], t2[1], t2[2], "@"];
            break;
          case 4:
            break;
        }
        var i2 = r2 > 0 ? t2[0] : r2 < 0 ? t2[1] : t2[2];
        if (t2[0].indexOf("[") === -1 && t2[1].indexOf("[") === -1) return [a2, i2];
        if (t2[0].match(/\[[=<>]/) != null || t2[1].match(/\[[=<>]/) != null) {
          var s2 = t2[0].match(Ie);
          var l2 = t2[1].match(Ie);
          return Re(r2, s2) ? [a2, t2[0]] : Re(r2, l2) ? [a2, t2[1]] : [a2, t2[s2 != null && l2 != null ? 2 : 1]];
        }
        return [a2, i2];
      }
      function Be(e2, r2, t2) {
        if (t2 == null) t2 = {};
        var a2 = "";
        switch (typeof e2) {
          case "string":
            if (e2 == "m/d/yy" && t2.dateNF) a2 = t2.dateNF;
            else a2 = e2;
            break;
          case "number":
            if (e2 == 14 && t2.dateNF) a2 = t2.dateNF;
            else a2 = (t2.table != null ? t2.table : X)[e2];
            if (a2 == null) a2 = t2.table && t2.table[G[e2]] || X[G[e2]];
            if (a2 == null) a2 = Y[e2] || "General";
            break;
        }
        if (W(a2, 0)) return se(r2, t2);
        if (r2 instanceof Date) r2 = ee(r2, t2.date1904);
        var n2 = Le(a2, r2);
        if (W(n2[1])) return se(r2, t2);
        if (r2 === true) r2 = "TRUE";
        else if (r2 === false) r2 = "FALSE";
        else if (r2 === "" || r2 == null) return "";
        return Pe(n2[1], r2, t2, n2[0]);
      }
      function $e(e2, r2) {
        if (typeof r2 != "number") {
          r2 = +r2 || -1;
          for (var t2 = 0; t2 < 392; ++t2) {
            if (X[t2] == void 0) {
              if (r2 < 0) r2 = t2;
              continue;
            }
            if (X[t2] == e2) {
              r2 = t2;
              break;
            }
          }
          if (r2 < 0) r2 = 391;
        }
        X[r2] = e2;
        return r2;
      }
      function ze(e2) {
        for (var r2 = 0; r2 != 392; ++r2) if (e2[r2] !== void 0) $e(e2[r2], r2);
      }
      function Ue() {
        X = V();
      }
      var We = { format: Be, load: $e, _table: X, load_table: ze, parse_date_code: K, is_date: Ne, get_table: function _c() {
        return We._table = X;
      } };
      var je = { 5: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 23: "General", 24: "General", 25: "General", 26: "General", 27: "m/d/yy", 28: "m/d/yy", 29: "m/d/yy", 30: "m/d/yy", 31: "m/d/yy", 32: "h:mm:ss", 33: "h:mm:ss", 34: "h:mm:ss", 35: "h:mm:ss", 36: "m/d/yy", 41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)', 50: "m/d/yy", 51: "m/d/yy", 52: "m/d/yy", 53: "m/d/yy", 54: "m/d/yy", 55: "m/d/yy", 56: "m/d/yy", 57: "m/d/yy", 58: "m/d/yy", 59: "0", 60: "0.00", 61: "#,##0", 62: "#,##0.00", 63: '"$"#,##0_);\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 67: "0%", 68: "0.00%", 69: "# ?/?", 70: "# ??/??", 71: "m/d/yy", 72: "m/d/yy", 73: "d-mmm-yy", 74: "d-mmm", 75: "mmm-yy", 76: "h:mm", 77: "h:mm:ss", 78: "m/d/yy h:mm", 79: "mm:ss", 80: "[h]:mm:ss", 81: "mmss.0" };
      var He = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
      function Ve(e2) {
        var r2 = typeof e2 == "number" ? X[e2] : e2;
        r2 = r2.replace(He, "(\\d+)");
        return new RegExp("^" + r2 + "$");
      }
      function Xe(e2, r2, t2) {
        var a2 = -1, n2 = -1, i2 = -1, s2 = -1, l2 = -1, o2 = -1;
        (r2.match(He) || []).forEach(function(e3, r3) {
          var c3 = parseInt(t2[r3 + 1], 10);
          switch (e3.toLowerCase().charAt(0)) {
            case "y":
              a2 = c3;
              break;
            case "d":
              i2 = c3;
              break;
            case "h":
              s2 = c3;
              break;
            case "s":
              o2 = c3;
              break;
            case "m":
              if (s2 >= 0) l2 = c3;
              else n2 = c3;
              break;
          }
        });
        if (o2 >= 0 && l2 == -1 && n2 >= 0) {
          l2 = n2;
          n2 = -1;
        }
        var c2 = ("" + (a2 >= 0 ? a2 : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (n2 >= 1 ? n2 : 1)).slice(-2) + "-" + ("00" + (i2 >= 1 ? i2 : 1)).slice(-2);
        if (c2.length == 7) c2 = "0" + c2;
        if (c2.length == 8) c2 = "20" + c2;
        var f2 = ("00" + (s2 >= 0 ? s2 : 0)).slice(-2) + ":" + ("00" + (l2 >= 0 ? l2 : 0)).slice(-2) + ":" + ("00" + (o2 >= 0 ? o2 : 0)).slice(-2);
        if (s2 == -1 && l2 == -1 && o2 == -1) return c2;
        if (a2 == -1 && n2 == -1 && i2 == -1) return f2;
        return c2 + "T" + f2;
      }
      var Ge = (function() {
        var e2 = {};
        e2.version = "1.2.0";
        function r2() {
          var e3 = 0, r3 = new Array(256);
          for (var t3 = 0; t3 != 256; ++t3) {
            e3 = t3;
            e3 = e3 & 1 ? -306674912 ^ e3 >>> 1 : e3 >>> 1;
            e3 = e3 & 1 ? -306674912 ^ e3 >>> 1 : e3 >>> 1;
            e3 = e3 & 1 ? -306674912 ^ e3 >>> 1 : e3 >>> 1;
            e3 = e3 & 1 ? -306674912 ^ e3 >>> 1 : e3 >>> 1;
            e3 = e3 & 1 ? -306674912 ^ e3 >>> 1 : e3 >>> 1;
            e3 = e3 & 1 ? -306674912 ^ e3 >>> 1 : e3 >>> 1;
            e3 = e3 & 1 ? -306674912 ^ e3 >>> 1 : e3 >>> 1;
            e3 = e3 & 1 ? -306674912 ^ e3 >>> 1 : e3 >>> 1;
            r3[t3] = e3;
          }
          return typeof Int32Array !== "undefined" ? new Int32Array(r3) : r3;
        }
        var t2 = r2();
        function a2(e3) {
          var r3 = 0, t3 = 0, a3 = 0, n3 = typeof Int32Array !== "undefined" ? new Int32Array(4096) : new Array(4096);
          for (a3 = 0; a3 != 256; ++a3) n3[a3] = e3[a3];
          for (a3 = 0; a3 != 256; ++a3) {
            t3 = e3[a3];
            for (r3 = 256 + a3; r3 < 4096; r3 += 256) t3 = n3[r3] = t3 >>> 8 ^ e3[t3 & 255];
          }
          var i3 = [];
          for (a3 = 1; a3 != 16; ++a3) i3[a3 - 1] = typeof Int32Array !== "undefined" ? n3.subarray(a3 * 256, a3 * 256 + 256) : n3.slice(a3 * 256, a3 * 256 + 256);
          return i3;
        }
        var n2 = a2(t2);
        var i2 = n2[0], s2 = n2[1], l2 = n2[2], o2 = n2[3], c2 = n2[4];
        var f2 = n2[5], u2 = n2[6], h2 = n2[7], p2 = n2[8], d2 = n2[9];
        var m2 = n2[10], v2 = n2[11], g2 = n2[12], b2 = n2[13], w2 = n2[14];
        function y2(e3, r3) {
          var a3 = r3 ^ -1;
          for (var n3 = 0, i3 = e3.length; n3 < i3; ) a3 = a3 >>> 8 ^ t2[(a3 ^ e3.charCodeAt(n3++)) & 255];
          return ~a3;
        }
        function k2(e3, r3) {
          var a3 = r3 ^ -1, n3 = e3.length - 15, y3 = 0;
          for (; y3 < n3; ) a3 = w2[e3[y3++] ^ a3 & 255] ^ b2[e3[y3++] ^ a3 >> 8 & 255] ^ g2[e3[y3++] ^ a3 >> 16 & 255] ^ v2[e3[y3++] ^ a3 >>> 24] ^ m2[e3[y3++]] ^ d2[e3[y3++]] ^ p2[e3[y3++]] ^ h2[e3[y3++]] ^ u2[e3[y3++]] ^ f2[e3[y3++]] ^ c2[e3[y3++]] ^ o2[e3[y3++]] ^ l2[e3[y3++]] ^ s2[e3[y3++]] ^ i2[e3[y3++]] ^ t2[e3[y3++]];
          n3 += 15;
          while (y3 < n3) a3 = a3 >>> 8 ^ t2[(a3 ^ e3[y3++]) & 255];
          return ~a3;
        }
        function x2(e3, r3) {
          var a3 = r3 ^ -1;
          for (var n3 = 0, i3 = e3.length, s3 = 0, l3 = 0; n3 < i3; ) {
            s3 = e3.charCodeAt(n3++);
            if (s3 < 128) {
              a3 = a3 >>> 8 ^ t2[(a3 ^ s3) & 255];
            } else if (s3 < 2048) {
              a3 = a3 >>> 8 ^ t2[(a3 ^ (192 | s3 >> 6 & 31)) & 255];
              a3 = a3 >>> 8 ^ t2[(a3 ^ (128 | s3 & 63)) & 255];
            } else if (s3 >= 55296 && s3 < 57344) {
              s3 = (s3 & 1023) + 64;
              l3 = e3.charCodeAt(n3++) & 1023;
              a3 = a3 >>> 8 ^ t2[(a3 ^ (240 | s3 >> 8 & 7)) & 255];
              a3 = a3 >>> 8 ^ t2[(a3 ^ (128 | s3 >> 2 & 63)) & 255];
              a3 = a3 >>> 8 ^ t2[(a3 ^ (128 | l3 >> 6 & 15 | (s3 & 3) << 4)) & 255];
              a3 = a3 >>> 8 ^ t2[(a3 ^ (128 | l3 & 63)) & 255];
            } else {
              a3 = a3 >>> 8 ^ t2[(a3 ^ (224 | s3 >> 12 & 15)) & 255];
              a3 = a3 >>> 8 ^ t2[(a3 ^ (128 | s3 >> 6 & 63)) & 255];
              a3 = a3 >>> 8 ^ t2[(a3 ^ (128 | s3 & 63)) & 255];
            }
          }
          return ~a3;
        }
        e2.table = t2;
        e2.bstr = y2;
        e2.buf = k2;
        e2.str = x2;
        return e2;
      })();
      var Ye = (function Ac() {
        var e2 = {};
        e2.version = "1.2.1";
        function r2(e3, r3) {
          var t3 = e3.split("/"), a3 = r3.split("/");
          for (var n3 = 0, i3 = 0, s3 = Math.min(t3.length, a3.length); n3 < s3; ++n3) {
            if (i3 = t3[n3].length - a3[n3].length) return i3;
            if (t3[n3] != a3[n3]) return t3[n3] < a3[n3] ? -1 : 1;
          }
          return t3.length - a3.length;
        }
        function t2(e3) {
          if (e3.charAt(e3.length - 1) == "/") return e3.slice(0, -1).indexOf("/") === -1 ? e3 : t2(e3.slice(0, -1));
          var r3 = e3.lastIndexOf("/");
          return r3 === -1 ? e3 : e3.slice(0, r3 + 1);
        }
        function a2(e3) {
          if (e3.charAt(e3.length - 1) == "/") return a2(e3.slice(0, -1));
          var r3 = e3.lastIndexOf("/");
          return r3 === -1 ? e3 : e3.slice(r3 + 1);
        }
        function n2(e3, r3) {
          if (typeof r3 === "string") r3 = new Date(r3);
          var t3 = r3.getHours();
          t3 = t3 << 6 | r3.getMinutes();
          t3 = t3 << 5 | r3.getSeconds() >>> 1;
          e3._W(2, t3);
          var a3 = r3.getFullYear() - 1980;
          a3 = a3 << 4 | r3.getMonth() + 1;
          a3 = a3 << 5 | r3.getDate();
          e3._W(2, a3);
        }
        function i2(e3) {
          var r3 = e3._R(2) & 65535;
          var t3 = e3._R(2) & 65535;
          var a3 = /* @__PURE__ */ new Date();
          var n3 = t3 & 31;
          t3 >>>= 5;
          var i3 = t3 & 15;
          t3 >>>= 4;
          a3.setMilliseconds(0);
          a3.setFullYear(t3 + 1980);
          a3.setMonth(i3 - 1);
          a3.setDate(n3);
          var s3 = r3 & 31;
          r3 >>>= 5;
          var l3 = r3 & 63;
          r3 >>>= 6;
          a3.setHours(r3);
          a3.setMinutes(l3);
          a3.setSeconds(s3 << 1);
          return a3;
        }
        function s2(e3) {
          ca(e3, 0);
          var r3 = {};
          var t3 = 0;
          while (e3.l <= e3.length - 4) {
            var a3 = e3._R(2);
            var n3 = e3._R(2), i3 = e3.l + n3;
            var s3 = {};
            switch (a3) {
              case 21589:
                {
                  t3 = e3._R(1);
                  if (t3 & 1) s3.mtime = e3._R(4);
                  if (n3 > 5) {
                    if (t3 & 2) s3.atime = e3._R(4);
                    if (t3 & 4) s3.ctime = e3._R(4);
                  }
                  if (s3.mtime) s3.mt = new Date(s3.mtime * 1e3);
                }
                break;
            }
            e3.l = i3;
            r3[a3] = s3;
          }
          return r3;
        }
        var l2;
        function o2() {
          return l2 || (l2 = void 0);
        }
        function c2(e3, r3) {
          if (e3[0] == 80 && e3[1] == 75) return Oe2(e3, r3);
          if ((e3[0] | 32) == 109 && (e3[1] | 32) == 105) return ze2(e3, r3);
          if (e3.length < 512) throw new Error("CFB file size " + e3.length + " < 512");
          var t3 = 3;
          var a3 = 512;
          var n3 = 0;
          var i3 = 0;
          var s3 = 0;
          var l3 = 0;
          var o3 = 0;
          var c3 = [];
          var d3 = e3.slice(0, 512);
          ca(d3, 0);
          var v3 = f2(d3);
          t3 = v3[0];
          switch (t3) {
            case 3:
              a3 = 512;
              break;
            case 4:
              a3 = 4096;
              break;
            case 0:
              if (v3[1] == 0) return Oe2(e3, r3);
            default:
              throw new Error("Major Version: Expected 3 or 4 saw " + t3);
          }
          if (a3 !== 512) {
            d3 = e3.slice(0, a3);
            ca(d3, 28);
          }
          var b2 = e3.slice(0, a3);
          u2(d3, t3);
          var w2 = d3._R(4, "i");
          if (t3 === 3 && w2 !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + w2);
          d3.l += 4;
          s3 = d3._R(4, "i");
          d3.l += 4;
          d3.chk("00100000", "Mini Stream Cutoff Size: ");
          l3 = d3._R(4, "i");
          n3 = d3._R(4, "i");
          o3 = d3._R(4, "i");
          i3 = d3._R(4, "i");
          for (var y2 = -1, k2 = 0; k2 < 109; ++k2) {
            y2 = d3._R(4, "i");
            if (y2 < 0) break;
            c3[k2] = y2;
          }
          var x2 = h2(e3, a3);
          m2(o3, i3, x2, a3, c3);
          var S2 = g2(x2, s3, c3, a3);
          S2[s3].name = "!Directory";
          if (n3 > 0 && l3 !== B2) S2[l3].name = "!MiniFAT";
          S2[c3[0]].name = "!FAT";
          S2.fat_addrs = c3;
          S2.ssz = a3;
          var C2 = {}, A3 = [], T3 = [], E3 = [];
          _2(s3, S2, x2, A3, n3, C2, T3, l3);
          p2(T3, E3, A3);
          A3.shift();
          var F2 = { FileIndex: T3, FullPaths: E3 };
          if (r3 && r3.raw) F2.raw = { header: b2, sectors: x2 };
          return F2;
        }
        function f2(e3) {
          if (e3[e3.l] == 80 && e3[e3.l + 1] == 75) return [0, 0];
          e3.chk($2, "Header Signature: ");
          e3.l += 16;
          var r3 = e3._R(2, "u");
          return [e3._R(2, "u"), r3];
        }
        function u2(e3, r3) {
          var t3 = 9;
          e3.l += 2;
          switch (t3 = e3._R(2)) {
            case 9:
              if (r3 != 3) throw new Error("Sector Shift: Expected 9 saw " + t3);
              break;
            case 12:
              if (r3 != 4) throw new Error("Sector Shift: Expected 12 saw " + t3);
              break;
            default:
              throw new Error("Sector Shift: Expected 9 or 12 saw " + t3);
          }
          e3.chk("0600", "Mini Sector Shift: ");
          e3.chk("000000000000", "Reserved: ");
        }
        function h2(e3, r3) {
          var t3 = Math.ceil(e3.length / r3) - 1;
          var a3 = [];
          for (var n3 = 1; n3 < t3; ++n3) a3[n3 - 1] = e3.slice(n3 * r3, (n3 + 1) * r3);
          a3[t3 - 1] = e3.slice(t3 * r3);
          return a3;
        }
        function p2(e3, r3, t3) {
          var a3 = 0, n3 = 0, i3 = 0, s3 = 0, l3 = 0, o3 = t3.length;
          var c3 = [], f3 = [];
          for (; a3 < o3; ++a3) {
            c3[a3] = f3[a3] = a3;
            r3[a3] = t3[a3];
          }
          for (; l3 < f3.length; ++l3) {
            a3 = f3[l3];
            n3 = e3[a3].L;
            i3 = e3[a3].R;
            s3 = e3[a3].C;
            if (c3[a3] === a3) {
              if (n3 !== -1 && c3[n3] !== n3) c3[a3] = c3[n3];
              if (i3 !== -1 && c3[i3] !== i3) c3[a3] = c3[i3];
            }
            if (s3 !== -1) c3[s3] = a3;
            if (n3 !== -1 && a3 != c3[a3]) {
              c3[n3] = c3[a3];
              if (f3.lastIndexOf(n3) < l3) f3.push(n3);
            }
            if (i3 !== -1 && a3 != c3[a3]) {
              c3[i3] = c3[a3];
              if (f3.lastIndexOf(i3) < l3) f3.push(i3);
            }
          }
          for (a3 = 1; a3 < o3; ++a3) if (c3[a3] === a3) {
            if (i3 !== -1 && c3[i3] !== i3) c3[a3] = c3[i3];
            else if (n3 !== -1 && c3[n3] !== n3) c3[a3] = c3[n3];
          }
          for (a3 = 1; a3 < o3; ++a3) {
            if (e3[a3].type === 0) continue;
            l3 = a3;
            if (l3 != c3[l3]) do {
              l3 = c3[l3];
              r3[a3] = r3[l3] + "/" + r3[a3];
            } while (l3 !== 0 && -1 !== c3[l3] && l3 != c3[l3]);
            c3[a3] = -1;
          }
          r3[0] += "/";
          for (a3 = 1; a3 < o3; ++a3) {
            if (e3[a3].type !== 2) r3[a3] += "/";
          }
        }
        function d2(e3, r3, t3) {
          var a3 = e3.start, n3 = e3.size;
          var i3 = [];
          var s3 = a3;
          while (t3 && n3 > 0 && s3 >= 0) {
            i3.push(r3.slice(s3 * L2, s3 * L2 + L2));
            n3 -= L2;
            s3 = ra(t3, s3 * 4);
          }
          if (i3.length === 0) return ua(0);
          return F(i3).slice(0, e3.size);
        }
        function m2(e3, r3, t3, a3, n3) {
          var i3 = B2;
          if (e3 === B2) {
            if (r3 !== 0) throw new Error("DIFAT chain shorter than expected");
          } else if (e3 !== -1) {
            var s3 = t3[e3], l3 = (a3 >>> 2) - 1;
            if (!s3) return;
            for (var o3 = 0; o3 < l3; ++o3) {
              if ((i3 = ra(s3, o3 * 4)) === B2) break;
              n3.push(i3);
            }
            m2(ra(s3, a3 - 4), r3 - 1, t3, a3, n3);
          }
        }
        function v2(e3, r3, t3, a3, n3) {
          var i3 = [], s3 = [];
          if (!n3) n3 = [];
          var l3 = a3 - 1, o3 = 0, c3 = 0;
          for (o3 = r3; o3 >= 0; ) {
            n3[o3] = true;
            i3[i3.length] = o3;
            s3.push(e3[o3]);
            var f3 = t3[Math.floor(o3 * 4 / a3)];
            c3 = o3 * 4 & l3;
            if (a3 < 4 + c3) throw new Error("FAT boundary crossed: " + o3 + " 4 " + a3);
            if (!e3[f3]) break;
            o3 = ra(e3[f3], c3);
          }
          return { nodes: i3, data: Dt([s3]) };
        }
        function g2(e3, r3, t3, a3) {
          var n3 = e3.length, i3 = [];
          var s3 = [], l3 = [], o3 = [];
          var c3 = a3 - 1, f3 = 0, u3 = 0, h3 = 0, p3 = 0;
          for (f3 = 0; f3 < n3; ++f3) {
            l3 = [];
            h3 = f3 + r3;
            if (h3 >= n3) h3 -= n3;
            if (s3[h3]) continue;
            o3 = [];
            var d3 = [];
            for (u3 = h3; u3 >= 0; ) {
              d3[u3] = true;
              s3[u3] = true;
              l3[l3.length] = u3;
              o3.push(e3[u3]);
              var m3 = t3[Math.floor(u3 * 4 / a3)];
              p3 = u3 * 4 & c3;
              if (a3 < 4 + p3) throw new Error("FAT boundary crossed: " + u3 + " 4 " + a3);
              if (!e3[m3]) break;
              u3 = ra(e3[m3], p3);
              if (d3[u3]) break;
            }
            i3[h3] = { nodes: l3, data: Dt([o3]) };
          }
          return i3;
        }
        function _2(e3, r3, t3, a3, n3, i3, s3, l3) {
          var o3 = 0, c3 = a3.length ? 2 : 0;
          var f3 = r3[e3].data;
          var u3 = 0, h3 = 0, p3;
          for (; u3 < f3.length; u3 += 128) {
            var m3 = f3.slice(u3, u3 + 128);
            ca(m3, 64);
            h3 = m3._R(2);
            p3 = Mt(m3, 0, h3 - c3);
            a3.push(p3);
            var g3 = { name: p3, type: m3._R(1), color: m3._R(1), L: m3._R(4, "i"), R: m3._R(4, "i"), C: m3._R(4, "i"), clsid: m3._R(16), state: m3._R(4, "i"), start: 0, size: 0 };
            var b2 = m3._R(2) + m3._R(2) + m3._R(2) + m3._R(2);
            if (b2 !== 0) g3.ct = A2(m3, m3.l - 8);
            var w2 = m3._R(2) + m3._R(2) + m3._R(2) + m3._R(2);
            if (w2 !== 0) g3.mt = A2(m3, m3.l - 8);
            g3.start = m3._R(4, "i");
            g3.size = m3._R(4, "i");
            if (g3.size < 0 && g3.start < 0) {
              g3.size = g3.type = 0;
              g3.start = B2;
              g3.name = "";
            }
            if (g3.type === 5) {
              o3 = g3.start;
              if (n3 > 0 && o3 !== B2) r3[o3].name = "!StreamData";
            } else if (g3.size >= 4096) {
              g3.storage = "fat";
              if (r3[g3.start] === void 0) r3[g3.start] = v2(t3, g3.start, r3.fat_addrs, r3.ssz);
              r3[g3.start].name = g3.name;
              g3.content = r3[g3.start].data.slice(0, g3.size);
            } else {
              g3.storage = "minifat";
              if (g3.size < 0) g3.size = 0;
              else if (o3 !== B2 && g3.start !== B2 && r3[o3]) {
                g3.content = d2(g3, r3[o3].data, (r3[l3] || {}).data);
              }
            }
            if (g3.content) ca(g3.content, 0);
            i3[p3] = g3;
            s3.push(g3);
          }
        }
        function A2(e3, r3) {
          return new Date((ea(e3, r3 + 4) / 1e7 * Math.pow(2, 32) + ea(e3, r3) / 1e7 - 11644473600) * 1e3);
        }
        function T2(e3, r3) {
          o2();
          return c2(l2.readFileSync(e3), r3);
        }
        function E2(e3, r3) {
          var t3 = r3 && r3.type;
          if (!t3) {
            if (y && Buffer.isBuffer(e3)) t3 = "buffer";
          }
          switch (t3 || "base64") {
            case "file":
              return T2(e3, r3);
            case "base64":
              return c2(C(w(e3)), r3);
            case "binary":
              return c2(C(e3), r3);
          }
          return c2(e3, r3);
        }
        function D2(e3, r3) {
          var t3 = r3 || {}, a3 = t3.root || "Root Entry";
          if (!e3.FullPaths) e3.FullPaths = [];
          if (!e3.FileIndex) e3.FileIndex = [];
          if (e3.FullPaths.length !== e3.FileIndex.length) throw new Error("inconsistent CFB structure");
          if (e3.FullPaths.length === 0) {
            e3.FullPaths[0] = a3 + "/";
            e3.FileIndex[0] = { name: a3, type: 5 };
          }
          if (t3.CLSID) e3.FileIndex[0].clsid = t3.CLSID;
          N2(e3);
        }
        function N2(e3) {
          var r3 = "Sh33tJ5";
          if (Ye.find(e3, "/" + r3)) return;
          var t3 = ua(4);
          t3[0] = 55;
          t3[1] = t3[3] = 50;
          t3[2] = 54;
          e3.FileIndex.push({ name: r3, type: 2, content: t3, size: 4, L: 69, R: 69, C: 69 });
          e3.FullPaths.push(e3.FullPaths[0] + r3);
          P2(e3);
        }
        function P2(e3, n3) {
          D2(e3);
          var i3 = false, s3 = false;
          for (var l3 = e3.FullPaths.length - 1; l3 >= 0; --l3) {
            var o3 = e3.FileIndex[l3];
            switch (o3.type) {
              case 0:
                if (s3) i3 = true;
                else {
                  e3.FileIndex.pop();
                  e3.FullPaths.pop();
                }
                break;
              case 1:
                ;
              case 2:
                ;
              case 5:
                s3 = true;
                if (isNaN(o3.R * o3.L * o3.C)) i3 = true;
                if (o3.R > -1 && o3.L > -1 && o3.R == o3.L) i3 = true;
                break;
              default:
                i3 = true;
                break;
            }
          }
          if (!i3 && !n3) return;
          var c3 = new Date(1987, 1, 19), f3 = 0;
          var u3 = Object.create ? /* @__PURE__ */ Object.create(null) : {};
          var h3 = [];
          for (l3 = 0; l3 < e3.FullPaths.length; ++l3) {
            u3[e3.FullPaths[l3]] = true;
            if (e3.FileIndex[l3].type === 0) continue;
            h3.push([e3.FullPaths[l3], e3.FileIndex[l3]]);
          }
          for (l3 = 0; l3 < h3.length; ++l3) {
            var p3 = t2(h3[l3][0]);
            s3 = u3[p3];
            if (!s3) {
              h3.push([p3, { name: a2(p3).replace("/", ""), type: 1, clsid: U2, ct: c3, mt: c3, content: null }]);
              u3[p3] = true;
            }
          }
          h3.sort(function(e4, t3) {
            return r2(e4[0], t3[0]);
          });
          e3.FullPaths = [];
          e3.FileIndex = [];
          for (l3 = 0; l3 < h3.length; ++l3) {
            e3.FullPaths[l3] = h3[l3][0];
            e3.FileIndex[l3] = h3[l3][1];
          }
          for (l3 = 0; l3 < h3.length; ++l3) {
            var d3 = e3.FileIndex[l3];
            var m3 = e3.FullPaths[l3];
            d3.name = a2(m3).replace("/", "");
            d3.L = d3.R = d3.C = -(d3.color = 1);
            d3.size = d3.content ? d3.content.length : 0;
            d3.start = 0;
            d3.clsid = d3.clsid || U2;
            if (l3 === 0) {
              d3.C = h3.length > 1 ? 1 : -1;
              d3.size = 0;
              d3.type = 5;
            } else if (m3.slice(-1) == "/") {
              for (f3 = l3 + 1; f3 < h3.length; ++f3) if (t2(e3.FullPaths[f3]) == m3) break;
              d3.C = f3 >= h3.length ? -1 : f3;
              for (f3 = l3 + 1; f3 < h3.length; ++f3) if (t2(e3.FullPaths[f3]) == t2(m3)) break;
              d3.R = f3 >= h3.length ? -1 : f3;
              d3.type = 1;
            } else {
              if (t2(e3.FullPaths[l3 + 1] || "") == t2(m3)) d3.R = l3 + 1;
              d3.type = 2;
            }
          }
        }
        function I2(e3, r3) {
          var t3 = r3 || {};
          if (t3.fileType == "mad") return Ue2(e3, t3);
          P2(e3);
          switch (t3.fileType) {
            case "zip":
              return Ne2(e3, t3);
          }
          var a3 = (function(e4) {
            var r4 = 0, t4 = 0;
            for (var a4 = 0; a4 < e4.FileIndex.length; ++a4) {
              var n4 = e4.FileIndex[a4];
              if (!n4.content) continue;
              var i4 = n4.content.length;
              if (i4 > 0) {
                if (i4 < 4096) r4 += i4 + 63 >> 6;
                else t4 += i4 + 511 >> 9;
              }
            }
            var s4 = e4.FullPaths.length + 3 >> 2;
            var l4 = r4 + 7 >> 3;
            var o4 = r4 + 127 >> 7;
            var c4 = l4 + t4 + s4 + o4;
            var f4 = c4 + 127 >> 7;
            var u4 = f4 <= 109 ? 0 : Math.ceil((f4 - 109) / 127);
            while (c4 + f4 + u4 + 127 >> 7 > f4) u4 = ++f4 <= 109 ? 0 : Math.ceil((f4 - 109) / 127);
            var h4 = [1, u4, f4, o4, s4, t4, r4, 0];
            e4.FileIndex[0].size = r4 << 6;
            h4[7] = (e4.FileIndex[0].start = h4[0] + h4[1] + h4[2] + h4[3] + h4[4] + h4[5]) + (h4[6] + 7 >> 3);
            return h4;
          })(e3);
          var n3 = ua(a3[7] << 9);
          var i3 = 0, s3 = 0;
          {
            for (i3 = 0; i3 < 8; ++i3) n3._W(1, z2[i3]);
            for (i3 = 0; i3 < 8; ++i3) n3._W(2, 0);
            n3._W(2, 62);
            n3._W(2, 3);
            n3._W(2, 65534);
            n3._W(2, 9);
            n3._W(2, 6);
            for (i3 = 0; i3 < 3; ++i3) n3._W(2, 0);
            n3._W(4, 0);
            n3._W(4, a3[2]);
            n3._W(4, a3[0] + a3[1] + a3[2] + a3[3] - 1);
            n3._W(4, 0);
            n3._W(4, 1 << 12);
            n3._W(4, a3[3] ? a3[0] + a3[1] + a3[2] - 1 : B2);
            n3._W(4, a3[3]);
            n3._W(-4, a3[1] ? a3[0] - 1 : B2);
            n3._W(4, a3[1]);
            for (i3 = 0; i3 < 109; ++i3) n3._W(-4, i3 < a3[2] ? a3[1] + i3 : -1);
          }
          if (a3[1]) {
            for (s3 = 0; s3 < a3[1]; ++s3) {
              for (; i3 < 236 + s3 * 127; ++i3) n3._W(-4, i3 < a3[2] ? a3[1] + i3 : -1);
              n3._W(-4, s3 === a3[1] - 1 ? B2 : s3 + 1);
            }
          }
          var l3 = function(e4) {
            for (s3 += e4; i3 < s3 - 1; ++i3) n3._W(-4, i3 + 1);
            if (e4) {
              ++i3;
              n3._W(-4, B2);
            }
          };
          s3 = i3 = 0;
          for (s3 += a3[1]; i3 < s3; ++i3) n3._W(-4, W2.DIFSECT);
          for (s3 += a3[2]; i3 < s3; ++i3) n3._W(-4, W2.FATSECT);
          l3(a3[3]);
          l3(a3[4]);
          var o3 = 0, c3 = 0;
          var f3 = e3.FileIndex[0];
          for (; o3 < e3.FileIndex.length; ++o3) {
            f3 = e3.FileIndex[o3];
            if (!f3.content) continue;
            c3 = f3.content.length;
            if (c3 < 4096) continue;
            f3.start = s3;
            l3(c3 + 511 >> 9);
          }
          l3(a3[6] + 7 >> 3);
          while (n3.l & 511) n3._W(-4, W2.ENDOFCHAIN);
          s3 = i3 = 0;
          for (o3 = 0; o3 < e3.FileIndex.length; ++o3) {
            f3 = e3.FileIndex[o3];
            if (!f3.content) continue;
            c3 = f3.content.length;
            if (!c3 || c3 >= 4096) continue;
            f3.start = s3;
            l3(c3 + 63 >> 6);
          }
          while (n3.l & 511) n3._W(-4, W2.ENDOFCHAIN);
          for (i3 = 0; i3 < a3[4] << 2; ++i3) {
            var u3 = e3.FullPaths[i3];
            if (!u3 || u3.length === 0) {
              for (o3 = 0; o3 < 17; ++o3) n3._W(4, 0);
              for (o3 = 0; o3 < 3; ++o3) n3._W(4, -1);
              for (o3 = 0; o3 < 12; ++o3) n3._W(4, 0);
              continue;
            }
            f3 = e3.FileIndex[i3];
            if (i3 === 0) f3.start = f3.size ? f3.start - 1 : B2;
            var h3 = i3 === 0 && t3.root || f3.name;
            c3 = 2 * (h3.length + 1);
            n3._W(64, h3, "utf16le");
            n3._W(2, c3);
            n3._W(1, f3.type);
            n3._W(1, f3.color);
            n3._W(-4, f3.L);
            n3._W(-4, f3.R);
            n3._W(-4, f3.C);
            if (!f3.clsid) for (o3 = 0; o3 < 4; ++o3) n3._W(4, 0);
            else n3._W(16, f3.clsid, "hex");
            n3._W(4, f3.state || 0);
            n3._W(4, 0);
            n3._W(4, 0);
            n3._W(4, 0);
            n3._W(4, 0);
            n3._W(4, f3.start);
            n3._W(4, f3.size);
            n3._W(4, 0);
          }
          for (i3 = 1; i3 < e3.FileIndex.length; ++i3) {
            f3 = e3.FileIndex[i3];
            if (f3.size >= 4096) {
              n3.l = f3.start + 1 << 9;
              if (y && Buffer.isBuffer(f3.content)) {
                f3.content.copy(n3, n3.l, 0, f3.size);
                n3.l += f3.size + 511 & -512;
              } else {
                for (o3 = 0; o3 < f3.size; ++o3) n3._W(1, f3.content[o3]);
                for (; o3 & 511; ++o3) n3._W(1, 0);
              }
            }
          }
          for (i3 = 1; i3 < e3.FileIndex.length; ++i3) {
            f3 = e3.FileIndex[i3];
            if (f3.size > 0 && f3.size < 4096) {
              if (y && Buffer.isBuffer(f3.content)) {
                f3.content.copy(n3, n3.l, 0, f3.size);
                n3.l += f3.size + 63 & -64;
              } else {
                for (o3 = 0; o3 < f3.size; ++o3) n3._W(1, f3.content[o3]);
                for (; o3 & 63; ++o3) n3._W(1, 0);
              }
            }
          }
          if (y) {
            n3.l = n3.length;
          } else {
            while (n3.l < n3.length) n3._W(1, 0);
          }
          return n3;
        }
        function R2(e3, r3) {
          var t3 = e3.FullPaths.map(function(e4) {
            return e4.toUpperCase();
          });
          var a3 = t3.map(function(e4) {
            var r4 = e4.split("/");
            return r4[r4.length - (e4.slice(-1) == "/" ? 2 : 1)];
          });
          var n3 = false;
          if (r3.charCodeAt(0) === 47) {
            n3 = true;
            r3 = t3[0].slice(0, -1) + r3;
          } else n3 = r3.indexOf("/") !== -1;
          var i3 = r3.toUpperCase();
          var s3 = n3 === true ? t3.indexOf(i3) : a3.indexOf(i3);
          if (s3 !== -1) return e3.FileIndex[s3];
          var l3 = !i3.match(M);
          i3 = i3.replace(O, "");
          if (l3) i3 = i3.replace(M, "!");
          for (s3 = 0; s3 < t3.length; ++s3) {
            if ((l3 ? t3[s3].replace(M, "!") : t3[s3]).replace(O, "") == i3) return e3.FileIndex[s3];
            if ((l3 ? a3[s3].replace(M, "!") : a3[s3]).replace(O, "") == i3) return e3.FileIndex[s3];
          }
          return null;
        }
        var L2 = 64;
        var B2 = -2;
        var $2 = "d0cf11e0a1b11ae1";
        var z2 = [208, 207, 17, 224, 161, 177, 26, 225];
        var U2 = "00000000000000000000000000000000";
        var W2 = { MAXREGSECT: -6, DIFSECT: -4, FATSECT: -3, ENDOFCHAIN: B2, FREESECT: -1, HEADER_SIGNATURE: $2, HEADER_MINOR_VERSION: "3e00", MAXREGSID: -6, NOSTREAM: -1, HEADER_CLSID: U2, EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"] };
        function j2(e3, r3, t3) {
          o2();
          var a3 = I2(e3, t3);
          l2.writeFileSync(r3, a3);
        }
        function H2(e3) {
          var r3 = new Array(e3.length);
          for (var t3 = 0; t3 < e3.length; ++t3) r3[t3] = String.fromCharCode(e3[t3]);
          return r3.join("");
        }
        function V2(e3, r3) {
          var t3 = I2(e3, r3);
          switch (r3 && r3.type || "buffer") {
            case "file":
              o2();
              l2.writeFileSync(r3.filename, t3);
              return t3;
            case "binary":
              return typeof t3 == "string" ? t3 : H2(t3);
            case "base64":
              return b(typeof t3 == "string" ? t3 : H2(t3));
            case "buffer":
              if (y) return Buffer.isBuffer(t3) ? t3 : k(t3);
            case "array":
              return typeof t3 == "string" ? C(t3) : t3;
          }
          return t3;
        }
        var X2;
        function G2(e3) {
          try {
            var r3 = e3.InflateRaw;
            var t3 = new r3();
            t3._processChunk(new Uint8Array([3, 0]), t3._finishFlushFlag);
            if (t3.bytesRead) X2 = e3;
            else throw new Error("zlib does not expose bytesRead");
          } catch (a3) {
            console.error("cannot use native zlib: " + (a3.message || a3));
          }
        }
        function Y2(e3, r3) {
          if (!X2) return Fe2(e3, r3);
          var t3 = X2.InflateRaw;
          var a3 = new t3();
          var n3 = a3._processChunk(e3.slice(e3.l), a3._finishFlushFlag);
          e3.l += a3.bytesRead;
          return n3;
        }
        function J2(e3) {
          return X2 ? X2.deflateRawSync(e3) : ke2(e3);
        }
        var K2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        var q2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
        var Z2 = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
        function Q2(e3) {
          var r3 = (e3 << 1 | e3 << 11) & 139536 | (e3 << 5 | e3 << 15) & 558144;
          return (r3 >> 16 | r3 >> 8 | r3) & 255;
        }
        var ee2 = typeof Uint8Array !== "undefined";
        var re2 = ee2 ? new Uint8Array(1 << 8) : [];
        for (var te2 = 0; te2 < 1 << 8; ++te2) re2[te2] = Q2(te2);
        function ae2(e3, r3) {
          var t3 = re2[e3 & 255];
          if (r3 <= 8) return t3 >>> 8 - r3;
          t3 = t3 << 8 | re2[e3 >> 8 & 255];
          if (r3 <= 16) return t3 >>> 16 - r3;
          t3 = t3 << 8 | re2[e3 >> 16 & 255];
          return t3 >>> 24 - r3;
        }
        function ne2(e3, r3) {
          var t3 = r3 & 7, a3 = r3 >>> 3;
          return (e3[a3] | (t3 <= 6 ? 0 : e3[a3 + 1] << 8)) >>> t3 & 3;
        }
        function ie2(e3, r3) {
          var t3 = r3 & 7, a3 = r3 >>> 3;
          return (e3[a3] | (t3 <= 5 ? 0 : e3[a3 + 1] << 8)) >>> t3 & 7;
        }
        function se2(e3, r3) {
          var t3 = r3 & 7, a3 = r3 >>> 3;
          return (e3[a3] | (t3 <= 4 ? 0 : e3[a3 + 1] << 8)) >>> t3 & 15;
        }
        function le2(e3, r3) {
          var t3 = r3 & 7, a3 = r3 >>> 3;
          return (e3[a3] | (t3 <= 3 ? 0 : e3[a3 + 1] << 8)) >>> t3 & 31;
        }
        function oe2(e3, r3) {
          var t3 = r3 & 7, a3 = r3 >>> 3;
          return (e3[a3] | (t3 <= 1 ? 0 : e3[a3 + 1] << 8)) >>> t3 & 127;
        }
        function ce2(e3, r3, t3) {
          var a3 = r3 & 7, n3 = r3 >>> 3, i3 = (1 << t3) - 1;
          var s3 = e3[n3] >>> a3;
          if (t3 < 8 - a3) return s3 & i3;
          s3 |= e3[n3 + 1] << 8 - a3;
          if (t3 < 16 - a3) return s3 & i3;
          s3 |= e3[n3 + 2] << 16 - a3;
          if (t3 < 24 - a3) return s3 & i3;
          s3 |= e3[n3 + 3] << 24 - a3;
          return s3 & i3;
        }
        function fe2(e3, r3, t3) {
          var a3 = r3 & 7, n3 = r3 >>> 3;
          if (a3 <= 5) e3[n3] |= (t3 & 7) << a3;
          else {
            e3[n3] |= t3 << a3 & 255;
            e3[n3 + 1] = (t3 & 7) >> 8 - a3;
          }
          return r3 + 3;
        }
        function ue2(e3, r3, t3) {
          var a3 = r3 & 7, n3 = r3 >>> 3;
          t3 = (t3 & 1) << a3;
          e3[n3] |= t3;
          return r3 + 1;
        }
        function he2(e3, r3, t3) {
          var a3 = r3 & 7, n3 = r3 >>> 3;
          t3 <<= a3;
          e3[n3] |= t3 & 255;
          t3 >>>= 8;
          e3[n3 + 1] = t3;
          return r3 + 8;
        }
        function pe2(e3, r3, t3) {
          var a3 = r3 & 7, n3 = r3 >>> 3;
          t3 <<= a3;
          e3[n3] |= t3 & 255;
          t3 >>>= 8;
          e3[n3 + 1] = t3 & 255;
          e3[n3 + 2] = t3 >>> 8;
          return r3 + 16;
        }
        function de2(e3, r3) {
          var t3 = e3.length, a3 = 2 * t3 > r3 ? 2 * t3 : r3 + 5, n3 = 0;
          if (t3 >= r3) return e3;
          if (y) {
            var i3 = S(a3);
            if (e3.copy) e3.copy(i3);
            else for (; n3 < e3.length; ++n3) i3[n3] = e3[n3];
            return i3;
          } else if (ee2) {
            var s3 = new Uint8Array(a3);
            if (s3.set) s3.set(e3);
            else for (; n3 < t3; ++n3) s3[n3] = e3[n3];
            return s3;
          }
          e3.length = a3;
          return e3;
        }
        function me2(e3) {
          var r3 = new Array(e3);
          for (var t3 = 0; t3 < e3; ++t3) r3[t3] = 0;
          return r3;
        }
        function ve2(e3, r3, t3) {
          var a3 = 1, n3 = 0, i3 = 0, s3 = 0, l3 = 0, o3 = e3.length;
          var c3 = ee2 ? new Uint16Array(32) : me2(32);
          for (i3 = 0; i3 < 32; ++i3) c3[i3] = 0;
          for (i3 = o3; i3 < t3; ++i3) e3[i3] = 0;
          o3 = e3.length;
          var f3 = ee2 ? new Uint16Array(o3) : me2(o3);
          for (i3 = 0; i3 < o3; ++i3) {
            c3[n3 = e3[i3]]++;
            if (a3 < n3) a3 = n3;
            f3[i3] = 0;
          }
          c3[0] = 0;
          for (i3 = 1; i3 <= a3; ++i3) c3[i3 + 16] = l3 = l3 + c3[i3 - 1] << 1;
          for (i3 = 0; i3 < o3; ++i3) {
            l3 = e3[i3];
            if (l3 != 0) f3[i3] = c3[l3 + 16]++;
          }
          var u3 = 0;
          for (i3 = 0; i3 < o3; ++i3) {
            u3 = e3[i3];
            if (u3 != 0) {
              l3 = ae2(f3[i3], a3) >> a3 - u3;
              for (s3 = (1 << a3 + 4 - u3) - 1; s3 >= 0; --s3) r3[l3 | s3 << u3] = u3 & 15 | i3 << 4;
            }
          }
          return a3;
        }
        var ge2 = ee2 ? new Uint16Array(512) : me2(512);
        var be2 = ee2 ? new Uint16Array(32) : me2(32);
        if (!ee2) {
          for (var we2 = 0; we2 < 512; ++we2) ge2[we2] = 0;
          for (we2 = 0; we2 < 32; ++we2) be2[we2] = 0;
        }
        (function() {
          var e3 = [];
          var r3 = 0;
          for (; r3 < 32; r3++) e3.push(5);
          ve2(e3, be2, 32);
          var t3 = [];
          r3 = 0;
          for (; r3 <= 143; r3++) t3.push(8);
          for (; r3 <= 255; r3++) t3.push(9);
          for (; r3 <= 279; r3++) t3.push(7);
          for (; r3 <= 287; r3++) t3.push(8);
          ve2(t3, ge2, 288);
        })();
        var ye2 = (function Je2() {
          var e3 = ee2 ? new Uint8Array(32768) : [];
          var r3 = 0, t3 = 0;
          for (; r3 < Z2.length - 1; ++r3) {
            for (; t3 < Z2[r3 + 1]; ++t3) e3[t3] = r3;
          }
          for (; t3 < 32768; ++t3) e3[t3] = 29;
          var a3 = ee2 ? new Uint8Array(259) : [];
          for (r3 = 0, t3 = 0; r3 < q2.length - 1; ++r3) {
            for (; t3 < q2[r3 + 1]; ++t3) a3[t3] = r3;
          }
          function n3(e4, r4) {
            var t4 = 0;
            while (t4 < e4.length) {
              var a4 = Math.min(65535, e4.length - t4);
              var n4 = t4 + a4 == e4.length;
              r4._W(1, +n4);
              r4._W(2, a4);
              r4._W(2, ~a4 & 65535);
              while (a4-- > 0) r4[r4.l++] = e4[t4++];
            }
            return r4.l;
          }
          function i3(r4, t4) {
            var n4 = 0;
            var i4 = 0;
            var s3 = ee2 ? new Uint16Array(32768) : [];
            while (i4 < r4.length) {
              var l3 = Math.min(65535, r4.length - i4);
              if (l3 < 10) {
                n4 = fe2(t4, n4, +!!(i4 + l3 == r4.length));
                if (n4 & 7) n4 += 8 - (n4 & 7);
                t4.l = n4 / 8 | 0;
                t4._W(2, l3);
                t4._W(2, ~l3 & 65535);
                while (l3-- > 0) t4[t4.l++] = r4[i4++];
                n4 = t4.l * 8;
                continue;
              }
              n4 = fe2(t4, n4, +!!(i4 + l3 == r4.length) + 2);
              var o3 = 0;
              while (l3-- > 0) {
                var c3 = r4[i4];
                o3 = (o3 << 5 ^ c3) & 32767;
                var f3 = -1, u3 = 0;
                if (f3 = s3[o3]) {
                  f3 |= i4 & ~32767;
                  if (f3 > i4) f3 -= 32768;
                  if (f3 < i4) while (r4[f3 + u3] == r4[i4 + u3] && u3 < 250) ++u3;
                }
                if (u3 > 2) {
                  c3 = a3[u3];
                  if (c3 <= 22) n4 = he2(t4, n4, re2[c3 + 1] >> 1) - 1;
                  else {
                    he2(t4, n4, 3);
                    n4 += 5;
                    he2(t4, n4, re2[c3 - 23] >> 5);
                    n4 += 3;
                  }
                  var h3 = c3 < 8 ? 0 : c3 - 4 >> 2;
                  if (h3 > 0) {
                    pe2(t4, n4, u3 - q2[c3]);
                    n4 += h3;
                  }
                  c3 = e3[i4 - f3];
                  n4 = he2(t4, n4, re2[c3] >> 3);
                  n4 -= 3;
                  var p3 = c3 < 4 ? 0 : c3 - 2 >> 1;
                  if (p3 > 0) {
                    pe2(t4, n4, i4 - f3 - Z2[c3]);
                    n4 += p3;
                  }
                  for (var d3 = 0; d3 < u3; ++d3) {
                    s3[o3] = i4 & 32767;
                    o3 = (o3 << 5 ^ r4[i4]) & 32767;
                    ++i4;
                  }
                  l3 -= u3 - 1;
                } else {
                  if (c3 <= 143) c3 = c3 + 48;
                  else n4 = ue2(t4, n4, 1);
                  n4 = he2(t4, n4, re2[c3]);
                  s3[o3] = i4 & 32767;
                  ++i4;
                }
              }
              n4 = he2(t4, n4, 0) - 1;
            }
            t4.l = (n4 + 7) / 8 | 0;
            return t4.l;
          }
          return function s3(e4, r4) {
            if (e4.length < 8) return n3(e4, r4);
            return i3(e4, r4);
          };
        })();
        function ke2(e3) {
          var r3 = ua(50 + Math.floor(e3.length * 1.1));
          var t3 = ye2(e3, r3);
          return r3.slice(0, t3);
        }
        var xe2 = ee2 ? new Uint16Array(32768) : me2(32768);
        var Se2 = ee2 ? new Uint16Array(32768) : me2(32768);
        var Ce2 = ee2 ? new Uint16Array(128) : me2(128);
        var _e2 = 1, Ae2 = 1;
        function Te2(e3, r3) {
          var t3 = le2(e3, r3) + 257;
          r3 += 5;
          var a3 = le2(e3, r3) + 1;
          r3 += 5;
          var n3 = se2(e3, r3) + 4;
          r3 += 4;
          var i3 = 0;
          var s3 = ee2 ? new Uint8Array(19) : me2(19);
          var l3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          var o3 = 1;
          var c3 = ee2 ? new Uint8Array(8) : me2(8);
          var f3 = ee2 ? new Uint8Array(8) : me2(8);
          var u3 = s3.length;
          for (var h3 = 0; h3 < n3; ++h3) {
            s3[K2[h3]] = i3 = ie2(e3, r3);
            if (o3 < i3) o3 = i3;
            c3[i3]++;
            r3 += 3;
          }
          var p3 = 0;
          c3[0] = 0;
          for (h3 = 1; h3 <= o3; ++h3) f3[h3] = p3 = p3 + c3[h3 - 1] << 1;
          for (h3 = 0; h3 < u3; ++h3) if ((p3 = s3[h3]) != 0) l3[h3] = f3[p3]++;
          var d3 = 0;
          for (h3 = 0; h3 < u3; ++h3) {
            d3 = s3[h3];
            if (d3 != 0) {
              p3 = re2[l3[h3]] >> 8 - d3;
              for (var m3 = (1 << 7 - d3) - 1; m3 >= 0; --m3) Ce2[p3 | m3 << d3] = d3 & 7 | h3 << 3;
            }
          }
          var v3 = [];
          o3 = 1;
          for (; v3.length < t3 + a3; ) {
            p3 = Ce2[oe2(e3, r3)];
            r3 += p3 & 7;
            switch (p3 >>>= 3) {
              case 16:
                i3 = 3 + ne2(e3, r3);
                r3 += 2;
                p3 = v3[v3.length - 1];
                while (i3-- > 0) v3.push(p3);
                break;
              case 17:
                i3 = 3 + ie2(e3, r3);
                r3 += 3;
                while (i3-- > 0) v3.push(0);
                break;
              case 18:
                i3 = 11 + oe2(e3, r3);
                r3 += 7;
                while (i3-- > 0) v3.push(0);
                break;
              default:
                v3.push(p3);
                if (o3 < p3) o3 = p3;
                break;
            }
          }
          var g3 = v3.slice(0, t3), b2 = v3.slice(t3);
          for (h3 = t3; h3 < 286; ++h3) g3[h3] = 0;
          for (h3 = a3; h3 < 30; ++h3) b2[h3] = 0;
          _e2 = ve2(g3, xe2, 286);
          Ae2 = ve2(b2, Se2, 30);
          return r3;
        }
        function Ee2(e3, r3) {
          if (e3[0] == 3 && !(e3[1] & 3)) {
            return [x(r3), 2];
          }
          var t3 = 0;
          var a3 = 0;
          var n3 = S(r3 ? r3 : 1 << 18);
          var i3 = 0;
          var s3 = n3.length >>> 0;
          var l3 = 0, o3 = 0;
          while ((a3 & 1) == 0) {
            a3 = ie2(e3, t3);
            t3 += 3;
            if (a3 >>> 1 == 0) {
              if (t3 & 7) t3 += 8 - (t3 & 7);
              var c3 = e3[t3 >>> 3] | e3[(t3 >>> 3) + 1] << 8;
              t3 += 32;
              if (c3 > 0) {
                if (!r3 && s3 < i3 + c3) {
                  n3 = de2(n3, i3 + c3);
                  s3 = n3.length;
                }
                while (c3-- > 0) {
                  n3[i3++] = e3[t3 >>> 3];
                  t3 += 8;
                }
              }
              continue;
            } else if (a3 >> 1 == 1) {
              l3 = 9;
              o3 = 5;
            } else {
              t3 = Te2(e3, t3);
              l3 = _e2;
              o3 = Ae2;
            }
            for (; ; ) {
              if (!r3 && s3 < i3 + 32767) {
                n3 = de2(n3, i3 + 32767);
                s3 = n3.length;
              }
              var f3 = ce2(e3, t3, l3);
              var u3 = a3 >>> 1 == 1 ? ge2[f3] : xe2[f3];
              t3 += u3 & 15;
              u3 >>>= 4;
              if ((u3 >>> 8 & 255) === 0) n3[i3++] = u3;
              else if (u3 == 256) break;
              else {
                u3 -= 257;
                var h3 = u3 < 8 ? 0 : u3 - 4 >> 2;
                if (h3 > 5) h3 = 0;
                var p3 = i3 + q2[u3];
                if (h3 > 0) {
                  p3 += ce2(e3, t3, h3);
                  t3 += h3;
                }
                f3 = ce2(e3, t3, o3);
                u3 = a3 >>> 1 == 1 ? be2[f3] : Se2[f3];
                t3 += u3 & 15;
                u3 >>>= 4;
                var d3 = u3 < 4 ? 0 : u3 - 2 >> 1;
                var m3 = Z2[u3];
                if (d3 > 0) {
                  m3 += ce2(e3, t3, d3);
                  t3 += d3;
                }
                if (!r3 && s3 < p3) {
                  n3 = de2(n3, p3 + 100);
                  s3 = n3.length;
                }
                while (i3 < p3) {
                  n3[i3] = n3[i3 - m3];
                  ++i3;
                }
              }
            }
          }
          if (r3) return [n3, t3 + 7 >>> 3];
          return [n3.slice(0, i3), t3 + 7 >>> 3];
        }
        function Fe2(e3, r3) {
          var t3 = e3.slice(e3.l || 0);
          var a3 = Ee2(t3, r3);
          e3.l += a3[1];
          return a3[0];
        }
        function De2(e3, r3) {
          if (e3) {
            if (typeof console !== "undefined") console.error(r3);
          } else throw new Error(r3);
        }
        function Oe2(e3, r3) {
          var t3 = e3;
          ca(t3, 0);
          var a3 = [], n3 = [];
          var i3 = { FileIndex: a3, FullPaths: n3 };
          D2(i3, { root: r3.root });
          var l3 = t3.length - 4;
          while ((t3[l3] != 80 || t3[l3 + 1] != 75 || t3[l3 + 2] != 5 || t3[l3 + 3] != 6) && l3 >= 0) --l3;
          t3.l = l3 + 4;
          t3.l += 4;
          var o3 = t3._R(2);
          t3.l += 6;
          var c3 = t3._R(4);
          t3.l = c3;
          for (l3 = 0; l3 < o3; ++l3) {
            t3.l += 20;
            var f3 = t3._R(4);
            var u3 = t3._R(4);
            var h3 = t3._R(2);
            var p3 = t3._R(2);
            var d3 = t3._R(2);
            t3.l += 8;
            var m3 = t3._R(4);
            var v3 = s2(t3.slice(t3.l + h3, t3.l + h3 + p3));
            t3.l += h3 + p3 + d3;
            var g3 = t3.l;
            t3.l = m3 + 4;
            Me2(t3, f3, u3, i3, v3);
            t3.l = g3;
          }
          return i3;
        }
        function Me2(e3, r3, t3, a3, n3) {
          e3.l += 2;
          var l3 = e3._R(2);
          var o3 = e3._R(2);
          var c3 = i2(e3);
          if (l3 & 8257) throw new Error("Unsupported ZIP encryption");
          var f3 = e3._R(4);
          var u3 = e3._R(4);
          var h3 = e3._R(4);
          var p3 = e3._R(2);
          var d3 = e3._R(2);
          var m3 = "";
          for (var v3 = 0; v3 < p3; ++v3) m3 += String.fromCharCode(e3[e3.l++]);
          if (d3) {
            var g3 = s2(e3.slice(e3.l, e3.l + d3));
            if ((g3[21589] || {}).mt) c3 = g3[21589].mt;
            if (((n3 || {})[21589] || {}).mt) c3 = n3[21589].mt;
          }
          e3.l += d3;
          var b2 = e3.slice(e3.l, e3.l + u3);
          switch (o3) {
            case 8:
              b2 = Y2(e3, h3);
              break;
            case 0:
              break;
            default:
              throw new Error("Unsupported ZIP Compression method " + o3);
          }
          var w2 = false;
          if (l3 & 8) {
            f3 = e3._R(4);
            if (f3 == 134695760) {
              f3 = e3._R(4);
              w2 = true;
            }
            u3 = e3._R(4);
            h3 = e3._R(4);
          }
          if (u3 != r3) De2(w2, "Bad compressed size: " + r3 + " != " + u3);
          if (h3 != t3) De2(w2, "Bad uncompressed size: " + t3 + " != " + h3);
          je2(a3, m3, b2, { unsafe: true, mt: c3 });
        }
        function Ne2(e3, r3) {
          var t3 = r3 || {};
          var a3 = [], i3 = [];
          var s3 = ua(1);
          var l3 = t3.compression ? 8 : 0, o3 = 0;
          var c3 = false;
          if (c3) o3 |= 8;
          var f3 = 0, u3 = 0;
          var h3 = 0, p3 = 0;
          var d3 = e3.FullPaths[0], m3 = d3, v3 = e3.FileIndex[0];
          var g3 = [];
          var b2 = 0;
          for (f3 = 1; f3 < e3.FullPaths.length; ++f3) {
            m3 = e3.FullPaths[f3].slice(d3.length);
            v3 = e3.FileIndex[f3];
            if (!v3.size || !v3.content || m3 == "Sh33tJ5") continue;
            var w2 = h3;
            var y2 = ua(m3.length);
            for (u3 = 0; u3 < m3.length; ++u3) y2._W(1, m3.charCodeAt(u3) & 127);
            y2 = y2.slice(0, y2.l);
            g3[p3] = Ge.buf(v3.content, 0);
            var k2 = v3.content;
            if (l3 == 8) k2 = J2(k2);
            s3 = ua(30);
            s3._W(4, 67324752);
            s3._W(2, 20);
            s3._W(2, o3);
            s3._W(2, l3);
            if (v3.mt) n2(s3, v3.mt);
            else s3._W(4, 0);
            s3._W(-4, o3 & 8 ? 0 : g3[p3]);
            s3._W(4, o3 & 8 ? 0 : k2.length);
            s3._W(4, o3 & 8 ? 0 : v3.content.length);
            s3._W(2, y2.length);
            s3._W(2, 0);
            h3 += s3.length;
            a3.push(s3);
            h3 += y2.length;
            a3.push(y2);
            h3 += k2.length;
            a3.push(k2);
            if (o3 & 8) {
              s3 = ua(12);
              s3._W(-4, g3[p3]);
              s3._W(4, k2.length);
              s3._W(4, v3.content.length);
              h3 += s3.l;
              a3.push(s3);
            }
            s3 = ua(46);
            s3._W(4, 33639248);
            s3._W(2, 0);
            s3._W(2, 20);
            s3._W(2, o3);
            s3._W(2, l3);
            s3._W(4, 0);
            s3._W(-4, g3[p3]);
            s3._W(4, k2.length);
            s3._W(4, v3.content.length);
            s3._W(2, y2.length);
            s3._W(2, 0);
            s3._W(2, 0);
            s3._W(2, 0);
            s3._W(2, 0);
            s3._W(4, 0);
            s3._W(4, w2);
            b2 += s3.l;
            i3.push(s3);
            b2 += y2.length;
            i3.push(y2);
            ++p3;
          }
          s3 = ua(22);
          s3._W(4, 101010256);
          s3._W(2, 0);
          s3._W(2, 0);
          s3._W(2, p3);
          s3._W(2, p3);
          s3._W(4, b2);
          s3._W(4, h3);
          s3._W(2, 0);
          return F([F(a3), F(i3), s3]);
        }
        var Pe2 = { htm: "text/html", xml: "text/xml", gif: "image/gif", jpg: "image/jpeg", png: "image/png", mso: "application/x-mso", thmx: "application/vnd.ms-officetheme", sh33tj5: "application/octet-stream" };
        function Ie2(e3, r3) {
          if (e3.ctype) return e3.ctype;
          var t3 = e3.name || "", a3 = t3.match(/\.([^\.]+)$/);
          if (a3 && Pe2[a3[1]]) return Pe2[a3[1]];
          if (r3) {
            a3 = (t3 = r3).match(/[\.\\]([^\.\\])+$/);
            if (a3 && Pe2[a3[1]]) return Pe2[a3[1]];
          }
          return "application/octet-stream";
        }
        function Re2(e3) {
          var r3 = b(e3);
          var t3 = [];
          for (var a3 = 0; a3 < r3.length; a3 += 76) t3.push(r3.slice(a3, a3 + 76));
          return t3.join("\r\n") + "\r\n";
        }
        function Le2(e3) {
          var r3 = e3.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(e4) {
            var r4 = e4.charCodeAt(0).toString(16).toUpperCase();
            return "=" + (r4.length == 1 ? "0" + r4 : r4);
          });
          r3 = r3.replace(/ $/gm, "=20").replace(/\t$/gm, "=09");
          if (r3.charAt(0) == "\n") r3 = "=0D" + r3.slice(1);
          r3 = r3.replace(/\r(?!\n)/gm, "=0D").replace(/\n\n/gm, "\n=0A").replace(/([^\r\n])\n/gm, "$1=0A");
          var t3 = [], a3 = r3.split("\r\n");
          for (var n3 = 0; n3 < a3.length; ++n3) {
            var i3 = a3[n3];
            if (i3.length == 0) {
              t3.push("");
              continue;
            }
            for (var s3 = 0; s3 < i3.length; ) {
              var l3 = 76;
              var o3 = i3.slice(s3, s3 + l3);
              if (o3.charAt(l3 - 1) == "=") l3--;
              else if (o3.charAt(l3 - 2) == "=") l3 -= 2;
              else if (o3.charAt(l3 - 3) == "=") l3 -= 3;
              o3 = i3.slice(s3, s3 + l3);
              s3 += l3;
              if (s3 < i3.length) o3 += "=";
              t3.push(o3);
            }
          }
          return t3.join("\r\n");
        }
        function Be2(e3) {
          var r3 = [];
          for (var t3 = 0; t3 < e3.length; ++t3) {
            var a3 = e3[t3];
            while (t3 <= e3.length && a3.charAt(a3.length - 1) == "=") a3 = a3.slice(0, a3.length - 1) + e3[++t3];
            r3.push(a3);
          }
          for (var n3 = 0; n3 < r3.length; ++n3) r3[n3] = r3[n3].replace(/[=][0-9A-Fa-f]{2}/g, function(e4) {
            return String.fromCharCode(parseInt(e4.slice(1), 16));
          });
          return C(r3.join("\r\n"));
        }
        function $e2(e3, r3, t3) {
          var a3 = "", n3 = "", i3 = "", s3;
          var l3 = 0;
          for (; l3 < 10; ++l3) {
            var o3 = r3[l3];
            if (!o3 || o3.match(/^\s*$/)) break;
            var c3 = o3.match(/^(.*?):\s*([^\s].*)$/);
            if (c3) switch (c3[1].toLowerCase()) {
              case "content-location":
                a3 = c3[2].trim();
                break;
              case "content-type":
                i3 = c3[2].trim();
                break;
              case "content-transfer-encoding":
                n3 = c3[2].trim();
                break;
            }
          }
          ++l3;
          switch (n3.toLowerCase()) {
            case "base64":
              s3 = C(w(r3.slice(l3).join("")));
              break;
            case "quoted-printable":
              s3 = Be2(r3.slice(l3));
              break;
            default:
              throw new Error("Unsupported Content-Transfer-Encoding " + n3);
          }
          var f3 = je2(e3, a3.slice(t3.length), s3, { unsafe: true });
          if (i3) f3.ctype = i3;
        }
        function ze2(e3, r3) {
          if (H2(e3.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
          var t3 = r3 && r3.root || "";
          var a3 = (y && Buffer.isBuffer(e3) ? e3.toString("binary") : H2(e3)).split("\r\n");
          var n3 = 0, i3 = "";
          for (n3 = 0; n3 < a3.length; ++n3) {
            i3 = a3[n3];
            if (!/^Content-Location:/i.test(i3)) continue;
            i3 = i3.slice(i3.indexOf("file"));
            if (!t3) t3 = i3.slice(0, i3.lastIndexOf("/") + 1);
            if (i3.slice(0, t3.length) == t3) continue;
            while (t3.length > 0) {
              t3 = t3.slice(0, t3.length - 1);
              t3 = t3.slice(0, t3.lastIndexOf("/") + 1);
              if (i3.slice(0, t3.length) == t3) break;
            }
          }
          var s3 = (a3[1] || "").match(/boundary="(.*?)"/);
          if (!s3) throw new Error("MAD cannot find boundary");
          var l3 = "--" + (s3[1] || "");
          var o3 = [], c3 = [];
          var f3 = { FileIndex: o3, FullPaths: c3 };
          D2(f3);
          var u3, h3 = 0;
          for (n3 = 0; n3 < a3.length; ++n3) {
            var p3 = a3[n3];
            if (p3 !== l3 && p3 !== l3 + "--") continue;
            if (h3++) $e2(f3, a3.slice(u3, n3), t3);
            u3 = n3;
          }
          return f3;
        }
        function Ue2(e3, r3) {
          var t3 = r3 || {};
          var a3 = t3.boundary || "SheetJS";
          a3 = "------=" + a3;
          var n3 = ["MIME-Version: 1.0", 'Content-Type: multipart/related; boundary="' + a3.slice(2) + '"', "", "", ""];
          var i3 = e3.FullPaths[0], s3 = i3, l3 = e3.FileIndex[0];
          for (var o3 = 1; o3 < e3.FullPaths.length; ++o3) {
            s3 = e3.FullPaths[o3].slice(i3.length);
            l3 = e3.FileIndex[o3];
            if (!l3.size || !l3.content || s3 == "Sh33tJ5") continue;
            s3 = s3.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(e4) {
              return "_x" + e4.charCodeAt(0).toString(16) + "_";
            }).replace(/[\u0080-\uFFFF]/g, function(e4) {
              return "_u" + e4.charCodeAt(0).toString(16) + "_";
            });
            var c3 = l3.content;
            var f3 = y && Buffer.isBuffer(c3) ? c3.toString("binary") : H2(c3);
            var u3 = 0, h3 = Math.min(1024, f3.length), p3 = 0;
            for (var d3 = 0; d3 <= h3; ++d3) if ((p3 = f3.charCodeAt(d3)) >= 32 && p3 < 128) ++u3;
            var m3 = u3 >= h3 * 4 / 5;
            n3.push(a3);
            n3.push("Content-Location: " + (t3.root || "file:///C:/SheetJS/") + s3);
            n3.push("Content-Transfer-Encoding: " + (m3 ? "quoted-printable" : "base64"));
            n3.push("Content-Type: " + Ie2(l3, s3));
            n3.push("");
            n3.push(m3 ? Le2(f3) : Re2(f3));
          }
          n3.push(a3 + "--\r\n");
          return n3.join("\r\n");
        }
        function We2(e3) {
          var r3 = {};
          D2(r3, e3);
          return r3;
        }
        function je2(e3, r3, t3, n3) {
          var i3 = n3 && n3.unsafe;
          if (!i3) D2(e3);
          var s3 = !i3 && Ye.find(e3, r3);
          if (!s3) {
            var l3 = e3.FullPaths[0];
            if (r3.slice(0, l3.length) == l3) l3 = r3;
            else {
              if (l3.slice(-1) != "/") l3 += "/";
              l3 = (l3 + r3).replace("//", "/");
            }
            s3 = { name: a2(r3), type: 2 };
            e3.FileIndex.push(s3);
            e3.FullPaths.push(l3);
            if (!i3) Ye.utils.cfb_gc(e3);
          }
          s3.content = t3;
          s3.size = t3 ? t3.length : 0;
          if (n3) {
            if (n3.CLSID) s3.clsid = n3.CLSID;
            if (n3.mt) s3.mt = n3.mt;
            if (n3.ct) s3.ct = n3.ct;
          }
          return s3;
        }
        function He2(e3, r3) {
          D2(e3);
          var t3 = Ye.find(e3, r3);
          if (t3) {
            for (var a3 = 0; a3 < e3.FileIndex.length; ++a3) if (e3.FileIndex[a3] == t3) {
              e3.FileIndex.splice(a3, 1);
              e3.FullPaths.splice(a3, 1);
              return true;
            }
          }
          return false;
        }
        function Ve2(e3, r3, t3) {
          D2(e3);
          var n3 = Ye.find(e3, r3);
          if (n3) {
            for (var i3 = 0; i3 < e3.FileIndex.length; ++i3) if (e3.FileIndex[i3] == n3) {
              e3.FileIndex[i3].name = a2(t3);
              e3.FullPaths[i3] = t3;
              return true;
            }
          }
          return false;
        }
        function Xe2(e3) {
          P2(e3, true);
        }
        e2.find = R2;
        e2.read = E2;
        e2.parse = c2;
        e2.write = V2;
        e2.writeFile = j2;
        e2.utils = { cfb_new: We2, cfb_add: je2, cfb_del: He2, cfb_mov: Ve2, cfb_gc: Xe2, ReadShift: aa, CheckField: oa, prep_blob: ca, bconcat: F, use_zlib: G2, _deflateRaw: ke2, _inflateRaw: Fe2, consts: W2 };
        return e2;
      })();
      var Je;
      if (typeof __require !== "undefined") try {
        Je = void 0;
      } catch (Ke) {
      }
      function qe(e2) {
        if (typeof e2 === "string") return _(e2);
        if (Array.isArray(e2)) return T(e2);
        return e2;
      }
      function Ze(e2, r2, t2) {
        if (typeof Je !== "undefined" && Je.writeFileSync) return t2 ? Je.writeFileSync(e2, r2, t2) : Je.writeFileSync(e2, r2);
        if (typeof Deno !== "undefined") {
          if (t2 && typeof r2 == "string") switch (t2) {
            case "utf8":
              r2 = new TextEncoder(t2).encode(r2);
              break;
            case "binary":
              r2 = _(r2);
              break;
            default:
              throw new Error("Unsupported encoding " + t2);
          }
          return Deno.writeFileSync(e2, r2);
        }
        var a2 = t2 == "utf8" ? ct(r2) : r2;
        if (typeof IE_SaveFile !== "undefined") return IE_SaveFile(a2, e2);
        if (typeof Blob !== "undefined") {
          var n2 = new Blob([qe(a2)], { type: "application/octet-stream" });
          if (typeof navigator !== "undefined" && navigator.msSaveBlob) return navigator.msSaveBlob(n2, e2);
          if (typeof saveAs !== "undefined") return saveAs(n2, e2);
          if (typeof URL !== "undefined" && typeof document !== "undefined" && document.createElement && URL.createObjectURL) {
            var i2 = URL.createObjectURL(n2);
            if (typeof chrome === "object" && typeof (chrome.downloads || {}).download == "function") {
              if (URL.revokeObjectURL && typeof setTimeout !== "undefined") setTimeout(function() {
                URL.revokeObjectURL(i2);
              }, 6e4);
              return chrome.downloads.download({ url: i2, filename: e2, saveAs: true });
            }
            var s2 = document.createElement("a");
            if (s2.download != null) {
              s2.download = e2;
              s2.href = i2;
              document.body.appendChild(s2);
              s2.click();
              document.body.removeChild(s2);
              if (URL.revokeObjectURL && typeof setTimeout !== "undefined") setTimeout(function() {
                URL.revokeObjectURL(i2);
              }, 6e4);
              return i2;
            }
          }
        }
        if (typeof $ !== "undefined" && typeof File !== "undefined" && typeof Folder !== "undefined") try {
          var l2 = File(e2);
          l2.open("w");
          l2.encoding = "binary";
          if (Array.isArray(r2)) r2 = A(r2);
          l2.write(r2);
          l2.close();
          return r2;
        } catch (o2) {
          if (!o2.message || !o2.message.match(/onstruct/)) throw o2;
        }
        throw new Error("cannot save file " + e2);
      }
      function Qe(e2) {
        if (typeof Je !== "undefined") return Je.readFileSync(e2);
        if (typeof Deno !== "undefined") return Deno.readFileSync(e2);
        if (typeof $ !== "undefined" && typeof File !== "undefined" && typeof Folder !== "undefined") try {
          var r2 = File(e2);
          r2.open("r");
          r2.encoding = "binary";
          var t2 = r2.read();
          r2.close();
          return t2;
        } catch (a2) {
          if (!a2.message || !a2.message.match(/onstruct/)) throw a2;
        }
        throw new Error("Cannot access file " + e2);
      }
      function er(e2) {
        var r2 = Object.keys(e2), t2 = [];
        for (var a2 = 0; a2 < r2.length; ++a2) if (Object.prototype.hasOwnProperty.call(e2, r2[a2])) t2.push(r2[a2]);
        return t2;
      }
      function rr(e2, r2) {
        var t2 = [], a2 = er(e2);
        for (var n2 = 0; n2 !== a2.length; ++n2) if (t2[e2[a2[n2]][r2]] == null) t2[e2[a2[n2]][r2]] = a2[n2];
        return t2;
      }
      function tr(e2) {
        var r2 = [], t2 = er(e2);
        for (var a2 = 0; a2 !== t2.length; ++a2) r2[e2[t2[a2]]] = t2[a2];
        return r2;
      }
      function ar(e2) {
        var r2 = [], t2 = er(e2);
        for (var a2 = 0; a2 !== t2.length; ++a2) r2[e2[t2[a2]]] = parseInt(t2[a2], 10);
        return r2;
      }
      function nr(e2) {
        var r2 = [], t2 = er(e2);
        for (var a2 = 0; a2 !== t2.length; ++a2) {
          if (r2[e2[t2[a2]]] == null) r2[e2[t2[a2]]] = [];
          r2[e2[t2[a2]]].push(t2[a2]);
        }
        return r2;
      }
      var ir = new Date(1899, 11, 30, 0, 0, 0);
      function sr(e2, r2) {
        var t2 = e2.getTime();
        if (r2) t2 -= 1462 * 24 * 60 * 60 * 1e3;
        var a2 = ir.getTime() + (e2.getTimezoneOffset() - ir.getTimezoneOffset()) * 6e4;
        return (t2 - a2) / (24 * 60 * 60 * 1e3);
      }
      var lr = /* @__PURE__ */ new Date();
      var or = ir.getTime() + (lr.getTimezoneOffset() - ir.getTimezoneOffset()) * 6e4;
      var cr = lr.getTimezoneOffset();
      function fr(e2) {
        var r2 = /* @__PURE__ */ new Date();
        r2.setTime(e2 * 24 * 60 * 60 * 1e3 + or);
        if (r2.getTimezoneOffset() !== cr) {
          r2.setTime(r2.getTime() + (r2.getTimezoneOffset() - cr) * 6e4);
        }
        return r2;
      }
      function ur(e2) {
        var r2 = 0, t2 = 0, a2 = false;
        var n2 = e2.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
        if (!n2) throw new Error("|" + e2 + "| is not an ISO8601 Duration");
        for (var i2 = 1; i2 != n2.length; ++i2) {
          if (!n2[i2]) continue;
          t2 = 1;
          if (i2 > 3) a2 = true;
          switch (n2[i2].slice(n2[i2].length - 1)) {
            case "Y":
              throw new Error("Unsupported ISO Duration Field: " + n2[i2].slice(n2[i2].length - 1));
            case "D":
              t2 *= 24;
            case "H":
              t2 *= 60;
            case "M":
              if (!a2) throw new Error("Unsupported ISO Duration Field: M");
              else t2 *= 60;
            case "S":
              break;
          }
          r2 += t2 * parseInt(n2[i2], 10);
        }
        return r2;
      }
      var hr = /* @__PURE__ */ new Date("2017-02-19T19:06:09.000Z");
      var pr = isNaN(hr.getFullYear()) ? /* @__PURE__ */ new Date("2/19/17") : hr;
      var dr = pr.getFullYear() == 2017;
      function mr(e2, r2) {
        var t2 = new Date(e2);
        if (dr) {
          if (r2 > 0) t2.setTime(t2.getTime() + t2.getTimezoneOffset() * 60 * 1e3);
          else if (r2 < 0) t2.setTime(t2.getTime() - t2.getTimezoneOffset() * 60 * 1e3);
          return t2;
        }
        if (e2 instanceof Date) return e2;
        if (pr.getFullYear() == 1917 && !isNaN(t2.getFullYear())) {
          var a2 = t2.getFullYear();
          if (e2.indexOf("" + a2) > -1) return t2;
          t2.setFullYear(t2.getFullYear() + 100);
          return t2;
        }
        var n2 = e2.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"];
        var i2 = new Date(+n2[0], +n2[1] - 1, +n2[2], +n2[3] || 0, +n2[4] || 0, +n2[5] || 0);
        if (e2.indexOf("Z") > -1) i2 = new Date(i2.getTime() - i2.getTimezoneOffset() * 60 * 1e3);
        return i2;
      }
      function vr(e2, r2) {
        if (y && Buffer.isBuffer(e2)) {
          if (r2) {
            if (e2[0] == 255 && e2[1] == 254) return ct(e2.slice(2).toString("utf16le"));
            if (e2[1] == 254 && e2[2] == 255) return ct(u(e2.slice(2).toString("binary")));
          }
          return e2.toString("binary");
        }
        if (typeof TextDecoder !== "undefined") try {
          if (r2) {
            if (e2[0] == 255 && e2[1] == 254) return ct(new TextDecoder("utf-16le").decode(e2.slice(2)));
            if (e2[0] == 254 && e2[1] == 255) return ct(new TextDecoder("utf-16be").decode(e2.slice(2)));
          }
          var t2 = { "€": "", "‚": "", "ƒ": "", "„": "", "…": "", "†": "", "‡": "", "ˆ": "", "‰": "", "Š": "", "‹": "", "Œ": "", "Ž": "", "‘": "", "’": "", "“": "", "”": "", "•": "", "–": "", "—": "", "˜": "", "™": "", "š": "", "›": "", "œ": "", "ž": "", "Ÿ": "" };
          if (Array.isArray(e2)) e2 = new Uint8Array(e2);
          return new TextDecoder("latin1").decode(e2).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(e3) {
            return t2[e3] || e3;
          });
        } catch (a2) {
        }
        var n2 = [];
        for (var i2 = 0; i2 != e2.length; ++i2) n2.push(String.fromCharCode(e2[i2]));
        return n2.join("");
      }
      function gr(e2) {
        if (typeof JSON != "undefined" && !Array.isArray(e2)) return JSON.parse(JSON.stringify(e2));
        if (typeof e2 != "object" || e2 == null) return e2;
        if (e2 instanceof Date) return new Date(e2.getTime());
        var r2 = {};
        for (var t2 in e2) if (Object.prototype.hasOwnProperty.call(e2, t2)) r2[t2] = gr(e2[t2]);
        return r2;
      }
      function br(e2, r2) {
        var t2 = "";
        while (t2.length < r2) t2 += e2;
        return t2;
      }
      function wr(e2) {
        var r2 = Number(e2);
        if (!isNaN(r2)) return isFinite(r2) ? r2 : NaN;
        if (!/\d/.test(e2)) return r2;
        var t2 = 1;
        var a2 = e2.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
          t2 *= 100;
          return "";
        });
        if (!isNaN(r2 = Number(a2))) return r2 / t2;
        a2 = a2.replace(/[(](.*)[)]/, function(e3, r3) {
          t2 = -t2;
          return r3;
        });
        if (!isNaN(r2 = Number(a2))) return r2 / t2;
        return r2;
      }
      var yr = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
      function kr(e2) {
        var r2 = new Date(e2), t2 = /* @__PURE__ */ new Date(NaN);
        var a2 = r2.getYear(), n2 = r2.getMonth(), i2 = r2.getDate();
        if (isNaN(i2)) return t2;
        var s2 = e2.toLowerCase();
        if (s2.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
          s2 = s2.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "");
          if (s2.length > 3 && yr.indexOf(s2) == -1) return t2;
        } else if (s2.match(/[a-z]/)) return t2;
        if (a2 < 0 || a2 > 8099) return t2;
        if ((n2 > 0 || i2 > 1) && a2 != 101) return r2;
        if (e2.match(/[^-0-9:,\/\\]/)) return t2;
        return r2;
      }
      var xr = (function() {
        var e2 = "abacaba".split(/(:?b)/i).length == 5;
        return function r2(t2, a2, n2) {
          if (e2 || typeof a2 == "string") return t2.split(a2);
          var i2 = t2.split(a2), s2 = [i2[0]];
          for (var l2 = 1; l2 < i2.length; ++l2) {
            s2.push(n2);
            s2.push(i2[l2]);
          }
          return s2;
        };
      })();
      function Sr(e2) {
        if (!e2) return null;
        if (e2.content && e2.type) return vr(e2.content, true);
        if (e2.data) return h(e2.data);
        if (e2.asNodeBuffer && y) return h(e2.asNodeBuffer().toString("binary"));
        if (e2.asBinary) return h(e2.asBinary());
        if (e2._data && e2._data.getContent) return h(vr(Array.prototype.slice.call(e2._data.getContent(), 0)));
        return null;
      }
      function Cr(e2) {
        if (!e2) return null;
        if (e2.data) return c(e2.data);
        if (e2.asNodeBuffer && y) return e2.asNodeBuffer();
        if (e2._data && e2._data.getContent) {
          var r2 = e2._data.getContent();
          if (typeof r2 == "string") return c(r2);
          return Array.prototype.slice.call(r2);
        }
        if (e2.content && e2.type) return e2.content;
        return null;
      }
      function _r(e2) {
        return e2 && e2.name.slice(-4) === ".bin" ? Cr(e2) : Sr(e2);
      }
      function Ar(e2, r2) {
        var t2 = e2.FullPaths || er(e2.files);
        var a2 = r2.toLowerCase().replace(/[\/]/g, "\\"), n2 = a2.replace(/\\/g, "/");
        for (var i2 = 0; i2 < t2.length; ++i2) {
          var s2 = t2[i2].replace(/^Root Entry[\/]/, "").toLowerCase();
          if (a2 == s2 || n2 == s2) return e2.files ? e2.files[t2[i2]] : e2.FileIndex[i2];
        }
        return null;
      }
      function Tr(e2, r2) {
        var t2 = Ar(e2, r2);
        if (t2 == null) throw new Error("Cannot find file " + r2 + " in zip");
        return t2;
      }
      function Er(e2, r2, t2) {
        if (!t2) return _r(Tr(e2, r2));
        if (!r2) return null;
        try {
          return Er(e2, r2);
        } catch (a2) {
          return null;
        }
      }
      function Fr(e2, r2, t2) {
        if (!t2) return Sr(Tr(e2, r2));
        if (!r2) return null;
        try {
          return Fr(e2, r2);
        } catch (a2) {
          return null;
        }
      }
      function Dr(e2, r2, t2) {
        if (!t2) return Cr(Tr(e2, r2));
        if (!r2) return null;
        try {
          return Dr(e2, r2);
        } catch (a2) {
          return null;
        }
      }
      function Or(e2) {
        var r2 = e2.FullPaths || er(e2.files), t2 = [];
        for (var a2 = 0; a2 < r2.length; ++a2) if (r2[a2].slice(-1) != "/") t2.push(r2[a2].replace(/^Root Entry[\/]/, ""));
        return t2.sort();
      }
      function Mr(e2, r2, t2) {
        if (e2.FullPaths) {
          if (typeof t2 == "string") {
            var a2;
            if (y) a2 = k(t2);
            else a2 = D(t2);
            return Ye.utils.cfb_add(e2, r2, a2);
          }
          Ye.utils.cfb_add(e2, r2, t2);
        } else e2.file(r2, t2);
      }
      function Nr() {
        return Ye.utils.cfb_new();
      }
      function Pr(e2, r2) {
        switch (r2.type) {
          case "base64":
            return Ye.read(e2, { type: "base64" });
          case "binary":
            return Ye.read(e2, { type: "binary" });
          case "buffer":
            ;
          case "array":
            return Ye.read(e2, { type: "buffer" });
        }
        throw new Error("Unrecognized type " + r2.type);
      }
      function Ir(e2, r2) {
        if (e2.charAt(0) == "/") return e2.slice(1);
        var t2 = r2.split("/");
        if (r2.slice(-1) != "/") t2.pop();
        var a2 = e2.split("/");
        while (a2.length !== 0) {
          var n2 = a2.shift();
          if (n2 === "..") t2.pop();
          else if (n2 !== ".") t2.push(n2);
        }
        return t2.join("/");
      }
      var Rr = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n';
      var Lr = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g;
      var Br = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/gm, $r = /<[^>]*>/g;
      var zr = Rr.match(Br) ? Br : $r;
      var Ur = /<\w*:/, Wr = /<(\/?)\w+:/;
      function jr(e2, r2, t2) {
        var a2 = {};
        var n2 = 0, i2 = 0;
        for (; n2 !== e2.length; ++n2) if ((i2 = e2.charCodeAt(n2)) === 32 || i2 === 10 || i2 === 13) break;
        if (!r2) a2[0] = e2.slice(0, n2);
        if (n2 === e2.length) return a2;
        var s2 = e2.match(Lr), l2 = 0, o2 = "", c2 = 0, f2 = "", u2 = "", h2 = 1;
        if (s2) for (c2 = 0; c2 != s2.length; ++c2) {
          u2 = s2[c2];
          for (i2 = 0; i2 != u2.length; ++i2) if (u2.charCodeAt(i2) === 61) break;
          f2 = u2.slice(0, i2).trim();
          while (u2.charCodeAt(i2 + 1) == 32) ++i2;
          h2 = (n2 = u2.charCodeAt(i2 + 1)) == 34 || n2 == 39 ? 1 : 0;
          o2 = u2.slice(i2 + 1 + h2, u2.length - h2);
          for (l2 = 0; l2 != f2.length; ++l2) if (f2.charCodeAt(l2) === 58) break;
          if (l2 === f2.length) {
            if (f2.indexOf("_") > 0) f2 = f2.slice(0, f2.indexOf("_"));
            a2[f2] = o2;
            if (!t2) a2[f2.toLowerCase()] = o2;
          } else {
            var p2 = (l2 === 5 && f2.slice(0, 5) === "xmlns" ? "xmlns" : "") + f2.slice(l2 + 1);
            if (a2[p2] && f2.slice(l2 - 3, l2) == "ext") continue;
            a2[p2] = o2;
            if (!t2) a2[p2.toLowerCase()] = o2;
          }
        }
        return a2;
      }
      function Hr(e2) {
        return e2.replace(Wr, "<$1");
      }
      var Vr = { "&quot;": '"', "&apos;": "'", "&gt;": ">", "&lt;": "<", "&amp;": "&" };
      var Xr = tr(Vr);
      var Gr = /* @__PURE__ */ (function() {
        var e2 = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/gi, r2 = /_x([\da-fA-F]{4})_/gi;
        return function t2(a2) {
          var n2 = a2 + "", i2 = n2.indexOf("<![CDATA[");
          if (i2 == -1) return n2.replace(e2, function(e3, r3) {
            return Vr[e3] || String.fromCharCode(parseInt(r3, e3.indexOf("x") > -1 ? 16 : 10)) || e3;
          }).replace(r2, function(e3, r3) {
            return String.fromCharCode(parseInt(r3, 16));
          });
          var s2 = n2.indexOf("]]>");
          return t2(n2.slice(0, i2)) + n2.slice(i2 + 9, s2) + t2(n2.slice(s2 + 3));
        };
      })();
      var Yr = /[&<>'"]/g, Jr = /[\u0000-\u0008\u000b-\u001f]/g;
      function Kr(e2) {
        var r2 = e2 + "";
        return r2.replace(Yr, function(e3) {
          return Xr[e3];
        }).replace(Jr, function(e3) {
          return "_x" + ("000" + e3.charCodeAt(0).toString(16)).slice(-4) + "_";
        });
      }
      function qr(e2) {
        return Kr(e2).replace(/ /g, "_x0020_");
      }
      var Zr = /[\u0000-\u001f]/g;
      function Qr(e2) {
        var r2 = e2 + "";
        return r2.replace(Yr, function(e3) {
          return Xr[e3];
        }).replace(/\n/g, "<br/>").replace(Zr, function(e3) {
          return "&#x" + ("000" + e3.charCodeAt(0).toString(16)).slice(-4) + ";";
        });
      }
      function et(e2) {
        var r2 = e2 + "";
        return r2.replace(Yr, function(e3) {
          return Xr[e3];
        }).replace(Zr, function(e3) {
          return "&#x" + e3.charCodeAt(0).toString(16).toUpperCase() + ";";
        });
      }
      var rt = /* @__PURE__ */ (function() {
        var e2 = /&#(\d+);/g;
        function r2(e3, r3) {
          return String.fromCharCode(parseInt(r3, 10));
        }
        return function t2(a2) {
          return a2.replace(e2, r2);
        };
      })();
      function tt(e2) {
        return e2.replace(/(\r\n|[\r\n])/g, "&#10;");
      }
      function at(e2) {
        switch (e2) {
          case 1:
            ;
          case true:
            ;
          case "1":
            ;
          case "true":
            ;
          case "TRUE":
            return true;
          default:
            return false;
        }
      }
      function nt(e2) {
        var r2 = "", t2 = 0, a2 = 0, n2 = 0, i2 = 0, s2 = 0, l2 = 0;
        while (t2 < e2.length) {
          a2 = e2.charCodeAt(t2++);
          if (a2 < 128) {
            r2 += String.fromCharCode(a2);
            continue;
          }
          n2 = e2.charCodeAt(t2++);
          if (a2 > 191 && a2 < 224) {
            s2 = (a2 & 31) << 6;
            s2 |= n2 & 63;
            r2 += String.fromCharCode(s2);
            continue;
          }
          i2 = e2.charCodeAt(t2++);
          if (a2 < 240) {
            r2 += String.fromCharCode((a2 & 15) << 12 | (n2 & 63) << 6 | i2 & 63);
            continue;
          }
          s2 = e2.charCodeAt(t2++);
          l2 = ((a2 & 7) << 18 | (n2 & 63) << 12 | (i2 & 63) << 6 | s2 & 63) - 65536;
          r2 += String.fromCharCode(55296 + (l2 >>> 10 & 1023));
          r2 += String.fromCharCode(56320 + (l2 & 1023));
        }
        return r2;
      }
      function it(e2) {
        var r2 = x(2 * e2.length), t2, a2, n2 = 1, i2 = 0, s2 = 0, l2;
        for (a2 = 0; a2 < e2.length; a2 += n2) {
          n2 = 1;
          if ((l2 = e2.charCodeAt(a2)) < 128) t2 = l2;
          else if (l2 < 224) {
            t2 = (l2 & 31) * 64 + (e2.charCodeAt(a2 + 1) & 63);
            n2 = 2;
          } else if (l2 < 240) {
            t2 = (l2 & 15) * 4096 + (e2.charCodeAt(a2 + 1) & 63) * 64 + (e2.charCodeAt(a2 + 2) & 63);
            n2 = 3;
          } else {
            n2 = 4;
            t2 = (l2 & 7) * 262144 + (e2.charCodeAt(a2 + 1) & 63) * 4096 + (e2.charCodeAt(a2 + 2) & 63) * 64 + (e2.charCodeAt(a2 + 3) & 63);
            t2 -= 65536;
            s2 = 55296 + (t2 >>> 10 & 1023);
            t2 = 56320 + (t2 & 1023);
          }
          if (s2 !== 0) {
            r2[i2++] = s2 & 255;
            r2[i2++] = s2 >>> 8;
            s2 = 0;
          }
          r2[i2++] = t2 % 256;
          r2[i2++] = t2 >>> 8;
        }
        return r2.slice(0, i2).toString("ucs2");
      }
      function st(e2) {
        return k(e2, "binary").toString("utf8");
      }
      var lt = "foo bar bazâð£";
      var ot = y && (st(lt) == nt(lt) && st || it(lt) == nt(lt) && it) || nt;
      var ct = y ? function(e2) {
        return k(e2, "utf8").toString("binary");
      } : function(e2) {
        var r2 = [], t2 = 0, a2 = 0, n2 = 0;
        while (t2 < e2.length) {
          a2 = e2.charCodeAt(t2++);
          switch (true) {
            case a2 < 128:
              r2.push(String.fromCharCode(a2));
              break;
            case a2 < 2048:
              r2.push(String.fromCharCode(192 + (a2 >> 6)));
              r2.push(String.fromCharCode(128 + (a2 & 63)));
              break;
            case (a2 >= 55296 && a2 < 57344):
              a2 -= 55296;
              n2 = e2.charCodeAt(t2++) - 56320 + (a2 << 10);
              r2.push(String.fromCharCode(240 + (n2 >> 18 & 7)));
              r2.push(String.fromCharCode(144 + (n2 >> 12 & 63)));
              r2.push(String.fromCharCode(128 + (n2 >> 6 & 63)));
              r2.push(String.fromCharCode(128 + (n2 & 63)));
              break;
            default:
              r2.push(String.fromCharCode(224 + (a2 >> 12)));
              r2.push(String.fromCharCode(128 + (a2 >> 6 & 63)));
              r2.push(String.fromCharCode(128 + (a2 & 63)));
          }
        }
        return r2.join("");
      };
      var ft = /* @__PURE__ */ (function() {
        var e2 = {};
        return function r2(t2, a2) {
          var n2 = t2 + "|" + (a2 || "");
          if (e2[n2]) return e2[n2];
          return e2[n2] = new RegExp("<(?:\\w+:)?" + t2 + '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' + t2 + ">", a2 || "");
        };
      })();
      var ut = (function() {
        var e2 = [["nbsp", " "], ["middot", "·"], ["quot", '"'], ["apos", "'"], ["gt", ">"], ["lt", "<"], ["amp", "&"]].map(function(e3) {
          return [new RegExp("&" + e3[0] + ";", "ig"), e3[1]];
        });
        return function r2(t2) {
          var a2 = t2.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, "\n").replace(/<[^>]*>/g, "");
          for (var n2 = 0; n2 < e2.length; ++n2) a2 = a2.replace(e2[n2][0], e2[n2][1]);
          return a2;
        };
      })();
      var ht = /* @__PURE__ */ (function() {
        var e2 = {};
        return function r2(t2) {
          if (e2[t2] !== void 0) return e2[t2];
          return e2[t2] = new RegExp("<(?:vt:)?" + t2 + ">([\\s\\S]*?)</(?:vt:)?" + t2 + ">", "g");
        };
      })();
      var pt = /<\/?(?:vt:)?variant>/g, dt = /<(?:vt:)([^>]*)>([\s\S]*)</;
      function mt(e2, r2) {
        var t2 = jr(e2);
        var a2 = e2.match(ht(t2.baseType)) || [];
        var n2 = [];
        if (a2.length != t2.size) {
          if (r2.WTF) throw new Error("unexpected vector length " + a2.length + " != " + t2.size);
          return n2;
        }
        a2.forEach(function(e3) {
          var r3 = e3.replace(pt, "").match(dt);
          if (r3) n2.push({ v: ot(r3[2]), t: r3[1] });
        });
        return n2;
      }
      var vt = /(^\s|\s$|\n)/;
      function gt(e2, r2) {
        return "<" + e2 + (r2.match(vt) ? ' xml:space="preserve"' : "") + ">" + r2 + "</" + e2 + ">";
      }
      function bt(e2) {
        return er(e2).map(function(r2) {
          return " " + r2 + '="' + e2[r2] + '"';
        }).join("");
      }
      function wt(e2, r2, t2) {
        return "<" + e2 + (t2 != null ? bt(t2) : "") + (r2 != null ? (r2.match(vt) ? ' xml:space="preserve"' : "") + ">" + r2 + "</" + e2 : "/") + ">";
      }
      function yt(e2, r2) {
        try {
          return e2.toISOString().replace(/\.\d*/, "");
        } catch (t2) {
          if (r2) throw t2;
        }
        return "";
      }
      function kt(e2, r2) {
        switch (typeof e2) {
          case "string":
            var t2 = wt("vt:lpwstr", Kr(e2));
            if (r2) t2 = t2.replace(/&quot;/g, "_x0022_");
            return t2;
          case "number":
            return wt((e2 | 0) == e2 ? "vt:i4" : "vt:r8", Kr(String(e2)));
          case "boolean":
            return wt("vt:bool", e2 ? "true" : "false");
        }
        if (e2 instanceof Date) return wt("vt:filetime", yt(e2));
        throw new Error("Unable to serialize " + e2);
      }
      function xt(e2) {
        if (y && Buffer.isBuffer(e2)) return e2.toString("utf8");
        if (typeof e2 === "string") return e2;
        if (typeof Uint8Array !== "undefined" && e2 instanceof Uint8Array) return ot(A(E(e2)));
        throw new Error("Bad input format: expected Buffer or string");
      }
      var St = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/gm;
      var Ct = { CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties", CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties", EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties", CT: "http://schemas.openxmlformats.org/package/2006/content-types", RELS: "http://schemas.openxmlformats.org/package/2006/relationships", TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments", dc: "http://purl.org/dc/elements/1.1/", dcterms: "http://purl.org/dc/terms/", dcmitype: "http://purl.org/dc/dcmitype/", mx: "http://schemas.microsoft.com/office/mac/excel/2008/main", r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships", sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties", vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes", xsi: "http://www.w3.org/2001/XMLSchema-instance", xsd: "http://www.w3.org/2001/XMLSchema" };
      var _t = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"];
      var At = { o: "urn:schemas-microsoft-com:office:office", x: "urn:schemas-microsoft-com:office:excel", ss: "urn:schemas-microsoft-com:office:spreadsheet", dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882", mv: "http://macVmlSchemaUri", v: "urn:schemas-microsoft-com:vml", html: "http://www.w3.org/TR/REC-html40" };
      function Tt(e2, r2) {
        var t2 = 1 - 2 * (e2[r2 + 7] >>> 7);
        var a2 = ((e2[r2 + 7] & 127) << 4) + (e2[r2 + 6] >>> 4 & 15);
        var n2 = e2[r2 + 6] & 15;
        for (var i2 = 5; i2 >= 0; --i2) n2 = n2 * 256 + e2[r2 + i2];
        if (a2 == 2047) return n2 == 0 ? t2 * Infinity : NaN;
        if (a2 == 0) a2 = -1022;
        else {
          a2 -= 1023;
          n2 += Math.pow(2, 52);
        }
        return t2 * Math.pow(2, a2 - 52) * n2;
      }
      function Et(e2, r2, t2) {
        var a2 = (r2 < 0 || 1 / r2 == -Infinity ? 1 : 0) << 7, n2 = 0, i2 = 0;
        var s2 = a2 ? -r2 : r2;
        if (!isFinite(s2)) {
          n2 = 2047;
          i2 = isNaN(r2) ? 26985 : 0;
        } else if (s2 == 0) n2 = i2 = 0;
        else {
          n2 = Math.floor(Math.log(s2) / Math.LN2);
          i2 = s2 * Math.pow(2, 52 - n2);
          if (n2 <= -1023 && (!isFinite(i2) || i2 < Math.pow(2, 52))) {
            n2 = -1022;
          } else {
            i2 -= Math.pow(2, 52);
            n2 += 1023;
          }
        }
        for (var l2 = 0; l2 <= 5; ++l2, i2 /= 256) e2[t2 + l2] = i2 & 255;
        e2[t2 + 6] = (n2 & 15) << 4 | i2 & 15;
        e2[t2 + 7] = n2 >> 4 | a2;
      }
      var Ft = function(e2) {
        var r2 = [], t2 = 10240;
        for (var a2 = 0; a2 < e2[0].length; ++a2) if (e2[0][a2]) for (var n2 = 0, i2 = e2[0][a2].length; n2 < i2; n2 += t2) r2.push.apply(r2, e2[0][a2].slice(n2, n2 + t2));
        return r2;
      };
      var Dt = y ? function(e2) {
        return e2[0].length > 0 && Buffer.isBuffer(e2[0][0]) ? Buffer.concat(e2[0].map(function(e3) {
          return Buffer.isBuffer(e3) ? e3 : k(e3);
        })) : Ft(e2);
      } : Ft;
      var Ot = function(e2, r2, t2) {
        var a2 = [];
        for (var n2 = r2; n2 < t2; n2 += 2) a2.push(String.fromCharCode(Zt(e2, n2)));
        return a2.join("").replace(O, "");
      };
      var Mt = y ? function(e2, r2, t2) {
        if (!Buffer.isBuffer(e2)) return Ot(e2, r2, t2);
        return e2.toString("utf16le", r2, t2).replace(O, "");
      } : Ot;
      var Nt = function(e2, r2, t2) {
        var a2 = [];
        for (var n2 = r2; n2 < r2 + t2; ++n2) a2.push(("0" + e2[n2].toString(16)).slice(-2));
        return a2.join("");
      };
      var Pt = y ? function(e2, r2, t2) {
        return Buffer.isBuffer(e2) ? e2.toString("hex", r2, r2 + t2) : Nt(e2, r2, t2);
      } : Nt;
      var It = function(e2, r2, t2) {
        var a2 = [];
        for (var n2 = r2; n2 < t2; n2++) a2.push(String.fromCharCode(qt(e2, n2)));
        return a2.join("");
      };
      var Rt = y ? function Tc(e2, r2, t2) {
        return Buffer.isBuffer(e2) ? e2.toString("utf8", r2, t2) : It(e2, r2, t2);
      } : It;
      var Lt = function(e2, r2) {
        var t2 = ea(e2, r2);
        return t2 > 0 ? Rt(e2, r2 + 4, r2 + 4 + t2 - 1) : "";
      };
      var Bt = Lt;
      var $t = function(e2, r2) {
        var t2 = ea(e2, r2);
        return t2 > 0 ? Rt(e2, r2 + 4, r2 + 4 + t2 - 1) : "";
      };
      var zt = $t;
      var Ut = function(e2, r2) {
        var t2 = 2 * ea(e2, r2);
        return t2 > 0 ? Rt(e2, r2 + 4, r2 + 4 + t2 - 1) : "";
      };
      var Wt = Ut;
      var jt = function Ec(e2, r2) {
        var t2 = ea(e2, r2);
        return t2 > 0 ? Mt(e2, r2 + 4, r2 + 4 + t2) : "";
      };
      var Ht = jt;
      var Vt = function(e2, r2) {
        var t2 = ea(e2, r2);
        return t2 > 0 ? Rt(e2, r2 + 4, r2 + 4 + t2) : "";
      };
      var Xt = Vt;
      var Gt = function(e2, r2) {
        return Tt(e2, r2);
      };
      var Yt = Gt;
      var Jt = function Fc(e2) {
        return Array.isArray(e2) || typeof Uint8Array !== "undefined" && e2 instanceof Uint8Array;
      };
      if (y) {
        Bt = function Dc(e2, r2) {
          if (!Buffer.isBuffer(e2)) return Lt(e2, r2);
          var t2 = e2.readUInt32LE(r2);
          return t2 > 0 ? e2.toString("utf8", r2 + 4, r2 + 4 + t2 - 1) : "";
        };
        zt = function Oc(e2, r2) {
          if (!Buffer.isBuffer(e2)) return $t(e2, r2);
          var t2 = e2.readUInt32LE(r2);
          return t2 > 0 ? e2.toString("utf8", r2 + 4, r2 + 4 + t2 - 1) : "";
        };
        Wt = function Mc(e2, r2) {
          if (!Buffer.isBuffer(e2)) return Ut(e2, r2);
          var t2 = 2 * e2.readUInt32LE(r2);
          return e2.toString("utf16le", r2 + 4, r2 + 4 + t2 - 1);
        };
        Ht = function Nc(e2, r2) {
          if (!Buffer.isBuffer(e2)) return jt(e2, r2);
          var t2 = e2.readUInt32LE(r2);
          return e2.toString("utf16le", r2 + 4, r2 + 4 + t2);
        };
        Xt = function Pc(e2, r2) {
          if (!Buffer.isBuffer(e2)) return Vt(e2, r2);
          var t2 = e2.readUInt32LE(r2);
          return e2.toString("utf8", r2 + 4, r2 + 4 + t2);
        };
        Yt = function Ic(e2, r2) {
          if (Buffer.isBuffer(e2)) return e2.readDoubleLE(r2);
          return Gt(e2, r2);
        };
        Jt = function Rc(e2) {
          return Buffer.isBuffer(e2) || Array.isArray(e2) || typeof Uint8Array !== "undefined" && e2 instanceof Uint8Array;
        };
      }
      function Kt() {
        Mt = function(e2, r2, t2) {
          return $cptable.utils.decode(1200, e2.slice(r2, t2)).replace(O, "");
        };
        Rt = function(e2, r2, t2) {
          return $cptable.utils.decode(65001, e2.slice(r2, t2));
        };
        Bt = function(e2, r2) {
          var a2 = ea(e2, r2);
          return a2 > 0 ? $cptable.utils.decode(t, e2.slice(r2 + 4, r2 + 4 + a2 - 1)) : "";
        };
        zt = function(e2, t2) {
          var a2 = ea(e2, t2);
          return a2 > 0 ? $cptable.utils.decode(r, e2.slice(t2 + 4, t2 + 4 + a2 - 1)) : "";
        };
        Wt = function(e2, r2) {
          var t2 = 2 * ea(e2, r2);
          return t2 > 0 ? $cptable.utils.decode(1200, e2.slice(r2 + 4, r2 + 4 + t2 - 1)) : "";
        };
        Ht = function(e2, r2) {
          var t2 = ea(e2, r2);
          return t2 > 0 ? $cptable.utils.decode(1200, e2.slice(r2 + 4, r2 + 4 + t2)) : "";
        };
        Xt = function(e2, r2) {
          var t2 = ea(e2, r2);
          return t2 > 0 ? $cptable.utils.decode(65001, e2.slice(r2 + 4, r2 + 4 + t2)) : "";
        };
      }
      if (typeof $cptable !== "undefined") Kt();
      var qt = function(e2, r2) {
        return e2[r2];
      };
      var Zt = function(e2, r2) {
        return e2[r2 + 1] * (1 << 8) + e2[r2];
      };
      var Qt = function(e2, r2) {
        var t2 = e2[r2 + 1] * (1 << 8) + e2[r2];
        return t2 < 32768 ? t2 : (65535 - t2 + 1) * -1;
      };
      var ea = function(e2, r2) {
        return e2[r2 + 3] * (1 << 24) + (e2[r2 + 2] << 16) + (e2[r2 + 1] << 8) + e2[r2];
      };
      var ra = function(e2, r2) {
        return e2[r2 + 3] << 24 | e2[r2 + 2] << 16 | e2[r2 + 1] << 8 | e2[r2];
      };
      var ta = function(e2, r2) {
        return e2[r2] << 24 | e2[r2 + 1] << 16 | e2[r2 + 2] << 8 | e2[r2 + 3];
      };
      function aa(e2, t2) {
        var a2 = "", n2, i2, s2 = [], l2, o2, c2, f2;
        switch (t2) {
          case "dbcs":
            f2 = this.l;
            if (y && Buffer.isBuffer(this)) a2 = this.slice(this.l, this.l + 2 * e2).toString("utf16le");
            else for (c2 = 0; c2 < e2; ++c2) {
              a2 += String.fromCharCode(Zt(this, f2));
              f2 += 2;
            }
            e2 *= 2;
            break;
          case "utf8":
            a2 = Rt(this, this.l, this.l + e2);
            break;
          case "utf16le":
            e2 *= 2;
            a2 = Mt(this, this.l, this.l + e2);
            break;
          case "wstr":
            if (typeof $cptable !== "undefined") a2 = $cptable.utils.decode(r, this.slice(this.l, this.l + 2 * e2));
            else return aa.call(this, e2, "dbcs");
            e2 = 2 * e2;
            break;
          case "lpstr-ansi":
            a2 = Bt(this, this.l);
            e2 = 4 + ea(this, this.l);
            break;
          case "lpstr-cp":
            a2 = zt(this, this.l);
            e2 = 4 + ea(this, this.l);
            break;
          case "lpwstr":
            a2 = Wt(this, this.l);
            e2 = 4 + 2 * ea(this, this.l);
            break;
          case "lpp4":
            e2 = 4 + ea(this, this.l);
            a2 = Ht(this, this.l);
            if (e2 & 2) e2 += 2;
            break;
          case "8lpp4":
            e2 = 4 + ea(this, this.l);
            a2 = Xt(this, this.l);
            if (e2 & 3) e2 += 4 - (e2 & 3);
            break;
          case "cstr":
            e2 = 0;
            a2 = "";
            while ((l2 = qt(this, this.l + e2++)) !== 0) s2.push(p(l2));
            a2 = s2.join("");
            break;
          case "_wstr":
            e2 = 0;
            a2 = "";
            while ((l2 = Zt(this, this.l + e2)) !== 0) {
              s2.push(p(l2));
              e2 += 2;
            }
            e2 += 2;
            a2 = s2.join("");
            break;
          case "dbcs-cont":
            a2 = "";
            f2 = this.l;
            for (c2 = 0; c2 < e2; ++c2) {
              if (this.lens && this.lens.indexOf(f2) !== -1) {
                l2 = qt(this, f2);
                this.l = f2 + 1;
                o2 = aa.call(this, e2 - c2, l2 ? "dbcs-cont" : "sbcs-cont");
                return s2.join("") + o2;
              }
              s2.push(p(Zt(this, f2)));
              f2 += 2;
            }
            a2 = s2.join("");
            e2 *= 2;
            break;
          case "cpstr":
            if (typeof $cptable !== "undefined") {
              a2 = $cptable.utils.decode(r, this.slice(this.l, this.l + e2));
              break;
            }
            ;
          case "sbcs-cont":
            a2 = "";
            f2 = this.l;
            for (c2 = 0; c2 != e2; ++c2) {
              if (this.lens && this.lens.indexOf(f2) !== -1) {
                l2 = qt(this, f2);
                this.l = f2 + 1;
                o2 = aa.call(this, e2 - c2, l2 ? "dbcs-cont" : "sbcs-cont");
                return s2.join("") + o2;
              }
              s2.push(p(qt(this, f2)));
              f2 += 1;
            }
            a2 = s2.join("");
            break;
          default:
            switch (e2) {
              case 1:
                n2 = qt(this, this.l);
                this.l++;
                return n2;
              case 2:
                n2 = (t2 === "i" ? Qt : Zt)(this, this.l);
                this.l += 2;
                return n2;
              case 4:
                ;
              case -4:
                if (t2 === "i" || (this[this.l + 3] & 128) === 0) {
                  n2 = (e2 > 0 ? ra : ta)(this, this.l);
                  this.l += 4;
                  return n2;
                } else {
                  i2 = ea(this, this.l);
                  this.l += 4;
                }
                return i2;
              case 8:
                ;
              case -8:
                if (t2 === "f") {
                  if (e2 == 8) i2 = Yt(this, this.l);
                  else i2 = Yt([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0);
                  this.l += 8;
                  return i2;
                } else e2 = 8;
              case 16:
                a2 = Pt(this, this.l, e2);
                break;
            }
            ;
        }
        this.l += e2;
        return a2;
      }
      var na = function(e2, r2, t2) {
        e2[t2] = r2 & 255;
        e2[t2 + 1] = r2 >>> 8 & 255;
        e2[t2 + 2] = r2 >>> 16 & 255;
        e2[t2 + 3] = r2 >>> 24 & 255;
      };
      var ia = function(e2, r2, t2) {
        e2[t2] = r2 & 255;
        e2[t2 + 1] = r2 >> 8 & 255;
        e2[t2 + 2] = r2 >> 16 & 255;
        e2[t2 + 3] = r2 >> 24 & 255;
      };
      var sa = function(e2, r2, t2) {
        e2[t2] = r2 & 255;
        e2[t2 + 1] = r2 >>> 8 & 255;
      };
      function la(e2, r2, a2) {
        var n2 = 0, i2 = 0;
        if (a2 === "dbcs") {
          for (i2 = 0; i2 != r2.length; ++i2) sa(this, r2.charCodeAt(i2), this.l + 2 * i2);
          n2 = 2 * r2.length;
        } else if (a2 === "sbcs") {
          if (typeof $cptable !== "undefined" && t == 874) {
            for (i2 = 0; i2 != r2.length; ++i2) {
              var s2 = $cptable.utils.encode(t, r2.charAt(i2));
              this[this.l + i2] = s2[0];
            }
          } else {
            r2 = r2.replace(/[^\x00-\x7F]/g, "_");
            for (i2 = 0; i2 != r2.length; ++i2) this[this.l + i2] = r2.charCodeAt(i2) & 255;
          }
          n2 = r2.length;
        } else if (a2 === "hex") {
          for (; i2 < e2; ++i2) {
            this[this.l++] = parseInt(r2.slice(2 * i2, 2 * i2 + 2), 16) || 0;
          }
          return this;
        } else if (a2 === "utf16le") {
          var l2 = Math.min(this.l + e2, this.length);
          for (i2 = 0; i2 < Math.min(r2.length, e2); ++i2) {
            var o2 = r2.charCodeAt(i2);
            this[this.l++] = o2 & 255;
            this[this.l++] = o2 >> 8;
          }
          while (this.l < l2) this[this.l++] = 0;
          return this;
        } else switch (e2) {
          case 1:
            n2 = 1;
            this[this.l] = r2 & 255;
            break;
          case 2:
            n2 = 2;
            this[this.l] = r2 & 255;
            r2 >>>= 8;
            this[this.l + 1] = r2 & 255;
            break;
          case 3:
            n2 = 3;
            this[this.l] = r2 & 255;
            r2 >>>= 8;
            this[this.l + 1] = r2 & 255;
            r2 >>>= 8;
            this[this.l + 2] = r2 & 255;
            break;
          case 4:
            n2 = 4;
            na(this, r2, this.l);
            break;
          case 8:
            n2 = 8;
            if (a2 === "f") {
              Et(this, r2, this.l);
              break;
            }
            ;
          case 16:
            break;
          case -4:
            n2 = 4;
            ia(this, r2, this.l);
            break;
        }
        this.l += n2;
        return this;
      }
      function oa(e2, r2) {
        var t2 = Pt(this, this.l, e2.length >> 1);
        if (t2 !== e2) throw new Error(r2 + "Expected " + e2 + " saw " + t2);
        this.l += e2.length >> 1;
      }
      function ca(e2, r2) {
        e2.l = r2;
        e2._R = aa;
        e2.chk = oa;
        e2._W = la;
      }
      function fa(e2, r2) {
        e2.l += r2;
      }
      function ua(e2) {
        var r2 = x(e2);
        ca(r2, 0);
        return r2;
      }
      function ha(e2, r2, t2) {
        if (!e2) return;
        var a2, n2, i2;
        ca(e2, e2.l || 0);
        var s2 = e2.length, l2 = 0, o2 = 0;
        while (e2.l < s2) {
          l2 = e2._R(1);
          if (l2 & 128) l2 = (l2 & 127) + ((e2._R(1) & 127) << 7);
          var c2 = XLSBRecordEnum[l2] || XLSBRecordEnum[65535];
          a2 = e2._R(1);
          i2 = a2 & 127;
          for (n2 = 1; n2 < 4 && a2 & 128; ++n2) i2 += ((a2 = e2._R(1)) & 127) << 7 * n2;
          o2 = e2.l + i2;
          var f2 = c2.f && c2.f(e2, i2, t2);
          e2.l = o2;
          if (r2(f2, c2, l2)) return;
        }
      }
      function pa() {
        var e2 = [], r2 = y ? 256 : 2048;
        var t2 = function o2(e3) {
          var r3 = ua(e3);
          ca(r3, 0);
          return r3;
        };
        var a2 = t2(r2);
        var n2 = function c2() {
          if (!a2) return;
          if (a2.length > a2.l) {
            a2 = a2.slice(0, a2.l);
            a2.l = a2.length;
          }
          if (a2.length > 0) e2.push(a2);
          a2 = null;
        };
        var i2 = function f2(e3) {
          if (a2 && e3 < a2.length - a2.l) return a2;
          n2();
          return a2 = t2(Math.max(e3 + 1, r2));
        };
        var s2 = function u2() {
          n2();
          return F(e2);
        };
        var l2 = function h2(e3) {
          n2();
          a2 = e3;
          if (a2.l == null) a2.l = a2.length;
          i2(r2);
        };
        return { next: i2, push: l2, end: s2, _bufs: e2 };
      }
      function da(e2, r2, t2, a2) {
        var n2 = +r2, i2;
        if (isNaN(n2)) return;
        if (!a2) a2 = XLSBRecordEnum[n2].p || (t2 || []).length || 0;
        i2 = 1 + (n2 >= 128 ? 1 : 0) + 1;
        if (a2 >= 128) ++i2;
        if (a2 >= 16384) ++i2;
        if (a2 >= 2097152) ++i2;
        var s2 = e2.next(i2);
        if (n2 <= 127) s2._W(1, n2);
        else {
          s2._W(1, (n2 & 127) + 128);
          s2._W(1, n2 >> 7);
        }
        for (var l2 = 0; l2 != 4; ++l2) {
          if (a2 >= 128) {
            s2._W(1, (a2 & 127) + 128);
            a2 >>= 7;
          } else {
            s2._W(1, a2);
            break;
          }
        }
        if (a2 > 0 && Jt(t2)) e2.push(t2);
      }
      function ma(e2, r2, t2) {
        var a2 = gr(e2);
        if (r2.s) {
          if (a2.cRel) a2.c += r2.s.c;
          if (a2.rRel) a2.r += r2.s.r;
        } else {
          if (a2.cRel) a2.c += r2.c;
          if (a2.rRel) a2.r += r2.r;
        }
        if (!t2 || t2.biff < 12) {
          while (a2.c >= 256) a2.c -= 256;
          while (a2.r >= 65536) a2.r -= 65536;
        }
        return a2;
      }
      function va(e2, r2, t2) {
        var a2 = gr(e2);
        a2.s = ma(a2.s, r2.s, t2);
        a2.e = ma(a2.e, r2.s, t2);
        return a2;
      }
      function ga(e2, r2) {
        if (e2.cRel && e2.c < 0) {
          e2 = gr(e2);
          while (e2.c < 0) e2.c += r2 > 8 ? 16384 : 256;
        }
        if (e2.rRel && e2.r < 0) {
          e2 = gr(e2);
          while (e2.r < 0) e2.r += r2 > 8 ? 1048576 : r2 > 5 ? 65536 : 16384;
        }
        var t2 = Fa(e2);
        if (!e2.cRel && e2.cRel != null) t2 = _a(t2);
        if (!e2.rRel && e2.rRel != null) t2 = ka(t2);
        return t2;
      }
      function ba(e2, r2) {
        if (e2.s.r == 0 && !e2.s.rRel) {
          if (e2.e.r == (r2.biff >= 12 ? 1048575 : r2.biff >= 8 ? 65536 : 16384) && !e2.e.rRel) {
            return (e2.s.cRel ? "" : "$") + Ca(e2.s.c) + ":" + (e2.e.cRel ? "" : "$") + Ca(e2.e.c);
          }
        }
        if (e2.s.c == 0 && !e2.s.cRel) {
          if (e2.e.c == (r2.biff >= 12 ? 16383 : 255) && !e2.e.cRel) {
            return (e2.s.rRel ? "" : "$") + ya(e2.s.r) + ":" + (e2.e.rRel ? "" : "$") + ya(e2.e.r);
          }
        }
        return ga(e2.s, r2.biff) + ":" + ga(e2.e, r2.biff);
      }
      function wa(e2) {
        return parseInt(xa(e2), 10) - 1;
      }
      function ya(e2) {
        return "" + (e2 + 1);
      }
      function ka(e2) {
        return e2.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
      }
      function xa(e2) {
        return e2.replace(/\$(\d+)$/, "$1");
      }
      function Sa(e2) {
        var r2 = Aa(e2), t2 = 0, a2 = 0;
        for (; a2 !== r2.length; ++a2) t2 = 26 * t2 + r2.charCodeAt(a2) - 64;
        return t2 - 1;
      }
      function Ca(e2) {
        if (e2 < 0) throw new Error("invalid column " + e2);
        var r2 = "";
        for (++e2; e2; e2 = Math.floor((e2 - 1) / 26)) r2 = String.fromCharCode((e2 - 1) % 26 + 65) + r2;
        return r2;
      }
      function _a(e2) {
        return e2.replace(/^([A-Z])/, "$$$1");
      }
      function Aa(e2) {
        return e2.replace(/^\$([A-Z])/, "$1");
      }
      function Ta(e2) {
        return e2.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
      }
      function Ea(e2) {
        var r2 = 0, t2 = 0;
        for (var a2 = 0; a2 < e2.length; ++a2) {
          var n2 = e2.charCodeAt(a2);
          if (n2 >= 48 && n2 <= 57) r2 = 10 * r2 + (n2 - 48);
          else if (n2 >= 65 && n2 <= 90) t2 = 26 * t2 + (n2 - 64);
        }
        return { c: t2 - 1, r: r2 - 1 };
      }
      function Fa(e2) {
        var r2 = e2.c + 1;
        var t2 = "";
        for (; r2; r2 = (r2 - 1) / 26 | 0) t2 = String.fromCharCode((r2 - 1) % 26 + 65) + t2;
        return t2 + (e2.r + 1);
      }
      function Da(e2) {
        var r2 = e2.indexOf(":");
        if (r2 == -1) return { s: Ea(e2), e: Ea(e2) };
        return { s: Ea(e2.slice(0, r2)), e: Ea(e2.slice(r2 + 1)) };
      }
      function Oa(e2, r2) {
        if (typeof r2 === "undefined" || typeof r2 === "number") {
          return Oa(e2.s, e2.e);
        }
        if (typeof e2 !== "string") e2 = Fa(e2);
        if (typeof r2 !== "string") r2 = Fa(r2);
        return e2 == r2 ? e2 : e2 + ":" + r2;
      }
      function Ma(e2) {
        var r2 = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
        var t2 = 0, a2 = 0, n2 = 0;
        var i2 = e2.length;
        for (t2 = 0; a2 < i2; ++a2) {
          if ((n2 = e2.charCodeAt(a2) - 64) < 1 || n2 > 26) break;
          t2 = 26 * t2 + n2;
        }
        r2.s.c = --t2;
        for (t2 = 0; a2 < i2; ++a2) {
          if ((n2 = e2.charCodeAt(a2) - 48) < 0 || n2 > 9) break;
          t2 = 10 * t2 + n2;
        }
        r2.s.r = --t2;
        if (a2 === i2 || n2 != 10) {
          r2.e.c = r2.s.c;
          r2.e.r = r2.s.r;
          return r2;
        }
        ++a2;
        for (t2 = 0; a2 != i2; ++a2) {
          if ((n2 = e2.charCodeAt(a2) - 64) < 1 || n2 > 26) break;
          t2 = 26 * t2 + n2;
        }
        r2.e.c = --t2;
        for (t2 = 0; a2 != i2; ++a2) {
          if ((n2 = e2.charCodeAt(a2) - 48) < 0 || n2 > 9) break;
          t2 = 10 * t2 + n2;
        }
        r2.e.r = --t2;
        return r2;
      }
      function Na(e2, r2) {
        var t2 = e2.t == "d" && r2 instanceof Date;
        if (e2.z != null) try {
          return e2.w = Be(e2.z, t2 ? sr(r2) : r2);
        } catch (a2) {
        }
        try {
          return e2.w = Be((e2.XF || {}).numFmtId || (t2 ? 14 : 0), t2 ? sr(r2) : r2);
        } catch (a2) {
          return "" + r2;
        }
      }
      function Pa(e2, r2, t2) {
        if (e2 == null || e2.t == null || e2.t == "z") return "";
        if (e2.w !== void 0) return e2.w;
        if (e2.t == "d" && !e2.z && t2 && t2.dateNF) e2.z = t2.dateNF;
        if (e2.t == "e") return ln[e2.v] || e2.v;
        if (r2 == void 0) return Na(e2, e2.v);
        return Na(e2, r2);
      }
      function Ia(e2, r2) {
        var t2 = r2 && r2.sheet ? r2.sheet : "Sheet1";
        var a2 = {};
        a2[t2] = e2;
        return { SheetNames: [t2], Sheets: a2 };
      }
      function Ra(e2, r2, t2) {
        var a2 = t2 || {};
        var n2 = e2 ? Array.isArray(e2) : a2.dense;
        if (m != null && n2 == null) n2 = m;
        var i2 = e2 || (n2 ? [] : {});
        var s2 = 0, l2 = 0;
        if (i2 && a2.origin != null) {
          if (typeof a2.origin == "number") s2 = a2.origin;
          else {
            var o2 = typeof a2.origin == "string" ? Ea(a2.origin) : a2.origin;
            s2 = o2.r;
            l2 = o2.c;
          }
          if (!i2["!ref"]) i2["!ref"] = "A1:A1";
        }
        var c2 = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
        if (i2["!ref"]) {
          var f2 = Ma(i2["!ref"]);
          c2.s.c = f2.s.c;
          c2.s.r = f2.s.r;
          c2.e.c = Math.max(c2.e.c, f2.e.c);
          c2.e.r = Math.max(c2.e.r, f2.e.r);
          if (s2 == -1) c2.e.r = s2 = f2.e.r + 1;
        }
        for (var u2 = 0; u2 != r2.length; ++u2) {
          if (!r2[u2]) continue;
          if (!Array.isArray(r2[u2])) throw new Error("aoa_to_sheet expects an array of arrays");
          for (var h2 = 0; h2 != r2[u2].length; ++h2) {
            if (typeof r2[u2][h2] === "undefined") continue;
            var p2 = { v: r2[u2][h2] };
            var d2 = s2 + u2, v2 = l2 + h2;
            if (c2.s.r > d2) c2.s.r = d2;
            if (c2.s.c > v2) c2.s.c = v2;
            if (c2.e.r < d2) c2.e.r = d2;
            if (c2.e.c < v2) c2.e.c = v2;
            if (r2[u2][h2] && typeof r2[u2][h2] === "object" && !Array.isArray(r2[u2][h2]) && !(r2[u2][h2] instanceof Date)) p2 = r2[u2][h2];
            else {
              if (Array.isArray(p2.v)) {
                p2.f = r2[u2][h2][1];
                p2.v = p2.v[0];
              }
              if (p2.v === null) {
                if (p2.f) p2.t = "n";
                else if (a2.nullError) {
                  p2.t = "e";
                  p2.v = 0;
                } else if (!a2.sheetStubs) continue;
                else p2.t = "z";
              } else if (typeof p2.v === "number") p2.t = "n";
              else if (typeof p2.v === "boolean") p2.t = "b";
              else if (p2.v instanceof Date) {
                p2.z = a2.dateNF || X[14];
                if (a2.cellDates) {
                  p2.t = "d";
                  p2.w = Be(p2.z, sr(p2.v));
                } else {
                  p2.t = "n";
                  p2.v = sr(p2.v);
                  p2.w = Be(p2.z, p2.v);
                }
              } else p2.t = "s";
            }
            if (n2) {
              if (!i2[d2]) i2[d2] = [];
              if (i2[d2][v2] && i2[d2][v2].z) p2.z = i2[d2][v2].z;
              i2[d2][v2] = p2;
            } else {
              var g2 = Fa({ c: v2, r: d2 });
              if (i2[g2] && i2[g2].z) p2.z = i2[g2].z;
              i2[g2] = p2;
            }
          }
        }
        if (c2.s.c < 1e7) i2["!ref"] = Oa(c2);
        return i2;
      }
      function La(e2, r2) {
        return Ra(null, e2, r2);
      }
      var Ba = 2;
      var $a = 3;
      var za = 11;
      var Ua = 12;
      var Wa = 19;
      var ja = 30;
      var Ha = 64;
      var Va = 65;
      var Xa = 71;
      var Ga = 4096;
      var Ya = 4108;
      var Ja = 4126;
      var Ka = 80;
      var qa = 81;
      var Za = [Ka, qa];
      var Qa = { 1: { n: "CodePage", t: Ba }, 2: { n: "Category", t: Ka }, 3: { n: "PresentationFormat", t: Ka }, 4: { n: "ByteCount", t: $a }, 5: { n: "LineCount", t: $a }, 6: { n: "ParagraphCount", t: $a }, 7: { n: "SlideCount", t: $a }, 8: { n: "NoteCount", t: $a }, 9: { n: "HiddenCount", t: $a }, 10: { n: "MultimediaClipCount", t: $a }, 11: { n: "ScaleCrop", t: za }, 12: { n: "HeadingPairs", t: Ya }, 13: { n: "TitlesOfParts", t: Ja }, 14: { n: "Manager", t: Ka }, 15: { n: "Company", t: Ka }, 16: { n: "LinksUpToDate", t: za }, 17: { n: "CharacterCount", t: $a }, 19: { n: "SharedDoc", t: za }, 22: { n: "HyperlinksChanged", t: za }, 23: { n: "AppVersion", t: $a, p: "version" }, 24: { n: "DigSig", t: Va }, 26: { n: "ContentType", t: Ka }, 27: { n: "ContentStatus", t: Ka }, 28: { n: "Language", t: Ka }, 29: { n: "Version", t: Ka }, 255: {}, 2147483648: { n: "Locale", t: Wa }, 2147483651: { n: "Behavior", t: Wa }, 1919054434: {} };
      var en = { 1: { n: "CodePage", t: Ba }, 2: { n: "Title", t: Ka }, 3: { n: "Subject", t: Ka }, 4: { n: "Author", t: Ka }, 5: { n: "Keywords", t: Ka }, 6: { n: "Comments", t: Ka }, 7: { n: "Template", t: Ka }, 8: { n: "LastAuthor", t: Ka }, 9: { n: "RevNumber", t: Ka }, 10: { n: "EditTime", t: Ha }, 11: { n: "LastPrinted", t: Ha }, 12: { n: "CreatedDate", t: Ha }, 13: { n: "ModifiedDate", t: Ha }, 14: { n: "PageCount", t: $a }, 15: { n: "WordCount", t: $a }, 16: { n: "CharCount", t: $a }, 17: { n: "Thumbnail", t: Xa }, 18: { n: "Application", t: Ka }, 19: { n: "DocSecurity", t: $a }, 255: {}, 2147483648: { n: "Locale", t: Wa }, 2147483651: { n: "Behavior", t: Wa }, 1919054434: {} };
      var rn = { 1: "US", 2: "CA", 3: "", 7: "RU", 20: "EG", 30: "GR", 31: "NL", 32: "BE", 33: "FR", 34: "ES", 36: "HU", 39: "IT", 41: "CH", 43: "AT", 44: "GB", 45: "DK", 46: "SE", 47: "NO", 48: "PL", 49: "DE", 52: "MX", 55: "BR", 61: "AU", 64: "NZ", 66: "TH", 81: "JP", 82: "KR", 84: "VN", 86: "CN", 90: "TR", 105: "JS", 213: "DZ", 216: "MA", 218: "LY", 351: "PT", 354: "IS", 358: "FI", 420: "CZ", 886: "TW", 961: "LB", 962: "JO", 963: "SY", 964: "IQ", 965: "KW", 966: "SA", 971: "AE", 972: "IL", 974: "QA", 981: "IR", 65535: "US" };
      var tn = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
      function an(e2) {
        return e2.map(function(e3) {
          return [e3 >> 16 & 255, e3 >> 8 & 255, e3 & 255];
        });
      }
      var nn = an([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      var sn = gr(nn);
      var ln = { 0: "#NULL!", 7: "#DIV/0!", 15: "#VALUE!", 23: "#REF!", 29: "#NAME?", 36: "#NUM!", 42: "#N/A", 43: "#GETTING_DATA", 255: "#WTF?" };
      var on = { "#NULL!": 0, "#DIV/0!": 7, "#VALUE!": 15, "#REF!": 23, "#NAME?": 29, "#NUM!": 36, "#N/A": 42, "#GETTING_DATA": 43, "#WTF?": 255 };
      var cn = {
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
        "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
        "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
        "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
        "application/vnd.ms-excel.worksheet": "sheets",
        "application/vnd.ms-excel.binIndexWs": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
        "application/vnd.ms-excel.chartsheet": "charts",
        "application/vnd.ms-excel.macrosheet+xml": "macros",
        "application/vnd.ms-excel.macrosheet": "macros",
        "application/vnd.ms-excel.intlmacrosheet": "TODO",
        "application/vnd.ms-excel.binIndexMs": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
        "application/vnd.ms-excel.dialogsheet": "dialogs",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
        "application/vnd.ms-excel.sharedStrings": "strs",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
        "application/vnd.ms-excel.styles": "styles",
        "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
        "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
        "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
        "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
        "application/vnd.ms-excel.comments": "comments",
        "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
        "application/vnd.ms-excel.person+xml": "people",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
        "application/vnd.ms-excel.sheetMetadata": "metadata",
        "application/vnd.ms-excel.pivotTable": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
        "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
        "application/vnd.ms-office.chartstyle+xml": "TODO",
        "application/vnd.ms-office.chartex+xml": "TODO",
        "application/vnd.ms-excel.calcChain": "calcchains",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
        "application/vnd.ms-office.activeX": "TODO",
        "application/vnd.ms-office.activeX+xml": "TODO",
        "application/vnd.ms-excel.attachedToolbars": "TODO",
        "application/vnd.ms-excel.connections": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
        "application/vnd.ms-excel.externalLink": "links",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
        "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
        "application/vnd.ms-excel.pivotCacheRecords": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
        "application/vnd.ms-excel.queryTable": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
        "application/vnd.ms-excel.userNames": "TODO",
        "application/vnd.ms-excel.revisionHeaders": "TODO",
        "application/vnd.ms-excel.revisionLog": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
        "application/vnd.ms-excel.tableSingleCells": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
        "application/vnd.ms-excel.slicer": "TODO",
        "application/vnd.ms-excel.slicerCache": "TODO",
        "application/vnd.ms-excel.slicer+xml": "TODO",
        "application/vnd.ms-excel.slicerCache+xml": "TODO",
        "application/vnd.ms-excel.wsSortMap": "TODO",
        "application/vnd.ms-excel.table": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
        "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
        "application/vnd.ms-excel.Timeline+xml": "TODO",
        "application/vnd.ms-excel.TimelineCache+xml": "TODO",
        "application/vnd.ms-office.vbaProject": "vba",
        "application/vnd.ms-office.vbaProjectSignature": "TODO",
        "application/vnd.ms-office.volatileDependencies": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
        "application/vnd.ms-excel.controlproperties+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.model+data": "TODO",
        "application/vnd.ms-excel.Survey+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
        "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
        "application/vnd.openxmlformats-package.relationships+xml": "rels",
        "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
        "image/png": "TODO",
        sheet: "js"
      };
      var fn = { workbooks: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml", xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml", xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main", xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml", xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml" }, strs: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml", xlsb: "application/vnd.ms-excel.sharedStrings" }, comments: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml", xlsb: "application/vnd.ms-excel.comments" }, sheets: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml", xlsb: "application/vnd.ms-excel.worksheet" }, charts: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml", xlsb: "application/vnd.ms-excel.chartsheet" }, dialogs: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml", xlsb: "application/vnd.ms-excel.dialogsheet" }, macros: { xlsx: "application/vnd.ms-excel.macrosheet+xml", xlsb: "application/vnd.ms-excel.macrosheet" }, metadata: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml", xlsb: "application/vnd.ms-excel.sheetMetadata" }, styles: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml", xlsb: "application/vnd.ms-excel.styles" } };
      function un() {
        return { workbooks: [], sheets: [], charts: [], dialogs: [], macros: [], rels: [], strs: [], comments: [], threadedcomments: [], links: [], coreprops: [], extprops: [], custprops: [], themes: [], styles: [], calcchains: [], vba: [], drawings: [], metadata: [], people: [], TODO: [], xmlns: "" };
      }
      function hn(e2) {
        var r2 = un();
        if (!e2 || !e2.match) return r2;
        var t2 = {};
        (e2.match(zr) || []).forEach(function(e3) {
          var a2 = jr(e3);
          switch (a2[0].replace(Ur, "<")) {
            case "<?xml":
              break;
            case "<Types":
              r2.xmlns = a2["xmlns" + (a2[0].match(/<(\w+):/) || ["", ""])[1]];
              break;
            case "<Default":
              t2[a2.Extension] = a2.ContentType;
              break;
            case "<Override":
              if (r2[cn[a2.ContentType]] !== void 0) r2[cn[a2.ContentType]].push(a2.PartName);
              break;
          }
        });
        if (r2.xmlns !== Ct.CT) throw new Error("Unknown Namespace: " + r2.xmlns);
        r2.calcchain = r2.calcchains.length > 0 ? r2.calcchains[0] : "";
        r2.sst = r2.strs.length > 0 ? r2.strs[0] : "";
        r2.style = r2.styles.length > 0 ? r2.styles[0] : "";
        r2.defaults = t2;
        delete r2.calcchains;
        return r2;
      }
      function pn(e2, r2) {
        var t2 = nr(cn);
        var a2 = [], n2;
        a2[a2.length] = Rr;
        a2[a2.length] = wt("Types", null, { xmlns: Ct.CT, "xmlns:xsd": Ct.xsd, "xmlns:xsi": Ct.xsi });
        a2 = a2.concat([["xml", "application/xml"], ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"], ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"], ["data", "application/vnd.openxmlformats-officedocument.model+data"], ["bmp", "image/bmp"], ["png", "image/png"], ["gif", "image/gif"], ["emf", "image/x-emf"], ["wmf", "image/x-wmf"], ["jpg", "image/jpeg"], ["jpeg", "image/jpeg"], ["tif", "image/tiff"], ["tiff", "image/tiff"], ["pdf", "application/pdf"], ["rels", "application/vnd.openxmlformats-package.relationships+xml"]].map(function(e3) {
          return wt("Default", null, { Extension: e3[0], ContentType: e3[1] });
        }));
        var i2 = function(t3) {
          if (e2[t3] && e2[t3].length > 0) {
            n2 = e2[t3][0];
            a2[a2.length] = wt("Override", null, { PartName: (n2[0] == "/" ? "" : "/") + n2, ContentType: fn[t3][r2.bookType] || fn[t3]["xlsx"] });
          }
        };
        var s2 = function(t3) {
          (e2[t3] || []).forEach(function(e3) {
            a2[a2.length] = wt("Override", null, { PartName: (e3[0] == "/" ? "" : "/") + e3, ContentType: fn[t3][r2.bookType] || fn[t3]["xlsx"] });
          });
        };
        var l2 = function(r3) {
          (e2[r3] || []).forEach(function(e3) {
            a2[a2.length] = wt("Override", null, { PartName: (e3[0] == "/" ? "" : "/") + e3, ContentType: t2[r3][0] });
          });
        };
        i2("workbooks");
        s2("sheets");
        s2("charts");
        l2("themes");
        ["strs", "styles"].forEach(i2);
        ["coreprops", "extprops", "custprops"].forEach(l2);
        l2("vba");
        l2("comments");
        l2("threadedcomments");
        l2("drawings");
        s2("metadata");
        l2("people");
        if (a2.length > 2) {
          a2[a2.length] = "</Types>";
          a2[1] = a2[1].replace("/>", ">");
        }
        return a2.join("");
      }
      var dn = { WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument", HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing", XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath", XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing", XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink", CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml", CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps", CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments", CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties", SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings", STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme", CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart", CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx", CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet", WS: ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"], DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet", MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet", IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing", XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata", TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment", PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person", VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject" };
      function mn(e2) {
        var r2 = e2.lastIndexOf("/");
        return e2.slice(0, r2 + 1) + "_rels/" + e2.slice(r2 + 1) + ".rels";
      }
      function vn(e2, r2) {
        var t2 = { "!id": {} };
        if (!e2) return t2;
        if (r2.charAt(0) !== "/") {
          r2 = "/" + r2;
        }
        var a2 = {};
        (e2.match(zr) || []).forEach(function(e3) {
          var n2 = jr(e3);
          if (n2[0] === "<Relationship") {
            var i2 = {};
            i2.Type = n2.Type;
            i2.Target = n2.Target;
            i2.Id = n2.Id;
            if (n2.TargetMode) i2.TargetMode = n2.TargetMode;
            var s2 = n2.TargetMode === "External" ? n2.Target : Ir(n2.Target, r2);
            t2[s2] = i2;
            a2[n2.Id] = i2;
          }
        });
        t2["!id"] = a2;
        return t2;
      }
      function gn(e2) {
        var r2 = [Rr, wt("Relationships", null, { xmlns: Ct.RELS })];
        er(e2["!id"]).forEach(function(t2) {
          r2[r2.length] = wt("Relationship", null, e2["!id"][t2]);
        });
        if (r2.length > 2) {
          r2[r2.length] = "</Relationships>";
          r2[1] = r2[1].replace("/>", ">");
        }
        return r2.join("");
      }
      function bn(e2, r2, t2, a2, n2, i2) {
        if (!n2) n2 = {};
        if (!e2["!id"]) e2["!id"] = {};
        if (!e2["!idx"]) e2["!idx"] = 1;
        if (r2 < 0) for (r2 = e2["!idx"]; e2["!id"]["rId" + r2]; ++r2) {
        }
        e2["!idx"] = r2 + 1;
        n2.Id = "rId" + r2;
        n2.Type = a2;
        n2.Target = t2;
        if (i2) n2.TargetMode = i2;
        else if ([dn.HLINK, dn.XPATH, dn.XMISS].indexOf(n2.Type) > -1) n2.TargetMode = "External";
        if (e2["!id"][n2.Id]) throw new Error("Cannot rewrite rId " + r2);
        e2["!id"][n2.Id] = n2;
        e2[("/" + n2.Target).replace("//", "/")] = n2;
        return r2;
      }
      var wn = "application/vnd.oasis.opendocument.spreadsheet";
      function yn(e2, r2) {
        var t2 = xt(e2);
        var a2;
        var n2;
        while (a2 = St.exec(t2)) switch (a2[3]) {
          case "manifest":
            break;
          case "file-entry":
            n2 = jr(a2[0], false);
            if (n2.path == "/" && n2.type !== wn) throw new Error("This OpenDocument is not a spreadsheet");
            break;
          case "encryption-data":
            ;
          case "algorithm":
            ;
          case "start-key-generation":
            ;
          case "key-derivation":
            throw new Error("Unsupported ODS Encryption");
          default:
            if (r2 && r2.WTF) throw a2;
        }
      }
      function kn(e2) {
        var r2 = [Rr];
        r2.push('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">\n');
        r2.push('  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>\n');
        for (var t2 = 0; t2 < e2.length; ++t2) r2.push('  <manifest:file-entry manifest:full-path="' + e2[t2][0] + '" manifest:media-type="' + e2[t2][1] + '"/>\n');
        r2.push("</manifest:manifest>");
        return r2.join("");
      }
      function xn(e2, r2, t2) {
        return ['  <rdf:Description rdf:about="' + e2 + '">\n', '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (t2 || "odf") + "#" + r2 + '"/>\n', "  </rdf:Description>\n"].join("");
      }
      function Sn(e2, r2) {
        return ['  <rdf:Description rdf:about="' + e2 + '">\n', '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + r2 + '"/>\n', "  </rdf:Description>\n"].join("");
      }
      function Cn(e2) {
        var r2 = [Rr];
        r2.push('<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n');
        for (var t2 = 0; t2 != e2.length; ++t2) {
          r2.push(xn(e2[t2][0], e2[t2][1]));
          r2.push(Sn("", e2[t2][0]));
        }
        r2.push(xn("", "Document", "pkg"));
        r2.push("</rdf:RDF>");
        return r2.join("");
      }
      function _n() {
        return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + e.version + "</meta:generator></office:meta></office:document-meta>";
      }
      var An = [["cp:category", "Category"], ["cp:contentStatus", "ContentStatus"], ["cp:keywords", "Keywords"], ["cp:lastModifiedBy", "LastAuthor"], ["cp:lastPrinted", "LastPrinted"], ["cp:revision", "RevNumber"], ["cp:version", "Version"], ["dc:creator", "Author"], ["dc:description", "Comments"], ["dc:identifier", "Identifier"], ["dc:language", "Language"], ["dc:subject", "Subject"], ["dc:title", "Title"], ["dcterms:created", "CreatedDate", "date"], ["dcterms:modified", "ModifiedDate", "date"]];
      var Tn = (function() {
        var e2 = new Array(An.length);
        for (var r2 = 0; r2 < An.length; ++r2) {
          var t2 = An[r2];
          var a2 = "(?:" + t2[0].slice(0, t2[0].indexOf(":")) + ":)" + t2[0].slice(t2[0].indexOf(":") + 1);
          e2[r2] = new RegExp("<" + a2 + "[^>]*>([\\s\\S]*?)</" + a2 + ">");
        }
        return e2;
      })();
      function En(e2) {
        var r2 = {};
        e2 = ot(e2);
        for (var t2 = 0; t2 < An.length; ++t2) {
          var a2 = An[t2], n2 = e2.match(Tn[t2]);
          if (n2 != null && n2.length > 0) r2[a2[1]] = Gr(n2[1]);
          if (a2[2] === "date" && r2[a2[1]]) r2[a2[1]] = mr(r2[a2[1]]);
        }
        return r2;
      }
      function Fn(e2, r2, t2, a2, n2) {
        if (n2[e2] != null || r2 == null || r2 === "") return;
        n2[e2] = r2;
        r2 = Kr(r2);
        a2[a2.length] = t2 ? wt(e2, r2, t2) : gt(e2, r2);
      }
      function Dn(e2, r2) {
        var t2 = r2 || {};
        var a2 = [Rr, wt("cp:coreProperties", null, { "xmlns:cp": Ct.CORE_PROPS, "xmlns:dc": Ct.dc, "xmlns:dcterms": Ct.dcterms, "xmlns:dcmitype": Ct.dcmitype, "xmlns:xsi": Ct.xsi })], n2 = {};
        if (!e2 && !t2.Props) return a2.join("");
        if (e2) {
          if (e2.CreatedDate != null) Fn("dcterms:created", typeof e2.CreatedDate === "string" ? e2.CreatedDate : yt(e2.CreatedDate, t2.WTF), { "xsi:type": "dcterms:W3CDTF" }, a2, n2);
          if (e2.ModifiedDate != null) Fn("dcterms:modified", typeof e2.ModifiedDate === "string" ? e2.ModifiedDate : yt(e2.ModifiedDate, t2.WTF), { "xsi:type": "dcterms:W3CDTF" }, a2, n2);
        }
        for (var i2 = 0; i2 != An.length; ++i2) {
          var s2 = An[i2];
          var l2 = t2.Props && t2.Props[s2[1]] != null ? t2.Props[s2[1]] : e2 ? e2[s2[1]] : null;
          if (l2 === true) l2 = "1";
          else if (l2 === false) l2 = "0";
          else if (typeof l2 == "number") l2 = String(l2);
          if (l2 != null) Fn(s2[0], l2, null, a2, n2);
        }
        if (a2.length > 2) {
          a2[a2.length] = "</cp:coreProperties>";
          a2[1] = a2[1].replace("/>", ">");
        }
        return a2.join("");
      }
      var On = [["Application", "Application", "string"], ["AppVersion", "AppVersion", "string"], ["Company", "Company", "string"], ["DocSecurity", "DocSecurity", "string"], ["Manager", "Manager", "string"], ["HyperlinksChanged", "HyperlinksChanged", "bool"], ["SharedDoc", "SharedDoc", "bool"], ["LinksUpToDate", "LinksUpToDate", "bool"], ["ScaleCrop", "ScaleCrop", "bool"], ["HeadingPairs", "HeadingPairs", "raw"], ["TitlesOfParts", "TitlesOfParts", "raw"]];
      var Mn = ["Worksheets", "SheetNames", "NamedRanges", "DefinedNames", "Chartsheets", "ChartNames"];
      function Nn(e2, r2, t2, a2) {
        var n2 = [];
        if (typeof e2 == "string") n2 = mt(e2, a2);
        else for (var i2 = 0; i2 < e2.length; ++i2) n2 = n2.concat(e2[i2].map(function(e3) {
          return { v: e3 };
        }));
        var s2 = typeof r2 == "string" ? mt(r2, a2).map(function(e3) {
          return e3.v;
        }) : r2;
        var l2 = 0, o2 = 0;
        if (s2.length > 0) for (var c2 = 0; c2 !== n2.length; c2 += 2) {
          o2 = +n2[c2 + 1].v;
          switch (n2[c2].v) {
            case "Worksheets":
              ;
            case "工作表":
              ;
            case "Листы":
              ;
            case "أوراق العمل":
              ;
            case "ワークシート":
              ;
            case "גליונות עבודה":
              ;
            case "Arbeitsblätter":
              ;
            case "Çalışma Sayfaları":
              ;
            case "Feuilles de calcul":
              ;
            case "Fogli di lavoro":
              ;
            case "Folhas de cálculo":
              ;
            case "Planilhas":
              ;
            case "Regneark":
              ;
            case "Hojas de cálculo":
              ;
            case "Werkbladen":
              t2.Worksheets = o2;
              t2.SheetNames = s2.slice(l2, l2 + o2);
              break;
            case "Named Ranges":
              ;
            case "Rangos con nombre":
              ;
            case "名前付き一覧":
              ;
            case "Benannte Bereiche":
              ;
            case "Navngivne områder":
              t2.NamedRanges = o2;
              t2.DefinedNames = s2.slice(l2, l2 + o2);
              break;
            case "Charts":
              ;
            case "Diagramme":
              t2.Chartsheets = o2;
              t2.ChartNames = s2.slice(l2, l2 + o2);
              break;
          }
          l2 += o2;
        }
      }
      function Pn(e2, r2, t2) {
        var a2 = {};
        if (!r2) r2 = {};
        e2 = ot(e2);
        On.forEach(function(t3) {
          var n2 = (e2.match(ft(t3[0])) || [])[1];
          switch (t3[2]) {
            case "string":
              if (n2) r2[t3[1]] = Gr(n2);
              break;
            case "bool":
              r2[t3[1]] = n2 === "true";
              break;
            case "raw":
              var i2 = e2.match(new RegExp("<" + t3[0] + "[^>]*>([\\s\\S]*?)</" + t3[0] + ">"));
              if (i2 && i2.length > 0) a2[t3[1]] = i2[1];
              break;
          }
        });
        if (a2.HeadingPairs && a2.TitlesOfParts) Nn(a2.HeadingPairs, a2.TitlesOfParts, r2, t2);
        return r2;
      }
      function In(e2) {
        var r2 = [], t2 = wt;
        if (!e2) e2 = {};
        e2.Application = "SheetJS";
        r2[r2.length] = Rr;
        r2[r2.length] = wt("Properties", null, { xmlns: Ct.EXT_PROPS, "xmlns:vt": Ct.vt });
        On.forEach(function(a2) {
          if (e2[a2[1]] === void 0) return;
          var n2;
          switch (a2[2]) {
            case "string":
              n2 = Kr(String(e2[a2[1]]));
              break;
            case "bool":
              n2 = e2[a2[1]] ? "true" : "false";
              break;
          }
          if (n2 !== void 0) r2[r2.length] = t2(a2[0], n2);
        });
        r2[r2.length] = t2("HeadingPairs", t2("vt:vector", t2("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + t2("vt:variant", t2("vt:i4", String(e2.Worksheets))), { size: 2, baseType: "variant" }));
        r2[r2.length] = t2("TitlesOfParts", t2("vt:vector", e2.SheetNames.map(function(e3) {
          return "<vt:lpstr>" + Kr(e3) + "</vt:lpstr>";
        }).join(""), { size: e2.Worksheets, baseType: "lpstr" }));
        if (r2.length > 2) {
          r2[r2.length] = "</Properties>";
          r2[1] = r2[1].replace("/>", ">");
        }
        return r2.join("");
      }
      var Rn = /<[^>]+>[^<]*/g;
      function Ln(e2, r2) {
        var t2 = {}, a2 = "";
        var n2 = e2.match(Rn);
        if (n2) for (var i2 = 0; i2 != n2.length; ++i2) {
          var s2 = n2[i2], l2 = jr(s2);
          switch (l2[0]) {
            case "<?xml":
              break;
            case "<Properties":
              break;
            case "<property":
              a2 = Gr(l2.name);
              break;
            case "</property>":
              a2 = null;
              break;
            default:
              if (s2.indexOf("<vt:") === 0) {
                var o2 = s2.split(">");
                var c2 = o2[0].slice(4), f2 = o2[1];
                switch (c2) {
                  case "lpstr":
                    ;
                  case "bstr":
                    ;
                  case "lpwstr":
                    t2[a2] = Gr(f2);
                    break;
                  case "bool":
                    t2[a2] = at(f2);
                    break;
                  case "i1":
                    ;
                  case "i2":
                    ;
                  case "i4":
                    ;
                  case "i8":
                    ;
                  case "int":
                    ;
                  case "uint":
                    t2[a2] = parseInt(f2, 10);
                    break;
                  case "r4":
                    ;
                  case "r8":
                    ;
                  case "decimal":
                    t2[a2] = parseFloat(f2);
                    break;
                  case "filetime":
                    ;
                  case "date":
                    t2[a2] = mr(f2);
                    break;
                  case "cy":
                    ;
                  case "error":
                    t2[a2] = Gr(f2);
                    break;
                  default:
                    if (c2.slice(-1) == "/") break;
                    if (r2.WTF && typeof console !== "undefined") console.warn("Unexpected", s2, c2, o2);
                }
              } else if (s2.slice(0, 2) === "</") {
              } else if (r2.WTF) throw new Error(s2);
          }
        }
        return t2;
      }
      function Bn(e2) {
        var r2 = [Rr, wt("Properties", null, { xmlns: Ct.CUST_PROPS, "xmlns:vt": Ct.vt })];
        if (!e2) return r2.join("");
        var t2 = 1;
        er(e2).forEach(function a2(n2) {
          ++t2;
          r2[r2.length] = wt("property", kt(e2[n2], true), { fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}", pid: t2, name: Kr(n2) });
        });
        if (r2.length > 2) {
          r2[r2.length] = "</Properties>";
          r2[1] = r2[1].replace("/>", ">");
        }
        return r2.join("");
      }
      var $n = [2, 3, 48, 49, 131, 139, 140, 245];
      var zn = (function() {
        var e2 = { 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127, 8: 865, 9: 437, 10: 850, 11: 437, 13: 437, 14: 850, 15: 437, 16: 850, 17: 437, 18: 850, 19: 932, 20: 850, 21: 437, 22: 850, 23: 865, 24: 437, 25: 437, 26: 850, 27: 437, 28: 863, 29: 850, 31: 852, 34: 852, 35: 852, 36: 860, 37: 850, 38: 866, 55: 850, 64: 852, 77: 936, 78: 949, 79: 950, 80: 874, 87: 1252, 88: 1252, 89: 1252, 108: 863, 134: 737, 135: 852, 136: 857, 204: 1257, 255: 16969 };
        var r2 = tr({ 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127 });
        function a2(r3, t2) {
          var a3 = [];
          var n3 = x(1);
          switch (t2.type) {
            case "base64":
              n3 = C(w(r3));
              break;
            case "binary":
              n3 = C(r3);
              break;
            case "buffer":
              ;
            case "array":
              n3 = r3;
              break;
          }
          ca(n3, 0);
          var i3 = n3._R(1);
          var s3 = !!(i3 & 136);
          var l2 = false, o3 = false;
          switch (i3) {
            case 2:
              break;
            case 3:
              break;
            case 48:
              l2 = true;
              s3 = true;
              break;
            case 49:
              l2 = true;
              s3 = true;
              break;
            case 131:
              break;
            case 139:
              break;
            case 140:
              o3 = true;
              break;
            case 245:
              break;
            default:
              throw new Error("DBF Unsupported Version: " + i3.toString(16));
          }
          var c2 = 0, f2 = 521;
          if (i3 == 2) c2 = n3._R(2);
          n3.l += 3;
          if (i3 != 2) c2 = n3._R(4);
          if (c2 > 1048576) c2 = 1e6;
          if (i3 != 2) f2 = n3._R(2);
          var u2 = n3._R(2);
          var h2 = t2.codepage || 1252;
          if (i3 != 2) {
            n3.l += 16;
            n3._R(1);
            if (n3[n3.l] !== 0) h2 = e2[n3[n3.l]];
            n3.l += 1;
            n3.l += 2;
          }
          if (o3) n3.l += 36;
          var p2 = [], d2 = {};
          var m2 = Math.min(n3.length, i3 == 2 ? 521 : f2 - 10 - (l2 ? 264 : 0));
          var v2 = o3 ? 32 : 11;
          while (n3.l < m2 && n3[n3.l] != 13) {
            d2 = {};
            d2.name = $cptable.utils.decode(h2, n3.slice(n3.l, n3.l + v2)).replace(/[\u0000\r\n].*$/g, "");
            n3.l += v2;
            d2.type = String.fromCharCode(n3._R(1));
            if (i3 != 2 && !o3) d2.offset = n3._R(4);
            d2.len = n3._R(1);
            if (i3 == 2) d2.offset = n3._R(2);
            d2.dec = n3._R(1);
            if (d2.name.length) p2.push(d2);
            if (i3 != 2) n3.l += o3 ? 13 : 14;
            switch (d2.type) {
              case "B":
                if ((!l2 || d2.len != 8) && t2.WTF) console.log("Skipping " + d2.name + ":" + d2.type);
                break;
              case "G":
                ;
              case "P":
                if (t2.WTF) console.log("Skipping " + d2.name + ":" + d2.type);
                break;
              case "+":
                ;
              case "0":
                ;
              case "@":
                ;
              case "C":
                ;
              case "D":
                ;
              case "F":
                ;
              case "I":
                ;
              case "L":
                ;
              case "M":
                ;
              case "N":
                ;
              case "O":
                ;
              case "T":
                ;
              case "Y":
                break;
              default:
                throw new Error("Unknown Field Type: " + d2.type);
            }
          }
          if (n3[n3.l] !== 13) n3.l = f2 - 1;
          if (n3._R(1) !== 13) throw new Error("DBF Terminator not found " + n3.l + " " + n3[n3.l]);
          n3.l = f2;
          var g2 = 0, b2 = 0;
          a3[0] = [];
          for (b2 = 0; b2 != p2.length; ++b2) a3[0][b2] = p2[b2].name;
          while (c2-- > 0) {
            if (n3[n3.l] === 42) {
              n3.l += u2;
              continue;
            }
            ++n3.l;
            a3[++g2] = [];
            b2 = 0;
            for (b2 = 0; b2 != p2.length; ++b2) {
              var y2 = n3.slice(n3.l, n3.l + p2[b2].len);
              n3.l += p2[b2].len;
              ca(y2, 0);
              var k2 = $cptable.utils.decode(h2, y2);
              switch (p2[b2].type) {
                case "C":
                  if (k2.trim().length) a3[g2][b2] = k2.replace(/\s+$/, "");
                  break;
                case "D":
                  if (k2.length === 8) a3[g2][b2] = new Date(+k2.slice(0, 4), +k2.slice(4, 6) - 1, +k2.slice(6, 8));
                  else a3[g2][b2] = k2;
                  break;
                case "F":
                  a3[g2][b2] = parseFloat(k2.trim());
                  break;
                case "+":
                  ;
                case "I":
                  a3[g2][b2] = o3 ? y2._R(-4, "i") ^ 2147483648 : y2._R(4, "i");
                  break;
                case "L":
                  switch (k2.trim().toUpperCase()) {
                    case "Y":
                      ;
                    case "T":
                      a3[g2][b2] = true;
                      break;
                    case "N":
                      ;
                    case "F":
                      a3[g2][b2] = false;
                      break;
                    case "":
                      ;
                    case "?":
                      break;
                    default:
                      throw new Error("DBF Unrecognized L:|" + k2 + "|");
                  }
                  break;
                case "M":
                  if (!s3) throw new Error("DBF Unexpected MEMO for type " + i3.toString(16));
                  a3[g2][b2] = "##MEMO##" + (o3 ? parseInt(k2.trim(), 10) : y2._R(4));
                  break;
                case "N":
                  k2 = k2.replace(/\u0000/g, "").trim();
                  if (k2 && k2 != ".") a3[g2][b2] = +k2 || 0;
                  break;
                case "@":
                  a3[g2][b2] = new Date(y2._R(-8, "f") - 621356832e5);
                  break;
                case "T":
                  a3[g2][b2] = new Date((y2._R(4) - 2440588) * 864e5 + y2._R(4));
                  break;
                case "Y":
                  a3[g2][b2] = y2._R(4, "i") / 1e4 + y2._R(4, "i") / 1e4 * Math.pow(2, 32);
                  break;
                case "O":
                  a3[g2][b2] = -y2._R(-8, "f");
                  break;
                case "B":
                  if (l2 && p2[b2].len == 8) {
                    a3[g2][b2] = y2._R(8, "f");
                    break;
                  }
                  ;
                case "G":
                  ;
                case "P":
                  y2.l += p2[b2].len;
                  break;
                case "0":
                  if (p2[b2].name === "_NullFlags") break;
                default:
                  throw new Error("DBF Unsupported data type " + p2[b2].type);
              }
            }
          }
          if (i3 != 2) {
            if (n3.l < n3.length && n3[n3.l++] != 26) throw new Error("DBF EOF Marker missing " + (n3.l - 1) + " of " + n3.length + " " + n3[n3.l - 1].toString(16));
          }
          if (t2 && t2.sheetRows) a3 = a3.slice(0, t2.sheetRows);
          t2.DBF = p2;
          return a3;
        }
        function n2(e3, r3) {
          var t2 = r3 || {};
          if (!t2.dateNF) t2.dateNF = "yyyymmdd";
          var n3 = La(a2(e3, t2), t2);
          n3["!cols"] = t2.DBF.map(function(e4) {
            return { wch: e4.len, DBF: e4 };
          });
          delete t2.DBF;
          return n3;
        }
        function i2(e3, r3) {
          try {
            return Ia(n2(e3, r3), r3);
          } catch (t2) {
            if (r3 && r3.WTF) throw t2;
          }
          return { SheetNames: [], Sheets: {} };
        }
        var s2 = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
        function o2(e3, a3) {
          var n3 = a3 || {};
          if (+n3.codepage >= 0) l(+n3.codepage);
          if (n3.type == "string") throw new Error("Cannot write DBF to JS string");
          var i3 = pa();
          var o3 = tc(e3, { header: 1, raw: true, cellDates: true });
          var c2 = o3[0], f2 = o3.slice(1), u2 = e3["!cols"] || [];
          var h2 = 0, p2 = 0, d2 = 0, m2 = 1;
          for (h2 = 0; h2 < c2.length; ++h2) {
            if (((u2[h2] || {}).DBF || {}).name) {
              c2[h2] = u2[h2].DBF.name;
              ++d2;
              continue;
            }
            if (c2[h2] == null) continue;
            ++d2;
            if (typeof c2[h2] === "number") c2[h2] = c2[h2].toString(10);
            if (typeof c2[h2] !== "string") throw new Error("DBF Invalid column name " + c2[h2] + " |" + typeof c2[h2] + "|");
            if (c2.indexOf(c2[h2]) !== h2) {
              for (p2 = 0; p2 < 1024; ++p2) if (c2.indexOf(c2[h2] + "_" + p2) == -1) {
                c2[h2] += "_" + p2;
                break;
              }
            }
          }
          var v2 = Ma(e3["!ref"]);
          var g2 = [];
          var b2 = [];
          var w2 = [];
          for (h2 = 0; h2 <= v2.e.c - v2.s.c; ++h2) {
            var y2 = "", k2 = "", x2 = 0;
            var S2 = [];
            for (p2 = 0; p2 < f2.length; ++p2) {
              if (f2[p2][h2] != null) S2.push(f2[p2][h2]);
            }
            if (S2.length == 0 || c2[h2] == null) {
              g2[h2] = "?";
              continue;
            }
            for (p2 = 0; p2 < S2.length; ++p2) {
              switch (typeof S2[p2]) {
                case "number":
                  k2 = "B";
                  break;
                case "string":
                  k2 = "C";
                  break;
                case "boolean":
                  k2 = "L";
                  break;
                case "object":
                  k2 = S2[p2] instanceof Date ? "D" : "C";
                  break;
                default:
                  k2 = "C";
              }
              x2 = Math.max(x2, String(S2[p2]).length);
              y2 = y2 && y2 != k2 ? "C" : k2;
            }
            if (x2 > 250) x2 = 250;
            k2 = ((u2[h2] || {}).DBF || {}).type;
            if (k2 == "C") {
              if (u2[h2].DBF.len > x2) x2 = u2[h2].DBF.len;
            }
            if (y2 == "B" && k2 == "N") {
              y2 = "N";
              w2[h2] = u2[h2].DBF.dec;
              x2 = u2[h2].DBF.len;
            }
            b2[h2] = y2 == "C" || k2 == "N" ? x2 : s2[y2] || 0;
            m2 += b2[h2];
            g2[h2] = y2;
          }
          var C2 = i3.next(32);
          C2._W(4, 318902576);
          C2._W(4, f2.length);
          C2._W(2, 296 + 32 * d2);
          C2._W(2, m2);
          for (h2 = 0; h2 < 4; ++h2) C2._W(4, 0);
          C2._W(4, 0 | (+r2[t] || 3) << 8);
          for (h2 = 0, p2 = 0; h2 < c2.length; ++h2) {
            if (c2[h2] == null) continue;
            var _2 = i3.next(32);
            var A2 = (c2[h2].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
            _2._W(1, A2, "sbcs");
            _2._W(1, g2[h2] == "?" ? "C" : g2[h2], "sbcs");
            _2._W(4, p2);
            _2._W(1, b2[h2] || s2[g2[h2]] || 0);
            _2._W(1, w2[h2] || 0);
            _2._W(1, 2);
            _2._W(4, 0);
            _2._W(1, 0);
            _2._W(4, 0);
            _2._W(4, 0);
            p2 += b2[h2] || s2[g2[h2]] || 0;
          }
          var T2 = i3.next(264);
          T2._W(4, 13);
          for (h2 = 0; h2 < 65; ++h2) T2._W(4, 0);
          for (h2 = 0; h2 < f2.length; ++h2) {
            var E2 = i3.next(m2);
            E2._W(1, 0);
            for (p2 = 0; p2 < c2.length; ++p2) {
              if (c2[p2] == null) continue;
              switch (g2[p2]) {
                case "L":
                  E2._W(1, f2[h2][p2] == null ? 63 : f2[h2][p2] ? 84 : 70);
                  break;
                case "B":
                  E2._W(8, f2[h2][p2] || 0, "f");
                  break;
                case "N":
                  var F2 = "0";
                  if (typeof f2[h2][p2] == "number") F2 = f2[h2][p2].toFixed(w2[p2] || 0);
                  for (d2 = 0; d2 < b2[p2] - F2.length; ++d2) E2._W(1, 32);
                  E2._W(1, F2, "sbcs");
                  break;
                case "D":
                  if (!f2[h2][p2]) E2._W(8, "00000000", "sbcs");
                  else {
                    E2._W(4, ("0000" + f2[h2][p2].getFullYear()).slice(-4), "sbcs");
                    E2._W(2, ("00" + (f2[h2][p2].getMonth() + 1)).slice(-2), "sbcs");
                    E2._W(2, ("00" + f2[h2][p2].getDate()).slice(-2), "sbcs");
                  }
                  break;
                case "C":
                  var D2 = String(f2[h2][p2] != null ? f2[h2][p2] : "").slice(0, b2[p2]);
                  E2._W(1, D2, "sbcs");
                  for (d2 = 0; d2 < b2[p2] - D2.length; ++d2) E2._W(1, 32);
                  break;
              }
            }
          }
          i3.next(1)._W(1, 26);
          return i3.end();
        }
        return { to_workbook: i2, to_sheet: n2, from_sheet: o2 };
      })();
      var Un = (function() {
        var e2 = { AA: "À", BA: "Á", CA: "Â", DA: 195, HA: "Ä", JA: 197, AE: "È", BE: "É", CE: "Ê", HE: "Ë", AI: "Ì", BI: "Í", CI: "Î", HI: "Ï", AO: "Ò", BO: "Ó", CO: "Ô", DO: 213, HO: "Ö", AU: "Ù", BU: "Ú", CU: "Û", HU: "Ü", Aa: "à", Ba: "á", Ca: "â", Da: 227, Ha: "ä", Ja: 229, Ae: "è", Be: "é", Ce: "ê", He: "ë", Ai: "ì", Bi: "í", Ci: "î", Hi: "ï", Ao: "ò", Bo: "ó", Co: "ô", Do: 245, Ho: "ö", Au: "ù", Bu: "ú", Cu: "û", Hu: "ü", KC: "Ç", Kc: "ç", q: "æ", z: "œ", a: "Æ", j: "Œ", DN: 209, Dn: 241, Hy: 255, S: 169, c: 170, R: 174, "B ": 180, 0: 176, 1: 177, 2: 178, 3: 179, 5: 181, 6: 182, 7: 183, Q: 185, k: 186, b: 208, i: 216, l: 222, s: 240, y: 248, "!": 161, '"': 162, "#": 163, "(": 164, "%": 165, "'": 167, "H ": 168, "+": 171, ";": 187, "<": 188, "=": 189, ">": 190, "?": 191, "{": 223 };
        var r2 = new RegExp("\x1BN(" + er(e2).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm");
        var t2 = function(r3, t3) {
          var a3 = e2[t3];
          return typeof a3 == "number" ? d(a3) : a3;
        };
        var a2 = function(e3, r3, t3) {
          var a3 = r3.charCodeAt(0) - 32 << 4 | t3.charCodeAt(0) - 48;
          return a3 == 59 ? e3 : d(a3);
        };
        e2["|"] = 254;
        function n2(e3, r3) {
          switch (r3.type) {
            case "base64":
              return i2(w(e3), r3);
            case "binary":
              return i2(e3, r3);
            case "buffer":
              return i2(y && Buffer.isBuffer(e3) ? e3.toString("binary") : A(e3), r3);
            case "array":
              return i2(vr(e3), r3);
          }
          throw new Error("Unrecognized type " + r3.type);
        }
        function i2(e3, n3) {
          var i3 = e3.split(/[\n\r]+/), s3 = -1, o3 = -1, c3 = 0, f3 = 0, u3 = [];
          var h3 = [];
          var p2 = null;
          var d2 = {}, m2 = [], v2 = [], g2 = [];
          var b2 = 0, w2;
          if (+n3.codepage >= 0) l(+n3.codepage);
          for (; c3 !== i3.length; ++c3) {
            b2 = 0;
            var y2 = i3[c3].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a2).replace(r2, t2);
            var k2 = y2.replace(/;;/g, "\0").split(";").map(function(e4) {
              return e4.replace(/\u0000/g, ";");
            });
            var x2 = k2[0], S2;
            if (y2.length > 0) switch (x2) {
              case "ID":
                break;
              case "E":
                break;
              case "B":
                break;
              case "O":
                break;
              case "W":
                break;
              case "P":
                if (k2[1].charAt(0) == "P") h3.push(y2.slice(3).replace(/;;/g, ";"));
                break;
              case "C":
                var C2 = false, _2 = false, A2 = false, T2 = false, E2 = -1, F2 = -1;
                for (f3 = 1; f3 < k2.length; ++f3) switch (k2[f3].charAt(0)) {
                  case "A":
                    break;
                  case "X":
                    o3 = parseInt(k2[f3].slice(1)) - 1;
                    _2 = true;
                    break;
                  case "Y":
                    s3 = parseInt(k2[f3].slice(1)) - 1;
                    if (!_2) o3 = 0;
                    for (w2 = u3.length; w2 <= s3; ++w2) u3[w2] = [];
                    break;
                  case "K":
                    S2 = k2[f3].slice(1);
                    if (S2.charAt(0) === '"') S2 = S2.slice(1, S2.length - 1);
                    else if (S2 === "TRUE") S2 = true;
                    else if (S2 === "FALSE") S2 = false;
                    else if (!isNaN(wr(S2))) {
                      S2 = wr(S2);
                      if (p2 !== null && Ne(p2)) S2 = fr(S2);
                    } else if (!isNaN(kr(S2).getDate())) {
                      S2 = mr(S2);
                    }
                    if (typeof $cptable !== "undefined" && typeof S2 == "string" && (n3 || {}).type != "string" && (n3 || {}).codepage) S2 = $cptable.utils.decode(n3.codepage, S2);
                    C2 = true;
                    break;
                  case "E":
                    T2 = true;
                    var D2 = ms(k2[f3].slice(1), { r: s3, c: o3 });
                    u3[s3][o3] = [u3[s3][o3], D2];
                    break;
                  case "S":
                    A2 = true;
                    u3[s3][o3] = [u3[s3][o3], "S5S"];
                    break;
                  case "G":
                    break;
                  case "R":
                    E2 = parseInt(k2[f3].slice(1)) - 1;
                    break;
                  case "C":
                    F2 = parseInt(k2[f3].slice(1)) - 1;
                    break;
                  default:
                    if (n3 && n3.WTF) throw new Error("SYLK bad record " + y2);
                }
                if (C2) {
                  if (u3[s3][o3] && u3[s3][o3].length == 2) u3[s3][o3][0] = S2;
                  else u3[s3][o3] = S2;
                  p2 = null;
                }
                if (A2) {
                  if (T2) throw new Error("SYLK shared formula cannot have own formula");
                  var O2 = E2 > -1 && u3[E2][F2];
                  if (!O2 || !O2[1]) throw new Error("SYLK shared formula cannot find base");
                  u3[s3][o3][1] = bs(O2[1], { r: s3 - E2, c: o3 - F2 });
                }
                break;
              case "F":
                var M2 = 0;
                for (f3 = 1; f3 < k2.length; ++f3) switch (k2[f3].charAt(0)) {
                  case "X":
                    o3 = parseInt(k2[f3].slice(1)) - 1;
                    ++M2;
                    break;
                  case "Y":
                    s3 = parseInt(k2[f3].slice(1)) - 1;
                    for (w2 = u3.length; w2 <= s3; ++w2) u3[w2] = [];
                    break;
                  case "M":
                    b2 = parseInt(k2[f3].slice(1)) / 20;
                    break;
                  case "F":
                    break;
                  case "G":
                    break;
                  case "P":
                    p2 = h3[parseInt(k2[f3].slice(1))];
                    break;
                  case "S":
                    break;
                  case "D":
                    break;
                  case "N":
                    break;
                  case "W":
                    g2 = k2[f3].slice(1).split(" ");
                    for (w2 = parseInt(g2[0], 10); w2 <= parseInt(g2[1], 10); ++w2) {
                      b2 = parseInt(g2[2], 10);
                      v2[w2 - 1] = b2 === 0 ? { hidden: true } : { wch: b2 };
                      wi(v2[w2 - 1]);
                    }
                    break;
                  case "C":
                    o3 = parseInt(k2[f3].slice(1)) - 1;
                    if (!v2[o3]) v2[o3] = {};
                    break;
                  case "R":
                    s3 = parseInt(k2[f3].slice(1)) - 1;
                    if (!m2[s3]) m2[s3] = {};
                    if (b2 > 0) {
                      m2[s3].hpt = b2;
                      m2[s3].hpx = Si(b2);
                    } else if (b2 === 0) m2[s3].hidden = true;
                    break;
                  default:
                    if (n3 && n3.WTF) throw new Error("SYLK bad record " + y2);
                }
                if (M2 < 1) p2 = null;
                break;
              default:
                if (n3 && n3.WTF) throw new Error("SYLK bad record " + y2);
            }
          }
          if (m2.length > 0) d2["!rows"] = m2;
          if (v2.length > 0) d2["!cols"] = v2;
          if (n3 && n3.sheetRows) u3 = u3.slice(0, n3.sheetRows);
          return [u3, d2];
        }
        function s2(e3, r3) {
          var t3 = n2(e3, r3);
          var a3 = t3[0], i3 = t3[1];
          var s3 = La(a3, r3);
          er(i3).forEach(function(e4) {
            s3[e4] = i3[e4];
          });
          return s3;
        }
        function o2(e3, r3) {
          return Ia(s2(e3, r3), r3);
        }
        function c2(e3, r3, t3, a3) {
          var n3 = "C;Y" + (t3 + 1) + ";X" + (a3 + 1) + ";K";
          switch (e3.t) {
            case "n":
              n3 += e3.v || 0;
              if (e3.f && !e3.F) n3 += ";E" + gs(e3.f, { r: t3, c: a3 });
              break;
            case "b":
              n3 += e3.v ? "TRUE" : "FALSE";
              break;
            case "e":
              n3 += e3.w || e3.v;
              break;
            case "d":
              n3 += '"' + (e3.w || e3.v) + '"';
              break;
            case "s":
              n3 += '"' + e3.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
              break;
          }
          return n3;
        }
        function f2(e3, r3) {
          r3.forEach(function(r4, t3) {
            var a3 = "F;W" + (t3 + 1) + " " + (t3 + 1) + " ";
            if (r4.hidden) a3 += "0";
            else {
              if (typeof r4.width == "number" && !r4.wpx) r4.wpx = di(r4.width);
              if (typeof r4.wpx == "number" && !r4.wch) r4.wch = mi(r4.wpx);
              if (typeof r4.wch == "number") a3 += Math.round(r4.wch);
            }
            if (a3.charAt(a3.length - 1) != " ") e3.push(a3);
          });
        }
        function u2(e3, r3) {
          r3.forEach(function(r4, t3) {
            var a3 = "F;";
            if (r4.hidden) a3 += "M0;";
            else if (r4.hpt) a3 += "M" + 20 * r4.hpt + ";";
            else if (r4.hpx) a3 += "M" + 20 * xi(r4.hpx) + ";";
            if (a3.length > 2) e3.push(a3 + "R" + (t3 + 1));
          });
        }
        function h2(e3, r3) {
          var t3 = ["ID;PWXL;N;E"], a3 = [];
          var n3 = Ma(e3["!ref"]), i3;
          var s3 = Array.isArray(e3);
          var l2 = "\r\n";
          t3.push("P;PGeneral");
          t3.push("F;P0;DG0G8;M255");
          if (e3["!cols"]) f2(t3, e3["!cols"]);
          if (e3["!rows"]) u2(t3, e3["!rows"]);
          t3.push("B;Y" + (n3.e.r - n3.s.r + 1) + ";X" + (n3.e.c - n3.s.c + 1) + ";D" + [n3.s.c, n3.s.r, n3.e.c, n3.e.r].join(" "));
          for (var o3 = n3.s.r; o3 <= n3.e.r; ++o3) {
            for (var h3 = n3.s.c; h3 <= n3.e.c; ++h3) {
              var p2 = Fa({ r: o3, c: h3 });
              i3 = s3 ? (e3[o3] || [])[h3] : e3[p2];
              if (!i3 || i3.v == null && (!i3.f || i3.F)) continue;
              a3.push(c2(i3, e3, o3, h3, r3));
            }
          }
          return t3.join(l2) + l2 + a3.join(l2) + l2 + "E" + l2;
        }
        return { to_workbook: o2, to_sheet: s2, from_sheet: h2 };
      })();
      var Wn = /* @__PURE__ */ (function() {
        function e2(e3, t3) {
          switch (t3.type) {
            case "base64":
              return r2(w(e3), t3);
            case "binary":
              return r2(e3, t3);
            case "buffer":
              return r2(y && Buffer.isBuffer(e3) ? e3.toString("binary") : A(e3), t3);
            case "array":
              return r2(vr(e3), t3);
          }
          throw new Error("Unrecognized type " + t3.type);
        }
        function r2(e3, r3) {
          var t3 = e3.split("\n"), a3 = -1, n3 = -1, i2 = 0, s2 = [];
          for (; i2 !== t3.length; ++i2) {
            if (t3[i2].trim() === "BOT") {
              s2[++a3] = [];
              n3 = 0;
              continue;
            }
            if (a3 < 0) continue;
            var l2 = t3[i2].trim().split(",");
            var o2 = l2[0], c2 = l2[1];
            ++i2;
            var f2 = t3[i2] || "";
            while ((f2.match(/["]/g) || []).length & 1 && i2 < t3.length - 1) f2 += "\n" + t3[++i2];
            f2 = f2.trim();
            switch (+o2) {
              case -1:
                if (f2 === "BOT") {
                  s2[++a3] = [];
                  n3 = 0;
                  continue;
                } else if (f2 !== "EOD") throw new Error("Unrecognized DIF special command " + f2);
                break;
              case 0:
                if (f2 === "TRUE") s2[a3][n3] = true;
                else if (f2 === "FALSE") s2[a3][n3] = false;
                else if (!isNaN(wr(c2))) s2[a3][n3] = wr(c2);
                else if (!isNaN(kr(c2).getDate())) s2[a3][n3] = mr(c2);
                else s2[a3][n3] = c2;
                ++n3;
                break;
              case 1:
                f2 = f2.slice(1, f2.length - 1);
                f2 = f2.replace(/""/g, '"');
                if (v && f2 && f2.match(/^=".*"$/)) f2 = f2.slice(2, -1);
                s2[a3][n3++] = f2 !== "" ? f2 : null;
                break;
            }
            if (f2 === "EOD") break;
          }
          if (r3 && r3.sheetRows) s2 = s2.slice(0, r3.sheetRows);
          return s2;
        }
        function t2(r3, t3) {
          return La(e2(r3, t3), t3);
        }
        function a2(e3, r3) {
          return Ia(t2(e3, r3), r3);
        }
        var n2 = /* @__PURE__ */ (function() {
          var e3 = function t3(e4, r4, a3, n3, i2) {
            e4.push(r4);
            e4.push(a3 + "," + n3);
            e4.push('"' + i2.replace(/"/g, '""') + '"');
          };
          var r3 = function a3(e4, r4, t3, n3) {
            e4.push(r4 + "," + t3);
            e4.push(r4 == 1 ? '"' + n3.replace(/"/g, '""') + '"' : n3);
          };
          return function n3(t3) {
            var a3 = [];
            var n4 = Ma(t3["!ref"]), i2;
            var s2 = Array.isArray(t3);
            e3(a3, "TABLE", 0, 1, "sheetjs");
            e3(a3, "VECTORS", 0, n4.e.r - n4.s.r + 1, "");
            e3(a3, "TUPLES", 0, n4.e.c - n4.s.c + 1, "");
            e3(a3, "DATA", 0, 0, "");
            for (var l2 = n4.s.r; l2 <= n4.e.r; ++l2) {
              r3(a3, -1, 0, "BOT");
              for (var o2 = n4.s.c; o2 <= n4.e.c; ++o2) {
                var c2 = Fa({ r: l2, c: o2 });
                i2 = s2 ? (t3[l2] || [])[o2] : t3[c2];
                if (!i2) {
                  r3(a3, 1, 0, "");
                  continue;
                }
                switch (i2.t) {
                  case "n":
                    var f2 = v ? i2.w : i2.v;
                    if (!f2 && i2.v != null) f2 = i2.v;
                    if (f2 == null) {
                      if (v && i2.f && !i2.F) r3(a3, 1, 0, "=" + i2.f);
                      else r3(a3, 1, 0, "");
                    } else r3(a3, 0, f2, "V");
                    break;
                  case "b":
                    r3(a3, 0, i2.v ? 1 : 0, i2.v ? "TRUE" : "FALSE");
                    break;
                  case "s":
                    r3(a3, 1, 0, !v || isNaN(i2.v) ? i2.v : '="' + i2.v + '"');
                    break;
                  case "d":
                    if (!i2.w) i2.w = Be(i2.z || X[14], sr(mr(i2.v)));
                    if (v) r3(a3, 0, i2.w, "V");
                    else r3(a3, 1, 0, i2.w);
                    break;
                  default:
                    r3(a3, 1, 0, "");
                }
              }
            }
            r3(a3, -1, 0, "EOD");
            var u2 = "\r\n";
            var h2 = a3.join(u2);
            return h2;
          };
        })();
        return { to_workbook: a2, to_sheet: t2, from_sheet: n2 };
      })();
      var jn = (function() {
        function e2(e3) {
          return e3.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, "\n");
        }
        function r2(e3) {
          return e3.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
        }
        function t2(r3, t3) {
          var a3 = r3.split("\n"), n3 = -1, i3 = -1, s3 = 0, l3 = [];
          for (; s3 !== a3.length; ++s3) {
            var o3 = a3[s3].trim().split(":");
            if (o3[0] !== "cell") continue;
            var c3 = Ea(o3[1]);
            if (l3.length <= c3.r) {
              for (n3 = l3.length; n3 <= c3.r; ++n3) if (!l3[n3]) l3[n3] = [];
            }
            n3 = c3.r;
            i3 = c3.c;
            switch (o3[2]) {
              case "t":
                l3[n3][i3] = e2(o3[3]);
                break;
              case "v":
                l3[n3][i3] = +o3[3];
                break;
              case "vtf":
                var f3 = o3[o3.length - 1];
              case "vtc":
                switch (o3[3]) {
                  case "nl":
                    l3[n3][i3] = +o3[4] ? true : false;
                    break;
                  default:
                    l3[n3][i3] = +o3[4];
                    break;
                }
                if (o3[2] == "vtf") l3[n3][i3] = [l3[n3][i3], f3];
            }
          }
          if (t3 && t3.sheetRows) l3 = l3.slice(0, t3.sheetRows);
          return l3;
        }
        function a2(e3, r3) {
          return La(t2(e3, r3), r3);
        }
        function n2(e3, r3) {
          return Ia(a2(e3, r3), r3);
        }
        var i2 = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join("\n");
        var s2 = ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join("\n") + "\n";
        var l2 = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join("\n");
        var o2 = "--SocialCalcSpreadsheetControlSave--";
        function c2(e3) {
          if (!e3 || !e3["!ref"]) return "";
          var t3 = [], a3 = [], n3, i3 = "";
          var s3 = Da(e3["!ref"]);
          var l3 = Array.isArray(e3);
          for (var o3 = s3.s.r; o3 <= s3.e.r; ++o3) {
            for (var c3 = s3.s.c; c3 <= s3.e.c; ++c3) {
              i3 = Fa({ r: o3, c: c3 });
              n3 = l3 ? (e3[o3] || [])[c3] : e3[i3];
              if (!n3 || n3.v == null || n3.t === "z") continue;
              a3 = ["cell", i3, "t"];
              switch (n3.t) {
                case "s":
                  ;
                case "str":
                  a3.push(r2(n3.v));
                  break;
                case "n":
                  if (!n3.f) {
                    a3[2] = "v";
                    a3[3] = n3.v;
                  } else {
                    a3[2] = "vtf";
                    a3[3] = "n";
                    a3[4] = n3.v;
                    a3[5] = r2(n3.f);
                  }
                  break;
                case "b":
                  a3[2] = "vt" + (n3.f ? "f" : "c");
                  a3[3] = "nl";
                  a3[4] = n3.v ? "1" : "0";
                  a3[5] = r2(n3.f || (n3.v ? "TRUE" : "FALSE"));
                  break;
                case "d":
                  var f3 = sr(mr(n3.v));
                  a3[2] = "vtc";
                  a3[3] = "nd";
                  a3[4] = "" + f3;
                  a3[5] = n3.w || Be(n3.z || X[14], f3);
                  break;
                case "e":
                  continue;
              }
              t3.push(a3.join(":"));
            }
          }
          t3.push("sheet:c:" + (s3.e.c - s3.s.c + 1) + ":r:" + (s3.e.r - s3.s.r + 1) + ":tvf:1");
          t3.push("valueformat:1:text-wiki");
          return t3.join("\n");
        }
        function f2(e3) {
          return [i2, s2, l2, s2, c2(e3), o2].join("\n");
        }
        return { to_workbook: n2, to_sheet: a2, from_sheet: f2 };
      })();
      var Hn = /* @__PURE__ */ (function() {
        function e2(e3, r3, t3, a3, n3) {
          if (n3.raw) r3[t3][a3] = e3;
          else if (e3 === "") {
          } else if (e3 === "TRUE") r3[t3][a3] = true;
          else if (e3 === "FALSE") r3[t3][a3] = false;
          else if (!isNaN(wr(e3))) r3[t3][a3] = wr(e3);
          else if (!isNaN(kr(e3).getDate())) r3[t3][a3] = mr(e3);
          else r3[t3][a3] = e3;
        }
        function r2(r3, t3) {
          var a3 = t3 || {};
          var n3 = [];
          if (!r3 || r3.length === 0) return n3;
          var i3 = r3.split(/[\r\n]/);
          var s3 = i3.length - 1;
          while (s3 >= 0 && i3[s3].length === 0) --s3;
          var l3 = 10, o3 = 0;
          var c3 = 0;
          for (; c3 <= s3; ++c3) {
            o3 = i3[c3].indexOf(" ");
            if (o3 == -1) o3 = i3[c3].length;
            else o3++;
            l3 = Math.max(l3, o3);
          }
          for (c3 = 0; c3 <= s3; ++c3) {
            n3[c3] = [];
            var f2 = 0;
            e2(i3[c3].slice(0, l3).trim(), n3, c3, f2, a3);
            for (f2 = 1; f2 <= (i3[c3].length - l3) / 10 + 1; ++f2) e2(i3[c3].slice(l3 + (f2 - 1) * 10, l3 + f2 * 10).trim(), n3, c3, f2, a3);
          }
          if (a3.sheetRows) n3 = n3.slice(0, a3.sheetRows);
          return n3;
        }
        var t2 = { 44: ",", 9: "	", 59: ";", 124: "|" };
        var a2 = { 44: 3, 9: 2, 59: 1, 124: 0 };
        function n2(e3) {
          var r3 = {}, n3 = false, i3 = 0, s3 = 0;
          for (; i3 < e3.length; ++i3) {
            if ((s3 = e3.charCodeAt(i3)) == 34) n3 = !n3;
            else if (!n3 && s3 in t2) r3[s3] = (r3[s3] || 0) + 1;
          }
          s3 = [];
          for (i3 in r3) if (Object.prototype.hasOwnProperty.call(r3, i3)) {
            s3.push([r3[i3], i3]);
          }
          if (!s3.length) {
            r3 = a2;
            for (i3 in r3) if (Object.prototype.hasOwnProperty.call(r3, i3)) {
              s3.push([r3[i3], i3]);
            }
          }
          s3.sort(function(e4, r4) {
            return e4[0] - r4[0] || a2[e4[1]] - a2[r4[1]];
          });
          return t2[s3.pop()[1]] || 44;
        }
        function i2(e3, r3) {
          var t3 = r3 || {};
          var a3 = "";
          if (m != null && t3.dense == null) t3.dense = m;
          var i3 = t3.dense ? [] : {};
          var s3 = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
          if (e3.slice(0, 4) == "sep=") {
            if (e3.charCodeAt(5) == 13 && e3.charCodeAt(6) == 10) {
              a3 = e3.charAt(4);
              e3 = e3.slice(7);
            } else if (e3.charCodeAt(5) == 13 || e3.charCodeAt(5) == 10) {
              a3 = e3.charAt(4);
              e3 = e3.slice(6);
            } else a3 = n2(e3.slice(0, 1024));
          } else if (t3 && t3.FS) a3 = t3.FS;
          else a3 = n2(e3.slice(0, 1024));
          var l3 = 0, o3 = 0, c3 = 0;
          var f2 = 0, u2 = 0, h2 = a3.charCodeAt(0), p2 = false, d2 = 0, v2 = e3.charCodeAt(0);
          e3 = e3.replace(/\r\n/gm, "\n");
          var g2 = t3.dateNF != null ? Ve(t3.dateNF) : null;
          function b2() {
            var r4 = e3.slice(f2, u2);
            var a4 = {};
            if (r4.charAt(0) == '"' && r4.charAt(r4.length - 1) == '"') r4 = r4.slice(1, -1).replace(/""/g, '"');
            if (r4.length === 0) a4.t = "z";
            else if (t3.raw) {
              a4.t = "s";
              a4.v = r4;
            } else if (r4.trim().length === 0) {
              a4.t = "s";
              a4.v = r4;
            } else if (r4.charCodeAt(0) == 61) {
              if (r4.charCodeAt(1) == 34 && r4.charCodeAt(r4.length - 1) == 34) {
                a4.t = "s";
                a4.v = r4.slice(2, -1).replace(/""/g, '"');
              } else if (ys(r4)) {
                a4.t = "n";
                a4.f = r4.slice(1);
              } else {
                a4.t = "s";
                a4.v = r4;
              }
            } else if (r4 == "TRUE") {
              a4.t = "b";
              a4.v = true;
            } else if (r4 == "FALSE") {
              a4.t = "b";
              a4.v = false;
            } else if (!isNaN(c3 = wr(r4))) {
              a4.t = "n";
              if (t3.cellText !== false) a4.w = r4;
              a4.v = c3;
            } else if (!isNaN(kr(r4).getDate()) || g2 && r4.match(g2)) {
              a4.z = t3.dateNF || X[14];
              var n3 = 0;
              if (g2 && r4.match(g2)) {
                r4 = Xe(r4, t3.dateNF, r4.match(g2) || []);
                n3 = 1;
              }
              if (t3.cellDates) {
                a4.t = "d";
                a4.v = mr(r4, n3);
              } else {
                a4.t = "n";
                a4.v = sr(mr(r4, n3));
              }
              if (t3.cellText !== false) a4.w = Be(a4.z, a4.v instanceof Date ? sr(a4.v) : a4.v);
              if (!t3.cellNF) delete a4.z;
            } else {
              a4.t = "s";
              a4.v = r4;
            }
            if (a4.t == "z") {
            } else if (t3.dense) {
              if (!i3[l3]) i3[l3] = [];
              i3[l3][o3] = a4;
            } else i3[Fa({ c: o3, r: l3 })] = a4;
            f2 = u2 + 1;
            v2 = e3.charCodeAt(f2);
            if (s3.e.c < o3) s3.e.c = o3;
            if (s3.e.r < l3) s3.e.r = l3;
            if (d2 == h2) ++o3;
            else {
              o3 = 0;
              ++l3;
              if (t3.sheetRows && t3.sheetRows <= l3) return true;
            }
          }
          e: for (; u2 < e3.length; ++u2) switch (d2 = e3.charCodeAt(u2)) {
            case 34:
              if (v2 === 34) p2 = !p2;
              break;
            case h2:
              ;
            case 10:
              ;
            case 13:
              if (!p2 && b2()) break e;
              break;
            default:
              break;
          }
          if (u2 - f2 > 0) b2();
          i3["!ref"] = Oa(s3);
          return i3;
        }
        function s2(e3, t3) {
          if (!(t3 && t3.PRN)) return i2(e3, t3);
          if (t3.FS) return i2(e3, t3);
          if (e3.slice(0, 4) == "sep=") return i2(e3, t3);
          if (e3.indexOf("	") >= 0 || e3.indexOf(",") >= 0 || e3.indexOf(";") >= 0) return i2(e3, t3);
          return La(r2(e3, t3), t3);
        }
        function l2(e3, r3) {
          var t3 = "", a3 = r3.type == "string" ? [0, 0, 0, 0] : Oo(e3, r3);
          switch (r3.type) {
            case "base64":
              t3 = w(e3);
              break;
            case "binary":
              t3 = e3;
              break;
            case "buffer":
              if (r3.codepage == 65001) t3 = e3.toString("utf8");
              else if (r3.codepage && typeof $cptable !== "undefined") t3 = $cptable.utils.decode(r3.codepage, e3);
              else t3 = y && Buffer.isBuffer(e3) ? e3.toString("binary") : A(e3);
              break;
            case "array":
              t3 = vr(e3);
              break;
            case "string":
              t3 = e3;
              break;
            default:
              throw new Error("Unrecognized type " + r3.type);
          }
          if (a3[0] == 239 && a3[1] == 187 && a3[2] == 191) t3 = ot(t3.slice(3));
          else if (r3.type != "string" && r3.type != "buffer" && r3.codepage == 65001) t3 = ot(t3);
          else if (r3.type == "binary" && typeof $cptable !== "undefined" && r3.codepage) t3 = $cptable.utils.decode(r3.codepage, $cptable.utils.encode(28591, t3));
          if (t3.slice(0, 19) == "socialcalc:version:") return jn.to_sheet(r3.type == "string" ? t3 : ot(t3), r3);
          return s2(t3, r3);
        }
        function o2(e3, r3) {
          return Ia(l2(e3, r3), r3);
        }
        function c2(e3) {
          var r3 = [];
          var t3 = Ma(e3["!ref"]), a3;
          var n3 = Array.isArray(e3);
          for (var i3 = t3.s.r; i3 <= t3.e.r; ++i3) {
            var s3 = [];
            for (var l3 = t3.s.c; l3 <= t3.e.c; ++l3) {
              var o3 = Fa({ r: i3, c: l3 });
              a3 = n3 ? (e3[i3] || [])[l3] : e3[o3];
              if (!a3 || a3.v == null) {
                s3.push("          ");
                continue;
              }
              var c3 = (a3.w || (Pa(a3), a3.w) || "").slice(0, 10);
              while (c3.length < 10) c3 += " ";
              s3.push(c3 + (l3 === 0 ? " " : ""));
            }
            r3.push(s3.join(""));
          }
          return r3.join("\n");
        }
        return { to_workbook: o2, to_sheet: l2, from_sheet: c2 };
      })();
      function Vn(e2, r2) {
        var t2 = r2 || {}, a2 = !!t2.WTF;
        t2.WTF = true;
        try {
          var n2 = Un.to_workbook(e2, t2);
          t2.WTF = a2;
          return n2;
        } catch (i2) {
          t2.WTF = a2;
          if (!i2.message.match(/SYLK bad record ID/) && a2) throw i2;
          return Hn.to_workbook(e2, r2);
        }
      }
      function Xn(e2) {
        var r2 = {}, t2 = e2.match(zr), a2 = 0;
        var i2 = false;
        if (t2) for (; a2 != t2.length; ++a2) {
          var s2 = jr(t2[a2]);
          switch (s2[0].replace(/\w*:/g, "")) {
            case "<condense":
              break;
            case "<extend":
              break;
            case "<shadow":
              if (!s2.val) break;
            case "<shadow>":
              ;
            case "<shadow/>":
              r2.shadow = 1;
              break;
            case "</shadow>":
              break;
            case "<charset":
              if (s2.val == "1") break;
              r2.cp = n[parseInt(s2.val, 10)];
              break;
            case "<outline":
              if (!s2.val) break;
            case "<outline>":
              ;
            case "<outline/>":
              r2.outline = 1;
              break;
            case "</outline>":
              break;
            case "<rFont":
              r2.name = s2.val;
              break;
            case "<sz":
              r2.sz = s2.val;
              break;
            case "<strike":
              if (!s2.val) break;
            case "<strike>":
              ;
            case "<strike/>":
              r2.strike = 1;
              break;
            case "</strike>":
              break;
            case "<u":
              if (!s2.val) break;
              switch (s2.val) {
                case "double":
                  r2.uval = "double";
                  break;
                case "singleAccounting":
                  r2.uval = "single-accounting";
                  break;
                case "doubleAccounting":
                  r2.uval = "double-accounting";
                  break;
              }
              ;
            case "<u>":
              ;
            case "<u/>":
              r2.u = 1;
              break;
            case "</u>":
              break;
            case "<b":
              if (s2.val == "0") break;
            case "<b>":
              ;
            case "<b/>":
              r2.b = 1;
              break;
            case "</b>":
              break;
            case "<i":
              if (s2.val == "0") break;
            case "<i>":
              ;
            case "<i/>":
              r2.i = 1;
              break;
            case "</i>":
              break;
            case "<color":
              if (s2.rgb) r2.color = s2.rgb.slice(2, 8);
              break;
            case "<color>":
              ;
            case "<color/>":
              ;
            case "</color>":
              break;
            case "<family":
              r2.family = s2.val;
              break;
            case "<family>":
              ;
            case "<family/>":
              ;
            case "</family>":
              break;
            case "<vertAlign":
              r2.valign = s2.val;
              break;
            case "<vertAlign>":
              ;
            case "<vertAlign/>":
              ;
            case "</vertAlign>":
              break;
            case "<scheme":
              break;
            case "<scheme>":
              ;
            case "<scheme/>":
              ;
            case "</scheme>":
              break;
            case "<extLst":
              ;
            case "<extLst>":
              ;
            case "</extLst>":
              break;
            case "<ext":
              i2 = true;
              break;
            case "</ext>":
              i2 = false;
              break;
            default:
              if (s2[0].charCodeAt(1) !== 47 && !i2) throw new Error("Unrecognized rich format " + s2[0]);
          }
        }
        return r2;
      }
      var Gn = (function() {
        var e2 = ft("t"), r2 = ft("rPr");
        function t2(t3) {
          var a3 = t3.match(e2);
          if (!a3) return { t: "s", v: "" };
          var n3 = { t: "s", v: Gr(a3[1]) };
          var i2 = t3.match(r2);
          if (i2) n3.s = Xn(i2[1]);
          return n3;
        }
        var a2 = /<(?:\w+:)?r>/g, n2 = /<\/(?:\w+:)?r>/;
        return function i2(e3) {
          return e3.replace(a2, "").split(n2).map(t2).filter(function(e4) {
            return e4.v;
          });
        };
      })();
      var Yn = /* @__PURE__ */ (function Lc() {
        var e2 = /(\r\n|\n)/g;
        function r2(e3, r3, t3) {
          var a2 = [];
          if (e3.u) a2.push("text-decoration: underline;");
          if (e3.uval) a2.push("text-underline-style:" + e3.uval + ";");
          if (e3.sz) a2.push("font-size:" + e3.sz + "pt;");
          if (e3.outline) a2.push("text-effect: outline;");
          if (e3.shadow) a2.push("text-shadow: auto;");
          r3.push('<span style="' + a2.join("") + '">');
          if (e3.b) {
            r3.push("<b>");
            t3.push("</b>");
          }
          if (e3.i) {
            r3.push("<i>");
            t3.push("</i>");
          }
          if (e3.strike) {
            r3.push("<s>");
            t3.push("</s>");
          }
          var n2 = e3.valign || "";
          if (n2 == "superscript" || n2 == "super") n2 = "sup";
          else if (n2 == "subscript") n2 = "sub";
          if (n2 != "") {
            r3.push("<" + n2 + ">");
            t3.push("</" + n2 + ">");
          }
          t3.push("</span>");
          return e3;
        }
        function t2(t3) {
          var a2 = [[], t3.v, []];
          if (!t3.v) return "";
          if (t3.s) r2(t3.s, a2[0], a2[2]);
          return a2[0].join("") + a2[1].replace(e2, "<br/>") + a2[2].join("");
        }
        return function a2(e3) {
          return e3.map(t2).join("");
        };
      })();
      var Jn = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g, Kn = /<(?:\w+:)?r>/;
      var qn = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
      function Zn(e2, r2) {
        var t2 = r2 ? r2.cellHTML : true;
        var a2 = {};
        if (!e2) return { t: "" };
        if (e2.match(/^\s*<(?:\w+:)?t[^>]*>/)) {
          a2.t = Gr(ot(e2.slice(e2.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || ""));
          a2.r = ot(e2);
          if (t2) a2.h = Qr(a2.t);
        } else if (e2.match(Kn)) {
          a2.r = ot(e2);
          a2.t = Gr(ot((e2.replace(qn, "").match(Jn) || []).join("").replace(zr, "")));
          if (t2) a2.h = Yn(Gn(a2.r));
        }
        return a2;
      }
      var Qn = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/;
      var ei = /<(?:\w+:)?(?:si|sstItem)>/g;
      var ri = /<\/(?:\w+:)?(?:si|sstItem)>/;
      function ti(e2, r2) {
        var t2 = [], a2 = "";
        if (!e2) return t2;
        var n2 = e2.match(Qn);
        if (n2) {
          a2 = n2[2].replace(ei, "").split(ri);
          for (var i2 = 0; i2 != a2.length; ++i2) {
            var s2 = Zn(a2[i2].trim(), r2);
            if (s2 != null) t2[t2.length] = s2;
          }
          n2 = jr(n2[1]);
          t2.Count = n2.count;
          t2.Unique = n2.uniqueCount;
        }
        return t2;
      }
      var ai = /^\s|\s$|[\t\n\r]/;
      function ni(e2, r2) {
        if (!r2.bookSST) return "";
        var t2 = [Rr];
        t2[t2.length] = wt("sst", null, { xmlns: _t[0], count: e2.Count, uniqueCount: e2.Unique });
        for (var a2 = 0; a2 != e2.length; ++a2) {
          if (e2[a2] == null) continue;
          var n2 = e2[a2];
          var i2 = "<si>";
          if (n2.r) i2 += n2.r;
          else {
            i2 += "<t";
            if (!n2.t) n2.t = "";
            if (n2.t.match(ai)) i2 += ' xml:space="preserve"';
            i2 += ">" + Kr(n2.t) + "</t>";
          }
          i2 += "</si>";
          t2[t2.length] = i2;
        }
        if (t2.length > 2) {
          t2[t2.length] = "</sst>";
          t2[1] = t2[1].replace("/>", ">");
        }
        return t2.join("");
      }
      function ii(e2) {
        var r2 = e2.slice(e2[0] === "#" ? 1 : 0).slice(0, 6);
        return [parseInt(r2.slice(0, 2), 16), parseInt(r2.slice(2, 4), 16), parseInt(r2.slice(4, 6), 16)];
      }
      function si(e2) {
        for (var r2 = 0, t2 = 1; r2 != 3; ++r2) t2 = t2 * 256 + (e2[r2] > 255 ? 255 : e2[r2] < 0 ? 0 : e2[r2]);
        return t2.toString(16).toUpperCase().slice(1);
      }
      function li(e2) {
        var r2 = e2[0] / 255, t2 = e2[1] / 255, a2 = e2[2] / 255;
        var n2 = Math.max(r2, t2, a2), i2 = Math.min(r2, t2, a2), s2 = n2 - i2;
        if (s2 === 0) return [0, 0, r2];
        var l2 = 0, o2 = 0, c2 = n2 + i2;
        o2 = s2 / (c2 > 1 ? 2 - c2 : c2);
        switch (n2) {
          case r2:
            l2 = ((t2 - a2) / s2 + 6) % 6;
            break;
          case t2:
            l2 = (a2 - r2) / s2 + 2;
            break;
          case a2:
            l2 = (r2 - t2) / s2 + 4;
            break;
        }
        return [l2 / 6, o2, c2 / 2];
      }
      function oi(e2) {
        var r2 = e2[0], t2 = e2[1], a2 = e2[2];
        var n2 = t2 * 2 * (a2 < 0.5 ? a2 : 1 - a2), i2 = a2 - n2 / 2;
        var s2 = [i2, i2, i2], l2 = 6 * r2;
        var o2;
        if (t2 !== 0) switch (l2 | 0) {
          case 0:
            ;
          case 6:
            o2 = n2 * l2;
            s2[0] += n2;
            s2[1] += o2;
            break;
          case 1:
            o2 = n2 * (2 - l2);
            s2[0] += o2;
            s2[1] += n2;
            break;
          case 2:
            o2 = n2 * (l2 - 2);
            s2[1] += n2;
            s2[2] += o2;
            break;
          case 3:
            o2 = n2 * (4 - l2);
            s2[1] += o2;
            s2[2] += n2;
            break;
          case 4:
            o2 = n2 * (l2 - 4);
            s2[2] += n2;
            s2[0] += o2;
            break;
          case 5:
            o2 = n2 * (6 - l2);
            s2[2] += o2;
            s2[0] += n2;
            break;
        }
        for (var c2 = 0; c2 != 3; ++c2) s2[c2] = Math.round(s2[c2] * 255);
        return s2;
      }
      function ci(e2, r2) {
        if (r2 === 0) return e2;
        var t2 = li(ii(e2));
        if (r2 < 0) t2[2] = t2[2] * (1 + r2);
        else t2[2] = 1 - (1 - t2[2]) * (1 - r2);
        return si(oi(t2));
      }
      var fi = 6, ui = 15, hi = 1, pi = fi;
      function di(e2) {
        return Math.floor((e2 + Math.round(128 / pi) / 256) * pi);
      }
      function mi(e2) {
        return Math.floor((e2 - 5) / pi * 100 + 0.5) / 100;
      }
      function vi(e2) {
        return Math.round((e2 * pi + 5) / pi * 256) / 256;
      }
      function gi(e2) {
        return vi(mi(di(e2)));
      }
      function bi(e2) {
        var r2 = Math.abs(e2 - gi(e2)), t2 = pi;
        if (r2 > 5e-3) {
          for (pi = hi; pi < ui; ++pi) if (Math.abs(e2 - gi(e2)) <= r2) {
            r2 = Math.abs(e2 - gi(e2));
            t2 = pi;
          }
        }
        pi = t2;
      }
      function wi(e2) {
        if (e2.width) {
          e2.wpx = di(e2.width);
          e2.wch = mi(e2.wpx);
          e2.MDW = pi;
        } else if (e2.wpx) {
          e2.wch = mi(e2.wpx);
          e2.width = vi(e2.wch);
          e2.MDW = pi;
        } else if (typeof e2.wch == "number") {
          e2.width = vi(e2.wch);
          e2.wpx = di(e2.width);
          e2.MDW = pi;
        }
        if (e2.customWidth) delete e2.customWidth;
      }
      var yi = 96, ki = yi;
      function xi(e2) {
        return e2 * 96 / ki;
      }
      function Si(e2) {
        return e2 * ki / 96;
      }
      var Ci = { None: "none", Solid: "solid", Gray50: "mediumGray", Gray75: "darkGray", Gray25: "lightGray", HorzStripe: "darkHorizontal", VertStripe: "darkVertical", ReverseDiagStripe: "darkDown", DiagStripe: "darkUp", DiagCross: "darkGrid", ThickDiagCross: "darkTrellis", ThinHorzStripe: "lightHorizontal", ThinVertStripe: "lightVertical", ThinReverseDiagStripe: "lightDown", ThinHorzCross: "lightGrid" };
      function _i(e2, r2, t2, a2) {
        r2.Borders = [];
        var n2 = {};
        var i2 = false;
        (e2[0].match(zr) || []).forEach(function(e3) {
          var t3 = jr(e3);
          switch (Hr(t3[0])) {
            case "<borders":
              ;
            case "<borders>":
              ;
            case "</borders>":
              break;
            case "<border":
              ;
            case "<border>":
              ;
            case "<border/>":
              n2 = {};
              if (t3.diagonalUp) n2.diagonalUp = at(t3.diagonalUp);
              if (t3.diagonalDown) n2.diagonalDown = at(t3.diagonalDown);
              r2.Borders.push(n2);
              break;
            case "</border>":
              break;
            case "<left/>":
              break;
            case "<left":
              ;
            case "<left>":
              break;
            case "</left>":
              break;
            case "<right/>":
              break;
            case "<right":
              ;
            case "<right>":
              break;
            case "</right>":
              break;
            case "<top/>":
              break;
            case "<top":
              ;
            case "<top>":
              break;
            case "</top>":
              break;
            case "<bottom/>":
              break;
            case "<bottom":
              ;
            case "<bottom>":
              break;
            case "</bottom>":
              break;
            case "<diagonal":
              ;
            case "<diagonal>":
              ;
            case "<diagonal/>":
              break;
            case "</diagonal>":
              break;
            case "<horizontal":
              ;
            case "<horizontal>":
              ;
            case "<horizontal/>":
              break;
            case "</horizontal>":
              break;
            case "<vertical":
              ;
            case "<vertical>":
              ;
            case "<vertical/>":
              break;
            case "</vertical>":
              break;
            case "<start":
              ;
            case "<start>":
              ;
            case "<start/>":
              break;
            case "</start>":
              break;
            case "<end":
              ;
            case "<end>":
              ;
            case "<end/>":
              break;
            case "</end>":
              break;
            case "<color":
              ;
            case "<color>":
              break;
            case "<color/>":
              ;
            case "</color>":
              break;
            case "<extLst":
              ;
            case "<extLst>":
              ;
            case "</extLst>":
              break;
            case "<ext":
              i2 = true;
              break;
            case "</ext>":
              i2 = false;
              break;
            default:
              if (a2 && a2.WTF) {
                if (!i2) throw new Error("unrecognized " + t3[0] + " in borders");
              }
              ;
          }
        });
      }
      function Ai(e2, r2, t2, a2) {
        r2.Fills = [];
        var n2 = {};
        var i2 = false;
        (e2[0].match(zr) || []).forEach(function(e3) {
          var t3 = jr(e3);
          switch (Hr(t3[0])) {
            case "<fills":
              ;
            case "<fills>":
              ;
            case "</fills>":
              break;
            case "<fill>":
              ;
            case "<fill":
              ;
            case "<fill/>":
              n2 = {};
              r2.Fills.push(n2);
              break;
            case "</fill>":
              break;
            case "<gradientFill>":
              break;
            case "<gradientFill":
              ;
            case "</gradientFill>":
              r2.Fills.push(n2);
              n2 = {};
              break;
            case "<patternFill":
              ;
            case "<patternFill>":
              if (t3.patternType) n2.patternType = t3.patternType;
              break;
            case "<patternFill/>":
              ;
            case "</patternFill>":
              break;
            case "<bgColor":
              if (!n2.bgColor) n2.bgColor = {};
              if (t3.indexed) n2.bgColor.indexed = parseInt(t3.indexed, 10);
              if (t3.theme) n2.bgColor.theme = parseInt(t3.theme, 10);
              if (t3.tint) n2.bgColor.tint = parseFloat(t3.tint);
              if (t3.rgb) n2.bgColor.rgb = t3.rgb.slice(-6);
              break;
            case "<bgColor/>":
              ;
            case "</bgColor>":
              break;
            case "<fgColor":
              if (!n2.fgColor) n2.fgColor = {};
              if (t3.theme) n2.fgColor.theme = parseInt(t3.theme, 10);
              if (t3.tint) n2.fgColor.tint = parseFloat(t3.tint);
              if (t3.rgb != null) n2.fgColor.rgb = t3.rgb.slice(-6);
              break;
            case "<fgColor/>":
              ;
            case "</fgColor>":
              break;
            case "<stop":
              ;
            case "<stop/>":
              break;
            case "</stop>":
              break;
            case "<color":
              ;
            case "<color/>":
              break;
            case "</color>":
              break;
            case "<extLst":
              ;
            case "<extLst>":
              ;
            case "</extLst>":
              break;
            case "<ext":
              i2 = true;
              break;
            case "</ext>":
              i2 = false;
              break;
            default:
              if (a2 && a2.WTF) {
                if (!i2) throw new Error("unrecognized " + t3[0] + " in fills");
              }
              ;
          }
        });
      }
      function Ti(e2, r2, t2, a2) {
        r2.Fonts = [];
        var i2 = {};
        var s2 = false;
        (e2[0].match(zr) || []).forEach(function(e3) {
          var l2 = jr(e3);
          switch (Hr(l2[0])) {
            case "<fonts":
              ;
            case "<fonts>":
              ;
            case "</fonts>":
              break;
            case "<font":
              ;
            case "<font>":
              break;
            case "</font>":
              ;
            case "<font/>":
              r2.Fonts.push(i2);
              i2 = {};
              break;
            case "<name":
              if (l2.val) i2.name = ot(l2.val);
              break;
            case "<name/>":
              ;
            case "</name>":
              break;
            case "<b":
              i2.bold = l2.val ? at(l2.val) : 1;
              break;
            case "<b/>":
              i2.bold = 1;
              break;
            case "<i":
              i2.italic = l2.val ? at(l2.val) : 1;
              break;
            case "<i/>":
              i2.italic = 1;
              break;
            case "<u":
              switch (l2.val) {
                case "none":
                  i2.underline = 0;
                  break;
                case "single":
                  i2.underline = 1;
                  break;
                case "double":
                  i2.underline = 2;
                  break;
                case "singleAccounting":
                  i2.underline = 33;
                  break;
                case "doubleAccounting":
                  i2.underline = 34;
                  break;
              }
              break;
            case "<u/>":
              i2.underline = 1;
              break;
            case "<strike":
              i2.strike = l2.val ? at(l2.val) : 1;
              break;
            case "<strike/>":
              i2.strike = 1;
              break;
            case "<outline":
              i2.outline = l2.val ? at(l2.val) : 1;
              break;
            case "<outline/>":
              i2.outline = 1;
              break;
            case "<shadow":
              i2.shadow = l2.val ? at(l2.val) : 1;
              break;
            case "<shadow/>":
              i2.shadow = 1;
              break;
            case "<condense":
              i2.condense = l2.val ? at(l2.val) : 1;
              break;
            case "<condense/>":
              i2.condense = 1;
              break;
            case "<extend":
              i2.extend = l2.val ? at(l2.val) : 1;
              break;
            case "<extend/>":
              i2.extend = 1;
              break;
            case "<sz":
              if (l2.val) i2.sz = +l2.val;
              break;
            case "<sz/>":
              ;
            case "</sz>":
              break;
            case "<vertAlign":
              if (l2.val) i2.vertAlign = l2.val;
              break;
            case "<vertAlign/>":
              ;
            case "</vertAlign>":
              break;
            case "<family":
              if (l2.val) i2.family = parseInt(l2.val, 10);
              break;
            case "<family/>":
              ;
            case "</family>":
              break;
            case "<scheme":
              if (l2.val) i2.scheme = l2.val;
              break;
            case "<scheme/>":
              ;
            case "</scheme>":
              break;
            case "<charset":
              if (l2.val == "1") break;
              l2.codepage = n[parseInt(l2.val, 10)];
              break;
            case "<color":
              if (!i2.color) i2.color = {};
              if (l2.auto) i2.color.auto = at(l2.auto);
              if (l2.rgb) i2.color.rgb = l2.rgb.slice(-6);
              else if (l2.indexed) {
                i2.color.index = parseInt(l2.indexed, 10);
                var o2 = sn[i2.color.index];
                if (i2.color.index == 81) o2 = sn[1];
                if (!o2) o2 = sn[1];
                i2.color.rgb = o2[0].toString(16) + o2[1].toString(16) + o2[2].toString(16);
              } else if (l2.theme) {
                i2.color.theme = parseInt(l2.theme, 10);
                if (l2.tint) i2.color.tint = parseFloat(l2.tint);
                if (l2.theme && t2.themeElements && t2.themeElements.clrScheme) {
                  i2.color.rgb = ci(t2.themeElements.clrScheme[i2.color.theme].rgb, i2.color.tint || 0);
                }
              }
              break;
            case "<color/>":
              ;
            case "</color>":
              break;
            case "<AlternateContent":
              s2 = true;
              break;
            case "</AlternateContent>":
              s2 = false;
              break;
            case "<extLst":
              ;
            case "<extLst>":
              ;
            case "</extLst>":
              break;
            case "<ext":
              s2 = true;
              break;
            case "</ext>":
              s2 = false;
              break;
            default:
              if (a2 && a2.WTF) {
                if (!s2) throw new Error("unrecognized " + l2[0] + " in fonts");
              }
              ;
          }
        });
      }
      function Ei(e2, r2, t2) {
        r2.NumberFmt = [];
        var a2 = er(X);
        for (var n2 = 0; n2 < a2.length; ++n2) r2.NumberFmt[a2[n2]] = X[a2[n2]];
        var i2 = e2[0].match(zr);
        if (!i2) return;
        for (n2 = 0; n2 < i2.length; ++n2) {
          var s2 = jr(i2[n2]);
          switch (Hr(s2[0])) {
            case "<numFmts":
              ;
            case "</numFmts>":
              ;
            case "<numFmts/>":
              ;
            case "<numFmts>":
              break;
            case "<numFmt":
              {
                var l2 = Gr(ot(s2.formatCode)), o2 = parseInt(s2.numFmtId, 10);
                r2.NumberFmt[o2] = l2;
                if (o2 > 0) {
                  if (o2 > 392) {
                    for (o2 = 392; o2 > 60; --o2) if (r2.NumberFmt[o2] == null) break;
                    r2.NumberFmt[o2] = l2;
                  }
                  $e(l2, o2);
                }
              }
              break;
            case "</numFmt>":
              break;
            default:
              if (t2.WTF) throw new Error("unrecognized " + s2[0] + " in numFmts");
          }
        }
      }
      function Fi(e2) {
        var r2 = ["<numFmts>"];
        [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(t2) {
          for (var a2 = t2[0]; a2 <= t2[1]; ++a2) if (e2[a2] != null) r2[r2.length] = wt("numFmt", null, { numFmtId: a2, formatCode: Kr(e2[a2]) });
        });
        if (r2.length === 1) return "";
        r2[r2.length] = "</numFmts>";
        r2[0] = wt("numFmts", null, { count: r2.length - 2 }).replace("/>", ">");
        return r2.join("");
      }
      var Di = ["numFmtId", "fillId", "fontId", "borderId", "xfId"];
      var Oi = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
      function Mi(e2, r2, t2) {
        r2.CellXf = [];
        var a2;
        var n2 = false;
        (e2[0].match(zr) || []).forEach(function(e3) {
          var i2 = jr(e3), s2 = 0;
          switch (Hr(i2[0])) {
            case "<cellXfs":
              ;
            case "<cellXfs>":
              ;
            case "<cellXfs/>":
              ;
            case "</cellXfs>":
              break;
            case "<xf":
              ;
            case "<xf/>":
              a2 = i2;
              delete a2[0];
              for (s2 = 0; s2 < Di.length; ++s2) if (a2[Di[s2]]) a2[Di[s2]] = parseInt(a2[Di[s2]], 10);
              for (s2 = 0; s2 < Oi.length; ++s2) if (a2[Oi[s2]]) a2[Oi[s2]] = at(a2[Oi[s2]]);
              if (r2.NumberFmt && a2.numFmtId > 392) {
                for (s2 = 392; s2 > 60; --s2) if (r2.NumberFmt[a2.numFmtId] == r2.NumberFmt[s2]) {
                  a2.numFmtId = s2;
                  break;
                }
              }
              r2.CellXf.push(a2);
              break;
            case "</xf>":
              break;
            case "<alignment":
              ;
            case "<alignment/>":
              var l2 = {};
              if (i2.vertical) l2.vertical = i2.vertical;
              if (i2.horizontal) l2.horizontal = i2.horizontal;
              if (i2.textRotation != null) l2.textRotation = i2.textRotation;
              if (i2.indent) l2.indent = i2.indent;
              if (i2.wrapText) l2.wrapText = at(i2.wrapText);
              a2.alignment = l2;
              break;
            case "</alignment>":
              break;
            case "<protection":
              break;
            case "</protection>":
              ;
            case "<protection/>":
              break;
            case "<AlternateContent":
              n2 = true;
              break;
            case "</AlternateContent>":
              n2 = false;
              break;
            case "<extLst":
              ;
            case "<extLst>":
              ;
            case "</extLst>":
              break;
            case "<ext":
              n2 = true;
              break;
            case "</ext>":
              n2 = false;
              break;
            default:
              if (t2 && t2.WTF) {
                if (!n2) throw new Error("unrecognized " + i2[0] + " in cellXfs");
              }
              ;
          }
        });
      }
      function Ni(e2) {
        var r2 = [];
        r2[r2.length] = wt("cellXfs", null);
        e2.forEach(function(e3) {
          r2[r2.length] = wt("xf", null, e3);
        });
        r2[r2.length] = "</cellXfs>";
        if (r2.length === 2) return "";
        r2[0] = wt("cellXfs", null, { count: r2.length - 2 }).replace("/>", ">");
        return r2.join("");
      }
      var Pi = /* @__PURE__ */ (function Bc() {
        var e2 = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/;
        var r2 = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/;
        var t2 = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/;
        var a2 = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/;
        var n2 = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
        return function i2(s2, l2, o2) {
          var c2 = {};
          if (!s2) return c2;
          s2 = s2.replace(/<!--([\s\S]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
          var f2;
          if (f2 = s2.match(e2)) Ei(f2, c2, o2);
          if (f2 = s2.match(a2)) Ti(f2, c2, l2, o2);
          if (f2 = s2.match(t2)) Ai(f2, c2, l2, o2);
          if (f2 = s2.match(n2)) _i(f2, c2, l2, o2);
          if (f2 = s2.match(r2)) Mi(f2, c2, o2);
          return c2;
        };
      })();
      function Ii(e2, r2) {
        var t2 = [Rr, wt("styleSheet", null, { xmlns: _t[0], "xmlns:vt": Ct.vt })], a2;
        if (e2.SSF && (a2 = Fi(e2.SSF)) != null) t2[t2.length] = a2;
        t2[t2.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>';
        t2[t2.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>';
        t2[t2.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>';
        t2[t2.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>';
        if (a2 = Ni(r2.cellXfs)) t2[t2.length] = a2;
        t2[t2.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>';
        t2[t2.length] = '<dxfs count="0"/>';
        t2[t2.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>';
        if (t2.length > 2) {
          t2[t2.length] = "</styleSheet>";
          t2[1] = t2[1].replace("/>", ">");
        }
        return t2.join("");
      }
      var Ri = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];
      function Li(e2, r2, t2) {
        r2.themeElements.clrScheme = [];
        var a2 = {};
        (e2[0].match(zr) || []).forEach(function(e3) {
          var n2 = jr(e3);
          switch (n2[0]) {
            case "<a:clrScheme":
              ;
            case "</a:clrScheme>":
              break;
            case "<a:srgbClr":
              a2.rgb = n2.val;
              break;
            case "<a:sysClr":
              a2.rgb = n2.lastClr;
              break;
            case "<a:dk1>":
              ;
            case "</a:dk1>":
              ;
            case "<a:lt1>":
              ;
            case "</a:lt1>":
              ;
            case "<a:dk2>":
              ;
            case "</a:dk2>":
              ;
            case "<a:lt2>":
              ;
            case "</a:lt2>":
              ;
            case "<a:accent1>":
              ;
            case "</a:accent1>":
              ;
            case "<a:accent2>":
              ;
            case "</a:accent2>":
              ;
            case "<a:accent3>":
              ;
            case "</a:accent3>":
              ;
            case "<a:accent4>":
              ;
            case "</a:accent4>":
              ;
            case "<a:accent5>":
              ;
            case "</a:accent5>":
              ;
            case "<a:accent6>":
              ;
            case "</a:accent6>":
              ;
            case "<a:hlink>":
              ;
            case "</a:hlink>":
              ;
            case "<a:folHlink>":
              ;
            case "</a:folHlink>":
              if (n2[0].charAt(1) === "/") {
                r2.themeElements.clrScheme[Ri.indexOf(n2[0])] = a2;
                a2 = {};
              } else {
                a2.name = n2[0].slice(3, n2[0].length - 1);
              }
              break;
            default:
              if (t2 && t2.WTF) throw new Error("Unrecognized " + n2[0] + " in clrScheme");
          }
        });
      }
      function Bi() {
      }
      function $i() {
      }
      var zi = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/;
      var Ui = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/;
      var Wi = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
      function ji(e2, r2, t2) {
        r2.themeElements = {};
        var a2;
        [["clrScheme", zi, Li], ["fontScheme", Ui, Bi], ["fmtScheme", Wi, $i]].forEach(function(n2) {
          if (!(a2 = e2.match(n2[1]))) throw new Error(n2[0] + " not found in themeElements");
          n2[2](a2, r2, t2);
        });
      }
      var Hi = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
      function Vi(e2, r2) {
        if (!e2 || e2.length === 0) e2 = Xi();
        var t2;
        var a2 = {};
        if (!(t2 = e2.match(Hi))) throw new Error("themeElements not found in theme");
        ji(t2[0], a2, r2);
        a2.raw = e2;
        return a2;
      }
      function Xi(e2, r2) {
        if (r2 && r2.themeXLSX) return r2.themeXLSX;
        if (e2 && typeof e2.raw == "string") return e2.raw;
        var t2 = [Rr];
        t2[t2.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">';
        t2[t2.length] = "<a:themeElements>";
        t2[t2.length] = '<a:clrScheme name="Office">';
        t2[t2.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>';
        t2[t2.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>';
        t2[t2.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>';
        t2[t2.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>';
        t2[t2.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>';
        t2[t2.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>';
        t2[t2.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>';
        t2[t2.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>';
        t2[t2.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>';
        t2[t2.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>';
        t2[t2.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>';
        t2[t2.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>';
        t2[t2.length] = "</a:clrScheme>";
        t2[t2.length] = '<a:fontScheme name="Office">';
        t2[t2.length] = "<a:majorFont>";
        t2[t2.length] = '<a:latin typeface="Cambria"/>';
        t2[t2.length] = '<a:ea typeface=""/>';
        t2[t2.length] = '<a:cs typeface=""/>';
        t2[t2.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
        t2[t2.length] = '<a:font script="Hang" typeface="맑은 고딕"/>';
        t2[t2.length] = '<a:font script="Hans" typeface="宋体"/>';
        t2[t2.length] = '<a:font script="Hant" typeface="新細明體"/>';
        t2[t2.length] = '<a:font script="Arab" typeface="Times New Roman"/>';
        t2[t2.length] = '<a:font script="Hebr" typeface="Times New Roman"/>';
        t2[t2.length] = '<a:font script="Thai" typeface="Tahoma"/>';
        t2[t2.length] = '<a:font script="Ethi" typeface="Nyala"/>';
        t2[t2.length] = '<a:font script="Beng" typeface="Vrinda"/>';
        t2[t2.length] = '<a:font script="Gujr" typeface="Shruti"/>';
        t2[t2.length] = '<a:font script="Khmr" typeface="MoolBoran"/>';
        t2[t2.length] = '<a:font script="Knda" typeface="Tunga"/>';
        t2[t2.length] = '<a:font script="Guru" typeface="Raavi"/>';
        t2[t2.length] = '<a:font script="Cans" typeface="Euphemia"/>';
        t2[t2.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
        t2[t2.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
        t2[t2.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
        t2[t2.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
        t2[t2.length] = '<a:font script="Deva" typeface="Mangal"/>';
        t2[t2.length] = '<a:font script="Telu" typeface="Gautami"/>';
        t2[t2.length] = '<a:font script="Taml" typeface="Latha"/>';
        t2[t2.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
        t2[t2.length] = '<a:font script="Orya" typeface="Kalinga"/>';
        t2[t2.length] = '<a:font script="Mlym" typeface="Kartika"/>';
        t2[t2.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
        t2[t2.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
        t2[t2.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
        t2[t2.length] = '<a:font script="Viet" typeface="Times New Roman"/>';
        t2[t2.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
        t2[t2.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
        t2[t2.length] = "</a:majorFont>";
        t2[t2.length] = "<a:minorFont>";
        t2[t2.length] = '<a:latin typeface="Calibri"/>';
        t2[t2.length] = '<a:ea typeface=""/>';
        t2[t2.length] = '<a:cs typeface=""/>';
        t2[t2.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
        t2[t2.length] = '<a:font script="Hang" typeface="맑은 고딕"/>';
        t2[t2.length] = '<a:font script="Hans" typeface="宋体"/>';
        t2[t2.length] = '<a:font script="Hant" typeface="新細明體"/>';
        t2[t2.length] = '<a:font script="Arab" typeface="Arial"/>';
        t2[t2.length] = '<a:font script="Hebr" typeface="Arial"/>';
        t2[t2.length] = '<a:font script="Thai" typeface="Tahoma"/>';
        t2[t2.length] = '<a:font script="Ethi" typeface="Nyala"/>';
        t2[t2.length] = '<a:font script="Beng" typeface="Vrinda"/>';
        t2[t2.length] = '<a:font script="Gujr" typeface="Shruti"/>';
        t2[t2.length] = '<a:font script="Khmr" typeface="DaunPenh"/>';
        t2[t2.length] = '<a:font script="Knda" typeface="Tunga"/>';
        t2[t2.length] = '<a:font script="Guru" typeface="Raavi"/>';
        t2[t2.length] = '<a:font script="Cans" typeface="Euphemia"/>';
        t2[t2.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
        t2[t2.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
        t2[t2.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
        t2[t2.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
        t2[t2.length] = '<a:font script="Deva" typeface="Mangal"/>';
        t2[t2.length] = '<a:font script="Telu" typeface="Gautami"/>';
        t2[t2.length] = '<a:font script="Taml" typeface="Latha"/>';
        t2[t2.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
        t2[t2.length] = '<a:font script="Orya" typeface="Kalinga"/>';
        t2[t2.length] = '<a:font script="Mlym" typeface="Kartika"/>';
        t2[t2.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
        t2[t2.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
        t2[t2.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
        t2[t2.length] = '<a:font script="Viet" typeface="Arial"/>';
        t2[t2.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
        t2[t2.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
        t2[t2.length] = "</a:minorFont>";
        t2[t2.length] = "</a:fontScheme>";
        t2[t2.length] = '<a:fmtScheme name="Office">';
        t2[t2.length] = "<a:fillStyleLst>";
        t2[t2.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
        t2[t2.length] = '<a:gradFill rotWithShape="1">';
        t2[t2.length] = "<a:gsLst>";
        t2[t2.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
        t2[t2.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
        t2[t2.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
        t2[t2.length] = "</a:gsLst>";
        t2[t2.length] = '<a:lin ang="16200000" scaled="1"/>';
        t2[t2.length] = "</a:gradFill>";
        t2[t2.length] = '<a:gradFill rotWithShape="1">';
        t2[t2.length] = "<a:gsLst>";
        t2[t2.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>';
        t2[t2.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
        t2[t2.length] = "</a:gsLst>";
        t2[t2.length] = '<a:lin ang="16200000" scaled="0"/>';
        t2[t2.length] = "</a:gradFill>";
        t2[t2.length] = "</a:fillStyleLst>";
        t2[t2.length] = "<a:lnStyleLst>";
        t2[t2.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>';
        t2[t2.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
        t2[t2.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
        t2[t2.length] = "</a:lnStyleLst>";
        t2[t2.length] = "<a:effectStyleLst>";
        t2[t2.length] = "<a:effectStyle>";
        t2[t2.length] = "<a:effectLst>";
        t2[t2.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>';
        t2[t2.length] = "</a:effectLst>";
        t2[t2.length] = "</a:effectStyle>";
        t2[t2.length] = "<a:effectStyle>";
        t2[t2.length] = "<a:effectLst>";
        t2[t2.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
        t2[t2.length] = "</a:effectLst>";
        t2[t2.length] = "</a:effectStyle>";
        t2[t2.length] = "<a:effectStyle>";
        t2[t2.length] = "<a:effectLst>";
        t2[t2.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
        t2[t2.length] = "</a:effectLst>";
        t2[t2.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>';
        t2[t2.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>';
        t2[t2.length] = "</a:effectStyle>";
        t2[t2.length] = "</a:effectStyleLst>";
        t2[t2.length] = "<a:bgFillStyleLst>";
        t2[t2.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
        t2[t2.length] = '<a:gradFill rotWithShape="1">';
        t2[t2.length] = "<a:gsLst>";
        t2[t2.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
        t2[t2.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
        t2[t2.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>';
        t2[t2.length] = "</a:gsLst>";
        t2[t2.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>';
        t2[t2.length] = "</a:gradFill>";
        t2[t2.length] = '<a:gradFill rotWithShape="1">';
        t2[t2.length] = "<a:gsLst>";
        t2[t2.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
        t2[t2.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>';
        t2[t2.length] = "</a:gsLst>";
        t2[t2.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>';
        t2[t2.length] = "</a:gradFill>";
        t2[t2.length] = "</a:bgFillStyleLst>";
        t2[t2.length] = "</a:fmtScheme>";
        t2[t2.length] = "</a:themeElements>";
        t2[t2.length] = "<a:objectDefaults>";
        t2[t2.length] = "<a:spDef>";
        t2[t2.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>';
        t2[t2.length] = "</a:spDef>";
        t2[t2.length] = "<a:lnDef>";
        t2[t2.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>';
        t2[t2.length] = "</a:lnDef>";
        t2[t2.length] = "</a:objectDefaults>";
        t2[t2.length] = "<a:extraClrSchemeLst/>";
        t2[t2.length] = "</a:theme>";
        return t2.join("");
      }
      function Gi(e2, r2, t2) {
        var a2 = { Types: [], Cell: [], Value: [] };
        if (!e2) return a2;
        var n2 = false;
        var i2 = 2;
        var s2;
        e2.replace(zr, function(e3) {
          var r3 = jr(e3);
          switch (Hr(r3[0])) {
            case "<?xml":
              break;
            case "<metadata":
              ;
            case "</metadata>":
              break;
            case "<metadataTypes":
              ;
            case "</metadataTypes>":
              break;
            case "<metadataType":
              a2.Types.push({ name: r3.name });
              break;
            case "</metadataType>":
              break;
            case "<futureMetadata":
              for (var l2 = 0; l2 < a2.Types.length; ++l2) if (a2.Types[l2].name == r3.name) s2 = a2.Types[l2];
              break;
            case "</futureMetadata>":
              break;
            case "<bk>":
              break;
            case "</bk>":
              break;
            case "<rc":
              if (i2 == 1) a2.Cell.push({ type: a2.Types[r3.t - 1].name, index: +r3.v });
              else if (i2 == 0) a2.Value.push({ type: a2.Types[r3.t - 1].name, index: +r3.v });
              break;
            case "</rc>":
              break;
            case "<cellMetadata":
              i2 = 1;
              break;
            case "</cellMetadata>":
              i2 = 2;
              break;
            case "<valueMetadata":
              i2 = 0;
              break;
            case "</valueMetadata>":
              i2 = 2;
              break;
            case "<extLst":
              ;
            case "<extLst>":
              ;
            case "</extLst>":
              ;
            case "<extLst/>":
              break;
            case "<ext":
              n2 = true;
              break;
            case "</ext>":
              n2 = false;
              break;
            case "<rvb":
              if (!s2) break;
              if (!s2.offsets) s2.offsets = [];
              s2.offsets.push(+r3.i);
              break;
            default:
              if (!n2 && t2.WTF) throw new Error("unrecognized " + r3[0] + " in metadata");
          }
          return e3;
        });
        return a2;
      }
      function Yi() {
        var e2 = [Rr];
        e2.push('<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">\n  <metadataTypes count="1">\n    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>\n  </metadataTypes>\n  <futureMetadata name="XLDAPR" count="1">\n    <bk>\n      <extLst>\n        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">\n          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>\n        </ext>\n      </extLst>\n    </bk>\n  </futureMetadata>\n  <cellMetadata count="1">\n    <bk>\n      <rc t="1" v="0"/>\n    </bk>\n  </cellMetadata>\n</metadata>');
        return e2.join("");
      }
      function Ji() {
      }
      function Ki(e2, r2, t2, a2) {
        if (!e2) return e2;
        var n2 = a2 || {};
        var i2 = false, s2 = false;
        ha(e2, function l2(e3, r3, t3) {
          if (s2) return;
          switch (t3) {
            case 359:
              ;
            case 363:
              ;
            case 364:
              ;
            case 366:
              ;
            case 367:
              ;
            case 368:
              ;
            case 369:
              ;
            case 370:
              ;
            case 371:
              ;
            case 472:
              ;
            case 577:
              ;
            case 578:
              ;
            case 579:
              ;
            case 580:
              ;
            case 581:
              ;
            case 582:
              ;
            case 583:
              ;
            case 584:
              ;
            case 585:
              ;
            case 586:
              ;
            case 587:
              break;
            case 35:
              i2 = true;
              break;
            case 36:
              i2 = false;
              break;
            default:
              if (r3.T) {
              } else if (!i2 || n2.WTF) throw new Error("Unexpected record 0x" + t3.toString(16));
          }
        }, n2);
      }
      function qi(e2, r2) {
        if (!e2) return "??";
        var t2 = (e2.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
        return r2["!id"][t2].Target;
      }
      var Zi = 1024;
      function Qi(e2, r2) {
        var t2 = [21600, 21600];
        var a2 = ["m0,0l0", t2[1], t2[0], t2[1], t2[0], "0xe"].join(",");
        var n2 = [wt("xml", null, { "xmlns:v": At.v, "xmlns:o": At.o, "xmlns:x": At.x, "xmlns:mv": At.mv }).replace(/\/>/, ">"), wt("o:shapelayout", wt("o:idmap", null, { "v:ext": "edit", data: e2 }), { "v:ext": "edit" }), wt("v:shapetype", [wt("v:stroke", null, { joinstyle: "miter" }), wt("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })].join(""), { id: "_x0000_t202", "o:spt": 202, coordsize: t2.join(","), path: a2 })];
        while (Zi < e2 * 1e3) Zi += 1e3;
        r2.forEach(function(e3) {
          var r3 = Ea(e3[0]);
          var t3 = { color2: "#BEFF82", type: "gradient" };
          if (t3.type == "gradient") t3.angle = "-180";
          var a3 = t3.type == "gradient" ? wt("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null;
          var i2 = wt("v:fill", a3, t3);
          var s2 = { on: "t", obscured: "t" };
          ++Zi;
          n2 = n2.concat(["<v:shape" + bt({ id: "_x0000_s" + Zi, type: "#_x0000_t202", style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (e3[1].hidden ? ";visibility:hidden" : ""), fillcolor: "#ECFAD4", strokecolor: "#edeaa1" }) + ">", i2, wt("v:shadow", null, s2), wt("v:path", null, { "o:connecttype": "none" }), '<v:textbox><div style="text-align:left"></div></v:textbox>', '<x:ClientData ObjectType="Note">', "<x:MoveWithCells/>", "<x:SizeWithCells/>", gt("x:Anchor", [r3.c + 1, 0, r3.r + 1, 0, r3.c + 3, 20, r3.r + 5, 20].join(",")), gt("x:AutoFill", "False"), gt("x:Row", String(r3.r)), gt("x:Column", String(r3.c)), e3[1].hidden ? "" : "<x:Visible/>", "</x:ClientData>", "</v:shape>"]);
        });
        n2.push("</xml>");
        return n2.join("");
      }
      function es(e2, r2, t2, a2) {
        var n2 = Array.isArray(e2);
        var i2;
        r2.forEach(function(r3) {
          var s2 = Ea(r3.ref);
          if (n2) {
            if (!e2[s2.r]) e2[s2.r] = [];
            i2 = e2[s2.r][s2.c];
          } else i2 = e2[r3.ref];
          if (!i2) {
            i2 = { t: "z" };
            if (n2) e2[s2.r][s2.c] = i2;
            else e2[r3.ref] = i2;
            var l2 = Ma(e2["!ref"] || "BDWGO1000001:A1");
            if (l2.s.r > s2.r) l2.s.r = s2.r;
            if (l2.e.r < s2.r) l2.e.r = s2.r;
            if (l2.s.c > s2.c) l2.s.c = s2.c;
            if (l2.e.c < s2.c) l2.e.c = s2.c;
            var o2 = Oa(l2);
            if (o2 !== e2["!ref"]) e2["!ref"] = o2;
          }
          if (!i2.c) i2.c = [];
          var c2 = { a: r3.author, t: r3.t, r: r3.r, T: t2 };
          if (r3.h) c2.h = r3.h;
          for (var f2 = i2.c.length - 1; f2 >= 0; --f2) {
            if (!t2 && i2.c[f2].T) return;
            if (t2 && !i2.c[f2].T) i2.c.splice(f2, 1);
          }
          if (t2 && a2) for (f2 = 0; f2 < a2.length; ++f2) {
            if (c2.a == a2[f2].id) {
              c2.a = a2[f2].name || c2.a;
              break;
            }
          }
          i2.c.push(c2);
        });
      }
      function rs(e2, r2) {
        if (e2.match(/<(?:\w+:)?comments *\/>/)) return [];
        var t2 = [];
        var a2 = [];
        var n2 = e2.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
        if (n2 && n2[1]) n2[1].split(/<\/\w*:?author>/).forEach(function(e3) {
          if (e3 === "" || e3.trim() === "") return;
          var r3 = e3.match(/<(?:\w+:)?author[^>]*>(.*)/);
          if (r3) t2.push(r3[1]);
        });
        var i2 = e2.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
        if (i2 && i2[1]) i2[1].split(/<\/\w*:?comment>/).forEach(function(e3) {
          if (e3 === "" || e3.trim() === "") return;
          var n3 = e3.match(/<(?:\w+:)?comment[^>]*>/);
          if (!n3) return;
          var i3 = jr(n3[0]);
          var s2 = { author: i3.authorId && t2[i3.authorId] || "sheetjsghost", ref: i3.ref, guid: i3.guid };
          var l2 = Ea(i3.ref);
          if (r2.sheetRows && r2.sheetRows <= l2.r) return;
          var o2 = e3.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/);
          var c2 = !!o2 && !!o2[1] && Zn(o2[1]) || { r: "", t: "", h: "" };
          s2.r = c2.r;
          if (c2.r == "<t></t>") c2.t = c2.h = "";
          s2.t = (c2.t || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
          if (r2.cellHTML) s2.h = c2.h;
          a2.push(s2);
        });
        return a2;
      }
      function ts(e2) {
        var r2 = [Rr, wt("comments", null, { xmlns: _t[0] })];
        var t2 = [];
        r2.push("<authors>");
        e2.forEach(function(e3) {
          e3[1].forEach(function(e4) {
            var a2 = Kr(e4.a);
            if (t2.indexOf(a2) == -1) {
              t2.push(a2);
              r2.push("<author>" + a2 + "</author>");
            }
            if (e4.T && e4.ID && t2.indexOf("tc=" + e4.ID) == -1) {
              t2.push("tc=" + e4.ID);
              r2.push("<author>tc=" + e4.ID + "</author>");
            }
          });
        });
        if (t2.length == 0) {
          t2.push("SheetJ5");
          r2.push("<author>SheetJ5</author>");
        }
        r2.push("</authors>");
        r2.push("<commentList>");
        e2.forEach(function(e3) {
          var a2 = 0, n2 = [];
          if (e3[1][0] && e3[1][0].T && e3[1][0].ID) a2 = t2.indexOf("tc=" + e3[1][0].ID);
          else e3[1].forEach(function(e4) {
            if (e4.a) a2 = t2.indexOf(Kr(e4.a));
            n2.push(e4.t || "");
          });
          r2.push('<comment ref="' + e3[0] + '" authorId="' + a2 + '"><text>');
          if (n2.length <= 1) r2.push(gt("t", Kr(n2[0] || "")));
          else {
            var i2 = "Comment:\n    " + n2[0] + "\n";
            for (var s2 = 1; s2 < n2.length; ++s2) i2 += "Reply:\n    " + n2[s2] + "\n";
            r2.push(gt("t", Kr(i2)));
          }
          r2.push("</text></comment>");
        });
        r2.push("</commentList>");
        if (r2.length > 2) {
          r2[r2.length] = "</comments>";
          r2[1] = r2[1].replace("/>", ">");
        }
        return r2.join("");
      }
      function as(e2, r2) {
        var t2 = [];
        var a2 = false, n2 = {}, i2 = 0;
        e2.replace(zr, function s2(l2, o2) {
          var c2 = jr(l2);
          switch (Hr(c2[0])) {
            case "<?xml":
              break;
            case "<ThreadedComments":
              break;
            case "</ThreadedComments>":
              break;
            case "<threadedComment":
              n2 = { author: c2.personId, guid: c2.id, ref: c2.ref, T: 1 };
              break;
            case "</threadedComment>":
              if (n2.t != null) t2.push(n2);
              break;
            case "<text>":
              ;
            case "<text":
              i2 = o2 + l2.length;
              break;
            case "</text>":
              n2.t = e2.slice(i2, o2).replace(/\r\n/g, "\n").replace(/\r/g, "\n");
              break;
            case "<mentions":
              ;
            case "<mentions>":
              a2 = true;
              break;
            case "</mentions>":
              a2 = false;
              break;
            case "<extLst":
              ;
            case "<extLst>":
              ;
            case "</extLst>":
              ;
            case "<extLst/>":
              break;
            case "<ext":
              a2 = true;
              break;
            case "</ext>":
              a2 = false;
              break;
            default:
              if (!a2 && r2.WTF) throw new Error("unrecognized " + c2[0] + " in threaded comments");
          }
          return l2;
        });
        return t2;
      }
      function ns(e2, r2, t2) {
        var a2 = [Rr, wt("ThreadedComments", null, { xmlns: Ct.TCMNT }).replace(/[\/]>/, ">")];
        e2.forEach(function(e3) {
          var n2 = "";
          (e3[1] || []).forEach(function(i2, s2) {
            if (!i2.T) {
              delete i2.ID;
              return;
            }
            if (i2.a && r2.indexOf(i2.a) == -1) r2.push(i2.a);
            var l2 = { ref: e3[0], id: "{54EE7951-7262-4200-6969-" + ("000000000000" + t2.tcid++).slice(-12) + "}" };
            if (s2 == 0) n2 = l2.id;
            else l2.parentId = n2;
            i2.ID = l2.id;
            if (i2.a) l2.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + r2.indexOf(i2.a)).slice(-12) + "}";
            a2.push(wt("threadedComment", gt("text", i2.t || ""), l2));
          });
        });
        a2.push("</ThreadedComments>");
        return a2.join("");
      }
      function is(e2, r2) {
        var t2 = [];
        var a2 = false;
        e2.replace(zr, function n2(e3) {
          var n3 = jr(e3);
          switch (Hr(n3[0])) {
            case "<?xml":
              break;
            case "<personList":
              break;
            case "</personList>":
              break;
            case "<person":
              t2.push({ name: n3.displayname, id: n3.id });
              break;
            case "</person>":
              break;
            case "<extLst":
              ;
            case "<extLst>":
              ;
            case "</extLst>":
              ;
            case "<extLst/>":
              break;
            case "<ext":
              a2 = true;
              break;
            case "</ext>":
              a2 = false;
              break;
            default:
              if (!a2 && r2.WTF) throw new Error("unrecognized " + n3[0] + " in threaded comments");
          }
          return e3;
        });
        return t2;
      }
      function ss(e2) {
        var r2 = [Rr, wt("personList", null, { xmlns: Ct.TCMNT, "xmlns:x": _t[0] }).replace(/[\/]>/, ">")];
        e2.forEach(function(e3, t2) {
          r2.push(wt("person", null, { displayName: e3, id: "{54EE7950-7262-4200-6969-" + ("000000000000" + t2).slice(-12) + "}", userId: e3, providerId: "None" }));
        });
        r2.push("</personList>");
        return r2.join("");
      }
      var ls = "application/vnd.ms-office.vbaProject";
      function os(e2) {
        var r2 = Ye.utils.cfb_new({ root: "R" });
        e2.FullPaths.forEach(function(t2, a2) {
          if (t2.slice(-1) === "/" || !t2.match(/_VBA_PROJECT_CUR/)) return;
          var n2 = t2.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
          Ye.utils.cfb_add(r2, n2, e2.FileIndex[a2].content);
        });
        return Ye.write(r2);
      }
      function cs(e2, r2) {
        r2.FullPaths.forEach(function(t2, a2) {
          if (a2 == 0) return;
          var n2 = t2.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
          if (n2.slice(-1) !== "/") Ye.utils.cfb_add(e2, n2, r2.FileIndex[a2].content);
        });
      }
      var fs = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
      function us() {
        return { "!type": "dialog" };
      }
      function hs() {
        return { "!type": "dialog" };
      }
      function ps() {
        return { "!type": "macro" };
      }
      function ds() {
        return { "!type": "macro" };
      }
      var ms = /* @__PURE__ */ (function() {
        var e2 = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g;
        var r2 = { r: 0, c: 0 };
        function t2(e3, t3, a2, n2) {
          var i2 = false, s2 = false;
          if (a2.length == 0) s2 = true;
          else if (a2.charAt(0) == "[") {
            s2 = true;
            a2 = a2.slice(1, -1);
          }
          if (n2.length == 0) i2 = true;
          else if (n2.charAt(0) == "[") {
            i2 = true;
            n2 = n2.slice(1, -1);
          }
          var l2 = a2.length > 0 ? parseInt(a2, 10) | 0 : 0, o2 = n2.length > 0 ? parseInt(n2, 10) | 0 : 0;
          if (i2) o2 += r2.c;
          else --o2;
          if (s2) l2 += r2.r;
          else --l2;
          return t3 + (i2 ? "" : "$") + Ca(o2) + (s2 ? "" : "$") + ya(l2);
        }
        return function a2(n2, i2) {
          r2 = i2;
          return n2.replace(e2, t2);
        };
      })();
      var vs = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;
      var gs = /* @__PURE__ */ (function() {
        return function e2(r2, t2) {
          return r2.replace(vs, function(e3, r3, a2, n2, i2, s2) {
            var l2 = Sa(n2) - (a2 ? 0 : t2.c);
            var o2 = wa(s2) - (i2 ? 0 : t2.r);
            var c2 = o2 == 0 ? "" : !i2 ? "[" + o2 + "]" : o2 + 1;
            var f2 = l2 == 0 ? "" : !a2 ? "[" + l2 + "]" : l2 + 1;
            return r3 + "R" + c2 + "C" + f2;
          });
        };
      })();
      function bs(e2, r2) {
        return e2.replace(vs, function(e3, t2, a2, n2, i2, s2) {
          return t2 + (a2 == "$" ? a2 + n2 : Ca(Sa(n2) + r2.c)) + (i2 == "$" ? i2 + s2 : ya(wa(s2) + r2.r));
        });
      }
      function ws(e2, r2, t2) {
        var a2 = Da(r2), n2 = a2.s, i2 = Ea(t2);
        var s2 = { r: i2.r - n2.r, c: i2.c - n2.c };
        return bs(e2, s2);
      }
      function ys(e2) {
        if (e2.length == 1) return false;
        return true;
      }
      function ks(e2) {
        return e2.replace(/_xlfn\./g, "");
      }
      function xs(e2) {
        if (e2.slice(0, 3) == "of:") e2 = e2.slice(3);
        if (e2.charCodeAt(0) == 61) {
          e2 = e2.slice(1);
          if (e2.charCodeAt(0) == 61) e2 = e2.slice(1);
        }
        e2 = e2.replace(/COM\.MICROSOFT\./g, "");
        e2 = e2.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(e3, r2) {
          return r2.replace(/\./g, "");
        });
        e2 = e2.replace(/\[.(#[A-Z]*[?!])\]/g, "$1");
        return e2.replace(/[;~]/g, ",").replace(/\|/g, ";");
      }
      function Ss(e2) {
        var r2 = "of:=" + e2.replace(vs, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
        return r2.replace(/;/g, "|").replace(/,/g, ";");
      }
      function Cs(e2) {
        var r2 = e2.split(":");
        var t2 = r2[0].split(".")[0];
        return [t2, r2[0].split(".")[1] + (r2.length > 1 ? ":" + (r2[1].split(".")[1] || r2[1].split(".")[0]) : "")];
      }
      function _s(e2) {
        return e2.replace(/\./, "!");
      }
      var As = {};
      var Ts = {};
      var Es = typeof Map !== "undefined";
      function Fs(e2, r2, t2) {
        var a2 = 0, n2 = e2.length;
        if (t2) {
          if (Es ? t2.has(r2) : Object.prototype.hasOwnProperty.call(t2, r2)) {
            var i2 = Es ? t2.get(r2) : t2[r2];
            for (; a2 < i2.length; ++a2) {
              if (e2[i2[a2]].t === r2) {
                e2.Count++;
                return i2[a2];
              }
            }
          }
        } else for (; a2 < n2; ++a2) {
          if (e2[a2].t === r2) {
            e2.Count++;
            return a2;
          }
        }
        e2[n2] = { t: r2 };
        e2.Count++;
        e2.Unique++;
        if (t2) {
          if (Es) {
            if (!t2.has(r2)) t2.set(r2, []);
            t2.get(r2).push(n2);
          } else {
            if (!Object.prototype.hasOwnProperty.call(t2, r2)) t2[r2] = [];
            t2[r2].push(n2);
          }
        }
        return n2;
      }
      function Ds(e2, r2) {
        var t2 = { min: e2 + 1, max: e2 + 1 };
        var a2 = -1;
        if (r2.MDW) pi = r2.MDW;
        if (r2.width != null) t2.customWidth = 1;
        else if (r2.wpx != null) a2 = mi(r2.wpx);
        else if (r2.wch != null) a2 = r2.wch;
        if (a2 > -1) {
          t2.width = vi(a2);
          t2.customWidth = 1;
        } else if (r2.width != null) t2.width = r2.width;
        if (r2.hidden) t2.hidden = true;
        if (r2.level != null) {
          t2.outlineLevel = t2.level = r2.level;
        }
        return t2;
      }
      function Os(e2, r2) {
        if (!e2) return;
        var t2 = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
        if (r2 == "xlml") t2 = [1, 1, 1, 1, 0.5, 0.5];
        if (e2.left == null) e2.left = t2[0];
        if (e2.right == null) e2.right = t2[1];
        if (e2.top == null) e2.top = t2[2];
        if (e2.bottom == null) e2.bottom = t2[3];
        if (e2.header == null) e2.header = t2[4];
        if (e2.footer == null) e2.footer = t2[5];
      }
      function Ms(e2, r2, t2) {
        var a2 = t2.revssf[r2.z != null ? r2.z : "General"];
        var n2 = 60, i2 = e2.length;
        if (a2 == null && t2.ssf) {
          for (; n2 < 392; ++n2) if (t2.ssf[n2] == null) {
            $e(r2.z, n2);
            t2.ssf[n2] = r2.z;
            t2.revssf[r2.z] = a2 = n2;
            break;
          }
        }
        for (n2 = 0; n2 != i2; ++n2) if (e2[n2].numFmtId === a2) return n2;
        e2[i2] = { numFmtId: a2, fontId: 0, fillId: 0, borderId: 0, xfId: 0, applyNumberFormat: 1 };
        return i2;
      }
      function Ns(e2, r2, t2, a2, n2, i2) {
        try {
          if (a2.cellNF) e2.z = X[r2];
        } catch (s2) {
          if (a2.WTF) throw s2;
        }
        if (e2.t === "z" && !a2.cellStyles) return;
        if (e2.t === "d" && typeof e2.v === "string") e2.v = mr(e2.v);
        if ((!a2 || a2.cellText !== false) && e2.t !== "z") try {
          if (X[r2] == null) $e(je[r2] || "General", r2);
          if (e2.t === "e") e2.w = e2.w || ln[e2.v];
          else if (r2 === 0) {
            if (e2.t === "n") {
              if ((e2.v | 0) === e2.v) e2.w = e2.v.toString(10);
              else e2.w = ie(e2.v);
            } else if (e2.t === "d") {
              var l2 = sr(e2.v);
              if ((l2 | 0) === l2) e2.w = l2.toString(10);
              else e2.w = ie(l2);
            } else if (e2.v === void 0) return "";
            else e2.w = se(e2.v, Ts);
          } else if (e2.t === "d") e2.w = Be(r2, sr(e2.v), Ts);
          else e2.w = Be(r2, e2.v, Ts);
        } catch (s2) {
          if (a2.WTF) throw s2;
        }
        if (!a2.cellStyles) return;
        if (t2 != null) try {
          e2.s = i2.Fills[t2];
          if (e2.s.fgColor && e2.s.fgColor.theme && !e2.s.fgColor.rgb) {
            e2.s.fgColor.rgb = ci(n2.themeElements.clrScheme[e2.s.fgColor.theme].rgb, e2.s.fgColor.tint || 0);
            if (a2.WTF) e2.s.fgColor.raw_rgb = n2.themeElements.clrScheme[e2.s.fgColor.theme].rgb;
          }
          if (e2.s.bgColor && e2.s.bgColor.theme) {
            e2.s.bgColor.rgb = ci(n2.themeElements.clrScheme[e2.s.bgColor.theme].rgb, e2.s.bgColor.tint || 0);
            if (a2.WTF) e2.s.bgColor.raw_rgb = n2.themeElements.clrScheme[e2.s.bgColor.theme].rgb;
          }
        } catch (s2) {
          if (a2.WTF && i2.Fills) throw s2;
        }
      }
      function Ps(e2, r2, t2) {
        if (e2 && e2["!ref"]) {
          var a2 = Ma(e2["!ref"]);
          if (a2.e.c < a2.s.c || a2.e.r < a2.s.r) throw new Error("Bad range (" + t2 + "): " + e2["!ref"]);
        }
      }
      function Is(e2, r2) {
        var t2 = Ma(r2);
        if (t2.s.r <= t2.e.r && t2.s.c <= t2.e.c && t2.s.r >= 0 && t2.s.c >= 0) e2["!ref"] = Oa(t2);
      }
      var Rs = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g;
      var Ls = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/;
      var Bs = /<(?:\w:)?hyperlink [^>]*>/gm;
      var $s = /"(\w*:\w*)"/;
      var zs = /<(?:\w:)?col\b[^>]*[\/]?>/g;
      var Us = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g;
      var Ws = /<(?:\w:)?pageMargins[^>]*\/>/g;
      var js = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/;
      var Hs = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/;
      var Vs = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
      function Xs(e2, r2, t2, a2, n2, i2, s2) {
        if (!e2) return e2;
        if (!a2) a2 = { "!id": {} };
        if (m != null && r2.dense == null) r2.dense = m;
        var l2 = r2.dense ? [] : {};
        var o2 = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
        var c2 = "", f2 = "";
        var u2 = e2.match(Ls);
        if (u2) {
          c2 = e2.slice(0, u2.index);
          f2 = e2.slice(u2.index + u2[0].length);
        } else c2 = f2 = e2;
        var h2 = c2.match(js);
        if (h2) Ys(h2[0], l2, n2, t2);
        else if (h2 = c2.match(Hs)) Js(h2[0], h2[1] || "", l2, n2, t2, s2, i2);
        var p2 = (c2.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
        if (p2 > 0) {
          var d2 = c2.slice(p2, p2 + 50).match($s);
          if (d2) Is(l2, d2[1]);
        }
        var v2 = c2.match(Vs);
        if (v2 && v2[1]) ol(v2[1], n2);
        var g2 = [];
        if (r2.cellStyles) {
          var b2 = c2.match(zs);
          if (b2) al(g2, b2);
        }
        if (u2) ul(u2[1], l2, r2, o2, i2, s2);
        var w2 = f2.match(Us);
        if (w2) l2["!autofilter"] = il(w2[0]);
        var y2 = [];
        var k2 = f2.match(Rs);
        if (k2) for (p2 = 0; p2 != k2.length; ++p2) y2[p2] = Ma(k2[p2].slice(k2[p2].indexOf('"') + 1));
        var x2 = f2.match(Bs);
        if (x2) el(l2, x2, a2);
        var S2 = f2.match(Ws);
        if (S2) l2["!margins"] = rl(jr(S2[0]));
        if (!l2["!ref"] && o2.e.c >= o2.s.c && o2.e.r >= o2.s.r) l2["!ref"] = Oa(o2);
        if (r2.sheetRows > 0 && l2["!ref"]) {
          var C2 = Ma(l2["!ref"]);
          if (r2.sheetRows <= +C2.e.r) {
            C2.e.r = r2.sheetRows - 1;
            if (C2.e.r > o2.e.r) C2.e.r = o2.e.r;
            if (C2.e.r < C2.s.r) C2.s.r = C2.e.r;
            if (C2.e.c > o2.e.c) C2.e.c = o2.e.c;
            if (C2.e.c < C2.s.c) C2.s.c = C2.e.c;
            l2["!fullref"] = l2["!ref"];
            l2["!ref"] = Oa(C2);
          }
        }
        if (g2.length > 0) l2["!cols"] = g2;
        if (y2.length > 0) l2["!merges"] = y2;
        return l2;
      }
      function Gs(e2) {
        if (e2.length === 0) return "";
        var r2 = '<mergeCells count="' + e2.length + '">';
        for (var t2 = 0; t2 != e2.length; ++t2) r2 += '<mergeCell ref="' + Oa(e2[t2]) + '"/>';
        return r2 + "</mergeCells>";
      }
      function Ys(e2, r2, t2, a2) {
        var n2 = jr(e2);
        if (!t2.Sheets[a2]) t2.Sheets[a2] = {};
        if (n2.codeName) t2.Sheets[a2].CodeName = Gr(ot(n2.codeName));
      }
      function Js(e2, r2, t2, a2, n2) {
        Ys(e2.slice(0, e2.indexOf(">")), t2, a2, n2);
      }
      function Ks(e2, r2, t2, a2, n2) {
        var i2 = false;
        var s2 = {}, l2 = null;
        if (a2.bookType !== "xlsx" && r2.vbaraw) {
          var o2 = r2.SheetNames[t2];
          try {
            if (r2.Workbook) o2 = r2.Workbook.Sheets[t2].CodeName || o2;
          } catch (c2) {
          }
          i2 = true;
          s2.codeName = ct(Kr(o2));
        }
        if (e2 && e2["!outline"]) {
          var f2 = { summaryBelow: 1, summaryRight: 1 };
          if (e2["!outline"].above) f2.summaryBelow = 0;
          if (e2["!outline"].left) f2.summaryRight = 0;
          l2 = (l2 || "") + wt("outlinePr", null, f2);
        }
        if (!i2 && !l2) return;
        n2[n2.length] = wt("sheetPr", l2, s2);
      }
      var qs = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"];
      var Zs = ["formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables"];
      function Qs(e2) {
        var r2 = { sheet: 1 };
        qs.forEach(function(t2) {
          if (e2[t2] != null && e2[t2]) r2[t2] = "1";
        });
        Zs.forEach(function(t2) {
          if (e2[t2] != null && !e2[t2]) r2[t2] = "0";
        });
        if (e2.password) r2.password = crypto_CreatePasswordVerifier_Method1(e2.password).toString(16).toUpperCase();
        return wt("sheetProtection", null, r2);
      }
      function el(e2, r2, t2) {
        var a2 = Array.isArray(e2);
        for (var n2 = 0; n2 != r2.length; ++n2) {
          var i2 = jr(ot(r2[n2]), true);
          if (!i2.ref) return;
          var s2 = ((t2 || {})["!id"] || [])[i2.id];
          if (s2) {
            i2.Target = s2.Target;
            if (i2.location) i2.Target += "#" + Gr(i2.location);
          } else {
            i2.Target = "#" + Gr(i2.location);
            s2 = { Target: i2.Target, TargetMode: "Internal" };
          }
          i2.Rel = s2;
          if (i2.tooltip) {
            i2.Tooltip = i2.tooltip;
            delete i2.tooltip;
          }
          var l2 = Ma(i2.ref);
          for (var o2 = l2.s.r; o2 <= l2.e.r; ++o2) for (var c2 = l2.s.c; c2 <= l2.e.c; ++c2) {
            var f2 = Fa({ c: c2, r: o2 });
            if (a2) {
              if (!e2[o2]) e2[o2] = [];
              if (!e2[o2][c2]) e2[o2][c2] = { t: "z", v: void 0 };
              e2[o2][c2].l = i2;
            } else {
              if (!e2[f2]) e2[f2] = { t: "z", v: void 0 };
              e2[f2].l = i2;
            }
          }
        }
      }
      function rl(e2) {
        var r2 = {};
        ["left", "right", "top", "bottom", "header", "footer"].forEach(function(t2) {
          if (e2[t2]) r2[t2] = parseFloat(e2[t2]);
        });
        return r2;
      }
      function tl(e2) {
        Os(e2);
        return wt("pageMargins", null, e2);
      }
      function al(e2, r2) {
        var t2 = false;
        for (var a2 = 0; a2 != r2.length; ++a2) {
          var n2 = jr(r2[a2], true);
          if (n2.hidden) n2.hidden = at(n2.hidden);
          var i2 = parseInt(n2.min, 10) - 1, s2 = parseInt(n2.max, 10) - 1;
          if (n2.outlineLevel) n2.level = +n2.outlineLevel || 0;
          delete n2.min;
          delete n2.max;
          n2.width = +n2.width;
          if (!t2 && n2.width) {
            t2 = true;
            bi(n2.width);
          }
          wi(n2);
          while (i2 <= s2) e2[i2++] = gr(n2);
        }
      }
      function nl(e2, r2) {
        var t2 = ["<cols>"], a2;
        for (var n2 = 0; n2 != r2.length; ++n2) {
          if (!(a2 = r2[n2])) continue;
          t2[t2.length] = wt("col", null, Ds(n2, a2));
        }
        t2[t2.length] = "</cols>";
        return t2.join("");
      }
      function il(e2) {
        var r2 = { ref: (e2.match(/ref="([^"]*)"/) || [])[1] };
        return r2;
      }
      function sl(e2, r2, t2, a2) {
        var n2 = typeof e2.ref == "string" ? e2.ref : Oa(e2.ref);
        if (!t2.Workbook) t2.Workbook = { Sheets: [] };
        if (!t2.Workbook.Names) t2.Workbook.Names = [];
        var i2 = t2.Workbook.Names;
        var s2 = Da(n2);
        if (s2.s.r == s2.e.r) {
          s2.e.r = Da(r2["!ref"]).e.r;
          n2 = Oa(s2);
        }
        for (var l2 = 0; l2 < i2.length; ++l2) {
          var o2 = i2[l2];
          if (o2.Name != "_xlnm._FilterDatabase") continue;
          if (o2.Sheet != a2) continue;
          o2.Ref = "'" + t2.SheetNames[a2] + "'!" + n2;
          break;
        }
        if (l2 == i2.length) i2.push({ Name: "_xlnm._FilterDatabase", Sheet: a2, Ref: "'" + t2.SheetNames[a2] + "'!" + n2 });
        return wt("autoFilter", null, { ref: n2 });
      }
      var ll = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
      function ol(e2, r2) {
        if (!r2.Views) r2.Views = [{}];
        (e2.match(ll) || []).forEach(function(e3, t2) {
          var a2 = jr(e3);
          if (!r2.Views[t2]) r2.Views[t2] = {};
          if (+a2.zoomScale) r2.Views[t2].zoom = +a2.zoomScale;
          if (at(a2.rightToLeft)) r2.Views[t2].RTL = true;
        });
      }
      function cl(e2, r2, t2, a2) {
        var n2 = { workbookViewId: "0" };
        if ((((a2 || {}).Workbook || {}).Views || [])[0]) n2.rightToLeft = a2.Workbook.Views[0].RTL ? "1" : "0";
        return wt("sheetViews", wt("sheetView", null, n2), {});
      }
      function fl(e2, r2, t2, a2) {
        if (e2.c) t2["!comments"].push([r2, e2.c]);
        if (e2.v === void 0 && typeof e2.f !== "string" || e2.t === "z" && !e2.f) return "";
        var n2 = "";
        var i2 = e2.t, s2 = e2.v;
        if (e2.t !== "z") switch (e2.t) {
          case "b":
            n2 = e2.v ? "1" : "0";
            break;
          case "n":
            n2 = "" + e2.v;
            break;
          case "e":
            n2 = ln[e2.v];
            break;
          case "d":
            if (a2 && a2.cellDates) n2 = mr(e2.v, -1).toISOString();
            else {
              e2 = gr(e2);
              e2.t = "n";
              n2 = "" + (e2.v = sr(mr(e2.v)));
            }
            if (typeof e2.z === "undefined") e2.z = X[14];
            break;
          default:
            n2 = e2.v;
            break;
        }
        var l2 = gt("v", Kr(n2)), o2 = { r: r2 };
        var c2 = Ms(a2.cellXfs, e2, a2);
        if (c2 !== 0) o2.s = c2;
        switch (e2.t) {
          case "n":
            break;
          case "d":
            o2.t = "d";
            break;
          case "b":
            o2.t = "b";
            break;
          case "e":
            o2.t = "e";
            break;
          case "z":
            break;
          default:
            if (e2.v == null) {
              delete e2.t;
              break;
            }
            if (e2.v.length > 32767) throw new Error("Text length must not exceed 32767 characters");
            if (a2 && a2.bookSST) {
              l2 = gt("v", "" + Fs(a2.Strings, e2.v, a2.revStrings));
              o2.t = "s";
              break;
            }
            o2.t = "str";
            break;
        }
        if (e2.t != i2) {
          e2.t = i2;
          e2.v = s2;
        }
        if (typeof e2.f == "string" && e2.f) {
          var f2 = e2.F && e2.F.slice(0, r2.length) == r2 ? { t: "array", ref: e2.F } : null;
          l2 = wt("f", Kr(e2.f), f2) + (e2.v != null ? l2 : "");
        }
        if (e2.l) t2["!links"].push([r2, e2.l]);
        if (e2.D) o2.cm = 1;
        return wt("c", l2, o2);
      }
      var ul = (function() {
        var e2 = /<(?:\w+:)?c[ \/>]/, r2 = /<\/(?:\w+:)?row>/;
        var t2 = /r=["']([^"']*)["']/, a2 = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/;
        var n2 = /ref=["']([^"']*)["']/;
        var i2 = ft("v"), s2 = ft("f");
        return function l2(o2, c2, f2, u2, h2, p2) {
          var d2 = 0, m2 = "", v2 = [], g2 = [], b2 = 0, w2 = 0, y2 = 0, k2 = "", x2;
          var S2, C2 = 0, _2 = 0;
          var A2, T2;
          var E2 = 0, F2 = 0;
          var D2 = Array.isArray(p2.CellXf), O2;
          var M2 = [];
          var N2 = [];
          var P2 = Array.isArray(c2);
          var I2 = [], R2 = {}, L2 = false;
          var B2 = !!f2.sheetStubs;
          for (var $2 = o2.split(r2), z2 = 0, U2 = $2.length; z2 != U2; ++z2) {
            m2 = $2[z2].trim();
            var W2 = m2.length;
            if (W2 === 0) continue;
            var j2 = 0;
            e: for (d2 = 0; d2 < W2; ++d2) switch (m2[d2]) {
              case ">":
                if (m2[d2 - 1] != "/") {
                  ++d2;
                  break e;
                }
                if (f2 && f2.cellStyles) {
                  S2 = jr(m2.slice(j2, d2), true);
                  C2 = S2.r != null ? parseInt(S2.r, 10) : C2 + 1;
                  _2 = -1;
                  if (f2.sheetRows && f2.sheetRows < C2) continue;
                  R2 = {};
                  L2 = false;
                  if (S2.ht) {
                    L2 = true;
                    R2.hpt = parseFloat(S2.ht);
                    R2.hpx = Si(R2.hpt);
                  }
                  if (S2.hidden == "1") {
                    L2 = true;
                    R2.hidden = true;
                  }
                  if (S2.outlineLevel != null) {
                    L2 = true;
                    R2.level = +S2.outlineLevel;
                  }
                  if (L2) I2[C2 - 1] = R2;
                }
                break;
              case "<":
                j2 = d2;
                break;
            }
            if (j2 >= d2) break;
            S2 = jr(m2.slice(j2, d2), true);
            C2 = S2.r != null ? parseInt(S2.r, 10) : C2 + 1;
            _2 = -1;
            if (f2.sheetRows && f2.sheetRows < C2) continue;
            if (u2.s.r > C2 - 1) u2.s.r = C2 - 1;
            if (u2.e.r < C2 - 1) u2.e.r = C2 - 1;
            if (f2 && f2.cellStyles) {
              R2 = {};
              L2 = false;
              if (S2.ht) {
                L2 = true;
                R2.hpt = parseFloat(S2.ht);
                R2.hpx = Si(R2.hpt);
              }
              if (S2.hidden == "1") {
                L2 = true;
                R2.hidden = true;
              }
              if (S2.outlineLevel != null) {
                L2 = true;
                R2.level = +S2.outlineLevel;
              }
              if (L2) I2[C2 - 1] = R2;
            }
            v2 = m2.slice(d2).split(e2);
            for (var H2 = 0; H2 != v2.length; ++H2) if (v2[H2].trim().charAt(0) != "<") break;
            v2 = v2.slice(H2);
            for (d2 = 0; d2 != v2.length; ++d2) {
              m2 = v2[d2].trim();
              if (m2.length === 0) continue;
              g2 = m2.match(t2);
              b2 = d2;
              w2 = 0;
              y2 = 0;
              m2 = "<c " + (m2.slice(0, 1) == "<" ? ">" : "") + m2;
              if (g2 != null && g2.length === 2) {
                b2 = 0;
                k2 = g2[1];
                for (w2 = 0; w2 != k2.length; ++w2) {
                  if ((y2 = k2.charCodeAt(w2) - 64) < 1 || y2 > 26) break;
                  b2 = 26 * b2 + y2;
                }
                --b2;
                _2 = b2;
              } else ++_2;
              for (w2 = 0; w2 != m2.length; ++w2) if (m2.charCodeAt(w2) === 62) break;
              ++w2;
              S2 = jr(m2.slice(0, w2), true);
              if (!S2.r) S2.r = Fa({ r: C2 - 1, c: _2 });
              k2 = m2.slice(w2);
              x2 = { t: "" };
              if ((g2 = k2.match(i2)) != null && g2[1] !== "") x2.v = Gr(g2[1]);
              if (f2.cellFormula) {
                if ((g2 = k2.match(s2)) != null && g2[1] !== "") {
                  x2.f = Gr(ot(g2[1])).replace(/\r\n/g, "\n");
                  if (!f2.xlfn) x2.f = ks(x2.f);
                  if (g2[0].indexOf('t="array"') > -1) {
                    x2.F = (k2.match(n2) || [])[1];
                    if (x2.F.indexOf(":") > -1) M2.push([Ma(x2.F), x2.F]);
                  } else if (g2[0].indexOf('t="shared"') > -1) {
                    T2 = jr(g2[0]);
                    var V2 = Gr(ot(g2[1]));
                    if (!f2.xlfn) V2 = ks(V2);
                    N2[parseInt(T2.si, 10)] = [T2, V2, S2.r];
                  }
                } else if (g2 = k2.match(/<f[^>]*\/>/)) {
                  T2 = jr(g2[0]);
                  if (N2[T2.si]) x2.f = ws(N2[T2.si][1], N2[T2.si][2], S2.r);
                }
                var G2 = Ea(S2.r);
                for (w2 = 0; w2 < M2.length; ++w2) if (G2.r >= M2[w2][0].s.r && G2.r <= M2[w2][0].e.r) {
                  if (G2.c >= M2[w2][0].s.c && G2.c <= M2[w2][0].e.c) x2.F = M2[w2][1];
                }
              }
              if (S2.t == null && x2.v === void 0) {
                if (x2.f || x2.F) {
                  x2.v = 0;
                  x2.t = "n";
                } else if (!B2) continue;
                else x2.t = "z";
              } else x2.t = S2.t || "n";
              if (u2.s.c > _2) u2.s.c = _2;
              if (u2.e.c < _2) u2.e.c = _2;
              switch (x2.t) {
                case "n":
                  if (x2.v == "" || x2.v == null) {
                    if (!B2) continue;
                    x2.t = "z";
                  } else x2.v = parseFloat(x2.v);
                  break;
                case "s":
                  if (typeof x2.v == "undefined") {
                    if (!B2) continue;
                    x2.t = "z";
                  } else {
                    A2 = As[parseInt(x2.v, 10)];
                    x2.v = A2.t;
                    x2.r = A2.r;
                    if (f2.cellHTML) x2.h = A2.h;
                  }
                  break;
                case "str":
                  x2.t = "s";
                  x2.v = x2.v != null ? ot(x2.v) : "";
                  if (f2.cellHTML) x2.h = Qr(x2.v);
                  break;
                case "inlineStr":
                  g2 = k2.match(a2);
                  x2.t = "s";
                  if (g2 != null && (A2 = Zn(g2[1]))) {
                    x2.v = A2.t;
                    if (f2.cellHTML) x2.h = A2.h;
                  } else x2.v = "";
                  break;
                case "b":
                  x2.v = at(x2.v);
                  break;
                case "d":
                  if (f2.cellDates) x2.v = mr(x2.v, 1);
                  else {
                    x2.v = sr(mr(x2.v, 1));
                    x2.t = "n";
                  }
                  break;
                case "e":
                  if (!f2 || f2.cellText !== false) x2.w = x2.v;
                  x2.v = on[x2.v];
                  break;
              }
              E2 = F2 = 0;
              O2 = null;
              if (D2 && S2.s !== void 0) {
                O2 = p2.CellXf[S2.s];
                if (O2 != null) {
                  if (O2.numFmtId != null) E2 = O2.numFmtId;
                  if (f2.cellStyles) {
                    if (O2.fillId != null) F2 = O2.fillId;
                  }
                }
              }
              Ns(x2, E2, F2, f2, h2, p2);
              if (f2.cellDates && D2 && x2.t == "n" && Ne(X[E2])) {
                x2.t = "d";
                x2.v = fr(x2.v);
              }
              if (S2.cm && f2.xlmeta) {
                var Y2 = (f2.xlmeta.Cell || [])[+S2.cm - 1];
                if (Y2 && Y2.type == "XLDAPR") x2.D = true;
              }
              if (P2) {
                var J2 = Ea(S2.r);
                if (!c2[J2.r]) c2[J2.r] = [];
                c2[J2.r][J2.c] = x2;
              } else c2[S2.r] = x2;
            }
          }
          if (I2.length > 0) c2["!rows"] = I2;
        };
      })();
      function hl(e2, r2, t2, a2) {
        var n2 = [], i2 = [], s2 = Ma(e2["!ref"]), l2 = "", o2, c2 = "", f2 = [], u2 = 0, h2 = 0, p2 = e2["!rows"];
        var d2 = Array.isArray(e2);
        var m2 = { r: c2 }, v2, g2 = -1;
        for (h2 = s2.s.c; h2 <= s2.e.c; ++h2) f2[h2] = Ca(h2);
        for (u2 = s2.s.r; u2 <= s2.e.r; ++u2) {
          i2 = [];
          c2 = ya(u2);
          for (h2 = s2.s.c; h2 <= s2.e.c; ++h2) {
            o2 = f2[h2] + c2;
            var b2 = d2 ? (e2[u2] || [])[h2] : e2[o2];
            if (b2 === void 0) continue;
            if ((l2 = fl(b2, o2, e2, r2, t2, a2)) != null) i2.push(l2);
          }
          if (i2.length > 0 || p2 && p2[u2]) {
            m2 = { r: c2 };
            if (p2 && p2[u2]) {
              v2 = p2[u2];
              if (v2.hidden) m2.hidden = 1;
              g2 = -1;
              if (v2.hpx) g2 = xi(v2.hpx);
              else if (v2.hpt) g2 = v2.hpt;
              if (g2 > -1) {
                m2.ht = g2;
                m2.customHeight = 1;
              }
              if (v2.level) {
                m2.outlineLevel = v2.level;
              }
            }
            n2[n2.length] = wt("row", i2.join(""), m2);
          }
        }
        if (p2) for (; u2 < p2.length; ++u2) {
          if (p2 && p2[u2]) {
            m2 = { r: u2 + 1 };
            v2 = p2[u2];
            if (v2.hidden) m2.hidden = 1;
            g2 = -1;
            if (v2.hpx) g2 = xi(v2.hpx);
            else if (v2.hpt) g2 = v2.hpt;
            if (g2 > -1) {
              m2.ht = g2;
              m2.customHeight = 1;
            }
            if (v2.level) {
              m2.outlineLevel = v2.level;
            }
            n2[n2.length] = wt("row", "", m2);
          }
        }
        return n2.join("");
      }
      function pl(e2, r2, t2, a2) {
        var n2 = [Rr, wt("worksheet", null, { xmlns: _t[0], "xmlns:r": Ct.r })];
        var i2 = t2.SheetNames[e2], s2 = 0, l2 = "";
        var o2 = t2.Sheets[i2];
        if (o2 == null) o2 = {};
        var c2 = o2["!ref"] || "A1";
        var f2 = Ma(c2);
        if (f2.e.c > 16383 || f2.e.r > 1048575) {
          if (r2.WTF) throw new Error("Range " + c2 + " exceeds format limit A1:XFD1048576");
          f2.e.c = Math.min(f2.e.c, 16383);
          f2.e.r = Math.min(f2.e.c, 1048575);
          c2 = Oa(f2);
        }
        if (!a2) a2 = {};
        o2["!comments"] = [];
        var u2 = [];
        Ks(o2, t2, e2, r2, n2);
        n2[n2.length] = wt("dimension", null, { ref: c2 });
        n2[n2.length] = cl(o2, r2, e2, t2);
        if (r2.sheetFormat) n2[n2.length] = wt("sheetFormatPr", null, { defaultRowHeight: r2.sheetFormat.defaultRowHeight || "16", baseColWidth: r2.sheetFormat.baseColWidth || "10", outlineLevelRow: r2.sheetFormat.outlineLevelRow || "7" });
        if (o2["!cols"] != null && o2["!cols"].length > 0) n2[n2.length] = nl(o2, o2["!cols"]);
        n2[s2 = n2.length] = "<sheetData/>";
        o2["!links"] = [];
        if (o2["!ref"] != null) {
          l2 = hl(o2, r2, e2, t2, a2);
          if (l2.length > 0) n2[n2.length] = l2;
        }
        if (n2.length > s2 + 1) {
          n2[n2.length] = "</sheetData>";
          n2[s2] = n2[s2].replace("/>", ">");
        }
        if (o2["!protect"]) n2[n2.length] = Qs(o2["!protect"]);
        if (o2["!autofilter"] != null) n2[n2.length] = sl(o2["!autofilter"], o2, t2, e2);
        if (o2["!merges"] != null && o2["!merges"].length > 0) n2[n2.length] = Gs(o2["!merges"]);
        var h2 = -1, p2, d2 = -1;
        if (o2["!links"].length > 0) {
          n2[n2.length] = "<hyperlinks>";
          o2["!links"].forEach(function(e3) {
            if (!e3[1].Target) return;
            p2 = { ref: e3[0] };
            if (e3[1].Target.charAt(0) != "#") {
              d2 = bn(a2, -1, Kr(e3[1].Target).replace(/#.*$/, ""), dn.HLINK);
              p2["r:id"] = "rId" + d2;
            }
            if ((h2 = e3[1].Target.indexOf("#")) > -1) p2.location = Kr(e3[1].Target.slice(h2 + 1));
            if (e3[1].Tooltip) p2.tooltip = Kr(e3[1].Tooltip);
            n2[n2.length] = wt("hyperlink", null, p2);
          });
          n2[n2.length] = "</hyperlinks>";
        }
        delete o2["!links"];
        if (o2["!margins"] != null) n2[n2.length] = tl(o2["!margins"]);
        if (!r2 || r2.ignoreEC || r2.ignoreEC == void 0) n2[n2.length] = gt("ignoredErrors", wt("ignoredError", null, { numberStoredAsText: 1, sqref: c2 }));
        if (u2.length > 0) {
          d2 = bn(a2, -1, "../drawings/drawing" + (e2 + 1) + ".xml", dn.DRAW);
          n2[n2.length] = wt("drawing", null, { "r:id": "rId" + d2 });
          o2["!drawing"] = u2;
        }
        if (o2["!comments"].length > 0) {
          d2 = bn(a2, -1, "../drawings/vmlDrawing" + (e2 + 1) + ".vml", dn.VML);
          n2[n2.length] = wt("legacyDrawing", null, { "r:id": "rId" + d2 });
          o2["!legacy"] = d2;
        }
        if (n2.length > 1) {
          n2[n2.length] = "</worksheet>";
          n2[1] = n2[1].replace("/>", ">");
        }
        return n2.join("");
      }
      function dl(e2) {
        var r2 = [];
        var t2 = e2.match(/^<c:numCache>/);
        var a2;
        (e2.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm) || []).forEach(function(e3) {
          var a3 = e3.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
          if (!a3) return;
          r2[+a3[1]] = t2 ? +a3[2] : a3[2];
        });
        var n2 = Gr((e2.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
        (e2.match(/<c:f>(.*?)<\/c:f>/gm) || []).forEach(function(e3) {
          a2 = e3.replace(/<.*?>/g, "");
        });
        return [r2, n2, a2];
      }
      function ml(e2, r2, t2, a2, n2, i2) {
        var s2 = i2 || { "!type": "chart" };
        if (!e2) return i2;
        var l2 = 0, o2 = 0, c2 = "A";
        var f2 = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
        (e2.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function(e3) {
          var r3 = dl(e3);
          f2.s.r = f2.s.c = 0;
          f2.e.c = l2;
          c2 = Ca(l2);
          r3[0].forEach(function(e4, t3) {
            s2[c2 + ya(t3)] = { t: "n", v: e4, z: r3[1] };
            o2 = t3;
          });
          if (f2.e.r < o2) f2.e.r = o2;
          ++l2;
        });
        if (l2 > 0) s2["!ref"] = Oa(f2);
        return s2;
      }
      dn.CS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet";
      function vl(e2, r2, t2, a2, n2) {
        if (!e2) return e2;
        if (!a2) a2 = { "!id": {} };
        var i2 = { "!type": "chart", "!drawel": null, "!rel": "" };
        var s2;
        var l2 = e2.match(js);
        if (l2) Ys(l2[0], i2, n2, t2);
        if (s2 = e2.match(/drawing r:id="(.*?)"/)) i2["!rel"] = s2[1];
        if (a2["!id"][i2["!rel"]]) i2["!drawel"] = a2["!id"][i2["!rel"]];
        return i2;
      }
      function gl(e2, r2, t2, a2) {
        var n2 = [Rr, wt("chartsheet", null, { xmlns: _t[0], "xmlns:r": Ct.r })];
        n2[n2.length] = wt("drawing", null, { "r:id": "rId1" });
        bn(a2, -1, "../drawings/drawing" + (e2 + 1) + ".xml", dn.DRAW);
        if (n2.length > 2) {
          n2[n2.length] = "</chartsheet>";
          n2[1] = n2[1].replace("/>", ">");
        }
        return n2.join("");
      }
      var bl = [["allowRefreshQuery", false, "bool"], ["autoCompressPictures", true, "bool"], ["backupFile", false, "bool"], ["checkCompatibility", false, "bool"], ["CodeName", ""], ["date1904", false, "bool"], ["defaultThemeVersion", 0, "int"], ["filterPrivacy", false, "bool"], ["hidePivotFieldList", false, "bool"], ["promptedSolutions", false, "bool"], ["publishItems", false, "bool"], ["refreshAllConnections", false, "bool"], ["saveExternalLinkValues", true, "bool"], ["showBorderUnselectedTables", true, "bool"], ["showInkAnnotation", true, "bool"], ["showObjects", "all"], ["showPivotChartFilter", false, "bool"], ["updateLinks", "userSet"]];
      var wl = [["activeTab", 0, "int"], ["autoFilterDateGrouping", true, "bool"], ["firstSheet", 0, "int"], ["minimized", false, "bool"], ["showHorizontalScroll", true, "bool"], ["showSheetTabs", true, "bool"], ["showVerticalScroll", true, "bool"], ["tabRatio", 600, "int"], ["visibility", "visible"]];
      var yl = [];
      var kl = [["calcCompleted", "true"], ["calcMode", "auto"], ["calcOnSave", "true"], ["concurrentCalc", "true"], ["fullCalcOnLoad", "false"], ["fullPrecision", "true"], ["iterate", "false"], ["iterateCount", "100"], ["iterateDelta", "0.001"], ["refMode", "A1"]];
      function xl(e2, r2) {
        for (var t2 = 0; t2 != e2.length; ++t2) {
          var a2 = e2[t2];
          for (var n2 = 0; n2 != r2.length; ++n2) {
            var i2 = r2[n2];
            if (a2[i2[0]] == null) a2[i2[0]] = i2[1];
            else switch (i2[2]) {
              case "bool":
                if (typeof a2[i2[0]] == "string") a2[i2[0]] = at(a2[i2[0]]);
                break;
              case "int":
                if (typeof a2[i2[0]] == "string") a2[i2[0]] = parseInt(a2[i2[0]], 10);
                break;
            }
          }
        }
      }
      function Sl(e2, r2) {
        for (var t2 = 0; t2 != r2.length; ++t2) {
          var a2 = r2[t2];
          if (e2[a2[0]] == null) e2[a2[0]] = a2[1];
          else switch (a2[2]) {
            case "bool":
              if (typeof e2[a2[0]] == "string") e2[a2[0]] = at(e2[a2[0]]);
              break;
            case "int":
              if (typeof e2[a2[0]] == "string") e2[a2[0]] = parseInt(e2[a2[0]], 10);
              break;
          }
        }
      }
      function Cl(e2) {
        Sl(e2.WBProps, bl);
        Sl(e2.CalcPr, kl);
        xl(e2.WBView, wl);
        xl(e2.Sheets, yl);
        Ts.date1904 = at(e2.WBProps.date1904);
      }
      function _l(e2) {
        if (!e2.Workbook) return "false";
        if (!e2.Workbook.WBProps) return "false";
        return at(e2.Workbook.WBProps.date1904) ? "true" : "false";
      }
      var Al = "][*?/\\".split("");
      function Tl(e2, r2) {
        if (e2.length > 31) {
          if (r2) return false;
          throw new Error("Sheet names cannot exceed 31 chars");
        }
        var t2 = true;
        Al.forEach(function(a2) {
          if (e2.indexOf(a2) == -1) return;
          if (!r2) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
          t2 = false;
        });
        return t2;
      }
      function El(e2, r2, t2) {
        e2.forEach(function(a2, n2) {
          Tl(a2);
          for (var i2 = 0; i2 < n2; ++i2) if (a2 == e2[i2]) throw new Error("Duplicate Sheet Name: " + a2);
          if (t2) {
            var s2 = r2 && r2[n2] && r2[n2].CodeName || a2;
            if (s2.charCodeAt(0) == 95 && s2.length > 22) throw new Error("Bad Code Name: Worksheet" + s2);
          }
        });
      }
      function Fl(e2) {
        if (!e2 || !e2.SheetNames || !e2.Sheets) throw new Error("Invalid Workbook");
        if (!e2.SheetNames.length) throw new Error("Workbook is empty");
        var r2 = e2.Workbook && e2.Workbook.Sheets || [];
        El(e2.SheetNames, r2, !!e2.vbaraw);
        for (var t2 = 0; t2 < e2.SheetNames.length; ++t2) Ps(e2.Sheets[e2.SheetNames[t2]], e2.SheetNames[t2], t2);
      }
      var Dl = /<\w+:workbook/;
      function Ol(e2, r2) {
        if (!e2) throw new Error("Could not find file");
        var t2 = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" };
        var a2 = false, n2 = "xmlns";
        var i2 = {}, s2 = 0;
        e2.replace(zr, function l2(o2, c2) {
          var f2 = jr(o2);
          switch (Hr(f2[0])) {
            case "<?xml":
              break;
            case "<workbook":
              if (o2.match(Dl)) n2 = "xmlns" + o2.match(/<(\w+):/)[1];
              t2.xmlns = f2[n2];
              break;
            case "</workbook>":
              break;
            case "<fileVersion":
              delete f2[0];
              t2.AppVersion = f2;
              break;
            case "<fileVersion/>":
              ;
            case "</fileVersion>":
              break;
            case "<fileSharing":
              break;
            case "<fileSharing/>":
              break;
            case "<workbookPr":
              ;
            case "<workbookPr/>":
              bl.forEach(function(e3) {
                if (f2[e3[0]] == null) return;
                switch (e3[2]) {
                  case "bool":
                    t2.WBProps[e3[0]] = at(f2[e3[0]]);
                    break;
                  case "int":
                    t2.WBProps[e3[0]] = parseInt(f2[e3[0]], 10);
                    break;
                  default:
                    t2.WBProps[e3[0]] = f2[e3[0]];
                }
              });
              if (f2.codeName) t2.WBProps.CodeName = ot(f2.codeName);
              break;
            case "</workbookPr>":
              break;
            case "<workbookProtection":
              break;
            case "<workbookProtection/>":
              break;
            case "<bookViews":
              ;
            case "<bookViews>":
              ;
            case "</bookViews>":
              break;
            case "<workbookView":
              ;
            case "<workbookView/>":
              delete f2[0];
              t2.WBView.push(f2);
              break;
            case "</workbookView>":
              break;
            case "<sheets":
              ;
            case "<sheets>":
              ;
            case "</sheets>":
              break;
            case "<sheet":
              switch (f2.state) {
                case "hidden":
                  f2.Hidden = 1;
                  break;
                case "veryHidden":
                  f2.Hidden = 2;
                  break;
                default:
                  f2.Hidden = 0;
              }
              delete f2.state;
              f2.name = Gr(ot(f2.name));
              delete f2[0];
              t2.Sheets.push(f2);
              break;
            case "</sheet>":
              break;
            case "<functionGroups":
              ;
            case "<functionGroups/>":
              break;
            case "<functionGroup":
              break;
            case "<externalReferences":
              ;
            case "</externalReferences>":
              ;
            case "<externalReferences>":
              break;
            case "<externalReference":
              break;
            case "<definedNames/>":
              break;
            case "<definedNames>":
              ;
            case "<definedNames":
              a2 = true;
              break;
            case "</definedNames>":
              a2 = false;
              break;
            case "<definedName":
              {
                i2 = {};
                i2.Name = ot(f2.name);
                if (f2.comment) i2.Comment = f2.comment;
                if (f2.localSheetId) i2.Sheet = +f2.localSheetId;
                if (at(f2.hidden || "0")) i2.Hidden = true;
                s2 = c2 + o2.length;
              }
              break;
            case "</definedName>":
              {
                i2.Ref = Gr(ot(e2.slice(s2, c2)));
                t2.Names.push(i2);
              }
              break;
            case "<definedName/>":
              break;
            case "<calcPr":
              delete f2[0];
              t2.CalcPr = f2;
              break;
            case "<calcPr/>":
              delete f2[0];
              t2.CalcPr = f2;
              break;
            case "</calcPr>":
              break;
            case "<oleSize":
              break;
            case "<customWorkbookViews>":
              ;
            case "</customWorkbookViews>":
              ;
            case "<customWorkbookViews":
              break;
            case "<customWorkbookView":
              ;
            case "</customWorkbookView>":
              break;
            case "<pivotCaches>":
              ;
            case "</pivotCaches>":
              ;
            case "<pivotCaches":
              break;
            case "<pivotCache":
              break;
            case "<smartTagPr":
              ;
            case "<smartTagPr/>":
              break;
            case "<smartTagTypes":
              ;
            case "<smartTagTypes>":
              ;
            case "</smartTagTypes>":
              break;
            case "<smartTagType":
              break;
            case "<webPublishing":
              ;
            case "<webPublishing/>":
              break;
            case "<fileRecoveryPr":
              ;
            case "<fileRecoveryPr/>":
              break;
            case "<webPublishObjects>":
              ;
            case "<webPublishObjects":
              ;
            case "</webPublishObjects>":
              break;
            case "<webPublishObject":
              break;
            case "<extLst":
              ;
            case "<extLst>":
              ;
            case "</extLst>":
              ;
            case "<extLst/>":
              break;
            case "<ext":
              a2 = true;
              break;
            case "</ext>":
              a2 = false;
              break;
            case "<ArchID":
              break;
            case "<AlternateContent":
              ;
            case "<AlternateContent>":
              a2 = true;
              break;
            case "</AlternateContent>":
              a2 = false;
              break;
            case "<revisionPtr":
              break;
            default:
              if (!a2 && r2.WTF) throw new Error("unrecognized " + f2[0] + " in workbook");
          }
          return o2;
        });
        if (_t.indexOf(t2.xmlns) === -1) throw new Error("Unknown Namespace: " + t2.xmlns);
        Cl(t2);
        return t2;
      }
      function Ml(e2) {
        var r2 = [Rr];
        r2[r2.length] = wt("workbook", null, { xmlns: _t[0], "xmlns:r": Ct.r });
        var t2 = e2.Workbook && (e2.Workbook.Names || []).length > 0;
        var a2 = { codeName: "ThisWorkbook" };
        if (e2.Workbook && e2.Workbook.WBProps) {
          bl.forEach(function(r3) {
            if (e2.Workbook.WBProps[r3[0]] == null) return;
            if (e2.Workbook.WBProps[r3[0]] == r3[1]) return;
            a2[r3[0]] = e2.Workbook.WBProps[r3[0]];
          });
          if (e2.Workbook.WBProps.CodeName) {
            a2.codeName = e2.Workbook.WBProps.CodeName;
            delete a2.CodeName;
          }
        }
        r2[r2.length] = wt("workbookPr", null, a2);
        var n2 = e2.Workbook && e2.Workbook.Sheets || [];
        var i2 = 0;
        if (n2 && n2[0] && !!n2[0].Hidden) {
          r2[r2.length] = "<bookViews>";
          for (i2 = 0; i2 != e2.SheetNames.length; ++i2) {
            if (!n2[i2]) break;
            if (!n2[i2].Hidden) break;
          }
          if (i2 == e2.SheetNames.length) i2 = 0;
          r2[r2.length] = '<workbookView firstSheet="' + i2 + '" activeTab="' + i2 + '"/>';
          r2[r2.length] = "</bookViews>";
        }
        r2[r2.length] = "<sheets>";
        for (i2 = 0; i2 != e2.SheetNames.length; ++i2) {
          var s2 = { name: Kr(e2.SheetNames[i2].slice(0, 31)) };
          s2.sheetId = "" + (i2 + 1);
          s2["r:id"] = "rId" + (i2 + 1);
          if (n2[i2]) switch (n2[i2].Hidden) {
            case 1:
              s2.state = "hidden";
              break;
            case 2:
              s2.state = "veryHidden";
              break;
          }
          r2[r2.length] = wt("sheet", null, s2);
        }
        r2[r2.length] = "</sheets>";
        if (t2) {
          r2[r2.length] = "<definedNames>";
          if (e2.Workbook && e2.Workbook.Names) e2.Workbook.Names.forEach(function(e3) {
            var t3 = { name: e3.Name };
            if (e3.Comment) t3.comment = e3.Comment;
            if (e3.Sheet != null) t3.localSheetId = "" + e3.Sheet;
            if (e3.Hidden) t3.hidden = "1";
            if (!e3.Ref) return;
            r2[r2.length] = wt("definedName", Kr(e3.Ref), t3);
          });
          r2[r2.length] = "</definedNames>";
        }
        if (r2.length > 2) {
          r2[r2.length] = "</workbook>";
          r2[1] = r2[1].replace("/>", ">");
        }
        return r2.join("");
      }
      function Nl(e2, r2, t2) {
        if (r2.slice(-4) === ".bin") return parse_wb_bin(e2, t2);
        return Ol(e2, t2);
      }
      function Pl(e2, r2, t2, a2, n2, i2, s2, l2) {
        if (r2.slice(-4) === ".bin") return parse_ws_bin(e2, a2, t2, n2, i2, s2, l2);
        return Xs(e2, a2, t2, n2, i2, s2, l2);
      }
      function Il(e2, r2, t2, a2, n2, i2, s2, l2) {
        if (r2.slice(-4) === ".bin") return parse_cs_bin(e2, a2, t2, n2, i2, s2, l2);
        return vl(e2, a2, t2, n2, i2, s2, l2);
      }
      function Rl(e2, r2, t2, a2, n2, i2, s2, l2) {
        if (r2.slice(-4) === ".bin") return ps(e2, a2, t2, n2, i2, s2, l2);
        return ds(e2, a2, t2, n2, i2, s2, l2);
      }
      function Ll(e2, r2, t2, a2, n2, i2, s2, l2) {
        if (r2.slice(-4) === ".bin") return us(e2, a2, t2, n2, i2, s2, l2);
        return hs(e2, a2, t2, n2, i2, s2, l2);
      }
      function Bl(e2, r2, t2, a2) {
        if (r2.slice(-4) === ".bin") return parse_sty_bin(e2, t2, a2);
        return Pi(e2, t2, a2);
      }
      function $l(e2, r2, t2) {
        return Vi(e2, t2);
      }
      function zl(e2, r2, t2) {
        if (r2.slice(-4) === ".bin") return parse_sst_bin(e2, t2);
        return ti(e2, t2);
      }
      function Ul(e2, r2, t2) {
        if (r2.slice(-4) === ".bin") return parse_comments_bin(e2, t2);
        return rs(e2, t2);
      }
      function Wl(e2, r2, t2) {
        if (r2.slice(-4) === ".bin") return parse_cc_bin(e2, r2, t2);
        return parse_cc_xml(e2, r2, t2);
      }
      function jl(e2, r2, t2, a2) {
        if (t2.slice(-4) === ".bin") return Ki(e2, r2, t2, a2);
        return Ji(e2, r2, t2, a2);
      }
      function Hl(e2, r2, t2) {
        if (r2.slice(-4) === ".bin") return parse_xlmeta_bin(e2, r2, t2);
        return Gi(e2, r2, t2);
      }
      function Vl(e2, r2, t2) {
        return (r2.slice(-4) === ".bin" ? write_wb_bin : Ml)(e2, t2);
      }
      function Xl(e2, r2, t2, a2, n2) {
        return (r2.slice(-4) === ".bin" ? write_ws_bin : pl)(e2, t2, a2, n2);
      }
      function Gl(e2, r2, t2, a2, n2) {
        return (r2.slice(-4) === ".bin" ? write_cs_bin : gl)(e2, t2, a2, n2);
      }
      function Yl(e2, r2, t2) {
        return (r2.slice(-4) === ".bin" ? write_sty_bin : Ii)(e2, t2);
      }
      function Jl(e2, r2, t2) {
        return (r2.slice(-4) === ".bin" ? write_sst_bin : ni)(e2, t2);
      }
      function Kl(e2, r2, t2) {
        return (r2.slice(-4) === ".bin" ? write_comments_bin : ts)(e2, t2);
      }
      function ql(e2) {
        return (e2.slice(-4) === ".bin" ? write_xlmeta_bin : Yi)();
      }
      function Zl(e2, r2) {
        var t2 = r2 || {};
        if (m != null && t2.dense == null) t2.dense = m;
        var a2 = t2.dense ? [] : {};
        e2 = e2.replace(/<!--.*?-->/g, "");
        var n2 = e2.match(/<table/i);
        if (!n2) throw new Error("Invalid HTML: could not find <table>");
        var i2 = e2.match(/<\/table/i);
        var s2 = n2.index, l2 = i2 && i2.index || e2.length;
        var o2 = xr(e2.slice(s2, l2), /(:?<tr[^>]*>)/i, "<tr>");
        var c2 = -1, f2 = 0, u2 = 0, h2 = 0;
        var p2 = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } };
        var d2 = [];
        for (s2 = 0; s2 < o2.length; ++s2) {
          var v2 = o2[s2].trim();
          var g2 = v2.slice(0, 3).toLowerCase();
          if (g2 == "<tr") {
            ++c2;
            if (t2.sheetRows && t2.sheetRows <= c2) {
              --c2;
              break;
            }
            f2 = 0;
            continue;
          }
          if (g2 != "<td" && g2 != "<th") continue;
          var b2 = v2.split(/<\/t[dh]>/i);
          for (l2 = 0; l2 < b2.length; ++l2) {
            var w2 = b2[l2].trim();
            if (!w2.match(/<t[dh]/i)) continue;
            var y2 = w2, k2 = 0;
            while (y2.charAt(0) == "<" && (k2 = y2.indexOf(">")) > -1) y2 = y2.slice(k2 + 1);
            for (var x2 = 0; x2 < d2.length; ++x2) {
              var S2 = d2[x2];
              if (S2.s.c == f2 && S2.s.r < c2 && c2 <= S2.e.r) {
                f2 = S2.e.c + 1;
                x2 = -1;
              }
            }
            var C2 = jr(w2.slice(0, w2.indexOf(">")));
            h2 = C2.colspan ? +C2.colspan : 1;
            if ((u2 = +C2.rowspan) > 1 || h2 > 1) d2.push({ s: { r: c2, c: f2 }, e: { r: c2 + (u2 || 1) - 1, c: f2 + h2 - 1 } });
            var _2 = C2.t || C2["data-t"] || "";
            if (!y2.length) {
              f2 += h2;
              continue;
            }
            y2 = ut(y2);
            if (p2.s.r > c2) p2.s.r = c2;
            if (p2.e.r < c2) p2.e.r = c2;
            if (p2.s.c > f2) p2.s.c = f2;
            if (p2.e.c < f2) p2.e.c = f2;
            if (!y2.length) {
              f2 += h2;
              continue;
            }
            var A2 = { t: "s", v: y2 };
            if (t2.raw || !y2.trim().length || _2 == "s") {
            } else if (y2 === "TRUE") A2 = { t: "b", v: true };
            else if (y2 === "FALSE") A2 = { t: "b", v: false };
            else if (!isNaN(wr(y2))) A2 = { t: "n", v: wr(y2) };
            else if (!isNaN(kr(y2).getDate())) {
              A2 = { t: "d", v: mr(y2) };
              if (!t2.cellDates) A2 = { t: "n", v: sr(A2.v) };
              A2.z = t2.dateNF || X[14];
            }
            if (t2.dense) {
              if (!a2[c2]) a2[c2] = [];
              a2[c2][f2] = A2;
            } else a2[Fa({ r: c2, c: f2 })] = A2;
            f2 += h2;
          }
        }
        a2["!ref"] = Oa(p2);
        if (d2.length) a2["!merges"] = d2;
        return a2;
      }
      function Ql(e2, r2, t2, a2) {
        var n2 = e2["!merges"] || [];
        var i2 = [];
        for (var s2 = r2.s.c; s2 <= r2.e.c; ++s2) {
          var l2 = 0, o2 = 0;
          for (var c2 = 0; c2 < n2.length; ++c2) {
            if (n2[c2].s.r > t2 || n2[c2].s.c > s2) continue;
            if (n2[c2].e.r < t2 || n2[c2].e.c < s2) continue;
            if (n2[c2].s.r < t2 || n2[c2].s.c < s2) {
              l2 = -1;
              break;
            }
            l2 = n2[c2].e.r - n2[c2].s.r + 1;
            o2 = n2[c2].e.c - n2[c2].s.c + 1;
            break;
          }
          if (l2 < 0) continue;
          var f2 = Fa({ r: t2, c: s2 });
          var u2 = a2.dense ? (e2[t2] || [])[s2] : e2[f2];
          var h2 = u2 && u2.v != null && (u2.h || Qr(u2.w || (Pa(u2), u2.w) || "")) || "";
          var p2 = {};
          if (l2 > 1) p2.rowspan = l2;
          if (o2 > 1) p2.colspan = o2;
          if (a2.editable) h2 = '<span contenteditable="true">' + h2 + "</span>";
          else if (u2) {
            p2["data-t"] = u2 && u2.t || "z";
            if (u2.v != null) p2["data-v"] = u2.v;
            if (u2.z != null) p2["data-z"] = u2.z;
            if (u2.l && (u2.l.Target || "#").charAt(0) != "#") h2 = '<a href="' + u2.l.Target + '">' + h2 + "</a>";
          }
          p2.id = (a2.id || "sjs") + "-" + f2;
          i2.push(wt("td", h2, p2));
        }
        var d2 = "<tr>";
        return d2 + i2.join("") + "</tr>";
      }
      var eo = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>';
      var ro = "</body></html>";
      function to(e2, r2) {
        var t2 = e2.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
        if (!t2 || t2.length == 0) throw new Error("Invalid HTML: could not find <table>");
        if (t2.length == 1) return Ia(Zl(t2[0], r2), r2);
        var a2 = hc();
        t2.forEach(function(e3, t3) {
          pc(a2, Zl(e3, r2), "Sheet" + (t3 + 1));
        });
        return a2;
      }
      function ao(e2, r2, t2) {
        var a2 = [];
        return a2.join("") + "<table" + (t2 && t2.id ? ' id="' + t2.id + '"' : "") + ">";
      }
      function no(e2, r2) {
        var t2 = r2 || {};
        var a2 = t2.header != null ? t2.header : eo;
        var n2 = t2.footer != null ? t2.footer : ro;
        var i2 = [a2];
        var s2 = Da(e2["!ref"]);
        t2.dense = Array.isArray(e2);
        i2.push(ao(e2, s2, t2));
        for (var l2 = s2.s.r; l2 <= s2.e.r; ++l2) i2.push(Ql(e2, s2, l2, t2));
        i2.push("</table>" + n2);
        return i2.join("");
      }
      function io(e2, r2, t2) {
        var a2 = t2 || {};
        if (m != null) a2.dense = m;
        var n2 = 0, i2 = 0;
        if (a2.origin != null) {
          if (typeof a2.origin == "number") n2 = a2.origin;
          else {
            var s2 = typeof a2.origin == "string" ? Ea(a2.origin) : a2.origin;
            n2 = s2.r;
            i2 = s2.c;
          }
        }
        var l2 = r2.getElementsByTagName("tr");
        var o2 = Math.min(a2.sheetRows || 1e7, l2.length);
        var c2 = { s: { r: 0, c: 0 }, e: { r: n2, c: i2 } };
        if (e2["!ref"]) {
          var f2 = Da(e2["!ref"]);
          c2.s.r = Math.min(c2.s.r, f2.s.r);
          c2.s.c = Math.min(c2.s.c, f2.s.c);
          c2.e.r = Math.max(c2.e.r, f2.e.r);
          c2.e.c = Math.max(c2.e.c, f2.e.c);
          if (n2 == -1) c2.e.r = n2 = f2.e.r + 1;
        }
        var u2 = [], h2 = 0;
        var p2 = e2["!rows"] || (e2["!rows"] = []);
        var d2 = 0, v2 = 0, g2 = 0, b2 = 0, w2 = 0, y2 = 0;
        if (!e2["!cols"]) e2["!cols"] = [];
        for (; d2 < l2.length && v2 < o2; ++d2) {
          var k2 = l2[d2];
          if (oo(k2)) {
            if (a2.display) continue;
            p2[v2] = { hidden: true };
          }
          var x2 = k2.children;
          for (g2 = b2 = 0; g2 < x2.length; ++g2) {
            var S2 = x2[g2];
            if (a2.display && oo(S2)) continue;
            var C2 = S2.hasAttribute("data-v") ? S2.getAttribute("data-v") : S2.hasAttribute("v") ? S2.getAttribute("v") : ut(S2.innerHTML);
            var _2 = S2.getAttribute("data-z") || S2.getAttribute("z");
            for (h2 = 0; h2 < u2.length; ++h2) {
              var A2 = u2[h2];
              if (A2.s.c == b2 + i2 && A2.s.r < v2 + n2 && v2 + n2 <= A2.e.r) {
                b2 = A2.e.c + 1 - i2;
                h2 = -1;
              }
            }
            y2 = +S2.getAttribute("colspan") || 1;
            if ((w2 = +S2.getAttribute("rowspan") || 1) > 1 || y2 > 1) u2.push({ s: { r: v2 + n2, c: b2 + i2 }, e: { r: v2 + n2 + (w2 || 1) - 1, c: b2 + i2 + (y2 || 1) - 1 } });
            var T2 = { t: "s", v: C2 };
            var E2 = S2.getAttribute("data-t") || S2.getAttribute("t") || "";
            if (C2 != null) {
              if (C2.length == 0) T2.t = E2 || "z";
              else if (a2.raw || C2.trim().length == 0 || E2 == "s") {
              } else if (C2 === "TRUE") T2 = { t: "b", v: true };
              else if (C2 === "FALSE") T2 = { t: "b", v: false };
              else if (!isNaN(wr(C2))) T2 = { t: "n", v: wr(C2) };
              else if (!isNaN(kr(C2).getDate())) {
                T2 = { t: "d", v: mr(C2) };
                if (!a2.cellDates) T2 = { t: "n", v: sr(T2.v) };
                T2.z = a2.dateNF || X[14];
              }
            }
            if (T2.z === void 0 && _2 != null) T2.z = _2;
            var F2 = "", D2 = S2.getElementsByTagName("A");
            if (D2 && D2.length) {
              for (var O2 = 0; O2 < D2.length; ++O2) if (D2[O2].hasAttribute("href")) {
                F2 = D2[O2].getAttribute("href");
                if (F2.charAt(0) != "#") break;
              }
            }
            if (F2 && F2.charAt(0) != "#") T2.l = { Target: F2 };
            if (a2.dense) {
              if (!e2[v2 + n2]) e2[v2 + n2] = [];
              e2[v2 + n2][b2 + i2] = T2;
            } else e2[Fa({ c: b2 + i2, r: v2 + n2 })] = T2;
            if (c2.e.c < b2 + i2) c2.e.c = b2 + i2;
            b2 += y2;
          }
          ++v2;
        }
        if (u2.length) e2["!merges"] = (e2["!merges"] || []).concat(u2);
        c2.e.r = Math.max(c2.e.r, v2 - 1 + n2);
        e2["!ref"] = Oa(c2);
        if (v2 >= o2) e2["!fullref"] = Oa((c2.e.r = l2.length - d2 + v2 - 1 + n2, c2));
        return e2;
      }
      function so(e2, r2) {
        var t2 = r2 || {};
        var a2 = t2.dense ? [] : {};
        return io(a2, e2, r2);
      }
      function lo(e2, r2) {
        return Ia(so(e2, r2), r2);
      }
      function oo(e2) {
        var r2 = "";
        var t2 = co(e2);
        if (t2) r2 = t2(e2).getPropertyValue("display");
        if (!r2) r2 = e2.style && e2.style.display;
        return r2 === "none";
      }
      function co(e2) {
        if (e2.ownerDocument.defaultView && typeof e2.ownerDocument.defaultView.getComputedStyle === "function") return e2.ownerDocument.defaultView.getComputedStyle;
        if (typeof getComputedStyle === "function") return getComputedStyle;
        return null;
      }
      function fo(e2) {
        var r2 = e2.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function(e3, r3) {
          return Array(parseInt(r3, 10) + 1).join(" ");
        }).replace(/<text:tab[^>]*\/>/g, "	").replace(/<text:line-break\/>/g, "\n");
        var t2 = Gr(r2.replace(/<[^>]*>/g, ""));
        return [t2];
      }
      var uo = { day: ["d", "dd"], month: ["m", "mm"], year: ["y", "yy"], hours: ["h", "hh"], minutes: ["m", "mm"], seconds: ["s", "ss"], "am-pm": ["A/P", "AM/PM"], "day-of-week": ["ddd", "dddd"], era: ["e", "ee"], quarter: ["\\Qm", 'm\\"th quarter"'] };
      function ho(e2, r2) {
        var t2 = r2 || {};
        if (m != null && t2.dense == null) t2.dense = m;
        var a2 = xt(e2);
        var n2 = [], i2;
        var s2;
        var l2 = { name: "" }, o2 = "", c2 = 0;
        var f2;
        var u2;
        var h2 = {}, p2 = [];
        var d2 = t2.dense ? [] : {};
        var v2, g2;
        var b2 = { value: "" };
        var w2 = "", y2 = 0, k2;
        var x2 = [];
        var S2 = -1, C2 = -1, _2 = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } };
        var A2 = 0;
        var T2 = {};
        var E2 = [], F2 = {}, D2 = 0, O2 = 0;
        var M2 = [], N2 = 1, P2 = 1;
        var I2 = [];
        var R2 = { Names: [] };
        var L2 = {};
        var B2 = ["", ""];
        var $2 = [], z2 = {};
        var U2 = "", W2 = 0;
        var j2 = false, H2 = false;
        var V2 = 0;
        St.lastIndex = 0;
        a2 = a2.replace(/<!--([\s\S]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
        while (v2 = St.exec(a2)) switch (v2[3] = v2[3].replace(/_.*$/, "")) {
          case "table":
            ;
          case "工作表":
            if (v2[1] === "/") {
              if (_2.e.c >= _2.s.c && _2.e.r >= _2.s.r) d2["!ref"] = Oa(_2);
              else d2["!ref"] = "A1:A1";
              if (t2.sheetRows > 0 && t2.sheetRows <= _2.e.r) {
                d2["!fullref"] = d2["!ref"];
                _2.e.r = t2.sheetRows - 1;
                d2["!ref"] = Oa(_2);
              }
              if (E2.length) d2["!merges"] = E2;
              if (M2.length) d2["!rows"] = M2;
              f2.name = f2["名称"] || f2.name;
              if (typeof JSON !== "undefined") JSON.stringify(f2);
              p2.push(f2.name);
              h2[f2.name] = d2;
              H2 = false;
            } else if (v2[0].charAt(v2[0].length - 2) !== "/") {
              f2 = jr(v2[0], false);
              S2 = C2 = -1;
              _2.s.r = _2.s.c = 1e7;
              _2.e.r = _2.e.c = 0;
              d2 = t2.dense ? [] : {};
              E2 = [];
              M2 = [];
              H2 = true;
            }
            break;
          case "table-row-group":
            if (v2[1] === "/") --A2;
            else ++A2;
            break;
          case "table-row":
            ;
          case "行":
            if (v2[1] === "/") {
              S2 += N2;
              N2 = 1;
              break;
            }
            u2 = jr(v2[0], false);
            if (u2["行号"]) S2 = u2["行号"] - 1;
            else if (S2 == -1) S2 = 0;
            N2 = +u2["number-rows-repeated"] || 1;
            if (N2 < 10) {
              for (V2 = 0; V2 < N2; ++V2) if (A2 > 0) M2[S2 + V2] = { level: A2 };
            }
            C2 = -1;
            break;
          case "covered-table-cell":
            if (v2[1] !== "/") ++C2;
            if (t2.sheetStubs) {
              if (t2.dense) {
                if (!d2[S2]) d2[S2] = [];
                d2[S2][C2] = { t: "z" };
              } else d2[Fa({ r: S2, c: C2 })] = { t: "z" };
            }
            w2 = "";
            x2 = [];
            break;
          case "table-cell":
            ;
          case "数据":
            if (v2[0].charAt(v2[0].length - 2) === "/") {
              ++C2;
              b2 = jr(v2[0], false);
              P2 = parseInt(b2["number-columns-repeated"] || "1", 10);
              g2 = { t: "z", v: null };
              if (b2.formula && t2.cellFormula != false) g2.f = xs(Gr(b2.formula));
              if ((b2["数据类型"] || b2["value-type"]) == "string") {
                g2.t = "s";
                g2.v = Gr(b2["string-value"] || "");
                if (t2.dense) {
                  if (!d2[S2]) d2[S2] = [];
                  d2[S2][C2] = g2;
                } else {
                  d2[Fa({ r: S2, c: C2 })] = g2;
                }
              }
              C2 += P2 - 1;
            } else if (v2[1] !== "/") {
              ++C2;
              w2 = "";
              y2 = 0;
              x2 = [];
              P2 = 1;
              var X2 = N2 ? S2 + N2 - 1 : S2;
              if (C2 > _2.e.c) _2.e.c = C2;
              if (C2 < _2.s.c) _2.s.c = C2;
              if (S2 < _2.s.r) _2.s.r = S2;
              if (X2 > _2.e.r) _2.e.r = X2;
              b2 = jr(v2[0], false);
              $2 = [];
              z2 = {};
              g2 = { t: b2["数据类型"] || b2["value-type"], v: null };
              if (t2.cellFormula) {
                if (b2.formula) b2.formula = Gr(b2.formula);
                if (b2["number-matrix-columns-spanned"] && b2["number-matrix-rows-spanned"]) {
                  D2 = parseInt(b2["number-matrix-rows-spanned"], 10) || 0;
                  O2 = parseInt(b2["number-matrix-columns-spanned"], 10) || 0;
                  F2 = { s: { r: S2, c: C2 }, e: { r: S2 + D2 - 1, c: C2 + O2 - 1 } };
                  g2.F = Oa(F2);
                  I2.push([F2, g2.F]);
                }
                if (b2.formula) g2.f = xs(b2.formula);
                else for (V2 = 0; V2 < I2.length; ++V2) if (S2 >= I2[V2][0].s.r && S2 <= I2[V2][0].e.r) {
                  if (C2 >= I2[V2][0].s.c && C2 <= I2[V2][0].e.c) g2.F = I2[V2][1];
                }
              }
              if (b2["number-columns-spanned"] || b2["number-rows-spanned"]) {
                D2 = parseInt(b2["number-rows-spanned"], 10) || 0;
                O2 = parseInt(b2["number-columns-spanned"], 10) || 0;
                F2 = { s: { r: S2, c: C2 }, e: { r: S2 + D2 - 1, c: C2 + O2 - 1 } };
                E2.push(F2);
              }
              if (b2["number-columns-repeated"]) P2 = parseInt(b2["number-columns-repeated"], 10);
              switch (g2.t) {
                case "boolean":
                  g2.t = "b";
                  g2.v = at(b2["boolean-value"]);
                  break;
                case "float":
                  g2.t = "n";
                  g2.v = parseFloat(b2.value);
                  break;
                case "percentage":
                  g2.t = "n";
                  g2.v = parseFloat(b2.value);
                  break;
                case "currency":
                  g2.t = "n";
                  g2.v = parseFloat(b2.value);
                  break;
                case "date":
                  g2.t = "d";
                  g2.v = mr(b2["date-value"]);
                  if (!t2.cellDates) {
                    g2.t = "n";
                    g2.v = sr(g2.v);
                  }
                  g2.z = "m/d/yy";
                  break;
                case "time":
                  g2.t = "n";
                  g2.v = ur(b2["time-value"]) / 86400;
                  if (t2.cellDates) {
                    g2.t = "d";
                    g2.v = fr(g2.v);
                  }
                  g2.z = "HH:MM:SS";
                  break;
                case "number":
                  g2.t = "n";
                  g2.v = parseFloat(b2["数据数值"]);
                  break;
                default:
                  if (g2.t === "string" || g2.t === "text" || !g2.t) {
                    g2.t = "s";
                    if (b2["string-value"] != null) {
                      w2 = Gr(b2["string-value"]);
                      x2 = [];
                    }
                  } else throw new Error("Unsupported value type " + g2.t);
              }
            } else {
              j2 = false;
              if (g2.t === "s") {
                g2.v = w2 || "";
                if (x2.length) g2.R = x2;
                j2 = y2 == 0;
              }
              if (L2.Target) g2.l = L2;
              if ($2.length > 0) {
                g2.c = $2;
                $2 = [];
              }
              if (w2 && t2.cellText !== false) g2.w = w2;
              if (j2) {
                g2.t = "z";
                delete g2.v;
              }
              if (!j2 || t2.sheetStubs) {
                if (!(t2.sheetRows && t2.sheetRows <= S2)) {
                  for (var G2 = 0; G2 < N2; ++G2) {
                    P2 = parseInt(b2["number-columns-repeated"] || "1", 10);
                    if (t2.dense) {
                      if (!d2[S2 + G2]) d2[S2 + G2] = [];
                      d2[S2 + G2][C2] = G2 == 0 ? g2 : gr(g2);
                      while (--P2 > 0) d2[S2 + G2][C2 + P2] = gr(g2);
                    } else {
                      d2[Fa({ r: S2 + G2, c: C2 })] = g2;
                      while (--P2 > 0) d2[Fa({ r: S2 + G2, c: C2 + P2 })] = gr(g2);
                    }
                    if (_2.e.c <= C2) _2.e.c = C2;
                  }
                }
              }
              P2 = parseInt(b2["number-columns-repeated"] || "1", 10);
              C2 += P2 - 1;
              P2 = 0;
              g2 = {};
              w2 = "";
              x2 = [];
            }
            L2 = {};
            break;
          case "document":
            ;
          case "document-content":
            ;
          case "电子表格文档":
            ;
          case "spreadsheet":
            ;
          case "主体":
            ;
          case "scripts":
            ;
          case "styles":
            ;
          case "font-face-decls":
            ;
          case "master-styles":
            if (v2[1] === "/") {
              if ((i2 = n2.pop())[0] !== v2[3]) throw "Bad state: " + i2;
            } else if (v2[0].charAt(v2[0].length - 2) !== "/") n2.push([v2[3], true]);
            break;
          case "annotation":
            if (v2[1] === "/") {
              if ((i2 = n2.pop())[0] !== v2[3]) throw "Bad state: " + i2;
              z2.t = w2;
              if (x2.length) z2.R = x2;
              z2.a = U2;
              $2.push(z2);
            } else if (v2[0].charAt(v2[0].length - 2) !== "/") {
              n2.push([v2[3], false]);
            }
            U2 = "";
            W2 = 0;
            w2 = "";
            y2 = 0;
            x2 = [];
            break;
          case "creator":
            if (v2[1] === "/") {
              U2 = a2.slice(W2, v2.index);
            } else W2 = v2.index + v2[0].length;
            break;
          case "meta":
            ;
          case "元数据":
            ;
          case "settings":
            ;
          case "config-item-set":
            ;
          case "config-item-map-indexed":
            ;
          case "config-item-map-entry":
            ;
          case "config-item-map-named":
            ;
          case "shapes":
            ;
          case "frame":
            ;
          case "text-box":
            ;
          case "image":
            ;
          case "data-pilot-tables":
            ;
          case "list-style":
            ;
          case "form":
            ;
          case "dde-links":
            ;
          case "event-listeners":
            ;
          case "chart":
            if (v2[1] === "/") {
              if ((i2 = n2.pop())[0] !== v2[3]) throw "Bad state: " + i2;
            } else if (v2[0].charAt(v2[0].length - 2) !== "/") n2.push([v2[3], false]);
            w2 = "";
            y2 = 0;
            x2 = [];
            break;
          case "scientific-number":
            break;
          case "currency-symbol":
            break;
          case "currency-style":
            break;
          case "number-style":
            ;
          case "percentage-style":
            ;
          case "date-style":
            ;
          case "time-style":
            if (v2[1] === "/") {
              T2[l2.name] = o2;
              if ((i2 = n2.pop())[0] !== v2[3]) throw "Bad state: " + i2;
            } else if (v2[0].charAt(v2[0].length - 2) !== "/") {
              o2 = "";
              l2 = jr(v2[0], false);
              n2.push([v2[3], true]);
            }
            break;
          case "script":
            break;
          case "libraries":
            break;
          case "automatic-styles":
            break;
          case "default-style":
            ;
          case "page-layout":
            break;
          case "style":
            break;
          case "map":
            break;
          case "font-face":
            break;
          case "paragraph-properties":
            break;
          case "table-properties":
            break;
          case "table-column-properties":
            break;
          case "table-row-properties":
            break;
          case "table-cell-properties":
            break;
          case "number":
            switch (n2[n2.length - 1][0]) {
              case "time-style":
                ;
              case "date-style":
                s2 = jr(v2[0], false);
                o2 += uo[v2[3]][s2.style === "long" ? 1 : 0];
                break;
            }
            break;
          case "fraction":
            break;
          case "day":
            ;
          case "month":
            ;
          case "year":
            ;
          case "era":
            ;
          case "day-of-week":
            ;
          case "week-of-year":
            ;
          case "quarter":
            ;
          case "hours":
            ;
          case "minutes":
            ;
          case "seconds":
            ;
          case "am-pm":
            switch (n2[n2.length - 1][0]) {
              case "time-style":
                ;
              case "date-style":
                s2 = jr(v2[0], false);
                o2 += uo[v2[3]][s2.style === "long" ? 1 : 0];
                break;
            }
            break;
          case "boolean-style":
            break;
          case "boolean":
            break;
          case "text-style":
            break;
          case "text":
            if (v2[0].slice(-2) === "/>") break;
            else if (v2[1] === "/") switch (n2[n2.length - 1][0]) {
              case "number-style":
                ;
              case "date-style":
                ;
              case "time-style":
                o2 += a2.slice(c2, v2.index);
                break;
            }
            else c2 = v2.index + v2[0].length;
            break;
          case "named-range":
            s2 = jr(v2[0], false);
            B2 = Cs(s2["cell-range-address"]);
            var Y2 = { Name: s2.name, Ref: B2[0] + "!" + B2[1] };
            if (H2) Y2.Sheet = p2.length;
            R2.Names.push(Y2);
            break;
          case "text-content":
            break;
          case "text-properties":
            break;
          case "embedded-text":
            break;
          case "body":
            ;
          case "电子表格":
            break;
          case "forms":
            break;
          case "table-column":
            break;
          case "table-header-rows":
            break;
          case "table-rows":
            break;
          case "table-column-group":
            break;
          case "table-header-columns":
            break;
          case "table-columns":
            break;
          case "null-date":
            break;
          case "graphic-properties":
            break;
          case "calculation-settings":
            break;
          case "named-expressions":
            break;
          case "label-range":
            break;
          case "label-ranges":
            break;
          case "named-expression":
            break;
          case "sort":
            break;
          case "sort-by":
            break;
          case "sort-groups":
            break;
          case "tab":
            break;
          case "line-break":
            break;
          case "span":
            break;
          case "p":
            ;
          case "文本串":
            if (["master-styles"].indexOf(n2[n2.length - 1][0]) > -1) break;
            if (v2[1] === "/" && (!b2 || !b2["string-value"])) {
              var J2 = fo(a2.slice(y2, v2.index), k2);
              w2 = (w2.length > 0 ? w2 + "\n" : "") + J2[0];
            } else {
              k2 = jr(v2[0], false);
              y2 = v2.index + v2[0].length;
            }
            break;
          case "s":
            break;
          case "database-range":
            if (v2[1] === "/") break;
            try {
              B2 = Cs(jr(v2[0])["target-range-address"]);
              h2[B2[0]]["!autofilter"] = { ref: B2[1] };
            } catch (K2) {
            }
            break;
          case "date":
            break;
          case "object":
            break;
          case "title":
            ;
          case "标题":
            break;
          case "desc":
            break;
          case "binary-data":
            break;
          case "table-source":
            break;
          case "scenario":
            break;
          case "iteration":
            break;
          case "content-validations":
            break;
          case "content-validation":
            break;
          case "help-message":
            break;
          case "error-message":
            break;
          case "database-ranges":
            break;
          case "filter":
            break;
          case "filter-and":
            break;
          case "filter-or":
            break;
          case "filter-condition":
            break;
          case "list-level-style-bullet":
            break;
          case "list-level-style-number":
            break;
          case "list-level-properties":
            break;
          case "sender-firstname":
            ;
          case "sender-lastname":
            ;
          case "sender-initials":
            ;
          case "sender-title":
            ;
          case "sender-position":
            ;
          case "sender-email":
            ;
          case "sender-phone-private":
            ;
          case "sender-fax":
            ;
          case "sender-company":
            ;
          case "sender-phone-work":
            ;
          case "sender-street":
            ;
          case "sender-city":
            ;
          case "sender-postal-code":
            ;
          case "sender-country":
            ;
          case "sender-state-or-province":
            ;
          case "author-name":
            ;
          case "author-initials":
            ;
          case "chapter":
            ;
          case "file-name":
            ;
          case "template-name":
            ;
          case "sheet-name":
            break;
          case "event-listener":
            break;
          case "initial-creator":
            ;
          case "creation-date":
            ;
          case "print-date":
            ;
          case "generator":
            ;
          case "document-statistic":
            ;
          case "user-defined":
            ;
          case "editing-duration":
            ;
          case "editing-cycles":
            break;
          case "config-item":
            break;
          case "page-number":
            break;
          case "page-count":
            break;
          case "time":
            break;
          case "cell-range-source":
            break;
          case "detective":
            break;
          case "operation":
            break;
          case "highlighted-range":
            break;
          case "data-pilot-table":
            ;
          case "source-cell-range":
            ;
          case "source-service":
            ;
          case "data-pilot-field":
            ;
          case "data-pilot-level":
            ;
          case "data-pilot-subtotals":
            ;
          case "data-pilot-subtotal":
            ;
          case "data-pilot-members":
            ;
          case "data-pilot-member":
            ;
          case "data-pilot-display-info":
            ;
          case "data-pilot-sort-info":
            ;
          case "data-pilot-layout-info":
            ;
          case "data-pilot-field-reference":
            ;
          case "data-pilot-groups":
            ;
          case "data-pilot-group":
            ;
          case "data-pilot-group-member":
            break;
          case "rect":
            break;
          case "dde-connection-decls":
            ;
          case "dde-connection-decl":
            ;
          case "dde-link":
            ;
          case "dde-source":
            break;
          case "properties":
            break;
          case "property":
            break;
          case "a":
            if (v2[1] !== "/") {
              L2 = jr(v2[0], false);
              if (!L2.href) break;
              L2.Target = Gr(L2.href);
              delete L2.href;
              if (L2.Target.charAt(0) == "#" && L2.Target.indexOf(".") > -1) {
                B2 = Cs(L2.Target.slice(1));
                L2.Target = "#" + B2[0] + "!" + B2[1];
              } else if (L2.Target.match(/^\.\.[\\\/]/)) L2.Target = L2.Target.slice(3);
            }
            break;
          case "table-protection":
            break;
          case "data-pilot-grand-total":
            break;
          case "office-document-common-attrs":
            break;
          default:
            switch (v2[2]) {
              case "dc:":
                ;
              case "calcext:":
                ;
              case "loext:":
                ;
              case "ooo:":
                ;
              case "chartooo:":
                ;
              case "draw:":
                ;
              case "style:":
                ;
              case "chart:":
                ;
              case "form:":
                ;
              case "uof:":
                ;
              case "表:":
                ;
              case "字:":
                break;
              default:
                if (t2.WTF) throw new Error(v2);
            }
            ;
        }
        var q2 = { Sheets: h2, SheetNames: p2, Workbook: R2 };
        if (t2.bookSheets) delete q2.Sheets;
        return q2;
      }
      function po(e2, r2) {
        r2 = r2 || {};
        if (Ar(e2, "META-INF/manifest.xml")) yn(Er(e2, "META-INF/manifest.xml"), r2);
        var t2 = Fr(e2, "content.xml");
        if (!t2) throw new Error("Missing content.xml in ODS / UOF file");
        var a2 = ho(ot(t2), r2);
        if (Ar(e2, "meta.xml")) a2.Props = En(Er(e2, "meta.xml"));
        return a2;
      }
      function mo(e2, r2) {
        return ho(e2, r2);
      }
      var vo = (function() {
        var e2 = ["<office:master-styles>", '<style:master-page style:name="mp1" style:page-layout-name="mp1">', "<style:header/>", '<style:header-left style:display="false"/>', "<style:footer/>", '<style:footer-left style:display="false"/>', "</style:master-page>", "</office:master-styles>"].join("");
        var r2 = "<office:document-styles " + bt({ "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0", "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0", "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0", "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", "xmlns:xlink": "http://www.w3.org/1999/xlink", "xmlns:dc": "http://purl.org/dc/elements/1.1/", "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2", "office:version": "1.2" }) + ">" + e2 + "</office:document-styles>";
        return function t2() {
          return Rr + r2;
        };
      })();
      var go = /* @__PURE__ */ (function() {
        var e2 = function(e3) {
          return Kr(e3).replace(/  +/g, function(e4) {
            return '<text:s text:c="' + e4.length + '"/>';
          }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
        };
        var r2 = "          <table:table-cell />\n";
        var t2 = "          <table:covered-table-cell/>\n";
        var a2 = function(a3, n3, i2) {
          var s2 = [];
          s2.push('      <table:table table:name="' + Kr(n3.SheetNames[i2]) + '" table:style-name="ta1">\n');
          var l2 = 0, o2 = 0, c2 = Da(a3["!ref"] || "A1");
          var f2 = a3["!merges"] || [], u2 = 0;
          var h2 = Array.isArray(a3);
          if (a3["!cols"]) {
            for (o2 = 0; o2 <= c2.e.c; ++o2) s2.push("        <table:table-column" + (a3["!cols"][o2] ? ' table:style-name="co' + a3["!cols"][o2].ods + '"' : "") + "></table:table-column>\n");
          }
          var p2 = "", d2 = a3["!rows"] || [];
          for (l2 = 0; l2 < c2.s.r; ++l2) {
            p2 = d2[l2] ? ' table:style-name="ro' + d2[l2].ods + '"' : "";
            s2.push("        <table:table-row" + p2 + "></table:table-row>\n");
          }
          for (; l2 <= c2.e.r; ++l2) {
            p2 = d2[l2] ? ' table:style-name="ro' + d2[l2].ods + '"' : "";
            s2.push("        <table:table-row" + p2 + ">\n");
            for (o2 = 0; o2 < c2.s.c; ++o2) s2.push(r2);
            for (; o2 <= c2.e.c; ++o2) {
              var m2 = false, v2 = {}, g2 = "";
              for (u2 = 0; u2 != f2.length; ++u2) {
                if (f2[u2].s.c > o2) continue;
                if (f2[u2].s.r > l2) continue;
                if (f2[u2].e.c < o2) continue;
                if (f2[u2].e.r < l2) continue;
                if (f2[u2].s.c != o2 || f2[u2].s.r != l2) m2 = true;
                v2["table:number-columns-spanned"] = f2[u2].e.c - f2[u2].s.c + 1;
                v2["table:number-rows-spanned"] = f2[u2].e.r - f2[u2].s.r + 1;
                break;
              }
              if (m2) {
                s2.push(t2);
                continue;
              }
              var b2 = Fa({ r: l2, c: o2 }), w2 = h2 ? (a3[l2] || [])[o2] : a3[b2];
              if (w2 && w2.f) {
                v2["table:formula"] = Kr(Ss(w2.f));
                if (w2.F) {
                  if (w2.F.slice(0, b2.length) == b2) {
                    var y2 = Da(w2.F);
                    v2["table:number-matrix-columns-spanned"] = y2.e.c - y2.s.c + 1;
                    v2["table:number-matrix-rows-spanned"] = y2.e.r - y2.s.r + 1;
                  }
                }
              }
              if (!w2) {
                s2.push(r2);
                continue;
              }
              switch (w2.t) {
                case "b":
                  g2 = w2.v ? "TRUE" : "FALSE";
                  v2["office:value-type"] = "boolean";
                  v2["office:boolean-value"] = w2.v ? "true" : "false";
                  break;
                case "n":
                  g2 = w2.w || String(w2.v || 0);
                  v2["office:value-type"] = "float";
                  v2["office:value"] = w2.v || 0;
                  break;
                case "s":
                  ;
                case "str":
                  g2 = w2.v == null ? "" : w2.v;
                  v2["office:value-type"] = "string";
                  break;
                case "d":
                  g2 = w2.w || mr(w2.v).toISOString();
                  v2["office:value-type"] = "date";
                  v2["office:date-value"] = mr(w2.v).toISOString();
                  v2["table:style-name"] = "ce1";
                  break;
                default:
                  s2.push(r2);
                  continue;
              }
              var k2 = e2(g2);
              if (w2.l && w2.l.Target) {
                var x2 = w2.l.Target;
                x2 = x2.charAt(0) == "#" ? "#" + _s(x2.slice(1)) : x2;
                if (x2.charAt(0) != "#" && !x2.match(/^\w+:/)) x2 = "../" + x2;
                k2 = wt("text:a", k2, { "xlink:href": x2.replace(/&/g, "&amp;") });
              }
              s2.push("          " + wt("table:table-cell", wt("text:p", k2, {}), v2) + "\n");
            }
            s2.push("        </table:table-row>\n");
          }
          s2.push("      </table:table>\n");
          return s2.join("");
        };
        var n2 = function(e3, r3) {
          e3.push(" <office:automatic-styles>\n");
          e3.push('  <number:date-style style:name="N37" number:automatic-order="true">\n');
          e3.push('   <number:month number:style="long"/>\n');
          e3.push("   <number:text>/</number:text>\n");
          e3.push('   <number:day number:style="long"/>\n');
          e3.push("   <number:text>/</number:text>\n");
          e3.push("   <number:year/>\n");
          e3.push("  </number:date-style>\n");
          var t3 = 0;
          r3.SheetNames.map(function(e4) {
            return r3.Sheets[e4];
          }).forEach(function(r4) {
            if (!r4) return;
            if (r4["!cols"]) {
              for (var a4 = 0; a4 < r4["!cols"].length; ++a4) if (r4["!cols"][a4]) {
                var n3 = r4["!cols"][a4];
                if (n3.width == null && n3.wpx == null && n3.wch == null) continue;
                wi(n3);
                n3.ods = t3;
                var i2 = r4["!cols"][a4].wpx + "px";
                e3.push('  <style:style style:name="co' + t3 + '" style:family="table-column">\n');
                e3.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + i2 + '"/>\n');
                e3.push("  </style:style>\n");
                ++t3;
              }
            }
          });
          var a3 = 0;
          r3.SheetNames.map(function(e4) {
            return r3.Sheets[e4];
          }).forEach(function(r4) {
            if (!r4) return;
            if (r4["!rows"]) {
              for (var t4 = 0; t4 < r4["!rows"].length; ++t4) if (r4["!rows"][t4]) {
                r4["!rows"][t4].ods = a3;
                var n3 = r4["!rows"][t4].hpx + "px";
                e3.push('  <style:style style:name="ro' + a3 + '" style:family="table-row">\n');
                e3.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + n3 + '"/>\n');
                e3.push("  </style:style>\n");
                ++a3;
              }
            }
          });
          e3.push('  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">\n');
          e3.push('   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>\n');
          e3.push("  </style:style>\n");
          e3.push('  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>\n');
          e3.push(" </office:automatic-styles>\n");
        };
        return function i2(e3, r3) {
          var t3 = [Rr];
          var i3 = bt({ "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0", "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0", "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0", "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", "xmlns:xlink": "http://www.w3.org/1999/xlink", "xmlns:dc": "http://purl.org/dc/elements/1.1/", "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0", "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0", "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0", "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0", "xmlns:math": "http://www.w3.org/1998/Math/MathML", "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0", "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0", "xmlns:ooo": "http://openoffice.org/2004/office", "xmlns:ooow": "http://openoffice.org/2004/writer", "xmlns:oooc": "http://openoffice.org/2004/calc", "xmlns:dom": "http://www.w3.org/2001/xml-events", "xmlns:xforms": "http://www.w3.org/2002/xforms", "xmlns:xsd": "http://www.w3.org/2001/XMLSchema", "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance", "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0", "xmlns:rpt": "http://openoffice.org/2005/report", "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2", "xmlns:xhtml": "http://www.w3.org/1999/xhtml", "xmlns:grddl": "http://www.w3.org/2003/g/data-view#", "xmlns:tableooo": "http://openoffice.org/2009/table", "xmlns:drawooo": "http://openoffice.org/2010/draw", "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0", "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0", "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0", "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0", "xmlns:css3t": "http://www.w3.org/TR/css3-text/", "office:version": "1.2" });
          var s2 = bt({ "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0", "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet" });
          if (r3.bookType == "fods") {
            t3.push("<office:document" + i3 + s2 + ">\n");
            t3.push(_n().replace(/office:document-meta/g, "office:meta"));
          } else t3.push("<office:document-content" + i3 + ">\n");
          n2(t3, e3);
          t3.push("  <office:body>\n");
          t3.push("    <office:spreadsheet>\n");
          for (var l2 = 0; l2 != e3.SheetNames.length; ++l2) t3.push(a2(e3.Sheets[e3.SheetNames[l2]], e3, l2, r3));
          t3.push("    </office:spreadsheet>\n");
          t3.push("  </office:body>\n");
          if (r3.bookType == "fods") t3.push("</office:document>");
          else t3.push("</office:document-content>");
          return t3.join("");
        };
      })();
      function bo(e2, r2) {
        if (r2.bookType == "fods") return go(e2, r2);
        var t2 = Nr();
        var a2 = "";
        var n2 = [];
        var i2 = [];
        a2 = "mimetype";
        Mr(t2, a2, "application/vnd.oasis.opendocument.spreadsheet");
        a2 = "content.xml";
        Mr(t2, a2, go(e2, r2));
        n2.push([a2, "text/xml"]);
        i2.push([a2, "ContentFile"]);
        a2 = "styles.xml";
        Mr(t2, a2, vo(e2, r2));
        n2.push([a2, "text/xml"]);
        i2.push([a2, "StylesFile"]);
        a2 = "meta.xml";
        Mr(t2, a2, Rr + _n());
        n2.push([a2, "text/xml"]);
        i2.push([a2, "MetadataFile"]);
        a2 = "manifest.rdf";
        Mr(t2, a2, Cn(i2));
        n2.push([a2, "application/rdf+xml"]);
        a2 = "META-INF/manifest.xml";
        Mr(t2, a2, kn(n2));
        return t2;
      }
      function wo(e2) {
        return function r2(t2) {
          for (var a2 = 0; a2 != e2.length; ++a2) {
            var n2 = e2[a2];
            if (t2[n2[0]] === void 0) t2[n2[0]] = n2[1];
            if (n2[2] === "n") t2[n2[0]] = Number(t2[n2[0]]);
          }
        };
      }
      function yo(e2) {
        wo([["cellNF", false], ["cellHTML", true], ["cellFormula", true], ["cellStyles", false], ["cellText", true], ["cellDates", false], ["sheetStubs", false], ["sheetRows", 0, "n"], ["bookDeps", false], ["bookSheets", false], ["bookProps", false], ["bookFiles", false], ["bookVBA", false], ["password", ""], ["WTF", false]])(e2);
      }
      function ko(e2) {
        wo([["cellDates", false], ["bookSST", false], ["bookType", "xlsx"], ["compression", false], ["WTF", false]])(e2);
      }
      function xo(e2) {
        if (dn.WS.indexOf(e2) > -1) return "sheet";
        if (dn.CS && e2 == dn.CS) return "chart";
        if (dn.DS && e2 == dn.DS) return "dialog";
        if (dn.MS && e2 == dn.MS) return "macro";
        return e2 && e2.length ? e2 : "sheet";
      }
      function So(e2, r2) {
        if (!e2) return 0;
        try {
          e2 = r2.map(function a2(r3) {
            if (!r3.id) r3.id = r3.strRelID;
            return [r3.name, e2["!id"][r3.id].Target, xo(e2["!id"][r3.id].Type)];
          });
        } catch (t2) {
          return null;
        }
        return !e2 || e2.length === 0 ? null : e2;
      }
      function Co(e2, r2, t2, a2, n2, i2, s2, l2, o2, c2, f2, u2) {
        try {
          i2[a2] = vn(Fr(e2, t2, true), r2);
          var h2 = Er(e2, r2);
          var p2;
          switch (l2) {
            case "sheet":
              p2 = Pl(h2, r2, n2, o2, i2[a2], c2, f2, u2);
              break;
            case "chart":
              p2 = Il(h2, r2, n2, o2, i2[a2], c2, f2, u2);
              if (!p2 || !p2["!drawel"]) break;
              var d2 = Ir(p2["!drawel"].Target, r2);
              var m2 = mn(d2);
              var v2 = qi(Fr(e2, d2, true), vn(Fr(e2, m2, true), d2));
              var g2 = Ir(v2, d2);
              var b2 = mn(g2);
              p2 = ml(Fr(e2, g2, true), g2, o2, vn(Fr(e2, b2, true), g2), c2, p2);
              break;
            case "macro":
              p2 = Rl(h2, r2, n2, o2, i2[a2], c2, f2, u2);
              break;
            case "dialog":
              p2 = Ll(h2, r2, n2, o2, i2[a2], c2, f2, u2);
              break;
            default:
              throw new Error("Unrecognized sheet type " + l2);
          }
          s2[a2] = p2;
          var w2 = [];
          if (i2 && i2[a2]) er(i2[a2]).forEach(function(t3) {
            var n3 = "";
            if (i2[a2][t3].Type == dn.CMNT) {
              n3 = Ir(i2[a2][t3].Target, r2);
              var s3 = Ul(Er(e2, n3, true), n3, o2);
              if (!s3 || !s3.length) return;
              es(p2, s3, false);
            }
            if (i2[a2][t3].Type == dn.TCMNT) {
              n3 = Ir(i2[a2][t3].Target, r2);
              w2 = w2.concat(as(Er(e2, n3, true), o2));
            }
          });
          if (w2 && w2.length) es(p2, w2, true, o2.people || []);
        } catch (y2) {
          if (o2.WTF) throw y2;
        }
      }
      function _o(e2) {
        return e2.charAt(0) == "/" ? e2.slice(1) : e2;
      }
      function Ao(e2, r2) {
        Ue();
        r2 = r2 || {};
        yo(r2);
        if (Ar(e2, "META-INF/manifest.xml")) return po(e2, r2);
        if (Ar(e2, "objectdata.xml")) return po(e2, r2);
        if (Ar(e2, "Index/Document.iwa")) {
          if (typeof Uint8Array == "undefined") throw new Error("NUMBERS file parsing requires Uint8Array support");
          if (typeof parse_numbers_iwa != "undefined") {
            if (e2.FileIndex) return parse_numbers_iwa(e2);
            var t2 = Ye.utils.cfb_new();
            Or(e2).forEach(function(r3) {
              Mr(t2, r3, Dr(e2, r3));
            });
            return parse_numbers_iwa(t2);
          }
          throw new Error("Unsupported NUMBERS file");
        }
        if (!Ar(e2, "[Content_Types].xml")) {
          if (Ar(e2, "index.xml.gz")) throw new Error("Unsupported NUMBERS 08 file");
          if (Ar(e2, "index.xml")) throw new Error("Unsupported NUMBERS 09 file");
          throw new Error("Unsupported ZIP file");
        }
        var a2 = Or(e2);
        var n2 = hn(Fr(e2, "[Content_Types].xml"));
        var i2 = false;
        var s2, l2;
        if (n2.workbooks.length === 0) {
          l2 = "xl/workbook.xml";
          if (Er(e2, l2, true)) n2.workbooks.push(l2);
        }
        if (n2.workbooks.length === 0) {
          l2 = "xl/workbook.bin";
          if (!Er(e2, l2, true)) throw new Error("Could not find workbook");
          n2.workbooks.push(l2);
          i2 = true;
        }
        if (n2.workbooks[0].slice(-3) == "bin") i2 = true;
        var o2 = {};
        var c2 = {};
        if (!r2.bookSheets && !r2.bookProps) {
          As = [];
          if (n2.sst) try {
            As = zl(Er(e2, _o(n2.sst)), n2.sst, r2);
          } catch (f2) {
            if (r2.WTF) throw f2;
          }
          if (r2.cellStyles && n2.themes.length) o2 = $l(Fr(e2, n2.themes[0].replace(/^\//, ""), true) || "", n2.themes[0], r2);
          if (n2.style) c2 = Bl(Er(e2, _o(n2.style)), n2.style, o2, r2);
        }
        n2.links.map(function(t3) {
          try {
            var a3 = vn(Fr(e2, mn(_o(t3))), t3);
            return jl(Er(e2, _o(t3)), a3, t3, r2);
          } catch (n3) {
          }
        });
        var u2 = Nl(Er(e2, _o(n2.workbooks[0])), n2.workbooks[0], r2);
        var h2 = {}, p2 = "";
        if (n2.coreprops.length) {
          p2 = Er(e2, _o(n2.coreprops[0]), true);
          if (p2) h2 = En(p2);
          if (n2.extprops.length !== 0) {
            p2 = Er(e2, _o(n2.extprops[0]), true);
            if (p2) Pn(p2, h2, r2);
          }
        }
        var d2 = {};
        if (!r2.bookSheets || r2.bookProps) {
          if (n2.custprops.length !== 0) {
            p2 = Fr(e2, _o(n2.custprops[0]), true);
            if (p2) d2 = Ln(p2, r2);
          }
        }
        var m2 = {};
        if (r2.bookSheets || r2.bookProps) {
          if (u2.Sheets) s2 = u2.Sheets.map(function O2(e3) {
            return e3.name;
          });
          else if (h2.Worksheets && h2.SheetNames.length > 0) s2 = h2.SheetNames;
          if (r2.bookProps) {
            m2.Props = h2;
            m2.Custprops = d2;
          }
          if (r2.bookSheets && typeof s2 !== "undefined") m2.SheetNames = s2;
          if (r2.bookSheets ? m2.SheetNames : r2.bookProps) return m2;
        }
        s2 = {};
        var v2 = {};
        if (r2.bookDeps && n2.calcchain) v2 = Wl(Er(e2, _o(n2.calcchain)), n2.calcchain, r2);
        var g2 = 0;
        var b2 = {};
        var w2, y2;
        {
          var k2 = u2.Sheets;
          h2.Worksheets = k2.length;
          h2.SheetNames = [];
          for (var x2 = 0; x2 != k2.length; ++x2) {
            h2.SheetNames[x2] = k2[x2].name;
          }
        }
        var S2 = i2 ? "bin" : "xml";
        var C2 = n2.workbooks[0].lastIndexOf("/");
        var _2 = (n2.workbooks[0].slice(0, C2 + 1) + "_rels/" + n2.workbooks[0].slice(C2 + 1) + ".rels").replace(/^\//, "");
        if (!Ar(e2, _2)) _2 = "xl/_rels/workbook." + S2 + ".rels";
        var A2 = vn(Fr(e2, _2, true), _2.replace(/_rels.*/, "s5s"));
        if ((n2.metadata || []).length >= 1) {
          r2.xlmeta = Hl(Er(e2, _o(n2.metadata[0])), n2.metadata[0], r2);
        }
        if ((n2.people || []).length >= 1) {
          r2.people = is(Er(e2, _o(n2.people[0])), r2);
        }
        if (A2) A2 = So(A2, u2.Sheets);
        var T2 = Er(e2, "xl/worksheets/sheet.xml", true) ? 1 : 0;
        e: for (g2 = 0; g2 != h2.Worksheets; ++g2) {
          var E2 = "sheet";
          if (A2 && A2[g2]) {
            w2 = "xl/" + A2[g2][1].replace(/[\/]?xl\//, "");
            if (!Ar(e2, w2)) w2 = A2[g2][1];
            if (!Ar(e2, w2)) w2 = _2.replace(/_rels\/.*$/, "") + A2[g2][1];
            E2 = A2[g2][2];
          } else {
            w2 = "xl/worksheets/sheet" + (g2 + 1 - T2) + "." + S2;
            w2 = w2.replace(/sheet0\./, "sheet.");
          }
          y2 = w2.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels");
          if (r2 && r2.sheets != null) switch (typeof r2.sheets) {
            case "number":
              if (g2 != r2.sheets) continue e;
              break;
            case "string":
              if (h2.SheetNames[g2].toLowerCase() != r2.sheets.toLowerCase()) continue e;
              break;
            default:
              if (Array.isArray && Array.isArray(r2.sheets)) {
                var F2 = false;
                for (var D2 = 0; D2 != r2.sheets.length; ++D2) {
                  if (typeof r2.sheets[D2] == "number" && r2.sheets[D2] == g2) F2 = 1;
                  if (typeof r2.sheets[D2] == "string" && r2.sheets[D2].toLowerCase() == h2.SheetNames[g2].toLowerCase()) F2 = 1;
                }
                if (!F2) continue e;
              }
              ;
          }
          Co(e2, w2, y2, h2.SheetNames[g2], g2, b2, s2, E2, r2, u2, o2, c2);
        }
        m2 = { Directory: n2, Workbook: u2, Props: h2, Custprops: d2, Deps: v2, Sheets: s2, SheetNames: h2.SheetNames, Strings: As, Styles: c2, Themes: o2, SSF: gr(X) };
        if (r2 && r2.bookFiles) {
          if (e2.files) {
            m2.keys = a2;
            m2.files = e2.files;
          } else {
            m2.keys = [];
            m2.files = {};
            e2.FullPaths.forEach(function(r3, t3) {
              r3 = r3.replace(/^Root Entry[\/]/, "");
              m2.keys.push(r3);
              m2.files[r3] = e2.FileIndex[t3];
            });
          }
        }
        if (r2 && r2.bookVBA) {
          if (n2.vba.length > 0) m2.vbaraw = Er(e2, _o(n2.vba[0]), true);
          else if (n2.defaults && n2.defaults.bin === ls) m2.vbaraw = Er(e2, "xl/vbaProject.bin", true);
        }
        return m2;
      }
      function To(e2, r2) {
        var t2 = r2 || {};
        var a2 = "Workbook", n2 = Ye.find(e2, a2);
        try {
          a2 = "/!DataSpaces/Version";
          n2 = Ye.find(e2, a2);
          if (!n2 || !n2.content) throw new Error("ECMA-376 Encrypted file missing " + a2);
          parse_DataSpaceVersionInfo(n2.content);
          a2 = "/!DataSpaces/DataSpaceMap";
          n2 = Ye.find(e2, a2);
          if (!n2 || !n2.content) throw new Error("ECMA-376 Encrypted file missing " + a2);
          var i2 = parse_DataSpaceMap(n2.content);
          if (i2.length !== 1 || i2[0].comps.length !== 1 || i2[0].comps[0].t !== 0 || i2[0].name !== "StrongEncryptionDataSpace" || i2[0].comps[0].v !== "EncryptedPackage") throw new Error("ECMA-376 Encrypted file bad " + a2);
          a2 = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace";
          n2 = Ye.find(e2, a2);
          if (!n2 || !n2.content) throw new Error("ECMA-376 Encrypted file missing " + a2);
          var s2 = parse_DataSpaceDefinition(n2.content);
          if (s2.length != 1 || s2[0] != "StrongEncryptionTransform") throw new Error("ECMA-376 Encrypted file bad " + a2);
          a2 = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary";
          n2 = Ye.find(e2, a2);
          if (!n2 || !n2.content) throw new Error("ECMA-376 Encrypted file missing " + a2);
          parse_Primary(n2.content);
        } catch (l2) {
        }
        a2 = "/EncryptionInfo";
        n2 = Ye.find(e2, a2);
        if (!n2 || !n2.content) throw new Error("ECMA-376 Encrypted file missing " + a2);
        var o2 = parse_EncryptionInfo(n2.content);
        a2 = "/EncryptedPackage";
        n2 = Ye.find(e2, a2);
        if (!n2 || !n2.content) throw new Error("ECMA-376 Encrypted file missing " + a2);
        if (o2[0] == 4 && typeof decrypt_agile !== "undefined") return decrypt_agile(o2[1], n2.content, t2.password || "", t2);
        if (o2[0] == 2 && typeof decrypt_std76 !== "undefined") return decrypt_std76(o2[1], n2.content, t2.password || "", t2);
        throw new Error("File is password-protected");
      }
      function Eo(e2, r2) {
        if (r2.bookType == "ods") return bo(e2, r2);
        if (r2.bookType == "numbers") return write_numbers_iwa(e2, r2);
        if (r2.bookType == "xlsb") return Fo(e2, r2);
        return Do(e2, r2);
      }
      function Fo(e2, r2) {
        Zi = 1024;
        if (e2 && !e2.SSF) {
          e2.SSF = gr(X);
        }
        if (e2 && e2.SSF) {
          Ue();
          ze(e2.SSF);
          r2.revssf = ar(e2.SSF);
          r2.revssf[e2.SSF[65535]] = 0;
          r2.ssf = e2.SSF;
        }
        r2.rels = {};
        r2.wbrels = {};
        r2.Strings = [];
        r2.Strings.Count = 0;
        r2.Strings.Unique = 0;
        if (Es) r2.revStrings = /* @__PURE__ */ new Map();
        else {
          r2.revStrings = {};
          r2.revStrings.foo = [];
          delete r2.revStrings.foo;
        }
        var t2 = r2.bookType == "xlsb" ? "bin" : "xml";
        var a2 = fs.indexOf(r2.bookType) > -1;
        var n2 = un();
        ko(r2 = r2 || {});
        var i2 = Nr();
        var s2 = "", l2 = 0;
        r2.cellXfs = [];
        Ms(r2.cellXfs, {}, { revssf: { General: 0 } });
        if (!e2.Props) e2.Props = {};
        s2 = "docProps/core.xml";
        Mr(i2, s2, Dn(e2.Props, r2));
        n2.coreprops.push(s2);
        bn(r2.rels, 2, s2, dn.CORE_PROPS);
        s2 = "docProps/app.xml";
        if (e2.Props && e2.Props.SheetNames) {
        } else if (!e2.Workbook || !e2.Workbook.Sheets) e2.Props.SheetNames = e2.SheetNames;
        else {
          var o2 = [];
          for (var c2 = 0; c2 < e2.SheetNames.length; ++c2) if ((e2.Workbook.Sheets[c2] || {}).Hidden != 2) o2.push(e2.SheetNames[c2]);
          e2.Props.SheetNames = o2;
        }
        e2.Props.Worksheets = e2.Props.SheetNames.length;
        Mr(i2, s2, In(e2.Props, r2));
        n2.extprops.push(s2);
        bn(r2.rels, 3, s2, dn.EXT_PROPS);
        if (e2.Custprops !== e2.Props && er(e2.Custprops || {}).length > 0) {
          s2 = "docProps/custom.xml";
          Mr(i2, s2, Bn(e2.Custprops, r2));
          n2.custprops.push(s2);
          bn(r2.rels, 4, s2, dn.CUST_PROPS);
        }
        for (l2 = 1; l2 <= e2.SheetNames.length; ++l2) {
          var f2 = { "!id": {} };
          var u2 = e2.Sheets[e2.SheetNames[l2 - 1]];
          var h2 = (u2 || {})["!type"] || "sheet";
          switch (h2) {
            case "chart":
              ;
            default:
              s2 = "xl/worksheets/sheet" + l2 + "." + t2;
              Mr(i2, s2, Xl(l2 - 1, s2, r2, e2, f2));
              n2.sheets.push(s2);
              bn(r2.wbrels, -1, "worksheets/sheet" + l2 + "." + t2, dn.WS[0]);
          }
          if (u2) {
            var p2 = u2["!comments"];
            var d2 = false;
            var m2 = "";
            if (p2 && p2.length > 0) {
              m2 = "xl/comments" + l2 + "." + t2;
              Mr(i2, m2, Kl(p2, m2, r2));
              n2.comments.push(m2);
              bn(f2, -1, "../comments" + l2 + "." + t2, dn.CMNT);
              d2 = true;
            }
            if (u2["!legacy"]) {
              if (d2) Mr(i2, "xl/drawings/vmlDrawing" + l2 + ".vml", Qi(l2, u2["!comments"]));
            }
            delete u2["!comments"];
            delete u2["!legacy"];
          }
          if (f2["!id"].rId1) Mr(i2, mn(s2), gn(f2));
        }
        if (r2.Strings != null && r2.Strings.length > 0) {
          s2 = "xl/sharedStrings." + t2;
          Mr(i2, s2, Jl(r2.Strings, s2, r2));
          n2.strs.push(s2);
          bn(r2.wbrels, -1, "sharedStrings." + t2, dn.SST);
        }
        s2 = "xl/workbook." + t2;
        Mr(i2, s2, Vl(e2, s2, r2));
        n2.workbooks.push(s2);
        bn(r2.rels, 1, s2, dn.WB);
        s2 = "xl/theme/theme1.xml";
        Mr(i2, s2, Xi(e2.Themes, r2));
        n2.themes.push(s2);
        bn(r2.wbrels, -1, "theme/theme1.xml", dn.THEME);
        s2 = "xl/styles." + t2;
        Mr(i2, s2, Yl(e2, s2, r2));
        n2.styles.push(s2);
        bn(r2.wbrels, -1, "styles." + t2, dn.STY);
        if (e2.vbaraw && a2) {
          s2 = "xl/vbaProject.bin";
          Mr(i2, s2, e2.vbaraw);
          n2.vba.push(s2);
          bn(r2.wbrels, -1, "vbaProject.bin", dn.VBA);
        }
        s2 = "xl/metadata." + t2;
        Mr(i2, s2, ql(s2));
        n2.metadata.push(s2);
        bn(r2.wbrels, -1, "metadata." + t2, dn.XLMETA);
        Mr(i2, "[Content_Types].xml", pn(n2, r2));
        Mr(i2, "_rels/.rels", gn(r2.rels));
        Mr(i2, "xl/_rels/workbook." + t2 + ".rels", gn(r2.wbrels));
        delete r2.revssf;
        delete r2.ssf;
        return i2;
      }
      function Do(e2, r2) {
        Zi = 1024;
        if (e2 && !e2.SSF) {
          e2.SSF = gr(X);
        }
        if (e2 && e2.SSF) {
          Ue();
          ze(e2.SSF);
          r2.revssf = ar(e2.SSF);
          r2.revssf[e2.SSF[65535]] = 0;
          r2.ssf = e2.SSF;
        }
        r2.rels = {};
        r2.wbrels = {};
        r2.Strings = [];
        r2.Strings.Count = 0;
        r2.Strings.Unique = 0;
        if (Es) r2.revStrings = /* @__PURE__ */ new Map();
        else {
          r2.revStrings = {};
          r2.revStrings.foo = [];
          delete r2.revStrings.foo;
        }
        var t2 = "xml";
        var a2 = fs.indexOf(r2.bookType) > -1;
        var n2 = un();
        ko(r2 = r2 || {});
        var i2 = Nr();
        var s2 = "", l2 = 0;
        r2.cellXfs = [];
        Ms(r2.cellXfs, {}, { revssf: { General: 0 } });
        if (!e2.Props) e2.Props = {};
        s2 = "docProps/core.xml";
        Mr(i2, s2, Dn(e2.Props, r2));
        n2.coreprops.push(s2);
        bn(r2.rels, 2, s2, dn.CORE_PROPS);
        s2 = "docProps/app.xml";
        if (e2.Props && e2.Props.SheetNames) {
        } else if (!e2.Workbook || !e2.Workbook.Sheets) e2.Props.SheetNames = e2.SheetNames;
        else {
          var o2 = [];
          for (var c2 = 0; c2 < e2.SheetNames.length; ++c2) if ((e2.Workbook.Sheets[c2] || {}).Hidden != 2) o2.push(e2.SheetNames[c2]);
          e2.Props.SheetNames = o2;
        }
        e2.Props.Worksheets = e2.Props.SheetNames.length;
        Mr(i2, s2, In(e2.Props, r2));
        n2.extprops.push(s2);
        bn(r2.rels, 3, s2, dn.EXT_PROPS);
        if (e2.Custprops !== e2.Props && er(e2.Custprops || {}).length > 0) {
          s2 = "docProps/custom.xml";
          Mr(i2, s2, Bn(e2.Custprops, r2));
          n2.custprops.push(s2);
          bn(r2.rels, 4, s2, dn.CUST_PROPS);
        }
        var f2 = ["SheetJ5"];
        r2.tcid = 0;
        for (l2 = 1; l2 <= e2.SheetNames.length; ++l2) {
          var u2 = { "!id": {} };
          var h2 = e2.Sheets[e2.SheetNames[l2 - 1]];
          var p2 = (h2 || {})["!type"] || "sheet";
          switch (p2) {
            case "chart":
              ;
            default:
              s2 = "xl/worksheets/sheet" + l2 + "." + t2;
              Mr(i2, s2, pl(l2 - 1, r2, e2, u2));
              n2.sheets.push(s2);
              bn(r2.wbrels, -1, "worksheets/sheet" + l2 + "." + t2, dn.WS[0]);
          }
          if (h2) {
            var d2 = h2["!comments"];
            var m2 = false;
            var v2 = "";
            if (d2 && d2.length > 0) {
              var g2 = false;
              d2.forEach(function(e3) {
                e3[1].forEach(function(e4) {
                  if (e4.T == true) g2 = true;
                });
              });
              if (g2) {
                v2 = "xl/threadedComments/threadedComment" + l2 + "." + t2;
                Mr(i2, v2, ns(d2, f2, r2));
                n2.threadedcomments.push(v2);
                bn(u2, -1, "../threadedComments/threadedComment" + l2 + "." + t2, dn.TCMNT);
              }
              v2 = "xl/comments" + l2 + "." + t2;
              Mr(i2, v2, ts(d2, r2));
              n2.comments.push(v2);
              bn(u2, -1, "../comments" + l2 + "." + t2, dn.CMNT);
              m2 = true;
            }
            if (h2["!legacy"]) {
              if (m2) Mr(i2, "xl/drawings/vmlDrawing" + l2 + ".vml", Qi(l2, h2["!comments"]));
            }
            delete h2["!comments"];
            delete h2["!legacy"];
          }
          if (u2["!id"].rId1) Mr(i2, mn(s2), gn(u2));
        }
        if (r2.Strings != null && r2.Strings.length > 0) {
          s2 = "xl/sharedStrings." + t2;
          Mr(i2, s2, ni(r2.Strings, r2));
          n2.strs.push(s2);
          bn(r2.wbrels, -1, "sharedStrings." + t2, dn.SST);
        }
        s2 = "xl/workbook." + t2;
        Mr(i2, s2, Ml(e2, r2));
        n2.workbooks.push(s2);
        bn(r2.rels, 1, s2, dn.WB);
        s2 = "xl/theme/theme1.xml";
        Mr(i2, s2, Xi(e2.Themes, r2));
        n2.themes.push(s2);
        bn(r2.wbrels, -1, "theme/theme1.xml", dn.THEME);
        s2 = "xl/styles." + t2;
        Mr(i2, s2, Ii(e2, r2));
        n2.styles.push(s2);
        bn(r2.wbrels, -1, "styles." + t2, dn.STY);
        if (e2.vbaraw && a2) {
          s2 = "xl/vbaProject.bin";
          Mr(i2, s2, e2.vbaraw);
          n2.vba.push(s2);
          bn(r2.wbrels, -1, "vbaProject.bin", dn.VBA);
        }
        s2 = "xl/metadata." + t2;
        Mr(i2, s2, Yi());
        n2.metadata.push(s2);
        bn(r2.wbrels, -1, "metadata." + t2, dn.XLMETA);
        if (f2.length > 1) {
          s2 = "xl/persons/person.xml";
          Mr(i2, s2, ss(f2, r2));
          n2.people.push(s2);
          bn(r2.wbrels, -1, "persons/person.xml", dn.PEOPLE);
        }
        Mr(i2, "[Content_Types].xml", pn(n2, r2));
        Mr(i2, "_rels/.rels", gn(r2.rels));
        Mr(i2, "xl/_rels/workbook." + t2 + ".rels", gn(r2.wbrels));
        delete r2.revssf;
        delete r2.ssf;
        return i2;
      }
      function Oo(e2, r2) {
        var t2 = "";
        switch ((r2 || {}).type || "base64") {
          case "buffer":
            return [e2[0], e2[1], e2[2], e2[3], e2[4], e2[5], e2[6], e2[7]];
          case "base64":
            t2 = w(e2.slice(0, 12));
            break;
          case "binary":
            t2 = e2;
            break;
          case "array":
            return [e2[0], e2[1], e2[2], e2[3], e2[4], e2[5], e2[6], e2[7]];
          default:
            throw new Error("Unrecognized type " + (r2 && r2.type || "undefined"));
        }
        return [t2.charCodeAt(0), t2.charCodeAt(1), t2.charCodeAt(2), t2.charCodeAt(3), t2.charCodeAt(4), t2.charCodeAt(5), t2.charCodeAt(6), t2.charCodeAt(7)];
      }
      function Mo(e2, r2) {
        if (Ye.find(e2, "EncryptedPackage")) return To(e2, r2);
        return parse_xlscfb(e2, r2);
      }
      function No(e2, r2) {
        var t2, a2 = e2;
        var n2 = r2 || {};
        if (!n2.type) n2.type = y && Buffer.isBuffer(e2) ? "buffer" : "base64";
        t2 = Pr(a2, n2);
        return Ao(t2, n2);
      }
      function Po(e2, r2) {
        var t2 = 0;
        e: while (t2 < e2.length) switch (e2.charCodeAt(t2)) {
          case 10:
            ;
          case 13:
            ;
          case 32:
            ++t2;
            break;
          case 60:
            return parse_xlml(e2.slice(t2), r2);
          default:
            break e;
        }
        return Hn.to_workbook(e2, r2);
      }
      function Io(e2, r2) {
        var t2 = "", a2 = Oo(e2, r2);
        switch (r2.type) {
          case "base64":
            t2 = w(e2);
            break;
          case "binary":
            t2 = e2;
            break;
          case "buffer":
            t2 = e2.toString("binary");
            break;
          case "array":
            t2 = vr(e2);
            break;
          default:
            throw new Error("Unrecognized type " + r2.type);
        }
        if (a2[0] == 239 && a2[1] == 187 && a2[2] == 191) t2 = ot(t2);
        r2.type = "binary";
        return Po(t2, r2);
      }
      function Ro(e2, r2) {
        var t2 = e2;
        if (r2.type == "base64") t2 = w(t2);
        t2 = $cptable.utils.decode(1200, t2.slice(2), "str");
        r2.type = "binary";
        return Po(t2, r2);
      }
      function Lo(e2) {
        return !e2.match(/[^\x00-\x7F]/) ? e2 : ct(e2);
      }
      function Bo(e2, r2, t2, a2) {
        if (a2) {
          t2.type = "string";
          return Hn.to_workbook(e2, t2);
        }
        return Hn.to_workbook(r2, t2);
      }
      function $o(e2, r2) {
        o();
        var t2 = r2 || {};
        if (typeof ArrayBuffer !== "undefined" && e2 instanceof ArrayBuffer) return $o(new Uint8Array(e2), (t2 = gr(t2), t2.type = "array", t2));
        if (typeof Uint8Array !== "undefined" && e2 instanceof Uint8Array && !t2.type) t2.type = typeof Deno !== "undefined" ? "buffer" : "array";
        var a2 = e2, n2 = [0, 0, 0, 0], i2 = false;
        if (t2.cellStyles) {
          t2.cellNF = true;
          t2.sheetStubs = true;
        }
        Ts = {};
        if (t2.dateNF) Ts.dateNF = t2.dateNF;
        if (!t2.type) t2.type = y && Buffer.isBuffer(e2) ? "buffer" : "base64";
        if (t2.type == "file") {
          t2.type = y ? "buffer" : "binary";
          a2 = Qe(e2);
          if (typeof Uint8Array !== "undefined" && !y) t2.type = "array";
        }
        if (t2.type == "string") {
          i2 = true;
          t2.type = "binary";
          t2.codepage = 65001;
          a2 = Lo(e2);
        }
        if (t2.type == "array" && typeof Uint8Array !== "undefined" && e2 instanceof Uint8Array && typeof ArrayBuffer !== "undefined") {
          var s2 = new ArrayBuffer(3), l2 = new Uint8Array(s2);
          l2.foo = "bar";
          if (!l2.foo) {
            t2 = gr(t2);
            t2.type = "array";
            return $o(E(a2), t2);
          }
        }
        switch ((n2 = Oo(a2, t2))[0]) {
          case 208:
            if (n2[1] === 207 && n2[2] === 17 && n2[3] === 224 && n2[4] === 161 && n2[5] === 177 && n2[6] === 26 && n2[7] === 225) return Mo(Ye.read(a2, t2), t2);
            break;
          case 9:
            if (n2[1] <= 8) return parse_xlscfb(a2, t2);
            break;
          case 60:
            return parse_xlml(a2, t2);
          case 73:
            if (n2[1] === 73 && n2[2] === 42 && n2[3] === 0) throw new Error("TIFF Image File is not a spreadsheet");
            if (n2[1] === 68) return Vn(a2, t2);
            break;
          case 84:
            if (n2[1] === 65 && n2[2] === 66 && n2[3] === 76) return Wn.to_workbook(a2, t2);
            break;
          case 80:
            return n2[1] === 75 && n2[2] < 9 && n2[3] < 9 ? No(a2, t2) : Bo(e2, a2, t2, i2);
          case 239:
            return n2[3] === 60 ? parse_xlml(a2, t2) : Bo(e2, a2, t2, i2);
          case 255:
            if (n2[1] === 254) {
              return Ro(a2, t2);
            } else if (n2[1] === 0 && n2[2] === 2 && n2[3] === 0) return WK_.to_workbook(a2, t2);
            break;
          case 0:
            if (n2[1] === 0) {
              if (n2[2] >= 2 && n2[3] === 0) return WK_.to_workbook(a2, t2);
              if (n2[2] === 0 && (n2[3] === 8 || n2[3] === 9)) return WK_.to_workbook(a2, t2);
            }
            break;
          case 3:
            ;
          case 131:
            ;
          case 139:
            ;
          case 140:
            return zn.to_workbook(a2, t2);
          case 123:
            if (n2[1] === 92 && n2[2] === 114 && n2[3] === 116) return RTF.to_workbook(a2, t2);
            break;
          case 10:
            ;
          case 13:
            ;
          case 32:
            return Io(a2, t2);
          case 137:
            if (n2[1] === 80 && n2[2] === 78 && n2[3] === 71) throw new Error("PNG Image File is not a spreadsheet");
            break;
        }
        if ($n.indexOf(n2[0]) > -1 && n2[2] <= 12 && n2[3] <= 31) return zn.to_workbook(a2, t2);
        return Bo(e2, a2, t2, i2);
      }
      function zo(e2, r2) {
        var t2 = r2 || {};
        t2.type = "file";
        return $o(e2, t2);
      }
      function Uo(e2, r2) {
        switch (r2.type) {
          case "base64":
            ;
          case "binary":
            break;
          case "buffer":
            ;
          case "array":
            r2.type = "";
            break;
          case "file":
            return Ze(r2.file, Ye.write(e2, { type: y ? "buffer" : "" }));
          case "string":
            throw new Error("'string' output type invalid for '" + r2.bookType + "' files");
          default:
            throw new Error("Unrecognized type " + r2.type);
        }
        return Ye.write(e2, r2);
      }
      function Wo(e2, r2) {
        var t2 = gr(r2 || {});
        var a2 = Eo(e2, t2);
        return Ho(a2, t2);
      }
      function jo(e2, r2) {
        var t2 = gr(r2 || {});
        var a2 = Do(e2, t2);
        return Ho(a2, t2);
      }
      function Ho(e2, r2) {
        var t2 = {};
        var a2 = y ? "nodebuffer" : typeof Uint8Array !== "undefined" ? "array" : "string";
        if (r2.compression) t2.compression = "DEFLATE";
        if (r2.password) t2.type = a2;
        else switch (r2.type) {
          case "base64":
            t2.type = "base64";
            break;
          case "binary":
            t2.type = "string";
            break;
          case "string":
            throw new Error("'string' output type invalid for '" + r2.bookType + "' files");
          case "buffer":
            ;
          case "file":
            t2.type = a2;
            break;
          default:
            throw new Error("Unrecognized type " + r2.type);
        }
        var n2 = e2.FullPaths ? Ye.write(e2, { fileType: "zip", type: { nodebuffer: "buffer", string: "binary" }[t2.type] || t2.type, compression: !!r2.compression }) : e2.generate(t2);
        if (typeof Deno !== "undefined") {
          if (typeof n2 == "string") {
            if (r2.type == "binary" || r2.type == "base64") return n2;
            n2 = new Uint8Array(_(n2));
          }
        }
        if (r2.password && typeof encrypt_agile !== "undefined") return Uo(encrypt_agile(n2, r2.password), r2);
        if (r2.type === "file") return Ze(r2.file, n2);
        return r2.type == "string" ? ot(n2) : n2;
      }
      function Vo(e2, r2) {
        var t2 = r2 || {};
        var a2 = write_xlscfb(e2, t2);
        return Uo(a2, t2);
      }
      function Xo(e2, r2, t2) {
        if (!t2) t2 = "";
        var a2 = t2 + e2;
        switch (r2.type) {
          case "base64":
            return b(ct(a2));
          case "binary":
            return ct(a2);
          case "string":
            return e2;
          case "file":
            return Ze(r2.file, a2, "utf8");
          case "buffer":
            {
              if (y) return k(a2, "utf8");
              else if (typeof TextEncoder !== "undefined") return new TextEncoder().encode(a2);
              else return Xo(a2, { type: "binary" }).split("").map(function(e3) {
                return e3.charCodeAt(0);
              });
            }
            ;
        }
        throw new Error("Unrecognized type " + r2.type);
      }
      function Go(e2, r2) {
        switch (r2.type) {
          case "base64":
            return b(e2);
          case "binary":
            return e2;
          case "string":
            return e2;
          case "file":
            return Ze(r2.file, e2, "binary");
          case "buffer":
            {
              if (y) return k(e2, "binary");
              else return e2.split("").map(function(e3) {
                return e3.charCodeAt(0);
              });
            }
            ;
        }
        throw new Error("Unrecognized type " + r2.type);
      }
      function Yo(e2, r2) {
        switch (r2.type) {
          case "string":
            ;
          case "base64":
            ;
          case "binary":
            var t2 = "";
            for (var a2 = 0; a2 < e2.length; ++a2) t2 += String.fromCharCode(e2[a2]);
            return r2.type == "base64" ? b(t2) : r2.type == "string" ? ot(t2) : t2;
          case "file":
            return Ze(r2.file, e2);
          case "buffer":
            return e2;
          default:
            throw new Error("Unrecognized type " + r2.type);
        }
      }
      function Jo(e2, r2) {
        o();
        Fl(e2);
        var t2 = gr(r2 || {});
        if (t2.cellStyles) {
          t2.cellNF = true;
          t2.sheetStubs = true;
        }
        if (t2.type == "array") {
          t2.type = "binary";
          var a2 = Jo(e2, t2);
          t2.type = "array";
          return _(a2);
        }
        return jo(e2, t2);
      }
      function Ko(e2, r2) {
        o();
        Fl(e2);
        var t2 = gr(r2 || {});
        if (t2.cellStyles) {
          t2.cellNF = true;
          t2.sheetStubs = true;
        }
        if (t2.type == "array") {
          t2.type = "binary";
          var a2 = Ko(e2, t2);
          t2.type = "array";
          return _(a2);
        }
        var n2 = 0;
        if (t2.sheet) {
          if (typeof t2.sheet == "number") n2 = t2.sheet;
          else n2 = e2.SheetNames.indexOf(t2.sheet);
          if (!e2.SheetNames[n2]) throw new Error("Sheet not found: " + t2.sheet + " : " + typeof t2.sheet);
        }
        switch (t2.bookType || "xlsb") {
          case "xml":
            ;
          case "xlml":
            return Xo(write_xlml(e2, t2), t2);
          case "slk":
            ;
          case "sylk":
            return Xo(Un.from_sheet(e2.Sheets[e2.SheetNames[n2]], t2), t2);
          case "htm":
            ;
          case "html":
            return Xo(no(e2.Sheets[e2.SheetNames[n2]], t2), t2);
          case "txt":
            return Go(sc(e2.Sheets[e2.SheetNames[n2]], t2), t2);
          case "csv":
            return Xo(ic(e2.Sheets[e2.SheetNames[n2]], t2), t2, "\uFEFF");
          case "dif":
            return Xo(Wn.from_sheet(e2.Sheets[e2.SheetNames[n2]], t2), t2);
          case "dbf":
            return Yo(zn.from_sheet(e2.Sheets[e2.SheetNames[n2]], t2), t2);
          case "prn":
            return Xo(Hn.from_sheet(e2.Sheets[e2.SheetNames[n2]], t2), t2);
          case "rtf":
            return Xo(RTF.from_sheet(e2.Sheets[e2.SheetNames[n2]], t2), t2);
          case "eth":
            return Xo(jn.from_sheet(e2.Sheets[e2.SheetNames[n2]], t2), t2);
          case "fods":
            return Xo(bo(e2, t2), t2);
          case "wk1":
            return Yo(WK_.sheet_to_wk1(e2.Sheets[e2.SheetNames[n2]], t2), t2);
          case "wk3":
            return Yo(WK_.book_to_wk3(e2, t2), t2);
          case "biff2":
            if (!t2.biff) t2.biff = 2;
          case "biff3":
            if (!t2.biff) t2.biff = 3;
          case "biff4":
            if (!t2.biff) t2.biff = 4;
            return Yo(write_biff_buf(e2, t2), t2);
          case "biff5":
            if (!t2.biff) t2.biff = 5;
          case "biff8":
            ;
          case "xla":
            ;
          case "xls":
            if (!t2.biff) t2.biff = 8;
            return Vo(e2, t2);
          case "xlsx":
            ;
          case "xlsm":
            ;
          case "xlam":
            ;
          case "xlsb":
            ;
          case "numbers":
            ;
          case "ods":
            return Wo(e2, t2);
          default:
            throw new Error("Unrecognized bookType |" + t2.bookType + "|");
        }
      }
      function qo(e2) {
        if (e2.bookType) return;
        var r2 = { xls: "biff8", htm: "html", slk: "sylk", socialcalc: "eth", Sh33tJS: "WTF" };
        var t2 = e2.file.slice(e2.file.lastIndexOf(".")).toLowerCase();
        if (t2.match(/^\.[a-z]+$/)) e2.bookType = t2.slice(1);
        e2.bookType = r2[e2.bookType] || e2.bookType;
      }
      function Zo(e2, r2, t2) {
        var a2 = t2 || {};
        a2.type = "file";
        a2.file = r2;
        qo(a2);
        return Ko(e2, a2);
      }
      function Qo(e2, r2, t2) {
        var a2 = t2 || {};
        a2.type = "file";
        a2.file = r2;
        qo(a2);
        return Jo(e2, a2);
      }
      function ec(e2, r2, t2, a2) {
        var n2 = t2 || {};
        n2.type = "file";
        n2.file = e2;
        qo(n2);
        n2.type = "buffer";
        var i2 = a2;
        if (!(i2 instanceof Function)) i2 = t2;
        return Je.writeFile(e2, Ko(r2, n2), i2);
      }
      function rc(e2, r2, t2, a2, n2, i2, s2, l2) {
        var o2 = ya(t2);
        var c2 = l2.defval, f2 = l2.raw || !Object.prototype.hasOwnProperty.call(l2, "raw");
        var u2 = true;
        var h2 = n2 === 1 ? [] : {};
        if (n2 !== 1) {
          if (Object.defineProperty) try {
            Object.defineProperty(h2, "__rowNum__", { value: t2, enumerable: false });
          } catch (p2) {
            h2.__rowNum__ = t2;
          }
          else h2.__rowNum__ = t2;
        }
        if (!s2 || e2[t2]) for (var d2 = r2.s.c; d2 <= r2.e.c; ++d2) {
          var m2 = s2 ? e2[t2][d2] : e2[a2[d2] + o2];
          if (m2 === void 0 || m2.t === void 0) {
            if (c2 === void 0) continue;
            if (i2[d2] != null) {
              h2[i2[d2]] = c2;
            }
            continue;
          }
          var v2 = m2.v;
          switch (m2.t) {
            case "z":
              if (v2 == null) break;
              continue;
            case "e":
              v2 = v2 == 0 ? null : void 0;
              break;
            case "s":
              ;
            case "d":
              ;
            case "b":
              ;
            case "n":
              break;
            default:
              throw new Error("unrecognized type " + m2.t);
          }
          if (i2[d2] != null) {
            if (v2 == null) {
              if (m2.t == "e" && v2 === null) h2[i2[d2]] = null;
              else if (c2 !== void 0) h2[i2[d2]] = c2;
              else if (f2 && v2 === null) h2[i2[d2]] = null;
              else continue;
            } else {
              h2[i2[d2]] = f2 && (m2.t !== "n" || m2.t === "n" && l2.rawNumbers !== false) ? v2 : Pa(m2, v2, l2);
            }
            if (v2 != null) u2 = false;
          }
        }
        return { row: h2, isempty: u2 };
      }
      function tc(e2, r2) {
        if (e2 == null || e2["!ref"] == null) return [];
        var t2 = { t: "n", v: 0 }, a2 = 0, n2 = 1, i2 = [], s2 = 0, l2 = "";
        var o2 = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
        var c2 = r2 || {};
        var f2 = c2.range != null ? c2.range : e2["!ref"];
        if (c2.header === 1) a2 = 1;
        else if (c2.header === "A") a2 = 2;
        else if (Array.isArray(c2.header)) a2 = 3;
        else if (c2.header == null) a2 = 0;
        switch (typeof f2) {
          case "string":
            o2 = Ma(f2);
            break;
          case "number":
            o2 = Ma(e2["!ref"]);
            o2.s.r = f2;
            break;
          default:
            o2 = f2;
        }
        if (a2 > 0) n2 = 0;
        var u2 = ya(o2.s.r);
        var h2 = [];
        var p2 = [];
        var d2 = 0, m2 = 0;
        var v2 = Array.isArray(e2);
        var g2 = o2.s.r, b2 = 0;
        var w2 = {};
        if (v2 && !e2[g2]) e2[g2] = [];
        var y2 = c2.skipHidden && e2["!cols"] || [];
        var k2 = c2.skipHidden && e2["!rows"] || [];
        for (b2 = o2.s.c; b2 <= o2.e.c; ++b2) {
          if ((y2[b2] || {}).hidden) continue;
          h2[b2] = Ca(b2);
          t2 = v2 ? e2[g2][b2] : e2[h2[b2] + u2];
          switch (a2) {
            case 1:
              i2[b2] = b2 - o2.s.c;
              break;
            case 2:
              i2[b2] = h2[b2];
              break;
            case 3:
              i2[b2] = c2.header[b2 - o2.s.c];
              break;
            default:
              if (t2 == null) t2 = { w: "__EMPTY", t: "s" };
              l2 = s2 = Pa(t2, null, c2);
              m2 = w2[s2] || 0;
              if (!m2) w2[s2] = 1;
              else {
                do {
                  l2 = s2 + "_" + m2++;
                } while (w2[l2]);
                w2[s2] = m2;
                w2[l2] = 1;
              }
              i2[b2] = l2;
          }
        }
        for (g2 = o2.s.r + n2; g2 <= o2.e.r; ++g2) {
          if ((k2[g2] || {}).hidden) continue;
          var x2 = rc(e2, o2, g2, h2, a2, i2, v2, c2);
          if (x2.isempty === false || (a2 === 1 ? c2.blankrows !== false : !!c2.blankrows)) p2[d2++] = x2.row;
        }
        p2.length = d2;
        return p2;
      }
      var ac = /"/g;
      function nc(e2, r2, t2, a2, n2, i2, s2, l2) {
        var o2 = true;
        var c2 = [], f2 = "", u2 = ya(t2);
        for (var h2 = r2.s.c; h2 <= r2.e.c; ++h2) {
          if (!a2[h2]) continue;
          var p2 = l2.dense ? (e2[t2] || [])[h2] : e2[a2[h2] + u2];
          if (p2 == null) f2 = "";
          else if (p2.v != null) {
            o2 = false;
            f2 = "" + (l2.rawNumbers && p2.t == "n" ? p2.v : Pa(p2, null, l2));
            for (var d2 = 0, m2 = 0; d2 !== f2.length; ++d2) if ((m2 = f2.charCodeAt(d2)) === n2 || m2 === i2 || m2 === 34 || l2.forceQuotes) {
              f2 = '"' + f2.replace(ac, '""') + '"';
              break;
            }
            if (f2 == "ID") f2 = '"ID"';
          } else if (p2.f != null && !p2.F) {
            o2 = false;
            f2 = "=" + p2.f;
            if (f2.indexOf(",") >= 0) f2 = '"' + f2.replace(ac, '""') + '"';
          } else f2 = "";
          c2.push(f2);
        }
        if (l2.blankrows === false && o2) return null;
        return c2.join(s2);
      }
      function ic(e2, r2) {
        var t2 = [];
        var a2 = r2 == null ? {} : r2;
        if (e2 == null || e2["!ref"] == null) return "";
        var n2 = Ma(e2["!ref"]);
        var i2 = a2.FS !== void 0 ? a2.FS : ",", s2 = i2.charCodeAt(0);
        var l2 = a2.RS !== void 0 ? a2.RS : "\n", o2 = l2.charCodeAt(0);
        var c2 = new RegExp((i2 == "|" ? "\\|" : i2) + "+$");
        var f2 = "", u2 = [];
        a2.dense = Array.isArray(e2);
        var h2 = a2.skipHidden && e2["!cols"] || [];
        var p2 = a2.skipHidden && e2["!rows"] || [];
        for (var d2 = n2.s.c; d2 <= n2.e.c; ++d2) if (!(h2[d2] || {}).hidden) u2[d2] = Ca(d2);
        var m2 = 0;
        for (var v2 = n2.s.r; v2 <= n2.e.r; ++v2) {
          if ((p2[v2] || {}).hidden) continue;
          f2 = nc(e2, n2, v2, u2, s2, o2, i2, a2);
          if (f2 == null) {
            continue;
          }
          if (a2.strip) f2 = f2.replace(c2, "");
          if (f2 || a2.blankrows !== false) t2.push((m2++ ? l2 : "") + f2);
        }
        delete a2.dense;
        return t2.join("");
      }
      function sc(e2, r2) {
        if (!r2) r2 = {};
        r2.FS = "	";
        r2.RS = "\n";
        var t2 = ic(e2, r2);
        if (typeof $cptable == "undefined" || r2.type == "string") return t2;
        var a2 = $cptable.utils.encode(1200, t2, "str");
        return String.fromCharCode(255) + String.fromCharCode(254) + a2;
      }
      function lc(e2) {
        var r2 = "", t2, a2 = "";
        if (e2 == null || e2["!ref"] == null) return [];
        var n2 = Ma(e2["!ref"]), i2 = "", s2 = [], l2;
        var o2 = [];
        var c2 = Array.isArray(e2);
        for (l2 = n2.s.c; l2 <= n2.e.c; ++l2) s2[l2] = Ca(l2);
        for (var f2 = n2.s.r; f2 <= n2.e.r; ++f2) {
          i2 = ya(f2);
          for (l2 = n2.s.c; l2 <= n2.e.c; ++l2) {
            r2 = s2[l2] + i2;
            t2 = c2 ? (e2[f2] || [])[l2] : e2[r2];
            a2 = "";
            if (t2 === void 0) continue;
            else if (t2.F != null) {
              r2 = t2.F;
              if (!t2.f) continue;
              a2 = t2.f;
              if (r2.indexOf(":") == -1) r2 = r2 + ":" + r2;
            }
            if (t2.f != null) a2 = t2.f;
            else if (t2.t == "z") continue;
            else if (t2.t == "n" && t2.v != null) a2 = "" + t2.v;
            else if (t2.t == "b") a2 = t2.v ? "TRUE" : "FALSE";
            else if (t2.w !== void 0) a2 = "'" + t2.w;
            else if (t2.v === void 0) continue;
            else if (t2.t == "s") a2 = "'" + t2.v;
            else a2 = "" + t2.v;
            o2[o2.length] = r2 + "=" + a2;
          }
        }
        return o2;
      }
      function oc(e2, r2, t2) {
        var a2 = t2 || {};
        var n2 = +!a2.skipHeader;
        var i2 = e2 || {};
        var s2 = 0, l2 = 0;
        if (i2 && a2.origin != null) {
          if (typeof a2.origin == "number") s2 = a2.origin;
          else {
            var o2 = typeof a2.origin == "string" ? Ea(a2.origin) : a2.origin;
            s2 = o2.r;
            l2 = o2.c;
          }
        }
        var c2;
        var f2 = { s: { c: 0, r: 0 }, e: { c: l2, r: s2 + r2.length - 1 + n2 } };
        if (i2["!ref"]) {
          var u2 = Ma(i2["!ref"]);
          f2.e.c = Math.max(f2.e.c, u2.e.c);
          f2.e.r = Math.max(f2.e.r, u2.e.r);
          if (s2 == -1) {
            s2 = u2.e.r + 1;
            f2.e.r = s2 + r2.length - 1 + n2;
          }
        } else {
          if (s2 == -1) {
            s2 = 0;
            f2.e.r = r2.length - 1 + n2;
          }
        }
        var h2 = a2.header || [], p2 = 0;
        r2.forEach(function(e3, r3) {
          er(e3).forEach(function(t3) {
            if ((p2 = h2.indexOf(t3)) == -1) h2[p2 = h2.length] = t3;
            var o3 = e3[t3];
            var f3 = "z";
            var u3 = "";
            var d3 = Fa({ c: l2 + p2, r: s2 + r3 + n2 });
            c2 = fc(i2, d3);
            if (o3 && typeof o3 === "object" && !(o3 instanceof Date)) {
              i2[d3] = o3;
            } else {
              if (typeof o3 == "number") f3 = "n";
              else if (typeof o3 == "boolean") f3 = "b";
              else if (typeof o3 == "string") f3 = "s";
              else if (o3 instanceof Date) {
                f3 = "d";
                if (!a2.cellDates) {
                  f3 = "n";
                  o3 = sr(o3);
                }
                u3 = a2.dateNF || X[14];
              } else if (o3 === null && a2.nullError) {
                f3 = "e";
                o3 = 0;
              }
              if (!c2) i2[d3] = c2 = { t: f3, v: o3 };
              else {
                c2.t = f3;
                c2.v = o3;
                delete c2.w;
                delete c2.R;
                if (u3) c2.z = u3;
              }
              if (u3) c2.z = u3;
            }
          });
        });
        f2.e.c = Math.max(f2.e.c, l2 + h2.length - 1);
        var d2 = ya(s2);
        if (n2) for (p2 = 0; p2 < h2.length; ++p2) i2[Ca(p2 + l2) + d2] = { t: "s", v: h2[p2] };
        i2["!ref"] = Oa(f2);
        return i2;
      }
      function cc(e2, r2) {
        return oc(null, e2, r2);
      }
      function fc(e2, r2, t2) {
        if (typeof r2 == "string") {
          if (Array.isArray(e2)) {
            var a2 = Ea(r2);
            if (!e2[a2.r]) e2[a2.r] = [];
            return e2[a2.r][a2.c] || (e2[a2.r][a2.c] = { t: "z" });
          }
          return e2[r2] || (e2[r2] = { t: "z" });
        }
        if (typeof r2 != "number") return fc(e2, Fa(r2));
        return fc(e2, Fa({ r: r2, c: t2 || 0 }));
      }
      function uc(e2, r2) {
        if (typeof r2 == "number") {
          if (r2 >= 0 && e2.SheetNames.length > r2) return r2;
          throw new Error("Cannot find sheet # " + r2);
        } else if (typeof r2 == "string") {
          var t2 = e2.SheetNames.indexOf(r2);
          if (t2 > -1) return t2;
          throw new Error("Cannot find sheet name |" + r2 + "|");
        } else throw new Error("Cannot find sheet |" + r2 + "|");
      }
      function hc() {
        return { SheetNames: [], Sheets: {} };
      }
      function pc(e2, r2, t2, a2) {
        var n2 = 1;
        if (!t2) {
          for (; n2 <= 65535; ++n2, t2 = void 0) if (e2.SheetNames.indexOf(t2 = "Sheet" + n2) == -1) break;
        }
        if (!t2 || e2.SheetNames.length >= 65535) throw new Error("Too many worksheets");
        if (a2 && e2.SheetNames.indexOf(t2) >= 0) {
          var i2 = t2.match(/(^.*?)(\d+)$/);
          n2 = i2 && +i2[2] || 0;
          var s2 = i2 && i2[1] || t2;
          for (++n2; n2 <= 65535; ++n2) if (e2.SheetNames.indexOf(t2 = s2 + n2) == -1) break;
        }
        Tl(t2);
        if (e2.SheetNames.indexOf(t2) >= 0) throw new Error("Worksheet with name |" + t2 + "| already exists!");
        e2.SheetNames.push(t2);
        e2.Sheets[t2] = r2;
        return t2;
      }
      function dc(e2, r2, t2) {
        if (!e2.Workbook) e2.Workbook = {};
        if (!e2.Workbook.Sheets) e2.Workbook.Sheets = [];
        var a2 = uc(e2, r2);
        if (!e2.Workbook.Sheets[a2]) e2.Workbook.Sheets[a2] = {};
        switch (t2) {
          case 0:
            ;
          case 1:
            ;
          case 2:
            break;
          default:
            throw new Error("Bad sheet visibility setting " + t2);
        }
        e2.Workbook.Sheets[a2].Hidden = t2;
      }
      function mc(e2, r2) {
        e2.z = r2;
        return e2;
      }
      function vc(e2, r2, t2) {
        if (!r2) {
          delete e2.l;
        } else {
          e2.l = { Target: r2 };
          if (t2) e2.l.Tooltip = t2;
        }
        return e2;
      }
      function gc(e2, r2, t2) {
        return vc(e2, "#" + r2, t2);
      }
      function bc(e2, r2, t2) {
        if (!e2.c) e2.c = [];
        e2.c.push({ t: r2, a: t2 || "SheetJS" });
      }
      function wc(e2, r2, t2, a2) {
        var n2 = typeof r2 != "string" ? r2 : Ma(r2);
        var i2 = typeof r2 == "string" ? r2 : Oa(r2);
        for (var s2 = n2.s.r; s2 <= n2.e.r; ++s2) for (var l2 = n2.s.c; l2 <= n2.e.c; ++l2) {
          var o2 = fc(e2, s2, l2);
          o2.t = "n";
          o2.F = i2;
          delete o2.v;
          if (s2 == n2.s.r && l2 == n2.s.c) {
            o2.f = t2;
            if (a2) o2.D = true;
          }
        }
        return e2;
      }
      var yc = { encode_col: Ca, encode_row: ya, encode_cell: Fa, encode_range: Oa, decode_col: Sa, decode_row: wa, split_cell: Ta, decode_cell: Ea, decode_range: Da, format_cell: Pa, sheet_add_aoa: Ra, sheet_add_json: oc, sheet_add_dom: io, aoa_to_sheet: La, json_to_sheet: cc, table_to_sheet: so, table_to_book: lo, sheet_to_csv: ic, sheet_to_txt: sc, sheet_to_json: tc, sheet_to_html: no, sheet_to_formulae: lc, sheet_to_row_object_array: tc, sheet_get_cell: fc, book_new: hc, book_append_sheet: pc, book_set_sheet_visibility: dc, cell_set_number_format: mc, cell_set_hyperlink: vc, cell_set_internal_link: gc, cell_add_comment: bc, sheet_set_array_formula: wc, consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 } };
      if (typeof parse_xlscfb !== "undefined") e.parse_xlscfb = parse_xlscfb;
      e.parse_zip = Ao;
      e.read = $o;
      e.readFile = zo;
      e.readFileSync = zo;
      e.write = Ko;
      e.writeFile = Zo;
      e.writeFileSync = Zo;
      e.writeFileAsync = ec;
      e.utils = yc;
      e.writeXLSX = Jo;
      e.writeFileXLSX = Qo;
      e.SSF = We;
      if (typeof __stream !== "undefined") e.stream = __stream;
      if (typeof Ye !== "undefined") e.CFB = Ye;
      if (typeof __require !== "undefined") {
        var kc = void 0;
        if ((kc || {}).Readable) set_readable(kc.Readable);
      }
    }
    if (typeof exports !== "undefined") make_xlsx_lib(exports);
    else if (typeof module !== "undefined" && module.exports) make_xlsx_lib(module.exports);
    else if (typeof define === "function" && define.amd) define("xlsx", function() {
      if (!XLSX.version) make_xlsx_lib(XLSX);
      return XLSX;
    });
    else make_xlsx_lib(XLSX);
    if (typeof window !== "undefined" && !window.XLSX) try {
      window.XLSX = XLSX;
    } catch (e) {
    }
  }
});
export default require_xlsx_mini_min();
//# sourceMappingURL=xlsx.mini.min-XC3U4W27.js.map
