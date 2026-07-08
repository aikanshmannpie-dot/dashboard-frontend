import {
  Component,
  ContentChild,
  Directive,
  ElementRef,
  Input,
  NgModule,
  Optional,
  TemplateRef,
  setClassMetadata,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh
} from "./chunk-6DMRTYP4.js";
import "./chunk-YYNRWHHG.js";
import "./chunk-GVFRXGC7.js";
import "./chunk-KHYTP7BM.js";
import "./chunk-AT63LGFU.js";
import "./chunk-AJZJRYBU.js";
import {
  __async
} from "./chunk-C2MXH2NC.js";

// node_modules/@progress/kendo-drawing/dist/es/common/class.js
var Class = class {
  // Empty base class needed for compatibility with Kendo UI for jQuery
};

// node_modules/@progress/kendo-drawing/dist/es/common/animation-frame.js
var animationFrameProxy = (callback) => {
  const wnd = typeof window !== "undefined" ? window : {};
  const animationFrame = wnd.requestAnimationFrame || wnd.webkitRequestAnimationFrame || wnd.mozRequestAnimationFrame || wnd.oRequestAnimationFrame || wnd.msRequestAnimationFrame || function(callback2) {
    setTimeout(callback2, 1e3 / 60);
  };
  animationFrameProxy = (callback2) => animationFrame.call(wnd, callback2);
  animationFrameProxy(callback);
};
var animation_frame_default = animationFrameProxy;

// node_modules/@progress/kendo-drawing/dist/es/common/html-encode.js
var ampRegExp = /&/g;
var ltRegExp = /</g;
var quoteRegExp = /"/g;
var aposRegExp = /'/g;
var gtRegExp = />/g;
function htmlEncode(value) {
  return String(value).replace(ampRegExp, "&amp;").replace(ltRegExp, "&lt;").replace(gtRegExp, "&gt;").replace(quoteRegExp, "&quot;").replace(aposRegExp, "&#39;");
}

// node_modules/@progress/kendo-drawing/dist/es/common/support.js
function matchUserAgent(userAgent2) {
  const browserRxs = {
    edge: /(edge)[ \/]([\w.]+)/i,
    webkit: /(chrome)[ \/]([\w.]+)/i,
    safari: /(webkit)[ \/]([\w.]+)/i,
    opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
    msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
    mozilla: /(mozilla)(?:.*? rv:([\w.]+))/i
  };
  let browser6 = {};
  for (let agent in browserRxs) {
    if (browserRxs.hasOwnProperty(agent)) {
      const match = userAgent2.match(browserRxs[agent]);
      if (match) {
        browser6[agent] = true;
        browser6[match[1].toLowerCase().split(" ")[0].split("/")[0]] = true;
        browser6.version = parseInt(document.documentMode || match[2], 10);
        break;
      }
    }
  }
  return browser6;
}
var browser = null;
var support = {
  get browser() {
    if (typeof window === "undefined" || browser) {
      return browser;
    }
    browser = matchUserAgent(window.navigator.userAgent);
    return browser;
  }
};
var support_default = support;

// node_modules/@progress/kendo-drawing/dist/es/common/template.js
function template() {
  throw new Error("Template implementation missing.");
}

// node_modules/@progress/kendo-drawing/dist/es/util/now.js
var now = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
var now_default = now;

// node_modules/@progress/kendo-drawing/dist/es/common/throttle.js
function throttle(fn, delay) {
  let lastExecTime = 0;
  let timeout;
  if (!delay || delay <= 0) {
    return fn;
  }
  const throttled = function() {
    const elapsed = now_default() - lastExecTime;
    const args = arguments;
    const exec = function() {
      fn.apply(null, args);
      lastExecTime = now_default();
    };
    if (!lastExecTime) {
      return exec();
    }
    if (timeout) {
      clearTimeout(timeout);
    }
    if (elapsed > delay) {
      exec();
    } else {
      timeout = setTimeout(exec, delay - elapsed);
    }
  };
  throttled.cancel = function() {
    clearTimeout(timeout);
  };
  return throttled;
}

// node_modules/@progress/kendo-drawing/dist/es/common/color/named-colors.js
var namedColors = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgrey: "a9a9a9",
  darkgreen: "006400",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  grey: "808080",
  green: "008000",
  greenyellow: "adff2f",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgrey: "d3d3d3",
  lightgreen: "90ee90",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "778899",
  lightslategrey: "778899",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "00ff00",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "ff00ff",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370d8",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "d87093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  red: "ff0000",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "ffffff",
  whitesmoke: "f5f5f5",
  yellow: "ffff00",
  yellowgreen: "9acd32"
};
var named_colors_default = namedColors;

// node_modules/@progress/kendo-drawing/dist/es/common/color/parse-color.js
var browser2 = support_default.browser;
var matchNamedColor = (color) => {
  const colorNames = Object.keys(named_colors_default);
  colorNames.push("transparent");
  const regexp = new RegExp("^(" + colorNames.join("|") + ")(\\W|$)", "i");
  matchNamedColor = (color2) => regexp.exec(color2);
  return regexp.exec(color);
};
var BaseColor = class extends Class {
  constructor() {
    super();
  }
  toHSV() {
    return this;
  }
  toRGB() {
    return this;
  }
  toHex(options2) {
    return this.toBytes().toHex(options2);
  }
  toBytes() {
    return this;
  }
  toCss(options2) {
    return "#" + this.toHex(options2);
  }
  toCssRgba() {
    const rgb = this.toBytes();
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${parseFloat(Number(this.a).toFixed(3))})`;
  }
  toCssHex() {
    if (this.a === 1) {
      return "#" + this.toHex();
    }
    return "#" + this.toHex({ alpha: true });
  }
  toDisplay() {
    if (browser2.msie && browser2.version < 9) {
      return this.toCss();
    }
    return this.toCssRgba();
  }
  equals(c2) {
    return c2 === this || c2 !== null && c2 !== void 0 && this.toCssRgba() === parseColor(c2).toCssRgba();
  }
  diff(other) {
    if (other === null) {
      return NaN;
    }
    const c1 = this.toBytes();
    const c2 = other.toBytes();
    return Math.sqrt(Math.pow((c1.r - c2.r) * 0.3, 2) + Math.pow((c1.g - c2.g) * 0.59, 2) + Math.pow((c1.b - c2.b) * 0.11, 2));
  }
  clone() {
    let c2 = this.toBytes();
    if (c2 === this) {
      c2 = new Bytes(c2.r, c2.g, c2.b, c2.a);
    }
    return c2;
  }
};
var RGB = class extends BaseColor {
  constructor(r2, g2, b, a2) {
    super();
    this.r = r2;
    this.g = g2;
    this.b = b;
    this.a = a2;
  }
  toHSV() {
    const { r: r2, g: g2, b } = this;
    const min = Math.min(r2, g2, b);
    const max = Math.max(r2, g2, b);
    const delta = max - min;
    const v2 = max;
    let h2, s2;
    if (delta === 0) {
      return new HSV(0, 0, v2, this.a);
    }
    if (max !== 0) {
      s2 = delta / max;
      if (r2 === max) {
        h2 = (g2 - b) / delta;
      } else if (g2 === max) {
        h2 = 2 + (b - r2) / delta;
      } else {
        h2 = 4 + (r2 - g2) / delta;
      }
      h2 *= 60;
      if (h2 < 0) {
        h2 += 360;
      }
    } else {
      s2 = 0;
      h2 = -1;
    }
    return new HSV(h2, s2, v2, this.a);
  }
  toHSL() {
    const { r: r2, g: g2, b } = this;
    const max = Math.max(r2, g2, b);
    const min = Math.min(r2, g2, b);
    let h2, s2, l2 = (max + min) / 2;
    if (max === min) {
      h2 = s2 = 0;
    } else {
      const d2 = max - min;
      s2 = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
      switch (max) {
        case r2:
          h2 = (g2 - b) / d2 + (g2 < b ? 6 : 0);
          break;
        case g2:
          h2 = (b - r2) / d2 + 2;
          break;
        case b:
          h2 = (r2 - g2) / d2 + 4;
          break;
        default:
          break;
      }
    }
    return new HSL(h2 * 60, s2 * 100, l2 * 100, this.a);
  }
  toBytes() {
    return new Bytes(this.r * 255, this.g * 255, this.b * 255, this.a);
  }
};
var Bytes = class extends RGB {
  constructor(r2, g2, b, a2) {
    super(Math.round(r2), Math.round(g2), Math.round(b), a2);
  }
  toRGB() {
    return new RGB(this.r / 255, this.g / 255, this.b / 255, this.a);
  }
  toHSV() {
    return this.toRGB().toHSV();
  }
  toHSL() {
    return this.toRGB().toHSL();
  }
  toHex(options2) {
    let value = hex(this.r, 2) + hex(this.g, 2) + hex(this.b, 2);
    if (options2 && options2.alpha) {
      value += hex(Math.round(this.a * 255), 2);
    }
    return value;
  }
  toBytes() {
    return this;
  }
};
function hex(n2, width, pad2 = "0") {
  let result = n2.toString(16);
  while (width > result.length) {
    result = pad2 + result;
  }
  return result;
}
var HSV = class extends BaseColor {
  constructor(h2, s2, v2, a2) {
    super();
    this.h = h2;
    this.s = s2;
    this.v = v2;
    this.a = a2;
  }
  toRGB() {
    let { h: h2, s: s2, v: v2 } = this;
    let r2, g2, b;
    if (s2 === 0) {
      r2 = g2 = b = v2;
    } else {
      h2 /= 60;
      const i2 = Math.floor(h2);
      const f2 = h2 - i2;
      const p2 = v2 * (1 - s2);
      const q = v2 * (1 - s2 * f2);
      const t2 = v2 * (1 - s2 * (1 - f2));
      switch (i2) {
        case 0:
          r2 = v2;
          g2 = t2;
          b = p2;
          break;
        case 1:
          r2 = q;
          g2 = v2;
          b = p2;
          break;
        case 2:
          r2 = p2;
          g2 = v2;
          b = t2;
          break;
        case 3:
          r2 = p2;
          g2 = q;
          b = v2;
          break;
        case 4:
          r2 = t2;
          g2 = p2;
          b = v2;
          break;
        default:
          r2 = v2;
          g2 = p2;
          b = q;
          break;
      }
    }
    return new RGB(r2, g2, b, this.a);
  }
  toHSL() {
    return this.toRGB().toHSL();
  }
  toBytes() {
    return this.toRGB().toBytes();
  }
};
var HSL = class extends BaseColor {
  constructor(h2, s2, l2, a2) {
    super();
    this.h = h2;
    this.s = s2;
    this.l = l2;
    this.a = a2;
  }
  toRGB() {
    let h2 = this.h / 360;
    let s2 = this.s / 100;
    let l2 = this.l / 100;
    let r2, g2, b;
    if (s2 === 0) {
      r2 = g2 = b = l2;
    } else {
      const q = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
      const p2 = 2 * l2 - q;
      r2 = hue2rgb(p2, q, h2 + 1 / 3);
      g2 = hue2rgb(p2, q, h2);
      b = hue2rgb(p2, q, h2 - 1 / 3);
    }
    return new RGB(r2, g2, b, this.a);
  }
  toHSV() {
    return this.toRGB().toHSV();
  }
  toBytes() {
    return this.toRGB().toBytes();
  }
};
function hue2rgb(p2, q, s2) {
  let t2 = s2;
  if (t2 < 0) {
    t2 += 1;
  }
  if (t2 > 1) {
    t2 -= 1;
  }
  if (t2 < 1 / 6) {
    return p2 + (q - p2) * 6 * t2;
  }
  if (t2 < 1 / 2) {
    return q;
  }
  if (t2 < 2 / 3) {
    return p2 + (q - p2) * (2 / 3 - t2) * 6;
  }
  return p2;
}
function alphaFromHex(a2) {
  return parseFloat(parseFloat(parseInt(a2, 16) / 255).toFixed(3));
}
function parseColor(value, safe) {
  let m2, ret;
  if (!value || value === "none") {
    return null;
  }
  if (value instanceof BaseColor) {
    return value;
  }
  let color = value.toLowerCase();
  if (m2 = matchNamedColor(color)) {
    if (m2[1] === "transparent") {
      color = new RGB(1, 1, 1, 0);
    } else {
      color = parseColor(named_colors_default[m2[1]], safe);
    }
    color.match = [m2[1]];
    return color;
  }
  if (m2 = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})\b/i.exec(color)) {
    ret = new Bytes(
      parseInt(m2[1], 16),
      parseInt(m2[2], 16),
      parseInt(m2[3], 16),
      1
    );
  } else if (m2 = /^#?([0-9a-f])([0-9a-f])([0-9a-f])\b/i.exec(color)) {
    ret = new Bytes(
      parseInt(m2[1] + m2[1], 16),
      parseInt(m2[2] + m2[2], 16),
      parseInt(m2[3] + m2[3], 16),
      1
    );
  } else if (m2 = /^#?([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])\b/i.exec(color)) {
    ret = new Bytes(
      parseInt(m2[1] + m2[1], 16),
      parseInt(m2[2] + m2[2], 16),
      parseInt(m2[3] + m2[3], 16),
      alphaFromHex(m2[4] + m2[4])
    );
  } else if (m2 = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})\b/i.exec(color)) {
    ret = new Bytes(
      parseInt(m2[1], 16),
      parseInt(m2[2], 16),
      parseInt(m2[3], 16),
      alphaFromHex(m2[4])
    );
  } else if (m2 = /^rgb\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/.exec(color)) {
    ret = new Bytes(
      parseInt(m2[1], 10),
      parseInt(m2[2], 10),
      parseInt(m2[3], 10),
      1
    );
  } else if (m2 = /^rgba\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9.]+)\s*\)/.exec(color)) {
    ret = new Bytes(
      parseInt(m2[1], 10),
      parseInt(m2[2], 10),
      parseInt(m2[3], 10),
      parseFloat(m2[4])
    );
  } else if (m2 = /^rgb\(\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*\)/.exec(color)) {
    ret = new RGB(
      parseFloat(m2[1]) / 100,
      parseFloat(m2[2]) / 100,
      parseFloat(m2[3]) / 100,
      1
    );
  } else if (m2 = /^rgba\(\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9.]+)\s*\)/.exec(color)) {
    ret = new RGB(
      parseFloat(m2[1]) / 100,
      parseFloat(m2[2]) / 100,
      parseFloat(m2[3]) / 100,
      parseFloat(m2[4])
    );
  } else if (m2 = /^color\(\s*srgb\s*([0-9]*\.?[0-9]+)\s+([0-9]*\.?[0-9]+)\s+([0-9]*\.?[0-9]+)\s*(\/\s+([0-9]*\.?[0-9]+))?\)/.exec(color)) {
    ret = new RGB(
      parseFloat(m2[1]),
      parseFloat(m2[2]),
      parseFloat(m2[3]),
      parseFloat(m2[5] || "1")
    );
  }
  if (ret) {
    ret.match = m2;
  } else if (!safe) {
    throw new Error("Cannot parse color: " + color);
  }
  return ret;
}

// node_modules/@progress/kendo-drawing/dist/es/common/color/color.js
var DARK_TRESHOLD = 180;
var Color = class _Color extends Class {
  constructor(value) {
    super();
    if (arguments.length === 1) {
      const formats = _Color.formats;
      const resolvedColor = this.resolveColor(value);
      for (let idx = 0; idx < formats.length; idx++) {
        const formatRegex = formats[idx].re;
        const processor = formats[idx].process;
        const parts = formatRegex.exec(resolvedColor);
        if (parts) {
          const channels = processor(parts);
          this.r = channels[0];
          this.g = channels[1];
          this.b = channels[2];
        }
      }
    } else {
      this.r = arguments[0];
      this.g = arguments[1];
      this.b = arguments[2];
    }
    this.r = this.normalizeByte(this.r);
    this.g = this.normalizeByte(this.g);
    this.b = this.normalizeByte(this.b);
  }
  toHex() {
    const pad2 = this.padDigit;
    const r2 = this.r.toString(16);
    const g2 = this.g.toString(16);
    const b = this.b.toString(16);
    return "#" + pad2(r2) + pad2(g2) + pad2(b);
  }
  resolveColor(value) {
    let color = value || "black";
    if (color.charAt(0) === "#") {
      color = color.substr(1, 6);
    }
    color = color.replace(/ /g, "");
    color = color.toLowerCase();
    color = _Color.namedColors[color] || color;
    return color;
  }
  normalizeByte(value) {
    if (value < 0 || isNaN(value)) {
      return 0;
    }
    return value > 255 ? 255 : value;
  }
  padDigit(value) {
    return value.length === 1 ? "0" + value : value;
  }
  brightness(value) {
    const round2 = Math.round;
    this.r = round2(this.normalizeByte(this.r * value));
    this.g = round2(this.normalizeByte(this.g * value));
    this.b = round2(this.normalizeByte(this.b * value));
    return this;
  }
  percBrightness() {
    return Math.sqrt(0.241 * this.r * this.r + 0.691 * this.g * this.g + 0.068 * this.b * this.b);
  }
  isDark() {
    return this.percBrightness() < DARK_TRESHOLD;
  }
  static fromBytes(r2, g2, b, a2) {
    return new Bytes(r2, g2, b, a2 != null ? a2 : 1);
  }
  static fromRGB(r2, g2, b, a2) {
    return new RGB(r2, g2, b, a2 != null ? a2 : 1);
  }
  static fromHSV(h2, s2, v2, a2) {
    return new HSV(h2, s2, v2, a2 != null ? a2 : 1);
  }
  static fromHSL(h2, s2, l2, a2) {
    return new HSL(h2, s2, l2, a2 != null ? a2 : 1);
  }
};
Color.formats = [{
  re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
  process: function(parts) {
    return [
      parseInt(parts[1], 10),
      parseInt(parts[2], 10),
      parseInt(parts[3], 10)
    ];
  }
}, {
  re: /^(\w{2})(\w{2})(\w{2})$/,
  process: function(parts) {
    return [
      parseInt(parts[1], 16),
      parseInt(parts[2], 16),
      parseInt(parts[3], 16)
    ];
  }
}, {
  re: /^(\w{1})(\w{1})(\w{1})$/,
  process: function(parts) {
    return [
      parseInt(parts[1] + parts[1], 16),
      parseInt(parts[2] + parts[2], 16),
      parseInt(parts[3] + parts[3], 16)
    ];
  }
}];
Color.namedColors = named_colors_default;

// node_modules/@progress/kendo-drawing/dist/es/common/color/resolve-element-color.js
var elementStyles = (element) => element.ownerDocument.defaultView.getComputedStyle(element);
var fallbackColor = `#000000`;
var resolveColorFromDOM = (element, cssColor) => {
  const tempNode = document.createElement("div");
  if (element.parentElement) {
    element.parentElement.appendChild(tempNode);
  } else {
    element.appendChild(tempNode);
  }
  tempNode.style.color = `rgb(from ${cssColor} clamp(0, r, 255) clamp(0, g, 255) clamp(0, b, 255))`;
  const parsedColor = parseColor(elementStyles(tempNode).color, true);
  tempNode.remove();
  if (!parsedColor) {
    return fallbackColor;
  }
  return parsedColor.toCssHex();
};
function resolveElementColor(element, colorProp) {
  const cssColor = elementStyles(element).getPropertyValue(colorProp);
  let color = parseColor(cssColor, true);
  if (color) {
    return color.toCssHex();
  }
  return resolveColorFromDOM(element, cssColor);
}

// node_modules/@progress/kendo-drawing/dist/es/core/has-observers.js
var HasObservers = class extends Class {
  observers() {
    this._observers = this._observers || [];
    return this._observers;
  }
  addObserver(element) {
    if (!this._observers) {
      this._observers = [element];
    } else {
      this._observers.push(element);
    }
    return this;
  }
  removeObserver(element) {
    const observers = this.observers();
    const index = observers.indexOf(element);
    if (index !== -1) {
      observers.splice(index, 1);
    }
    return this;
  }
  trigger(methodName, event) {
    const observers = this._observers;
    if (observers && !this._suspended) {
      for (let idx = 0; idx < observers.length; idx++) {
        let observer = observers[idx];
        if (observer[methodName]) {
          observer[methodName](event);
        }
      }
    }
    return this;
  }
  optionsChange(e2 = {}) {
    e2.element = this;
    this.trigger("optionsChange", e2);
  }
  geometryChange() {
    this.trigger("geometryChange", {
      element: this
    });
  }
  suspend() {
    this._suspended = (this._suspended || 0) + 1;
    return this;
  }
  resume() {
    this._suspended = Math.max((this._suspended || 0) - 1, 0);
    return this;
  }
  _observerField(field, value) {
    if (this[field]) {
      this[field].removeObserver(this);
    }
    this[field] = value;
    value.addObserver(this);
  }
};
var has_observers_default = HasObservers;

// node_modules/@progress/kendo-drawing/dist/es/core/options-store.js
var toString = {}.toString;
var OptionsStore = class _OptionsStore extends has_observers_default {
  constructor(options2, prefix = "") {
    super();
    this.prefix = prefix;
    for (let field in options2) {
      let member = options2[field];
      member = this._wrap(member, field);
      this[field] = member;
    }
  }
  get(field) {
    const parts = field.split(".");
    let result = this;
    while (parts.length && result) {
      let part = parts.shift();
      result = result[part];
    }
    return result;
  }
  set(field, value) {
    const current = this.get(field);
    if (current !== value) {
      this._set(field, this._wrap(value, field));
      this.optionsChange({
        field: this.prefix + field,
        value
      });
    }
  }
  _set(field, value) {
    const composite = field.indexOf(".") >= 0;
    let parentObj = this;
    let fieldName = field;
    if (composite) {
      const parts = fieldName.split(".");
      let prefix = this.prefix;
      while (parts.length > 1) {
        fieldName = parts.shift();
        prefix += fieldName + ".";
        let obj = parentObj[fieldName];
        if (!obj) {
          obj = new _OptionsStore({}, prefix);
          obj.addObserver(this);
          parentObj[fieldName] = obj;
        }
        parentObj = obj;
      }
      fieldName = parts[0];
    }
    parentObj._clear(fieldName);
    parentObj[fieldName] = value;
  }
  _clear(field) {
    const current = this[field];
    if (current && current.removeObserver) {
      current.removeObserver(this);
    }
  }
  _wrap(object, field) {
    const type = toString.call(object);
    let wrapped = object;
    if (wrapped !== null && wrapped !== void 0 && type === "[object Object]") {
      if (!(object instanceof _OptionsStore) && !(object instanceof Class)) {
        wrapped = new _OptionsStore(wrapped, this.prefix + field + ".");
      }
      wrapped.addObserver(this);
    }
    return wrapped;
  }
};
var options_store_default = OptionsStore;

// node_modules/@progress/kendo-drawing/dist/es/mixins/with-accessors.js
function setAccessor(field) {
  return function(value) {
    if (this[field] !== value) {
      this[field] = value;
      this.geometryChange();
    }
    return this;
  };
}
function getAccessor(field) {
  return function() {
    return this[field];
  };
}
function defineAccessors(fn, fields) {
  for (let i2 = 0; i2 < fields.length; i2++) {
    let name = fields[i2];
    let capitalized = name.charAt(0).toUpperCase() + name.substring(1, name.length);
    fn["set" + capitalized] = setAccessor(name);
    fn["get" + capitalized] = getAccessor(name);
  }
}
var withAccessors = (TBase, names) => {
  const result = class extends TBase {
  };
  defineAccessors(result.prototype, names);
  return result;
};
var with_accessors_default = withAccessors;

// node_modules/@progress/kendo-drawing/dist/es/util/append.js
function append(first, second) {
  first.push.apply(first, second);
  return first;
}

// node_modules/@progress/kendo-drawing/dist/es/util/arabic-to-roman.js
var literals = {
  1: "i",
  10: "x",
  100: "c",
  2: "ii",
  20: "xx",
  200: "cc",
  3: "iii",
  30: "xxx",
  300: "ccc",
  4: "iv",
  40: "xl",
  400: "cd",
  5: "v",
  50: "l",
  500: "d",
  6: "vi",
  60: "lx",
  600: "dc",
  7: "vii",
  70: "lxx",
  700: "dcc",
  8: "viii",
  80: "lxxx",
  800: "dccc",
  9: "ix",
  90: "xc",
  900: "cm",
  1e3: "m"
};
function arabicToRoman(n2) {
  const values = [
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ];
  let roman = "";
  while (n2 > 0) {
    if (n2 < values[0]) {
      values.shift();
    } else {
      roman += literals[values[0]];
      n2 -= values[0];
    }
  }
  return roman;
}

// node_modules/@progress/kendo-drawing/dist/es/util/create-promise.js
function createPromise() {
  let resolveFn, rejectFn;
  const promise = new Promise((resolve, reject) => {
    resolveFn = (data) => {
      promise._state = "resolved";
      resolve(data);
      return promise;
    };
    rejectFn = (data) => {
      promise._state = "rejected";
      reject(data);
      return promise;
    };
  });
  promise._state = "pending";
  promise.resolve = resolveFn;
  promise.reject = rejectFn;
  promise.state = () => promise._state;
  return promise;
}

// node_modules/@progress/kendo-drawing/dist/es/util/definition-id.js
var defId = 1;
function definitionId() {
  return "kdef" + defId++;
}

// node_modules/@progress/kendo-drawing/dist/es/util/constants.js
var DEG_TO_RAD = Math.PI / 180;
var MAX_NUM = Number.MAX_VALUE;
var MIN_NUM = -Number.MAX_VALUE;

// node_modules/@progress/kendo-drawing/dist/es/util/deg.js
function deg(radians) {
  return radians / DEG_TO_RAD;
}

// node_modules/@progress/kendo-drawing/dist/es/util/encode-utf.js
var fromCharCode = String.fromCharCode;
var BOM = "þÿ";
function encodeUTF8(input) {
  let output = "";
  for (let i2 = 0; i2 < input.length; i2++) {
    let code = input.charCodeAt(i2);
    if (55296 <= code && code <= 56319) {
      const hi = code;
      const low = input.charCodeAt(++i2);
      if (!isNaN(low)) {
        code = (hi - 55296) * 1024 + (low - 56320) + 65536;
      }
    }
    if (code < 128) {
      output += fromCharCode(code);
    } else if (code < 2048) {
      output += fromCharCode(192 | code >>> 6);
      output += fromCharCode(128 | code & 63);
    } else if (code < 65536) {
      output += fromCharCode(224 | code >>> 12);
      output += fromCharCode(128 | code >>> 6 & 63);
      output += fromCharCode(128 | code & 63);
    } else if (code < 1114111) {
      output += fromCharCode(240 | code >>> 18);
      output += fromCharCode(128 | code >>> 12 & 63);
      output += fromCharCode(128 | code >>> 6 & 63);
      output += fromCharCode(128 | code & 63);
    }
  }
  return output;
}
function encodeUnit(codeUnit) {
  return fromCharCode(codeUnit >> 8) + fromCharCode(codeUnit & 255);
}
function encodeUTF16BE(input) {
  let output = "";
  for (let i2 = 0; i2 < input.length; i2++) {
    const c2 = input.charCodeAt(i2);
    if (c2 < 65535) {
      output += encodeUnit(c2);
    } else {
      const lead = (c2 - 65536 >> 10) + 55296;
      const trail = (c2 - 65536 & 1023) + 56320;
      output += encodeUnit(lead);
      output += encodeUnit(trail);
    }
  }
  return output;
}

// node_modules/@progress/kendo-drawing/dist/es/util/encode-base64.js
var KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function encodeBase64(input) {
  let output = "";
  let i2 = 0;
  const utfInput = encodeUTF8(input);
  while (i2 < utfInput.length) {
    let chr1 = utfInput.charCodeAt(i2++);
    let chr2 = utfInput.charCodeAt(i2++);
    let chr3 = utfInput.charCodeAt(i2++);
    let enc1 = chr1 >> 2;
    let enc2 = (chr1 & 3) << 4 | chr2 >> 4;
    let enc3 = (chr2 & 15) << 2 | chr3 >> 6;
    let enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output = output + KEY_STR.charAt(enc1) + KEY_STR.charAt(enc2) + KEY_STR.charAt(enc3) + KEY_STR.charAt(enc4);
  }
  return output;
}

// node_modules/@progress/kendo-drawing/dist/es/util/is-transparent.js
function isTransparent(color) {
  return color === "" || color === null || color === "none" || color === "transparent" || color === void 0;
}

// node_modules/@progress/kendo-drawing/dist/es/util/last.js
function last(array) {
  if (array) {
    return array[array.length - 1];
  }
}

// node_modules/@progress/kendo-drawing/dist/es/util/limit-value.js
function limitValue(value, min, max) {
  return Math.max(Math.min(value, max), min);
}

// node_modules/@progress/kendo-drawing/dist/es/util/merge-sort.js
function mergeSort(a2, cmp) {
  if (a2.length < 2) {
    return a2.slice();
  }
  function merge(a3, b) {
    var r2 = [], ai = 0, bi = 0, i2 = 0;
    while (ai < a3.length && bi < b.length) {
      if (cmp(a3[ai], b[bi]) <= 0) {
        r2[i2++] = a3[ai++];
      } else {
        r2[i2++] = b[bi++];
      }
    }
    if (ai < a3.length) {
      r2.push.apply(r2, a3.slice(ai));
    }
    if (bi < b.length) {
      r2.push.apply(r2, b.slice(bi));
    }
    return r2;
  }
  return (function sort(a3) {
    if (a3.length <= 1) {
      return a3;
    }
    var m2 = Math.floor(a3.length / 2);
    var left = a3.slice(0, m2);
    var right = a3.slice(m2);
    left = sort(left);
    right = sort(right);
    return merge(left, right);
  })(a2);
}

// node_modules/@progress/kendo-drawing/dist/es/util/rad.js
function rad(degrees) {
  return degrees * DEG_TO_RAD;
}

// node_modules/@progress/kendo-drawing/dist/es/util/round.js
function pow(p2) {
  if (p2) {
    return Math.pow(10, p2);
  }
  return 1;
}
function round(value, precision) {
  const power = pow(precision);
  return Math.round(value * power) / power;
}

// node_modules/@progress/kendo-drawing/dist/es/util/value-or-default.js
function valueOrDefault(value, defaultValue) {
  return value !== void 0 ? value : defaultValue;
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/matrix.js
var Matrix = class _Matrix extends Class {
  constructor(a2 = 0, b = 0, c2 = 0, d2 = 0, e2 = 0, f2 = 0) {
    super();
    this.a = a2;
    this.b = b;
    this.c = c2;
    this.d = d2;
    this.e = e2;
    this.f = f2;
  }
  multiplyCopy(matrix) {
    return new _Matrix(
      this.a * matrix.a + this.c * matrix.b,
      this.b * matrix.a + this.d * matrix.b,
      this.a * matrix.c + this.c * matrix.d,
      this.b * matrix.c + this.d * matrix.d,
      this.a * matrix.e + this.c * matrix.f + this.e,
      this.b * matrix.e + this.d * matrix.f + this.f
    );
  }
  invert() {
    const { a: a2, b, c: d2, d: e2, e: g2, f: h2 } = this;
    const det = a2 * e2 - b * d2;
    if (det === 0) {
      return null;
    }
    return new _Matrix(
      e2 / det,
      -b / det,
      -d2 / det,
      a2 / det,
      (d2 * h2 - e2 * g2) / det,
      (b * g2 - a2 * h2) / det
    );
  }
  clone() {
    return new _Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
  }
  equals(other) {
    if (!other) {
      return false;
    }
    return this.a === other.a && this.b === other.b && this.c === other.c && this.d === other.d && this.e === other.e && this.f === other.f;
  }
  round(precision) {
    this.a = round(this.a, precision);
    this.b = round(this.b, precision);
    this.c = round(this.c, precision);
    this.d = round(this.d, precision);
    this.e = round(this.e, precision);
    this.f = round(this.f, precision);
    return this;
  }
  toArray(precision) {
    const result = [this.a, this.b, this.c, this.d, this.e, this.f];
    if (precision !== void 0) {
      for (let i2 = 0; i2 < result.length; i2++) {
        result[i2] = round(result[i2], precision);
      }
    }
    return result;
  }
  toString(precision, separator = ",") {
    return this.toArray(precision).join(separator);
  }
  static translate(x, y2) {
    return new _Matrix(1, 0, 0, 1, x, y2);
  }
  static unit() {
    return new _Matrix(1, 0, 0, 1, 0, 0);
  }
  static rotate(angle, x, y2) {
    const matrix = new _Matrix();
    matrix.a = Math.cos(rad(angle));
    matrix.b = Math.sin(rad(angle));
    matrix.c = -matrix.b;
    matrix.d = matrix.a;
    matrix.e = x - x * matrix.a + y2 * matrix.b || 0;
    matrix.f = y2 - y2 * matrix.a - x * matrix.b || 0;
    return matrix;
  }
  static scale(scaleX, scaleY) {
    return new _Matrix(scaleX, 0, 0, scaleY, 0, 0);
  }
};
Matrix.IDENTITY = Matrix.unit();
var matrix_default = Matrix;

// node_modules/@progress/kendo-drawing/dist/es/text-metrics/lru-cache.js
var LRUCache = class extends Class {
  constructor(size) {
    super();
    this._size = size;
    this._length = 0;
    this._map = {};
  }
  put(key, value) {
    const map = this._map;
    const entry = { key, value };
    map[key] = entry;
    if (!this._head) {
      this._head = this._tail = entry;
    } else {
      this._tail.newer = entry;
      entry.older = this._tail;
      this._tail = entry;
    }
    if (this._length >= this._size) {
      map[this._head.key] = null;
      this._head = this._head.newer;
      this._head.older = null;
    } else {
      this._length++;
    }
  }
  get(key) {
    const entry = this._map[key];
    if (entry) {
      if (entry === this._head && entry !== this._tail) {
        this._head = entry.newer;
        this._head.older = null;
      }
      if (entry !== this._tail) {
        if (entry.older) {
          entry.older.newer = entry.newer;
          entry.newer.older = entry.older;
        }
        entry.older = this._tail;
        entry.newer = null;
        this._tail.newer = entry;
        this._tail = entry;
      }
      return entry.value;
    }
  }
};
var lru_cache_default = LRUCache;

// node_modules/@progress/kendo-drawing/dist/es/text-metrics/util.js
var REPLACE_REGEX = /\r?\n|\r|\t/g;
var SPACE = " ";
function normalizeText(text) {
  return String(text).replace(REPLACE_REGEX, SPACE);
}
function objectKey(object) {
  const parts = [];
  for (let key in object) {
    parts.push(key + object[key]);
  }
  return parts.sort().join("");
}
function hashKey(str) {
  let hash = 2166136261;
  for (let i2 = 0; i2 < str.length; ++i2) {
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
    hash ^= str.charCodeAt(i2);
  }
  return hash >>> 0;
}

// node_modules/@progress/kendo-drawing/dist/es/text-metrics/text-metrics.js
function zeroSize() {
  return { width: 0, height: 0, baseline: 0 };
}
var DEFAULT_OPTIONS = {
  baselineMarkerSize: 1
};
var defaultMeasureBox;
if (typeof document !== "undefined") {
  defaultMeasureBox = document.createElement("div");
  defaultMeasureBox.style.setProperty("position", "absolute", "important");
  defaultMeasureBox.style.setProperty("top", "-4000px", "important");
  defaultMeasureBox.style.setProperty("width", "auto", "important");
  defaultMeasureBox.style.setProperty("height", "auto", "important");
  defaultMeasureBox.style.setProperty("padding", "0", "important");
  defaultMeasureBox.style.setProperty("margin", "0", "important");
  defaultMeasureBox.style.setProperty("border", "0", "important");
  defaultMeasureBox.style.setProperty("line-height", "normal", "important");
  defaultMeasureBox.style.setProperty("visibility", "hidden", "important");
  defaultMeasureBox.style.setProperty("white-space", "pre", "important");
}
var TextMetrics = class extends Class {
  constructor(options2) {
    super();
    this._cache = new lru_cache_default(1e3);
    this.options = Object.assign({}, DEFAULT_OPTIONS, options2);
  }
  measure(text, style, options2 = {}) {
    if (typeof text === "undefined" || text === null) {
      return zeroSize();
    }
    const styleKey = objectKey(style);
    const cacheKey = hashKey(text + styleKey);
    const cachedResult = this._cache.get(cacheKey);
    if (cachedResult) {
      return cachedResult;
    }
    const size = zeroSize();
    const measureBox = options2.box || defaultMeasureBox;
    const baselineMarker = this._baselineMarker().cloneNode(false);
    for (let key in style) {
      let value = style[key];
      if (typeof value !== "undefined") {
        measureBox.style[key] = value;
      }
    }
    const textStr = options2.normalizeText !== false ? normalizeText(text) : String(text);
    measureBox.textContent = textStr;
    measureBox.appendChild(baselineMarker);
    document.body.appendChild(measureBox);
    if (textStr.length) {
      size.width = measureBox.offsetWidth - this.options.baselineMarkerSize;
      size.height = measureBox.offsetHeight;
      size.baseline = baselineMarker.offsetTop + this.options.baselineMarkerSize;
    }
    if (size.width > 0 && size.height > 0) {
      this._cache.put(cacheKey, size);
    }
    measureBox.parentNode.removeChild(measureBox);
    return size;
  }
  _baselineMarker() {
    const marker = document.createElement("div");
    marker.style.display = "inline-block";
    marker.style.verticalAlign = "baseline";
    marker.style.width = this.options.baselineMarkerSize + "px";
    marker.style.height = this.options.baselineMarkerSize + "px";
    marker.style.overflow = "hidden";
    return marker;
  }
};
TextMetrics.current = new TextMetrics();
var text_metrics_default = TextMetrics;

// node_modules/@progress/kendo-drawing/dist/es/text-metrics/measure-text.js
function measureText(text, style, measureBox) {
  return text_metrics_default.current.measure(text, style, measureBox);
}

// node_modules/@progress/kendo-common/dist/es/util.js
var isWindowAvailable = function() {
  return typeof window !== "undefined";
};

// node_modules/@progress/kendo-common/dist/es/support.js
var agentRxs = {
  wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
  fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
  android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)(\.(\d+(\.\d+)?))?/,
  iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
  ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
  meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
  webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
  blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
  playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
  windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
  tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
  sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
  ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
};
var osRxs = {
  ios: /^i(phone|pad|pod)$/i,
  android: /^android|fire$/i,
  blackberry: /^blackberry|playbook/i,
  windows: /windows/,
  wp: /wp/,
  flat: /sailfish|ffos|tizen/i,
  meego: /meego/
};
var desktopBrowserRxs = {
  edge: /(edge)[ \/]([\w.]+)/i,
  webkit: /(chrome)[ \/]([\w.]+)/i,
  safari: /(webkit)[ \/]([\w.]+)/i,
  opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
  msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
  mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
};
var mobileBrowserRxs = {
  omini: /Opera\sMini/i,
  omobile: /Opera\sMobi/i,
  firefox: /Firefox|Fennec/i,
  mobilesafari: /version\/.*safari/i,
  ie: /MSIE|Windows\sPhone/i,
  chrome: /chrome|crios/i,
  webkit: /webkit/i
};
var testRx = function(agent, rxs, dflt) {
  for (var rx in rxs) {
    if (rxs.hasOwnProperty(rx) && rxs[rx].test(agent)) {
      return rx;
    }
  }
  return dflt !== void 0 ? dflt : agent;
};
var detectMobileOS = function(ua) {
  var minorVersion;
  var match = [];
  for (var agent in agentRxs) {
    if (agentRxs.hasOwnProperty(agent)) {
      match = ua.match(agentRxs[agent]);
      if (!match) {
        continue;
      }
      if (agent === "windows" && "plugins" in window.navigator) {
        return null;
      }
      var os = {};
      os.device = agent;
      os.browser = testRx(ua, mobileBrowserRxs, "default");
      os.name = testRx(agent, osRxs);
      os[os.name] = true;
      os.majorVersion = match[2];
      os.minorVersion = match[3] ? match[3].replace("_", ".") : ".0";
      minorVersion = os.minorVersion.replace(".", "").substr(0, 2);
      os.flatVersion = os.majorVersion + minorVersion + new Array(3 - (minorVersion.length < 3 ? minorVersion.length : 2)).join("0");
      os.cordova = typeof window.PhoneGap !== void 0 || typeof window.cordova !== void 0;
      os.appMode = window.navigator.standalone || /file|local|wmapp/.test(window.location.protocol) || os.cordova;
      return os;
    }
  }
  return null;
};
var detectDesktopBrowser = function(ua) {
  var browserInfo = null;
  var match = [];
  for (var agent in desktopBrowserRxs) {
    if (desktopBrowserRxs.hasOwnProperty(agent)) {
      match = ua.match(desktopBrowserRxs[agent]);
      if (match) {
        browserInfo = {};
        browserInfo[agent] = true;
        browserInfo[match[1].toLowerCase().split(" ")[0].split("/")[0]] = true;
        browserInfo.version = parseInt(document.documentMode || match[2], 10);
        break;
      }
    }
  }
  return browserInfo;
};
var userAgent = isWindowAvailable() && window.navigator ? window.navigator.userAgent : null;
var browser3 = userAgent ? detectDesktopBrowser(userAgent) : null;
var mobileOS = userAgent ? detectMobileOS(userAgent) : null;
var touch = isWindowAvailable() && "ontouchstart" in window;
var msPointers = browser3 && !browser3.chrome && window.MSPointerEvent;
var pointers = browser3 && !browser3.chrome && window.PointerEvent;

// node_modules/@progress/kendo-common/dist/es/accessors/getter.js
var getterCache = {};
getterCache["undefined"] = function(obj) {
  return obj;
};

// node_modules/@progress/kendo-common/dist/es/accessors/setter.js
var setterCache = {};
setterCache["undefined"] = function(obj) {
  return obj;
};

// node_modules/@progress/kendo-common/dist/es/parse-style.js
var reComment = /\/\*[\s\S]*?\*\//g;
var reDeclaration = /([^\s:;]+?)\s*:\s*((?:(?:url\(\s*(?:(?:[^"')\\]|\\.)*|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')\s*\)|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|[^;"'])*?)\s*)(?=;|$)/gi;
var reDoubleQuoted = /&quot;|&#34;|&#x22;/gi;
var reSingleQuoted = /&apos;|&#39;|&#x27;/gi;
var doubleQuote = '"';
var singleQuote = "'";
var empty = "";
function replaceQuoteEntities(str) {
  return str.replace(reDoubleQuoted, doubleQuote).replace(reSingleQuoted, singleQuote);
}
function parseInlineStyles(styleString) {
  var styleObject = {};
  var input = replaceQuoteEntities((styleString || empty).replace(reComment, empty));
  var match = reDeclaration.exec(input), property, value;
  while (match !== null) {
    property = match[1].trim();
    value = match[2].trim();
    styleObject[property] = value;
    match = reDeclaration.exec(input);
  }
  return styleObject;
}

// node_modules/@progress/kendo-drawing/dist/es/util/element-set-styles-safe.js
var setStyle = (element, styleString) => {
  const styles = parseInlineStyles(styleString);
  Object.keys(styles).forEach((key) => {
    element.style[key] = styles[key];
  });
};
var styleAttr = "data-style";
var replaceStyleAttr = (html) => (html || "").replace(/\sstyle=/g, " " + styleAttr + "=");
var restoreStyleAttr = (container) => {
  Array.from(container.querySelectorAll("[" + styleAttr + "]")).forEach((element) => {
    const styleString = element.getAttribute(styleAttr);
    element.removeAttribute(styleAttr);
    setStyle(element, styleString);
  });
};
var setInnerHTML = (container, html) => {
  container.innerHTML = replaceStyleAttr(html);
  restoreStyleAttr(container);
};
var prependElement = (container, html) => {
  const tempContainer = document.createElement("div");
  setInnerHTML(tempContainer, html);
  if (tempContainer.firstElementChild) {
    container.insertBefore(tempContainer.firstElementChild, container.firstChild);
  }
};

// node_modules/@progress/kendo-drawing/dist/es/geometry/to-matrix.js
function toMatrix(transformation) {
  if (transformation && typeof transformation.matrix === "function") {
    return transformation.matrix();
  }
  return transformation;
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/point.js
var Point = class _Point extends with_accessors_default(has_observers_default, ["x", "y"]) {
  constructor(x, y2) {
    super();
    this.x = x || 0;
    this.y = y2 || 0;
  }
  equals(other) {
    return other && other.x === this.x && other.y === this.y;
  }
  clone() {
    return new _Point(this.x, this.y);
  }
  rotate(angle, origin) {
    const originPoint = _Point.create(origin) || _Point.ZERO;
    return this.transform(matrix_default.rotate(angle, originPoint.x, originPoint.y));
  }
  translate(x, y2) {
    this.x += x;
    this.y += y2;
    this.geometryChange();
    return this;
  }
  translateWith(point2) {
    return this.translate(point2.x, point2.y);
  }
  move(x, y2) {
    this.x = this.y = 0;
    return this.translate(x, y2);
  }
  scale(scaleX, scaleY = scaleX) {
    this.x *= scaleX;
    this.y *= scaleY;
    this.geometryChange();
    return this;
  }
  scaleCopy(scaleX, scaleY) {
    return this.clone().scale(scaleX, scaleY);
  }
  transform(transformation) {
    const matrix = toMatrix(transformation);
    const { x, y: y2 } = this;
    this.x = matrix.a * x + matrix.c * y2 + matrix.e;
    this.y = matrix.b * x + matrix.d * y2 + matrix.f;
    this.geometryChange();
    return this;
  }
  transformCopy(transformation) {
    const point2 = this.clone();
    if (transformation) {
      point2.transform(transformation);
    }
    return point2;
  }
  distanceTo(point2) {
    const dx = this.x - point2.x;
    const dy = this.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  round(digits) {
    this.x = round(this.x, digits);
    this.y = round(this.y, digits);
    this.geometryChange();
    return this;
  }
  toArray(digits) {
    const doRound = digits !== void 0;
    const x = doRound ? round(this.x, digits) : this.x;
    const y2 = doRound ? round(this.y, digits) : this.y;
    return [x, y2];
  }
  toString(digits, separator = " ") {
    let { x, y: y2 } = this;
    if (digits !== void 0) {
      x = round(x, digits);
      y2 = round(y2, digits);
    }
    return x + separator + y2;
  }
  static create(arg0, arg1) {
    if (arg0 !== void 0) {
      if (arg0 instanceof _Point) {
        return arg0;
      } else if (arguments.length === 1 && arg0.length === 2) {
        return new _Point(arg0[0], arg0[1]);
      }
      return new _Point(arg0, arg1);
    }
  }
  static min() {
    let minX = MAX_NUM;
    let minY = MAX_NUM;
    for (let i2 = 0; i2 < arguments.length; i2++) {
      let point2 = arguments[i2];
      minX = Math.min(point2.x, minX);
      minY = Math.min(point2.y, minY);
    }
    return new _Point(minX, minY);
  }
  static max() {
    let maxX = MIN_NUM;
    let maxY = MIN_NUM;
    for (let i2 = 0; i2 < arguments.length; i2++) {
      const point2 = arguments[i2];
      maxX = Math.max(point2.x, maxX);
      maxY = Math.max(point2.y, maxY);
    }
    return new _Point(maxX, maxY);
  }
  static minPoint() {
    return new _Point(MIN_NUM, MIN_NUM);
  }
  static maxPoint() {
    return new _Point(MAX_NUM, MAX_NUM);
  }
  static get ZERO() {
    return new _Point(0, 0);
  }
};
var point_default = Point;

// node_modules/@progress/kendo-drawing/dist/es/geometry/size.js
var Size = class _Size extends with_accessors_default(has_observers_default, ["width", "height"]) {
  constructor(width, height) {
    super();
    this.width = width || 0;
    this.height = height || 0;
  }
  equals(other) {
    return other && other.width === this.width && other.height === this.height;
  }
  clone() {
    return new _Size(this.width, this.height);
  }
  toArray(digits) {
    const doRound = digits !== void 0;
    const width = doRound ? round(this.width, digits) : this.width;
    const height = doRound ? round(this.height, digits) : this.height;
    return [width, height];
  }
  static create(arg0, arg1) {
    if (arg0 !== void 0) {
      if (arg0 instanceof _Size) {
        return arg0;
      } else if (arguments.length === 1 && arg0.length === 2) {
        return new _Size(arg0[0], arg0[1]);
      }
      return new _Size(arg0, arg1);
    }
  }
  static get ZERO() {
    return new _Size(0, 0);
  }
};
var size_default = Size;

// node_modules/@progress/kendo-drawing/dist/es/geometry/rect.js
var Rect = class _Rect extends has_observers_default {
  constructor(origin = new point_default(), size = new size_default(), cornerRadius = 0) {
    super();
    this.setOrigin(origin);
    this.setSize(size);
    this.setCornerRadius(cornerRadius);
  }
  clone() {
    return new _Rect(
      this.origin.clone(),
      this.size.clone()
    );
  }
  equals(other) {
    return other && other.origin.equals(this.origin) && other.size.equals(this.size);
  }
  setOrigin(value) {
    this._observerField("origin", point_default.create(value));
    this.geometryChange();
    return this;
  }
  getOrigin() {
    return this.origin;
  }
  setCornerRadius(radius) {
    this.cornerRadius = Array.isArray(radius) ? radius : [radius, radius];
    this.geometryChange();
    return this;
  }
  getCornerRadius() {
    return this.cornerRadius;
  }
  setSize(value) {
    this._observerField("size", size_default.create(value));
    this.geometryChange();
    return this;
  }
  getSize() {
    return this.size;
  }
  width() {
    return this.size.width;
  }
  height() {
    return this.size.height;
  }
  topLeft() {
    return this.origin.clone();
  }
  bottomRight() {
    return this.origin.clone().translate(this.width(), this.height());
  }
  topRight() {
    return this.origin.clone().translate(this.width(), 0);
  }
  bottomLeft() {
    return this.origin.clone().translate(0, this.height());
  }
  center() {
    return this.origin.clone().translate(this.width() / 2, this.height() / 2);
  }
  bbox(matrix) {
    const tl = this.topLeft().transformCopy(matrix);
    const tr = this.topRight().transformCopy(matrix);
    const br = this.bottomRight().transformCopy(matrix);
    const bl = this.bottomLeft().transformCopy(matrix);
    return _Rect.fromPoints(tl, tr, br, bl);
  }
  transformCopy(m2) {
    return _Rect.fromPoints(
      this.topLeft().transform(m2),
      this.bottomRight().transform(m2)
    );
  }
  expand(x, y2 = x) {
    this.size.width += 2 * x;
    this.size.height += 2 * y2;
    this.origin.translate(-x, -y2);
    return this;
  }
  expandCopy(x, y2) {
    return this.clone().expand(x, y2);
  }
  containsPoint(point2) {
    const origin = this.origin;
    const bottomRight = this.bottomRight();
    return !(point2.x < origin.x || point2.y < origin.y || bottomRight.x < point2.x || bottomRight.y < point2.y);
  }
  _isOnPath(point2, width) {
    const rectOuter = this.expandCopy(width, width);
    const rectInner = this.expandCopy(-width, -width);
    return rectOuter.containsPoint(point2) && !rectInner.containsPoint(point2);
  }
  static fromPoints() {
    const topLeft = point_default.min.apply(null, arguments);
    const bottomRight = point_default.max.apply(null, arguments);
    const size = new size_default(
      bottomRight.x - topLeft.x,
      bottomRight.y - topLeft.y
    );
    return new _Rect(topLeft, size);
  }
  static union(a2, b) {
    return _Rect.fromPoints(
      point_default.min(a2.topLeft(), b.topLeft()),
      point_default.max(a2.bottomRight(), b.bottomRight())
    );
  }
  static intersect(a2, b) {
    const rect1 = {
      left: a2.topLeft().x,
      top: a2.topLeft().y,
      right: a2.bottomRight().x,
      bottom: a2.bottomRight().y
    };
    const rect2 = {
      left: b.topLeft().x,
      top: b.topLeft().y,
      right: b.bottomRight().x,
      bottom: b.bottomRight().y
    };
    if (rect1.left <= rect2.right && rect2.left <= rect1.right && rect1.top <= rect2.bottom && rect2.top <= rect1.bottom) {
      return _Rect.fromPoints(
        new point_default(Math.max(rect1.left, rect2.left), Math.max(rect1.top, rect2.top)),
        new point_default(Math.min(rect1.right, rect2.right), Math.min(rect1.bottom, rect2.bottom))
      );
    }
  }
};
var rect_default = Rect;

// node_modules/@progress/kendo-drawing/dist/es/geometry/transformation.js
var Transformation = class _Transformation extends has_observers_default {
  constructor(matrix = matrix_default.unit()) {
    super();
    this._matrix = matrix;
  }
  clone() {
    return new _Transformation(
      this._matrix.clone()
    );
  }
  equals(other) {
    return other && other._matrix.equals(this._matrix);
  }
  translate(x, y2) {
    this._matrix = this._matrix.multiplyCopy(matrix_default.translate(x, y2));
    this._optionsChange();
    return this;
  }
  scale(scaleX, scaleY = scaleX, origin = null) {
    let originPoint = origin;
    if (originPoint) {
      originPoint = point_default.create(originPoint);
      this._matrix = this._matrix.multiplyCopy(matrix_default.translate(originPoint.x, originPoint.y));
    }
    this._matrix = this._matrix.multiplyCopy(matrix_default.scale(scaleX, scaleY));
    if (originPoint) {
      this._matrix = this._matrix.multiplyCopy(matrix_default.translate(-originPoint.x, -originPoint.y));
    }
    this._optionsChange();
    return this;
  }
  rotate(angle, origin) {
    const originPoint = point_default.create(origin) || point_default.ZERO;
    this._matrix = this._matrix.multiplyCopy(matrix_default.rotate(angle, originPoint.x, originPoint.y));
    this._optionsChange();
    return this;
  }
  multiply(transformation) {
    const matrix = toMatrix(transformation);
    this._matrix = this._matrix.multiplyCopy(matrix);
    this._optionsChange();
    return this;
  }
  matrix(value) {
    if (value) {
      this._matrix = value;
      this._optionsChange();
      return this;
    }
    return this._matrix;
  }
  _optionsChange() {
    this.optionsChange({
      field: "transform",
      value: this
    });
  }
};
var transformation_default = Transformation;

// node_modules/@progress/kendo-drawing/dist/es/geometry/transform.js
function transform(matrix) {
  if (matrix === null) {
    return null;
  }
  if (matrix instanceof transformation_default) {
    return matrix;
  }
  return new transformation_default(matrix);
}

// node_modules/@progress/kendo-drawing/dist/es/core/constants.js
var DASH_ARRAYS = {
  dot: [1.5, 3.5],
  dash: [4, 3.5],
  longdash: [8, 3.5],
  dashdot: [3.5, 3.5, 1.5, 3.5],
  longdashdot: [8, 3.5, 1.5, 3.5],
  longdashdotdot: [8, 3.5, 1.5, 3.5, 1.5, 3.5]
};
var SOLID = "solid";
var BUTT = "butt";
var PATTERN = "Pattern";

// node_modules/@progress/kendo-drawing/dist/es/shapes/element.js
var Element2 = class extends has_observers_default {
  get nodeType() {
    return "Rect";
  }
  constructor(options2) {
    super();
    this._initOptions(options2);
  }
  _initOptions(options2 = {}) {
    const { clip, transform: transform2 } = options2;
    if (transform2) {
      options2.transform = transform(transform2);
    }
    if (clip && !clip.id) {
      clip.id = definitionId();
    }
    this.options = new options_store_default(options2);
    this.options.addObserver(this);
  }
  transform(value) {
    if (value !== void 0) {
      this.options.set("transform", transform(value));
    } else {
      return this.options.get("transform");
    }
  }
  parentTransform() {
    let element = this;
    let parentMatrix;
    while (element.parent) {
      element = element.parent;
      let transformation = element.transform();
      if (transformation) {
        parentMatrix = transformation.matrix().multiplyCopy(parentMatrix || matrix_default.unit());
      }
    }
    if (parentMatrix) {
      return transform(parentMatrix);
    }
  }
  currentTransform(parentTransform = this.parentTransform()) {
    const elementTransform = this.transform();
    const elementMatrix = toMatrix(elementTransform);
    let parentMatrix = toMatrix(parentTransform);
    let combinedMatrix;
    if (elementMatrix && parentMatrix) {
      combinedMatrix = parentMatrix.multiplyCopy(elementMatrix);
    } else {
      combinedMatrix = elementMatrix || parentMatrix;
    }
    if (combinedMatrix) {
      return transform(combinedMatrix);
    }
  }
  visible(value) {
    if (value !== void 0) {
      this.options.set("visible", value);
      return this;
    }
    return this.options.get("visible") !== false;
  }
  clip(value) {
    const options2 = this.options;
    if (value !== void 0) {
      if (value && !value.id) {
        value.id = definitionId();
      }
      options2.set("clip", value);
      return this;
    }
    return options2.get("clip");
  }
  opacity(value) {
    if (value !== void 0) {
      this.options.set("opacity", value);
      return this;
    }
    return valueOrDefault(this.options.get("opacity"), 1);
  }
  className(value) {
    if (value !== void 0) {
      this.options.set("className", value);
      return this;
    }
    return this.options.get("className");
  }
  clippedBBox(transformation) {
    const bbox = this._clippedBBox(transformation);
    if (bbox) {
      const clip = this.clip();
      return clip ? rect_default.intersect(bbox, clip.bbox(transformation)) : bbox;
    }
  }
  containsPoint(point2, parentTransform) {
    if (this.visible()) {
      const transform2 = this.currentTransform(parentTransform);
      let transformedPoint = point2;
      if (transform2) {
        transformedPoint = point2.transformCopy(transform2.matrix().invert());
      }
      return this._hasFill() && this._containsPoint(transformedPoint) || this._isOnPath && this._hasStroke() && this._isOnPath(transformedPoint);
    }
    return false;
  }
  _hasFill() {
    const fill = this.options.fill;
    return fill && (fill.nodeType === PATTERN || !isTransparent(fill.color));
  }
  _hasStroke() {
    const stroke = this.options.stroke;
    return stroke && stroke.width > 0 && !isTransparent(stroke.color);
  }
  _clippedBBox(transformation) {
    return this.bbox(transformation);
  }
};
var element_default = Element2;

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/ellipse-extreme-angles.js
function ellipseExtremeAngles(center, rx, ry, matrix) {
  let extremeX = 0;
  let extremeY = 0;
  if (matrix) {
    extremeX = Math.atan2(matrix.c * ry, matrix.a * rx);
    if (matrix.b !== 0) {
      extremeY = Math.atan2(matrix.d * ry, matrix.b * rx);
    }
  }
  return {
    x: extremeX,
    y: extremeY
  };
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/circle.js
var PI_DIV_2 = Math.PI / 2;
var Circle = class _Circle extends with_accessors_default(has_observers_default, ["radius"]) {
  constructor(center = new point_default(), radius = 0) {
    super();
    this.setCenter(center);
    this.setRadius(radius);
  }
  setCenter(value) {
    this._observerField("center", point_default.create(value));
    this.geometryChange();
    return this;
  }
  getCenter() {
    return this.center;
  }
  equals(other) {
    return other && other.center.equals(this.center) && other.radius === this.radius;
  }
  clone() {
    return new _Circle(this.center.clone(), this.radius);
  }
  pointAt(angle) {
    return this._pointAt(rad(angle));
  }
  bbox(matrix) {
    const extremeAngles = ellipseExtremeAngles(this.center, this.radius, this.radius, matrix);
    let minPoint = point_default.maxPoint();
    let maxPoint = point_default.minPoint();
    for (let i2 = 0; i2 < 4; i2++) {
      let currentPointX = this._pointAt(extremeAngles.x + i2 * PI_DIV_2).transformCopy(matrix);
      let currentPointY = this._pointAt(extremeAngles.y + i2 * PI_DIV_2).transformCopy(matrix);
      let currentPoint = new point_default(currentPointX.x, currentPointY.y);
      minPoint = point_default.min(minPoint, currentPoint);
      maxPoint = point_default.max(maxPoint, currentPoint);
    }
    return rect_default.fromPoints(minPoint, maxPoint);
  }
  _pointAt(angle) {
    const { center, radius } = this;
    return new point_default(
      center.x + radius * Math.cos(angle),
      center.y + radius * Math.sin(angle)
    );
  }
  containsPoint(point2) {
    const { center, radius } = this;
    const inCircle = Math.pow(point2.x - center.x, 2) + Math.pow(point2.y - center.y, 2) <= Math.pow(radius, 2);
    return inCircle;
  }
  _isOnPath(point2, width) {
    const { center, radius } = this;
    const pointDistance = center.distanceTo(point2);
    return radius - width <= pointDistance && pointDistance <= radius + width;
  }
};
var circle_default = Circle;

// node_modules/@progress/kendo-drawing/dist/es/mixins/paintable.js
var GRADIENT = "Gradient";
var paintable = (TBase) => class extends TBase {
  fill(color, opacity) {
    const options2 = this.options;
    if (color !== void 0) {
      if (color && color.nodeType !== GRADIENT) {
        const newFill = {
          color
        };
        if (opacity !== void 0) {
          newFill.opacity = opacity;
        }
        options2.set("fill", newFill);
      } else {
        options2.set("fill", color);
      }
      return this;
    }
    return options2.get("fill");
  }
  stroke(color, width, opacity) {
    if (color !== void 0) {
      this.options.set("stroke.color", color);
      if (width !== void 0) {
        this.options.set("stroke.width", width);
      }
      if (opacity !== void 0) {
        this.options.set("stroke.opacity", opacity);
      }
      return this;
    }
    return this.options.get("stroke");
  }
};
var paintable_default = paintable;

// node_modules/@progress/kendo-drawing/dist/es/mixins/measurable.js
var IDENTITY_MATRIX_HASH = matrix_default.IDENTITY.toString();
var measurable = (TBase) => class extends TBase {
  bbox(transformation) {
    const combinedMatrix = toMatrix(this.currentTransform(transformation));
    const matrixHash = combinedMatrix ? combinedMatrix.toString() : IDENTITY_MATRIX_HASH;
    let bbox;
    if (this._bboxCache && this._matrixHash === matrixHash) {
      bbox = this._bboxCache.clone();
    } else {
      bbox = this._bbox(combinedMatrix);
      this._bboxCache = bbox ? bbox.clone() : null;
      this._matrixHash = matrixHash;
    }
    const strokeWidth = this.options.get("stroke.width");
    if (strokeWidth && bbox) {
      bbox.expand(strokeWidth / 2);
    }
    return bbox;
  }
  geometryChange() {
    delete this._bboxCache;
    this.trigger("geometryChange", {
      element: this
    });
  }
};
var measurable_default = measurable;

// node_modules/@progress/kendo-drawing/dist/es/mixins/with-geometry.js
function geometryAccessor(name) {
  const fieldName = "_" + name;
  return function(value) {
    if (value !== void 0) {
      this._observerField(fieldName, value);
      this.geometryChange();
      return this;
    }
    return this[fieldName];
  };
}
function defineGeometryAccessors(fn, names) {
  for (let i2 = 0; i2 < names.length; i2++) {
    fn[names[i2]] = geometryAccessor(names[i2]);
  }
}
var withGeometry = (TBase, names = ["geometry"]) => {
  const result = class extends TBase {
  };
  defineGeometryAccessors(result.prototype, names);
  return result;
};
var with_geometry_default = withGeometry;

// node_modules/@progress/kendo-drawing/dist/es/shapes/circle.js
var DEFAULT_STROKE = "#000";
var Circle2 = class extends paintable_default(measurable_default(with_geometry_default(element_default))) {
  get nodeType() {
    return "Circle";
  }
  constructor(geometry = new circle_default(), options2 = {}) {
    super(options2);
    this.geometry(geometry);
    if (this.options.stroke === void 0) {
      this.stroke(DEFAULT_STROKE);
    }
  }
  rawBBox() {
    return this._geometry.bbox();
  }
  _bbox(matrix) {
    return this._geometry.bbox(matrix);
  }
  _containsPoint(point2) {
    return this.geometry().containsPoint(point2);
  }
  _isOnPath(point2) {
    return this.geometry()._isOnPath(point2, this.options.stroke.width / 2);
  }
};
var circle_default2 = Circle2;

// node_modules/@progress/kendo-drawing/dist/es/geometry/constants.js
var PRECISION = 10;

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/close.js
function close(a2, b, tolerance = PRECISION) {
  return round(Math.abs(a2 - b), tolerance) === 0;
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/close-or-less.js
function closeOrLess(a2, b, tolerance) {
  return a2 < b || close(a2, b, tolerance);
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/line-intersection.js
function lineIntersection(p0, p1, p2, p3) {
  const s1x = p1.x - p0.x;
  const s2x = p3.x - p2.x;
  const s1y = p1.y - p0.y;
  const s2y = p3.y - p2.y;
  const nx = p0.x - p2.x;
  const ny = p0.y - p2.y;
  const d2 = s1x * s2y - s2x * s1y;
  const s2 = (s1x * ny - s1y * nx) / d2;
  const t2 = (s2x * ny - s2y * nx) / d2;
  if (s2 >= 0 && s2 <= 1 && t2 >= 0 && t2 <= 1) {
    return new point_default(p0.x + t2 * s1x, p0.y + t2 * s1y);
  }
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/arc.js
var MAX_INTERVAL = 45;
var pow2 = Math.pow;
var accessors = ["radiusX", "radiusY", "startAngle", "endAngle", "anticlockwise"];
var Arc = class _Arc extends with_accessors_default(has_observers_default, accessors) {
  constructor(center = new point_default(), options2 = {}) {
    super();
    this.setCenter(center);
    this.radiusX = options2.radiusX;
    this.radiusY = options2.radiusY || options2.radiusX;
    this.startAngle = options2.startAngle;
    this.endAngle = options2.endAngle;
    this.anticlockwise = options2.anticlockwise || false;
    this.xRotation = options2.xRotation;
  }
  clone() {
    return new _Arc(this.center, {
      radiusX: this.radiusX,
      radiusY: this.radiusY,
      startAngle: this.startAngle,
      endAngle: this.endAngle,
      anticlockwise: this.anticlockwise
    });
  }
  setCenter(value) {
    this._observerField("center", point_default.create(value));
    this.geometryChange();
    return this;
  }
  getCenter() {
    return this.center;
  }
  pointAt(angle) {
    const center = this.center;
    const radian = rad(angle);
    return new point_default(
      center.x + this.radiusX * Math.cos(radian),
      center.y + this.radiusY * Math.sin(radian)
    );
  }
  curvePoints() {
    const startAngle = this.startAngle;
    const dir = this.anticlockwise ? -1 : 1;
    const curvePoints = [this.pointAt(startAngle)];
    const interval = this._arcInterval();
    const intervalAngle = interval.endAngle - interval.startAngle;
    const subIntervalsCount = Math.ceil(intervalAngle / MAX_INTERVAL);
    const subIntervalAngle = intervalAngle / subIntervalsCount;
    let currentAngle = startAngle;
    let transformation;
    if (this.xRotation) {
      transformation = transform().rotate(this.xRotation, this.center);
    }
    for (let i2 = 1; i2 <= subIntervalsCount; i2++) {
      const nextAngle = currentAngle + dir * subIntervalAngle;
      const points3 = this._intervalCurvePoints(currentAngle, nextAngle, transformation);
      curvePoints.push(points3.cp1, points3.cp2, points3.p2);
      currentAngle = nextAngle;
    }
    return curvePoints;
  }
  bbox(matrix) {
    const interval = this._arcInterval();
    const startAngle = interval.startAngle;
    const endAngle = interval.endAngle;
    const extremeAngles = ellipseExtremeAngles(this.center, this.radiusX, this.radiusY, matrix);
    const extremeX = deg(extremeAngles.x);
    const extremeY = deg(extremeAngles.y);
    const endPoint = this.pointAt(endAngle).transformCopy(matrix);
    let currentAngleX = bboxStartAngle(extremeX, startAngle);
    let currentAngleY = bboxStartAngle(extremeY, startAngle);
    let currentPoint = this.pointAt(startAngle).transformCopy(matrix);
    let minPoint = point_default.min(currentPoint, endPoint);
    let maxPoint = point_default.max(currentPoint, endPoint);
    while (currentAngleX < endAngle || currentAngleY < endAngle) {
      let currentPointX;
      if (currentAngleX < endAngle) {
        currentPointX = this.pointAt(currentAngleX).transformCopy(matrix);
        currentAngleX += 90;
      }
      let currentPointY;
      if (currentAngleY < endAngle) {
        currentPointY = this.pointAt(currentAngleY).transformCopy(matrix);
        currentAngleY += 90;
      }
      currentPoint = new point_default(currentPointX.x, currentPointY.y);
      minPoint = point_default.min(minPoint, currentPoint);
      maxPoint = point_default.max(maxPoint, currentPoint);
    }
    return rect_default.fromPoints(minPoint, maxPoint);
  }
  _arcInterval() {
    let { startAngle, endAngle, anticlockwise } = this;
    if (anticlockwise) {
      let oldStart = startAngle;
      startAngle = endAngle;
      endAngle = oldStart;
    }
    if (startAngle > endAngle || anticlockwise && startAngle === endAngle) {
      endAngle += 360;
    }
    return {
      startAngle,
      endAngle
    };
  }
  _intervalCurvePoints(startAngle, endAngle, transformation) {
    const p1 = this.pointAt(startAngle);
    const p2 = this.pointAt(endAngle);
    const p1Derivative = this._derivativeAt(startAngle);
    const p2Derivative = this._derivativeAt(endAngle);
    const t2 = (rad(endAngle) - rad(startAngle)) / 3;
    const cp1 = new point_default(p1.x + t2 * p1Derivative.x, p1.y + t2 * p1Derivative.y);
    const cp2 = new point_default(p2.x - t2 * p2Derivative.x, p2.y - t2 * p2Derivative.y);
    if (transformation) {
      p1.transform(transformation);
      p2.transform(transformation);
      cp1.transform(transformation);
      cp2.transform(transformation);
    }
    return {
      p1,
      cp1,
      cp2,
      p2
    };
  }
  _derivativeAt(angle) {
    const radian = rad(angle);
    return new point_default(-this.radiusX * Math.sin(radian), this.radiusY * Math.cos(radian));
  }
  containsPoint(point2) {
    const interval = this._arcInterval();
    const intervalAngle = interval.endAngle - interval.startAngle;
    const { center, radiusX, radiusY } = this;
    const distance = center.distanceTo(point2);
    const angleRad = Math.atan2(point2.y - center.y, point2.x - center.x);
    const pointRadius = radiusX * radiusY / Math.sqrt(pow2(radiusX, 2) * pow2(Math.sin(angleRad), 2) + pow2(radiusY, 2) * pow2(Math.cos(angleRad), 2));
    const startPoint = this.pointAt(this.startAngle).round(PRECISION);
    const endPoint = this.pointAt(this.endAngle).round(PRECISION);
    const intersection = lineIntersection(center, point2.round(PRECISION), startPoint, endPoint);
    let containsPoint;
    if (intervalAngle < 180) {
      containsPoint = intersection && closeOrLess(center.distanceTo(intersection), distance) && closeOrLess(distance, pointRadius);
    } else {
      let angle = calculateAngle(center.x, center.y, radiusX, radiusY, point2.x, point2.y);
      if (angle !== 360) {
        angle = (360 + angle) % 360;
      }
      let inAngleRange = interval.startAngle <= angle && angle <= interval.endAngle;
      containsPoint = inAngleRange && closeOrLess(distance, pointRadius) || !inAngleRange && (!intersection || intersection.equals(point2));
    }
    return containsPoint;
  }
  _isOnPath(point2, width) {
    const interval = this._arcInterval();
    const center = this.center;
    let angle = calculateAngle(center.x, center.y, this.radiusX, this.radiusY, point2.x, point2.y);
    if (angle !== 360) {
      angle = (360 + angle) % 360;
    }
    const inAngleRange = interval.startAngle <= angle && angle <= interval.endAngle;
    return inAngleRange && this.pointAt(angle).distanceTo(point2) <= width;
  }
  static fromPoints(start, end, rx, ry, largeArc, swipe, rotation) {
    const arcParameters = normalizeArcParameters({
      x1: start.x,
      y1: start.y,
      x2: end.x,
      y2: end.y,
      rx,
      ry,
      largeArc,
      swipe,
      rotation
    });
    return new _Arc(arcParameters.center, {
      startAngle: arcParameters.startAngle,
      endAngle: arcParameters.endAngle,
      radiusX: arcParameters.radiusX,
      radiusY: arcParameters.radiusY,
      xRotation: arcParameters.xRotation,
      anticlockwise: swipe === 0
    });
  }
};
function calculateAngle(cx, cy, rx, ry, x, y2) {
  const cos = round((x - cx) / rx, 3);
  const sin = round((y2 - cy) / ry, 3);
  return round(deg(Math.atan2(sin, cos)));
}
function normalizeArcParameters(parameters) {
  let { x1, y1, x2, y2, rx, ry, largeArc, swipe, rotation = 0 } = parameters;
  const radians = rad(rotation);
  const cosine = Math.cos(radians);
  const sine = Math.sin(radians);
  const xT = cosine * (x1 - x2) / 2 + sine * (y1 - y2) / 2;
  const yT = -sine * (x1 - x2) / 2 + cosine * (y1 - y2) / 2;
  const sign = largeArc !== swipe ? 1 : -1;
  const xt2 = Math.pow(xT, 2);
  const yt2 = Math.pow(yT, 2);
  let rx2 = Math.pow(rx, 2);
  let ry2 = Math.pow(ry, 2);
  let delta = xt2 / rx2 + yt2 / ry2;
  if (delta > 1) {
    delta = Math.sqrt(xt2 / rx2 + yt2 / ry2);
    rx = delta * rx;
    rx2 = Math.pow(rx, 2);
    ry = delta * ry;
    ry2 = Math.pow(ry, 2);
  }
  let constT = sign * Math.sqrt((rx2 * ry2 - rx2 * yt2 - ry2 * xt2) / (rx2 * yt2 + ry2 * xt2));
  if (isNaN(constT)) {
    constT = 0;
  }
  const cxT = constT * (rx * yT) / ry;
  const cyT = -constT * (ry * xT) / rx;
  const cx = cosine * cxT - sine * cyT + (x1 + x2) / 2;
  const cy = sine * cxT + cosine * cyT + (y1 + y2) / 2;
  const uX = (xT - cxT) / rx;
  const uY = (yT - cyT) / ry;
  const vX = -(xT + cxT) / rx;
  const vY = -(yT + cyT) / ry;
  const startAngle = (uY >= 0 ? 1 : -1) * deg(Math.acos(uX / Math.sqrt(uX * uX + uY * uY)));
  const angleCosine = round((uX * vX + uY * vY) / (Math.sqrt(uX * uX + uY * uY) * Math.sqrt(vX * vX + vY * vY)), 10);
  let angle = (uX * vY - uY * vX >= 0 ? 1 : -1) * deg(Math.acos(angleCosine));
  if (!swipe && angle > 0) {
    angle -= 360;
  }
  if (swipe && angle < 0) {
    angle += 360;
  }
  let endAngle = startAngle + angle;
  const signEndAngle = endAngle >= 0 ? 1 : -1;
  endAngle = Math.abs(endAngle) % 360 * signEndAngle;
  return {
    center: new point_default(cx, cy),
    startAngle,
    endAngle,
    radiusX: rx,
    radiusY: ry,
    xRotation: rotation
  };
}
function bboxStartAngle(angle, start) {
  let startAngle = angle;
  while (startAngle < start) {
    startAngle += 90;
  }
  return startAngle;
}
var arc_default = Arc;

// node_modules/@progress/kendo-drawing/dist/es/shapes/elements-array.js
var splice = [].splice;
var slice = [].slice;
var ElementsArray = class extends has_observers_default {
  constructor(array = []) {
    super();
    this.length = 0;
    this._splice(0, array.length, array);
  }
  elements(value) {
    if (value) {
      this._splice(0, this.length, value);
      this._change();
      return this;
    }
    return this.slice(0);
  }
  push(...elements) {
    let len = this.length;
    const count = elements.length;
    for (let i2 = 0; i2 < count; i2++) {
      this[len + i2] = elements[i2];
      elements[i2].addObserver(this);
    }
    this.length = len + count;
    this._change();
    return this.length;
  }
  slice() {
    return slice.call(this);
  }
  pop() {
    if (this.length > 0) {
      const result = this[this.length - 1];
      this.length--;
      result.removeObserver(this);
      this._change();
      return result;
    }
  }
  splice(index, howMany, ...elements) {
    const result = this._splice(index, howMany, elements);
    this._change();
    return result;
  }
  shift() {
    if (this.length > 0) {
      const result = this[0];
      for (let i2 = 1; i2 < this.length; i2++) {
        this[i2 - 1] = this[i2];
      }
      this.length--;
      result.removeObserver(this);
      this._change();
      return result;
    }
  }
  unshift(...elements) {
    const count = elements.length;
    for (let i2 = this.length - 1; i2 >= 0; i2--) {
      this[i2 + count] = this[i2];
    }
    for (let i2 = 0; i2 < count; i2++) {
      this[i2] = elements[i2];
      elements[i2].addObserver(this);
    }
    this.length += count;
    this._change();
    return this.length;
  }
  indexOf(element) {
    const length = this.length;
    for (let idx = 0; idx < length; idx++) {
      if (this[idx] === element) {
        return idx;
      }
    }
    return -1;
  }
  _splice(index, howMany, elements) {
    const result = splice.apply(this, [index, howMany].concat(elements));
    this._clearObserver(result);
    this._setObserver(elements);
    return result;
  }
  _add(elements) {
    this._setObserver(elements);
    this._change();
  }
  _remove(elements) {
    this._clearObserver(elements);
    this._change();
  }
  _setObserver(elements) {
    for (let idx = 0; idx < elements.length; idx++) {
      elements[idx].addObserver(this);
    }
  }
  _clearObserver(elements) {
    for (let idx = 0; idx < elements.length; idx++) {
      elements[idx].removeObserver(this);
    }
  }
  _change() {
  }
};
var elements_array_default = ElementsArray;

// node_modules/@progress/kendo-drawing/dist/es/shapes/geometry-elements-array.js
var GeometryElementsArray = class extends elements_array_default {
  _change() {
    this.geometryChange();
  }
};
var geometry_elements_array_default = GeometryElementsArray;

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/is-out-of-end-point.js
function isOutOfEndPoint(endPoint, controlPoint, point2) {
  const angle = deg(Math.atan2(controlPoint.y - endPoint.y, controlPoint.x - endPoint.x));
  const rotatedPoint = point2.transformCopy(transform().rotate(-angle, endPoint));
  return rotatedPoint.x < endPoint.x;
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/calculate-curve-at.js
function calculateCurveAt(t2, field, points3) {
  const t1 = 1 - t2;
  return Math.pow(t1, 3) * points3[0][field] + 3 * Math.pow(t1, 2) * t2 * points3[1][field] + 3 * Math.pow(t2, 2) * t1 * points3[2][field] + Math.pow(t2, 3) * points3[3][field];
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/to-cubic-polynomial.js
function toCubicPolynomial(points3, field) {
  return [
    -points3[0][field] + 3 * points3[1][field] - 3 * points3[2][field] + points3[3][field],
    3 * (points3[0][field] - 2 * points3[1][field] + points3[2][field]),
    3 * (-points3[0][field] + points3[1][field]),
    points3[0][field]
  ];
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/complex-number.js
var ComplexNumber = class _ComplexNumber extends Class {
  constructor(real = 0, img = 0) {
    super();
    this.real = real;
    this.img = img;
  }
  add(cNumber) {
    return new _ComplexNumber(round(this.real + cNumber.real, PRECISION), round(this.img + cNumber.img, PRECISION));
  }
  addConstant(value) {
    return new _ComplexNumber(this.real + value, this.img);
  }
  negate() {
    return new _ComplexNumber(-this.real, -this.img);
  }
  multiply(cNumber) {
    return new _ComplexNumber(
      this.real * cNumber.real - this.img * cNumber.img,
      this.real * cNumber.img + this.img * cNumber.real
    );
  }
  multiplyConstant(value) {
    return new _ComplexNumber(this.real * value, this.img * value);
  }
  nthRoot(n2) {
    const rad2 = Math.atan2(this.img, this.real);
    const r2 = Math.sqrt(Math.pow(this.img, 2) + Math.pow(this.real, 2));
    const nthR = Math.pow(r2, 1 / n2);
    return new _ComplexNumber(nthR * Math.cos(rad2 / n2), nthR * Math.sin(rad2 / n2));
  }
  equals(cNumber) {
    return this.real === cNumber.real && this.img === cNumber.img;
  }
  isReal() {
    return this.img === 0;
  }
};
var complex_number_default = ComplexNumber;

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/solve-cubic-equation.js
function numberSign(x) {
  return x < 0 ? -1 : 1;
}
function solveQuadraticEquation(a2, b, c2) {
  const squareRoot = Math.sqrt(Math.pow(b, 2) - 4 * a2 * c2);
  return [
    (-b + squareRoot) / (2 * a2),
    (-b - squareRoot) / (2 * a2)
  ];
}
function solveCubicEquation(a2, b, c2, d2) {
  if (a2 === 0) {
    return solveQuadraticEquation(b, c2, d2);
  }
  const p2 = (3 * a2 * c2 - Math.pow(b, 2)) / (3 * Math.pow(a2, 2));
  const q = (2 * Math.pow(b, 3) - 9 * a2 * b * c2 + 27 * Math.pow(a2, 2) * d2) / (27 * Math.pow(a2, 3));
  const Q = Math.pow(p2 / 3, 3) + Math.pow(q / 2, 2);
  const i2 = new complex_number_default(0, 1);
  const b3a = -b / (3 * a2);
  let x1, x2, y1, y2, y3, z1, z2;
  if (Q < 0) {
    x1 = new complex_number_default(-q / 2, Math.sqrt(-Q)).nthRoot(3);
    x2 = new complex_number_default(-q / 2, -Math.sqrt(-Q)).nthRoot(3);
  } else {
    x1 = -q / 2 + Math.sqrt(Q);
    x1 = new complex_number_default(numberSign(x1) * Math.pow(Math.abs(x1), 1 / 3));
    x2 = -q / 2 - Math.sqrt(Q);
    x2 = new complex_number_default(numberSign(x2) * Math.pow(Math.abs(x2), 1 / 3));
  }
  y1 = x1.add(x2);
  z1 = x1.add(x2).multiplyConstant(-1 / 2);
  z2 = x1.add(x2.negate()).multiplyConstant(Math.sqrt(3) / 2);
  y2 = z1.add(i2.multiply(z2));
  y3 = z1.add(i2.negate().multiply(z2));
  const result = [];
  if (y1.isReal()) {
    result.push(round(y1.real + b3a, PRECISION));
  }
  if (y2.isReal()) {
    result.push(round(y2.real + b3a, PRECISION));
  }
  if (y3.isReal()) {
    result.push(round(y3.real + b3a, PRECISION));
  }
  return result;
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/has-roots-in-range.js
function hasRootsInRange(points3, point2, field, rootField, range) {
  const polynomial = toCubicPolynomial(points3, rootField);
  const roots = solveCubicEquation(polynomial[0], polynomial[1], polynomial[2], polynomial[3] - point2[rootField]);
  let intersection;
  for (let idx = 0; idx < roots.length; idx++) {
    if (0 <= roots[idx] && roots[idx] <= 1) {
      intersection = calculateCurveAt(roots[idx], field, points3);
      if (Math.abs(intersection - point2[field]) <= range) {
        return true;
      }
    }
  }
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/curve-intersections-count.js
function curveIntersectionsCount(points3, point2, bbox) {
  const polynomial = toCubicPolynomial(points3, "x");
  const roots = solveCubicEquation(polynomial[0], polynomial[1], polynomial[2], polynomial[3] - point2.x);
  let rayIntersection, intersectsRay;
  let count = 0;
  for (let i2 = 0; i2 < roots.length; i2++) {
    rayIntersection = calculateCurveAt(roots[i2], "y", points3);
    intersectsRay = close(rayIntersection, point2.y) || rayIntersection > point2.y;
    if (intersectsRay && ((roots[i2] === 0 || roots[i2] === 1) && bbox.bottomRight().x > point2.x || 0 < roots[i2] && roots[i2] < 1)) {
      count++;
    }
  }
  return count;
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/line-intersections-count.js
function lineIntersectionsCount(a2, b, point2) {
  let intersects;
  if (a2.x !== b.x) {
    const minX = Math.min(a2.x, b.x);
    const maxX = Math.max(a2.x, b.x);
    const minY = Math.min(a2.y, b.y);
    const maxY = Math.max(a2.y, b.y);
    const inRange = minX <= point2.x && point2.x < maxX;
    if (minY === maxY) {
      intersects = point2.y <= minY && inRange;
    } else {
      intersects = inRange && (maxY - minY) * ((a2.x - b.x) * (a2.y - b.y) > 0 ? point2.x - minX : maxX - point2.x) / (maxX - minX) + minY - point2.y >= 0;
    }
  }
  return intersects ? 1 : 0;
}

// node_modules/@progress/kendo-drawing/dist/es/mixins/with-points.js
function pointAccessor(name) {
  const fieldName = "_" + name;
  return function(value) {
    if (value !== void 0) {
      this._observerField(fieldName, point_default.create(value));
      this.geometryChange();
      return this;
    }
    return this[fieldName];
  };
}
function definePointAccessors(fn, names) {
  for (let i2 = 0; i2 < names.length; i2++) {
    fn[names[i2]] = pointAccessor(names[i2]);
  }
}
var withPoints = (TBase, names) => {
  const result = class extends TBase {
  };
  definePointAccessors(result.prototype, names);
  return result;
};
var with_points_default = withPoints;

// node_modules/@progress/kendo-drawing/dist/es/geometry/segment.js
var points = ["anchor", "controlIn", "controlOut"];
var Segment = class extends with_points_default(has_observers_default, points) {
  constructor(anchor2, controlIn, controlOut) {
    super();
    this.anchor(anchor2 || new point_default());
    this.controlIn(controlIn);
    this.controlOut(controlOut);
  }
  bboxTo(toSegment, matrix) {
    const segmentAnchor = this.anchor().transformCopy(matrix);
    const toSegmentAnchor = toSegment.anchor().transformCopy(matrix);
    let rect;
    if (this.controlOut() && toSegment.controlIn()) {
      rect = this._curveBoundingBox(
        segmentAnchor,
        this.controlOut().transformCopy(matrix),
        toSegment.controlIn().transformCopy(matrix),
        toSegmentAnchor
      );
    } else {
      rect = this._lineBoundingBox(segmentAnchor, toSegmentAnchor);
    }
    return rect;
  }
  _lineBoundingBox(p1, p2) {
    return rect_default.fromPoints(p1, p2);
  }
  _curveBoundingBox(p1, cp1, cp2, p2) {
    const points3 = [p1, cp1, cp2, p2];
    const extremesX = this._curveExtremesFor(points3, "x");
    const extremesY = this._curveExtremesFor(points3, "y");
    const xLimits = arrayLimits([extremesX.min, extremesX.max, p1.x, p2.x]);
    const yLimits = arrayLimits([extremesY.min, extremesY.max, p1.y, p2.y]);
    return rect_default.fromPoints(new point_default(xLimits.min, yLimits.min), new point_default(xLimits.max, yLimits.max));
  }
  _curveExtremesFor(points3, field) {
    const extremes = this._curveExtremes(
      points3[0][field],
      points3[1][field],
      points3[2][field],
      points3[3][field]
    );
    return {
      min: calculateCurveAt(extremes.min, field, points3),
      max: calculateCurveAt(extremes.max, field, points3)
    };
  }
  _curveExtremes(x1, x2, x3, x4) {
    const a2 = x1 - 3 * x2 + 3 * x3 - x4;
    const b = -2 * (x1 - 2 * x2 + x3);
    const c2 = x1 - x2;
    const sqrt = Math.sqrt(b * b - 4 * a2 * c2);
    let t1 = 0;
    let t2 = 1;
    if (a2 === 0) {
      if (b !== 0) {
        t1 = t2 = -c2 / b;
      }
    } else if (!isNaN(sqrt)) {
      t1 = (-b + sqrt) / (2 * a2);
      t2 = (-b - sqrt) / (2 * a2);
    }
    let min = Math.max(Math.min(t1, t2), 0);
    if (min < 0 || min > 1) {
      min = 0;
    }
    let max = Math.min(Math.max(t1, t2), 1);
    if (max > 1 || max < 0) {
      max = 1;
    }
    return {
      min,
      max
    };
  }
  _intersectionsTo(segment, point2) {
    let intersectionsCount;
    if (this.controlOut() && segment.controlIn()) {
      intersectionsCount = curveIntersectionsCount([this.anchor(), this.controlOut(), segment.controlIn(), segment.anchor()], point2, this.bboxTo(segment));
    } else {
      intersectionsCount = lineIntersectionsCount(this.anchor(), segment.anchor(), point2);
    }
    return intersectionsCount;
  }
  _isOnCurveTo(segment, point2, width, endSegment) {
    const bbox = this.bboxTo(segment).expand(width, width);
    if (bbox.containsPoint(point2)) {
      const p1 = this.anchor();
      const p2 = this.controlOut();
      const p3 = segment.controlIn();
      const p4 = segment.anchor();
      if (endSegment === "start" && p1.distanceTo(point2) <= width) {
        return !isOutOfEndPoint(p1, p2, point2);
      } else if (endSegment === "end" && p4.distanceTo(point2) <= width) {
        return !isOutOfEndPoint(p4, p3, point2);
      }
      const points3 = [p1, p2, p3, p4];
      if (hasRootsInRange(points3, point2, "x", "y", width) || hasRootsInRange(points3, point2, "y", "x", width)) {
        return true;
      }
      const rotation = transform().rotate(45, point2);
      const rotatedPoints = [p1.transformCopy(rotation), p2.transformCopy(rotation), p3.transformCopy(rotation), p4.transformCopy(rotation)];
      return hasRootsInRange(rotatedPoints, point2, "x", "y", width) || hasRootsInRange(rotatedPoints, point2, "y", "x", width);
    }
  }
  _isOnLineTo(segment, point2, width) {
    const p1 = this.anchor();
    const p2 = segment.anchor();
    const angle = deg(Math.atan2(p2.y - p1.y, p2.x - p1.x));
    const rect = new rect_default([p1.x, p1.y - width / 2], [p1.distanceTo(p2), width]);
    return rect.containsPoint(point2.transformCopy(transform().rotate(-angle, p1)));
  }
  _isOnPathTo(segment, point2, width, endSegment) {
    let isOnPath;
    if (this.controlOut() && segment.controlIn()) {
      isOnPath = this._isOnCurveTo(segment, point2, width / 2, endSegment);
    } else {
      isOnPath = this._isOnLineTo(segment, point2, width);
    }
    return isOnPath;
  }
};
function arrayLimits(arr) {
  let length = arr.length;
  let min = MAX_NUM;
  let max = MIN_NUM;
  for (let i2 = 0; i2 < length; i2++) {
    max = Math.max(max, arr[i2]);
    min = Math.min(min, arr[i2]);
  }
  return {
    min,
    max
  };
}
var segment_default = Segment;

// node_modules/@progress/kendo-drawing/dist/es/shapes/utils/points-to-curve.js
var WEIGHT = 0.333;
var EXTREMUM_ALLOWED_DEVIATION = 0.01;
var X = "x";
var Y = "y";
function pointsToCurve(pointsIn, closed) {
  const points3 = pointsIn.slice(0);
  const segments = [];
  let length = points3.length;
  if (length > 2) {
    removeDuplicates(0, points3);
    length = points3.length;
  }
  if (length < 2 || length === 2 && points3[0].equals(points3[1])) {
    return segments;
  }
  let p0 = points3[0];
  let p1 = points3[1];
  let p2 = points3[2];
  segments.push(new segment_default(p0));
  while (p0.equals(points3[length - 1])) {
    closed = true;
    points3.pop();
    length--;
  }
  if (length === 2) {
    const tangent = getTangent(p0, p1, X, Y);
    last(segments).controlOut(
      firstControlPoint(tangent, p0, p1, X, Y)
    );
    segments.push(new segment_default(
      p1,
      secondControlPoint(tangent, p0, p1, X, Y)
    ));
    return segments;
  }
  let initialControlPoint, lastControlPoint;
  if (closed) {
    p0 = points3[length - 1];
    p1 = points3[0];
    p2 = points3[1];
    const controlPoints = getControlPoints(p0, p1, p2);
    initialControlPoint = controlPoints[1];
    lastControlPoint = controlPoints[0];
  } else {
    const tangent = getTangent(p0, p1, X, Y);
    initialControlPoint = firstControlPoint(tangent, p0, p1, X, Y);
  }
  let cp0 = initialControlPoint;
  for (let idx = 0; idx <= length - 3; idx++) {
    removeDuplicates(idx, points3);
    length = points3.length;
    if (idx + 3 <= length) {
      p0 = points3[idx];
      p1 = points3[idx + 1];
      p2 = points3[idx + 2];
      const controlPoints = getControlPoints(p0, p1, p2);
      last(segments).controlOut(cp0);
      cp0 = controlPoints[1];
      const cp1 = controlPoints[0];
      segments.push(new segment_default(p1, cp1));
    }
  }
  if (closed) {
    p0 = points3[length - 2];
    p1 = points3[length - 1];
    p2 = points3[0];
    const controlPoints = getControlPoints(p0, p1, p2);
    last(segments).controlOut(cp0);
    segments.push(new segment_default(
      p1,
      controlPoints[0]
    ));
    last(segments).controlOut(controlPoints[1]);
    segments.push(new segment_default(
      p2,
      lastControlPoint
    ));
  } else {
    const tangent = getTangent(p1, p2, X, Y);
    last(segments).controlOut(cp0);
    segments.push(new segment_default(
      p2,
      secondControlPoint(tangent, p1, p2, X, Y)
    ));
  }
  return segments;
}
function removeDuplicates(idx, points3) {
  while (points3[idx + 1] && (points3[idx].equals(points3[idx + 1]) || points3[idx + 1].equals(points3[idx + 2]))) {
    points3.splice(idx + 1, 1);
  }
}
function invertAxis(p0, p1, p2) {
  let invertAxis2 = false;
  if (p0.x === p1.x) {
    invertAxis2 = true;
  } else if (p1.x === p2.x) {
    if (p1.y < p2.y && p0.y <= p1.y || p2.y < p1.y && p1.y <= p0.y) {
      invertAxis2 = true;
    }
  } else {
    const fn = lineFunction(p0, p1);
    const y2 = calculateFunction(fn, p2.x);
    if (!(p0.y <= p1.y && p2.y <= y2) && !(p1.y <= p0.y && p2.y >= y2)) {
      invertAxis2 = true;
    }
  }
  return invertAxis2;
}
function isLine(p0, p1, p2) {
  const fn = lineFunction(p0, p1);
  const y2 = calculateFunction(fn, p2.x);
  return p0.x === p1.x && p1.x === p2.x || round(y2, 1) === round(p2.y, 1);
}
function lineFunction(p1, p2) {
  const a2 = (p2.y - p1.y) / (p2.x - p1.x);
  const b = p1.y - a2 * p1.x;
  return [b, a2];
}
function getControlPoints(p0, p1, p2) {
  let xField = X;
  let yField = Y;
  let restrict = false;
  let switchOrientation = false;
  let tangent;
  if (isLine(p0, p1, p2)) {
    tangent = getTangent(p0, p1, X, Y);
  } else {
    const monotonic = {
      x: isMonotonicByField(p0, p1, p2, X),
      y: isMonotonicByField(p0, p1, p2, Y)
    };
    if (monotonic.x && monotonic.y) {
      tangent = getTangent(p0, p2, X, Y);
      restrict = true;
    } else {
      if (invertAxis(p0, p1, p2)) {
        xField = Y;
        yField = X;
      }
      if (monotonic[xField]) {
        tangent = 0;
      } else {
        let sign;
        if (p2[yField] < p0[yField] && p0[yField] <= p1[yField] || p0[yField] < p2[yField] && p1[yField] <= p0[yField]) {
          sign = numberSign2((p2[yField] - p0[yField]) * (p1[xField] - p0[xField]));
        } else {
          sign = -numberSign2((p2[xField] - p0[xField]) * (p1[yField] - p0[yField]));
        }
        tangent = EXTREMUM_ALLOWED_DEVIATION * sign;
        switchOrientation = true;
      }
    }
  }
  const secondCP = secondControlPoint(tangent, p0, p1, xField, yField);
  if (switchOrientation) {
    const oldXField = xField;
    xField = yField;
    yField = oldXField;
  }
  const firstCP = firstControlPoint(tangent, p1, p2, xField, yField);
  if (restrict) {
    restrictControlPoint(p0, p1, secondCP, tangent);
    restrictControlPoint(p1, p2, firstCP, tangent);
  }
  return [secondCP, firstCP];
}
function restrictControlPoint(p1, p2, cp, tangent) {
  if (p1.y < p2.y) {
    if (p2.y < cp.y) {
      cp.x = p1.x + (p2.y - p1.y) / tangent;
      cp.y = p2.y;
    } else if (cp.y < p1.y) {
      cp.x = p2.x - (p2.y - p1.y) / tangent;
      cp.y = p1.y;
    }
  } else {
    if (cp.y < p2.y) {
      cp.x = p1.x - (p1.y - p2.y) / tangent;
      cp.y = p2.y;
    } else if (p1.y < cp.y) {
      cp.x = p2.x + (p1.y - p2.y) / tangent;
      cp.y = p1.y;
    }
  }
}
function getTangent(p0, p1, xField, yField) {
  const x = p1[xField] - p0[xField];
  const y2 = p1[yField] - p0[yField];
  let tangent;
  if (x === 0) {
    tangent = 0;
  } else {
    tangent = y2 / x;
  }
  return tangent;
}
function isMonotonicByField(p0, p1, p2, field) {
  return p2[field] > p1[field] && p1[field] > p0[field] || p2[field] < p1[field] && p1[field] < p0[field];
}
function firstControlPoint(tangent, p0, p3, xField, yField) {
  const t1 = p0[xField];
  const t2 = p3[xField];
  const distance = (t2 - t1) * WEIGHT;
  return point(t1 + distance, p0[yField] + distance * tangent, xField, yField);
}
function secondControlPoint(tangent, p0, p3, xField, yField) {
  const t1 = p0[xField];
  const t2 = p3[xField];
  const distance = (t2 - t1) * WEIGHT;
  return point(t2 - distance, p3[yField] - distance * tangent, xField, yField);
}
function point(xValue, yValue, xField, yField) {
  const controlPoint = new point_default();
  controlPoint[xField] = xValue;
  controlPoint[yField] = yValue;
  return controlPoint;
}
function calculateFunction(fn, x) {
  const length = fn.length;
  let result = 0;
  for (let i2 = 0; i2 < length; i2++) {
    result += Math.pow(x, i2) * fn[i2];
  }
  return result;
}
function numberSign2(value) {
  return value <= 0 ? -1 : 1;
}

// node_modules/@progress/kendo-drawing/dist/es/parsing/shape-map.js
var ShapeMap = {
  l: function(path, options2) {
    const { parameters, position } = options2;
    for (let i2 = 0; i2 < parameters.length; i2 += 2) {
      let point2 = new point_default(parameters[i2], parameters[i2 + 1]);
      if (options2.isRelative) {
        point2.translateWith(position);
      }
      path.lineTo(point2.x, point2.y);
      position.x = point2.x;
      position.y = point2.y;
    }
  },
  c: function(path, options2) {
    const { parameters, position } = options2;
    for (let i2 = 0; i2 < parameters.length; i2 += 6) {
      let controlOut = new point_default(parameters[i2], parameters[i2 + 1]);
      let controlIn = new point_default(parameters[i2 + 2], parameters[i2 + 3]);
      let point2 = new point_default(parameters[i2 + 4], parameters[i2 + 5]);
      if (options2.isRelative) {
        controlIn.translateWith(position);
        controlOut.translateWith(position);
        point2.translateWith(position);
      }
      path.curveTo(controlOut, controlIn, point2);
      position.x = point2.x;
      position.y = point2.y;
    }
  },
  v: function(path, options2) {
    const value = options2.isRelative ? 0 : options2.position.x;
    toLineParamaters(options2.parameters, true, value);
    this.l(path, options2);
  },
  h: function(path, options2) {
    const value = options2.isRelative ? 0 : options2.position.y;
    toLineParamaters(options2.parameters, false, value);
    this.l(path, options2);
  },
  a: function(path, options2) {
    const { parameters, position } = options2;
    for (let i2 = 0; i2 < parameters.length; i2 += 7) {
      const radiusX = parameters[i2];
      const radiusY = parameters[i2 + 1];
      const rotation = parameters[i2 + 2];
      const largeArc = parameters[i2 + 3];
      const swipe = parameters[i2 + 4];
      const endPoint = new point_default(parameters[i2 + 5], parameters[i2 + 6]);
      if (options2.isRelative) {
        endPoint.translateWith(position);
      }
      if (position.x !== endPoint.x || position.y !== endPoint.y) {
        path.arcTo(endPoint, radiusX, radiusY, largeArc, swipe, rotation);
        position.x = endPoint.x;
        position.y = endPoint.y;
      }
    }
  },
  s: function(path, options2) {
    const { parameters, position, previousCommand } = options2;
    let lastControlIn;
    if (previousCommand === "s" || previousCommand === "c") {
      lastControlIn = last(last(path.paths).segments).controlIn();
    }
    for (let i2 = 0; i2 < parameters.length; i2 += 4) {
      let controlIn = new point_default(parameters[i2], parameters[i2 + 1]);
      let endPoint = new point_default(parameters[i2 + 2], parameters[i2 + 3]);
      let controlOut;
      if (options2.isRelative) {
        controlIn.translateWith(position);
        endPoint.translateWith(position);
      }
      if (lastControlIn) {
        controlOut = reflectionPoint(lastControlIn, position);
      } else {
        controlOut = position.clone();
      }
      lastControlIn = controlIn;
      path.curveTo(controlOut, controlIn, endPoint);
      position.x = endPoint.x;
      position.y = endPoint.y;
    }
  },
  q: function(path, options2) {
    const { parameters, position } = options2;
    for (let i2 = 0; i2 < parameters.length; i2 += 4) {
      let controlPoint = new point_default(parameters[i2], parameters[i2 + 1]);
      let endPoint = new point_default(parameters[i2 + 2], parameters[i2 + 3]);
      if (options2.isRelative) {
        controlPoint.translateWith(position);
        endPoint.translateWith(position);
      }
      let cubicControlPoints = quadraticToCubicControlPoints(position, controlPoint, endPoint);
      path.curveTo(cubicControlPoints.controlOut, cubicControlPoints.controlIn, endPoint);
      position.x = endPoint.x;
      position.y = endPoint.y;
    }
  },
  t: function(path, options2) {
    const { parameters, position, previousCommand } = options2;
    let controlPoint;
    if (previousCommand === "q" || previousCommand === "t") {
      let lastSegment = last(last(path.paths).segments);
      controlPoint = lastSegment.controlIn().clone().translateWith(position.scaleCopy(-1 / 3)).scale(3 / 2);
    }
    for (let i2 = 0; i2 < parameters.length; i2 += 2) {
      let endPoint = new point_default(parameters[i2], parameters[i2 + 1]);
      if (options2.isRelative) {
        endPoint.translateWith(position);
      }
      if (controlPoint) {
        controlPoint = reflectionPoint(controlPoint, position);
      } else {
        controlPoint = position.clone();
      }
      let cubicControlPoints = quadraticToCubicControlPoints(position, controlPoint, endPoint);
      path.curveTo(cubicControlPoints.controlOut, cubicControlPoints.controlIn, endPoint);
      position.x = endPoint.x;
      position.y = endPoint.y;
    }
  }
};
function toLineParamaters(parameters, isVertical, value) {
  const insertPosition = isVertical ? 0 : 1;
  for (let i2 = 0; i2 < parameters.length; i2 += 2) {
    parameters.splice(i2 + insertPosition, 0, value);
  }
}
function reflectionPoint(point2, center) {
  if (point2 && center) {
    return center.scaleCopy(2).translate(-point2.x, -point2.y);
  }
}
var third = 1 / 3;
function quadraticToCubicControlPoints(position, controlPoint, endPoint) {
  const scaledPoint = controlPoint.clone().scale(2 / 3);
  return {
    controlOut: scaledPoint.clone().translateWith(position.scaleCopy(third)),
    controlIn: scaledPoint.translateWith(endPoint.scaleCopy(third))
  };
}
var shape_map_default = ShapeMap;

// node_modules/@progress/kendo-drawing/dist/es/parsing/parse-path.js
var SEGMENT_REGEX = /([a-df-z]{1})([^a-df-z]*)(z)?/gi;
var SPLIT_REGEX = /[,\s]?([+\-]?(?:\d*\.\d+|\d+)(?:[eE][+\-]?\d+)?)/g;
var MOVE = "m";
var CLOSE = "z";
function parseParameters(str) {
  const parameters = [];
  str.replace(SPLIT_REGEX, function(match, number) {
    parameters.push(parseFloat(number));
  });
  return parameters;
}
function parsePath(pathInstance, str) {
  const position = new point_default();
  let previousCommand;
  str.replace(SEGMENT_REGEX, (match, element, params, closePath) => {
    let command = element.toLowerCase();
    const isRelative = command === element;
    const parameters = parseParameters(params.trim());
    if (command === MOVE) {
      if (isRelative) {
        position.x += parameters[0];
        position.y += parameters[1];
      } else {
        position.x = parameters[0];
        position.y = parameters[1];
      }
      pathInstance.moveTo(position.x, position.y);
      if (parameters.length > 2) {
        command = "l";
        parameters.splice(0, 2);
      }
    }
    if (shape_map_default[command]) {
      shape_map_default[command](
        pathInstance,
        {
          parameters,
          position,
          isRelative,
          previousCommand
        }
      );
      if (closePath && closePath.toLowerCase() === CLOSE) {
        pathInstance.close();
      }
    } else if (command !== MOVE) {
      throw new Error("Error while parsing SVG path. Unsupported command: " + command);
    }
    previousCommand = command;
  });
  return pathInstance;
}
var parse_path_default = parsePath;

// node_modules/@progress/kendo-drawing/dist/es/shapes/utils/elements-bounding-box.js
function elementsBoundingBox(elements, applyTransform, transformation) {
  let boundingBox;
  for (let i2 = 0; i2 < elements.length; i2++) {
    let element = elements[i2];
    if (element.visible()) {
      let elementBoundingBox = applyTransform ? element.bbox(transformation) : element.rawBBox();
      if (elementBoundingBox) {
        if (boundingBox) {
          boundingBox = rect_default.union(boundingBox, elementBoundingBox);
        } else {
          boundingBox = elementBoundingBox;
        }
      }
    }
  }
  return boundingBox;
}

// node_modules/@progress/kendo-drawing/dist/es/shapes/utils/elements-clippend-bounding-box.js
function elementsClippedBoundingBox(elements, transformation) {
  let boundingBox;
  for (let i2 = 0; i2 < elements.length; i2++) {
    let element = elements[i2];
    if (element.visible()) {
      let elementBoundingBox = element.clippedBBox(transformation);
      if (elementBoundingBox) {
        if (boundingBox) {
          boundingBox = rect_default.union(boundingBox, elementBoundingBox);
        } else {
          boundingBox = elementBoundingBox;
        }
      }
    }
  }
  return boundingBox;
}

// node_modules/@progress/kendo-drawing/dist/es/shapes/path.js
var SPACE2 = " ";
var printPoints = (precision) => (...points3) => points3.map((p2) => p2.toString(precision)).join(SPACE2);
var segmentType = (segmentStart, segmentEnd) => segmentStart.controlOut() && segmentEnd.controlIn() ? "C" : "L";
var Path = class _Path extends paintable_default(measurable_default(element_default)) {
  get nodeType() {
    return "Path";
  }
  constructor(options2) {
    super(options2);
    this.segments = new geometry_elements_array_default();
    this.segments.addObserver(this);
    if (this.options.stroke === void 0) {
      this.stroke("#000");
      if (this.options.stroke.lineJoin === void 0) {
        this.options.set("stroke.lineJoin", "miter");
      }
    }
  }
  moveTo(x, y2) {
    this.suspend();
    this.segments.elements([]);
    this.resume();
    this.lineTo(x, y2);
    return this;
  }
  lineTo(x, y2) {
    const point2 = y2 !== void 0 ? new point_default(x, y2) : x;
    const segment = new segment_default(point2);
    this.segments.push(segment);
    return this;
  }
  curveTo(controlOut, controlIn, point2) {
    if (this.segments.length > 0) {
      const lastSegment = last(this.segments);
      const segment = new segment_default(point2, controlIn);
      this.suspend();
      lastSegment.controlOut(controlOut);
      this.resume();
      this.segments.push(segment);
    }
    return this;
  }
  arc(startAngle, endAngle, radiusX, radiusY, anticlockwise) {
    if (this.segments.length > 0) {
      const lastSegment = last(this.segments);
      const anchor2 = lastSegment.anchor();
      const start = rad(startAngle);
      const center = new point_default(
        anchor2.x - radiusX * Math.cos(start),
        anchor2.y - radiusY * Math.sin(start)
      );
      const arc = new arc_default(center, {
        startAngle,
        endAngle,
        radiusX,
        radiusY,
        anticlockwise
      });
      this._addArcSegments(arc);
    }
    return this;
  }
  arcTo(end, rx, ry, largeArc, swipe, rotation) {
    if (this.segments.length > 0) {
      const lastSegment = last(this.segments);
      const anchor2 = lastSegment.anchor();
      const arc = arc_default.fromPoints(anchor2, point_default.create(end), rx, ry, largeArc, swipe, rotation);
      this._addArcSegments(arc);
    }
    return this;
  }
  _addArcSegments(arc) {
    this.suspend();
    const curvePoints = arc.curvePoints();
    for (let i2 = 1; i2 < curvePoints.length; i2 += 3) {
      this.curveTo(curvePoints[i2], curvePoints[i2 + 1], curvePoints[i2 + 2]);
    }
    this.resume();
    this.geometryChange();
  }
  close() {
    this.options.closed = true;
    this.geometryChange();
    return this;
  }
  rawBBox() {
    return this._bbox();
  }
  toString(digits) {
    let output = "";
    const segments = this.segments;
    const length = segments.length;
    if (length > 0) {
      const parts = [];
      const print = printPoints(digits);
      let currentType;
      for (let i2 = 1; i2 < length; i2++) {
        let type = segmentType(segments[i2 - 1], segments[i2]);
        if (type !== currentType) {
          currentType = type;
          parts.push(type);
        }
        if (type === "L") {
          parts.push(print(segments[i2].anchor()));
        } else {
          parts.push(print(
            segments[i2 - 1].controlOut(),
            segments[i2].controlIn(),
            segments[i2].anchor()
          ));
        }
      }
      output = "M" + print(segments[0].anchor()) + SPACE2 + parts.join(SPACE2);
      if (this.options.closed) {
        output += "Z";
      }
    }
    return output;
  }
  _containsPoint(point2) {
    const segments = this.segments;
    const length = segments.length;
    let intersectionsCount = 0;
    let previous, current;
    for (let idx = 1; idx < length; idx++) {
      previous = segments[idx - 1];
      current = segments[idx];
      intersectionsCount += previous._intersectionsTo(current, point2);
    }
    if (this.options.closed || !segments[0].anchor().equals(segments[length - 1].anchor())) {
      intersectionsCount += lineIntersectionsCount(segments[0].anchor(), segments[length - 1].anchor(), point2);
    }
    return intersectionsCount % 2 !== 0;
  }
  _isOnPath(point2, width) {
    const segments = this.segments;
    const length = segments.length;
    const pathWidth = width || this.options.stroke.width;
    if (length > 1) {
      if (segments[0]._isOnPathTo(segments[1], point2, pathWidth, "start")) {
        return true;
      }
      for (let idx = 2; idx <= length - 2; idx++) {
        if (segments[idx - 1]._isOnPathTo(segments[idx], point2, pathWidth)) {
          return true;
        }
      }
      if (segments[length - 2]._isOnPathTo(segments[length - 1], point2, pathWidth, "end")) {
        return true;
      }
    }
    return false;
  }
  _bbox(matrix) {
    const segments = this.segments;
    const length = segments.length;
    let boundingBox;
    if (length === 1) {
      let anchor2 = segments[0].anchor().transformCopy(matrix);
      boundingBox = new rect_default(anchor2, size_default.ZERO);
    } else if (length > 0) {
      for (let i2 = 1; i2 < length; i2++) {
        let segmentBox = segments[i2 - 1].bboxTo(segments[i2], matrix);
        if (boundingBox) {
          boundingBox = rect_default.union(boundingBox, segmentBox);
        } else {
          boundingBox = segmentBox;
        }
      }
    }
    return boundingBox;
  }
  static parse(str, options2) {
    return MultiPath.parse(str, options2);
  }
  static fromRect(rect, options2) {
    const path = new _Path(options2);
    let [rx, ry] = rect.cornerRadius;
    if (rx === 0 && ry === 0) {
      path.moveTo(rect.topLeft()).lineTo(rect.topRight()).lineTo(rect.bottomRight()).lineTo(rect.bottomLeft()).close();
    } else {
      const origin = rect.origin;
      const { x, y: y2 } = origin;
      const width = rect.width();
      const height = rect.height();
      rx = limitValue(rx, 0, width / 2);
      ry = limitValue(ry, 0, height / 2);
      path.moveTo(x + rx, y2).lineTo(x + width - rx, y2).arcTo([x + width, y2 + ry], rx, ry, false).lineTo(x + width, y2 + height - ry).arcTo([x + width - rx, y2 + height], rx, ry, false).lineTo(x + rx, y2 + height).arcTo([x, y2 + height - ry], rx, ry, false).lineTo(x, y2 + ry).arcTo([x + rx, y2], rx, ry, false);
    }
    return path;
  }
  static fromPoints(points3, options2) {
    if (points3) {
      const path = new _Path(options2);
      for (let i2 = 0; i2 < points3.length; i2++) {
        let point2 = point_default.create(points3[i2]);
        if (point2) {
          if (i2 === 0) {
            path.moveTo(point2);
          } else {
            path.lineTo(point2);
          }
        }
      }
      return path;
    }
  }
  static curveFromPoints(points3, options2) {
    if (points3) {
      const segments = pointsToCurve(points3);
      const path = new _Path(options2);
      path.segments.push.apply(path.segments, segments);
      return path;
    }
  }
  static fromArc(arc, options2) {
    const path = new _Path(options2);
    const startAngle = arc.startAngle;
    const start = arc.pointAt(startAngle);
    path.moveTo(start.x, start.y);
    path.arc(startAngle, arc.endAngle, arc.radiusX, arc.radiusY, arc.anticlockwise);
    return path;
  }
};
var MultiPath = class _MultiPath extends paintable_default(measurable_default(element_default)) {
  static parse(str, options2) {
    const instance = new _MultiPath(options2);
    return parse_path_default(instance, str);
  }
  toString(digits) {
    const paths = this.paths;
    let output = "";
    if (paths.length > 0) {
      const result = [];
      for (let i2 = 0; i2 < paths.length; i2++) {
        result.push(paths[i2].toString(digits));
      }
      output = result.join(SPACE2);
    }
    return output;
  }
  get nodeType() {
    return "MultiPath";
  }
  constructor(options2) {
    super(options2);
    this.paths = new geometry_elements_array_default();
    this.paths.addObserver(this);
    if (this.options.stroke === void 0) {
      this.stroke("#000");
    }
  }
  moveTo(x, y2) {
    const path = new Path();
    path.moveTo(x, y2);
    this.paths.push(path);
    return this;
  }
  lineTo(x, y2) {
    if (this.paths.length > 0) {
      last(this.paths).lineTo(x, y2);
    }
    return this;
  }
  curveTo(controlOut, controlIn, point2) {
    if (this.paths.length > 0) {
      last(this.paths).curveTo(controlOut, controlIn, point2);
    }
    return this;
  }
  arc(startAngle, endAngle, radiusX, radiusY, anticlockwise) {
    if (this.paths.length > 0) {
      last(this.paths).arc(startAngle, endAngle, radiusX, radiusY, anticlockwise);
    }
    return this;
  }
  arcTo(end, rx, ry, largeArc, swipe, rotation) {
    if (this.paths.length > 0) {
      last(this.paths).arcTo(end, rx, ry, largeArc, swipe, rotation);
    }
    return this;
  }
  close() {
    if (this.paths.length > 0) {
      last(this.paths).close();
    }
    return this;
  }
  _bbox(matrix) {
    return elementsBoundingBox(this.paths, true, matrix);
  }
  rawBBox() {
    return elementsBoundingBox(this.paths, false);
  }
  _containsPoint(point2) {
    const paths = this.paths;
    for (let idx = 0; idx < paths.length; idx++) {
      if (paths[idx]._containsPoint(point2)) {
        return true;
      }
    }
    return false;
  }
  _isOnPath(point2) {
    const paths = this.paths;
    const width = this.options.stroke.width;
    for (let idx = 0; idx < paths.length; idx++) {
      if (paths[idx]._isOnPath(point2, width)) {
        return true;
      }
    }
    return false;
  }
  _clippedBBox(transformation) {
    return elementsClippedBoundingBox(this.paths, this.currentTransform(transformation));
  }
};

// node_modules/@progress/kendo-drawing/dist/es/shapes/arc.js
var DEFAULT_STROKE2 = "#000";
var Arc2 = class extends paintable_default(measurable_default(with_geometry_default(element_default))) {
  get nodeType() {
    return "Arc";
  }
  constructor(geometry = new arc_default(), options2 = {}) {
    super(options2);
    this.geometry(geometry);
    if (this.options.stroke === void 0) {
      this.stroke(DEFAULT_STROKE2);
    }
  }
  _bbox(matrix) {
    return this._geometry.bbox(matrix);
  }
  rawBBox() {
    return this.geometry().bbox();
  }
  toPath() {
    const path = new Path();
    const curvePoints = this.geometry().curvePoints();
    if (curvePoints.length > 0) {
      path.moveTo(curvePoints[0].x, curvePoints[0].y);
      for (let i2 = 1; i2 < curvePoints.length; i2 += 3) {
        path.curveTo(curvePoints[i2], curvePoints[i2 + 1], curvePoints[i2 + 2]);
      }
    }
    return path;
  }
  _containsPoint(point2) {
    return this.geometry().containsPoint(point2);
  }
  _isOnPath(point2) {
    return this.geometry()._isOnPath(point2, this.options.stroke.width / 2);
  }
};

// node_modules/@progress/kendo-drawing/dist/es/shapes/text.js
var DEFAULT_FONT = "12px sans-serif";
var DEFAULT_FILL = "#000";
var Text = class extends paintable_default(with_points_default(element_default, ["position"])) {
  get nodeType() {
    return "Text";
  }
  constructor(content, position = new point_default(), options2 = {}) {
    super(options2);
    this.content(content);
    this.position(position);
    if (!this.options.font) {
      this.options.font = DEFAULT_FONT;
    }
    if (this.options.fill === void 0) {
      this.fill(DEFAULT_FILL);
    }
  }
  content(value) {
    if (value !== void 0) {
      this.options.set("content", value);
      return this;
    }
    return this.options.get("content");
  }
  measure() {
    const metrics = measureText(this.content(), {
      font: this.options.get("font")
    });
    return metrics;
  }
  rect() {
    const size = this.measure();
    const pos = this.position().clone();
    return new rect_default(pos, [size.width, size.height]);
  }
  bbox(transformation) {
    const combinedMatrix = toMatrix(this.currentTransform(transformation));
    return this.rect().bbox(combinedMatrix);
  }
  rawBBox() {
    return this.rect().bbox();
  }
  _containsPoint(point2) {
    return this.rect().containsPoint(point2);
  }
};
var text_default = Text;

// node_modules/@progress/kendo-drawing/dist/es/shapes/image.js
var Image2 = class extends with_geometry_default(element_default, ["rect"]) {
  get nodeType() {
    return "Image";
  }
  constructor(src, rect = new rect_default(), options2 = {}) {
    super(options2);
    this.src(src);
    this.rect(rect);
  }
  src(value) {
    if (value !== void 0) {
      this.options.set("src", value);
      return this;
    }
    return this.options.get("src");
  }
  bbox(transformation) {
    const combinedMatrix = toMatrix(this.currentTransform(transformation));
    return this._rect.bbox(combinedMatrix);
  }
  rawBBox() {
    return this._rect.bbox();
  }
  _containsPoint(point2) {
    return this._rect.containsPoint(point2);
  }
  _hasFill() {
    return this.src();
  }
};
var image_default = Image2;

// node_modules/@progress/kendo-drawing/dist/es/mixins/traversable.js
var traversable = (TBase, childrenField) => class extends TBase {
  traverse(callback) {
    const children = this[childrenField];
    for (let i2 = 0; i2 < children.length; i2++) {
      let child = children[i2];
      if (child.traverse) {
        child.traverse(callback);
      } else {
        callback(child);
      }
    }
    return this;
  }
};
var traversable_default = traversable;

// node_modules/@progress/kendo-drawing/dist/es/shapes/group.js
var Group = class extends traversable_default(element_default, "children") {
  get nodeType() {
    return "Group";
  }
  constructor(options2) {
    super(options2);
    this.children = [];
  }
  childrenChange(action, items, index) {
    this.trigger("childrenChange", {
      action,
      items,
      index
    });
  }
  append() {
    append(this.children, arguments);
    this._reparent(arguments, this);
    this.childrenChange("add", arguments);
    return this;
  }
  insert(index, element) {
    this.children.splice(index, 0, element);
    element.parent = this;
    this.childrenChange("add", [element], index);
    return this;
  }
  insertAt(element, index) {
    return this.insert(index, element);
  }
  remove(element) {
    const index = this.children.indexOf(element);
    if (index >= 0) {
      this.children.splice(index, 1);
      element.parent = null;
      this.childrenChange("remove", [element], index);
    }
    return this;
  }
  removeAt(index) {
    if (0 <= index && index < this.children.length) {
      let element = this.children[index];
      this.children.splice(index, 1);
      element.parent = null;
      this.childrenChange("remove", [element], index);
    }
    return this;
  }
  clear() {
    const items = this.children;
    this.children = [];
    this._reparent(items, null);
    this.childrenChange("remove", items, 0);
    return this;
  }
  bbox(transformation) {
    return elementsBoundingBox(this.children, true, this.currentTransform(transformation));
  }
  rawBBox() {
    return elementsBoundingBox(this.children, false);
  }
  _clippedBBox(transformation) {
    return elementsClippedBoundingBox(this.children, this.currentTransform(transformation));
  }
  currentTransform(transformation) {
    return element_default.prototype.currentTransform.call(this, transformation) || null;
  }
  containsPoint(point2, parentTransform) {
    if (this.visible()) {
      const children = this.children;
      const transform2 = this.currentTransform(parentTransform);
      for (let idx = 0; idx < children.length; idx++) {
        if (children[idx].containsPoint(point2, transform2)) {
          return true;
        }
      }
    }
    return false;
  }
  _reparent(elements, newParent) {
    for (let i2 = 0; i2 < elements.length; i2++) {
      const child = elements[i2];
      const parent = child.parent;
      if (parent && parent !== this && parent.remove) {
        parent.remove(child);
      }
      child.parent = newParent;
    }
  }
};
var group_default = Group;

// node_modules/@progress/kendo-drawing/dist/es/shapes/rect.js
var Rect2 = class extends paintable_default(measurable_default(with_geometry_default(element_default))) {
  get nodeType() {
    return "Rect";
  }
  constructor(geometry = new rect_default(), options2 = {}) {
    super(options2);
    this.geometry(geometry);
    if (this.options.stroke === void 0) {
      this.stroke("#000");
    }
  }
  _bbox(matrix) {
    return this._geometry.bbox(matrix);
  }
  rawBBox() {
    return this._geometry.bbox();
  }
  _containsPoint(point2) {
    return this._geometry.containsPoint(point2);
  }
  _isOnPath(point2) {
    return this.geometry()._isOnPath(point2, this.options.stroke.width / 2);
  }
};
var rect_default2 = Rect2;

// node_modules/@progress/kendo-drawing/dist/es/gradients/stops-array.js
var StopsArray = class extends elements_array_default {
  _change() {
    this.optionsChange({
      field: "stops"
    });
  }
};
var stops_array_default = StopsArray;

// node_modules/@progress/kendo-drawing/dist/es/mixins/with-options.js
function optionsAccessor(name) {
  return function(value) {
    if (value !== void 0) {
      this.options.set(name, value);
      return this;
    }
    return this.options.get(name);
  };
}
function defineOptionsAccessors(fn, names) {
  for (let i2 = 0; i2 < names.length; i2++) {
    fn[names[i2]] = optionsAccessor(names[i2]);
  }
}
var withOptions = (TBase, names) => {
  const result = class extends TBase {
  };
  defineOptionsAccessors(result.prototype, names);
  return result;
};
var with_options_default = withOptions;

// node_modules/@progress/kendo-drawing/dist/es/gradients/gradient-stop.js
var options = ["offset", "color", "opacity"];
var GradientStop = class _GradientStop extends with_options_default(has_observers_default, options) {
  constructor(offset, color, opacity) {
    super();
    this.options = new options_store_default({
      offset,
      color,
      opacity: opacity !== void 0 ? opacity : 1
    });
    this.options.addObserver(this);
  }
  static create(arg) {
    if (arg !== void 0) {
      let stop;
      if (arg instanceof _GradientStop) {
        stop = arg;
      } else if (arg.length > 1) {
        stop = new _GradientStop(arg[0], arg[1], arg[2]);
      } else {
        stop = new _GradientStop(arg.offset, arg.color, arg.opacity);
      }
      return stop;
    }
  }
};
var gradient_stop_default = GradientStop;

// node_modules/@progress/kendo-drawing/dist/es/gradients/gradient.js
var Gradient = class extends has_observers_default {
  get nodeType() {
    return "Gradient";
  }
  constructor(options2 = {}) {
    super();
    this.stops = new stops_array_default(this._createStops(options2.stops));
    this.stops.addObserver(this);
    this._userSpace = options2.userSpace;
    this.id = definitionId();
  }
  userSpace(value) {
    if (value !== void 0) {
      this._userSpace = value;
      this.optionsChange();
      return this;
    }
    return this._userSpace;
  }
  _createStops(stops = []) {
    const result = [];
    for (let idx = 0; idx < stops.length; idx++) {
      result.push(gradient_stop_default.create(stops[idx]));
    }
    return result;
  }
  addStop(offset, color, opacity) {
    this.stops.push(new gradient_stop_default(offset, color, opacity));
  }
  removeStop(stop) {
    const index = this.stops.indexOf(stop);
    if (index >= 0) {
      this.stops.splice(index, 1);
    }
  }
  optionsChange(e2) {
    this.trigger("optionsChange", {
      field: "gradient" + (e2 ? "." + e2.field : ""),
      value: this
    });
  }
  geometryChange() {
    this.optionsChange();
  }
};
var gradient_default = Gradient;

// node_modules/@progress/kendo-drawing/dist/es/gradients/linear-gradient.js
var points2 = ["start", "end"];
var LinearGradient = class extends with_points_default(gradient_default, points2) {
  constructor(options2 = {}) {
    super(options2);
    this.start(options2.start || new point_default());
    this.end(options2.end || new point_default(1, 0));
  }
};
var linear_gradient_default = LinearGradient;

// node_modules/@progress/kendo-drawing/dist/es/gradients/radial-gradient.js
var RadialGradient = class extends with_points_default(gradient_default, ["center"]) {
  constructor(options2 = {}) {
    super(options2);
    this.center(options2.center || new point_default());
    this._radius = options2.radius !== void 0 ? options2.radius : 1;
    this._fallbackFill = options2.fallbackFill;
  }
  radius(value) {
    if (value !== void 0) {
      this._radius = value;
      this.geometryChange();
      return this;
    }
    return this._radius;
  }
  fallbackFill(value) {
    if (value !== void 0) {
      this._fallbackFill = value;
      this.optionsChange();
      return this;
    }
    return this._fallbackFill;
  }
};
var radial_gradient_default = RadialGradient;

// node_modules/@progress/kendo-drawing/dist/es/patterns/pattern.js
var Pattern = class extends group_default {
  get nodeType() {
    return PATTERN;
  }
  constructor(options2) {
    super();
    const { width, height } = options2;
    this._size = size_default.create([width, height]);
    this.id = definitionId();
  }
  size(value) {
    if (value) {
      this._size = size_default.create(value);
      return this;
    }
    return this._size;
  }
};

// node_modules/@progress/kendo-drawing/dist/es/core/base-node.js
var BaseNode = class extends Class {
  constructor(srcElement) {
    super();
    this.childNodes = [];
    this.parent = null;
    if (srcElement) {
      this.srcElement = srcElement;
      this.observe();
    }
  }
  destroy() {
    if (this.srcElement) {
      this.srcElement.removeObserver(this);
    }
    const children = this.childNodes;
    for (let i2 = 0; i2 < children.length; i2++) {
      this.childNodes[i2].destroy();
    }
    this.parent = null;
  }
  load() {
  }
  observe() {
    if (this.srcElement) {
      this.srcElement.addObserver(this);
    }
  }
  append(node) {
    this.childNodes.push(node);
    node.parent = this;
  }
  insertAt(node, pos) {
    this.childNodes.splice(pos, 0, node);
    node.parent = this;
  }
  remove(index, count) {
    const end = index + count;
    for (let i2 = index; i2 < end; i2++) {
      this.childNodes[i2].removeSelf();
    }
    this.childNodes.splice(index, count);
  }
  removeSelf() {
    this.clear();
    this.destroy();
  }
  clear() {
    this.remove(0, this.childNodes.length);
  }
  invalidate() {
    if (this.parent) {
      this.parent.invalidate();
    }
  }
  geometryChange() {
    this.invalidate();
  }
  optionsChange() {
    this.invalidate();
  }
  childrenChange(e2) {
    if (e2.action === "add") {
      this.load(e2.items, e2.index);
    } else if (e2.action === "remove") {
      this.remove(e2.index, e2.items.length);
    }
    this.invalidate();
  }
};
var base_node_default = BaseNode;

// node_modules/@progress/kendo-drawing/dist/es/svg/utils/render-attribute.js
function renderAttr(name, value) {
  return value !== void 0 && value !== null ? ` ${name}="${value}" ` : "";
}

// node_modules/@progress/kendo-drawing/dist/es/svg/utils/render-all-attributes.js
function renderAllAttr(attrs) {
  let output = "";
  for (let i2 = 0; i2 < attrs.length; i2++) {
    output += renderAttr(attrs[i2][0], attrs[i2][1]);
  }
  return output;
}

// node_modules/@progress/kendo-drawing/dist/es/svg/utils/render-style.js
function renderStyle(attrs) {
  let output = "";
  for (let i2 = 0; i2 < attrs.length; i2++) {
    let value = attrs[i2][1];
    if (value !== void 0) {
      output += attrs[i2][0] + ":" + value + ";";
    }
  }
  if (output !== "") {
    return output;
  }
}

// node_modules/@progress/kendo-drawing/dist/es/svg/node-map.js
var NODE_MAP = {};
var node_map_default = NODE_MAP;

// node_modules/@progress/kendo-drawing/dist/es/svg/constants.js
var SVG_NS = "http://www.w3.org/2000/svg";
var NONE = "none";
var POINT_DIGITS = 3;

// node_modules/@progress/kendo-drawing/dist/es/svg/utils/render-svg.js
var renderUsingInnerHTML = (container, svg) => {
  prependElement(container, svg);
};
var renderUsingDOMParser = (container, svg) => {
  const parser = new DOMParser();
  const chartDoc = parser.parseFromString(replaceStyleAttr(svg), "text/xml");
  restoreStyleAttr(chartDoc);
  const importedDoc = document.adoptNode(chartDoc.documentElement);
  container.insertBefore(importedDoc, container.firstChild);
};
var implementation;
var renderSVG = (container, svg) => {
  if (implementation) {
    return implementation(container, svg);
  }
  implementation = renderUsingInnerHTML;
  if (typeof document !== "undefined") {
    const testFragment = "<svg xmlns='" + SVG_NS + "'></svg>";
    const testContainer = document.createElement("div");
    const hasParser = typeof DOMParser !== "undefined";
    testContainer.innerHTML = testFragment;
    if (hasParser && testContainer.firstChild.namespaceURI !== SVG_NS) {
      implementation = renderUsingDOMParser;
    }
  }
  return implementation(container, svg);
};
var render_svg_default = renderSVG;

// node_modules/@progress/kendo-drawing/dist/es/svg/node.js
var TRANSFORM = "transform";
var DefinitionMap = {
  clip: "clip-path",
  fill: "fill"
};
function isDefinition(type, value) {
  return type === "clip" || type === "fill" && (!value || value.nodeType === "Gradient" || value.nodeType === PATTERN);
}
var Node = class extends base_node_default {
  constructor(srcElement, options2) {
    super(srcElement);
    this.definitions = {};
    this.options = options2;
  }
  destroy() {
    if (this.element) {
      this.element._kendoNode = null;
      this.element = null;
    }
    this.clearDefinitions();
    super.destroy();
  }
  load(elements, pos) {
    for (let i2 = 0; i2 < elements.length; i2++) {
      const srcElement = elements[i2];
      const children = srcElement.children;
      const childNode = new node_map_default[srcElement.nodeType](srcElement, this.options);
      if (pos !== void 0) {
        this.insertAt(childNode, pos);
      } else {
        this.append(childNode);
      }
      childNode.createDefinitions();
      if (children && children.length > 0) {
        childNode.load(children);
      }
      const element = this.element;
      if (element) {
        childNode.attachTo(element, pos);
      }
    }
  }
  root() {
    let root = this;
    while (root.parent) {
      root = root.parent;
    }
    return root;
  }
  attachTo(domElement, pos) {
    const container = document.createElement("div");
    render_svg_default(
      container,
      "<svg xmlns='" + SVG_NS + "' version='1.1'>" + this.render() + "</svg>"
    );
    const element = container.firstChild.firstChild;
    if (element) {
      if (pos !== void 0) {
        domElement.insertBefore(element, domElement.childNodes[pos] || null);
      } else {
        domElement.appendChild(element);
      }
      this.setElement(element);
    }
  }
  setElement(element) {
    if (this.element) {
      this.element._kendoNode = null;
    }
    this.element = element;
    this.element._kendoNode = this;
    const nodes = this.childNodes;
    for (let i2 = 0; i2 < nodes.length; i2++) {
      let childElement = element.childNodes[i2];
      nodes[i2].setElement(childElement);
    }
  }
  clear() {
    this.clearDefinitions();
    if (this.element) {
      this.element.innerHTML = "";
    }
    const children = this.childNodes;
    for (let i2 = 0; i2 < children.length; i2++) {
      children[i2].destroy();
    }
    this.childNodes = [];
  }
  removeSelf() {
    if (this.element) {
      const parentNode = this.element.parentNode;
      if (parentNode) {
        parentNode.removeChild(this.element);
      }
      this.element = null;
    }
    super.removeSelf();
  }
  template() {
    return this.renderChildren();
  }
  render() {
    return this.template();
  }
  renderChildren() {
    const nodes = this.childNodes;
    let output = "";
    for (let i2 = 0; i2 < nodes.length; i2++) {
      output += nodes[i2].render();
    }
    return output;
  }
  optionsChange(e2) {
    const { field, value } = e2;
    if (field === "visible") {
      this.css("display", value ? "" : NONE);
    } else if (DefinitionMap[field] && isDefinition(field, value)) {
      this.updateDefinition(field, value);
    } else if (field === "opacity") {
      this.attr("opacity", value);
    } else if (field === "cursor") {
      this.css("cursor", value);
    } else if (field === "id") {
      if (value) {
        this.attr("id", value);
      } else {
        this.removeAttr("id");
      }
    }
    super.optionsChange(e2);
  }
  accessibilityOptionsChange(e2) {
    const { field, value } = e2;
    if (field === "role") {
      if (value) {
        this.attr("role", value);
      } else {
        this.removeAttr("role");
      }
    } else if (field === "ariaLabel") {
      if (value) {
        this.attr("aria-label", htmlEncode(value));
      } else {
        this.removeAttr("aria-label");
      }
    } else if (field === "ariaRoleDescription") {
      if (value) {
        this.attr("aria-roledescription", htmlEncode(value));
      } else {
        this.removeAttr("aria-roledescription");
      }
    } else if (field === "ariaChecked") {
      if (value !== void 0) {
        this.attr("aria-checked", value);
      } else {
        this.removeAttr("aria-checked");
      }
    } else if (field === "className") {
      this.className(value);
    }
  }
  attr(name, value) {
    if (this.element) {
      this.element.setAttribute(name, value);
    }
  }
  allAttr(attrs) {
    for (let i2 = 0; i2 < attrs.length; i2++) {
      this.attr(attrs[i2][0], attrs[i2][1]);
    }
  }
  toggleAttr(name, value) {
    if (value) {
      this.attr(name, value);
    } else {
      this.removeAttr(name);
    }
  }
  css(name, value) {
    if (this.element) {
      this.element.style[name] = value;
    }
  }
  allCss(styles) {
    for (let i2 = 0; i2 < styles.length; i2++) {
      this.css(styles[i2][0], styles[i2][1]);
    }
  }
  className(value) {
    if (this.element) {
      this.element.classList.remove(...this.element.classList);
      if (value) {
        value.split(" ").forEach((item) => {
          if (item) {
            this.element.classList.add(item);
          }
        });
      }
    }
  }
  removeAttr(name) {
    if (this.element) {
      this.element.removeAttribute(name);
    }
  }
  mapTransform(transform2) {
    const attrs = [];
    if (transform2) {
      attrs.push([
        TRANSFORM,
        "matrix(" + transform2.matrix().toString(6) + ")"
      ]);
    }
    return attrs;
  }
  renderTransform() {
    return renderAllAttr(
      this.mapTransform(this.srcElement.transform())
    );
  }
  transformChange(value) {
    if (value) {
      this.allAttr(this.mapTransform(value));
    } else {
      this.removeAttr(TRANSFORM);
    }
  }
  mapStyle() {
    const options2 = this.srcElement.options;
    const style = [["cursor", options2.cursor]];
    if (options2.visible === false) {
      style.push(["display", NONE]);
    }
    return style;
  }
  renderStyle() {
    return renderAttr("style", renderStyle(this.mapStyle(true)));
  }
  renderOpacity() {
    return renderAttr("opacity", this.srcElement.options.opacity);
  }
  renderId() {
    return renderAttr("id", this.srcElement.options.id);
  }
  renderClassName() {
    return renderAttr("class", this.srcElement.options.className);
  }
  renderRole() {
    return renderAttr("role", this.srcElement.options.role);
  }
  renderAriaLabel() {
    let value = this.srcElement.options.ariaLabel;
    if (value) {
      value = htmlEncode(value);
    }
    return renderAttr("aria-label", value);
  }
  renderAriaRoleDescription() {
    let value = this.srcElement.options.ariaRoleDescription;
    if (value) {
      value = htmlEncode(value);
    }
    return renderAttr("aria-roledescription", value);
  }
  renderAriaChecked() {
    return renderAttr("aria-checked", this.srcElement.options.ariaChecked);
  }
  createDefinitions() {
    const srcElement = this.srcElement;
    const definitions = this.definitions;
    if (srcElement) {
      const options2 = srcElement.options;
      let hasDefinitions;
      for (let field in DefinitionMap) {
        let definition = options2.get(field);
        if (definition && isDefinition(field, definition)) {
          definitions[field] = definition;
          hasDefinitions = true;
        }
      }
      if (hasDefinitions) {
        this.definitionChange({
          action: "add",
          definitions
        });
      }
    }
  }
  definitionChange(e2) {
    if (this.parent) {
      this.parent.definitionChange(e2);
    }
  }
  updateDefinition(type, value) {
    const definitions = this.definitions;
    const current = definitions[type];
    const attr = DefinitionMap[type];
    const definition = {};
    if (current) {
      definition[type] = current;
      this.definitionChange({
        action: "remove",
        definitions: definition
      });
      delete definitions[type];
    }
    if (!value) {
      if (current) {
        this.removeAttr(attr);
      }
    } else {
      definition[type] = value;
      this.definitionChange({
        action: "add",
        definitions: definition
      });
      definitions[type] = value;
      this.attr(attr, this.refUrl(value.id));
    }
  }
  clearDefinitions() {
    const definitions = this.definitions;
    this.definitionChange({
      action: "remove",
      definitions
    });
    this.definitions = {};
  }
  renderDefinitions() {
    return renderAllAttr(this.mapDefinitions());
  }
  mapDefinitions() {
    const definitions = this.definitions;
    const attrs = [];
    for (let field in definitions) {
      const value = definitions[field];
      attrs.push([DefinitionMap[field], this.refUrl(value.id)]);
    }
    return attrs;
  }
  refUrl(id) {
    return `url(#${id})`;
  }
};
var node_default = Node;

// node_modules/@progress/kendo-drawing/dist/es/svg/path-node.js
var ATTRIBUTE_MAP = {
  "fill.opacity": "fill-opacity",
  "stroke.color": "stroke",
  "stroke.width": "stroke-width",
  "stroke.opacity": "stroke-opacity"
};
var PathNode = class extends node_default {
  geometryChange() {
    this.attr("d", this.renderData());
    this.invalidate();
  }
  optionsChange(e2) {
    switch (e2.field) {
      case "fill":
        if (e2.value) {
          this.allAttr(this.mapFill(e2.value));
        } else {
          this.removeAttr("fill");
        }
        break;
      case "fill.color":
        this.allAttr(this.mapFill({ color: e2.value }));
        break;
      case "stroke":
        if (e2.value) {
          this.allAttr(this.mapStroke(e2.value));
        } else {
          this.removeAttr("stroke");
        }
        break;
      case "transform":
        this.transformChange(e2.value);
        break;
      default: {
        const name = ATTRIBUTE_MAP[e2.field];
        if (name) {
          this.attr(name, e2.value);
        }
        break;
      }
    }
    this.accessibilityOptionsChange(e2);
    super.optionsChange(e2);
  }
  content() {
    if (this.element) {
      this.element.textContent = this.srcElement.content();
    }
  }
  renderData() {
    return this.srcElement.toString(POINT_DIGITS) || void 0;
  }
  mapStroke(stroke) {
    const attrs = [];
    if (stroke && !isTransparent(stroke.color)) {
      attrs.push(["stroke", stroke.color]);
      attrs.push(["stroke-width", stroke.width]);
      attrs.push(["stroke-linecap", this.renderLinecap(stroke)]);
      attrs.push(["stroke-linejoin", stroke.lineJoin]);
      if (stroke.opacity !== void 0) {
        attrs.push(["stroke-opacity", stroke.opacity]);
      }
      if (stroke.dashType !== void 0) {
        attrs.push(["stroke-dasharray", this.renderDashType(stroke)]);
      }
    } else {
      attrs.push(["stroke", NONE]);
    }
    return attrs;
  }
  renderStroke() {
    return renderAllAttr(
      this.mapStroke(this.srcElement.options.stroke)
    );
  }
  renderDashType(stroke) {
    const { dashType, width = 1 } = stroke;
    if (dashType && dashType !== SOLID) {
      const dashArray = DASH_ARRAYS[dashType.toLowerCase()];
      const result = [];
      for (let i2 = 0; i2 < dashArray.length; i2++) {
        result.push(dashArray[i2] * width);
      }
      return result.join(" ");
    }
  }
  renderLinecap(stroke) {
    const { dashType, lineCap } = stroke;
    return dashType && dashType !== SOLID ? BUTT : lineCap;
  }
  mapFill(fill) {
    const attrs = [];
    if (!(fill && (fill.nodeType === "Gradient" || fill.nodeType === PATTERN))) {
      if (fill && !isTransparent(fill.color)) {
        attrs.push(["fill", fill.color]);
        if (fill.opacity !== void 0) {
          attrs.push(["fill-opacity", fill.opacity]);
        }
      } else {
        attrs.push(["fill", NONE]);
      }
    }
    return attrs;
  }
  renderFill() {
    return renderAllAttr(
      this.mapFill(this.srcElement.options.fill)
    );
  }
  template() {
    return `<path ${this.renderId()} ${this.renderStyle()} ${this.renderOpacity()} ${renderAttr("d", this.renderData())}${this.renderStroke()}${this.renderFill()}${this.renderDefinitions()}${this.renderTransform()}${this.renderClassName()} ${this.renderRole()}${this.renderAriaLabel()} ${this.renderAriaRoleDescription()}${this.renderAriaChecked()} ></path>`;
  }
};
var path_node_default = PathNode;

// node_modules/@progress/kendo-drawing/dist/es/svg/arc-node.js
var ArcNode = class extends path_node_default {
  renderData() {
    return this.srcElement.toPath().toString(POINT_DIGITS);
  }
};
var arc_node_default = ArcNode;

// node_modules/@progress/kendo-drawing/dist/es/svg/circle-node.js
var CircleNode = class extends path_node_default {
  geometryChange() {
    const center = this.center();
    this.attr("cx", center.x);
    this.attr("cy", center.y);
    this.attr("r", this.radius());
    this.invalidate();
  }
  center() {
    return this.srcElement.geometry().center;
  }
  radius() {
    return this.srcElement.geometry().radius;
  }
  template() {
    return `<circle ${this.renderId()} ${this.renderStyle()} ${this.renderOpacity()}cx='${this.center().x}' cy='${this.center().y}' r='${this.radius()}'${this.renderStroke()} ${this.renderFill()} ${this.renderDefinitions()}${this.renderClassName()} ${this.renderRole()}${this.renderAriaLabel()} ${this.renderAriaRoleDescription()}${this.renderAriaChecked()} ${this.renderTransform()} ></circle>`;
  }
};
var circle_node_default = CircleNode;

// node_modules/@progress/kendo-drawing/dist/es/svg/group-node.js
var GroupNode = class extends node_default {
  template() {
    return `<g${this.renderId() + this.renderTransform() + this.renderClassName() + this.renderStyle() + this.renderOpacity() + this.renderRole() + this.renderAriaLabel() + this.renderAriaRoleDescription() + this.renderAriaChecked() + this.renderDefinitions()}>${this.renderChildren()}</g>`;
  }
  optionsChange(e2) {
    const { field, value } = e2;
    if (field === "transform") {
      this.transformChange(value);
    }
    this.accessibilityOptionsChange(e2);
    super.optionsChange(e2);
  }
};
var group_node_default = GroupNode;

// node_modules/@progress/kendo-drawing/dist/es/svg/image-node.js
var ImageNode = class extends path_node_default {
  geometryChange() {
    this.allAttr(this.mapPosition());
    this.invalidate();
  }
  optionsChange(e2) {
    if (e2.field === "src") {
      this.allAttr(this.mapSource());
    }
    super.optionsChange(e2);
  }
  mapPosition() {
    const rect = this.srcElement.rect();
    const tl = rect.topLeft();
    return [
      ["x", tl.x],
      ["y", tl.y],
      ["width", rect.width() + "px"],
      ["height", rect.height() + "px"]
    ];
  }
  renderPosition() {
    return renderAllAttr(this.mapPosition());
  }
  mapSource(encode) {
    let src = this.srcElement.src();
    if (encode) {
      src = htmlEncode(src);
    }
    return [["xlink:href", src]];
  }
  renderSource() {
    return renderAllAttr(this.mapSource(true));
  }
  template() {
    return `<image preserveAspectRatio='none' ${this.renderId()} ${this.renderStyle()} ${this.renderTransform()} ${this.renderOpacity()}${this.renderPosition()} ${this.renderSource()} ${this.renderDefinitions()}${this.renderClassName()} ${this.renderRole()}${this.renderAriaLabel()} ${this.renderAriaRoleDescription()}${this.renderAriaChecked()} ></image>`;
  }
};
var image_node_default = ImageNode;

// node_modules/@progress/kendo-drawing/dist/es/svg/multi-path-node.js
var MultiPathNode = class extends path_node_default {
  renderData() {
    return this.srcElement.toString(POINT_DIGITS) || "undefined";
  }
};
var multi_path_node_default = MultiPathNode;

// node_modules/@progress/kendo-drawing/dist/es/svg/rect-node.js
var RectNode = class extends path_node_default {
  geometryChange() {
    const geometry = this.srcElement.geometry();
    this.attr("x", geometry.origin.x);
    this.attr("y", geometry.origin.y);
    this.attr("width", geometry.size.width);
    this.attr("height", geometry.size.height);
    this.attr("rx", geometry.cornerRadius[0]);
    this.attr("ry", geometry.cornerRadius[1]);
    this.invalidate();
  }
  size() {
    return this.srcElement.geometry().size;
  }
  origin() {
    return this.srcElement.geometry().origin;
  }
  rx() {
    return this.srcElement.geometry().cornerRadius[0];
  }
  ry() {
    return this.srcElement.geometry().cornerRadius[1];
  }
  template() {
    return `<rect ${this.renderId()} ${this.renderStyle()} ${this.renderOpacity()} x='${this.origin().x}' y='${this.origin().y}' rx='${this.rx()}' ry='${this.ry()}' width='${this.size().width}' height='${this.size().height}' ${this.renderStroke()} ${this.renderFill()} ${this.renderDefinitions()} ${this.renderTransform()}${this.renderClassName()} ${this.renderRole()}${this.renderAriaLabel()} ${this.renderAriaRoleDescription()}${this.renderAriaChecked()} />`;
  }
};
var rect_node_default = RectNode;

// node_modules/@progress/kendo-drawing/dist/es/svg/text-node.js
var ENTITY_REGEX = /&(?:[a-zA-Z]+|#\d+);/g;
function decodeEntities(text) {
  if (!text || typeof text !== "string" || !ENTITY_REGEX.test(text)) {
    return text;
  }
  const element = decodeEntities._element;
  ENTITY_REGEX.lastIndex = 0;
  return text.replace(ENTITY_REGEX, (match) => {
    element.innerHTML = match;
    return element.textContent || element.innerText;
  });
}
if (typeof document !== "undefined") {
  decodeEntities._element = document.createElement("span");
}
var TextNode = class extends path_node_default {
  geometryChange() {
    const pos = this.pos();
    this.attr("x", pos.x);
    this.attr("y", pos.y);
    this.invalidate();
  }
  optionsChange(e2) {
    if (e2.field === "font") {
      this.attr("style", renderStyle(this.mapStyle()));
      this.geometryChange();
    } else if (e2.field === "content") {
      super.content(this.srcElement.content());
    }
    super.optionsChange(e2);
  }
  mapStyle(encode) {
    const style = super.mapStyle(encode);
    let font = this.srcElement.options.font;
    if (encode) {
      font = htmlEncode(font);
    }
    style.push(["font", font], ["white-space", "pre"]);
    return style;
  }
  pos() {
    const pos = this.srcElement.position();
    const size = this.srcElement.measure();
    return pos.clone().setY(pos.y + size.baseline);
  }
  renderContent() {
    let content = this.srcElement.content();
    content = decodeEntities(content);
    content = htmlEncode(content);
    return normalizeText(content);
  }
  renderTextAnchor() {
    let anchor2;
    if ((this.options || {}).rtl && !(support_default.browser.msie || support_default.browser.edge)) {
      anchor2 = "end";
    }
    return renderAttr("text-anchor", anchor2);
  }
  renderPaintOrder() {
    const paintOrder = this.srcElement.options.paintOrder;
    return paintOrder ? renderAttr("paint-order", paintOrder) : "";
  }
  template() {
    return `<text ${this.renderId()} ${this.renderTextAnchor()} ${this.renderStyle()} ${this.renderOpacity()}x='${this.pos().x}' y='${this.pos().y}' ${this.renderStroke()} ${this.renderTransform()} ${this.renderDefinitions()}${this.renderPaintOrder()}${this.renderFill()}${this.renderClassName()} ${this.renderRole()}${this.renderAriaLabel()} ${this.renderAriaRoleDescription()}${this.renderAriaChecked()}>${this.renderContent()}</text>`;
  }
};
var text_node_default = TextNode;

// node_modules/@progress/kendo-drawing/dist/es/svg/surface.js
node_map_default.Arc = arc_node_default;
node_map_default.Circle = circle_node_default;
node_map_default.Group = group_node_default;
node_map_default.Image = image_node_default;
node_map_default.MultiPath = multi_path_node_default;
node_map_default.Path = path_node_default;
node_map_default.Rect = rect_node_default;
node_map_default.Text = text_node_default;

// node_modules/@progress/kendo-drawing/dist/es/canvas/node-map.js
var NODE_MAP2 = {};
var node_map_default2 = NODE_MAP2;

// node_modules/@progress/kendo-drawing/dist/es/canvas/node.js
var Node2 = class extends base_node_default {
  constructor(srcElement) {
    super(srcElement);
    if (srcElement) {
      this.initClip();
    }
  }
  initClip() {
    const clip = this.srcElement.clip();
    if (clip) {
      this.clip = clip;
      clip.addObserver(this);
    }
  }
  clear() {
    if (this.srcElement) {
      this.srcElement.removeObserver(this);
    }
    this.clearClip();
    super.clear();
  }
  clearClip() {
    if (this.clip) {
      this.clip.removeObserver(this);
      delete this.clip;
    }
  }
  setClip(ctx) {
    if (this.clip) {
      ctx.beginPath();
      const clipNode = new node_map_default2[this.clip.nodeType](this.clip);
      clipNode.renderPoints(ctx, this.clip);
      ctx.clip("evenodd");
    }
  }
  optionsChange(e2) {
    if (e2.field === "clip") {
      this.clearClip();
      this.initClip();
    }
    super.optionsChange(e2);
  }
  setTransform(ctx) {
    if (this.srcElement) {
      const transform2 = this.srcElement.transform();
      if (transform2) {
        ctx.transform.apply(ctx, transform2.matrix().toArray(6));
      }
    }
  }
  loadElements(elements, pos, cors) {
    for (let i2 = 0; i2 < elements.length; i2++) {
      let srcElement = elements[i2];
      let children = srcElement.children;
      let childNode = new node_map_default2[srcElement.nodeType](srcElement, cors);
      if (children && children.length > 0) {
        childNode.load(children, pos, cors);
      }
      if (pos !== void 0) {
        this.insertAt(childNode, pos);
      } else {
        this.append(childNode);
      }
    }
  }
  load(elements, pos, cors) {
    this.loadElements(elements, pos, cors);
    this.invalidate();
  }
  setOpacity(ctx) {
    if (this.srcElement) {
      const opacity = this.srcElement.opacity();
      if (opacity !== void 0) {
        this.globalAlpha(ctx, opacity);
      }
    }
  }
  globalAlpha(ctx, value) {
    let opactity = value;
    if (opactity && ctx.globalAlpha) {
      opactity *= ctx.globalAlpha;
    }
    ctx.globalAlpha = opactity;
  }
  visible() {
    const src = this.srcElement;
    return !src || src && src.options.visible !== false;
  }
};
var node_default2 = Node2;

// node_modules/@progress/kendo-drawing/dist/es/canvas/group-node.js
var GroupNode2 = class extends traversable_default(node_default2, "childNodes") {
  renderTo(ctx) {
    if (!this.visible()) {
      return;
    }
    ctx.save();
    this.setTransform(ctx);
    this.setClip(ctx);
    this.setOpacity(ctx);
    const childNodes = this.childNodes;
    for (let i2 = 0; i2 < childNodes.length; i2++) {
      let child = childNodes[i2];
      if (child.visible()) {
        child.renderTo(ctx);
      }
    }
    ctx.restore();
  }
};
var group_node_default2 = GroupNode2;

// node_modules/@progress/kendo-drawing/dist/es/canvas/root-node.js
var FRAME_DELAY = 1e3 / 60;
var RootNode = class extends traversable_default(group_node_default2, "childNodes") {
  constructor(canvas, size) {
    super();
    this.canvas = canvas;
    this.size = size;
    this.ctx = canvas.getContext("2d");
    const invalidateHandler = this._invalidate.bind(this);
    this.invalidate = throttle(() => {
      animation_frame_default(invalidateHandler);
    }, FRAME_DELAY);
  }
  destroy() {
    super.destroy();
    this.canvas = null;
    this.ctx = null;
  }
  load(elements, pos, cors) {
    this.loadElements(elements, pos, cors);
    this._invalidate();
  }
  _rescale(scale) {
    const { canvas, size } = this;
    canvas.width = size.width * scale;
    canvas.height = size.height * scale;
    this.ctx.scale(scale, scale);
  }
  _devicePixelRatio() {
    if (typeof window.devicePixelRatio === "number") {
      return window.devicePixelRatio;
    }
    return 1;
  }
  _invalidate(options2) {
    if (!this.ctx) {
      return;
    }
    const fixedScale = options2 && options2.fixedScale;
    const scale = fixedScale ? 1 : this._devicePixelRatio();
    this._rescale(scale);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.renderTo(this.ctx);
  }
};

// node_modules/@progress/kendo-drawing/dist/es/search/shapes-quad-tree.js
var LEVEL_STEP = BigInt(1e4);

// node_modules/@progress/kendo-drawing/dist/es/canvas/utils/render-path.js
function renderPath(ctx, path) {
  const segments = path.segments;
  if (segments.length === 0) {
    return;
  }
  let segment = segments[0];
  let anchor2 = segment.anchor();
  ctx.moveTo(anchor2.x, anchor2.y);
  for (let i2 = 1; i2 < segments.length; i2++) {
    segment = segments[i2];
    anchor2 = segment.anchor();
    let prevSeg = segments[i2 - 1];
    let prevOut = prevSeg.controlOut();
    let controlIn = segment.controlIn();
    if (prevOut && controlIn) {
      ctx.bezierCurveTo(
        prevOut.x,
        prevOut.y,
        controlIn.x,
        controlIn.y,
        anchor2.x,
        anchor2.y
      );
    } else {
      ctx.lineTo(anchor2.x, anchor2.y);
    }
  }
  if (path.options.closed) {
    ctx.closePath();
  }
}

// node_modules/@progress/kendo-drawing/dist/es/canvas/path-node.js
function addGradientStops(gradient, stops) {
  for (let idx = 0; idx < stops.length; idx++) {
    let stop = stops[idx];
    let color = parseColor(stop.color());
    color.a *= stop.opacity();
    gradient.addColorStop(stop.offset(), color.toCssRgba());
  }
}
var PathNode2 = class extends node_default2 {
  renderTo(ctx) {
    ctx.save();
    this.setTransform(ctx);
    this.setClip(ctx);
    this.setOpacity(ctx);
    ctx.beginPath();
    this.renderPoints(ctx, this.srcElement);
    this.setLineDash(ctx);
    this.setLineCap(ctx);
    this.setLineJoin(ctx);
    this.setFill(ctx);
    this.setStroke(ctx);
    ctx.restore();
  }
  setFill(ctx) {
    const fill = this.srcElement.options.fill;
    let hasFill = false;
    if (fill) {
      if (fill.nodeType === "Gradient") {
        this.setGradientFill(ctx, fill);
        hasFill = true;
      } else if (fill.nodeType === PATTERN) {
        this.setPatternFill(ctx, fill);
        hasFill = true;
      } else if (!isTransparent(fill.color)) {
        ctx.fillStyle = fill.color;
        ctx.save();
        this.globalAlpha(ctx, fill.opacity);
        ctx.fill();
        ctx.restore();
        hasFill = true;
      }
    }
    return hasFill;
  }
  setGradientFill(ctx, fill) {
    const bbox = this.srcElement.rawBBox();
    let gradient;
    if (fill instanceof linear_gradient_default) {
      let start = fill.start();
      let end = fill.end();
      gradient = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
    } else if (fill instanceof radial_gradient_default) {
      let center = fill.center();
      gradient = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, fill.radius());
    }
    addGradientStops(gradient, fill.stops);
    ctx.save();
    if (!fill.userSpace()) {
      ctx.transform(bbox.width(), 0, 0, bbox.height(), bbox.origin.x, bbox.origin.y);
    }
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  }
  setPatternFill(ctx, pattern) {
    const size = pattern.size();
    const patternCanvas = document.createElement("canvas");
    const patternContext = patternCanvas.getContext("2d");
    patternCanvas.width = size.getWidth();
    patternCanvas.height = size.getHeight();
    this.childNodes.length = 0;
    this.loadElements(pattern.children);
    const childNodes = this.childNodes;
    for (let i2 = 0; i2 < childNodes.length; i2++) {
      let child = childNodes[i2];
      child.renderTo(patternContext);
    }
    ctx.save();
    ctx.fillStyle = ctx.createPattern(patternCanvas, "repeat");
    ctx.fill();
    ctx.restore();
  }
  setStroke(ctx) {
    const stroke = this.srcElement.options.stroke;
    if (stroke && !isTransparent(stroke.color) && stroke.width > 0) {
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = valueOrDefault(stroke.width, 1);
      ctx.lineJoin = valueOrDefault(stroke.lineJoin, ctx.lineJoin);
      ctx.save();
      this.globalAlpha(ctx, stroke.opacity);
      ctx.stroke();
      ctx.restore();
      return true;
    }
  }
  dashType() {
    const stroke = this.srcElement.options.stroke;
    if (stroke && stroke.dashType) {
      return stroke.dashType.toLowerCase();
    }
  }
  setLineDash(ctx) {
    const dashType = this.dashType();
    if (dashType && dashType !== SOLID) {
      const dashArray = DASH_ARRAYS[dashType];
      if (ctx.setLineDash) {
        ctx.setLineDash(dashArray);
      } else {
        ctx.mozDash = dashArray;
        ctx.webkitLineDash = dashArray;
      }
    }
  }
  setLineCap(ctx) {
    const dashType = this.dashType();
    const stroke = this.srcElement.options.stroke;
    if (dashType && dashType !== SOLID) {
      ctx.lineCap = BUTT;
    } else if (stroke && stroke.lineCap) {
      ctx.lineCap = stroke.lineCap;
    }
  }
  setLineJoin(ctx) {
    const stroke = this.srcElement.options.stroke;
    if (stroke && stroke.lineJoin) {
      ctx.lineJoin = stroke.lineJoin;
    }
  }
  renderPoints(ctx, path) {
    renderPath(ctx, path);
  }
};
var path_node_default2 = PathNode2;

// node_modules/@progress/kendo-drawing/dist/es/canvas/arc-node.js
var ArcNode2 = class extends path_node_default2 {
  renderPoints(ctx) {
    const path = this.srcElement.toPath();
    renderPath(ctx, path);
  }
};
var arc_node_default2 = ArcNode2;

// node_modules/@progress/kendo-drawing/dist/es/canvas/circle-node.js
var CircleNode2 = class extends path_node_default2 {
  renderPoints(ctx) {
    const { center, radius } = this.srcElement.geometry();
    ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
  }
};
var circle_node_default2 = CircleNode2;

// node_modules/@progress/kendo-drawing/dist/es/canvas/image-node.js
var ImageNode2 = class extends path_node_default2 {
  constructor(srcElement, cors) {
    super(srcElement);
    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
    this.loading = createPromise();
    const img = this.img = new Image();
    const src = srcElement.src();
    if (cors && !/^data:/i.test(src)) {
      img.crossOrigin = cors;
    }
    if (src) {
      img.src = src;
    }
    if (img.complete) {
      this.onLoad();
    } else {
      img.onload = this.onLoad;
      img.onerror = this.onError;
    }
  }
  renderTo(ctx) {
    if (this.loading.state() === "resolved") {
      ctx.save();
      this.setTransform(ctx);
      this.setClip(ctx);
      this.drawImage(ctx);
      ctx.restore();
    }
  }
  optionsChange(e2) {
    if (e2.field === "src") {
      this.loading = createPromise();
      this.img.src = this.srcElement.src();
    } else {
      super.optionsChange(e2);
    }
  }
  onLoad() {
    this.loading.resolve();
    this.invalidate();
  }
  onError() {
    this.loading.reject(new Error(
      "Unable to load image '" + this.img.src + "'. Check for connectivity and verify CORS headers."
    ));
  }
  drawImage(ctx) {
    const rect = this.srcElement.rect();
    const topLeft = rect.topLeft();
    ctx.drawImage(
      this.img,
      topLeft.x,
      topLeft.y,
      rect.width(),
      rect.height()
    );
  }
};
var image_node_default2 = ImageNode2;

// node_modules/@progress/kendo-drawing/dist/es/canvas/multi-path-node.js
var MultiPathNode2 = class extends path_node_default2 {
  renderPoints(ctx) {
    const paths = this.srcElement.paths;
    for (let i2 = 0; i2 < paths.length; i2++) {
      renderPath(ctx, paths[i2]);
    }
  }
};
var multi_path_node_default2 = MultiPathNode2;

// node_modules/@progress/kendo-drawing/dist/es/canvas/rect-node.js
var RectNode2 = class extends path_node_default2 {
  renderPoints(ctx) {
    const geometry = this.srcElement.geometry();
    const [rx, ry] = geometry.cornerRadius;
    if (rx === 0 && ry === 0) {
      const { origin, size } = geometry;
      ctx.rect(origin.x, origin.y, size.width, size.height);
    } else {
      super.renderPoints(ctx, Path.fromRect(geometry));
    }
  }
};
var rect_node_default2 = RectNode2;

// node_modules/@progress/kendo-drawing/dist/es/canvas/text-node.js
var TextNode2 = class extends path_node_default2 {
  renderTo(ctx) {
    const text = this.srcElement;
    const pos = text.position();
    const size = text.measure();
    ctx.save();
    this.setTransform(ctx);
    this.setClip(ctx);
    this.setOpacity(ctx);
    ctx.beginPath();
    ctx.font = text.options.font;
    ctx.textAlign = "left";
    if (text.options.paintOrder === "stroke") {
      this.stroke(ctx, text, pos, size);
      this.fill(ctx, text, pos, size);
    } else {
      this.fill(ctx, text, pos, size);
      this.stroke(ctx, text, pos, size);
    }
    ctx.restore();
  }
  stroke(ctx, text, pos, size) {
    if (this.setStroke(ctx)) {
      this.setLineDash(ctx);
      ctx.strokeText(text.content(), pos.x, pos.y + size.baseline);
    }
  }
  fill(ctx, text, pos, size) {
    if (this.setFill(ctx)) {
      ctx.fillText(text.content(), pos.x, pos.y + size.baseline);
    }
  }
};
var text_node_default2 = TextNode2;

// node_modules/@progress/kendo-drawing/dist/es/canvas/surface.js
node_map_default2.Arc = arc_node_default2;
node_map_default2.Circle = circle_node_default2;
node_map_default2.Group = group_node_default2;
node_map_default2.Image = image_node_default2;
node_map_default2.MultiPath = multi_path_node_default2;
node_map_default2.Path = path_node_default2;
node_map_default2.Rect = rect_node_default2;
node_map_default2.Text = text_node_default2;

// node_modules/@progress/kendo-drawing/dist/es/pdf/utils.js
var HAS_TYPED_ARRAYS = typeof Uint8Array !== "undefined" && support_default.browser && (!support_default.browser.msie || support_default.browser.version > 9);
var BASE64 = /* @__PURE__ */ (function() {
  var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  return {
    decode: function(str) {
      var input = str.replace(/[^A-Za-z0-9\+\/\=]/g, ""), i2 = 0, n2 = input.length, output = [];
      while (i2 < n2) {
        var enc1 = keyStr.indexOf(input.charAt(i2++));
        var enc2 = keyStr.indexOf(input.charAt(i2++));
        var enc3 = keyStr.indexOf(input.charAt(i2++));
        var enc4 = keyStr.indexOf(input.charAt(i2++));
        var chr1 = enc1 << 2 | enc2 >>> 4;
        var chr2 = (enc2 & 15) << 4 | enc3 >>> 2;
        var chr3 = (enc3 & 3) << 6 | enc4;
        output.push(chr1);
        if (enc3 != 64) {
          output.push(chr2);
        }
        if (enc4 != 64) {
          output.push(chr3);
        }
      }
      return output;
    },
    encode: function(bytes) {
      var i2 = 0, n2 = bytes.length;
      var output = "";
      while (i2 < n2) {
        var chr1 = bytes[i2++];
        var chr2 = bytes[i2++];
        var chr3 = bytes[i2++];
        var enc1 = chr1 >>> 2;
        var enc2 = (chr1 & 3) << 4 | chr2 >>> 4;
        var enc3 = (chr2 & 15) << 2 | chr3 >>> 6;
        var enc4 = chr3 & 63;
        if (i2 - n2 == 2) {
          enc3 = enc4 = 64;
        } else if (i2 - n2 == 1) {
          enc4 = 64;
        }
        output += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
      }
      return output;
    }
  };
})();
function BinaryStream(data) {
  var offset = 0, length = 0;
  if (data == null) {
    data = HAS_TYPED_ARRAYS ? new Uint8Array(256) : [];
  } else {
    length = data.length;
  }
  var ensure = HAS_TYPED_ARRAYS ? function(len) {
    if (len >= data.length) {
      var tmp = new Uint8Array(Math.max(len + 256, data.length * 2));
      tmp.set(data, 0);
      data = tmp;
    }
  } : function() {
  };
  var get = HAS_TYPED_ARRAYS ? function() {
    return new Uint8Array(data.buffer, 0, length);
  } : function() {
    return data;
  };
  var write = HAS_TYPED_ARRAYS ? function(bytes) {
    if (typeof bytes == "string") {
      return writeString(bytes);
    }
    var len = bytes.length;
    ensure(offset + len);
    data.set(bytes, offset);
    offset += len;
    if (offset > length) {
      length = offset;
    }
  } : function(bytes) {
    if (typeof bytes == "string") {
      return writeString(bytes);
    }
    for (var i2 = 0; i2 < bytes.length; ++i2) {
      writeByte(bytes[i2]);
    }
  };
  var slice3 = HAS_TYPED_ARRAYS ? function(start, length2) {
    if (data.buffer.slice) {
      return new Uint8Array(data.buffer.slice(start, start + length2));
    } else {
      var x = new Uint8Array(length2);
      x.set(new Uint8Array(data.buffer, start, length2));
      return x;
    }
  } : function(start, length2) {
    return data.slice(start, start + length2);
  };
  function eof() {
    return offset >= length;
  }
  function readByte() {
    return offset < length ? data[offset++] : 0;
  }
  function writeByte(b) {
    ensure(offset);
    data[offset++] = b & 255;
    if (offset > length) {
      length = offset;
    }
  }
  function readShort() {
    return readByte() << 8 | readByte();
  }
  function writeShort(w2) {
    writeByte(w2 >> 8);
    writeByte(w2);
  }
  function readShort_() {
    var w2 = readShort();
    return w2 >= 32768 ? w2 - 65536 : w2;
  }
  function writeShort_(w2) {
    writeShort(w2 < 0 ? w2 + 65536 : w2);
  }
  function readLong() {
    return readShort() * 65536 + readShort();
  }
  function writeLong(w2) {
    writeShort(w2 >>> 16 & 65535);
    writeShort(w2 & 65535);
  }
  function readLong_() {
    var w2 = readLong();
    return w2 >= 2147483648 ? w2 - 4294967296 : w2;
  }
  function writeLong_(w2) {
    writeLong(w2 < 0 ? w2 + 4294967296 : w2);
  }
  function readFixed() {
    return readLong() / 65536;
  }
  function writeFixed(f2) {
    writeLong(Math.round(f2 * 65536));
  }
  function readFixed_() {
    return readLong_() / 65536;
  }
  function writeFixed_(f2) {
    writeLong_(Math.round(f2 * 65536));
  }
  function read(len) {
    return times(len, readByte);
  }
  function readString(len) {
    return String.fromCharCode.apply(String, read(len));
  }
  function writeString(str) {
    for (var i2 = 0; i2 < str.length; ++i2) {
      writeByte(str.charCodeAt(i2));
    }
  }
  function times(n2, reader) {
    for (var ret = new Array(n2), i2 = 0; i2 < n2; ++i2) {
      ret[i2] = reader();
    }
    return ret;
  }
  var stream = {
    eof,
    readByte,
    writeByte,
    readShort,
    writeShort,
    readLong,
    writeLong,
    readFixed,
    writeFixed,
    // signed numbers.
    readShort_,
    writeShort_,
    readLong_,
    writeLong_,
    readFixed_,
    writeFixed_,
    read,
    write,
    readString,
    writeString,
    times,
    get,
    slice: slice3,
    offset: function(pos) {
      if (pos != null) {
        offset = pos;
        return stream;
      }
      return offset;
    },
    skip: function(nbytes) {
      offset += nbytes;
    },
    toString: function() {
      throw new Error("FIX CALLER.  BinaryStream is no longer convertible to string!");
    },
    length: function() {
      return length;
    },
    saveExcursion: function(f2) {
      var pos = offset;
      try {
        return f2();
      } finally {
        offset = pos;
      }
    },
    writeBase64: function(base64) {
      if (window.atob) {
        writeString(window.atob(base64));
      } else {
        write(BASE64.decode(base64));
      }
    },
    base64: function() {
      return BASE64.encode(get());
    }
  };
  return stream;
}
function ucs2decode(string) {
  var output = [], counter = 0, length = string.length, value, extra;
  while (counter < length) {
    value = string.charCodeAt(counter++);
    if (value >= 55296 && value <= 56319 && counter < length) {
      extra = string.charCodeAt(counter++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function ucs2encode(array) {
  return array.map(function(value) {
    var output = "";
    if (value > 65535) {
      value -= 65536;
      output += String.fromCharCode(value >>> 10 & 1023 | 55296);
      value = 56320 | value & 1023;
    }
    output += String.fromCharCode(value);
    return output;
  }).join("");
}
function atobUint8Array(base64) {
  const data = window.atob(base64);
  const result = new Uint8Array(data.length);
  for (let idx = 0; idx < data.length; idx++) {
    result[idx] = data.charCodeAt(idx);
  }
  return result;
}
function createUint8Array(data) {
  const result = new Uint8Array(data.length);
  for (let idx = 0; idx < data.length; idx++) {
    result[idx] = data[idx];
  }
  return result;
}
function base64ToUint8Array(base64) {
  if (window.atob) {
    return atobUint8Array(base64);
  }
  return createUint8Array(BASE64.decode(base64));
}

// node_modules/@progress/kendo-drawing/dist/es/pdf/ttf.js
function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function sortedKeys(obj) {
  return Object.keys(obj).sort(function(a2, b) {
    return a2 - b;
  }).map(parseFloat);
}
var Directory = class {
  constructor(data) {
    this.raw = data;
    this.scalerType = data.readLong();
    this.tableCount = data.readShort();
    this.searchRange = data.readShort();
    this.entrySelector = data.readShort();
    this.rangeShift = data.readShort();
    var tables = this.tables = {};
    for (var i2 = 0; i2 < this.tableCount; ++i2) {
      var entry = {
        tag: data.readString(4),
        checksum: data.readLong(),
        offset: data.readLong(),
        length: data.readLong()
      };
      tables[entry.tag] = entry;
    }
  }
  readTable(name, Ctor) {
    var def = this.tables[name];
    if (!def) {
      throw new Error("Table " + name + " not found in directory");
    }
    return this[name] = def.table = new Ctor(this, def);
  }
  render(tables) {
    var tableCount = Object.keys(tables).length;
    var maxpow2 = Math.pow(2, Math.floor(Math.log(tableCount) / Math.LN2));
    var searchRange = maxpow2 * 16;
    var entrySelector = Math.floor(Math.log(maxpow2) / Math.LN2);
    var rangeShift = tableCount * 16 - searchRange;
    var out = BinaryStream();
    out.writeLong(this.scalerType);
    out.writeShort(tableCount);
    out.writeShort(searchRange);
    out.writeShort(entrySelector);
    out.writeShort(rangeShift);
    var directoryLength = tableCount * 16;
    var offset = out.offset() + directoryLength;
    var headOffset = null;
    var tableData = BinaryStream();
    for (var tag in tables) {
      if (hasOwnProperty(tables, tag)) {
        var table = tables[tag];
        out.writeString(tag);
        out.writeLong(this.checksum(table));
        out.writeLong(offset);
        out.writeLong(table.length);
        tableData.write(table);
        if (tag == "head") {
          headOffset = offset;
        }
        offset += table.length;
        while (offset % 4) {
          tableData.writeByte(0);
          offset++;
        }
      }
    }
    out.write(tableData.get());
    var sum = this.checksum(out.get());
    var adjustment = 2981146554 - sum;
    out.offset(headOffset + 8);
    out.writeLong(adjustment);
    return out.get();
  }
  checksum(data) {
    data = BinaryStream(data);
    var sum = 0;
    while (!data.eof()) {
      sum += data.readLong();
    }
    return sum & 4294967295;
  }
};
var Table = class {
  constructor(file, def) {
    this.definition = def;
    this.length = def.length;
    this.offset = def.offset;
    this.file = file;
    this.rawData = file.raw;
    this.parse(file.raw);
  }
  raw() {
    return this.rawData.slice(this.offset, this.length);
  }
  parse() {
  }
  // abstract
};
var HeadTable = class extends Table {
  parse(data) {
    data.offset(this.offset);
    this.version = data.readLong();
    this.revision = data.readLong();
    this.checkSumAdjustment = data.readLong();
    this.magicNumber = data.readLong();
    this.flags = data.readShort();
    this.unitsPerEm = data.readShort();
    this.created = data.read(8);
    this.modified = data.read(8);
    this.xMin = data.readShort_();
    this.yMin = data.readShort_();
    this.xMax = data.readShort_();
    this.yMax = data.readShort_();
    this.macStyle = data.readShort();
    this.lowestRecPPEM = data.readShort();
    this.fontDirectionHint = data.readShort_();
    this.indexToLocFormat = data.readShort_();
    this.glyphDataFormat = data.readShort_();
  }
  render(indexToLocFormat) {
    var out = BinaryStream();
    out.writeLong(this.version);
    out.writeLong(this.revision);
    out.writeLong(0);
    out.writeLong(this.magicNumber);
    out.writeShort(this.flags);
    out.writeShort(this.unitsPerEm);
    out.write(this.created);
    out.write(this.modified);
    out.writeShort_(this.xMin);
    out.writeShort_(this.yMin);
    out.writeShort_(this.xMax);
    out.writeShort_(this.yMax);
    out.writeShort(this.macStyle);
    out.writeShort(this.lowestRecPPEM);
    out.writeShort_(this.fontDirectionHint);
    out.writeShort_(indexToLocFormat);
    out.writeShort_(this.glyphDataFormat);
    return out.get();
  }
};
var LocaTable = class extends Table {
  parse(data) {
    data.offset(this.offset);
    var format = this.file.head.indexToLocFormat;
    if (format === 0) {
      this.offsets = data.times(this.length / 2, function() {
        return 2 * data.readShort();
      });
    } else {
      this.offsets = data.times(this.length / 4, data.readLong);
    }
  }
  offsetOf(id) {
    return this.offsets[id];
  }
  lengthOf(id) {
    return this.offsets[id + 1] - this.offsets[id];
  }
  render(offsets) {
    var out = BinaryStream();
    var needsLongFormat = offsets[offsets.length - 1] > 65535;
    for (var i2 = 0; i2 < offsets.length; ++i2) {
      if (needsLongFormat) {
        out.writeLong(offsets[i2]);
      } else {
        out.writeShort(offsets[i2] / 2);
      }
    }
    return {
      format: needsLongFormat ? 1 : 0,
      table: out.get()
    };
  }
};
var HheaTable = class extends Table {
  parse(data) {
    data.offset(this.offset);
    this.version = data.readLong();
    this.ascent = data.readShort_();
    this.descent = data.readShort_();
    this.lineGap = data.readShort_();
    this.advanceWidthMax = data.readShort();
    this.minLeftSideBearing = data.readShort_();
    this.minRightSideBearing = data.readShort_();
    this.xMaxExtent = data.readShort_();
    this.caretSlopeRise = data.readShort_();
    this.caretSlopeRun = data.readShort_();
    this.caretOffset = data.readShort_();
    data.skip(4 * 2);
    this.metricDataFormat = data.readShort_();
    this.numOfLongHorMetrics = data.readShort();
  }
  render(ids) {
    var out = BinaryStream();
    out.writeLong(this.version);
    out.writeShort_(this.ascent);
    out.writeShort_(this.descent);
    out.writeShort_(this.lineGap);
    out.writeShort(this.advanceWidthMax);
    out.writeShort_(this.minLeftSideBearing);
    out.writeShort_(this.minRightSideBearing);
    out.writeShort_(this.xMaxExtent);
    out.writeShort_(this.caretSlopeRise);
    out.writeShort_(this.caretSlopeRun);
    out.writeShort_(this.caretOffset);
    out.write([0, 0, 0, 0, 0, 0, 0, 0]);
    out.writeShort_(this.metricDataFormat);
    out.writeShort(ids.length);
    return out.get();
  }
};
var MaxpTable = class extends Table {
  parse(data) {
    data.offset(this.offset);
    this.version = data.readLong();
    this.numGlyphs = data.readShort();
    this.maxPoints = data.readShort();
    this.maxContours = data.readShort();
    this.maxComponentPoints = data.readShort();
    this.maxComponentContours = data.readShort();
    this.maxZones = data.readShort();
    this.maxTwilightPoints = data.readShort();
    this.maxStorage = data.readShort();
    this.maxFunctionDefs = data.readShort();
    this.maxInstructionDefs = data.readShort();
    this.maxStackElements = data.readShort();
    this.maxSizeOfInstructions = data.readShort();
    this.maxComponentElements = data.readShort();
    this.maxComponentDepth = data.readShort();
  }
  render(glyphIds) {
    var out = BinaryStream();
    out.writeLong(this.version);
    out.writeShort(glyphIds.length);
    out.writeShort(this.maxPoints);
    out.writeShort(this.maxContours);
    out.writeShort(this.maxComponentPoints);
    out.writeShort(this.maxComponentContours);
    out.writeShort(this.maxZones);
    out.writeShort(this.maxTwilightPoints);
    out.writeShort(this.maxStorage);
    out.writeShort(this.maxFunctionDefs);
    out.writeShort(this.maxInstructionDefs);
    out.writeShort(this.maxStackElements);
    out.writeShort(this.maxSizeOfInstructions);
    out.writeShort(this.maxComponentElements);
    out.writeShort(this.maxComponentDepth);
    return out.get();
  }
};
var HmtxTable = class extends Table {
  parse(data) {
    data.offset(this.offset);
    var dir = this.file, hhea = dir.hhea;
    this.metrics = data.times(hhea.numOfLongHorMetrics, function() {
      return {
        advance: data.readShort(),
        lsb: data.readShort_()
      };
    });
    var lsbCount = dir.maxp.numGlyphs - dir.hhea.numOfLongHorMetrics;
    this.leftSideBearings = data.times(lsbCount, data.readShort_);
  }
  forGlyph(id) {
    var metrics = this.metrics;
    var n2 = metrics.length;
    if (id < n2) {
      return metrics[id];
    }
    return {
      advance: metrics[n2 - 1].advance,
      lsb: this.leftSideBearings[id - n2]
    };
  }
  render(glyphIds) {
    var out = BinaryStream();
    for (var i2 = 0; i2 < glyphIds.length; ++i2) {
      var m2 = this.forGlyph(glyphIds[i2]);
      out.writeShort(m2.advance);
      out.writeShort_(m2.lsb);
    }
    return out.get();
  }
};
var GlyfTable = /* @__PURE__ */ (function() {
  class SimpleGlyph {
    get compound() {
      return false;
    }
    constructor(raw) {
      this.raw = raw;
    }
    render() {
      return this.raw.get();
    }
  }
  var ARG_1_AND_2_ARE_WORDS = 1;
  var WE_HAVE_A_SCALE = 8;
  var MORE_COMPONENTS = 32;
  var WE_HAVE_AN_X_AND_Y_SCALE = 64;
  var WE_HAVE_A_TWO_BY_TWO = 128;
  class CompoundGlyph {
    get compound() {
      return true;
    }
    constructor(data) {
      this.raw = data;
      var ids = this.glyphIds = [];
      var offsets = this.idOffsets = [];
      while (true) {
        var flags = data.readShort();
        offsets.push(data.offset());
        ids.push(data.readShort());
        if (!(flags & MORE_COMPONENTS)) {
          break;
        }
        data.skip(flags & ARG_1_AND_2_ARE_WORDS ? 4 : 2);
        if (flags & WE_HAVE_A_TWO_BY_TWO) {
          data.skip(8);
        } else if (flags & WE_HAVE_AN_X_AND_Y_SCALE) {
          data.skip(4);
        } else if (flags & WE_HAVE_A_SCALE) {
          data.skip(2);
        }
      }
    }
    render(old2new) {
      var out = BinaryStream(this.raw.get());
      for (var i2 = 0; i2 < this.glyphIds.length; ++i2) {
        var id = this.glyphIds[i2];
        out.offset(this.idOffsets[i2]);
        out.writeShort(old2new[id]);
      }
      return out.get();
    }
  }
  return class extends Table {
    parse() {
      this.cache = {};
    }
    glyphFor(id) {
      var cache = this.cache;
      if (hasOwnProperty(cache, id)) {
        return cache[id];
      }
      var loca = this.file.loca;
      var length = loca.lengthOf(id);
      if (length === 0) {
        return cache[id] = null;
      }
      var data = this.rawData;
      var offset = this.offset + loca.offsetOf(id);
      var raw = BinaryStream(data.slice(offset, length));
      var numberOfContours = raw.readShort_();
      var xMin = raw.readShort_();
      var yMin = raw.readShort_();
      var xMax = raw.readShort_();
      var yMax = raw.readShort_();
      var glyph = cache[id] = numberOfContours < 0 ? new CompoundGlyph(raw) : new SimpleGlyph(raw);
      glyph.numberOfContours = numberOfContours;
      glyph.xMin = xMin;
      glyph.yMin = yMin;
      glyph.xMax = xMax;
      glyph.yMax = yMax;
      return glyph;
    }
    render(glyphs, oldIds, old2new) {
      var out = BinaryStream(), offsets = [];
      for (var i2 = 0; i2 < oldIds.length; ++i2) {
        var id = oldIds[i2];
        var glyph = glyphs[id];
        if (out.offset() % 2) {
          out.writeByte(0);
        }
        offsets.push(out.offset());
        if (glyph) {
          out.write(glyph.render(old2new));
        }
      }
      if (out.offset() % 2) {
        out.writeByte(0);
      }
      offsets.push(out.offset());
      return {
        table: out.get(),
        offsets
      };
    }
  };
})();
var NameTable = /* @__PURE__ */ (function() {
  class NameEntry {
    constructor(text, entry) {
      this.text = text;
      this.length = text.length;
      this.platformID = entry.platformID;
      this.platformSpecificID = entry.platformSpecificID;
      this.languageID = entry.languageID;
      this.nameID = entry.nameID;
    }
  }
  return class extends Table {
    parse(data) {
      data.offset(this.offset);
      data.readShort();
      var count = data.readShort();
      var stringOffset = this.offset + data.readShort();
      var nameRecords = data.times(count, function() {
        return {
          platformID: data.readShort(),
          platformSpecificID: data.readShort(),
          languageID: data.readShort(),
          nameID: data.readShort(),
          length: data.readShort(),
          offset: data.readShort() + stringOffset
        };
      });
      var strings = this.strings = {};
      for (var i2 = 0; i2 < nameRecords.length; ++i2) {
        var rec = nameRecords[i2];
        data.offset(rec.offset);
        var text = data.readString(rec.length);
        if (!strings[rec.nameID]) {
          strings[rec.nameID] = [];
        }
        strings[rec.nameID].push(new NameEntry(text, rec));
      }
      this.postscriptEntry = strings[6][0];
      this.postscriptName = this.postscriptEntry.text.replace(/[^\x20-\x7F]/g, "");
    }
    render(psName) {
      var strings = this.strings;
      var strCount = 0;
      for (var i2 in strings) {
        if (hasOwnProperty(strings, i2)) {
          strCount += strings[i2].length;
        }
      }
      var out = BinaryStream();
      var strTable = BinaryStream();
      out.writeShort(0);
      out.writeShort(strCount);
      out.writeShort(6 + 12 * strCount);
      for (i2 in strings) {
        if (hasOwnProperty(strings, i2)) {
          var list = i2 == 6 ? [
            new NameEntry(psName, this.postscriptEntry)
          ] : strings[i2];
          for (var j = 0; j < list.length; ++j) {
            var str = list[j];
            out.writeShort(str.platformID);
            out.writeShort(str.platformSpecificID);
            out.writeShort(str.languageID);
            out.writeShort(str.nameID);
            out.writeShort(str.length);
            out.writeShort(strTable.offset());
            strTable.writeString(str.text);
          }
        }
      }
      out.write(strTable.get());
      return out.get();
    }
  };
})();
var PostTable = (function() {
  var POSTSCRIPT_GLYPHS = ".notdef .null nonmarkingreturn space exclam quotedbl numbersign dollar percent ampersand quotesingle parenleft parenright asterisk plus comma hyphen period slash zero one two three four five six seven eight nine colon semicolon less equal greater question at A B C D E F G H I J K L M N O P Q R S T U V W X Y Z bracketleft backslash bracketright asciicircum underscore grave a b c d e f g h i j k l m n o p q r s t u v w x y z braceleft bar braceright asciitilde Adieresis Aring Ccedilla Eacute Ntilde Odieresis Udieresis aacute agrave acircumflex adieresis atilde aring ccedilla eacute egrave ecircumflex edieresis iacute igrave icircumflex idieresis ntilde oacute ograve ocircumflex odieresis otilde uacute ugrave ucircumflex udieresis dagger degree cent sterling section bullet paragraph germandbls registered copyright trademark acute dieresis notequal AE Oslash infinity plusminus lessequal greaterequal yen mu partialdiff summation product pi integral ordfeminine ordmasculine Omega ae oslash questiondown exclamdown logicalnot radical florin approxequal Delta guillemotleft guillemotright ellipsis nonbreakingspace Agrave Atilde Otilde OE oe endash emdash quotedblleft quotedblright quoteleft quoteright divide lozenge ydieresis Ydieresis fraction currency guilsinglleft guilsinglright fi fl daggerdbl periodcentered quotesinglbase quotedblbase perthousand Acircumflex Ecircumflex Aacute Edieresis Egrave Iacute Icircumflex Idieresis Igrave Oacute Ocircumflex apple Ograve Uacute Ucircumflex Ugrave dotlessi circumflex tilde macron breve dotaccent ring cedilla hungarumlaut ogonek caron Lslash lslash Scaron scaron Zcaron zcaron brokenbar Eth eth Yacute yacute Thorn thorn minus multiply onesuperior twosuperior threesuperior onehalf onequarter threequarters franc Gbreve gbreve Idotaccent Scedilla scedilla Cacute cacute Ccaron ccaron dcroat".split(/\s+/g);
  return class extends Table {
    parse(data) {
      data.offset(this.offset);
      this.format = data.readLong();
      this.italicAngle = data.readFixed_();
      this.underlinePosition = data.readShort_();
      this.underlineThickness = data.readShort_();
      this.isFixedPitch = data.readLong();
      this.minMemType42 = data.readLong();
      this.maxMemType42 = data.readLong();
      this.minMemType1 = data.readLong();
      this.maxMemType1 = data.readLong();
      var numberOfGlyphs;
      switch (this.format) {
        case 65536:
        case 196608:
          break;
        case 131072:
          numberOfGlyphs = data.readShort();
          this.glyphNameIndex = data.times(numberOfGlyphs, data.readShort);
          this.names = [];
          var limit = this.offset + this.length;
          while (data.offset() < limit) {
            this.names.push(data.readString(data.readByte()));
          }
          break;
        case 151552:
          numberOfGlyphs = data.readShort();
          this.offsets = data.read(numberOfGlyphs);
          break;
        case 262144:
          this.map = data.times(this.file.maxp.numGlyphs, data.readShort);
          break;
      }
    }
    glyphFor(code) {
      switch (this.format) {
        case 65536:
          return POSTSCRIPT_GLYPHS[code] || ".notdef";
        case 131072:
          var index = this.glyphNameIndex[code];
          if (index < POSTSCRIPT_GLYPHS.length) {
            return POSTSCRIPT_GLYPHS[index];
          }
          return this.names[index - POSTSCRIPT_GLYPHS.length] || ".notdef";
        case 151552:
        case 196608:
          return ".notdef";
        case 262144:
          return this.map[code] || 65535;
      }
    }
    render(mapping) {
      if (this.format == 196608) {
        return this.raw();
      }
      var out = BinaryStream(this.rawData.slice(this.offset, 32));
      out.writeLong(131072);
      out.offset(32);
      var indexes = [];
      var strings = [];
      for (var i2 = 0; i2 < mapping.length; ++i2) {
        var id = mapping[i2];
        var post = this.glyphFor(id);
        var index = POSTSCRIPT_GLYPHS.indexOf(post);
        if (index >= 0) {
          indexes.push(index);
        } else {
          indexes.push(POSTSCRIPT_GLYPHS.length + strings.length);
          strings.push(post);
        }
      }
      out.writeShort(mapping.length);
      for (i2 = 0; i2 < indexes.length; ++i2) {
        out.writeShort(indexes[i2]);
      }
      for (i2 = 0; i2 < strings.length; ++i2) {
        out.writeByte(strings[i2].length);
        out.writeString(strings[i2]);
      }
      return out.get();
    }
  };
})();
var CmapTable = /* @__PURE__ */ (function() {
  class CmapEntry {
    constructor(data, offset, codeMap) {
      var self = this;
      self.platformID = data.readShort();
      self.platformSpecificID = data.readShort();
      self.offset = offset + data.readLong();
      data.saveExcursion(function() {
        var code;
        data.offset(self.offset);
        self.format = data.readShort();
        switch (self.format) {
          case 0:
            self.length = data.readShort();
            self.language = data.readShort();
            for (var i2 = 0; i2 < 256; ++i2) {
              codeMap[i2] = data.readByte();
            }
            break;
          case 4:
            self.length = data.readShort();
            self.language = data.readShort();
            var segCount = data.readShort() / 2;
            data.skip(6);
            var endCode = data.times(segCount, data.readShort);
            data.skip(2);
            var startCode = data.times(segCount, data.readShort);
            var idDelta = data.times(segCount, data.readShort_);
            var idRangeOffset = data.times(segCount, data.readShort);
            var count = (self.length + self.offset - data.offset()) / 2;
            var glyphIds = data.times(count, data.readShort);
            for (i2 = 0; i2 < segCount; ++i2) {
              var start = startCode[i2], end = endCode[i2];
              for (code = start; code <= end; ++code) {
                var glyphId;
                if (idRangeOffset[i2] === 0) {
                  glyphId = code + idDelta[i2];
                } else {
                  var index = idRangeOffset[i2] / 2 - (segCount - i2) + (code - start);
                  glyphId = glyphIds[index] || 0;
                  if (glyphId !== 0) {
                    glyphId += idDelta[i2];
                  }
                }
                codeMap[code] = glyphId & 65535;
              }
            }
            break;
          case 6:
            self.length = data.readShort();
            self.language = data.readShort();
            code = data.readShort();
            var length = data.readShort();
            while (length-- > 0) {
              codeMap[code++] = data.readShort();
            }
            break;
          case 12:
            data.readShort();
            self.length = data.readLong();
            self.language = data.readLong();
            var ngroups = data.readLong();
            while (ngroups-- > 0) {
              code = data.readLong();
              var endCharCode = data.readLong();
              var glyphCode = data.readLong();
              while (code <= endCharCode) {
                codeMap[code++] = glyphCode++;
              }
            }
            break;
          default:
            if (window.console) {
              window.console.error("Unhandled CMAP format: " + self.format);
            }
        }
      });
    }
  }
  function renderCharmap(ncid2ogid, ogid2ngid) {
    var codes = sortedKeys(ncid2ogid);
    var startCodes = [];
    var endCodes = [];
    var last2 = null;
    var diff = null;
    function new_gid(charcode) {
      return ogid2ngid[ncid2ogid[charcode]];
    }
    for (var i2 = 0; i2 < codes.length; ++i2) {
      var code = codes[i2];
      var gid = new_gid(code);
      var delta = gid - code;
      if (last2 == null || delta !== diff) {
        if (last2) {
          endCodes.push(last2);
        }
        startCodes.push(code);
        diff = delta;
      }
      last2 = code;
    }
    if (last2) {
      endCodes.push(last2);
    }
    endCodes.push(65535);
    startCodes.push(65535);
    var segCount = startCodes.length;
    var segCountX2 = segCount * 2;
    var searchRange = 2 * Math.pow(2, Math.floor(Math.log(segCount) / Math.LN2));
    var entrySelector = Math.log(searchRange / 2) / Math.LN2;
    var rangeShift = segCountX2 - searchRange;
    var deltas = [];
    var rangeOffsets = [];
    var glyphIds = [];
    for (i2 = 0; i2 < segCount; ++i2) {
      var startCode = startCodes[i2];
      var endCode = endCodes[i2];
      if (startCode == 65535) {
        deltas.push(0);
        rangeOffsets.push(0);
        break;
      }
      var startGlyph = new_gid(startCode);
      if (startCode - startGlyph >= 32768) {
        deltas.push(0);
        rangeOffsets.push(2 * (glyphIds.length + segCount - i2));
        for (var j = startCode; j <= endCode; ++j) {
          glyphIds.push(new_gid(j));
        }
      } else {
        deltas.push(startGlyph - startCode);
        rangeOffsets.push(0);
      }
    }
    var out = BinaryStream();
    out.writeShort(3);
    out.writeShort(1);
    out.writeLong(12);
    out.writeShort(4);
    out.writeShort(16 + segCount * 8 + glyphIds.length * 2);
    out.writeShort(0);
    out.writeShort(segCountX2);
    out.writeShort(searchRange);
    out.writeShort(entrySelector);
    out.writeShort(rangeShift);
    endCodes.forEach(out.writeShort);
    out.writeShort(0);
    startCodes.forEach(out.writeShort);
    deltas.forEach(out.writeShort_);
    rangeOffsets.forEach(out.writeShort);
    glyphIds.forEach(out.writeShort);
    return out.get();
  }
  return class extends Table {
    parse(data) {
      var self = this;
      var offset = self.offset;
      data.offset(offset);
      self.codeMap = {};
      self.version = data.readShort();
      var tableCount = data.readShort();
      self.tables = data.times(tableCount, function() {
        return new CmapEntry(data, offset, self.codeMap);
      });
    }
    static render(ncid2ogid, ogid2ngid) {
      var out = BinaryStream();
      out.writeShort(0);
      out.writeShort(1);
      out.write(renderCharmap(ncid2ogid, ogid2ngid));
      return out.get();
    }
  };
})();
var OS2Table = class extends Table {
  parse(data) {
    data.offset(this.offset);
    this.version = data.readShort();
    this.averageCharWidth = data.readShort_();
    this.weightClass = data.readShort();
    this.widthClass = data.readShort();
    this.type = data.readShort();
    this.ySubscriptXSize = data.readShort_();
    this.ySubscriptYSize = data.readShort_();
    this.ySubscriptXOffset = data.readShort_();
    this.ySubscriptYOffset = data.readShort_();
    this.ySuperscriptXSize = data.readShort_();
    this.ySuperscriptYSize = data.readShort_();
    this.ySuperscriptXOffset = data.readShort_();
    this.ySuperscriptYOffset = data.readShort_();
    this.yStrikeoutSize = data.readShort_();
    this.yStrikeoutPosition = data.readShort_();
    this.familyClass = data.readShort_();
    this.panose = data.times(10, data.readByte);
    this.charRange = data.times(4, data.readLong);
    this.vendorID = data.readString(4);
    this.selection = data.readShort();
    this.firstCharIndex = data.readShort();
    this.lastCharIndex = data.readShort();
    if (this.version > 0) {
      this.ascent = data.readShort_();
      this.descent = data.readShort_();
      this.lineGap = data.readShort_();
      this.winAscent = data.readShort();
      this.winDescent = data.readShort();
      this.codePageRange = data.times(2, data.readLong);
      if (this.version > 1) {
        this.xHeight = data.readShort();
        this.capHeight = data.readShort();
        this.defaultChar = data.readShort();
        this.breakChar = data.readShort();
        this.maxContext = data.readShort();
      }
    }
  }
  render() {
    return this.raw();
  }
};
var subsetTag = 1e5;
function nextSubsetTag() {
  var ret = "", n2 = String(subsetTag);
  for (var i2 = 0; i2 < n2.length; ++i2) {
    ret += String.fromCharCode(n2.charCodeAt(i2) - 48 + 65);
  }
  ++subsetTag;
  return ret;
}
var Subfont = class {
  constructor(font) {
    this.font = font;
    this.subset = {};
    this.unicodes = {};
    this.ogid2ngid = { 0: 0 };
    this.ngid2ogid = { 0: 0 };
    this.ncid2ogid = {};
    this.next = this.firstChar = 1;
    this.nextGid = 1;
    this.psName = nextSubsetTag() + "+" + this.font.psName;
  }
  use(ch) {
    var self = this;
    if (typeof ch == "string") {
      return ucs2decode(ch).reduce(function(ret, code2) {
        return ret + String.fromCharCode(self.use(code2));
      }, "");
    }
    var code = self.unicodes[ch];
    if (!code) {
      code = self.next++;
      self.subset[code] = ch;
      self.unicodes[ch] = code;
      var old_gid = self.font.cmap.codeMap[ch];
      if (old_gid) {
        self.ncid2ogid[code] = old_gid;
        if (self.ogid2ngid[old_gid] == null) {
          var new_gid = self.nextGid++;
          self.ogid2ngid[old_gid] = new_gid;
          self.ngid2ogid[new_gid] = old_gid;
        }
      }
    }
    return code;
  }
  encodeText(text) {
    return this.use(text);
  }
  glyphIds() {
    return sortedKeys(this.ogid2ngid);
  }
  glyphsFor(glyphIds, result) {
    if (!result) {
      result = {};
    }
    for (var i2 = 0; i2 < glyphIds.length; ++i2) {
      var id = glyphIds[i2];
      if (!result[id]) {
        var glyph = result[id] = this.font.glyf.glyphFor(id);
        if (glyph && glyph.compound) {
          this.glyphsFor(glyph.glyphIds, result);
        }
      }
    }
    return result;
  }
  render() {
    var glyphs = this.glyphsFor(this.glyphIds());
    for (var old_gid in glyphs) {
      if (hasOwnProperty(glyphs, old_gid)) {
        old_gid = parseInt(old_gid, 10);
        if (this.ogid2ngid[old_gid] == null) {
          var new_gid = this.nextGid++;
          this.ogid2ngid[old_gid] = new_gid;
          this.ngid2ogid[new_gid] = old_gid;
        }
      }
    }
    var new_gid_ids = sortedKeys(this.ngid2ogid);
    var old_gid_ids = new_gid_ids.map(function(id) {
      return this.ngid2ogid[id];
    }, this);
    var font = this.font;
    var glyf = font.glyf.render(glyphs, old_gid_ids, this.ogid2ngid);
    var loca = font.loca.render(glyf.offsets);
    this.lastChar = this.next - 1;
    var tables = {
      "cmap": CmapTable.render(this.ncid2ogid, this.ogid2ngid),
      "glyf": glyf.table,
      "loca": loca.table,
      "hmtx": font.hmtx.render(old_gid_ids),
      "hhea": font.hhea.render(old_gid_ids),
      "maxp": font.maxp.render(old_gid_ids),
      "post": font.post.render(old_gid_ids),
      "name": font.name.render(this.psName),
      "head": font.head.render(loca.format),
      "OS/2": font.os2.render()
    };
    return this.font.directory.render(tables);
  }
  cidToGidMap() {
    var out = BinaryStream(), len = 0;
    for (var cid = this.firstChar; cid < this.next; ++cid) {
      while (len < cid) {
        out.writeShort(0);
        len++;
      }
      var old_gid = this.ncid2ogid[cid];
      if (old_gid) {
        var new_gid = this.ogid2ngid[old_gid];
        out.writeShort(new_gid);
      } else {
        out.writeShort(0);
      }
      len++;
    }
    return out.get();
  }
};
var TTFFont = class {
  constructor(rawData, name) {
    var self = this;
    var data = self.contents = BinaryStream(rawData);
    if (data.readString(4) == "ttcf") {
      var offset;
      const parse = function() {
        data.offset(offset);
        self.parse();
      };
      if (!name) {
        throw new Error("Must specify a name for TTC files");
      }
      data.readLong();
      var numFonts = data.readLong();
      for (var i2 = 0; i2 < numFonts; ++i2) {
        offset = data.readLong();
        data.saveExcursion(parse);
        if (self.psName == name) {
          return;
        }
      }
      throw new Error("Font " + name + " not found in collection");
    } else {
      data.offset(0);
      self.parse();
    }
  }
  parse() {
    var dir = this.directory = new Directory(this.contents);
    this.head = dir.readTable("head", HeadTable);
    this.loca = dir.readTable("loca", LocaTable);
    this.hhea = dir.readTable("hhea", HheaTable);
    this.maxp = dir.readTable("maxp", MaxpTable);
    this.hmtx = dir.readTable("hmtx", HmtxTable);
    this.glyf = dir.readTable("glyf", GlyfTable);
    this.name = dir.readTable("name", NameTable);
    this.post = dir.readTable("post", PostTable);
    this.cmap = dir.readTable("cmap", CmapTable);
    this.os2 = dir.readTable("OS/2", OS2Table);
    this.psName = this.name.postscriptName;
    this.ascent = this.os2.ascent || this.hhea.ascent;
    this.descent = this.os2.descent || this.hhea.descent;
    this.lineGap = this.os2.lineGap || this.hhea.lineGap;
    this.scale = 1e3 / this.head.unitsPerEm;
  }
  widthOfGlyph(glyph) {
    return this.hmtx.forGlyph(glyph).advance * this.scale;
  }
  makeSubset() {
    return new Subfont(this);
  }
};

// node_modules/@progress/pako-esm/dist/pako-esm5.js
var Z_NO_FLUSH = 0;
var Z_PARTIAL_FLUSH = 1;
var Z_SYNC_FLUSH = 2;
var Z_FULL_FLUSH = 3;
var Z_FINISH = 4;
var Z_BLOCK = 5;
var Z_OK = 0;
var Z_STREAM_END = 1;
var Z_NEED_DICT = 2;
var Z_STREAM_ERROR = -2;
var Z_DATA_ERROR = -3;
var Z_BUF_ERROR = -5;
var Z_DEFAULT_COMPRESSION = -1;
var Z_FILTERED = 1;
var Z_HUFFMAN_ONLY = 2;
var Z_RLE = 3;
var Z_FIXED = 4;
var Z_DEFAULT_STRATEGY = 0;
var Z_BINARY = 0;
var Z_TEXT = 1;
var Z_UNKNOWN = 2;
var Z_DEFLATED = 8;
function _has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function assign(obj) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) {
      continue;
    }
    if (typeof source !== "object") {
      throw new TypeError(source + "must be non-object");
    }
    for (var p2 in source) {
      if (_has(source, p2)) {
        obj[p2] = source[p2];
      }
    }
  }
  return obj;
}
function shrinkBuf(buf, size) {
  if (buf.length === size) {
    return buf;
  }
  if (buf.subarray) {
    return buf.subarray(0, size);
  }
  buf.length = size;
  return buf;
}
var fnTyped = {
  arraySet: function(dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    for (var i2 = 0; i2 < len; i2++) {
      dest[dest_offs + i2] = src[src_offs + i2];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function(chunks) {
    var i2, l2, len, pos, chunk, result;
    len = 0;
    for (i2 = 0, l2 = chunks.length; i2 < l2; i2++) {
      len += chunks[i2].length;
    }
    result = new Uint8Array(len);
    pos = 0;
    for (i2 = 0, l2 = chunks.length; i2 < l2; i2++) {
      chunk = chunks[i2];
      result.set(chunk, pos);
      pos += chunk.length;
    }
    return result;
  },
  Buf8: function(size) {
    return new Uint8Array(size);
  },
  Buf16: function(size) {
    return new Uint16Array(size);
  },
  Buf32: function(size) {
    return new Int32Array(size);
  }
};
var fnUntyped = {
  arraySet: function(dest, src, src_offs, len, dest_offs) {
    for (var i2 = 0; i2 < len; i2++) {
      dest[dest_offs + i2] = src[src_offs + i2];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function(chunks) {
    return [].concat.apply([], chunks);
  },
  Buf8: function(size) {
    return new Array(size);
  },
  Buf16: function(size) {
    return new Array(size);
  },
  Buf32: function(size) {
    return new Array(size);
  }
};
var typedOK = function() {
  var supported = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
  typedOK = function() {
    return supported;
  };
  return supported;
};
var arraySet = function(dest, src, src_offs, len, dest_offs) {
  arraySet = typedOK() ? fnTyped.arraySet : fnUntyped.arraySet;
  return arraySet(dest, src, src_offs, len, dest_offs);
};
var flattenChunks = function(chunks) {
  flattenChunks = typedOK() ? fnTyped.flattenChunks : fnUntyped.flattenChunks;
  return flattenChunks(chunks);
};
var Buf8 = function(size) {
  Buf8 = typedOK() ? fnTyped.Buf8 : fnUntyped.Buf8;
  return Buf8(size);
};
var Buf16 = function(size) {
  Buf16 = typedOK() ? fnTyped.Buf16 : fnUntyped.Buf16;
  return Buf16(size);
};
var Buf32 = function(size) {
  Buf32 = typedOK() ? fnTyped.Buf32 : fnUntyped.Buf32;
  return Buf32(size);
};
var strApplyOK = function() {
  var result = true;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (_2) {
    result = false;
  }
  strApplyOK = function() {
    return result;
  };
  return result;
};
var strApplyUintOK = function() {
  var result = true;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (_2) {
    result = false;
  }
  strApplyUintOK = function() {
    return result;
  };
  return result;
};
var utf8len = function(c2) {
  var table = Buf8(256);
  for (var q = 0; q < 256; q++) {
    table[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
  }
  table[254] = table[254] = 1;
  utf8len = function(arg) {
    return table[arg];
  };
  return table[c2];
};
function string2buf(str) {
  var buf, c2, c22, m_pos, i2, str_len = str.length, buf_len = 0;
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c2 = str.charCodeAt(m_pos);
    if ((c2 & 64512) === 55296 && m_pos + 1 < str_len) {
      c22 = str.charCodeAt(m_pos + 1);
      if ((c22 & 64512) === 56320) {
        c2 = 65536 + (c2 - 55296 << 10) + (c22 - 56320);
        m_pos++;
      }
    }
    buf_len += c2 < 128 ? 1 : c2 < 2048 ? 2 : c2 < 65536 ? 3 : 4;
  }
  buf = new Uint8Array(buf_len);
  for (i2 = 0, m_pos = 0; i2 < buf_len; m_pos++) {
    c2 = str.charCodeAt(m_pos);
    if ((c2 & 64512) === 55296 && m_pos + 1 < str_len) {
      c22 = str.charCodeAt(m_pos + 1);
      if ((c22 & 64512) === 56320) {
        c2 = 65536 + (c2 - 55296 << 10) + (c22 - 56320);
        m_pos++;
      }
    }
    if (c2 < 128) {
      buf[i2++] = c2;
    } else if (c2 < 2048) {
      buf[i2++] = 192 | c2 >>> 6;
      buf[i2++] = 128 | c2 & 63;
    } else if (c2 < 65536) {
      buf[i2++] = 224 | c2 >>> 12;
      buf[i2++] = 128 | c2 >>> 6 & 63;
      buf[i2++] = 128 | c2 & 63;
    } else {
      buf[i2++] = 240 | c2 >>> 18;
      buf[i2++] = 128 | c2 >>> 12 & 63;
      buf[i2++] = 128 | c2 >>> 6 & 63;
      buf[i2++] = 128 | c2 & 63;
    }
  }
  return buf;
}
function _buf2binstring(buf, len) {
  if (len < 65534) {
    if (buf.subarray && strApplyUintOK() || !buf.subarray && strApplyOK()) {
      return String.fromCharCode.apply(null, shrinkBuf(buf, len));
    }
  }
  var result = "";
  for (var i2 = 0; i2 < len; i2++) {
    result += String.fromCharCode(buf[i2]);
  }
  return result;
}
function buf2binstring(buf) {
  return _buf2binstring(buf, buf.length);
}
function binstring2buf(str) {
  var buf = new Uint8Array(str.length);
  for (var i2 = 0, len = buf.length; i2 < len; i2++) {
    buf[i2] = str.charCodeAt(i2);
  }
  return buf;
}
function buf2string(buf, max) {
  var i2, out, c2, c_len;
  var len = max || buf.length;
  var utf16buf = new Array(len * 2);
  for (out = 0, i2 = 0; i2 < len; ) {
    c2 = buf[i2++];
    if (c2 < 128) {
      utf16buf[out++] = c2;
      continue;
    }
    c_len = utf8len(c2);
    if (c_len > 4) {
      utf16buf[out++] = 65533;
      i2 += c_len - 1;
      continue;
    }
    c2 &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
    while (c_len > 1 && i2 < len) {
      c2 = c2 << 6 | buf[i2++] & 63;
      c_len--;
    }
    if (c_len > 1) {
      utf16buf[out++] = 65533;
      continue;
    }
    if (c2 < 65536) {
      utf16buf[out++] = c2;
    } else {
      c2 -= 65536;
      utf16buf[out++] = 55296 | c2 >> 10 & 1023;
      utf16buf[out++] = 56320 | c2 & 1023;
    }
  }
  return _buf2binstring(utf16buf, out);
}
function utf8border(buf, max) {
  var pos;
  max = max || buf.length;
  if (max > buf.length) {
    max = buf.length;
  }
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 192) === 128) {
    pos--;
  }
  if (pos < 0) {
    return max;
  }
  if (pos === 0) {
    return max;
  }
  return pos + utf8len(buf[pos]) > max ? pos : max;
}
function adler32(adler, buf, len, pos) {
  var s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n2 = 0;
  while (len !== 0) {
    n2 = len > 2e3 ? 2e3 : len;
    len -= n2;
    do {
      s1 = s1 + buf[pos++] | 0;
      s2 = s2 + s1 | 0;
    } while (--n2);
    s1 %= 65521;
    s2 %= 65521;
  }
  return s1 | s2 << 16 | 0;
}
function makeTable() {
  var c2, table = [];
  for (var n2 = 0; n2 < 256; n2++) {
    c2 = n2;
    for (var k2 = 0; k2 < 8; k2++) {
      c2 = c2 & 1 ? 3988292384 ^ c2 >>> 1 : c2 >>> 1;
    }
    table[n2] = c2;
  }
  return table;
}
var crcTable = function() {
  var table = makeTable();
  crcTable = function() {
    return table;
  };
  return table;
};
function crc32(crc, buf, len, pos) {
  var t2 = crcTable(), end = pos + len;
  crc ^= -1;
  for (var i2 = pos; i2 < end; i2++) {
    crc = crc >>> 8 ^ t2[(crc ^ buf[i2]) & 255];
  }
  return crc ^ -1;
}
var BAD = 30;
var TYPE = 12;
function inflate_fast(strm, start) {
  var state;
  var _in;
  var last2;
  var _out;
  var beg;
  var end;
  var dmax;
  var wsize;
  var whave;
  var wnext;
  var s_window;
  var hold;
  var bits;
  var lcode;
  var dcode;
  var lmask;
  var dmask;
  var here;
  var op;
  var len;
  var dist;
  var from;
  var from_source;
  var input, output;
  state = strm.state;
  _in = strm.next_in;
  input = strm.input;
  last2 = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
  dmax = state.dmax;
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;
  top:
    do {
      if (bits < 15) {
        hold += input[_in++] << bits;
        bits += 8;
        hold += input[_in++] << bits;
        bits += 8;
      }
      here = lcode[hold & lmask];
      dolen:
        for (; ; ) {
          op = here >>> 24;
          hold >>>= op;
          bits -= op;
          op = here >>> 16 & 255;
          if (op === 0) {
            output[_out++] = here & 65535;
          } else if (op & 16) {
            len = here & 65535;
            op &= 15;
            if (op) {
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
              len += hold & (1 << op) - 1;
              hold >>>= op;
              bits -= op;
            }
            if (bits < 15) {
              hold += input[_in++] << bits;
              bits += 8;
              hold += input[_in++] << bits;
              bits += 8;
            }
            here = dcode[hold & dmask];
            dodist:
              for (; ; ) {
                op = here >>> 24;
                hold >>>= op;
                bits -= op;
                op = here >>> 16 & 255;
                if (op & 16) {
                  dist = here & 65535;
                  op &= 15;
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    if (bits < op) {
                      hold += input[_in++] << bits;
                      bits += 8;
                    }
                  }
                  dist += hold & (1 << op) - 1;
                  if (dist > dmax) {
                    strm.msg = "invalid distance too far back";
                    state.mode = BAD;
                    break top;
                  }
                  hold >>>= op;
                  bits -= op;
                  op = _out - beg;
                  if (dist > op) {
                    op = dist - op;
                    if (op > whave) {
                      if (state.sane) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD;
                        break top;
                      }
                    }
                    from = 0;
                    from_source = s_window;
                    if (wnext === 0) {
                      from += wsize - op;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist;
                        from_source = output;
                      }
                    } else if (wnext < op) {
                      from += wsize + wnext - op;
                      op -= wnext;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = 0;
                        if (wnext < len) {
                          op = wnext;
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist;
                          from_source = output;
                        }
                      }
                    } else {
                      from += wnext - op;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist;
                        from_source = output;
                      }
                    }
                    while (len > 2) {
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      len -= 3;
                    }
                    if (len) {
                      output[_out++] = from_source[from++];
                      if (len > 1) {
                        output[_out++] = from_source[from++];
                      }
                    }
                  } else {
                    from = _out - dist;
                    do {
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      len -= 3;
                    } while (len > 2);
                    if (len) {
                      output[_out++] = output[from++];
                      if (len > 1) {
                        output[_out++] = output[from++];
                      }
                    }
                  }
                } else if ((op & 64) === 0) {
                  here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                  continue dodist;
                } else {
                  strm.msg = "invalid distance code";
                  state.mode = BAD;
                  break top;
                }
                break;
              }
          } else if ((op & 64) === 0) {
            here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
            continue dolen;
          } else if (op & 32) {
            state.mode = TYPE;
            break top;
          } else {
            strm.msg = "invalid literal/length code";
            state.mode = BAD;
            break top;
          }
          break;
        }
    } while (_in < last2 && _out < end);
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = _in < last2 ? 5 + (last2 - _in) : 5 - (_in - last2);
  strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
  state.hold = hold;
  state.bits = bits;
  return;
}
var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
var CODES = 0;
var LENS = 1;
var DISTS = 2;
var lbase = [
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
];
var lext = [
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
];
var dbase = [
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
];
var dext = [
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
];
function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
  var bits = opts.bits;
  var len = 0;
  var sym = 0;
  var min = 0, max = 0;
  var root = 0;
  var curr = 0;
  var drop = 0;
  var left = 0;
  var used = 0;
  var huff = 0;
  var incr;
  var fill;
  var low;
  var mask;
  var next;
  var base = null;
  var base_index = 0;
  var end;
  var count = Buf16(MAXBITS + 1);
  var offs = Buf16(MAXBITS + 1);
  var extra = null;
  var extra_index = 0;
  var here_bits, here_op, here_val;
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) {
      break;
    }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {
    table[table_index++] = 1 << 24 | 64 << 16 | 0;
    table[table_index++] = 1 << 24 | 64 << 16 | 0;
    opts.bits = 1;
    return 0;
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) {
      break;
    }
  }
  if (root < min) {
    root = min;
  }
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;
  }
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }
  if (type === CODES) {
    base = extra = work;
    end = 19;
  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;
  } else {
    base = dbase;
    extra = dext;
    end = -1;
  }
  huff = 0;
  sym = 0;
  len = min;
  next = table_index;
  curr = root;
  drop = 0;
  low = -1;
  used = 1 << root;
  mask = used - 1;
  if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
    return 1;
  }
  for (; ; ) {
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    } else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    } else {
      here_op = 32 + 64;
      here_val = 0;
    }
    incr = 1 << len - drop;
    fill = 1 << curr;
    min = fill;
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
    } while (fill !== 0);
    incr = 1 << len - 1;
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }
    sym++;
    if (--count[len] === 0) {
      if (len === max) {
        break;
      }
      len = lens[lens_index + work[sym]];
    }
    if (len > root && (huff & mask) !== low) {
      if (drop === 0) {
        drop = root;
      }
      next += min;
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) {
          break;
        }
        curr++;
        left <<= 1;
      }
      used += 1 << curr;
      if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
        return 1;
      }
      low = huff & mask;
      table[low] = root << 24 | curr << 16 | next - table_index | 0;
    }
  }
  if (huff !== 0) {
    table[next + huff] = len - drop << 24 | 64 << 16 | 0;
  }
  opts.bits = root;
  return 0;
}
var CODES$1 = 0;
var LENS$1 = 1;
var DISTS$1 = 2;
var Z_FINISH$1 = 4;
var Z_BLOCK$1 = 5;
var Z_TREES$1 = 6;
var Z_OK$1 = 0;
var Z_STREAM_END$1 = 1;
var Z_NEED_DICT$1 = 2;
var Z_STREAM_ERROR$1 = -2;
var Z_DATA_ERROR$1 = -3;
var Z_MEM_ERROR = -4;
var Z_BUF_ERROR$1 = -5;
var Z_DEFLATED$1 = 8;
var HEAD = 1;
var FLAGS = 2;
var TIME = 3;
var OS = 4;
var EXLEN = 5;
var EXTRA = 6;
var NAME = 7;
var COMMENT = 8;
var HCRC = 9;
var DICTID = 10;
var DICT = 11;
var TYPE$1 = 12;
var TYPEDO = 13;
var STORED = 14;
var COPY_ = 15;
var COPY = 16;
var TABLE = 17;
var LENLENS = 18;
var CODELENS = 19;
var LEN_ = 20;
var LEN = 21;
var LENEXT = 22;
var DIST = 23;
var DISTEXT = 24;
var MATCH = 25;
var LIT = 26;
var CHECK = 27;
var LENGTH = 28;
var DONE = 29;
var BAD$1 = 30;
var MEM = 31;
var SYNC = 32;
var ENOUGH_LENS$1 = 852;
var ENOUGH_DISTS$1 = 592;
function zswap32(q) {
  return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
}
function InflateState() {
  this.mode = 0;
  this.last = false;
  this.wrap = 0;
  this.havedict = false;
  this.flags = 0;
  this.dmax = 0;
  this.check = 0;
  this.total = 0;
  this.head = null;
  this.wbits = 0;
  this.wsize = 0;
  this.whave = 0;
  this.wnext = 0;
  this.window = null;
  this.hold = 0;
  this.bits = 0;
  this.length = 0;
  this.offset = 0;
  this.extra = 0;
  this.lencode = null;
  this.distcode = null;
  this.lenbits = 0;
  this.distbits = 0;
  this.ncode = 0;
  this.nlen = 0;
  this.ndist = 0;
  this.have = 0;
  this.next = null;
  this.lens = Buf16(320);
  this.work = Buf16(288);
  this.lendyn = null;
  this.distdyn = null;
  this.sane = 0;
  this.back = 0;
  this.was = 0;
}
function inflateResetKeep(strm) {
  var state;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = "";
  if (state.wrap) {
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null;
  state.hold = 0;
  state.bits = 0;
  state.lencode = state.lendyn = Buf32(ENOUGH_LENS$1);
  state.distcode = state.distdyn = Buf32(ENOUGH_DISTS$1);
  state.sane = 1;
  state.back = -1;
  return Z_OK$1;
}
function inflateReset(strm) {
  var state;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);
}
function inflateReset2(strm, windowBits) {
  var wrap2;
  var state;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  if (windowBits < 0) {
    wrap2 = 0;
    windowBits = -windowBits;
  } else {
    wrap2 = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR$1;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }
  state.wrap = wrap2;
  state.wbits = windowBits;
  return inflateReset(strm);
}
function inflateInit2(strm, windowBits) {
  var ret;
  var state;
  if (!strm) {
    return Z_STREAM_ERROR$1;
  }
  state = new InflateState();
  strm.state = state;
  state.window = null;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK$1) {
    strm.state = null;
  }
  return ret;
}
var virgin = true;
var lenfix;
var distfix;
function fixedtables(state) {
  if (virgin) {
    var sym;
    lenfix = Buf32(512);
    distfix = Buf32(32);
    sym = 0;
    while (sym < 144) {
      state.lens[sym++] = 8;
    }
    while (sym < 256) {
      state.lens[sym++] = 9;
    }
    while (sym < 280) {
      state.lens[sym++] = 7;
    }
    while (sym < 288) {
      state.lens[sym++] = 8;
    }
    inflate_table(LENS$1, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
    sym = 0;
    while (sym < 32) {
      state.lens[sym++] = 5;
    }
    inflate_table(DISTS$1, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
    virgin = false;
  }
  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;
    state.window = Buf8(state.wsize);
  }
  if (copy >= state.wsize) {
    arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  } else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    } else {
      state.wnext += dist;
      if (state.wnext === state.wsize) {
        state.wnext = 0;
      }
      if (state.whave < state.wsize) {
        state.whave += dist;
      }
    }
  }
  return 0;
}
function inflate(strm, flush) {
  var state;
  var input, output;
  var next;
  var put;
  var have, left;
  var hold;
  var bits;
  var _in, _out;
  var copy;
  var from;
  var from_source;
  var here = 0;
  var here_bits, here_op, here_val;
  var last_bits, last_op, last_val;
  var len;
  var ret;
  var hbuf = Buf8(4);
  var opts;
  var n2;
  var order = (
    /* permutation of code lengths */
    [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
  );
  if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  if (state.mode === TYPE$1) {
    state.mode = TYPEDO;
  }
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  _in = have;
  _out = left;
  ret = Z_OK$1;
  inf_leave:
    for (; ; ) {
      switch (state.mode) {
        case HEAD:
          if (state.wrap === 0) {
            state.mode = TYPEDO;
            break;
          }
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.wrap & 2 && hold === 35615) {
            state.check = 0;
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32(state.check, hbuf, 2, 0);
            hold = 0;
            bits = 0;
            state.mode = FLAGS;
            break;
          }
          state.flags = 0;
          if (state.head) {
            state.head.done = false;
          }
          if (!(state.wrap & 1) || /* check if zlib header allowed */
          (((hold & 255) << 8) + (hold >> 8)) % 31) {
            strm.msg = "incorrect header check";
            state.mode = BAD$1;
            break;
          }
          if ((hold & 15) !== Z_DEFLATED$1) {
            strm.msg = "unknown compression method";
            state.mode = BAD$1;
            break;
          }
          hold >>>= 4;
          bits -= 4;
          len = (hold & 15) + 8;
          if (state.wbits === 0) {
            state.wbits = len;
          } else if (len > state.wbits) {
            strm.msg = "invalid window size";
            state.mode = BAD$1;
            break;
          }
          state.dmax = 1 << len;
          strm.adler = state.check = 1;
          state.mode = hold & 512 ? DICTID : TYPE$1;
          hold = 0;
          bits = 0;
          break;
        case FLAGS:
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.flags = hold;
          if ((state.flags & 255) !== Z_DEFLATED$1) {
            strm.msg = "unknown compression method";
            state.mode = BAD$1;
            break;
          }
          if (state.flags & 57344) {
            strm.msg = "unknown header flags set";
            state.mode = BAD$1;
            break;
          }
          if (state.head) {
            state.head.text = hold >> 8 & 1;
          }
          if (state.flags & 512) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32(state.check, hbuf, 2, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = TIME;
        /* falls through */
        case TIME:
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.head) {
            state.head.time = hold;
          }
          if (state.flags & 512) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            hbuf[2] = hold >>> 16 & 255;
            hbuf[3] = hold >>> 24 & 255;
            state.check = crc32(state.check, hbuf, 4, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = OS;
        /* falls through */
        case OS:
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.head) {
            state.head.xflags = hold & 255;
            state.head.os = hold >> 8;
          }
          if (state.flags & 512) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32(state.check, hbuf, 2, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = EXLEN;
        /* falls through */
        case EXLEN:
          if (state.flags & 1024) {
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.length = hold;
            if (state.head) {
              state.head.extra_len = hold;
            }
            if (state.flags & 512) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
          } else if (state.head) {
            state.head.extra = null;
          }
          state.mode = EXTRA;
        /* falls through */
        case EXTRA:
          if (state.flags & 1024) {
            copy = state.length;
            if (copy > have) {
              copy = have;
            }
            if (copy) {
              if (state.head) {
                len = state.head.extra_len - state.length;
                if (!state.head.extra) {
                  state.head.extra = new Array(state.head.extra_len);
                }
                arraySet(
                  state.head.extra,
                  input,
                  next,
                  // extra field is limited to 65536 bytes
                  // - no need for additional size check
                  copy,
                  /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                  len
                );
              }
              if (state.flags & 512) {
                state.check = crc32(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              state.length -= copy;
            }
            if (state.length) {
              break inf_leave;
            }
          }
          state.length = 0;
          state.mode = NAME;
        /* falls through */
        case NAME:
          if (state.flags & 2048) {
            if (have === 0) {
              break inf_leave;
            }
            copy = 0;
            do {
              len = input[next + copy++];
              if (state.head && len && state.length < 65536) {
                state.head.name += String.fromCharCode(len);
              }
            } while (len && copy < have);
            if (state.flags & 512) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.name = null;
          }
          state.length = 0;
          state.mode = COMMENT;
        /* falls through */
        case COMMENT:
          if (state.flags & 4096) {
            if (have === 0) {
              break inf_leave;
            }
            copy = 0;
            do {
              len = input[next + copy++];
              if (state.head && len && state.length < 65536) {
                state.head.comment += String.fromCharCode(len);
              }
            } while (len && copy < have);
            if (state.flags & 512) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.comment = null;
          }
          state.mode = HCRC;
        /* falls through */
        case HCRC:
          if (state.flags & 512) {
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (hold !== (state.check & 65535)) {
              strm.msg = "header crc mismatch";
              state.mode = BAD$1;
              break;
            }
            hold = 0;
            bits = 0;
          }
          if (state.head) {
            state.head.hcrc = state.flags >> 9 & 1;
            state.head.done = true;
          }
          strm.adler = state.check = 0;
          state.mode = TYPE$1;
          break;
        case DICTID:
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          strm.adler = state.check = zswap32(hold);
          hold = 0;
          bits = 0;
          state.mode = DICT;
        /* falls through */
        case DICT:
          if (state.havedict === 0) {
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            return Z_NEED_DICT$1;
          }
          strm.adler = state.check = 1;
          state.mode = TYPE$1;
        /* falls through */
        case TYPE$1:
          if (flush === Z_BLOCK$1 || flush === Z_TREES$1) {
            break inf_leave;
          }
        /* falls through */
        case TYPEDO:
          if (state.last) {
            hold >>>= bits & 7;
            bits -= bits & 7;
            state.mode = CHECK;
            break;
          }
          while (bits < 3) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.last = hold & 1;
          hold >>>= 1;
          bits -= 1;
          switch (hold & 3) {
            case 0:
              state.mode = STORED;
              break;
            case 1:
              fixedtables(state);
              state.mode = LEN_;
              if (flush === Z_TREES$1) {
                hold >>>= 2;
                bits -= 2;
                break inf_leave;
              }
              break;
            case 2:
              state.mode = TABLE;
              break;
            case 3:
              strm.msg = "invalid block type";
              state.mode = BAD$1;
          }
          hold >>>= 2;
          bits -= 2;
          break;
        case STORED:
          hold >>>= bits & 7;
          bits -= bits & 7;
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
            strm.msg = "invalid stored block lengths";
            state.mode = BAD$1;
            break;
          }
          state.length = hold & 65535;
          hold = 0;
          bits = 0;
          state.mode = COPY_;
          if (flush === Z_TREES$1) {
            break inf_leave;
          }
        /* falls through */
        case COPY_:
          state.mode = COPY;
        /* falls through */
        case COPY:
          copy = state.length;
          if (copy) {
            if (copy > have) {
              copy = have;
            }
            if (copy > left) {
              copy = left;
            }
            if (copy === 0) {
              break inf_leave;
            }
            arraySet(output, input, next, copy, put);
            have -= copy;
            next += copy;
            left -= copy;
            put += copy;
            state.length -= copy;
            break;
          }
          state.mode = TYPE$1;
          break;
        case TABLE:
          while (bits < 14) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.nlen = (hold & 31) + 257;
          hold >>>= 5;
          bits -= 5;
          state.ndist = (hold & 31) + 1;
          hold >>>= 5;
          bits -= 5;
          state.ncode = (hold & 15) + 4;
          hold >>>= 4;
          bits -= 4;
          if (state.nlen > 286 || state.ndist > 30) {
            strm.msg = "too many length or distance symbols";
            state.mode = BAD$1;
            break;
          }
          state.have = 0;
          state.mode = LENLENS;
        /* falls through */
        case LENLENS:
          while (state.have < state.ncode) {
            while (bits < 3) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.lens[order[state.have++]] = hold & 7;
            hold >>>= 3;
            bits -= 3;
          }
          while (state.have < 19) {
            state.lens[order[state.have++]] = 0;
          }
          state.lencode = state.lendyn;
          state.lenbits = 7;
          opts = { bits: state.lenbits };
          ret = inflate_table(CODES$1, state.lens, 0, 19, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;
          if (ret) {
            strm.msg = "invalid code lengths set";
            state.mode = BAD$1;
            break;
          }
          state.have = 0;
          state.mode = CODELENS;
        /* falls through */
        case CODELENS:
          while (state.have < state.nlen + state.ndist) {
            for (; ; ) {
              here = state.lencode[hold & (1 << state.lenbits) - 1];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (here_val < 16) {
              hold >>>= here_bits;
              bits -= here_bits;
              state.lens[state.have++] = here_val;
            } else {
              if (here_val === 16) {
                n2 = here_bits + 2;
                while (bits < n2) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                if (state.have === 0) {
                  strm.msg = "invalid bit length repeat";
                  state.mode = BAD$1;
                  break;
                }
                len = state.lens[state.have - 1];
                copy = 3 + (hold & 3);
                hold >>>= 2;
                bits -= 2;
              } else if (here_val === 17) {
                n2 = here_bits + 3;
                while (bits < n2) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                len = 0;
                copy = 3 + (hold & 7);
                hold >>>= 3;
                bits -= 3;
              } else {
                n2 = here_bits + 7;
                while (bits < n2) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                len = 0;
                copy = 11 + (hold & 127);
                hold >>>= 7;
                bits -= 7;
              }
              if (state.have + copy > state.nlen + state.ndist) {
                strm.msg = "invalid bit length repeat";
                state.mode = BAD$1;
                break;
              }
              while (copy--) {
                state.lens[state.have++] = len;
              }
            }
          }
          if (state.mode === BAD$1) {
            break;
          }
          if (state.lens[256] === 0) {
            strm.msg = "invalid code -- missing end-of-block";
            state.mode = BAD$1;
            break;
          }
          state.lenbits = 9;
          opts = { bits: state.lenbits };
          ret = inflate_table(LENS$1, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;
          if (ret) {
            strm.msg = "invalid literal/lengths set";
            state.mode = BAD$1;
            break;
          }
          state.distbits = 6;
          state.distcode = state.distdyn;
          opts = { bits: state.distbits };
          ret = inflate_table(DISTS$1, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
          state.distbits = opts.bits;
          if (ret) {
            strm.msg = "invalid distances set";
            state.mode = BAD$1;
            break;
          }
          state.mode = LEN_;
          if (flush === Z_TREES$1) {
            break inf_leave;
          }
        /* falls through */
        case LEN_:
          state.mode = LEN;
        /* falls through */
        case LEN:
          if (have >= 6 && left >= 258) {
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            inflate_fast(strm, _out);
            put = strm.next_out;
            output = strm.output;
            left = strm.avail_out;
            next = strm.next_in;
            input = strm.input;
            have = strm.avail_in;
            hold = state.hold;
            bits = state.bits;
            if (state.mode === TYPE$1) {
              state.back = -1;
            }
            break;
          }
          state.back = 0;
          for (; ; ) {
            here = state.lencode[hold & (1 << state.lenbits) - 1];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 255;
            here_val = here & 65535;
            if (here_bits <= bits) {
              break;
            }
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (here_op && (here_op & 240) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (; ; ) {
              here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (last_bits + here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            hold >>>= last_bits;
            bits -= last_bits;
            state.back += last_bits;
          }
          hold >>>= here_bits;
          bits -= here_bits;
          state.back += here_bits;
          state.length = here_val;
          if (here_op === 0) {
            state.mode = LIT;
            break;
          }
          if (here_op & 32) {
            state.back = -1;
            state.mode = TYPE$1;
            break;
          }
          if (here_op & 64) {
            strm.msg = "invalid literal/length code";
            state.mode = BAD$1;
            break;
          }
          state.extra = here_op & 15;
          state.mode = LENEXT;
        /* falls through */
        case LENEXT:
          if (state.extra) {
            n2 = state.extra;
            while (bits < n2) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.length += hold & (1 << state.extra) - 1;
            hold >>>= state.extra;
            bits -= state.extra;
            state.back += state.extra;
          }
          state.was = state.length;
          state.mode = DIST;
        /* falls through */
        case DIST:
          for (; ; ) {
            here = state.distcode[hold & (1 << state.distbits) - 1];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 255;
            here_val = here & 65535;
            if (here_bits <= bits) {
              break;
            }
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if ((here_op & 240) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (; ; ) {
              here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (last_bits + here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            hold >>>= last_bits;
            bits -= last_bits;
            state.back += last_bits;
          }
          hold >>>= here_bits;
          bits -= here_bits;
          state.back += here_bits;
          if (here_op & 64) {
            strm.msg = "invalid distance code";
            state.mode = BAD$1;
            break;
          }
          state.offset = here_val;
          state.extra = here_op & 15;
          state.mode = DISTEXT;
        /* falls through */
        case DISTEXT:
          if (state.extra) {
            n2 = state.extra;
            while (bits < n2) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.offset += hold & (1 << state.extra) - 1;
            hold >>>= state.extra;
            bits -= state.extra;
            state.back += state.extra;
          }
          if (state.offset > state.dmax) {
            strm.msg = "invalid distance too far back";
            state.mode = BAD$1;
            break;
          }
          state.mode = MATCH;
        /* falls through */
        case MATCH:
          if (left === 0) {
            break inf_leave;
          }
          copy = _out - left;
          if (state.offset > copy) {
            copy = state.offset - copy;
            if (copy > state.whave) {
              if (state.sane) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD$1;
                break;
              }
            }
            if (copy > state.wnext) {
              copy -= state.wnext;
              from = state.wsize - copy;
            } else {
              from = state.wnext - copy;
            }
            if (copy > state.length) {
              copy = state.length;
            }
            from_source = state.window;
          } else {
            from_source = output;
            from = put - state.offset;
            copy = state.length;
          }
          if (copy > left) {
            copy = left;
          }
          left -= copy;
          state.length -= copy;
          do {
            output[put++] = from_source[from++];
          } while (--copy);
          if (state.length === 0) {
            state.mode = LEN;
          }
          break;
        case LIT:
          if (left === 0) {
            break inf_leave;
          }
          output[put++] = state.length;
          left--;
          state.mode = LEN;
          break;
        case CHECK:
          if (state.wrap) {
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold |= input[next++] << bits;
              bits += 8;
            }
            _out -= left;
            strm.total_out += _out;
            state.total += _out;
            if (_out) {
              strm.adler = state.check = /*UPDATE(state.check, put - _out, _out);*/
              state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
            }
            _out = left;
            if ((state.flags ? hold : zswap32(hold)) !== state.check) {
              strm.msg = "incorrect data check";
              state.mode = BAD$1;
              break;
            }
            hold = 0;
            bits = 0;
          }
          state.mode = LENGTH;
        /* falls through */
        case LENGTH:
          if (state.wrap && state.flags) {
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (hold !== (state.total & 4294967295)) {
              strm.msg = "incorrect length check";
              state.mode = BAD$1;
              break;
            }
            hold = 0;
            bits = 0;
          }
          state.mode = DONE;
        /* falls through */
        case DONE:
          ret = Z_STREAM_END$1;
          break inf_leave;
        case BAD$1:
          ret = Z_DATA_ERROR$1;
          break inf_leave;
        case MEM:
          return Z_MEM_ERROR;
        case SYNC:
        /* falls through */
        default:
          return Z_STREAM_ERROR$1;
      }
    }
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  if (state.wsize || _out !== strm.avail_out && state.mode < BAD$1 && (state.mode < CHECK || flush !== Z_FINISH$1)) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
    state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE$1 ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if ((_in === 0 && _out === 0 || flush === Z_FINISH$1) && ret === Z_OK$1) {
    ret = Z_BUF_ERROR$1;
  }
  return ret;
}
function inflateEnd(strm) {
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK$1;
}
function inflateGetHeader(strm, head) {
  var state;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  if ((state.wrap & 2) === 0) {
    return Z_STREAM_ERROR$1;
  }
  state.head = head;
  head.done = false;
  return Z_OK$1;
}
function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;
  var state;
  var dictid;
  var ret;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR$1;
  }
  if (state.mode === DICT) {
    dictid = 1;
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR$1;
    }
  }
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  return Z_OK$1;
}
var msg = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
};
function ZStream() {
  this.input = null;
  this.next_in = 0;
  this.avail_in = 0;
  this.total_in = 0;
  this.output = null;
  this.next_out = 0;
  this.avail_out = 0;
  this.total_out = 0;
  this.msg = "";
  this.state = null;
  this.data_type = 2;
  this.adler = 0;
}
function GZheader() {
  this.text = 0;
  this.time = 0;
  this.xflags = 0;
  this.os = 0;
  this.extra = null;
  this.extra_len = 0;
  this.name = "";
  this.comment = "";
  this.hcrc = 0;
  this.done = false;
}
var toString2 = Object.prototype.toString;
var Inflate = function Inflate2(options2) {
  if (!(this instanceof Inflate2)) {
    return new Inflate2(options2);
  }
  this.options = assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ""
  }, options2 || {});
  var opt = this.options;
  if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) {
      opt.windowBits = -15;
    }
  }
  if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options2 && options2.windowBits)) {
    opt.windowBits += 32;
  }
  if (opt.windowBits > 15 && opt.windowBits < 48) {
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new ZStream();
  this.strm.avail_out = 0;
  var status = inflateInit2(
    this.strm,
    opt.windowBits
  );
  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }
  this.header = new GZheader();
  inflateGetHeader(this.strm, this.header);
  if (opt.dictionary) {
    if (typeof opt.dictionary === "string") {
      opt.dictionary = string2buf(opt.dictionary);
    } else if (toString2.call(opt.dictionary) === "[object ArrayBuffer]") {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) {
      status = inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== Z_OK) {
        throw new Error(msg[status]);
      }
    }
  }
};
Inflate.prototype.push = function push(data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;
  var dict;
  var allowBufError = false;
  if (this.ended) {
    return false;
  }
  _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;
  if (typeof data === "string") {
    strm.input = binstring2buf(data);
  } else if (toString2.call(data) === "[object ArrayBuffer]") {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }
  strm.next_in = 0;
  strm.avail_in = strm.input.length;
  do {
    if (strm.avail_out === 0) {
      strm.output = Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = inflate(strm, Z_NO_FLUSH);
    if (status === Z_NEED_DICT && dictionary) {
      if (typeof dictionary === "string") {
        dict = string2buf(dictionary);
      } else if (toString2.call(dictionary) === "[object ArrayBuffer]") {
        dict = new Uint8Array(dictionary);
      } else {
        dict = dictionary;
      }
      status = inflateSetDictionary(this.strm, dict);
    }
    if (status === Z_BUF_ERROR && allowBufError === true) {
      status = Z_OK;
      allowBufError = false;
    }
    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.next_out) {
      if (strm.avail_out === 0 || status === Z_STREAM_END || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
        if (this.options.to === "string") {
          next_out_utf8 = utf8border(strm.output, strm.next_out);
          tail = strm.next_out - next_out_utf8;
          utf8str = buf2string(strm.output, next_out_utf8);
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) {
            arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
          }
          this.onData(utf8str);
        } else {
          this.onData(shrinkBuf(strm.output, strm.next_out));
        }
      }
    }
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
  if (status === Z_STREAM_END) {
    _mode = Z_FINISH;
  }
  if (_mode === Z_FINISH) {
    status = inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }
  return true;
};
Inflate.prototype.onData = function onData(chunk) {
  this.chunks.push(chunk);
};
Inflate.prototype.onEnd = function onEnd(status) {
  if (status === Z_OK) {
    if (this.options.to === "string") {
      this.result = this.chunks.join("");
    } else {
      this.result = flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};
function zero(buf) {
  var len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
}
var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES = 2;
var MIN_MATCH = 3;
var MAX_MATCH = 258;
var LENGTH_CODES = 29;
var LITERALS = 256;
var L_CODES = LITERALS + 1 + LENGTH_CODES;
var D_CODES = 30;
var BL_CODES = 19;
var HEAP_SIZE = 2 * L_CODES + 1;
var MAX_BITS = 15;
var Buf_size = 16;
var MAX_BL_BITS = 7;
var END_BLOCK = 256;
var REP_3_6 = 16;
var REPZ_3_10 = 17;
var REPZ_11_138 = 18;
var extra_lbits = (
  /* extra bits for each length code */
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
);
var extra_dbits = (
  /* extra bits for each distance code */
  [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
);
var extra_blbits = (
  /* extra bits for each bit length code */
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
);
var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
var DIST_CODE_LEN = 512;
var static_ltree;
var static_dtree;
var _dist_code;
var _length_code;
var base_length;
var base_dist;
function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
  this.static_tree = static_tree;
  this.extra_bits = extra_bits;
  this.extra_base = extra_base;
  this.elems = elems;
  this.max_length = max_length;
  this.has_stree = static_tree && static_tree.length;
}
var static_l_desc;
var static_d_desc;
var static_bl_desc;
function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;
  this.max_code = 0;
  this.stat_desc = stat_desc;
}
function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}
function put_short(s2, w2) {
  s2.pending_buf[s2.pending++] = w2 & 255;
  s2.pending_buf[s2.pending++] = w2 >>> 8 & 255;
}
function send_bits(s2, value, length) {
  if (s2.bi_valid > Buf_size - length) {
    s2.bi_buf |= value << s2.bi_valid & 65535;
    put_short(s2, s2.bi_buf);
    s2.bi_buf = value >> Buf_size - s2.bi_valid;
    s2.bi_valid += length - Buf_size;
  } else {
    s2.bi_buf |= value << s2.bi_valid & 65535;
    s2.bi_valid += length;
  }
}
function send_code(s2, c2, tree) {
  send_bits(
    s2,
    tree[c2 * 2],
    tree[c2 * 2 + 1]
    /*.Len*/
  );
}
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}
function bi_flush(s2) {
  if (s2.bi_valid === 16) {
    put_short(s2, s2.bi_buf);
    s2.bi_buf = 0;
    s2.bi_valid = 0;
  } else if (s2.bi_valid >= 8) {
    s2.pending_buf[s2.pending++] = s2.bi_buf & 255;
    s2.bi_buf >>= 8;
    s2.bi_valid -= 8;
  }
}
function gen_bitlen(s2, desc) {
  var tree = desc.dyn_tree;
  var max_code = desc.max_code;
  var stree = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var extra = desc.stat_desc.extra_bits;
  var base = desc.stat_desc.extra_base;
  var max_length = desc.stat_desc.max_length;
  var h2;
  var n2, m2;
  var bits;
  var xbits;
  var f2;
  var overflow = 0;
  for (bits = 0; bits <= MAX_BITS; bits++) {
    s2.bl_count[bits] = 0;
  }
  tree[s2.heap[s2.heap_max] * 2 + 1] = 0;
  for (h2 = s2.heap_max + 1; h2 < HEAP_SIZE; h2++) {
    n2 = s2.heap[h2];
    bits = tree[tree[n2 * 2 + 1] * 2 + 1] + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n2 * 2 + 1] = bits;
    if (n2 > max_code) {
      continue;
    }
    s2.bl_count[bits]++;
    xbits = 0;
    if (n2 >= base) {
      xbits = extra[n2 - base];
    }
    f2 = tree[n2 * 2];
    s2.opt_len += f2 * (bits + xbits);
    if (has_stree) {
      s2.static_len += f2 * (stree[n2 * 2 + 1] + xbits);
    }
  }
  if (overflow === 0) {
    return;
  }
  do {
    bits = max_length - 1;
    while (s2.bl_count[bits] === 0) {
      bits--;
    }
    s2.bl_count[bits]--;
    s2.bl_count[bits + 1] += 2;
    s2.bl_count[max_length]--;
    overflow -= 2;
  } while (overflow > 0);
  for (bits = max_length; bits !== 0; bits--) {
    n2 = s2.bl_count[bits];
    while (n2 !== 0) {
      m2 = s2.heap[--h2];
      if (m2 > max_code) {
        continue;
      }
      if (tree[m2 * 2 + 1] !== bits) {
        s2.opt_len += (bits - tree[m2 * 2 + 1]) * tree[m2 * 2];
        tree[m2 * 2 + 1] = bits;
      }
      n2--;
    }
  }
}
function gen_codes(tree, max_code, bl_count) {
  var next_code = new Array(MAX_BITS + 1);
  var code = 0;
  var bits;
  var n2;
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = code + bl_count[bits - 1] << 1;
  }
  for (n2 = 0; n2 <= max_code; n2++) {
    var len = tree[n2 * 2 + 1];
    if (len === 0) {
      continue;
    }
    tree[n2 * 2] = bi_reverse(next_code[len]++, len);
  }
}
function tr_static_init() {
  var n2;
  var bits;
  var length;
  var code;
  var dist;
  var bl_count = new Array(MAX_BITS + 1);
  static_ltree = new Array((L_CODES + 2) * 2);
  zero(static_ltree);
  static_dtree = new Array(D_CODES * 2);
  zero(static_dtree);
  _dist_code = new Array(DIST_CODE_LEN);
  zero(_dist_code);
  _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
  zero(_length_code);
  base_length = new Array(LENGTH_CODES);
  zero(base_length);
  base_dist = new Array(D_CODES);
  zero(base_dist);
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n2 = 0; n2 < 1 << extra_lbits[code]; n2++) {
      _length_code[length++] = code;
    }
  }
  _length_code[length - 1] = code;
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n2 = 0; n2 < 1 << extra_dbits[code]; n2++) {
      _dist_code[dist++] = code;
    }
  }
  dist >>= 7;
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n2 = 0; n2 < 1 << extra_dbits[code] - 7; n2++) {
      _dist_code[256 + dist++] = code;
    }
  }
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }
  n2 = 0;
  while (n2 <= 143) {
    static_ltree[n2 * 2 + 1] = 8;
    n2++;
    bl_count[8]++;
  }
  while (n2 <= 255) {
    static_ltree[n2 * 2 + 1] = 9;
    n2++;
    bl_count[9]++;
  }
  while (n2 <= 279) {
    static_ltree[n2 * 2 + 1] = 7;
    n2++;
    bl_count[7]++;
  }
  while (n2 <= 287) {
    static_ltree[n2 * 2 + 1] = 8;
    n2++;
    bl_count[8]++;
  }
  gen_codes(static_ltree, L_CODES + 1, bl_count);
  for (n2 = 0; n2 < D_CODES; n2++) {
    static_dtree[n2 * 2 + 1] = 5;
    static_dtree[n2 * 2] = bi_reverse(n2, 5);
  }
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
}
function init_block(s2) {
  var n2;
  for (n2 = 0; n2 < L_CODES; n2++) {
    s2.dyn_ltree[n2 * 2] = 0;
  }
  for (n2 = 0; n2 < D_CODES; n2++) {
    s2.dyn_dtree[n2 * 2] = 0;
  }
  for (n2 = 0; n2 < BL_CODES; n2++) {
    s2.bl_tree[n2 * 2] = 0;
  }
  s2.dyn_ltree[END_BLOCK * 2] = 1;
  s2.opt_len = s2.static_len = 0;
  s2.last_lit = s2.matches = 0;
}
function bi_windup(s2) {
  if (s2.bi_valid > 8) {
    put_short(s2, s2.bi_buf);
  } else if (s2.bi_valid > 0) {
    s2.pending_buf[s2.pending++] = s2.bi_buf;
  }
  s2.bi_buf = 0;
  s2.bi_valid = 0;
}
function copy_block(s2, buf, len, header) {
  bi_windup(s2);
  if (header) {
    put_short(s2, len);
    put_short(s2, ~len);
  }
  arraySet(s2.pending_buf, s2.window, buf, len, s2.pending);
  s2.pending += len;
}
function smaller(tree, n2, m2, depth) {
  var _n2 = n2 * 2;
  var _m2 = m2 * 2;
  return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n2] <= depth[m2];
}
function pqdownheap(s2, tree, k2) {
  var v2 = s2.heap[k2];
  var j = k2 << 1;
  while (j <= s2.heap_len) {
    if (j < s2.heap_len && smaller(tree, s2.heap[j + 1], s2.heap[j], s2.depth)) {
      j++;
    }
    if (smaller(tree, v2, s2.heap[j], s2.depth)) {
      break;
    }
    s2.heap[k2] = s2.heap[j];
    k2 = j;
    j <<= 1;
  }
  s2.heap[k2] = v2;
}
function compress_block(s2, ltree, dtree) {
  var dist;
  var lc;
  var lx = 0;
  var code;
  var extra;
  if (s2.last_lit !== 0) {
    do {
      dist = s2.pending_buf[s2.d_buf + lx * 2] << 8 | s2.pending_buf[s2.d_buf + lx * 2 + 1];
      lc = s2.pending_buf[s2.l_buf + lx];
      lx++;
      if (dist === 0) {
        send_code(s2, lc, ltree);
      } else {
        code = _length_code[lc];
        send_code(s2, code + LITERALS + 1, ltree);
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s2, lc, extra);
        }
        dist--;
        code = d_code(dist);
        send_code(s2, code, dtree);
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s2, dist, extra);
        }
      }
    } while (lx < s2.last_lit);
  }
  send_code(s2, END_BLOCK, ltree);
}
function build_tree(s2, desc) {
  var tree = desc.dyn_tree;
  var stree = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems = desc.stat_desc.elems;
  var n2, m2;
  var max_code = -1;
  var node;
  s2.heap_len = 0;
  s2.heap_max = HEAP_SIZE;
  for (n2 = 0; n2 < elems; n2++) {
    if (tree[n2 * 2] !== 0) {
      s2.heap[++s2.heap_len] = max_code = n2;
      s2.depth[n2] = 0;
    } else {
      tree[n2 * 2 + 1] = 0;
    }
  }
  while (s2.heap_len < 2) {
    node = s2.heap[++s2.heap_len] = max_code < 2 ? ++max_code : 0;
    tree[node * 2] = 1;
    s2.depth[node] = 0;
    s2.opt_len--;
    if (has_stree) {
      s2.static_len -= stree[node * 2 + 1];
    }
  }
  desc.max_code = max_code;
  for (n2 = s2.heap_len >> 1; n2 >= 1; n2--) {
    pqdownheap(s2, tree, n2);
  }
  node = elems;
  do {
    n2 = s2.heap[
      1
      /*SMALLEST*/
    ];
    s2.heap[
      1
      /*SMALLEST*/
    ] = s2.heap[s2.heap_len--];
    pqdownheap(
      s2,
      tree,
      1
      /*SMALLEST*/
    );
    m2 = s2.heap[
      1
      /*SMALLEST*/
    ];
    s2.heap[--s2.heap_max] = n2;
    s2.heap[--s2.heap_max] = m2;
    tree[node * 2] = tree[n2 * 2] + tree[m2 * 2];
    s2.depth[node] = (s2.depth[n2] >= s2.depth[m2] ? s2.depth[n2] : s2.depth[m2]) + 1;
    tree[n2 * 2 + 1] = tree[m2 * 2 + 1] = node;
    s2.heap[
      1
      /*SMALLEST*/
    ] = node++;
    pqdownheap(
      s2,
      tree,
      1
      /*SMALLEST*/
    );
  } while (s2.heap_len >= 2);
  s2.heap[--s2.heap_max] = s2.heap[
    1
    /*SMALLEST*/
  ];
  gen_bitlen(s2, desc);
  gen_codes(tree, max_code, s2.bl_count);
}
function scan_tree(s2, tree, max_code) {
  var n2;
  var prevlen = -1;
  var curlen;
  var nextlen = tree[0 * 2 + 1];
  var count = 0;
  var max_count = 7;
  var min_count = 4;
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1] = 65535;
  for (n2 = 0; n2 <= max_code; n2++) {
    curlen = nextlen;
    nextlen = tree[(n2 + 1) * 2 + 1];
    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      s2.bl_tree[curlen * 2] += count;
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        s2.bl_tree[curlen * 2]++;
      }
      s2.bl_tree[REP_3_6 * 2]++;
    } else if (count <= 10) {
      s2.bl_tree[REPZ_3_10 * 2]++;
    } else {
      s2.bl_tree[REPZ_11_138 * 2]++;
    }
    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}
function send_tree(s2, tree, max_code) {
  var n2;
  var prevlen = -1;
  var curlen;
  var nextlen = tree[0 * 2 + 1];
  var count = 0;
  var max_count = 7;
  var min_count = 4;
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  for (n2 = 0; n2 <= max_code; n2++) {
    curlen = nextlen;
    nextlen = tree[(n2 + 1) * 2 + 1];
    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      do {
        send_code(s2, curlen, s2.bl_tree);
      } while (--count !== 0);
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s2, curlen, s2.bl_tree);
        count--;
      }
      send_code(s2, REP_3_6, s2.bl_tree);
      send_bits(s2, count - 3, 2);
    } else if (count <= 10) {
      send_code(s2, REPZ_3_10, s2.bl_tree);
      send_bits(s2, count - 3, 3);
    } else {
      send_code(s2, REPZ_11_138, s2.bl_tree);
      send_bits(s2, count - 11, 7);
    }
    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}
function build_bl_tree(s2) {
  var max_blindex;
  scan_tree(s2, s2.dyn_ltree, s2.l_desc.max_code);
  scan_tree(s2, s2.dyn_dtree, s2.d_desc.max_code);
  build_tree(s2, s2.bl_desc);
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s2.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
      break;
    }
  }
  s2.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  return max_blindex;
}
function send_all_trees(s2, lcodes, dcodes, blcodes) {
  var rank2;
  send_bits(s2, lcodes - 257, 5);
  send_bits(s2, dcodes - 1, 5);
  send_bits(s2, blcodes - 4, 4);
  for (rank2 = 0; rank2 < blcodes; rank2++) {
    send_bits(s2, s2.bl_tree[bl_order[rank2] * 2 + 1], 3);
  }
  send_tree(s2, s2.dyn_ltree, lcodes - 1);
  send_tree(s2, s2.dyn_dtree, dcodes - 1);
}
function detect_data_type(s2) {
  var black_mask = 4093624447;
  var n2;
  for (n2 = 0; n2 <= 31; n2++, black_mask >>>= 1) {
    if (black_mask & 1 && s2.dyn_ltree[n2 * 2] !== 0) {
      return Z_BINARY;
    }
  }
  if (s2.dyn_ltree[9 * 2] !== 0 || s2.dyn_ltree[10 * 2] !== 0 || s2.dyn_ltree[13 * 2] !== 0) {
    return Z_TEXT;
  }
  for (n2 = 32; n2 < LITERALS; n2++) {
    if (s2.dyn_ltree[n2 * 2] !== 0) {
      return Z_TEXT;
    }
  }
  return Z_BINARY;
}
var static_init_done = false;
function _tr_init(s2) {
  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }
  s2.l_desc = new TreeDesc(s2.dyn_ltree, static_l_desc);
  s2.d_desc = new TreeDesc(s2.dyn_dtree, static_d_desc);
  s2.bl_desc = new TreeDesc(s2.bl_tree, static_bl_desc);
  s2.bi_buf = 0;
  s2.bi_valid = 0;
  init_block(s2);
}
function _tr_stored_block(s2, buf, stored_len, last2) {
  send_bits(s2, (STORED_BLOCK << 1) + (last2 ? 1 : 0), 3);
  copy_block(s2, buf, stored_len, true);
}
function _tr_align(s2) {
  send_bits(s2, STATIC_TREES << 1, 3);
  send_code(s2, END_BLOCK, static_ltree);
  bi_flush(s2);
}
function _tr_flush_block(s2, buf, stored_len, last2) {
  var opt_lenb, static_lenb;
  var max_blindex = 0;
  if (s2.level > 0) {
    if (s2.strm.data_type === Z_UNKNOWN) {
      s2.strm.data_type = detect_data_type(s2);
    }
    build_tree(s2, s2.l_desc);
    build_tree(s2, s2.d_desc);
    max_blindex = build_bl_tree(s2);
    opt_lenb = s2.opt_len + 3 + 7 >>> 3;
    static_lenb = s2.static_len + 3 + 7 >>> 3;
    if (static_lenb <= opt_lenb) {
      opt_lenb = static_lenb;
    }
  } else {
    opt_lenb = static_lenb = stored_len + 5;
  }
  if (stored_len + 4 <= opt_lenb && buf !== -1) {
    _tr_stored_block(s2, buf, stored_len, last2);
  } else if (s2.strategy === Z_FIXED || static_lenb === opt_lenb) {
    send_bits(s2, (STATIC_TREES << 1) + (last2 ? 1 : 0), 3);
    compress_block(s2, static_ltree, static_dtree);
  } else {
    send_bits(s2, (DYN_TREES << 1) + (last2 ? 1 : 0), 3);
    send_all_trees(s2, s2.l_desc.max_code + 1, s2.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s2, s2.dyn_ltree, s2.dyn_dtree);
  }
  init_block(s2);
  if (last2) {
    bi_windup(s2);
  }
}
function _tr_tally(s2, dist, lc) {
  s2.pending_buf[s2.d_buf + s2.last_lit * 2] = dist >>> 8 & 255;
  s2.pending_buf[s2.d_buf + s2.last_lit * 2 + 1] = dist & 255;
  s2.pending_buf[s2.l_buf + s2.last_lit] = lc & 255;
  s2.last_lit++;
  if (dist === 0) {
    s2.dyn_ltree[lc * 2]++;
  } else {
    s2.matches++;
    dist--;
    s2.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
    s2.dyn_dtree[d_code(dist) * 2]++;
  }
  return s2.last_lit === s2.lit_bufsize - 1;
}
var MAX_MEM_LEVEL = 9;
var LENGTH_CODES$1 = 29;
var LITERALS$1 = 256;
var L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
var D_CODES$1 = 30;
var BL_CODES$1 = 19;
var HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
var MAX_BITS$1 = 15;
var MIN_MATCH$1 = 3;
var MAX_MATCH$1 = 258;
var MIN_LOOKAHEAD = MAX_MATCH$1 + MIN_MATCH$1 + 1;
var PRESET_DICT = 32;
var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;
var BS_NEED_MORE = 1;
var BS_BLOCK_DONE = 2;
var BS_FINISH_STARTED = 3;
var BS_FINISH_DONE = 4;
var OS_CODE = 3;
function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}
function rank(f2) {
  return (f2 << 1) - (f2 > 4 ? 9 : 0);
}
function zero$1(buf) {
  var len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
}
function flush_pending(strm) {
  var s2 = strm.state;
  var len = s2.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) {
    return;
  }
  arraySet(strm.output, s2.pending_buf, s2.pending_out, len, strm.next_out);
  strm.next_out += len;
  s2.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s2.pending -= len;
  if (s2.pending === 0) {
    s2.pending_out = 0;
  }
}
function flush_block_only(s2, last2) {
  _tr_flush_block(s2, s2.block_start >= 0 ? s2.block_start : -1, s2.strstart - s2.block_start, last2);
  s2.block_start = s2.strstart;
  flush_pending(s2.strm);
}
function put_byte(s2, b) {
  s2.pending_buf[s2.pending++] = b;
}
function putShortMSB(s2, b) {
  s2.pending_buf[s2.pending++] = b >>> 8 & 255;
  s2.pending_buf[s2.pending++] = b & 255;
}
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;
  if (len > size) {
    len = size;
  }
  if (len === 0) {
    return 0;
  }
  strm.avail_in -= len;
  arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  } else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }
  strm.next_in += len;
  strm.total_in += len;
  return len;
}
function longest_match(s2, cur_match) {
  var chain_length = s2.max_chain_length;
  var scan = s2.strstart;
  var match;
  var len;
  var best_len = s2.prev_length;
  var nice_match = s2.nice_match;
  var limit = s2.strstart > s2.w_size - MIN_LOOKAHEAD ? s2.strstart - (s2.w_size - MIN_LOOKAHEAD) : 0;
  var _win = s2.window;
  var wmask = s2.w_mask;
  var prev = s2.prev;
  var strend = s2.strstart + MAX_MATCH$1;
  var scan_end1 = _win[scan + best_len - 1];
  var scan_end = _win[scan + best_len];
  if (s2.prev_length >= s2.good_match) {
    chain_length >>= 2;
  }
  if (nice_match > s2.lookahead) {
    nice_match = s2.lookahead;
  }
  do {
    match = cur_match;
    if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
      continue;
    }
    scan += 2;
    match++;
    do {
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
    len = MAX_MATCH$1 - (strend - scan);
    scan = strend - MAX_MATCH$1;
    if (len > best_len) {
      s2.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1 = _win[scan + best_len - 1];
      scan_end = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
  if (best_len <= s2.lookahead) {
    return best_len;
  }
  return s2.lookahead;
}
function fill_window(s2) {
  var _w_size = s2.w_size;
  var p2, n2, m2, more, str;
  do {
    more = s2.window_size - s2.lookahead - s2.strstart;
    if (s2.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
      arraySet(s2.window, s2.window, _w_size, _w_size, 0);
      s2.match_start -= _w_size;
      s2.strstart -= _w_size;
      s2.block_start -= _w_size;
      n2 = s2.hash_size;
      p2 = n2;
      do {
        m2 = s2.head[--p2];
        s2.head[p2] = m2 >= _w_size ? m2 - _w_size : 0;
      } while (--n2);
      n2 = _w_size;
      p2 = n2;
      do {
        m2 = s2.prev[--p2];
        s2.prev[p2] = m2 >= _w_size ? m2 - _w_size : 0;
      } while (--n2);
      more += _w_size;
    }
    if (s2.strm.avail_in === 0) {
      break;
    }
    n2 = read_buf(s2.strm, s2.window, s2.strstart + s2.lookahead, more);
    s2.lookahead += n2;
    if (s2.lookahead + s2.insert >= MIN_MATCH$1) {
      str = s2.strstart - s2.insert;
      s2.ins_h = s2.window[str];
      s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[str + 1]) & s2.hash_mask;
      while (s2.insert) {
        s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[str + MIN_MATCH$1 - 1]) & s2.hash_mask;
        s2.prev[str & s2.w_mask] = s2.head[s2.ins_h];
        s2.head[s2.ins_h] = str;
        str++;
        s2.insert--;
        if (s2.lookahead + s2.insert < MIN_MATCH$1) {
          break;
        }
      }
    }
  } while (s2.lookahead < MIN_LOOKAHEAD && s2.strm.avail_in !== 0);
}
function deflate_stored(s2, flush) {
  var max_block_size = 65535;
  if (max_block_size > s2.pending_buf_size - 5) {
    max_block_size = s2.pending_buf_size - 5;
  }
  for (; ; ) {
    if (s2.lookahead <= 1) {
      fill_window(s2);
      if (s2.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s2.lookahead === 0) {
        break;
      }
    }
    s2.strstart += s2.lookahead;
    s2.lookahead = 0;
    var max_start = s2.block_start + max_block_size;
    if (s2.strstart === 0 || s2.strstart >= max_start) {
      s2.lookahead = s2.strstart - max_start;
      s2.strstart = max_start;
      flush_block_only(s2, false);
      if (s2.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    if (s2.strstart - s2.block_start >= s2.w_size - MIN_LOOKAHEAD) {
      flush_block_only(s2, false);
      if (s2.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s2.insert = 0;
  if (flush === Z_FINISH) {
    flush_block_only(s2, true);
    if (s2.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s2.strstart > s2.block_start) {
    flush_block_only(s2, false);
    if (s2.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_NEED_MORE;
}
function deflate_fast(s2, flush) {
  var hash_head;
  var bflush;
  for (; ; ) {
    if (s2.lookahead < MIN_LOOKAHEAD) {
      fill_window(s2);
      if (s2.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s2.lookahead === 0) {
        break;
      }
    }
    hash_head = 0;
    if (s2.lookahead >= MIN_MATCH$1) {
      s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[s2.strstart + MIN_MATCH$1 - 1]) & s2.hash_mask;
      hash_head = s2.prev[s2.strstart & s2.w_mask] = s2.head[s2.ins_h];
      s2.head[s2.ins_h] = s2.strstart;
    }
    if (hash_head !== 0 && s2.strstart - hash_head <= s2.w_size - MIN_LOOKAHEAD) {
      s2.match_length = longest_match(s2, hash_head);
    }
    if (s2.match_length >= MIN_MATCH$1) {
      bflush = _tr_tally(s2, s2.strstart - s2.match_start, s2.match_length - MIN_MATCH$1);
      s2.lookahead -= s2.match_length;
      if (s2.match_length <= s2.max_lazy_match && s2.lookahead >= MIN_MATCH$1) {
        s2.match_length--;
        do {
          s2.strstart++;
          s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[s2.strstart + MIN_MATCH$1 - 1]) & s2.hash_mask;
          hash_head = s2.prev[s2.strstart & s2.w_mask] = s2.head[s2.ins_h];
          s2.head[s2.ins_h] = s2.strstart;
        } while (--s2.match_length !== 0);
        s2.strstart++;
      } else {
        s2.strstart += s2.match_length;
        s2.match_length = 0;
        s2.ins_h = s2.window[s2.strstart];
        s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[s2.strstart + 1]) & s2.hash_mask;
      }
    } else {
      bflush = _tr_tally(s2, 0, s2.window[s2.strstart]);
      s2.lookahead--;
      s2.strstart++;
    }
    if (bflush) {
      flush_block_only(s2, false);
      if (s2.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s2.insert = s2.strstart < MIN_MATCH$1 - 1 ? s2.strstart : MIN_MATCH$1 - 1;
  if (flush === Z_FINISH) {
    flush_block_only(s2, true);
    if (s2.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s2.last_lit) {
    flush_block_only(s2, false);
    if (s2.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function deflate_slow(s2, flush) {
  var hash_head;
  var bflush;
  var max_insert;
  for (; ; ) {
    if (s2.lookahead < MIN_LOOKAHEAD) {
      fill_window(s2);
      if (s2.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s2.lookahead === 0) {
        break;
      }
    }
    hash_head = 0;
    if (s2.lookahead >= MIN_MATCH$1) {
      s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[s2.strstart + MIN_MATCH$1 - 1]) & s2.hash_mask;
      hash_head = s2.prev[s2.strstart & s2.w_mask] = s2.head[s2.ins_h];
      s2.head[s2.ins_h] = s2.strstart;
    }
    s2.prev_length = s2.match_length;
    s2.prev_match = s2.match_start;
    s2.match_length = MIN_MATCH$1 - 1;
    if (hash_head !== 0 && s2.prev_length < s2.max_lazy_match && s2.strstart - hash_head <= s2.w_size - MIN_LOOKAHEAD) {
      s2.match_length = longest_match(s2, hash_head);
      if (s2.match_length <= 5 && (s2.strategy === Z_FILTERED || s2.match_length === MIN_MATCH$1 && s2.strstart - s2.match_start > 4096)) {
        s2.match_length = MIN_MATCH$1 - 1;
      }
    }
    if (s2.prev_length >= MIN_MATCH$1 && s2.match_length <= s2.prev_length) {
      max_insert = s2.strstart + s2.lookahead - MIN_MATCH$1;
      bflush = _tr_tally(s2, s2.strstart - 1 - s2.prev_match, s2.prev_length - MIN_MATCH$1);
      s2.lookahead -= s2.prev_length - 1;
      s2.prev_length -= 2;
      do {
        if (++s2.strstart <= max_insert) {
          s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[s2.strstart + MIN_MATCH$1 - 1]) & s2.hash_mask;
          hash_head = s2.prev[s2.strstart & s2.w_mask] = s2.head[s2.ins_h];
          s2.head[s2.ins_h] = s2.strstart;
        }
      } while (--s2.prev_length !== 0);
      s2.match_available = 0;
      s2.match_length = MIN_MATCH$1 - 1;
      s2.strstart++;
      if (bflush) {
        flush_block_only(s2, false);
        if (s2.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    } else if (s2.match_available) {
      bflush = _tr_tally(s2, 0, s2.window[s2.strstart - 1]);
      if (bflush) {
        flush_block_only(s2, false);
      }
      s2.strstart++;
      s2.lookahead--;
      if (s2.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      s2.match_available = 1;
      s2.strstart++;
      s2.lookahead--;
    }
  }
  if (s2.match_available) {
    bflush = _tr_tally(s2, 0, s2.window[s2.strstart - 1]);
    s2.match_available = 0;
  }
  s2.insert = s2.strstart < MIN_MATCH$1 - 1 ? s2.strstart : MIN_MATCH$1 - 1;
  if (flush === Z_FINISH) {
    flush_block_only(s2, true);
    if (s2.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s2.last_lit) {
    flush_block_only(s2, false);
    if (s2.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function deflate_rle(s2, flush) {
  var bflush;
  var prev;
  var scan, strend;
  var _win = s2.window;
  for (; ; ) {
    if (s2.lookahead <= MAX_MATCH$1) {
      fill_window(s2);
      if (s2.lookahead <= MAX_MATCH$1 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s2.lookahead === 0) {
        break;
      }
    }
    s2.match_length = 0;
    if (s2.lookahead >= MIN_MATCH$1 && s2.strstart > 0) {
      scan = s2.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s2.strstart + MAX_MATCH$1;
        do {
        } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
        s2.match_length = MAX_MATCH$1 - (strend - scan);
        if (s2.match_length > s2.lookahead) {
          s2.match_length = s2.lookahead;
        }
      }
    }
    if (s2.match_length >= MIN_MATCH$1) {
      bflush = _tr_tally(s2, 1, s2.match_length - MIN_MATCH$1);
      s2.lookahead -= s2.match_length;
      s2.strstart += s2.match_length;
      s2.match_length = 0;
    } else {
      bflush = _tr_tally(s2, 0, s2.window[s2.strstart]);
      s2.lookahead--;
      s2.strstart++;
    }
    if (bflush) {
      flush_block_only(s2, false);
      if (s2.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s2.insert = 0;
  if (flush === Z_FINISH) {
    flush_block_only(s2, true);
    if (s2.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s2.last_lit) {
    flush_block_only(s2, false);
    if (s2.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function deflate_huff(s2, flush) {
  var bflush;
  for (; ; ) {
    if (s2.lookahead === 0) {
      fill_window(s2);
      if (s2.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;
      }
    }
    s2.match_length = 0;
    bflush = _tr_tally(s2, 0, s2.window[s2.strstart]);
    s2.lookahead--;
    s2.strstart++;
    if (bflush) {
      flush_block_only(s2, false);
      if (s2.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s2.insert = 0;
  if (flush === Z_FINISH) {
    flush_block_only(s2, true);
    if (s2.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s2.last_lit) {
    flush_block_only(s2, false);
    if (s2.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}
var configurationTable = function() {
  var table = [
    /*      good lazy nice chain */
    new Config(0, 0, 0, 0, deflate_stored),
    /* 0 store only */
    new Config(4, 4, 8, 4, deflate_fast),
    /* 1 max speed, no lazy matches */
    new Config(4, 5, 16, 8, deflate_fast),
    /* 2 */
    new Config(4, 6, 32, 32, deflate_fast),
    /* 3 */
    new Config(4, 4, 16, 16, deflate_slow),
    /* 4 lazy matches */
    new Config(8, 16, 32, 32, deflate_slow),
    /* 5 */
    new Config(8, 16, 128, 128, deflate_slow),
    /* 6 */
    new Config(8, 32, 128, 256, deflate_slow),
    /* 7 */
    new Config(32, 128, 258, 1024, deflate_slow),
    /* 8 */
    new Config(32, 258, 258, 4096, deflate_slow)
    /* 9 max compression */
  ];
  configurationTable = function() {
    return table;
  };
  return table;
};
function lm_init(s2) {
  s2.window_size = 2 * s2.w_size;
  zero$1(s2.head);
  var table = configurationTable();
  s2.max_lazy_match = table[s2.level].max_lazy;
  s2.good_match = table[s2.level].good_length;
  s2.nice_match = table[s2.level].nice_length;
  s2.max_chain_length = table[s2.level].max_chain;
  s2.strstart = 0;
  s2.block_start = 0;
  s2.lookahead = 0;
  s2.insert = 0;
  s2.match_length = s2.prev_length = MIN_MATCH$1 - 1;
  s2.match_available = 0;
  s2.ins_h = 0;
}
function DeflateState() {
  this.strm = null;
  this.status = 0;
  this.pending_buf = null;
  this.pending_buf_size = 0;
  this.pending_out = 0;
  this.pending = 0;
  this.wrap = 0;
  this.gzhead = null;
  this.gzindex = 0;
  this.method = Z_DEFLATED;
  this.last_flush = -1;
  this.w_size = 0;
  this.w_bits = 0;
  this.w_mask = 0;
  this.window = null;
  this.window_size = 0;
  this.prev = null;
  this.head = null;
  this.ins_h = 0;
  this.hash_size = 0;
  this.hash_bits = 0;
  this.hash_mask = 0;
  this.hash_shift = 0;
  this.block_start = 0;
  this.match_length = 0;
  this.prev_match = 0;
  this.match_available = 0;
  this.strstart = 0;
  this.match_start = 0;
  this.lookahead = 0;
  this.prev_length = 0;
  this.max_chain_length = 0;
  this.max_lazy_match = 0;
  this.level = 0;
  this.strategy = 0;
  this.good_match = 0;
  this.nice_match = 0;
  this.dyn_ltree = Buf16(HEAP_SIZE$1 * 2);
  this.dyn_dtree = Buf16((2 * D_CODES$1 + 1) * 2);
  this.bl_tree = Buf16((2 * BL_CODES$1 + 1) * 2);
  zero$1(this.dyn_ltree);
  zero$1(this.dyn_dtree);
  zero$1(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  this.bl_count = Buf16(MAX_BITS$1 + 1);
  this.heap = Buf16(2 * L_CODES$1 + 1);
  zero$1(this.heap);
  this.heap_len = 0;
  this.heap_max = 0;
  this.depth = Buf16(2 * L_CODES$1 + 1);
  zero$1(this.depth);
  this.l_buf = 0;
  this.lit_bufsize = 0;
  this.last_lit = 0;
  this.d_buf = 0;
  this.opt_len = 0;
  this.static_len = 0;
  this.matches = 0;
  this.insert = 0;
  this.bi_buf = 0;
  this.bi_valid = 0;
}
function deflateResetKeep(strm) {
  var s2;
  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }
  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;
  s2 = strm.state;
  s2.pending = 0;
  s2.pending_out = 0;
  if (s2.wrap < 0) {
    s2.wrap = -s2.wrap;
  }
  s2.status = s2.wrap ? INIT_STATE : BUSY_STATE;
  strm.adler = s2.wrap === 2 ? 0 : 1;
  s2.last_flush = Z_NO_FLUSH;
  _tr_init(s2);
  return Z_OK;
}
function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}
function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR;
  }
  if (strm.state.wrap !== 2) {
    return Z_STREAM_ERROR;
  }
  strm.state.gzhead = head;
  return Z_OK;
}
function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) {
    return Z_STREAM_ERROR;
  }
  var wrap2 = 1;
  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }
  if (windowBits < 0) {
    wrap2 = 0;
    windowBits = -windowBits;
  } else if (windowBits > 15) {
    wrap2 = 2;
    windowBits -= 16;
  }
  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }
  if (windowBits === 8) {
    windowBits = 9;
  }
  var s2 = new DeflateState();
  strm.state = s2;
  s2.strm = strm;
  s2.wrap = wrap2;
  s2.gzhead = null;
  s2.w_bits = windowBits;
  s2.w_size = 1 << s2.w_bits;
  s2.w_mask = s2.w_size - 1;
  s2.hash_bits = memLevel + 7;
  s2.hash_size = 1 << s2.hash_bits;
  s2.hash_mask = s2.hash_size - 1;
  s2.hash_shift = ~~((s2.hash_bits + MIN_MATCH$1 - 1) / MIN_MATCH$1);
  s2.window = Buf8(s2.w_size * 2);
  s2.head = Buf16(s2.hash_size);
  s2.prev = Buf16(s2.w_size);
  s2.lit_bufsize = 1 << memLevel + 6;
  s2.pending_buf_size = s2.lit_bufsize * 4;
  s2.pending_buf = Buf8(s2.pending_buf_size);
  s2.d_buf = 1 * s2.lit_bufsize;
  s2.l_buf = (1 + 2) * s2.lit_bufsize;
  s2.level = level;
  s2.strategy = strategy;
  s2.method = method;
  return deflateReset(strm);
}
function deflate(strm, flush) {
  var old_flush, s2;
  var beg, val;
  if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }
  s2 = strm.state;
  if (!strm.output || !strm.input && strm.avail_in !== 0 || s2.status === FINISH_STATE && flush !== Z_FINISH) {
    return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }
  s2.strm = strm;
  old_flush = s2.last_flush;
  s2.last_flush = flush;
  if (s2.status === INIT_STATE) {
    if (s2.wrap === 2) {
      strm.adler = 0;
      put_byte(s2, 31);
      put_byte(s2, 139);
      put_byte(s2, 8);
      if (!s2.gzhead) {
        put_byte(s2, 0);
        put_byte(s2, 0);
        put_byte(s2, 0);
        put_byte(s2, 0);
        put_byte(s2, 0);
        put_byte(s2, s2.level === 9 ? 2 : s2.strategy >= Z_HUFFMAN_ONLY || s2.level < 2 ? 4 : 0);
        put_byte(s2, OS_CODE);
        s2.status = BUSY_STATE;
      } else {
        put_byte(
          s2,
          (s2.gzhead.text ? 1 : 0) + (s2.gzhead.hcrc ? 2 : 0) + (!s2.gzhead.extra ? 0 : 4) + (!s2.gzhead.name ? 0 : 8) + (!s2.gzhead.comment ? 0 : 16)
        );
        put_byte(s2, s2.gzhead.time & 255);
        put_byte(s2, s2.gzhead.time >> 8 & 255);
        put_byte(s2, s2.gzhead.time >> 16 & 255);
        put_byte(s2, s2.gzhead.time >> 24 & 255);
        put_byte(s2, s2.level === 9 ? 2 : s2.strategy >= Z_HUFFMAN_ONLY || s2.level < 2 ? 4 : 0);
        put_byte(s2, s2.gzhead.os & 255);
        if (s2.gzhead.extra && s2.gzhead.extra.length) {
          put_byte(s2, s2.gzhead.extra.length & 255);
          put_byte(s2, s2.gzhead.extra.length >> 8 & 255);
        }
        if (s2.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s2.pending_buf, s2.pending, 0);
        }
        s2.gzindex = 0;
        s2.status = EXTRA_STATE;
      }
    } else {
      var header = Z_DEFLATED + (s2.w_bits - 8 << 4) << 8;
      var level_flags = -1;
      if (s2.strategy >= Z_HUFFMAN_ONLY || s2.level < 2) {
        level_flags = 0;
      } else if (s2.level < 6) {
        level_flags = 1;
      } else if (s2.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= level_flags << 6;
      if (s2.strstart !== 0) {
        header |= PRESET_DICT;
      }
      header += 31 - header % 31;
      s2.status = BUSY_STATE;
      putShortMSB(s2, header);
      if (s2.strstart !== 0) {
        putShortMSB(s2, strm.adler >>> 16);
        putShortMSB(s2, strm.adler & 65535);
      }
      strm.adler = 1;
    }
  }
  if (s2.status === EXTRA_STATE) {
    if (s2.gzhead.extra) {
      beg = s2.pending;
      while (s2.gzindex < (s2.gzhead.extra.length & 65535)) {
        if (s2.pending === s2.pending_buf_size) {
          if (s2.gzhead.hcrc && s2.pending > beg) {
            strm.adler = crc32(strm.adler, s2.pending_buf, s2.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s2.pending;
          if (s2.pending === s2.pending_buf_size) {
            break;
          }
        }
        put_byte(s2, s2.gzhead.extra[s2.gzindex] & 255);
        s2.gzindex++;
      }
      if (s2.gzhead.hcrc && s2.pending > beg) {
        strm.adler = crc32(strm.adler, s2.pending_buf, s2.pending - beg, beg);
      }
      if (s2.gzindex === s2.gzhead.extra.length) {
        s2.gzindex = 0;
        s2.status = NAME_STATE;
      }
    } else {
      s2.status = NAME_STATE;
    }
  }
  if (s2.status === NAME_STATE) {
    if (s2.gzhead.name) {
      beg = s2.pending;
      do {
        if (s2.pending === s2.pending_buf_size) {
          if (s2.gzhead.hcrc && s2.pending > beg) {
            strm.adler = crc32(strm.adler, s2.pending_buf, s2.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s2.pending;
          if (s2.pending === s2.pending_buf_size) {
            val = 1;
            break;
          }
        }
        if (s2.gzindex < s2.gzhead.name.length) {
          val = s2.gzhead.name.charCodeAt(s2.gzindex++) & 255;
        } else {
          val = 0;
        }
        put_byte(s2, val);
      } while (val !== 0);
      if (s2.gzhead.hcrc && s2.pending > beg) {
        strm.adler = crc32(strm.adler, s2.pending_buf, s2.pending - beg, beg);
      }
      if (val === 0) {
        s2.gzindex = 0;
        s2.status = COMMENT_STATE;
      }
    } else {
      s2.status = COMMENT_STATE;
    }
  }
  if (s2.status === COMMENT_STATE) {
    if (s2.gzhead.comment) {
      beg = s2.pending;
      do {
        if (s2.pending === s2.pending_buf_size) {
          if (s2.gzhead.hcrc && s2.pending > beg) {
            strm.adler = crc32(strm.adler, s2.pending_buf, s2.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s2.pending;
          if (s2.pending === s2.pending_buf_size) {
            val = 1;
            break;
          }
        }
        if (s2.gzindex < s2.gzhead.comment.length) {
          val = s2.gzhead.comment.charCodeAt(s2.gzindex++) & 255;
        } else {
          val = 0;
        }
        put_byte(s2, val);
      } while (val !== 0);
      if (s2.gzhead.hcrc && s2.pending > beg) {
        strm.adler = crc32(strm.adler, s2.pending_buf, s2.pending - beg, beg);
      }
      if (val === 0) {
        s2.status = HCRC_STATE;
      }
    } else {
      s2.status = HCRC_STATE;
    }
  }
  if (s2.status === HCRC_STATE) {
    if (s2.gzhead.hcrc) {
      if (s2.pending + 2 > s2.pending_buf_size) {
        flush_pending(strm);
      }
      if (s2.pending + 2 <= s2.pending_buf_size) {
        put_byte(s2, strm.adler & 255);
        put_byte(s2, strm.adler >> 8 & 255);
        strm.adler = 0;
        s2.status = BUSY_STATE;
      }
    } else {
      s2.status = BUSY_STATE;
    }
  }
  if (s2.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      s2.last_flush = -1;
      return Z_OK;
    }
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }
  if (s2.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }
  if (strm.avail_in !== 0 || s2.lookahead !== 0 || flush !== Z_NO_FLUSH && s2.status !== FINISH_STATE) {
    var bstate = s2.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s2, flush) : s2.strategy === Z_RLE ? deflate_rle(s2, flush) : configurationTable()[s2.level].func(s2, flush);
    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s2.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s2.last_flush = -1;
      }
      return Z_OK;
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        _tr_align(s2);
      } else if (flush !== Z_BLOCK) {
        _tr_stored_block(s2, 0, 0, false);
        if (flush === Z_FULL_FLUSH) {
          zero$1(s2.head);
          if (s2.lookahead === 0) {
            s2.strstart = 0;
            s2.block_start = 0;
            s2.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s2.last_flush = -1;
        return Z_OK;
      }
    }
  }
  if (flush !== Z_FINISH) {
    return Z_OK;
  }
  if (s2.wrap <= 0) {
    return Z_STREAM_END;
  }
  if (s2.wrap === 2) {
    put_byte(s2, strm.adler & 255);
    put_byte(s2, strm.adler >> 8 & 255);
    put_byte(s2, strm.adler >> 16 & 255);
    put_byte(s2, strm.adler >> 24 & 255);
    put_byte(s2, strm.total_in & 255);
    put_byte(s2, strm.total_in >> 8 & 255);
    put_byte(s2, strm.total_in >> 16 & 255);
    put_byte(s2, strm.total_in >> 24 & 255);
  } else {
    putShortMSB(s2, strm.adler >>> 16);
    putShortMSB(s2, strm.adler & 65535);
  }
  flush_pending(strm);
  if (s2.wrap > 0) {
    s2.wrap = -s2.wrap;
  }
  return s2.pending !== 0 ? Z_OK : Z_STREAM_END;
}
function deflateEnd(strm) {
  var status;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR;
  }
  status = strm.state.status;
  if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
    return err(strm, Z_STREAM_ERROR);
  }
  strm.state = null;
  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;
  var s2;
  var str, n2;
  var wrap2;
  var avail;
  var next;
  var input;
  var tmpDict;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR;
  }
  s2 = strm.state;
  wrap2 = s2.wrap;
  if (wrap2 === 2 || wrap2 === 1 && s2.status !== INIT_STATE || s2.lookahead) {
    return Z_STREAM_ERROR;
  }
  if (wrap2 === 1) {
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }
  s2.wrap = 0;
  if (dictLength >= s2.w_size) {
    if (wrap2 === 0) {
      zero$1(s2.head);
      s2.strstart = 0;
      s2.block_start = 0;
      s2.insert = 0;
    }
    tmpDict = Buf8(s2.w_size);
    arraySet(tmpDict, dictionary, dictLength - s2.w_size, s2.w_size, 0);
    dictionary = tmpDict;
    dictLength = s2.w_size;
  }
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s2);
  while (s2.lookahead >= MIN_MATCH$1) {
    str = s2.strstart;
    n2 = s2.lookahead - (MIN_MATCH$1 - 1);
    do {
      s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[str + MIN_MATCH$1 - 1]) & s2.hash_mask;
      s2.prev[str & s2.w_mask] = s2.head[s2.ins_h];
      s2.head[s2.ins_h] = str;
      str++;
    } while (--n2);
    s2.strstart = str;
    s2.lookahead = MIN_MATCH$1 - 1;
    fill_window(s2);
  }
  s2.strstart += s2.lookahead;
  s2.block_start = s2.strstart;
  s2.insert = s2.lookahead;
  s2.lookahead = 0;
  s2.match_length = s2.prev_length = MIN_MATCH$1 - 1;
  s2.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s2.wrap = wrap2;
  return Z_OK;
}
var toString$1 = Object.prototype.toString;
var Deflate = function Deflate2(options2) {
  this.options = assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ""
  }, options2 || {});
  var opt = this.options;
  if (opt.raw && opt.windowBits > 0) {
    opt.windowBits = -opt.windowBits;
  } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
    opt.windowBits += 16;
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new ZStream();
  this.strm.avail_out = 0;
  var status = deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );
  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }
  if (opt.header) {
    deflateSetHeader(this.strm, opt.header);
  }
  if (opt.dictionary) {
    var dict;
    if (typeof opt.dictionary === "string") {
      dict = string2buf(opt.dictionary);
    } else if (toString$1.call(opt.dictionary) === "[object ArrayBuffer]") {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }
    status = deflateSetDictionary(this.strm, dict);
    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }
    this._dict_set = true;
  }
};
Deflate.prototype.push = function push2(data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;
  if (this.ended) {
    return false;
  }
  _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;
  if (typeof data === "string") {
    strm.input = string2buf(data);
  } else if (toString$1.call(data) === "[object ArrayBuffer]") {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }
  strm.next_in = 0;
  strm.avail_in = strm.input.length;
  do {
    if (strm.avail_out === 0) {
      strm.output = Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = deflate(strm, _mode);
    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
      if (this.options.to === "string") {
        this.onData(buf2binstring(shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
  if (_mode === Z_FINISH) {
    status = deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }
  return true;
};
Deflate.prototype.onData = function onData2(chunk) {
  this.chunks.push(chunk);
};
Deflate.prototype.onEnd = function onEnd2(status) {
  if (status === Z_OK) {
    if (this.options.to === "string") {
      this.result = this.chunks.join("");
    } else {
      this.result = flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};
function deflate$1(input, options2) {
  var deflator = new Deflate(options2);
  deflator.push(input, true);
  if (deflator.err) {
    throw deflator.msg || msg[deflator.err];
  }
  return deflator.result;
}

// node_modules/@progress/kendo-drawing/dist/es/pdf/deflate.js
var deflate2 = deflate$1;
function supportsDeflate() {
  return true;
}

// node_modules/@progress/kendo-drawing/dist/es/pdf/core.js
var browser4 = support_default.browser;
var NL = "\n";
var RESOURCE_COUNTER = 0;
var PATTERN_COUNTER = 0;
var PAPER_SIZE = {
  a0: [2383.94, 3370.39],
  a1: [1683.78, 2383.94],
  a2: [1190.55, 1683.78],
  a3: [841.89, 1190.55],
  a4: [595.28, 841.89],
  a5: [419.53, 595.28],
  a6: [297.64, 419.53],
  a7: [209.76, 297.64],
  a8: [147.4, 209.76],
  a9: [104.88, 147.4],
  a10: [73.7, 104.88],
  b0: [2834.65, 4008.19],
  b1: [2004.09, 2834.65],
  b2: [1417.32, 2004.09],
  b3: [1000.63, 1417.32],
  b4: [708.66, 1000.63],
  b5: [498.9, 708.66],
  b6: [354.33, 498.9],
  b7: [249.45, 354.33],
  b8: [175.75, 249.45],
  b9: [124.72, 175.75],
  b10: [87.87, 124.72],
  c0: [2599.37, 3676.54],
  c1: [1836.85, 2599.37],
  c2: [1298.27, 1836.85],
  c3: [918.43, 1298.27],
  c4: [649.13, 918.43],
  c5: [459.21, 649.13],
  c6: [323.15, 459.21],
  c7: [229.61, 323.15],
  c8: [161.57, 229.61],
  c9: [113.39, 161.57],
  c10: [79.37, 113.39],
  executive: [521.86, 756],
  folio: [612, 936],
  legal: [612, 1008],
  letter: [612, 792],
  tabloid: [792, 1224]
};
function makeOutput() {
  var indentLevel = 0, output = BinaryStream();
  function out() {
    for (var i2 = 0; i2 < arguments.length; ++i2) {
      var x = arguments[i2];
      if (x === void 0) {
        throw new Error("Cannot output undefined to PDF");
      } else if (x instanceof PDFValue) {
        x.beforeRender(out);
        x.render(out);
      } else if (isArray(x)) {
        renderArray(x, out);
      } else if (isDate(x)) {
        renderDate(x, out);
      } else if (typeof x == "number") {
        if (isNaN(x)) {
          throw new Error("Cannot output NaN to PDF");
        }
        var num = x.toFixed(7);
        if (num.indexOf(".") >= 0) {
          num = num.replace(/\.?0+$/, "");
        }
        if (num == "-0") {
          num = "0";
        }
        output.writeString(num);
      } else if (/string|boolean/.test(typeof x)) {
        output.writeString(String(x));
      } else if (typeof x.get == "function") {
        output.write(x.get());
      } else if (typeof x == "object") {
        if (!x) {
          output.writeString("null");
        } else {
          out(new PDFDictionary(x));
        }
      }
    }
  }
  out.writeData = function(data) {
    output.write(data);
  };
  out.withIndent = function(f2) {
    ++indentLevel;
    f2(out);
    --indentLevel;
  };
  out.indent = function() {
    out(NL, pad("", indentLevel * 2, "  "));
    out.apply(null, arguments);
  };
  out.offset = function() {
    return output.offset();
  };
  out.toString = function() {
    throw new Error("FIX CALLER");
  };
  out.get = function() {
    return output.get();
  };
  out.stream = function() {
    return output;
  };
  return out;
}
function wrapObject(value, id) {
  var beforeRender = value.beforeRender;
  var renderValue = value.render;
  value.beforeRender = function() {
  };
  value.render = function(out) {
    out(id, " 0 R");
  };
  value.renderFull = function(out) {
    value._offset = out.offset();
    out(id, " 0 obj ");
    beforeRender.call(value, out);
    renderValue.call(value, out);
    out(" endobj");
  };
}
function getPaperOptions(getOption) {
  if (typeof getOption != "function") {
    var options2 = getOption;
    getOption = function(key, def) {
      return key in options2 ? options2[key] : def;
    };
  }
  var paperSize = getOption("paperSize", PAPER_SIZE.a4);
  if (!paperSize) {
    return {};
  }
  if (typeof paperSize == "string") {
    paperSize = PAPER_SIZE[paperSize.toLowerCase()];
    if (paperSize == null) {
      throw new Error("Unknown paper size");
    }
  }
  paperSize[0] = unitsToPoints(paperSize[0]);
  paperSize[1] = unitsToPoints(paperSize[1]);
  if (getOption("landscape", false)) {
    paperSize = [
      Math.max(paperSize[0], paperSize[1]),
      Math.min(paperSize[0], paperSize[1])
    ];
  }
  var margin = getOption("margin");
  if (margin) {
    if (typeof margin == "string" || typeof margin == "number") {
      margin = unitsToPoints(margin, 0);
      margin = { left: margin, top: margin, right: margin, bottom: margin };
    } else {
      margin = {
        left: unitsToPoints(margin.left, 0),
        top: unitsToPoints(margin.top, 0),
        right: unitsToPoints(margin.right, 0),
        bottom: unitsToPoints(margin.bottom, 0)
      };
    }
    if (getOption("addMargin")) {
      paperSize[0] += margin.left + margin.right;
      paperSize[1] += margin.top + margin.bottom;
    }
  }
  return { paperSize, margin };
}
var FONT_CACHE = {
  "Times-Roman": true,
  "Times-Bold": true,
  "Times-Italic": true,
  "Times-BoldItalic": true,
  "Helvetica": true,
  "Helvetica-Bold": true,
  "Helvetica-Oblique": true,
  "Helvetica-BoldOblique": true,
  "Courier": true,
  "Courier-Bold": true,
  "Courier-Oblique": true,
  "Courier-BoldOblique": true,
  "Symbol": true,
  "ZapfDingbats": true
};
function loadBinary(url, cont) {
  let m2;
  if (browser4.msie && (m2 = /^data:.*?;base64,/i.exec(url))) {
    cont(base64ToUint8Array(url.substr(m2[0].length)));
    return;
  }
  function error() {
    if (window.console) {
      if (window.console.error) {
        window.console.error("Cannot load URL: %s", url);
      } else {
        window.console.log("Cannot load URL: %s", url);
      }
    }
    cont(null);
  }
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  if (HAS_TYPED_ARRAYS) {
    req.responseType = "arraybuffer";
  }
  req.onload = function() {
    if (req.status == 200 || req.status == 304) {
      if (HAS_TYPED_ARRAYS) {
        cont(new Uint8Array(req.response));
      } else {
        cont(new window.VBArray(req.responseBody).toArray());
      }
    } else {
      error();
    }
  };
  req.onerror = error;
  req.send(null);
}
function loadFont(url, cont) {
  var font = FONT_CACHE[url];
  if (font) {
    cont(font);
  } else {
    loadBinary(url, function(data) {
      if (data == null) {
        throw new Error("Cannot load font from " + url);
      } else {
        var font2 = new TTFFont(data);
        FONT_CACHE[url] = font2;
        cont(font2);
      }
    });
  }
}
var IMAGE_CACHE = {};
function clearImageCache() {
  IMAGE_CACHE = {};
}
function loadImage(url, size, cont, options2) {
  var img = IMAGE_CACHE[url], bloburl, blob;
  if (img) {
    cont(img);
  } else {
    img = new Image();
    if (!/^data:/i.test(url)) {
      img.crossOrigin = "Anonymous";
    }
    if (HAS_TYPED_ARRAYS && !/^data:/i.test(url)) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        blob = xhr.response;
        if (browser4.mozilla && blob.type == "image/svg+xml") {
          let reader = new FileReader();
          reader.onload = function() {
            let doc = new window.DOMParser().parseFromString(this.result, "image/svg+xml");
            let svg = doc.documentElement;
            if (svg.getAttribute("width") && svg.getAttribute("height")) {
              bloburl = URL.createObjectURL(blob);
              _load(bloburl);
            } else {
              svg.setAttribute("width", size.width);
              svg.setAttribute("height", size.height);
              let xml = new window.XMLSerializer().serializeToString(svg);
              let dataURL = `data:image/svg+xml;base64,${encodeBase64(xml)}`;
              _load(dataURL);
            }
          };
          reader.readAsText(blob);
        } else {
          bloburl = URL.createObjectURL(blob);
          _load(bloburl);
        }
      };
      xhr.onerror = _onerror;
      xhr.open("GET", url, true);
      xhr.responseType = "blob";
      xhr.send();
    } else {
      _load(url);
    }
  }
  function _load(url2) {
    img.src = url2;
    if (img.complete && !browser4.msie) {
      _onload.call(img);
    } else {
      img.onload = _onload;
      img.onerror = _onerror;
    }
  }
  function _trycanvas() {
    if (!size) {
      size = { width: img.width, height: img.height };
    }
    var canvas = document.createElement("canvas");
    canvas.width = size.width;
    canvas.height = size.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, size.width, size.height);
    var imgdata;
    try {
      imgdata = ctx.getImageData(0, 0, size.width, size.height);
    } catch (ex) {
      _onerror();
      return;
    } finally {
      if (bloburl) {
        URL.revokeObjectURL(bloburl);
      }
    }
    var hasAlpha = false, rgb = BinaryStream(), alpha = BinaryStream();
    var rawbytes = imgdata.data;
    var i2 = 0;
    while (i2 < rawbytes.length) {
      rgb.writeByte(rawbytes[i2++]);
      rgb.writeByte(rawbytes[i2++]);
      rgb.writeByte(rawbytes[i2++]);
      var a2 = rawbytes[i2++];
      if (a2 < 255) {
        hasAlpha = true;
      }
      alpha.writeByte(a2);
    }
    if (hasAlpha || options2.keepPNG) {
      img = new PDFRawImage(size.width, size.height, rgb, alpha);
    } else {
      var data = canvas.toDataURL("image/jpeg", options2.jpegQuality);
      data = data.substr(data.indexOf(";base64,") + 8);
      var stream = BinaryStream();
      stream.writeBase64(data);
      img = new PDFJpegImage(stream);
    }
    cont(IMAGE_CACHE[url] = img);
  }
  function _onerror() {
    cont(IMAGE_CACHE[url] = "ERROR");
  }
  function _onload() {
    if (size) {
      const svg = blob && blob.type === "image/svg+xml" || /^data:image\/svg\+xml;/i.test(this.src.substring(0, 19));
      const upscale = size.width >= img.width || size.height >= img.height;
      if (!svg && upscale) {
        size = null;
      }
    }
    if (!size && blob && /^image\/jpe?g$/i.test(blob.type)) {
      let reader = new FileReader();
      reader.onload = function() {
        try {
          let img2 = new PDFJpegImage(BinaryStream(new Uint8Array(this.result)));
          URL.revokeObjectURL(bloburl);
          cont(IMAGE_CACHE[url] = img2);
        } catch (ex) {
          _trycanvas();
        }
      };
      reader.readAsArrayBuffer(blob);
    } else {
      _trycanvas();
    }
  }
}
function manyLoader(loadOne) {
  return function(urls, callback) {
    var n2 = urls.length, i2 = n2;
    if (n2 === 0) {
      return callback();
    }
    function next() {
      if (--n2 === 0) {
        callback();
      }
    }
    while (i2-- > 0) {
      loadOne(urls[i2], next);
    }
  };
}
var loadFonts = manyLoader(loadFont);
var loadImages = function(images, callback, options2) {
  options2 = Object.assign({
    jpegQuality: 0.92,
    keepPNG: false
  }, options2);
  var urls = Object.keys(images), n2 = urls.length;
  if (n2 === 0) {
    return callback();
  }
  function next() {
    if (--n2 === 0) {
      callback();
    }
  }
  urls.forEach(function(url) {
    loadImage(url, images[url], next, options2);
  });
};
var PDFDocument = class {
  constructor(options2) {
    var self = this;
    var out = makeOutput();
    var objcount = 0;
    var objects = [];
    function getOption(name, defval) {
      return options2 && options2[name] != null ? options2[name] : defval;
    }
    self.getOption = getOption;
    self.attach = function(value) {
      if (objects.indexOf(value) < 0) {
        wrapObject(value, ++objcount);
        objects.push(value);
      }
      return value;
    };
    self.pages = [];
    self.FONTS = {};
    self.PATTERNS = {};
    self.IMAGES = {};
    self.GRAD_COL_FUNCTIONS = {};
    self.GRAD_OPC_FUNCTIONS = {};
    self.GRAD_COL = {};
    self.GRAD_OPC = {};
    var catalog = self.attach(new PDFCatalog());
    var pageTree = self.attach(new PDFPageTree());
    if (getOption("autoPrint")) {
      let nameTree = {};
      nameTree.JavaScript = new PDFDictionary({ Names: [
        new PDFString("JS"),
        self.attach(new PDFDictionary({
          S: _("JavaScript"),
          JS: new PDFString("print(true);")
        }))
      ] });
      catalog.props.Names = new PDFDictionary(nameTree);
    }
    catalog.setPages(pageTree);
    var info = self.attach(new PDFDictionary({
      Producer: new PDFString(getOption("producer", "Kendo UI PDF Generator"), true),
      // XXX: kendo.version?
      Title: new PDFString(getOption("title", ""), true),
      Author: new PDFString(getOption("author", ""), true),
      Subject: new PDFString(getOption("subject", ""), true),
      Keywords: new PDFString(getOption("keywords", ""), true),
      Creator: new PDFString(getOption("creator", "Kendo UI PDF Generator"), true),
      CreationDate: getOption("date", /* @__PURE__ */ new Date())
    }));
    self.addPage = function(options3) {
      var paperOptions = getPaperOptions(function(name, defval) {
        return options3 && options3[name] != null ? options3[name] : defval;
      });
      var paperSize = paperOptions.paperSize;
      var margin = paperOptions.margin;
      var contentWidth = paperSize[0];
      var contentHeight = paperSize[1];
      if (margin) {
        contentWidth -= margin.left + margin.right;
        contentHeight -= margin.top + margin.bottom;
      }
      var content = new PDFStream(makeOutput(), null, true);
      var props = {
        Contents: self.attach(content),
        Parent: pageTree,
        MediaBox: [0, 0, paperSize[0], paperSize[1]]
      };
      var page = new PDFPage(self, props);
      page._content = content;
      pageTree.addPage(self.attach(page));
      page.transform(1, 0, 0, -1, 0, paperSize[1]);
      if (margin) {
        page.translate(margin.left, margin.top);
        page.rect(0, 0, contentWidth, contentHeight);
        page.clip();
      }
      self.pages.push(page);
      return page;
    };
    self.render = function() {
      var i2;
      out("%PDF-1.4", NL, "%ÂÁÚÏÎ", NL, NL);
      for (i2 = 0; i2 < objects.length; ++i2) {
        objects[i2].renderFull(out);
        out(NL, NL);
      }
      var xrefOffset = out.offset();
      out("xref", NL, 0, " ", objects.length + 1, NL);
      out("0000000000 65535 f ", NL);
      for (i2 = 0; i2 < objects.length; ++i2) {
        out(zeropad(objects[i2]._offset, 10), " 00000 n ", NL);
      }
      out(NL);
      out("trailer", NL);
      out(new PDFDictionary({
        Size: objects.length + 1,
        Root: catalog,
        Info: info
      }), NL, NL);
      out("startxref", NL, xrefOffset, NL);
      out("%%EOF", NL);
      return out.stream().offset(0);
    };
    self.loadFonts = loadFonts;
    self.loadImages = loadImages;
  }
  getFont(url) {
    var font = this.FONTS[url];
    if (!font) {
      font = FONT_CACHE[url];
      if (!font) {
        throw new Error("Font " + url + " has not been loaded");
      }
      if (font === true) {
        font = this.attach(new PDFStandardFont(url));
      } else {
        font = this.attach(new PDFFont(this, font));
      }
      this.FONTS[url] = font;
    }
    return font;
  }
  getPattern(fill, page, drawPattern2) {
    let pattern = this.PATTERNS[fill.id];
    if (!pattern) {
      pattern = this.attach(new PDFPattern(fill, page, drawPattern2));
      this.PATTERNS[fill.id] = pattern;
    }
    return pattern;
  }
  getImage(url) {
    var img = this.IMAGES[url];
    if (!img) {
      img = IMAGE_CACHE[url];
      if (!img) {
        throw new Error("Image " + url + " has not been loaded");
      }
      if (img === "ERROR") {
        return null;
      }
      img = this.IMAGES[url] = this.attach(img.asStream(this));
    }
    return img;
  }
  getOpacityGS(opacity, forStroke) {
    var id = parseFloat(opacity).toFixed(3);
    opacity = parseFloat(id);
    id += forStroke ? "S" : "F";
    var cache = this._opacityGSCache || (this._opacityGSCache = {});
    var gs = cache[id];
    if (!gs) {
      var props = {
        Type: _("ExtGState")
      };
      if (forStroke) {
        props.CA = opacity;
      } else {
        props.ca = opacity;
      }
      gs = this.attach(new PDFDictionary(props));
      gs._resourceName = _("GS" + ++RESOURCE_COUNTER);
      cache[id] = gs;
    }
    return gs;
  }
  dict(props) {
    return new PDFDictionary(props);
  }
  name(str) {
    return _(str);
  }
  stream(props, content) {
    return new PDFStream(content, props);
  }
};
function pad(str, len, ch) {
  while (str.length < len) {
    str = ch + str;
  }
  return str;
}
function zeropad(n2, len) {
  return pad(String(n2), len, "0");
}
function hasOwnProperty2(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
var isArray = Array.isArray || function(obj) {
  return obj instanceof Array;
};
function isDate(obj) {
  return obj instanceof Date;
}
function renderArray(a2, out) {
  out("[");
  if (a2.length > 0) {
    out.withIndent(function() {
      for (var i2 = 0; i2 < a2.length; ++i2) {
        if (i2 > 0 && i2 % 8 === 0) {
          out.indent(a2[i2]);
        } else {
          out(" ", a2[i2]);
        }
      }
    });
  }
  out(" ]");
}
function renderDate(date, out) {
  out(
    "(D:",
    zeropad(date.getUTCFullYear(), 4),
    zeropad(date.getUTCMonth() + 1, 2),
    zeropad(date.getUTCDate(), 2),
    zeropad(date.getUTCHours(), 2),
    zeropad(date.getUTCMinutes(), 2),
    zeropad(date.getUTCSeconds(), 2),
    "Z)"
  );
}
function mm2pt(mm) {
  return mm * (72 / 25.4);
}
function cm2pt(cm) {
  return mm2pt(cm * 10);
}
function in2pt(inch) {
  return inch * 72;
}
function unitsToPoints(x, def) {
  if (typeof x == "number") {
    return x;
  }
  if (typeof x == "string") {
    var m2;
    m2 = /^\s*([0-9.]+)\s*(mm|cm|in|pt)\s*$/.exec(x);
    if (m2) {
      var num = parseFloat(m2[1]);
      if (!isNaN(num)) {
        if (m2[2] == "pt") {
          return num;
        }
        return {
          "mm": mm2pt,
          "cm": cm2pt,
          "in": in2pt
        }[m2[2]](num);
      }
    }
  }
  if (def != null) {
    return def;
  }
  throw new Error("Can't parse unit: " + x);
}
var PDFValue = class {
  beforeRender() {
  }
};
var PDFString = class extends PDFValue {
  constructor(value, utf16be) {
    super();
    this.value = value;
    this.utf16be = Boolean(utf16be);
  }
  render(out) {
    let txt = this.value;
    if (this.utf16be) {
      txt = BOM + encodeUTF16BE(txt);
      txt = txt.replace(/([\(\)\\])/g, "\\$1");
      out("(", txt, ")");
    } else {
      let data = [40];
      for (var i2 = 0; i2 < txt.length; ++i2) {
        let code = txt.charCodeAt(i2) & 255;
        if (code == 40 || code == 41 || code == 92) {
          data.push(92);
        }
        data.push(code);
      }
      data.push(41);
      out.writeData(data);
    }
  }
  toString() {
    return this.value;
  }
};
var PDFHexString = class extends PDFString {
  constructor(value) {
    super(value);
    this.value = value;
  }
  render(out) {
    out("<");
    for (var i2 = 0; i2 < this.value.length; ++i2) {
      out(zeropad(this.value.charCodeAt(i2).toString(16), 4));
    }
    out(">");
  }
};
var PDFName = class extends PDFValue {
  static get(name) {
    return _(name);
  }
  constructor(name) {
    super();
    this.name = name;
  }
  render(out) {
    out("/" + this.escape());
  }
  escape() {
    return this.name.replace(/[^\x21-\x7E]/g, function(c2) {
      return "#" + zeropad(c2.charCodeAt(0).toString(16), 2);
    });
  }
  toString() {
    return this.name;
  }
};
function _(name) {
  return new PDFName(name);
}
var PDFDictionary = class extends PDFValue {
  constructor(props) {
    super();
    this.props = props;
  }
  render(out) {
    var props = this.props, empty2 = true;
    out("<<");
    out.withIndent(function() {
      for (var i2 in props) {
        if (hasOwnProperty2(props, i2) && !/^_/.test(i2)) {
          empty2 = false;
          out.indent(_(i2), " ", props[i2]);
        }
      }
    });
    if (!empty2) {
      out.indent();
    }
    out(">>");
  }
};
var PDFStream = class extends PDFValue {
  constructor(data, props, compress) {
    super();
    if (typeof data == "string") {
      var tmp = BinaryStream();
      tmp.write(data);
      data = tmp;
    }
    this.data = data;
    this.props = props || {};
    this.compress = compress;
  }
  render(out) {
    var data = this.data.get(), props = this.props;
    if (this.compress && supportsDeflate()) {
      if (!props.Filter) {
        props.Filter = [];
      } else if (!(props.Filter instanceof Array)) {
        props.Filter = [props.Filter];
      }
      props.Filter.unshift(_("FlateDecode"));
      data = deflate2(data);
    }
    props.Length = data.length;
    out(new PDFDictionary(props), " stream", NL);
    out.writeData(data);
    out(NL, "endstream");
  }
};
var PDFCatalog = class extends PDFDictionary {
  constructor() {
    super({
      Type: _("Catalog")
    });
  }
  setPages(pagesObj) {
    this.props.Pages = pagesObj;
  }
};
var PDFPageTree = class extends PDFDictionary {
  constructor() {
    super({
      Type: _("Pages"),
      Kids: [],
      Count: 0
    });
  }
  addPage(pageObj) {
    this.props.Kids.push(pageObj);
    this.props.Count++;
  }
};
var SOF_CODES = [192, 193, 194, 195, 197, 198, 199, 201, 202, 203, 205, 206, 207];
var PDFJpegImage = class {
  constructor(data) {
    data.offset(0);
    var width, height, colorSpace, bitsPerComponent;
    var soi = data.readShort();
    if (soi != 65496) {
      throw new Error("Invalid JPEG image");
    }
    while (!data.eof()) {
      var ff = data.readByte();
      if (ff != 255) {
        throw new Error("Invalid JPEG image");
      }
      var marker = data.readByte();
      var length = data.readShort();
      if (SOF_CODES.indexOf(marker) >= 0) {
        bitsPerComponent = data.readByte();
        height = data.readShort();
        width = data.readShort();
        colorSpace = data.readByte();
        break;
      }
      data.skip(length - 2);
    }
    if (colorSpace == null) {
      throw new Error("Invalid JPEG image");
    }
    var props = {
      Type: _("XObject"),
      Subtype: _("Image"),
      Width: width,
      Height: height,
      BitsPerComponent: bitsPerComponent,
      Filter: _("DCTDecode")
    };
    switch (colorSpace) {
      case 1:
        props.ColorSpace = _("DeviceGray");
        break;
      case 3:
        props.ColorSpace = _("DeviceRGB");
        break;
      case 4:
        props.ColorSpace = _("DeviceCMYK");
        props.Decode = [1, 0, 1, 0, 1, 0, 1, 0];
        break;
    }
    this.asStream = function() {
      data.offset(0);
      var stream = new PDFStream(data, props);
      stream._resourceName = _("I" + ++RESOURCE_COUNTER);
      return stream;
    };
  }
};
var PDFRawImage = class {
  constructor(width, height, rgb, alpha) {
    this.asStream = function(pdf) {
      var mask = new PDFStream(alpha, {
        Type: _("XObject"),
        Subtype: _("Image"),
        Width: width,
        Height: height,
        BitsPerComponent: 8,
        ColorSpace: _("DeviceGray")
      }, true);
      var stream = new PDFStream(rgb, {
        Type: _("XObject"),
        Subtype: _("Image"),
        Width: width,
        Height: height,
        BitsPerComponent: 8,
        ColorSpace: _("DeviceRGB"),
        SMask: pdf.attach(mask)
      }, true);
      stream._resourceName = _("I" + ++RESOURCE_COUNTER);
      return stream;
    };
  }
};
var PDFPattern = class extends PDFDictionary {
  constructor(fill, curPage, drawPattern2) {
    const { width, height } = fill.size();
    const page = new PDFPage(curPage._pdf, {});
    page._content = new PDFStream(makeOutput(), null, true);
    drawPattern2(fill, page, {});
    curPage._xResources = Object.assign(curPage._xResources, page._xResources);
    curPage._fontResources = Object.assign(curPage._fontResources, page._fontResources);
    curPage._gsResources = Object.assign(curPage._gsResources, page._gsResources);
    super({
      Type: _("Pattern"),
      PatternType: 1,
      PaintType: 1,
      TilingType: 1,
      BBox: [0, 0, width, height],
      XStep: width,
      YStep: height,
      Matrix: [1, 0, 0, -1, 0, height],
      Resources: {
        ExtGState: new PDFDictionary(page._gsResources),
        XObject: new PDFDictionary(page._xResources),
        Font: new PDFDictionary(page._fontResources)
      }
    });
    this._resourceName = _("P" + ++PATTERN_COUNTER);
    this.data = page._content.data;
    this.compress = true;
  }
  render(out) {
    PDFStream.prototype.render.call(this, out);
  }
};
var PDFStandardFont = class extends PDFDictionary {
  constructor(name) {
    super({
      Type: _("Font"),
      Subtype: _("Type1"),
      BaseFont: _(name)
    });
    this._resourceName = _("F" + ++RESOURCE_COUNTER);
  }
  encodeText(str) {
    return new PDFString(String(str));
  }
};
var PDFFont = class extends PDFDictionary {
  constructor(pdf, font, props) {
    super({});
    props = this.props;
    props.Type = _("Font");
    props.Subtype = _("Type0");
    props.Encoding = _("Identity-H");
    this._pdf = pdf;
    this._font = font;
    this._sub = font.makeSubset();
    this._resourceName = _("F" + ++RESOURCE_COUNTER);
    var head = font.head;
    this.name = font.psName;
    var scale = this.scale = font.scale;
    this.bbox = [
      head.xMin * scale,
      head.yMin * scale,
      head.xMax * scale,
      head.yMax * scale
    ];
    this.italicAngle = font.post.italicAngle;
    this.ascent = font.ascent * scale;
    this.descent = font.descent * scale;
    this.lineGap = font.lineGap * scale;
    this.capHeight = font.os2.capHeight || this.ascent;
    this.xHeight = font.os2.xHeight || 0;
    this.stemV = 0;
    this.familyClass = (font.os2.familyClass || 0) >> 8;
    this.isSerif = this.familyClass >= 1 && this.familyClass <= 7;
    this.isScript = this.familyClass == 10;
    this.flags = (font.post.isFixedPitch ? 1 : 0) | (this.isSerif ? 1 << 1 : 0) | (this.isScript ? 1 << 3 : 0) | (this.italicAngle !== 0 ? 1 << 6 : 0) | 1 << 5;
  }
  encodeText(text) {
    return new PDFHexString(this._sub.encodeText(String(text)));
  }
  getTextWidth(fontSize, text) {
    var width = 0, codeMap = this._font.cmap.codeMap;
    for (var i2 = 0; i2 < text.length; ++i2) {
      var glyphId = codeMap[text.charCodeAt(i2)];
      width += this._font.widthOfGlyph(glyphId || 0);
    }
    return width * fontSize / 1e3;
  }
  beforeRender() {
    var self = this;
    var sub = self._sub;
    var data = sub.render();
    var fontStream = new PDFStream(BinaryStream(data), {
      Length1: data.length
    }, true);
    var descriptor = self._pdf.attach(new PDFDictionary({
      Type: _("FontDescriptor"),
      FontName: _(self._sub.psName),
      FontBBox: self.bbox,
      Flags: self.flags,
      StemV: self.stemV,
      ItalicAngle: self.italicAngle,
      Ascent: self.ascent,
      Descent: self.descent,
      CapHeight: self.capHeight,
      XHeight: self.xHeight,
      FontFile2: self._pdf.attach(fontStream)
    }));
    var cmap = sub.ncid2ogid;
    var firstChar = sub.firstChar;
    var lastChar = sub.lastChar;
    var charWidths = [];
    (function loop(i2, chunk) {
      if (i2 <= lastChar) {
        var gid = cmap[i2];
        if (gid == null) {
          loop(i2 + 1);
        } else {
          if (!chunk) {
            charWidths.push(i2, chunk = []);
          }
          chunk.push(self._font.widthOfGlyph(gid));
          loop(i2 + 1, chunk);
        }
      }
    })(firstChar);
    var descendant = new PDFDictionary({
      Type: _("Font"),
      Subtype: _("CIDFontType2"),
      BaseFont: _(self._sub.psName),
      CIDSystemInfo: new PDFDictionary({
        Registry: new PDFString("Adobe"),
        Ordering: new PDFString("Identity"),
        Supplement: 0
      }),
      FontDescriptor: descriptor,
      FirstChar: firstChar,
      LastChar: lastChar,
      DW: Math.round(self._font.widthOfGlyph(0)),
      W: charWidths,
      CIDToGIDMap: self._pdf.attach(self._makeCidToGidMap())
    });
    var dict = self.props;
    dict.BaseFont = _(self._sub.psName);
    dict.DescendantFonts = [self._pdf.attach(descendant)];
    var unimap = new PDFToUnicodeCmap(firstChar, lastChar, sub.subset);
    var unimapStream = new PDFStream(makeOutput(), null, true);
    unimapStream.data(unimap);
    dict.ToUnicode = self._pdf.attach(unimapStream);
  }
  _makeCidToGidMap() {
    return new PDFStream(BinaryStream(this._sub.cidToGidMap()), null, true);
  }
};
var PDFToUnicodeCmap = class extends PDFValue {
  constructor(firstChar, lastChar, map) {
    super();
    this.firstChar = firstChar;
    this.lastChar = lastChar;
    this.map = map;
  }
  render(out) {
    out.indent("/CIDInit /ProcSet findresource begin");
    out.indent("12 dict begin");
    out.indent("begincmap");
    out.indent("/CIDSystemInfo <<");
    out.indent("  /Registry (Adobe)");
    out.indent("  /Ordering (UCS)");
    out.indent("  /Supplement 0");
    out.indent(">> def");
    out.indent("/CMapName /Adobe-Identity-UCS def");
    out.indent("/CMapType 2 def");
    out.indent("1 begincodespacerange");
    out.indent("  <0000><ffff>");
    out.indent("endcodespacerange");
    var self = this;
    out.indent(self.lastChar - self.firstChar + 1, " beginbfchar");
    out.withIndent(function() {
      for (var code = self.firstChar; code <= self.lastChar; ++code) {
        var unicode = self.map[code];
        var str = ucs2encode([unicode]);
        out.indent("<", zeropad(code.toString(16), 4), ">", "<");
        for (var i2 = 0; i2 < str.length; ++i2) {
          out(zeropad(str.charCodeAt(i2).toString(16), 4));
        }
        out(">");
      }
    });
    out.indent("endbfchar");
    out.indent("endcmap");
    out.indent("CMapName currentdict /CMap defineresource pop");
    out.indent("end");
    out.indent("end");
  }
};
function makeHash(a2) {
  return a2.map(function(x) {
    return isArray(x) ? makeHash(x) : typeof x == "number" ? (Math.round(x * 1e3) / 1e3).toFixed(3) : x;
  }).join(" ");
}
function cacheColorGradientFunction(pdf, r1, g1, b1, r2, g2, b2) {
  var hash = makeHash([r1, g1, b1, r2, g2, b2]);
  var func = pdf.GRAD_COL_FUNCTIONS[hash];
  if (!func) {
    func = pdf.GRAD_COL_FUNCTIONS[hash] = pdf.attach(new PDFDictionary({
      FunctionType: 2,
      Domain: [0, 1],
      Range: [0, 1, 0, 1, 0, 1],
      N: 1,
      C0: [r1, g1, b1],
      C1: [r2, g2, b2]
    }));
  }
  return func;
}
function cacheOpacityGradientFunction(pdf, a1, a2) {
  var hash = makeHash([a1, a2]);
  var func = pdf.GRAD_OPC_FUNCTIONS[hash];
  if (!func) {
    func = pdf.GRAD_OPC_FUNCTIONS[hash] = pdf.attach(new PDFDictionary({
      FunctionType: 2,
      Domain: [0, 1],
      Range: [0, 1],
      N: 1,
      C0: [a1],
      C1: [a2]
    }));
  }
  return func;
}
function makeGradientFunctions(pdf, stops) {
  var hasAlpha = false;
  var opacities = [];
  var colors = [];
  var offsets = [];
  var encode = [];
  var i2, prev, cur, prevColor, curColor;
  for (i2 = 1; i2 < stops.length; ++i2) {
    prev = stops[i2 - 1];
    cur = stops[i2];
    prevColor = prev.color;
    curColor = cur.color;
    colors.push(cacheColorGradientFunction(
      pdf,
      prevColor.r,
      prevColor.g,
      prevColor.b,
      curColor.r,
      curColor.g,
      curColor.b
    ));
    if (prevColor.a < 1 || curColor.a < 1) {
      hasAlpha = true;
    }
    offsets.push(cur.offset);
    encode.push(0, 1);
  }
  if (hasAlpha) {
    for (i2 = 1; i2 < stops.length; ++i2) {
      prev = stops[i2 - 1];
      cur = stops[i2];
      prevColor = prev.color;
      curColor = cur.color;
      opacities.push(cacheOpacityGradientFunction(
        pdf,
        prevColor.a,
        curColor.a
      ));
    }
  }
  offsets.pop();
  return {
    hasAlpha,
    colors: assemble(colors),
    opacities: hasAlpha ? assemble(opacities) : null
  };
  function assemble(funcs) {
    if (funcs.length == 1) {
      return funcs[0];
    }
    return {
      FunctionType: 3,
      Functions: funcs,
      Domain: [0, 1],
      Bounds: offsets,
      Encode: encode
    };
  }
}
function cacheColorGradient(pdf, isRadial, stops, coords, funcs, box) {
  var shading, hash;
  if (!box) {
    var a2 = [isRadial].concat(coords);
    stops.forEach(function(x) {
      a2.push(x.offset, x.color.r, x.color.g, x.color.b);
    });
    hash = makeHash(a2);
    shading = pdf.GRAD_COL[hash];
  }
  if (!shading) {
    shading = new PDFDictionary({
      Type: _("Shading"),
      ShadingType: isRadial ? 3 : 2,
      ColorSpace: _("DeviceRGB"),
      Coords: coords,
      Domain: [0, 1],
      Function: funcs,
      Extend: [true, true]
    });
    pdf.attach(shading);
    shading._resourceName = "S" + ++RESOURCE_COUNTER;
    if (hash) {
      pdf.GRAD_COL[hash] = shading;
    }
  }
  return shading;
}
function cacheOpacityGradient(pdf, isRadial, stops, coords, funcs, box) {
  var opacity, hash;
  if (!box) {
    var a2 = [isRadial].concat(coords);
    stops.forEach(function(x) {
      a2.push(x.offset, x.color.a);
    });
    hash = makeHash(a2);
    opacity = pdf.GRAD_OPC[hash];
  }
  if (!opacity) {
    opacity = new PDFDictionary({
      Type: _("ExtGState"),
      AIS: false,
      CA: 1,
      ca: 1,
      SMask: {
        Type: _("Mask"),
        S: _("Luminosity"),
        G: pdf.attach(new PDFStream("/a0 gs /s0 sh", {
          Type: _("XObject"),
          Subtype: _("Form"),
          FormType: 1,
          BBox: box ? [
            box.left,
            box.top + box.height,
            box.left + box.width,
            box.top
          ] : [0, 1, 1, 0],
          Group: {
            Type: _("Group"),
            S: _("Transparency"),
            CS: _("DeviceGray"),
            I: true
          },
          Resources: {
            ExtGState: {
              a0: { CA: 1, ca: 1 }
            },
            Shading: {
              s0: {
                ColorSpace: _("DeviceGray"),
                Coords: coords,
                Domain: [0, 1],
                ShadingType: isRadial ? 3 : 2,
                Function: funcs,
                Extend: [true, true]
              }
            }
          }
        }))
      }
    });
    pdf.attach(opacity);
    opacity._resourceName = "O" + ++RESOURCE_COUNTER;
    if (hash) {
      pdf.GRAD_OPC[hash] = opacity;
    }
  }
  return opacity;
}
function cacheGradient(pdf, gradient, box) {
  var isRadial = gradient.type == "radial";
  var funcs = makeGradientFunctions(pdf, gradient.stops);
  var coords = isRadial ? [
    gradient.start.x,
    gradient.start.y,
    gradient.start.r,
    gradient.end.x,
    gradient.end.y,
    gradient.end.r
  ] : [
    gradient.start.x,
    gradient.start.y,
    gradient.end.x,
    gradient.end.y
  ];
  var shading = cacheColorGradient(
    pdf,
    isRadial,
    gradient.stops,
    coords,
    funcs.colors,
    gradient.userSpace && box
  );
  var opacity = funcs.hasAlpha ? cacheOpacityGradient(
    pdf,
    isRadial,
    gradient.stops,
    coords,
    funcs.opacities,
    gradient.userSpace && box
  ) : null;
  return {
    hasAlpha: funcs.hasAlpha,
    shading,
    opacity
  };
}
var PDFPage = class extends PDFDictionary {
  constructor(pdf, props) {
    super(props);
    this._pdf = pdf;
    this._rcount = 0;
    this._textMode = false;
    this._fontResources = {};
    this._gsResources = {};
    this._xResources = {};
    this._patResources = {};
    this._shResources = {};
    this._opacity = 1;
    this._matrix = [1, 0, 0, 1, 0, 0];
    this._annotations = [];
    this._font = null;
    this._fontSize = null;
    this._contextStack = [];
    props = this.props;
    props.Type = _("Page");
    props.ProcSet = [
      _("PDF"),
      _("Text"),
      _("ImageB"),
      _("ImageC"),
      _("ImageI")
    ];
    props.Resources = new PDFDictionary({
      Font: new PDFDictionary(this._fontResources),
      ExtGState: new PDFDictionary(this._gsResources),
      XObject: new PDFDictionary(this._xResources),
      Pattern: new PDFDictionary(this._patResources),
      Shading: new PDFDictionary(this._shResources)
    });
    props.Annots = this._annotations;
  }
  _out() {
    this._content.data.apply(null, arguments);
  }
  transform(a2, b, c2, d2, e2, f2) {
    if (!isIdentityMatrix(arguments)) {
      this._matrix = mmul(arguments, this._matrix);
      this._out(a2, " ", b, " ", c2, " ", d2, " ", e2, " ", f2, " cm");
      this._out(NL);
    }
  }
  translate(dx, dy) {
    this.transform(1, 0, 0, 1, dx, dy);
  }
  scale(sx, sy) {
    this.transform(sx, 0, 0, sy, 0, 0);
  }
  rotate(angle) {
    var cos = Math.cos(angle), sin = Math.sin(angle);
    this.transform(cos, sin, -sin, cos, 0, 0);
  }
  beginText() {
    this._textMode = true;
    this._out("BT", NL);
  }
  endText() {
    this._textMode = false;
    this._out("ET", NL);
  }
  _requireTextMode() {
    if (!this._textMode) {
      throw new Error("Text mode required; call page.beginText() first");
    }
  }
  _requireFont() {
    if (!this._font) {
      throw new Error("No font selected; call page.setFont() first");
    }
  }
  setFont(font, size) {
    this._requireTextMode();
    if (font == null) {
      font = this._font;
    } else if (!(font instanceof PDFFont)) {
      font = this._pdf.getFont(font);
    }
    if (size == null) {
      size = this._fontSize;
    }
    this._fontResources[font._resourceName] = font;
    this._font = font;
    this._fontSize = size;
    this._out(font._resourceName, " ", size, " Tf", NL);
  }
  setTextLeading(size) {
    this._requireTextMode();
    this._out(size, " TL", NL);
  }
  setTextRenderingMode(mode) {
    this._requireTextMode();
    this._out(mode, " Tr", NL);
  }
  showText(text, requestedWidth) {
    this._requireFont();
    if (text.length > 1 && requestedWidth && this._font instanceof PDFFont) {
      var outputWidth = this._font.getTextWidth(this._fontSize, text);
      var scale = requestedWidth / outputWidth * 100;
      this._out(scale, " Tz ");
    }
    this._out(this._font.encodeText(text), " Tj", NL);
  }
  showTextNL(text) {
    this._requireFont();
    this._out(this._font.encodeText(text), " '", NL);
  }
  addLink(uri, box) {
    var ll = this._toPage({ x: box.left, y: box.bottom });
    var ur = this._toPage({ x: box.right, y: box.top });
    this._annotations.push(new PDFDictionary({
      Type: _("Annot"),
      Subtype: _("Link"),
      Rect: [ll.x, ll.y, ur.x, ur.y],
      Border: [0, 0, 0],
      A: new PDFDictionary({
        Type: _("Action"),
        S: _("URI"),
        URI: new PDFString(uri)
      })
    }));
  }
  setStrokeColor(r2, g2, b) {
    this._out(r2, " ", g2, " ", b, " RG", NL);
  }
  setOpacity(opacity) {
    this.setFillOpacity(opacity);
    this.setStrokeOpacity(opacity);
    this._opacity *= opacity;
  }
  setStrokeOpacity(opacity) {
    if (opacity < 1) {
      var gs = this._pdf.getOpacityGS(this._opacity * opacity, true);
      this._gsResources[gs._resourceName] = gs;
      this._out(gs._resourceName, " gs", NL);
    }
  }
  setFillColor(r2, g2, b) {
    this._out(r2, " ", g2, " ", b, " rg", NL);
  }
  pattern(fill, box, drawPattern2) {
    const pattern = this._pdf.getPattern(fill, this, drawPattern2);
    this._patResources[pattern._resourceName] = pattern;
    this._out("/Pattern cs", NL);
    this._out(pattern._resourceName, " scn", NL);
    this.rect(box.left, box.top, box.width, box.height);
    this.fill();
  }
  setFillOpacity(opacity) {
    if (opacity < 1) {
      var gs = this._pdf.getOpacityGS(this._opacity * opacity, false);
      this._gsResources[gs._resourceName] = gs;
      this._out(gs._resourceName, " gs", NL);
    }
  }
  gradient(gradient, box) {
    this.save();
    this.rect(box.left, box.top, box.width, box.height);
    this.clip();
    if (!gradient.userSpace) {
      this.transform(box.width, 0, 0, box.height, box.left, box.top);
    }
    var g2 = cacheGradient(this._pdf, gradient, box);
    var sname = g2.shading._resourceName, oname;
    this._shResources[sname] = g2.shading;
    if (g2.hasAlpha) {
      oname = g2.opacity._resourceName;
      this._gsResources[oname] = g2.opacity;
      this._out("/" + oname + " gs ");
    }
    this._out("/" + sname + " sh", NL);
    this.restore();
  }
  setDashPattern(dashArray, dashPhase) {
    this._out(dashArray, " ", dashPhase, " d", NL);
  }
  setLineWidth(width) {
    this._out(width, " w", NL);
  }
  setLineCap(lineCap) {
    this._out(lineCap, " J", NL);
  }
  setLineJoin(lineJoin) {
    this._out(lineJoin, " j", NL);
  }
  setMitterLimit(mitterLimit) {
    this._out(mitterLimit, " M", NL);
  }
  save() {
    this._contextStack.push(this._context());
    this._out("q", NL);
  }
  restore() {
    this._out("Q", NL);
    this._context(this._contextStack.pop());
  }
  // paths
  moveTo(x, y2) {
    this._out(x, " ", y2, " m", NL);
  }
  lineTo(x, y2) {
    this._out(x, " ", y2, " l", NL);
  }
  bezier(x1, y1, x2, y2, x3, y3) {
    this._out(x1, " ", y1, " ", x2, " ", y2, " ", x3, " ", y3, " c", NL);
  }
  bezier1(x1, y1, x3, y3) {
    this._out(x1, " ", y1, " ", x3, " ", y3, " y", NL);
  }
  bezier2(x2, y2, x3, y3) {
    this._out(x2, " ", y2, " ", x3, " ", y3, " v", NL);
  }
  close() {
    this._out("h", NL);
  }
  rect(x, y2, w2, h2) {
    this._out(x, " ", y2, " ", w2, " ", h2, " re", NL);
  }
  ellipse(x, y2, rx, ry) {
    function _X(v2) {
      return x + v2;
    }
    function _Y(v2) {
      return y2 + v2;
    }
    var k2 = 0.5522847498307936;
    this.moveTo(_X(0), _Y(ry));
    this.bezier(
      _X(rx * k2),
      _Y(ry),
      _X(rx),
      _Y(ry * k2),
      _X(rx),
      _Y(0)
    );
    this.bezier(
      _X(rx),
      _Y(-ry * k2),
      _X(rx * k2),
      _Y(-ry),
      _X(0),
      _Y(-ry)
    );
    this.bezier(
      _X(-rx * k2),
      _Y(-ry),
      _X(-rx),
      _Y(-ry * k2),
      _X(-rx),
      _Y(0)
    );
    this.bezier(
      _X(-rx),
      _Y(ry * k2),
      _X(-rx * k2),
      _Y(ry),
      _X(0),
      _Y(ry)
    );
  }
  circle(x, y2, r2) {
    this.ellipse(x, y2, r2, r2);
  }
  stroke() {
    this._out("S", NL);
  }
  nop() {
    this._out("n", NL);
  }
  clip() {
    this._out("W n", NL);
  }
  clipStroke() {
    this._out("W S", NL);
  }
  closeStroke() {
    this._out("s", NL);
  }
  fill() {
    this._out("f", NL);
  }
  fillStroke() {
    this._out("B", NL);
  }
  drawImage(url) {
    var img = this._pdf.getImage(url);
    if (img) {
      this._xResources[img._resourceName] = img;
      this._out(img._resourceName, " Do", NL);
    }
  }
  comment(txt) {
    var self = this;
    txt.split(/\r?\n/g).forEach(function(line) {
      self._out("% ", line, NL);
    });
  }
  // internal
  _context(val) {
    if (val != null) {
      this._opacity = val.opacity;
      this._matrix = val.matrix;
    } else {
      return {
        opacity: this._opacity,
        matrix: this._matrix
      };
    }
  }
  _toPage(p2) {
    var m2 = this._matrix;
    var a2 = m2[0], b = m2[1], c2 = m2[2], d2 = m2[3], e2 = m2[4], f2 = m2[5];
    return {
      x: a2 * p2.x + c2 * p2.y + e2,
      y: b * p2.x + d2 * p2.y + f2
    };
  }
};
function unquote(str) {
  return str.replace(/^\s*(['"])(.*)\1\s*$/, "$2");
}
function parseFontDef(fontdef) {
  var rx = /^\s*((normal|italic)\s+)?(([a-z0-9-]+)\s+)?((normal|bold|\d+)\s+)?(([0-9.]+)(px|pt))(\/(([0-9.]+)(px|pt)|normal))?\s+(.*?)\s*$/i;
  var m2 = rx.exec(fontdef);
  if (!m2) {
    return { fontSize: 12, fontFamily: "sans-serif" };
  }
  var fontSize = m2[8] ? parseInt(m2[8], 10) : 12;
  return {
    italic: m2[2] && m2[2].toLowerCase() == "italic",
    variant: m2[4],
    bold: m2[6] && /bold|[6789]00/i.test(m2[6]),
    fontSize,
    lineHeight: m2[12] ? m2[12] == "normal" ? fontSize : parseInt(m2[12], 10) : null,
    fontFamily: m2[14].split(/\s*,\s*/g).map(unquote)
  };
}
function getFontURL(style) {
  function mkFamily(name2) {
    if (style.bold) {
      name2 += "|bold";
    }
    if (style.italic) {
      name2 += "|italic";
    }
    return name2.toLowerCase();
  }
  var fontFamily = style.fontFamily;
  var name, url;
  if (fontFamily instanceof Array) {
    for (var i2 = 0; i2 < fontFamily.length; ++i2) {
      name = mkFamily(fontFamily[i2]);
      url = FONT_MAPPINGS[name];
      if (url) {
        break;
      }
    }
  } else {
    url = FONT_MAPPINGS[fontFamily.toLowerCase()];
  }
  while (typeof url == "function") {
    url = url();
  }
  if (!url) {
    url = "Times-Roman";
  }
  return url;
}
var FONT_MAPPINGS = {
  "serif": "Times-Roman",
  "serif|bold": "Times-Bold",
  "serif|italic": "Times-Italic",
  "serif|bold|italic": "Times-BoldItalic",
  "sans-serif": "Helvetica",
  "sans-serif|bold": "Helvetica-Bold",
  "sans-serif|italic": "Helvetica-Oblique",
  "sans-serif|bold|italic": "Helvetica-BoldOblique",
  "monospace": "Courier",
  "monospace|bold": "Courier-Bold",
  "monospace|italic": "Courier-Oblique",
  "monospace|bold|italic": "Courier-BoldOblique",
  "zapfdingbats": "ZapfDingbats",
  "zapfdingbats|bold": "ZapfDingbats",
  "zapfdingbats|italic": "ZapfDingbats",
  "zapfdingbats|bold|italic": "ZapfDingbats"
};
function fontAlias(alias, name) {
  alias = alias.toLowerCase();
  FONT_MAPPINGS[alias] = function() {
    return FONT_MAPPINGS[name];
  };
  FONT_MAPPINGS[alias + "|bold"] = function() {
    return FONT_MAPPINGS[name + "|bold"];
  };
  FONT_MAPPINGS[alias + "|italic"] = function() {
    return FONT_MAPPINGS[name + "|italic"];
  };
  FONT_MAPPINGS[alias + "|bold|italic"] = function() {
    return FONT_MAPPINGS[name + "|bold|italic"];
  };
}
fontAlias("Times New Roman", "serif");
fontAlias("Courier New", "monospace");
fontAlias("Arial", "sans-serif");
fontAlias("Helvetica", "sans-serif");
fontAlias("Verdana", "sans-serif");
fontAlias("Tahoma", "sans-serif");
fontAlias("Georgia", "sans-serif");
fontAlias("Monaco", "monospace");
fontAlias("Andale Mono", "monospace");
function defineFont(name, url) {
  if (arguments.length == 1) {
    for (var i2 in name) {
      if (hasOwnProperty2(name, i2)) {
        defineFont(i2, name[i2]);
      }
    }
  } else {
    name = name.toLowerCase();
    FONT_MAPPINGS[name] = url;
    switch (name) {
      case "dejavu sans":
        FONT_MAPPINGS["sans-serif"] = url;
        break;
      case "dejavu sans|bold":
        FONT_MAPPINGS["sans-serif|bold"] = url;
        break;
      case "dejavu sans|italic":
        FONT_MAPPINGS["sans-serif|italic"] = url;
        break;
      case "dejavu sans|bold|italic":
        FONT_MAPPINGS["sans-serif|bold|italic"] = url;
        break;
      case "dejavu serif":
        FONT_MAPPINGS["serif"] = url;
        break;
      case "dejavu serif|bold":
        FONT_MAPPINGS["serif|bold"] = url;
        break;
      case "dejavu serif|italic":
        FONT_MAPPINGS["serif|italic"] = url;
        break;
      case "dejavu serif|bold|italic":
        FONT_MAPPINGS["serif|bold|italic"] = url;
        break;
      case "dejavu mono":
        FONT_MAPPINGS["monospace"] = url;
        break;
      case "dejavu mono|bold":
        FONT_MAPPINGS["monospace|bold"] = url;
        break;
      case "dejavu mono|italic":
        FONT_MAPPINGS["monospace|italic"] = url;
        break;
      case "dejavu mono|bold|italic":
        FONT_MAPPINGS["monospace|bold|italic"] = url;
        break;
    }
  }
}
function mmul(a2, b) {
  var a1 = a2[0], b1 = a2[1], c1 = a2[2], d1 = a2[3], e1 = a2[4], f1 = a2[5];
  var a22 = b[0], b2 = b[1], c2 = b[2], d2 = b[3], e2 = b[4], f2 = b[5];
  return [
    a1 * a22 + b1 * c2,
    a1 * b2 + b1 * d2,
    c1 * a22 + d1 * c2,
    c1 * b2 + d1 * d2,
    e1 * a22 + f1 * c2 + e2,
    e1 * b2 + f1 * d2 + f2
  ];
}
function isIdentityMatrix(m2) {
  return m2[0] === 1 && m2[1] === 0 && m2[2] === 0 && m2[3] === 1 && m2[4] === 0 && m2[5] === 0;
}
var TEXT_RENDERING_MODE = {
  fill: 0,
  stroke: 1,
  fillAndStroke: 2,
  invisible: 3,
  fillAndClip: 4,
  strokeAndClip: 5,
  fillStrokeClip: 6,
  clip: 7
};

// node_modules/@progress/kendo-drawing/dist/es/pdf/drawing.js
var DEFAULT_IMAGE_DPI = 300;
var TEXT_RENDERING_MODE2 = TEXT_RENDERING_MODE;
var DASH_PATTERNS = {
  dash: [4],
  dashDot: [4, 2, 1, 2],
  dot: [1, 2],
  longDash: [8, 2],
  longDashDot: [8, 2, 1, 2],
  longDashDotDot: [8, 2, 1, 2, 1, 2],
  solid: []
};
var LINE_CAP = {
  butt: 0,
  round: 1,
  square: 2
};
var LINE_JOIN = {
  miter: 0,
  round: 1,
  bevel: 2
};
function render(group, callback) {
  var fonts = [], images = {}, options2 = group.options;
  function getOption(name, defval, hash) {
    if (!hash) {
      hash = options2;
    }
    if (hash.pdf && hash.pdf[name] != null) {
      return hash.pdf[name];
    }
    return defval;
  }
  var multiPage = getOption("multiPage");
  var imgDPI = getOption("imgDPI", DEFAULT_IMAGE_DPI);
  clearImageCache();
  const handlers = {
    Image: function(element) {
      var url = element.src();
      var size = element.bbox().size;
      if (imgDPI) {
        var prev = images[url];
        size = {
          width: Math.ceil(size.width * imgDPI / 72),
          height: Math.ceil(size.height * imgDPI / 72)
        };
        if (prev) {
          size.width = Math.max(prev.width, size.width);
          size.height = Math.max(prev.height, size.height);
        }
      }
      images[url] = size;
    },
    Text: function(element) {
      var style = parseFontDef(element.options.font);
      var url = getFontURL(style);
      if (fonts.indexOf(url) < 0) {
        fonts.push(url);
      }
    }
  };
  group.traverse(function(element) {
    dispatch(handlers, element);
    const fill = element.fill && element.fill();
    if (fill instanceof Pattern) {
      fill.traverse(function(child) {
        dispatch(handlers, child);
      });
    }
  });
  function doIt() {
    if (--count > 0) {
      return;
    }
    var pdf = new PDFDocument({
      producer: getOption("producer"),
      title: getOption("title"),
      author: getOption("author"),
      subject: getOption("subject"),
      keywords: getOption("keywords"),
      creator: getOption("creator"),
      date: getOption("date"),
      autoPrint: getOption("autoPrint")
    });
    function drawPage(group2) {
      var options3 = group2.options;
      var tmp = optimize(group2);
      var bbox = tmp.bbox;
      group2 = tmp.root;
      var paperSize = getOption("paperSize", getOption("paperSize", "auto"), options3), addMargin = false;
      if (paperSize == "auto") {
        if (bbox) {
          var size = bbox.getSize();
          paperSize = [size.width, size.height];
          addMargin = true;
          var origin = bbox.getOrigin();
          tmp = new group_default();
          tmp.transform(new matrix_default(1, 0, 0, 1, -origin.x, -origin.y));
          tmp.append(group2);
          group2 = tmp;
        } else {
          paperSize = "A4";
        }
      }
      var page;
      page = pdf.addPage({
        paperSize,
        margin: getOption("margin", getOption("margin"), options3),
        addMargin,
        landscape: getOption("landscape", getOption("landscape", false), options3)
      });
      drawElement(group2, page, pdf);
    }
    if (multiPage) {
      group.children.forEach(drawPage);
    } else {
      drawPage(group);
    }
    callback(pdf.render(), pdf);
  }
  var count = 2;
  loadFonts(fonts, doIt);
  loadImages(images, doIt, {
    jpegQuality: getOption("jpegQuality", 0.92),
    keepPNG: getOption("keepPNG", false)
  });
}
function toDataURL(group, callback) {
  render(group, function(data) {
    callback("data:application/pdf;base64," + data.base64());
  });
}
function dispatch(handlers, element) {
  var handler = handlers[element.nodeType];
  if (handler) {
    return handler.call.apply(handler, arguments);
  }
  return element;
}
function drawElement(element, page, pdf) {
  if (element.options._pdfDebug) {
    page.comment("BEGIN: " + element.options._pdfDebug);
  }
  var transform2 = element.transform();
  var opacity = element.opacity();
  page.save();
  if (opacity != null && opacity < 1) {
    page.setOpacity(opacity);
  }
  setStrokeOptions(element, page, pdf);
  setFillOptions(element, page, pdf);
  if (transform2) {
    var m2 = transform2.matrix();
    page.transform(m2.a, m2.b, m2.c, m2.d, m2.e, m2.f);
  }
  setClipping(element, page, pdf);
  dispatch({
    Path: drawPath,
    MultiPath: drawMultiPath,
    Circle: drawCircle,
    Arc: drawArc,
    Text: drawText,
    Image: drawImage,
    Group: drawGroup,
    Rect: drawRect
  }, element, page, pdf);
  page.restore();
  if (element.options._pdfDebug) {
    page.comment("END: " + element.options._pdfDebug);
  }
}
function setStrokeOptions(element, page) {
  var stroke = element.stroke && element.stroke();
  if (!stroke) {
    return;
  }
  var color = stroke.color;
  if (color) {
    color = parseColor2(color);
    if (color == null) {
      return;
    }
    page.setStrokeColor(color.r, color.g, color.b);
    if (color.a != 1) {
      page.setStrokeOpacity(color.a);
    }
  }
  var width = stroke.width;
  if (width != null) {
    if (width === 0) {
      return;
    }
    page.setLineWidth(width);
  }
  var dashType = stroke.dashType;
  if (dashType) {
    page.setDashPattern(DASH_PATTERNS[dashType], 0);
  }
  var lineCap = stroke.lineCap;
  if (lineCap) {
    page.setLineCap(LINE_CAP[lineCap]);
  }
  var lineJoin = stroke.lineJoin;
  if (lineJoin) {
    page.setLineJoin(LINE_JOIN[lineJoin]);
  }
  var opacity = stroke.opacity;
  if (opacity != null) {
    page.setStrokeOpacity(opacity);
  }
}
function setFillOptions(element, page) {
  var fill = element.fill && element.fill();
  if (!fill) {
    return;
  }
  if (fill instanceof gradient_default || fill instanceof Pattern) {
    return;
  }
  var color = fill.color;
  if (color) {
    color = parseColor2(color);
    if (color == null) {
      return;
    }
    page.setFillColor(color.r, color.g, color.b);
    if (color.a != 1) {
      page.setFillOpacity(color.a);
    }
  }
  var opacity = fill.opacity;
  if (opacity != null) {
    page.setFillOpacity(opacity);
  }
}
function setClipping(element, page, pdf) {
  var clip = element.clip();
  if (clip) {
    _drawPath(clip, page, pdf);
    page.clip();
  }
}
function shouldDraw(thing) {
  return thing && (thing instanceof gradient_default || thing instanceof Pattern || thing.color && !/^(none|transparent)$/i.test(thing.color) && (thing.width == null || thing.width > 0) && (thing.opacity == null || thing.opacity > 0));
}
function maybeGradient(element, page, pdf, stroke) {
  var fill = element.fill();
  if (fill instanceof gradient_default) {
    if (stroke) {
      page.clipStroke();
    } else {
      page.clip();
    }
    var isRadial = fill instanceof radial_gradient_default;
    var start, end;
    if (isRadial) {
      start = { x: fill.center().x, y: fill.center().y, r: 0 };
      end = { x: fill.center().x, y: fill.center().y, r: fill.radius() };
    } else {
      start = { x: fill.start().x, y: fill.start().y };
      end = { x: fill.end().x, y: fill.end().y };
    }
    var stops = fill.stops.elements().map(function(stop) {
      var offset = stop.offset();
      if (/%$/.test(offset)) {
        offset = parseFloat(offset) / 100;
      } else {
        offset = parseFloat(offset);
      }
      var color = parseColor2(stop.color());
      color.a *= stop.opacity();
      return {
        offset,
        color
      };
    });
    stops.unshift(stops[0]);
    stops.push(stops[stops.length - 1]);
    var gradient = {
      userSpace: fill.userSpace(),
      type: isRadial ? "radial" : "linear",
      start,
      end,
      stops
    };
    var box = element.rawBBox();
    var tl = box.topLeft(), size = box.getSize();
    box = {
      left: tl.x,
      top: tl.y,
      width: size.width,
      height: size.height
    };
    page.gradient(gradient, box);
    return true;
  }
}
function maybePattern(element, page, pdf, stroke) {
  const fill = element.fill();
  if (fill instanceof Pattern) {
    if (stroke) {
      page.clipStroke();
    } else {
      page.clip();
    }
    const box = element.rawBBox();
    const tl = box.topLeft(), size = box.getSize();
    const strokeWidth = element.stroke() ? element.stroke().width : 0;
    page.pattern(fill, {
      left: tl.x + strokeWidth / 2,
      top: tl.y + strokeWidth / 2,
      width: size.width - strokeWidth,
      height: size.height - strokeWidth
    }, drawPattern);
    return true;
  }
}
function maybeFillStroke(element, page, pdf) {
  if (shouldDraw(element.fill()) && shouldDraw(element.stroke())) {
    if (!maybeGradient(element, page, pdf, true) && !maybePattern(element, page, pdf, true)) {
      page.fillStroke();
    }
  } else if (shouldDraw(element.fill())) {
    if (!maybeGradient(element, page, pdf, false) && !maybePattern(element, page, pdf, false)) {
      page.fill();
    }
  } else if (shouldDraw(element.stroke())) {
    page.stroke();
  } else {
    page.nop();
  }
}
function maybeDrawRect(path, page) {
  var segments = path.segments;
  if (segments.length == 4 && path.options.closed) {
    var a2 = [];
    for (var i2 = 0; i2 < segments.length; ++i2) {
      if (segments[i2].controlIn()) {
        return false;
      }
      a2[i2] = segments[i2].anchor();
    }
    var isRect = a2[0].y == a2[1].y && a2[1].x == a2[2].x && a2[2].y == a2[3].y && a2[3].x == a2[0].x || a2[0].x == a2[1].x && a2[1].y == a2[2].y && a2[2].x == a2[3].x && a2[3].y == a2[0].y;
    if (isRect) {
      page.rect(
        a2[0].x,
        a2[0].y,
        a2[2].x - a2[0].x,
        a2[2].y - a2[0].y
        /*height*/
      );
      return true;
    }
  }
}
function _drawPath(element, page, pdf) {
  var segments = element.segments;
  if (segments.length === 0) {
    return;
  }
  if (!maybeDrawRect(element, page, pdf)) {
    for (var prev, i2 = 0; i2 < segments.length; ++i2) {
      var seg = segments[i2];
      var anchor2 = seg.anchor();
      if (!prev) {
        page.moveTo(anchor2.x, anchor2.y);
      } else {
        var prevOut = prev.controlOut();
        var controlIn = seg.controlIn();
        if (prevOut && controlIn) {
          page.bezier(
            prevOut.x,
            prevOut.y,
            controlIn.x,
            controlIn.y,
            anchor2.x,
            anchor2.y
          );
        } else {
          page.lineTo(anchor2.x, anchor2.y);
        }
      }
      prev = seg;
    }
    if (element.options.closed) {
      page.close();
    }
  }
}
function drawPath(element, page, pdf) {
  _drawPath(element, page, pdf);
  maybeFillStroke(element, page, pdf);
}
function drawMultiPath(element, page, pdf) {
  var paths = element.paths;
  for (var i2 = 0; i2 < paths.length; ++i2) {
    _drawPath(paths[i2], page, pdf);
  }
  maybeFillStroke(element, page, pdf);
}
function drawCircle(element, page, pdf) {
  var g2 = element.geometry();
  page.circle(g2.center.x, g2.center.y, g2.radius);
  maybeFillStroke(element, page, pdf);
}
function drawArc(element, page, pdf) {
  var points3 = element.geometry().curvePoints();
  page.moveTo(points3[0].x, points3[0].y);
  for (var i2 = 1; i2 < points3.length; ) {
    page.bezier(
      points3[i2].x,
      points3[i2++].y,
      points3[i2].x,
      points3[i2++].y,
      points3[i2].x,
      points3[i2++].y
    );
  }
  maybeFillStroke(element, page, pdf);
}
function drawText(element, page) {
  var style = parseFontDef(element.options.font);
  var pos = element._position;
  var mode;
  page.transform(1, 0, 0, -1, pos.x, pos.y + style.fontSize);
  const draw = (renderMode) => {
    page.beginText();
    page.setFont(getFontURL(style), style.fontSize);
    page.setTextRenderingMode(renderMode);
    page.showText(element.content(), element._pdfRect ? element._pdfRect.width() : null);
  };
  if (element.fill() && element.stroke()) {
    mode = TEXT_RENDERING_MODE2.fillAndStroke;
    if (element.options.paintOrder === "stroke") {
      draw(TEXT_RENDERING_MODE2.stroke);
      mode = TEXT_RENDERING_MODE2.fill;
    }
  } else if (element.fill()) {
    mode = TEXT_RENDERING_MODE2.fill;
  } else if (element.stroke()) {
    mode = TEXT_RENDERING_MODE2.stroke;
  }
  draw(mode);
  page.endText();
}
function drawPattern(pattern, page, pdf) {
  var children = pattern.children;
  for (var i2 = 0; i2 < children.length; ++i2) {
    drawElement(children[i2], page, pdf);
  }
}
function drawGroup(element, page, pdf) {
  if (element._pdfLink) {
    page.addLink(element._pdfLink.url, element._pdfLink);
  }
  var children = element.children;
  for (var i2 = 0; i2 < children.length; ++i2) {
    drawElement(children[i2], page, pdf);
  }
}
function drawImage(element, page) {
  var url = element.src();
  if (!url) {
    return;
  }
  var rect = element.rect();
  var tl = rect.getOrigin();
  var sz = rect.getSize();
  page.transform(sz.width, 0, 0, -sz.height, tl.x, tl.y + sz.height);
  page.drawImage(url);
}
function drawRect(element, page, pdf) {
  var geometry = element.geometry();
  const [rx, ry] = geometry.cornerRadius;
  if (rx === 0 && ry === 0) {
    page.rect(geometry.origin.x, geometry.origin.y, geometry.size.width, geometry.size.height);
    maybeFillStroke(element, page, pdf);
  } else {
    drawPath(Path.fromRect(geometry, element.options), page, pdf);
  }
}
function parseColor2(value) {
  var color = parseColor(value, true);
  return color ? color.toRGB() : null;
}
function optimize(root) {
  var clipbox = false;
  var matrix = matrix_default.unit();
  var currentBox = null;
  var changed;
  do {
    changed = false;
    root = opt(root);
  } while (root && changed);
  return { root, bbox: currentBox };
  function change(newShape) {
    changed = true;
    return newShape;
  }
  function visible(shape) {
    return shape.visible() && shape.opacity() > 0 && (shouldDraw(shape.fill()) || shouldDraw(shape.stroke()));
  }
  function optArray(a2) {
    var b = [];
    for (var i2 = 0; i2 < a2.length; ++i2) {
      var el = opt(a2[i2]);
      if (el != null) {
        b.push(el);
      }
    }
    return b;
  }
  function withClipping(shape, f2) {
    var saveclipbox = clipbox;
    var savematrix = matrix;
    if (shape.transform()) {
      matrix = matrix.multiplyCopy(shape.transform().matrix());
    }
    var clip = shape.clip();
    if (clip && typeof clip.bbox === "function") {
      clip = clip.bbox();
      if (clip) {
        clip = clip.bbox(matrix);
        clipbox = clipbox ? rect_default.intersect(clipbox, clip) : clip;
      }
    }
    try {
      return f2();
    } finally {
      clipbox = saveclipbox;
      matrix = savematrix;
    }
  }
  function inClipbox(shape) {
    if (clipbox == null) {
      return false;
    }
    let box = shape.rawBBox();
    if (box) {
      box = box.bbox(matrix);
    }
    if (clipbox && box) {
      box = rect_default.intersect(box, clipbox);
    }
    return box;
  }
  function opt(shape) {
    return withClipping(shape, function() {
      if (!(shape instanceof group_default || shape instanceof MultiPath)) {
        var box = inClipbox(shape);
        if (!box) {
          return change(null);
        }
        currentBox = currentBox ? rect_default.union(currentBox, box) : box;
      }
      return dispatch({
        Path: function(shape2) {
          if (shape2.segments.length === 0 || !visible(shape2)) {
            return change(null);
          }
          return shape2;
        },
        MultiPath: function(shape2) {
          if (!visible(shape2)) {
            return change(null);
          }
          var el = new MultiPath(shape2.options);
          el.paths = optArray(shape2.paths);
          if (el.paths.length === 0) {
            return change(null);
          }
          return el;
        },
        Circle: function(shape2) {
          if (!visible(shape2)) {
            return change(null);
          }
          return shape2;
        },
        Arc: function(shape2) {
          if (!visible(shape2)) {
            return change(null);
          }
          return shape2;
        },
        Text: function(shape2) {
          if (!/\S/.test(shape2.content()) || !visible(shape2)) {
            return change(null);
          }
          return shape2;
        },
        Image: function(shape2) {
          if (!(shape2.visible() && shape2.opacity() > 0)) {
            return change(null);
          }
          return shape2;
        },
        Group: function(shape2) {
          if (!(shape2.visible() && shape2.opacity() > 0)) {
            return change(null);
          }
          var el = new group_default(shape2.options);
          el.children = optArray(shape2.children);
          el._pdfLink = shape2._pdfLink;
          if (shape2 !== root && el.children.length === 0 && !shape2._pdfLink) {
            return change(null);
          }
          return el;
        },
        Rect: function(shape2) {
          if (!visible(shape2)) {
            return change(null);
          }
          return shape2;
        }
      }, shape);
    });
  }
}
function exportPDF(group, options2) {
  var promise = createPromise();
  for (var i2 in options2) {
    if (i2 == "margin" && group.options.pdf && group.options.pdf._ignoreMargin) {
      continue;
    }
    group.options.set("pdf." + i2, options2[i2]);
  }
  toDataURL(group, promise.resolve);
  return promise;
}

// node_modules/@progress/kendo-drawing/dist/es/html/core.js
var browser5 = support_default.browser || {};
function slice2(thing) {
  return Array.prototype.slice.call(thing);
}
var KENDO_PSEUDO_ELEMENT = "KENDO-PSEUDO-ELEMENT";
var KENDO_BULLET_TYPE = "data-kendo-bullet-type";
var IMAGE_CACHE2 = {};
var nodeInfo = {};
nodeInfo._root = nodeInfo;
var inBrowser = typeof window !== "undefined";
var microsoft = inBrowser ? browser5.msie || browser5.edge : false;
var TextRect = class extends text_default {
  constructor(str, rect, options2) {
    super(str, rect.getOrigin(), options2);
    this._pdfRect = rect;
  }
  rect() {
    return this._pdfRect;
  }
  rawBBox() {
    return this._pdfRect;
  }
};
function addClass(el, cls) {
  if (el.classList) {
    el.classList.add(cls);
  } else {
    el.className += " " + cls;
  }
}
function removeClass(el, cls) {
  if (el.classList) {
    el.classList.remove(cls);
  } else {
    el.className = el.className.split(/\s+/).reduce(function(a2, word) {
      if (word != cls) {
        a2.push(word);
      }
      return a2;
    }, []).join(" ");
  }
}
function setCSS(el, styles) {
  Object.keys(styles).forEach(function(key) {
    el.style[key] = styles[key];
  });
}
var matches = typeof Element !== "undefined" && Element.prototype && (function(p2) {
  if (p2.matches) {
    return function(el, selector) {
      return el.matches(selector);
    };
  }
  if (p2.webkitMatchesSelector) {
    return function(el, selector) {
      return el.webkitMatchesSelector(selector);
    };
  }
  if (p2.mozMatchesSelector) {
    return function(el, selector) {
      return el.mozMatchesSelector(selector);
    };
  }
  if (p2.msMatchesSelector) {
    return function(el, selector) {
      return el.msMatchesSelector(selector);
    };
  }
  return function(s2) {
    return [].indexOf.call(document.querySelectorAll(s2), this) !== -1;
  };
})(Element.prototype);
function closest(el, selector) {
  if (el.closest) {
    return el.closest(selector);
  }
  while (el && !/^\[object (?:HTML)?Document\]$/.test(String(el))) {
    if (el.nodeType == 1 && matches(el, selector)) {
      return el;
    }
    el = el.parentNode;
  }
}
var cloneNodes = (function($) {
  if ($) {
    return function cloneNodes2(el) {
      var clone = el.cloneNode(false);
      if (el.nodeType == 1) {
        var $el = $(el), $clone = $(clone), i2;
        var data = $el.data();
        for (i2 in data) {
          $clone.data(i2, data[i2]);
        }
        if (/^canvas$/i.test(el.tagName)) {
          clone.getContext("2d").drawImage(el, 0, 0);
        } else if (/^(?:input|select|textarea|option)$/i.test(el.tagName)) {
          clone.removeAttribute("id");
          clone.removeAttribute("name");
          if (!/^textarea$/i.test(el.tagName)) {
            clone.value = el.value;
          }
          clone.checked = el.checked;
          clone.selected = el.selected;
        } else if (/^img$/i.test(el.tagName)) {
          clone.removeAttribute("loading");
        }
        if (el._kendoExportVisual) {
          clone._kendoExportVisual = el._kendoExportVisual;
        }
        for (i2 = el.firstChild; i2; i2 = i2.nextSibling) {
          clone.appendChild(cloneNodes2(i2));
        }
      }
      return clone;
    };
  } else {
    return function cloneNodes2(el) {
      const clone = (function dive(node) {
        const clone2 = node.cloneNode(false);
        if (node._kendoExportVisual) {
          clone2._kendoExportVisual = node._kendoExportVisual;
        }
        for (let i2 = node.firstChild; i2; i2 = i2.nextSibling) {
          clone2.appendChild(dive(i2));
        }
        return clone2;
      })(el);
      const canvases = el.querySelectorAll("canvas");
      if (canvases.length) {
        slice2(clone.querySelectorAll("canvas")).forEach((canvas, i2) => {
          canvas.getContext("2d").drawImage(canvases[i2], 0, 0);
        });
      }
      const orig = el.querySelectorAll("input, select, textarea, option");
      slice2(clone.querySelectorAll("input, select, textarea, option")).forEach((el2, i2) => {
        el2.removeAttribute("id");
        el2.removeAttribute("name");
        if (!/^textarea$/i.test(el2.tagName)) {
          el2.value = orig[i2].value;
        }
        el2.checked = orig[i2].checked;
        el2.selected = orig[i2].selected;
      });
      slice2(clone.querySelectorAll("img")).forEach((img) => {
        img.removeAttribute("loading");
      });
      return clone;
    };
  }
})(typeof window !== "undefined" && window.kendo && window.kendo.jQuery);
function getXY(thing) {
  if (typeof thing == "number") {
    return { x: thing, y: thing };
  }
  if (Array.isArray(thing)) {
    return { x: thing[0], y: thing[1] };
  }
  return { x: thing.x, y: thing.y };
}
function drawDOM(element, options2) {
  if (!options2) {
    options2 = {};
  }
  var promise = createPromise();
  if (!element) {
    return promise.reject("No element to export");
  }
  if (typeof window.getComputedStyle != "function") {
    throw new Error("window.getComputedStyle is missing.  You are using an unsupported browser, or running in IE8 compatibility mode.  Drawing HTML is supported in Chrome, Firefox, Safari and IE9+.");
  }
  defineFont(getFontFaces(element.ownerDocument));
  var scale = getXY(options2.scale || 1);
  function doOne(element2) {
    var group = new group_default();
    var pos = element2.getBoundingClientRect();
    setTransform(group, [
      scale.x,
      0,
      0,
      scale.y,
      -pos.left * scale.x,
      -pos.top * scale.y
    ]);
    nodeInfo._clipbox = false;
    nodeInfo._matrix = matrix_default.unit();
    nodeInfo._stackingContext = {
      element: element2,
      group
    };
    if (options2.avoidLinks === true) {
      nodeInfo._avoidLinks = "a";
    } else {
      nodeInfo._avoidLinks = options2.avoidLinks;
    }
    addClass(element2, "k-pdf-export");
    renderElement(element2, group);
    removeClass(element2, "k-pdf-export");
    return group;
  }
  cacheImages([element], function() {
    var forceBreak = options2 && options2.forcePageBreak;
    var hasPaperSize = options2 && options2.paperSize && options2.paperSize != "auto";
    var paperOptions = getPaperOptions(function(key, def) {
      if (key == "paperSize") {
        return hasPaperSize ? options2[key] : "A4";
      }
      return key in options2 ? options2[key] : def;
    });
    var pageWidth = hasPaperSize && paperOptions.paperSize[0];
    var pageHeight = hasPaperSize && paperOptions.paperSize[1];
    var margin = options2.margin && paperOptions.margin;
    var hasMargin = Boolean(margin);
    if (forceBreak || pageHeight) {
      if (!margin) {
        margin = { left: 0, top: 0, right: 0, bottom: 0 };
      }
      if (pageWidth) {
        pageWidth /= scale.x;
      }
      if (pageHeight) {
        pageHeight /= scale.y;
      }
      margin.left /= scale.x;
      margin.right /= scale.x;
      margin.top /= scale.y;
      margin.bottom /= scale.y;
      var group = new group_default({
        pdf: {
          multiPage: true,
          paperSize: hasPaperSize ? paperOptions.paperSize : "auto",
          _ignoreMargin: hasMargin
          // HACK!  see exportPDF in pdf/drawing.js
        }
      });
      handlePageBreaks(
        function(x) {
          if (options2.progress) {
            var canceled = false, pageNum = 0;
            (function next() {
              if (pageNum < x.pages.length) {
                var page = doOne(x.pages[pageNum]);
                group.append(page);
                options2.progress({
                  page,
                  pageNum: ++pageNum,
                  totalPages: x.pages.length,
                  cancel: function() {
                    canceled = true;
                  }
                });
                if (!canceled) {
                  setTimeout(next);
                } else {
                  x.container.parentNode.removeChild(x.container);
                }
              } else {
                x.container.parentNode.removeChild(x.container);
                promise.resolve(group);
              }
            })();
          } else {
            x.pages.forEach(function(page) {
              group.append(doOne(page));
            });
            x.container.parentNode.removeChild(x.container);
            promise.resolve(group);
          }
        },
        element,
        forceBreak,
        pageWidth ? pageWidth - margin.left - margin.right : null,
        pageHeight ? pageHeight - margin.top - margin.bottom : null,
        margin,
        options2
      );
    } else {
      promise.resolve(doOne(element));
    }
  });
  function makeTemplate(template2) {
    if (template2 != null) {
      if (typeof template2 == "string") {
        template2 = template(template2.replace(/^\s+|\s+$/g, ""));
      }
      if (typeof template2 == "function") {
        return function(data) {
          var el = template2(data);
          if (el && typeof el == "string") {
            var div = document.createElement("div");
            setInnerHTML(div, el);
            el = div.firstElementChild;
          }
          return el;
        };
      }
      return function() {
        return template2.cloneNode(true);
      };
    }
  }
  function handlePageBreaks(callback, element2, forceBreak, pageWidth, pageHeight, margin, options3) {
    var template2 = makeTemplate(options3.template);
    var doc = element2.ownerDocument;
    var pages = [];
    var copy = options3._destructive ? element2 : cloneNodes(element2);
    var container = doc.createElement("KENDO-PDF-DOCUMENT");
    var adjust = 0;
    slice2(copy.querySelectorAll("tfoot")).forEach(function(tfoot) {
      tfoot.parentNode.appendChild(tfoot);
    });
    slice2(copy.querySelectorAll("ol")).forEach(function(ol) {
      slice2(ol.children).forEach(function(li, index) {
        li.setAttribute("kendo-split-index", index);
      });
    });
    setCSS(container, {
      display: "block",
      position: "absolute",
      boxSizing: "content-box",
      left: "-10000px",
      top: "-10000px"
    });
    if (pageWidth) {
      setCSS(container, {
        width: pageWidth + "px",
        paddingLeft: margin.left + "px",
        paddingRight: margin.right + "px"
      });
      setCSS(copy, { overflow: "hidden" });
    }
    element2.parentNode.insertBefore(container, element2);
    container.appendChild(copy);
    addClass(copy, "k-pdf-export");
    if (options3.beforePageBreak) {
      whenImagesAreActuallyLoaded([container], function() {
        options3.beforePageBreak(container, doPageBreak);
      });
    } else {
      whenImagesAreActuallyLoaded([container], doPageBreak);
    }
    function doPageBreak() {
      if (forceBreak != "-" || pageHeight) {
        splitElement(copy);
      }
      {
        let page = makePage();
        copy.parentNode.insertBefore(page, copy);
        page.appendChild(copy);
      }
      if (template2) {
        pages.forEach(function(page, i2) {
          const el = template2({
            element: page,
            pageNum: i2 + 1,
            totalPages: pages.length
          });
          if (el) {
            page.appendChild(el);
          }
        });
      }
      removeClass(copy, "k-pdf-export");
      cacheImages(pages, callback.bind(null, { pages, container }));
    }
    function isElementVisible(el) {
      if (el.checkVisibility) {
        return el.checkVisibility({ visibilityProperty: true });
      }
      var current = el;
      while (current && current !== copy) {
        var style = getComputedStyle2(current);
        if (getPropertyValue(style, "display") === "none" || getPropertyValue(style, "visibility") === "hidden") {
          return false;
        }
        current = current.parentNode;
      }
      return true;
    }
    function keepTogether(el) {
      if (options3.keepTogether && matches(el, options3.keepTogether) && el.offsetHeight <= pageHeight - adjust) {
        return true;
      }
      var tag = el.tagName;
      if (/^h[1-6]$/i.test(tag) && el.offsetHeight >= pageHeight - adjust) {
        return false;
      }
      return el.getAttribute("data-kendo-chart") || /^(?:img|tr|thead|th|tfoot|iframe|svg|object|canvas|input|textarea|select|video|h[1-6])/i.test(el.tagName);
    }
    function splitElement(element3) {
      if (element3.tagName == "TABLE") {
        setCSS(element3, { tableLayout: "fixed" });
      }
      if (keepTogether(element3)) {
        return;
      }
      var style = getComputedStyle2(element3);
      var bottomPadding = parseFloat(getPropertyValue(style, "padding-bottom"));
      var bottomBorder = parseFloat(getPropertyValue(style, "border-bottom-width"));
      var saveAdjust = adjust;
      adjust += bottomPadding + bottomBorder;
      var isFirst = true;
      for (var el = element3.firstChild; el; el = el.nextSibling) {
        if (el.nodeType == 1) {
          isFirst = false;
          if (matches(el, forceBreak) && isElementVisible(el)) {
            breakAtElement(el);
            continue;
          }
          if (!pageHeight) {
            splitElement(el);
            continue;
          }
          if (!/^(?:static|relative)$/.test(getPropertyValue(getComputedStyle2(el), "position"))) {
            continue;
          }
          var fall = fallsOnMargin(el);
          if (fall == 1) {
            breakAtElement(el);
          } else if (fall) {
            if (keepTogether(el)) {
              breakAtElement(el);
            } else {
              splitElement(el);
            }
          } else {
            splitElement(el);
          }
        } else if (el.nodeType == 3 && pageHeight) {
          splitText(el, isFirst);
          isFirst = false;
        }
      }
      adjust = saveAdjust;
    }
    function firstInParent(el) {
      var p2 = el.parentNode, first = p2.firstChild;
      if (el === first) {
        return true;
      }
      if (el === p2.children[0]) {
        if (first.nodeType == 7 || first.nodeType == 8) {
          return true;
        }
        if (first.nodeType == 3) {
          return !/\S/.test(first.data);
        }
      }
      return false;
    }
    function breakAtElement(el) {
      if (el.nodeType == 1 && el !== copy && firstInParent(el)) {
        return breakAtElement(el.parentNode);
      }
      var table, colgroup, thead, grid, gridHead;
      table = closest(el, "table");
      colgroup = table && table.querySelector("colgroup");
      if (options3.repeatHeaders) {
        thead = table && table.querySelector("thead");
        grid = closest(el, ".k-grid");
        if (grid && grid.querySelector(".k-auto-scrollable")) {
          gridHead = grid.querySelector(".k-grid-header");
        }
      }
      var rowspanCells = [];
      if (table && el.tagName === "TR") {
        rowspanCells = collectRowspanCells(table, el);
      }
      var page = makePage();
      var range = doc.createRange();
      range.setStartBefore(copy);
      range.setEndBefore(el);
      page.appendChild(range.extractContents());
      copy.parentNode.insertBefore(page, copy);
      preventBulletOnListItem(el.parentNode);
      if (table) {
        table = closest(el, "table");
        if (options3.repeatHeaders && thead) {
          table.insertBefore(thead.cloneNode(true), table.firstChild);
        }
        if (colgroup) {
          table.insertBefore(colgroup.cloneNode(true), table.firstChild);
        }
        if (rowspanCells.length > 0) {
          restoreRowspanCells(table, rowspanCells);
        }
      }
      if (options3.repeatHeaders && gridHead) {
        grid = closest(el, ".k-grid");
        grid.insertBefore(gridHead.cloneNode(true), grid.firstChild);
      }
    }
    function isTableRow(el) {
      return el.tagName === "TR";
    }
    function collectRowspanCells(table, breakRow) {
      var rowspanCells = [];
      var tbody = table.querySelector("tbody");
      var rows = tbody ? slice2(tbody.children).filter(isTableRow) : slice2(table.children).filter(isTableRow);
      var breakRowIndex = rows.indexOf(breakRow);
      if (breakRowIndex === -1) {
        return rowspanCells;
      }
      for (var i2 = 0; i2 < breakRowIndex; i2++) {
        var row = rows[i2];
        var cells = slice2(row.cells);
        for (var j = 0; j < cells.length; j++) {
          var cell = cells[j];
          var rowspan = parseInt(cell.getAttribute("rowspan") || "1", 10);
          if (i2 + rowspan > breakRowIndex) {
            var remainingRowspan = i2 + rowspan - breakRowIndex;
            var rowsOnFirstPage = breakRowIndex - i2;
            var rowsOnSecondPage = remainingRowspan;
            var cellClone = cell.cloneNode(true);
            const cellWidth = getPropertyValue(getComputedStyle2(cell), "width");
            if (rowsOnSecondPage <= rowsOnFirstPage) {
              cellClone.style.width = cellWidth;
              cellClone.innerHTML = "";
            } else {
              cell.style.width = cellWidth;
              cell.innerHTML = "";
            }
            rowspanCells.push({
              cell: cellClone,
              columnIndex: getCellColumnIndex(row, cell),
              remainingRowspan
            });
          }
        }
      }
      return rowspanCells;
    }
    function getCellColumnIndex(row, targetCell) {
      var columnIndex = 0;
      var cells = slice2(row.cells);
      for (var i2 = 0; i2 < cells.length; i2++) {
        if (cells[i2] === targetCell) {
          return columnIndex;
        }
        var colspan = parseInt(cells[i2].getAttribute("colspan") || "1", 10);
        columnIndex += colspan;
      }
      return columnIndex;
    }
    function restoreRowspanCells(table, rowspanCells) {
      if (!rowspanCells.length) {
        return;
      }
      var tbody = table.querySelector("tbody");
      var rows = tbody ? slice2(tbody.children).filter(isTableRow) : slice2(table.children).filter(isTableRow);
      if (!rows.length) {
        return;
      }
      var firstRow = rows[0];
      rowspanCells.sort(function(a2, b) {
        return a2.columnIndex - b.columnIndex;
      });
      for (var i2 = 0; i2 < rowspanCells.length; i2++) {
        var rowspanInfo = rowspanCells[i2];
        var cell = rowspanInfo.cell;
        cell.setAttribute("rowspan", rowspanInfo.remainingRowspan);
        insertCellAtColumn(firstRow, cell, rowspanInfo.columnIndex);
      }
    }
    function insertCellAtColumn(row, cellToInsert, targetColumnIndex) {
      var cells = slice2(row.cells);
      var currentColumnIndex = 0;
      for (var i2 = 0; i2 < cells.length; i2++) {
        var cell = cells[i2];
        var colspan = parseInt(cell.getAttribute("colspan") || "1", 10);
        if (currentColumnIndex === targetColumnIndex) {
          row.insertBefore(cellToInsert, cell);
          return;
        }
        if (currentColumnIndex + colspan > targetColumnIndex) {
          if (i2 + 1 < cells.length) {
            row.insertBefore(cellToInsert, cells[i2 + 1]);
          } else {
            row.appendChild(cellToInsert);
          }
          return;
        }
        currentColumnIndex += colspan;
      }
      row.appendChild(cellToInsert);
    }
    function makePage() {
      var page = doc.createElement("KENDO-PDF-PAGE");
      setCSS(page, {
        display: "block",
        boxSizing: "content-box",
        width: pageWidth ? pageWidth + "px" : "auto",
        padding: margin.top + "px " + margin.right + "px " + margin.bottom + "px " + margin.left + "px",
        // allow absolutely positioned elements to be relative to current page
        position: "relative",
        // without the following we might affect layout of subsequent pages
        height: pageHeight ? pageHeight + "px" : "auto",
        overflow: pageHeight || pageWidth ? "hidden" : "visible",
        clear: "both"
      });
      if (options3 && options3.pageClassName) {
        page.className = options3.pageClassName;
      }
      pages.push(page);
      return page;
    }
    function fallsOnMargin(thing) {
      var box = thing.getBoundingClientRect();
      if (box.width === 0 || box.height === 0) {
        return 0;
      }
      var top = copy.getBoundingClientRect().top;
      var available = pageHeight - adjust;
      return box.height > available ? 3 : box.top - top > available ? 1 : box.bottom - top > available ? 2 : 0;
    }
    function splitText(node, isFirst) {
      if (!/\S/.test(node.data)) {
        return;
      }
      var len = node.data.length;
      var range = doc.createRange();
      range.selectNodeContents(node);
      var fall = fallsOnMargin(range);
      if (!fall) {
        return;
      }
      var nextnode = node;
      if (fall == 1) {
        if (isFirst) {
          breakAtElement(node.parentNode);
        } else {
          breakAtElement(node);
        }
      } else {
        (function findEOP(min, pos, max) {
          range.setEnd(node, pos);
          if (min == pos || pos == max) {
            return pos;
          }
          if (fallsOnMargin(range)) {
            return findEOP(min, min + pos >> 1, pos);
          } else {
            return findEOP(pos, pos + max >> 1, max);
          }
        })(0, len >> 1, len);
        if (!/\S/.test(range.toString()) && isFirst) {
          breakAtElement(node.parentNode);
        } else {
          nextnode = node.splitText(range.endOffset);
          var page = makePage();
          range.setStartBefore(copy);
          page.appendChild(range.extractContents());
          copy.parentNode.insertBefore(page, copy);
          preventBulletOnListItem(nextnode.parentNode);
        }
      }
      splitText(nextnode);
    }
    function preventBulletOnListItem(el) {
      var li = closest(el, "li");
      if (li) {
        li.setAttribute("kendo-no-bullet", "1");
        preventBulletOnListItem(li.parentNode);
      }
    }
  }
  return promise;
}
var parseBackgroundImage = /* @__PURE__ */ (function() {
  var tok_linear_gradient = /^((-webkit-|-moz-|-o-|-ms-)?linear-gradient\s*)\(/;
  var tok_percent = /^([-0-9.]+%)/;
  var tok_length = /^([-0-9.]+px)/;
  var tok_keyword = /^(left|right|top|bottom|to|center)\W/;
  var tok_angle = /^([-0-9.]+(deg|grad|rad|turn)|0)/;
  var tok_whitespace = /^(\s+)/;
  var tok_popen = /^(\()/;
  var tok_pclose = /^(\))/;
  var tok_comma = /^(,)/;
  var tok_url = /^(url)\(/;
  var tok_content = /^(.*?)\)/;
  var cache1 = {}, cache2 = {};
  function parse(input) {
    var orig = input;
    if (hasOwnProperty3(cache1, orig)) {
      return cache1[orig];
    }
    function skip_ws() {
      var m2 = tok_whitespace.exec(input);
      if (m2) {
        input = input.substr(m2[1].length);
      }
    }
    function read(token) {
      skip_ws();
      var m2 = token.exec(input);
      if (m2) {
        input = input.substr(m2[1].length);
        return m2[1];
      }
    }
    function read_stop() {
      var color = parseColor(input, true);
      var length, percent;
      if (color) {
        let match = /^#[0-9a-f]+/i.exec(input) || /^rgba?\(.*?\)/i.exec(input) || /^..*?\b/.exec(input);
        input = input.substr(match[0].length);
        color = color.toRGB();
        if (!(length = read(tok_length))) {
          percent = read(tok_percent);
        }
        return { color, length, percent };
      }
    }
    function read_linear_gradient(propName) {
      var angle;
      var to1, to2;
      var stops = [];
      var reverse = false;
      if (read(tok_popen)) {
        angle = read(tok_angle);
        if (angle == "0") {
          angle = "0deg";
        }
        if (angle) {
          angle = parseAngle(angle);
          read(tok_comma);
        } else {
          to1 = read(tok_keyword);
          if (to1 == "to") {
            to1 = read(tok_keyword);
          } else if (to1 && /^-/.test(propName)) {
            reverse = true;
          }
          to2 = read(tok_keyword);
          read(tok_comma);
        }
        if (/-moz-/.test(propName) && angle == null && to1 == null) {
          var x = read(tok_percent), y2 = read(tok_percent);
          reverse = true;
          if (x == "0%") {
            to1 = "left";
          } else if (x == "100%") {
            to1 = "right";
          }
          if (y2 == "0%") {
            to2 = "top";
          } else if (y2 == "100%") {
            to2 = "bottom";
          }
          read(tok_comma);
        }
        while (input && !read(tok_pclose)) {
          var stop = read_stop();
          if (!stop) {
            break;
          }
          stops.push(stop);
          read(tok_comma);
        }
        return {
          type: "linear",
          angle,
          to: to1 && to2 ? to1 + " " + to2 : to1 ? to1 : to2 ? to2 : null,
          stops,
          reverse
        };
      }
    }
    function read_url() {
      if (read(tok_popen)) {
        var url = read(tok_content);
        url = url.replace(/^['"]+|["']+$/g, "");
        read(tok_pclose);
        return { type: "url", url };
      }
    }
    var tok;
    if (tok = read(tok_linear_gradient)) {
      tok = read_linear_gradient(tok);
    } else if (tok = read(tok_url)) {
      tok = read_url();
    }
    return cache1[orig] = tok || { type: "none" };
  }
  return function(input) {
    if (hasOwnProperty3(cache2, input)) {
      return cache2[input];
    }
    return cache2[input] = splitProperty(input).map(parse);
  };
})();
var splitProperty = /* @__PURE__ */ (function() {
  var cache = {};
  return function(input, separator) {
    if (!separator) {
      separator = /^\s*,\s*/;
    }
    var cacheKey = input + separator;
    if (hasOwnProperty3(cache, cacheKey)) {
      return cache[cacheKey];
    }
    var ret = [];
    var last2 = 0, pos = 0;
    var in_paren = 0;
    var in_string = false;
    var m2;
    function looking_at(rx) {
      return m2 = rx.exec(input.substr(pos));
    }
    function trim(str) {
      return str.replace(/^\s+|\s+$/g, "");
    }
    while (pos < input.length) {
      if (!in_string && looking_at(/^[\(\[\{]/)) {
        in_paren++;
        pos++;
      } else if (!in_string && looking_at(/^[\)\]\}]/)) {
        in_paren--;
        pos++;
      } else if (!in_string && looking_at(/^[\"\']/)) {
        in_string = m2[0];
        pos++;
      } else if (in_string == "'" && looking_at(/^\\\'/)) {
        pos += 2;
      } else if (in_string == '"' && looking_at(/^\\\"/)) {
        pos += 2;
      } else if (in_string == "'" && looking_at(/^\'/)) {
        in_string = false;
        pos++;
      } else if (in_string == '"' && looking_at(/^\"/)) {
        in_string = false;
        pos++;
      } else if (looking_at(separator)) {
        if (!in_string && !in_paren && pos > last2) {
          ret.push(trim(input.substring(last2, pos)));
          last2 = pos + m2[0].length;
        }
        pos += m2[0].length;
      } else {
        pos++;
      }
    }
    if (last2 < pos) {
      ret.push(trim(input.substring(last2, pos)));
    }
    return cache[cacheKey] = ret;
  };
})();
var getFontURL2 = /* @__PURE__ */ (function(cache) {
  return function(el) {
    var url = cache[el];
    if (!url) {
      var m2;
      if (m2 = /url\((['"]?)([^'")]*?)\1\)\s+format\((['"]?)truetype\3\)/.exec(el)) {
        url = cache[el] = m2[2];
      } else if (m2 = /url\((['"]?)([^'")]*?\.ttf)\1\)/.exec(el)) {
        url = cache[el] = m2[2];
      }
    }
    return url;
  };
})(/* @__PURE__ */ Object.create(null));
var getFontHeight = /* @__PURE__ */ (function(cache) {
  return function(font) {
    var height = cache[font];
    if (height == null) {
      height = cache[font] = measureText("Mapq", { font }).height;
    }
    return height;
  };
})(/* @__PURE__ */ Object.create(null));
function getFontFaces(doc) {
  if (doc == null) {
    doc = document;
  }
  var result = {};
  for (var i2 = 0; i2 < doc.styleSheets.length; ++i2) {
    doStylesheet(doc.styleSheets[i2]);
  }
  return result;
  function doStylesheet(ss) {
    if (ss) {
      var rules = null;
      try {
        rules = ss.cssRules;
      } catch (ex) {
      }
      if (rules) {
        addRules(ss, rules);
      }
    }
  }
  function findFonts(rule) {
    var src = getPropertyValue(rule.style, "src");
    if (src) {
      return splitProperty(src).reduce(function(a2, el) {
        var font2 = getFontURL2(el);
        if (font2) {
          a2.push(font2);
        }
        return a2;
      }, []);
    } else {
      var font = getFontURL2(rule.cssText);
      return font ? [font] : [];
    }
  }
  function addRules(styleSheet, rules) {
    for (var i3 = 0; i3 < rules.length; ++i3) {
      var r2 = rules[i3];
      switch (r2.type) {
        case 3:
          doStylesheet(r2.styleSheet);
          break;
        case 5:
          var style = r2.style;
          var family = splitProperty(getPropertyValue(style, "font-family"));
          var bold = /^([56789]00|bold)$/i.test(getPropertyValue(style, "font-weight"));
          var italic = "italic" == getPropertyValue(style, "font-style");
          var src = findFonts(r2);
          if (src.length > 0) {
            addRule(styleSheet, family, bold, italic, src[0]);
          }
      }
    }
  }
  function addRule(styleSheet, names, bold, italic, url) {
    if (!/^data:/i.test(url)) {
      if (!(/^[^\/:]+:\/\//.test(url) || /^\//.test(url))) {
        url = String(styleSheet.href).replace(/[^\/]*$/, "") + url;
      }
    }
    names.forEach(function(name) {
      name = name.replace(/^(['"]?)(.*?)\1$/, "$2");
      if (bold) {
        name += "|bold";
      }
      if (italic) {
        name += "|italic";
      }
      result[name] = url;
    });
  }
}
function hasOwnProperty3(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function getCounter(name) {
  name = "_counter_" + name;
  return nodeInfo[name];
}
function getAllCounters(name) {
  var values = [], p2 = nodeInfo;
  name = "_counter_" + name;
  while (p2) {
    if (hasOwnProperty3(p2, name)) {
      values.push(p2[name]);
    }
    p2 = Object.getPrototypeOf(p2);
  }
  return values.reverse();
}
function incCounter(name, inc) {
  var p2 = nodeInfo;
  name = "_counter_" + name;
  while (p2 && !hasOwnProperty3(p2, name)) {
    p2 = Object.getPrototypeOf(p2);
  }
  if (!p2) {
    p2 = nodeInfo._root;
  }
  p2[name] = (p2[name] || 0) + (inc == null ? 1 : inc);
}
function resetCounter(name, val) {
  name = "_counter_" + name;
  nodeInfo[name] = val == null ? 0 : val;
}
function doCounters(a2, f2, def) {
  for (var i2 = 0; i2 < a2.length; ) {
    var name = a2[i2++];
    var val = parseFloat(a2[i2]);
    if (isNaN(val)) {
      f2(name, def);
    } else {
      f2(name, val);
      ++i2;
    }
  }
}
function updateCounters(style) {
  var counterReset = getPropertyValue(style, "counter-reset");
  if (counterReset) {
    doCounters(splitProperty(counterReset, /^\s+/), resetCounter, 0);
  }
  var counterIncrement = getPropertyValue(style, "counter-increment");
  if (counterIncrement) {
    doCounters(splitProperty(counterIncrement, /^\s+/), incCounter, 1);
  }
}
function parseColor3(str, css) {
  var color = parseColor(str, true);
  if (color) {
    color = color.toRGB();
    if (css) {
      color = color.toCssRgba();
    } else if (color.a === 0) {
      color = null;
    }
  }
  return color;
}
function whenImagesAreActuallyLoaded(elements, callback) {
  var pending = 0;
  var done = false;
  elements.forEach(function(el) {
    var images = el.querySelectorAll("img");
    for (var i2 = 0; i2 < images.length; ++i2) {
      var img = images[i2];
      if (!img.complete) {
        pending++;
        img.onload = img.onerror = next;
      }
    }
  });
  if (!pending) {
    next();
  }
  function next() {
    if (!done && --pending <= 0) {
      callback();
      done = true;
    }
  }
}
function cacheImages(elements, callback) {
  var urls = [];
  function add(url) {
    if (!IMAGE_CACHE2[url]) {
      IMAGE_CACHE2[url] = true;
      urls.push(url);
    }
  }
  elements.forEach(function dive(element) {
    if (/^img$/i.test(element.tagName)) {
      add(element.src);
    }
    parseBackgroundImage(
      getPropertyValue(
        getComputedStyle2(element),
        "background-image"
      )
    ).forEach(function(bg) {
      if (bg.type == "url") {
        add(bg.url);
      }
    });
    if (element.children) {
      slice2(element.children).forEach(dive);
    }
  });
  var count = urls.length;
  function next() {
    if (--count <= 0) {
      whenImagesAreActuallyLoaded(elements, callback);
    }
  }
  if (count === 0) {
    next();
  }
  urls.forEach(function(url) {
    var img = IMAGE_CACHE2[url] = new window.Image();
    if (!/^data:/i.test(url)) {
      img.crossOrigin = "Anonymous";
    }
    img.src = url;
    if (img.complete) {
      next();
    } else {
      img.onload = next;
      img.onerror = function() {
        IMAGE_CACHE2[url] = null;
        next();
      };
      if (/^data:/i.test(url)) {
        setTimeout(function() {
          if (img.complete && img.onload === next) {
            img.onload = null;
            img.onerror = null;
            next();
          }
        }, 10);
      }
    }
  });
}
function alphaNumeral(n2) {
  var result = "";
  do {
    var r2 = n2 % 26;
    result = String.fromCharCode(97 + r2) + result;
    n2 = Math.floor(n2 / 26);
  } while (n2 > 0);
  return result;
}
function pushNodeInfo(element, style, group) {
  nodeInfo = Object.create(nodeInfo);
  nodeInfo[element.tagName.toLowerCase()] = {
    element,
    style
  };
  let decoration = getPropertyValue(style, "text-decoration");
  if (decoration && decoration != "none") {
    let color = resolveElementColor(element, "text-decoration-color");
    decoration.split(/\s+/g).forEach(function(name) {
      if (!nodeInfo[name]) {
        nodeInfo[name] = color;
        if (name == "underline") {
          let offset = getPropertyValue(style, "text-underline-offset");
          if (offset != "auto") {
            nodeInfo["underline-offset"] = parseFloat(offset);
          }
        }
      }
    });
  }
  if (createsStackingContext(style)) {
    nodeInfo._stackingContext = {
      element,
      group
    };
  }
}
function popNodeInfo() {
  nodeInfo = Object.getPrototypeOf(nodeInfo);
}
function updateClipbox(path) {
  if (nodeInfo._clipbox != null) {
    var box = path.bbox(nodeInfo._matrix);
    if (nodeInfo._clipbox) {
      nodeInfo._clipbox = rect_default.intersect(nodeInfo._clipbox, box);
    } else {
      nodeInfo._clipbox = box;
    }
  }
}
function emptyClipbox() {
  var cb = nodeInfo._clipbox;
  if (cb == null) {
    return true;
  }
  if (cb) {
    return cb.width() === 0 || cb.height() === 0;
  }
}
function createsStackingContext(style) {
  function prop(name) {
    return getPropertyValue(style, name);
  }
  if (prop("transform") != "none" || prop("position") != "static" || prop("z-index") != "auto" || prop("opacity") < 1) {
    return true;
  }
}
function getComputedStyle2(element, pseudoElt) {
  return window.getComputedStyle(element, pseudoElt || null);
}
function getPropertyValue(style, prop, defa) {
  var val = style.getPropertyValue(prop);
  if (val == null || val === "") {
    if (browser5.webkit) {
      val = style.getPropertyValue("-webkit-" + prop);
    } else if (browser5.mozilla) {
      val = style.getPropertyValue("-moz-" + prop);
    } else if (browser5.opera) {
      val = style.getPropertyValue("-o-" + prop);
    } else if (microsoft) {
      val = style.getPropertyValue("-ms-" + prop);
    }
  }
  if (arguments.length > 2 && (val == null || val === "")) {
    return defa;
  } else {
    return val;
  }
}
function pleaseSetPropertyValue(style, prop, value, important) {
  style.setProperty(prop, value, important);
  if (browser5.webkit) {
    style.setProperty("-webkit-" + prop, value, important);
  } else if (browser5.mozilla) {
    style.setProperty("-moz-" + prop, value, important);
  } else if (browser5.opera) {
    style.setProperty("-o-" + prop, value, important);
  } else if (microsoft) {
    style.setProperty("-ms-" + prop, value, important);
    prop = "ms" + prop.replace(/(^|-)([a-z])/g, function(s2, p1, p2) {
      return p1 + p2.toUpperCase();
    });
    style[prop] = value;
  }
}
function getBorder(element, style, side) {
  side = "border-" + side;
  return {
    width: parseFloat(getPropertyValue(style, side + "-width")),
    style: getPropertyValue(style, side + "-style"),
    color: resolveElementColor(element, side + "-color")
  };
}
function saveStyle(element, func) {
  var prev = element.style.cssText;
  var result = func();
  setStyle(element, prev);
  return result;
}
function getBorderRadius(style, side) {
  var r2 = getPropertyValue(style, "border-" + side + "-radius").split(/\s+/g).map(parseFloat);
  if (r2.length == 1) {
    r2.push(r2[0]);
  }
  return sanitizeRadius({ x: r2[0], y: r2[1] });
}
function getContentBox(element) {
  var box = element.getBoundingClientRect();
  box = innerBox(box, "border-*-width", element);
  box = innerBox(box, "padding-*", element);
  return box;
}
function innerBox(box, prop, element) {
  var style, wt, wr, wb, wl;
  if (typeof prop == "string") {
    style = getComputedStyle2(element);
    wt = parseFloat(getPropertyValue(style, prop.replace("*", "top")));
    wr = parseFloat(getPropertyValue(style, prop.replace("*", "right")));
    wb = parseFloat(getPropertyValue(style, prop.replace("*", "bottom")));
    wl = parseFloat(getPropertyValue(style, prop.replace("*", "left")));
  } else if (typeof prop == "number") {
    wt = wr = wb = wl = prop;
  }
  return {
    top: box.top + wt,
    right: box.right - wr,
    bottom: box.bottom - wb,
    left: box.left + wl,
    width: box.right - box.left - wr - wl,
    height: box.bottom - box.top - wb - wt
  };
}
function getTransform(style) {
  var transform2 = getPropertyValue(style, "transform");
  if (transform2 == "none") {
    return null;
  }
  var matrix = /^\s*matrix\(\s*(.*?)\s*\)\s*$/.exec(transform2);
  if (matrix) {
    var origin = getPropertyValue(style, "transform-origin");
    matrix = matrix[1].split(/\s*,\s*/g).map(parseFloat);
    origin = origin.split(/\s+/g).map(parseFloat);
    return {
      matrix,
      origin
    };
  }
}
function radiansToDegrees(radians) {
  return 180 * radians / Math.PI % 360;
}
function parseAngle(angle) {
  var num = parseFloat(angle);
  if (/grad$/.test(angle)) {
    return Math.PI * num / 200;
  } else if (/rad$/.test(angle)) {
    return num;
  } else if (/turn$/.test(angle)) {
    return Math.PI * num * 2;
  } else if (/deg$/.test(angle)) {
    return Math.PI * num / 180;
  }
}
function setTransform(shape, m2) {
  m2 = new matrix_default(m2[0], m2[1], m2[2], m2[3], m2[4], m2[5]);
  shape.transform(m2);
  return m2;
}
function setClipping2(shape, clipPath) {
  shape.clip(clipPath);
}
function addArcToPath(path, x, y2, options2) {
  var points3 = new arc_default([x, y2], options2).curvePoints(), i2 = 1;
  while (i2 < points3.length) {
    path.curveTo(points3[i2++], points3[i2++], points3[i2++]);
  }
}
function sanitizeRadius(r2) {
  if (r2.x <= 0 || r2.y <= 0) {
    r2.x = r2.y = 0;
  }
  return r2;
}
function adjustBorderRadiusForBox(box, rTL, rTR, rBR, rBL) {
  var tl_x = Math.max(0, rTL.x), tl_y = Math.max(0, rTL.y);
  var tr_x = Math.max(0, rTR.x), tr_y = Math.max(0, rTR.y);
  var br_x = Math.max(0, rBR.x), br_y = Math.max(0, rBR.y);
  var bl_x = Math.max(0, rBL.x), bl_y = Math.max(0, rBL.y);
  var f2 = Math.min(
    box.width / (tl_x + tr_x),
    box.height / (tr_y + br_y),
    box.width / (br_x + bl_x),
    box.height / (bl_y + tl_y)
  );
  if (f2 < 1) {
    tl_x *= f2;
    tl_y *= f2;
    tr_x *= f2;
    tr_y *= f2;
    br_x *= f2;
    br_y *= f2;
    bl_x *= f2;
    bl_y *= f2;
  }
  return {
    tl: { x: tl_x, y: tl_y },
    tr: { x: tr_x, y: tr_y },
    br: { x: br_x, y: br_y },
    bl: { x: bl_x, y: bl_y }
  };
}
function elementRoundBox(element, box, type) {
  var style = getComputedStyle2(element);
  var rTL = getBorderRadius(style, "top-left");
  var rTR = getBorderRadius(style, "top-right");
  var rBL = getBorderRadius(style, "bottom-left");
  var rBR = getBorderRadius(style, "bottom-right");
  if (type == "padding" || type == "content") {
    var bt = getBorder(element, style, "top");
    var br = getBorder(element, style, "right");
    var bb = getBorder(element, style, "bottom");
    var bl = getBorder(element, style, "left");
    rTL.x -= bl.width;
    rTL.y -= bt.width;
    rTR.x -= br.width;
    rTR.y -= bt.width;
    rBR.x -= br.width;
    rBR.y -= bb.width;
    rBL.x -= bl.width;
    rBL.y -= bb.width;
    if (type == "content") {
      var pt = parseFloat(getPropertyValue(style, "padding-top"));
      var pr = parseFloat(getPropertyValue(style, "padding-right"));
      var pb = parseFloat(getPropertyValue(style, "padding-bottom"));
      var pl = parseFloat(getPropertyValue(style, "padding-left"));
      rTL.x -= pl;
      rTL.y -= pt;
      rTR.x -= pr;
      rTR.y -= pt;
      rBR.x -= pr;
      rBR.y -= pb;
      rBL.x -= pl;
      rBL.y -= pb;
    }
  }
  if (typeof type == "number") {
    rTL.x -= type;
    rTL.y -= type;
    rTR.x -= type;
    rTR.y -= type;
    rBR.x -= type;
    rBR.y -= type;
    rBL.x -= type;
    rBL.y -= type;
  }
  return roundBox(box, rTL, rTR, rBR, rBL);
}
function roundBox(box, rTL0, rTR0, rBR0, rBL0) {
  var tmp = adjustBorderRadiusForBox(box, rTL0, rTR0, rBR0, rBL0);
  var rTL = tmp.tl;
  var rTR = tmp.tr;
  var rBR = tmp.br;
  var rBL = tmp.bl;
  var path = new Path({ fill: null, stroke: null });
  path.moveTo(box.left, box.top + rTL.y);
  if (rTL.x) {
    addArcToPath(path, box.left + rTL.x, box.top + rTL.y, {
      startAngle: -180,
      endAngle: -90,
      radiusX: rTL.x,
      radiusY: rTL.y
    });
  }
  path.lineTo(box.right - rTR.x, box.top);
  if (rTR.x) {
    addArcToPath(path, box.right - rTR.x, box.top + rTR.y, {
      startAngle: -90,
      endAngle: 0,
      radiusX: rTR.x,
      radiusY: rTR.y
    });
  }
  path.lineTo(box.right, box.bottom - rBR.y);
  if (rBR.x) {
    addArcToPath(path, box.right - rBR.x, box.bottom - rBR.y, {
      startAngle: 0,
      endAngle: 90,
      radiusX: rBR.x,
      radiusY: rBR.y
    });
  }
  path.lineTo(box.left + rBL.x, box.bottom);
  if (rBL.x) {
    addArcToPath(path, box.left + rBL.x, box.bottom - rBL.y, {
      startAngle: 90,
      endAngle: 180,
      radiusX: rBL.x,
      radiusY: rBL.y
    });
  }
  return path.close();
}
function formatCounter(val, style) {
  var str = String(parseFloat(val));
  switch (style) {
    case "decimal-leading-zero":
      if (str.length < 2) {
        str = "0" + str;
      }
      return str;
    case "lower-roman":
      return arabicToRoman(val).toLowerCase();
    case "upper-roman":
      return arabicToRoman(val).toUpperCase();
    case "lower-latin":
    case "lower-alpha":
      return alphaNumeral(val - 1);
    case "upper-latin":
    case "upper-alpha":
      return alphaNumeral(val - 1).toUpperCase();
    default:
      return str;
  }
}
function evalPseudoElementContent(element, content) {
  function displayCounter(name, style, separator) {
    if (!separator) {
      return formatCounter(getCounter(name) || 0, style);
    }
    separator = separator.replace(/^\s*(["'])(.*)\1\s*$/, "$2");
    return getAllCounters(name).map(function(val) {
      return formatCounter(val, style);
    }).join(separator);
  }
  var a2 = splitProperty(content, /^\s+/);
  var result = [], m2;
  a2.forEach(function(el) {
    var tmp;
    if (m2 = /^\s*(["'])(.*)\1\s*$/.exec(el)) {
      result.push(m2[2].replace(/\\([0-9a-f]{4})/gi, function(s2, p2) {
        return String.fromCharCode(parseInt(p2, 16));
      }));
    } else if (m2 = /^\s*counter\((.*?)\)\s*$/.exec(el)) {
      tmp = splitProperty(m2[1]);
      result.push(displayCounter(tmp[0], tmp[1]));
    } else if (m2 = /^\s*counters\((.*?)\)\s*$/.exec(el)) {
      tmp = splitProperty(m2[1]);
      result.push(displayCounter(tmp[0], tmp[2], tmp[1]));
    } else if (m2 = /^\s*attr\((.*?)\)\s*$/.exec(el)) {
      result.push(element.getAttribute(m2[1]) || "");
    } else {
      result.push(el);
    }
  });
  return result.join("");
}
function getCssText(style) {
  if (style.cssText) {
    return style.cssText;
  }
  var result = [];
  for (var i2 = 0; i2 < style.length; ++i2) {
    result.push(style[i2] + ": " + getPropertyValue(style, style[i2]));
  }
  return result.join(";\n");
}
function _renderWithPseudoElements(element, group) {
  if (element.tagName == KENDO_PSEUDO_ELEMENT) {
    _renderElement(element, group);
    return;
  }
  let fake = [];
  function pseudo(kind, place) {
    let style = getComputedStyle2(element, kind), content = style.content;
    updateCounters(style);
    if (content && content != "normal" && content != "none" && style.width != "0px") {
      let psel = element.ownerDocument.createElement(KENDO_PSEUDO_ELEMENT);
      setStyle(psel, getCssText(style));
      psel.textContent = evalPseudoElementContent(element, content);
      element.insertBefore(psel, place);
      fake.push(psel);
    }
  }
  pseudo(":before", element.firstChild);
  pseudo(":after", null);
  if (fake.length > 0) {
    let saveClass = element.className;
    element.className += " kendo-pdf-hide-pseudo-elements";
    _renderElement(element, group);
    element.className = saveClass;
    fake.forEach(function(el) {
      element.removeChild(el);
    });
  } else {
    _renderElement(element, group);
  }
}
function _renderElement(element, group) {
  var style = getComputedStyle2(element);
  var top = getBorder(element, style, "top");
  var right = getBorder(element, style, "right");
  var bottom = getBorder(element, style, "bottom");
  var left = getBorder(element, style, "left");
  var rTL0 = getBorderRadius(style, "top-left");
  var rTR0 = getBorderRadius(style, "top-right");
  var rBL0 = getBorderRadius(style, "bottom-left");
  var rBR0 = getBorderRadius(style, "bottom-right");
  var dir = getPropertyValue(style, "direction");
  var backgroundColorValue = resolveElementColor(element, "background-color");
  var backgroundColor = parseColor3(backgroundColorValue);
  var backgroundImage = parseBackgroundImage(getPropertyValue(style, "background-image"));
  var backgroundRepeat = splitProperty(getPropertyValue(style, "background-repeat"));
  var backgroundPosition = splitProperty(getPropertyValue(style, "background-position"));
  var backgroundOrigin = splitProperty(getPropertyValue(style, "background-origin"));
  var backgroundSize = splitProperty(getPropertyValue(style, "background-size"));
  var textOverflow, saveTextOverflow;
  if (microsoft) {
    textOverflow = style.textOverflow;
    if (textOverflow == "ellipsis") {
      saveTextOverflow = element.style.textOverflow;
      element.style.textOverflow = "clip";
    }
  }
  if (browser5.msie && browser5.version < 10) {
    backgroundPosition = splitProperty(element.currentStyle.backgroundPosition);
  }
  var innerbox = innerBox(element.getBoundingClientRect(), "border-*-width", element);
  (function() {
    var clip = getPropertyValue(style, "clip");
    var m2 = /^\s*rect\((.*)\)\s*$/.exec(clip);
    if (m2) {
      var a2 = m2[1].split(/[ ,]+/g);
      var top2 = a2[0] == "auto" ? innerbox.top : parseFloat(a2[0]) + innerbox.top;
      var right2 = a2[1] == "auto" ? innerbox.right : parseFloat(a2[1]) + innerbox.left;
      var bottom2 = a2[2] == "auto" ? innerbox.bottom : parseFloat(a2[2]) + innerbox.top;
      var left2 = a2[3] == "auto" ? innerbox.left : parseFloat(a2[3]) + innerbox.left;
      var tmp = new group_default();
      var clipPath = new Path().moveTo(left2, top2).lineTo(right2, top2).lineTo(right2, bottom2).lineTo(left2, bottom2).close();
      setClipping2(tmp, clipPath);
      group.append(tmp);
      group = tmp;
      updateClipbox(clipPath);
    }
  })();
  var boxes, i2, cells;
  var display = getPropertyValue(style, "display");
  if (display == "table-row") {
    boxes = [];
    for (i2 = 0, cells = element.children; i2 < cells.length; ++i2) {
      boxes.push(cells[i2].getBoundingClientRect());
    }
  } else {
    boxes = element.getClientRects();
    if (boxes.length == 1) {
      boxes = [element.getBoundingClientRect()];
    }
  }
  boxes = adjustBoxes(boxes);
  for (i2 = 0; i2 < boxes.length; ++i2) {
    drawOneBox(boxes[i2], i2 === 0, i2 == boxes.length - 1);
  }
  if (element.tagName == "A" && element.href && !/^#?$/.test(element.getAttribute("href"))) {
    if (!nodeInfo._avoidLinks || !matches(element, nodeInfo._avoidLinks)) {
      const r2 = document.createRange();
      r2.selectNodeContents(element);
      slice2(r2.getClientRects()).forEach(function(box) {
        const g2 = new group_default();
        g2._pdfLink = {
          url: element.href,
          top: box.top,
          right: box.right,
          bottom: box.bottom,
          left: box.left
        };
        group.append(g2);
      });
    }
  }
  if (boxes.length > 0 && display == "list-item" && !element.getAttribute("kendo-no-bullet")) {
    drawBullet(boxes[0]);
  }
  (function() {
    function clipit() {
      var clipPath = elementRoundBox(element, innerbox, "padding");
      var tmp = new group_default();
      setClipping2(tmp, clipPath);
      group.append(tmp);
      group = tmp;
      updateClipbox(clipPath);
    }
    if (isFormField(element)) {
      clipit();
    } else if (/^(hidden|auto|scroll)/.test(getPropertyValue(style, "overflow"))) {
      clipit();
    } else if (/^(hidden|auto|scroll)/.test(getPropertyValue(style, "overflow-x"))) {
      clipit();
    } else if (/^(hidden|auto|scroll)/.test(getPropertyValue(style, "overflow-y"))) {
      clipit();
    }
  })();
  if (!maybeRenderWidget(element, group) && !maybeRenderBullet(element, group)) {
    renderContents(element, group);
  }
  if (microsoft && textOverflow == "ellipsis") {
    element.style.textOverflow = saveTextOverflow;
  }
  return group;
  function adjustBoxes(boxes2) {
    if (/^td$/i.test(element.tagName)) {
      var table = nodeInfo.table;
      if (table && getPropertyValue(table.style, "border-collapse") == "collapse") {
        var tableBorderLeft = getBorder(table.element, table.style, "left").width;
        var tableBorderTop = getBorder(table.element, table.style, "top").width;
        if (tableBorderLeft === 0 && tableBorderTop === 0) {
          return boxes2;
        }
        var tableBox = table.element.getBoundingClientRect();
        var firstCell = table.element.rows[0].cells[0];
        var firstCellBox = firstCell.getBoundingClientRect();
        if (firstCellBox.top == tableBox.top || firstCellBox.left == tableBox.left) {
          return slice2(boxes2).map(function(box) {
            return {
              left: box.left + tableBorderLeft,
              top: box.top + tableBorderTop,
              right: box.right + tableBorderLeft,
              bottom: box.bottom + tableBorderTop,
              height: box.height,
              width: box.width
            };
          });
        }
      }
    }
    return boxes2;
  }
  function drawEdge(color, len, Wtop, Wleft, Wright, rl, rr, transform2) {
    if (Wtop <= 0) {
      return;
    }
    var path, edge = new group_default();
    setTransform(edge, transform2);
    group.append(edge);
    sanitizeRadius(rl);
    sanitizeRadius(rr);
    path = new Path({
      fill: { color },
      stroke: null
    });
    edge.append(path);
    path.moveTo(rl.x ? Math.max(rl.x, Wleft) : 0, 0).lineTo(len - (rr.x ? Math.max(rr.x, Wright) : 0), 0).lineTo(len - Math.max(rr.x, Wright), Wtop).lineTo(Math.max(rl.x, Wleft), Wtop).close();
    if (rl.x) {
      drawRoundCorner(Wleft, rl, [-1, 0, 0, 1, rl.x, 0]);
    }
    if (rr.x) {
      drawRoundCorner(Wright, rr, [1, 0, 0, 1, len - rr.x, 0]);
    }
    function drawRoundCorner(Wright2, r2, transform3) {
      var angle = Math.PI / 2 * Wright2 / (Wright2 + Wtop);
      var ri = {
        x: r2.x - Wright2,
        y: r2.y - Wtop
      };
      var path2 = new Path({
        fill: { color },
        stroke: null
      }).moveTo(0, 0);
      setTransform(path2, transform3);
      addArcToPath(path2, 0, r2.y, {
        startAngle: -90,
        endAngle: -radiansToDegrees(angle),
        radiusX: r2.x,
        radiusY: r2.y
      });
      if (ri.x > 0 && ri.y > 0) {
        path2.lineTo(ri.x * Math.cos(angle), r2.y - ri.y * Math.sin(angle));
        addArcToPath(path2, 0, r2.y, {
          startAngle: -radiansToDegrees(angle),
          endAngle: -90,
          radiusX: ri.x,
          radiusY: ri.y,
          anticlockwise: true
        });
      } else if (ri.x > 0) {
        path2.lineTo(ri.x, Wtop).lineTo(0, Wtop);
      } else {
        path2.lineTo(ri.x, Wtop).lineTo(ri.x, 0);
      }
      edge.append(path2.close());
    }
  }
  function drawBackground(box) {
    var background = new group_default();
    setClipping2(background, roundBox(box, rTL0, rTR0, rBR0, rBL0));
    group.append(background);
    if (backgroundColor) {
      var path = new Path({
        fill: { color: backgroundColor.toCssRgba() },
        stroke: null
      });
      path.moveTo(box.left, box.top).lineTo(box.right, box.top).lineTo(box.right, box.bottom).lineTo(box.left, box.bottom).close();
      background.append(path);
    }
    for (var i3 = backgroundImage.length; --i3 >= 0; ) {
      drawOneBackground(
        background,
        box,
        backgroundImage[i3],
        backgroundRepeat[i3 % backgroundRepeat.length],
        backgroundPosition[i3 % backgroundPosition.length],
        backgroundOrigin[i3 % backgroundOrigin.length],
        backgroundSize[i3 % backgroundSize.length]
      );
    }
  }
  function drawOneBackground(group2, box, background, backgroundRepeat2, backgroundPosition2, backgroundOrigin2, backgroundSize2) {
    if (!background || background == "none") {
      return;
    }
    if (background.type == "url") {
      var img = IMAGE_CACHE2[background.url];
      if (img && img.width > 0 && img.height > 0) {
        drawBackgroundImage(group2, box, img.width, img.height, function(group3, rect) {
          group3.append(new image_default(background.url, rect));
        });
      }
    } else if (background.type == "linear") {
      drawBackgroundImage(group2, box, box.width, box.height, gradientRenderer(background));
    } else {
      return;
    }
    function drawBackgroundImage(group3, box2, img_width, img_height, renderBG) {
      var aspect_ratio = img_width / img_height, f2;
      var orgBox = box2;
      if (backgroundOrigin2 == "content-box") {
        orgBox = innerBox(orgBox, "border-*-width", element);
        orgBox = innerBox(orgBox, "padding-*", element);
      } else if (backgroundOrigin2 == "padding-box") {
        orgBox = innerBox(orgBox, "border-*-width", element);
      }
      if (!/^\s*auto(\s+auto)?\s*$/.test(backgroundSize2)) {
        if (backgroundSize2 == "contain") {
          f2 = Math.min(
            orgBox.width / img_width,
            orgBox.height / img_height
          );
          img_width *= f2;
          img_height *= f2;
        } else if (backgroundSize2 == "cover") {
          f2 = Math.max(
            orgBox.width / img_width,
            orgBox.height / img_height
          );
          img_width *= f2;
          img_height *= f2;
        } else {
          var size = backgroundSize2.split(/\s+/g);
          if (/%$/.test(size[0])) {
            img_width = orgBox.width * parseFloat(size[0]) / 100;
          } else {
            img_width = parseFloat(size[0]);
          }
          if (size.length == 1 || size[1] == "auto") {
            img_height = img_width / aspect_ratio;
          } else if (/%$/.test(size[1])) {
            img_height = orgBox.height * parseFloat(size[1]) / 100;
          } else {
            img_height = parseFloat(size[1]);
          }
        }
      }
      var pos = String(backgroundPosition2);
      switch (pos) {
        case "bottom":
          pos = "50% 100%";
          break;
        case "top":
          pos = "50% 0";
          break;
        case "left":
          pos = "0 50%";
          break;
        case "right":
          pos = "100% 50%";
          break;
        case "center":
          pos = "50% 50%";
          break;
      }
      pos = pos.split(/\s+/);
      if (pos.length == 1) {
        pos[1] = "50%";
      }
      if (/%$/.test(pos[0])) {
        pos[0] = parseFloat(pos[0]) / 100 * (orgBox.width - img_width);
      } else {
        pos[0] = parseFloat(pos[0]);
      }
      if (/%$/.test(pos[1])) {
        pos[1] = parseFloat(pos[1]) / 100 * (orgBox.height - img_height);
      } else {
        pos[1] = parseFloat(pos[1]);
      }
      var rect = new rect_default([orgBox.left + pos[0], orgBox.top + pos[1]], [img_width, img_height]);
      function rewX() {
        while (rect.origin.x > box2.left) {
          rect.origin.x -= img_width;
        }
      }
      function rewY() {
        while (rect.origin.y > box2.top) {
          rect.origin.y -= img_height;
        }
      }
      function repeatX() {
        while (rect.origin.x < box2.right) {
          renderBG(group3, rect.clone());
          rect.origin.x += img_width;
        }
      }
      if (backgroundRepeat2 == "no-repeat") {
        renderBG(group3, rect);
      } else if (backgroundRepeat2 == "repeat-x") {
        rewX();
        repeatX();
      } else if (backgroundRepeat2 == "repeat-y") {
        rewY();
        while (rect.origin.y < box2.bottom) {
          renderBG(group3, rect.clone());
          rect.origin.y += img_height;
        }
      } else if (backgroundRepeat2 == "repeat") {
        rewX();
        rewY();
        var origin = rect.origin.clone();
        while (rect.origin.y < box2.bottom) {
          rect.origin.x = origin.x;
          repeatX();
          rect.origin.y += img_height;
        }
      }
    }
  }
  function drawBullet() {
    var listStyleType = getPropertyValue(style, "list-style-type");
    if (listStyleType == "none") {
      return;
    }
    var listStylePosition = getPropertyValue(style, "list-style-position");
    function _drawBullet(f2) {
      saveStyle(element, function() {
        element.style.position = "relative";
        var bullet = element.ownerDocument.createElement(KENDO_PSEUDO_ELEMENT);
        bullet.style.position = "absolute";
        bullet.style.boxSizing = "border-box";
        if (listStylePosition == "outside") {
          bullet.style.width = "6em";
          bullet.style.left = "-6.8em";
          bullet.style.textAlign = "right";
        } else {
          bullet.style.left = "0px";
        }
        f2(bullet);
        element.insertBefore(bullet, element.firstChild);
        renderElement(bullet, group);
        element.removeChild(bullet);
      });
    }
    function elementIndex(f2) {
      var a2 = element.parentNode.children;
      var k2 = element.getAttribute("kendo-split-index");
      if (k2 != null) {
        return f2(k2 | 0, a2.length);
      }
      for (var i3 = 0; i3 < a2.length; ++i3) {
        if (a2[i3] === element) {
          return f2(i3, a2.length);
        }
      }
    }
    switch (listStyleType) {
      case "circle":
      case "disc":
      case "square":
        _drawBullet(function(bullet) {
          bullet.innerHTML = "&nbsp;";
          bullet.setAttribute(KENDO_BULLET_TYPE, listStyleType);
        });
        break;
      case "decimal":
      case "decimal-leading-zero":
        _drawBullet(function(bullet) {
          elementIndex(function(idx) {
            ++idx;
            if (listStyleType == "decimal-leading-zero" && idx < 10) {
              idx = "0" + idx;
            }
            bullet.innerHTML = idx + ".";
          });
        });
        break;
      case "lower-roman":
      case "upper-roman":
        _drawBullet(function(bullet) {
          elementIndex(function(idx) {
            idx = arabicToRoman(idx + 1);
            if (listStyleType == "upper-roman") {
              idx = idx.toUpperCase();
            }
            bullet.innerHTML = idx + ".";
          });
        });
        break;
      case "lower-latin":
      case "lower-alpha":
      case "upper-latin":
      case "upper-alpha":
        _drawBullet(function(bullet) {
          elementIndex(function(idx) {
            idx = alphaNumeral(idx);
            if (/^upper/i.test(listStyleType)) {
              idx = idx.toUpperCase();
            }
            bullet.innerHTML = idx + ".";
          });
        });
        break;
    }
  }
  function drawOneBox(box, isFirst, isLast) {
    if (box.width === 0 || box.height === 0) {
      return;
    }
    drawBackground(box);
    var shouldDrawLeft = left.width > 0 && (isFirst && dir == "ltr" || isLast && dir == "rtl");
    var shouldDrawRight = right.width > 0 && (isLast && dir == "ltr" || isFirst && dir == "rtl");
    if (top.width === 0 && left.width === 0 && right.width === 0 && bottom.width === 0) {
      return;
    }
    if (top.color == right.color && top.color == bottom.color && top.color == left.color) {
      if (top.width == right.width && top.width == bottom.width && top.width == left.width) {
        if (shouldDrawLeft && shouldDrawRight) {
          box = innerBox(box, top.width / 2);
          var path = elementRoundBox(element, box, top.width / 2);
          path.options.stroke = {
            color: top.color,
            width: top.width
          };
          group.append(path);
          return;
        }
      }
    }
    if (rTL0.x === 0 && rTR0.x === 0 && rBR0.x === 0 && rBL0.x === 0) {
      if (top.width < 2 && left.width < 2 && right.width < 2 && bottom.width < 2) {
        if (top.width > 0) {
          group.append(
            new Path({
              stroke: { width: top.width, color: top.color }
            }).moveTo(box.left, box.top + top.width / 2).lineTo(box.right, box.top + top.width / 2)
          );
        }
        if (bottom.width > 0) {
          group.append(
            new Path({
              stroke: { width: bottom.width, color: bottom.color }
            }).moveTo(box.left, box.bottom - bottom.width / 2).lineTo(box.right, box.bottom - bottom.width / 2)
          );
        }
        if (shouldDrawLeft) {
          group.append(
            new Path({
              stroke: { width: left.width, color: left.color }
            }).moveTo(box.left + left.width / 2, box.top).lineTo(box.left + left.width / 2, box.bottom)
          );
        }
        if (shouldDrawRight) {
          group.append(
            new Path({
              stroke: { width: right.width, color: right.color }
            }).moveTo(box.right - right.width / 2, box.top).lineTo(box.right - right.width / 2, box.bottom)
          );
        }
        return;
      }
    }
    var tmp = adjustBorderRadiusForBox(box, rTL0, rTR0, rBR0, rBL0);
    var rTL = tmp.tl;
    var rTR = tmp.tr;
    var rBR = tmp.br;
    var rBL = tmp.bl;
    drawEdge(
      top.color,
      box.width,
      top.width,
      left.width,
      right.width,
      rTL,
      rTR,
      [1, 0, 0, 1, box.left, box.top]
    );
    drawEdge(
      bottom.color,
      box.width,
      bottom.width,
      right.width,
      left.width,
      rBR,
      rBL,
      [-1, 0, 0, -1, box.right, box.bottom]
    );
    function inv(p2) {
      return { x: p2.y, y: p2.x };
    }
    drawEdge(
      left.color,
      box.height,
      left.width,
      bottom.width,
      top.width,
      inv(rBL),
      inv(rTL),
      [0, -1, 1, 0, box.left, box.bottom]
    );
    drawEdge(
      right.color,
      box.height,
      right.width,
      top.width,
      bottom.width,
      inv(rTR),
      inv(rBR),
      [0, 1, -1, 0, box.right, box.top]
    );
  }
}
function gradientRenderer(gradient) {
  return function(group, rect) {
    var width = rect.width(), height = rect.height();
    switch (gradient.type) {
      case "linear":
        var angle = gradient.angle != null ? gradient.angle : Math.PI;
        switch (gradient.to) {
          case "top":
            angle = 0;
            break;
          case "left":
            angle = -Math.PI / 2;
            break;
          case "bottom":
            angle = Math.PI;
            break;
          case "right":
            angle = Math.PI / 2;
            break;
          case "top left":
          case "left top":
            angle = -Math.atan2(height, width);
            break;
          case "top right":
          case "right top":
            angle = Math.atan2(height, width);
            break;
          case "bottom left":
          case "left bottom":
            angle = Math.PI + Math.atan2(height, width);
            break;
          case "bottom right":
          case "right bottom":
            angle = Math.PI - Math.atan2(height, width);
            break;
        }
        if (gradient.reverse) {
          angle -= Math.PI;
        }
        angle %= 2 * Math.PI;
        if (angle < 0) {
          angle += 2 * Math.PI;
        }
        var pxlen = Math.abs(width * Math.sin(angle)) + Math.abs(height * Math.cos(angle));
        var scaledAngle = Math.atan(width * Math.tan(angle) / height);
        var sin = Math.sin(scaledAngle), cos = Math.cos(scaledAngle);
        var len = Math.abs(sin) + Math.abs(cos);
        var x = len / 2 * sin;
        var y2 = len / 2 * cos;
        if (angle > Math.PI / 2 && angle <= 3 * Math.PI / 2) {
          x = -x;
          y2 = -y2;
        }
        var implicit = [], right = 0;
        var stops = gradient.stops.map(function(s2, i2) {
          var offset = s2.percent;
          if (offset) {
            offset = parseFloat(offset) / 100;
          } else if (s2.length) {
            offset = parseFloat(s2.length) / pxlen;
          } else if (i2 === 0) {
            offset = 0;
          } else if (i2 == gradient.stops.length - 1) {
            offset = 1;
          }
          var stop = {
            color: s2.color.toCssRgba(),
            offset
          };
          if (offset != null) {
            right = offset;
            implicit.forEach(function(s3, i3) {
              var stop2 = s3.stop;
              stop2.offset = s3.left + (right - s3.left) * (i3 + 1) / (implicit.length + 1);
            });
            implicit = [];
          } else {
            implicit.push({ left: right, stop });
          }
          return stop;
        });
        var start = [0.5 - x, 0.5 + y2];
        var end = [0.5 + x, 0.5 - y2];
        group.append(
          Path.fromRect(rect).stroke(null).fill(new linear_gradient_default({
            start,
            end,
            stops,
            userSpace: false
          }))
        );
        break;
      case "radial":
        if (window.console && window.console.log) {
          window.console.log("Radial gradients are not yet supported in HTML renderer");
        }
        break;
    }
  };
}
function maybeRenderWidget(element, group) {
  let visual = null;
  if (window.kendo && window.kendo.jQuery && element.getAttribute(window.kendo.attr("role"))) {
    let widget = window.kendo.widgetInstance(window.kendo.jQuery(element));
    if (widget && (widget.exportDOMVisual || widget.exportVisual)) {
      if (widget.exportDOMVisual) {
        visual = widget.exportDOMVisual();
      } else {
        visual = widget.exportVisual();
      }
    }
  }
  if (visual === null && element._kendoExportVisual) {
    const rect = element.getBoundingClientRect();
    const size = {
      width: rect.width,
      height: rect.height
    };
    visual = element._kendoExportVisual(size);
  }
  if (!visual) {
    return false;
  }
  const wrap2 = new group_default();
  wrap2.children.push(visual);
  const bbox = element.getBoundingClientRect();
  wrap2.transform(transform().translate(bbox.left, bbox.top));
  group.append(wrap2);
  return true;
}
function maybeRenderBullet(element, group) {
  const bulletType = element.getAttribute(KENDO_BULLET_TYPE);
  if (!bulletType) {
    return false;
  }
  var box = element.getBoundingClientRect();
  const color = resolveElementColor(element, "color");
  if (bulletType === "square") {
    const rectSize = box.height / 5;
    group.append(new rect_default2(new rect_default([
      box.right - rectSize,
      box.top + box.height / 2.1
    ], [rectSize, rectSize])).fill(color).stroke(color));
  } else {
    const radius = box.height / 7;
    const center = [
      box.right - radius,
      box.top + (box.height + radius) / 2
    ];
    const circle = new circle_default2(new circle_default(center, radius));
    if (bulletType === "circle") {
      circle.stroke(color, 0.5);
    } else {
      circle.fill(color).stroke(null);
    }
    group.append(circle);
  }
  return true;
}
function renderImage(element, url, group) {
  var box = getContentBox(element);
  var rect = new rect_default([box.left, box.top], [box.width, box.height]);
  var image = new image_default(url, rect);
  setClipping2(image, elementRoundBox(element, box, "content"));
  group.append(image);
}
function zIndexSort(a2, b) {
  var sa = getComputedStyle2(a2);
  var sb = getComputedStyle2(b);
  var za = parseFloat(getPropertyValue(sa, "z-index"));
  var zb = parseFloat(getPropertyValue(sb, "z-index"));
  var pa = getPropertyValue(sa, "position");
  var pb = getPropertyValue(sb, "position");
  if (isNaN(za) && isNaN(zb)) {
    if (/static|absolute/.test(pa) && /static|absolute/.test(pb)) {
      return 0;
    }
    if (pa == "static") {
      return -1;
    }
    if (pb == "static") {
      return 1;
    }
    return 0;
  }
  if (isNaN(za)) {
    return zb === 0 ? 0 : zb > 0 ? -1 : 1;
  }
  if (isNaN(zb)) {
    return za === 0 ? 0 : za > 0 ? 1 : -1;
  }
  return parseFloat(za) - parseFloat(zb);
}
function isFormField(element) {
  return /^(?:textarea|select|input)$/i.test(element.tagName);
}
function getSelectedOption(element) {
  if (element.selectedOptions && element.selectedOptions.length > 0) {
    return element.selectedOptions[0];
  }
  return element.options[element.selectedIndex];
}
function renderCheckbox(element, group) {
  var style = getComputedStyle2(element);
  var color = resolveElementColor(element, "color");
  var box = element.getBoundingClientRect();
  if (element.type == "checkbox") {
    group.append(
      Path.fromRect(
        new rect_default(
          [box.left + 1, box.top + 1],
          [box.width - 2, box.height - 2]
        )
      ).stroke(color, 1)
    );
    if (element.checked) {
      group.append(
        new Path().stroke(color, 1.2).moveTo(
          box.left + 0.22 * box.width,
          box.top + 0.55 * box.height
        ).lineTo(
          box.left + 0.45 * box.width,
          box.top + 0.75 * box.height
        ).lineTo(
          box.left + 0.78 * box.width,
          box.top + 0.22 * box.width
        )
      );
    }
  } else {
    group.append(
      new circle_default2(
        new circle_default([
          (box.left + box.right) / 2,
          (box.top + box.bottom) / 2
        ], Math.min(box.width - 2, box.height - 2) / 2)
      ).stroke(color, 1)
    );
    if (element.checked) {
      group.append(
        new circle_default2(
          new circle_default([
            (box.left + box.right) / 2,
            (box.top + box.bottom) / 2
          ], Math.min(box.width - 8, box.height - 8) / 2)
        ).fill(color).stroke(null)
      );
    }
  }
}
function renderFormField(element, group) {
  var tag = element.tagName.toLowerCase();
  if (tag == "input" && (element.type == "checkbox" || element.type == "radio")) {
    return renderCheckbox(element, group);
  }
  var p2 = element.parentNode;
  var doc = element.ownerDocument;
  var el = doc.createElement(KENDO_PSEUDO_ELEMENT);
  var option;
  setStyle(el, getCssText(getComputedStyle2(element)));
  if (tag == "input") {
    el.style.whiteSpace = "pre";
  }
  if (tag == "select" || tag == "textarea") {
    el.style.overflow = "auto";
  }
  if (tag == "select") {
    if (element.multiple) {
      for (var i2 = 0; i2 < element.options.length; ++i2) {
        option = doc.createElement(KENDO_PSEUDO_ELEMENT);
        setStyle(option, getCssText(getComputedStyle2(element.options[i2])));
        option.style.display = "block";
        option.textContent = element.options[i2].textContent;
        el.appendChild(option);
      }
    } else {
      option = getSelectedOption(element);
      if (option) {
        el.textContent = option.textContent;
      }
    }
  } else {
    el.textContent = element.value;
  }
  p2.insertBefore(el, element);
  el.scrollLeft = element.scrollLeft;
  el.scrollTop = element.scrollTop;
  element.style.display = "none";
  renderContents(el, group);
  element.style.display = "";
  p2.removeChild(el);
}
function serializeSVG(element) {
  const serializer = new window.XMLSerializer();
  let xml = serializer.serializeToString(element);
  if (browser5.mozilla && !(element.getAttribute("width") && element.getAttribute("height"))) {
    const doc = new window.DOMParser().parseFromString(xml, "image/svg+xml");
    const svg = doc.documentElement;
    const box = getContentBox(element);
    svg.setAttribute("width", box.width);
    svg.setAttribute("height", box.height);
    xml = serializer.serializeToString(svg);
  }
  return xml;
}
function renderContents(element, group) {
  if (nodeInfo._stackingContext.element === element) {
    nodeInfo._stackingContext.group = group;
  }
  switch (element.tagName.toLowerCase()) {
    case "img":
      renderImage(element, element.src, group);
      break;
    case "svg": {
      let xml = serializeSVG(element);
      let dataURL = `data:image/svg+xml;base64,${encodeBase64(xml)}`;
      renderImage(element, dataURL, group);
      break;
    }
    case "canvas":
      try {
        renderImage(element, element.toDataURL("image/png"), group);
      } catch (ex) {
      }
      break;
    case "textarea":
    case "input":
    case "select":
      renderFormField(element, group);
      break;
    default:
      var children = [], floats = [], positioned = [];
      for (var i2 = element.firstChild; i2; i2 = i2.nextSibling) {
        switch (i2.nodeType) {
          case 3:
            if (/\S/.test(i2.data)) {
              renderText(element, i2, group);
            }
            break;
          case 1:
            var style = getComputedStyle2(i2);
            var floating = getPropertyValue(style, "float");
            var position = getPropertyValue(style, "position");
            if (position != "static") {
              positioned.push(i2);
            } else if (floating != "none") {
              floats.push(i2);
            } else {
              children.push(i2);
            }
            break;
        }
      }
      mergeSort(children, zIndexSort).forEach(function(el) {
        renderElement(el, group);
      });
      mergeSort(floats, zIndexSort).forEach(function(el) {
        renderElement(el, group);
      });
      mergeSort(positioned, zIndexSort).forEach(function(el) {
        renderElement(el, group);
      });
  }
}
function renderText(element, node, group) {
  if (emptyClipbox()) {
    return;
  }
  var style = getComputedStyle2(element);
  if (parseFloat(getPropertyValue(style, "text-indent")) < -500) {
    return;
  }
  var text = node.data;
  var start = 0;
  var end = text.search(/\S\s*$/) + 1;
  if (!end) {
    return;
  }
  var fontSize = getPropertyValue(style, "font-size");
  var lineHeight = getPropertyValue(style, "line-height");
  var font = [
    getPropertyValue(style, "font-style"),
    getPropertyValue(style, "font-variant"),
    getPropertyValue(style, "font-weight"),
    fontSize,
    // no need for line height here; it breaks layout in FF
    getPropertyValue(style, "font-family")
  ].join(" ");
  fontSize = parseFloat(fontSize);
  lineHeight = parseFloat(lineHeight);
  if (fontSize === 0 || isNaN(fontSize)) {
    return;
  }
  var color = resolveElementColor(element, "color");
  var range = element.ownerDocument.createRange();
  var align2 = getPropertyValue(style, "text-align");
  var isJustified = align2 == "justify";
  var columnCount = getPropertyValue(style, "column-count", 1);
  var whiteSpace = getPropertyValue(style, "white-space");
  var textTransform = getPropertyValue(style, "text-transform");
  var estimateLineLength = element.getBoundingClientRect().width / fontSize * 5;
  if (estimateLineLength === 0) {
    estimateLineLength = 500;
  }
  var prevLineBottom = null;
  var underline = nodeInfo["underline"];
  var lineThrough = nodeInfo["line-through"];
  var overline = nodeInfo["overline"];
  var underlineOffset = nodeInfo["underline-offset"];
  if (underline) {
    forEachRect(decorateUnder);
  }
  while (!doChunk()) {
  }
  if (lineThrough || overline) {
    forEachRect(decorateOver);
  }
  return;
  function forEachRect(callback) {
    range.selectNode(node);
    let clientRects = slice2(range.getClientRects());
    forEachRect = (cb) => clientRects.forEach(cb);
    forEachRect(callback);
  }
  function actuallyGetRangeBoundingRect(range2) {
    if (microsoft || browser5.chrome || browser5.safari) {
      var rectangles = range2.getClientRects(), box = {
        top: Infinity,
        right: -Infinity,
        bottom: -Infinity,
        left: Infinity
      }, done = false;
      for (var i2 = 0; i2 < rectangles.length; ++i2) {
        var b = rectangles[i2];
        if (b.width <= 1 || b.bottom === prevLineBottom) {
          continue;
        }
        box.left = Math.min(b.left, box.left);
        box.top = Math.min(b.top, box.top);
        box.right = Math.max(b.right, box.right);
        box.bottom = Math.max(b.bottom, box.bottom);
        done = true;
      }
      if (!done) {
        return range2.getBoundingClientRect();
      }
      box.width = box.right - box.left;
      box.height = box.bottom - box.top;
      return box;
    }
    return range2.getBoundingClientRect();
  }
  function doChunk() {
    var origStart = start;
    var box, pos = text.substr(start).search(/\S/);
    start += pos;
    if (pos < 0 || start >= end) {
      return true;
    }
    range.setStart(node, start);
    range.setEnd(node, start + 1);
    box = actuallyGetRangeBoundingRect(range);
    var found = false;
    if (isJustified || columnCount > 1) {
      pos = text.substr(start).search(/\s/);
      if (pos >= 0) {
        range.setEnd(node, start + pos);
        var r2 = actuallyGetRangeBoundingRect(range);
        if (r2.bottom == box.bottom) {
          box = r2;
          found = true;
          start += pos;
        }
      }
    }
    if (!found) {
      pos = (function findEOL(min, eol, max) {
        range.setEnd(node, eol);
        var r3 = actuallyGetRangeBoundingRect(range);
        if (r3.bottom != box.bottom && min < eol) {
          return findEOL(min, min + eol >> 1, eol);
        } else if (r3.right != box.right) {
          box = r3;
          if (eol < max) {
            return findEOL(eol, eol + max >> 1, max);
          } else {
            return eol;
          }
        } else {
          return eol;
        }
      })(start, Math.min(end, start + estimateLineLength), end);
      if (pos == start) {
        return true;
      }
      start = pos;
      pos = range.toString().search(/\s+$/);
      if (pos === 0) {
        return false;
      }
      if (pos > 0) {
        range.setEnd(node, range.startOffset + pos);
        box = actuallyGetRangeBoundingRect(range);
      }
    }
    if (microsoft) {
      box = range.getClientRects()[0];
    }
    var str = range.toString();
    if (!/^(?:pre|pre-wrap)$/i.test(whiteSpace)) {
      str = str.replace(/\s+/g, " ");
    } else if (/\t/.test(str)) {
      var cc = 0;
      for (pos = origStart; pos < range.startOffset; ++pos) {
        var code = text.charCodeAt(pos);
        if (code == 9) {
          cc += 8 - cc % 8;
        } else if (code == 10 || code == 13) {
          cc = 0;
        } else {
          cc++;
        }
      }
      while ((pos = str.search("	")) >= 0) {
        var indent = "        ".substr(0, 8 - (cc + pos) % 8);
        str = str.substr(0, pos) + indent + str.substr(pos + 1);
      }
    }
    if (!found) {
      prevLineBottom = box.bottom;
    }
    drawText2(str, box);
  }
  function drawText2(str, box) {
    if (microsoft && !isNaN(lineHeight)) {
      var height = getFontHeight(font);
      var top = (box.top + box.bottom - height) / 2;
      box = {
        top,
        right: box.right,
        bottom: top + height,
        left: box.left,
        height,
        width: box.right - box.left
      };
    }
    switch (textTransform) {
      case "uppercase":
        str = str.toUpperCase();
        break;
      case "lowercase":
        str = str.toLowerCase();
        break;
      case "capitalize":
        str = str.replace(/(?:^|\s)\S/g, (l2) => l2.toUpperCase());
        break;
    }
    var text2 = new TextRect(
      str,
      new rect_default(
        [box.left, box.top],
        [box.width, box.height]
      ),
      {
        font,
        fill: { color }
      }
    );
    group.append(text2);
  }
  function drawTextLine(lineWidth, textBox, color2, ypos) {
    if (color2) {
      var path = new Path({ stroke: {
        width: lineWidth,
        color: color2
      } });
      ypos -= lineWidth;
      path.moveTo(textBox.left, ypos).lineTo(textBox.right, ypos);
      group.append(path);
    }
  }
  function decorateOver(box) {
    let width = fontSize / 12;
    drawTextLine(width, box, lineThrough, box.bottom - box.height / 2.7);
    drawTextLine(width, box, overline, box.top);
  }
  function decorateUnder(box) {
    let width = fontSize / 12;
    let underlinePos = box.bottom;
    if (underlineOffset != null) {
      underlinePos += underlineOffset;
    } else {
      underlinePos += width;
    }
    drawTextLine(width, box, underline, underlinePos);
  }
}
function groupInStackingContext(element, group, zIndex) {
  var main;
  if (zIndex != "auto") {
    main = nodeInfo._stackingContext.group;
    zIndex = parseFloat(zIndex);
  } else {
    main = group;
    zIndex = 0;
  }
  var a2 = main.children;
  for (var i2 = 0; i2 < a2.length; ++i2) {
    if (a2[i2]._dom_zIndex != null && a2[i2]._dom_zIndex > zIndex) {
      break;
    }
  }
  var tmp = new group_default();
  main.insert(i2, tmp);
  tmp._dom_zIndex = zIndex;
  if (main !== group) {
    if (nodeInfo._clipbox) {
      var m2 = nodeInfo._matrix.invert();
      var r2 = nodeInfo._clipbox.transformCopy(m2);
      setClipping2(tmp, Path.fromRect(r2));
    }
  }
  return tmp;
}
function renderElement(element, container) {
  var style = getComputedStyle2(element);
  updateCounters(style);
  if (/^(style|script|link|meta|iframe|col|colgroup)$/i.test(element.tagName)) {
    return;
  }
  if (nodeInfo._clipbox == null) {
    return;
  }
  var opacity = parseFloat(getPropertyValue(style, "opacity"));
  var visibility = getPropertyValue(style, "visibility");
  var display = getPropertyValue(style, "display");
  if (opacity === 0 || visibility == "hidden" || display == "none") {
    return;
  }
  var tr = getTransform(style);
  var group;
  var zIndex = getPropertyValue(style, "z-index");
  if ((tr || opacity < 1) && zIndex == "auto") {
    zIndex = 0;
  }
  group = groupInStackingContext(element, container, zIndex);
  if (opacity < 1) {
    group.opacity(opacity * group.opacity());
  }
  pushNodeInfo(element, style, group);
  if (!tr) {
    _renderWithPseudoElements(element, group);
  } else {
    saveStyle(element, function() {
      pleaseSetPropertyValue(element.style, "transform", "none", "important");
      pleaseSetPropertyValue(element.style, "transition", "none", "important");
      if (getPropertyValue(style, "position") == "static") {
        pleaseSetPropertyValue(element.style, "position", "relative", "important");
      }
      var bbox = element.getBoundingClientRect();
      var x = bbox.left + tr.origin[0];
      var y2 = bbox.top + tr.origin[1];
      var m2 = [1, 0, 0, 1, -x, -y2];
      m2 = mmul2(m2, tr.matrix);
      m2 = mmul2(m2, [1, 0, 0, 1, x, y2]);
      m2 = setTransform(group, m2);
      nodeInfo._matrix = nodeInfo._matrix.multiplyCopy(m2);
      _renderWithPseudoElements(element, group);
    });
  }
  popNodeInfo();
}
function mmul2(a2, b) {
  var a1 = a2[0], b1 = a2[1], c1 = a2[2], d1 = a2[3], e1 = a2[4], f1 = a2[5];
  var a22 = b[0], b2 = b[1], c2 = b[2], d2 = b[3], e2 = b[4], f2 = b[5];
  return [
    a1 * a22 + b1 * c2,
    a1 * b2 + b1 * d2,
    c1 * a22 + d1 * c2,
    c1 * b2 + d1 * d2,
    e1 * a22 + f1 * c2 + e2,
    e1 * b2 + f1 * d2 + f2
  ];
}

// node_modules/@progress/kendo-file-saver/dist/es/save-as.js
function saveAs2(data, fileName, options2) {
  if (options2 === void 0) options2 = {};
  var save = postToProxy;
  if (options2.forceProxy && !options2.proxyURL) {
    throw new Error("No proxyURL is set, but forceProxy is true");
  }
  if (!options2.forceProxy) {
    if (canDownload()) {
      save = saveAsDataURI;
    }
    if (navigator.msSaveBlob) {
      save = saveAsBlob;
    }
  }
  save(data, fileName, options2);
}
var anchor = function() {
  return document.createElement("a");
};
var canDownload = function() {
  return "download" in anchor();
};
function saveAsBlob(data, fileName) {
  var blob = data;
  if (typeof data === "string") {
    var parts = data.split(";base64,");
    var contentType = parts[0];
    var base64 = atob(parts[1]);
    var array = new Uint8Array(base64.length);
    for (var idx = 0; idx < base64.length; idx++) {
      array[idx] = base64.charCodeAt(idx);
    }
    blob = new Blob([array.buffer], { type: contentType });
  }
  navigator.msSaveBlob(blob, fileName);
}
function saveAsDataURI(data, fileName) {
  var dataURI = data;
  if (window.Blob && data instanceof Blob) {
    dataURI = URL.createObjectURL(data);
  }
  var fileSaver = anchor();
  fileSaver.download = fileName;
  fileSaver.href = dataURI;
  var e2 = document.createEvent("MouseEvents");
  e2.initMouseEvent(
    "click",
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  fileSaver.dispatchEvent(e2);
  setTimeout(function() {
    return URL.revokeObjectURL(dataURI);
  });
}
function postToProxy(dataURI, fileName, options2) {
  if (!options2.proxyURL) {
    return;
  }
  var form = document.createElement("form");
  form.setAttribute("action", options2.proxyURL);
  form.setAttribute("method", "POST");
  form.setAttribute("target", options2.proxyTarget || "_self");
  var formData = options2.proxyData || {};
  formData.fileName = fileName;
  var parts = dataURI.split(";base64,");
  formData.contentType = parts[0].replace("data:", "");
  formData.base64 = parts[1];
  for (var name in formData) {
    if (Object.prototype.hasOwnProperty.call(formData, name)) {
      var input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", name);
      input.setAttribute("value", formData[name]);
      form.appendChild(input);
    }
  }
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}

// node_modules/@progress/kendo-file-saver/dist/es/base64.js
var fromCharCode2 = String.fromCharCode;

// node_modules/@progress/kendo-licensing/dist/index.mjs
var e;
!(function(e2) {
  e2.BLAZOR = "BLAZOR", e2.DPL = "DPL", e2.JM = "JM", e2.KENDOUIANGULAR = "KENDOUIANGULAR", e2.KENDOUICOMPLETE = "KENDOUICOMPLETE", e2.KENDOUIMVC = "KENDOUIMVC", e2.KENDOUIREACT = "KENDOUIREACT", e2.KENDOUIVUE = "KENDOUIVUE", e2.MAUI = "MAUI", e2.RCAJAX = "RCAJAX", e2.RCWF = "RCWF", e2.RCWPF = "RCWPF", e2.REPORTING = "REPORTING", e2.REPORTSERVER = "REPORTSERVER", e2.UIASPCORE = "UIASPCORE", e2.UIXAM = "UIXAM", e2.WINUI = "WINUI";
})(e || (e = {})), Object.freeze({ [e.BLAZOR]: "Telerik UI for Blazor", [e.DPL]: "Telerik Document Processing", [e.JM]: "Telerik JustMock", [e.KENDOUIANGULAR]: "Kendo UI for Angular", [e.KENDOUICOMPLETE]: "Kendo UI for jQuery", [e.KENDOUIMVC]: "Telerik UI for ASP.NET MVC", [e.KENDOUIREACT]: "KendoReact", [e.KENDOUIVUE]: "Kendo UI for Vue", [e.MAUI]: "Telerik UI for .NET MAUI", [e.RCAJAX]: "Telerik UI for ASP.NET AJAX", [e.RCWF]: "Telerik UI for WinForms", [e.RCWPF]: "Telerik UI for WPF", [e.REPORTING]: "Telerik Reporting", [e.REPORTSERVER]: "Telerik Report Server", [e.UIASPCORE]: "Telerik UI for ASP.NET Core", [e.UIXAM]: "Telerik UI for Xamarin", [e.WINUI]: "Telerik UI for WinUI" });
function t(e2) {
  return Math.floor(e2.getTime() / 1e3);
}
function n(e2, n2) {
  const i2 = new Date(1e3 * e2);
  return i2.setDate(i2.getDate() + n2), t(i2);
}
function i() {
  return t(/* @__PURE__ */ new Date());
}
function o(e2) {
  const t2 = (function(e3) {
    if ("function" == typeof atob) return atob(e3);
    if ("function" == typeof Buffer) return Buffer.from(e3, "base64").toString("utf8");
    throw new Error("atob is undefined");
  })(e2), n2 = new Uint8Array(t2.length);
  for (let e3 = 0; e3 < t2.length; e3++) n2[e3] = t2.charCodeAt(e3);
  return n2;
}
function r(e2) {
  return o(e2.replace(/-/g, "+").replace(/_/g, "/"));
}
function s(e2) {
  return new Date(1e3 * e2);
}
function c(e2, t2) {
  const n2 = s(t2);
  return e2 > new Date(n2.getFullYear(), n2.getMonth(), n2.getDate() + 1).getTime() / 1e3;
}
function a(e2, t2) {
  let o2 = [];
  return e2.licenses?.length > 0 ? o2 = e2.licenses.map((e3) => (function(e4) {
    const t3 = e4.split(".")[1], n2 = String.fromCharCode(...r(t3));
    return JSON.parse(n2);
  })(e3)) : e2.products?.length > 0 && (o2 = e2.products.map((t3) => ({ type: t3.trial ? "trial" : "perpetual", code: t3.code, expiration: t3.licenseExpirationDate, licenseId: null, userId: e2.userId }))), (function(e3, t3) {
    const o3 = t3.filter((e4) => "usage" !== e4.type).filter((t4) => e3.productCode === t4.code || e3.redistributedBy?.includes(t4.code) || e3.productCodes?.includes(t4.code)).sort((e4, t4) => t4.expiration - e4.expiration);
    return o3.find((e4) => "subscription" === e4.type && !c(i(), e4.expiration)) || o3.find((t4) => "perpetual" === t4.type && !c(e3.publishDate, t4.expiration)) || o3.find((e4) => "subscription" === e4.type && !c(n(i(), 10), e4.expiration)) || o3.find((e4) => "trial" === e4.type && !c(i(), e4.expiration)) || o3.find((e4) => "subscription" === e4.type) || o3.find((e4) => "perpetual" === e4.type) || o3.find((e4) => "trial" === e4.type);
  })(t2, o2);
}
var l = (e2) => e2.productCode || e2.productCodes[0];
var p = Object.freeze({ name: "key", content: '\n        <svg\n            width="32"\n            height="32"\n            viewBox="0 0 32 32"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n            fillRule="evenodd"\n            clipRule="evenodd"\n            d="M22.702 2.1821C24.3149 2.51082 25.8077 3.27291 27.0199 4.38645C28.2321 5.49999 29.1179 6.92286 29.582 8.5021C30.012 9.9501 30.076 11.4821 29.768 12.9621C29.3228 14.9898 28.2025 16.8063 26.5904 18.1143C24.9783 19.4223 22.9699 20.1443 20.894 20.1621C20.018 20.1621 19.146 20.0361 18.308 19.7821L16.708 21.6581L15.95 22.0081H14V25.0081L13 26.0081H10V29.0081L9 30.0081H3L2 29.0081V24.3941L2.292 23.6881L12.24 13.7401C11.9577 12.8308 11.8226 11.8821 11.84 10.9301C11.8582 9.59817 12.1701 8.28666 12.7533 7.08907C13.3365 5.89147 14.1767 4.83728 15.214 4.00164C16.2514 3.166 17.4603 2.56949 18.7546 2.25464C20.0489 1.93978 21.3967 1.91633 22.702 2.1821ZM25.338 16.5821C26.5944 15.5647 27.4681 14.1509 27.816 12.5721L27.824 12.5821C28.0718 11.4277 28.0272 10.2297 27.6943 9.09691C27.3614 7.96412 26.7507 6.93248 25.9177 6.09572C25.0847 5.25896 24.0558 4.64361 22.9246 4.30557C21.7933 3.96753 20.5955 3.91753 19.44 4.1601C17.8816 4.506 16.4837 5.36334 15.4688 6.59561C14.454 7.82789 13.8806 9.36426 13.84 10.9601C13.82 11.8721 13.98 12.7761 14.318 13.6201L14.098 14.7061L4 24.8081V28.0081H8V25.0081L9 24.0081H12V21.0081L13 20.0081H15.49L17.242 17.9761L18.364 17.6961C19.1728 18.0121 20.0337 18.1736 20.902 18.1721C22.5181 18.1597 24.082 17.5991 25.338 16.5821ZM23.662 11.1181C23.8197 10.9002 23.9318 10.6527 23.9916 10.3905C24.0515 10.1283 24.0578 9.85665 24.0103 9.59192C23.9627 9.32718 23.8622 9.07476 23.7148 8.84975C23.5675 8.62474 23.3762 8.43177 23.1526 8.28238C22.9289 8.133 22.6774 8.03026 22.4131 7.98033C22.1488 7.93039 21.8771 7.93428 21.6144 7.99176C21.3516 8.04925 21.1031 8.15914 20.8838 8.31487C20.6645 8.4706 20.4789 8.66896 20.338 8.8981C20.067 9.33887 19.9774 9.86752 20.088 10.373C20.1985 10.8784 20.5007 11.3214 20.931 11.6087C21.3613 11.8961 21.8862 12.0055 22.3954 11.914C22.9047 11.8226 23.3587 11.5373 23.662 11.1181Z"\n            fill="black"\n            />\n            <path\n            d="M23.1299 16.0186L31.1387 31.0273L31.0068 31.25H14.9932L14.8604 31.0273L22.8955 16.0186H23.1299Z"\n            fill="#FFC000"\n            stroke="black"\n            strokeWidth="1.5"\n            />\n            <rect x="22.25" y="21.2686" width="1.5" height="5" rx="0.75" fill="black" />\n            <path\n            d="M24 28.2686C24 27.7163 23.5523 27.2686 23 27.2686C22.4479 27.2687 22 27.7164 22 28.2686C22 28.8207 22.4479 29.2684 23 29.2686C23.5523 29.2686 24 28.8208 24 28.2686Z"\n            fill="black"\n            />\n        </svg>\n    ' });
var d = Object.freeze({ name: "trial-tag", content: '\n        <svg\n            width="38"\n            height="38"\n            viewBox="0 0 38 38"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <g clipPath="url(#clip0)">\n            <path\n                d="M24.9056 7.60146L34.4998 10.1722L31.9299 19.7659L13.7653 30.2532L6.7419 18.0883L24.9056 7.60146Z"\n                stroke="black"\n                strokeWidth="1.75"\n            />\n            <path\n                d="M13.0913 19.7635L15.4762 23.8942L14.6279 24.384L12.2431 20.2533L13.0913 19.7635ZM14.3623 19.0297L14.7473 19.6964L11.3769 21.6423L10.992 20.9756L14.3623 19.0297ZM14.8475 18.7496L16.388 17.8602C16.7038 17.6778 17.0025 17.5684 17.2841 17.532C17.5675 17.4944 17.8242 17.5328 18.0542 17.6472C18.2841 17.7616 18.4772 17.954 18.6333 18.2244C18.7611 18.4457 18.833 18.6576 18.8491 18.8602C18.866 19.0598 18.8369 19.2518 18.7619 19.4364C18.6876 19.6179 18.5778 19.7923 18.4322 19.9596L18.2446 20.257L16.9055 21.0301L16.5166 20.3695L17.5124 19.7946C17.6618 19.7083 17.7704 19.6103 17.8381 19.5006C17.9059 19.3909 17.9371 19.2745 17.9317 19.1516C17.9281 19.0275 17.8903 18.9031 17.8183 18.7782C17.7418 18.6458 17.6512 18.5456 17.5463 18.4775C17.4415 18.4095 17.3242 18.3788 17.1944 18.3857C17.0647 18.3925 16.9242 18.4395 16.7729 18.5269L16.0835 18.9249L18.0834 22.3889L17.2323 22.8803L14.8475 18.7496ZM19.5417 21.547L17.5367 20.2496L18.4328 19.7247L20.4294 20.9815L20.4523 21.0212L19.5417 21.547ZM19.4746 16.0781L21.8595 20.2088L21.0112 20.6986L18.6264 16.5679L19.4746 16.0781ZM22.4103 15.3251L23.2638 19.398L22.3588 19.9205L21.5088 14.9037L22.0847 14.5712L22.4103 15.3251ZM25.3207 18.2105L22.2174 15.4365L21.7187 14.7825L22.3003 14.4467L26.2285 17.6864L25.3207 18.2105ZM24.3818 16.7023L24.7668 17.369L22.5851 18.6286L22.2002 17.9619L24.3818 16.7023ZM28.8837 15.2683L29.267 15.9321L27.1874 17.1327L26.8041 16.4689L28.8837 15.2683ZM25.0778 12.8432L27.4626 16.9739L26.6115 17.4652L24.2267 13.3345L25.0778 12.8432Z"\n                fill="black"\n            />\n            <circle\n                cx="30.1049"\n                cy="12.7084"\n                r="1.12128"\n                transform="rotate(15 30.1049 12.7084)"\n                fill="black"\n            />\n            </g>\n            <path\n            d="M27.6201 19.7998L35.6016 34.7578L35.499 34.9316H19.542L19.4385 34.7578L27.4463 19.7998H27.6201Z"\n            fill="#FFC000"\n            stroke="black"\n            strokeWidth="1.6"\n            />\n            <rect x="26.7705" y="25" width="1.5" height="5" rx="0.75" fill="black" />\n            <path\n            d="M28.5205 32C28.5205 31.4477 28.0728 31 27.5205 31C26.9684 31.0002 26.5205 31.4478 26.5205 32C26.5205 32.5522 26.9684 32.9998 27.5205 33C28.0728 33 28.5205 32.5523 28.5205 32Z"\n            fill="black"\n            />\n            <defs>\n            <clipPath id="clip0">\n                <rect\n                width="30"\n                height="31.1538"\n                fill="white"\n                transform="translate(8.06323) rotate(15)"\n                />\n            </clipPath>\n            </defs>\n        </svg>\n    ' });
var h = Object.freeze({ name: "recurring-payment", content: '\n        <svg\n            width="32"\n            height="32"\n            viewBox="0 0 32 32"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n            d="M27.8295 9.38659C28.8049 12.1653 28.7404 15.1391 27.774 17.7996C26.8014 20.4767 24.9215 22.8356 22.2691 24.367C19.7765 25.8061 16.9908 26.2908 14.3393 25.9323C11.6293 25.5682 9.06228 24.3215 7.08577 22.3155L8.23679 21.1826C9.95578 22.9294 12.1925 24.0142 14.5527 24.333C16.8583 24.6438 19.2821 24.2206 21.457 22.965C23.7719 21.6284 25.4118 19.5739 26.2565 17.2495C27.0643 15.0253 27.1474 12.5486 26.3976 10.2107L24.951 11.0459L25.5942 7.15112L29.2888 8.54145L27.8284 9.38462L27.8295 9.38659Z"\n            fill="black"\n            />\n            <path\n            fillRule="evenodd"\n            clipRule="evenodd"\n            d="M16.3594 8.08301C17.1842 8.16959 17.8382 8.41741 18.3281 8.8252C18.8135 9.2331 19.1263 9.78023 19.2607 10.4639L17.2939 10.6875C17.1732 10.1497 16.8607 9.78518 16.3594 9.59375V12.2617C17.6035 12.5557 18.4514 12.9408 18.9004 13.4102C19.3516 13.8819 19.5771 14.4863 19.5771 15.2246C19.5771 16.0494 19.2949 16.7425 18.7275 17.3076C18.1601 17.8728 17.3712 18.2233 16.3594 18.3623V19.6387H15.2334V18.3779C14.3448 18.2822 13.6246 17.9934 13.0664 17.5059C12.5081 17.0182 12.155 16.3275 12 15.4365L14.0127 15.2266C14.0947 15.5912 14.2497 15.9036 14.4775 16.168C14.7053 16.4321 14.9555 16.6218 15.2334 16.7402V13.8799C14.2264 13.6247 13.4906 13.2395 13.0234 12.7246C12.554 12.2073 12.3164 11.5801 12.3164 10.8418C12.3165 10.0946 12.5834 9.46575 13.1143 8.95996C13.6452 8.45184 14.3516 8.16053 15.2334 8.08301V7C15.6731 7 15.9197 7 16.3594 7V8.08301ZM16.3574 16.8535H16.3594C16.7467 16.7783 17.0661 16.6149 17.3076 16.3643C17.5537 16.1113 17.6738 15.8147 17.6738 15.4707C17.6738 15.1677 17.5715 14.9033 17.3643 14.6846C17.1615 14.4636 16.8267 14.2943 16.3574 14.1758V16.8535ZM15.2334 9.56836C14.9304 9.66408 14.6911 9.82132 14.5156 10.04C14.3379 10.2588 14.252 10.5004 14.252 10.7646C14.252 11.0062 14.3314 11.2301 14.4932 11.4375C14.655 11.6424 14.9038 11.8113 15.2363 11.9365V9.56836H15.2334Z"\n            fill="black"\n            />\n            <path\n            d="M2.71127 18.5075L4.18352 17.6575C3.21672 14.9028 3.27173 11.9581 4.21167 9.31563C5.17535 6.60942 7.06671 4.22018 9.74281 2.67513C12.0972 1.31581 14.709 0.807832 17.2232 1.05612C19.8041 1.3106 22.2798 2.36266 24.2693 4.10853L23.7361 4.71636L23.2029 5.32418C23.1532 5.27918 23.1016 5.23531 23.0511 5.19342C21.3484 3.75295 19.2504 2.88549 17.0678 2.66937C14.8802 2.45355 12.6065 2.89529 10.5561 4.07914C8.2194 5.42821 6.56974 7.50687 5.7328 9.85834C4.94555 12.068 4.87307 14.5175 5.61235 16.8326L6.69304 16.2087L6.98491 16.4014L6.40585 19.8979L2.71127 18.5075Z"\n            fill="black"\n            />\n            <path\n            d="M23.0996 15.7998L31.0811 30.7578L30.9785 30.9316H15.0215L14.918 30.7578L22.9258 15.7998H23.0996Z"\n            fill="#FFC000"\n            stroke="black"\n            strokeWidth="1.6"\n            />\n            <rect x="22.25" y="21" width="1.5" height="5" rx="0.75" fill="black" />\n            <path\n            d="M24 28C24 27.4477 23.5523 27 23 27C22.4479 27.0002 22 27.4478 22 28C22 28.5522 22.4479 28.9998 23 29C23.5523 29 24 28.5523 24 28Z"\n            fill="black"\n            />\n        </svg>\n    ' });
var f = class {
  constructor(e2, t2, n2, i2) {
    this.productName = e2, this.severity = "WARN", this.code = "TKL201", this.notificationIcon = p, this.message = "No Telerik and Kendo UI License found.\n  To download a license key file, visit https://prgress.co/3PwQMKZ", this.notificationMessage = `License key missing for ${e2} v${n2}.  A license key is required for both paid and trial usage. Learn <a href="${i2}">how to set up a license key</a>.`, this.notificationTitle = `License key missing for ${e2} v${n2}.`, this.notificationBody = "A license key is required for both paid and trial usage.", this.callToAction = { link: `https://www.telerik.com/download?utm_source=no_license_watermark&utm_campaign=${t2.toLowerCase()}&utm_content=no_license_key_found`, message: "Start Free Trial" };
  }
};
var C = class {
  constructor(e2, t2, n2, i2) {
    this.productName = e2, this.severity = "WARN", this.code = "TKL202", this.notificationIcon = p, this.message = `${e2} is not listed in your current license file.
  Learn more about ${e2} licensing at ${i2}`, this.notificationMessage = `No license found for ${e2} v${n2}.  Access to the latest updates and support requires a <a href="${i2}">valid license</a>.`, this.notificationTitle = `No license found for ${e2} v${n2}`, this.notificationBody = "To use this product and access updates and support you need to buy and install a valid license.", this.callToAction = { link: `https://www.telerik.com/purchase.aspx?utm_source=no_license_watermark&utm_campaign=${t2.toLowerCase()}&utm_content=no_license_key_current_product`, message: "Buy Now" };
  }
};
var L = class {
  constructor(e2, t2, n2, i2) {
    this.productName = e2, this.severity = "WARN", this.code = "TKL203", this.notificationIcon = d, this.message = `Your trial has expired ${i2} day(s) ago.
  Thank you for trying out ${e2}, we hope you enjoyed your trial period.
  To continue using our product, consider upgrading to a commercial license: https://prgress.co/3C9mr1M`, this.notificationMessage = `Your trial license for ${e2} v${n2} has expired ${i2} ago. To continue using our product, consider upgrading to a commercial license. Learn more about <a href="https://prgress.co/3PwQMdX">${e2} licensing</a>.`, this.notificationTitle = `Your trial license for ${e2} has expired.`, this.notificationBody = "To continue using the product you need to buy a subscription.", this.callToAction = { link: `https://www.telerik.com/purchase.aspx?utm_source=no_license_watermark&utm_campaign=${t2.toLowerCase()}&utm_content=trial_expired`, message: "Buy Now" };
  }
};
var m = class {
  constructor(e2, t2, n2, i2, o2, r2) {
    this.productName = e2, this.severity = "WARN", this.code = "TKL204", this.notificationIcon = p;
    const s2 = i2 ? ` version ${i2}` : "";
    this.message = `Your current license has expired on ${n2.toLocaleDateString()} and is not valid for ${e2}${s2}. The product was published on ${o2.toLocaleDateString()}.
  Renew your license at https://prgress.co/3Px9m5F`, this.notificationMessage = `Your license is not valid for ${e2} v${i2}. To continue using the product, install a <a href="${r2}">valid license</a>. Renew <a href="https://prgress.co/3PwQNi1">your license</a> and download a new license key.`, this.notificationTitle = `Your license doesn't cover ${e2} v${i2}`, this.notificationBody = "To access the latest version and updates you need to renew your license.", this.callToAction = { link: `https://www.telerik.com/account/your-licenses?utm_source=no_license_watermark&utm_campaign=${t2.toLowerCase()}&utm_content=perpertual_newer_version`, message: "Renew Now" };
  }
};
var g = class {
  constructor(e2, t2, n2) {
    this.productName = e2, this.severity = "WARN", this.code = "TKL204", this.notificationIcon = h, this.message = `Your ${e2} subscription has expired on ${n2.toLocaleDateString()}. To continue using the product, please renew your subscription at https://prgress.co/3Px9m5F and download a new license key.`, this.notificationMessage = `Your ${e2} subscription has expired. To continue using the product, please <a href="https://prgress.co/3PwQMut">renew your subscription</a> and download a new license key.`, this.notificationTitle = `Your ${e2} subscription has expired.`, this.notificationBody = "To continue using the product you need to renew your subscription.", this.callToAction = { link: `https://www.telerik.com/account/your-licenses?utm_source=no_license_watermark&utm_campaign=${t2.toLowerCase()}&utm_content=subscription_expired`, message: "Renew Now" };
  }
};
var w = class {
  constructor(e2, t2, n2, i2) {
    this.productName = e2, this.severity = "INFO", this.notificationIcon = d, this.message = `Your Trial license will expire in ${-i2} day(s).
  To acquire a commercial license, visit https://prgress.co/3PyHIoH`, this.notificationTitle = `Active trial for ${e2} v${n2}`, this.notificationBody = `Your trial will expire in ${-i2} day(s).`, this.callToAction = { link: `https://www.telerik.com/purchase.aspx?utm_source=no_license_watermark&utm_campaign=${t2.toLowerCase()}&utm_content=active_trial`, message: "Buy now" };
  }
};
function y(e2, t2) {
  return __async(this, null, function* () {
    if ("object" != typeof crypto || "object" != typeof crypto.subtle || "function" != typeof TextEncoder || "function" != typeof TextDecoder) return;
    const n2 = crypto.subtle, [i2, s2, c2] = e2.split("."), a2 = r(c2), l2 = new TextEncoder(), u = new TextDecoder(), p2 = l2.encode(`${i2}.${s2}`), d2 = u.decode(r(i2));
    if (!("Telerik License Evidence" === JSON.parse(d2).typ)) throw new Error("Unknown license evidence type");
    const h2 = yield (function(e3) {
      const t3 = o(e3.replace("-----BEGIN PUBLIC KEY-----", "").replace("-----END PUBLIC KEY-----", "").replace(/\n/gm, ""));
      return crypto.subtle.importKey("spki", t3, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, true, ["verify"]);
    })(t2);
    if (!(yield n2.verify(h2.algorithm, h2, a2, p2))) throw new Error("Invalid license evidence");
  });
}
var k = { data: "  {}  " };
var I = /* @__PURE__ */ new Map();
var v = /* @__PURE__ */ new Set();
var E = true;
function N(e2) {
  const o2 = JSON.parse(k.data), r2 = !o2.scriptKey && !o2.timestamp, u = o2.scriptKey && "undefined" == typeof KendoLicensing, p2 = l(e2);
  let d2, h2, v2 = false;
  if (r2 || u || !((e3) => (e3.licenses?.length > 0 && Promise.all(e3.licenses?.map((e4) => y(e4, "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2mnUVMmkth2x+N/ODszG\nOFIYBL6NOO1XWRj1wkmecKuLziJDhFz0WQmyOjY34Ymg9pLuBA9QSWrrZuvPw40N\nm0X/GBmttFmPNvca3WmJ2oKM7PpLiUU9f7Ov5WeIXnx++ts/LC/OB7FtZ+LiRgJ7\n0mZnPeTogdFrASf0zSQJv4jmX840LPa6nomWeUgIVGPLLVI14Gib8Dl+nOckqCNc\nkAUUk4IBF67DufRt9zQyRxg99ysakvHX2SDbdGvIBdxWxvhhmrBoeix0uSVtG2gm\njdvSqlPJVdvMbk1Xe2+SUldJPrxH1VrTYeRUt4yqWxy16nFJUDj9exZ202X4THkU\nJQIDAQAB\n-----END PUBLIC KEY-----"))).then(() => {
    E = true;
  }).catch(() => {
    E = false, I.clear();
  }), E))(o2)) d2 = new f(e2.productName, p2, e2.version, e2.licensingDocsUrl);
  else if (h2 = a(o2, e2), h2) {
    if ("trial" === h2.type) {
      const n2 = (function(e3) {
        const n3 = i() - t(e3);
        return Math.floor(n3 / 86400);
      })(s(h2.expiration));
      c(i(), h2.expiration) ? d2 = new L(e2.productName, p2, e2.version, n2) : (d2 = new w(e2.productName, p2, e2.version, n2), v2 = true);
    } else if ("perpetual" === h2.type) {
      const t2 = h2.expiration;
      c(e2.publishDate, t2) ? d2 = new m(e2.productName, p2, s(h2.expiration), e2.version, s(e2.publishDate), e2.licensingDocsUrl) : v2 = true;
    } else if ("subscription" === h2.type) {
      let t2 = h2.expiration;
      "subscription" === h2.type && (t2 = n(t2, 10)), o2.timestamp && c(o2.timestamp, t2) ? d2 = new g(e2.productName, p2, s(h2.expiration)) : v2 = true;
    }
  } else d2 = new C(e2.productName, p2, e2.version, e2.licensingDocsUrl);
  const T = h2, N2 = T?.expiration ? s(T.expiration) : void 0;
  return { isLicenseValid: v2, licenseType: h2?.type, licenseProductCode: T?.code, expiration: N2, message: d2 };
}
function A(e2) {
  if (I.has(e2.name)) return I.get(e2.name);
  const { isLicenseValid: t2, message: n2 } = N(e2), i2 = l(e2);
  return n2 && !v.has(i2) && (!(function(e3, t3) {
    if ("object" == typeof console) {
      const i3 = `[${e3.severity}][Telerik and Kendo UI Licensing]` + (n3 ? ` ${n3}:` : "") + ` ${t3.productName}`, o2 = "function" == typeof console.group;
      o2 ? console.group(i3) : console.warn(i3), console.warn(e3.message), o2 && console.groupEnd();
    }
    var n3;
  })(n2, e2), v.add(i2)), I.set(e2.name, t2), t2;
}

// node_modules/@progress/kendo-angular-pdf-export/fesm2022/progress-kendo-angular-pdf-export.mjs
var _c0 = ["*"];
var packageMetadata = {
  name: "@progress/kendo-angular-pdf-export",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1782892855,
  version: "24.2.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var PDFExportTemplateDirective = class _PDFExportTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function PDFExportTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PDFExportTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PDFExportTemplateDirective,
    selectors: [["", "kendoPDFTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFExportTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPDFTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var FIELDS = ["bottom", "left", "right", "top"];
var PDFExportMarginComponent = class _PDFExportMarginComponent {
  /**
   * Sets the left margin of the PDF page. Accepts a `number` or `string` value.
   *
   * The supported units are `"mm"`, `"cm"`, `"in"`, and `"pt"`. Numbers use points (`"pt"`).
   * @default "pt"
   */
  left;
  /**
   * Sets the top margin of the PDF page. Accepts a `number` or `string` value.
   *
   * The supported units are `"mm"`, `"cm"`, `"in"`, and `"pt"`. Numbers use points (`"pt"`).
   * @default "pt"
   */
  top;
  /**
   * Sets the right margin of the PDF page. Accepts a `number` or `string` value.
   *
   * The supported units are `"mm"`, `"cm"`, `"in"`, and `"pt"`. Numbers use points (`"pt"`).
   * @default "pt"
   */
  right;
  /**
   * Sets the bottom margin of the PDF page. Accepts a `number` or `string` value.
   *
   * The supported units are `"mm"`, `"cm"`, `"in"`, and `"pt"`. Numbers use points (`"pt"`).
   * @default "pt"
   */
  bottom;
  /**
   * @hidden
   */
  get options() {
    const options2 = {};
    for (let idx = 0; idx < FIELDS.length; idx++) {
      const field = FIELDS[idx];
      const value = this[field];
      if (typeof value !== "undefined") {
        options2[field] = value;
      }
    }
    return options2;
  }
  static ɵfac = function PDFExportMarginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PDFExportMarginComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PDFExportMarginComponent,
    selectors: [["kendo-pdf-export-margin"]],
    inputs: {
      left: "left",
      top: "top",
      right: "right",
      bottom: "bottom"
    },
    decls: 0,
    vars: 0,
    template: function PDFExportMarginComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFExportMarginComponent, [{
    type: Component,
    args: [{
      selector: "kendo-pdf-export-margin",
      template: ``,
      standalone: true
    }]
  }], null, {
    left: [{
      type: Input
    }],
    top: [{
      type: Input
    }],
    right: [{
      type: Input
    }],
    bottom: [{
      type: Input
    }]
  });
})();
var compileTemplate = (templateRef) => {
  const context = {};
  let embeddedView = templateRef.createEmbeddedView(context);
  const result = (data) => {
    Object.assign(context, data);
    embeddedView.detectChanges();
    const templateWrap = document.createElement("span");
    embeddedView.rootNodes.forEach((rootNode) => {
      templateWrap.appendChild(rootNode.cloneNode(true));
    });
    return templateWrap;
  };
  result.destroy = () => {
    embeddedView.destroy();
    embeddedView = null;
  };
  return result;
};
var PDFExportComponent = class _PDFExportComponent {
  element;
  /**
   * If `true`, opens the Print dialog immediately after the PDF loads ([see example](https://www.telerik.com/kendo-angular-ui/components/pdf-export/auto-print)).
   * Requires `@progress/kendo-drawing` v1.9.0 or later.
   * @default false
   */
  autoPrint;
  /**
   * Sets the author metadata for the PDF document.
   */
  author;
  /**
   * Specifies whether actual hyperlinks will be produced in the exported PDF file ([see example](https://www.telerik.com/kendo-angular-ui/components/pdf-export/disabling-hyperlinks)). You can also set a CSS selector to ignore matching links.
   */
  avoidLinks;
  /**
   * Sets a CSS selector for elements that cause page breaks
   * ([see example](https://www.telerik.com/kendo-angular-ui/components/pdf-export/multi-page-content#manual-page-breaking)).
   */
  forcePageBreak;
  /**
   * Sets a CSS selector for elements that should not split across pages
   * ([see example](https://www.telerik.com/kendo-angular-ui/components/pdf-export/multi-page-content#preventing-page-breaking-in-elements)).
   */
  keepTogether;
  /**
   * Sets the creator metadata for the PDF document.
   * @default "Kendo UI PDF Generator"
   */
  creator = "Kendo UI PDF Generator";
  /**
   * Sets the creation date for the PDF document. Defaults to `new Date()`.
   * @default new Date()
   */
  date;
  /**
   * Sets the image resolution in the exported PDF ([see example](https://www.telerik.com/kendo-angular-ui/components/pdf-export/embedded-images)). By default, images use full resolution.
   */
  imageResolution;
  /**
   * Sets the name of the exported PDF file.
   * @default "export.pdf"
   */
  fileName = "export.pdf";
  /**
   * If `true`, forwards content to `proxyURL` even if the browser supports local file saving.
   */
  forceProxy;
  /**
   * Sets the keywords metadata for the PDF document.
   */
  keywords;
  /**
   * If `true`, sets the page orientation to landscape. The default page orientation is portrait.
   * @default false
   */
  landscape;
  /**
   * Sets the page margins. Numbers use points (`"pt"`).
   */
  margin;
  /**
   * Sets the paper size for the PDF document. Defaults to `"auto"`, which means the content determines the size of the document.
   * The size of the content in pixels matches the size of the output in points (1 pixel = 1/72 inch).
   *
   * If set, the content splits across pages, and allows you to use `repeatHeaders`, `scale`, and a template.
   *
   * The value can be a `PaperSize`, an array of two numbers (width and height in points), or an array of two strings (width and height in units: `"mm"`, `"cm"`, `"in"`, or `"pt"`).
   * @default "auto"
   */
  paperSize;
  /**
   * If `true`, repeats the `<thead>` elements of tables on each page. This helps keep table headers visible on every page
   * ([see example](https://www.telerik.com/kendo-angular-ui/components/pdf-export/repeated-table-headers)).
   */
  repeatHeaders;
  /**
   * Sets a scale factor for the PDF output. Use this to make the PDF content smaller or larger
   * ([see example](https://www.telerik.com/kendo-angular-ui/components/pdf-export/scaling-of-content)).
   *
   * @default 1
   */
  scale;
  /**
   * Sets a key/value dictionary of form values sent to the proxy. Use this to send extra data, like Anti-Forgery tokens.
   */
  proxyData;
  /**
   * Sets the server-side proxy URL for streaming the file to the user. You need to implement a proxy if
   * the browser is not capable of saving files locally.
   * The proxy returns the decoded file with the `"Content-Disposition"` header set to `attachment; filename="<fileName.pdf>"`.
   *
   * In the request body, the proxy receives a POST request with the specific parameters
   * ([see example](https://www.telerik.com/kendo-angular-ui/components/file-saver/server-proxy#implementations)).
   */
  proxyURL;
  /**
   * Sets where to display the document returned from the proxy. Use `"_self"` to display in the same window.
   * To display the document in a new window or iframe,
   * the proxy must have the `"Content-Disposition"` header set to `inline; filename="<fileName.pdf>"`.
   * @default "_self"
   */
  proxyTarget;
  /**
   * Sets the producer metadata for the PDF document.
   */
  producer;
  /**
   * Sets the subject metadata for the PDF document.
   */
  subject;
  /**
   * Sets the title metadata for the PDF document.
   */
  title;
  /**
   * @hidden
   */
  pageTemplateDirective;
  /**
   * @hidden
   */
  marginComponent;
  get drawMargin() {
    const marginComponent = this.marginComponent;
    let margin = this.margin;
    if (marginComponent) {
      margin = Object.assign(margin || {}, marginComponent.options);
    }
    return margin;
  }
  pageTemplate;
  constructor(element) {
    this.element = element;
    A(packageMetadata);
  }
  /**
   * Saves the content as a PDF file with the specified name.
   * @param fileName - The name of the exported file.
   */
  saveAs(fileName = this.fileName) {
    this.save(this.element.nativeElement, fileName);
  }
  /**
   * Exports the content as a `Group` for further processing.
   *
   * @return The root group of the exported scene.
   */
  export() {
    return this.exportElement(this.element.nativeElement);
  }
  save(element, fileName) {
    this.exportElement(element).then((group) => this.exportGroup(group, this.pdfOptions())).then((dataUri) => this.saveDataUri(dataUri, fileName, this.saveOptions()));
  }
  exportElement(element) {
    const promise = this.drawElement(element, this.drawOptions());
    const cleanup = this.cleanup.bind(this);
    promise.then(cleanup, cleanup);
    return promise;
  }
  cleanup() {
    if (this.pageTemplate) {
      this.pageTemplate.destroy();
      delete this.pageTemplate;
    }
  }
  drawOptions() {
    if (this.pageTemplateDirective) {
      this.pageTemplate = compileTemplate(this.pageTemplateDirective.templateRef);
    }
    return {
      avoidLinks: this.avoidLinks,
      forcePageBreak: this.forcePageBreak,
      keepTogether: this.keepTogether,
      margin: this.drawMargin,
      paperSize: this.paperSize,
      landscape: this.landscape,
      repeatHeaders: this.repeatHeaders,
      scale: this.scale,
      template: this.pageTemplate
    };
  }
  pdfOptions() {
    return {
      autoPrint: this.autoPrint,
      author: this.author,
      creator: this.creator,
      date: this.date,
      imgDPI: this.imageResolution,
      keywords: this.keywords,
      landscape: this.landscape,
      margin: this.drawMargin,
      multiPage: true,
      paperSize: this.paperSize,
      producer: this.producer,
      subject: this.subject,
      title: this.title
    };
  }
  saveOptions() {
    return {
      forceProxy: this.forceProxy,
      proxyData: this.proxyData,
      proxyTarget: this.proxyTarget,
      proxyURL: this.proxyURL
    };
  }
  drawElement(element, options2) {
    return drawDOM(element, options2);
  }
  exportGroup(group, options2) {
    return exportPDF(group, options2);
  }
  saveDataUri(dataUri, fileName, options2) {
    saveAs2(dataUri, fileName, options2);
  }
  static ɵfac = function PDFExportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PDFExportComponent)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PDFExportComponent,
    selectors: [["kendo-pdf-export"]],
    contentQueries: function PDFExportComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PDFExportTemplateDirective, 5)(dirIndex, PDFExportMarginComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pageTemplateDirective = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.marginComponent = _t.first);
      }
    },
    inputs: {
      autoPrint: "autoPrint",
      author: "author",
      avoidLinks: "avoidLinks",
      forcePageBreak: "forcePageBreak",
      keepTogether: "keepTogether",
      creator: "creator",
      date: "date",
      imageResolution: "imageResolution",
      fileName: "fileName",
      forceProxy: "forceProxy",
      keywords: "keywords",
      landscape: "landscape",
      margin: "margin",
      paperSize: "paperSize",
      repeatHeaders: "repeatHeaders",
      scale: "scale",
      proxyData: "proxyData",
      proxyURL: "proxyURL",
      proxyTarget: "proxyTarget",
      producer: "producer",
      subject: "subject",
      title: "title"
    },
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    template: function PDFExportComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵdomElementStart(0, "div");
        ɵɵprojection(1);
        ɵɵdomElementEnd();
      }
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFExportComponent, [{
    type: Component,
    args: [{
      selector: "kendo-pdf-export",
      template: `<div><ng-content></ng-content></div>`,
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    autoPrint: [{
      type: Input
    }],
    author: [{
      type: Input
    }],
    avoidLinks: [{
      type: Input
    }],
    forcePageBreak: [{
      type: Input
    }],
    keepTogether: [{
      type: Input
    }],
    creator: [{
      type: Input
    }],
    date: [{
      type: Input
    }],
    imageResolution: [{
      type: Input
    }],
    fileName: [{
      type: Input
    }],
    forceProxy: [{
      type: Input
    }],
    keywords: [{
      type: Input
    }],
    landscape: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    paperSize: [{
      type: Input
    }],
    repeatHeaders: [{
      type: Input
    }],
    scale: [{
      type: Input
    }],
    proxyData: [{
      type: Input
    }],
    proxyURL: [{
      type: Input
    }],
    proxyTarget: [{
      type: Input
    }],
    producer: [{
      type: Input
    }],
    subject: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    pageTemplateDirective: [{
      type: ContentChild,
      args: [PDFExportTemplateDirective, {
        static: false
      }]
    }],
    marginComponent: [{
      type: ContentChild,
      args: [PDFExportMarginComponent, {
        static: false
      }]
    }]
  });
})();
var KENDO_PDFEXPORT = [PDFExportComponent, PDFExportMarginComponent, PDFExportTemplateDirective];
var PDFExportModule = class _PDFExportModule {
  static ɵfac = function PDFExportModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PDFExportModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PDFExportModule,
    imports: [PDFExportComponent, PDFExportMarginComponent, PDFExportTemplateDirective],
    exports: [PDFExportComponent, PDFExportMarginComponent, PDFExportTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFExportModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_PDFEXPORT],
      exports: [...KENDO_PDFEXPORT]
    }]
  }], null, null);
})();
export {
  KENDO_PDFEXPORT,
  PDFExportComponent,
  PDFExportMarginComponent,
  PDFExportModule,
  PDFExportTemplateDirective,
  compileTemplate
};
//# sourceMappingURL=@progress_kendo-angular-pdf-export.js.map
