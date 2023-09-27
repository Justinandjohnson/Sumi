(() => {
  "use strict";
  var t = {
      521: (t, e, o) => {
        const n = o(981);
        class r {
          constructor(t, e) {
            if (
              ((this.maxAge = t),
              (this[Symbol.toStringTag] = "Map"),
              (this.data = new Map()),
              n(this.data),
              e)
            )
              for (const [t, o] of e) this.set(t, o);
          }
          get size() {
            return this.data.size;
          }
          clear() {
            this.data.clear();
          }
          delete(t) {
            return this.data.delete(t);
          }
          has(t) {
            return this.data.has(t);
          }
          get(t) {
            const e = this.data.get(t);
            if (e) return e.data;
          }
          set(t, e) {
            return (
              this.data.set(t, { maxAge: Date.now() + this.maxAge, data: e }),
              this
            );
          }
          values() {
            return this.createIterator((t) => t[1].data);
          }
          keys() {
            return this.data.keys();
          }
          entries() {
            return this.createIterator((t) => [t[0], t[1].data]);
          }
          forEach(t, e) {
            for (const [o, n] of this.entries()) t.apply(e, [n, o, this]);
          }
          [Symbol.iterator]() {
            return this.entries();
          }
          *createIterator(t) {
            for (const e of this.data.entries()) yield t(e);
          }
        }
        t.exports = r;
      },
      981: (t, e, o) => {
        const n = o(576);
        t.exports = function (t, e = "maxAge") {
          let o, r, s;
          const a = async () => {
              if (void 0 !== o) return;
              const a = async (a) => {
                s = n();
                const i = a[1][e] - Date.now();
                return i <= 0
                  ? (t.delete(a[0]), void s.resolve())
                  : ((o = a[0]),
                    (r = setTimeout(() => {
                      t.delete(a[0]), s && s.resolve();
                    }, i)),
                    "function" == typeof r.unref && r.unref(),
                    s.promise);
              };
              try {
                for (const e of t) await a(e);
              } catch (t) {}
              o = void 0;
            },
            i = t.set.bind(t);
          return (
            (t.set = (e, n) => {
              t.has(e) && t.delete(e);
              const c = i(e, n);
              return (
                o &&
                  o === e &&
                  ((o = void 0),
                  void 0 !== r && (clearTimeout(r), (r = void 0)),
                  void 0 !== s && (s.reject(void 0), (s = void 0))),
                a(),
                c
              );
            }),
            a(),
            t
          );
        };
      },
      576: (t) => {
        t.exports = () => {
          const t = {};
          return (
            (t.promise = new Promise((e, o) => {
              (t.resolve = e), (t.reject = o);
            })),
            t
          );
        };
      },
    },
    e = {};
  function o(n) {
    var r = e[n];
    if (void 0 !== r) return r.exports;
    var s = (e[n] = { exports: {} });
    return t[n](s, s.exports, o), s.exports;
  }
  (o.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return o.d(e, { a: e }), e;
  }),
    (o.d = (t, e) => {
      for (var n in e)
        o.o(e, n) &&
          !o.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t = o(521),
        e = o.n(t);
      const n = {
        randomUUID:
          "undefined" != typeof crypto &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto),
      };
      let r;
      const s = new Uint8Array(16);
      function a() {
        if (
          !r &&
          ((r =
            "undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)),
          !r)
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return r(s);
      }
      const i = [];
      for (let t = 0; t < 256; ++t) i.push((t + 256).toString(16).slice(1));
      const c = function (t, e, o) {
          if (n.randomUUID && !e && !t) return n.randomUUID();
          const r = (t = t || {}).random || (t.rng || a)();
          if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), e)) {
            o = o || 0;
            for (let t = 0; t < 16; ++t) e[o + t] = r[t];
            return e;
          }
          return (function (t, e = 0) {
            return (
              i[t[e + 0]] +
              i[t[e + 1]] +
              i[t[e + 2]] +
              i[t[e + 3]] +
              "-" +
              i[t[e + 4]] +
              i[t[e + 5]] +
              "-" +
              i[t[e + 6]] +
              i[t[e + 7]] +
              "-" +
              i[t[e + 8]] +
              i[t[e + 9]] +
              "-" +
              i[t[e + 10]] +
              i[t[e + 11]] +
              i[t[e + 12]] +
              i[t[e + 13]] +
              i[t[e + 14]] +
              i[t[e + 15]]
            ).toLowerCase();
          })(r);
        },
        d = [239, 187, 191];
      let u = navigator.userAgent.indexOf("Chrome") > -1 ? "Chrome" : "Firefox",
        l = "Chrome" === u ? chrome : browser;
      const f = "accessToken";
      let p = "",
        h = "";
      l.storage.sync.get(["prompt", "apiKey"], function (t) {
        (p =
          t && t.prompt
            ? t.prompt
            : "You are a ai that summuraizes text. Responses should be as short but detailed as possible. Only list the most important facts about the article. Focus on the main ideas, key details, and pertinent information from the text.Do not write any duplicate information.: "),
          t && t.apiKey && (h = t.apiKey);
      });

      const m = new (e())(1e4);
      async function g() {
        if (m.get(f)) return m.get(f);
        const t = await fetch("https://chat.openai.com/api/auth/session")
          .then((t) => t.json())
          .catch(() => ({}));
        if (!t.accessToken) throw new Error("UNAUTHORIZED");
        return m.set(f, t.accessToken), t.accessToken;
      }
      async function y() {
        const t = await g(),
          e = await fetch(
            "https://chat.openai.com/backend-api/conversations?offset=0&limit=1",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${t}`,
              },
            }
          )
            .then((t) => t.json())
            .catch(() => ({}));
        return 1 === e?.items?.length ? e.items[0].id : "";
      }
      async function v(t) {
        const e = await g(),
          o = await fetch(
            `https://chat.openai.com/backend-api/conversation/${t}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${e}`,
              },
              body: JSON.stringify({ is_visible: !1 }),
            }
          )
            .then((t) => t.json())
            .catch(() => ({}));
        return !!o?.success;
      }
      async function w(t, e) {
        const o = await g(),
          n = {
            action: "next",
            messages: [
              {
                id: c(),
                author: { role: "user" },
                role: "user",
                content: { content_type: "text", parts: [t] },
              },
            ],
            model: "text-davinci-002-render",
            parent_message_id: c(),
          };
        await (async function (t, e) {
          const { onMessage: o, onError: n, ...r } = e,
            s = await fetch(t, r).catch((t) => n(t)),
            a = (function (t) {
              let e, o, n, r, s, a, i;
              return (
                c(),
                {
                  feed: function (t) {
                    (o = o ? o + t : t),
                      e &&
                        (function (t) {
                          return d.every((e, o) => t.charCodeAt(o) === e);
                        })(o) &&
                        (o = o.slice(d.length)),
                      (e = !1);
                    const s = o.length;
                    let a = 0,
                      i = !1;
                    for (; a < s; ) {
                      i && ("\n" === o[a] && ++a, (i = !1));
                      let t,
                        e = -1,
                        c = r;
                      for (let r = n; e < 0 && r < s; ++r)
                        (t = o[r]),
                          ":" === t && c < 0
                            ? (c = r - a)
                            : "\r" === t
                            ? ((i = !0), (e = r - a))
                            : "\n" === t && (e = r - a);
                      if (e < 0) {
                        (n = s - a), (r = c);
                        break;
                      }
                      (n = 0), (r = -1), u(o, a, c, e), (a += e + 1);
                    }
                    a === s ? (o = "") : a > 0 && (o = o.slice(a));
                  },
                  reset: c,
                }
              );
              function c() {
                (e = !0),
                  (o = ""),
                  (n = 0),
                  (r = -1),
                  (s = void 0),
                  (a = void 0),
                  (i = "");
              }
              function u(e, o, n, r) {
                if (0 === r)
                  return (
                    i.length > 0 &&
                      (t({
                        type: "event",
                        id: s,
                        event: a || void 0,
                        data: i.slice(0, -1),
                      }),
                      (i = ""),
                      (s = void 0)),
                    void (a = void 0)
                  );
                const c = n < 0,
                  d = e.slice(o, o + (c ? r : n));
                let u = 0;
                u = c ? r : " " === e[o + n + 1] ? n + 2 : n + 1;
                const l = o + u,
                  f = r - u,
                  p = e.slice(l, l + f).toString();
                if ("data" === d) i += p ? "".concat(p, "\n") : "\n";
                else if ("event" === d) a = p;
                else if ("id" !== d || p.includes("\0")) {
                  if ("retry" === d) {
                    const e = parseInt(p, 10);
                    Number.isNaN(e) ||
                      t({ type: "reconnect-interval", value: e });
                  }
                } else s = p;
              }
            })((t) => {
              "event" === t.type && o(t.data);
            });
          for await (const t of (async function* (t) {
            const e = t.getReader();
            try {
              for (;;) {
                const { done: t, value: o } = await e.read();
                if (t) return;
                yield o;
              }
            } finally {
              e.releaseLock();
            }
          })(s.body)) {
            const e = new TextDecoder().decode(t);
            a.feed(e);
          }
        })("https://chat.openai.com/backend-api/conversation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${o}`,
          },
          body: JSON.stringify(n),
          onMessage(t) {
            if ("[DONE]" !== t)
              try {
                const o = JSON.parse(t),
                  n = o.message?.content?.parts?.[0];
                n && e(n);
              } catch (e) {
                console.log("sse message", t),
                  console.log(`Error in onMessage: ${e}`);
              }
          },
          onError(t) {
            console.log(`Error in fetchSSE: ${t}`);
          },
        });
      }
      let b = {};
      function x(t) {
        let e = "";
        for (const o of t) e += (e ? " " : "") + o;
        return e;
      }
      l.action.onClicked.addListener(async (...t) => {
        t[0],
          "Firefox" === u &&
            l.permissions.request({ origins: ["https://*.openai.com/"] }),
          (function (t) {
            const e = t.id;
            b[e] ||
              ((b[e] = !0),
              setTimeout(() => delete b[e], 1e4),
              l.action.setBadgeBackgroundColor({ color: [242, 38, 19, 230] }),
              l.action.setBadgeText({ text: "GPT" }),
              l.scripting.executeScript({
                target: { tabId: e },
                files: ["content.bundle.js"],
              }),
              setTimeout(function () {
                l.action.setBadgeText({ text: "" });
              }, 1e3));
          })(...t);
      }),
        l.runtime.onConnect.addListener((t) => {
          t.onMessage.addListener(async (e, o, n) => {
            console.debug("received msg ", e.content);
            try {
              const o = 3e3,
                n = e.content;
              console.debug("Text:", n);
              const r = (function (t, e) {
                const o = [],
                  n = t.split(/\s+/);
                let r = "";
                for (const t of n)
                  r.length + t.length + 1 <= e
                    ? (r += (r ? " " : "") + t)
                    : (o.push(r), (r = t));
                return r && o.push(r), o;
              })(n, o);
              let s = "";
              for (const e of r) {
                const o = p + `\n\n${e}`;
                let n = "";
                await w(o, (e) => {
                  (n = e), t.postMessage({ answer: x([s, e]) });
                }),
                  await v(await y()),
                  (s = x([s, n]) + "\n\n");
              }
            } catch (e) {
              console.error(e),
                t.postMessage({ error: e.message }),
                m.delete(f);
            }
          });
        });
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQVNlLEVBQVFDLEtBQ2pEM0IsUUFBUTRCLE1BQU0sZ0JBQWlCakIsRUFBUXZFLFNBQ3ZDLElBQ0UsTUFBTXlGLEVBQVksSUFDWjlCLEVBQU9ZLEVBQVF2RSxRQUNyQjRELFFBQVE0QixNQUFNLFFBQVM3QixHQUN2QixNQUFNK0IsRUF3QlosU0FBNkIvQixFQUFNOEIsR0FDakMsTUFBTUMsRUFBUyxHQUNUQyxFQUFRaEMsRUFBS2lDLE1BQU0sT0FDekIsSUFBSUMsRUFBZSxHQUVuQixJQUFLLE1BQU1DLEtBQVFILEVBQ2JFLEVBQWEvRyxPQUFTZ0gsRUFBS2hILE9BQVMsR0FBSzJHLEVBQzNDSSxJQUFpQkEsRUFBZSxJQUFNLElBQU1DLEdBRTVDSixFQUFPbEosS0FBS3FKLEdBQ1pBLEVBQWVDLEdBUW5CLE9BSklELEdBQ0ZILEVBQU9sSixLQUFLcUosR0FHUEgsQ0FDVCxDQTNDcUJLLENBQW9CcEMsRUFBTThCLEdBRXpDLElBQUlPLEVBQWlCLEdBQ3JCLElBQUssTUFBTTVFLEtBQVNzRSxFQUFRLENBQzFCLE1BQU1PLEVBQWNySSxFQUFVLE9BQU13RCxJQUNwQyxJQUFJOEUsRUFBZ0IsU0FDZDNHLEVBQVcwRyxHQUFjRSxJQUM3QkQsRUFBZ0JDLEVBQ2hCZCxFQUFLZSxZQUFZLENBQ2ZELE9BQVFwQyxFQUFpQixDQUFDaUMsRUFBZ0JHLEtBQzFDLFVBRUVuSCxRQUF5Qk4sS0FDL0JzSCxFQUNFakMsRUFBaUIsQ0FBQ2lDLEVBQWdCRSxJQUFrQixNQUN4RCxDQUNGLENBQUUsTUFBT3pGLEdBQ1BtRCxRQUFReUMsTUFBTTVGLEdBQ2Q0RSxFQUFLZSxZQUFZLENBQUVDLE1BQU81RixFQUFJZ0QsVUFDOUJ4RixFQUFNaEcsT0FBTzBGLEVBQ2YsSUFDQSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VtbWFyaXplLWdwdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9leHBpcnktbWFwQDIuMC4wL25vZGVfbW9kdWxlcy9leHBpcnktbWFwL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3VtbWFyaXplLWdwdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXAtYWdlLWNsZWFuZXJAMC4yLjAvbm9kZV9tb2R1bGVzL21hcC1hZ2UtY2xlYW5lci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvLi9ub2RlX21vZHVsZXMvLnBucG0vcC1kZWZlckAxLjAuMC9ub2RlX21vZHVsZXMvcC1kZWZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdW1tYXJpemUtZ3B0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3VtbWFyaXplLWdwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3VtbWFyaXplLWdwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvLi9ub2RlX21vZHVsZXMvLnBucG0vdXVpZEA5LjAuMC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9zdW1tYXJpemUtZ3B0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAOS4wLjAvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vc3VtbWFyaXplLWdwdC8uL25vZGVfbW9kdWxlcy8ucG5wbS91dWlkQDkuMC4wL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvLi9ub2RlX21vZHVsZXMvLnBucG0vdXVpZEA5LjAuMC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvLi9ub2RlX21vZHVsZXMvLnBucG0vZXZlbnRzb3VyY2UtcGFyc2VyQDAuMC41L25vZGVfbW9kdWxlcy9ldmVudHNvdXJjZS1wYXJzZXIvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vc3VtbWFyaXplLWdwdC8uL2xpYi9zcmMvYmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdW1tYXJpemUtZ3B0Ly4vbGliL3NyYy9iYWNrZ3JvdW5kL2ZldGNoLXNzZS5qcyIsIndlYnBhY2s6Ly9zdW1tYXJpemUtZ3B0Ly4vbGliL3NyYy9iYWNrZ3JvdW5kL3N0cmVhbS1hc3luYy1pdGVyYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IG1hcEFnZUNsZWFuZXIgPSByZXF1aXJlKFwibWFwLWFnZS1jbGVhbmVyXCIpO1xuY2xhc3MgRXhwaXJ5TWFwIHtcbiAgICBjb25zdHJ1Y3RvcihtYXhBZ2UsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5tYXhBZ2UgPSBtYXhBZ2U7XG4gICAgICAgIHRoaXNbU3ltYm9sLnRvU3RyaW5nVGFnXSA9ICdNYXAnO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIEJvb3RzdHJhcCB0aGUgY2xlYW51cCBwcm9jZXNzIHdoaWNoIGZyZWVzIHVwIG1lbW9yeSB3aGVuIGFuIGl0ZW0gZXhwaXJlc1xuICAgICAgICBtYXBBZ2VDbGVhbmVyKHRoaXMuZGF0YSk7XG4gICAgICAgIGlmIChkYXRhKSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6ZWFybHktZXhpdFxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnNpemU7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmRhdGEuY2xlYXIoKTtcbiAgICB9XG4gICAgZGVsZXRlKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgICBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuaGFzKGtleSk7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0KGtleSk7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmRhdGEuc2V0KGtleSwge1xuICAgICAgICAgICAgbWF4QWdlOiBEYXRlLm5vdygpICsgdGhpcy5tYXhBZ2UsXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSXRlcmF0b3IoaXRlbSA9PiBpdGVtWzFdLmRhdGEpO1xuICAgIH1cbiAgICBrZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmtleXMoKTtcbiAgICB9XG4gICAgZW50cmllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSXRlcmF0b3IoaXRlbSA9PiBbaXRlbVswXSwgaXRlbVsxXS5kYXRhXSk7XG4gICAgfVxuICAgIGZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZykge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiB0aGlzLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgY2FsbGJhY2tmbi5hcHBseSh0aGlzQXJnLCBbdmFsdWUsIGtleSwgdGhpc10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzKCk7XG4gICAgfVxuICAgICpjcmVhdGVJdGVyYXRvcihwcm9qZWN0aW9uKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmRhdGEuZW50cmllcygpKSB7XG4gICAgICAgICAgICB5aWVsZCBwcm9qZWN0aW9uKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBFeHBpcnlNYXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IHBEZWZlciA9IHJlcXVpcmUoXCJwLWRlZmVyXCIpO1xuZnVuY3Rpb24gbWFwQWdlQ2xlYW5lcihtYXAsIHByb3BlcnR5ID0gJ21heEFnZScpIHtcbiAgICBsZXQgcHJvY2Vzc2luZ0tleTtcbiAgICBsZXQgcHJvY2Vzc2luZ1RpbWVyO1xuICAgIGxldCBwcm9jZXNzaW5nRGVmZXJyZWQ7XG4gICAgY29uc3QgY2xlYW51cCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3NpbmdLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGFscmVhZHkgcHJvY2Vzc2luZyBhbiBpdGVtLCB3ZSBjYW4gc2FmZWx5IGV4aXRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZXR1cFRpbWVyID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHByb2Nlc3NpbmdEZWZlcnJlZCA9IHBEZWZlcigpO1xuICAgICAgICAgICAgY29uc3QgZGVsYXkgPSBpdGVtWzFdW3Byb3BlcnR5XSAtIERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAoZGVsYXkgPD0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgaXRlbSBpbW1lZGlhdGVseSBpZiB0aGUgZGVsYXkgaXMgZXF1YWwgdG8gb3IgYmVsb3cgMFxuICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoaXRlbVswXSk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZ0RlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBLZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IHByb2Nlc3NlZCBrZXlcbiAgICAgICAgICAgIHByb2Nlc3NpbmdLZXkgPSBpdGVtWzBdO1xuICAgICAgICAgICAgcHJvY2Vzc2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBpdGVtIHdoZW4gdGhlIHRpbWVvdXQgZmlyZXNcbiAgICAgICAgICAgICAgICBtYXAuZGVsZXRlKGl0ZW1bMF0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzaW5nRGVmZXJyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZ0RlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6c3RyaWN0LXR5cGUtcHJlZGljYXRlc1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9jZXNzaW5nVGltZXIudW5yZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBob2xkIHVwIHRoZSBwcm9jZXNzIGZyb20gZXhpdGluZ1xuICAgICAgICAgICAgICAgIHByb2Nlc3NpbmdUaW1lci51bnJlZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NpbmdEZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBtYXApIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBzZXR1cFRpbWVyKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgaWYgYW4gZXJyb3Igb2NjdXJzLCB0aGlzIG1lYW5zIHRoZSB0aW1lciB3YXMgY2xlYW5lZCB1cCBhbmQgd2Ugc2hvdWxkIHN0b3AgcHJvY2Vzc2luZ1xuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3NpbmdLZXkgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgcHJvY2Vzc2luZ0tleSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHByb2Nlc3NpbmdUaW1lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocHJvY2Vzc2luZ1RpbWVyKTtcbiAgICAgICAgICAgIHByb2Nlc3NpbmdUaW1lciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzc2luZ0RlZmVycmVkICE9PSB1bmRlZmluZWQpIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTplYXJseS1leGl0XG4gICAgICAgICAgICBwcm9jZXNzaW5nRGVmZXJyZWQucmVqZWN0KHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBwcm9jZXNzaW5nRGVmZXJyZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9yaWdpbmFsU2V0ID0gbWFwLnNldC5iaW5kKG1hcCk7XG4gICAgbWFwLnNldCA9IChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChtYXAuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBrZXkgYWxyZWFkeSBleGlzdCwgcmVtb3ZlIGl0IHNvIHdlIGNhbiBhZGQgaXQgYmFjayBhdCB0aGUgZW5kIG9mIHRoZSBtYXAuXG4gICAgICAgICAgICBtYXAuZGVsZXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgYG1hcC5zZXRgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsU2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAvLyBJZiB3ZSBhcmUgYWxyZWFkeSBwcm9jZXNzaW5nIGEga2V5IGFuZCB0aGUga2V5IGFkZGVkIGlzIHRoZSBjdXJyZW50IHByb2Nlc3NlZCBrZXksIHN0b3AgcHJvY2Vzc2luZyBpdFxuICAgICAgICBpZiAocHJvY2Vzc2luZ0tleSAmJiBwcm9jZXNzaW5nS2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWx3YXlzIHJ1biB0aGUgY2xlYW51cCBtZXRob2QgaW4gY2FzZSBpdCB3YXNuJ3Qgc3RhcnRlZCB5ZXRcbiAgICAgICAgY2xlYW51cCgpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBjbGVhbnVwKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICByZXR1cm4gbWFwO1xufVxubW9kdWxlLmV4cG9ydHMgPSBtYXBBZ2VDbGVhbmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG5cdGNvbnN0IHJldCA9IHt9O1xuXG5cdHJldC5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHJldC5yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRyZXQucmVqZWN0ID0gcmVqZWN0O1xuXHR9KTtcblxuXHRyZXR1cm4gcmV0O1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImZ1bmN0aW9uIGNyZWF0ZVBhcnNlcihvblBhcnNlKSB7XG4gIGxldCBpc0ZpcnN0Q2h1bms7XG4gIGxldCBidWZmZXI7XG4gIGxldCBzdGFydGluZ1Bvc2l0aW9uO1xuICBsZXQgc3RhcnRpbmdGaWVsZExlbmd0aDtcbiAgbGV0IGV2ZW50SWQ7XG4gIGxldCBldmVudE5hbWU7XG4gIGxldCBkYXRhO1xuICByZXNldCgpO1xuICByZXR1cm4ge1xuICAgIGZlZWQsXG4gICAgcmVzZXRcbiAgfTtcblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBpc0ZpcnN0Q2h1bmsgPSB0cnVlO1xuICAgIGJ1ZmZlciA9IFwiXCI7XG4gICAgc3RhcnRpbmdQb3NpdGlvbiA9IDA7XG4gICAgc3RhcnRpbmdGaWVsZExlbmd0aCA9IC0xO1xuICAgIGV2ZW50SWQgPSB2b2lkIDA7XG4gICAgZXZlbnROYW1lID0gdm9pZCAwO1xuICAgIGRhdGEgPSBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gZmVlZChjaHVuaykge1xuICAgIGJ1ZmZlciA9IGJ1ZmZlciA/IGJ1ZmZlciArIGNodW5rIDogY2h1bms7XG5cbiAgICBpZiAoaXNGaXJzdENodW5rICYmIGhhc0JvbShidWZmZXIpKSB7XG4gICAgICBidWZmZXIgPSBidWZmZXIuc2xpY2UoQk9NLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgaXNGaXJzdENodW5rID0gZmFsc2U7XG4gICAgY29uc3QgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aDtcbiAgICBsZXQgcG9zaXRpb24gPSAwO1xuICAgIGxldCBkaXNjYXJkVHJhaWxpbmdOZXdsaW5lID0gZmFsc2U7XG5cbiAgICB3aGlsZSAocG9zaXRpb24gPCBsZW5ndGgpIHtcbiAgICAgIGlmIChkaXNjYXJkVHJhaWxpbmdOZXdsaW5lKSB7XG4gICAgICAgIGlmIChidWZmZXJbcG9zaXRpb25dID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgKytwb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc2NhcmRUcmFpbGluZ05ld2xpbmUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbGV0IGxpbmVMZW5ndGggPSAtMTtcbiAgICAgIGxldCBmaWVsZExlbmd0aCA9IHN0YXJ0aW5nRmllbGRMZW5ndGg7XG4gICAgICBsZXQgY2hhcmFjdGVyO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IHN0YXJ0aW5nUG9zaXRpb247IGxpbmVMZW5ndGggPCAwICYmIGluZGV4IDwgbGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICAgIGNoYXJhY3RlciA9IGJ1ZmZlcltpbmRleF07XG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gXCI6XCIgJiYgZmllbGRMZW5ndGggPCAwKSB7XG4gICAgICAgICAgZmllbGRMZW5ndGggPSBpbmRleCAtIHBvc2l0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gXCJcXHJcIikge1xuICAgICAgICAgIGRpc2NhcmRUcmFpbGluZ05ld2xpbmUgPSB0cnVlO1xuICAgICAgICAgIGxpbmVMZW5ndGggPSBpbmRleCAtIHBvc2l0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gXCJcXG5cIikge1xuICAgICAgICAgIGxpbmVMZW5ndGggPSBpbmRleCAtIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsaW5lTGVuZ3RoIDwgMCkge1xuICAgICAgICBzdGFydGluZ1Bvc2l0aW9uID0gbGVuZ3RoIC0gcG9zaXRpb247XG4gICAgICAgIHN0YXJ0aW5nRmllbGRMZW5ndGggPSBmaWVsZExlbmd0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydGluZ1Bvc2l0aW9uID0gMDtcbiAgICAgICAgc3RhcnRpbmdGaWVsZExlbmd0aCA9IC0xO1xuICAgICAgfVxuXG4gICAgICBwYXJzZUV2ZW50U3RyZWFtTGluZShidWZmZXIsIHBvc2l0aW9uLCBmaWVsZExlbmd0aCwgbGluZUxlbmd0aCk7XG4gICAgICBwb3NpdGlvbiArPSBsaW5lTGVuZ3RoICsgMTtcbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPT09IGxlbmd0aCkge1xuICAgICAgYnVmZmVyID0gXCJcIjtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID4gMCkge1xuICAgICAgYnVmZmVyID0gYnVmZmVyLnNsaWNlKHBvc2l0aW9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUV2ZW50U3RyZWFtTGluZShsaW5lQnVmZmVyLCBpbmRleCwgZmllbGRMZW5ndGgsIGxpbmVMZW5ndGgpIHtcbiAgICBpZiAobGluZUxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICBvblBhcnNlKHtcbiAgICAgICAgICB0eXBlOiBcImV2ZW50XCIsXG4gICAgICAgICAgaWQ6IGV2ZW50SWQsXG4gICAgICAgICAgZXZlbnQ6IGV2ZW50TmFtZSB8fCB2b2lkIDAsXG4gICAgICAgICAgZGF0YTogZGF0YS5zbGljZSgwLCAtMSlcbiAgICAgICAgfSk7XG4gICAgICAgIGRhdGEgPSBcIlwiO1xuICAgICAgICBldmVudElkID0gdm9pZCAwO1xuICAgICAgfVxuXG4gICAgICBldmVudE5hbWUgPSB2b2lkIDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9WYWx1ZSA9IGZpZWxkTGVuZ3RoIDwgMDtcbiAgICBjb25zdCBmaWVsZCA9IGxpbmVCdWZmZXIuc2xpY2UoaW5kZXgsIGluZGV4ICsgKG5vVmFsdWUgPyBsaW5lTGVuZ3RoIDogZmllbGRMZW5ndGgpKTtcbiAgICBsZXQgc3RlcCA9IDA7XG5cbiAgICBpZiAobm9WYWx1ZSkge1xuICAgICAgc3RlcCA9IGxpbmVMZW5ndGg7XG4gICAgfSBlbHNlIGlmIChsaW5lQnVmZmVyW2luZGV4ICsgZmllbGRMZW5ndGggKyAxXSA9PT0gXCIgXCIpIHtcbiAgICAgIHN0ZXAgPSBmaWVsZExlbmd0aCArIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ZXAgPSBmaWVsZExlbmd0aCArIDE7XG4gICAgfVxuXG4gICAgY29uc3QgcG9zaXRpb24gPSBpbmRleCArIHN0ZXA7XG4gICAgY29uc3QgdmFsdWVMZW5ndGggPSBsaW5lTGVuZ3RoIC0gc3RlcDtcbiAgICBjb25zdCB2YWx1ZSA9IGxpbmVCdWZmZXIuc2xpY2UocG9zaXRpb24sIHBvc2l0aW9uICsgdmFsdWVMZW5ndGgpLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAoZmllbGQgPT09IFwiZGF0YVwiKSB7XG4gICAgICBkYXRhICs9IHZhbHVlID8gXCJcIi5jb25jYXQodmFsdWUsIFwiXFxuXCIpIDogXCJcXG5cIjtcbiAgICB9IGVsc2UgaWYgKGZpZWxkID09PSBcImV2ZW50XCIpIHtcbiAgICAgIGV2ZW50TmFtZSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoZmllbGQgPT09IFwiaWRcIiAmJiAhdmFsdWUuaW5jbHVkZXMoXCJcXDBcIikpIHtcbiAgICAgIGV2ZW50SWQgPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkID09PSBcInJldHJ5XCIpIHtcbiAgICAgIGNvbnN0IHJldHJ5ID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcblxuICAgICAgaWYgKCFOdW1iZXIuaXNOYU4ocmV0cnkpKSB7XG4gICAgICAgIG9uUGFyc2Uoe1xuICAgICAgICAgIHR5cGU6IFwicmVjb25uZWN0LWludGVydmFsXCIsXG4gICAgICAgICAgdmFsdWU6IHJldHJ5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBCT00gPSBbMjM5LCAxODcsIDE5MV07XG5cbmZ1bmN0aW9uIGhhc0JvbShidWZmZXIpIHtcbiAgcmV0dXJuIEJPTS5ldmVyeSgoY2hhckNvZGUsIGluZGV4KSA9PiBidWZmZXIuY2hhckNvZGVBdChpbmRleCkgPT09IGNoYXJDb2RlKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUGFyc2VyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iLCJpbXBvcnQgRXhwaXJ5TWFwIGZyb20gXCJleHBpcnktbWFwXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgZmV0Y2hTU0UgfSBmcm9tIFwiLi9mZXRjaC1zc2UuanNcIjtcblxubGV0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbmxldCBicm93c2VyTmFtZSA9IHVhLmluZGV4T2YoXCJDaHJvbWVcIikgPiAtMSA/IFwiQ2hyb21lXCIgOiBcIkZpcmVmb3hcIjtcbmxldCBDT1JFID0gYnJvd3Nlck5hbWUgPT09IFwiQ2hyb21lXCIgPyBjaHJvbWUgOiBicm93c2VyO1xuXG5jb25zdCBLRVlfQUNDRVNTX1RPS0VOID0gXCJhY2Nlc3NUb2tlblwiO1xuXG5sZXQgcHJvbXB0ID0gXCJcIjtcbmxldCBhcGlLZXkgPSBcIlwiO1xuQ09SRS5zdG9yYWdlLnN5bmMuZ2V0KFtcInByb21wdFwiLCBcImFwaUtleVwiXSwgZnVuY3Rpb24gKGl0ZW1zKSB7XG4gIGlmIChpdGVtcyAmJiBpdGVtcy5wcm9tcHQpIHtcbiAgICBwcm9tcHQgPSBpdGVtcy5wcm9tcHQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gQ2hvb3NlIGRlZmF1bHQgKGVuKSBwcm9tcHRcbiAgICBwcm9tcHQgPSBcIllvdSBhcmUgYWN0aW5nIGFzIGEgc3VtbWFyaXphdGlvbiBBSSwgYW5kIGZvciB0aGUgaW5wdXQgdGV4dCBwbGVhc2Ugc3VtbWFyaXplIGl0IHRvIHRoZSBtb3N0IGltcG9ydGFudCAzIHRvIDUgYnVsbGV0IHBvaW50cyBmb3IgYnJldml0eTogXCJcbiAgfVxuICBpZiAoaXRlbXMgJiYgaXRlbXMuYXBpS2V5KSB7XG4gICAgYXBpS2V5ID0gaXRlbXMuYXBpS2V5O1xuICB9XG59KTtcblxuY29uc3QgY2FjaGUgPSBuZXcgRXhwaXJ5TWFwKDEwICogMTAwMCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFjY2Vzc1Rva2VuKCkge1xuICBpZiAoY2FjaGUuZ2V0KEtFWV9BQ0NFU1NfVE9LRU4pKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChLRVlfQUNDRVNTX1RPS0VOKTtcbiAgfVxuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2NoYXQub3BlbmFpLmNvbS9hcGkvYXV0aC9zZXNzaW9uXCIpXG4gICAgLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgIC5jYXRjaCgoKSA9PiAoe30pKTtcbiAgaWYgKCFyZXNwLmFjY2Vzc1Rva2VuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVU5BVVRIT1JJWkVEXCIpO1xuICB9XG4gIGNhY2hlLnNldChLRVlfQUNDRVNTX1RPS0VOLCByZXNwLmFjY2Vzc1Rva2VuKTtcbiAgcmV0dXJuIHJlc3AuYWNjZXNzVG9rZW47XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvbnZlcnNhdGlvbklkKCkge1xuICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF3YWl0IGdldEFjY2Vzc1Rva2VuKCk7XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vY2hhdC5vcGVuYWkuY29tL2JhY2tlbmQtYXBpL2NvbnZlcnNhdGlvbnM/b2Zmc2V0PTAmbGltaXQ9MVwiLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICAgfSxcbiAgICB9XG4gIClcbiAgICAudGhlbigocikgPT4gci5qc29uKCkpXG4gICAgLmNhdGNoKCgpID0+ICh7fSkpO1xuICBpZiAocmVzcD8uaXRlbXM/Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiByZXNwLml0ZW1zWzBdLmlkO1xuICB9XG4gIHJldHVybiBcIlwiO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZWxldGVDb252ZXJzYXRpb24oY29udmVyc2F0aW9uSWQpIHtcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbigpO1xuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vY2hhdC5vcGVuYWkuY29tL2JhY2tlbmQtYXBpL2NvbnZlcnNhdGlvbi8ke2NvbnZlcnNhdGlvbklkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlzX3Zpc2libGU6IGZhbHNlIH0pLFxuICAgIH1cbiAgKVxuICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAuY2F0Y2goKCkgPT4gKHt9KSk7XG4gIGlmIChyZXNwPy5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRTdW1tYXJ5KHF1ZXN0aW9uLCBjYWxsYmFjaykge1xuICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF3YWl0IGdldEFjY2Vzc1Rva2VuKCk7XG4gIGNvbnN0IG1lc3NhZ2VKc29uID0ge1xuICAgIGFjdGlvbjogXCJuZXh0XCIsXG4gICAgbWVzc2FnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICByb2xlOiBcInVzZXJcIixcbiAgICAgICAgfSxcbiAgICAgICAgcm9sZTogXCJ1c2VyXCIsXG4gICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICBjb250ZW50X3R5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIHBhcnRzOiBbcXVlc3Rpb25dLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDItcmVuZGVyXCIsXG4gICAgcGFyZW50X21lc3NhZ2VfaWQ6IHV1aWR2NCgpLFxuICB9O1xuICBhd2FpdCBmZXRjaFNTRShcImh0dHBzOi8vY2hhdC5vcGVuYWkuY29tL2JhY2tlbmQtYXBpL2NvbnZlcnNhdGlvblwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkobWVzc2FnZUpzb24pLFxuICAgIG9uTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICBpZiAobWVzc2FnZSA9PT0gXCJbRE9ORV1cIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRhdGEubWVzc2FnZT8uY29udGVudD8ucGFydHM/LlswXTtcbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICBjYWxsYmFjayh0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3NlIG1lc3NhZ2VcIiwgbWVzc2FnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBpbiBvbk1lc3NhZ2U6ICR7ZXJyfWApO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25FcnJvcihlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBpbiBmZXRjaFNTRTogJHtlcnJ9YCk7XG4gICAgfSxcbiAgfSk7XG59XG5cbmxldCBwcmV2ZW50SW5zdGFuY2UgPSB7fTtcbmZ1bmN0aW9uIGV4ZWN1dGVTY3JpcHRzKHRhYikge1xuICBjb25zdCB0YWJJZCA9IHRhYi5pZDtcbiAgLy8gcmV0dXJuIGlmIHdlJ3ZlIGFscmVhZHkgY3JlYXRlZCB0aGUgc3VtbWFyeSBmb3IgdGhpcyB3ZWJzaXRlXG4gIGlmIChwcmV2ZW50SW5zdGFuY2VbdGFiSWRdKSByZXR1cm47XG5cbiAgcHJldmVudEluc3RhbmNlW3RhYklkXSA9IHRydWU7XG4gIHNldFRpbWVvdXQoKCkgPT4gZGVsZXRlIHByZXZlbnRJbnN0YW5jZVt0YWJJZF0sIDEwMDAwKTtcblxuICAvLyBBZGQgYSBiYWRnZSB0byBzaWduaWZ5IHRoZSBleHRlbnNpb24gaXMgaW4gdXNlXG4gIENPUkUuYWN0aW9uLnNldEJhZGdlQmFja2dyb3VuZENvbG9yKHsgY29sb3I6IFsyNDIsIDM4LCAxOSwgMjMwXSB9KTtcbiAgQ09SRS5hY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogXCJHUFRcIiB9KTtcblxuICBDT1JFLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICBmaWxlczogW1wiY29udGVudC5idW5kbGUuanNcIl0sXG4gIH0pO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIENPUkUuYWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6IFwiXCIgfSk7XG4gIH0sIDEwMDApO1xufVxuXG4vLyBMb2FkIG9uIGNsaWNraW5nIHRoZSBleHRlbnNpb24gaWNvblxuQ09SRS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKGFzeW5jICguLi5hcmdzKSA9PiB7XG4gIGxldCB0YWIgPSBhcmdzWzBdO1xuICAvLyBBZGQgcmVxdWVzdCBwZXJtaXNzaW9uIGZvciBcImh0dHBzOi8vKi5vcGVuYWkuY29tL1wiXG4gIC8vIFdpdGhvdXQgdGhpcyByZXF1ZXN0IHBlcm1pc3Npb24sIFVzZXIgc2hvdWxkIGVuYWJsZSBvcHRpb25hbCBwZXJtaXNzaW9uIGZvciBcImh0dHBzOi8vKi5vcGVuYWkuY29tL1wiXG4gIGlmKGJyb3dzZXJOYW1lID09PSBcIkZpcmVmb3hcIikge1xuICAgIENPUkUucGVybWlzc2lvbnMucmVxdWVzdCh7XG4gICAgICBvcmlnaW5zOiBbXCJodHRwczovLyoub3BlbmFpLmNvbS9cIl0sXG4gICAgfSk7XG4gIH1cbiAgZXhlY3V0ZVNjcmlwdHMoLi4uYXJncyk7XG59KTtcblxuLy8gTGlzdGVuIGZvciBtZXNzYWdlc1xuQ09SRS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcigocG9ydCkgPT4ge1xuICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmRlYnVnKFwicmVjZWl2ZWQgbXNnIFwiLCByZXF1ZXN0LmNvbnRlbnQpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBtYXhMZW5ndGggPSAzMDAwO1xuICAgICAgY29uc3QgdGV4dCA9IHJlcXVlc3QuY29udGVudDtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1RleHQ6JywgdGV4dClcbiAgICAgIGNvbnN0IGNodW5rcyA9IHNwbGl0VGV4dEludG9DaHVua3ModGV4dCwgbWF4TGVuZ3RoKTtcblxuICAgICAgbGV0IGN1cnJlbnRTdW1tYXJ5ID0gXCJcIjtcbiAgICAgIGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XG4gICAgICAgIGNvbnN0IGdwdFF1ZXN0aW9uID0gcHJvbXB0ICsgYFxcblxcbiR7Y2h1bmt9YDtcbiAgICAgICAgbGV0IGN1cnJlbnRBbnN3ZXIgPSBcIlwiO1xuICAgICAgICBhd2FpdCBnZXRTdW1tYXJ5KGdwdFF1ZXN0aW9uLCAoYW5zd2VyKSA9PiB7XG4gICAgICAgICAgY3VycmVudEFuc3dlciA9IGFuc3dlcjtcbiAgICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGFuc3dlcjogY29tYmluZVN1bW1hcmllcyhbY3VycmVudFN1bW1hcnksIGFuc3dlcl0pLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgZGVsZXRlQ29udmVyc2F0aW9uKGF3YWl0IGdldENvbnZlcnNhdGlvbklkKCkpO1xuICAgICAgICBjdXJyZW50U3VtbWFyeSA9XG4gICAgICAgICAgY29tYmluZVN1bW1hcmllcyhbY3VycmVudFN1bW1hcnksIGN1cnJlbnRBbnN3ZXJdKSArIFwiXFxuXFxuXCI7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICBwb3J0LnBvc3RNZXNzYWdlKHsgZXJyb3I6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgY2FjaGUuZGVsZXRlKEtFWV9BQ0NFU1NfVE9LRU4pO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gc3BsaXRUZXh0SW50b0NodW5rcyh0ZXh0LCBtYXhMZW5ndGgpIHtcbiAgY29uc3QgY2h1bmtzID0gW107XG4gIGNvbnN0IHdvcmRzID0gdGV4dC5zcGxpdCgvXFxzKy8pO1xuICBsZXQgY3VycmVudENodW5rID0gXCJcIjtcblxuICBmb3IgKGNvbnN0IHdvcmQgb2Ygd29yZHMpIHtcbiAgICBpZiAoY3VycmVudENodW5rLmxlbmd0aCArIHdvcmQubGVuZ3RoICsgMSA8PSBtYXhMZW5ndGgpIHtcbiAgICAgIGN1cnJlbnRDaHVuayArPSAoY3VycmVudENodW5rID8gXCIgXCIgOiBcIlwiKSArIHdvcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNodW5rcy5wdXNoKGN1cnJlbnRDaHVuayk7XG4gICAgICBjdXJyZW50Q2h1bmsgPSB3b3JkO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjdXJyZW50Q2h1bmspIHtcbiAgICBjaHVua3MucHVzaChjdXJyZW50Q2h1bmspO1xuICB9XG5cbiAgcmV0dXJuIGNodW5rcztcbn1cblxuZnVuY3Rpb24gY29tYmluZVN1bW1hcmllcyhzdW1tYXJpZXMpIHtcbiAgbGV0IGNvbWJpbmVkU3VtbWFyeSA9IFwiXCI7XG4gIGZvciAoY29uc3Qgc3VtbWFyeSBvZiBzdW1tYXJpZXMpIHtcbiAgICBjb21iaW5lZFN1bW1hcnkgKz0gKGNvbWJpbmVkU3VtbWFyeSA/IFwiIFwiIDogXCJcIikgKyBzdW1tYXJ5O1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkU3VtbWFyeTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZVBhcnNlciB9IGZyb20gXCJldmVudHNvdXJjZS1wYXJzZXJcIjtcbmltcG9ydCB7IHN0cmVhbUFzeW5jSXRlcmFibGUgfSBmcm9tIFwiLi9zdHJlYW0tYXN5bmMtaXRlcmFibGUuanNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoU1NFKHJlc291cmNlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgb25NZXNzYWdlLCBvbkVycm9yLCAuLi5mZXRjaE9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChyZXNvdXJjZSwgZmV0Y2hPcHRpb25zKS5jYXRjaCgoZXJyKSA9PiBvbkVycm9yKGVycikpO1xuICBjb25zdCBwYXJzZXIgPSBjcmVhdGVQYXJzZXIoKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiZXZlbnRcIikge1xuICAgICAgb25NZXNzYWdlKGV2ZW50LmRhdGEpO1xuICAgIH1cbiAgfSk7XG4gIGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2Ygc3RyZWFtQXN5bmNJdGVyYWJsZShyZXNwLmJvZHkpKSB7XG4gICAgY29uc3Qgc3RyID0gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKGNodW5rKTtcbiAgICBwYXJzZXIuZmVlZChzdHIpO1xuICB9XG59XG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24qIHN0cmVhbUFzeW5jSXRlcmFibGUoc3RyZWFtKSB7XG4gIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgdHJ5IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgIGlmIChkb25lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHlpZWxkIHZhbHVlO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWFkZXIucmVsZWFzZUxvY2soKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1hcEFnZUNsZWFuZXIiLCJFeHBpcnlNYXAiLCJjb25zdHJ1Y3RvciIsIm1heEFnZSIsImRhdGEiLCJ0aGlzIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJNYXAiLCJrZXkiLCJ2YWx1ZSIsInNldCIsInNpemUiLCJjbGVhciIsImRlbGV0ZSIsImhhcyIsImdldCIsIkRhdGUiLCJub3ciLCJ2YWx1ZXMiLCJjcmVhdGVJdGVyYXRvciIsIml0ZW0iLCJrZXlzIiwiZW50cmllcyIsImZvckVhY2giLCJjYWxsYmFja2ZuIiwidGhpc0FyZyIsImFwcGx5IiwiaXRlcmF0b3IiLCJwcm9qZWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsInBEZWZlciIsIm1hcCIsInByb3BlcnR5IiwicHJvY2Vzc2luZ0tleSIsInByb2Nlc3NpbmdUaW1lciIsInByb2Nlc3NpbmdEZWZlcnJlZCIsImNsZWFudXAiLCJhc3luYyIsInVuZGVmaW5lZCIsInNldHVwVGltZXIiLCJkZWxheSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidW5yZWYiLCJwcm9taXNlIiwiZW50cnkiLCJfYSIsIm9yaWdpbmFsU2V0IiwiYmluZCIsInJlc3VsdCIsImNsZWFyVGltZW91dCIsInJlamVjdCIsInJldCIsIlByb21pc2UiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInJhbmRvbVVVSUQiLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJybmRzOCIsIlVpbnQ4QXJyYXkiLCJybmciLCJFcnJvciIsImJ5dGVUb0hleCIsImkiLCJwdXNoIiwidG9TdHJpbmciLCJzbGljZSIsIm9wdGlvbnMiLCJidWYiLCJvZmZzZXQiLCJybmRzIiwicmFuZG9tIiwiYXJyIiwidG9Mb3dlckNhc2UiLCJ1bnNhZmVTdHJpbmdpZnkiLCJCT00iLCJicm93c2VyTmFtZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJDT1JFIiwiY2hyb21lIiwiYnJvd3NlciIsIktFWV9BQ0NFU1NfVE9LRU4iLCJwcm9tcHQiLCJhcGlLZXkiLCJzdG9yYWdlIiwic3luYyIsIml0ZW1zIiwiY2FjaGUiLCJnZXRBY2Nlc3NUb2tlbiIsInJlc3AiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsImNhdGNoIiwiYWNjZXNzVG9rZW4iLCJnZXRDb252ZXJzYXRpb25JZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibGVuZ3RoIiwiaWQiLCJkZWxldGVDb252ZXJzYXRpb24iLCJjb252ZXJzYXRpb25JZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaXNfdmlzaWJsZSIsInN1Y2Nlc3MiLCJnZXRTdW1tYXJ5IiwicXVlc3Rpb24iLCJjYWxsYmFjayIsIm1lc3NhZ2VKc29uIiwiYWN0aW9uIiwibWVzc2FnZXMiLCJ1dWlkdjQiLCJhdXRob3IiLCJyb2xlIiwiY29udGVudCIsImNvbnRlbnRfdHlwZSIsInBhcnRzIiwibW9kZWwiLCJwYXJlbnRfbWVzc2FnZV9pZCIsInJlc291cmNlIiwib25NZXNzYWdlIiwib25FcnJvciIsImZldGNoT3B0aW9ucyIsImVyciIsInBhcnNlciIsIm9uUGFyc2UiLCJpc0ZpcnN0Q2h1bmsiLCJidWZmZXIiLCJzdGFydGluZ1Bvc2l0aW9uIiwic3RhcnRpbmdGaWVsZExlbmd0aCIsImV2ZW50SWQiLCJldmVudE5hbWUiLCJyZXNldCIsImZlZWQiLCJjaHVuayIsImV2ZXJ5IiwiY2hhckNvZGUiLCJpbmRleCIsImNoYXJDb2RlQXQiLCJoYXNCb20iLCJwb3NpdGlvbiIsImRpc2NhcmRUcmFpbGluZ05ld2xpbmUiLCJjaGFyYWN0ZXIiLCJsaW5lTGVuZ3RoIiwiZmllbGRMZW5ndGgiLCJwYXJzZUV2ZW50U3RyZWFtTGluZSIsImxpbmVCdWZmZXIiLCJ0eXBlIiwiZXZlbnQiLCJub1ZhbHVlIiwiZmllbGQiLCJzdGVwIiwidmFsdWVMZW5ndGgiLCJjb25jYXQiLCJpbmNsdWRlcyIsInJldHJ5IiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc05hTiIsImNyZWF0ZVBhcnNlciIsInN0cmVhbSIsInJlYWRlciIsImdldFJlYWRlciIsImRvbmUiLCJyZWFkIiwicmVsZWFzZUxvY2siLCJzdHJlYW1Bc3luY0l0ZXJhYmxlIiwic3RyIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJmZXRjaFNTRSIsIm1lc3NhZ2UiLCJwYXJzZSIsInRleHQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudEluc3RhbmNlIiwiY29tYmluZVN1bW1hcmllcyIsInN1bW1hcmllcyIsImNvbWJpbmVkU3VtbWFyeSIsInN1bW1hcnkiLCJvbkNsaWNrZWQiLCJhZGRMaXN0ZW5lciIsImFyZ3MiLCJwZXJtaXNzaW9ucyIsInJlcXVlc3QiLCJvcmlnaW5zIiwidGFiIiwidGFiSWQiLCJzZXRCYWRnZUJhY2tncm91bmRDb2xvciIsImNvbG9yIiwic2V0QmFkZ2VUZXh0Iiwic2NyaXB0aW5nIiwiZXhlY3V0ZVNjcmlwdCIsInRhcmdldCIsImZpbGVzIiwiZXhlY3V0ZVNjcmlwdHMiLCJydW50aW1lIiwib25Db25uZWN0IiwicG9ydCIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImRlYnVnIiwibWF4TGVuZ3RoIiwiY2h1bmtzIiwid29yZHMiLCJzcGxpdCIsImN1cnJlbnRDaHVuayIsIndvcmQiLCJzcGxpdFRleHRJbnRvQ2h1bmtzIiwiY3VycmVudFN1bW1hcnkiLCJncHRRdWVzdGlvbiIsImN1cnJlbnRBbnN3ZXIiLCJhbnN3ZXIiLCJwb3N0TWVzc2FnZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==
