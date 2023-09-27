(() => {
  var t = {
      447: function (t) {
        t.exports = (function () {
          "use strict";
          function t(e) {
            return (
              (t =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    }),
              t(e)
            );
          }
          function e(t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                function (t, e) {
                  return (t.__proto__ = e), t;
                }),
              e(t, n)
            );
          }
          function n(t, r, o) {
            return (
              (n = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
                ? Reflect.construct
                : function (t, n, r) {
                    var o = [null];
                    o.push.apply(o, n);
                    var i = new (Function.bind.apply(t, o))();
                    return r && e(i, r.prototype), i;
                  }),
              n.apply(null, arguments)
            );
          }
          function r(t) {
            return (
              (function (t) {
                if (Array.isArray(t)) return o(t);
              })(t) ||
              (function (t) {
                if (
                  ("undefined" != typeof Symbol &&
                    null != t[Symbol.iterator]) ||
                  null != t["@@iterator"]
                )
                  return Array.from(t);
              })(t) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return o(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  return (
                    "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(t)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? o(t, e)
                      : void 0
                  );
                }
              })(t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function o(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
          }
          var i = Object.hasOwnProperty,
            a = Object.setPrototypeOf,
            c = Object.isFrozen,
            s = Object.getPrototypeOf,
            u = Object.getOwnPropertyDescriptor,
            l = Object.freeze,
            p = Object.seal,
            f = Object.create,
            d = "undefined" != typeof Reflect && Reflect,
            h = d.apply,
            m = d.construct;
          h ||
            (h = function (t, e, n) {
              return t.apply(e, n);
            }),
            l ||
              (l = function (t) {
                return t;
              }),
            p ||
              (p = function (t) {
                return t;
              }),
            m ||
              (m = function (t, e) {
                return n(t, r(e));
              });
          var y,
            g = E(Array.prototype.forEach),
            _ = E(Array.prototype.pop),
            v = E(Array.prototype.push),
            b = E(String.prototype.toLowerCase),
            T = E(String.prototype.toString),
            x = E(String.prototype.match),
            O = E(String.prototype.replace),
            S = E(String.prototype.indexOf),
            w = E(String.prototype.trim),
            N = E(RegExp.prototype.test),
            j =
              ((y = TypeError),
              function () {
                for (
                  var t = arguments.length, e = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  e[n] = arguments[n];
                return m(y, e);
              });
          function E(t) {
            return function (e) {
              for (
                var n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              return h(t, e, r);
            };
          }
          function M(t, e, n) {
            (n = n || b), a && a(t, null);
            for (var r = e.length; r--; ) {
              var o = e[r];
              if ("string" == typeof o) {
                var i = n(o);
                i !== o && (c(e) || (e[r] = i), (o = i));
              }
              t[o] = !0;
            }
            return t;
          }
          function L(t) {
            var e,
              n = f(null);
            for (e in t) h(i, t, [e]) && (n[e] = t[e]);
            return n;
          }
          function C(t, e) {
            for (; null !== t; ) {
              var n = u(t, e);
              if (n) {
                if (n.get) return E(n.get);
                if ("function" == typeof n.value) return E(n.value);
              }
              t = s(t);
            }
            return function (t) {
              return console.warn("fallback value for", t), null;
            };
          }
          var P = l([
              "a",
              "abbr",
              "acronym",
              "address",
              "area",
              "article",
              "aside",
              "audio",
              "b",
              "bdi",
              "bdo",
              "big",
              "blink",
              "blockquote",
              "body",
              "br",
              "button",
              "canvas",
              "caption",
              "center",
              "cite",
              "code",
              "col",
              "colgroup",
              "content",
              "data",
              "datalist",
              "dd",
              "decorator",
              "del",
              "details",
              "dfn",
              "dialog",
              "dir",
              "div",
              "dl",
              "dt",
              "element",
              "em",
              "fieldset",
              "figcaption",
              "figure",
              "font",
              "footer",
              "form",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "head",
              "header",
              "hgroup",
              "hr",
              "html",
              "i",
              "img",
              "input",
              "ins",
              "kbd",
              "label",
              "legend",
              "li",
              "main",
              "map",
              "mark",
              "marquee",
              "menu",
              "menuitem",
              "meter",
              "nav",
              "nobr",
              "ol",
              "optgroup",
              "option",
              "output",
              "p",
              "picture",
              "pre",
              "progress",
              "q",
              "rp",
              "rt",
              "ruby",
              "s",
              "samp",
              "section",
              "select",
              "shadow",
              "small",
              "source",
              "spacer",
              "span",
              "strike",
              "strong",
              "style",
              "sub",
              "summary",
              "sup",
              "table",
              "tbody",
              "td",
              "template",
              "textarea",
              "tfoot",
              "th",
              "thead",
              "time",
              "tr",
              "track",
              "tt",
              "u",
              "ul",
              "var",
              "video",
              "wbr",
            ]),
            A = l([
              "svg",
              "a",
              "altglyph",
              "altglyphdef",
              "altglyphitem",
              "animatecolor",
              "animatemotion",
              "animatetransform",
              "circle",
              "clippath",
              "defs",
              "desc",
              "ellipse",
              "filter",
              "font",
              "g",
              "glyph",
              "glyphref",
              "hkern",
              "image",
              "line",
              "lineargradient",
              "marker",
              "mask",
              "metadata",
              "mpath",
              "path",
              "pattern",
              "polygon",
              "polyline",
              "radialgradient",
              "rect",
              "stop",
              "style",
              "switch",
              "symbol",
              "text",
              "textpath",
              "title",
              "tref",
              "tspan",
              "view",
              "vkern",
            ]),
            z = l([
              "feBlend",
              "feColorMatrix",
              "feComponentTransfer",
              "feComposite",
              "feConvolveMatrix",
              "feDiffuseLighting",
              "feDisplacementMap",
              "feDistantLight",
              "feFlood",
              "feFuncA",
              "feFuncB",
              "feFuncG",
              "feFuncR",
              "feGaussianBlur",
              "feImage",
              "feMerge",
              "feMergeNode",
              "feMorphology",
              "feOffset",
              "fePointLight",
              "feSpecularLighting",
              "feSpotLight",
              "feTile",
              "feTurbulence",
            ]),
            k = l([
              "animate",
              "color-profile",
              "cursor",
              "discard",
              "fedropshadow",
              "font-face",
              "font-face-format",
              "font-face-name",
              "font-face-src",
              "font-face-uri",
              "foreignobject",
              "hatch",
              "hatchpath",
              "mesh",
              "meshgradient",
              "meshpatch",
              "meshrow",
              "missing-glyph",
              "script",
              "set",
              "solidcolor",
              "unknown",
              "use",
            ]),
            I = l([
              "math",
              "menclose",
              "merror",
              "mfenced",
              "mfrac",
              "mglyph",
              "mi",
              "mlabeledtr",
              "mmultiscripts",
              "mn",
              "mo",
              "mover",
              "mpadded",
              "mphantom",
              "mroot",
              "mrow",
              "ms",
              "mspace",
              "msqrt",
              "mstyle",
              "msub",
              "msup",
              "msubsup",
              "mtable",
              "mtd",
              "mtext",
              "mtr",
              "munder",
              "munderover",
            ]),
            R = l([
              "maction",
              "maligngroup",
              "malignmark",
              "mlongdiv",
              "mscarries",
              "mscarry",
              "msgroup",
              "mstack",
              "msline",
              "msrow",
              "semantics",
              "annotation",
              "annotation-xml",
              "mprescripts",
              "none",
            ]),
            D = l(["#text"]),
            H = l([
              "accept",
              "action",
              "align",
              "alt",
              "autocapitalize",
              "autocomplete",
              "autopictureinpicture",
              "autoplay",
              "background",
              "bgcolor",
              "border",
              "capture",
              "cellpadding",
              "cellspacing",
              "checked",
              "cite",
              "class",
              "clear",
              "color",
              "cols",
              "colspan",
              "controls",
              "controlslist",
              "coords",
              "crossorigin",
              "datetime",
              "decoding",
              "default",
              "dir",
              "disabled",
              "disablepictureinpicture",
              "disableremoteplayback",
              "download",
              "draggable",
              "enctype",
              "enterkeyhint",
              "face",
              "for",
              "headers",
              "height",
              "hidden",
              "high",
              "href",
              "hreflang",
              "id",
              "inputmode",
              "integrity",
              "ismap",
              "kind",
              "label",
              "lang",
              "list",
              "loading",
              "loop",
              "low",
              "max",
              "maxlength",
              "media",
              "method",
              "min",
              "minlength",
              "multiple",
              "muted",
              "name",
              "nonce",
              "noshade",
              "novalidate",
              "nowrap",
              "open",
              "optimum",
              "pattern",
              "placeholder",
              "playsinline",
              "poster",
              "preload",
              "pubdate",
              "radiogroup",
              "readonly",
              "rel",
              "required",
              "rev",
              "reversed",
              "role",
              "rows",
              "rowspan",
              "spellcheck",
              "scope",
              "selected",
              "shape",
              "size",
              "sizes",
              "span",
              "srclang",
              "start",
              "src",
              "srcset",
              "step",
              "style",
              "summary",
              "tabindex",
              "title",
              "translate",
              "type",
              "usemap",
              "valign",
              "value",
              "width",
              "xmlns",
              "slot",
            ]),
            F = l([
              "accent-height",
              "accumulate",
              "additive",
              "alignment-baseline",
              "ascent",
              "attributename",
              "attributetype",
              "azimuth",
              "basefrequency",
              "baseline-shift",
              "begin",
              "bias",
              "by",
              "class",
              "clip",
              "clippathunits",
              "clip-path",
              "clip-rule",
              "color",
              "color-interpolation",
              "color-interpolation-filters",
              "color-profile",
              "color-rendering",
              "cx",
              "cy",
              "d",
              "dx",
              "dy",
              "diffuseconstant",
              "direction",
              "display",
              "divisor",
              "dur",
              "edgemode",
              "elevation",
              "end",
              "fill",
              "fill-opacity",
              "fill-rule",
              "filter",
              "filterunits",
              "flood-color",
              "flood-opacity",
              "font-family",
              "font-size",
              "font-size-adjust",
              "font-stretch",
              "font-style",
              "font-variant",
              "font-weight",
              "fx",
              "fy",
              "g1",
              "g2",
              "glyph-name",
              "glyphref",
              "gradientunits",
              "gradienttransform",
              "height",
              "href",
              "id",
              "image-rendering",
              "in",
              "in2",
              "k",
              "k1",
              "k2",
              "k3",
              "k4",
              "kerning",
              "keypoints",
              "keysplines",
              "keytimes",
              "lang",
              "lengthadjust",
              "letter-spacing",
              "kernelmatrix",
              "kernelunitlength",
              "lighting-color",
              "local",
              "marker-end",
              "marker-mid",
              "marker-start",
              "markerheight",
              "markerunits",
              "markerwidth",
              "maskcontentunits",
              "maskunits",
              "max",
              "mask",
              "media",
              "method",
              "mode",
              "min",
              "name",
              "numoctaves",
              "offset",
              "operator",
              "opacity",
              "order",
              "orient",
              "orientation",
              "origin",
              "overflow",
              "paint-order",
              "path",
              "pathlength",
              "patterncontentunits",
              "patterntransform",
              "patternunits",
              "points",
              "preservealpha",
              "preserveaspectratio",
              "primitiveunits",
              "r",
              "rx",
              "ry",
              "radius",
              "refx",
              "refy",
              "repeatcount",
              "repeatdur",
              "restart",
              "result",
              "rotate",
              "scale",
              "seed",
              "shape-rendering",
              "specularconstant",
              "specularexponent",
              "spreadmethod",
              "startoffset",
              "stddeviation",
              "stitchtiles",
              "stop-color",
              "stop-opacity",
              "stroke-dasharray",
              "stroke-dashoffset",
              "stroke-linecap",
              "stroke-linejoin",
              "stroke-miterlimit",
              "stroke-opacity",
              "stroke",
              "stroke-width",
              "style",
              "surfacescale",
              "systemlanguage",
              "tabindex",
              "targetx",
              "targety",
              "transform",
              "transform-origin",
              "text-anchor",
              "text-decoration",
              "text-rendering",
              "textlength",
              "type",
              "u1",
              "u2",
              "unicode",
              "values",
              "viewbox",
              "visibility",
              "version",
              "vert-adv-y",
              "vert-origin-x",
              "vert-origin-y",
              "width",
              "word-spacing",
              "wrap",
              "writing-mode",
              "xchannelselector",
              "ychannelselector",
              "x",
              "x1",
              "x2",
              "xmlns",
              "y",
              "y1",
              "y2",
              "z",
              "zoomandpan",
            ]),
            U = l([
              "accent",
              "accentunder",
              "align",
              "bevelled",
              "close",
              "columnsalign",
              "columnlines",
              "columnspan",
              "denomalign",
              "depth",
              "dir",
              "display",
              "displaystyle",
              "encoding",
              "fence",
              "frame",
              "height",
              "href",
              "id",
              "largeop",
              "length",
              "linethickness",
              "lspace",
              "lquote",
              "mathbackground",
              "mathcolor",
              "mathsize",
              "mathvariant",
              "maxsize",
              "minsize",
              "movablelimits",
              "notation",
              "numalign",
              "open",
              "rowalign",
              "rowlines",
              "rowspacing",
              "rowspan",
              "rspace",
              "rquote",
              "scriptlevel",
              "scriptminsize",
              "scriptsizemultiplier",
              "selection",
              "separator",
              "separators",
              "stretchy",
              "subscriptshift",
              "supscriptshift",
              "symmetric",
              "voffset",
              "width",
              "xmlns",
            ]),
            W = l([
              "xlink:href",
              "xml:id",
              "xlink:title",
              "xml:space",
              "xmlns:xlink",
            ]),
            G = p(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
            B = p(/<%[\w\W]*|[\w\W]*%>/gm),
            V = p(/\${[\w\W]*}/gm),
            q = p(/^data-[\-\w.\u00B7-\uFFFF]/),
            Z = p(/^aria-[\-\w]+$/),
            Y = p(
              /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
            ),
            $ = p(/^(?:\w+script|data):/i),
            Q = p(
              /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
            ),
            J = p(/^html$/i),
            K = function () {
              return "undefined" == typeof window ? null : window;
            };
          return (function e() {
            var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : K(),
              o = function (t) {
                return e(t);
              };
            if (
              ((o.version = "2.4.1"),
              (o.removed = []),
              !n || !n.document || 9 !== n.document.nodeType)
            )
              return (o.isSupported = !1), o;
            var i = n.document,
              a = n.document,
              c = n.DocumentFragment,
              s = n.HTMLTemplateElement,
              u = n.Node,
              p = n.Element,
              f = n.NodeFilter,
              d = n.NamedNodeMap,
              h = void 0 === d ? n.NamedNodeMap || n.MozNamedAttrMap : d,
              m = n.HTMLFormElement,
              y = n.DOMParser,
              E = n.trustedTypes,
              X = p.prototype,
              tt = C(X, "cloneNode"),
              et = C(X, "nextSibling"),
              nt = C(X, "childNodes"),
              rt = C(X, "parentNode");
            if ("function" == typeof s) {
              var ot = a.createElement("template");
              ot.content &&
                ot.content.ownerDocument &&
                (a = ot.content.ownerDocument);
            }
            var it = (function (e, n) {
                if ("object" !== t(e) || "function" != typeof e.createPolicy)
                  return null;
                var r = null,
                  o = "data-tt-policy-suffix";
                n.currentScript &&
                  n.currentScript.hasAttribute(o) &&
                  (r = n.currentScript.getAttribute(o));
                var i = "dompurify" + (r ? "#" + r : "");
                try {
                  return e.createPolicy(i, {
                    createHTML: function (t) {
                      return t;
                    },
                    createScriptURL: function (t) {
                      return t;
                    },
                  });
                } catch (t) {
                  return (
                    console.warn(
                      "TrustedTypes policy " + i + " could not be created."
                    ),
                    null
                  );
                }
              })(E, i),
              at = it ? it.createHTML("") : "",
              ct = a,
              st = ct.implementation,
              ut = ct.createNodeIterator,
              lt = ct.createDocumentFragment,
              pt = ct.getElementsByTagName,
              ft = i.importNode,
              dt = {};
            try {
              dt = L(a).documentMode ? a.documentMode : {};
            } catch (t) {}
            var ht = {};
            o.isSupported =
              "function" == typeof rt &&
              st &&
              void 0 !== st.createHTMLDocument &&
              9 !== dt;
            var mt,
              yt,
              gt = G,
              _t = B,
              vt = V,
              bt = q,
              Tt = Z,
              xt = $,
              Ot = Q,
              St = Y,
              wt = null,
              Nt = M({}, [].concat(r(P), r(A), r(z), r(I), r(D))),
              jt = null,
              Et = M({}, [].concat(r(H), r(F), r(U), r(W))),
              Mt = Object.seal(
                Object.create(null, {
                  tagNameCheck: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: null,
                  },
                  attributeNameCheck: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: null,
                  },
                  allowCustomizedBuiltInElements: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: !1,
                  },
                })
              ),
              Lt = null,
              Ct = null,
              Pt = !0,
              At = !0,
              zt = !1,
              kt = !1,
              It = !1,
              Rt = !1,
              Dt = !1,
              Ht = !1,
              Ft = !1,
              Ut = !1,
              Wt = !0,
              Gt = !1,
              Bt = !0,
              Vt = !1,
              qt = {},
              Zt = null,
              Yt = M({}, [
                "annotation-xml",
                "audio",
                "colgroup",
                "desc",
                "foreignobject",
                "head",
                "iframe",
                "math",
                "mi",
                "mn",
                "mo",
                "ms",
                "mtext",
                "noembed",
                "noframes",
                "noscript",
                "plaintext",
                "script",
                "style",
                "svg",
                "template",
                "thead",
                "title",
                "video",
                "xmp",
              ]),
              $t = null,
              Qt = M({}, ["audio", "video", "img", "source", "image", "track"]),
              Jt = null,
              Kt = M({}, [
                "alt",
                "class",
                "for",
                "id",
                "label",
                "name",
                "pattern",
                "placeholder",
                "role",
                "summary",
                "title",
                "value",
                "style",
                "xmlns",
              ]),
              Xt = "http://www.w3.org/1998/Math/MathML",
              te = "http://www.w3.org/2000/svg",
              ee = "http://www.w3.org/1999/xhtml",
              ne = ee,
              re = !1,
              oe = null,
              ie = M({}, [Xt, te, ee], T),
              ae = ["application/xhtml+xml", "text/html"],
              ce = null,
              se = a.createElement("form"),
              ue = function (t) {
                return t instanceof RegExp || t instanceof Function;
              },
              le = function (e) {
                (ce && ce === e) ||
                  ((e && "object" === t(e)) || (e = {}),
                  (e = L(e)),
                  (mt = mt =
                    -1 === ae.indexOf(e.PARSER_MEDIA_TYPE)
                      ? "text/html"
                      : e.PARSER_MEDIA_TYPE),
                  (yt = "application/xhtml+xml" === mt ? T : b),
                  (wt = "ALLOWED_TAGS" in e ? M({}, e.ALLOWED_TAGS, yt) : Nt),
                  (jt = "ALLOWED_ATTR" in e ? M({}, e.ALLOWED_ATTR, yt) : Et),
                  (oe =
                    "ALLOWED_NAMESPACES" in e
                      ? M({}, e.ALLOWED_NAMESPACES, T)
                      : ie),
                  (Jt =
                    "ADD_URI_SAFE_ATTR" in e
                      ? M(L(Kt), e.ADD_URI_SAFE_ATTR, yt)
                      : Kt),
                  ($t =
                    "ADD_DATA_URI_TAGS" in e
                      ? M(L(Qt), e.ADD_DATA_URI_TAGS, yt)
                      : Qt),
                  (Zt =
                    "FORBID_CONTENTS" in e ? M({}, e.FORBID_CONTENTS, yt) : Yt),
                  (Lt = "FORBID_TAGS" in e ? M({}, e.FORBID_TAGS, yt) : {}),
                  (Ct = "FORBID_ATTR" in e ? M({}, e.FORBID_ATTR, yt) : {}),
                  (qt = "USE_PROFILES" in e && e.USE_PROFILES),
                  (Pt = !1 !== e.ALLOW_ARIA_ATTR),
                  (At = !1 !== e.ALLOW_DATA_ATTR),
                  (zt = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
                  (kt = e.SAFE_FOR_TEMPLATES || !1),
                  (It = e.WHOLE_DOCUMENT || !1),
                  (Ht = e.RETURN_DOM || !1),
                  (Ft = e.RETURN_DOM_FRAGMENT || !1),
                  (Ut = e.RETURN_TRUSTED_TYPE || !1),
                  (Dt = e.FORCE_BODY || !1),
                  (Wt = !1 !== e.SANITIZE_DOM),
                  (Gt = e.SANITIZE_NAMED_PROPS || !1),
                  (Bt = !1 !== e.KEEP_CONTENT),
                  (Vt = e.IN_PLACE || !1),
                  (St = e.ALLOWED_URI_REGEXP || St),
                  (ne = e.NAMESPACE || ee),
                  e.CUSTOM_ELEMENT_HANDLING &&
                    ue(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                    (Mt.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                  e.CUSTOM_ELEMENT_HANDLING &&
                    ue(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                    (Mt.attributeNameCheck =
                      e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                  e.CUSTOM_ELEMENT_HANDLING &&
                    "boolean" ==
                      typeof e.CUSTOM_ELEMENT_HANDLING
                        .allowCustomizedBuiltInElements &&
                    (Mt.allowCustomizedBuiltInElements =
                      e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                  kt && (At = !1),
                  Ft && (Ht = !0),
                  qt &&
                    ((wt = M({}, r(D))),
                    (jt = []),
                    !0 === qt.html && (M(wt, P), M(jt, H)),
                    !0 === qt.svg && (M(wt, A), M(jt, F), M(jt, W)),
                    !0 === qt.svgFilters && (M(wt, z), M(jt, F), M(jt, W)),
                    !0 === qt.mathMl && (M(wt, I), M(jt, U), M(jt, W))),
                  e.ADD_TAGS &&
                    (wt === Nt && (wt = L(wt)), M(wt, e.ADD_TAGS, yt)),
                  e.ADD_ATTR &&
                    (jt === Et && (jt = L(jt)), M(jt, e.ADD_ATTR, yt)),
                  e.ADD_URI_SAFE_ATTR && M(Jt, e.ADD_URI_SAFE_ATTR, yt),
                  e.FORBID_CONTENTS &&
                    (Zt === Yt && (Zt = L(Zt)), M(Zt, e.FORBID_CONTENTS, yt)),
                  Bt && (wt["#text"] = !0),
                  It && M(wt, ["html", "head", "body"]),
                  wt.table && (M(wt, ["tbody"]), delete Lt.tbody),
                  l && l(e),
                  (ce = e));
              },
              pe = M({}, ["mi", "mo", "mn", "ms", "mtext"]),
              fe = M({}, ["foreignobject", "desc", "title", "annotation-xml"]),
              de = M({}, ["title", "style", "font", "a", "script"]),
              he = M({}, A);
            M(he, z), M(he, k);
            var me = M({}, I);
            M(me, R);
            var ye = function (t) {
                v(o.removed, { element: t });
                try {
                  t.parentNode.removeChild(t);
                } catch (e) {
                  try {
                    t.outerHTML = at;
                  } catch (e) {
                    t.remove();
                  }
                }
              },
              ge = function (t, e) {
                try {
                  v(o.removed, { attribute: e.getAttributeNode(t), from: e });
                } catch (t) {
                  v(o.removed, { attribute: null, from: e });
                }
                if ((e.removeAttribute(t), "is" === t && !jt[t]))
                  if (Ht || Ft)
                    try {
                      ye(e);
                    } catch (t) {}
                  else
                    try {
                      e.setAttribute(t, "");
                    } catch (t) {}
              },
              _e = function (t) {
                var e, n;
                if (Dt) t = "<remove></remove>" + t;
                else {
                  var r = x(t, /^[\r\n\t ]+/);
                  n = r && r[0];
                }
                "application/xhtml+xml" === mt &&
                  ne === ee &&
                  (t =
                    '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                    t +
                    "</body></html>");
                var o = it ? it.createHTML(t) : t;
                if (ne === ee)
                  try {
                    e = new y().parseFromString(o, mt);
                  } catch (t) {}
                if (!e || !e.documentElement) {
                  e = st.createDocument(ne, "template", null);
                  try {
                    e.documentElement.innerHTML = re ? "" : o;
                  } catch (t) {}
                }
                var i = e.body || e.documentElement;
                return (
                  t &&
                    n &&
                    i.insertBefore(
                      a.createTextNode(n),
                      i.childNodes[0] || null
                    ),
                  ne === ee
                    ? pt.call(e, It ? "html" : "body")[0]
                    : It
                    ? e.documentElement
                    : i
                );
              },
              ve = function (t) {
                return ut.call(
                  t.ownerDocument || t,
                  t,
                  f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT,
                  null,
                  !1
                );
              },
              be = function (e) {
                return "object" === t(u)
                  ? e instanceof u
                  : e &&
                      "object" === t(e) &&
                      "number" == typeof e.nodeType &&
                      "string" == typeof e.nodeName;
              },
              Te = function (t, e, n) {
                ht[t] &&
                  g(ht[t], function (t) {
                    t.call(o, e, n, ce);
                  });
              },
              xe = function (t) {
                var e, n;
                if (
                  (Te("beforeSanitizeElements", t, null),
                  (n = t) instanceof m &&
                    ("string" != typeof n.nodeName ||
                      "string" != typeof n.textContent ||
                      "function" != typeof n.removeChild ||
                      !(n.attributes instanceof h) ||
                      "function" != typeof n.removeAttribute ||
                      "function" != typeof n.setAttribute ||
                      "string" != typeof n.namespaceURI ||
                      "function" != typeof n.insertBefore ||
                      "function" != typeof n.hasChildNodes))
                )
                  return ye(t), !0;
                if (N(/[\u0080-\uFFFF]/, t.nodeName)) return ye(t), !0;
                var r = yt(t.nodeName);
                if (
                  (Te("uponSanitizeElement", t, {
                    tagName: r,
                    allowedTags: wt,
                  }),
                  t.hasChildNodes() &&
                    !be(t.firstElementChild) &&
                    (!be(t.content) || !be(t.content.firstElementChild)) &&
                    N(/<[/\w]/g, t.innerHTML) &&
                    N(/<[/\w]/g, t.textContent))
                )
                  return ye(t), !0;
                if ("select" === r && N(/<template/i, t.innerHTML))
                  return ye(t), !0;
                if (!wt[r] || Lt[r]) {
                  if (!Lt[r] && Se(r)) {
                    if (
                      Mt.tagNameCheck instanceof RegExp &&
                      N(Mt.tagNameCheck, r)
                    )
                      return !1;
                    if (
                      Mt.tagNameCheck instanceof Function &&
                      Mt.tagNameCheck(r)
                    )
                      return !1;
                  }
                  if (Bt && !Zt[r]) {
                    var i = rt(t) || t.parentNode,
                      a = nt(t) || t.childNodes;
                    if (a && i)
                      for (var c = a.length - 1; c >= 0; --c)
                        i.insertBefore(tt(a[c], !0), et(t));
                  }
                  return ye(t), !0;
                }
                return t instanceof p &&
                  !(function (t) {
                    var e = rt(t);
                    (e && e.tagName) ||
                      (e = { namespaceURI: ne, tagName: "template" });
                    var n = b(t.tagName),
                      r = b(e.tagName);
                    return (
                      !!oe[t.namespaceURI] &&
                      (t.namespaceURI === te
                        ? e.namespaceURI === ee
                          ? "svg" === n
                          : e.namespaceURI === Xt
                          ? "svg" === n && ("annotation-xml" === r || pe[r])
                          : Boolean(he[n])
                        : t.namespaceURI === Xt
                        ? e.namespaceURI === ee
                          ? "math" === n
                          : e.namespaceURI === te
                          ? "math" === n && fe[r]
                          : Boolean(me[n])
                        : t.namespaceURI === ee
                        ? !(e.namespaceURI === te && !fe[r]) &&
                          !(e.namespaceURI === Xt && !pe[r]) &&
                          !me[n] &&
                          (de[n] || !he[n])
                        : !(
                            "application/xhtml+xml" !== mt ||
                            !oe[t.namespaceURI]
                          ))
                    );
                  })(t)
                  ? (ye(t), !0)
                  : ("noscript" !== r && "noembed" !== r) ||
                    !N(/<\/no(script|embed)/i, t.innerHTML)
                  ? (kt &&
                      3 === t.nodeType &&
                      ((e = t.textContent),
                      (e = O(e, gt, " ")),
                      (e = O(e, _t, " ")),
                      (e = O(e, vt, " ")),
                      t.textContent !== e &&
                        (v(o.removed, { element: t.cloneNode() }),
                        (t.textContent = e))),
                    Te("afterSanitizeElements", t, null),
                    !1)
                  : (ye(t), !0);
              },
              Oe = function (t, e, n) {
                if (Wt && ("id" === e || "name" === e) && (n in a || n in se))
                  return !1;
                if (At && !Ct[e] && N(bt, e));
                else if (Pt && N(Tt, e));
                else if (!jt[e] || Ct[e]) {
                  if (
                    !(
                      (Se(t) &&
                        ((Mt.tagNameCheck instanceof RegExp &&
                          N(Mt.tagNameCheck, t)) ||
                          (Mt.tagNameCheck instanceof Function &&
                            Mt.tagNameCheck(t))) &&
                        ((Mt.attributeNameCheck instanceof RegExp &&
                          N(Mt.attributeNameCheck, e)) ||
                          (Mt.attributeNameCheck instanceof Function &&
                            Mt.attributeNameCheck(e)))) ||
                      ("is" === e &&
                        Mt.allowCustomizedBuiltInElements &&
                        ((Mt.tagNameCheck instanceof RegExp &&
                          N(Mt.tagNameCheck, n)) ||
                          (Mt.tagNameCheck instanceof Function &&
                            Mt.tagNameCheck(n))))
                    )
                  )
                    return !1;
                } else if (Jt[e]);
                else if (N(St, O(n, Ot, "")));
                else if (
                  ("src" !== e && "xlink:href" !== e && "href" !== e) ||
                  "script" === t ||
                  0 !== S(n, "data:") ||
                  !$t[t]
                )
                  if (zt && !N(xt, O(n, Ot, "")));
                  else if (n) return !1;
                return !0;
              },
              Se = function (t) {
                return t.indexOf("-") > 0;
              },
              we = function (e) {
                var n, r, i, a;
                Te("beforeSanitizeAttributes", e, null);
                var c = e.attributes;
                if (c) {
                  var s = {
                    attrName: "",
                    attrValue: "",
                    keepAttr: !0,
                    allowedAttributes: jt,
                  };
                  for (a = c.length; a--; ) {
                    var u = (n = c[a]),
                      l = u.name,
                      p = u.namespaceURI;
                    if (
                      ((r = "value" === l ? n.value : w(n.value)),
                      (i = yt(l)),
                      (s.attrName = i),
                      (s.attrValue = r),
                      (s.keepAttr = !0),
                      (s.forceKeepAttr = void 0),
                      Te("uponSanitizeAttribute", e, s),
                      (r = s.attrValue),
                      !s.forceKeepAttr && (ge(l, e), s.keepAttr))
                    )
                      if (N(/\/>/i, r)) ge(l, e);
                      else {
                        kt &&
                          ((r = O(r, gt, " ")),
                          (r = O(r, _t, " ")),
                          (r = O(r, vt, " ")));
                        var f = yt(e.nodeName);
                        if (Oe(f, i, r)) {
                          if (
                            (!Gt ||
                              ("id" !== i && "name" !== i) ||
                              (ge(l, e), (r = "user-content-" + r)),
                            it &&
                              "object" === t(E) &&
                              "function" == typeof E.getAttributeType)
                          )
                            if (p);
                            else
                              switch (E.getAttributeType(f, i)) {
                                case "TrustedHTML":
                                  r = it.createHTML(r);
                                  break;
                                case "TrustedScriptURL":
                                  r = it.createScriptURL(r);
                              }
                          try {
                            p
                              ? e.setAttributeNS(p, l, r)
                              : e.setAttribute(l, r),
                              _(o.removed);
                          } catch (t) {}
                        }
                      }
                  }
                  Te("afterSanitizeAttributes", e, null);
                }
              },
              Ne = function t(e) {
                var n,
                  r = ve(e);
                for (
                  Te("beforeSanitizeShadowDOM", e, null);
                  (n = r.nextNode());

                )
                  Te("uponSanitizeShadowNode", n, null),
                    xe(n) || (n.content instanceof c && t(n.content), we(n));
                Te("afterSanitizeShadowDOM", e, null);
              };
            return (
              (o.sanitize = function (e) {
                var r,
                  a,
                  s,
                  l,
                  p,
                  f =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                if (
                  ((re = !e) && (e = "\x3c!--\x3e"),
                  "string" != typeof e && !be(e))
                ) {
                  if ("function" != typeof e.toString)
                    throw j("toString is not a function");
                  if ("string" != typeof (e = e.toString()))
                    throw j("dirty is not a string, aborting");
                }
                if (!o.isSupported) {
                  if (
                    "object" === t(n.toStaticHTML) ||
                    "function" == typeof n.toStaticHTML
                  ) {
                    if ("string" == typeof e) return n.toStaticHTML(e);
                    if (be(e)) return n.toStaticHTML(e.outerHTML);
                  }
                  return e;
                }
                if (
                  (Rt || le(f),
                  (o.removed = []),
                  "string" == typeof e && (Vt = !1),
                  Vt)
                ) {
                  if (e.nodeName) {
                    var d = yt(e.nodeName);
                    if (!wt[d] || Lt[d])
                      throw j(
                        "root node is forbidden and cannot be sanitized in-place"
                      );
                  }
                } else if (e instanceof u)
                  (1 ===
                    (a = (r = _e("\x3c!----\x3e")).ownerDocument.importNode(
                      e,
                      !0
                    )).nodeType &&
                    "BODY" === a.nodeName) ||
                  "HTML" === a.nodeName
                    ? (r = a)
                    : r.appendChild(a);
                else {
                  if (!Ht && !kt && !It && -1 === e.indexOf("<"))
                    return it && Ut ? it.createHTML(e) : e;
                  if (!(r = _e(e))) return Ht ? null : Ut ? at : "";
                }
                r && Dt && ye(r.firstChild);
                for (var h = ve(Vt ? e : r); (s = h.nextNode()); )
                  (3 === s.nodeType && s === l) ||
                    xe(s) ||
                    (s.content instanceof c && Ne(s.content), we(s), (l = s));
                if (((l = null), Vt)) return e;
                if (Ht) {
                  if (Ft)
                    for (p = lt.call(r.ownerDocument); r.firstChild; )
                      p.appendChild(r.firstChild);
                  else p = r;
                  return jt.shadowroot && (p = ft.call(i, p, !0)), p;
                }
                var m = It ? r.outerHTML : r.innerHTML;
                return (
                  It &&
                    wt["!doctype"] &&
                    r.ownerDocument &&
                    r.ownerDocument.doctype &&
                    r.ownerDocument.doctype.name &&
                    N(J, r.ownerDocument.doctype.name) &&
                    (m =
                      "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + m),
                  kt &&
                    ((m = O(m, gt, " ")),
                    (m = O(m, _t, " ")),
                    (m = O(m, vt, " "))),
                  it && Ut ? it.createHTML(m) : m
                );
              }),
              (o.setConfig = function (t) {
                le(t), (Rt = !0);
              }),
              (o.clearConfig = function () {
                (ce = null), (Rt = !1);
              }),
              (o.isValidAttribute = function (t, e, n) {
                ce || le({});
                var r = yt(t),
                  o = yt(e);
                return Oe(r, o, n);
              }),
              (o.addHook = function (t, e) {
                "function" == typeof e && ((ht[t] = ht[t] || []), v(ht[t], e));
              }),
              (o.removeHook = function (t) {
                if (ht[t]) return _(ht[t]);
              }),
              (o.removeHooks = function (t) {
                ht[t] && (ht[t] = []);
              }),
              (o.removeAllHooks = function () {
                ht = {};
              }),
              o
            );
          })();
        })();
      },
      841: function (t) {
        t.exports = (function (t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = { i: r, l: !1, exports: {} });
            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
              n.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: r });
            }),
            (n.r = function (t) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function (t, e) {
              if ((1 & e && (t = n(t)), 8 & e)) return t;
              if (4 & e && "object" == typeof t && t && t.__esModule) return t;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: t,
                }),
                2 & e && "string" != typeof t)
              )
                for (var o in t)
                  n.d(
                    r,
                    o,
                    function (e) {
                      return t[e];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 45))
          );
        })([
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(1),
              o = n(9),
              i = n(12),
              a = n(6),
              c = n(2),
              s = (function () {
                function t(t, e, n) {
                  var r = void 0 === n ? {} : n,
                    o = r.keepSpace,
                    i = void 0 !== o && o,
                    a = r.prevTagName,
                    c = void 0 === a ? "" : a,
                    s = r.nextTagName,
                    u = void 0 === s ? "" : s,
                    l = r.prevTagStr,
                    p = void 0 === l ? "" : l,
                    f = r.nextTagStr,
                    d = void 0 === f ? "" : f,
                    h = r.parentTag,
                    m = void 0 === h ? "" : h,
                    y = r.isFirstSubTag,
                    g = void 0 === y || y,
                    _ = r.calcLeading,
                    v = void 0 !== _ && _,
                    b = r.leadingSpace,
                    T = void 0 === b ? "" : b,
                    x = r.layer,
                    O = void 0 === x ? 1 : x,
                    S = r.noWrap,
                    w = void 0 !== S && S,
                    N = r.match,
                    j = void 0 === N ? null : N,
                    E = r.indentSpace,
                    M = void 0 === E ? "" : E,
                    L = r.language,
                    C = void 0 === L ? "" : L,
                    P = r.count,
                    A = void 0 === P ? 1 : P,
                    z = r.tableColumnCount,
                    k = void 0 === z ? 0 : z,
                    I = r.noExtraLine,
                    R = void 0 !== I && I,
                    D = r.inTable,
                    H = void 0 !== D && D;
                  if (
                    ((this.tagName = e),
                    (this.rawStr = t),
                    (this.parentTag = m),
                    (this.prevTagName = c),
                    (this.nextTagName = u),
                    (this.prevTagStr = p),
                    (this.nextTagStr = d),
                    (this.isFirstSubTag = g),
                    (this.calcLeading = v),
                    (this.leadingSpace = T),
                    (this.layer = O),
                    (this.noWrap = w),
                    (this.match = j),
                    (this.indentSpace = M),
                    (this.language = C),
                    (this.count = A),
                    (this.inTable = H),
                    (this.tableColumnCount = k),
                    (this.noExtraLine = R),
                    (this.keepSpace = i),
                    !this.__detectStr__(t, this.tagName))
                  )
                    return (this.attrs = {}), void (this.innerHTML = "");
                  var F = this.__fetchTagAttrAndInnerHTML__(t),
                    U = F.attr,
                    W = F.innerHTML;
                  (this.attrs = U), (this.innerHTML = W);
                }
                return (
                  (t.prototype.__detectStr__ = function (t, e) {
                    if ("<" !== t[0])
                      return (
                        console.error(
                          "Not a valid tag, current tag name: "
                            .concat(this.tagName, ", tag content: ")
                            .concat(t)
                        ),
                        !1
                      );
                    for (
                      var n = "", r = !1, o = 1;
                      o < t.length && ">" !== t[o];
                      o++
                    )
                      !r && /(\s|\/)/.test(t[o]) && (r = !0), r || (n += t[o]);
                    return (
                      n === e ||
                      (console.warn(
                        "Tag is not match tagName, tagName in str is " +
                          n +
                          ", which tagName passed from parent is " +
                          e
                      ),
                      !1)
                    );
                  }),
                  (t.prototype.__fetchTagAttrAndInnerHTML__ = function (t) {
                    for (var e = "", n = 1; n < t.length && ">" !== t[n]; n++)
                      e += t[n];
                    for (
                      var o = t.slice(n + 1), i = "", a = -1, c = o.length - 1;
                      c >= 0;
                      c--
                    )
                      if ((i = o[c] + i).startsWith("</")) {
                        i.startsWith("</" + this.tagName + ">") && (a = c);
                        break;
                      }
                    -1 === a &&
                      (0, r.isSelfClosing)(this.tagName) &&
                      console.warn(
                        "There detect a self close tag, which name is:",
                        this.tagName
                      );
                    var s = (0, r.getTagAttributes)(e);
                    return (
                      this.tagName && delete s[this.tagName],
                      { attr: s, innerHTML: o.slice(0, a) }
                    );
                  }),
                  (t.prototype.__onlyLeadingSpace__ = function (t) {
                    t = t.trim();
                    for (var e = 0; e < t.length; e++)
                      if (t[e] !== i.SINGLE) return !1;
                    return !0;
                  }),
                  (t.prototype.__isEmpty__ = function (t) {
                    return (
                      !this.keepSpace &&
                      (("" === t && "td" !== this.tagName) ||
                        (this.calcLeading && this.__onlyLeadingSpace__(t)))
                    );
                  }),
                  (t.prototype.getValidSubTagName = function (t) {
                    return t;
                  }),
                  (t.prototype.beforeParse = function () {
                    var t = c.default.get().tagListener;
                    if (t) {
                      var e = t(this.tagName, {
                          parentTag: this.parentTag,
                          prevTagName: this.prevTagName,
                          nextTagName: this.nextTagName,
                          isFirstSubTag: this.isFirstSubTag,
                          attrs: this.attrs,
                          innerHTML: this.innerHTML,
                          language: this.language,
                          match: this.match,
                          isSelfClosing: !1,
                        }),
                        n = e.attrs,
                        r = e.language,
                        o = e.match;
                      (this.attrs = n),
                        "string" == typeof r && (this.language = r),
                        void 0 !== o && (this.match = o);
                    }
                    return "";
                  }),
                  (t.prototype.parseValidSubTag = function (t, e, n) {
                    return new ((0, r.getTagConstructor)(e))(t, e, n).exec();
                  }),
                  (t.prototype.parseOnlyString = function (t, e, n) {
                    return new o.default(t, e, n).exec();
                  }),
                  (t.prototype.afterParsed = function (t) {
                    return t;
                  }),
                  (t.prototype.slim = function (t) {
                    return this.keepSpace ? t : t.trim();
                  }),
                  (t.prototype.beforeMergeSpace = function (t) {
                    return t;
                  }),
                  (t.prototype.mergeSpace = function (t, e, n) {
                    return this.keepSpace && "pre" !== this.tagName
                      ? t.endsWith("\n")
                        ? t
                        : t + n.replace(/\n+/g, "\n")
                      : e + t + n;
                  }),
                  (t.prototype.afterMergeSpace = function (t) {
                    return t;
                  }),
                  (t.prototype.beforeReturn = function (t) {
                    return t;
                  }),
                  (t.prototype.exec = function (t, e) {
                    void 0 === t && (t = ""), void 0 === e && (e = "");
                    for (
                      var n = this.beforeParse(),
                        o = (0, r.generateGetNextValidTag)(this.innerHTML),
                        i = o(),
                        c = i[0],
                        s = i[1],
                        u = null;
                      "" !== s;

                    ) {
                      var l,
                        p = o(),
                        f = p[0],
                        d = p[1],
                        h = {
                          parentTag: this.tagName,
                          nextTagName: f,
                          nextTagStr: d,
                          prevTagName: u,
                          prevTagStr: n,
                          leadingSpace: this.leadingSpace,
                          layer: this.layer,
                          keepSpace: this.keepSpace,
                          inTable: this.inTable,
                        };
                      l =
                        null != c
                          ? this.parseValidSubTag(s, c, h)
                          : this.parseOnlyString(s, c, h);
                      var m = this.getValidSubTagName(c);
                      (c = f),
                        (s = d),
                        (null == m && this.__isEmpty__(l)) ||
                          ((u = m), (this.isFirstSubTag = !1), (n += l));
                    }
                    return (
                      (n = this.afterParsed(n)),
                      (n = this.slim(n)),
                      this.__isEmpty__(n)
                        ? ""
                        : ((n = this.beforeMergeSpace(n)),
                          !this.noExtraLine &&
                            (0, a.default)(this.tagName) &&
                            this.prevTagName &&
                            !n.startsWith("\n") &&
                            !(0, a.default)(this.prevTagName) &&
                            this.parentTag &&
                            (t = "\n\n"),
                          (n = this.mergeSpace(n, t, e)),
                          this.noWrap &&
                            !this.keepSpace &&
                            (n = n.replace(/\s+/g, " ")),
                          (n = this.afterMergeSpace(n)),
                          (n = this.beforeReturn(n)))
                    );
                  }),
                  t
                );
              })();
            e.default = s;
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.shouldRenderRawInside =
                e.isIndependentTag =
                e.clearComment =
                e.getLanguage =
                e.getTableAlign =
                e.getTagAttributes =
                e.isSelfClosing =
                e.generateGetNextValidTag =
                e.getTagConstructor =
                e.getRealTagName =
                e.unescapeStr =
                e.extraEscape =
                  void 0);
            var r = n(46);
            Object.defineProperty(e, "extraEscape", {
              enumerable: !0,
              get: function () {
                return r.extraEscape;
              },
            }),
              Object.defineProperty(e, "unescapeStr", {
                enumerable: !0,
                get: function () {
                  return r.unescapeStr;
                },
              });
            var o = n(47);
            e.generateGetNextValidTag = o.default;
            var i = n(48);
            e.getTagConstructor = i.default;
            var a = n(11);
            e.isSelfClosing = a.default;
            var c = n(51);
            e.getTagAttributes = c.default;
            var s = n(52);
            e.getLanguage = s.default;
            var u = n(53);
            e.clearComment = u.default;
            var l = n(17);
            e.getRealTagName = l.default;
            var p = n(6);
            e.isIndependentTag = p.default;
            var f = n(54);
            e.getTableAlign = f.default;
            var d = n(55);
            e.shouldRenderRawInside = d.default;
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function () {
                function t(t) {
                  var e = void 0 === t ? {} : t,
                    n = e.skipTags,
                    r = void 0 === n ? [] : n,
                    o = e.emptyTags,
                    i = void 0 === o ? [] : o,
                    a = e.ignoreTags,
                    c = void 0 === a ? [] : a,
                    s = e.aliasTags,
                    u = void 0 === s ? {} : s,
                    l = e.renderCustomTags,
                    p = void 0 === l || l,
                    f = e.tagListener,
                    d =
                      void 0 === f
                        ? function (t, e) {
                            return e;
                          }
                        : f;
                  this.options = {
                    skipTags: r,
                    emptyTags: i,
                    ignoreTags: c,
                    aliasTags: u,
                    renderCustomTags: p,
                    tagListener: d,
                  };
                }
                return (
                  (t.prototype.get = function () {
                    return this.options;
                  }),
                  (t.prototype.clear = function () {
                    this.options = {};
                  }),
                  (t.prototype.set = function (t, e) {
                    var n = this;
                    t &&
                      "[object Object]" === Object.prototype.toString.call(t) &&
                      Object.keys(t).forEach(function (r) {
                        e
                          ? (n.options[r] = t[r])
                          : (function (t, e, n) {
                              if (n in t) {
                                var r = Array.isArray(t[n]),
                                  o =
                                    "[object Object]" ===
                                    Object.prototype.toString.call(t[n]);
                                t[n] = r
                                  ? t[n].concat(e[n])
                                  : o
                                  ? Object.assign(t[n], e[n])
                                  : e[n];
                              } else t[n] = e[n];
                            })(n.options, t, r);
                      });
                  }),
                  (t.prototype.reset = function () {
                    (this.options = JSON.parse(JSON.stringify(o))),
                      (this.options.tagListener = function (t, e) {
                        return e;
                      });
                  }),
                  t
                );
              })(),
              o = {
                ignoreTags: [
                  "",
                  "style",
                  "head",
                  "!doctype",
                  "form",
                  "svg",
                  "noscript",
                  "script",
                  "meta",
                ],
                skipTags: [
                  "div",
                  "html",
                  "body",
                  "nav",
                  "section",
                  "footer",
                  "main",
                  "aside",
                  "article",
                  "header",
                ],
                emptyTags: [],
                aliasTags: {
                  figure: "p",
                  dl: "p",
                  dd: "p",
                  dt: "p",
                  figcaption: "p",
                },
                renderCustomTags: !0,
              },
              i = new r();
            i.reset(), (e.default = i);
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n) {
                void 0 === n && (n = "h1");
                var r = t.call(this, e, n) || this;
                return (r.match = "#"), r;
              }
              return (
                r(e, t),
                (e.prototype.beforeMergeSpace = function (t) {
                  return this.match + " " + t;
                }),
                (e.prototype.exec = function (e, n) {
                  return (
                    e || (e = "\n"),
                    n || (n = "\n"),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(0).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(1),
              o = n(2),
              i = (function () {
                function t(t, e, n) {
                  var r = void 0 === n ? {} : n,
                    o = r.parentTag,
                    i = void 0 === o ? "" : o,
                    a = r.leadingSpace,
                    c = void 0 === a ? "" : a,
                    s = r.layer,
                    u = void 0 === s ? 1 : s,
                    l = r.isFirstSubTag,
                    p = void 0 !== l && l,
                    f = r.inTable,
                    d = void 0 !== f && f,
                    h = r.match,
                    m = void 0 === h ? null : h,
                    y = r.prevTagName,
                    g = void 0 === y ? "" : y,
                    _ = r.nextTagName,
                    v = void 0 === _ ? "" : _;
                  if (
                    ((this.tagName = e),
                    (this.rawStr = t),
                    (this.parentTag = i),
                    (this.isFirstSubTag = p),
                    (this.prevTagName = g),
                    (this.nextTagName = v),
                    (this.leadingSpace = c),
                    (this.layer = u),
                    (this.innerHTML = ""),
                    (this.match = m),
                    (this.inTable = d),
                    this.__detectStr__(t, this.tagName))
                  ) {
                    var b = this.__fetchTagAttr__(t).attr;
                    this.attrs = b;
                  } else this.attrs = {};
                }
                return (
                  (t.prototype.__detectStr__ = function (t, e) {
                    if ("<" !== t[0])
                      return (
                        console.error(
                          "Not a valid tag, current tag name: "
                            .concat(this.tagName, ", tag content: ")
                            .concat(t)
                        ),
                        !1
                      );
                    for (
                      var n = "", r = !1, o = 1;
                      o < t.length && ">" !== t[o];
                      o++
                    )
                      !r && /(\s|\/)/.test(t[o]) && (r = !0), r || (n += t[o]);
                    return (
                      n === e ||
                      (console.warn(
                        "Tag is not match tagName, tagName in str is " +
                          n +
                          ", which tagName passed from parent is " +
                          e
                      ),
                      !1)
                    );
                  }),
                  (t.prototype.__fetchTagAttr__ = function (t) {
                    for (var e = "", n = 1; n < t.length && ">" !== t[n]; n++)
                      e += t[n];
                    return { attr: (0, r.getTagAttributes)(e) };
                  }),
                  (t.prototype.beforeParse = function () {
                    var t = o.default.get().tagListener;
                    if (t) {
                      var e = t(this.tagName, {
                          parentTag: this.parentTag,
                          prevTagName: this.prevTagName,
                          nextTagName: this.nextTagName,
                          isFirstSubTag: this.isFirstSubTag,
                          attrs: this.attrs,
                          innerHTML: this.innerHTML,
                          match: this.match,
                          isSelfClosing: !0,
                        }),
                        n = e.attrs,
                        r = e.match;
                      (this.attrs = n), (this.match = r);
                    }
                    return "";
                  }),
                  (t.prototype.beforeMergeSpace = function (t) {
                    return t;
                  }),
                  (t.prototype.afterMergeSpace = function (t) {
                    return t;
                  }),
                  (t.prototype.beforeReturn = function (t) {
                    return t;
                  }),
                  (t.prototype.exec = function (t, e) {
                    void 0 === t && (t = ""), void 0 === e && (e = "");
                    var n = this.beforeParse();
                    return (
                      (n = t + (n = this.beforeMergeSpace(n)) + e),
                      (n = this.afterMergeSpace(n)),
                      this.beforeReturn(n)
                    );
                  }),
                  t
                );
              })();
            e.default = i;
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function () {
              function t() {}
              return (
                (t.prototype.exec = function () {
                  return "";
                }),
                t
              );
            })();
            e.default = r;
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(17),
              o = {
                html: !0,
                body: !0,
                p: !0,
                div: !0,
                pre: !0,
                section: !0,
                blockquote: !0,
                aside: !0,
                li: !0,
                ul: !0,
                ol: !0,
                form: !0,
                hr: !0,
                h1: !0,
                h2: !0,
                h3: !0,
                h4: !0,
                h5: !0,
                h6: !0,
                dl: !0,
                dd: !0,
                dt: !0,
                br: !0,
              };
            e.default = function (t) {
              if (!t) return !1;
              var e = (0, r.default)(t);
              return !!e && !!o[e];
            };
          },
          function (t, e, n) {
            "use strict";
            var r =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    if ("function" != typeof n && null !== n)
                      throw new TypeError(
                        "Class extends value " +
                          String(n) +
                          " is not a constructor or null"
                      );
                    function r() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((r.prototype = n.prototype), new r()));
                  };
                })(),
              o =
                (this && this.__assign) ||
                function () {
                  return (o =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, o) &&
                            (t[o] = e[o]);
                      return t;
                    }).apply(this, arguments);
                };
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.__EmptySelfClose__ = e.__Empty__ = void 0);
            var i = n(0),
              a = n(4),
              c = (function (t) {
                function e(e, n, r) {
                  return (
                    void 0 === n && (n = "__empty__"),
                    t.call(this, e, n, r) || this
                  );
                }
                return (
                  r(e, t),
                  (e.prototype.slim = function (t) {
                    return t;
                  }),
                  (e.prototype.parseValidSubTag = function (t, n, r) {
                    return new e(t, n, o({}, r)).exec();
                  }),
                  (e.prototype.parseOnlyString = function (t, e, n) {
                    return t;
                  }),
                  (e.prototype.exec = function () {
                    return t.prototype.exec.call(this, "", "");
                  }),
                  e
                );
              })(i.default);
            e.__Empty__ = c;
            var s = (function (t) {
              function e(e, n) {
                void 0 === n && (n = "__emptyselfclose__");
                var r = t.call(this, e, n) || this;
                return (r.tagName = n), r;
              }
              return (
                r(e, t),
                (e.prototype.exec = function () {
                  return t.prototype.exec.call(this, "", "");
                }),
                e
              );
            })(a.default);
            e.__EmptySelfClose__ = s;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.__SkipSelfClose__ = e.__Skip__ = void 0);
            var o = n(0),
              i = n(4),
              a = n(1),
              c = (function (t) {
                function e(e, n, r) {
                  void 0 === n && (n = "__skip__");
                  var o = t.call(this, e, n, r) || this;
                  return (o.noNeedWrap = ["td", "th"]), o;
                }
                return (
                  r(e, t),
                  (e.prototype.exec = function () {
                    var e =
                        (0, a.isIndependentTag)(
                          (0, a.getRealTagName)(this.tagName)
                        ) &&
                        (!this.parentTag ||
                          !this.noNeedWrap.includes(this.parentTag)),
                      n = e ? "\n" : "",
                      r = e ? "\n" : "";
                    return t.prototype.exec.call(this, n, r);
                  }),
                  e
                );
              })(o.default);
            e.__Skip__ = c;
            var s = (function (t) {
              function e(e, n, r) {
                return (
                  void 0 === n && (n = "__skipselfclose__"),
                  t.call(this, e, n, r) || this
                );
              }
              return (
                r(e, t),
                (e.prototype.exec = function () {
                  return "";
                }),
                e
              );
            })(i.default);
            e.__SkipSelfClose__ = s;
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(1),
              o = n(6),
              i = (function () {
                function t(t, e, n) {
                  void 0 === e && (e = "__nomatch__");
                  var r = void 0 === n ? {} : n,
                    o = r.keepSpace,
                    i = void 0 !== o && o,
                    a = r.prevTagName,
                    c = void 0 === a ? "" : a,
                    s = r.nextTagName,
                    u = void 0 === s ? "" : s,
                    l = r.parentTag,
                    p = void 0 === l ? "" : l,
                    f = r.calcLeading,
                    d = void 0 !== f && f,
                    h = r.layer,
                    m = void 0 === h ? 1 : h,
                    y = r.leadingSpace,
                    g = void 0 === y ? "" : y,
                    _ = r.inTable,
                    v = void 0 !== _ && _;
                  (this.tagName = e),
                    (this.nextTagName = u),
                    (this.prevTagName = c),
                    (this.parentTag = p),
                    (this.keepSpace = i),
                    (this.calcLeading = d),
                    (this.leadingSpace = g),
                    (this.layer = m),
                    (this.rawStr = t),
                    (this.inTable = v);
                }
                return (
                  (t.prototype.slim = function (t) {
                    if (this.keepSpace) return t;
                    var e = t.replace(/\s+/g, " ");
                    return (
                      (0, o.default)(this.prevTagName) && (e = e.trimLeft()),
                      (0, o.default)(this.nextTagName) && (e = e.trimRight()),
                      e
                    );
                  }),
                  (t.prototype.beforeReturn = function (t) {
                    if (this.keepSpace) return t;
                    if (this.calcLeading)
                      return this.leadingSpace + (0, r.extraEscape)(t);
                    var e = (0, r.extraEscape)(t);
                    return this.inTable && (e = e.replace(/\|/g, "\\|")), e;
                  }),
                  (t.prototype.exec = function () {
                    var t = this.rawStr;
                    return (t = this.slim(t)), this.beforeReturn(t);
                  }),
                  t
                );
              })();
            e.default = i;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.__NoMatchSelfClose__ = e.__NoMatch__ = void 0);
            var o = n(0),
              i = n(4),
              a = (function (t) {
                function e(e, n) {
                  return (
                    void 0 === n && (n = "__nomatch__"),
                    t.call(this, e, n) || this
                  );
                }
                return (
                  r(e, t),
                  (e.prototype.beforeMergeSpace = function (t) {
                    return "<"
                      .concat(this.tagName, ">")
                      .concat(t, "</")
                      .concat(this.tagName, ">");
                  }),
                  (e.prototype.exec = function () {
                    return t.prototype.exec.call(this, "", "");
                  }),
                  e
                );
              })(o.default);
            e.__NoMatch__ = a;
            var c = (function (t) {
              function e(e, n) {
                return (
                  void 0 === n && (n = "__nomatchselfclose__"),
                  t.call(this, e, n) || this
                );
              }
              return (
                r(e, t),
                (e.prototype.exec = function () {
                  return "<".concat(this.tagName, " />");
                }),
                e
              );
            })(i.default);
            e.__NoMatchSelfClose__ = c;
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = {
              img: !0,
              hr: !0,
              input: !0,
              br: !0,
              meta: !0,
              link: !0,
              "!doctype": !0,
              base: !0,
              col: !0,
              area: !0,
              param: !0,
              object: !0,
              embed: !0,
              keygen: !0,
              source: !0,
            };
            e.default = function (t) {
              return null != t && !!r[t.toLowerCase()];
            };
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.TRIPLE = e.DOUBLE = e.SINGLE = void 0),
              (e.SINGLE = "☈"),
              (e.DOUBLE = "☈☈"),
              (e.TRIPLE = "☈☈☈");
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n, r) {
                void 0 === n && (n = "strong");
                var o = t.call(this, e, n, r) || this;
                return (o.layer = 1), (o.match = o.match || "**"), o;
              }
              return (
                r(e, t),
                (e.prototype.beforeMergeSpace = function (t) {
                  return this.match + t + this.match;
                }),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = ""),
                    void 0 === n && (n = ""),
                    null != this.match &&
                      this.prevTagStr &&
                      !this.prevTagStr.endsWith("\\" + this.match[0]) &&
                      this.prevTagStr.endsWith(this.match[0]) &&
                      (e = " "),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(0).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n) {
                void 0 === n && (n = "del");
                var r = t.call(this, e, n) || this;
                return (r.match = r.match || "~~"), r;
              }
              return (
                r(e, t),
                (e.prototype.beforeMergeSpace = function (t) {
                  return this.match + t + this.match;
                }),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = ""),
                    void 0 === n && (n = ""),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(0).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n, r) {
                void 0 === n && (n = "em");
                var o = t.call(this, e, n, r) || this;
                return (o.match = o.match || "*"), o;
              }
              return (
                r(e, t),
                (e.prototype.beforeMergeSpace = function (t) {
                  return this.match + t + this.match;
                }),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = ""),
                    void 0 === n && (n = ""),
                    "strong" === this.parentTag && this.nextTagStr && (n = " "),
                    null != this.match &&
                      this.prevTagStr &&
                      !this.prevTagStr.endsWith("\\" + this.match) &&
                      this.prevTagStr.endsWith(this.match) &&
                      (e = " "),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(0).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n, r) {
                void 0 === n && (n = "th");
                var o = t.call(this, e, n, r) || this;
                return (o.tagName = n), o;
              }
              return (
                r(e, t),
                (e.prototype.beforeMergeSpace = function (t) {
                  return t + "|";
                }),
                (e.prototype.parseValidSubTag = function (e, n, r) {
                  return "ul" === n ||
                    "ol" === n ||
                    "table" === n ||
                    "pre" === n
                    ? e.replace(/([\n\r])/g, "")
                    : t.prototype.parseValidSubTag.call(this, e, n, r);
                }),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = ""),
                    void 0 === n && (n = ""),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(0).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(2);
            e.default = function (t) {
              if (!t) return t;
              var e = r.default.get().aliasTags;
              return null != (null == e ? void 0 : e[t]) ? e[t] : t;
            };
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n, r) {
                return void 0 === n && (n = "a"), t.call(this, e, n, r) || this;
              }
              return (
                r(e, t),
                (e.prototype.beforeMergeSpace = function (t) {
                  var e = this.attrs,
                    n = e.href,
                    r = e.title,
                    o = n || "";
                  return r
                    ? "[".concat(t, "](").concat(o, ' "').concat(r, '")')
                    : "[".concat(t, "](").concat(o, ")");
                }),
                (e.prototype.parseOnlyString = function (e, n, r) {
                  return "tbody" === this.parentTag ||
                    "thead" === this.parentTag
                    ? e
                    : t.prototype.parseOnlyString.call(this, e, n, r);
                }),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = ""),
                    void 0 === n && (n = ""),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(0).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n, r) {
                return void 0 === n && (n = "b"), t.call(this, e, n, r) || this;
              }
              return (
                r(e, t),
                (e.prototype.exec = function (e, n) {
                  return t.prototype.exec.call(this, e, n);
                }),
                e
              );
            })(n(13).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    if ("function" != typeof n && null !== n)
                      throw new TypeError(
                        "Class extends value " +
                          String(n) +
                          " is not a constructor or null"
                      );
                    function r() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((r.prototype = n.prototype), new r()));
                  };
                })(),
              o =
                (this && this.__assign) ||
                function () {
                  return (o =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, o) &&
                            (t[o] = e[o]);
                      return t;
                    }).apply(this, arguments);
                };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = n(6),
              a = n(0),
              c = n(1),
              s = (function (t) {
                function e(e, n, r) {
                  void 0 === n && (n = "blockquote");
                  var o = t.call(this, e, n, r) || this;
                  return (
                    (o.match = o.match || ">"),
                    (o.fillPerLine = o.fillPerLine.bind(o)),
                    o
                  );
                }
                return (
                  r(e, t),
                  (e.prototype.beforeMergeSpace = function (t) {
                    if ("" === t.trim()) return "";
                    var e = this.match + " " + t;
                    return this.calcLeading ? this.leadingSpace + e : e;
                  }),
                  (e.prototype.afterMergeSpace = function (t) {
                    for (
                      var e = this, n = t.split("\n"), r = n.length - 1;
                      r >= 0;
                      r--
                    )
                      r < n.length - 1 &&
                        ">" === n[r].trim() &&
                        ">" === n[r + 1].trim() &&
                        n.splice(r, 1);
                    return (n = n.map(function (t) {
                      return "" === t ? "" : e.fillPerLine(t);
                    })).join("\n");
                  }),
                  (e.prototype.beforeReturn = function (t) {
                    return t.replace("\n\n", "\n");
                  }),
                  (e.prototype.fillPerLine = function (t) {
                    var e = ">";
                    if (
                      (this.calcLeading && (e = this.leadingSpace + ">"),
                      !t.startsWith(e))
                    ) {
                      var n = this.match + " " + t;
                      return this.calcLeading ? this.leadingSpace + n : n;
                    }
                    return t;
                  }),
                  (e.prototype.parseValidSubTag = function (t, e, n) {
                    var r = (
                        "blockquote" === e
                          ? new ((0, c.getTagConstructor)(e))(
                              t,
                              e,
                              o(o({}, n), {
                                calcLeading: this.calcLeading,
                                match: this.match + ">",
                                noExtraLine: !0,
                              })
                            )
                          : new ((0, c.getTagConstructor)(e))(
                              t,
                              e,
                              o(o({}, n), { noExtraLine: !0 })
                            )
                      ).exec(),
                      a = "";
                    this.calcLeading && (a = this.leadingSpace);
                    var s =
                        (0, i.default)(n.prevTagName) && "br" !== n.prevTagName,
                      u =
                        (0, i.default)(n.nextTagName) && "br" !== n.nextTagName,
                      l = (0, i.default)(e) && "br" !== e;
                    return this.isFirstSubTag
                      ? r.trimLeft().replace(a, "")
                      : l
                      ? ((r = a + this.match + r),
                        s || (r = "\n" + r),
                        !u &&
                          n.nextTagStr &&
                          n.nextTagStr.trim() &&
                          (r += this.match + "\n"),
                        r)
                      : s
                      ? a + this.match + "\n" + r
                      : r;
                  }),
                  (e.prototype.exec = function (e, n) {
                    return (
                      void 0 === e && (e = "\n"),
                      void 0 === n && (n = "\n"),
                      t.prototype.exec.call(this, e, n)
                    );
                  }),
                  e
                );
              })(a.default);
            e.default = s;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n, r) {
                return void 0 === n && (n = "b"), t.call(this, e, n, r) || this;
              }
              return (
                r(e, t),
                (e.prototype.exec = function (t, e) {
                  return (
                    void 0 === e && (e = "\n"), this.inTable ? "" : "  " + e
                  );
                }),
                e
              );
            })(n(4).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    if ("function" != typeof n && null !== n)
                      throw new TypeError(
                        "Class extends value " +
                          String(n) +
                          " is not a constructor or null"
                      );
                    function r() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((r.prototype = n.prototype), new r()));
                  };
                })(),
              o =
                (this && this.__assign) ||
                function () {
                  return (o =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, o) &&
                            (t[o] = e[o]);
                      return t;
                    }).apply(this, arguments);
                };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = n(0),
              a = n(1),
              c = (function (t) {
                function e(e, n, r) {
                  void 0 === n && (n = "code");
                  var o = t.call(this, e, n, r) || this;
                  return (
                    (o.match = null == o.match ? "`" : o.match),
                    (o.noWrap = "`" === o.match),
                    (o.layer = 1),
                    o
                  );
                }
                return (
                  r(e, t),
                  (e.prototype.beforeMergeSpace = function (t) {
                    var e, n;
                    return (
                      "" !== this.match && "`" !== this.match
                        ? ((e = this.match + " "), (n = " " + this.match))
                        : ((e = this.match), (n = this.match)),
                      e + t + n
                    );
                  }),
                  (e.prototype.parseValidSubTag = function (t, e, n) {
                    return "pre" === e
                      ? new ((0, a.getTagConstructor)(e))(
                          t,
                          e,
                          o(o({}, n), { language: "", match: "" })
                        ).exec("", "\n")
                      : new ((0, a.getTagConstructor)(e))(
                          t,
                          e,
                          o(o({}, n), {
                            keepSpace: this.keepSpace,
                            noWrap: this.noWrap,
                          })
                        ).exec("", "");
                  }),
                  (e.prototype.parseOnlyString = function (t) {
                    if ("" !== this.match && t) {
                      var e = 1;
                      (t.startsWith("`") || t.endsWith("`")) &&
                        ((e = 2),
                        (t.startsWith("``") || t.endsWith("``")) && (e = 3)),
                        (this.match = "`".repeat(e));
                    }
                    return (0, a.unescapeStr)(t);
                  }),
                  (e.prototype.slim = function (t) {
                    return this.keepSpace ? t : t.trim();
                  }),
                  (e.prototype.exec = function (e, n) {
                    return (
                      void 0 === e && (e = ""),
                      void 0 === n && (n = ""),
                      t.prototype.exec.call(this, e, n)
                    );
                  }),
                  e
                );
              })(i.default);
            e.default = c;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n) {
                void 0 === n && (n = "h1");
                var r = t.call(this, e, n) || this;
                return (r.match = "#"), r;
              }
              return (
                r(e, t),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = "\n"),
                    void 0 === n && (n = "\n"),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(3).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n) {
                void 0 === n && (n = "h2");
                var r = t.call(this, e, n) || this;
                return (r.match = "##"), r;
              }
              return (
                r(e, t),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = "\n"),
                    void 0 === n && (n = "\n"),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(3).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n) {
                void 0 === n && (n = "h3");
                var r = t.call(this, e, n) || this;
                return (r.match = "###"), r;
              }
              return (
                r(e, t),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = "\n"),
                    void 0 === n && (n = "\n"),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(3).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n) {
                void 0 === n && (n = "h4");
                var r = t.call(this, e, n) || this;
                return (r.match = "####"), r;
              }
              return (
                r(e, t),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = "\n"),
                    void 0 === n && (n = "\n"),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(3).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n) {
                void 0 === n && (n = "h5");
                var r = t.call(this, e, n) || this;
                return (r.match = "#####"), r;
              }
              return (
                r(e, t),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = "\n"),
                    void 0 === n && (n = "\n"),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(3).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n) {
                void 0 === n && (n = "h6");
                var r = t.call(this, e, n) || this;
                return (r.match = "######"), r;
              }
              return (
                r(e, t),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = "\n"),
                    void 0 === n && (n = "\n"),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(3).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n, r) {
                void 0 === n && (n = "hr");
                var o = t.call(this, e, n, r) || this;
                return (o.match = "---"), o;
              }
              return (
                r(e, t),
                (e.prototype.beforeMergeSpace = function () {
                  return this.leadingSpace + this.match;
                }),
                (e.prototype.beforeReturn = function (t) {
                  return (
                    t
                      .replace(/^(?:\n\s*)/, "\n\n")
                      .replace(/(?:\n\s*)$/, "\n\n"),
                    t
                  );
                }),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = "\n"),
                    void 0 === n && (n = "\n"),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(4).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n, r) {
                return void 0 === n && (n = "i"), t.call(this, e, n, r) || this;
              }
              return (
                r(e, t),
                (e.prototype.exec = function (e, n) {
                  return t.prototype.exec.call(this, e, n);
                }),
                e
              );
            })(n(15).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n, r) {
                return (
                  void 0 === n && (n = "img"), t.call(this, e, n, r) || this
                );
              }
              return (
                r(e, t),
                (e.prototype.beforeMergeSpace = function () {
                  var t = this.attrs,
                    e = t.src,
                    n = t.alt;
                  return (
                    n || (n = ""),
                    e || (e = ""),
                    "![".concat(n, "](").concat(e, ")")
                  );
                }),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = ""),
                    void 0 === n && (n = ""),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(4).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n, r) {
                return (
                  void 0 === n && (n = "input"), t.call(this, e, n, r) || this
                );
              }
              return (
                r(e, t),
                (e.prototype.beforeMergeSpace = function () {
                  var t = this.attrs,
                    e = t.type,
                    n = t.checked;
                  return "li" === this.parentTag && "checkbox" === e
                    ? null != n
                      ? "[x] "
                      : "[ ] "
                    : "";
                }),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = ""),
                    void 0 === n && (n = ""),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(4).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    if ("function" != typeof n && null !== n)
                      throw new TypeError(
                        "Class extends value " +
                          String(n) +
                          " is not a constructor or null"
                      );
                    function r() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((r.prototype = n.prototype), new r()));
                  };
                })(),
              o =
                (this && this.__assign) ||
                function () {
                  return (o =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, o) &&
                            (t[o] = e[o]);
                      return t;
                    }).apply(this, arguments);
                };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = n(0),
              a = n(1),
              c = n(6),
              s = n(12),
              u = (function (t) {
                function e(e, n, r) {
                  void 0 === n && (n = "li");
                  var o = t.call(this, e, n, r) || this;
                  return (o.match = o.match || "*"), (o.extraGap = ""), o;
                }
                return (
                  r(e, t),
                  (e.prototype.beforeMergeSpace = function (t) {
                    return (
                      this.extraGap + this.leadingSpace + this.match + " " + t
                    );
                  }),
                  (e.prototype.__calcNextLeading__ = function () {
                    var t, e, n;
                    return 1 ===
                      (null === (t = this.match) || void 0 === t
                        ? void 0
                        : t.length)
                      ? s.DOUBLE
                      : 2 ===
                        (null === (e = this.match) || void 0 === e
                          ? void 0
                          : e.length)
                      ? s.TRIPLE
                      : 3 ===
                        (null === (n = this.match) || void 0 === n
                          ? void 0
                          : n.length)
                      ? s.DOUBLE
                      : s.TRIPLE + s.DOUBLE;
                  }),
                  (e.prototype.parseValidSubTag = function (t, e, n) {
                    var r = (0, a.getTagConstructor)(e),
                      i = this.__calcNextLeading__(),
                      c = new r(
                        t,
                        e,
                        o(o({}, n), {
                          calcLeading: !0,
                          leadingSpace: this.leadingSpace + i,
                          layer: this.layer + 1,
                        })
                      ).exec();
                    return (
                      "p" === e && (this.extraGap = "\n"),
                      this.isFirstSubTag
                        ? c.trimLeft().replace(this.leadingSpace + i, "")
                        : c
                    );
                  }),
                  (e.prototype.parseOnlyString = function (e, n, r) {
                    var i = !1;
                    (0, c.default)(r.prevTagName) && (i = !0);
                    var a = this.__calcNextLeading__(),
                      s = t.prototype.parseOnlyString.call(
                        this,
                        e,
                        n,
                        o(o({}, r), {
                          calcLeading: i,
                          leadingSpace: this.leadingSpace + a,
                          layer: this.layer + 1,
                        })
                      );
                    return this.isFirstSubTag
                      ? s.replace(this.leadingSpace + a, "")
                      : s;
                  }),
                  (e.prototype.beforeReturn = function (e) {
                    return t.prototype.beforeReturn.call(this, e);
                  }),
                  (e.prototype.exec = function (e, n) {
                    return (
                      void 0 === e && (e = "\n"),
                      void 0 === n && (n = "\n"),
                      t.prototype.exec.call(this, e, n)
                    );
                  }),
                  e
                );
              })(i.default);
            e.default = u;
          },
          function (t, e, n) {
            "use strict";
            var r =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    if ("function" != typeof n && null !== n)
                      throw new TypeError(
                        "Class extends value " +
                          String(n) +
                          " is not a constructor or null"
                      );
                    function r() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((r.prototype = n.prototype), new r()));
                  };
                })(),
              o =
                (this && this.__assign) ||
                function () {
                  return (o =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, o) &&
                            (t[o] = e[o]);
                      return t;
                    }).apply(this, arguments);
                };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = n(0),
              a = n(5),
              c = n(1),
              s = n(2),
              u = (function (t) {
                function e(e, n, r) {
                  void 0 === n && (n = "ol");
                  var o,
                    i = this;
                  i = t.call(this, e, n, r) || this;
                  var a = parseInt(
                    null === (o = null == i ? void 0 : i.attrs) || void 0 === o
                      ? void 0
                      : o.start,
                    10
                  );
                  return (i.count = isNaN(a) ? 1 : a), i;
                }
                return (
                  r(e, t),
                  (e.prototype.__isValidSubTag__ = function (t) {
                    if (!t) return !1;
                    var e = s.default.get().aliasTags,
                      n = (0, c.getTagConstructor)(t);
                    return (
                      "li" === t ||
                      "li" == (null == e ? void 0 : e[t]) ||
                      n === a.default
                    );
                  }),
                  (e.prototype.getValidSubTagName = function (t) {
                    return t && this.__isValidSubTag__(t) ? t : null;
                  }),
                  (e.prototype.parseValidSubTag = function (t, e, n) {
                    var r = (0, c.getTagConstructor)(e);
                    if (this.__isValidSubTag__(e)) {
                      var i = this.count + ".",
                        a = new r(
                          t,
                          e,
                          o(o({}, n), {
                            calcLeading: !0,
                            leadingSpace: this.leadingSpace,
                            layer: this.layer,
                            match: i,
                          })
                        );
                      return this.count++, a.exec("", "\n");
                    }
                    return (
                      console.error(
                        "Should not have tags except <li> inside ol, current tag is " +
                          e +
                          ", current tagStr is" +
                          t
                      ),
                      ""
                    );
                  }),
                  (e.prototype.parseOnlyString = function () {
                    return "";
                  }),
                  (e.prototype.exec = function (e, n) {
                    return (
                      void 0 === e && (e = "\n"),
                      void 0 === n && (n = "\n"),
                      t.prototype.exec.call(this, e, n)
                    );
                  }),
                  e
                );
              })(i.default);
            e.default = u;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n, r) {
                return void 0 === n && (n = "p"), t.call(this, e, n, r) || this;
              }
              return (
                r(e, t),
                (e.prototype.beforeMergeSpace = function (t) {
                  return this.calcLeading ? this.leadingSpace + t : t;
                }),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = "\n"),
                    void 0 === n && (n = "\n"),
                    this.prevTagName ||
                      !this.prevTagStr ||
                      this.prevTagStr.endsWith("\n") ||
                      (e = "\n\n"),
                    this.nextTagName ||
                      !this.nextTagStr ||
                      this.nextTagStr.startsWith("\n") ||
                      (n = "\n\n"),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(0).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    if ("function" != typeof n && null !== n)
                      throw new TypeError(
                        "Class extends value " +
                          String(n) +
                          " is not a constructor or null"
                      );
                    function r() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((r.prototype = n.prototype), new r()));
                  };
                })(),
              o =
                (this && this.__assign) ||
                function () {
                  return (o =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, o) &&
                            (t[o] = e[o]);
                      return t;
                    }).apply(this, arguments);
                };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = n(0),
              a = n(7),
              c = n(1),
              s = n(12),
              u = (function (t) {
                function e(e, n, r) {
                  void 0 === n && (n = "pre");
                  var o = t.call(this, e, n, r) || this;
                  return (
                    (o.indentSpace = s.DOUBLE + s.DOUBLE),
                    (o.isIndent = o.innerHTML.includes("```")),
                    (o.match = o.isIndent ? "" : "```"),
                    (o.language = o.language || (0, c.getLanguage)(e)),
                    (o.keepSpace = !0),
                    o
                  );
                }
                return (
                  r(e, t),
                  (e.prototype.beforeMergeSpace = function (t) {
                    var e =
                        this.isIndent || "code" === this.parentTag
                          ? ""
                          : this.match + this.language + "\n",
                      n = "";
                    return (
                      t.endsWith("\n") || (n = "\n"),
                      e +
                        t +
                        (this.isIndent || "code" === this.parentTag
                          ? ""
                          : n + this.match)
                    );
                  }),
                  (e.prototype.fillPerLine = function (t) {
                    var e = "";
                    return (
                      this.calcLeading && (e = this.leadingSpace),
                      this.isIndent ? e + this.indentSpace + t : e + t
                    );
                  }),
                  (e.prototype.afterMergeSpace = function (t) {
                    var e = this,
                      n = t.split("\n");
                    return (n = n.map(function (t) {
                      return "" === t ? "" : e.fillPerLine(t);
                    })).join("\n");
                  }),
                  (e.prototype.parseValidSubTag = function (t, e, n) {
                    return "code" === e
                      ? new ((0, c.getTagConstructor)(e))(
                          t,
                          e,
                          o(o({}, n), {
                            match: "",
                            language: this.language,
                            keepSpace: !0,
                          })
                        ).exec("", "")
                      : ((0, c.isSelfClosing)(e)
                          ? new a.__EmptySelfClose__(t, e)
                          : new a.__Empty__(
                              t,
                              e,
                              o(o({}, n), { keepSpace: !0 })
                            )
                        ).exec();
                  }),
                  (e.prototype.parseOnlyString = function (t) {
                    return t;
                  }),
                  (e.prototype.slim = function (t) {
                    return t;
                  }),
                  (e.prototype.exec = function (e, n) {
                    return (
                      void 0 === e && (e = "\n"),
                      void 0 === n && (n = "\n"),
                      t.prototype.exec.call(this, e, n)
                    );
                  }),
                  e
                );
              })(i.default);
            e.default = u;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n) {
                return void 0 === n && (n = "s"), t.call(this, e, n) || this;
              }
              return (
                r(e, t),
                (e.prototype.exec = function (e, n) {
                  return t.prototype.exec.call(this, e, n);
                }),
                e
              );
            })(n(14).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n, r) {
                return (
                  void 0 === n && (n = "span"), t.call(this, e, n, r) || this
                );
              }
              return (
                r(e, t),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = ""),
                    void 0 === n && (n = ""),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(0).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    if ("function" != typeof n && null !== n)
                      throw new TypeError(
                        "Class extends value " +
                          String(n) +
                          " is not a constructor or null"
                      );
                    function r() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((r.prototype = n.prototype), new r()));
                  };
                })(),
              o =
                (this && this.__assign) ||
                function () {
                  return (o =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, o) &&
                            (t[o] = e[o]);
                      return t;
                    }).apply(this, arguments);
                };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = n(0),
              a = n(1),
              c = (function (t) {
                function e(e, n, r) {
                  void 0 === n && (n = "table");
                  var o = t.call(this, e, n, r) || this;
                  return (
                    (o.exist_thead = !1),
                    (o.exist_tbody = !1),
                    (o.empty_tbody = !0),
                    (o.tableColumnCount = (function (t) {
                      for (
                        var e = "", n = 0;
                        n < t.length && !e.endsWith("</tr>");
                        n++
                      )
                        e += t[n];
                      return Math.max(
                        e.split("</td>").length - 1,
                        e.split("</th>").length - 1
                      );
                    })(o.innerHTML)),
                    o
                  );
                }
                return (
                  r(e, t),
                  (e.prototype.parseValidSubTag = function (t, e, n) {
                    return (
                      "thead" === e && (this.exist_thead = !0),
                      "tbody" === e &&
                        ((this.exist_tbody = !0), (this.empty_tbody = !1)),
                      "tr" === e && (this.empty_tbody = !1),
                      new ((0, a.getTagConstructor)(e))(
                        t,
                        e,
                        o(o({}, n), {
                          tableColumnCount: this.tableColumnCount,
                          inTable: !0,
                        })
                      ).exec("", "\n")
                    );
                  }),
                  (e.prototype.parseOnlyString = function () {
                    return "";
                  }),
                  (e.prototype.beforeReturn = function (t) {
                    if (
                      !this.exist_thead &&
                      !this.exist_tbody &&
                      this.empty_tbody
                    )
                      return "";
                    if (0 === this.tableColumnCount) return "";
                    if (!this.exist_tbody) {
                      for (
                        var e = (0, a.getTableAlign)(
                            this.innerHTML,
                            this.tableColumnCount
                          ),
                          n = "|",
                          r = 0;
                        r < e.length;
                        r++
                      )
                        n += e[r];
                      t = this.empty_tbody ? t + n + "\n" : n + "" + t;
                    }
                    return (
                      this.exist_thead ||
                        (t =
                          "\n" +
                          "|".repeat(this.tableColumnCount + 1) +
                          (t.startsWith("\n") ? "" : "\n") +
                          t),
                      t
                    );
                  }),
                  (e.prototype.exec = function (e, n) {
                    return (
                      void 0 === e && (e = "\n"),
                      void 0 === n && (n = "\n"),
                      t.prototype.exec.call(this, e, n)
                    );
                  }),
                  e
                );
              })(i.default);
            e.default = c;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = n(0),
              i = n(1),
              a = (function (t) {
                function e(e, n, r) {
                  return (
                    void 0 === n && (n = "tbody"), t.call(this, e, n, r) || this
                  );
                }
                return (
                  r(e, t),
                  (e.prototype.beforeMergeSpace = function (t) {
                    for (
                      var e = (0, i.getTableAlign)(
                          this.innerHTML,
                          this.tableColumnCount
                        ),
                        n = "|",
                        r = 0;
                      r < e.length;
                      r++
                    )
                      n += e[r];
                    return n + "\n" + t;
                  }),
                  (e.prototype.parseOnlyString = function () {
                    return "";
                  }),
                  (e.prototype.exec = function (e, n) {
                    return (
                      void 0 === e && (e = ""),
                      void 0 === n && (n = ""),
                      t.prototype.exec.call(this, e, n)
                    );
                  }),
                  e
                );
              })(o.default);
            e.default = a;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n, r) {
                return (
                  void 0 === n && (n = "td"), t.call(this, e, n, r) || this
                );
              }
              return (
                r(e, t),
                (e.prototype.parseValidSubTag = function (e, n, r) {
                  return "ul" === n ||
                    "ol" === n ||
                    "table" === n ||
                    "pre" === n
                    ? e.replace(/([\n\r])/g, "")
                    : t.prototype.parseValidSubTag.call(this, e, n, r);
                }),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = ""),
                    void 0 === n && (n = ""),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(16).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function (t) {
              function e(e, n, r) {
                return (
                  void 0 === n && (n = "thead"), t.call(this, e, n, r) || this
                );
              }
              return (
                r(e, t),
                (e.prototype.exec = function (e, n) {
                  return (
                    void 0 === e && (e = ""),
                    void 0 === n && (n = ""),
                    t.prototype.exec.call(this, e, n)
                  );
                }),
                e
              );
            })(n(0).default);
            e.default = o;
          },
          function (t, e, n) {
            "use strict";
            var r =
              (this && this.__extends) ||
              (function () {
                var t = function (e, n) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    })(e, n);
                };
                return function (e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = e;
                  }
                  t(e, n),
                    (e.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                };
              })();
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = n(0),
              i = n(5),
              a = n(1),
              c = n(2),
              s = (function (t) {
                function e(e, n, r) {
                  return (
                    void 0 === n && (n = "tr"), t.call(this, e, n, r) || this
                  );
                }
                return (
                  r(e, t),
                  (e.prototype.beforeMergeSpace = function (t) {
                    return "|" + t;
                  }),
                  (e.prototype.parseValidSubTag = function (t, e, n) {
                    var r = c.default.get().aliasTags,
                      o = (0, a.getTagConstructor)(e);
                    return "td" !== e &&
                      "th" !== e &&
                      "td" !== (null == r ? void 0 : r[e]) &&
                      "th" !== (null == r ? void 0 : r[e]) &&
                      o !== i.default
                      ? (console.error(
                          "Should not have tags except <td> or <th> inside <tr>, current tag is ".concat(
                            e,
                            " have been ignore."
                          )
                        ),
                        "")
                      : new o(t, e, n).exec("", "");
                  }),
                  (e.prototype.parseOnlyString = function () {
                    return "";
                  }),
                  (e.prototype.exec = function (e, n) {
                    return (
                      void 0 === e && (e = ""),
                      void 0 === n && (n = "\n"),
                      t.prototype.exec.call(this, e, n)
                    );
                  }),
                  e
                );
              })(o.default);
            e.default = s;
          },
          function (t, e, n) {
            "use strict";
            var r =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    if ("function" != typeof n && null !== n)
                      throw new TypeError(
                        "Class extends value " +
                          String(n) +
                          " is not a constructor or null"
                      );
                    function r() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((r.prototype = n.prototype), new r()));
                  };
                })(),
              o =
                (this && this.__assign) ||
                function () {
                  return (o =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, o) &&
                            (t[o] = e[o]);
                      return t;
                    }).apply(this, arguments);
                };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = n(0),
              a = n(5),
              c = n(1),
              s = n(2).default.get().aliasTags,
              u = (function (t) {
                function e(e, n, r) {
                  return (
                    void 0 === n && (n = "ul"), t.call(this, e, n, r) || this
                  );
                }
                return (
                  r(e, t),
                  (e.prototype.__isValidSubTag__ = function (t) {
                    if (!t) return !1;
                    var e = (0, c.getTagConstructor)(t);
                    return (
                      "li" === t ||
                      "li" == (null == s ? void 0 : s[t]) ||
                      e === a.default
                    );
                  }),
                  (e.prototype.getValidSubTagName = function (t) {
                    return t && this.__isValidSubTag__(t) ? t : null;
                  }),
                  (e.prototype.parseValidSubTag = function (t, e, n) {
                    var r = (0, c.getTagConstructor)(e);
                    return this.__isValidSubTag__(e)
                      ? new r(
                          t,
                          e,
                          o(o({}, n), {
                            calcLeading: !0,
                            leadingSpace: this.leadingSpace,
                            layer: this.layer,
                            match: "*",
                          })
                        ).exec("", "\n")
                      : (console.error(
                          "Should not have tags except <li> inside ul, current tag is " +
                            e +
                            ", current tagStr is" +
                            t
                        ),
                        "");
                  }),
                  (e.prototype.parseOnlyString = function () {
                    return "";
                  }),
                  (e.prototype.exec = function (e, n) {
                    return (
                      void 0 === e && (e = "\n"),
                      void 0 === n && (n = "\n"),
                      t.prototype.exec.call(this, e, n)
                    );
                  }),
                  e
                );
              })(i.default);
            e.default = u;
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(1),
              o = n(2),
              i = n(9);
            e.default = function (t, e, n) {
              void 0 === n && (n = !1),
                o.default.reset(),
                o.default.set(e, n),
                (t = (t = (t = (0, r.clearComment)(t)).trim())
                  .replace(/(\r\n)/g, "")
                  .replace(/&nbsp;/g, " "));
              for (
                var a = (0, r.generateGetNextValidTag)(t),
                  c = "",
                  s = null,
                  u = a(),
                  l = u[0],
                  p = u[1];
                "" !== p;

              ) {
                if (null != l) {
                  var f = new ((0, r.getTagConstructor)(l))(p, l, {
                      parentTag: null,
                      prevTagName: s,
                      prevTagStr: c,
                    }).exec(),
                    d = (0, r.isIndependentTag)(s);
                  !(0, r.isIndependentTag)(l) || d || c.endsWith("\n")
                    ? (c += f)
                    : (c += "\n" + f);
                } else
                  c = (c += new i.default(p, l).exec()).replace(
                    /(?:\n\s*)$/,
                    "\n"
                  );
                s = l;
                var h = a();
                (l = h[0]), (p = h[1]);
              }
              return (function (t) {
                return (t = (t = t.replace(/^\s+/, "")).replace(
                  /\s+$/,
                  ""
                )).replace(/\u2608/g, " ");
              })((0, r.unescapeStr)(c));
            };
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.unescapeStr = e.extraEscape = void 0);
            var r = {},
              o = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "`": "&#x60;",
                "“": "&ldquo;",
                "”": "&rdquo;",
              };
            for (var i in o) r[o[i]] = i;
            var a = /&(?:amp|lt|gt|quot|#39|#x60|ldquo|rdquo);/g,
              c = RegExp(a.source),
              s = [
                [/\\/g, "\\\\"],
                [/\*/g, "\\*"],
                [/^-/g, "\\-"],
                [/^\+ /g, "\\+ "],
                [/^(=+)/g, "\\$1"],
                [/^(#{1,6}) /g, "\\$1 "],
                [/`/g, "\\`"],
                [/^~~~/g, "\\~~~"],
                [/\[/g, "\\["],
                [/\]/g, "\\]"],
                [/^>/g, "\\>"],
                [/_/g, "\\_"],
                [/^(\d+)\. /g, "$1\\. "],
              ];
            (e.unescapeStr = function (t) {
              return t && c.test(t)
                ? t.replace(a, function (t) {
                    return r[t];
                  })
                : t;
            }),
              (e.extraEscape = function (t) {
                return s.reduce(function (t, e) {
                  return t.replace(e[0], e[1]);
                }, t);
              });
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(11);
            function o(t, e) {
              for (var n = ""; e < t.length && /[a-zA-Z0-9!-]/.test(t[e]); )
                n += t[e++];
              return n.toLowerCase();
            }
            e.default = function (t) {
              var e = 0;
              return function () {
                var n = "",
                  i = null,
                  a = 0,
                  c = null,
                  s = !1;
                if (e >= t.length) return [i, n];
                for (var u = e; u < t.length; u++) {
                  if ("<" === t[u] && "/" !== t[u + 1]) {
                    if ("" !== n && null == i && !s) return (e = u), [i, n];
                    var l = o(t, u + 1);
                    null == i && (i = l),
                      i === l && a++,
                      (0, r.default)(i) &&
                        (0 == --a && (s = !0),
                        a < 0 &&
                          console.warn("Tag ".concat(i, " is abnormal")));
                  } else if ("<" === t[u] && "/" === t[u + 1]) {
                    if (null == i) {
                      console.warn(
                        "Tag is not integrity, current tagStr is ".concat(
                          t.slice(e)
                        )
                      );
                      for (var p = u; p < t.length && ">" !== t[p]; ) p++;
                      u = p;
                      continue;
                    }
                    i === (c = o(t, u + 2)) && a--, a <= 0 && (s = !0);
                  }
                  if (((n += t[u]), ">" === t[u] && s))
                    return (e = u + 1), [i, n];
                  u === t.length - 1 &&
                    i !== c &&
                    (null != c &&
                      null != i &&
                      (n = n
                        .replace("<".concat(i, ">"), "")
                        .replace("</".concat(c, ">"), "")),
                    (i = null));
                }
                return (e = t.length), [i, n];
              };
            };
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(2),
              o = n(11),
              i = n(49);
            e.default = function t(e) {
              var a,
                c = r.default.get(),
                s = c.skipTags,
                u = c.emptyTags,
                l = c.ignoreTags,
                p = c.aliasTags,
                f = c.renderCustomTags,
                d = (0, o.default)(e);
              if (null == s ? void 0 : s.includes(e)) {
                var h = n(8);
                return d ? h.__SkipSelfClose__ : h.__Skip__;
              }
              if (null == u ? void 0 : u.includes(e)) {
                var m = n(7);
                return d ? m.__EmptySelfClose__ : m.__Empty__;
              }
              if (null == l ? void 0 : l.includes(e)) return n(5).default;
              if (null != (null == p ? void 0 : p[e])) return t(p[e]);
              var y = e.toLowerCase();
              if (!0 !== f && !(0, i.default)(y)) {
                if (!1 === f || "SKIP" === f)
                  return (h = n(8)), d ? h.__SkipSelfClose__ : h.__Skip__;
                if ("EMPTY" === f)
                  return (m = n(7)), d ? m.__EmptySelfClose__ : m.__Empty__;
                if ("IGNORE" === f) return n(5).default;
              }
              try {
                a = n(50)("./".concat(e)).default;
              } catch (t) {
                a = d ? n(10).__NoMatchSelfClose__ : n(10).__NoMatch__;
              }
              return a;
            };
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = [
              "!doctype",
              "a",
              "abbr",
              "acronym",
              "address",
              "applet",
              "area",
              "article",
              "aside",
              "audio",
              "b",
              "base",
              "basefont",
              "bdi",
              "bdo",
              "bgsound",
              "big",
              "blink",
              "blockquote",
              "body",
              "br",
              "button",
              "canvas",
              "caption",
              "center",
              "circle",
              "cite",
              "clipPath",
              "code",
              "col",
              "colgroup",
              "command",
              "content",
              "data",
              "datalist",
              "dd",
              "defs",
              "del",
              "details",
              "dfn",
              "dialog",
              "dir",
              "div",
              "dl",
              "dt",
              "element",
              "ellipse",
              "em",
              "embed",
              "fieldset",
              "figcaption",
              "figure",
              "font",
              "footer",
              "foreignObject",
              "form",
              "frame",
              "frameset",
              "g",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "head",
              "header",
              "hgroup",
              "hr",
              "html",
              "i",
              "iframe",
              "image",
              "img",
              "input",
              "ins",
              "isindex",
              "kbd",
              "keygen",
              "label",
              "legend",
              "li",
              "line",
              "linearGradient",
              "link",
              "listing",
              "main",
              "map",
              "mark",
              "marquee",
              "mask",
              "math",
              "menu",
              "menuitem",
              "meta",
              "meter",
              "multicol",
              "nav",
              "nextid",
              "nobr",
              "noembed",
              "noframes",
              "noscript",
              "object",
              "ol",
              "optgroup",
              "option",
              "output",
              "p",
              "param",
              "path",
              "pattern",
              "picture",
              "plaintext",
              "polygon",
              "polyline",
              "pre",
              "progress",
              "q",
              "radialGradient",
              "rb",
              "rbc",
              "rect",
              "rp",
              "rt",
              "rtc",
              "ruby",
              "s",
              "samp",
              "script",
              "section",
              "select",
              "shadow",
              "slot",
              "small",
              "source",
              "spacer",
              "span",
              "stop",
              "strike",
              "strong",
              "style",
              "sub",
              "summary",
              "sup",
              "svg",
              "table",
              "tbody",
              "td",
              "template",
              "text",
              "textarea",
              "tfoot",
              "th",
              "thead",
              "time",
              "title",
              "tr",
              "track",
              "tspan",
              "tt",
              "u",
              "ul",
              "var",
              "video",
              "wbr",
              "xmp",
            ];
            e.default = function (t) {
              return "string" == typeof t && r.includes(t.toLowerCase());
            };
          },
          function (t, e, n) {
            var r = {
              "./__Heading__": 3,
              "./__Heading__.ts": 3,
              "./__empty__": 7,
              "./__empty__.ts": 7,
              "./__ignore__": 5,
              "./__ignore__.ts": 5,
              "./__nomatch__": 10,
              "./__nomatch__.ts": 10,
              "./__rawString__": 9,
              "./__rawString__.ts": 9,
              "./__skip__": 8,
              "./__skip__.ts": 8,
              "./a": 18,
              "./a.ts": 18,
              "./b": 19,
              "./b.ts": 19,
              "./blockquote": 20,
              "./blockquote.ts": 20,
              "./br": 21,
              "./br.ts": 21,
              "./code": 22,
              "./code.ts": 22,
              "./del": 14,
              "./del.ts": 14,
              "./em": 15,
              "./em.ts": 15,
              "./h1": 23,
              "./h1.ts": 23,
              "./h2": 24,
              "./h2.ts": 24,
              "./h3": 25,
              "./h3.ts": 25,
              "./h4": 26,
              "./h4.ts": 26,
              "./h5": 27,
              "./h5.ts": 27,
              "./h6": 28,
              "./h6.ts": 28,
              "./hr": 29,
              "./hr.ts": 29,
              "./i": 30,
              "./i.ts": 30,
              "./img": 31,
              "./img.ts": 31,
              "./input": 32,
              "./input.ts": 32,
              "./li": 33,
              "./li.ts": 33,
              "./ol": 34,
              "./ol.ts": 34,
              "./p": 35,
              "./p.ts": 35,
              "./pre": 36,
              "./pre.ts": 36,
              "./s": 37,
              "./s.ts": 37,
              "./span": 38,
              "./span.ts": 38,
              "./strong": 13,
              "./strong.ts": 13,
              "./table": 39,
              "./table.ts": 39,
              "./tbody": 40,
              "./tbody.ts": 40,
              "./td": 41,
              "./td.ts": 41,
              "./th": 16,
              "./th.ts": 16,
              "./thead": 42,
              "./thead.ts": 42,
              "./tr": 43,
              "./tr.ts": 43,
              "./ul": 44,
              "./ul.ts": 44,
            };
            function o(t) {
              var e = i(t);
              return n(e);
            }
            function i(t) {
              if (!n.o(r, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              }
              return r[t];
            }
            (o.keys = function () {
              return Object.keys(r);
            }),
              (o.resolve = i),
              (t.exports = o),
              (o.id = 50);
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.default = function (t) {
                for (
                  var e = {}, n = !1, r = "", o = "", i = null, a = 0;
                  a <= t.length;
                  a++
                ) {
                  if (a === t.length || /\s/.test(t[a])) {
                    if (a === t.length || !n) {
                      var c = r.trim();
                      "/" === c[c.length - 1] && (c = c.slice(0, c.length - 1)),
                        c && (e[c] = o.trim()),
                        (r = ""),
                        (o = "");
                    }
                  } else {
                    if (/['"]/.test(t[a]) && (!i || t[a] === i)) {
                      (n = !n) && (i = t[a]);
                      continue;
                    }
                    if ("=" === t[a] && !n) continue;
                  }
                  if (a === t.length) break;
                  n ? (o += t[a]) : (r += t[a]);
                }
                return e;
              });
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            e.default = function (t) {
              var e = t.match(/<.*?class=".*?language-([^\s"]*)?.*".*>/);
              return e
                ? e[1] || ""
                : t.match(
                    /<span.*?hljs-(comment|keyword|number|string|literal|built_in|function|title|bullet).*?<\/span>/
                  )
                ? "javascript"
                : "";
            };
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.default = function (t) {
                return t.replace(/<!--(?:[\s\S]*?)-->/g, "");
              });
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.default = function (t, e) {
                var n = {
                    _default_: "---|",
                    center: ":---:|",
                    left: ":---|",
                    right: "---:|",
                    start: ":---|",
                    end: "---:|",
                  },
                  r = Array(e).fill(n._default_),
                  o = t.match(/<(td|th)(.*?)>/g);
                return o
                  ? (r = (r = o.slice(0, e)).map(function (t) {
                      var e = t.match(
                          /align\s*=\s*['"]\s*(center|left|right|start|end)/
                        ),
                        r = t.match(
                          /text-align\s*:\s*(center|left|right|start|end)/
                        );
                      return e || r
                        ? e && !r
                          ? n[e[1]] || n._default_
                          : r
                          ? n[r[1]] || n._default_
                          : void 0
                        : n._default_;
                    }))
                  : r;
              });
          },
          function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.default = ["th", "td"]);
          },
        ]).default;
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { exports: {} });
    return t[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      var t = n(447),
        e = n(841),
        r = n.n(e);
      let o =
        "Chrome" ==
        (navigator.userAgent.indexOf("Chrome") > -1 ? "Chrome" : "Firefox")
          ? chrome
          : browser;
      const i = (t, e) => Math.floor(Math.random() * (e - t + 1) + t),
        a = ["comment"];
      function c(t, e) {
        if (t && null != t) {
          const n = t.className,
            r = t.id;
          if (
            a
              .map((t) => {
                if (
                  ("string" == typeof n && n.indexOf(t) >= 0) ||
                  ("string" == typeof r && r.indexOf(t) >= 0)
                )
                  return !0;
              })
              .filter((t) => t)[0]
          )
            return null;
          const o = t.parentElement;
          if (e > 0 && o && !o.isSameNode(document.body)) return c(o, --e);
        }
        return t;
      }
      function s() {
        let e;
        if (document.head.querySelector("meta[name='articleBody'"))
          (e = document.createElement("div")),
            (e.innerHTML = t.sanitize(
              document.head
                .querySelector("meta[name='articleBody'")
                .getAttribute("content")
            ));
        else {
          const t = document.body.innerText.match(/\S+/g).length;
          let n = document.body.querySelectorAll("p"),
            r = document.body,
            o = 0;
          0 === n.length && (n = document.body.querySelectorAll("div")),
            n.forEach((t) => {
              if (c(t, 3) && 0 !== t.offsetHeight) {
                const e = t.innerText.match(/\S+/g);
                if (e) {
                  const n = e.length;
                  n > o && ((o = n), (r = t));
                }
              }
              0 === t.offsetHeight && (t.dataset.simpleDelete = !0);
            }),
            (e = r);
          let i = o;
          for (
            ;
            i / t < 0.4 && e !== document.body && e.parentElement.innerText;

          )
            (e = e.parentElement), (i = e.innerText.match(/\S+/g).length);
          "P" === e.tagName && (e = e.parentElement);
        }
        return e;
      }
      const u = ({ props: t, tag: e, children: n, name: r }, o) => {
        const i = document.createElement(e);
        return (
          Object.entries(t).forEach(([t, e]) => {
            "style" === t
              ? Object.entries(e).forEach(([t, e]) => {
                  i.style[t] = e;
                })
              : (i[t] = e);
          }),
          n &&
            n.forEach((t) => {
              if (t) {
                const e = u(t, o);
                i.appendChild(e);
              }
            }),
          r && o && (o[r] = i),
          i
        );
      };
      !(async function () {
        const e = u({
          tag: "div",
          props: { className: "summarize-gpt-container" },
          children: [
            {
              tag: "div",
              props: {
                className:
                  "sumz-min-w-[30%] sumz-max-h-[80%] sumz-max-w-[30%] sumz-fixed sumz-right-4 sumz-top-8 sumz-flex sumz-flex-col sumz-items-center sumz-justify-center sumz-rounded-lg sumz-bg-white sumz-shadow-md",
              },
              children: [
                {
                  tag: "div",
                  props: {
                    className:
                      "sumz-flex sumz-h-[40px] sumz-w-full sumz-items-center sumz-justify-between sumz-rounded-t-lg sumz-bg-gray-200 sumz-px-4",
                  },
                  children: [
                    {
                      tag: "div",
                      props: {
                        id: "summarize__heading-text",
                        className:
                          "sumz-text-xl sumz-font-black sumz-animate-text sumz-bg-gradient-to-r sumz-from-teal-500 sumz-via-purple-500 sumz-to-orange-500 sumz-bg-clip-text sumz-text-transparent",
                      },
                    },
                    {
                      tag: "img",
                      props: {
                        id: "summarize__close-button",
                        className:
                          "sumz-h-[24px] sumz-w-6 sumz-cursor-pointer sumz-rounded-lg hover:sumz-bg-sky-200",
                        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cG9seWdvbiBwb2ludHM9IjE3LjcsMTYuMiAxMy40LDEyIDE3LjcsNy44IDE2LjIsNi4zIDEyLDEwLjYgNy44LDYuMyA2LjMsNy44IDEwLjYsMTIgNi4zLDE2LjIgNy44LDE3LjcgMTIsMTMuNCAxNi4yLDE3LjcgIi8+Cjwvc3ZnPgo=",
                        alt: "close",
                      },
                    },
                  ],
                },
                {
                  tag: "div",
                  props: { className: "sumz-w-full sumz-h-1 sumz-bg-gray-300" },
                },
                {
                  tag: "div",
                  props: {
                    className:
                      "sumz-h-full sumz-w-full sumz-overflow-y-auto sumz-px-4 sumz-py-4",
                  },
                  children: [
                    {
                      tag: "div",
                      props: {
                        id: "summarize__body",
                        className:
                          "sumz-text-3-xl sumz-mb-2 sumz-flex sumz-flex-col sumz-whitespace-pre-line sumz-text-gray-700",
                      },
                    },
                  ],
                },
                {
                  tag: "div",
                  props: { className: "sumz-w-full sumz-h-1 sumz-bg-gray-200" },
                },
                {
                  tag: "div",
                  props: { className: "sumz-m-2" },
                  children: [
                    {
                      tag: "div",
                      props: {
                        className:
                          "sumz-flex sumz-h-[32px] sumz-w-full sumz-items-center sumz-justify-center",
                      },
                      children: [
                        {
                          tag: "div",
                          props: {
                            className:
                              "sumz-text-lg sumz-font-bold sumz-text-gray-600",
                            innerText: "PINGER",
                          },
                        },
                        {
                          tag: "button",
                          props: {
                            id: "summarize__animation-button",
                            onclick: () =>
                              window.open("https://www.pinger.com/", "_blank"),
                            className:
                              "sumz-rounded-full sumz-border-2 sumz-border-sky-600 sumz-m-2 sumz-px-1 sumz-py-1 sumz-text-lg sumz-text-sky-600 sumz-transition-colors hover:sumz-bg-sky-100",
                          },
                          children: [
                            {
                              tag: "span",
                              props: {
                                className:
                                  "sumz-pointer-events-none sumz-absolute sumz-inset-0 -sumz-z-10 sumz-block",
                                id: "summarize__sparkles-container",
                              },
                            },
                            {
                              tag: "span",
                              props: {
                                className:
                                  "sumz-block sumz-h-[16px] sumz-overflow-hidden sumz-z-10",
                                id: "summarize__letters-container",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "div",
                      props: {
                        className: "sumz-text-sm sumz-text-gray-600 sumz-pt-2",
                        innerText: "Howdy!",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        });
        let n = document.createElement("div");
        (n.id = "summarize-root"), document.body.appendChild(n);
        let a = n.attachShadow({ mode: "open" });
        a.querySelector(".summarize-styles") ||
          (function (t, e, n) {
            const r = o.runtime.getURL("styles.css"),
              i = document.createElement("link");
            i.setAttribute("rel", "stylesheet"),
              i.setAttribute("type", "text/css"),
              i.setAttribute("href", r),
              n && (i.className = n),
              t.appendChild(i);
            const a = document.createElement("style");
            (a.textContent =
              "\n    :host {\n      all: initial;\n    }\n    .summarize-gpt-container * {\n      font-family: sans-serif;\n      line-height: normal;\n      font-size: 16px;\n    }\n  "),
              t.appendChild(a);
          })(a, 0, "summarize-styles"),
          a.appendChild(e),
          (n.style.position = "fixed"),
          (n.style.zIndex = "9999"),
          (e.querySelector("#summarize__heading-text").innerHTML =
            '<p>Summarized <a href="https://chat.openai.com/chat" target="_blank" class="sumz-text-sm">by Justinai</a></p>');
        const c = e.querySelector("#summarize__body");
        (c.innerHTML = "<p>Hol up.. I'm thinking...</p>"),
          e
            .querySelector("#summarize__close-button")
            .addEventListener("click", function () {
              document.body.removeChild(n);
            });
        const l = e.querySelector("#summarize__letters-container");
        ["I", "n", "n", "o", "v", "a", "t", "e"].forEach((t, e) => {
          const n = document.createElement("span");
          n.setAttribute("data-letter", t),
            (n.className =
              "summarize__animated-letter sumz-relative sumz-inline-block sumz-h-[16px] sumz-leading-[16px] after:sumz-absolute after:sumz-left-0 after:sumz-top-full after:sumz-h-[16px] after:sumz-content-[attr(data-letter)]"),
            (n.textContent = t),
            l.appendChild(n);
        });
        const p = e.querySelector("#summarize__sparkles-container"),
          f = Array(
            "sumz-fill-sky-600",
            "sumz-fill-emerald-600",
            "sumz-fill-indigo-600",
            "sumz-fill-rose-600",
            "sumz-fill-amber-600"
          );
        for (let t = 0; t < 10; t++) {
          const e = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
          );
          e.classList.add(
            "sumz-absolute",
            "sumz-left-1/2",
            "sumz-top-1/2",
            "sumz-opacity-0",
            `sparkle-${t}`
          ),
            e.setAttribute("viewBox", "0 0 122 117");
          const n = i(10, 16);
          e.setAttribute("width", `${n}`), e.setAttribute("height", `${n}`);
          const r = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "path"
            ),
            o = f[Math.floor(Math.random() * f.length)];
          e.classList.add(o),
            r.setAttribute(
              "d",
              "M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
            ),
            e.appendChild(r),
            p.appendChild(e);
        }
        let d;
        l.addEventListener("mouseenter", function () {
          ((t, e) => {
            t.querySelectorAll(".summarize__animated-letter").forEach(
              (t, e) => {
                t.animate(
                  [
                    { transform: "translateY(0px)" },
                    { transform: "translateY(-16px)" },
                  ],
                  { duration: 200, delay: 50 * e, fill: "forwards" }
                );
              }
            );
            for (let e = 0; e < 10; e++) {
              const n = t.querySelector(`.sparkle-${e}`);
              n.animate(
                [
                  { transform: "translate(0px, 0px)", opacity: 0 },
                  {
                    transform: `translate(${i(-100, 100)}px, ${i(
                      -100,
                      100
                    )}px)`,
                    opacity: 1,
                  },
                ],
                { duration: 500, easing: "ease-out", fill: "forwards" }
              ),
                n.animate([{ opacity: 1 }, { opacity: 0 }], {
                  delay: 500,
                  duration: 500,
                  easing: "ease-in",
                  fill: "forwards",
                });
            }
            t.querySelector("#summarize__animation-button").animate(
              [
                { transform: "scale(1)" },
                { transform: "scale(0.8)" },
                { transform: "scale(1)" },
              ],
              { duration: 200, fill: "forwards" }
            );
          })(e);
        });
        let h = window.getSelection();
        d = h.isCollapsed
          ? (function () {
              let e = s().cloneNode(!0);
              e.innerHTML = t.sanitize(
                e.innerHTML.replace(/<a\b[^>]*>(.*?)<\/a>/gi, "")
              );
              const n = new RegExp("<br/?>[ \r\ns]*<br/?>", "g");
              e.innerHTML = t.sanitize(e.innerHTML.replace(n, "</p><p>"));
              let o = t.sanitize(e.innerHTML);
              return (o = r()(o)), o;
            })()
          : h.toString();
        const m = o.runtime.connect();
        m.onMessage.addListener(function (t) {
          t.answer
            ? (c.innerHTML = t.answer)
            : "UNAUTHORIZED" === t.error
            ? (c.innerHTML =
                '<p>Please login at <a href="https://chat.openai.com" target="_blank">chat.openai.com</a></p>')
            : (c.innerHTML = "<p>Failed to load response from Justinai</p>");
        }),
          m.postMessage({ content: d });
      })();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VWxaLFdBQVUsR0FHaERzZCxFQUFVN1YsVUFBWTdJLEVBQUFBLFNBQ3BCMGUsRUFBVTdWLFVBQVVwTSxRQUZMLHlCQUV1QixLQUV4QyxNQUFNa2lCLEVBQVcsSUFBSTVoQixPQUFPLHdCQUF5QixLQUNyRDJoQixFQUFVN1YsVUFBWTdJLEVBQUFBLFNBQ3BCMGUsRUFBVTdWLFVBQVVwTSxRQUFRa2lCLEVBQVUsWUFHeEMsSUFBSWpkLEVBQVUxQixFQUFBQSxTQUFtQjBlLEVBQVU3VixXQUUzQyxPQURBbkgsRUFBVWtkLElBQVFsZCxHQUNYQSxDQUNULENBbU9jbWQsR0FFQU4sRUFBVW5rQixXQUd0QixNQUFNMGtCLEVBQU8xRixFQUFLb0QsUUFBUXVDLFVBQzFCRCxFQUFLRSxVQUFVQyxhQUFZLFNBQVVDLEdBQy9CQSxFQUFJQyxPQUNOckMsRUFBbUJqVSxVQUFZcVcsRUFBSUMsT0FDWixpQkFBZEQsRUFBSXBPLE1BQ2JnTSxFQUFtQmpVLFVBQ2pCLCtGQUVGaVUsRUFBbUJqVSxVQUFZLDZDQUVuQyxJQUNBaVcsRUFBS00sWUFBWSxDQUFFMWQsV0FDckIsQ0FFQTJkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VtbWFyaXplLWdwdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9kb21wdXJpZnlAMi40LjEvbm9kZV9tb2R1bGVzL2RvbXB1cmlmeS9kaXN0L3B1cmlmeS5qcyIsIndlYnBhY2s6Ly9zdW1tYXJpemUtZ3B0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL2h0bWwtdG8tbWRAMC44LjMvbm9kZV9tb2R1bGVzL2h0bWwtdG8tbWQvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdW1tYXJpemUtZ3B0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3VtbWFyaXplLWdwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3VtbWFyaXplLWdwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvLi9saWIvc3JjL2NvbnRlbnQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIEBsaWNlbnNlIERPTVB1cmlmeSAyLjQuMSB8IChjKSBDdXJlNTMgYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IFJlbGVhc2VkIHVuZGVyIHRoZSBBcGFjaGUgbGljZW5zZSAyLjAgYW5kIE1vemlsbGEgUHVibGljIExpY2Vuc2UgMi4wIHwgZ2l0aHViLmNvbS9jdXJlNTMvRE9NUHVyaWZ5L2Jsb2IvMi40LjEvTElDRU5TRSAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5ET01QdXJpZnkgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gICAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9LCBfdHlwZW9mKG9iaik7XG4gIH1cblxuICBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgICAgby5fX3Byb3RvX18gPSBwO1xuICAgICAgcmV0dXJuIG87XG4gICAgfTtcblxuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG4gIH1cblxuICBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgICB0cnkge1xuICAgICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgIGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgICBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICAgIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG4gIH1cblxuICBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgICBpZiAoIW8pIHJldHVybjtcbiAgICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICAgIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICAgIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gICAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgIHNldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mLFxuICAgICAgaXNGcm96ZW4gPSBPYmplY3QuaXNGcm96ZW4sXG4gICAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIHZhciBmcmVlemUgPSBPYmplY3QuZnJlZXplLFxuICAgICAgc2VhbCA9IE9iamVjdC5zZWFsLFxuICAgICAgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5cbiAgdmFyIF9yZWYgPSB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgUmVmbGVjdCxcbiAgICAgIGFwcGx5ID0gX3JlZi5hcHBseSxcbiAgICAgIGNvbnN0cnVjdCA9IF9yZWYuY29uc3RydWN0O1xuXG4gIGlmICghYXBwbHkpIHtcbiAgICBhcHBseSA9IGZ1bmN0aW9uIGFwcGx5KGZ1biwgdGhpc1ZhbHVlLCBhcmdzKSB7XG4gICAgICByZXR1cm4gZnVuLmFwcGx5KHRoaXNWYWx1ZSwgYXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghZnJlZXplKSB7XG4gICAgZnJlZXplID0gZnVuY3Rpb24gZnJlZXplKHgpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH07XG4gIH1cblxuICBpZiAoIXNlYWwpIHtcbiAgICBzZWFsID0gZnVuY3Rpb24gc2VhbCh4KSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFjb25zdHJ1Y3QpIHtcbiAgICBjb25zdHJ1Y3QgPSBmdW5jdGlvbiBjb25zdHJ1Y3QoRnVuYywgYXJncykge1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoRnVuYywgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGFycmF5Rm9yRWFjaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLmZvckVhY2gpO1xuICB2YXIgYXJyYXlQb3AgPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5wb3ApO1xuICB2YXIgYXJyYXlQdXNoID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUucHVzaCk7XG4gIHZhciBzdHJpbmdUb0xvd2VyQ2FzZSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS50b0xvd2VyQ2FzZSk7XG4gIHZhciBzdHJpbmdUb1N0cmluZyA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyk7XG4gIHZhciBzdHJpbmdNYXRjaCA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5tYXRjaCk7XG4gIHZhciBzdHJpbmdSZXBsYWNlID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xuICB2YXIgc3RyaW5nSW5kZXhPZiA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mKTtcbiAgdmFyIHN0cmluZ1RyaW0gPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudHJpbSk7XG4gIHZhciByZWdFeHBUZXN0ID0gdW5hcHBseShSZWdFeHAucHJvdG90eXBlLnRlc3QpO1xuICB2YXIgdHlwZUVycm9yQ3JlYXRlID0gdW5jb25zdHJ1Y3QoVHlwZUVycm9yKTtcbiAgZnVuY3Rpb24gdW5hcHBseShmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzQXJnKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncyk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB1bmNvbnN0cnVjdChmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb25zdHJ1Y3QoZnVuYywgYXJncyk7XG4gICAgfTtcbiAgfVxuICAvKiBBZGQgcHJvcGVydGllcyB0byBhIGxvb2t1cCB0YWJsZSAqL1xuXG4gIGZ1bmN0aW9uIGFkZFRvU2V0KHNldCwgYXJyYXksIHRyYW5zZm9ybUNhc2VGdW5jKSB7XG4gICAgdHJhbnNmb3JtQ2FzZUZ1bmMgPSB0cmFuc2Zvcm1DYXNlRnVuYyA/IHRyYW5zZm9ybUNhc2VGdW5jIDogc3RyaW5nVG9Mb3dlckNhc2U7XG5cbiAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIC8vIE1ha2UgJ2luJyBhbmQgdHJ1dGh5IGNoZWNrcyBsaWtlIEJvb2xlYW4oc2V0LmNvbnN0cnVjdG9yKVxuICAgICAgLy8gaW5kZXBlbmRlbnQgb2YgYW55IHByb3BlcnRpZXMgZGVmaW5lZCBvbiBPYmplY3QucHJvdG90eXBlLlxuICAgICAgLy8gUHJldmVudCBwcm90b3R5cGUgc2V0dGVycyBmcm9tIGludGVyY2VwdGluZyBzZXQgYXMgYSB0aGlzIHZhbHVlLlxuICAgICAgc2V0UHJvdG90eXBlT2Yoc2V0LCBudWxsKTtcbiAgICB9XG5cbiAgICB2YXIgbCA9IGFycmF5Lmxlbmd0aDtcblxuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgIHZhciBlbGVtZW50ID0gYXJyYXlbbF07XG5cbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGxjRWxlbWVudCA9IHRyYW5zZm9ybUNhc2VGdW5jKGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChsY0VsZW1lbnQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAvLyBDb25maWcgcHJlc2V0cyAoZS5nLiB0YWdzLmpzLCBhdHRycy5qcykgYXJlIGltbXV0YWJsZS5cbiAgICAgICAgICBpZiAoIWlzRnJvemVuKGFycmF5KSkge1xuICAgICAgICAgICAgYXJyYXlbbF0gPSBsY0VsZW1lbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWxlbWVudCA9IGxjRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZXRbZWxlbWVudF0gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzZXQ7XG4gIH1cbiAgLyogU2hhbGxvdyBjbG9uZSBhbiBvYmplY3QgKi9cblxuICBmdW5jdGlvbiBjbG9uZShvYmplY3QpIHtcbiAgICB2YXIgbmV3T2JqZWN0ID0gY3JlYXRlKG51bGwpO1xuICAgIHZhciBwcm9wZXJ0eTtcblxuICAgIGZvciAocHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgICBpZiAoYXBwbHkoaGFzT3duUHJvcGVydHksIG9iamVjdCwgW3Byb3BlcnR5XSkpIHtcbiAgICAgICAgbmV3T2JqZWN0W3Byb3BlcnR5XSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld09iamVjdDtcbiAgfVxuICAvKiBJRTEwIGRvZXNuJ3Qgc3VwcG9ydCBfX2xvb2t1cEdldHRlcl9fIHNvIGxldHMnXG4gICAqIHNpbXVsYXRlIGl0LiBJdCBhbHNvIGF1dG9tYXRpY2FsbHkgY2hlY2tzXG4gICAqIGlmIHRoZSBwcm9wIGlzIGZ1bmN0aW9uIG9yIGdldHRlciBhbmQgYmVoYXZlc1xuICAgKiBhY2NvcmRpbmdseS4gKi9cblxuICBmdW5jdGlvbiBsb29rdXBHZXR0ZXIob2JqZWN0LCBwcm9wKSB7XG4gICAgd2hpbGUgKG9iamVjdCAhPT0gbnVsbCkge1xuICAgICAgdmFyIGRlc2MgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wKTtcblxuICAgICAgaWYgKGRlc2MpIHtcbiAgICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy5nZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmYWxsYmFja1ZhbHVlKGVsZW1lbnQpIHtcbiAgICAgIGNvbnNvbGUud2FybignZmFsbGJhY2sgdmFsdWUgZm9yJywgZWxlbWVudCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsbGJhY2tWYWx1ZTtcbiAgfVxuXG4gIHZhciBodG1sJDEgPSBmcmVlemUoWydhJywgJ2FiYnInLCAnYWNyb255bScsICdhZGRyZXNzJywgJ2FyZWEnLCAnYXJ0aWNsZScsICdhc2lkZScsICdhdWRpbycsICdiJywgJ2JkaScsICdiZG8nLCAnYmlnJywgJ2JsaW5rJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLCAnY2FudmFzJywgJ2NhcHRpb24nLCAnY2VudGVyJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnY29udGVudCcsICdkYXRhJywgJ2RhdGFsaXN0JywgJ2RkJywgJ2RlY29yYXRvcicsICdkZWwnLCAnZGV0YWlscycsICdkZm4nLCAnZGlhbG9nJywgJ2RpcicsICdkaXYnLCAnZGwnLCAnZHQnLCAnZWxlbWVudCcsICdlbScsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb250JywgJ2Zvb3RlcicsICdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaW1nJywgJ2lucHV0JywgJ2lucycsICdrYmQnLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ21haW4nLCAnbWFwJywgJ21hcmsnLCAnbWFycXVlZScsICdtZW51JywgJ21lbnVpdGVtJywgJ21ldGVyJywgJ25hdicsICdub2JyJywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwaWN0dXJlJywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JwJywgJ3J0JywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NlY3Rpb24nLCAnc2VsZWN0JywgJ3NoYWRvdycsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhY2VyJywgJ3NwYW4nLCAnc3RyaWtlJywgJ3N0cm9uZycsICdzdHlsZScsICdzdWInLCAnc3VtbWFyeScsICdzdXAnLCAndGFibGUnLCAndGJvZHknLCAndGQnLCAndGVtcGxhdGUnLCAndGV4dGFyZWEnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGltZScsICd0cicsICd0cmFjaycsICd0dCcsICd1JywgJ3VsJywgJ3ZhcicsICd2aWRlbycsICd3YnInXSk7IC8vIFNWR1xuXG4gIHZhciBzdmckMSA9IGZyZWV6ZShbJ3N2ZycsICdhJywgJ2FsdGdseXBoJywgJ2FsdGdseXBoZGVmJywgJ2FsdGdseXBoaXRlbScsICdhbmltYXRlY29sb3InLCAnYW5pbWF0ZW1vdGlvbicsICdhbmltYXRldHJhbnNmb3JtJywgJ2NpcmNsZScsICdjbGlwcGF0aCcsICdkZWZzJywgJ2Rlc2MnLCAnZWxsaXBzZScsICdmaWx0ZXInLCAnZm9udCcsICdnJywgJ2dseXBoJywgJ2dseXBocmVmJywgJ2hrZXJuJywgJ2ltYWdlJywgJ2xpbmUnLCAnbGluZWFyZ3JhZGllbnQnLCAnbWFya2VyJywgJ21hc2snLCAnbWV0YWRhdGEnLCAnbXBhdGgnLCAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmFkaWFsZ3JhZGllbnQnLCAncmVjdCcsICdzdG9wJywgJ3N0eWxlJywgJ3N3aXRjaCcsICdzeW1ib2wnLCAndGV4dCcsICd0ZXh0cGF0aCcsICd0aXRsZScsICd0cmVmJywgJ3RzcGFuJywgJ3ZpZXcnLCAndmtlcm4nXSk7XG4gIHZhciBzdmdGaWx0ZXJzID0gZnJlZXplKFsnZmVCbGVuZCcsICdmZUNvbG9yTWF0cml4JywgJ2ZlQ29tcG9uZW50VHJhbnNmZXInLCAnZmVDb21wb3NpdGUnLCAnZmVDb252b2x2ZU1hdHJpeCcsICdmZURpZmZ1c2VMaWdodGluZycsICdmZURpc3BsYWNlbWVudE1hcCcsICdmZURpc3RhbnRMaWdodCcsICdmZUZsb29kJywgJ2ZlRnVuY0EnLCAnZmVGdW5jQicsICdmZUZ1bmNHJywgJ2ZlRnVuY1InLCAnZmVHYXVzc2lhbkJsdXInLCAnZmVJbWFnZScsICdmZU1lcmdlJywgJ2ZlTWVyZ2VOb2RlJywgJ2ZlTW9ycGhvbG9neScsICdmZU9mZnNldCcsICdmZVBvaW50TGlnaHQnLCAnZmVTcGVjdWxhckxpZ2h0aW5nJywgJ2ZlU3BvdExpZ2h0JywgJ2ZlVGlsZScsICdmZVR1cmJ1bGVuY2UnXSk7IC8vIExpc3Qgb2YgU1ZHIGVsZW1lbnRzIHRoYXQgYXJlIGRpc2FsbG93ZWQgYnkgZGVmYXVsdC5cbiAgLy8gV2Ugc3RpbGwgbmVlZCB0byBrbm93IHRoZW0gc28gdGhhdCB3ZSBjYW4gZG8gbmFtZXNwYWNlXG4gIC8vIGNoZWNrcyBwcm9wZXJseSBpbiBjYXNlIG9uZSB3YW50cyB0byBhZGQgdGhlbSB0b1xuICAvLyBhbGxvdy1saXN0LlxuXG4gIHZhciBzdmdEaXNhbGxvd2VkID0gZnJlZXplKFsnYW5pbWF0ZScsICdjb2xvci1wcm9maWxlJywgJ2N1cnNvcicsICdkaXNjYXJkJywgJ2ZlZHJvcHNoYWRvdycsICdmb250LWZhY2UnLCAnZm9udC1mYWNlLWZvcm1hdCcsICdmb250LWZhY2UtbmFtZScsICdmb250LWZhY2Utc3JjJywgJ2ZvbnQtZmFjZS11cmknLCAnZm9yZWlnbm9iamVjdCcsICdoYXRjaCcsICdoYXRjaHBhdGgnLCAnbWVzaCcsICdtZXNoZ3JhZGllbnQnLCAnbWVzaHBhdGNoJywgJ21lc2hyb3cnLCAnbWlzc2luZy1nbHlwaCcsICdzY3JpcHQnLCAnc2V0JywgJ3NvbGlkY29sb3InLCAndW5rbm93bicsICd1c2UnXSk7XG4gIHZhciBtYXRoTWwkMSA9IGZyZWV6ZShbJ21hdGgnLCAnbWVuY2xvc2UnLCAnbWVycm9yJywgJ21mZW5jZWQnLCAnbWZyYWMnLCAnbWdseXBoJywgJ21pJywgJ21sYWJlbGVkdHInLCAnbW11bHRpc2NyaXB0cycsICdtbicsICdtbycsICdtb3ZlcicsICdtcGFkZGVkJywgJ21waGFudG9tJywgJ21yb290JywgJ21yb3cnLCAnbXMnLCAnbXNwYWNlJywgJ21zcXJ0JywgJ21zdHlsZScsICdtc3ViJywgJ21zdXAnLCAnbXN1YnN1cCcsICdtdGFibGUnLCAnbXRkJywgJ210ZXh0JywgJ210cicsICdtdW5kZXInLCAnbXVuZGVyb3ZlciddKTsgLy8gU2ltaWxhcmx5IHRvIFNWRywgd2Ugd2FudCB0byBrbm93IGFsbCBNYXRoTUwgZWxlbWVudHMsXG4gIC8vIGV2ZW4gdGhvc2UgdGhhdCB3ZSBkaXNhbGxvdyBieSBkZWZhdWx0LlxuXG4gIHZhciBtYXRoTWxEaXNhbGxvd2VkID0gZnJlZXplKFsnbWFjdGlvbicsICdtYWxpZ25ncm91cCcsICdtYWxpZ25tYXJrJywgJ21sb25nZGl2JywgJ21zY2FycmllcycsICdtc2NhcnJ5JywgJ21zZ3JvdXAnLCAnbXN0YWNrJywgJ21zbGluZScsICdtc3JvdycsICdzZW1hbnRpY3MnLCAnYW5ub3RhdGlvbicsICdhbm5vdGF0aW9uLXhtbCcsICdtcHJlc2NyaXB0cycsICdub25lJ10pO1xuICB2YXIgdGV4dCA9IGZyZWV6ZShbJyN0ZXh0J10pO1xuXG4gIHZhciBodG1sID0gZnJlZXplKFsnYWNjZXB0JywgJ2FjdGlvbicsICdhbGlnbicsICdhbHQnLCAnYXV0b2NhcGl0YWxpemUnLCAnYXV0b2NvbXBsZXRlJywgJ2F1dG9waWN0dXJlaW5waWN0dXJlJywgJ2F1dG9wbGF5JywgJ2JhY2tncm91bmQnLCAnYmdjb2xvcicsICdib3JkZXInLCAnY2FwdHVyZScsICdjZWxscGFkZGluZycsICdjZWxsc3BhY2luZycsICdjaGVja2VkJywgJ2NpdGUnLCAnY2xhc3MnLCAnY2xlYXInLCAnY29sb3InLCAnY29scycsICdjb2xzcGFuJywgJ2NvbnRyb2xzJywgJ2NvbnRyb2xzbGlzdCcsICdjb29yZHMnLCAnY3Jvc3NvcmlnaW4nLCAnZGF0ZXRpbWUnLCAnZGVjb2RpbmcnLCAnZGVmYXVsdCcsICdkaXInLCAnZGlzYWJsZWQnLCAnZGlzYWJsZXBpY3R1cmVpbnBpY3R1cmUnLCAnZGlzYWJsZXJlbW90ZXBsYXliYWNrJywgJ2Rvd25sb2FkJywgJ2RyYWdnYWJsZScsICdlbmN0eXBlJywgJ2VudGVya2V5aGludCcsICdmYWNlJywgJ2ZvcicsICdoZWFkZXJzJywgJ2hlaWdodCcsICdoaWRkZW4nLCAnaGlnaCcsICdocmVmJywgJ2hyZWZsYW5nJywgJ2lkJywgJ2lucHV0bW9kZScsICdpbnRlZ3JpdHknLCAnaXNtYXAnLCAna2luZCcsICdsYWJlbCcsICdsYW5nJywgJ2xpc3QnLCAnbG9hZGluZycsICdsb29wJywgJ2xvdycsICdtYXgnLCAnbWF4bGVuZ3RoJywgJ21lZGlhJywgJ21ldGhvZCcsICdtaW4nLCAnbWlubGVuZ3RoJywgJ211bHRpcGxlJywgJ211dGVkJywgJ25hbWUnLCAnbm9uY2UnLCAnbm9zaGFkZScsICdub3ZhbGlkYXRlJywgJ25vd3JhcCcsICdvcGVuJywgJ29wdGltdW0nLCAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdwbGF5c2lubGluZScsICdwb3N0ZXInLCAncHJlbG9hZCcsICdwdWJkYXRlJywgJ3JhZGlvZ3JvdXAnLCAncmVhZG9ubHknLCAncmVsJywgJ3JlcXVpcmVkJywgJ3JldicsICdyZXZlcnNlZCcsICdyb2xlJywgJ3Jvd3MnLCAncm93c3BhbicsICdzcGVsbGNoZWNrJywgJ3Njb3BlJywgJ3NlbGVjdGVkJywgJ3NoYXBlJywgJ3NpemUnLCAnc2l6ZXMnLCAnc3BhbicsICdzcmNsYW5nJywgJ3N0YXJ0JywgJ3NyYycsICdzcmNzZXQnLCAnc3RlcCcsICdzdHlsZScsICdzdW1tYXJ5JywgJ3RhYmluZGV4JywgJ3RpdGxlJywgJ3RyYW5zbGF0ZScsICd0eXBlJywgJ3VzZW1hcCcsICd2YWxpZ24nLCAndmFsdWUnLCAnd2lkdGgnLCAneG1sbnMnLCAnc2xvdCddKTtcbiAgdmFyIHN2ZyA9IGZyZWV6ZShbJ2FjY2VudC1oZWlnaHQnLCAnYWNjdW11bGF0ZScsICdhZGRpdGl2ZScsICdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnYXNjZW50JywgJ2F0dHJpYnV0ZW5hbWUnLCAnYXR0cmlidXRldHlwZScsICdhemltdXRoJywgJ2Jhc2VmcmVxdWVuY3knLCAnYmFzZWxpbmUtc2hpZnQnLCAnYmVnaW4nLCAnYmlhcycsICdieScsICdjbGFzcycsICdjbGlwJywgJ2NsaXBwYXRodW5pdHMnLCAnY2xpcC1wYXRoJywgJ2NsaXAtcnVsZScsICdjb2xvcicsICdjb2xvci1pbnRlcnBvbGF0aW9uJywgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsICdjb2xvci1wcm9maWxlJywgJ2NvbG9yLXJlbmRlcmluZycsICdjeCcsICdjeScsICdkJywgJ2R4JywgJ2R5JywgJ2RpZmZ1c2Vjb25zdGFudCcsICdkaXJlY3Rpb24nLCAnZGlzcGxheScsICdkaXZpc29yJywgJ2R1cicsICdlZGdlbW9kZScsICdlbGV2YXRpb24nLCAnZW5kJywgJ2ZpbGwnLCAnZmlsbC1vcGFjaXR5JywgJ2ZpbGwtcnVsZScsICdmaWx0ZXInLCAnZmlsdGVydW5pdHMnLCAnZmxvb2QtY29sb3InLCAnZmxvb2Qtb3BhY2l0eScsICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zaXplLWFkanVzdCcsICdmb250LXN0cmV0Y2gnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLCAnZngnLCAnZnknLCAnZzEnLCAnZzInLCAnZ2x5cGgtbmFtZScsICdnbHlwaHJlZicsICdncmFkaWVudHVuaXRzJywgJ2dyYWRpZW50dHJhbnNmb3JtJywgJ2hlaWdodCcsICdocmVmJywgJ2lkJywgJ2ltYWdlLXJlbmRlcmluZycsICdpbicsICdpbjInLCAnaycsICdrMScsICdrMicsICdrMycsICdrNCcsICdrZXJuaW5nJywgJ2tleXBvaW50cycsICdrZXlzcGxpbmVzJywgJ2tleXRpbWVzJywgJ2xhbmcnLCAnbGVuZ3RoYWRqdXN0JywgJ2xldHRlci1zcGFjaW5nJywgJ2tlcm5lbG1hdHJpeCcsICdrZXJuZWx1bml0bGVuZ3RoJywgJ2xpZ2h0aW5nLWNvbG9yJywgJ2xvY2FsJywgJ21hcmtlci1lbmQnLCAnbWFya2VyLW1pZCcsICdtYXJrZXItc3RhcnQnLCAnbWFya2VyaGVpZ2h0JywgJ21hcmtlcnVuaXRzJywgJ21hcmtlcndpZHRoJywgJ21hc2tjb250ZW50dW5pdHMnLCAnbWFza3VuaXRzJywgJ21heCcsICdtYXNrJywgJ21lZGlhJywgJ21ldGhvZCcsICdtb2RlJywgJ21pbicsICduYW1lJywgJ251bW9jdGF2ZXMnLCAnb2Zmc2V0JywgJ29wZXJhdG9yJywgJ29wYWNpdHknLCAnb3JkZXInLCAnb3JpZW50JywgJ29yaWVudGF0aW9uJywgJ29yaWdpbicsICdvdmVyZmxvdycsICdwYWludC1vcmRlcicsICdwYXRoJywgJ3BhdGhsZW5ndGgnLCAncGF0dGVybmNvbnRlbnR1bml0cycsICdwYXR0ZXJudHJhbnNmb3JtJywgJ3BhdHRlcm51bml0cycsICdwb2ludHMnLCAncHJlc2VydmVhbHBoYScsICdwcmVzZXJ2ZWFzcGVjdHJhdGlvJywgJ3ByaW1pdGl2ZXVuaXRzJywgJ3InLCAncngnLCAncnknLCAncmFkaXVzJywgJ3JlZngnLCAncmVmeScsICdyZXBlYXRjb3VudCcsICdyZXBlYXRkdXInLCAncmVzdGFydCcsICdyZXN1bHQnLCAncm90YXRlJywgJ3NjYWxlJywgJ3NlZWQnLCAnc2hhcGUtcmVuZGVyaW5nJywgJ3NwZWN1bGFyY29uc3RhbnQnLCAnc3BlY3VsYXJleHBvbmVudCcsICdzcHJlYWRtZXRob2QnLCAnc3RhcnRvZmZzZXQnLCAnc3RkZGV2aWF0aW9uJywgJ3N0aXRjaHRpbGVzJywgJ3N0b3AtY29sb3InLCAnc3RvcC1vcGFjaXR5JywgJ3N0cm9rZS1kYXNoYXJyYXknLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLWxpbmVjYXAnLCAnc3Ryb2tlLWxpbmVqb2luJywgJ3N0cm9rZS1taXRlcmxpbWl0JywgJ3N0cm9rZS1vcGFjaXR5JywgJ3N0cm9rZScsICdzdHJva2Utd2lkdGgnLCAnc3R5bGUnLCAnc3VyZmFjZXNjYWxlJywgJ3N5c3RlbWxhbmd1YWdlJywgJ3RhYmluZGV4JywgJ3RhcmdldHgnLCAndGFyZ2V0eScsICd0cmFuc2Zvcm0nLCAndHJhbnNmb3JtLW9yaWdpbicsICd0ZXh0LWFuY2hvcicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1yZW5kZXJpbmcnLCAndGV4dGxlbmd0aCcsICd0eXBlJywgJ3UxJywgJ3UyJywgJ3VuaWNvZGUnLCAndmFsdWVzJywgJ3ZpZXdib3gnLCAndmlzaWJpbGl0eScsICd2ZXJzaW9uJywgJ3ZlcnQtYWR2LXknLCAndmVydC1vcmlnaW4teCcsICd2ZXJ0LW9yaWdpbi15JywgJ3dpZHRoJywgJ3dvcmQtc3BhY2luZycsICd3cmFwJywgJ3dyaXRpbmctbW9kZScsICd4Y2hhbm5lbHNlbGVjdG9yJywgJ3ljaGFubmVsc2VsZWN0b3InLCAneCcsICd4MScsICd4MicsICd4bWxucycsICd5JywgJ3kxJywgJ3kyJywgJ3onLCAnem9vbWFuZHBhbiddKTtcbiAgdmFyIG1hdGhNbCA9IGZyZWV6ZShbJ2FjY2VudCcsICdhY2NlbnR1bmRlcicsICdhbGlnbicsICdiZXZlbGxlZCcsICdjbG9zZScsICdjb2x1bW5zYWxpZ24nLCAnY29sdW1ubGluZXMnLCAnY29sdW1uc3BhbicsICdkZW5vbWFsaWduJywgJ2RlcHRoJywgJ2RpcicsICdkaXNwbGF5JywgJ2Rpc3BsYXlzdHlsZScsICdlbmNvZGluZycsICdmZW5jZScsICdmcmFtZScsICdoZWlnaHQnLCAnaHJlZicsICdpZCcsICdsYXJnZW9wJywgJ2xlbmd0aCcsICdsaW5ldGhpY2tuZXNzJywgJ2xzcGFjZScsICdscXVvdGUnLCAnbWF0aGJhY2tncm91bmQnLCAnbWF0aGNvbG9yJywgJ21hdGhzaXplJywgJ21hdGh2YXJpYW50JywgJ21heHNpemUnLCAnbWluc2l6ZScsICdtb3ZhYmxlbGltaXRzJywgJ25vdGF0aW9uJywgJ251bWFsaWduJywgJ29wZW4nLCAncm93YWxpZ24nLCAncm93bGluZXMnLCAncm93c3BhY2luZycsICdyb3dzcGFuJywgJ3JzcGFjZScsICdycXVvdGUnLCAnc2NyaXB0bGV2ZWwnLCAnc2NyaXB0bWluc2l6ZScsICdzY3JpcHRzaXplbXVsdGlwbGllcicsICdzZWxlY3Rpb24nLCAnc2VwYXJhdG9yJywgJ3NlcGFyYXRvcnMnLCAnc3RyZXRjaHknLCAnc3Vic2NyaXB0c2hpZnQnLCAnc3Vwc2NyaXB0c2hpZnQnLCAnc3ltbWV0cmljJywgJ3ZvZmZzZXQnLCAnd2lkdGgnLCAneG1sbnMnXSk7XG4gIHZhciB4bWwgPSBmcmVlemUoWyd4bGluazpocmVmJywgJ3htbDppZCcsICd4bGluazp0aXRsZScsICd4bWw6c3BhY2UnLCAneG1sbnM6eGxpbmsnXSk7XG5cbiAgdmFyIE1VU1RBQ0hFX0VYUFIgPSBzZWFsKC9cXHtcXHtbXFx3XFxXXSp8W1xcd1xcV10qXFx9XFx9L2dtKTsgLy8gU3BlY2lmeSB0ZW1wbGF0ZSBkZXRlY3Rpb24gcmVnZXggZm9yIFNBRkVfRk9SX1RFTVBMQVRFUyBtb2RlXG5cbiAgdmFyIEVSQl9FWFBSID0gc2VhbCgvPCVbXFx3XFxXXSp8W1xcd1xcV10qJT4vZ20pO1xuICB2YXIgVE1QTElUX0VYUFIgPSBzZWFsKC9cXCR7W1xcd1xcV10qfS9nbSk7XG4gIHZhciBEQVRBX0FUVFIgPSBzZWFsKC9eZGF0YS1bXFwtXFx3LlxcdTAwQjctXFx1RkZGRl0vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuXG4gIHZhciBBUklBX0FUVFIgPSBzZWFsKC9eYXJpYS1bXFwtXFx3XSskLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcblxuICB2YXIgSVNfQUxMT1dFRF9VUkkgPSBzZWFsKC9eKD86KD86KD86ZnxodCl0cHM/fG1haWx0b3x0ZWx8Y2FsbHRvfGNpZHx4bXBwKTp8W15hLXpdfFthLXorLlxcLV0rKD86W15hLXorLlxcLTpdfCQpKS9pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgKTtcbiAgdmFyIElTX1NDUklQVF9PUl9EQVRBID0gc2VhbCgvXig/OlxcdytzY3JpcHR8ZGF0YSk6L2kpO1xuICB2YXIgQVRUUl9XSElURVNQQUNFID0gc2VhbCgvW1xcdTAwMDAtXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAyOVxcdTIwNUZcXHUzMDAwXS9nIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29udHJvbC1yZWdleFxuICApO1xuICB2YXIgRE9DVFlQRV9OQU1FID0gc2VhbCgvXmh0bWwkL2kpO1xuXG4gIHZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiBnZXRHbG9iYWwoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdztcbiAgfTtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuby1vcCBwb2xpY3kgZm9yIGludGVybmFsIHVzZSBvbmx5LlxuICAgKiBEb24ndCBleHBvcnQgdGhpcyBmdW5jdGlvbiBvdXRzaWRlIHRoaXMgbW9kdWxlIVxuICAgKiBAcGFyYW0gez9UcnVzdGVkVHlwZVBvbGljeUZhY3Rvcnl9IHRydXN0ZWRUeXBlcyBUaGUgcG9saWN5IGZhY3RvcnkuXG4gICAqIEBwYXJhbSB7RG9jdW1lbnR9IGRvY3VtZW50IFRoZSBkb2N1bWVudCBvYmplY3QgKHRvIGRldGVybWluZSBwb2xpY3kgbmFtZSBzdWZmaXgpXG4gICAqIEByZXR1cm4gez9UcnVzdGVkVHlwZVBvbGljeX0gVGhlIHBvbGljeSBjcmVhdGVkIChvciBudWxsLCBpZiBUcnVzdGVkIFR5cGVzXG4gICAqIGFyZSBub3Qgc3VwcG9ydGVkKS5cbiAgICovXG5cblxuICB2YXIgX2NyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSA9IGZ1bmN0aW9uIF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kodHJ1c3RlZFR5cGVzLCBkb2N1bWVudCkge1xuICAgIGlmIChfdHlwZW9mKHRydXN0ZWRUeXBlcykgIT09ICdvYmplY3QnIHx8IHR5cGVvZiB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IC8vIEFsbG93IHRoZSBjYWxsZXJzIHRvIGNvbnRyb2wgdGhlIHVuaXF1ZSBwb2xpY3kgbmFtZVxuICAgIC8vIGJ5IGFkZGluZyBhIGRhdGEtdHQtcG9saWN5LXN1ZmZpeCB0byB0aGUgc2NyaXB0IGVsZW1lbnQgd2l0aCB0aGUgRE9NUHVyaWZ5LlxuICAgIC8vIFBvbGljeSBjcmVhdGlvbiB3aXRoIGR1cGxpY2F0ZSBuYW1lcyB0aHJvd3MgaW4gVHJ1c3RlZCBUeXBlcy5cblxuXG4gICAgdmFyIHN1ZmZpeCA9IG51bGw7XG4gICAgdmFyIEFUVFJfTkFNRSA9ICdkYXRhLXR0LXBvbGljeS1zdWZmaXgnO1xuXG4gICAgaWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC5oYXNBdHRyaWJ1dGUoQVRUUl9OQU1FKSkge1xuICAgICAgc3VmZml4ID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5nZXRBdHRyaWJ1dGUoQVRUUl9OQU1FKTtcbiAgICB9XG5cbiAgICB2YXIgcG9saWN5TmFtZSA9ICdkb21wdXJpZnknICsgKHN1ZmZpeCA/ICcjJyArIHN1ZmZpeCA6ICcnKTtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeShwb2xpY3lOYW1lLCB7XG4gICAgICAgIGNyZWF0ZUhUTUw6IGZ1bmN0aW9uIGNyZWF0ZUhUTUwoaHRtbCkge1xuICAgICAgICAgIHJldHVybiBodG1sO1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVTY3JpcHRVUkw6IGZ1bmN0aW9uIGNyZWF0ZVNjcmlwdFVSTChzY3JpcHRVcmwpIHtcbiAgICAgICAgICByZXR1cm4gc2NyaXB0VXJsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAvLyBQb2xpY3kgY3JlYXRpb24gZmFpbGVkIChtb3N0IGxpa2VseSBhbm90aGVyIERPTVB1cmlmeSBzY3JpcHQgaGFzXG4gICAgICAvLyBhbHJlYWR5IHJ1bikuIFNraXAgY3JlYXRpbmcgdGhlIHBvbGljeSwgYXMgdGhpcyB3aWxsIG9ubHkgY2F1c2UgZXJyb3JzXG4gICAgICAvLyBpZiBUVCBhcmUgZW5mb3JjZWQuXG4gICAgICBjb25zb2xlLndhcm4oJ1RydXN0ZWRUeXBlcyBwb2xpY3kgJyArIHBvbGljeU5hbWUgKyAnIGNvdWxkIG5vdCBiZSBjcmVhdGVkLicpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZURPTVB1cmlmeSgpIHtcbiAgICB2YXIgd2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBnZXRHbG9iYWwoKTtcblxuICAgIHZhciBET01QdXJpZnkgPSBmdW5jdGlvbiBET01QdXJpZnkocm9vdCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZURPTVB1cmlmeShyb290KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFZlcnNpb24gbGFiZWwsIGV4cG9zZWQgZm9yIGVhc2llciBjaGVja3NcbiAgICAgKiBpZiBET01QdXJpZnkgaXMgdXAgdG8gZGF0ZSBvciBub3RcbiAgICAgKi9cblxuXG4gICAgRE9NUHVyaWZ5LnZlcnNpb24gPSAnMi40LjEnO1xuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIGVsZW1lbnRzIHRoYXQgRE9NUHVyaWZ5IHJlbW92ZWQgZHVyaW5nIHNhbml0YXRpb24uXG4gICAgICogRW1wdHkgaWYgbm90aGluZyB3YXMgcmVtb3ZlZC5cbiAgICAgKi9cblxuICAgIERPTVB1cmlmeS5yZW1vdmVkID0gW107XG5cbiAgICBpZiAoIXdpbmRvdyB8fCAhd2luZG93LmRvY3VtZW50IHx8IHdpbmRvdy5kb2N1bWVudC5ub2RlVHlwZSAhPT0gOSkge1xuICAgICAgLy8gTm90IHJ1bm5pbmcgaW4gYSBicm93c2VyLCBwcm92aWRlIGEgZmFjdG9yeSBmdW5jdGlvblxuICAgICAgLy8gc28gdGhhdCB5b3UgY2FuIHBhc3MgeW91ciBvd24gV2luZG93XG4gICAgICBET01QdXJpZnkuaXNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBET01QdXJpZnk7XG4gICAgfVxuXG4gICAgdmFyIG9yaWdpbmFsRG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuICAgIHZhciBEb2N1bWVudEZyYWdtZW50ID0gd2luZG93LkRvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPSB3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudCxcbiAgICAgICAgTm9kZSA9IHdpbmRvdy5Ob2RlLFxuICAgICAgICBFbGVtZW50ID0gd2luZG93LkVsZW1lbnQsXG4gICAgICAgIE5vZGVGaWx0ZXIgPSB3aW5kb3cuTm9kZUZpbHRlcixcbiAgICAgICAgX3dpbmRvdyROYW1lZE5vZGVNYXAgPSB3aW5kb3cuTmFtZWROb2RlTWFwLFxuICAgICAgICBOYW1lZE5vZGVNYXAgPSBfd2luZG93JE5hbWVkTm9kZU1hcCA9PT0gdm9pZCAwID8gd2luZG93Lk5hbWVkTm9kZU1hcCB8fCB3aW5kb3cuTW96TmFtZWRBdHRyTWFwIDogX3dpbmRvdyROYW1lZE5vZGVNYXAsXG4gICAgICAgIEhUTUxGb3JtRWxlbWVudCA9IHdpbmRvdy5IVE1MRm9ybUVsZW1lbnQsXG4gICAgICAgIERPTVBhcnNlciA9IHdpbmRvdy5ET01QYXJzZXIsXG4gICAgICAgIHRydXN0ZWRUeXBlcyA9IHdpbmRvdy50cnVzdGVkVHlwZXM7XG4gICAgdmFyIEVsZW1lbnRQcm90b3R5cGUgPSBFbGVtZW50LnByb3RvdHlwZTtcbiAgICB2YXIgY2xvbmVOb2RlID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdjbG9uZU5vZGUnKTtcbiAgICB2YXIgZ2V0TmV4dFNpYmxpbmcgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ25leHRTaWJsaW5nJyk7XG4gICAgdmFyIGdldENoaWxkTm9kZXMgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ2NoaWxkTm9kZXMnKTtcbiAgICB2YXIgZ2V0UGFyZW50Tm9kZSA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAncGFyZW50Tm9kZScpOyAvLyBBcyBwZXIgaXNzdWUgIzQ3LCB0aGUgd2ViLWNvbXBvbmVudHMgcmVnaXN0cnkgaXMgaW5oZXJpdGVkIGJ5IGFcbiAgICAvLyBuZXcgZG9jdW1lbnQgY3JlYXRlZCB2aWEgY3JlYXRlSFRNTERvY3VtZW50LiBBcyBwZXIgdGhlIHNwZWNcbiAgICAvLyAoaHR0cDovL3czYy5naXRodWIuaW8vd2ViY29tcG9uZW50cy9zcGVjL2N1c3RvbS8jY3JlYXRpbmctYW5kLXBhc3NpbmctcmVnaXN0cmllcylcbiAgICAvLyBhIG5ldyBlbXB0eSByZWdpc3RyeSBpcyB1c2VkIHdoZW4gY3JlYXRpbmcgYSB0ZW1wbGF0ZSBjb250ZW50cyBvd25lclxuICAgIC8vIGRvY3VtZW50LCBzbyB3ZSB1c2UgdGhhdCBhcyBvdXIgcGFyZW50IGRvY3VtZW50IHRvIGVuc3VyZSBub3RoaW5nXG4gICAgLy8gaXMgaW5oZXJpdGVkLlxuXG4gICAgaWYgKHR5cGVvZiBIVE1MVGVtcGxhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4gICAgICBpZiAodGVtcGxhdGUuY29udGVudCAmJiB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQgPSB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHRydXN0ZWRUeXBlc1BvbGljeSA9IF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kodHJ1c3RlZFR5cGVzLCBvcmlnaW5hbERvY3VtZW50KTtcblxuICAgIHZhciBlbXB0eUhUTUwgPSB0cnVzdGVkVHlwZXNQb2xpY3kgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTCgnJykgOiAnJztcbiAgICB2YXIgX2RvY3VtZW50ID0gZG9jdW1lbnQsXG4gICAgICAgIGltcGxlbWVudGF0aW9uID0gX2RvY3VtZW50LmltcGxlbWVudGF0aW9uLFxuICAgICAgICBjcmVhdGVOb2RlSXRlcmF0b3IgPSBfZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yLFxuICAgICAgICBjcmVhdGVEb2N1bWVudEZyYWdtZW50ID0gX2RvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lID0gX2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lO1xuICAgIHZhciBpbXBvcnROb2RlID0gb3JpZ2luYWxEb2N1bWVudC5pbXBvcnROb2RlO1xuICAgIHZhciBkb2N1bWVudE1vZGUgPSB7fTtcblxuICAgIHRyeSB7XG4gICAgICBkb2N1bWVudE1vZGUgPSBjbG9uZShkb2N1bWVudCkuZG9jdW1lbnRNb2RlID8gZG9jdW1lbnQuZG9jdW1lbnRNb2RlIDoge307XG4gICAgfSBjYXRjaCAoXykge31cblxuICAgIHZhciBob29rcyA9IHt9O1xuICAgIC8qKlxuICAgICAqIEV4cG9zZSB3aGV0aGVyIHRoaXMgYnJvd3NlciBzdXBwb3J0cyBydW5uaW5nIHRoZSBmdWxsIERPTVB1cmlmeS5cbiAgICAgKi9cblxuICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IHR5cGVvZiBnZXRQYXJlbnROb2RlID09PSAnZnVuY3Rpb24nICYmIGltcGxlbWVudGF0aW9uICYmIHR5cGVvZiBpbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50TW9kZSAhPT0gOTtcbiAgICB2YXIgTVVTVEFDSEVfRVhQUiQxID0gTVVTVEFDSEVfRVhQUixcbiAgICAgICAgRVJCX0VYUFIkMSA9IEVSQl9FWFBSLFxuICAgICAgICBUTVBMSVRfRVhQUiQxID0gVE1QTElUX0VYUFIsXG4gICAgICAgIERBVEFfQVRUUiQxID0gREFUQV9BVFRSLFxuICAgICAgICBBUklBX0FUVFIkMSA9IEFSSUFfQVRUUixcbiAgICAgICAgSVNfU0NSSVBUX09SX0RBVEEkMSA9IElTX1NDUklQVF9PUl9EQVRBLFxuICAgICAgICBBVFRSX1dISVRFU1BBQ0UkMSA9IEFUVFJfV0hJVEVTUEFDRTtcbiAgICB2YXIgSVNfQUxMT1dFRF9VUkkkMSA9IElTX0FMTE9XRURfVVJJO1xuICAgIC8qKlxuICAgICAqIFdlIGNvbnNpZGVyIHRoZSBlbGVtZW50cyBhbmQgYXR0cmlidXRlcyBiZWxvdyB0byBiZSBzYWZlLiBJZGVhbGx5XG4gICAgICogZG9uJ3QgYWRkIGFueSBuZXcgb25lcyBidXQgZmVlbCBmcmVlIHRvIHJlbW92ZSB1bndhbnRlZCBvbmVzLlxuICAgICAqL1xuXG4gICAgLyogYWxsb3dlZCBlbGVtZW50IG5hbWVzICovXG5cbiAgICB2YXIgQUxMT1dFRF9UQUdTID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9BTExPV0VEX1RBR1MgPSBhZGRUb1NldCh7fSwgW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShodG1sJDEpLCBfdG9Db25zdW1hYmxlQXJyYXkoc3ZnJDEpLCBfdG9Db25zdW1hYmxlQXJyYXkoc3ZnRmlsdGVycyksIF90b0NvbnN1bWFibGVBcnJheShtYXRoTWwkMSksIF90b0NvbnN1bWFibGVBcnJheSh0ZXh0KSkpO1xuICAgIC8qIEFsbG93ZWQgYXR0cmlidXRlIG5hbWVzICovXG5cbiAgICB2YXIgQUxMT1dFRF9BVFRSID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9BTExPV0VEX0FUVFIgPSBhZGRUb1NldCh7fSwgW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShodG1sKSwgX3RvQ29uc3VtYWJsZUFycmF5KHN2ZyksIF90b0NvbnN1bWFibGVBcnJheShtYXRoTWwpLCBfdG9Db25zdW1hYmxlQXJyYXkoeG1sKSkpO1xuICAgIC8qXG4gICAgICogQ29uZmlndXJlIGhvdyBET01QVXJpZnkgc2hvdWxkIGhhbmRsZSBjdXN0b20gZWxlbWVudHMgYW5kIHRoZWlyIGF0dHJpYnV0ZXMgYXMgd2VsbCBhcyBjdXN0b21pemVkIGJ1aWx0LWluIGVsZW1lbnRzLlxuICAgICAqIEBwcm9wZXJ0eSB7UmVnRXhwfEZ1bmN0aW9ufG51bGx9IHRhZ05hbWVDaGVjayBvbmUgb2YgW251bGwsIHJlZ2V4UGF0dGVybiwgcHJlZGljYXRlXS4gRGVmYXVsdDogYG51bGxgIChkaXNhbGxvdyBhbnkgY3VzdG9tIGVsZW1lbnRzKVxuICAgICAqIEBwcm9wZXJ0eSB7UmVnRXhwfEZ1bmN0aW9ufG51bGx9IGF0dHJpYnV0ZU5hbWVDaGVjayBvbmUgb2YgW251bGwsIHJlZ2V4UGF0dGVybiwgcHJlZGljYXRlXS4gRGVmYXVsdDogYG51bGxgIChkaXNhbGxvdyBhbnkgYXR0cmlidXRlcyBub3Qgb24gdGhlIGFsbG93IGxpc3QpXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBhbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgYWxsb3cgY3VzdG9tIGVsZW1lbnRzIGRlcml2ZWQgZnJvbSBidWlsdC1pbnMgaWYgdGhleSBwYXNzIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjay4gRGVmYXVsdDogYGZhbHNlYC5cbiAgICAgKi9cblxuICAgIHZhciBDVVNUT01fRUxFTUVOVF9IQU5ETElORyA9IE9iamVjdC5zZWFsKE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgICAgdGFnTmFtZUNoZWNrOiB7XG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZU5hbWVDaGVjazoge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sXG4gICAgICBhbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHM6IHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfVxuICAgIH0pKTtcbiAgICAvKiBFeHBsaWNpdGx5IGZvcmJpZGRlbiB0YWdzIChvdmVycmlkZXMgQUxMT1dFRF9UQUdTL0FERF9UQUdTKSAqL1xuXG4gICAgdmFyIEZPUkJJRF9UQUdTID0gbnVsbDtcbiAgICAvKiBFeHBsaWNpdGx5IGZvcmJpZGRlbiBhdHRyaWJ1dGVzIChvdmVycmlkZXMgQUxMT1dFRF9BVFRSL0FERF9BVFRSKSAqL1xuXG4gICAgdmFyIEZPUkJJRF9BVFRSID0gbnVsbDtcbiAgICAvKiBEZWNpZGUgaWYgQVJJQSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG5cbiAgICB2YXIgQUxMT1dfQVJJQV9BVFRSID0gdHJ1ZTtcbiAgICAvKiBEZWNpZGUgaWYgY3VzdG9tIGRhdGEgYXR0cmlidXRlcyBhcmUgb2theSAqL1xuXG4gICAgdmFyIEFMTE9XX0RBVEFfQVRUUiA9IHRydWU7XG4gICAgLyogRGVjaWRlIGlmIHVua25vd24gcHJvdG9jb2xzIGFyZSBva2F5ICovXG5cbiAgICB2YXIgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBmYWxzZTtcbiAgICAvKiBPdXRwdXQgc2hvdWxkIGJlIHNhZmUgZm9yIGNvbW1vbiB0ZW1wbGF0ZSBlbmdpbmVzLlxuICAgICAqIFRoaXMgbWVhbnMsIERPTVB1cmlmeSByZW1vdmVzIGRhdGEgYXR0cmlidXRlcywgbXVzdGFjaGVzIGFuZCBFUkJcbiAgICAgKi9cblxuICAgIHZhciBTQUZFX0ZPUl9URU1QTEFURVMgPSBmYWxzZTtcbiAgICAvKiBEZWNpZGUgaWYgZG9jdW1lbnQgd2l0aCA8aHRtbD4uLi4gc2hvdWxkIGJlIHJldHVybmVkICovXG5cbiAgICB2YXIgV0hPTEVfRE9DVU1FTlQgPSBmYWxzZTtcbiAgICAvKiBUcmFjayB3aGV0aGVyIGNvbmZpZyBpcyBhbHJlYWR5IHNldCBvbiB0aGlzIGluc3RhbmNlIG9mIERPTVB1cmlmeS4gKi9cblxuICAgIHZhciBTRVRfQ09ORklHID0gZmFsc2U7XG4gICAgLyogRGVjaWRlIGlmIGFsbCBlbGVtZW50cyAoZS5nLiBzdHlsZSwgc2NyaXB0KSBtdXN0IGJlIGNoaWxkcmVuIG9mXG4gICAgICogZG9jdW1lbnQuYm9keS4gQnkgZGVmYXVsdCwgYnJvd3NlcnMgbWlnaHQgbW92ZSB0aGVtIHRvIGRvY3VtZW50LmhlYWQgKi9cblxuICAgIHZhciBGT1JDRV9CT0RZID0gZmFsc2U7XG4gICAgLyogRGVjaWRlIGlmIGEgRE9NIGBIVE1MQm9keUVsZW1lbnRgIHNob3VsZCBiZSByZXR1cm5lZCwgaW5zdGVhZCBvZiBhIGh0bWxcbiAgICAgKiBzdHJpbmcgKG9yIGEgVHJ1c3RlZEhUTUwgb2JqZWN0IGlmIFRydXN0ZWQgVHlwZXMgYXJlIHN1cHBvcnRlZCkuXG4gICAgICogSWYgYFdIT0xFX0RPQ1VNRU5UYCBpcyBlbmFibGVkIGEgYEhUTUxIdG1sRWxlbWVudGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkXG4gICAgICovXG5cbiAgICB2YXIgUkVUVVJOX0RPTSA9IGZhbHNlO1xuICAgIC8qIERlY2lkZSBpZiBhIERPTSBgRG9jdW1lbnRGcmFnbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxuICAgICAqIHN0cmluZyAgKG9yIGEgVHJ1c3RlZEhUTUwgb2JqZWN0IGlmIFRydXN0ZWQgVHlwZXMgYXJlIHN1cHBvcnRlZCkgKi9cblxuICAgIHZhciBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gZmFsc2U7XG4gICAgLyogVHJ5IHRvIHJldHVybiBhIFRydXN0ZWQgVHlwZSBvYmplY3QgaW5zdGVhZCBvZiBhIHN0cmluZywgcmV0dXJuIGEgc3RyaW5nIGluXG4gICAgICogY2FzZSBUcnVzdGVkIFR5cGVzIGFyZSBub3Qgc3VwcG9ydGVkICAqL1xuXG4gICAgdmFyIFJFVFVSTl9UUlVTVEVEX1RZUEUgPSBmYWxzZTtcbiAgICAvKiBPdXRwdXQgc2hvdWxkIGJlIGZyZWUgZnJvbSBET00gY2xvYmJlcmluZyBhdHRhY2tzP1xuICAgICAqIFRoaXMgc2FuaXRpemVzIG1hcmt1cHMgbmFtZWQgd2l0aCBjb2xsaWRpbmcsIGNsb2JiZXJhYmxlIGJ1aWx0LWluIERPTSBBUElzLlxuICAgICAqL1xuXG4gICAgdmFyIFNBTklUSVpFX0RPTSA9IHRydWU7XG4gICAgLyogQWNoaWV2ZSBmdWxsIERPTSBDbG9iYmVyaW5nIHByb3RlY3Rpb24gYnkgaXNvbGF0aW5nIHRoZSBuYW1lc3BhY2Ugb2YgbmFtZWRcbiAgICAgKiBwcm9wZXJ0aWVzIGFuZCBKUyB2YXJpYWJsZXMsIG1pdGlnYXRpbmcgYXR0YWNrcyB0aGF0IGFidXNlIHRoZSBIVE1ML0RPTSBzcGVjIHJ1bGVzLlxuICAgICAqXG4gICAgICogSFRNTC9ET00gc3BlYyBydWxlcyB0aGF0IGVuYWJsZSBET00gQ2xvYmJlcmluZzpcbiAgICAgKiAgIC0gTmFtZWQgQWNjZXNzIG9uIFdpbmRvdyAowqc3LjMuMylcbiAgICAgKiAgIC0gRE9NIFRyZWUgQWNjZXNzb3JzICjCpzMuMS41KVxuICAgICAqICAgLSBGb3JtIEVsZW1lbnQgUGFyZW50LUNoaWxkIFJlbGF0aW9ucyAowqc0LjEwLjMpXG4gICAgICogICAtIElmcmFtZSBzcmNkb2MgLyBOZXN0ZWQgV2luZG93UHJveGllcyAowqc0LjguNSlcbiAgICAgKiAgIC0gSFRNTENvbGxlY3Rpb24gKMKnNC4yLjEwLjIpXG4gICAgICpcbiAgICAgKiBOYW1lc3BhY2UgaXNvbGF0aW9uIGlzIGltcGxlbWVudGVkIGJ5IHByZWZpeGluZyBgaWRgIGFuZCBgbmFtZWAgYXR0cmlidXRlc1xuICAgICAqIHdpdGggYSBjb25zdGFudCBzdHJpbmcsIGkuZS4sIGB1c2VyLWNvbnRlbnQtYFxuICAgICAqL1xuXG4gICAgdmFyIFNBTklUSVpFX05BTUVEX1BST1BTID0gZmFsc2U7XG4gICAgdmFyIFNBTklUSVpFX05BTUVEX1BST1BTX1BSRUZJWCA9ICd1c2VyLWNvbnRlbnQtJztcbiAgICAvKiBLZWVwIGVsZW1lbnQgY29udGVudCB3aGVuIHJlbW92aW5nIGVsZW1lbnQ/ICovXG5cbiAgICB2YXIgS0VFUF9DT05URU5UID0gdHJ1ZTtcbiAgICAvKiBJZiBhIGBOb2RlYCBpcyBwYXNzZWQgdG8gc2FuaXRpemUoKSwgdGhlbiBwZXJmb3JtcyBzYW5pdGl6YXRpb24gaW4tcGxhY2UgaW5zdGVhZFxuICAgICAqIG9mIGltcG9ydGluZyBpdCBpbnRvIGEgbmV3IERvY3VtZW50IGFuZCByZXR1cm5pbmcgYSBzYW5pdGl6ZWQgY29weSAqL1xuXG4gICAgdmFyIElOX1BMQUNFID0gZmFsc2U7XG4gICAgLyogQWxsb3cgdXNhZ2Ugb2YgcHJvZmlsZXMgbGlrZSBodG1sLCBzdmcgYW5kIG1hdGhNbCAqL1xuXG4gICAgdmFyIFVTRV9QUk9GSUxFUyA9IHt9O1xuICAgIC8qIFRhZ3MgdG8gaWdub3JlIGNvbnRlbnQgb2Ygd2hlbiBLRUVQX0NPTlRFTlQgaXMgdHJ1ZSAqL1xuXG4gICAgdmFyIEZPUkJJRF9DT05URU5UUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfRk9SQklEX0NPTlRFTlRTID0gYWRkVG9TZXQoe30sIFsnYW5ub3RhdGlvbi14bWwnLCAnYXVkaW8nLCAnY29sZ3JvdXAnLCAnZGVzYycsICdmb3JlaWdub2JqZWN0JywgJ2hlYWQnLCAnaWZyYW1lJywgJ21hdGgnLCAnbWknLCAnbW4nLCAnbW8nLCAnbXMnLCAnbXRleHQnLCAnbm9lbWJlZCcsICdub2ZyYW1lcycsICdub3NjcmlwdCcsICdwbGFpbnRleHQnLCAnc2NyaXB0JywgJ3N0eWxlJywgJ3N2ZycsICd0ZW1wbGF0ZScsICd0aGVhZCcsICd0aXRsZScsICd2aWRlbycsICd4bXAnXSk7XG4gICAgLyogVGFncyB0aGF0IGFyZSBzYWZlIGZvciBkYXRhOiBVUklzICovXG5cbiAgICB2YXIgREFUQV9VUklfVEFHUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfREFUQV9VUklfVEFHUyA9IGFkZFRvU2V0KHt9LCBbJ2F1ZGlvJywgJ3ZpZGVvJywgJ2ltZycsICdzb3VyY2UnLCAnaW1hZ2UnLCAndHJhY2snXSk7XG4gICAgLyogQXR0cmlidXRlcyBzYWZlIGZvciB2YWx1ZXMgbGlrZSBcImphdmFzY3JpcHQ6XCIgKi9cblxuICAgIHZhciBVUklfU0FGRV9BVFRSSUJVVEVTID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTID0gYWRkVG9TZXQoe30sIFsnYWx0JywgJ2NsYXNzJywgJ2ZvcicsICdpZCcsICdsYWJlbCcsICduYW1lJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncm9sZScsICdzdW1tYXJ5JywgJ3RpdGxlJywgJ3ZhbHVlJywgJ3N0eWxlJywgJ3htbG5zJ10pO1xuICAgIHZhciBNQVRITUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xuICAgIHZhciBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgICB2YXIgSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG4gICAgLyogRG9jdW1lbnQgbmFtZXNwYWNlICovXG5cbiAgICB2YXIgTkFNRVNQQUNFID0gSFRNTF9OQU1FU1BBQ0U7XG4gICAgdmFyIElTX0VNUFRZX0lOUFVUID0gZmFsc2U7XG4gICAgLyogQWxsb3dlZCBYSFRNTCtYTUwgbmFtZXNwYWNlcyAqL1xuXG4gICAgdmFyIEFMTE9XRURfTkFNRVNQQUNFUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfQUxMT1dFRF9OQU1FU1BBQ0VTID0gYWRkVG9TZXQoe30sIFtNQVRITUxfTkFNRVNQQUNFLCBTVkdfTkFNRVNQQUNFLCBIVE1MX05BTUVTUEFDRV0sIHN0cmluZ1RvU3RyaW5nKTtcbiAgICAvKiBQYXJzaW5nIG9mIHN0cmljdCBYSFRNTCBkb2N1bWVudHMgKi9cblxuICAgIHZhciBQQVJTRVJfTUVESUFfVFlQRTtcbiAgICB2YXIgU1VQUE9SVEVEX1BBUlNFUl9NRURJQV9UWVBFUyA9IFsnYXBwbGljYXRpb24veGh0bWwreG1sJywgJ3RleHQvaHRtbCddO1xuICAgIHZhciBERUZBVUxUX1BBUlNFUl9NRURJQV9UWVBFID0gJ3RleHQvaHRtbCc7XG4gICAgdmFyIHRyYW5zZm9ybUNhc2VGdW5jO1xuICAgIC8qIEtlZXAgYSByZWZlcmVuY2UgdG8gY29uZmlnIHRvIHBhc3MgdG8gaG9va3MgKi9cblxuICAgIHZhciBDT05GSUcgPSBudWxsO1xuICAgIC8qIElkZWFsbHksIGRvIG5vdCB0b3VjaCBhbnl0aGluZyBiZWxvdyB0aGlzIGxpbmUgKi9cblxuICAgIC8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cblxuICAgIHZhciBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIHZhciBpc1JlZ2V4T3JGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzUmVnZXhPckZ1bmN0aW9uKHRlc3RWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRlc3RWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCB8fCB0ZXN0VmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9wYXJzZUNvbmZpZ1xuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBjZmcgb3B0aW9uYWwgY29uZmlnIGxpdGVyYWxcbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuXG5cbiAgICB2YXIgX3BhcnNlQ29uZmlnID0gZnVuY3Rpb24gX3BhcnNlQ29uZmlnKGNmZykge1xuICAgICAgaWYgKENPTkZJRyAmJiBDT05GSUcgPT09IGNmZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSB0YW1wZXJpbmcgKi9cblxuXG4gICAgICBpZiAoIWNmZyB8fCBfdHlwZW9mKGNmZykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNmZyA9IHt9O1xuICAgICAgfVxuICAgICAgLyogU2hpZWxkIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZyb20gcHJvdG90eXBlIHBvbGx1dGlvbiAqL1xuXG5cbiAgICAgIGNmZyA9IGNsb25lKGNmZyk7XG4gICAgICBQQVJTRVJfTUVESUFfVFlQRSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1pbmNsdWRlc1xuICAgICAgU1VQUE9SVEVEX1BBUlNFUl9NRURJQV9UWVBFUy5pbmRleE9mKGNmZy5QQVJTRVJfTUVESUFfVFlQRSkgPT09IC0xID8gUEFSU0VSX01FRElBX1RZUEUgPSBERUZBVUxUX1BBUlNFUl9NRURJQV9UWVBFIDogUEFSU0VSX01FRElBX1RZUEUgPSBjZmcuUEFSU0VSX01FRElBX1RZUEU7IC8vIEhUTUwgdGFncyBhbmQgYXR0cmlidXRlcyBhcmUgbm90IGNhc2Utc2Vuc2l0aXZlLCBjb252ZXJ0aW5nIHRvIGxvd2VyY2FzZS4gS2VlcGluZyBYSFRNTCBhcyBpcy5cblxuICAgICAgdHJhbnNmb3JtQ2FzZUZ1bmMgPSBQQVJTRVJfTUVESUFfVFlQRSA9PT0gJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcgPyBzdHJpbmdUb1N0cmluZyA6IHN0cmluZ1RvTG93ZXJDYXNlO1xuICAgICAgLyogU2V0IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuXG4gICAgICBBTExPV0VEX1RBR1MgPSAnQUxMT1dFRF9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfVEFHUywgdHJhbnNmb3JtQ2FzZUZ1bmMpIDogREVGQVVMVF9BTExPV0VEX1RBR1M7XG4gICAgICBBTExPV0VEX0FUVFIgPSAnQUxMT1dFRF9BVFRSJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfQVRUUiwgdHJhbnNmb3JtQ2FzZUZ1bmMpIDogREVGQVVMVF9BTExPV0VEX0FUVFI7XG4gICAgICBBTExPV0VEX05BTUVTUEFDRVMgPSAnQUxMT1dFRF9OQU1FU1BBQ0VTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfTkFNRVNQQUNFUywgc3RyaW5nVG9TdHJpbmcpIDogREVGQVVMVF9BTExPV0VEX05BTUVTUEFDRVM7XG4gICAgICBVUklfU0FGRV9BVFRSSUJVVEVTID0gJ0FERF9VUklfU0FGRV9BVFRSJyBpbiBjZmcgPyBhZGRUb1NldChjbG9uZShERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMpLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgY2ZnLkFERF9VUklfU0FGRV9BVFRSLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgdHJhbnNmb3JtQ2FzZUZ1bmMgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgICkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgIDogREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTO1xuICAgICAgREFUQV9VUklfVEFHUyA9ICdBRERfREFUQV9VUklfVEFHUycgaW4gY2ZnID8gYWRkVG9TZXQoY2xvbmUoREVGQVVMVF9EQVRBX1VSSV9UQUdTKSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgIGNmZy5BRERfREFUQV9VUklfVEFHUywgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgIHRyYW5zZm9ybUNhc2VGdW5jIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICApIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICA6IERFRkFVTFRfREFUQV9VUklfVEFHUztcbiAgICAgIEZPUkJJRF9DT05URU5UUyA9ICdGT1JCSURfQ09OVEVOVFMnIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX0NPTlRFTlRTLCB0cmFuc2Zvcm1DYXNlRnVuYykgOiBERUZBVUxUX0ZPUkJJRF9DT05URU5UUztcbiAgICAgIEZPUkJJRF9UQUdTID0gJ0ZPUkJJRF9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9UQUdTLCB0cmFuc2Zvcm1DYXNlRnVuYykgOiB7fTtcbiAgICAgIEZPUkJJRF9BVFRSID0gJ0ZPUkJJRF9BVFRSJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYykgOiB7fTtcbiAgICAgIFVTRV9QUk9GSUxFUyA9ICdVU0VfUFJPRklMRVMnIGluIGNmZyA/IGNmZy5VU0VfUFJPRklMRVMgOiBmYWxzZTtcbiAgICAgIEFMTE9XX0FSSUFfQVRUUiA9IGNmZy5BTExPV19BUklBX0FUVFIgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcblxuICAgICAgQUxMT1dfREFUQV9BVFRSID0gY2ZnLkFMTE9XX0RBVEFfQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuXG4gICAgICBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGNmZy5BTExPV19VTktOT1dOX1BST1RPQ09MUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBTQUZFX0ZPUl9URU1QTEFURVMgPSBjZmcuU0FGRV9GT1JfVEVNUExBVEVTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIFdIT0xFX0RPQ1VNRU5UID0gY2ZnLldIT0xFX0RPQ1VNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIFJFVFVSTl9ET00gPSBjZmcuUkVUVVJOX0RPTSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gY2ZnLlJFVFVSTl9ET01fRlJBR01FTlQgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgICAgUkVUVVJOX1RSVVNURURfVFlQRSA9IGNmZy5SRVRVUk5fVFJVU1RFRF9UWVBFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIEZPUkNFX0JPRFkgPSBjZmcuRk9SQ0VfQk9EWSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBTQU5JVElaRV9ET00gPSBjZmcuU0FOSVRJWkVfRE9NICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG5cbiAgICAgIFNBTklUSVpFX05BTUVEX1BST1BTID0gY2ZnLlNBTklUSVpFX05BTUVEX1BST1BTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIEtFRVBfQ09OVEVOVCA9IGNmZy5LRUVQX0NPTlRFTlQgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcblxuICAgICAgSU5fUExBQ0UgPSBjZmcuSU5fUExBQ0UgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgICAgSVNfQUxMT1dFRF9VUkkkMSA9IGNmZy5BTExPV0VEX1VSSV9SRUdFWFAgfHwgSVNfQUxMT1dFRF9VUkkkMTtcbiAgICAgIE5BTUVTUEFDRSA9IGNmZy5OQU1FU1BBQ0UgfHwgSFRNTF9OQU1FU1BBQ0U7XG5cbiAgICAgIGlmIChjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgJiYgaXNSZWdleE9yRnVuY3Rpb24oY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaykpIHtcbiAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrID0gY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaztcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJiBpc1JlZ2V4T3JGdW5jdGlvbihjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrKSkge1xuICAgICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIHR5cGVvZiBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzID0gY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cztcbiAgICAgIH1cblxuICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xuICAgICAgICBBTExPV19EQVRBX0FUVFIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgUkVUVVJOX0RPTSA9IHRydWU7XG4gICAgICB9XG4gICAgICAvKiBQYXJzZSBwcm9maWxlIGluZm8gKi9cblxuXG4gICAgICBpZiAoVVNFX1BST0ZJTEVTKSB7XG4gICAgICAgIEFMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBfdG9Db25zdW1hYmxlQXJyYXkodGV4dCkpO1xuICAgICAgICBBTExPV0VEX0FUVFIgPSBbXTtcblxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLmh0bWwgPT09IHRydWUpIHtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIGh0bWwkMSk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBodG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMuc3ZnID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBzdmckMSk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBzdmcpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMuc3ZnRmlsdGVycyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgc3ZnRmlsdGVycyk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBzdmcpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMubWF0aE1sID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBtYXRoTWwkMSk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBtYXRoTWwpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyogTWVyZ2UgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXG5cblxuICAgICAgaWYgKGNmZy5BRERfVEFHUykge1xuICAgICAgICBpZiAoQUxMT1dFRF9UQUdTID09PSBERUZBVUxUX0FMTE9XRURfVEFHUykge1xuICAgICAgICAgIEFMTE9XRURfVEFHUyA9IGNsb25lKEFMTE9XRURfVEFHUyk7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIGNmZy5BRERfVEFHUywgdHJhbnNmb3JtQ2FzZUZ1bmMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkFERF9BVFRSKSB7XG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIgPT09IERFRkFVTFRfQUxMT1dFRF9BVFRSKSB7XG4gICAgICAgICAgQUxMT1dFRF9BVFRSID0gY2xvbmUoQUxMT1dFRF9BVFRSKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgY2ZnLkFERF9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZmcuQUREX1VSSV9TQUZFX0FUVFIpIHtcbiAgICAgICAgYWRkVG9TZXQoVVJJX1NBRkVfQVRUUklCVVRFUywgY2ZnLkFERF9VUklfU0FGRV9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZmcuRk9SQklEX0NPTlRFTlRTKSB7XG4gICAgICAgIGlmIChGT1JCSURfQ09OVEVOVFMgPT09IERFRkFVTFRfRk9SQklEX0NPTlRFTlRTKSB7XG4gICAgICAgICAgRk9SQklEX0NPTlRFTlRTID0gY2xvbmUoRk9SQklEX0NPTlRFTlRTKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvU2V0KEZPUkJJRF9DT05URU5UUywgY2ZnLkZPUkJJRF9DT05URU5UUywgdHJhbnNmb3JtQ2FzZUZ1bmMpO1xuICAgICAgfVxuICAgICAgLyogQWRkICN0ZXh0IGluIGNhc2UgS0VFUF9DT05URU5UIGlzIHNldCB0byB0cnVlICovXG5cblxuICAgICAgaWYgKEtFRVBfQ09OVEVOVCkge1xuICAgICAgICBBTExPV0VEX1RBR1NbJyN0ZXh0J10gPSB0cnVlO1xuICAgICAgfVxuICAgICAgLyogQWRkIGh0bWwsIGhlYWQgYW5kIGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgV0hPTEVfRE9DVU1FTlQgaXMgdHJ1ZSAqL1xuXG5cbiAgICAgIGlmIChXSE9MRV9ET0NVTUVOVCkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsnaHRtbCcsICdoZWFkJywgJ2JvZHknXSk7XG4gICAgICB9XG4gICAgICAvKiBBZGQgdGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgdGFibGVzIGFyZSBwZXJtaXR0ZWQsIHNlZSAjMjg2LCAjMzY1ICovXG5cblxuICAgICAgaWYgKEFMTE9XRURfVEFHUy50YWJsZSkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsndGJvZHknXSk7XG4gICAgICAgIGRlbGV0ZSBGT1JCSURfVEFHUy50Ym9keTtcbiAgICAgIH0gLy8gUHJldmVudCBmdXJ0aGVyIG1hbmlwdWxhdGlvbiBvZiBjb25maWd1cmF0aW9uLlxuICAgICAgLy8gTm90IGF2YWlsYWJsZSBpbiBJRTgsIFNhZmFyaSA1LCBldGMuXG5cblxuICAgICAgaWYgKGZyZWV6ZSkge1xuICAgICAgICBmcmVlemUoY2ZnKTtcbiAgICAgIH1cblxuICAgICAgQ09ORklHID0gY2ZnO1xuICAgIH07XG5cbiAgICB2YXIgTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTID0gYWRkVG9TZXQoe30sIFsnbWknLCAnbW8nLCAnbW4nLCAnbXMnLCAnbXRleHQnXSk7XG4gICAgdmFyIEhUTUxfSU5URUdSQVRJT05fUE9JTlRTID0gYWRkVG9TZXQoe30sIFsnZm9yZWlnbm9iamVjdCcsICdkZXNjJywgJ3RpdGxlJywgJ2Fubm90YXRpb24teG1sJ10pOyAvLyBDZXJ0YWluIGVsZW1lbnRzIGFyZSBhbGxvd2VkIGluIGJvdGggU1ZHIGFuZCBIVE1MXG4gICAgLy8gbmFtZXNwYWNlLiBXZSBuZWVkIHRvIHNwZWNpZnkgdGhlbSBleHBsaWNpdGx5XG4gICAgLy8gc28gdGhhdCB0aGV5IGRvbid0IGdldCBlcnJvbmVvdXNseSBkZWxldGVkIGZyb21cbiAgICAvLyBIVE1MIG5hbWVzcGFjZS5cblxuICAgIHZhciBDT01NT05fU1ZHX0FORF9IVE1MX0VMRU1FTlRTID0gYWRkVG9TZXQoe30sIFsndGl0bGUnLCAnc3R5bGUnLCAnZm9udCcsICdhJywgJ3NjcmlwdCddKTtcbiAgICAvKiBLZWVwIHRyYWNrIG9mIGFsbCBwb3NzaWJsZSBTVkcgYW5kIE1hdGhNTCB0YWdzXG4gICAgICogc28gdGhhdCB3ZSBjYW4gcGVyZm9ybSB0aGUgbmFtZXNwYWNlIGNoZWNrc1xuICAgICAqIGNvcnJlY3RseS4gKi9cblxuICAgIHZhciBBTExfU1ZHX1RBR1MgPSBhZGRUb1NldCh7fSwgc3ZnJDEpO1xuICAgIGFkZFRvU2V0KEFMTF9TVkdfVEFHUywgc3ZnRmlsdGVycyk7XG4gICAgYWRkVG9TZXQoQUxMX1NWR19UQUdTLCBzdmdEaXNhbGxvd2VkKTtcbiAgICB2YXIgQUxMX01BVEhNTF9UQUdTID0gYWRkVG9TZXQoe30sIG1hdGhNbCQxKTtcbiAgICBhZGRUb1NldChBTExfTUFUSE1MX1RBR1MsIG1hdGhNbERpc2FsbG93ZWQpO1xuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50IGEgRE9NIGVsZW1lbnQgd2hvc2UgbmFtZXNwYWNlIGlzIGJlaW5nIGNoZWNrZWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJuIGZhbHNlIGlmIHRoZSBlbGVtZW50IGhhcyBhXG4gICAgICogIG5hbWVzcGFjZSB0aGF0IGEgc3BlYy1jb21wbGlhbnQgcGFyc2VyIHdvdWxkIG5ldmVyXG4gICAgICogIHJldHVybi4gUmV0dXJuIHRydWUgb3RoZXJ3aXNlLlxuICAgICAqL1xuXG4gICAgdmFyIF9jaGVja1ZhbGlkTmFtZXNwYWNlID0gZnVuY3Rpb24gX2NoZWNrVmFsaWROYW1lc3BhY2UoZWxlbWVudCkge1xuICAgICAgdmFyIHBhcmVudCA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7IC8vIEluIEpTRE9NLCBpZiB3ZSdyZSBpbnNpZGUgc2hhZG93IERPTSwgdGhlbiBwYXJlbnROb2RlXG4gICAgICAvLyBjYW4gYmUgbnVsbC4gV2UganVzdCBzaW11bGF0ZSBwYXJlbnQgaW4gdGhpcyBjYXNlLlxuXG4gICAgICBpZiAoIXBhcmVudCB8fCAhcGFyZW50LnRhZ05hbWUpIHtcbiAgICAgICAgcGFyZW50ID0ge1xuICAgICAgICAgIG5hbWVzcGFjZVVSSTogTkFNRVNQQUNFLFxuICAgICAgICAgIHRhZ05hbWU6ICd0ZW1wbGF0ZSdcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhZ05hbWUgPSBzdHJpbmdUb0xvd2VyQ2FzZShlbGVtZW50LnRhZ05hbWUpO1xuICAgICAgdmFyIHBhcmVudFRhZ05hbWUgPSBzdHJpbmdUb0xvd2VyQ2FzZShwYXJlbnQudGFnTmFtZSk7XG5cbiAgICAgIGlmICghQUxMT1dFRF9OQU1FU1BBQ0VTW2VsZW1lbnQubmFtZXNwYWNlVVJJXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gSFRNTCBuYW1lc3BhY2UgdG8gU1ZHXG4gICAgICAgIC8vIGlzIHZpYSA8c3ZnPi4gSWYgaXQgaGFwcGVucyB2aWEgYW55IG90aGVyIHRhZywgdGhlblxuICAgICAgICAvLyBpdCBzaG91bGQgYmUga2lsbGVkLlxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgICByZXR1cm4gdGFnTmFtZSA9PT0gJ3N2Zyc7XG4gICAgICAgIH0gLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIE1hdGhNTCB0byBTVkcgaXMgdmlhYFxuICAgICAgICAvLyBzdmcgaWYgcGFyZW50IGlzIGVpdGhlciA8YW5ub3RhdGlvbi14bWw+IG9yIE1hdGhNTFxuICAgICAgICAvLyB0ZXh0IGludGVncmF0aW9uIHBvaW50cy5cblxuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBNQVRITUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdzdmcnICYmIChwYXJlbnRUYWdOYW1lID09PSAnYW5ub3RhdGlvbi14bWwnIHx8IE1BVEhNTF9URVhUX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXSk7XG4gICAgICAgIH0gLy8gV2Ugb25seSBhbGxvdyBlbGVtZW50cyB0aGF0IGFyZSBkZWZpbmVkIGluIFNWR1xuICAgICAgICAvLyBzcGVjLiBBbGwgb3RoZXJzIGFyZSBkaXNhbGxvd2VkIGluIFNWRyBuYW1lc3BhY2UuXG5cblxuICAgICAgICByZXR1cm4gQm9vbGVhbihBTExfU1ZHX1RBR1NbdGFnTmFtZV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIEhUTUwgbmFtZXNwYWNlIHRvIE1hdGhNTFxuICAgICAgICAvLyBpcyB2aWEgPG1hdGg+LiBJZiBpdCBoYXBwZW5zIHZpYSBhbnkgb3RoZXIgdGFnLCB0aGVuXG4gICAgICAgIC8vIGl0IHNob3VsZCBiZSBraWxsZWQuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnbWF0aCc7XG4gICAgICAgIH0gLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIFNWRyB0byBNYXRoTUwgaXMgdmlhXG4gICAgICAgIC8vIDxtYXRoPiBhbmQgSFRNTCBpbnRlZ3JhdGlvbiBwb2ludHNcblxuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJyAmJiBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXTtcbiAgICAgICAgfSAvLyBXZSBvbmx5IGFsbG93IGVsZW1lbnRzIHRoYXQgYXJlIGRlZmluZWQgaW4gTWF0aE1MXG4gICAgICAgIC8vIHNwZWMuIEFsbCBvdGhlcnMgYXJlIGRpc2FsbG93ZWQgaW4gTWF0aE1MIG5hbWVzcGFjZS5cblxuXG4gICAgICAgIHJldHVybiBCb29sZWFuKEFMTF9NQVRITUxfVEFHU1t0YWdOYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIFNWRyB0byBIVE1MIGlzIHZpYVxuICAgICAgICAvLyBIVE1MIGludGVncmF0aW9uIHBvaW50cywgYW5kIGZyb20gTWF0aE1MIHRvIEhUTUxcbiAgICAgICAgLy8gaXMgdmlhIE1hdGhNTCB0ZXh0IGludGVncmF0aW9uIHBvaW50c1xuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSAmJiAhSFRNTF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSAmJiAhTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IC8vIFdlIGRpc2FsbG93IHRhZ3MgdGhhdCBhcmUgc3BlY2lmaWMgZm9yIE1hdGhNTFxuICAgICAgICAvLyBvciBTVkcgYW5kIHNob3VsZCBuZXZlciBhcHBlYXIgaW4gSFRNTCBuYW1lc3BhY2VcblxuXG4gICAgICAgIHJldHVybiAhQUxMX01BVEhNTF9UQUdTW3RhZ05hbWVdICYmIChDT01NT05fU1ZHX0FORF9IVE1MX0VMRU1FTlRTW3RhZ05hbWVdIHx8ICFBTExfU1ZHX1RBR1NbdGFnTmFtZV0pO1xuICAgICAgfSAvLyBGb3IgWEhUTUwgYW5kIFhNTCBkb2N1bWVudHMgdGhhdCBzdXBwb3J0IGN1c3RvbSBuYW1lc3BhY2VzXG5cblxuICAgICAgaWYgKFBBUlNFUl9NRURJQV9UWVBFID09PSAnYXBwbGljYXRpb24veGh0bWwreG1sJyAmJiBBTExPV0VEX05BTUVTUEFDRVNbZWxlbWVudC5uYW1lc3BhY2VVUkldKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSAvLyBUaGUgY29kZSBzaG91bGQgbmV2ZXIgcmVhY2ggdGhpcyBwbGFjZSAodGhpcyBtZWFuc1xuICAgICAgLy8gdGhhdCB0aGUgZWxlbWVudCBzb21laG93IGdvdCBuYW1lc3BhY2UgdGhhdCBpcyBub3RcbiAgICAgIC8vIEhUTUwsIFNWRywgTWF0aE1MIG9yIGFsbG93ZWQgdmlhIEFMTE9XRURfTkFNRVNQQUNFUykuXG4gICAgICAvLyBSZXR1cm4gZmFsc2UganVzdCBpbiBjYXNlLlxuXG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9mb3JjZVJlbW92ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBhIERPTSBub2RlXG4gICAgICovXG5cblxuICAgIHZhciBfZm9yY2VSZW1vdmUgPSBmdW5jdGlvbiBfZm9yY2VSZW1vdmUobm9kZSkge1xuICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgIGVsZW1lbnQ6IG5vZGVcbiAgICAgIH0pO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtcmVtb3ZlXG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBub2RlLm91dGVySFRNTCA9IGVtcHR5SFRNTDtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9yZW1vdmVBdHRyaWJ1dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSBhbiBBdHRyaWJ1dGUgbmFtZVxuICAgICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX3JlbW92ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgbm9kZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgYXR0cmlidXRlOiBub2RlLmdldEF0dHJpYnV0ZU5vZGUobmFtZSksXG4gICAgICAgICAgZnJvbTogbm9kZVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgYXR0cmlidXRlOiBudWxsLFxuICAgICAgICAgIGZyb206IG5vZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyAvLyBXZSB2b2lkIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIHVucmVtb3ZhYmxlIFwiaXNcIlwiIGF0dHJpYnV0ZXNcblxuICAgICAgaWYgKG5hbWUgPT09ICdpcycgJiYgIUFMTE9XRURfQVRUUltuYW1lXSkge1xuICAgICAgICBpZiAoUkVUVVJOX0RPTSB8fCBSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF9mb3JjZVJlbW92ZShub2RlKTtcbiAgICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCAnJyk7XG4gICAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogX2luaXREb2N1bWVudFxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBkaXJ0eSBhIHN0cmluZyBvZiBkaXJ0eSBtYXJrdXBcbiAgICAgKiBAcmV0dXJuIHtEb2N1bWVudH0gYSBET00sIGZpbGxlZCB3aXRoIHRoZSBkaXJ0eSBtYXJrdXBcbiAgICAgKi9cblxuXG4gICAgdmFyIF9pbml0RG9jdW1lbnQgPSBmdW5jdGlvbiBfaW5pdERvY3VtZW50KGRpcnR5KSB7XG4gICAgICAvKiBDcmVhdGUgYSBIVE1MIGRvY3VtZW50ICovXG4gICAgICB2YXIgZG9jO1xuICAgICAgdmFyIGxlYWRpbmdXaGl0ZXNwYWNlO1xuXG4gICAgICBpZiAoRk9SQ0VfQk9EWSkge1xuICAgICAgICBkaXJ0eSA9ICc8cmVtb3ZlPjwvcmVtb3ZlPicgKyBkaXJ0eTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIElmIEZPUkNFX0JPRFkgaXNuJ3QgdXNlZCwgbGVhZGluZyB3aGl0ZXNwYWNlIG5lZWRzIHRvIGJlIHByZXNlcnZlZCBtYW51YWxseSAqL1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHN0cmluZ01hdGNoKGRpcnR5LCAvXltcXHJcXG5cXHQgXSsvKTtcbiAgICAgICAgbGVhZGluZ1doaXRlc3BhY2UgPSBtYXRjaGVzICYmIG1hdGNoZXNbMF07XG4gICAgICB9XG5cbiAgICAgIGlmIChQQVJTRVJfTUVESUFfVFlQRSA9PT0gJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcgJiYgTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBSb290IG9mIFhIVE1MIGRvYyBtdXN0IGNvbnRhaW4geG1sbnMgZGVjbGFyYXRpb24gKHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveGh0bWwxL25vcm1hdGl2ZS5odG1sI3N0cmljdClcbiAgICAgICAgZGlydHkgPSAnPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+PGhlYWQ+PC9oZWFkPjxib2R5PicgKyBkaXJ0eSArICc8L2JvZHk+PC9odG1sPic7XG4gICAgICB9XG5cbiAgICAgIHZhciBkaXJ0eVBheWxvYWQgPSB0cnVzdGVkVHlwZXNQb2xpY3kgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChkaXJ0eSkgOiBkaXJ0eTtcbiAgICAgIC8qXG4gICAgICAgKiBVc2UgdGhlIERPTVBhcnNlciBBUEkgYnkgZGVmYXVsdCwgZmFsbGJhY2sgbGF0ZXIgaWYgbmVlZHMgYmVcbiAgICAgICAqIERPTVBhcnNlciBub3Qgd29yayBmb3Igc3ZnIHdoZW4gaGFzIG11bHRpcGxlIHJvb3QgZWxlbWVudC5cbiAgICAgICAqL1xuXG4gICAgICBpZiAoTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGlydHlQYXlsb2FkLCBQQVJTRVJfTUVESUFfVFlQRSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9XG4gICAgICAvKiBVc2UgY3JlYXRlSFRNTERvY3VtZW50IGluIGNhc2UgRE9NUGFyc2VyIGlzIG5vdCBhdmFpbGFibGUgKi9cblxuXG4gICAgICBpZiAoIWRvYyB8fCAhZG9jLmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBkb2MgPSBpbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudChOQU1FU1BBQ0UsICd0ZW1wbGF0ZScsIG51bGwpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZG9jLmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgPSBJU19FTVBUWV9JTlBVVCA/ICcnIDogZGlydHlQYXlsb2FkO1xuICAgICAgICB9IGNhdGNoIChfKSB7Ly8gU3ludGF4IGVycm9yIGlmIGRpcnR5UGF5bG9hZCBpcyBpbnZhbGlkIHhtbFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBib2R5ID0gZG9jLmJvZHkgfHwgZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgaWYgKGRpcnR5ICYmIGxlYWRpbmdXaGl0ZXNwYWNlKSB7XG4gICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxlYWRpbmdXaGl0ZXNwYWNlKSwgYm9keS5jaGlsZE5vZGVzWzBdIHx8IG51bGwpO1xuICAgICAgfVxuICAgICAgLyogV29yayBvbiB3aG9sZSBkb2N1bWVudCBvciBqdXN0IGl0cyBib2R5ICovXG5cblxuICAgICAgaWYgKE5BTUVTUEFDRSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgcmV0dXJuIGdldEVsZW1lbnRzQnlUYWdOYW1lLmNhbGwoZG9jLCBXSE9MRV9ET0NVTUVOVCA/ICdodG1sJyA6ICdib2R5JylbMF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBXSE9MRV9ET0NVTUVOVCA/IGRvYy5kb2N1bWVudEVsZW1lbnQgOiBib2R5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX2NyZWF0ZUl0ZXJhdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtEb2N1bWVudH0gcm9vdCBkb2N1bWVudC9mcmFnbWVudCB0byBjcmVhdGUgaXRlcmF0b3IgZm9yXG4gICAgICogQHJldHVybiB7SXRlcmF0b3J9IGl0ZXJhdG9yIGluc3RhbmNlXG4gICAgICovXG5cblxuICAgIHZhciBfY3JlYXRlSXRlcmF0b3IgPSBmdW5jdGlvbiBfY3JlYXRlSXRlcmF0b3Iocm9vdCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZU5vZGVJdGVyYXRvci5jYWxsKHJvb3Qub3duZXJEb2N1bWVudCB8fCByb290LCByb290LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19URVhULCBudWxsLCBmYWxzZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfaXNDbG9iYmVyZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge05vZGV9IGVsbSBlbGVtZW50IHRvIGNoZWNrIGZvciBjbG9iYmVyaW5nIGF0dGFja3NcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNsb2JiZXJlZCwgZmFsc2UgaWYgc2FmZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX2lzQ2xvYmJlcmVkID0gZnVuY3Rpb24gX2lzQ2xvYmJlcmVkKGVsbSkge1xuICAgICAgcmV0dXJuIGVsbSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCAmJiAodHlwZW9mIGVsbS5ub2RlTmFtZSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGVsbS50ZXh0Q29udGVudCAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGVsbS5yZW1vdmVDaGlsZCAhPT0gJ2Z1bmN0aW9uJyB8fCAhKGVsbS5hdHRyaWJ1dGVzIGluc3RhbmNlb2YgTmFtZWROb2RlTWFwKSB8fCB0eXBlb2YgZWxtLnJlbW92ZUF0dHJpYnV0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZWxtLnNldEF0dHJpYnV0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZWxtLm5hbWVzcGFjZVVSSSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGVsbS5pbnNlcnRCZWZvcmUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVsbS5oYXNDaGlsZE5vZGVzICE9PSAnZnVuY3Rpb24nKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9pc05vZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge05vZGV9IG9iaiBvYmplY3QgdG8gY2hlY2sgd2hldGhlciBpdCdzIGEgRE9NIG5vZGVcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlzIG9iamVjdCBpcyBhIERPTSBub2RlXG4gICAgICovXG5cblxuICAgIHZhciBfaXNOb2RlID0gZnVuY3Rpb24gX2lzTm9kZShvYmplY3QpIHtcbiAgICAgIHJldHVybiBfdHlwZW9mKE5vZGUpID09PSAnb2JqZWN0JyA/IG9iamVjdCBpbnN0YW5jZW9mIE5vZGUgOiBvYmplY3QgJiYgX3R5cGVvZihvYmplY3QpID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqZWN0Lm5vZGVUeXBlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygb2JqZWN0Lm5vZGVOYW1lID09PSAnc3RyaW5nJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9leGVjdXRlSG9va1xuICAgICAqIEV4ZWN1dGUgdXNlciBjb25maWd1cmFibGUgaG9va3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZW50cnlQb2ludCAgTmFtZSBvZiB0aGUgaG9vaydzIGVudHJ5IHBvaW50XG4gICAgICogQHBhcmFtICB7Tm9kZX0gY3VycmVudE5vZGUgbm9kZSB0byB3b3JrIG9uIHdpdGggdGhlIGhvb2tcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgYWRkaXRpb25hbCBob29rIHBhcmFtZXRlcnNcbiAgICAgKi9cblxuXG4gICAgdmFyIF9leGVjdXRlSG9vayA9IGZ1bmN0aW9uIF9leGVjdXRlSG9vayhlbnRyeVBvaW50LCBjdXJyZW50Tm9kZSwgZGF0YSkge1xuICAgICAgaWYgKCFob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFycmF5Rm9yRWFjaChob29rc1tlbnRyeVBvaW50XSwgZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgICAgaG9vay5jYWxsKERPTVB1cmlmeSwgY3VycmVudE5vZGUsIGRhdGEsIENPTkZJRyk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9zYW5pdGl6ZUVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdCBub2RlTmFtZVxuICAgICAqIEBwcm90ZWN0IHRleHRDb250ZW50XG4gICAgICogQHByb3RlY3QgcmVtb3ZlQ2hpbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBjaGVjayBmb3IgcGVybWlzc2lvbiB0byBleGlzdFxuICAgICAqIEByZXR1cm4gIHtCb29sZWFufSB0cnVlIGlmIG5vZGUgd2FzIGtpbGxlZCwgZmFsc2UgaWYgbGVmdCBhbGl2ZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX3Nhbml0aXplRWxlbWVudHMgPSBmdW5jdGlvbiBfc2FuaXRpemVFbGVtZW50cyhjdXJyZW50Tm9kZSkge1xuICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG5cbiAgICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcbiAgICAgIC8qIENoZWNrIGlmIGVsZW1lbnQgaXMgY2xvYmJlcmVkIG9yIGNhbiBjbG9iYmVyICovXG5cblxuICAgICAgaWYgKF9pc0Nsb2JiZXJlZChjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIENoZWNrIGlmIHRhZ25hbWUgY29udGFpbnMgVW5pY29kZSAqL1xuXG5cbiAgICAgIGlmIChyZWdFeHBUZXN0KC9bXFx1MDA4MC1cXHVGRkZGXS8sIGN1cnJlbnROb2RlLm5vZGVOYW1lKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLyogTm93IGxldCdzIGNoZWNrIHRoZSBlbGVtZW50J3MgdHlwZSBhbmQgbmFtZSAqL1xuXG5cbiAgICAgIHZhciB0YWdOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMoY3VycmVudE5vZGUubm9kZU5hbWUpO1xuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG4gICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZUVsZW1lbnQnLCBjdXJyZW50Tm9kZSwge1xuICAgICAgICB0YWdOYW1lOiB0YWdOYW1lLFxuICAgICAgICBhbGxvd2VkVGFnczogQUxMT1dFRF9UQUdTXG4gICAgICB9KTtcbiAgICAgIC8qIERldGVjdCBtWFNTIGF0dGVtcHRzIGFidXNpbmcgbmFtZXNwYWNlIGNvbmZ1c2lvbiAqL1xuXG5cbiAgICAgIGlmIChjdXJyZW50Tm9kZS5oYXNDaGlsZE5vZGVzKCkgJiYgIV9pc05vZGUoY3VycmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQpICYmICghX2lzTm9kZShjdXJyZW50Tm9kZS5jb250ZW50KSB8fCAhX2lzTm9kZShjdXJyZW50Tm9kZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkKSkgJiYgcmVnRXhwVGVzdCgvPFsvXFx3XS9nLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpICYmIHJlZ0V4cFRlc3QoLzxbL1xcd10vZywgY3VycmVudE5vZGUudGV4dENvbnRlbnQpKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvKiBNaXRpZ2F0ZSBhIHByb2JsZW0gd2l0aCB0ZW1wbGF0ZXMgaW5zaWRlIHNlbGVjdCAqL1xuXG5cbiAgICAgIGlmICh0YWdOYW1lID09PSAnc2VsZWN0JyAmJiByZWdFeHBUZXN0KC88dGVtcGxhdGUvaSwgY3VycmVudE5vZGUuaW5uZXJIVE1MKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLyogUmVtb3ZlIGVsZW1lbnQgaWYgYW55dGhpbmcgZm9yYmlkcyBpdHMgcHJlc2VuY2UgKi9cblxuXG4gICAgICBpZiAoIUFMTE9XRURfVEFHU1t0YWdOYW1lXSB8fCBGT1JCSURfVEFHU1t0YWdOYW1lXSkge1xuICAgICAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGEgY3VzdG9tIGVsZW1lbnQgdG8gaGFuZGxlICovXG4gICAgICAgIGlmICghRk9SQklEX1RBR1NbdGFnTmFtZV0gJiYgX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QodGFnTmFtZSkpIHtcbiAgICAgICAgICBpZiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCB0YWdOYW1lKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGlmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sodGFnTmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBLZWVwIGNvbnRlbnQgZXhjZXB0IGZvciBiYWQtbGlzdGVkIGVsZW1lbnRzICovXG5cblxuICAgICAgICBpZiAoS0VFUF9DT05URU5UICYmICFGT1JCSURfQ09OVEVOVFNbdGFnTmFtZV0pIHtcbiAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoY3VycmVudE5vZGUpIHx8IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgdmFyIGNoaWxkTm9kZXMgPSBnZXRDaGlsZE5vZGVzKGN1cnJlbnROb2RlKSB8fCBjdXJyZW50Tm9kZS5jaGlsZE5vZGVzO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZXMgJiYgcGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdmFyIGNoaWxkQ291bnQgPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGNoaWxkQ291bnQgLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZU5vZGUoY2hpbGROb2Rlc1tpXSwgdHJ1ZSksIGdldE5leHRTaWJsaW5nKGN1cnJlbnROb2RlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIENoZWNrIHdoZXRoZXIgZWxlbWVudCBoYXMgYSB2YWxpZCBuYW1lc3BhY2UgKi9cblxuXG4gICAgICBpZiAoY3VycmVudE5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmICFfY2hlY2tWYWxpZE5hbWVzcGFjZShjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCh0YWdOYW1lID09PSAnbm9zY3JpcHQnIHx8IHRhZ05hbWUgPT09ICdub2VtYmVkJykgJiYgcmVnRXhwVGVzdCgvPFxcL25vKHNjcmlwdHxlbWJlZCkvaSwgY3VycmVudE5vZGUuaW5uZXJIVE1MKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLyogU2FuaXRpemUgZWxlbWVudCBjb250ZW50IHRvIGJlIHRlbXBsYXRlLXNhZmUgKi9cblxuXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTICYmIGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgIC8qIEdldCB0aGUgZWxlbWVudCdzIHRleHQgY29udGVudCAqL1xuICAgICAgICBjb250ZW50ID0gY3VycmVudE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIE1VU1RBQ0hFX0VYUFIkMSwgJyAnKTtcbiAgICAgICAgY29udGVudCA9IHN0cmluZ1JlcGxhY2UoY29udGVudCwgRVJCX0VYUFIkMSwgJyAnKTtcbiAgICAgICAgY29udGVudCA9IHN0cmluZ1JlcGxhY2UoY29udGVudCwgVE1QTElUX0VYUFIkMSwgJyAnKTtcblxuICAgICAgICBpZiAoY3VycmVudE5vZGUudGV4dENvbnRlbnQgIT09IGNvbnRlbnQpIHtcbiAgICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGN1cnJlbnROb2RlLmNsb25lTm9kZSgpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG5cblxuICAgICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplRWxlbWVudHMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9pc1ZhbGlkQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxjVGFnIExvd2VyY2FzZSB0YWcgbmFtZSBvZiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBsY05hbWUgTG93ZXJjYXNlIGF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLCBvdGhlcndpc2UgZmFsc2UuXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcblxuXG4gICAgdmFyIF9pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gX2lzVmFsaWRBdHRyaWJ1dGUobGNUYWcsIGxjTmFtZSwgdmFsdWUpIHtcbiAgICAgIC8qIE1ha2Ugc3VyZSBhdHRyaWJ1dGUgY2Fubm90IGNsb2JiZXIgKi9cbiAgICAgIGlmIChTQU5JVElaRV9ET00gJiYgKGxjTmFtZSA9PT0gJ2lkJyB8fCBsY05hbWUgPT09ICduYW1lJykgJiYgKHZhbHVlIGluIGRvY3VtZW50IHx8IHZhbHVlIGluIGZvcm1FbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvKiBBbGxvdyB2YWxpZCBkYXRhLSogYXR0cmlidXRlczogQXQgbGVhc3Qgb25lIGNoYXJhY3RlciBhZnRlciBcIi1cIlxuICAgICAgICAgIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9kb20uaHRtbCNlbWJlZGRpbmctY3VzdG9tLW5vbi12aXNpYmxlLWRhdGEtd2l0aC10aGUtZGF0YS0qLWF0dHJpYnV0ZXMpXG4gICAgICAgICAgWE1MLWNvbXBhdGlibGUgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZnJhc3RydWN0dXJlLmh0bWwjeG1sLWNvbXBhdGlibGUgYW5kIGh0dHA6Ly93d3cudzMub3JnL1RSL3htbC8jZDBlODA0KVxuICAgICAgICAgIFdlIGRvbid0IG5lZWQgdG8gY2hlY2sgdGhlIHZhbHVlOyBpdCdzIGFsd2F5cyBVUkkgc2FmZS4gKi9cblxuXG4gICAgICBpZiAoQUxMT1dfREFUQV9BVFRSICYmICFGT1JCSURfQVRUUltsY05hbWVdICYmIHJlZ0V4cFRlc3QoREFUQV9BVFRSJDEsIGxjTmFtZSkpIDsgZWxzZSBpZiAoQUxMT1dfQVJJQV9BVFRSICYmIHJlZ0V4cFRlc3QoQVJJQV9BVFRSJDEsIGxjTmFtZSkpIDsgZWxzZSBpZiAoIUFMTE9XRURfQVRUUltsY05hbWVdIHx8IEZPUkJJRF9BVFRSW2xjTmFtZV0pIHtcbiAgICAgICAgaWYgKCAvLyBGaXJzdCBjb25kaXRpb24gZG9lcyBhIHZlcnkgYmFzaWMgY2hlY2sgaWYgYSkgaXQncyBiYXNpY2FsbHkgYSB2YWxpZCBjdXN0b20gZWxlbWVudCB0YWduYW1lIEFORFxuICAgICAgICAvLyBiKSBpZiB0aGUgdGFnTmFtZSBwYXNzZXMgd2hhdGV2ZXIgdGhlIHVzZXIgaGFzIGNvbmZpZ3VyZWQgZm9yIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVja1xuICAgICAgICAvLyBhbmQgYykgaWYgdGhlIGF0dHJpYnV0ZSBuYW1lIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrXG4gICAgICAgIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0KGxjVGFnKSAmJiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCBsY1RhZykgfHwgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKGxjVGFnKSkgJiYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaywgbGNOYW1lKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sobGNOYW1lKSkgfHwgLy8gQWx0ZXJuYXRpdmUsIHNlY29uZCBjb25kaXRpb24gY2hlY2tzIGlmIGl0J3MgYW4gYGlzYC1hdHRyaWJ1dGUsIEFORFxuICAgICAgICAvLyB0aGUgdmFsdWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2tcbiAgICAgICAgbGNOYW1lID09PSAnaXMnICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyAmJiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCB2YWx1ZSkgfHwgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKHZhbHVlKSkpIDsgZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8qIENoZWNrIHZhbHVlIGlzIHNhZmUuIEZpcnN0LCBpcyBhdHRyIGluZXJ0PyBJZiBzbywgaXMgc2FmZSAqL1xuXG4gICAgICB9IGVsc2UgaWYgKFVSSV9TQUZFX0FUVFJJQlVURVNbbGNOYW1lXSkgOyBlbHNlIGlmIChyZWdFeHBUZXN0KElTX0FMTE9XRURfVVJJJDEsIHN0cmluZ1JlcGxhY2UodmFsdWUsIEFUVFJfV0hJVEVTUEFDRSQxLCAnJykpKSA7IGVsc2UgaWYgKChsY05hbWUgPT09ICdzcmMnIHx8IGxjTmFtZSA9PT0gJ3hsaW5rOmhyZWYnIHx8IGxjTmFtZSA9PT0gJ2hyZWYnKSAmJiBsY1RhZyAhPT0gJ3NjcmlwdCcgJiYgc3RyaW5nSW5kZXhPZih2YWx1ZSwgJ2RhdGE6JykgPT09IDAgJiYgREFUQV9VUklfVEFHU1tsY1RhZ10pIDsgZWxzZSBpZiAoQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgJiYgIXJlZ0V4cFRlc3QoSVNfU0NSSVBUX09SX0RBVEEkMSwgc3RyaW5nUmVwbGFjZSh2YWx1ZSwgQVRUUl9XSElURVNQQUNFJDEsICcnKSkpIDsgZWxzZSBpZiAoIXZhbHVlKSA7IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX2Jhc2ljQ3VzdG9tRWxlbWVudENoZWNrXG4gICAgICogY2hlY2tzIGlmIGF0IGxlYXN0IG9uZSBkYXNoIGlzIGluY2x1ZGVkIGluIHRhZ05hbWUsIGFuZCBpdCdzIG5vdCB0aGUgZmlyc3QgY2hhclxuICAgICAqIGZvciBtb3JlIHNvcGhpc3RpY2F0ZWQgY2hlY2tpbmcgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvdmFsaWRhdGUtZWxlbWVudC1uYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgbmFtZSBvZiB0aGUgdGFnIG9mIHRoZSBub2RlIHRvIHNhbml0aXplXG4gICAgICovXG5cblxuICAgIHZhciBfYmFzaWNDdXN0b21FbGVtZW50VGVzdCA9IGZ1bmN0aW9uIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0KHRhZ05hbWUpIHtcbiAgICAgIHJldHVybiB0YWdOYW1lLmluZGV4T2YoJy0nKSA+IDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfc2FuaXRpemVBdHRyaWJ1dGVzXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdCBhdHRyaWJ1dGVzXG4gICAgICogQHByb3RlY3Qgbm9kZU5hbWVcbiAgICAgKiBAcHJvdGVjdCByZW1vdmVBdHRyaWJ1dGVcbiAgICAgKiBAcHJvdGVjdCBzZXRBdHRyaWJ1dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIHRvIHNhbml0aXplXG4gICAgICovXG5cblxuICAgIHZhciBfc2FuaXRpemVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gX3Nhbml0aXplQXR0cmlidXRlcyhjdXJyZW50Tm9kZSkge1xuICAgICAgdmFyIGF0dHI7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB2YXIgbGNOYW1lO1xuICAgICAgdmFyIGw7XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG5cbiAgICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgICB2YXIgYXR0cmlidXRlcyA9IGN1cnJlbnROb2RlLmF0dHJpYnV0ZXM7XG4gICAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGF0dHJpYnV0ZXM7IGlmIG5vdCB3ZSBtaWdodCBoYXZlIGEgdGV4dCBub2RlICovXG5cbiAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBob29rRXZlbnQgPSB7XG4gICAgICAgIGF0dHJOYW1lOiAnJyxcbiAgICAgICAgYXR0clZhbHVlOiAnJyxcbiAgICAgICAga2VlcEF0dHI6IHRydWUsXG4gICAgICAgIGFsbG93ZWRBdHRyaWJ1dGVzOiBBTExPV0VEX0FUVFJcbiAgICAgIH07XG4gICAgICBsID0gYXR0cmlidXRlcy5sZW5ndGg7XG4gICAgICAvKiBHbyBiYWNrd2FyZHMgb3ZlciBhbGwgYXR0cmlidXRlczsgc2FmZWx5IHJlbW92ZSBiYWQgb25lcyAqL1xuXG4gICAgICB3aGlsZSAobC0tKSB7XG4gICAgICAgIGF0dHIgPSBhdHRyaWJ1dGVzW2xdO1xuICAgICAgICB2YXIgX2F0dHIgPSBhdHRyLFxuICAgICAgICAgICAgbmFtZSA9IF9hdHRyLm5hbWUsXG4gICAgICAgICAgICBuYW1lc3BhY2VVUkkgPSBfYXR0ci5uYW1lc3BhY2VVUkk7XG4gICAgICAgIHZhbHVlID0gbmFtZSA9PT0gJ3ZhbHVlJyA/IGF0dHIudmFsdWUgOiBzdHJpbmdUcmltKGF0dHIudmFsdWUpO1xuICAgICAgICBsY05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhuYW1lKTtcbiAgICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG4gICAgICAgIGhvb2tFdmVudC5hdHRyTmFtZSA9IGxjTmFtZTtcbiAgICAgICAgaG9va0V2ZW50LmF0dHJWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBob29rRXZlbnQua2VlcEF0dHIgPSB0cnVlO1xuICAgICAgICBob29rRXZlbnQuZm9yY2VLZWVwQXR0ciA9IHVuZGVmaW5lZDsgLy8gQWxsb3dzIGRldmVsb3BlcnMgdG8gc2VlIHRoaXMgaXMgYSBwcm9wZXJ0eSB0aGV5IGNhbiBzZXRcblxuICAgICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZUF0dHJpYnV0ZScsIGN1cnJlbnROb2RlLCBob29rRXZlbnQpO1xuXG4gICAgICAgIHZhbHVlID0gaG9va0V2ZW50LmF0dHJWYWx1ZTtcbiAgICAgICAgLyogRGlkIHRoZSBob29rcyBhcHByb3ZlIG9mIHRoZSBhdHRyaWJ1dGU/ICovXG5cbiAgICAgICAgaWYgKGhvb2tFdmVudC5mb3JjZUtlZXBBdHRyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLyogUmVtb3ZlIGF0dHJpYnV0ZSAqL1xuXG5cbiAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG4gICAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuXG5cbiAgICAgICAgaWYgKCFob29rRXZlbnQua2VlcEF0dHIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBXb3JrIGFyb3VuZCBhIHNlY3VyaXR5IGlzc3VlIGluIGpRdWVyeSAzLjAgKi9cblxuXG4gICAgICAgIGlmIChyZWdFeHBUZXN0KC9cXC8+L2ksIHZhbHVlKSkge1xuICAgICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLyogU2FuaXRpemUgYXR0cmlidXRlIGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuXG5cbiAgICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xuICAgICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgTVVTVEFDSEVfRVhQUiQxLCAnICcpO1xuICAgICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgRVJCX0VYUFIkMSwgJyAnKTtcbiAgICAgICAgICB2YWx1ZSA9IHN0cmluZ1JlcGxhY2UodmFsdWUsIFRNUExJVF9FWFBSJDEsICcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgLyogSXMgYHZhbHVlYCB2YWxpZCBmb3IgdGhpcyBhdHRyaWJ1dGU/ICovXG5cblxuICAgICAgICB2YXIgbGNUYWcgPSB0cmFuc2Zvcm1DYXNlRnVuYyhjdXJyZW50Tm9kZS5ub2RlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBGdWxsIERPTSBDbG9iYmVyaW5nIHByb3RlY3Rpb24gdmlhIG5hbWVzcGFjZSBpc29sYXRpb24sXG4gICAgICAgICAqIFByZWZpeCBpZCBhbmQgbmFtZSBhdHRyaWJ1dGVzIHdpdGggYHVzZXItY29udGVudC1gXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgaWYgKFNBTklUSVpFX05BTUVEX1BST1BTICYmIChsY05hbWUgPT09ICdpZCcgfHwgbGNOYW1lID09PSAnbmFtZScpKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGlzIHZhbHVlXG4gICAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7IC8vIFByZWZpeCB0aGUgdmFsdWUgYW5kIGxhdGVyIHJlLWNyZWF0ZSB0aGUgYXR0cmlidXRlIHdpdGggdGhlIHNhbml0aXplZCB2YWx1ZVxuXG5cbiAgICAgICAgICB2YWx1ZSA9IFNBTklUSVpFX05BTUVEX1BST1BTX1BSRUZJWCArIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIC8qIEhhbmRsZSBhdHRyaWJ1dGVzIHRoYXQgcmVxdWlyZSBUcnVzdGVkIFR5cGVzICovXG5cblxuICAgICAgICBpZiAodHJ1c3RlZFR5cGVzUG9saWN5ICYmIF90eXBlb2YodHJ1c3RlZFR5cGVzKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHRydXN0ZWRUeXBlcy5nZXRBdHRyaWJ1dGVUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKG5hbWVzcGFjZVVSSSkgOyBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1c3RlZFR5cGVzLmdldEF0dHJpYnV0ZVR5cGUobGNUYWcsIGxjTmFtZSkpIHtcbiAgICAgICAgICAgICAgY2FzZSAnVHJ1c3RlZEhUTUwnOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwodmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ1RydXN0ZWRTY3JpcHRVUkwnOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZVNjcmlwdFVSTCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qIEhhbmRsZSBpbnZhbGlkIGRhdGEtKiBhdHRyaWJ1dGUgc2V0IGJ5IHRyeS1jYXRjaGluZyBpdCAqL1xuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAobmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyogRmFsbGJhY2sgdG8gc2V0QXR0cmlidXRlKCkgZm9yIGJyb3dzZXItdW5yZWNvZ25pemVkIG5hbWVzcGFjZXMgZS5nLiBcIngtc2NoZW1hXCIuICovXG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFycmF5UG9wKERPTVB1cmlmeS5yZW1vdmVkKTtcbiAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgIH1cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cblxuXG4gICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplU2hhZG93RE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtEb2N1bWVudEZyYWdtZW50fSBmcmFnbWVudCB0byBpdGVyYXRlIG92ZXIgcmVjdXJzaXZlbHlcbiAgICAgKi9cblxuXG4gICAgdmFyIF9zYW5pdGl6ZVNoYWRvd0RPTSA9IGZ1bmN0aW9uIF9zYW5pdGl6ZVNoYWRvd0RPTShmcmFnbWVudCkge1xuICAgICAgdmFyIHNoYWRvd05vZGU7XG5cbiAgICAgIHZhciBzaGFkb3dJdGVyYXRvciA9IF9jcmVhdGVJdGVyYXRvcihmcmFnbWVudCk7XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG5cblxuICAgICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcblxuICAgICAgd2hpbGUgKHNoYWRvd05vZGUgPSBzaGFkb3dJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVTaGFkb3dOb2RlJywgc2hhZG93Tm9kZSwgbnVsbCk7XG4gICAgICAgIC8qIFNhbml0aXplIHRhZ3MgYW5kIGVsZW1lbnRzICovXG5cblxuICAgICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoc2hhZG93Tm9kZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBEZWVwIHNoYWRvdyBET00gZGV0ZWN0ZWQgKi9cblxuXG4gICAgICAgIGlmIChzaGFkb3dOb2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKHNoYWRvd05vZGUuY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG5cblxuICAgICAgICBfc2FuaXRpemVBdHRyaWJ1dGVzKHNoYWRvd05vZGUpO1xuICAgICAgfVxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG5cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNhbml0aXplXG4gICAgICogUHVibGljIG1ldGhvZCBwcm92aWRpbmcgY29yZSBzYW5pdGF0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE5vZGV9IGRpcnR5IHN0cmluZyBvciBET00gbm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5cblxuICAgIERPTVB1cmlmeS5zYW5pdGl6ZSA9IGZ1bmN0aW9uIChkaXJ0eSkge1xuICAgICAgdmFyIGNmZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgYm9keTtcbiAgICAgIHZhciBpbXBvcnRlZE5vZGU7XG4gICAgICB2YXIgY3VycmVudE5vZGU7XG4gICAgICB2YXIgb2xkTm9kZTtcbiAgICAgIHZhciByZXR1cm5Ob2RlO1xuICAgICAgLyogTWFrZSBzdXJlIHdlIGhhdmUgYSBzdHJpbmcgdG8gc2FuaXRpemUuXG4gICAgICAgIERPIE5PVCByZXR1cm4gZWFybHksIGFzIHRoaXMgd2lsbCByZXR1cm4gdGhlIHdyb25nIHR5cGUgaWZcbiAgICAgICAgdGhlIHVzZXIgaGFzIHJlcXVlc3RlZCBhIERPTSBvYmplY3QgcmF0aGVyIHRoYW4gYSBzdHJpbmcgKi9cblxuICAgICAgSVNfRU1QVFlfSU5QVVQgPSAhZGlydHk7XG5cbiAgICAgIGlmIChJU19FTVBUWV9JTlBVVCkge1xuICAgICAgICBkaXJ0eSA9ICc8IS0tPic7XG4gICAgICB9XG4gICAgICAvKiBTdHJpbmdpZnksIGluIGNhc2UgZGlydHkgaXMgYW4gb2JqZWN0ICovXG5cblxuICAgICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycgJiYgIV9pc05vZGUoZGlydHkpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZWdhdGVkLWNvbmRpdGlvblxuICAgICAgICBpZiAodHlwZW9mIGRpcnR5LnRvU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCd0b1N0cmluZyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpcnR5ID0gZGlydHkudG9TdHJpbmcoKTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ2RpcnR5IGlzIG5vdCBhIHN0cmluZywgYWJvcnRpbmcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qIENoZWNrIHdlIGNhbiBydW4uIE90aGVyd2lzZSBmYWxsIGJhY2sgb3IgaWdub3JlICovXG5cblxuICAgICAgaWYgKCFET01QdXJpZnkuaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgaWYgKF90eXBlb2Yod2luZG93LnRvU3RhdGljSFRNTCkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB3aW5kb3cudG9TdGF0aWNIVE1MID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX2lzTm9kZShkaXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5Lm91dGVySFRNTCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgICAgfVxuICAgICAgLyogQXNzaWduIGNvbmZpZyB2YXJzICovXG5cblxuICAgICAgaWYgKCFTRVRfQ09ORklHKSB7XG4gICAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xuICAgICAgfVxuICAgICAgLyogQ2xlYW4gdXAgcmVtb3ZlZCBlbGVtZW50cyAqL1xuXG5cbiAgICAgIERPTVB1cmlmeS5yZW1vdmVkID0gW107XG4gICAgICAvKiBDaGVjayBpZiBkaXJ0eSBpcyBjb3JyZWN0bHkgdHlwZWQgZm9yIElOX1BMQUNFICovXG5cbiAgICAgIGlmICh0eXBlb2YgZGlydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIElOX1BMQUNFID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChJTl9QTEFDRSkge1xuICAgICAgICAvKiBEbyBzb21lIGVhcmx5IHByZS1zYW5pdGl6YXRpb24gdG8gYXZvaWQgdW5zYWZlIHJvb3Qgbm9kZXMgKi9cbiAgICAgICAgaWYgKGRpcnR5Lm5vZGVOYW1lKSB7XG4gICAgICAgICAgdmFyIHRhZ05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhkaXJ0eS5ub2RlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoIUFMTE9XRURfVEFHU1t0YWdOYW1lXSB8fCBGT1JCSURfVEFHU1t0YWdOYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCdyb290IG5vZGUgaXMgZm9yYmlkZGVuIGFuZCBjYW5ub3QgYmUgc2FuaXRpemVkIGluLXBsYWNlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRpcnR5IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAvKiBJZiBkaXJ0eSBpcyBhIERPTSBlbGVtZW50LCBhcHBlbmQgdG8gYW4gZW1wdHkgZG9jdW1lbnQgdG8gYXZvaWRcbiAgICAgICAgICAgZWxlbWVudHMgYmVpbmcgc3RyaXBwZWQgYnkgdGhlIHBhcnNlciAqL1xuICAgICAgICBib2R5ID0gX2luaXREb2N1bWVudCgnPCEtLS0tPicpO1xuICAgICAgICBpbXBvcnRlZE5vZGUgPSBib2R5Lm93bmVyRG9jdW1lbnQuaW1wb3J0Tm9kZShkaXJ0eSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGltcG9ydGVkTm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBpbXBvcnRlZE5vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICAgIC8qIE5vZGUgaXMgYWxyZWFkeSBhIGJvZHksIHVzZSBhcyBpcyAqL1xuICAgICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAoaW1wb3J0ZWROb2RlLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgICAgICBib2R5ID0gaW1wb3J0ZWROb2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1kb20tbm9kZS1hcHBlbmRcbiAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGltcG9ydGVkTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIEV4aXQgZGlyZWN0bHkgaWYgd2UgaGF2ZSBub3RoaW5nIHRvIGRvICovXG4gICAgICAgIGlmICghUkVUVVJOX0RPTSAmJiAhU0FGRV9GT1JfVEVNUExBVEVTICYmICFXSE9MRV9ET0NVTUVOVCAmJiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItaW5jbHVkZXNcbiAgICAgICAgZGlydHkuaW5kZXhPZignPCcpID09PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KSA6IGRpcnR5O1xuICAgICAgICB9XG4gICAgICAgIC8qIEluaXRpYWxpemUgdGhlIGRvY3VtZW50IHRvIHdvcmsgb24gKi9cblxuXG4gICAgICAgIGJvZHkgPSBfaW5pdERvY3VtZW50KGRpcnR5KTtcbiAgICAgICAgLyogQ2hlY2sgd2UgaGF2ZSBhIERPTSBub2RlIGZyb20gdGhlIGRhdGEgKi9cblxuICAgICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgICByZXR1cm4gUkVUVVJOX0RPTSA/IG51bGwgOiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gZW1wdHlIVE1MIDogJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qIFJlbW92ZSBmaXJzdCBlbGVtZW50IG5vZGUgKG91cnMpIGlmIEZPUkNFX0JPRFkgaXMgc2V0ICovXG5cblxuICAgICAgaWYgKGJvZHkgJiYgRk9SQ0VfQk9EWSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoYm9keS5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIC8qIEdldCBub2RlIGl0ZXJhdG9yICovXG5cblxuICAgICAgdmFyIG5vZGVJdGVyYXRvciA9IF9jcmVhdGVJdGVyYXRvcihJTl9QTEFDRSA/IGRpcnR5IDogYm9keSk7XG4gICAgICAvKiBOb3cgc3RhcnQgaXRlcmF0aW5nIG92ZXIgdGhlIGNyZWF0ZWQgZG9jdW1lbnQgKi9cblxuXG4gICAgICB3aGlsZSAoY3VycmVudE5vZGUgPSBub2RlSXRlcmF0b3IubmV4dE5vZGUoKSkge1xuICAgICAgICAvKiBGaXggSUUncyBzdHJhbmdlIGJlaGF2aW9yIHdpdGggbWFuaXB1bGF0ZWQgdGV4dE5vZGVzICM4OSAqL1xuICAgICAgICBpZiAoY3VycmVudE5vZGUubm9kZVR5cGUgPT09IDMgJiYgY3VycmVudE5vZGUgPT09IG9sZE5vZGUpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBTYW5pdGl6ZSB0YWdzIGFuZCBlbGVtZW50cyAqL1xuXG5cbiAgICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKGN1cnJlbnROb2RlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8qIFNoYWRvdyBET00gZGV0ZWN0ZWQsIHNhbml0aXplIGl0ICovXG5cblxuICAgICAgICBpZiAoY3VycmVudE5vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgICBfc2FuaXRpemVTaGFkb3dET00oY3VycmVudE5vZGUuY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG5cblxuICAgICAgICBfc2FuaXRpemVBdHRyaWJ1dGVzKGN1cnJlbnROb2RlKTtcblxuICAgICAgICBvbGROb2RlID0gY3VycmVudE5vZGU7XG4gICAgICB9XG5cbiAgICAgIG9sZE5vZGUgPSBudWxsO1xuICAgICAgLyogSWYgd2Ugc2FuaXRpemVkIGBkaXJ0eWAgaW4tcGxhY2UsIHJldHVybiBpdC4gKi9cblxuICAgICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICAgIH1cbiAgICAgIC8qIFJldHVybiBzYW5pdGl6ZWQgc3RyaW5nIG9yIERPTSAqL1xuXG5cbiAgICAgIGlmIChSRVRVUk5fRE9NKSB7XG4gICAgICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGNyZWF0ZURvY3VtZW50RnJhZ21lbnQuY2FsbChib2R5Lm93bmVyRG9jdW1lbnQpO1xuXG4gICAgICAgICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLWFwcGVuZFxuICAgICAgICAgICAgcmV0dXJuTm9kZS5hcHBlbmRDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm5Ob2RlID0gYm9keTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIuc2hhZG93cm9vdCkge1xuICAgICAgICAgIC8qXG4gICAgICAgICAgICBBZG9wdE5vZGUoKSBpcyBub3QgdXNlZCBiZWNhdXNlIGludGVybmFsIHN0YXRlIGlzIG5vdCByZXNldFxuICAgICAgICAgICAgKGUuZy4gdGhlIHBhc3QgbmFtZXMgbWFwIG9mIGEgSFRNTEZvcm1FbGVtZW50KSwgdGhpcyBpcyBzYWZlXG4gICAgICAgICAgICBpbiB0aGVvcnkgYnV0IHdlIHdvdWxkIHJhdGhlciBub3QgcmlzayBhbm90aGVyIGF0dGFjayB2ZWN0b3IuXG4gICAgICAgICAgICBUaGUgc3RhdGUgdGhhdCBpcyBjbG9uZWQgYnkgaW1wb3J0Tm9kZSgpIGlzIGV4cGxpY2l0bHkgZGVmaW5lZFxuICAgICAgICAgICAgYnkgdGhlIHNwZWNzLlxuICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGltcG9ydE5vZGUuY2FsbChvcmlnaW5hbERvY3VtZW50LCByZXR1cm5Ob2RlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5Ob2RlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VyaWFsaXplZEhUTUwgPSBXSE9MRV9ET0NVTUVOVCA/IGJvZHkub3V0ZXJIVE1MIDogYm9keS5pbm5lckhUTUw7XG4gICAgICAvKiBTZXJpYWxpemUgZG9jdHlwZSBpZiBhbGxvd2VkICovXG5cbiAgICAgIGlmIChXSE9MRV9ET0NVTUVOVCAmJiBBTExPV0VEX1RBR1NbJyFkb2N0eXBlJ10gJiYgYm9keS5vd25lckRvY3VtZW50ICYmIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlICYmIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlLm5hbWUgJiYgcmVnRXhwVGVzdChET0NUWVBFX05BTUUsIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlLm5hbWUpKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gJzwhRE9DVFlQRSAnICsgYm9keS5vd25lckRvY3VtZW50LmRvY3R5cGUubmFtZSArICc+XFxuJyArIHNlcmlhbGl6ZWRIVE1MO1xuICAgICAgfVxuICAgICAgLyogU2FuaXRpemUgZmluYWwgc3RyaW5nIHRlbXBsYXRlLXNhZmUgKi9cblxuXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgTVVTVEFDSEVfRVhQUiQxLCAnICcpO1xuICAgICAgICBzZXJpYWxpemVkSFRNTCA9IHN0cmluZ1JlcGxhY2Uoc2VyaWFsaXplZEhUTUwsIEVSQl9FWFBSJDEsICcgJyk7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgVE1QTElUX0VYUFIkMSwgJyAnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydXN0ZWRUeXBlc1BvbGljeSAmJiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoc2VyaWFsaXplZEhUTUwpIDogc2VyaWFsaXplZEhUTUw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHNldCB0aGUgY29uZmlndXJhdGlvbiBvbmNlXG4gICAgICogc2V0Q29uZmlnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICovXG5cblxuICAgIERPTVB1cmlmeS5zZXRDb25maWcgPSBmdW5jdGlvbiAoY2ZnKSB7XG4gICAgICBfcGFyc2VDb25maWcoY2ZnKTtcblxuICAgICAgU0VUX0NPTkZJRyA9IHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSB0aGUgY29uZmlndXJhdGlvblxuICAgICAqIGNsZWFyQ29uZmlnXG4gICAgICpcbiAgICAgKi9cblxuXG4gICAgRE9NUHVyaWZ5LmNsZWFyQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgICAgQ09ORklHID0gbnVsbDtcbiAgICAgIFNFVF9DT05GSUcgPSBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gY2hlY2sgaWYgYW4gYXR0cmlidXRlIHZhbHVlIGlzIHZhbGlkLlxuICAgICAqIFVzZXMgbGFzdCBzZXQgY29uZmlnLCBpZiBhbnkuIE90aGVyd2lzZSwgdXNlcyBjb25maWcgZGVmYXVsdHMuXG4gICAgICogaXNWYWxpZEF0dHJpYnV0ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0YWcgVGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gYXR0ciBBdHRyaWJ1dGUgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlIEF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gT3RoZXJ3aXNlLCByZXR1cm5zIGZhbHNlLlxuICAgICAqL1xuXG5cbiAgICBET01QdXJpZnkuaXNWYWxpZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uICh0YWcsIGF0dHIsIHZhbHVlKSB7XG4gICAgICAvKiBJbml0aWFsaXplIHNoYXJlZCBjb25maWcgdmFycyBpZiBuZWNlc3NhcnkuICovXG4gICAgICBpZiAoIUNPTkZJRykge1xuICAgICAgICBfcGFyc2VDb25maWcoe30pO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGNUYWcgPSB0cmFuc2Zvcm1DYXNlRnVuYyh0YWcpO1xuICAgICAgdmFyIGxjTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGF0dHIpO1xuICAgICAgcmV0dXJuIF9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZEhvb2tcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIGFkZCBET01QdXJpZnkgaG9va3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byBhZGRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rRnVuY3Rpb24gZnVuY3Rpb24gdG8gZXhlY3V0ZVxuICAgICAqL1xuXG5cbiAgICBET01QdXJpZnkuYWRkSG9vayA9IGZ1bmN0aW9uIChlbnRyeVBvaW50LCBob29rRnVuY3Rpb24pIHtcbiAgICAgIGlmICh0eXBlb2YgaG9va0Z1bmN0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBob29rc1tlbnRyeVBvaW50XSB8fCBbXTtcbiAgICAgIGFycmF5UHVzaChob29rc1tlbnRyeVBvaW50XSwgaG9va0Z1bmN0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZUhvb2tcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhIERPTVB1cmlmeSBob29rIGF0IGEgZ2l2ZW4gZW50cnlQb2ludFxuICAgICAqIChwb3BzIGl0IGZyb20gdGhlIHN0YWNrIG9mIGhvb2tzIGlmIG1vcmUgYXJlIHByZXNlbnQpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW50cnlQb2ludCBlbnRyeSBwb2ludCBmb3IgdGhlIGhvb2sgdG8gcmVtb3ZlXG4gICAgICogQHJldHVybiB7RnVuY3Rpb259IHJlbW92ZWQocG9wcGVkKSBob29rXG4gICAgICovXG5cblxuICAgIERPTVB1cmlmeS5yZW1vdmVIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQpIHtcbiAgICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICByZXR1cm4gYXJyYXlQb3AoaG9va3NbZW50cnlQb2ludF0pO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlSG9va3NcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhbGwgRE9NUHVyaWZ5IGhvb2tzIGF0IGEgZ2l2ZW4gZW50cnlQb2ludFxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9va3MgdG8gcmVtb3ZlXG4gICAgICovXG5cblxuICAgIERPTVB1cmlmeS5yZW1vdmVIb29rcyA9IGZ1bmN0aW9uIChlbnRyeVBvaW50KSB7XG4gICAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBbXTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZUFsbEhvb2tzXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rc1xuICAgICAqXG4gICAgICovXG5cblxuICAgIERPTVB1cmlmeS5yZW1vdmVBbGxIb29rcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGhvb2tzID0ge307XG4gICAgfTtcblxuICAgIHJldHVybiBET01QdXJpZnk7XG4gIH1cblxuICB2YXIgcHVyaWZ5ID0gY3JlYXRlRE9NUHVyaWZ5KCk7XG5cbiAgcmV0dXJuIHB1cmlmeTtcblxufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHVyaWZ5LmpzLm1hcFxuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuaHRtbDJtZD1lKCk6dC5odG1sMm1kPWUoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiByKG4pe2lmKGVbbl0pcmV0dXJuIGVbbl0uZXhwb3J0czt2YXIgbz1lW25dPXtpOm4sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtuXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxyKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiByLm09dCxyLmM9ZSxyLmQ9ZnVuY3Rpb24odCxlLG4pe3Iubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpufSl9LHIucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sci50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1yKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKHIucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIG8gaW4gdClyLmQobixvLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwsbykpO3JldHVybiBufSxyLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIHIuZChlLFwiYVwiLGUpLGV9LHIubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sci5wPVwiXCIscihyLnM9NDUpfShbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPXIoMSksbz1yKDkpLGk9cigxMiksYT1yKDYpLGM9cigyKSx1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUscil7dmFyIG49dm9pZCAwPT09cj97fTpyLG89bi5rZWVwU3BhY2UsaT12b2lkIDAhPT1vJiZvLGE9bi5wcmV2VGFnTmFtZSxjPXZvaWQgMD09PWE/XCJcIjphLHU9bi5uZXh0VGFnTmFtZSxzPXZvaWQgMD09PXU/XCJcIjp1LGw9bi5wcmV2VGFnU3RyLHA9dm9pZCAwPT09bD9cIlwiOmwsZj1uLm5leHRUYWdTdHIsaD12b2lkIDA9PT1mP1wiXCI6ZixkPW4ucGFyZW50VGFnLF89dm9pZCAwPT09ZD9cIlwiOmQseT1uLmlzRmlyc3RTdWJUYWcsdj12b2lkIDA9PT15fHx5LGc9bi5jYWxjTGVhZGluZyxiPXZvaWQgMCE9PWcmJmcsbT1uLmxlYWRpbmdTcGFjZSxPPXZvaWQgMD09PW0/XCJcIjptLFQ9bi5sYXllcixTPXZvaWQgMD09PVQ/MTpULHg9bi5ub1dyYXAsaj12b2lkIDAhPT14JiZ4LHc9bi5tYXRjaCxQPXZvaWQgMD09PXc/bnVsbDp3LE09bi5pbmRlbnRTcGFjZSxDPXZvaWQgMD09PU0/XCJcIjpNLE49bi5sYW5ndWFnZSxFPXZvaWQgMD09PU4/XCJcIjpOLEw9bi5jb3VudCxrPXZvaWQgMD09PUw/MTpMLEE9bi50YWJsZUNvbHVtbkNvdW50LFY9dm9pZCAwPT09QT8wOkEsVz1uLm5vRXh0cmFMaW5lLFI9dm9pZCAwIT09VyYmVyxJPW4uaW5UYWJsZSxIPXZvaWQgMCE9PUkmJkk7aWYodGhpcy50YWdOYW1lPWUsdGhpcy5yYXdTdHI9dCx0aGlzLnBhcmVudFRhZz1fLHRoaXMucHJldlRhZ05hbWU9Yyx0aGlzLm5leHRUYWdOYW1lPXMsdGhpcy5wcmV2VGFnU3RyPXAsdGhpcy5uZXh0VGFnU3RyPWgsdGhpcy5pc0ZpcnN0U3ViVGFnPXYsdGhpcy5jYWxjTGVhZGluZz1iLHRoaXMubGVhZGluZ1NwYWNlPU8sdGhpcy5sYXllcj1TLHRoaXMubm9XcmFwPWosdGhpcy5tYXRjaD1QLHRoaXMuaW5kZW50U3BhY2U9Qyx0aGlzLmxhbmd1YWdlPUUsdGhpcy5jb3VudD1rLHRoaXMuaW5UYWJsZT1ILHRoaXMudGFibGVDb2x1bW5Db3VudD1WLHRoaXMubm9FeHRyYUxpbmU9Uix0aGlzLmtlZXBTcGFjZT1pLCF0aGlzLl9fZGV0ZWN0U3RyX18odCx0aGlzLnRhZ05hbWUpKXJldHVybiB0aGlzLmF0dHJzPXt9LHZvaWQodGhpcy5pbm5lckhUTUw9XCJcIik7dmFyIHE9dGhpcy5fX2ZldGNoVGFnQXR0ckFuZElubmVySFRNTF9fKHQpLEY9cS5hdHRyLEc9cS5pbm5lckhUTUw7dGhpcy5hdHRycz1GLHRoaXMuaW5uZXJIVE1MPUd9cmV0dXJuIHQucHJvdG90eXBlLl9fZGV0ZWN0U3RyX189ZnVuY3Rpb24odCxlKXtpZihcIjxcIiE9PXRbMF0pcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSB2YWxpZCB0YWcsIGN1cnJlbnQgdGFnIG5hbWU6IFwiLmNvbmNhdCh0aGlzLnRhZ05hbWUsXCIsIHRhZyBjb250ZW50OiBcIikuY29uY2F0KHQpKSwhMTtmb3IodmFyIHI9XCJcIixuPSExLG89MTtvPHQubGVuZ3RoJiZcIj5cIiE9PXRbb107bysrKSFuJiYvKFxcc3xcXC8pLy50ZXN0KHRbb10pJiYobj0hMCksbnx8KHIrPXRbb10pO3JldHVybiByPT09ZXx8KGNvbnNvbGUud2FybihcIlRhZyBpcyBub3QgbWF0Y2ggdGFnTmFtZSwgdGFnTmFtZSBpbiBzdHIgaXMgXCIrcitcIiwgd2hpY2ggdGFnTmFtZSBwYXNzZWQgZnJvbSBwYXJlbnQgaXMgXCIrZSksITEpfSx0LnByb3RvdHlwZS5fX2ZldGNoVGFnQXR0ckFuZElubmVySFRNTF9fPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1cIlwiLHI9MTtyPHQubGVuZ3RoJiZcIj5cIiE9PXRbcl07cisrKWUrPXRbcl07Zm9yKHZhciBvPXQuc2xpY2UocisxKSxpPVwiXCIsYT0tMSxjPW8ubGVuZ3RoLTE7Yz49MDtjLS0paWYoKGk9b1tjXStpKS5zdGFydHNXaXRoKFwiPC9cIikpe2kuc3RhcnRzV2l0aChcIjwvXCIrdGhpcy50YWdOYW1lK1wiPlwiKSYmKGE9Yyk7YnJlYWt9LTE9PT1hJiYoMCxuLmlzU2VsZkNsb3NpbmcpKHRoaXMudGFnTmFtZSkmJmNvbnNvbGUud2FybihcIlRoZXJlIGRldGVjdCBhIHNlbGYgY2xvc2UgdGFnLCB3aGljaCBuYW1lIGlzOlwiLHRoaXMudGFnTmFtZSk7dmFyIHU9KDAsbi5nZXRUYWdBdHRyaWJ1dGVzKShlKTtyZXR1cm4gdGhpcy50YWdOYW1lJiZkZWxldGUgdVt0aGlzLnRhZ05hbWVdLHthdHRyOnUsaW5uZXJIVE1MOm8uc2xpY2UoMCxhKX19LHQucHJvdG90eXBlLl9fb25seUxlYWRpbmdTcGFjZV9fPWZ1bmN0aW9uKHQpe3Q9dC50cmltKCk7Zm9yKHZhciBlPTA7ZTx0Lmxlbmd0aDtlKyspaWYodFtlXSE9PWkuU0lOR0xFKXJldHVybiExO3JldHVybiEwfSx0LnByb3RvdHlwZS5fX2lzRW1wdHlfXz1mdW5jdGlvbih0KXtyZXR1cm4hdGhpcy5rZWVwU3BhY2UmJihcIlwiPT09dCYmXCJ0ZFwiIT09dGhpcy50YWdOYW1lfHx0aGlzLmNhbGNMZWFkaW5nJiZ0aGlzLl9fb25seUxlYWRpbmdTcGFjZV9fKHQpKX0sdC5wcm90b3R5cGUuZ2V0VmFsaWRTdWJUYWdOYW1lPWZ1bmN0aW9uKHQpe3JldHVybiB0fSx0LnByb3RvdHlwZS5iZWZvcmVQYXJzZT1mdW5jdGlvbigpe3ZhciB0PWMuZGVmYXVsdC5nZXQoKS50YWdMaXN0ZW5lcjtpZih0KXt2YXIgZT10KHRoaXMudGFnTmFtZSx7cGFyZW50VGFnOnRoaXMucGFyZW50VGFnLHByZXZUYWdOYW1lOnRoaXMucHJldlRhZ05hbWUsbmV4dFRhZ05hbWU6dGhpcy5uZXh0VGFnTmFtZSxpc0ZpcnN0U3ViVGFnOnRoaXMuaXNGaXJzdFN1YlRhZyxhdHRyczp0aGlzLmF0dHJzLGlubmVySFRNTDp0aGlzLmlubmVySFRNTCxsYW5ndWFnZTp0aGlzLmxhbmd1YWdlLG1hdGNoOnRoaXMubWF0Y2gsaXNTZWxmQ2xvc2luZzohMX0pLHI9ZS5hdHRycyxuPWUubGFuZ3VhZ2Usbz1lLm1hdGNoO3RoaXMuYXR0cnM9cixcInN0cmluZ1wiPT09dHlwZW9mIG4mJih0aGlzLmxhbmd1YWdlPW4pLFwidW5kZWZpbmVkXCIhPT10eXBlb2YgbyYmKHRoaXMubWF0Y2g9byl9cmV0dXJuXCJcIn0sdC5wcm90b3R5cGUucGFyc2VWYWxpZFN1YlRhZz1mdW5jdGlvbih0LGUscil7cmV0dXJuIG5ldygoMCxuLmdldFRhZ0NvbnN0cnVjdG9yKShlKSkodCxlLHIpLmV4ZWMoKX0sdC5wcm90b3R5cGUucGFyc2VPbmx5U3RyaW5nPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gbmV3IG8uZGVmYXVsdCh0LGUscikuZXhlYygpfSx0LnByb3RvdHlwZS5hZnRlclBhcnNlZD1mdW5jdGlvbih0KXtyZXR1cm4gdH0sdC5wcm90b3R5cGUuc2xpbT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5rZWVwU3BhY2U/dDp0LnRyaW0oKX0sdC5wcm90b3R5cGUuYmVmb3JlTWVyZ2VTcGFjZT1mdW5jdGlvbih0KXtyZXR1cm4gdH0sdC5wcm90b3R5cGUubWVyZ2VTcGFjZT1mdW5jdGlvbih0LGUscil7cmV0dXJuIHRoaXMua2VlcFNwYWNlJiZcInByZVwiIT09dGhpcy50YWdOYW1lP3QuZW5kc1dpdGgoXCJcXG5cIik/dDp0K3IucmVwbGFjZSgvXFxuKy9nLFwiXFxuXCIpOmUrdCtyfSx0LnByb3RvdHlwZS5hZnRlck1lcmdlU3BhY2U9ZnVuY3Rpb24odCl7cmV0dXJuIHR9LHQucHJvdG90eXBlLmJlZm9yZVJldHVybj1mdW5jdGlvbih0KXtyZXR1cm4gdH0sdC5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbih0LGUpe3ZvaWQgMD09PXQmJih0PVwiXCIpLHZvaWQgMD09PWUmJihlPVwiXCIpO2Zvcih2YXIgcj10aGlzLmJlZm9yZVBhcnNlKCksbz0oMCxuLmdlbmVyYXRlR2V0TmV4dFZhbGlkVGFnKSh0aGlzLmlubmVySFRNTCksaT1vKCksYz1pWzBdLHU9aVsxXSxzPW51bGw7XCJcIiE9PXU7KXt2YXIgbD1vKCkscD1sWzBdLGY9bFsxXSxoPXtwYXJlbnRUYWc6dGhpcy50YWdOYW1lLG5leHRUYWdOYW1lOnAsbmV4dFRhZ1N0cjpmLHByZXZUYWdOYW1lOnMscHJldlRhZ1N0cjpyLGxlYWRpbmdTcGFjZTp0aGlzLmxlYWRpbmdTcGFjZSxsYXllcjp0aGlzLmxheWVyLGtlZXBTcGFjZTp0aGlzLmtlZXBTcGFjZSxpblRhYmxlOnRoaXMuaW5UYWJsZX0sZD12b2lkIDA7ZD1udWxsIT1jP3RoaXMucGFyc2VWYWxpZFN1YlRhZyh1LGMsaCk6dGhpcy5wYXJzZU9ubHlTdHJpbmcodSxjLGgpO3ZhciBfPXRoaXMuZ2V0VmFsaWRTdWJUYWdOYW1lKGMpO2M9cCx1PWYsbnVsbD09XyYmdGhpcy5fX2lzRW1wdHlfXyhkKXx8KHM9Xyx0aGlzLmlzRmlyc3RTdWJUYWc9ITEscis9ZCl9cmV0dXJuIHI9dGhpcy5hZnRlclBhcnNlZChyKSxyPXRoaXMuc2xpbShyKSx0aGlzLl9faXNFbXB0eV9fKHIpP1wiXCI6KHI9dGhpcy5iZWZvcmVNZXJnZVNwYWNlKHIpLCF0aGlzLm5vRXh0cmFMaW5lJiYoMCxhLmRlZmF1bHQpKHRoaXMudGFnTmFtZSkmJnRoaXMucHJldlRhZ05hbWUmJiFyLnN0YXJ0c1dpdGgoXCJcXG5cIikmJiEoMCxhLmRlZmF1bHQpKHRoaXMucHJldlRhZ05hbWUpJiZ0aGlzLnBhcmVudFRhZyYmKHQ9XCJcXG5cXG5cIikscj10aGlzLm1lcmdlU3BhY2Uocix0LGUpLHRoaXMubm9XcmFwJiYhdGhpcy5rZWVwU3BhY2UmJihyPXIucmVwbGFjZSgvXFxzKy9nLFwiIFwiKSkscj10aGlzLmFmdGVyTWVyZ2VTcGFjZShyKSxyPXRoaXMuYmVmb3JlUmV0dXJuKHIpKX0sdH0oKTtlLmRlZmF1bHQ9dX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuc2hvdWxkUmVuZGVyUmF3SW5zaWRlPWUuaXNJbmRlcGVuZGVudFRhZz1lLmNsZWFyQ29tbWVudD1lLmdldExhbmd1YWdlPWUuZ2V0VGFibGVBbGlnbj1lLmdldFRhZ0F0dHJpYnV0ZXM9ZS5pc1NlbGZDbG9zaW5nPWUuZ2VuZXJhdGVHZXROZXh0VmFsaWRUYWc9ZS5nZXRUYWdDb25zdHJ1Y3Rvcj1lLmdldFJlYWxUYWdOYW1lPWUudW5lc2NhcGVTdHI9ZS5leHRyYUVzY2FwZT12b2lkIDA7dmFyIG49cig0Nik7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJleHRyYUVzY2FwZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBuLmV4dHJhRXNjYXBlfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwidW5lc2NhcGVTdHJcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbi51bmVzY2FwZVN0cn19KTt2YXIgbz1yKDQ3KTtlLmdlbmVyYXRlR2V0TmV4dFZhbGlkVGFnPW8uZGVmYXVsdDt2YXIgaT1yKDQ4KTtlLmdldFRhZ0NvbnN0cnVjdG9yPWkuZGVmYXVsdDt2YXIgYT1yKDExKTtlLmlzU2VsZkNsb3Npbmc9YS5kZWZhdWx0O3ZhciBjPXIoNTEpO2UuZ2V0VGFnQXR0cmlidXRlcz1jLmRlZmF1bHQ7dmFyIHU9cig1Mik7ZS5nZXRMYW5ndWFnZT11LmRlZmF1bHQ7dmFyIHM9cig1Myk7ZS5jbGVhckNvbW1lbnQ9cy5kZWZhdWx0O3ZhciBsPXIoMTcpO2UuZ2V0UmVhbFRhZ05hbWU9bC5kZWZhdWx0O3ZhciBwPXIoNik7ZS5pc0luZGVwZW5kZW50VGFnPXAuZGVmYXVsdDt2YXIgZj1yKDU0KTtlLmdldFRhYmxlQWxpZ249Zi5kZWZhdWx0O3ZhciBoPXIoNTUpO2Uuc2hvdWxkUmVuZGVyUmF3SW5zaWRlPWguZGVmYXVsdH0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXt2YXIgZT12b2lkIDA9PT10P3t9OnQscj1lLnNraXBUYWdzLG49dm9pZCAwPT09cj9bXTpyLG89ZS5lbXB0eVRhZ3MsaT12b2lkIDA9PT1vP1tdOm8sYT1lLmlnbm9yZVRhZ3MsYz12b2lkIDA9PT1hP1tdOmEsdT1lLmFsaWFzVGFncyxzPXZvaWQgMD09PXU/e306dSxsPWUucmVuZGVyQ3VzdG9tVGFncyxwPXZvaWQgMD09PWx8fGwsZj1lLnRhZ0xpc3RlbmVyLGg9dm9pZCAwPT09Zj9mdW5jdGlvbih0LGUpe3JldHVybiBlfTpmO3RoaXMub3B0aW9ucz17c2tpcFRhZ3M6bixlbXB0eVRhZ3M6aSxpZ25vcmVUYWdzOmMsYWxpYXNUYWdzOnMscmVuZGVyQ3VzdG9tVGFnczpwLHRhZ0xpc3RlbmVyOmh9fXJldHVybiB0LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vcHRpb25zfSx0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMub3B0aW9ucz17fX0sdC5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIHI9dGhpczt0JiZcIltvYmplY3QgT2JqZWN0XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpJiZPYmplY3Qua2V5cyh0KS5mb3JFYWNoKGZ1bmN0aW9uKG4pe2U/ci5vcHRpb25zW25dPXRbbl06ZnVuY3Rpb24odCxlLHIpe2lmKCEociBpbiB0KSlyZXR1cm4gdm9pZCh0W3JdPWVbcl0pO3ZhciBuPUFycmF5LmlzQXJyYXkodFtyXSksbz1cIltvYmplY3QgT2JqZWN0XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRbcl0pO3Rbcl09bj90W3JdLmNvbmNhdChlW3JdKTpvP09iamVjdC5hc3NpZ24odFtyXSxlW3JdKTplW3JdfShyLm9wdGlvbnMsdCxuKX0pfSx0LnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMub3B0aW9ucz1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG8pKSx0aGlzLm9wdGlvbnMudGFnTGlzdGVuZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZX19LHR9KCk7dmFyIG89e2lnbm9yZVRhZ3M6W1wiXCIsXCJzdHlsZVwiLFwiaGVhZFwiLFwiIWRvY3R5cGVcIixcImZvcm1cIixcInN2Z1wiLFwibm9zY3JpcHRcIixcInNjcmlwdFwiLFwibWV0YVwiXSxza2lwVGFnczpbXCJkaXZcIixcImh0bWxcIixcImJvZHlcIixcIm5hdlwiLFwic2VjdGlvblwiLFwiZm9vdGVyXCIsXCJtYWluXCIsXCJhc2lkZVwiLFwiYXJ0aWNsZVwiLFwiaGVhZGVyXCJdLGVtcHR5VGFnczpbXSxhbGlhc1RhZ3M6e2ZpZ3VyZTpcInBcIixkbDpcInBcIixkZDpcInBcIixkdDpcInBcIixmaWdjYXB0aW9uOlwicFwifSxyZW5kZXJDdXN0b21UYWdzOiEwfSxpPW5ldyBuO2kucmVzZXQoKSxlLmRlZmF1bHQ9aX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIpe3ZvaWQgMD09PXImJihyPVwiaDFcIik7dmFyIG49dC5jYWxsKHRoaXMsZSxyKXx8dGhpcztyZXR1cm4gbi5tYXRjaD1cIiNcIixufXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuYmVmb3JlTWVyZ2VTcGFjZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5tYXRjaCtcIiBcIit0fSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIGV8fChlPVwiXFxuXCIpLHJ8fChyPVwiXFxuXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KHIoMCkuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1yKDEpLG89cigyKSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUscil7dmFyIG49dm9pZCAwPT09cj97fTpyLG89bi5wYXJlbnRUYWcsaT12b2lkIDA9PT1vP1wiXCI6byxhPW4ubGVhZGluZ1NwYWNlLGM9dm9pZCAwPT09YT9cIlwiOmEsdT1uLmxheWVyLHM9dm9pZCAwPT09dT8xOnUsbD1uLmlzRmlyc3RTdWJUYWcscD12b2lkIDAhPT1sJiZsLGY9bi5pblRhYmxlLGg9dm9pZCAwIT09ZiYmZixkPW4ubWF0Y2gsXz12b2lkIDA9PT1kP251bGw6ZCx5PW4ucHJldlRhZ05hbWUsdj12b2lkIDA9PT15P1wiXCI6eSxnPW4ubmV4dFRhZ05hbWUsYj12b2lkIDA9PT1nP1wiXCI6ZztpZih0aGlzLnRhZ05hbWU9ZSx0aGlzLnJhd1N0cj10LHRoaXMucGFyZW50VGFnPWksdGhpcy5pc0ZpcnN0U3ViVGFnPXAsdGhpcy5wcmV2VGFnTmFtZT12LHRoaXMubmV4dFRhZ05hbWU9Yix0aGlzLmxlYWRpbmdTcGFjZT1jLHRoaXMubGF5ZXI9cyx0aGlzLmlubmVySFRNTD1cIlwiLHRoaXMubWF0Y2g9Xyx0aGlzLmluVGFibGU9aCx0aGlzLl9fZGV0ZWN0U3RyX18odCx0aGlzLnRhZ05hbWUpKXt2YXIgbT10aGlzLl9fZmV0Y2hUYWdBdHRyX18odCkuYXR0cjt0aGlzLmF0dHJzPW19ZWxzZSB0aGlzLmF0dHJzPXt9fXJldHVybiB0LnByb3RvdHlwZS5fX2RldGVjdFN0cl9fPWZ1bmN0aW9uKHQsZSl7aWYoXCI8XCIhPT10WzBdKXJldHVybiBjb25zb2xlLmVycm9yKFwiTm90IGEgdmFsaWQgdGFnLCBjdXJyZW50IHRhZyBuYW1lOiBcIi5jb25jYXQodGhpcy50YWdOYW1lLFwiLCB0YWcgY29udGVudDogXCIpLmNvbmNhdCh0KSksITE7Zm9yKHZhciByPVwiXCIsbj0hMSxvPTE7bzx0Lmxlbmd0aCYmXCI+XCIhPT10W29dO28rKykhbiYmLyhcXHN8XFwvKS8udGVzdCh0W29dKSYmKG49ITApLG58fChyKz10W29dKTtyZXR1cm4gcj09PWV8fChjb25zb2xlLndhcm4oXCJUYWcgaXMgbm90IG1hdGNoIHRhZ05hbWUsIHRhZ05hbWUgaW4gc3RyIGlzIFwiK3IrXCIsIHdoaWNoIHRhZ05hbWUgcGFzc2VkIGZyb20gcGFyZW50IGlzIFwiK2UpLCExKX0sdC5wcm90b3R5cGUuX19mZXRjaFRhZ0F0dHJfXz1mdW5jdGlvbih0KXtmb3IodmFyIGU9XCJcIixyPTE7cjx0Lmxlbmd0aCYmXCI+XCIhPT10W3JdO3IrKyllKz10W3JdO3JldHVybnthdHRyOigwLG4uZ2V0VGFnQXR0cmlidXRlcykoZSl9fSx0LnByb3RvdHlwZS5iZWZvcmVQYXJzZT1mdW5jdGlvbigpe3ZhciB0PW8uZGVmYXVsdC5nZXQoKS50YWdMaXN0ZW5lcjtpZih0KXt2YXIgZT10KHRoaXMudGFnTmFtZSx7cGFyZW50VGFnOnRoaXMucGFyZW50VGFnLHByZXZUYWdOYW1lOnRoaXMucHJldlRhZ05hbWUsbmV4dFRhZ05hbWU6dGhpcy5uZXh0VGFnTmFtZSxpc0ZpcnN0U3ViVGFnOnRoaXMuaXNGaXJzdFN1YlRhZyxhdHRyczp0aGlzLmF0dHJzLGlubmVySFRNTDp0aGlzLmlubmVySFRNTCxtYXRjaDp0aGlzLm1hdGNoLGlzU2VsZkNsb3Npbmc6ITB9KSxyPWUuYXR0cnMsbj1lLm1hdGNoO3RoaXMuYXR0cnM9cix0aGlzLm1hdGNoPW59cmV0dXJuXCJcIn0sdC5wcm90b3R5cGUuYmVmb3JlTWVyZ2VTcGFjZT1mdW5jdGlvbih0KXtyZXR1cm4gdH0sdC5wcm90b3R5cGUuYWZ0ZXJNZXJnZVNwYWNlPWZ1bmN0aW9uKHQpe3JldHVybiB0fSx0LnByb3RvdHlwZS5iZWZvcmVSZXR1cm49ZnVuY3Rpb24odCl7cmV0dXJuIHR9LHQucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24odCxlKXt2b2lkIDA9PT10JiYodD1cIlwiKSx2b2lkIDA9PT1lJiYoZT1cIlwiKTt2YXIgcj10aGlzLmJlZm9yZVBhcnNlKCk7cmV0dXJuIHI9dCsocj10aGlzLmJlZm9yZU1lcmdlU3BhY2UocikpK2Uscj10aGlzLmFmdGVyTWVyZ2VTcGFjZShyKSxyPXRoaXMuYmVmb3JlUmV0dXJuKHIpfSx0fSgpO2UuZGVmYXVsdD1pfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiB0LnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sdH0oKTtlLmRlZmF1bHQ9bn0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPXIoMTcpLG89e2h0bWw6ITAsYm9keTohMCxwOiEwLGRpdjohMCxwcmU6ITAsc2VjdGlvbjohMCxibG9ja3F1b3RlOiEwLGFzaWRlOiEwLGxpOiEwLHVsOiEwLG9sOiEwLGZvcm06ITAsaHI6ITAsaDE6ITAsaDI6ITAsaDM6ITAsaDQ6ITAsaDU6ITAsaDY6ITAsZGw6ITAsZGQ6ITAsZHQ6ITAsYnI6ITB9O2UuZGVmYXVsdD1mdW5jdGlvbih0KXtpZighdClyZXR1cm4hMTt2YXIgZT0oMCxuLmRlZmF1bHQpKHQpO3JldHVybiEhZSYmISFvW2VdfX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCksbz10aGlzJiZ0aGlzLl9fYXNzaWdufHxmdW5jdGlvbigpe3JldHVybihvPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPTEsbj1hcmd1bWVudHMubGVuZ3RoO3I8bjtyKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5fX0VtcHR5U2VsZkNsb3NlX189ZS5fX0VtcHR5X189dm9pZCAwO3ZhciBpPXIoMCksYT1yKDQpLGM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7cmV0dXJuIHZvaWQgMD09PXImJihyPVwiX19lbXB0eV9fXCIpLHQuY2FsbCh0aGlzLGUscixuKXx8dGhpc31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLnNsaW09ZnVuY3Rpb24odCl7cmV0dXJuIHR9LGUucHJvdG90eXBlLnBhcnNlVmFsaWRTdWJUYWc9ZnVuY3Rpb24odCxyLG4pe3JldHVybiBuZXcgZSh0LHIsbyh7fSxuKSkuZXhlYygpfSxlLnByb3RvdHlwZS5wYXJzZU9ubHlTdHJpbmc9ZnVuY3Rpb24odCxlLHIpe3JldHVybiB0fSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKCl7cmV0dXJuIHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLFwiXCIsXCJcIil9LGV9KGkuZGVmYXVsdCk7ZS5fX0VtcHR5X189Yzt2YXIgdT1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscil7dm9pZCAwPT09ciYmKHI9XCJfX2VtcHR5c2VsZmNsb3NlX19cIik7dmFyIG49dC5jYWxsKHRoaXMsZSxyKXx8dGhpcztyZXR1cm4gbi50YWdOYW1lPXIsbn1yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oKXtyZXR1cm4gdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsXCJcIixcIlwiKX0sZX0oYS5kZWZhdWx0KTtlLl9fRW1wdHlTZWxmQ2xvc2VfXz11fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLl9fU2tpcFNlbGZDbG9zZV9fPWUuX19Ta2lwX189dm9pZCAwO3ZhciBvPXIoMCksaT1yKDQpLGE9cigxKSxjPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3ZvaWQgMD09PXImJihyPVwiX19za2lwX19cIik7dmFyIG89dC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzO3JldHVybiBvLm5vTmVlZFdyYXA9W1widGRcIixcInRoXCJdLG99cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKCl7dmFyIGU9KDAsYS5pc0luZGVwZW5kZW50VGFnKSgoMCxhLmdldFJlYWxUYWdOYW1lKSh0aGlzLnRhZ05hbWUpKSYmKCF0aGlzLnBhcmVudFRhZ3x8IXRoaXMubm9OZWVkV3JhcC5pbmNsdWRlcyh0aGlzLnBhcmVudFRhZykpLHI9ZT9cIlxcblwiOlwiXCIsbj1lP1wiXFxuXCI6XCJcIjtyZXR1cm4gdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMscixuKX0sZX0oby5kZWZhdWx0KTtlLl9fU2tpcF9fPWM7dmFyIHU9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7cmV0dXJuIHZvaWQgMD09PXImJihyPVwiX19za2lwc2VsZmNsb3NlX19cIiksdC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbigpe3JldHVyblwiXCJ9LGV9KGkuZGVmYXVsdCk7ZS5fX1NraXBTZWxmQ2xvc2VfXz11fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49cigxKSxvPXIoNiksaT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLHIpe3ZvaWQgMD09PWUmJihlPVwiX19ub21hdGNoX19cIik7dmFyIG49dm9pZCAwPT09cj97fTpyLG89bi5rZWVwU3BhY2UsaT12b2lkIDAhPT1vJiZvLGE9bi5wcmV2VGFnTmFtZSxjPXZvaWQgMD09PWE/XCJcIjphLHU9bi5uZXh0VGFnTmFtZSxzPXZvaWQgMD09PXU/XCJcIjp1LGw9bi5wYXJlbnRUYWcscD12b2lkIDA9PT1sP1wiXCI6bCxmPW4uY2FsY0xlYWRpbmcsaD12b2lkIDAhPT1mJiZmLGQ9bi5sYXllcixfPXZvaWQgMD09PWQ/MTpkLHk9bi5sZWFkaW5nU3BhY2Usdj12b2lkIDA9PT15P1wiXCI6eSxnPW4uaW5UYWJsZSxiPXZvaWQgMCE9PWcmJmc7dGhpcy50YWdOYW1lPWUsdGhpcy5uZXh0VGFnTmFtZT1zLHRoaXMucHJldlRhZ05hbWU9Yyx0aGlzLnBhcmVudFRhZz1wLHRoaXMua2VlcFNwYWNlPWksdGhpcy5jYWxjTGVhZGluZz1oLHRoaXMubGVhZGluZ1NwYWNlPXYsdGhpcy5sYXllcj1fLHRoaXMucmF3U3RyPXQsdGhpcy5pblRhYmxlPWJ9cmV0dXJuIHQucHJvdG90eXBlLnNsaW09ZnVuY3Rpb24odCl7aWYodGhpcy5rZWVwU3BhY2UpcmV0dXJuIHQ7dmFyIGU9dC5yZXBsYWNlKC9cXHMrL2csXCIgXCIpO3JldHVybigwLG8uZGVmYXVsdCkodGhpcy5wcmV2VGFnTmFtZSkmJihlPWUudHJpbUxlZnQoKSksKDAsby5kZWZhdWx0KSh0aGlzLm5leHRUYWdOYW1lKSYmKGU9ZS50cmltUmlnaHQoKSksZX0sdC5wcm90b3R5cGUuYmVmb3JlUmV0dXJuPWZ1bmN0aW9uKHQpe2lmKHRoaXMua2VlcFNwYWNlKXJldHVybiB0O2lmKHRoaXMuY2FsY0xlYWRpbmcpcmV0dXJuIHRoaXMubGVhZGluZ1NwYWNlKygwLG4uZXh0cmFFc2NhcGUpKHQpO3ZhciBlPSgwLG4uZXh0cmFFc2NhcGUpKHQpO3JldHVybiB0aGlzLmluVGFibGUmJihlPWUucmVwbGFjZSgvXFx8L2csXCJcXFxcfFwiKSksZX0sdC5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbigpe3ZhciB0PXRoaXMucmF3U3RyO3JldHVybiB0PXRoaXMuc2xpbSh0KSx0PXRoaXMuYmVmb3JlUmV0dXJuKHQpfSx0fSgpO2UuZGVmYXVsdD1pfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLl9fTm9NYXRjaFNlbGZDbG9zZV9fPWUuX19Ob01hdGNoX189dm9pZCAwO3ZhciBvPXIoMCksaT1yKDQpLGE9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIpe3JldHVybiB2b2lkIDA9PT1yJiYocj1cIl9fbm9tYXRjaF9fXCIpLHQuY2FsbCh0aGlzLGUscil8fHRoaXN9cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5iZWZvcmVNZXJnZVNwYWNlPWZ1bmN0aW9uKHQpe3JldHVyblwiPFwiLmNvbmNhdCh0aGlzLnRhZ05hbWUsXCI+XCIpLmNvbmNhdCh0LFwiPC9cIikuY29uY2F0KHRoaXMudGFnTmFtZSxcIj5cIil9LGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oKXtyZXR1cm4gdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsXCJcIixcIlwiKX0sZX0oby5kZWZhdWx0KTtlLl9fTm9NYXRjaF9fPWE7dmFyIGM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIpe3JldHVybiB2b2lkIDA9PT1yJiYocj1cIl9fbm9tYXRjaHNlbGZjbG9zZV9fXCIpLHQuY2FsbCh0aGlzLGUscil8fHRoaXN9cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKCl7cmV0dXJuXCI8XCIuY29uY2F0KHRoaXMudGFnTmFtZSxcIiAvPlwiKX0sZX0oaS5kZWZhdWx0KTtlLl9fTm9NYXRjaFNlbGZDbG9zZV9fPWN9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj17aW1nOiEwLGhyOiEwLGlucHV0OiEwLGJyOiEwLG1ldGE6ITAsbGluazohMCxcIiFkb2N0eXBlXCI6ITAsYmFzZTohMCxjb2w6ITAsYXJlYTohMCxwYXJhbTohMCxvYmplY3Q6ITAsZW1iZWQ6ITAsa2V5Z2VuOiEwLHNvdXJjZTohMH07ZS5kZWZhdWx0PWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT10JiYhIW5bdC50b0xvd2VyQ2FzZSgpXX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLlRSSVBMRT1lLkRPVUJMRT1lLlNJTkdMRT12b2lkIDA7ZS5TSU5HTEU9XCJcXHUyNjA4XCI7ZS5ET1VCTEU9XCJcXHUyNjA4XFx1MjYwOFwiO2UuVFJJUExFPVwiXFx1MjYwOFxcdTI2MDhcXHUyNjA4XCJ9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3ZvaWQgMD09PXImJihyPVwic3Ryb25nXCIpO3ZhciBvPXQuY2FsbCh0aGlzLGUscixuKXx8dGhpcztyZXR1cm4gby5sYXllcj0xLG8ubWF0Y2g9by5tYXRjaHx8XCIqKlwiLG99cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5iZWZvcmVNZXJnZVNwYWNlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm1hdGNoK3QrdGhpcy5tYXRjaH0sZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlwiKSx2b2lkIDA9PT1yJiYocj1cIlwiKSxudWxsIT10aGlzLm1hdGNoJiZ0aGlzLnByZXZUYWdTdHImJiF0aGlzLnByZXZUYWdTdHIuZW5kc1dpdGgoXCJcXFxcXCIrdGhpcy5tYXRjaFswXSkmJnRoaXMucHJldlRhZ1N0ci5lbmRzV2l0aCh0aGlzLm1hdGNoWzBdKSYmKGU9XCIgXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KHIoMCkuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyKXt2b2lkIDA9PT1yJiYocj1cImRlbFwiKTt2YXIgbj10LmNhbGwodGhpcyxlLHIpfHx0aGlzO3JldHVybiBuLm1hdGNoPW4ubWF0Y2h8fFwifn5cIixufXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuYmVmb3JlTWVyZ2VTcGFjZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5tYXRjaCt0K3RoaXMubWF0Y2h9LGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcIiksdm9pZCAwPT09ciYmKHI9XCJcIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocigwKS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7dm9pZCAwPT09ciYmKHI9XCJlbVwiKTt2YXIgbz10LmNhbGwodGhpcyxlLHIsbil8fHRoaXM7cmV0dXJuIG8ubWF0Y2g9by5tYXRjaHx8XCIqXCIsb31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmJlZm9yZU1lcmdlU3BhY2U9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMubWF0Y2grdCt0aGlzLm1hdGNofSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXCIpLHZvaWQgMD09PXImJihyPVwiXCIpLFwic3Ryb25nXCI9PT10aGlzLnBhcmVudFRhZyYmdGhpcy5uZXh0VGFnU3RyJiYocj1cIiBcIiksbnVsbCE9dGhpcy5tYXRjaCYmdGhpcy5wcmV2VGFnU3RyJiYhdGhpcy5wcmV2VGFnU3RyLmVuZHNXaXRoKFwiXFxcXFwiK3RoaXMubWF0Y2gpJiZ0aGlzLnByZXZUYWdTdHIuZW5kc1dpdGgodGhpcy5tYXRjaCkmJihlPVwiIFwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShyKDApLmRlZmF1bHQpO2UuZGVmYXVsdD1vfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXt2b2lkIDA9PT1yJiYocj1cInRoXCIpO3ZhciBvPXQuY2FsbCh0aGlzLGUscixuKXx8dGhpcztyZXR1cm4gby50YWdOYW1lPXIsb31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmJlZm9yZU1lcmdlU3BhY2U9ZnVuY3Rpb24odCl7cmV0dXJuIHQrXCJ8XCJ9LGUucHJvdG90eXBlLnBhcnNlVmFsaWRTdWJUYWc9ZnVuY3Rpb24oZSxyLG4pe3JldHVyblwidWxcIj09PXJ8fFwib2xcIj09PXJ8fFwidGFibGVcIj09PXJ8fFwicHJlXCI9PT1yP2UucmVwbGFjZSgvKFtcXG5cXHJdKS9nLFwiXCIpOnQucHJvdG90eXBlLnBhcnNlVmFsaWRTdWJUYWcuY2FsbCh0aGlzLGUscixuKX0sZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlwiKSx2b2lkIDA9PT1yJiYocj1cIlwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShyKDApLmRlZmF1bHQpO2UuZGVmYXVsdD1vfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49cigyKTtlLmRlZmF1bHQ9ZnVuY3Rpb24odCl7aWYoIXQpcmV0dXJuIHQ7dmFyIGU9bi5kZWZhdWx0LmdldCgpLmFsaWFzVGFncztyZXR1cm4gbnVsbCE9KG51bGw9PT1lfHx2b2lkIDA9PT1lP3ZvaWQgMDplW3RdKT9lW3RdOnR9fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9XCJhXCIpLHQuY2FsbCh0aGlzLGUscixuKXx8dGhpc31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmJlZm9yZU1lcmdlU3BhY2U9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5hdHRycyxyPWUuaHJlZixuPWUudGl0bGUsbz1yfHxcIlwiO3JldHVybiBuP1wiW1wiLmNvbmNhdCh0LFwiXShcIikuY29uY2F0KG8sJyBcIicpLmNvbmNhdChuLCdcIiknKTpcIltcIi5jb25jYXQodCxcIl0oXCIpLmNvbmNhdChvLFwiKVwiKX0sZS5wcm90b3R5cGUucGFyc2VPbmx5U3RyaW5nPWZ1bmN0aW9uKGUscixuKXtyZXR1cm5cInRib2R5XCI9PT10aGlzLnBhcmVudFRhZ3x8XCJ0aGVhZFwiPT09dGhpcy5wYXJlbnRUYWc/ZTp0LnByb3RvdHlwZS5wYXJzZU9ubHlTdHJpbmcuY2FsbCh0aGlzLGUscixuKX0sZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlwiKSx2b2lkIDA9PT1yJiYocj1cIlwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShyKDApLmRlZmF1bHQpO2UuZGVmYXVsdD1vfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9XCJiXCIpLHQuY2FsbCh0aGlzLGUscixuKXx8dGhpc31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocigxMykuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpLG89dGhpcyYmdGhpcy5fX2Fzc2lnbnx8ZnVuY3Rpb24oKXtyZXR1cm4obz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGUscj0xLG49YXJndW1lbnRzLmxlbmd0aDtyPG47cisrKWZvcih2YXIgbyBpbiBlPWFyZ3VtZW50c1tyXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxvKSYmKHRbb109ZVtvXSk7cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPXIoNiksYT1yKDApLGM9cigxKSx1PWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3ZvaWQgMD09PXImJihyPVwiYmxvY2txdW90ZVwiKTt2YXIgbz10LmNhbGwodGhpcyxlLHIsbil8fHRoaXM7cmV0dXJuIG8ubWF0Y2g9by5tYXRjaHx8XCI+XCIsby5maWxsUGVyTGluZT1vLmZpbGxQZXJMaW5lLmJpbmQobyksb31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmJlZm9yZU1lcmdlU3BhY2U9ZnVuY3Rpb24odCl7aWYoXCJcIj09PXQudHJpbSgpKXJldHVyblwiXCI7dmFyIGU9dGhpcy5tYXRjaCtcIiBcIit0O3JldHVybiB0aGlzLmNhbGNMZWFkaW5nP3RoaXMubGVhZGluZ1NwYWNlK2U6ZX0sZS5wcm90b3R5cGUuYWZ0ZXJNZXJnZVNwYWNlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLHI9dC5zcGxpdChcIlxcblwiKSxuPXIubGVuZ3RoLTE7bj49MDtuLS0pbjxyLmxlbmd0aC0xJiZcIj5cIj09PXJbbl0udHJpbSgpJiZcIj5cIj09PXJbbisxXS50cmltKCkmJnIuc3BsaWNlKG4sMSk7cmV0dXJuKHI9ci5tYXAoZnVuY3Rpb24odCl7cmV0dXJuXCJcIj09PXQ/XCJcIjplLmZpbGxQZXJMaW5lKHQpfSkpLmpvaW4oXCJcXG5cIil9LGUucHJvdG90eXBlLmJlZm9yZVJldHVybj1mdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKFwiXFxuXFxuXCIsXCJcXG5cIil9LGUucHJvdG90eXBlLmZpbGxQZXJMaW5lPWZ1bmN0aW9uKHQpe3ZhciBlPVwiPlwiO2lmKHRoaXMuY2FsY0xlYWRpbmcmJihlPXRoaXMubGVhZGluZ1NwYWNlK1wiPlwiKSwhdC5zdGFydHNXaXRoKGUpKXt2YXIgcj10aGlzLm1hdGNoK1wiIFwiK3Q7cmV0dXJuIHRoaXMuY2FsY0xlYWRpbmc/dGhpcy5sZWFkaW5nU3BhY2UrcjpyfXJldHVybiB0fSxlLnByb3RvdHlwZS5wYXJzZVZhbGlkU3ViVGFnPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbjtcImJsb2NrcXVvdGVcIj09PWU/bj1uZXcoKDAsYy5nZXRUYWdDb25zdHJ1Y3RvcikoZSkpKHQsZSxvKG8oe30scikse2NhbGNMZWFkaW5nOnRoaXMuY2FsY0xlYWRpbmcsbWF0Y2g6dGhpcy5tYXRjaCtcIj5cIixub0V4dHJhTGluZTohMH0pKTpuPW5ldygoMCxjLmdldFRhZ0NvbnN0cnVjdG9yKShlKSkodCxlLG8obyh7fSxyKSx7bm9FeHRyYUxpbmU6ITB9KSk7dmFyIGE9bi5leGVjKCksdT1cIlwiO3RoaXMuY2FsY0xlYWRpbmcmJih1PXRoaXMubGVhZGluZ1NwYWNlKTt2YXIgcz0oMCxpLmRlZmF1bHQpKHIucHJldlRhZ05hbWUpJiZcImJyXCIhPT1yLnByZXZUYWdOYW1lLGw9KDAsaS5kZWZhdWx0KShyLm5leHRUYWdOYW1lKSYmXCJiclwiIT09ci5uZXh0VGFnTmFtZSxwPSgwLGkuZGVmYXVsdCkoZSkmJlwiYnJcIiE9PWU7cmV0dXJuIHRoaXMuaXNGaXJzdFN1YlRhZz9hLnRyaW1MZWZ0KCkucmVwbGFjZSh1LFwiXCIpOnA/KGE9dSt0aGlzLm1hdGNoK2Esc3x8KGE9XCJcXG5cIithKSwhbCYmci5uZXh0VGFnU3RyJiZyLm5leHRUYWdTdHIudHJpbSgpJiYoYSs9dGhpcy5tYXRjaCtcIlxcblwiKSxhKTpzP3UrdGhpcy5tYXRjaCtcIlxcblwiK2E6YX0sZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlxcblwiKSx2b2lkIDA9PT1yJiYocj1cIlxcblwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShhLmRlZmF1bHQpO2UuZGVmYXVsdD11fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9XCJiXCIpLHQuY2FsbCh0aGlzLGUscixuKXx8dGhpc31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcXG5cIiksdGhpcy5pblRhYmxlP1wiXCI6XCIgIFwiK2V9LGV9KHIoNCkuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpLG89dGhpcyYmdGhpcy5fX2Fzc2lnbnx8ZnVuY3Rpb24oKXtyZXR1cm4obz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGUscj0xLG49YXJndW1lbnRzLmxlbmd0aDtyPG47cisrKWZvcih2YXIgbyBpbiBlPWFyZ3VtZW50c1tyXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxvKSYmKHRbb109ZVtvXSk7cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPXIoMCksYT1yKDEpLGM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7dm9pZCAwPT09ciYmKHI9XCJjb2RlXCIpO3ZhciBvPXQuY2FsbCh0aGlzLGUscixuKXx8dGhpcztyZXR1cm4gby5tYXRjaD1udWxsPT1vLm1hdGNoP1wiYFwiOm8ubWF0Y2gsby5ub1dyYXA9XCJgXCI9PT1vLm1hdGNoLG8ubGF5ZXI9MSxvfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuYmVmb3JlTWVyZ2VTcGFjZT1mdW5jdGlvbih0KXt2YXIgZSxyO3JldHVyblwiXCIhPT10aGlzLm1hdGNoJiZcImBcIiE9PXRoaXMubWF0Y2g/KGU9dGhpcy5tYXRjaCtcIiBcIixyPVwiIFwiK3RoaXMubWF0Y2gpOihlPXRoaXMubWF0Y2gscj10aGlzLm1hdGNoKSxlK3Qrcn0sZS5wcm90b3R5cGUucGFyc2VWYWxpZFN1YlRhZz1mdW5jdGlvbih0LGUscil7cmV0dXJuXCJwcmVcIj09PWU/bmV3KCgwLGEuZ2V0VGFnQ29uc3RydWN0b3IpKGUpKSh0LGUsbyhvKHt9LHIpLHtsYW5ndWFnZTpcIlwiLG1hdGNoOlwiXCJ9KSkuZXhlYyhcIlwiLFwiXFxuXCIpOm5ldygoMCxhLmdldFRhZ0NvbnN0cnVjdG9yKShlKSkodCxlLG8obyh7fSxyKSx7a2VlcFNwYWNlOnRoaXMua2VlcFNwYWNlLG5vV3JhcDp0aGlzLm5vV3JhcH0pKS5leGVjKFwiXCIsXCJcIil9LGUucHJvdG90eXBlLnBhcnNlT25seVN0cmluZz1mdW5jdGlvbih0KXtpZihcIlwiIT09dGhpcy5tYXRjaCYmdCl7dmFyIGU9MTsodC5zdGFydHNXaXRoKFwiYFwiKXx8dC5lbmRzV2l0aChcImBcIikpJiYoZT0yLCh0LnN0YXJ0c1dpdGgoXCJgYFwiKXx8dC5lbmRzV2l0aChcImBgXCIpKSYmKGU9MykpLHRoaXMubWF0Y2g9XCJgXCIucmVwZWF0KGUpfXJldHVybigwLGEudW5lc2NhcGVTdHIpKHQpfSxlLnByb3RvdHlwZS5zbGltPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmtlZXBTcGFjZT90OnQudHJpbSgpfSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXCIpLHZvaWQgMD09PXImJihyPVwiXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KGkuZGVmYXVsdCk7ZS5kZWZhdWx0PWN9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyKXt2b2lkIDA9PT1yJiYocj1cImgxXCIpO3ZhciBuPXQuY2FsbCh0aGlzLGUscil8fHRoaXM7cmV0dXJuIG4ubWF0Y2g9XCIjXCIsbn1yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcXG5cIiksdm9pZCAwPT09ciYmKHI9XCJcXG5cIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocigzKS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIpe3ZvaWQgMD09PXImJihyPVwiaDJcIik7dmFyIG49dC5jYWxsKHRoaXMsZSxyKXx8dGhpcztyZXR1cm4gbi5tYXRjaD1cIiMjXCIsbn1yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcXG5cIiksdm9pZCAwPT09ciYmKHI9XCJcXG5cIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocigzKS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIpe3ZvaWQgMD09PXImJihyPVwiaDNcIik7dmFyIG49dC5jYWxsKHRoaXMsZSxyKXx8dGhpcztyZXR1cm4gbi5tYXRjaD1cIiMjI1wiLG59cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXFxuXCIpLHZvaWQgMD09PXImJihyPVwiXFxuXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KHIoMykuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyKXt2b2lkIDA9PT1yJiYocj1cImg0XCIpO3ZhciBuPXQuY2FsbCh0aGlzLGUscil8fHRoaXM7cmV0dXJuIG4ubWF0Y2g9XCIjIyMjXCIsbn1yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcXG5cIiksdm9pZCAwPT09ciYmKHI9XCJcXG5cIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocigzKS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIpe3ZvaWQgMD09PXImJihyPVwiaDVcIik7dmFyIG49dC5jYWxsKHRoaXMsZSxyKXx8dGhpcztyZXR1cm4gbi5tYXRjaD1cIiMjIyMjXCIsbn1yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcXG5cIiksdm9pZCAwPT09ciYmKHI9XCJcXG5cIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocigzKS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIpe3ZvaWQgMD09PXImJihyPVwiaDZcIik7dmFyIG49dC5jYWxsKHRoaXMsZSxyKXx8dGhpcztyZXR1cm4gbi5tYXRjaD1cIiMjIyMjI1wiLG59cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXFxuXCIpLHZvaWQgMD09PXImJihyPVwiXFxuXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KHIoMykuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3ZvaWQgMD09PXImJihyPVwiaHJcIik7dmFyIG89dC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzO3JldHVybiBvLm1hdGNoPVwiLS0tXCIsb31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmJlZm9yZU1lcmdlU3BhY2U9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sZWFkaW5nU3BhY2UrdGhpcy5tYXRjaH0sZS5wcm90b3R5cGUuYmVmb3JlUmV0dXJuPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoL14oPzpcXG5cXHMqKS8sXCJcXG5cXG5cIikucmVwbGFjZSgvKD86XFxuXFxzKikkLyxcIlxcblxcblwiKSx0fSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXFxuXCIpLHZvaWQgMD09PXImJihyPVwiXFxuXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KHIoNCkuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3JldHVybiB2b2lkIDA9PT1yJiYocj1cImlcIiksdC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShyKDE1KS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7cmV0dXJuIHZvaWQgMD09PXImJihyPVwiaW1nXCIpLHQuY2FsbCh0aGlzLGUscixuKXx8dGhpc31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmJlZm9yZU1lcmdlU3BhY2U9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmF0dHJzLGU9dC5zcmMscj10LmFsdDtyZXR1cm4gcnx8KHI9XCJcIiksZXx8KGU9XCJcIiksXCIhW1wiLmNvbmNhdChyLFwiXShcIikuY29uY2F0KGUsXCIpXCIpfSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXCIpLHZvaWQgMD09PXImJihyPVwiXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KHIoNCkuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3JldHVybiB2b2lkIDA9PT1yJiYocj1cImlucHV0XCIpLHQuY2FsbCh0aGlzLGUscixuKXx8dGhpc31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmJlZm9yZU1lcmdlU3BhY2U9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmF0dHJzLGU9dC50eXBlLHI9dC5jaGVja2VkO3JldHVyblwibGlcIj09PXRoaXMucGFyZW50VGFnJiZcImNoZWNrYm94XCI9PT1lP251bGwhPXI/XCJbeF0gXCI6XCJbIF0gXCI6XCJcIn0sZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlwiKSx2b2lkIDA9PT1yJiYocj1cIlwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShyKDQpLmRlZmF1bHQpO2UuZGVmYXVsdD1vfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKSxvPXRoaXMmJnRoaXMuX19hc3NpZ258fGZ1bmN0aW9uKCl7cmV0dXJuKG89T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLHI9MSxuPWFyZ3VtZW50cy5sZW5ndGg7cjxuO3IrKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbcl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1yKDApLGE9cigxKSxjPXIoNiksdT1yKDEyKSxzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3ZvaWQgMD09PXImJihyPVwibGlcIik7dmFyIG89dC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzO3JldHVybiBvLm1hdGNoPW8ubWF0Y2h8fFwiKlwiLG8uZXh0cmFHYXA9XCJcIixvfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuYmVmb3JlTWVyZ2VTcGFjZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5leHRyYUdhcCt0aGlzLmxlYWRpbmdTcGFjZSt0aGlzLm1hdGNoK1wiIFwiK3R9LGUucHJvdG90eXBlLl9fY2FsY05leHRMZWFkaW5nX189ZnVuY3Rpb24oKXt2YXIgdCxlLHI7cmV0dXJuIDE9PT0obnVsbD09PSh0PXRoaXMubWF0Y2gpfHx2b2lkIDA9PT10P3ZvaWQgMDp0Lmxlbmd0aCk/dS5ET1VCTEU6Mj09PShudWxsPT09KGU9dGhpcy5tYXRjaCl8fHZvaWQgMD09PWU/dm9pZCAwOmUubGVuZ3RoKT91LlRSSVBMRTozPT09KG51bGw9PT0ocj10aGlzLm1hdGNoKXx8dm9pZCAwPT09cj92b2lkIDA6ci5sZW5ndGgpP3UuRE9VQkxFOnUuVFJJUExFK3UuRE9VQkxFfSxlLnByb3RvdHlwZS5wYXJzZVZhbGlkU3ViVGFnPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj0oMCxhLmdldFRhZ0NvbnN0cnVjdG9yKShlKSxpPXRoaXMuX19jYWxjTmV4dExlYWRpbmdfXygpLGM9bmV3IG4odCxlLG8obyh7fSxyKSx7Y2FsY0xlYWRpbmc6ITAsbGVhZGluZ1NwYWNlOnRoaXMubGVhZGluZ1NwYWNlK2ksbGF5ZXI6dGhpcy5sYXllcisxfSkpLmV4ZWMoKTtyZXR1cm5cInBcIj09PWUmJih0aGlzLmV4dHJhR2FwPVwiXFxuXCIpLHRoaXMuaXNGaXJzdFN1YlRhZz9jLnRyaW1MZWZ0KCkucmVwbGFjZSh0aGlzLmxlYWRpbmdTcGFjZStpLFwiXCIpOmN9LGUucHJvdG90eXBlLnBhcnNlT25seVN0cmluZz1mdW5jdGlvbihlLHIsbil7dmFyIGk9ITE7KDAsYy5kZWZhdWx0KShuLnByZXZUYWdOYW1lKSYmKGk9ITApO3ZhciBhPXRoaXMuX19jYWxjTmV4dExlYWRpbmdfXygpLHU9dC5wcm90b3R5cGUucGFyc2VPbmx5U3RyaW5nLmNhbGwodGhpcyxlLHIsbyhvKHt9LG4pLHtjYWxjTGVhZGluZzppLGxlYWRpbmdTcGFjZTp0aGlzLmxlYWRpbmdTcGFjZSthLGxheWVyOnRoaXMubGF5ZXIrMX0pKTtyZXR1cm4gdGhpcy5pc0ZpcnN0U3ViVGFnP3UucmVwbGFjZSh0aGlzLmxlYWRpbmdTcGFjZSthLFwiXCIpOnV9LGUucHJvdG90eXBlLmJlZm9yZVJldHVybj1mdW5jdGlvbihlKXtyZXR1cm4gdC5wcm90b3R5cGUuYmVmb3JlUmV0dXJuLmNhbGwodGhpcyxlKX0sZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlxcblwiKSx2b2lkIDA9PT1yJiYocj1cIlxcblwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShpLmRlZmF1bHQpO2UuZGVmYXVsdD1zfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKSxvPXRoaXMmJnRoaXMuX19hc3NpZ258fGZ1bmN0aW9uKCl7cmV0dXJuKG89T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLHI9MSxuPWFyZ3VtZW50cy5sZW5ndGg7cjxuO3IrKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbcl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1yKDApLGE9cig1KSxjPXIoMSksdT1yKDIpLHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7dm9pZCAwPT09ciYmKHI9XCJvbFwiKTt2YXIgbyxpPXRoaXM7aT10LmNhbGwodGhpcyxlLHIsbil8fHRoaXM7dmFyIGE9cGFyc2VJbnQobnVsbD09PShvPW51bGw9PT1pfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmF0dHJzKXx8dm9pZCAwPT09bz92b2lkIDA6by5zdGFydCwxMCk7cmV0dXJuIGkuY291bnQ9aXNOYU4oYSk/MTphLGl9cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5fX2lzVmFsaWRTdWJUYWdfXz1mdW5jdGlvbih0KXtpZighdClyZXR1cm4hMTt2YXIgZT11LmRlZmF1bHQuZ2V0KCkuYWxpYXNUYWdzLHI9KDAsYy5nZXRUYWdDb25zdHJ1Y3RvcikodCk7cmV0dXJuXCJsaVwiPT09dHx8XCJsaVwiPT0obnVsbD09PWV8fHZvaWQgMD09PWU/dm9pZCAwOmVbdF0pfHxyPT09YS5kZWZhdWx0fSxlLnByb3RvdHlwZS5nZXRWYWxpZFN1YlRhZ05hbWU9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnRoaXMuX19pc1ZhbGlkU3ViVGFnX18odCk/dDpudWxsfSxlLnByb3RvdHlwZS5wYXJzZVZhbGlkU3ViVGFnPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj0oMCxjLmdldFRhZ0NvbnN0cnVjdG9yKShlKTtpZih0aGlzLl9faXNWYWxpZFN1YlRhZ19fKGUpKXt2YXIgaT10aGlzLmNvdW50K1wiLlwiLGE9bmV3IG4odCxlLG8obyh7fSxyKSx7Y2FsY0xlYWRpbmc6ITAsbGVhZGluZ1NwYWNlOnRoaXMubGVhZGluZ1NwYWNlLGxheWVyOnRoaXMubGF5ZXIsbWF0Y2g6aX0pKTtyZXR1cm4gdGhpcy5jb3VudCsrLGEuZXhlYyhcIlwiLFwiXFxuXCIpfXJldHVybiBjb25zb2xlLmVycm9yKFwiU2hvdWxkIG5vdCBoYXZlIHRhZ3MgZXhjZXB0IDxsaT4gaW5zaWRlIG9sLCBjdXJyZW50IHRhZyBpcyBcIitlK1wiLCBjdXJyZW50IHRhZ1N0ciBpc1wiK3QpLFwiXCJ9LGUucHJvdG90eXBlLnBhcnNlT25seVN0cmluZz1mdW5jdGlvbigpe3JldHVyblwiXCJ9LGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcXG5cIiksdm9pZCAwPT09ciYmKHI9XCJcXG5cIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0oaS5kZWZhdWx0KTtlLmRlZmF1bHQ9c30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7cmV0dXJuIHZvaWQgMD09PXImJihyPVwicFwiKSx0LmNhbGwodGhpcyxlLHIsbil8fHRoaXN9cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5iZWZvcmVNZXJnZVNwYWNlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmNhbGNMZWFkaW5nP3RoaXMubGVhZGluZ1NwYWNlK3Q6dH0sZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlxcblwiKSx2b2lkIDA9PT1yJiYocj1cIlxcblwiKSx0aGlzLnByZXZUYWdOYW1lfHwhdGhpcy5wcmV2VGFnU3RyfHx0aGlzLnByZXZUYWdTdHIuZW5kc1dpdGgoXCJcXG5cIil8fChlPVwiXFxuXFxuXCIpLHRoaXMubmV4dFRhZ05hbWV8fCF0aGlzLm5leHRUYWdTdHJ8fHRoaXMubmV4dFRhZ1N0ci5zdGFydHNXaXRoKFwiXFxuXCIpfHwocj1cIlxcblxcblwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShyKDApLmRlZmF1bHQpO2UuZGVmYXVsdD1vfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKSxvPXRoaXMmJnRoaXMuX19hc3NpZ258fGZ1bmN0aW9uKCl7cmV0dXJuKG89T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLHI9MSxuPWFyZ3VtZW50cy5sZW5ndGg7cjxuO3IrKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbcl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1yKDApLGE9cig3KSxjPXIoMSksdT1yKDEyKSxzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3ZvaWQgMD09PXImJihyPVwicHJlXCIpO3ZhciBvPXQuY2FsbCh0aGlzLGUscixuKXx8dGhpcztyZXR1cm4gby5pbmRlbnRTcGFjZT11LkRPVUJMRSt1LkRPVUJMRSxvLmlzSW5kZW50PW8uaW5uZXJIVE1MLmluY2x1ZGVzKFwiYGBgXCIpLG8ubWF0Y2g9by5pc0luZGVudD9cIlwiOlwiYGBgXCIsby5sYW5ndWFnZT1vLmxhbmd1YWdlfHwoMCxjLmdldExhbmd1YWdlKShlKSxvLmtlZXBTcGFjZT0hMCxvfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuYmVmb3JlTWVyZ2VTcGFjZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmlzSW5kZW50fHxcImNvZGVcIj09PXRoaXMucGFyZW50VGFnP1wiXCI6dGhpcy5tYXRjaCt0aGlzLmxhbmd1YWdlK1wiXFxuXCIscj1cIlwiO3JldHVybiB0LmVuZHNXaXRoKFwiXFxuXCIpfHwocj1cIlxcblwiKSxlK3QrKHRoaXMuaXNJbmRlbnR8fFwiY29kZVwiPT09dGhpcy5wYXJlbnRUYWc/XCJcIjpyK3RoaXMubWF0Y2gpfSxlLnByb3RvdHlwZS5maWxsUGVyTGluZT1mdW5jdGlvbih0KXt2YXIgZT1cIlwiO3JldHVybiB0aGlzLmNhbGNMZWFkaW5nJiYoZT10aGlzLmxlYWRpbmdTcGFjZSksdGhpcy5pc0luZGVudD9lK3RoaXMuaW5kZW50U3BhY2UrdDplK3R9LGUucHJvdG90eXBlLmFmdGVyTWVyZ2VTcGFjZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLHI9dC5zcGxpdChcIlxcblwiKTtyZXR1cm4ocj1yLm1hcChmdW5jdGlvbih0KXtyZXR1cm5cIlwiPT09dD9cIlwiOmUuZmlsbFBlckxpbmUodCl9KSkuam9pbihcIlxcblwiKX0sZS5wcm90b3R5cGUucGFyc2VWYWxpZFN1YlRhZz1mdW5jdGlvbih0LGUscil7aWYoXCJjb2RlXCI9PT1lKXJldHVybiBuZXcoKDAsYy5nZXRUYWdDb25zdHJ1Y3RvcikoZSkpKHQsZSxvKG8oe30scikse21hdGNoOlwiXCIsbGFuZ3VhZ2U6dGhpcy5sYW5ndWFnZSxrZWVwU3BhY2U6ITB9KSkuZXhlYyhcIlwiLFwiXCIpO3JldHVybigoMCxjLmlzU2VsZkNsb3NpbmcpKGUpP25ldyBhLl9fRW1wdHlTZWxmQ2xvc2VfXyh0LGUpOm5ldyBhLl9fRW1wdHlfXyh0LGUsbyhvKHt9LHIpLHtrZWVwU3BhY2U6ITB9KSkpLmV4ZWMoKX0sZS5wcm90b3R5cGUucGFyc2VPbmx5U3RyaW5nPWZ1bmN0aW9uKHQpe3JldHVybiB0fSxlLnByb3RvdHlwZS5zbGltPWZ1bmN0aW9uKHQpe3JldHVybiB0fSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXFxuXCIpLHZvaWQgMD09PXImJihyPVwiXFxuXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KGkuZGVmYXVsdCk7ZS5kZWZhdWx0PXN9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9XCJzXCIpLHQuY2FsbCh0aGlzLGUscil8fHRoaXN9cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KHIoMTQpLmRlZmF1bHQpO2UuZGVmYXVsdD1vfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9XCJzcGFuXCIpLHQuY2FsbCh0aGlzLGUscixuKXx8dGhpc31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcIiksdm9pZCAwPT09ciYmKHI9XCJcIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocigwKS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCksbz10aGlzJiZ0aGlzLl9fYXNzaWdufHxmdW5jdGlvbigpe3JldHVybihvPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPTEsbj1hcmd1bWVudHMubGVuZ3RoO3I8bjtyKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9cigwKSxhPXIoMSk7dmFyIGM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7dm9pZCAwPT09ciYmKHI9XCJ0YWJsZVwiKTt2YXIgbz10LmNhbGwodGhpcyxlLHIsbil8fHRoaXM7cmV0dXJuIG8uZXhpc3RfdGhlYWQ9ITEsby5leGlzdF90Ym9keT0hMSxvLmVtcHR5X3Rib2R5PSEwLG8udGFibGVDb2x1bW5Db3VudD1mdW5jdGlvbih0KXtmb3IodmFyIGU9XCJcIixyPTA7cjx0Lmxlbmd0aCYmIWUuZW5kc1dpdGgoXCI8L3RyPlwiKTtyKyspZSs9dFtyXTtyZXR1cm4gTWF0aC5tYXgoZS5zcGxpdChcIjwvdGQ+XCIpLmxlbmd0aC0xLGUuc3BsaXQoXCI8L3RoPlwiKS5sZW5ndGgtMSl9KG8uaW5uZXJIVE1MKSxvfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUucGFyc2VWYWxpZFN1YlRhZz1mdW5jdGlvbih0LGUscil7cmV0dXJuXCJ0aGVhZFwiPT09ZSYmKHRoaXMuZXhpc3RfdGhlYWQ9ITApLFwidGJvZHlcIj09PWUmJih0aGlzLmV4aXN0X3Rib2R5PSEwLHRoaXMuZW1wdHlfdGJvZHk9ITEpLFwidHJcIj09PWUmJih0aGlzLmVtcHR5X3Rib2R5PSExKSxuZXcoKDAsYS5nZXRUYWdDb25zdHJ1Y3RvcikoZSkpKHQsZSxvKG8oe30scikse3RhYmxlQ29sdW1uQ291bnQ6dGhpcy50YWJsZUNvbHVtbkNvdW50LGluVGFibGU6ITB9KSkuZXhlYyhcIlwiLFwiXFxuXCIpfSxlLnByb3RvdHlwZS5wYXJzZU9ubHlTdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIlwifSxlLnByb3RvdHlwZS5iZWZvcmVSZXR1cm49ZnVuY3Rpb24odCl7aWYoIXRoaXMuZXhpc3RfdGhlYWQmJiF0aGlzLmV4aXN0X3Rib2R5JiZ0aGlzLmVtcHR5X3Rib2R5KXJldHVyblwiXCI7aWYoMD09PXRoaXMudGFibGVDb2x1bW5Db3VudClyZXR1cm5cIlwiO2lmKCF0aGlzLmV4aXN0X3Rib2R5KXtmb3IodmFyIGU9KDAsYS5nZXRUYWJsZUFsaWduKSh0aGlzLmlubmVySFRNTCx0aGlzLnRhYmxlQ29sdW1uQ291bnQpLHI9XCJ8XCIsbj0wO248ZS5sZW5ndGg7bisrKXIrPWVbbl07dD10aGlzLmVtcHR5X3Rib2R5P3QrcitcIlxcblwiOnIrXCJcIit0fXJldHVybiB0aGlzLmV4aXN0X3RoZWFkfHwodD1cIlxcblwiK1wifFwiLnJlcGVhdCh0aGlzLnRhYmxlQ29sdW1uQ291bnQrMSkrKHQuc3RhcnRzV2l0aChcIlxcblwiKT9cIlwiOlwiXFxuXCIpK3QpLHR9LGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcXG5cIiksdm9pZCAwPT09ciYmKHI9XCJcXG5cIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0oaS5kZWZhdWx0KTtlLmRlZmF1bHQ9Y30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89cigwKSxpPXIoMSksYT1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9XCJ0Ym9keVwiKSx0LmNhbGwodGhpcyxlLHIsbil8fHRoaXN9cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5iZWZvcmVNZXJnZVNwYWNlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0oMCxpLmdldFRhYmxlQWxpZ24pKHRoaXMuaW5uZXJIVE1MLHRoaXMudGFibGVDb2x1bW5Db3VudCkscj1cInxcIixuPTA7bjxlLmxlbmd0aDtuKyspcis9ZVtuXTtyZXR1cm4gcitcIlxcblwiK3R9LGUucHJvdG90eXBlLnBhcnNlT25seVN0cmluZz1mdW5jdGlvbigpe3JldHVyblwiXCJ9LGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcIiksdm9pZCAwPT09ciYmKHI9XCJcIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0oby5kZWZhdWx0KTtlLmRlZmF1bHQ9YX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7cmV0dXJuIHZvaWQgMD09PXImJihyPVwidGRcIiksdC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUucGFyc2VWYWxpZFN1YlRhZz1mdW5jdGlvbihlLHIsbil7cmV0dXJuXCJ1bFwiPT09cnx8XCJvbFwiPT09cnx8XCJ0YWJsZVwiPT09cnx8XCJwcmVcIj09PXI/ZS5yZXBsYWNlKC8oW1xcblxccl0pL2csXCJcIik6dC5wcm90b3R5cGUucGFyc2VWYWxpZFN1YlRhZy5jYWxsKHRoaXMsZSxyLG4pfSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXCIpLHZvaWQgMD09PXImJihyPVwiXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KHIoMTYpLmRlZmF1bHQpO2UuZGVmYXVsdD1vfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9XCJ0aGVhZFwiKSx0LmNhbGwodGhpcyxlLHIsbil8fHRoaXN9cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXCIpLHZvaWQgMD09PXImJihyPVwiXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KHIoMCkuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPXIoMCksaT1yKDUpLGE9cigxKSxjPXIoMiksdT1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9XCJ0clwiKSx0LmNhbGwodGhpcyxlLHIsbil8fHRoaXN9cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5iZWZvcmVNZXJnZVNwYWNlPWZ1bmN0aW9uKHQpe3JldHVyblwifFwiK3R9LGUucHJvdG90eXBlLnBhcnNlVmFsaWRTdWJUYWc9ZnVuY3Rpb24odCxlLHIpe3ZhciBuPWMuZGVmYXVsdC5nZXQoKS5hbGlhc1RhZ3Msbz0oMCxhLmdldFRhZ0NvbnN0cnVjdG9yKShlKTtyZXR1cm5cInRkXCIhPT1lJiZcInRoXCIhPT1lJiZcInRkXCIhPT0obnVsbD09PW58fHZvaWQgMD09PW4/dm9pZCAwOm5bZV0pJiZcInRoXCIhPT0obnVsbD09PW58fHZvaWQgMD09PW4/dm9pZCAwOm5bZV0pJiZvIT09aS5kZWZhdWx0Pyhjb25zb2xlLmVycm9yKFwiU2hvdWxkIG5vdCBoYXZlIHRhZ3MgZXhjZXB0IDx0ZD4gb3IgPHRoPiBpbnNpZGUgPHRyPiwgY3VycmVudCB0YWcgaXMgXCIuY29uY2F0KGUsXCIgaGF2ZSBiZWVuIGlnbm9yZS5cIikpLFwiXCIpOm5ldyBvKHQsZSxyKS5leGVjKFwiXCIsXCJcIil9LGUucHJvdG90eXBlLnBhcnNlT25seVN0cmluZz1mdW5jdGlvbigpe3JldHVyblwiXCJ9LGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcIiksdm9pZCAwPT09ciYmKHI9XCJcXG5cIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0oby5kZWZhdWx0KTtlLmRlZmF1bHQ9dX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCksbz10aGlzJiZ0aGlzLl9fYXNzaWdufHxmdW5jdGlvbigpe3JldHVybihvPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPTEsbj1hcmd1bWVudHMubGVuZ3RoO3I8bjtyKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9cigwKSxhPXIoNSksYz1yKDEpLHU9cigyKS5kZWZhdWx0LmdldCgpLmFsaWFzVGFncyxzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3JldHVybiB2b2lkIDA9PT1yJiYocj1cInVsXCIpLHQuY2FsbCh0aGlzLGUscixuKXx8dGhpc31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLl9faXNWYWxpZFN1YlRhZ19fPWZ1bmN0aW9uKHQpe2lmKCF0KXJldHVybiExO3ZhciBlPSgwLGMuZ2V0VGFnQ29uc3RydWN0b3IpKHQpO3JldHVyblwibGlcIj09PXR8fFwibGlcIj09KG51bGw9PT11fHx2b2lkIDA9PT11P3ZvaWQgMDp1W3RdKXx8ZT09PWEuZGVmYXVsdH0sZS5wcm90b3R5cGUuZ2V0VmFsaWRTdWJUYWdOYW1lPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0aGlzLl9faXNWYWxpZFN1YlRhZ19fKHQpP3Q6bnVsbH0sZS5wcm90b3R5cGUucGFyc2VWYWxpZFN1YlRhZz1mdW5jdGlvbih0LGUscil7dmFyIG49KDAsYy5nZXRUYWdDb25zdHJ1Y3RvcikoZSk7cmV0dXJuIHRoaXMuX19pc1ZhbGlkU3ViVGFnX18oZSk/bmV3IG4odCxlLG8obyh7fSxyKSx7Y2FsY0xlYWRpbmc6ITAsbGVhZGluZ1NwYWNlOnRoaXMubGVhZGluZ1NwYWNlLGxheWVyOnRoaXMubGF5ZXIsbWF0Y2g6XCIqXCJ9KSkuZXhlYyhcIlwiLFwiXFxuXCIpOihjb25zb2xlLmVycm9yKFwiU2hvdWxkIG5vdCBoYXZlIHRhZ3MgZXhjZXB0IDxsaT4gaW5zaWRlIHVsLCBjdXJyZW50IHRhZyBpcyBcIitlK1wiLCBjdXJyZW50IHRhZ1N0ciBpc1wiK3QpLFwiXCIpfSxlLnByb3RvdHlwZS5wYXJzZU9ubHlTdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIlwifSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXFxuXCIpLHZvaWQgMD09PXImJihyPVwiXFxuXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KGkuZGVmYXVsdCk7ZS5kZWZhdWx0PXN9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1yKDEpLG89cigyKSxpPXIoOSk7ZS5kZWZhdWx0PWZ1bmN0aW9uKHQsZSxyKXt2b2lkIDA9PT1yJiYocj0hMSksby5kZWZhdWx0LnJlc2V0KCksby5kZWZhdWx0LnNldChlLHIpLHQ9KHQ9KHQ9KDAsbi5jbGVhckNvbW1lbnQpKHQpKS50cmltKCkpLnJlcGxhY2UoLyhcXHJcXG4pL2csXCJcIikucmVwbGFjZSgvJm5ic3A7L2csXCIgXCIpO2Zvcih2YXIgYT0oMCxuLmdlbmVyYXRlR2V0TmV4dFZhbGlkVGFnKSh0KSxjPVwiXCIsdT1udWxsLHM9YSgpLGw9c1swXSxwPXNbMV07XCJcIiE9PXA7KXtpZihudWxsIT1sKXt2YXIgZj1uZXcoKDAsbi5nZXRUYWdDb25zdHJ1Y3RvcikobCkpKHAsbCx7cGFyZW50VGFnOm51bGwscHJldlRhZ05hbWU6dSxwcmV2VGFnU3RyOmN9KS5leGVjKCksaD0oMCxuLmlzSW5kZXBlbmRlbnRUYWcpKHUpOyEoMCxuLmlzSW5kZXBlbmRlbnRUYWcpKGwpfHxofHxjLmVuZHNXaXRoKFwiXFxuXCIpP2MrPWY6Yys9XCJcXG5cIitmfWVsc2UgYz0oYys9bmV3IGkuZGVmYXVsdChwLGwpLmV4ZWMoKSkucmVwbGFjZSgvKD86XFxuXFxzKikkLyxcIlxcblwiKTt1PWw7dmFyIGQ9YSgpO2w9ZFswXSxwPWRbMV19cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiB0PSh0PSh0PXQucmVwbGFjZSgvXlxccysvLFwiXCIpKS5yZXBsYWNlKC9cXHMrJC8sXCJcIikpLnJlcGxhY2UoL1xcdTI2MDgvZyxcIiBcIil9KCgwLG4udW5lc2NhcGVTdHIpKGMpKX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLnVuZXNjYXBlU3RyPWUuZXh0cmFFc2NhcGU9dm9pZCAwO3ZhciBuPXt9LG89e1wiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImIzM5O1wiLFwiYFwiOlwiJiN4NjA7XCIsXCJcXHUyMDFjXCI6XCImbGRxdW87XCIsXCJcXHUyMDFkXCI6XCImcmRxdW87XCJ9O2Zvcih2YXIgaSBpbiBvKW5bb1tpXV09aTt2YXIgYT0vJig/OmFtcHxsdHxndHxxdW90fCMzOXwjeDYwfGxkcXVvfHJkcXVvKTsvZyxjPVJlZ0V4cChhLnNvdXJjZSksdT1bWy9cXFxcL2csXCJcXFxcXFxcXFwiXSxbL1xcKi9nLFwiXFxcXCpcIl0sWy9eLS9nLFwiXFxcXC1cIl0sWy9eXFwrIC9nLFwiXFxcXCsgXCJdLFsvXig9KykvZyxcIlxcXFwkMVwiXSxbL14oI3sxLDZ9KSAvZyxcIlxcXFwkMSBcIl0sWy9gL2csXCJcXFxcYFwiXSxbL15+fn4vZyxcIlxcXFx+fn5cIl0sWy9cXFsvZyxcIlxcXFxbXCJdLFsvXFxdL2csXCJcXFxcXVwiXSxbL14+L2csXCJcXFxcPlwiXSxbL18vZyxcIlxcXFxfXCJdLFsvXihcXGQrKVxcLiAvZyxcIiQxXFxcXC4gXCJdXTtlLnVuZXNjYXBlU3RyPWZ1bmN0aW9uKHQpe3JldHVybiB0PXQmJmMudGVzdCh0KT90LnJlcGxhY2UoYSxmdW5jdGlvbih0KXtyZXR1cm4gblt0XX0pOnR9LGUuZXh0cmFFc2NhcGU9ZnVuY3Rpb24odCl7cmV0dXJuIHUucmVkdWNlKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQucmVwbGFjZShlWzBdLGVbMV0pfSx0KX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1yKDExKTtmdW5jdGlvbiBvKHQsZSl7Zm9yKHZhciByPVwiXCI7ZTx0Lmxlbmd0aCYmL1thLXpBLVowLTkhLV0vLnRlc3QodFtlXSk7KXIrPXRbZSsrXTtyZXR1cm4gci50b0xvd2VyQ2FzZSgpfWUuZGVmYXVsdD1mdW5jdGlvbih0KXt2YXIgZT0wO3JldHVybiBmdW5jdGlvbigpe3ZhciByPVwiXCIsaT1udWxsLGE9MCxjPW51bGwsdT0hMTtpZihlPj10Lmxlbmd0aClyZXR1cm5baSxyXTtmb3IodmFyIHM9ZTtzPHQubGVuZ3RoO3MrKyl7aWYoXCI8XCI9PT10W3NdJiZcIi9cIiE9PXRbcysxXSl7aWYoXCJcIiE9PXImJm51bGw9PWkmJiF1KXJldHVybiBlPXMsW2kscl07dmFyIGw9byh0LHMrMSk7bnVsbD09aSYmKGk9bCksaT09PWwmJmErKywoMCxuLmRlZmF1bHQpKGkpJiYoMD09PS0tYSYmKHU9ITApLGE8MCYmY29uc29sZS53YXJuKFwiVGFnIFwiLmNvbmNhdChpLFwiIGlzIGFibm9ybWFsXCIpKSl9ZWxzZSBpZihcIjxcIj09PXRbc10mJlwiL1wiPT09dFtzKzFdKXtpZihudWxsPT1pKXtjb25zb2xlLndhcm4oXCJUYWcgaXMgbm90IGludGVncml0eSwgY3VycmVudCB0YWdTdHIgaXMgXCIuY29uY2F0KHQuc2xpY2UoZSkpKTtmb3IodmFyIHA9cztwPHQubGVuZ3RoJiZcIj5cIiE9PXRbcF07KXArKztzPXA7Y29udGludWV9aT09PShjPW8odCxzKzIpKSYmYS0tLGE8PTAmJih1PSEwKX1pZihyKz10W3NdLFwiPlwiPT09dFtzXSYmdSlyZXR1cm4gZT1zKzEsW2kscl07cz09PXQubGVuZ3RoLTEmJmkhPT1jJiYobnVsbCE9YyYmbnVsbCE9aSYmKHI9ci5yZXBsYWNlKFwiPFwiLmNvbmNhdChpLFwiPlwiKSxcIlwiKS5yZXBsYWNlKFwiPC9cIi5jb25jYXQoYyxcIj5cIiksXCJcIikpLGk9bnVsbCl9cmV0dXJuIGU9dC5sZW5ndGgsW2kscl19fX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPXIoMiksbz1yKDExKSxpPXIoNDkpO2UuZGVmYXVsdD1mdW5jdGlvbiB0KGUpe3ZhciBhLGM9bi5kZWZhdWx0LmdldCgpLHU9Yy5za2lwVGFncyxzPWMuZW1wdHlUYWdzLGw9Yy5pZ25vcmVUYWdzLHA9Yy5hbGlhc1RhZ3MsZj1jLnJlbmRlckN1c3RvbVRhZ3MsaD0oMCxvLmRlZmF1bHQpKGUpO2lmKG51bGw9PT11fHx2b2lkIDA9PT11P3ZvaWQgMDp1LmluY2x1ZGVzKGUpKXt2YXIgZD1yKDgpO3JldHVybiBoP2QuX19Ta2lwU2VsZkNsb3NlX186ZC5fX1NraXBfX31pZihudWxsPT09c3x8dm9pZCAwPT09cz92b2lkIDA6cy5pbmNsdWRlcyhlKSl7dmFyIF89cig3KTtyZXR1cm4gaD9fLl9fRW1wdHlTZWxmQ2xvc2VfXzpfLl9fRW1wdHlfX31pZihudWxsPT09bHx8dm9pZCAwPT09bD92b2lkIDA6bC5pbmNsdWRlcyhlKSlyZXR1cm4gcig1KS5kZWZhdWx0O2lmKG51bGwhPShudWxsPT09cHx8dm9pZCAwPT09cD92b2lkIDA6cFtlXSkpcmV0dXJuIHQocFtlXSk7dmFyIHk9ZS50b0xvd2VyQ2FzZSgpO2lmKCEwIT09ZiYmISgwLGkuZGVmYXVsdCkoeSkpe2lmKCExPT09Znx8XCJTS0lQXCI9PT1mKXJldHVybiBkPXIoOCksaD9kLl9fU2tpcFNlbGZDbG9zZV9fOmQuX19Ta2lwX187aWYoXCJFTVBUWVwiPT09ZilyZXR1cm4gXz1yKDcpLGg/Xy5fX0VtcHR5U2VsZkNsb3NlX186Xy5fX0VtcHR5X187aWYoXCJJR05PUkVcIj09PWYpcmV0dXJuIHIoNSkuZGVmYXVsdH10cnl7YT1yKDUwKShcIi4vXCIuY29uY2F0KGUpKS5kZWZhdWx0fWNhdGNoKHYpe2E9aD9yKDEwKS5fX05vTWF0Y2hTZWxmQ2xvc2VfXzpyKDEwKS5fX05vTWF0Y2hfX31yZXR1cm4gYX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1bXCIhZG9jdHlwZVwiLFwiYVwiLFwiYWJiclwiLFwiYWNyb255bVwiLFwiYWRkcmVzc1wiLFwiYXBwbGV0XCIsXCJhcmVhXCIsXCJhcnRpY2xlXCIsXCJhc2lkZVwiLFwiYXVkaW9cIixcImJcIixcImJhc2VcIixcImJhc2Vmb250XCIsXCJiZGlcIixcImJkb1wiLFwiYmdzb3VuZFwiLFwiYmlnXCIsXCJibGlua1wiLFwiYmxvY2txdW90ZVwiLFwiYm9keVwiLFwiYnJcIixcImJ1dHRvblwiLFwiY2FudmFzXCIsXCJjYXB0aW9uXCIsXCJjZW50ZXJcIixcImNpcmNsZVwiLFwiY2l0ZVwiLFwiY2xpcFBhdGhcIixcImNvZGVcIixcImNvbFwiLFwiY29sZ3JvdXBcIixcImNvbW1hbmRcIixcImNvbnRlbnRcIixcImRhdGFcIixcImRhdGFsaXN0XCIsXCJkZFwiLFwiZGVmc1wiLFwiZGVsXCIsXCJkZXRhaWxzXCIsXCJkZm5cIixcImRpYWxvZ1wiLFwiZGlyXCIsXCJkaXZcIixcImRsXCIsXCJkdFwiLFwiZWxlbWVudFwiLFwiZWxsaXBzZVwiLFwiZW1cIixcImVtYmVkXCIsXCJmaWVsZHNldFwiLFwiZmlnY2FwdGlvblwiLFwiZmlndXJlXCIsXCJmb250XCIsXCJmb290ZXJcIixcImZvcmVpZ25PYmplY3RcIixcImZvcm1cIixcImZyYW1lXCIsXCJmcmFtZXNldFwiLFwiZ1wiLFwiaDFcIixcImgyXCIsXCJoM1wiLFwiaDRcIixcImg1XCIsXCJoNlwiLFwiaGVhZFwiLFwiaGVhZGVyXCIsXCJoZ3JvdXBcIixcImhyXCIsXCJodG1sXCIsXCJpXCIsXCJpZnJhbWVcIixcImltYWdlXCIsXCJpbWdcIixcImlucHV0XCIsXCJpbnNcIixcImlzaW5kZXhcIixcImtiZFwiLFwia2V5Z2VuXCIsXCJsYWJlbFwiLFwibGVnZW5kXCIsXCJsaVwiLFwibGluZVwiLFwibGluZWFyR3JhZGllbnRcIixcImxpbmtcIixcImxpc3RpbmdcIixcIm1haW5cIixcIm1hcFwiLFwibWFya1wiLFwibWFycXVlZVwiLFwibWFza1wiLFwibWF0aFwiLFwibWVudVwiLFwibWVudWl0ZW1cIixcIm1ldGFcIixcIm1ldGVyXCIsXCJtdWx0aWNvbFwiLFwibmF2XCIsXCJuZXh0aWRcIixcIm5vYnJcIixcIm5vZW1iZWRcIixcIm5vZnJhbWVzXCIsXCJub3NjcmlwdFwiLFwib2JqZWN0XCIsXCJvbFwiLFwib3B0Z3JvdXBcIixcIm9wdGlvblwiLFwib3V0cHV0XCIsXCJwXCIsXCJwYXJhbVwiLFwicGF0aFwiLFwicGF0dGVyblwiLFwicGljdHVyZVwiLFwicGxhaW50ZXh0XCIsXCJwb2x5Z29uXCIsXCJwb2x5bGluZVwiLFwicHJlXCIsXCJwcm9ncmVzc1wiLFwicVwiLFwicmFkaWFsR3JhZGllbnRcIixcInJiXCIsXCJyYmNcIixcInJlY3RcIixcInJwXCIsXCJydFwiLFwicnRjXCIsXCJydWJ5XCIsXCJzXCIsXCJzYW1wXCIsXCJzY3JpcHRcIixcInNlY3Rpb25cIixcInNlbGVjdFwiLFwic2hhZG93XCIsXCJzbG90XCIsXCJzbWFsbFwiLFwic291cmNlXCIsXCJzcGFjZXJcIixcInNwYW5cIixcInN0b3BcIixcInN0cmlrZVwiLFwic3Ryb25nXCIsXCJzdHlsZVwiLFwic3ViXCIsXCJzdW1tYXJ5XCIsXCJzdXBcIixcInN2Z1wiLFwidGFibGVcIixcInRib2R5XCIsXCJ0ZFwiLFwidGVtcGxhdGVcIixcInRleHRcIixcInRleHRhcmVhXCIsXCJ0Zm9vdFwiLFwidGhcIixcInRoZWFkXCIsXCJ0aW1lXCIsXCJ0aXRsZVwiLFwidHJcIixcInRyYWNrXCIsXCJ0c3BhblwiLFwidHRcIixcInVcIixcInVsXCIsXCJ2YXJcIixcInZpZGVvXCIsXCJ3YnJcIixcInhtcFwiXTtlLmRlZmF1bHQ9ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiB0JiZuLmluY2x1ZGVzKHQudG9Mb3dlckNhc2UoKSl9fSxmdW5jdGlvbih0LGUscil7dmFyIG49e1wiLi9fX0hlYWRpbmdfX1wiOjMsXCIuL19fSGVhZGluZ19fLnRzXCI6MyxcIi4vX19lbXB0eV9fXCI6NyxcIi4vX19lbXB0eV9fLnRzXCI6NyxcIi4vX19pZ25vcmVfX1wiOjUsXCIuL19faWdub3JlX18udHNcIjo1LFwiLi9fX25vbWF0Y2hfX1wiOjEwLFwiLi9fX25vbWF0Y2hfXy50c1wiOjEwLFwiLi9fX3Jhd1N0cmluZ19fXCI6OSxcIi4vX19yYXdTdHJpbmdfXy50c1wiOjksXCIuL19fc2tpcF9fXCI6OCxcIi4vX19za2lwX18udHNcIjo4LFwiLi9hXCI6MTgsXCIuL2EudHNcIjoxOCxcIi4vYlwiOjE5LFwiLi9iLnRzXCI6MTksXCIuL2Jsb2NrcXVvdGVcIjoyMCxcIi4vYmxvY2txdW90ZS50c1wiOjIwLFwiLi9iclwiOjIxLFwiLi9ici50c1wiOjIxLFwiLi9jb2RlXCI6MjIsXCIuL2NvZGUudHNcIjoyMixcIi4vZGVsXCI6MTQsXCIuL2RlbC50c1wiOjE0LFwiLi9lbVwiOjE1LFwiLi9lbS50c1wiOjE1LFwiLi9oMVwiOjIzLFwiLi9oMS50c1wiOjIzLFwiLi9oMlwiOjI0LFwiLi9oMi50c1wiOjI0LFwiLi9oM1wiOjI1LFwiLi9oMy50c1wiOjI1LFwiLi9oNFwiOjI2LFwiLi9oNC50c1wiOjI2LFwiLi9oNVwiOjI3LFwiLi9oNS50c1wiOjI3LFwiLi9oNlwiOjI4LFwiLi9oNi50c1wiOjI4LFwiLi9oclwiOjI5LFwiLi9oci50c1wiOjI5LFwiLi9pXCI6MzAsXCIuL2kudHNcIjozMCxcIi4vaW1nXCI6MzEsXCIuL2ltZy50c1wiOjMxLFwiLi9pbnB1dFwiOjMyLFwiLi9pbnB1dC50c1wiOjMyLFwiLi9saVwiOjMzLFwiLi9saS50c1wiOjMzLFwiLi9vbFwiOjM0LFwiLi9vbC50c1wiOjM0LFwiLi9wXCI6MzUsXCIuL3AudHNcIjozNSxcIi4vcHJlXCI6MzYsXCIuL3ByZS50c1wiOjM2LFwiLi9zXCI6MzcsXCIuL3MudHNcIjozNyxcIi4vc3BhblwiOjM4LFwiLi9zcGFuLnRzXCI6MzgsXCIuL3N0cm9uZ1wiOjEzLFwiLi9zdHJvbmcudHNcIjoxMyxcIi4vdGFibGVcIjozOSxcIi4vdGFibGUudHNcIjozOSxcIi4vdGJvZHlcIjo0MCxcIi4vdGJvZHkudHNcIjo0MCxcIi4vdGRcIjo0MSxcIi4vdGQudHNcIjo0MSxcIi4vdGhcIjoxNixcIi4vdGgudHNcIjoxNixcIi4vdGhlYWRcIjo0MixcIi4vdGhlYWQudHNcIjo0MixcIi4vdHJcIjo0MyxcIi4vdHIudHNcIjo0MyxcIi4vdWxcIjo0NCxcIi4vdWwudHNcIjo0NH07ZnVuY3Rpb24gbyh0KXt2YXIgZT1pKHQpO3JldHVybiByKGUpfWZ1bmN0aW9uIGkodCl7aWYoIXIubyhuLHQpKXt2YXIgZT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK3QrXCInXCIpO3Rocm93IGUuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixlfXJldHVybiBuW3RdfW8ua2V5cz1mdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyhuKX0sby5yZXNvbHZlPWksdC5leHBvcnRzPW8sby5pZD01MH0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuZGVmYXVsdD1mdW5jdGlvbih0KXtmb3IodmFyIGU9e30scj0hMSxuPVwiXCIsbz1cIlwiLGk9bnVsbCxhPTA7YTw9dC5sZW5ndGg7YSsrKXtpZihhPT09dC5sZW5ndGh8fC9cXHMvLnRlc3QodFthXSkpe2lmKGE9PT10Lmxlbmd0aHx8IXIpe3ZhciBjPW4udHJpbSgpO1wiL1wiPT09Y1tjLmxlbmd0aC0xXSYmKGM9Yy5zbGljZSgwLGMubGVuZ3RoLTEpKSxjJiYoZVtjXT1vLnRyaW0oKSksbj1cIlwiLG89XCJcIn19ZWxzZXtpZigvWydcIl0vLnRlc3QodFthXSkmJighaXx8dFthXT09PWkpKXsocj0hcikmJihpPXRbYV0pO2NvbnRpbnVlfWlmKFwiPVwiPT09dFthXSYmIXIpY29udGludWV9aWYoYT09PXQubGVuZ3RoKWJyZWFrO3I/bys9dFthXTpuKz10W2FdfXJldHVybiBlfX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPVwiamF2YXNjcmlwdFwiO2UuZGVmYXVsdD1mdW5jdGlvbih0KXt2YXIgZT10Lm1hdGNoKC88Lio/Y2xhc3M9XCIuKj9sYW5ndWFnZS0oW15cXHNcIl0qKT8uKlwiLio+Lyk7cmV0dXJuIGU/ZVsxXXx8XCJcIjp0Lm1hdGNoKC88c3Bhbi4qP2hsanMtKGNvbW1lbnR8a2V5d29yZHxudW1iZXJ8c3RyaW5nfGxpdGVyYWx8YnVpbHRfaW58ZnVuY3Rpb258dGl0bGV8YnVsbGV0KS4qPzxcXC9zcGFuPi8pP246XCJcIn19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmRlZmF1bHQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZSgvPCEtLSg/OltcXHNcXFNdKj8pLS0+L2csXCJcIil9fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5kZWZhdWx0PWZ1bmN0aW9uKHQsZSl7dmFyIHI9e19kZWZhdWx0XzpcIi0tLXxcIixjZW50ZXI6XCI6LS0tOnxcIixsZWZ0OlwiOi0tLXxcIixyaWdodDpcIi0tLTp8XCIsc3RhcnQ6XCI6LS0tfFwiLGVuZDpcIi0tLTp8XCJ9LG49QXJyYXkoZSkuZmlsbChyLl9kZWZhdWx0Xyksbz10Lm1hdGNoKC88KHRkfHRoKSguKj8pPi9nKTtyZXR1cm4gbz9uPShuPW8uc2xpY2UoMCxlKSkubWFwKGZ1bmN0aW9uKHQpe3ZhciBlPXQubWF0Y2goL2FsaWduXFxzKj1cXHMqWydcIl1cXHMqKGNlbnRlcnxsZWZ0fHJpZ2h0fHN0YXJ0fGVuZCkvKSxuPXQubWF0Y2goL3RleHQtYWxpZ25cXHMqOlxccyooY2VudGVyfGxlZnR8cmlnaHR8c3RhcnR8ZW5kKS8pO3JldHVybiBlfHxuP2UmJiFuP3JbZVsxXV18fHIuX2RlZmF1bHRfOm4/cltuWzFdXXx8ci5fZGVmYXVsdF86dm9pZCAwOnIuX2RlZmF1bHRffSk6bn19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmRlZmF1bHQ9W1widGhcIixcInRkXCJdfV0pLmRlZmF1bHR9KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0ICogYXMgRE9NUHVyaWZ5IGZyb20gXCJkb21wdXJpZnlcIjtcbmltcG9ydCBodG1sMm1kIGZyb20gXCJodG1sLXRvLW1kXCI7XG5pbXBvcnQgQ3Jvc3NJQyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3Jlcy9jcm9zcy5zdmdcIjtcblxubGV0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbmxldCBicm93c2VyTmFtZSA9IHVhLmluZGV4T2YoXCJDaHJvbWVcIikgPiAtMSA/IFwiQ2hyb21lXCIgOiBcIkZpcmVmb3hcIjtcbmxldCBDT1JFID0gYnJvd3Nlck5hbWUgPT09IFwiQ2hyb21lXCIgPyBjaHJvbWUgOiBicm93c2VyO1xuXG5jb25zdCByYW5kb21OdW1iZXJCZXR3ZWVuID0gKG1pbiwgbWF4KSA9PiB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuY29uc3Qgb25BbmltYXRpb25CdXR0b25DbGljayA9IChjb250YWluZXIsIHNwYXJrbGVzQ291bnQpID0+IHtcbiAgLy8gTGV0dGVyIGFuaW1hdGlvblxuICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnN1bW1hcml6ZV9fYW5pbWF0ZWQtbGV0dGVyJykuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICBlbC5hbmltYXRlKFtcbiAgICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwcHgpJyB9LFxuICAgICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xNnB4KScgfSxcbiAgICBdLCB7XG4gICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgZGVsYXk6IGkgKiA1MCxcbiAgICAgIGZpbGw6ICdmb3J3YXJkcydcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gU3BhcmtsZSBhbmltYXRpb25cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGFya2xlc0NvdW50OyBpKyspIHtcbiAgICBjb25zdCBzcGFya2xlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYC5zcGFya2xlLSR7aX1gKTtcbiAgICBzcGFya2xlLmFuaW1hdGUoW1xuICAgICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMHB4LCAwcHgpJywgb3BhY2l0eTogMCB9LFxuICAgICAgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtyYW5kb21OdW1iZXJCZXR3ZWVuKC0xMDAsIDEwMCl9cHgsICR7cmFuZG9tTnVtYmVyQmV0d2VlbigtMTAwLCAxMDApfXB4KWAsIG9wYWNpdHk6IDEgfSxcbiAgICBdLCB7XG4gICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxuICAgICAgZmlsbDogJ2ZvcndhcmRzJ1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIGZhZGUtb3V0IGFuaW1hdGlvbiBhZnRlciB0aGUgcHJldmlvdXMgYW5pbWF0aW9uXG4gICAgc3BhcmtsZS5hbmltYXRlKFtcbiAgICAgIHsgb3BhY2l0eTogMSB9LFxuICAgICAgeyBvcGFjaXR5OiAwIH1cbiAgICBdLCB7XG4gICAgICBkZWxheTogNTAwLCAvLyBEZWxheSB0aGUgc3RhcnQgb2YgdGhlIGZhZGUtb3V0IGFuaW1hdGlvbiBieSB0aGUgZHVyYXRpb24gb2YgdGhlIHByZXZpb3VzIGFuaW1hdGlvblxuICAgICAgZHVyYXRpb246IDUwMCwgLy8gU2V0IHRoZSBkdXJhdGlvbiBmb3IgdGhlIGZhZGUtb3V0IGFuaW1hdGlvblxuICAgICAgZWFzaW5nOiAnZWFzZS1pbicsXG4gICAgICBmaWxsOiAnZm9yd2FyZHMnXG4gICAgfSk7XG4gIH1cblxuICAvLyBCdXR0b24gc2NhbGluZyBhbmltYXRpb25cbiAgY29uc3QgYnV0dG9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNzdW1tYXJpemVfX2FuaW1hdGlvbi1idXR0b24nKTtcbiAgYnV0dG9uLmFuaW1hdGUoW1xuICAgIHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0sXG4gICAgeyB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyB9LFxuICAgIHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH1cbiAgXSwge1xuICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgZmlsbDogJ2ZvcndhcmRzJ1xuICB9KTtcbn07XG5cbi8vIENoZWNrIGdpdmVuIGl0ZW0gYWdhaW5zdCBibGFja2xpc3QsIHJldHVybiBudWxsIGlmIGluIGJsYWNrbGlzdFxuY29uc3QgYmxhY2tsaXN0ID0gW1wiY29tbWVudFwiXTtcbmZ1bmN0aW9uIGNoZWNrQWdhaW5zdEJsYWNrbGlzdChlbGVtLCBsZXZlbCkge1xuICBpZiAoZWxlbSAmJiBlbGVtICE9IG51bGwpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZSxcbiAgICAgIGlkID0gZWxlbS5pZDtcblxuICAgIGNvbnN0IGlzQmxhY2tMaXN0ZWQgPSBibGFja2xpc3RcbiAgICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICh0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIGNsYXNzTmFtZS5pbmRleE9mKGl0ZW0pID49IDApIHx8XG4gICAgICAgICAgKHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIiAmJiBpZC5pbmRleE9mKGl0ZW0pID49IDApXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbSlbMF07XG5cbiAgICBpZiAoaXNCbGFja0xpc3RlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChsZXZlbCA+IDAgJiYgcGFyZW50ICYmICFwYXJlbnQuaXNTYW1lTm9kZShkb2N1bWVudC5ib2R5KSkge1xuICAgICAgcmV0dXJuIGNoZWNrQWdhaW5zdEJsYWNrbGlzdChwYXJlbnQsIC0tbGV2ZWwpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtO1xufVxuXG5sZXQgY29udGVudFNlbGVjdG9yO1xuZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICBsZXQgc2VsZWN0ZWRDb250YWluZXI7XG5cbiAgaWYgKGNvbnRlbnRTZWxlY3RvciAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRlbnRTZWxlY3RvcikpIHtcbiAgICBzZWxlY3RlZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGVudFNlbGVjdG9yKTtcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW25hbWU9J2FydGljbGVCb2R5J1wiKSkge1xuICAgIHNlbGVjdGVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWxlY3RlZENvbnRhaW5lci5pbm5lckhUTUwgPSBET01QdXJpZnkuc2FuaXRpemUoXG4gICAgICBkb2N1bWVudC5oZWFkXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPSdhcnRpY2xlQm9keSdcIilcbiAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIilcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG51bVdvcmRzT25QYWdlID0gZG9jdW1lbnQuYm9keS5pbm5lclRleHQubWF0Y2goL1xcUysvZykubGVuZ3RoO1xuICAgIGxldCBwcyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbChcInBcIik7XG5cbiAgICAvLyBGaW5kIHRoZSBwYXJhZ3JhcGhzIHdpdGggdGhlIG1vc3Qgd29yZHMgaW4gaXRcbiAgICBsZXQgcFdpdGhNb3N0V29yZHMgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgaGlnaGVzdFdvcmRDb3VudCA9IDA7XG5cbiAgICBpZiAocHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBwcyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgICB9XG5cbiAgICBwcy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGNoZWNrQWdhaW5zdEJsYWNrbGlzdChwLCAzKSAmJiAvLyBNYWtlIHN1cmUgaXQncyBub3QgaW4gb3VyIGJsYWNrbGlzdFxuICAgICAgICBwLm9mZnNldEhlaWdodCAhPT0gMFxuICAgICAgKSB7XG4gICAgICAgIC8vICBNYWtlIHN1cmUgaXQncyB2aXNpYmxlIG9uIHRoZSByZWd1bGFyIHBhZ2VcbiAgICAgICAgY29uc3QgbXlJbm5lclRleHQgPSBwLmlubmVyVGV4dC5tYXRjaCgvXFxTKy9nKTtcbiAgICAgICAgaWYgKG15SW5uZXJUZXh0KSB7XG4gICAgICAgICAgY29uc3Qgd29yZENvdW50ID0gbXlJbm5lclRleHQubGVuZ3RoO1xuICAgICAgICAgIGlmICh3b3JkQ291bnQgPiBoaWdoZXN0V29yZENvdW50KSB7XG4gICAgICAgICAgICBoaWdoZXN0V29yZENvdW50ID0gd29yZENvdW50O1xuICAgICAgICAgICAgcFdpdGhNb3N0V29yZHMgPSBwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgZWxlbWVudHMgaW4gSlIgdGhhdCB3ZXJlIGhpZGRlbiBvbiB0aGUgb3JpZ2luYWwgcGFnZVxuICAgICAgaWYgKHAub2Zmc2V0SGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIHAuZGF0YXNldC5zaW1wbGVEZWxldGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gS2VlcCBzZWxlY3RpbmcgbW9yZSBnZW5lcmFsbHkgdW50aWwgb3ZlciAyLzV0aCBvZiB0aGUgd29yZHMgb24gdGhlIHBhZ2UgaGF2ZSBiZWVuIHNlbGVjdGVkXG4gICAgc2VsZWN0ZWRDb250YWluZXIgPSBwV2l0aE1vc3RXb3JkcztcbiAgICBsZXQgd29yZENvdW50U2VsZWN0ZWQgPSBoaWdoZXN0V29yZENvdW50O1xuXG4gICAgd2hpbGUgKFxuICAgICAgd29yZENvdW50U2VsZWN0ZWQgLyBudW1Xb3Jkc09uUGFnZSA8IDAuNCAmJlxuICAgICAgc2VsZWN0ZWRDb250YWluZXIgIT09IGRvY3VtZW50LmJvZHkgJiZcbiAgICAgIHNlbGVjdGVkQ29udGFpbmVyLnBhcmVudEVsZW1lbnQuaW5uZXJUZXh0XG4gICAgKSB7XG4gICAgICBzZWxlY3RlZENvbnRhaW5lciA9IHNlbGVjdGVkQ29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XG4gICAgICB3b3JkQ291bnRTZWxlY3RlZCA9IHNlbGVjdGVkQ29udGFpbmVyLmlubmVyVGV4dC5tYXRjaCgvXFxTKy9nKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIGEgc2luZ2xlIHAgdGFnIGlzIG5vdCBzZWxlY3RlZFxuICAgIGlmIChzZWxlY3RlZENvbnRhaW5lci50YWdOYW1lID09PSBcIlBcIikge1xuICAgICAgc2VsZWN0ZWRDb250YWluZXIgPSBzZWxlY3RlZENvbnRhaW5lci5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWxlY3RlZENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGVudE9mQXJ0aWNsZSgpIHtcbiAgbGV0IHBhZ2VTZWxlY3RlZENvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICBsZXQgcGFnZUNsb25lID0gcGFnZVNlbGVjdGVkQ29udGFpbmVyLmNsb25lTm9kZSh0cnVlKTtcblxuICBjb25zdCBwYXR0ZXJuMSA9IC88YVxcYltePl0qPiguKj8pPFxcL2E+L2dpO1xuICBwYWdlQ2xvbmUuaW5uZXJIVE1MID0gRE9NUHVyaWZ5LnNhbml0aXplKFxuICAgIHBhZ2VDbG9uZS5pbm5lckhUTUwucmVwbGFjZShwYXR0ZXJuMSwgXCJcIilcbiAgKTtcbiAgY29uc3QgcGF0dGVybjIgPSBuZXcgUmVnRXhwKFwiPGJyLz8+WyBcXHJcXG5zXSo8YnIvPz5cIiwgXCJnXCIpO1xuICBwYWdlQ2xvbmUuaW5uZXJIVE1MID0gRE9NUHVyaWZ5LnNhbml0aXplKFxuICAgIHBhZ2VDbG9uZS5pbm5lckhUTUwucmVwbGFjZShwYXR0ZXJuMiwgXCI8L3A+PHA+XCIpXG4gICk7XG5cbiAgbGV0IGNvbnRlbnQgPSBET01QdXJpZnkuc2FuaXRpemUocGFnZUNsb25lLmlubmVySFRNTCk7XG4gIGNvbnRlbnQgPSBodG1sMm1kKGNvbnRlbnQpO1xuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzaGVldChkb2MsIGxpbmssIGNsYXNzTikge1xuICBjb25zdCBwYXRoID0gQ09SRS5ydW50aW1lLmdldFVSTChsaW5rKSxcbiAgICBzdHlsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuICBzdHlsZUxpbmsuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgc3R5bGVMaW5rLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2Nzc1wiKTtcbiAgc3R5bGVMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcGF0aCk7XG5cbiAgaWYgKGNsYXNzTikgc3R5bGVMaW5rLmNsYXNzTmFtZSA9IGNsYXNzTjtcblxuICBkb2MuYXBwZW5kQ2hpbGQoc3R5bGVMaW5rKTtcblxuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgYWxsOiBpbml0aWFsO1xuICAgIH1cbiAgICAuc3VtbWFyaXplLWdwdC1jb250YWluZXIgKiB7XG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICBgO1xuICBkb2MuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5mdW5jdGlvbiBjb3B5VGV4dFRvQ2xpcGJvYXJkKHRleHQpIHtcbiAgdmFyIGNvcHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvcHktYnV0dG9uXCIpO1xuICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICBjb3B5QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvcGllZCc7XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBjb3B5QnV0dG9uLnRleHRDb250ZW50ID0gJ0ZhaWxlZCc7XG4gIH0pO1xufVxuXG5jb25zdCBjZSA9ICh7IHByb3BzLCB0YWcsIGNoaWxkcmVuLCBuYW1lIH0sIGVsZW1lbnRzT2JqKSA9PiB7XG4gIGNvbnN0IGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgT2JqZWN0LmVudHJpZXMocHJvcHMpLmZvckVhY2goKFtrLCB2XSkgPT4ge1xuICAgIGlmIChrID09PSBcInN0eWxlXCIpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHYpLmZvckVhY2goKFtrMiwgdjJdKSA9PiB7XG4gICAgICAgIGVsbS5zdHlsZVtrMl0gPSB2MjtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbG1ba10gPSB2O1xuICAgIH1cbiAgfSk7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICh4KSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2UoeCwgZWxlbWVudHNPYmopO1xuICAgICAgICBlbG0uYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGlmIChuYW1lICYmIGVsZW1lbnRzT2JqKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZWxlbWVudHNPYmpbbmFtZV0gPSBlbG07XG4gIH1cbiAgcmV0dXJuIGVsbTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcigpIHtcbiAgcmV0dXJuIGNlKHtcbiAgICB0YWc6IFwiZGl2XCIsXG4gICAgcHJvcHM6IHsgY2xhc3NOYW1lOiBcInN1bW1hcml6ZS1ncHQtY29udGFpbmVyXCIgfSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgIHByb3BzOiB7IGNsYXNzTmFtZTogXCJzdW16LW1pbi13LVszMCVdIHN1bXotbWF4LWgtWzgwJV0gc3Vtei1tYXgtdy1bMzAlXSBzdW16LWZpeGVkIHN1bXotcmlnaHQtNCBzdW16LXRvcC04IHN1bXotZmxleCBzdW16LWZsZXgtY29sIHN1bXotaXRlbXMtY2VudGVyIHN1bXotanVzdGlmeS1jZW50ZXIgc3Vtei1yb3VuZGVkLWxnIHN1bXotYmctd2hpdGUgc3Vtei1zaGFkb3ctbWRcIiB9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIC8vIGhlYWRpbmdcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgICAgICBwcm9wczogeyBjbGFzc05hbWU6IFwic3Vtei1mbGV4IHN1bXotaC1bNDBweF0gc3Vtei13LWZ1bGwgc3Vtei1pdGVtcy1jZW50ZXIgc3Vtei1qdXN0aWZ5LWJldHdlZW4gc3Vtei1yb3VuZGVkLXQtbGcgc3Vtei1iZy1ncmF5LTIwMCBzdW16LXB4LTRcIiB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgICAgICAgICBwcm9wczogeyBpZDogXCJzdW1tYXJpemVfX2hlYWRpbmctdGV4dFwiLCBjbGFzc05hbWU6IFwic3Vtei10ZXh0LXhsIHN1bXotZm9udC1ibGFjayBzdW16LWFuaW1hdGUtdGV4dCBzdW16LWJnLWdyYWRpZW50LXRvLXIgc3Vtei1mcm9tLXRlYWwtNTAwIHN1bXotdmlhLXB1cnBsZS01MDAgc3Vtei10by1vcmFuZ2UtNTAwIHN1bXotYmctY2xpcC10ZXh0IHN1bXotdGV4dC10cmFuc3BhcmVudFwiIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgdGFnOiBcImltZ1wiLCBwcm9wczogeyBpZDogXCJzdW1tYXJpemVfX2Nsb3NlLWJ1dHRvblwiLCBjbGFzc05hbWU6IFwic3Vtei1oLVsyNHB4XSBzdW16LXctNiBzdW16LWN1cnNvci1wb2ludGVyIHN1bXotcm91bmRlZC1sZyBob3ZlcjpzdW16LWJnLXNreS0yMDBcIiwgc3JjOiBDcm9zc0lDLCBhbHQ6IFwiY2xvc2VcIiB9IH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBkaXZpZGVyXG4gICAgICAgICAgeyB0YWc6IFwiZGl2XCIsIHByb3BzOiB7IGNsYXNzTmFtZTogXCJzdW16LXctZnVsbCBzdW16LWgtMSBzdW16LWJnLWdyYXktMzAwXCIgfSB9LFxuICAgICAgICAgIC8vIGJvZHlcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgICAgICBwcm9wczogeyBjbGFzc05hbWU6IFwic3Vtei1oLWZ1bGwgc3Vtei13LWZ1bGwgc3Vtei1vdmVyZmxvdy15LWF1dG8gc3Vtei1weC00IHN1bXotcHktNFwiIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHByb3BzOiB7IGlkOiBcInN1bW1hcml6ZV9fYm9keVwiLCBjbGFzc05hbWU6IFwic3Vtei10ZXh0LTMteGwgc3Vtei1tYi0yIHN1bXotZmxleCBzdW16LWZsZXgtY29sIHN1bXotd2hpdGVzcGFjZS1wcmUtbGluZSBzdW16LXRleHQtZ3JheS03MDBcIiB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIGRpdmlkZXJcbiAgICAgICAgICB7IHRhZzogXCJkaXZcIiwgcHJvcHM6IHsgY2xhc3NOYW1lOiBcInN1bXotdy1mdWxsIHN1bXotaC0xIHN1bXotYmctZ3JheS0yMDBcIiB9IH0sXG4gICAgICAgICAgLy8gZm9vdGVyXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICAgICAgcHJvcHM6IHsgY2xhc3NOYW1lOiBcInN1bXotbS0yXCIgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgcHJvcHM6IHsgY2xhc3NOYW1lOiBcInN1bXotZmxleCBzdW16LWgtWzMycHhdIHN1bXotdy1mdWxsIHN1bXotaXRlbXMtY2VudGVyIHN1bXotanVzdGlmeS1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwic3Vtei10ZXh0LWxnIHN1bXotZm9udC1ib2xkIHN1bXotdGV4dC1ncmF5LTYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogXCJIZWxwIFVzXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzdW1tYXJpemVfX2FuaW1hdGlvbi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrOiAoKSA9PiB3aW5kb3cub3BlbignaHR0cHM6Ly90YWxseS5zby9yL3dvRDJlUCcsIFwiX2JsYW5rXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzdW16LXJvdW5kZWQtZnVsbCBzdW16LWJvcmRlci0yIHN1bXotYm9yZGVyLXNreS02MDAgc3Vtei1tLTIgc3Vtei1weC0xIHN1bXotcHktMSBzdW16LXRleHQtbGcgc3Vtei10ZXh0LXNreS02MDAgc3Vtei10cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpzdW16LWJnLXNreS0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInN1bXotcG9pbnRlci1ldmVudHMtbm9uZSBzdW16LWFic29sdXRlIHN1bXotaW5zZXQtMCAtc3Vtei16LTEwIHN1bXotYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwic3VtbWFyaXplX19zcGFya2xlcy1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwic3Vtei1ibG9jayBzdW16LWgtWzE2cHhdIHN1bXotb3ZlcmZsb3ctaGlkZGVuIHN1bXotei0xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzdW1tYXJpemVfX2xldHRlcnMtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwic3Vtei10ZXh0LXNtIHN1bXotdGV4dC1ncmF5LTYwMCBzdW16LXB0LTJcIixcbiAgICAgICAgICAgICAgICAgIGlubmVyVGV4dDogXCJTaGFyZSBZb3VyIEZlZWRiYWNrICYgSWRlYXMgZm9yIFN1bW1hcml6ZSBhbmQgQmV5b25kXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoKTtcblxuICBsZXQgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByb290LmlkID0gXCJzdW1tYXJpemUtcm9vdFwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuXG4gIGxldCBzaGFkb3dSb290ID0gcm9vdC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cbiAgLy8gQXBwZW5kaW5nIHRoZSBzdHlsZXMgdG8gdGhlIHNoYWRvdyByb290XG4gIGlmICghc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnN1bW1hcml6ZS1zdHlsZXNcIikpXG4gICAgYWRkU3R5bGVzaGVldChzaGFkb3dSb290LCBcInN0eWxlcy5jc3NcIiwgXCJzdW1tYXJpemUtc3R5bGVzXCIpO1xuXG4gIHNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAvLyBBZGRpbmcgc3R5bGVzIHRvIHBvc2l0aW9uIHRoZSByb290XG4gIHJvb3Quc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICByb290LnN0eWxlLnpJbmRleCA9ICc5OTk5JzsgLy8gTWFrZSBzdXJlIGl0J3Mgb24gdG9wIG9mIG90aGVyIGVsZW1lbnRzXG5cbiAgY29uc3QgaW5uZXJDb250YWluZXJIZWFkaW5nID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjc3VtbWFyaXplX19oZWFkaW5nLXRleHRcIik7XG4gIGlubmVyQ29udGFpbmVySGVhZGluZy5pbm5lckhUTUwgPSAnPHA+U3VtbWFyaXplZCA8YSBocmVmPVwiaHR0cHM6Ly9jaGF0Lm9wZW5haS5jb20vY2hhdFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwic3Vtei10ZXh0LXNtXCI+YnkgQ2hhdEdQVDwvYT48L3A+JztcblxuICBjb25zdCBpbm5lckNvbnRhaW5lckJvZHkgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIiNzdW1tYXJpemVfX2JvZHlcIik7XG4gIGlubmVyQ29udGFpbmVyQm9keS5pbm5lckhUTUwgPSAnPHA+V2FpdGluZyBmb3IgQ2hhdEdQVCByZXNwb25zZS4uLjwvcD4nO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjc3VtbWFyaXplX19jbG9zZS1idXR0b25cIik7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChyb290KTtcbiAgfSk7XG5cbiAgLy8gYW5pbWF0ZWQgYnV0dG9uXG4gIGNvbnN0IGxldHRlcnMgPSBbXCJJXCIsIFwiblwiLCBcIm5cIiwgXCJvXCIsIFwidlwiLCBcImFcIiwgXCJ0XCIsIFwiZVwiXTtcbiAgY29uc3QgbGV0dGVyc0NvbnRhaW5lciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3N1bW1hcml6ZV9fbGV0dGVycy1jb250YWluZXJcIik7XG5cbiAgLy8gQWRkIGxldHRlcnMgZHluYW1pY2FsbHlcbiAgbGV0dGVycy5mb3JFYWNoKChsZXR0ZXIsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbGV0dGVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxldHRlclNwYW4uc2V0QXR0cmlidXRlKFwiZGF0YS1sZXR0ZXJcIiwgbGV0dGVyKTtcbiAgICBsZXR0ZXJTcGFuLmNsYXNzTmFtZSA9IFwic3VtbWFyaXplX19hbmltYXRlZC1sZXR0ZXIgc3Vtei1yZWxhdGl2ZSBzdW16LWlubGluZS1ibG9jayBzdW16LWgtWzE2cHhdIHN1bXotbGVhZGluZy1bMTZweF0gYWZ0ZXI6c3Vtei1hYnNvbHV0ZSBhZnRlcjpzdW16LWxlZnQtMCBhZnRlcjpzdW16LXRvcC1mdWxsIGFmdGVyOnN1bXotaC1bMTZweF0gYWZ0ZXI6c3Vtei1jb250ZW50LVthdHRyKGRhdGEtbGV0dGVyKV1cIjtcbiAgICBsZXR0ZXJTcGFuLnRleHRDb250ZW50ID0gbGV0dGVyO1xuICAgIGxldHRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQobGV0dGVyU3Bhbik7XG4gIH0pO1xuICAvLyBBZGQgc3BhcmtsZXMgZHluYW1pY2FsbHlcbiAgY29uc3Qgc3BhcmtsZXNDb3VudCA9IDEwO1xuICBjb25zdCBzcGFya2xlc0NvbnRhaW5lciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3N1bW1hcml6ZV9fc3BhcmtsZXMtY29udGFpbmVyXCIpO1xuICBjb25zdCBzcGFya2xlQ3NzQ2xhc3MgPSBBcnJheSgnc3Vtei1maWxsLXNreS02MDAnLCAnc3Vtei1maWxsLWVtZXJhbGQtNjAwJywgJ3N1bXotZmlsbC1pbmRpZ28tNjAwJywgJ3N1bXotZmlsbC1yb3NlLTYwMCcsICdzdW16LWZpbGwtYW1iZXItNjAwJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGFya2xlc0NvdW50OyBpKyspIHtcbiAgICBjb25zdCBzcGFya2xlU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzcGFya2xlU3ZnLmNsYXNzTGlzdC5hZGQoYHN1bXotYWJzb2x1dGVgLCBgc3Vtei1sZWZ0LTEvMmAsIGBzdW16LXRvcC0xLzJgLCBgc3Vtei1vcGFjaXR5LTBgLCBgc3BhcmtsZS0ke2l9YCk7XG4gICAgc3BhcmtsZVN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDEyMiAxMTdcIik7XG4gICAgY29uc3QgZGltZW50aW9uID0gcmFuZG9tTnVtYmVyQmV0d2VlbigxMCwgMTYpO1xuICAgIHNwYXJrbGVTdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYCR7ZGltZW50aW9ufWApO1xuICAgIHNwYXJrbGVTdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke2RpbWVudGlvbn1gKTtcblxuICAgIGNvbnN0IHNwYXJrbGVQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgY29uc3Qgc3ByaW5rbGVDb2xvciA9IHNwYXJrbGVDc3NDbGFzc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFya2xlQ3NzQ2xhc3MubGVuZ3RoKV07XG4gICAgc3BhcmtsZVN2Zy5jbGFzc0xpc3QuYWRkKHNwcmlua2xlQ29sb3IpO1xuICAgIHNwYXJrbGVQYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgXCJNNjQuMzksMiw4MC4xMSwzOC43NiwxMjAsNDIuMzNhMy4yLDMuMiwwLDAsMSwxLjgzLDUuNTloMEw5MS42NCw3NC4yNWw4LjkyLDM5YTMuMiwzLjIsMCwwLDEtNC44NywzLjRMNjEuNDQsOTYuMTksMjcuMDksMTE2LjczYTMuMiwzLjIsMCwwLDEtNC43Ni0zLjQ2aDBsOC45Mi0zOUwxLjA5LDQ3LjkyQTMuMiwzLjIsMCwwLDEsMyw0Mi4zMmwzOS43NC0zLjU2TDU4LjQ5LDJhMy4yLDMuMiwwLDAsMSw1LjksMFpcIik7XG5cbiAgICBzcGFya2xlU3ZnLmFwcGVuZENoaWxkKHNwYXJrbGVQYXRoKTtcbiAgICBzcGFya2xlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFya2xlU3ZnKTtcbiAgfVxuICBsZXR0ZXJzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBvbkFuaW1hdGlvbkJ1dHRvbkNsaWNrKGNvbnRhaW5lciwgc3BhcmtsZXNDb3VudCk7XG4gIH0pO1xuXG4gIGxldCBjb250ZW50O1xuICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG4gIGlmIChzZWxlY3Rpb24uaXNDb2xsYXBzZWQpIHtcbiAgICBjb250ZW50ID0gZ2V0Q29udGVudE9mQXJ0aWNsZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRlbnQgPSBzZWxlY3Rpb24udG9TdHJpbmcoKTtcbiAgfVxuXG4gIGNvbnN0IHBvcnQgPSBDT1JFLnJ1bnRpbWUuY29ubmVjdCgpO1xuICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAobXNnKSB7XG4gICAgaWYgKG1zZy5hbnN3ZXIpIHtcbiAgICAgIGlubmVyQ29udGFpbmVyQm9keS5pbm5lckhUTUwgPSBtc2cuYW5zd2VyO1xuICAgIH0gZWxzZSBpZiAobXNnLmVycm9yID09PSBcIlVOQVVUSE9SSVpFRFwiKSB7XG4gICAgICBpbm5lckNvbnRhaW5lckJvZHkuaW5uZXJIVE1MID1cbiAgICAgICAgJzxwPlBsZWFzZSBsb2dpbiBhdCA8YSBocmVmPVwiaHR0cHM6Ly9jaGF0Lm9wZW5haS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5jaGF0Lm9wZW5haS5jb208L2E+PC9wPic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlubmVyQ29udGFpbmVyQm9keS5pbm5lckhUTUwgPSBcIjxwPkZhaWxlZCB0byBsb2FkIHJlc3BvbnNlIGZyb20gQ2hhdEdQVDwvcD5cIjtcbiAgICB9XG4gIH0pO1xuICBwb3J0LnBvc3RNZXNzYWdlKHsgY29udGVudCB9KTtcbn1cblxucnVuKCk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX3NldFByb3RvdHlwZU9mIiwibyIsInAiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIl9jb25zdHJ1Y3QiLCJQYXJlbnQiLCJhcmdzIiwiQ2xhc3MiLCJSZWZsZWN0IiwiY29uc3RydWN0Iiwic2hhbSIsIlByb3h5IiwiQm9vbGVhbiIsInZhbHVlT2YiLCJjYWxsIiwiZSIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJhIiwicHVzaCIsImFwcGx5IiwiaW5zdGFuY2UiLCJGdW5jdGlvbiIsImJpbmQiLCJhcmd1bWVudHMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIiLCJBcnJheSIsImlzQXJyYXkiLCJfYXJyYXlMaWtlVG9BcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIml0ZXIiLCJmcm9tIiwiX2l0ZXJhYmxlVG9BcnJheSIsIm1pbkxlbiIsIm4iLCJ0b1N0cmluZyIsInNsaWNlIiwibmFtZSIsInRlc3QiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJUeXBlRXJyb3IiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJsZW4iLCJsZW5ndGgiLCJpIiwiYXJyMiIsImhhc093blByb3BlcnR5IiwiaXNGcm96ZW4iLCJnZXRQcm90b3R5cGVPZiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZyZWV6ZSIsInNlYWwiLCJjcmVhdGUiLCJfcmVmIiwiZnVuIiwidGhpc1ZhbHVlIiwieCIsIkZ1bmMiLCJmdW5jIiwiYXJyYXlGb3JFYWNoIiwidW5hcHBseSIsImZvckVhY2giLCJhcnJheVBvcCIsInBvcCIsImFycmF5UHVzaCIsInN0cmluZ1RvTG93ZXJDYXNlIiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJzdHJpbmdUb1N0cmluZyIsInN0cmluZ01hdGNoIiwibWF0Y2giLCJzdHJpbmdSZXBsYWNlIiwicmVwbGFjZSIsInN0cmluZ0luZGV4T2YiLCJpbmRleE9mIiwic3RyaW5nVHJpbSIsInRyaW0iLCJyZWdFeHBUZXN0IiwiUmVnRXhwIiwidHlwZUVycm9yQ3JlYXRlIiwiX2xlbjIiLCJfa2V5MiIsInRoaXNBcmciLCJfbGVuIiwiX2tleSIsImFkZFRvU2V0Iiwic2V0IiwiYXJyYXkiLCJ0cmFuc2Zvcm1DYXNlRnVuYyIsImwiLCJlbGVtZW50IiwibGNFbGVtZW50IiwiY2xvbmUiLCJvYmplY3QiLCJwcm9wZXJ0eSIsIm5ld09iamVjdCIsImxvb2t1cEdldHRlciIsInByb3AiLCJkZXNjIiwiZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwid2FybiIsImh0bWwkMSIsInN2ZyQxIiwic3ZnRmlsdGVycyIsInN2Z0Rpc2FsbG93ZWQiLCJtYXRoTWwkMSIsIm1hdGhNbERpc2FsbG93ZWQiLCJ0ZXh0IiwiaHRtbCIsInN2ZyIsIm1hdGhNbCIsInhtbCIsIk1VU1RBQ0hFX0VYUFIiLCJFUkJfRVhQUiIsIlRNUExJVF9FWFBSIiwiREFUQV9BVFRSIiwiQVJJQV9BVFRSIiwiSVNfQUxMT1dFRF9VUkkiLCJJU19TQ1JJUFRfT1JfREFUQSIsIkFUVFJfV0hJVEVTUEFDRSIsIkRPQ1RZUEVfTkFNRSIsImdldEdsb2JhbCIsIndpbmRvdyIsImNyZWF0ZURPTVB1cmlmeSIsInVuZGVmaW5lZCIsIkRPTVB1cmlmeSIsInJvb3QiLCJ2ZXJzaW9uIiwicmVtb3ZlZCIsImRvY3VtZW50Iiwibm9kZVR5cGUiLCJpc1N1cHBvcnRlZCIsIm9yaWdpbmFsRG9jdW1lbnQiLCJEb2N1bWVudEZyYWdtZW50IiwiSFRNTFRlbXBsYXRlRWxlbWVudCIsIk5vZGUiLCJFbGVtZW50IiwiTm9kZUZpbHRlciIsIl93aW5kb3ckTmFtZWROb2RlTWFwIiwiTmFtZWROb2RlTWFwIiwiTW96TmFtZWRBdHRyTWFwIiwiSFRNTEZvcm1FbGVtZW50IiwiRE9NUGFyc2VyIiwidHJ1c3RlZFR5cGVzIiwiRWxlbWVudFByb3RvdHlwZSIsImNsb25lTm9kZSIsImdldE5leHRTaWJsaW5nIiwiZ2V0Q2hpbGROb2RlcyIsImdldFBhcmVudE5vZGUiLCJ0ZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZW50Iiwib3duZXJEb2N1bWVudCIsInRydXN0ZWRUeXBlc1BvbGljeSIsImNyZWF0ZVBvbGljeSIsInN1ZmZpeCIsIkFUVFJfTkFNRSIsImN1cnJlbnRTY3JpcHQiLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJwb2xpY3lOYW1lIiwiY3JlYXRlSFRNTCIsImNyZWF0ZVNjcmlwdFVSTCIsInNjcmlwdFVybCIsIl8iLCJfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5IiwiZW1wdHlIVE1MIiwiX2RvY3VtZW50IiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVOb2RlSXRlcmF0b3IiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbXBvcnROb2RlIiwiZG9jdW1lbnRNb2RlIiwiaG9va3MiLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJQQVJTRVJfTUVESUFfVFlQRSIsIk1VU1RBQ0hFX0VYUFIkMSIsIkVSQl9FWFBSJDEiLCJUTVBMSVRfRVhQUiQxIiwiREFUQV9BVFRSJDEiLCJBUklBX0FUVFIkMSIsIklTX1NDUklQVF9PUl9EQVRBJDEiLCJBVFRSX1dISVRFU1BBQ0UkMSIsIklTX0FMTE9XRURfVVJJJDEiLCJBTExPV0VEX1RBR1MiLCJERUZBVUxUX0FMTE9XRURfVEFHUyIsImNvbmNhdCIsIkFMTE9XRURfQVRUUiIsIkRFRkFVTFRfQUxMT1dFRF9BVFRSIiwiQ1VTVE9NX0VMRU1FTlRfSEFORExJTkciLCJ0YWdOYW1lQ2hlY2siLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJhdHRyaWJ1dGVOYW1lQ2hlY2siLCJhbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMiLCJGT1JCSURfVEFHUyIsIkZPUkJJRF9BVFRSIiwiQUxMT1dfQVJJQV9BVFRSIiwiQUxMT1dfREFUQV9BVFRSIiwiQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMiLCJTQUZFX0ZPUl9URU1QTEFURVMiLCJXSE9MRV9ET0NVTUVOVCIsIlNFVF9DT05GSUciLCJGT1JDRV9CT0RZIiwiUkVUVVJOX0RPTSIsIlJFVFVSTl9ET01fRlJBR01FTlQiLCJSRVRVUk5fVFJVU1RFRF9UWVBFIiwiU0FOSVRJWkVfRE9NIiwiU0FOSVRJWkVfTkFNRURfUFJPUFMiLCJLRUVQX0NPTlRFTlQiLCJJTl9QTEFDRSIsIlVTRV9QUk9GSUxFUyIsIkZPUkJJRF9DT05URU5UUyIsIkRFRkFVTFRfRk9SQklEX0NPTlRFTlRTIiwiREFUQV9VUklfVEFHUyIsIkRFRkFVTFRfREFUQV9VUklfVEFHUyIsIlVSSV9TQUZFX0FUVFJJQlVURVMiLCJERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMiLCJNQVRITUxfTkFNRVNQQUNFIiwiU1ZHX05BTUVTUEFDRSIsIkhUTUxfTkFNRVNQQUNFIiwiTkFNRVNQQUNFIiwiSVNfRU1QVFlfSU5QVVQiLCJBTExPV0VEX05BTUVTUEFDRVMiLCJERUZBVUxUX0FMTE9XRURfTkFNRVNQQUNFUyIsIlNVUFBPUlRFRF9QQVJTRVJfTUVESUFfVFlQRVMiLCJDT05GSUciLCJmb3JtRWxlbWVudCIsImlzUmVnZXhPckZ1bmN0aW9uIiwidGVzdFZhbHVlIiwiX3BhcnNlQ29uZmlnIiwiY2ZnIiwiQUREX1VSSV9TQUZFX0FUVFIiLCJBRERfREFUQV9VUklfVEFHUyIsIkFMTE9XRURfVVJJX1JFR0VYUCIsIkFERF9UQUdTIiwiQUREX0FUVFIiLCJ0YWJsZSIsInRib2R5IiwiTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTIiwiSFRNTF9JTlRFR1JBVElPTl9QT0lOVFMiLCJDT01NT05fU1ZHX0FORF9IVE1MX0VMRU1FTlRTIiwiQUxMX1NWR19UQUdTIiwiQUxMX01BVEhNTF9UQUdTIiwiX2ZvcmNlUmVtb3ZlIiwibm9kZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIm91dGVySFRNTCIsInJlbW92ZSIsIl9yZW1vdmVBdHRyaWJ1dGUiLCJhdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiX2luaXREb2N1bWVudCIsImRpcnR5IiwiZG9jIiwibGVhZGluZ1doaXRlc3BhY2UiLCJtYXRjaGVzIiwiZGlydHlQYXlsb2FkIiwicGFyc2VGcm9tU3RyaW5nIiwiZG9jdW1lbnRFbGVtZW50IiwiY3JlYXRlRG9jdW1lbnQiLCJpbm5lckhUTUwiLCJib2R5IiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGlsZE5vZGVzIiwiX2NyZWF0ZUl0ZXJhdG9yIiwiU0hPV19FTEVNRU5UIiwiU0hPV19DT01NRU5UIiwiU0hPV19URVhUIiwiX2lzTm9kZSIsIm5vZGVOYW1lIiwiX2V4ZWN1dGVIb29rIiwiZW50cnlQb2ludCIsImN1cnJlbnROb2RlIiwiZGF0YSIsImhvb2siLCJfc2FuaXRpemVFbGVtZW50cyIsImVsbSIsInRleHRDb250ZW50IiwiYXR0cmlidXRlcyIsIm5hbWVzcGFjZVVSSSIsImhhc0NoaWxkTm9kZXMiLCJ0YWdOYW1lIiwiYWxsb3dlZFRhZ3MiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIl9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0IiwicGFyZW50IiwicGFyZW50VGFnTmFtZSIsIl9jaGVja1ZhbGlkTmFtZXNwYWNlIiwiX2lzVmFsaWRBdHRyaWJ1dGUiLCJsY1RhZyIsImxjTmFtZSIsIl9zYW5pdGl6ZUF0dHJpYnV0ZXMiLCJhdHRyIiwiaG9va0V2ZW50IiwiYXR0ck5hbWUiLCJhdHRyVmFsdWUiLCJrZWVwQXR0ciIsImFsbG93ZWRBdHRyaWJ1dGVzIiwiX2F0dHIiLCJmb3JjZUtlZXBBdHRyIiwiZ2V0QXR0cmlidXRlVHlwZSIsInNldEF0dHJpYnV0ZU5TIiwiX3Nhbml0aXplU2hhZG93RE9NIiwiZnJhZ21lbnQiLCJzaGFkb3dOb2RlIiwic2hhZG93SXRlcmF0b3IiLCJuZXh0Tm9kZSIsInNhbml0aXplIiwiaW1wb3J0ZWROb2RlIiwib2xkTm9kZSIsInJldHVybk5vZGUiLCJ0b1N0YXRpY0hUTUwiLCJhcHBlbmRDaGlsZCIsImZpcnN0Q2hpbGQiLCJub2RlSXRlcmF0b3IiLCJzaGFkb3dyb290Iiwic2VyaWFsaXplZEhUTUwiLCJkb2N0eXBlIiwic2V0Q29uZmlnIiwiY2xlYXJDb25maWciLCJpc1ZhbGlkQXR0cmlidXRlIiwidGFnIiwiYWRkSG9vayIsImhvb2tGdW5jdGlvbiIsInJlbW92ZUhvb2siLCJyZW1vdmVIb29rcyIsInJlbW92ZUFsbEhvb2tzIiwiZmFjdG9yeSIsInQiLCJyIiwibSIsImMiLCJkIiwiZGVmaW5lUHJvcGVydHkiLCJ0b1N0cmluZ1RhZyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwicyIsInUiLCJrZWVwU3BhY2UiLCJwcmV2VGFnTmFtZSIsIm5leHRUYWdOYW1lIiwicHJldlRhZ1N0ciIsImYiLCJuZXh0VGFnU3RyIiwiaCIsInBhcmVudFRhZyIsInkiLCJpc0ZpcnN0U3ViVGFnIiwidiIsImciLCJjYWxjTGVhZGluZyIsImIiLCJsZWFkaW5nU3BhY2UiLCJPIiwiVCIsImxheWVyIiwiUyIsIm5vV3JhcCIsImoiLCJ3IiwiUCIsIk0iLCJpbmRlbnRTcGFjZSIsIkMiLCJOIiwibGFuZ3VhZ2UiLCJFIiwiTCIsImNvdW50IiwiayIsIkEiLCJ0YWJsZUNvbHVtbkNvdW50IiwiViIsIlciLCJub0V4dHJhTGluZSIsIlIiLCJJIiwiaW5UYWJsZSIsIkgiLCJ0aGlzIiwicmF3U3RyIiwiX19kZXRlY3RTdHJfXyIsImF0dHJzIiwicSIsIl9fZmV0Y2hUYWdBdHRyQW5kSW5uZXJIVE1MX18iLCJGIiwiRyIsImVycm9yIiwic3RhcnRzV2l0aCIsImlzU2VsZkNsb3NpbmciLCJnZXRUYWdBdHRyaWJ1dGVzIiwiX19vbmx5TGVhZGluZ1NwYWNlX18iLCJTSU5HTEUiLCJfX2lzRW1wdHlfXyIsImdldFZhbGlkU3ViVGFnTmFtZSIsImJlZm9yZVBhcnNlIiwidGFnTGlzdGVuZXIiLCJwYXJzZVZhbGlkU3ViVGFnIiwiZ2V0VGFnQ29uc3RydWN0b3IiLCJleGVjIiwicGFyc2VPbmx5U3RyaW5nIiwiYWZ0ZXJQYXJzZWQiLCJzbGltIiwiYmVmb3JlTWVyZ2VTcGFjZSIsIm1lcmdlU3BhY2UiLCJlbmRzV2l0aCIsImFmdGVyTWVyZ2VTcGFjZSIsImJlZm9yZVJldHVybiIsImdlbmVyYXRlR2V0TmV4dFZhbGlkVGFnIiwic2hvdWxkUmVuZGVyUmF3SW5zaWRlIiwiaXNJbmRlcGVuZGVudFRhZyIsImNsZWFyQ29tbWVudCIsImdldExhbmd1YWdlIiwiZ2V0VGFibGVBbGlnbiIsImdldFJlYWxUYWdOYW1lIiwidW5lc2NhcGVTdHIiLCJleHRyYUVzY2FwZSIsInNraXBUYWdzIiwiZW1wdHlUYWdzIiwiaWdub3JlVGFncyIsImFsaWFzVGFncyIsInJlbmRlckN1c3RvbVRhZ3MiLCJvcHRpb25zIiwiY2xlYXIiLCJrZXlzIiwiYXNzaWduIiwicmVzZXQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJmaWd1cmUiLCJkbCIsImRkIiwiZHQiLCJmaWdjYXB0aW9uIiwiX19leHRlbmRzIiwiX19mZXRjaFRhZ0F0dHJfXyIsImRpdiIsInByZSIsInNlY3Rpb24iLCJibG9ja3F1b3RlIiwiYXNpZGUiLCJsaSIsInVsIiwib2wiLCJmb3JtIiwiaHIiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJiciIsIl9fYXNzaWduIiwiX19FbXB0eVNlbGZDbG9zZV9fIiwiX19FbXB0eV9fIiwiX19Ta2lwU2VsZkNsb3NlX18iLCJfX1NraXBfXyIsIm5vTmVlZFdyYXAiLCJpbmNsdWRlcyIsInRyaW1MZWZ0IiwidHJpbVJpZ2h0IiwiX19Ob01hdGNoU2VsZkNsb3NlX18iLCJfX05vTWF0Y2hfXyIsImltZyIsImlucHV0IiwibWV0YSIsImxpbmsiLCJiYXNlIiwiY29sIiwiYXJlYSIsInBhcmFtIiwiZW1iZWQiLCJrZXlnZW4iLCJzb3VyY2UiLCJUUklQTEUiLCJET1VCTEUiLCJocmVmIiwidGl0bGUiLCJmaWxsUGVyTGluZSIsInNwbGl0Iiwic3BsaWNlIiwibWFwIiwiam9pbiIsInJlcGVhdCIsInNyYyIsImFsdCIsInR5cGUiLCJjaGVja2VkIiwiZXh0cmFHYXAiLCJfX2NhbGNOZXh0TGVhZGluZ19fIiwicGFyc2VJbnQiLCJzdGFydCIsImlzTmFOIiwiX19pc1ZhbGlkU3ViVGFnX18iLCJpc0luZGVudCIsImV4aXN0X3RoZWFkIiwiZXhpc3RfdGJvZHkiLCJlbXB0eV90Ym9keSIsIk1hdGgiLCJtYXgiLCJyZWR1Y2UiLCJFcnJvciIsImNvZGUiLCJyZXNvbHZlIiwiaWQiLCJfZGVmYXVsdF8iLCJjZW50ZXIiLCJsZWZ0IiwicmlnaHQiLCJlbmQiLCJmaWxsIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImdldHRlciIsImRlZmluaXRpb24iLCJrZXkiLCJDT1JFIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiY2hyb21lIiwiYnJvd3NlciIsInJhbmRvbU51bWJlckJldHdlZW4iLCJtaW4iLCJmbG9vciIsInJhbmRvbSIsImJsYWNrbGlzdCIsImNoZWNrQWdhaW5zdEJsYWNrbGlzdCIsImVsZW0iLCJsZXZlbCIsImNsYXNzTmFtZSIsIml0ZW0iLCJmaWx0ZXIiLCJwYXJlbnRFbGVtZW50IiwiaXNTYW1lTm9kZSIsImdldENvbnRhaW5lciIsInNlbGVjdGVkQ29udGFpbmVyIiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJudW1Xb3Jkc09uUGFnZSIsImlubmVyVGV4dCIsInBzIiwicXVlcnlTZWxlY3RvckFsbCIsInBXaXRoTW9zdFdvcmRzIiwiaGlnaGVzdFdvcmRDb3VudCIsIm9mZnNldEhlaWdodCIsIm15SW5uZXJUZXh0Iiwid29yZENvdW50IiwiZGF0YXNldCIsInNpbXBsZURlbGV0ZSIsIndvcmRDb3VudFNlbGVjdGVkIiwiY2UiLCJwcm9wcyIsImNoaWxkcmVuIiwiZWxlbWVudHNPYmoiLCJlbnRyaWVzIiwiazIiLCJ2MiIsInN0eWxlIiwiY2hpbGQiLCJhc3luYyIsImNvbnRhaW5lciIsIm9uY2xpY2siLCJvcGVuIiwic2hhZG93Um9vdCIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJjbGFzc04iLCJwYXRoIiwicnVudGltZSIsImdldFVSTCIsInN0eWxlTGluayIsImFkZFN0eWxlc2hlZXQiLCJwb3NpdGlvbiIsInpJbmRleCIsImlubmVyQ29udGFpbmVyQm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsZXR0ZXJzQ29udGFpbmVyIiwibGV0dGVyIiwiaW5kZXgiLCJsZXR0ZXJTcGFuIiwic3BhcmtsZXNDb250YWluZXIiLCJzcGFya2xlQ3NzQ2xhc3MiLCJzcGFya2xlU3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGltZW50aW9uIiwic3BhcmtsZVBhdGgiLCJzcHJpbmtsZUNvbG9yIiwib25BbmltYXRpb25CdXR0b25DbGljayIsInNwYXJrbGVzQ291bnQiLCJlbCIsImFuaW1hdGUiLCJ0cmFuc2Zvcm0iLCJkdXJhdGlvbiIsImRlbGF5Iiwic3BhcmtsZSIsIm9wYWNpdHkiLCJlYXNpbmciLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJpc0NvbGxhcHNlZCIsInBhZ2VDbG9uZSIsInBhdHRlcm4yIiwiaHRtbDJtZCIsImdldENvbnRlbnRPZkFydGljbGUiLCJwb3J0IiwiY29ubmVjdCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwibXNnIiwiYW5zd2VyIiwicG9zdE1lc3NhZ2UiLCJydW4iXSwic291cmNlUm9vdCI6IiJ9
