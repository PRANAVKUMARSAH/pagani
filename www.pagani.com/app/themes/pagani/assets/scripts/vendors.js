! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = "length" in t && t.length,
            i = J.type(t);
        return "function" !== i && !J.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }

    function n(t, e, i) {
        if (J.isFunction(e)) return J.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return J.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (at.test(e)) return J.filter(e, t, i);
            e = J.filter(e, t)
        }
        return J.grep(t, function(t) {
            return Y.call(e, t) >= 0 !== i
        })
    }

    function o(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function r(t) {
        var e = ft[t] = {};
        return J.each(t.match(dt) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function s() {
        Q.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), J.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = J.expando + a.uid++
    }

    function l(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(bt, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : gt.test(i) ? J.parseJSON(i) : i)
                } catch (o) {}
                vt.set(t, e, i)
            } else i = void 0;
        return i
    }

    function c() {
        return !0
    }

    function u() {
        return !1
    }

    function h() {
        try {
            return Q.activeElement
        } catch (t) {}
    }

    function p(t, e) {
        return J.nodeName(t, "table") && J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function d(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function f(t) {
        var e = Nt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function m(t, e) {
        for (var i = 0, n = t.length; i < n; i++) yt.set(t[i], "globalEval", !e || yt.get(e[i], "globalEval"))
    }

    function T(t, e) {
        var i, n, o, r, s, a, l, c;
        if (1 === e.nodeType) {
            if (yt.hasData(t) && (r = yt.access(t), s = yt.set(e, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c)
                    for (i = 0, n = c[o].length; i < n; i++) J.event.add(e, o, c[o][i])
            }
            vt.hasData(t) && (a = vt.access(t), l = J.extend({}, a), vt.set(e, l))
        }
    }

    function y(t, e) {
        var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && J.nodeName(t, e) ? J.merge([t], i) : i
    }

    function v(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && xt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }

    function g(e, i) {
        var n, o = J(i.createElement(e)).appendTo(i.body),
            r = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(o[0])) ? n.display : J.css(o[0], "display");
        return o.detach(), r
    }

    function b(t) {
        var e = Q,
            i = Rt[t];
        return i || (i = g(t, e), "none" !== i && i || (Xt = (Xt || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Xt[0].contentDocument, e.write(), e.close(), i = g(t, e), Xt.detach()), Rt[t] = i), i
    }

    function S(t, e, i) {
        var n, o, r, s, a = t.style;
        return i = i || Wt(t), i && (s = i.getPropertyValue(e) || i[e]), i && ("" !== s || J.contains(t.ownerDocument, t) || (s = J.style(t, e)), Vt.test(s) && $t.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function w(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function A(t, e) {
        if (e in t) return e;
        for (var i = e[0].toUpperCase() + e.slice(1), n = e, o = _t.length; o--;)
            if (e = _t[o] + i, e in t) return e;
        return n
    }

    function x(t, e, i) {
        var n = qt.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function P(t, e, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; r < 4; r += 2) "margin" === i && (s += J.css(t, i + wt[r], !0, o)), n ? ("content" === i && (s -= J.css(t, "padding" + wt[r], !0, o)), "margin" !== i && (s -= J.css(t, "border" + wt[r] + "Width", !0, o))) : (s += J.css(t, "padding" + wt[r], !0, o), "padding" !== i && (s += J.css(t, "border" + wt[r] + "Width", !0, o)));
        return s
    }

    function M(t, e, i) {
        var n = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = Wt(t),
            s = "border-box" === J.css(t, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (o = S(t, e, r), (o < 0 || null == o) && (o = t.style[e]), Vt.test(o)) return o;
            n = s && (K.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + P(t, e, i || (s ? "border" : "content"), n, r) + "px"
    }

    function C(t, e) {
        for (var i, n, o, r = [], s = 0, a = t.length; s < a; s++) n = t[s], n.style && (r[s] = yt.get(n, "olddisplay"), i = n.style.display, e ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && At(n) && (r[s] = yt.access(n, "olddisplay", b(n.nodeName)))) : (o = At(n), "none" === i && o || yt.set(n, "olddisplay", o ? i : J.css(n, "display"))));
        for (s = 0; s < a; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
        return t
    }

    function E(t, e, i, n, o) {
        return new E.prototype.init(t, e, i, n, o)
    }

    function k() {
        return setTimeout(function() {
            Kt = void 0
        }), Kt = J.now()
    }

    function G(t, e) {
        var i, n = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) i = wt[n], o["margin" + i] = o["padding" + i] = t;
        return e && (o.opacity = o.width = t), o
    }

    function H(t, e, i) {
        for (var n, o = (ie[e] || []).concat(ie["*"]), r = 0, s = o.length; r < s; r++)
            if (n = o[r].call(i, e, t)) return n
    }

    function D(t, e, i) {
        var n, o, r, s, a, l, c, u, h = this,
            p = {},
            d = t.style,
            f = t.nodeType && At(t),
            m = yt.get(t, "fxshow");
        i.queue || (a = J._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, J.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], c = J.css(t, "display"), u = "none" === c ? yt.get(t, "olddisplay") || b(t.nodeName) : c, "inline" === u && "none" === J.css(t, "float") && (d.display = "inline-block")), i.overflow && (d.overflow = "hidden", h.always(function() {
            d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (o = e[n], Zt.exec(o)) {
                if (delete e[n], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[n]) continue;
                    f = !0
                }
                p[n] = m && m[n] || J.style(t, n)
            } else c = void 0;
        if (J.isEmptyObject(p)) "inline" === ("none" === c ? b(t.nodeName) : c) && (d.display = c);
        else {
            m ? "hidden" in m && (f = m.hidden) : m = yt.access(t, "fxshow", {}), r && (m.hidden = !f), f ? J(t).show() : h.done(function() {
                J(t).hide()
            }), h.done(function() {
                var e;
                yt.remove(t, "fxshow");
                for (e in p) J.style(t, e, p[e])
            });
            for (n in p) s = H(f ? m[n] : 0, n, h), n in m || (m[n] = s.start, f && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function B(t, e) {
        var i, n, o, r, s;
        for (i in t)
            if (n = J.camelCase(i), o = e[n], r = t[i], J.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), s = J.cssHooks[n], s && "expand" in s) {
                r = s.expand(r), delete t[n];
                for (i in r) i in t || (t[i] = r[i], e[i] = o)
            } else e[n] = o
    }

    function I(t, e, i) {
        var n, o, r = 0,
            s = ee.length,
            a = J.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = Kt || k(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, r = 1 - n, s = 0, l = c.tweens.length; s < l; s++) c.tweens[s].run(r);
                return a.notifyWith(t, [c, r, i]), r < 1 && l ? i : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: J.extend({}, e),
                opts: J.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Kt || k(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = J.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i < n; i++) c.tweens[i].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (B(u, c.opts.specialEasing); r < s; r++)
            if (n = ee[r].call(c, t, u, c.opts)) return n;
        return J.map(u, H, c), J.isFunction(c.opts.start) && c.opts.start.call(t, c), J.fx.timer(J.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function L(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, o = 0,
                r = e.toLowerCase().match(dt) || [];
            if (J.isFunction(i))
                for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function N(t, e, i, n) {
        function o(a) {
            var l;
            return r[a] = !0, J.each(t[a] || [], function(t, a) {
                var c = a(e, i, n);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            s = t === ge;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function O(t, e) {
        var i, n, o = J.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && J.extend(!0, t, n), t
    }

    function F(t, e, i) {
        for (var n, o, r, s, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (o in a)
                if (a[o] && a[o].test(n)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in i) r = l[0];
        else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r) return r !== l[0] && l.unshift(r), i[r]
    }

    function X(t, e, i, n) {
        var o, r, s, a, l, c = {},
            u = t.dataTypes.slice();
        if (u[1])
            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (r = u.shift(); r;)
            if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = c[l + " " + r] || c["* " + r], !s)
                for (o in c)
                    if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: s ? h : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function R(t, e, i, n) {
        var o;
        if (J.isArray(e)) J.each(e, function(e, o) {
            i || xe.test(t) ? n(t, o) : R(t + "[" + ("object" == typeof o ? e : "") + "]", o, i, n)
        });
        else if (i || "object" !== J.type(e)) n(t, e);
        else
            for (o in e) R(t + "[" + o + "]", e[o], i, n)
    }

    function $(t) {
        return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var V = [],
        W = V.slice,
        j = V.concat,
        q = V.push,
        Y = V.indexOf,
        z = {},
        U = z.toString,
        _ = z.hasOwnProperty,
        K = {},
        Q = t.document,
        Z = "2.1.4",
        J = function(t, e) {
            return new J.fn.init(t, e)
        },
        tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        et = /^-ms-/,
        it = /-([\da-z])/gi,
        nt = function(t, e) {
            return e.toUpperCase()
        };
    J.fn = J.prototype = {
        jquery: Z,
        constructor: J,
        selector: "",
        length: 0,
        toArray: function() {
            return W.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : W.call(this)
        },
        pushStack: function(t) {
            var e = J.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return J.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(J.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(W.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: q,
        sort: V.sort,
        splice: V.splice
    }, J.extend = J.fn.extend = function() {
        var t, e, i, n, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || J.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = s[e], n = t[e], s !== n && (c && n && (J.isPlainObject(n) || (o = J.isArray(n))) ? (o ? (o = !1, r = i && J.isArray(i) ? i : []) : r = i && J.isPlainObject(i) ? i : {}, s[e] = J.extend(c, r, n)) : void 0 !== n && (s[e] = n));
        return s
    }, J.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === J.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !J.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" === J.type(t) && !t.nodeType && !J.isWindow(t) && !(t.constructor && !_.call(t.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? z[U.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, i = eval;
            t = J.trim(t), t && (1 === t.indexOf("use strict") ? (e = Q.createElement("script"), e.text = t, Q.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) {
            return t.replace(et, "ms-").replace(it, nt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var o, r = 0,
                s = t.length,
                a = i(t);
            if (n) {
                if (a)
                    for (; r < s && (o = e.apply(t[r], n), o !== !1); r++);
                else
                    for (r in t)
                        if (o = e.apply(t[r], n), o === !1) break
            } else if (a)
                for (; r < s && (o = e.call(t[r], r, t[r]), o !== !1); r++);
            else
                for (r in t)
                    if (o = e.call(t[r], r, t[r]), o === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(tt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? J.merge(n, "string" == typeof t ? [t] : t) : q.call(n, t)), n
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : Y.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
            return t.length = o, t
        },
        grep: function(t, e, i) {
            for (var n, o = [], r = 0, s = t.length, a = !i; r < s; r++) n = !e(t[r], r), n !== a && o.push(t[r]);
            return o
        },
        map: function(t, e, n) {
            var o, r = 0,
                s = t.length,
                a = i(t),
                l = [];
            if (a)
                for (; r < s; r++) o = e(t[r], r, n), null != o && l.push(o);
            else
                for (r in t) o = e(t[r], r, n), null != o && l.push(o);
            return j.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, o;
            if ("string" == typeof e && (i = t[e], e = t, t = i), J.isFunction(t)) return n = W.call(arguments, 2), o = function() {
                return t.apply(e || this, n.concat(W.call(arguments)))
            }, o.guid = t.guid = t.guid || J.guid++, o
        },
        now: Date.now,
        support: K
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        z["[object " + e + "]"] = e.toLowerCase()
    });
    var ot = function(t) {
        function e(t, e, i, n) {
            var o, r, s, a, l, c, h, d, f, m;
            if ((e ? e.ownerDocument || e : R) !== D && H(e), e = e || D, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
            if (!n && I) {
                if (11 !== a && (o = vt.exec(t)))
                    if (s = o[1]) {
                        if (9 === a) {
                            if (r = e.getElementById(s), !r || !r.parentNode) return i;
                            if (r.id === s) return i.push(r), i
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && F(e, r) && r.id === s) return i.push(r), i
                    } else {
                        if (o[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = o[3]) && S.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(s)), i
                    }
                if (S.qsa && (!L || !L.test(t))) {
                    if (d = h = X, f = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (c = P(t), (h = e.getAttribute("id")) ? d = h.replace(bt, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + p(c[l]);
                        f = gt.test(t) && u(e.parentNode) || e, m = c.join(",")
                    }
                    if (m) try {
                        return Z.apply(i, f.querySelectorAll(m)), i
                    } catch (T) {} finally {
                        h || e.removeAttribute("id")
                    }
                }
            }
            return C(t.replace(lt, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > w.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[X] = !0, t
        }

        function o(t) {
            var e = D.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) w.attrHandle[i[n]] = e
        }

        function s(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || z) - (~t.sourceIndex || z);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function c(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function u(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function h() {}

        function p(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function d(t, e, i) {
            var n = e.dir,
                o = i && "parentNode" === n,
                r = V++;
            return e.first ? function(e, i, r) {
                for (; e = e[n];)
                    if (1 === e.nodeType || o) return t(e, i, r)
            } : function(e, i, s) {
                var a, l, c = [$, r];
                if (s) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || o) && t(e, i, s)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || o) {
                            if (l = e[X] || (e[X] = {}), (a = l[n]) && a[0] === $ && a[1] === r) return c[2] = a[2];
                            if (l[n] = c, c[2] = t(e, i, s)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var o = t.length; o--;)
                    if (!t[o](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function m(t, i, n) {
            for (var o = 0, r = i.length; o < r; o++) e(t, i[o], n);
            return n
        }

        function T(t, e, i, n, o) {
            for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(r = t[a]) && (i && !i(r, n, o) || (s.push(r), c && e.push(a)));
            return s
        }

        function y(t, e, i, o, r, s) {
            return o && !o[X] && (o = y(o)), r && !r[X] && (r = y(r, s)), n(function(n, s, a, l) {
                var c, u, h, p = [],
                    d = [],
                    f = s.length,
                    y = n || m(e || "*", a.nodeType ? [a] : a, []),
                    v = !t || !n && e ? y : T(y, p, t, a, l),
                    g = i ? r || (n ? t : f || o) ? [] : s : v;
                if (i && i(v, g, a, l), o)
                    for (c = T(g, d), o(c, [], a, l), u = c.length; u--;)(h = c[u]) && (g[d[u]] = !(v[d[u]] = h));
                if (n) {
                    if (r || t) {
                        if (r) {
                            for (c = [], u = g.length; u--;)(h = g[u]) && c.push(v[u] = h);
                            r(null, g = [], c, l)
                        }
                        for (u = g.length; u--;)(h = g[u]) && (c = r ? tt(n, h) : p[u]) > -1 && (n[c] = !(s[c] = h))
                    }
                } else g = T(g === s ? g.splice(f, g.length) : g), r ? r(null, s, g, l) : Z.apply(s, g)
            })
        }

        function v(t) {
            for (var e, i, n, o = t.length, r = w.relative[t[0].type], s = r || w.relative[" "], a = r ? 1 : 0, l = d(function(t) {
                    return t === e
                }, s, !0), c = d(function(t) {
                    return tt(e, t) > -1
                }, s, !0), u = [function(t, i, n) {
                    var o = !r && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                    return e = null, o
                }]; a < o; a++)
                if (i = w.relative[t[a].type]) u = [d(f(u), i)];
                else {
                    if (i = w.filter[t[a].type].apply(null, t[a].matches), i[X]) {
                        for (n = ++a; n < o && !w.relative[t[n].type]; n++);
                        return y(a > 1 && f(u), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(lt, "$1"), i, a < n && v(t.slice(a, n)), n < o && v(t = t.slice(n)), n < o && p(t))
                    }
                    u.push(i)
                }
            return f(u)
        }

        function g(t, i) {
            var o = i.length > 0,
                r = t.length > 0,
                s = function(n, s, a, l, c) {
                    var u, h, p, d = 0,
                        f = "0",
                        m = n && [],
                        y = [],
                        v = E,
                        g = n || r && w.find.TAG("*", c),
                        b = $ += null == v ? 1 : Math.random() || .1,
                        S = g.length;
                    for (c && (E = s !== D && s); f !== S && null != (u = g[f]); f++) {
                        if (r && u) {
                            for (h = 0; p = t[h++];)
                                if (p(u, s, a)) {
                                    l.push(u);
                                    break
                                }
                            c && ($ = b)
                        }
                        o && ((u = !p && u) && d--, n && m.push(u))
                    }
                    if (d += f, o && f !== d) {
                        for (h = 0; p = i[h++];) p(m, y, s, a);
                        if (n) {
                            if (d > 0)
                                for (; f--;) m[f] || y[f] || (y[f] = K.call(l));
                            y = T(y)
                        }
                        Z.apply(l, y), c && !n && y.length > 0 && d + i.length > 1 && e.uniqueSort(l)
                    }
                    return c && ($ = b, E = v), m
                };
            return o ? n(s) : s
        }
        var b, S, w, A, x, P, M, C, E, k, G, H, D, B, I, L, N, O, F, X = "sizzle" + 1 * new Date,
            R = t.document,
            $ = 0,
            V = 0,
            W = i(),
            j = i(),
            q = i(),
            Y = function(t, e) {
                return t === e && (G = !0), 0
            },
            z = 1 << 31,
            U = {}.hasOwnProperty,
            _ = [],
            K = _.pop,
            Q = _.push,
            Z = _.push,
            J = _.slice,
            tt = function(t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e) return i;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = nt.replace("w", "w#"),
            rt = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + it + "*\\]",
            st = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            at = new RegExp(it + "+", "g"),
            lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            ct = new RegExp("^" + it + "*," + it + "*"),
            ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            pt = new RegExp(st),
            dt = new RegExp("^" + ot + "$"),
            ft = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            mt = /^(?:input|select|textarea|button)$/i,
            Tt = /^h\d$/i,
            yt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            gt = /[+~]/,
            bt = /'|\\/g,
            St = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            wt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            At = function() {
                H()
            };
        try {
            Z.apply(_ = J.call(R.childNodes), R.childNodes), _[R.childNodes.length].nodeType
        } catch (xt) {
            Z = {
                apply: _.length ? function(t, e) {
                    Q.apply(t, J.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        S = e.support = {}, x = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, H = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : R;
            return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, B = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", At, !1) : i.attachEvent && i.attachEvent("onunload", At)), I = !x(n), S.attributes = o(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), S.getElementsByTagName = o(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), S.getElementsByClassName = yt.test(n.getElementsByClassName), S.getById = o(function(t) {
                return B.appendChild(t).id = X, !n.getElementsByName || !n.getElementsByName(X).length
            }), S.getById ? (w.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && I) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, w.filter.ID = function(t) {
                var e = t.replace(St, wt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete w.find.ID, w.filter.ID = function(t) {
                var e = t.replace(St, wt);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), w.find.TAG = S.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : S.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }, w.find.CLASS = S.getElementsByClassName && function(t, e) {
                if (I) return e.getElementsByClassName(t)
            }, N = [], L = [], (S.qsa = yt.test(n.querySelectorAll)) && (o(function(t) {
                B.appendChild(t).innerHTML = "<a id='" + X + "'></a><select id='" + X + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + X + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + X + "+*").length || L.push(".#.+[+~]")
            }), o(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
            })), (S.matchesSelector = yt.test(O = B.matches || B.webkitMatchesSelector || B.mozMatchesSelector || B.oMatchesSelector || B.msMatchesSelector)) && o(function(t) {
                S.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), N.push("!=", st)
            }), L = L.length && new RegExp(L.join("|")), N = N.length && new RegExp(N.join("|")), e = yt.test(B.compareDocumentPosition), F = e || yt.test(B.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, Y = e ? function(t, e) {
                if (t === e) return G = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !S.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === R && F(R, t) ? -1 : e === n || e.ownerDocument === R && F(R, e) ? 1 : k ? tt(k, t) - tt(k, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return G = !0, 0;
                var i, o = 0,
                    r = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    c = [e];
                if (!r || !a) return t === n ? -1 : e === n ? 1 : r ? -1 : a ? 1 : k ? tt(k, t) - tt(k, e) : 0;
                if (r === a) return s(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) c.unshift(i);
                for (; l[o] === c[o];) o++;
                return o ? s(l[o], c[o]) : l[o] === R ? -1 : c[o] === R ? 1 : 0
            }, n) : D
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== D && H(t), i = i.replace(ht, "='$1']"), S.matchesSelector && I && (!N || !N.test(i)) && (!L || !L.test(i))) try {
                var n = O.call(t, i);
                if (n || S.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (o) {}
            return e(i, D, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== D && H(t), F(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== D && H(t);
            var i = w.attrHandle[e.toLowerCase()],
                n = i && U.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !I) : void 0;
            return void 0 !== n ? n : S.attributes || !I ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                o = 0;
            if (G = !S.detectDuplicates, k = !S.sortStable && t.slice(0), t.sort(Y), G) {
                for (; e = t[o++];) e === t[o] && (n = i.push(o));
                for (; n--;) t.splice(i[n], 1)
            }
            return k = null, t
        }, A = e.getText = function(t) {
            var e, i = "",
                n = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += A(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else
                for (; e = t[n++];) i += A(e);
            return i
        }, w = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(St, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(St, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && pt.test(i) && (e = P(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(St, wt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && W(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === i : !i || (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(at, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, i, n, o) {
                    var r = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === o ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var c, u, h, p, d, f, m = r !== s ? "nextSibling" : "previousSibling",
                            T = e.parentNode,
                            y = a && e.nodeName.toLowerCase(),
                            v = !l && !a;
                        if (T) {
                            if (r) {
                                for (; m;) {
                                    for (h = e; h = h[m];)
                                        if (a ? h.nodeName.toLowerCase() === y : 1 === h.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? T.firstChild : T.lastChild], s && v) {
                                for (u = T[X] || (T[X] = {}), c = u[t] || [], d = c[0] === $ && c[1], p = c[0] === $ && c[2], h = d && T.childNodes[d]; h = ++d && h && h[m] || (p = d = 0) || f.pop();)
                                    if (1 === h.nodeType && ++p && h === e) {
                                        u[t] = [$, d, p];
                                        break
                                    }
                            } else if (v && (c = (e[X] || (e[X] = {}))[t]) && c[0] === $) p = c[1];
                            else
                                for (;
                                    (h = ++d && h && h[m] || (p = d = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== y : 1 !== h.nodeType) || !++p || (v && ((h[X] || (h[X] = {}))[t] = [$, p]), h !== e)););
                            return p -= o, p === n || p % n === 0 && p / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var o, r = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[X] ? r(i) : r.length > 1 ? (o = [t, t, "", i], w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, o = r(t, i), s = o.length; s--;) n = tt(t, o[s]), t[n] = !(e[n] = o[s])
                    }) : function(t) {
                        return r(t, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        o = M(t.replace(lt, "$1"));
                    return o[X] ? n(function(t, e, i, n) {
                        for (var r, s = o(t, null, n, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function(t, n, r) {
                        return e[0] = t, o(e, null, r, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(St, wt),
                        function(e) {
                            return (e.textContent || e.innerText || A(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function(t) {
                    return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(St, wt).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === B
                },
                focus: function(t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !w.pseudos.empty(t)
                },
                header: function(t) {
                    return Tt.test(t.nodeName)
                },
                input: function(t) {
                    return mt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, i) {
                    return [i < 0 ? i + e : i]
                }),
                even: c(function(t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t
                }),
                lt: c(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: c(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) w.pseudos[b] = l(b);
        return h.prototype = w.filters = w.pseudos, w.setFilters = new h, P = e.tokenize = function(t, i) {
            var n, o, r, s, a, l, c, u = j[t + " "];
            if (u) return i ? 0 : u.slice(0);
            for (a = t, l = [], c = w.preFilter; a;) {
                n && !(o = ct.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = ut.exec(a)) && (n = o.shift(), r.push({
                    value: n,
                    type: o[0].replace(lt, " ")
                }), a = a.slice(n.length));
                for (s in w.filter) !(o = ft[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : j(t, l).slice(0)
        }, M = e.compile = function(t, e) {
            var i, n = [],
                o = [],
                r = q[t + " "];
            if (!r) {
                for (e || (e = P(t)), i = e.length; i--;) r = v(e[i]), r[X] ? n.push(r) : o.push(r);
                r = q(t, g(o, n)), r.selector = t
            }
            return r
        }, C = e.select = function(t, e, i, n) {
            var o, r, s, a, l, c = "function" == typeof t && t,
                h = !n && P(t = c.selector || t);
            if (i = i || [], 1 === h.length) {
                if (r = h[0] = h[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && S.getById && 9 === e.nodeType && I && w.relative[r[1].type]) {
                    if (e = (w.find.ID(s.matches[0].replace(St, wt), e) || [])[0], !e) return i;
                    c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (o = ft.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
                    if ((l = w.find[a]) && (n = l(s.matches[0].replace(St, wt), gt.test(r[0].type) && u(e.parentNode) || e))) {
                        if (r.splice(o, 1), t = n.length && p(r), !t) return Z.apply(i, n), i;
                        break
                    }
            }
            return (c || M(t, h))(n, e, !I, i, gt.test(t) && u(e.parentNode) || e), i
        }, S.sortStable = X.split("").sort(Y).join("") === X, S.detectDuplicates = !!G, H(), S.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"))
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), S.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), o(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(et, function(t, e, i) {
            var n;
            if (!i) return t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    J.find = ot, J.expr = ot.selectors, J.expr[":"] = J.expr.pseudos, J.unique = ot.uniqueSort, J.text = ot.getText, J.isXMLDoc = ot.isXML, J.contains = ot.contains;
    var rt = J.expr.match.needsContext,
        st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        at = /^.[^:#\[\.,]*$/;
    J.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? J.find.matchesSelector(n, t) ? [n] : [] : J.find.matches(t, J.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, J.fn.extend({
        find: function(t) {
            var e, i = this.length,
                n = [],
                o = this;
            if ("string" != typeof t) return this.pushStack(J(t).filter(function() {
                for (e = 0; e < i; e++)
                    if (J.contains(o[e], this)) return !0
            }));
            for (e = 0; e < i; e++) J.find(t, o[e], n);
            return n = this.pushStack(i > 1 ? J.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && rt.test(t) ? J(t) : t || [], !1).length
        }
    });
    var lt, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ut = J.fn.init = function(t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ct.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof J ? e[0] : e, J.merge(this, J.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Q, !0)), st.test(i[1]) && J.isPlainObject(e))
                        for (i in e) J.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return n = Q.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = Q, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : J.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(J) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), J.makeArray(t, this))
        };
    ut.prototype = J.fn, lt = J(Q);
    var ht = /^(?:parents|prev(?:Until|All))/,
        pt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    J.extend({
        dir: function(t, e, i) {
            for (var n = [], o = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && J(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), J.fn.extend({
        has: function(t) {
            var e = J(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; t < i; t++)
                    if (J.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, o = this.length, r = [], s = rt.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; n < o; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && J.find.matchesSelector(i, t))) {
                        r.push(i);
                        break
                    }
            return this.pushStack(r.length > 1 ? J.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? Y.call(J(t), this[0]) : Y.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(J.unique(J.merge(this.get(), J(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), J.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return J.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return J.dir(t, "parentNode", i)
        },
        next: function(t) {
            return o(t, "nextSibling")
        },
        prev: function(t) {
            return o(t, "previousSibling")
        },
        nextAll: function(t) {
            return J.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return J.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return J.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return J.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return J.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return J.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || J.merge([], t.childNodes)
        }
    }, function(t, e) {
        J.fn[t] = function(i, n) {
            var o = J.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = J.filter(n, o)), this.length > 1 && (pt[t] || J.unique(o), ht.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var dt = /\S+/g,
        ft = {};
    J.Callbacks = function(t) {
        t = "string" == typeof t ? ft[t] || r(t) : J.extend({}, t);
        var e, i, n, o, s, a, l = [],
            c = !t.once && [],
            u = function(r) {
                for (e = t.memory && r, i = !0, a = o || 0, o = 0, s = l.length, n = !0; l && a < s; a++)
                    if (l[a].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                n = !1, l && (c ? c.length && u(c.shift()) : e ? l = [] : h.disable())
            },
            h = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function r(e) {
                            J.each(e, function(e, i) {
                                var n = J.type(i);
                                "function" === n ? t.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && r(i)
                            })
                        }(arguments), n ? s = l.length : e && (o = i, u(e))
                    }
                    return this
                },
                remove: function() {
                    return l && J.each(arguments, function(t, e) {
                        for (var i;
                            (i = J.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (i <= s && s--, i <= a && a--)
                    }), this
                },
                has: function(t) {
                    return t ? J.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = c = e = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, e || h.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(t, e) {
                    return !l || i && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : u(e)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return h
    }, J.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", J.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return J.Deferred(function(i) {
                            J.each(e, function(e, r) {
                                var s = J.isFunction(t[e]) && t[e];
                                o[r[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && J.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? J.extend(t, n) : n
                    }
                },
                o = {};
            return n.pipe = n.then, J.each(e, function(t, r) {
                var s = r[2],
                    a = r[3];
                n[r[1]] = s.add, a && s.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? n : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), n.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, i, n, o = 0,
                r = W.call(arguments),
                s = r.length,
                a = 1 !== s || t && J.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : J.Deferred(),
                c = function(t, i, n) {
                    return function(o) {
                        i[t] = this, n[t] = arguments.length > 1 ? W.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (s > 1)
                for (e = new Array(s), i = new Array(s), n = new Array(s); o < s; o++) r[o] && J.isFunction(r[o].promise) ? r[o].promise().done(c(o, n, r)).fail(l.reject).progress(c(o, i, e)) : --a;
            return a || l.resolveWith(n, r), l.promise()
        }
    });
    var mt;
    J.fn.ready = function(t) {
        return J.ready.promise().done(t), this
    }, J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? J.readyWait++ : J.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, t !== !0 && --J.readyWait > 0 || (mt.resolveWith(Q, [J]), J.fn.triggerHandler && (J(Q).triggerHandler("ready"), J(Q).off("ready"))))
        }
    }), J.ready.promise = function(e) {
        return mt || (mt = J.Deferred(), "complete" === Q.readyState ? setTimeout(J.ready) : (Q.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), mt.promise(e)
    }, J.ready.promise();
    var Tt = J.access = function(t, e, i, n, o, r, s) {
        var a = 0,
            l = t.length,
            c = null == i;
        if ("object" === J.type(i)) {
            o = !0;
            for (a in i) J.access(t, e, a, i[a], !0, r, s)
        } else if (void 0 !== n && (o = !0, J.isFunction(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                return c.call(J(t), i)
            })), e))
            for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
        return o ? t : c ? e.call(t) : l ? e(t[0], i) : r
    };
    J.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, a.uid = 1, a.accepts = J.acceptData, a.prototype = {
        key: function(t) {
            if (!a.accepts(t)) return 0;
            var e = {},
                i = t[this.expando];
            if (!i) {
                i = a.uid++;
                try {
                    e[this.expando] = {
                        value: i
                    }, Object.defineProperties(t, e)
                } catch (n) {
                    e[this.expando] = i, J.extend(t, e)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function(t, e, i) {
            var n, o = this.key(t),
                r = this.cache[o];
            if ("string" == typeof e) r[e] = i;
            else if (J.isEmptyObject(r)) J.extend(this.cache[o], e);
            else
                for (n in e) r[n] = e[n];
            return r
        },
        get: function(t, e) {
            var i = this.cache[this.key(t)];
            return void 0 === e ? i : i[e]
        },
        access: function(t, e, i) {
            var n;
            return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, J.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n, o, r = this.key(t),
                s = this.cache[r];
            if (void 0 === e) this.cache[r] = {};
            else {
                J.isArray(e) ? n = e.concat(e.map(J.camelCase)) : (o = J.camelCase(e), e in s ? n = [e, o] : (n = o, n = n in s ? [n] : n.match(dt) || [])), i = n.length;
                for (; i--;) delete s[n[i]]
            }
        },
        hasData: function(t) {
            return !J.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var yt = new a,
        vt = new a,
        gt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        bt = /([A-Z])/g;
    J.extend({
        hasData: function(t) {
            return vt.hasData(t) || yt.hasData(t)
        },
        data: function(t, e, i) {
            return vt.access(t, e, i)
        },
        removeData: function(t, e) {
            vt.remove(t, e)
        },
        _data: function(t, e, i) {
            return yt.access(t, e, i)
        },
        _removeData: function(t, e) {
            yt.remove(t, e)
        }
    }), J.fn.extend({
        data: function(t, e) {
            var i, n, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = vt.get(r), 1 === r.nodeType && !yt.get(r, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = J.camelCase(n.slice(5)), l(r, n, o[n])));
                    yt.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                vt.set(this, t)
            }) : Tt(this, function(e) {
                var i, n = J.camelCase(t);
                if (r && void 0 === e) {
                    if (i = vt.get(r, t), void 0 !== i) return i;
                    if (i = vt.get(r, n), void 0 !== i) return i;
                    if (i = l(r, n, void 0), void 0 !== i) return i
                } else this.each(function() {
                    var i = vt.get(this, n);
                    vt.set(this, n, e), t.indexOf("-") !== -1 && void 0 !== i && vt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                vt.remove(this, t)
            })
        }
    }), J.extend({
        queue: function(t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = yt.get(t, e), i && (!n || J.isArray(i) ? n = yt.access(t, e, J.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = J.queue(t, e),
                n = i.length,
                o = i.shift(),
                r = J._queueHooks(t, e),
                s = function() {
                    J.dequeue(t, e)
                };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return yt.get(t, i) || yt.access(t, i, {
                empty: J.Callbacks("once memory").add(function() {
                    yt.remove(t, [e + "queue", i])
                })
            })
        }
    }), J.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? J.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = J.queue(this, t, e);
                J._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && J.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                J.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                o = J.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --n || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = yt.get(r[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wt = ["Top", "Right", "Bottom", "Left"],
        At = function(t, e) {
            return t = e || t, "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t)
        },
        xt = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = Q.createDocumentFragment(),
            e = t.appendChild(Q.createElement("div")),
            i = Q.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), K.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Pt = "undefined";
    K.focusinBubbles = "onfocusin" in t;
    var Mt = /^key/,
        Ct = /^(?:mouse|pointer|contextmenu)|click/,
        Et = /^(?:focusinfocus|focusoutblur)$/,
        kt = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function(t, e, i, n, o) {
            var r, s, a, l, c, u, h, p, d, f, m, T = yt.get(t);
            if (T)
                for (i.handler && (r = i, i = r.handler, o = r.selector), i.guid || (i.guid = J.guid++), (l = T.events) || (l = T.events = {}), (s = T.handle) || (s = T.handle = function(e) {
                        return typeof J !== Pt && J.event.triggered !== e.type ? J.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(dt) || [""], c = e.length; c--;) a = kt.exec(e[c]) || [], d = m = a[1], f = (a[2] || "").split(".").sort(), d && (h = J.event.special[d] || {}, d = (o ? h.delegateType : h.bindType) || d, h = J.event.special[d] || {}, u = J.extend({
                    type: d,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && J.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, r), (p = l[d]) || (p = l[d] = [], p.delegateCount = 0, h.setup && h.setup.call(t, n, f, s) !== !1 || t.addEventListener && t.addEventListener(d, s, !1)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), J.event.global[d] = !0)
        },
        remove: function(t, e, i, n, o) {
            var r, s, a, l, c, u, h, p, d, f, m, T = yt.hasData(t) && yt.get(t);
            if (T && (l = T.events)) {
                for (e = (e || "").match(dt) || [""], c = e.length; c--;)
                    if (a = kt.exec(e[c]) || [], d = m = a[1], f = (a[2] || "").split(".").sort(), d) {
                        for (h = J.event.special[d] || {}, d = (n ? h.delegateType : h.bindType) || d, p = l[d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, h.remove && h.remove.call(t, u));
                        s && !p.length && (h.teardown && h.teardown.call(t, f, T.handle) !== !1 || J.removeEvent(t, d, T.handle), delete l[d])
                    } else
                        for (d in l) J.event.remove(t, d + e[c], i, n, !0);
                J.isEmptyObject(l) && (delete T.handle, yt.remove(t, "events"))
            }
        },
        trigger: function(e, i, n, o) {
            var r, s, a, l, c, u, h, p = [n || Q],
                d = _.call(e, "type") ? e.type : e,
                f = _.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = n = n || Q, 3 !== n.nodeType && 8 !== n.nodeType && !Et.test(d + J.event.triggered) && (d.indexOf(".") >= 0 && (f = d.split("."), d = f.shift(), f.sort()), c = d.indexOf(":") < 0 && "on" + d, e = e[J.expando] ? e : new J.Event(d, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : J.makeArray(i, [e]), h = J.event.special[d] || {}, o || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                if (!o && !h.noBubble && !J.isWindow(n)) {
                    for (l = h.delegateType || d, Et.test(l + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (n.ownerDocument || Q) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (r = 0;
                    (s = p[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : h.bindType || d, u = (yt.get(s, "events") || {})[e.type] && yt.get(s, "handle"), u && u.apply(s, i), u = c && s[c], u && u.apply && J.acceptData(s) && (e.result = u.apply(s, i), e.result === !1 && e.preventDefault());
                return e.type = d, o || e.isDefaultPrevented() || h._default && h._default.apply(p.pop(), i) !== !1 || !J.acceptData(n) || c && J.isFunction(n[d]) && !J.isWindow(n) && (a = n[c], a && (n[c] = null), J.event.triggered = d, n[d](), J.event.triggered = void 0, a && (n[c] = a)), e.result
            }
        },
        dispatch: function(t) {
            t = J.event.fix(t);
            var e, i, n, o, r, s = [],
                a = W.call(arguments),
                l = (yt.get(this, "events") || {})[t.type] || [],
                c = J.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (s = J.event.handlers.call(this, t, l), e = 0;
                    (o = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, i = 0;
                        (r = o.handlers[i++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(r.namespace) || (t.handleObj = r, t.data = r.data, n = ((J.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, o, r, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== t.type) {
                        for (n = [], i = 0; i < a; i++) r = e[i], o = r.selector + " ", void 0 === n[o] && (n[o] = r.needsContext ? J(o, this).index(l) >= 0 : J.find(o, this, null, [l]).length), n[o] && n.push(r);
                        n.length && s.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, o, r = e.button;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Q, n = i.documentElement, o = i.body, t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[J.expando]) return t;
            var e, i, n, o = t.type,
                r = t,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Ct.test(o) ? this.mouseHooks : Mt.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new J.Event(r), e = n.length; e--;) i = n[e], t[i] = r[i];
            return t.target || (t.target = Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, r) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === h() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && J.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(t) {
                    return J.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var o = J.extend(new J.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? J.event.trigger(o, null, e) : J.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault()
        }
    }, J.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    }, J.Event = function(t, e) {
        return this instanceof J.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? c : u) : this.type = t, e && J.extend(this, e), this.timeStamp = t && t.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(t, e)
    }, J.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        J.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return o && (o === n || J.contains(n, o)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), K.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            J.event.simulate(e, t.target, J.event.fix(t), !0)
        };
        J.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    o = yt.access(n, e);
                o || n.addEventListener(t, i, !0), yt.access(n, e, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    o = yt.access(n, e) - 1;
                o ? yt.access(n, e, o) : (n.removeEventListener(t, i, !0), yt.remove(n, e))
            }
        }
    }), J.fn.extend({
        on: function(t, e, i, n, o) {
            var r, s;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (s in t) this.on(s, e, i, t[s], o);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = u;
            else if (!n) return this;
            return 1 === o && (r = n, n = function(t) {
                return J().off(t), r.apply(this, arguments)
            }, n.guid = r.guid || (r.guid = J.guid++)), this.each(function() {
                J.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, o;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, J(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = u), this.each(function() {
                J.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                J.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            if (i) return J.event.trigger(t, e, i, !0)
        }
    });
    var Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ht = /<([\w:]+)/,
        Dt = /<|&#?\w+;/,
        Bt = /<(?:script|style|link)/i,
        It = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Lt = /^$|\/(?:java|ecma)script/i,
        Nt = /^true\/(.*)/,
        Ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ft = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ft.optgroup = Ft.option, Ft.tbody = Ft.tfoot = Ft.colgroup = Ft.caption = Ft.thead, Ft.th = Ft.td, J.extend({
        clone: function(t, e, i) {
            var n, o, r, s, a = t.cloneNode(!0),
                l = J.contains(t.ownerDocument, t);
            if (!(K.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || J.isXMLDoc(t)))
                for (s = y(a), r = y(t), n = 0, o = r.length; n < o; n++) v(r[n], s[n]);
            if (e)
                if (i)
                    for (r = r || y(t), s = s || y(a), n = 0, o = r.length; n < o; n++) T(r[n], s[n]);
                else T(t, a);
            return s = y(a, "script"), s.length > 0 && m(s, !l && y(t, "script")), a
        },
        buildFragment: function(t, e, i, n) {
            for (var o, r, s, a, l, c, u = e.createDocumentFragment(), h = [], p = 0, d = t.length; p < d; p++)
                if (o = t[p], o || 0 === o)
                    if ("object" === J.type(o)) J.merge(h, o.nodeType ? [o] : o);
                    else if (Dt.test(o)) {
                for (r = r || u.appendChild(e.createElement("div")), s = (Ht.exec(o) || ["", ""])[1].toLowerCase(), a = Ft[s] || Ft._default, r.innerHTML = a[1] + o.replace(Gt, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
                J.merge(h, r.childNodes), r = u.firstChild, r.textContent = ""
            } else h.push(e.createTextNode(o));
            for (u.textContent = "", p = 0; o = h[p++];)
                if ((!n || J.inArray(o, n) === -1) && (l = J.contains(o.ownerDocument, o), r = y(u.appendChild(o), "script"), l && m(r), i))
                    for (c = 0; o = r[c++];) Lt.test(o.type || "") && i.push(o);
            return u
        },
        cleanData: function(t) {
            for (var e, i, n, o, r = J.event.special, s = 0; void 0 !== (i = t[s]); s++) {
                if (J.acceptData(i) && (o = i[yt.expando], o && (e = yt.cache[o]))) {
                    if (e.events)
                        for (n in e.events) r[n] ? J.event.remove(i, n) : J.removeEvent(i, n, e.handle);
                    yt.cache[o] && delete yt.cache[o]
                }
                delete vt.cache[i[vt.expando]]
            }
        }
    }), J.fn.extend({
        text: function(t) {
            return Tt(this, function(t) {
                return void 0 === t ? J.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? J.filter(t, this) : this, o = 0; null != (i = n[o]); o++) e || 1 !== i.nodeType || J.cleanData(y(i)), i.parentNode && (e && J.contains(i.ownerDocument, i) && m(y(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (J.cleanData(y(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return J.clone(this, t, e)
            })
        },
        html: function(t) {
            return Tt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Bt.test(t) && !Ft[(Ht.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Gt, "<$1></$2>");
                    try {
                        for (; i < n; i++) e = this[i] || {}, 1 === e.nodeType && (J.cleanData(y(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (o) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, J.cleanData(y(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = j.apply([], t);
            var i, n, o, r, s, a, l = 0,
                c = this.length,
                u = this,
                h = c - 1,
                p = t[0],
                m = J.isFunction(p);
            if (m || c > 1 && "string" == typeof p && !K.checkClone && It.test(p)) return this.each(function(i) {
                var n = u.eq(i);
                m && (t[0] = p.call(this, i, n.html())), n.domManip(t, e)
            });
            if (c && (i = J.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                for (o = J.map(y(i, "script"), d), r = o.length; l < c; l++) s = i, l !== h && (s = J.clone(s, !0, !0), r && J.merge(o, y(s, "script"))), e.call(this[l], s, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, J.map(o, f), l = 0; l < r; l++) s = o[l], Lt.test(s.type || "") && !yt.access(s, "globalEval") && J.contains(a, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(Ot, "")))
            }
            return this
        }
    }), J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        J.fn[t] = function(t) {
            for (var i, n = [], o = J(t), r = o.length - 1, s = 0; s <= r; s++) i = s === r ? this : this.clone(!0), J(o[s])[e](i), q.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Xt, Rt = {},
        $t = /^margin/,
        Vt = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
        Wt = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        };
    ! function() {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", o.appendChild(r);
            var e = t.getComputedStyle(s, null);
            i = "1%" !== e.top, n = "4px" === e.width, o.removeChild(r)
        }
        var i, n, o = Q.documentElement,
            r = Q.createElement("div"),
            s = Q.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(s), t.getComputedStyle && J.extend(K, {
            pixelPosition: function() {
                return e(), i
            },
            boxSizingReliable: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                var e, i = s.appendChild(Q.createElement("div"));
                return i.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", s.style.width = "1px", o.appendChild(r), e = !parseFloat(t.getComputedStyle(i, null).marginRight), o.removeChild(r), s.removeChild(i), e
            }
        }))
    }(), J.swap = function(t, e, i, n) {
        var o, r, s = {};
        for (r in e) s[r] = t.style[r], t.style[r] = e[r];
        o = i.apply(t, n || []);
        for (r in e) t.style[r] = s[r];
        return o
    };
    var jt = /^(none|table(?!-c[ea]).+)/,
        qt = new RegExp("^(" + St + ")(.*)$", "i"),
        Yt = new RegExp("^([+-])=(" + St + ")", "i"),
        zt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ut = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _t = ["Webkit", "O", "Moz", "ms"];
    J.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = S(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = J.camelCase(e),
                    l = t.style;
                return e = J.cssProps[a] || (J.cssProps[a] = A(l, a)), s = J.cssHooks[e] || J.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e] : (r = typeof i, "string" === r && (o = Yt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(J.css(t, e)), r = "number"), null != i && i === i && ("number" !== r || J.cssNumber[a] || (i += "px"), K.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i)), void 0)
            }
        },
        css: function(t, e, i, n) {
            var o, r, s, a = J.camelCase(e);
            return e = J.cssProps[a] || (J.cssProps[a] = A(t.style, a)), s = J.cssHooks[e] || J.cssHooks[a], s && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = S(t, e, n)), "normal" === o && e in Ut && (o = Ut[e]), "" === i || i ? (r = parseFloat(o), i === !0 || J.isNumeric(r) ? r || 0 : o) : o
        }
    }), J.each(["height", "width"], function(t, e) {
        J.cssHooks[e] = {
            get: function(t, i, n) {
                if (i) return jt.test(J.css(t, "display")) && 0 === t.offsetWidth ? J.swap(t, zt, function() {
                    return M(t, e, n)
                }) : M(t, e, n)
            },
            set: function(t, i, n) {
                var o = n && Wt(t);
                return x(t, i, n ? P(t, e, n, "border-box" === J.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), J.cssHooks.marginRight = w(K.reliableMarginRight, function(t, e) {
        if (e) return J.swap(t, {
            display: "inline-block"
        }, S, [t, "marginRight"])
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        J.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[t + wt[n] + e] = r[n] || r[n - 2] || r[0];
                return o
            }
        }, $t.test(t) || (J.cssHooks[t + e].set = x)
    }), J.fn.extend({
        css: function(t, e) {
            return Tt(this, function(t, e, i) {
                var n, o, r = {},
                    s = 0;
                if (J.isArray(e)) {
                    for (n = Wt(t), o = e.length; s < o; s++) r[e[s]] = J.css(t, e[s], !1, n);
                    return r
                }
                return void 0 !== i ? J.style(t, e, i) : J.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return C(this, !0)
        },
        hide: function() {
            return C(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                At(this) ? J(this).show() : J(this).hide()
            })
        }
    }), J.Tween = E, E.prototype = {
        constructor: E,
        init: function(t, e, i, n, o, r) {
            this.elem = t, this.prop = i, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (J.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = E.propHooks[this.prop];
            return t && t.get ? t.get(this) : E.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = E.propHooks[this.prop];
            return this.options.duration ? this.pos = e = J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : E.propHooks._default.set(this), this
        }
    }, E.prototype.init.prototype = E.prototype, E.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = J.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                J.fx.step[t.prop] ? J.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop]) ? J.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, E.propHooks.scrollTop = E.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, J.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, J.fx = E.prototype.init, J.fx.step = {};
    var Kt, Qt, Zt = /^(?:toggle|show|hide)$/,
        Jt = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
        te = /queueHooks$/,
        ee = [D],
        ie = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    o = Jt.exec(e),
                    r = o && o[3] || (J.cssNumber[t] ? "" : "px"),
                    s = (J.cssNumber[t] || "px" !== r && +n) && Jt.exec(J.css(i.elem, t)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], o = o || [], s = +n || 1;
                    do a = a || ".5", s /= a, J.style(i.elem, t, s + r); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return o && (s = i.start = +s || +n || 0, i.unit = r, i.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), i
            }]
        };
    J.Animation = J.extend(I, {
            tweener: function(t, e) {
                J.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, o = t.length; n < o; n++) i = t[n], ie[i] = ie[i] || [], ie[i].unshift(e)
            },
            prefilter: function(t, e) {
                e ? ee.unshift(t) : ee.push(t)
            }
        }), J.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? J.extend({}, t) : {
                complete: i || !i && e || J.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !J.isFunction(e) && e
            };
            return n.duration = J.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in J.fx.speeds ? J.fx.speeds[n.duration] : J.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                J.isFunction(n.old) && n.old.call(this), n.queue && J.dequeue(this, n.queue)
            }, n
        }, J.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(At).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var o = J.isEmptyObject(t),
                    r = J.speed(e, i, n),
                    s = function() {
                        var e = I(this, J.extend({}, t), r);
                        (o || yt.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        r = J.timers,
                        s = yt.get(this);
                    if (o) s[o] && s[o].stop && n(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && te.test(o) && n(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i), e = !1, r.splice(o, 1));
                    !e && i || J.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = yt.get(this),
                        n = i[t + "queue"],
                        o = i[t + "queueHooks"],
                        r = J.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, J.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), J.each(["toggle", "show", "hide"], function(t, e) {
            var i = J.fn[e];
            J.fn[e] = function(t, n, o) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(G(e, !0), t, n, o)
            }
        }), J.each({
            slideDown: G("show"),
            slideUp: G("hide"),
            slideToggle: G("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            J.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), J.timers = [], J.fx.tick = function() {
            var t, e = 0,
                i = J.timers;
            for (Kt = J.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
            i.length || J.fx.stop(), Kt = void 0
        }, J.fx.timer = function(t) {
            J.timers.push(t), t() ? J.fx.start() : J.timers.pop()
        }, J.fx.interval = 13, J.fx.start = function() {
            Qt || (Qt = setInterval(J.fx.tick, J.fx.interval))
        }, J.fx.stop = function() {
            clearInterval(Qt), Qt = null
        }, J.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, J.fn.delay = function(t, e) {
            return t = J.fx ? J.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var t = Q.createElement("input"),
                e = Q.createElement("select"),
                i = e.appendChild(Q.createElement("option"));
            t.type = "checkbox", K.checkOn = "" !== t.value, K.optSelected = i.selected, e.disabled = !0, K.optDisabled = !i.disabled, t = Q.createElement("input"), t.value = "t", t.type = "radio", K.radioValue = "t" === t.value
        }();
    var ne, oe, re = J.expr.attrHandle;
    J.fn.extend({
        attr: function(t, e) {
            return Tt(this, J.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                J.removeAttr(this, t)
            })
        }
    }), J.extend({
        attr: function(t, e, i) {
            var n, o, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === Pt ? J.prop(t, e, i) : (1 === r && J.isXMLDoc(t) || (e = e.toLowerCase(), n = J.attrHooks[e] || (J.expr.match.bool.test(e) ? oe : ne)), void 0 === i ? n && "get" in n && null !== (o = n.get(t, e)) ? o : (o = J.find.attr(t, e), null == o ? void 0 : o) : null !== i ? n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o : (t.setAttribute(e, i + ""), i) : void J.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, o = 0,
                r = e && e.match(dt);
            if (r && 1 === t.nodeType)
                for (; i = r[o++];) n = J.propFix[i] || i, J.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!K.radioValue && "radio" === e && J.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), oe = {
        set: function(t, e, i) {
            return e === !1 ? J.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = re[e] || J.find.attr;
        re[e] = function(t, e, n) {
            var o, r;
            return n || (r = re[e], re[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, re[e] = r), o
        }
    });
    var se = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
        prop: function(t, e) {
            return Tt(this, J.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[J.propFix[t] || t]
            })
        }
    }), J.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, i) {
            var n, o, r, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return r = 1 !== s || !J.isXMLDoc(t), r && (e = J.propFix[e] || e, o = J.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), K.optSelected || (J.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        J.propFix[this.toLowerCase()] = this
    });
    var ae = /[\t\r\n\f]/g;
    J.fn.extend({
        addClass: function(t) {
            var e, i, n, o, r, s, a = "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).addClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(dt) || []; l < c; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : " ")) {
                        for (r = 0; o = e[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        s = J.trim(n), i.className !== s && (i.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, o, r, s, a = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).removeClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(dt) || []; l < c; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : "")) {
                        for (r = 0; o = e[r++];)
                            for (; n.indexOf(" " + o + " ") >= 0;) n = n.replace(" " + o + " ", " ");
                        s = t ? J.trim(n) : "", i.className !== s && (i.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : J.isFunction(t) ? this.each(function(i) {
                J(this).toggleClass(t.call(this, i, this.className, e), e)
            }) : this.each(function() {
                if ("string" === i)
                    for (var e, n = 0, o = J(this), r = t.match(dt) || []; e = r[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else i !== Pt && "boolean" !== i || (this.className && yt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : yt.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; i < n; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(ae, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var le = /\r/g;
    J.fn.extend({
        val: function(t) {
            var e, i, n, o = this[0]; {
                if (arguments.length) return n = J.isFunction(t), this.each(function(i) {
                    var o;
                    1 === this.nodeType && (o = n ? t.call(this, i, J(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : J.isArray(o) && (o = J.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), e = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                });
                if (o) return e = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(le, "") : null == i ? "" : i)
            }
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = J.find.attr(t, "value");
                    return null != e ? e : J.trim(J.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, s = r ? null : [], a = r ? o + 1 : n.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
                        if (i = n[l], (i.selected || l === o) && (K.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !J.nodeName(i.parentNode, "optgroup"))) {
                            if (e = J(i).val(), r) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var i, n, o = t.options, r = J.makeArray(e), s = o.length; s--;) n = o[s], (n.selected = J.inArray(n.value, r) >= 0) && (i = !0);
                    return i || (t.selectedIndex = -1), r
                }
            }
        }
    }), J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = {
            set: function(t, e) {
                if (J.isArray(e)) return t.checked = J.inArray(J(t).val(), e) >= 0
            }
        }, K.checkOn || (J.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        J.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), J.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var ce = J.now(),
        ue = /\?/;
    J.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, J.parseXML = function(t) {
        var e, i;
        if (!t || "string" != typeof t) return null;
        try {
            i = new DOMParser, e = i.parseFromString(t, "text/xml")
        } catch (n) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || J.error("Invalid XML: " + t), e
    };
    var he = /#.*$/,
        pe = /([?&])_=[^&]*/,
        de = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        me = /^(?:GET|HEAD)$/,
        Te = /^\/\//,
        ye = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ve = {},
        ge = {},
        be = "*/".concat("*"),
        Se = t.location.href,
        we = ye.exec(Se.toLowerCase()) || [];
    J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Se,
            type: "GET",
            isLocal: fe.test(we[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": be,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? O(O(t, J.ajaxSettings), e) : O(J.ajaxSettings, t)
        },
        ajaxPrefilter: L(ve),
        ajaxTransport: L(ge),
        ajax: function(t, e) {
            function i(t, e, i, s) {
                var l, u, y, v, b, w = e;
                2 !== g && (g = 2, a && clearTimeout(a), n = void 0, r = s || "", S.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (v = F(h, S, i)), v = X(h, v, S, l), l ? (h.ifModified && (b = S.getResponseHeader("Last-Modified"), b && (J.lastModified[o] = b), b = S.getResponseHeader("etag"), b && (J.etag[o] = b)), 204 === t || "HEAD" === h.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = v.state, u = v.data, y = v.error, l = !y)) : (y = w, !t && w || (w = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (e || w) + "", l ? f.resolveWith(p, [u, w, S]) : f.rejectWith(p, [S, w, y]), S.statusCode(T), T = void 0, c && d.trigger(l ? "ajaxSuccess" : "ajaxError", [S, h, l ? u : y]), m.fireWith(p, [S, w]), c && (d.trigger("ajaxComplete", [S, h]), --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, o, r, s, a, l, c, u, h = J.ajaxSetup({}, e),
                p = h.context || h,
                d = h.context && (p.nodeType || p.jquery) ? J(p) : J.event,
                f = J.Deferred(),
                m = J.Callbacks("once memory"),
                T = h.statusCode || {},
                y = {},
                v = {},
                g = 0,
                b = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === g) {
                            if (!s)
                                for (s = {}; e = de.exec(r);) s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === g ? r : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return g || (t = v[i] = v[i] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return g || (h.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (g < 2)
                                for (e in t) T[e] = [T[e], t[e]];
                            else S.always(t[S.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || b;
                        return n && n.abort(e), i(0, e), this
                    }
                };
            if (f.promise(S).complete = m.add, S.success = S.done, S.error = S.fail, h.url = ((t || h.url || Se) + "").replace(he, "").replace(Te, we[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = J.trim(h.dataType || "*").toLowerCase().match(dt) || [""], null == h.crossDomain && (l = ye.exec(h.url.toLowerCase()), h.crossDomain = !(!l || l[1] === we[1] && l[2] === we[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (we[3] || ("http:" === we[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = J.param(h.data, h.traditional)), N(ve, h, e, S), 2 === g) return S;
            c = J.event && h.global, c && 0 === J.active++ && J.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !me.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (ue.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = pe.test(o) ? o.replace(pe, "$1_=" + ce++) : o + (ue.test(o) ? "&" : "?") + "_=" + ce++)), h.ifModified && (J.lastModified[o] && S.setRequestHeader("If-Modified-Since", J.lastModified[o]), J.etag[o] && S.setRequestHeader("If-None-Match", J.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + be + "; q=0.01" : "") : h.accepts["*"]);
            for (u in h.headers) S.setRequestHeader(u, h.headers[u]);
            if (h.beforeSend && (h.beforeSend.call(p, S, h) === !1 || 2 === g)) return S.abort();
            b = "abort";
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) S[u](h[u]);
            if (n = N(ge, h, e, S)) {
                S.readyState = 1, c && d.trigger("ajaxSend", [S, h]), h.async && h.timeout > 0 && (a = setTimeout(function() {
                    S.abort("timeout")
                }, h.timeout));
                try {
                    g = 1, n.send(y, i)
                } catch (w) {
                    if (!(g < 2)) throw w;
                    i(-1, w)
                }
            } else i(-1, "No Transport");
            return S
        },
        getJSON: function(t, e, i) {
            return J.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return J.get(t, void 0, e, "script")
        }
    }), J.each(["get", "post"], function(t, e) {
        J[e] = function(t, i, n, o) {
            return J.isFunction(i) && (o = o || n, n = i, i = void 0), J.ajax({
                url: t,
                type: e,
                dataType: o,
                data: i,
                success: n
            })
        }
    }), J._evalUrl = function(t) {
        return J.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, J.fn.extend({
        wrapAll: function(t) {
            var e;
            return J.isFunction(t) ? this.each(function(e) {
                J(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = J(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return J.isFunction(t) ? this.each(function(e) {
                J(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = J(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = J.isFunction(t);
            return this.each(function(i) {
                J(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        }
    }), J.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, J.expr.filters.visible = function(t) {
        return !J.expr.filters.hidden(t)
    };
    var Ae = /%20/g,
        xe = /\[\]$/,
        Pe = /\r?\n/g,
        Me = /^(?:submit|button|image|reset|file)$/i,
        Ce = /^(?:input|select|textarea|keygen)/i;
    J.param = function(t, e) {
        var i, n = [],
            o = function(t, e) {
                e = J.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(t) || t.jquery && !J.isPlainObject(t)) J.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (i in t) R(i, t[i], e, o);
        return n.join("&").replace(Ae, "+")
    }, J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = J.prop(this, "elements");
                return t ? J.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !J(this).is(":disabled") && Ce.test(this.nodeName) && !Me.test(t) && (this.checked || !xt.test(t))
            }).map(function(t, e) {
                var i = J(this).val();
                return null == i ? null : J.isArray(i) ? J.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Pe, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Pe, "\r\n")
                }
            }).get()
        }
    }), J.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var Ee = 0,
        ke = {},
        Ge = {
            0: 200,
            1223: 204
        },
        He = J.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in ke) ke[t]()
    }), K.cors = !!He && "withCredentials" in He, K.ajax = He = !!He, J.ajaxTransport(function(t) {
        var e;
        if (K.cors || He && !t.crossDomain) return {
            send: function(i, n) {
                var o, r = t.xhr(),
                    s = ++Ee;
                if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) r[o] = t.xhrFields[o];
                t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (o in i) r.setRequestHeader(o, i[o]);
                e = function(t) {
                    return function() {
                        e && (delete ke[s], e = r.onload = r.onerror = null, "abort" === t ? r.abort() : "error" === t ? n(r.status, r.statusText) : n(Ge[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                            text: r.responseText
                        } : void 0, r.getAllResponseHeaders()))
                    }
                }, r.onload = e(), r.onerror = e("error"), e = ke[s] = e("abort");
                try {
                    r.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (e) throw a
                }
            },
            abort: function() {
                e && e()
            }
        }
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return J.globalEval(t), t
            }
        }
    }), J.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), J.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, o) {
                    e = J("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), Q.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var De = [],
        Be = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = De.pop() || J.expando + "_" + ce++;
            return this[t] = !0, t
        }
    }), J.ajaxPrefilter("json jsonp", function(e, i, n) {
        var o, r, s, a = e.jsonp !== !1 && (Be.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Be.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Be, "$1" + o) : e.jsonp !== !1 && (e.url += (ue.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return s || J.error(o + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
            s = arguments
        }, n.always(function() {
            t[o] = r, e[o] && (e.jsonpCallback = i.jsonpCallback, De.push(o)), s && J.isFunction(r) && r(s[0]), s = r = void 0
        }), "script"
    }), J.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || Q;
        var n = st.exec(t),
            o = !i && [];
        return n ? [e.createElement(n[1])] : (n = J.buildFragment([t], e, o), o && o.length && J(o).remove(), J.merge([], n.childNodes))
    };
    var Ie = J.fn.load;
    J.fn.load = function(t, e, i) {
        if ("string" != typeof t && Ie) return Ie.apply(this, arguments);
        var n, o, r, s = this,
            a = t.indexOf(" ");
        return a >= 0 && (n = J.trim(t.slice(a)), t = t.slice(0, a)), J.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && J.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, s.html(n ? J("<div>").append(J.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            s.each(i, r || [t.responseText, e, t])
        }), this
    }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        J.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), J.expr.filters.animated = function(t) {
        return J.grep(J.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Le = t.document.documentElement;
    J.offset = {
        setOffset: function(t, e, i) {
            var n, o, r, s, a, l, c, u = J.css(t, "position"),
                h = J(t),
                p = {};
            "static" === u && (t.style.position = "relative"), a = h.offset(), r = J.css(t, "top"), l = J.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (n = h.position(), s = n.top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), J.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + o), "using" in e ? e.using.call(t, p) : h.css(p)
        }
    }, J.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                J.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = n && n.ownerDocument;
            if (r) return e = r.documentElement, J.contains(e, n) ? (typeof n.getBoundingClientRect !== Pt && (o = n.getBoundingClientRect()), i = $(r), {
                top: o.top + i.pageYOffset - e.clientTop,
                left: o.left + i.pageXOffset - e.clientLeft
            }) : o
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === J.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), J.nodeName(t[0], "html") || (n = t.offset()), n.top += J.css(t[0], "borderTopWidth", !0), n.left += J.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - J.css(i, "marginTop", !0),
                    left: e.left - n.left - J.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Le; t && !J.nodeName(t, "html") && "static" === J.css(t, "position");) t = t.offsetParent;
                return t || Le
            })
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var n = "pageYOffset" === i;
        J.fn[e] = function(o) {
            return Tt(this, function(e, o, r) {
                var s = $(e);
                return void 0 === r ? s ? s[i] : e[o] : void(s ? s.scrollTo(n ? t.pageXOffset : r, n ? r : t.pageYOffset) : e[o] = r)
            }, e, o, arguments.length, null)
        }
    }), J.each(["top", "left"], function(t, e) {
        J.cssHooks[e] = w(K.pixelPosition, function(t, i) {
            if (i) return i = S(t, e), Vt.test(i) ? J(t).position()[e] + "px" : i
        })
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        J.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            J.fn[n] = function(n, o) {
                var r = arguments.length && (i || "boolean" != typeof n),
                    s = i || (n === !0 || o === !0 ? "margin" : "border");
                return Tt(this, function(e, i, n) {
                    var o;
                    return J.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? J.css(e, i, s) : J.style(e, i, n, s)
                }, e, r ? n : void 0, r, null)
            }
        })
    }), J.fn.size = function() {
        return this.length
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return J
    });
    var Ne = t.jQuery,
        Oe = t.$;
    return J.noConflict = function(e) {
        return t.$ === J && (t.$ = Oe), e && t.jQuery === J && (t.jQuery = Ne), J
    }, typeof e === Pt && (t.jQuery = t.$ = J), J
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
        function e(e, n) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(e),
                appendDots: t(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = t(e), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = t(e).data("slick") || {}, r.options = t.extend({}, r.defaults, n, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = t.proxy(r.autoPlay, r), r.autoPlayClear = t.proxy(r.autoPlayClear, r), r.autoPlayIterator = t.proxy(r.autoPlayIterator, r), r.changeSlide = t.proxy(r.changeSlide, r), r.clickHandler = t.proxy(r.clickHandler, r), r.selectHandler = t.proxy(r.selectHandler, r), r.setPosition = t.proxy(r.setPosition, r), r.swipeHandler = t.proxy(r.swipeHandler, r), r.dragHandler = t.proxy(r.dragHandler, r), r.keyHandler = t.proxy(r.keyHandler, r), r.instanceUid = i++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
        }
        var i = 0;
        return e
    }(), e.prototype.activateADA = function() {
        var t = this;
        t.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
        var o = this;
        if ("boolean" == typeof i) n = i, i = null;
        else if (i < 0 || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : n === !0 ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }, e.prototype.animateSlide = function(e, i) {
        var n = {},
            o = this;
        o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (e = -e), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), t({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(t) {
                t = Math.ceil(t), o.options.vertical === !1 ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (o.applyTransition(), e = Math.ceil(e), o.options.vertical === !1 ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
            o.disableTransition(), i.call()
        }, o.options.speed))
    }, e.prototype.getNavTarget = function() {
        var e = this,
            i = e.options.asNavFor;
        return i && null !== i && (i = t(i).not(e.$slider)), i
    }, e.prototype.asNavFor = function(e) {
        var i = this,
            n = i.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(t) {
        var e = this,
            i = {};
        e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var t = this,
            e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
    }, e.prototype.buildArrows = function() {
        var e = this;
        e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function() {
        var e, i, n = this;
        if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
            for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var t, e, i, n, o, r, s, a = this;
        if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), t = 0; t < o; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var u = t * s + (e * a.options.slidesPerRow + i);
                        r.get(u) && c.appendChild(r.get(u))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function(e, i) {
        var n, o, r, s = this,
            a = !1,
            l = s.$slider.width(),
            c = window.innerWidth || t(window).width();
        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            o = null;
            for (n in s.breakpoints) s.breakpoints.hasOwnProperty(n) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = o), e || a === !1 || s.$slider.trigger("breakpoint", [s, a])
        }
    }, e.prototype.changeSlide = function(e, i) {
        var n, o, r, s = this,
            a = t(e.currentTarget);
        switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll !== 0, n = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
            case "previous":
                o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
                break;
            case "next":
                o = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
                break;
            case "index":
                var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(l), !1, i), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(t) {
        var e, i, n = this;
        if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
        else
            for (var o in e) {
                if (t < e[o]) {
                    t = i;
                    break
                }
                i = e[o]
            }
        return t
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
            t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
    }, e.prototype.clickHandler = function(t) {
        var e = this;
        e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function(e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, e.prototype.disableTransition = function(t) {
        var e = this,
            i = {};
        i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.fadeSlide = function(t, e) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function() {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, e.prototype.fadeSlideOut = function(t) {
        var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        var t = this;
        return t.currentSlide
    }, e.prototype.getDotCount = function() {
        var t = this,
            e = 0,
            i = 0,
            n = 0;
        if (t.options.infinite === !0)
            for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (t.options.centerMode === !0) n = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return n - 1
    }, e.prototype.getLeft = function(t) {
        var e, i, n, o = this,
            r = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = o.options.vertical === !1 ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + r, o.options.variableWidth === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = o.options.rtl === !0 ? n[0] ? (o.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, o.options.centerMode === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = o.options.rtl === !0 ? n[0] ? (o.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        var e = this;
        return e.options[t]
    }, e.prototype.getNavigableIndexes = function() {
        var t, e = this,
            i = 0,
            n = 0,
            o = [];
        for (e.options.infinite === !1 ? t = e.slideCount : (i = e.options.slidesToScroll * -1, n = e.options.slidesToScroll * -1, t = 2 * e.slideCount); i < t;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }, e.prototype.getSlick = function() {
        return this
    }, e.prototype.getSlideCount = function() {
        var e, i, n, o = this;
        return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(e, r) {
            if (r.offsetLeft - n + t(r).outerWidth() / 2 > o.swipeLeft * -1) return i = r, !1
        }), e = Math.abs(t(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        var i = this;
        i.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }, e.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
            t(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + i
            })
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
            t(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + i,
                id: "slick-slide" + e.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
    }, e.prototype.initArrowEvents = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.initUI = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this),
                    i = t(this).attr("data-lazy"),
                    n = document.createElement("img");
                n.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        e.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, e, i])
                    })
                }, n.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, i])
                }, n.src = i
            })
        }
        var i, n, o, r, s = this;
        s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = Math.ceil(o + s.options.slidesToShow), s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)), i = s.$slider.find(".slick-slide").slice(o, r), e(i), s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"), e(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), e(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(s.options.slidesToShow * -1), e(n))
    }, e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        var t = this;
        t.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function() {
        var t = this;
        t.checkResponsive(), t.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var t = this;
        t.autoPlayClear(), t.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, e.prototype.postSlide = function(t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        var t = this;
        t.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var i, n, o, r = this,
            s = t("img[data-lazy]", r.$slider);
        s.length ? (i = s.first(), n = i.attr("data-lazy"), o = document.createElement("img"), o.onload = function() {
            i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), r.options.adaptiveHeight === !0 && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, i, n]), r.progressiveLazyLoad()
        }, o.onerror = function() {
            e < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(e + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, n]), r.progressiveLazyLoad())
        }, o.src = n) : r.$slider.trigger("allImagesLoaded", [r])
    }, e.prototype.refresh = function(e) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
            currentSlide: i
        }), o.init(), e || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, i, n, o = this,
            r = o.options.responsive || null;
        if ("array" === t.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (e in r)
                if (n = o.breakpoints.length - 1, i = r[e].breakpoint, r.hasOwnProperty(e)) {
                    for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                    o.breakpoints.push(i), o.breakpointSettings[i] = r[e].settings
                }
            o.breakpoints.sort(function(t, e) {
                return o.options.mobileFirst ? t - e : e - t
            })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var n = this;
        return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, !(n.slideCount < 1 || t < 0 || t > n.slideCount - 1) && (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
    }, e.prototype.setCSS = function(t) {
        var e, i, n = this,
            o = {};
        n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, e.prototype.setDimensions = function() {
        var t = this;
        t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each(function(n, o) {
            e = i.slideWidth * n * -1, i.options.rtl === !0 ? t(o).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(o).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, i, n, o, r, s = this,
            a = !1;
        if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], r = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")), "single" === r) s.options[n] = o;
        else if ("multiple" === r) t.each(n, function(t, e) {
            s.options[t] = e
        });
        else if ("responsive" === r)
            for (i in o)
                if ("array" !== t.type(s.options.responsive)) s.options.responsive = [o[i]];
                else {
                    for (e = s.options.responsive.length - 1; e >= 0;) s.options.responsive[e].breakpoint === o[i].breakpoint && s.options.responsive.splice(e, 1), e--;
                    s.options.responsive.push(o[i])
                }
        a && (s.unload(), s.reinit())
    }, e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function() {
        var t = this,
            e = document.body.style;
        t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
    }, e.prototype.setSlideClasses = function(t) {
        var e, i, n, o, r = this;
        i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(t).addClass("slick-current"), r.options.centerMode === !0 ? (e = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = r.options.infinite === !0 ? r.options.slidesToShow + t : t, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, i, n, o = this;
        if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function(t) {
        var e = this;
        t || e.autoPlay(), e.interrupted = t
    }, e.prototype.selectHandler = function(e) {
        var i = this,
            n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            o = parseInt(n.attr("data-slick-index"));
        return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
    }, e.prototype.slideHandler = function(t, e, i) {
        var n, o, r, s, a, l = null,
            c = this;
        if (e = e || !1, (c.animating !== !0 || c.options.waitForAnimate !== !0) && !(c.options.fade === !0 && c.currentSlide === t || c.slideCount <= c.options.slidesToShow)) return e === !1 && c.asNavFor(t), n = t, l = c.getLeft(n), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(s, function() {
            c.postSlide(n)
        }) : c.postSlide(n))) : c.options.infinite === !1 && c.options.centerMode === !0 && (t < 0 || t > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(s, function() {
            c.postSlide(n)
        }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(r), c.fadeSlide(o, function() {
            c.postSlide(o)
        })) : c.postSlide(o), void c.animateHeight()) : void(i !== !0 ? c.animateSlide(l, function() {
            c.postSlide(o)
        }) : c.postSlide(o)))
    }, e.prototype.startLoad = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var t, e, i, n, o = this;
        return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : n <= 360 && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && n <= 225 ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function(t) {
        var e, i, n = this;
        if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case "left":
                case "down":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && t.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function(t) {
        var e, i, n, o, r, s = this;
        return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!s.dragging || r && 1 !== r.length) && (e = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), i = s.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(), o = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), n = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.options.infinite === !1 && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), s.options.vertical === !1 ? s.swipeLeft = e + n * o : s.swipeLeft = e + n * (s.$list.height() / s.listWidth) * o, s.options.verticalSwiping === !0 && (s.swipeLeft = e + n * o), s.options.fade !== !0 && s.options.touchMove !== !1 && (s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
    }, e.prototype.swipeStart = function(t) {
        var e, i = this;
        return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var t, e = this;
        t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, e.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }, t.fn.slick = function() {
        var t, i, n = this,
            o = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            s = n.length;
        for (t = 0; t < s; t++)
            if ("object" == typeof o || "undefined" == typeof o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, r), "undefined" != typeof i) return i;
        return n
    }
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    function e() {
        var e, i, n = {
            height: c.innerHeight,
            width: c.innerWidth
        };
        return n.height || (e = l.compatMode, !e && t.support.boxModel || (i = "CSS1Compat" === e ? u : l.body, n = {
            height: i.clientHeight,
            width: i.clientWidth
        })), n
    }

    function i() {
        return {
            top: c.pageYOffset || u.scrollTop || l.body.scrollTop,
            left: c.pageXOffset || u.scrollLeft || l.body.scrollLeft
        }
    }

    function n() {
        if (a.length) {
            var n = 0,
                s = t.map(a, function(t) {
                    var e = t.data.selector,
                        i = t.$element;
                    return e ? i.find(e) : i
                });
            for (o = o || e(), r = r || i(); n < a.length; n++)
                if (t.contains(u, s[n][0])) {
                    var l = t(s[n]),
                        c = {
                            height: l[0].offsetHeight,
                            width: l[0].offsetWidth
                        },
                        h = l.offset(),
                        p = l.data("inview");
                    if (!r || !o) return;
                    h.top + c.height > r.top && h.top < r.top + o.height && h.left + c.width > r.left && h.left < r.left + o.width ? p || l.data("inview", !0).trigger("inview", [!0]) : p && l.data("inview", !1).trigger("inview", [!1])
                }
        }
    }
    var o, r, s, a = [],
        l = document,
        c = window,
        u = l.documentElement;
    t.event.special.inview = {
        add: function(e) {
            a.push({
                data: e,
                $element: t(this),
                element: this
            }), !s && a.length && (s = setInterval(n, 250))
        },
        remove: function(t) {
            for (var e = 0; e < a.length; e++) {
                var i = a[e];
                if (i.element === this && i.data.guid === t.guid) {
                    a.splice(e, 1);
                    break
                }
            }
            a.length || (clearInterval(s), s = null)
        }
    }, t(c).bind("scroll resize scrollstop", function() {
        o = r = null
    }), !u.addEventListener && u.attachEvent && u.attachEvent("onfocusin", function() {
        r = null
    })
}),
function(t, e, i) {
    "use strict";

    function n(t, e) {
        this.element = t, this.layers = t.getElementsByClassName("layer");
        var i = {
            calibrateX: this.data(this.element, "calibrate-x"),
            calibrateY: this.data(this.element, "calibrate-y"),
            invertX: this.data(this.element, "invert-x"),
            invertY: this.data(this.element, "invert-y"),
            limitX: this.data(this.element, "limit-x"),
            limitY: this.data(this.element, "limit-y"),
            scalarX: this.data(this.element, "scalar-x"),
            scalarY: this.data(this.element, "scalar-y"),
            frictionX: this.data(this.element, "friction-x"),
            frictionY: this.data(this.element, "friction-y"),
            originX: this.data(this.element, "origin-x"),
            originY: this.data(this.element, "origin-y")
        };
        for (var n in i) null === i[n] && delete i[n];
        this.extend(this, s, e, i), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0,
            this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }
    var o = "Parallax",
        r = 30,
        s = {
            relativeInput: !1,
            clipRelativeInput: !1,
            calibrationThreshold: 100,
            calibrationDelay: 500,
            supportDelay: 500,
            calibrateX: !1,
            calibrateY: !0,
            invertX: !0,
            invertY: !0,
            limitX: !1,
            limitY: !1,
            scalarX: 10,
            scalarY: 10,
            frictionX: .1,
            frictionY: .1,
            originX: .5,
            originY: .5
        };
    n.prototype.extend = function() {
        if (arguments.length > 1)
            for (var t = arguments[0], e = 1, i = arguments.length; e < i; e++) {
                var n = arguments[e];
                for (var o in n) t[o] = n[o]
            }
    }, n.prototype.data = function(t, e) {
        return this.deserialize(t.getAttribute("data-" + e))
    }, n.prototype.deserialize = function(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
    }, n.prototype.camelCase = function(t) {
        return t.replace(/-+(.)?/g, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, n.prototype.transformSupport = function(n) {
        for (var o = e.createElement("div"), r = !1, s = null, a = !1, l = null, c = null, u = 0, h = this.vendors.length; u < h; u++)
            if (null !== this.vendors[u] ? (l = this.vendors[u][0] + "transform", c = this.vendors[u][1] + "Transform") : (l = "transform", c = "transform"), o.style[c] !== i) {
                r = !0;
                break
            }
        switch (n) {
            case "2D":
                a = r;
                break;
            case "3D":
                if (r) {
                    var p = e.body || e.createElement("body"),
                        d = e.documentElement,
                        f = d.style.overflow;
                    e.body || (d.style.overflow = "hidden", d.appendChild(p), p.style.overflow = "hidden", p.style.background = ""), p.appendChild(o), o.style[c] = "translate3d(1px,1px,1px)", s = t.getComputedStyle(o).getPropertyValue(l), a = s !== i && s.length > 0 && "none" !== s, d.style.overflow = f, p.removeChild(o)
                }
        }
        return a
    }, n.prototype.ww = null, n.prototype.wh = null, n.prototype.wcx = null, n.prototype.wcy = null, n.prototype.wrx = null, n.prototype.wry = null, n.prototype.portrait = null, n.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), n.prototype.vendors = [null, ["-webkit-", "webkit"],
        ["-moz-", "Moz"],
        ["-o-", "O"],
        ["-ms-", "ms"]
    ], n.prototype.motionSupport = !!t.DeviceMotionEvent, n.prototype.orientationSupport = !!t.DeviceOrientationEvent, n.prototype.orientationStatus = 0, n.prototype.transform2DSupport = n.prototype.transformSupport("2D"), n.prototype.transform3DSupport = n.prototype.transformSupport("3D"), n.prototype.propertyCache = {}, n.prototype.initialise = function() {
        this.transform3DSupport && this.accelerate(this.element);
        var e = t.getComputedStyle(this.element);
        "static" === e.getPropertyValue("position") && (this.element.style.position = "relative"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, n.prototype.updateLayers = function() {
        this.layers = this.element.getElementsByClassName("layer"), this.depths = [];
        for (var t = 0, e = this.layers.length; t < e; t++) {
            var i = this.layers[t];
            this.transform3DSupport && this.accelerate(i), i.style.position = t ? "absolute" : "relative", i.style.display = "block", i.style.left = 0, i.style.top = 0, this.depths.push(this.data(i, "depth") || 0)
        }
    }, n.prototype.updateDimensions = function() {
        this.ww = t.innerWidth, this.wh = t.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, n.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, n.prototype.queueCalibration = function(t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    }, n.prototype.enable = function() {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, t.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, t.addEventListener("mousemove", this.onMouseMove)), t.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, n.prototype.disable = function() {
        this.enabled && (this.enabled = !1, this.orientationSupport ? t.removeEventListener("deviceorientation", this.onDeviceOrientation) : t.removeEventListener("mousemove", this.onMouseMove), t.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, n.prototype.calibrate = function(t, e) {
        this.calibrateX = t === i ? this.calibrateX : t, this.calibrateY = e === i ? this.calibrateY : e
    }, n.prototype.invert = function(t, e) {
        this.invertX = t === i ? this.invertX : t, this.invertY = e === i ? this.invertY : e
    }, n.prototype.friction = function(t, e) {
        this.frictionX = t === i ? this.frictionX : t, this.frictionY = e === i ? this.frictionY : e
    }, n.prototype.scalar = function(t, e) {
        this.scalarX = t === i ? this.scalarX : t, this.scalarY = e === i ? this.scalarY : e
    }, n.prototype.limit = function(t, e) {
        this.limitX = t === i ? this.limitX : t, this.limitY = e === i ? this.limitY : e
    }, n.prototype.origin = function(t, e) {
        this.originX = t === i ? this.originX : t, this.originY = e === i ? this.originY : e
    }, n.prototype.clamp = function(t, e, i) {
        return t = Math.max(t, e), t = Math.min(t, i)
    }, n.prototype.css = function(t, e, n) {
        var o = this.propertyCache[e];
        if (!o)
            for (var r = 0, s = this.vendors.length; r < s; r++)
                if (o = null !== this.vendors[r] ? this.camelCase(this.vendors[r][1] + "-" + e) : e, t.style[o] !== i) {
                    this.propertyCache[e] = o;
                    break
                }
        t.style[o] = n
    }, n.prototype.accelerate = function(t) {
        this.css(t, "transform", "translate3d(0,0,0)"), this.css(t, "transform-style", "preserve-3d"), this.css(t, "backface-visibility", "hidden")
    }, n.prototype.setPosition = function(t, e, i) {
        e += "px", i += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
    }, n.prototype.onOrientationTimer = function(t) {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, n.prototype.onCalibrationTimer = function(t) {
        this.calibrationFlag = !0
    }, n.prototype.onWindowResize = function(t) {
        this.updateDimensions()
    }, n.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var t = this.ix - this.cx,
            e = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0, n = this.layers.length; i < n; i++) {
            var o = this.layers[i],
                r = this.depths[i],
                s = this.vx * r * (this.invertX ? -1 : 1),
                a = this.vy * r * (this.invertY ? -1 : 1);
            this.setPosition(o, s, a)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, n.prototype.onDeviceOrientation = function(t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var e = (t.beta || 0) / r,
                i = (t.gamma || 0) / r,
                n = this.wh > this.ww;
            this.portrait !== n && (this.portrait = n, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = e, this.cy = i), this.ix = e, this.iy = i
        }
    }, n.prototype.onMouseMove = function(t) {
        var e = t.clientX,
            i = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry)
    }, t[o] = n
}(window, document),
function() {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
        var n = (new Date).getTime(),
            o = Math.max(0, 16 - (n - t)),
            r = window.setTimeout(function() {
                e(n + o)
            }, o);
        return t = n + o, r
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    })
}(), ! function(t, e, i) {
    "use strict";

    function n(t, e) {
        this.element = t, this.layers = t.getElementsByClassName("layer");
        var i = {
            calibrateX: this.data(this.element, "calibrate-x"),
            calibrateY: this.data(this.element, "calibrate-y"),
            invertX: this.data(this.element, "invert-x"),
            invertY: this.data(this.element, "invert-y"),
            limitX: this.data(this.element, "limit-x"),
            limitY: this.data(this.element, "limit-y"),
            scalarX: this.data(this.element, "scalar-x"),
            scalarY: this.data(this.element, "scalar-y"),
            frictionX: this.data(this.element, "friction-x"),
            frictionY: this.data(this.element, "friction-y"),
            originX: this.data(this.element, "origin-x"),
            originY: this.data(this.element, "origin-y")
        };
        for (var n in i) null === i[n] && delete i[n];
        this.extend(this, s, e, i), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }
    var o = "Parallax",
        r = 30,
        s = {
            relativeInput: !1,
            clipRelativeInput: !1,
            calibrationThreshold: 100,
            calibrationDelay: 500,
            supportDelay: 500,
            calibrateX: !1,
            calibrateY: !0,
            invertX: !0,
            invertY: !0,
            limitX: !1,
            limitY: !1,
            scalarX: 10,
            scalarY: 10,
            frictionX: .1,
            frictionY: .1,
            originX: .5,
            originY: .5
        };
    n.prototype.extend = function() {
        if (arguments.length > 1)
            for (var t = arguments[0], e = 1, i = arguments.length; i > e; e++) {
                var n = arguments[e];
                for (var o in n) t[o] = n[o]
            }
    }, n.prototype.data = function(t, e) {
        return this.deserialize(t.getAttribute("data-" + e))
    }, n.prototype.deserialize = function(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
    }, n.prototype.camelCase = function(t) {
        return t.replace(/-+(.)?/g, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, n.prototype.transformSupport = function(n) {
        for (var o = e.createElement("div"), r = !1, s = null, a = !1, l = null, c = null, u = 0, h = this.vendors.length; h > u; u++)
            if (null !== this.vendors[u] ? (l = this.vendors[u][0] + "transform", c = this.vendors[u][1] + "Transform") : (l = "transform", c = "transform"), o.style[c] !== i) {
                r = !0;
                break
            }
        switch (n) {
            case "2D":
                a = r;
                break;
            case "3D":
                if (r) {
                    var p = e.body || e.createElement("body"),
                        d = e.documentElement,
                        f = d.style.overflow;
                    e.body || (d.style.overflow = "hidden", d.appendChild(p), p.style.overflow = "hidden", p.style.background = ""), p.appendChild(o), o.style[c] = "translate3d(1px,1px,1px)", s = t.getComputedStyle(o).getPropertyValue(l), a = s !== i && s.length > 0 && "none" !== s, d.style.overflow = f, p.removeChild(o)
                }
        }
        return a
    }, n.prototype.ww = null, n.prototype.wh = null, n.prototype.wcx = null, n.prototype.wcy = null, n.prototype.wrx = null, n.prototype.wry = null, n.prototype.portrait = null, n.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), n.prototype.vendors = [null, ["-webkit-", "webkit"],
        ["-moz-", "Moz"],
        ["-o-", "O"],
        ["-ms-", "ms"]
    ], n.prototype.motionSupport = !!t.DeviceMotionEvent, n.prototype.orientationSupport = !!t.DeviceOrientationEvent, n.prototype.orientationStatus = 0, n.prototype.transform2DSupport = n.prototype.transformSupport("2D"), n.prototype.transform3DSupport = n.prototype.transformSupport("3D"), n.prototype.propertyCache = {}, n.prototype.initialise = function() {
        this.transform3DSupport && this.accelerate(this.element);
        var e = t.getComputedStyle(this.element);
        "static" === e.getPropertyValue("position") && (this.element.style.position = "relative"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, n.prototype.updateLayers = function() {
        this.layers = this.element.getElementsByClassName("layer"), this.depths = [];
        for (var t = 0, e = this.layers.length; e > t; t++) {
            var i = this.layers[t];
            this.transform3DSupport && this.accelerate(i), i.style.position = t ? "absolute" : "relative", i.style.display = "block", i.style.left = 0, i.style.top = 0, this.depths.push(this.data(i, "depth") || 0)
        }
    }, n.prototype.updateDimensions = function() {
        this.ww = t.innerWidth, this.wh = t.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, n.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, n.prototype.queueCalibration = function(t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    }, n.prototype.enable = function() {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, t.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, t.addEventListener("mousemove", this.onMouseMove)), t.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, n.prototype.disable = function() {
        this.enabled && (this.enabled = !1, this.orientationSupport ? t.removeEventListener("deviceorientation", this.onDeviceOrientation) : t.removeEventListener("mousemove", this.onMouseMove), t.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, n.prototype.calibrate = function(t, e) {
        this.calibrateX = t === i ? this.calibrateX : t, this.calibrateY = e === i ? this.calibrateY : e
    }, n.prototype.invert = function(t, e) {
        this.invertX = t === i ? this.invertX : t, this.invertY = e === i ? this.invertY : e
    }, n.prototype.friction = function(t, e) {
        this.frictionX = t === i ? this.frictionX : t, this.frictionY = e === i ? this.frictionY : e
    }, n.prototype.scalar = function(t, e) {
        this.scalarX = t === i ? this.scalarX : t, this.scalarY = e === i ? this.scalarY : e
    }, n.prototype.limit = function(t, e) {
        this.limitX = t === i ? this.limitX : t, this.limitY = e === i ? this.limitY : e
    }, n.prototype.origin = function(t, e) {
        this.originX = t === i ? this.originX : t, this.originY = e === i ? this.originY : e
    }, n.prototype.clamp = function(t, e, i) {
        return t = Math.max(t, e), t = Math.min(t, i)
    }, n.prototype.css = function(t, e, n) {
        var o = this.propertyCache[e];
        if (!o)
            for (var r = 0, s = this.vendors.length; s > r; r++)
                if (o = null !== this.vendors[r] ? this.camelCase(this.vendors[r][1] + "-" + e) : e, t.style[o] !== i) {
                    this.propertyCache[e] = o;
                    break
                }
        t.style[o] = n
    }, n.prototype.accelerate = function(t) {
        this.css(t, "transform", "translate3d(0,0,0)"), this.css(t, "transform-style", "preserve-3d"), this.css(t, "backface-visibility", "hidden")
    }, n.prototype.setPosition = function(t, e, i) {
        e += "px", i += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
    }, n.prototype.onOrientationTimer = function() {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, n.prototype.onCalibrationTimer = function() {
        this.calibrationFlag = !0
    }, n.prototype.onWindowResize = function() {
        this.updateDimensions()
    }, n.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var t = this.ix - this.cx,
            e = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0, n = this.layers.length; n > i; i++) {
            var o = this.layers[i],
                r = this.depths[i],
                s = this.vx * r * (this.invertX ? -1 : 1),
                a = this.vy * r * (this.invertY ? -1 : 1);
            this.setPosition(o, s, a)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, n.prototype.onDeviceOrientation = function(t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var e = (t.beta || 0) / r,
                i = (t.gamma || 0) / r,
                n = this.wh > this.ww;
            this.portrait !== n && (this.portrait = n, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = e, this.cy = i), this.ix = e, this.iy = i
        }
    }, n.prototype.onMouseMove = function(t) {
        var e = t.clientX,
            i = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry)
    }, t[o] = n
}(window, document),
function() {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
        var i = (new Date).getTime(),
            n = Math.max(0, 16 - (i - t)),
            o = window.setTimeout(function() {
                e(i + n)
            }, n);
        return t = i + n, o
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    })
}(),
function(t, e, i, n) {
    "use strict";

    function o(e, i) {
        this.element = e, this.$context = t(e).data("api", this), this.$layers = this.$context.find(".layer");
        var n = {
            calibrateX: this.$context.data("calibrate-x") || null,
            calibrateY: this.$context.data("calibrate-y") || null,
            invertX: this.$context.data("invert-x") || null,
            invertY: this.$context.data("invert-y") || null,
            limitX: parseFloat(this.$context.data("limit-x")) || null,
            limitY: parseFloat(this.$context.data("limit-y")) || null,
            scalarX: parseFloat(this.$context.data("scalar-x")) || null,
            scalarY: parseFloat(this.$context.data("scalar-y")) || null,
            frictionX: parseFloat(this.$context.data("friction-x")) || null,
            frictionY: parseFloat(this.$context.data("friction-y")) || null,
            originX: parseFloat(this.$context.data("origin-x")) || null,
            originY: parseFloat(this.$context.data("origin-y")) || null
        };
        for (var o in n) null === n[o] && delete n[o];
        t.extend(this, a, i, n), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }
    var r = "parallax",
        s = 30,
        a = {
            relativeInput: !1,
            clipRelativeInput: !1,
            calibrationThreshold: 100,
            calibrationDelay: 500,
            supportDelay: 500,
            calibrateX: !1,
            calibrateY: !0,
            invertX: !0,
            invertY: !0,
            limitX: !1,
            limitY: !1,
            scalarX: 10,
            scalarY: 10,
            frictionX: .1,
            frictionY: .1,
            originX: .5,
            originY: .5
        };
    o.prototype.transformSupport = function(t) {
        for (var o = i.createElement("div"), r = !1, s = null, a = !1, l = null, c = null, u = 0, h = this.vendors.length; u < h; u++)
            if (null !== this.vendors[u] ? (l = this.vendors[u][0] + "transform", c = this.vendors[u][1] + "Transform") : (l = "transform", c = "transform"), o.style[c] !== n) {
                r = !0;
                break
            }
        switch (t) {
            case "2D":
                a = r;
                break;
            case "3D":
                if (r) {
                    var p = i.body || i.createElement("body"),
                        d = i.documentElement,
                        f = d.style.overflow;
                    i.body || (d.style.overflow = "hidden", d.appendChild(p), p.style.overflow = "hidden", p.style.background = ""), p.appendChild(o), o.style[c] = "translate3d(1px,1px,1px)", s = e.getComputedStyle(o).getPropertyValue(l), a = s !== n && s.length > 0 && "none" !== s, d.style.overflow = f, p.removeChild(o)
                }
        }
        return a
    }, o.prototype.ww = null, o.prototype.wh = null, o.prototype.wcx = null, o.prototype.wcy = null, o.prototype.wrx = null, o.prototype.wry = null, o.prototype.portrait = null, o.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), o.prototype.vendors = [null, ["-webkit-", "webkit"],
        ["-moz-", "Moz"],
        ["-o-", "O"],
        ["-ms-", "ms"]
    ], o.prototype.motionSupport = !!e.DeviceMotionEvent, o.prototype.orientationSupport = !!e.DeviceOrientationEvent, o.prototype.orientationStatus = 0, o.prototype.transform2DSupport = o.prototype.transformSupport("2D"), o.prototype.transform3DSupport = o.prototype.transformSupport("3D"), o.prototype.propertyCache = {}, o.prototype.initialise = function() {
        "static" === this.$context.css("position") && this.$context.css({
            position: "relative"
        }), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, o.prototype.updateLayers = function() {
        this.$layers = this.$context.find(".layer"), this.depths = [], this.$layers.css({
            position: "absolute",
            display: "block",
            left: 0,
            top: 0
        }), this.$layers.first().css({
            position: "relative"
        }), this.accelerate(this.$layers), this.$layers.each(t.proxy(function(e, i) {
            this.depths.push(t(i).data("depth") || 0)
        }, this))
    }, o.prototype.updateDimensions = function() {
        this.ww = e.innerWidth, this.wh = e.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, o.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, o.prototype.queueCalibration = function(t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    }, o.prototype.enable = function() {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, e.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, e.addEventListener("mousemove", this.onMouseMove)), e.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, o.prototype.disable = function() {
        this.enabled && (this.enabled = !1, this.orientationSupport ? e.removeEventListener("deviceorientation", this.onDeviceOrientation) : e.removeEventListener("mousemove", this.onMouseMove), e.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, o.prototype.calibrate = function(t, e) {
        this.calibrateX = t === n ? this.calibrateX : t, this.calibrateY = e === n ? this.calibrateY : e
    }, o.prototype.invert = function(t, e) {
        this.invertX = t === n ? this.invertX : t, this.invertY = e === n ? this.invertY : e
    }, o.prototype.friction = function(t, e) {
        this.frictionX = t === n ? this.frictionX : t, this.frictionY = e === n ? this.frictionY : e
    }, o.prototype.scalar = function(t, e) {
        this.scalarX = t === n ? this.scalarX : t, this.scalarY = e === n ? this.scalarY : e
    }, o.prototype.limit = function(t, e) {
        this.limitX = t === n ? this.limitX : t, this.limitY = e === n ? this.limitY : e
    }, o.prototype.origin = function(t, e) {
        this.originX = t === n ? this.originX : t, this.originY = e === n ? this.originY : e
    }, o.prototype.clamp = function(t, e, i) {
        return t = Math.max(t, e), t = Math.min(t, i)
    }, o.prototype.css = function(e, i, o) {
        var r = this.propertyCache[i];
        if (!r)
            for (var s = 0, a = this.vendors.length; s < a; s++)
                if (r = null !== this.vendors[s] ? t.camelCase(this.vendors[s][1] + "-" + i) : i, e.style[r] !== n) {
                    this.propertyCache[i] = r;
                    break
                }
        e.style[r] = o
    }, o.prototype.accelerate = function(t) {
        for (var e = 0, i = t.length; e < i; e++) {
            var n = t[e];
            this.css(n, "transform", "translate3d(0,0,0)"), this.css(n, "transform-style", "preserve-3d"), this.css(n, "backface-visibility", "hidden")
        }
    }, o.prototype.setPosition = function(t, e, i) {
        e += "px", i += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
    }, o.prototype.onOrientationTimer = function(t) {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, o.prototype.onCalibrationTimer = function(t) {
        this.calibrationFlag = !0
    }, o.prototype.onWindowResize = function(t) {
        this.updateDimensions()
    }, o.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var t = this.ix - this.cx,
            e = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0, n = this.$layers.length; i < n; i++) {
            var o = this.depths[i],
                r = this.$layers[i],
                s = this.vx * o * (this.invertX ? -1 : 1),
                a = this.vy * o * (this.invertY ? -1 : 1);
            this.setPosition(r, s, a)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, o.prototype.onDeviceOrientation = function(t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var i = (t.beta || 0) / s,
                n = (t.gamma || 0) / s,
                o = e.innerHeight > e.innerWidth;
            this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = i, this.cy = n), this.ix = i, this.iy = n
        }
    }, o.prototype.onMouseMove = function(t) {
        var e = t.clientX,
            i = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry)
    };
    var l = {
        enable: o.prototype.enable,
        disable: o.prototype.disable,
        updateLayers: o.prototype.updateLayers,
        calibrate: o.prototype.calibrate,
        friction: o.prototype.friction,
        invert: o.prototype.invert,
        scalar: o.prototype.scalar,
        limit: o.prototype.limit,
        origin: o.prototype.origin
    };
    t.fn[r] = function(e) {
        var i = arguments;
        return this.each(function() {
            var n = t(this),
                s = n.data(r);
            s || (s = new o(this, e), n.data(r, s)), l[e] && s[e].apply(s, Array.prototype.slice.call(i, 1))
        })
    }
}(window.jQuery || window.Zepto, window, document),
function() {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
        var n = (new Date).getTime(),
            o = Math.max(0, 16 - (n - t)),
            r = window.setTimeout(function() {
                e(n + o)
            }, o);
        return t = n + o, r
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    })
}(), ! function(t, e, i, n) {
    "use strict";

    function o(e, i) {
        this.element = e, this.$context = t(e).data("api", this), this.$layers = this.$context.find(".layer");
        var n = {
            calibrateX: this.$context.data("calibrate-x") || null,
            calibrateY: this.$context.data("calibrate-y") || null,
            invertX: this.$context.data("invert-x") || null,
            invertY: this.$context.data("invert-y") || null,
            limitX: parseFloat(this.$context.data("limit-x")) || null,
            limitY: parseFloat(this.$context.data("limit-y")) || null,
            scalarX: parseFloat(this.$context.data("scalar-x")) || null,
            scalarY: parseFloat(this.$context.data("scalar-y")) || null,
            frictionX: parseFloat(this.$context.data("friction-x")) || null,
            frictionY: parseFloat(this.$context.data("friction-y")) || null,
            originX: parseFloat(this.$context.data("origin-x")) || null,
            originY: parseFloat(this.$context.data("origin-y")) || null
        };
        for (var o in n) null === n[o] && delete n[o];
        t.extend(this, a, i, n), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }
    var r = "parallax",
        s = 30,
        a = {
            relativeInput: !1,
            clipRelativeInput: !1,
            calibrationThreshold: 100,
            calibrationDelay: 500,
            supportDelay: 500,
            calibrateX: !1,
            calibrateY: !0,
            invertX: !0,
            invertY: !0,
            limitX: !1,
            limitY: !1,
            scalarX: 10,
            scalarY: 10,
            frictionX: .1,
            frictionY: .1,
            originX: .5,
            originY: .5
        };
    o.prototype.transformSupport = function(t) {
        for (var o = i.createElement("div"), r = !1, s = null, a = !1, l = null, c = null, u = 0, h = this.vendors.length; h > u; u++)
            if (null !== this.vendors[u] ? (l = this.vendors[u][0] + "transform", c = this.vendors[u][1] + "Transform") : (l = "transform", c = "transform"), o.style[c] !== n) {
                r = !0;
                break
            }
        switch (t) {
            case "2D":
                a = r;
                break;
            case "3D":
                if (r) {
                    var p = i.body || i.createElement("body"),
                        d = i.documentElement,
                        f = d.style.overflow;
                    i.body || (d.style.overflow = "hidden", d.appendChild(p), p.style.overflow = "hidden", p.style.background = ""), p.appendChild(o), o.style[c] = "translate3d(1px,1px,1px)", s = e.getComputedStyle(o).getPropertyValue(l), a = s !== n && s.length > 0 && "none" !== s, d.style.overflow = f, p.removeChild(o)
                }
        }
        return a
    }, o.prototype.ww = null, o.prototype.wh = null, o.prototype.wcx = null, o.prototype.wcy = null, o.prototype.wrx = null, o.prototype.wry = null, o.prototype.portrait = null, o.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), o.prototype.vendors = [null, ["-webkit-", "webkit"],
        ["-moz-", "Moz"],
        ["-o-", "O"],
        ["-ms-", "ms"]
    ], o.prototype.motionSupport = !!e.DeviceMotionEvent, o.prototype.orientationSupport = !!e.DeviceOrientationEvent, o.prototype.orientationStatus = 0, o.prototype.transform2DSupport = o.prototype.transformSupport("2D"), o.prototype.transform3DSupport = o.prototype.transformSupport("3D"), o.prototype.propertyCache = {}, o.prototype.initialise = function() {
        "static" === this.$context.css("position") && this.$context.css({
            position: "relative"
        }), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, o.prototype.updateLayers = function() {
        this.$layers = this.$context.find(".layer"), this.depths = [], this.$layers.css({
            position: "absolute",
            display: "block",
            left: 0,
            top: 0
        }), this.$layers.first().css({
            position: "relative"
        }), this.accelerate(this.$layers), this.$layers.each(t.proxy(function(e, i) {
            this.depths.push(t(i).data("depth") || 0)
        }, this))
    }, o.prototype.updateDimensions = function() {
        this.ww = e.innerWidth, this.wh = e.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, o.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, o.prototype.queueCalibration = function(t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    }, o.prototype.enable = function() {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, e.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, e.addEventListener("mousemove", this.onMouseMove)), e.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, o.prototype.disable = function() {
        this.enabled && (this.enabled = !1, this.orientationSupport ? e.removeEventListener("deviceorientation", this.onDeviceOrientation) : e.removeEventListener("mousemove", this.onMouseMove), e.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, o.prototype.calibrate = function(t, e) {
        this.calibrateX = t === n ? this.calibrateX : t, this.calibrateY = e === n ? this.calibrateY : e
    }, o.prototype.invert = function(t, e) {
        this.invertX = t === n ? this.invertX : t, this.invertY = e === n ? this.invertY : e
    }, o.prototype.friction = function(t, e) {
        this.frictionX = t === n ? this.frictionX : t, this.frictionY = e === n ? this.frictionY : e
    }, o.prototype.scalar = function(t, e) {
        this.scalarX = t === n ? this.scalarX : t, this.scalarY = e === n ? this.scalarY : e
    }, o.prototype.limit = function(t, e) {
        this.limitX = t === n ? this.limitX : t, this.limitY = e === n ? this.limitY : e
    }, o.prototype.origin = function(t, e) {
        this.originX = t === n ? this.originX : t, this.originY = e === n ? this.originY : e
    }, o.prototype.clamp = function(t, e, i) {
        return t = Math.max(t, e), t = Math.min(t, i)
    }, o.prototype.css = function(e, i, o) {
        var r = this.propertyCache[i];
        if (!r)
            for (var s = 0, a = this.vendors.length; a > s; s++)
                if (r = null !== this.vendors[s] ? t.camelCase(this.vendors[s][1] + "-" + i) : i, e.style[r] !== n) {
                    this.propertyCache[i] = r;
                    break
                }
        e.style[r] = o
    }, o.prototype.accelerate = function(t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            this.css(n, "transform", "translate3d(0,0,0)"), this.css(n, "transform-style", "preserve-3d"), this.css(n, "backface-visibility", "hidden")
        }
    }, o.prototype.setPosition = function(t, e, i) {
        e += "px", i += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
    }, o.prototype.onOrientationTimer = function() {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, o.prototype.onCalibrationTimer = function() {
        this.calibrationFlag = !0
    }, o.prototype.onWindowResize = function() {
        this.updateDimensions()
    }, o.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var t = this.ix - this.cx,
            e = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0, n = this.$layers.length; n > i; i++) {
            var o = this.depths[i],
                r = this.$layers[i],
                s = this.vx * o * (this.invertX ? -1 : 1),
                a = this.vy * o * (this.invertY ? -1 : 1);
            this.setPosition(r, s, a)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, o.prototype.onDeviceOrientation = function(t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var i = (t.beta || 0) / s,
                n = (t.gamma || 0) / s,
                o = e.innerHeight > e.innerWidth;
            this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = i, this.cy = n), this.ix = i, this.iy = n
        }
    }, o.prototype.onMouseMove = function(t) {
        var e = t.clientX,
            i = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry)
    };
    var l = {
        enable: o.prototype.enable,
        disable: o.prototype.disable,
        updateLayers: o.prototype.updateLayers,
        calibrate: o.prototype.calibrate,
        friction: o.prototype.friction,
        invert: o.prototype.invert,
        scalar: o.prototype.scalar,
        limit: o.prototype.limit,
        origin: o.prototype.origin
    };
    t.fn[r] = function(e) {
        var i = arguments;
        return this.each(function() {
            var n = t(this),
                s = n.data(r);
            s || (s = new o(this, e), n.data(r, s)), l[e] && s[e].apply(s, Array.prototype.slice.call(i, 1))
        })
    }
}(window.jQuery || window.Zepto, window, document),
function() {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
        var i = (new Date).getTime(),
            n = Math.max(0, 16 - (i - t)),
            o = window.setTimeout(function() {
                e(i + n)
            }, n);
        return t = i + n, o
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    })
}(),
function(t, e, i, n) {
    "use strict";

    function o(t, e, i) {
        return setTimeout(c(t, i), e)
    }

    function r(t, e, i) {
        return !!Array.isArray(t) && (s(t, i[e], i), !0)
    }

    function s(t, e, i) {
        var o;
        if (t)
            if (t.forEach) t.forEach(e, i);
            else if (t.length !== n)
            for (o = 0; o < t.length;) e.call(i, t[o], o, t), o++;
        else
            for (o in t) t.hasOwnProperty(o) && e.call(i, t[o], o, t)
    }

    function a(e, i, n) {
        var o = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
        return function() {
            var i = new Error("get-stack-trace"),
                n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                r = t.console && (t.console.warn || t.console.log);
            return r && r.call(t.console, o, n), e.apply(this, arguments)
        }
    }

    function l(t, e, i) {
        var n, o = e.prototype;
        n = t.prototype = Object.create(o), n.constructor = t, n._super = o, i && ht(n, i)
    }

    function c(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function u(t, e) {
        return typeof t == ft ? t.apply(e ? e[0] || n : n, e) : t
    }

    function h(t, e) {
        return t === n ? e : t
    }

    function p(t, e, i) {
        s(T(e), function(e) {
            t.addEventListener(e, i, !1)
        })
    }

    function d(t, e, i) {
        s(T(e), function(e) {
            t.removeEventListener(e, i, !1)
        })
    }

    function f(t, e) {
        for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
        }
        return !1
    }

    function m(t, e) {
        return t.indexOf(e) > -1
    }

    function T(t) {
        return t.trim().split(/\s+/g)
    }

    function y(t, e, i) {
        if (t.indexOf && !i) return t.indexOf(e);
        for (var n = 0; n < t.length;) {
            if (i && t[n][i] == e || !i && t[n] === e) return n;
            n++
        }
        return -1
    }

    function v(t) {
        return Array.prototype.slice.call(t, 0)
    }

    function g(t, e, i) {
        for (var n = [], o = [], r = 0; r < t.length;) {
            var s = e ? t[r][e] : t[r];
            y(o, s) < 0 && n.push(t[r]), o[r] = s, r++
        }
        return i && (n = e ? n.sort(function(t, i) {
            return t[e] > i[e]
        }) : n.sort()), n
    }

    function b(t, e) {
        for (var i, o, r = e[0].toUpperCase() + e.slice(1), s = 0; s < pt.length;) {
            if (i = pt[s], o = i ? i + r : e, o in t) return o;
            s++
        }
        return n
    }

    function S() {
        return bt++
    }

    function w(e) {
        var i = e.ownerDocument || e;
        return i.defaultView || i.parentWindow || t
    }

    function A(t, e) {
        var i = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            u(t.options.enable, [t]) && i.handler(e)
        }, this.init()
    }

    function x(t) {
        var e, i = t.options.inputClass;
        return new(e = i ? i : At ? F : xt ? $ : wt ? W : O)(t, P)
    }

    function P(t, e, i) {
        var n = i.pointers.length,
            o = i.changedPointers.length,
            r = e & Gt && n - o === 0,
            s = e & (Dt | Bt) && n - o === 0;
        i.isFirst = !!r, i.isFinal = !!s, r && (t.session = {}), i.eventType = e, M(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
    }

    function M(t, e) {
        var i = t.session,
            n = e.pointers,
            o = n.length;
        i.firstInput || (i.firstInput = k(e)), o > 1 && !i.firstMultiple ? i.firstMultiple = k(e) : 1 === o && (i.firstMultiple = !1);
        var r = i.firstInput,
            s = i.firstMultiple,
            a = s ? s.center : r.center,
            l = e.center = G(n);
        e.timeStamp = yt(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = I(a, l), e.distance = B(a, l), C(i, e), e.offsetDirection = D(e.deltaX, e.deltaY);
        var c = H(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = c.x, e.overallVelocityY = c.y, e.overallVelocity = Tt(c.x) > Tt(c.y) ? c.x : c.y, e.scale = s ? N(s.pointers, n) : 1, e.rotation = s ? L(s.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, E(i, e);
        var u = t.element;
        f(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u
    }

    function C(t, e) {
        var i = e.center,
            n = t.offsetDelta || {},
            o = t.prevDelta || {},
            r = t.prevInput || {};
        e.eventType !== Gt && r.eventType !== Dt || (o = t.prevDelta = {
            x: r.deltaX || 0,
            y: r.deltaY || 0
        }, n = t.offsetDelta = {
            x: i.x,
            y: i.y
        }), e.deltaX = o.x + (i.x - n.x), e.deltaY = o.y + (i.y - n.y)
    }

    function E(t, e) {
        var i, o, r, s, a = t.lastInterval || e,
            l = e.timeStamp - a.timeStamp;
        if (e.eventType != Bt && (l > kt || a.velocity === n)) {
            var c = e.deltaX - a.deltaX,
                u = e.deltaY - a.deltaY,
                h = H(l, c, u);
            o = h.x, r = h.y, i = Tt(h.x) > Tt(h.y) ? h.x : h.y, s = D(c, u), t.lastInterval = e
        } else i = a.velocity, o = a.velocityX, r = a.velocityY, s = a.direction;
        e.velocity = i, e.velocityX = o, e.velocityY = r, e.direction = s
    }

    function k(t) {
        for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
            clientX: mt(t.pointers[i].clientX),
            clientY: mt(t.pointers[i].clientY)
        }, i++;
        return {
            timeStamp: yt(),
            pointers: e,
            center: G(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        }
    }

    function G(t) {
        var e = t.length;
        if (1 === e) return {
            x: mt(t[0].clientX),
            y: mt(t[0].clientY)
        };
        for (var i = 0, n = 0, o = 0; o < e;) i += t[o].clientX, n += t[o].clientY, o++;
        return {
            x: mt(i / e),
            y: mt(n / e)
        }
    }

    function H(t, e, i) {
        return {
            x: e / t || 0,
            y: i / t || 0
        }
    }

    function D(t, e) {
        return t === e ? It : Tt(t) >= Tt(e) ? t < 0 ? Lt : Nt : e < 0 ? Ot : Ft
    }

    function B(t, e, i) {
        i || (i = Vt);
        var n = e[i[0]] - t[i[0]],
            o = e[i[1]] - t[i[1]];
        return Math.sqrt(n * n + o * o)
    }

    function I(t, e, i) {
        i || (i = Vt);
        var n = e[i[0]] - t[i[0]],
            o = e[i[1]] - t[i[1]];
        return 180 * Math.atan2(o, n) / Math.PI
    }

    function L(t, e) {
        return I(e[1], e[0], Wt) + I(t[1], t[0], Wt)
    }

    function N(t, e) {
        return B(e[0], e[1], Wt) / B(t[0], t[1], Wt)
    }

    function O() {
        this.evEl = qt, this.evWin = Yt, this.pressed = !1, A.apply(this, arguments)
    }

    function F() {
        this.evEl = _t, this.evWin = Kt, A.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function X() {
        this.evTarget = Zt, this.evWin = Jt, this.started = !1, A.apply(this, arguments)
    }

    function R(t, e) {
        var i = v(t.touches),
            n = v(t.changedTouches);
        return e & (Dt | Bt) && (i = g(i.concat(n), "identifier", !0)), [i, n]
    }

    function $() {
        this.evTarget = ee, this.targetIds = {}, A.apply(this, arguments)
    }

    function V(t, e) {
        var i = v(t.touches),
            n = this.targetIds;
        if (e & (Gt | Ht) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
        var o, r, s = v(t.changedTouches),
            a = [],
            l = this.target;
        if (r = i.filter(function(t) {
                return f(t.target, l)
            }), e === Gt)
            for (o = 0; o < r.length;) n[r[o].identifier] = !0, o++;
        for (o = 0; o < s.length;) n[s[o].identifier] && a.push(s[o]), e & (Dt | Bt) && delete n[s[o].identifier], o++;
        return a.length ? [g(r.concat(a), "identifier", !0), a] : void 0
    }

    function W() {
        A.apply(this, arguments);
        var t = c(this.handler, this);
        this.touch = new $(this.manager, t), this.mouse = new O(this.manager, t), this.primaryTouch = null, this.lastTouches = []
    }

    function j(t, e) {
        t & Gt ? (this.primaryTouch = e.changedPointers[0].identifier, q.call(this, e)) : t & (Dt | Bt) && q.call(this, e)
    }

    function q(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
            var i = {
                x: e.clientX,
                y: e.clientY
            };
            this.lastTouches.push(i);
            var n = this.lastTouches,
                o = function() {
                    var t = n.indexOf(i);
                    t > -1 && n.splice(t, 1)
                };
            setTimeout(o, ie)
        }
    }

    function Y(t) {
        for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var o = this.lastTouches[n],
                r = Math.abs(e - o.x),
                s = Math.abs(i - o.y);
            if (r <= ne && s <= ne) return !0
        }
        return !1
    }

    function z(t, e) {
        this.manager = t, this.set(e)
    }

    function U(t) {
        if (m(t, ce)) return ce;
        var e = m(t, ue),
            i = m(t, he);
        return e && i ? ce : e || i ? e ? ue : he : m(t, le) ? le : ae
    }

    function _() {
        if (!re) return !1;
        var e = {},
            i = t.CSS && t.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
            e[n] = !i || t.CSS.supports("touch-action", n)
        }), e
    }

    function K(t) {
        this.options = ht({}, this.defaults, t || {}), this.id = S(), this.manager = null, this.options.enable = h(this.options.enable, !0), this.state = de, this.simultaneous = {}, this.requireFail = []
    }

    function Q(t) {
        return t & ve ? "cancel" : t & Te ? "end" : t & me ? "move" : t & fe ? "start" : ""
    }

    function Z(t) {
        return t == Ft ? "down" : t == Ot ? "up" : t == Lt ? "left" : t == Nt ? "right" : ""
    }

    function J(t, e) {
        var i = e.manager;
        return i ? i.get(t) : t
    }

    function tt() {
        K.apply(this, arguments)
    }

    function et() {
        tt.apply(this, arguments), this.pX = null, this.pY = null
    }

    function it() {
        tt.apply(this, arguments)
    }

    function nt() {
        K.apply(this, arguments), this._timer = null, this._input = null
    }

    function ot() {
        tt.apply(this, arguments)
    }

    function rt() {
        tt.apply(this, arguments)
    }

    function st() {
        K.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function at(t, e) {
        return e = e || {}, e.recognizers = h(e.recognizers, at.defaults.preset), new lt(t, e)
    }

    function lt(t, e) {
        this.options = ht({}, at.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = x(this), this.touchAction = new z(this, this.options.touchAction), ct(this, !0), s(this.options.recognizers, function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
        }, this)
    }

    function ct(t, e) {
        var i = t.element;
        if (i.style) {
            var n;
            s(t.options.cssProps, function(o, r) {
                n = b(i.style, r), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = o) : i.style[n] = t.oldCssProps[n] || ""
            }), e || (t.oldCssProps = {})
        }
    }

    function ut(t, i) {
        var n = e.createEvent("Event");
        n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
    }
    var ht, pt = ["", "webkit", "Moz", "MS", "ms", "o"],
        dt = e.createElement("div"),
        ft = "function",
        mt = Math.round,
        Tt = Math.abs,
        yt = Date.now;
    ht = "function" != typeof Object.assign ? function(t) {
        if (t === n || null === t) throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            if (o !== n && null !== o)
                for (var r in o) o.hasOwnProperty(r) && (e[r] = o[r])
        }
        return e
    } : Object.assign;
    var vt = a(function(t, e, i) {
            for (var o = Object.keys(e), r = 0; r < o.length;)(!i || i && t[o[r]] === n) && (t[o[r]] = e[o[r]]), r++;
            return t
        }, "extend", "Use `assign`."),
        gt = a(function(t, e) {
            return vt(t, e, !0)
        }, "merge", "Use `assign`."),
        bt = 1,
        St = /mobile|tablet|ip(ad|hone|od)|android/i,
        wt = "ontouchstart" in t,
        At = b(t, "PointerEvent") !== n,
        xt = wt && St.test(navigator.userAgent),
        Pt = "touch",
        Mt = "pen",
        Ct = "mouse",
        Et = "kinect",
        kt = 25,
        Gt = 1,
        Ht = 2,
        Dt = 4,
        Bt = 8,
        It = 1,
        Lt = 2,
        Nt = 4,
        Ot = 8,
        Ft = 16,
        Xt = Lt | Nt,
        Rt = Ot | Ft,
        $t = Xt | Rt,
        Vt = ["x", "y"],
        Wt = ["clientX", "clientY"];
    A.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(w(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(w(this.element), this.evWin, this.domHandler)
        }
    };
    var jt = {
            mousedown: Gt,
            mousemove: Ht,
            mouseup: Dt
        },
        qt = "mousedown",
        Yt = "mousemove mouseup";
    l(O, A, {
        handler: function(t) {
            var e = jt[t.type];
            e & Gt && 0 === t.button && (this.pressed = !0), e & Ht && 1 !== t.which && (e = Dt), this.pressed && (e & Dt && (this.pressed = !1), this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: Ct,
                srcEvent: t
            }))
        }
    });
    var zt = {
            pointerdown: Gt,
            pointermove: Ht,
            pointerup: Dt,
            pointercancel: Bt,
            pointerout: Bt
        },
        Ut = {
            2: Pt,
            3: Mt,
            4: Ct,
            5: Et
        },
        _t = "pointerdown",
        Kt = "pointermove pointerup pointercancel";
    t.MSPointerEvent && !t.PointerEvent && (_t = "MSPointerDown", Kt = "MSPointerMove MSPointerUp MSPointerCancel"), l(F, A, {
        handler: function(t) {
            var e = this.store,
                i = !1,
                n = t.type.toLowerCase().replace("ms", ""),
                o = zt[n],
                r = Ut[t.pointerType] || t.pointerType,
                s = r == Pt,
                a = y(e, t.pointerId, "pointerId");
            o & Gt && (0 === t.button || s) ? a < 0 && (e.push(t), a = e.length - 1) : o & (Dt | Bt) && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, o, {
                pointers: e,
                changedPointers: [t],
                pointerType: r,
                srcEvent: t
            }), i && e.splice(a, 1))
        }
    });
    var Qt = {
            touchstart: Gt,
            touchmove: Ht,
            touchend: Dt,
            touchcancel: Bt
        },
        Zt = "touchstart",
        Jt = "touchstart touchmove touchend touchcancel";
    l(X, A, {
        handler: function(t) {
            var e = Qt[t.type];
            if (e === Gt && (this.started = !0), this.started) {
                var i = R.call(this, t, e);
                e & (Dt | Bt) && i[0].length - i[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: Pt,
                    srcEvent: t
                })
            }
        }
    });
    var te = {
            touchstart: Gt,
            touchmove: Ht,
            touchend: Dt,
            touchcancel: Bt
        },
        ee = "touchstart touchmove touchend touchcancel";
    l($, A, {
        handler: function(t) {
            var e = te[t.type],
                i = V.call(this, t, e);
            i && this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: Pt,
                srcEvent: t
            })
        }
    });
    var ie = 2500,
        ne = 25;
    l(W, A, {
        handler: function(t, e, i) {
            var n = i.pointerType == Pt,
                o = i.pointerType == Ct;
            if (!(o && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                if (n) j.call(this, e, i);
                else if (o && Y.call(this, i)) return;
                this.callback(t, e, i)
            }
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var oe = b(dt.style, "touchAction"),
        re = oe !== n,
        se = "compute",
        ae = "auto",
        le = "manipulation",
        ce = "none",
        ue = "pan-x",
        he = "pan-y",
        pe = _();
    z.prototype = {
        set: function(t) {
            t == se && (t = this.compute()), re && this.manager.element.style && pe[t] && (this.manager.element.style[oe] = t), this.actions = t.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var t = [];
            return s(this.manager.recognizers, function(e) {
                u(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }), U(t.join(" "))
        },
        preventDefaults: function(t) {
            var e = t.srcEvent,
                i = t.offsetDirection;
            if (this.manager.session.prevented) return void e.preventDefault();
            var n = this.actions,
                o = m(n, ce) && !pe[ce],
                r = m(n, he) && !pe[he],
                s = m(n, ue) && !pe[ue];
            if (o) {
                var a = 1 === t.pointers.length,
                    l = t.distance < 2,
                    c = t.deltaTime < 250;
                if (a && l && c) return
            }
            return s && r ? void 0 : o || r && i & Xt || s && i & Rt ? this.preventSrc(e) : void 0
        },
        preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
        }
    };
    var de = 1,
        fe = 2,
        me = 4,
        Te = 8,
        ye = Te,
        ve = 16,
        ge = 32;
    K.prototype = {
        defaults: {},
        set: function(t) {
            return ht(this.options, t), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(t) {
            if (r(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return t = J(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
        },
        dropRecognizeWith: function(t) {
            return r(t, "dropRecognizeWith", this) ? this : (t = J(t, this), delete this.simultaneous[t.id], this)
        },
        requireFailure: function(t) {
            if (r(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return t = J(t, this), y(e, t) === -1 && (e.push(t), t.requireFailure(this)), this
        },
        dropRequireFailure: function(t) {
            if (r(t, "dropRequireFailure", this)) return this;
            t = J(t, this);
            var e = y(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
        },
        emit: function(t) {
            function e(e) {
                i.manager.emit(e, t)
            }
            var i = this,
                n = this.state;
            n < Te && e(i.options.event + Q(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), n >= Te && e(i.options.event + Q(n))
        },
        tryEmit: function(t) {
            return this.canEmit() ? this.emit(t) : void(this.state = ge)
        },
        canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
                if (!(this.requireFail[t].state & (ge | de))) return !1;
                t++
            }
            return !0
        },
        recognize: function(t) {
            var e = ht({}, t);
            return u(this.options.enable, [this, e]) ? (this.state & (ye | ve | ge) && (this.state = de), this.state = this.process(e), void(this.state & (fe | me | Te | ve) && this.tryEmit(e))) : (this.reset(), void(this.state = ge))
        },
        process: function(t) {},
        getTouchAction: function() {},
        reset: function() {}
    }, l(tt, K, {
        defaults: {
            pointers: 1
        },
        attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        },
        process: function(t) {
            var e = this.state,
                i = t.eventType,
                n = e & (fe | me),
                o = this.attrTest(t);
            return n && (i & Bt || !o) ? e | ve : n || o ? i & Dt ? e | Te : e & fe ? e | me : fe : ge
        }
    }), l(et, tt, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: $t
        },
        getTouchAction: function() {
            var t = this.options.direction,
                e = [];
            return t & Xt && e.push(he), t & Rt && e.push(ue), e
        },
        directionTest: function(t) {
            var e = this.options,
                i = !0,
                n = t.distance,
                o = t.direction,
                r = t.deltaX,
                s = t.deltaY;
            return o & e.direction || (e.direction & Xt ? (o = 0 === r ? It : r < 0 ? Lt : Nt, i = r != this.pX, n = Math.abs(t.deltaX)) : (o = 0 === s ? It : s < 0 ? Ot : Ft, i = s != this.pY, n = Math.abs(t.deltaY))), t.direction = o, i && n > e.threshold && o & e.direction
        },
        attrTest: function(t) {
            return tt.prototype.attrTest.call(this, t) && (this.state & fe || !(this.state & fe) && this.directionTest(t))
        },
        emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Z(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
        }
    }), l(it, tt, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ce]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & fe)
        },
        emit: function(t) {
            if (1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
        }
    }), l(nt, K, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [ae]
        },
        process: function(t) {
            var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                r = t.deltaTime > e.time;
            if (this._input = t, !n || !i || t.eventType & (Dt | Bt) && !r) this.reset();
            else if (t.eventType & Gt) this.reset(), this._timer = o(function() {
                this.state = ye, this.tryEmit()
            }, e.time, this);
            else if (t.eventType & Dt) return ye;
            return ge
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(t) {
            this.state === ye && (t && t.eventType & Dt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = yt(), this.manager.emit(this.options.event, this._input)))
        }
    }), l(ot, tt, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ce]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & fe)
        }
    }), l(rt, tt, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Xt | Rt,
            pointers: 1
        },
        getTouchAction: function() {
            return et.prototype.getTouchAction.call(this)
        },
        attrTest: function(t) {
            var e, i = this.options.direction;
            return i & (Xt | Rt) ? e = t.overallVelocity : i & Xt ? e = t.overallVelocityX : i & Rt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && Tt(e) > this.options.velocity && t.eventType & Dt
        },
        emit: function(t) {
            var e = Z(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
    }), l(st, K, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [le]
        },
        process: function(t) {
            var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                r = t.deltaTime < e.time;
            if (this.reset(), t.eventType & Gt && 0 === this.count) return this.failTimeout();
            if (n && r && i) {
                if (t.eventType != Dt) return this.failTimeout();
                var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                    a = !this.pCenter || B(this.pCenter, t.center) < e.posThreshold;
                this.pTime = t.timeStamp, this.pCenter = t.center, a && s ? this.count += 1 : this.count = 1, this._input = t;
                var l = this.count % e.taps;
                if (0 === l) return this.hasRequireFailures() ? (this._timer = o(function() {
                    this.state = ye, this.tryEmit()
                }, e.interval, this), fe) : ye
            }
            return ge
        },
        failTimeout: function() {
            return this._timer = o(function() {
                this.state = ge
            }, this.options.interval, this), ge
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == ye && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), at.VERSION = "2.0.7", at.defaults = {
        domEvents: !1,
        touchAction: se,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [ot, {
                enable: !1
            }],
            [it, {
                    enable: !1
                },
                ["rotate"]
            ],
            [rt, {
                direction: Xt
            }],
            [et, {
                    direction: Xt
                },
                ["swipe"]
            ],
            [st],
            [st, {
                    event: "doubletap",
                    taps: 2
                },
                ["tap"]
            ],
            [nt]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var be = 1,
        Se = 2;
    lt.prototype = {
        set: function(t) {
            return ht(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
        },
        stop: function(t) {
            this.session.stopped = t ? Se : be
        },
        recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var i, n = this.recognizers,
                    o = e.curRecognizer;
                (!o || o && o.state & ye) && (o = e.curRecognizer = null);
                for (var r = 0; r < n.length;) i = n[r], e.stopped === Se || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(t), !o && i.state & (fe | me | Te) && (o = e.curRecognizer = i), r++
            }
        },
        get: function(t) {
            if (t instanceof K) return t;
            for (var e = this.recognizers, i = 0; i < e.length; i++)
                if (e[i].options.event == t) return e[i];
            return null
        },
        add: function(t) {
            if (r(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
        },
        remove: function(t) {
            if (r(t, "remove", this)) return this;
            if (t = this.get(t)) {
                var e = this.recognizers,
                    i = y(e, t);
                i !== -1 && (e.splice(i, 1), this.touchAction.update())
            }
            return this
        },
        on: function(t, e) {
            if (t !== n && e !== n) {
                var i = this.handlers;
                return s(T(t), function(t) {
                    i[t] = i[t] || [], i[t].push(e)
                }), this
            }
        },
        off: function(t, e) {
            if (t !== n) {
                var i = this.handlers;
                return s(T(t), function(t) {
                    e ? i[t] && i[t].splice(y(i[t], e), 1) : delete i[t]
                }), this
            }
        },
        emit: function(t, e) {
            this.options.domEvents && ut(t, e);
            var i = this.handlers[t] && this.handlers[t].slice();
            if (i && i.length) {
                e.type = t, e.preventDefault = function() {
                    e.srcEvent.preventDefault()
                };
                for (var n = 0; n < i.length;) i[n](e), n++
            }
        },
        destroy: function() {
            this.element && ct(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, ht(at, {
        INPUT_START: Gt,
        INPUT_MOVE: Ht,
        INPUT_END: Dt,
        INPUT_CANCEL: Bt,
        STATE_POSSIBLE: de,
        STATE_BEGAN: fe,
        STATE_CHANGED: me,
        STATE_ENDED: Te,
        STATE_RECOGNIZED: ye,
        STATE_CANCELLED: ve,
        STATE_FAILED: ge,
        DIRECTION_NONE: It,
        DIRECTION_LEFT: Lt,
        DIRECTION_RIGHT: Nt,
        DIRECTION_UP: Ot,
        DIRECTION_DOWN: Ft,
        DIRECTION_HORIZONTAL: Xt,
        DIRECTION_VERTICAL: Rt,
        DIRECTION_ALL: $t,
        Manager: lt,
        Input: A,
        TouchAction: z,
        TouchInput: $,
        MouseInput: O,
        PointerEventInput: F,
        TouchMouseInput: W,
        SingleTouchInput: X,
        Recognizer: K,
        AttrRecognizer: tt,
        Tap: st,
        Pan: et,
        Swipe: rt,
        Pinch: it,
        Rotate: ot,
        Press: nt,
        on: p,
        off: d,
        each: s,
        merge: gt,
        extend: vt,
        assign: ht,
        inherit: l,
        bindFn: c,
        prefixed: b
    });
    var we = "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
    we.Hammer = at, "function" == typeof define && define.amd ? define(function() {
        return at
    }) : "undefined" != typeof module && module.exports ? module.exports = at : t[i] = at
}(window, document, "Hammer"),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], t) : "object" == typeof exports ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer)
}(function(t, e) {
    function i(i, n) {
        var o = t(i);
        o.data("hammer") || o.data("hammer", new e(o[0], n))
    }
    t.fn.hammer = function(t) {
        return this.each(function() {
            i(this, t)
        })
    }, e.Manager.prototype.emit = function(e) {
        return function(i, n) {
            e.call(this, i, n), t(this.element).trigger({
                type: i,
                gesture: n
            })
        }
    }(e.Manager.prototype.emit)
}),
function() {
    var t, e, i, n, o, r, s, a, l, c, u, h, p, d, f, m, T, y, v, g, b, S, w, A, x, P, M, C, E, k, G, H, D, B, I, L, N, O, F, X, R, $, V, W, j, q, Y, z, U, _ = [].slice,
        K = {}.hasOwnProperty,
        Q = function(t, e) {
            function i() {
                this.constructor = t
            }
            for (var n in e) K.call(e, n) && (t[n] = e[n]);
            return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
        },
        Z = [].indexOf || function(t) {
            for (var e = 0, i = this.length; e < i; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    for (b = {
            catchupTime: 100,
            initialRate: .03,
            minTime: 250,
            ghostTime: 100,
            maxProgressPerFrame: 20,
            easeFactor: 1.25,
            startOnPageLoad: !0,
            restartOnPushState: !0,
            restartOnRequestAfter: 500,
            target: "body",
            elements: {
                checkInterval: 100,
                selectors: ["body"]
            },
            eventLag: {
                minSamples: 10,
                sampleCount: 3,
                lagThreshold: 3
            },
            ajax: {
                trackMethods: ["GET"],
                trackWebSockets: !0,
                ignoreURLs: []
            }
        }, E = function() {
            var t;
            return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
        }, G = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, g = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == G && (G = function(t) {
            return setTimeout(t, 50)
        }, g = function(t) {
            return clearTimeout(t)
        }), D = function(t) {
            var e, i;
            return e = E(), (i = function() {
                var n;
                return n = E() - e, n >= 33 ? (e = E(), t(n, function() {
                    return G(i)
                })) : setTimeout(i, 33 - n)
            })()
        }, H = function() {
            var t, e, i;
            return i = arguments[0], e = arguments[1], t = 3 <= arguments.length ? _.call(arguments, 2) : [], "function" == typeof i[e] ? i[e].apply(i, t) : i[e]
        }, S = function() {
            var t, e, i, n, o, r, s;
            for (e = arguments[0], n = 2 <= arguments.length ? _.call(arguments, 1) : [], r = 0, s = n.length; r < s; r++)
                if (i = n[r])
                    for (t in i) K.call(i, t) && (o = i[t], null != e[t] && "object" == typeof e[t] && null != o && "object" == typeof o ? S(e[t], o) : e[t] = o);
            return e
        }, T = function(t) {
            var e, i, n, o, r;
            for (i = e = 0, o = 0, r = t.length; o < r; o++) n = t[o], i += Math.abs(n), e++;
            return i / e
        }, A = function(t, e) {
            var i, n, o;
            if (null == t && (t = "options"), null == e && (e = !0), o = document.querySelector("[data-pace-" + t + "]")) {
                if (i = o.getAttribute("data-pace-" + t), !e) return i;
                try {
                    return JSON.parse(i)
                } catch (r) {
                    return n = r, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", n) : void 0
                }
            }
        }, s = function() {
            function t() {}
            return t.prototype.on = function(t, e, i, n) {
                var o;
                return null == n && (n = !1), null == this.bindings && (this.bindings = {}), null == (o = this.bindings)[t] && (o[t] = []), this.bindings[t].push({
                    handler: e,
                    ctx: i,
                    once: n
                })
            }, t.prototype.once = function(t, e, i) {
                return this.on(t, e, i, !0)
            }, t.prototype.off = function(t, e) {
                var i, n, o;
                if (null != (null != (n = this.bindings) ? n[t] : void 0)) {
                    if (null == e) return delete this.bindings[t];
                    for (i = 0, o = []; i < this.bindings[t].length;) this.bindings[t][i].handler === e ? o.push(this.bindings[t].splice(i, 1)) : o.push(i++);
                    return o
                }
            }, t.prototype.trigger = function() {
                var t, e, i, n, o, r, s, a, l;
                if (i = arguments[0], t = 2 <= arguments.length ? _.call(arguments, 1) : [], null != (s = this.bindings) ? s[i] : void 0) {
                    for (o = 0, l = []; o < this.bindings[i].length;) a = this.bindings[i][o], n = a.handler, e = a.ctx, r = a.once, n.apply(null != e ? e : this, t), r ? l.push(this.bindings[i].splice(o, 1)) : l.push(o++);
                    return l
                }
            }, t
        }(), c = window.Pace || {}, window.Pace = c, S(c, s.prototype), k = c.options = S({}, b, window.paceOptions, A()), Y = ["ajax", "document", "eventLag", "elements"], V = 0, j = Y.length; V < j; V++) N = Y[V], k[N] === !0 && (k[N] = b[N]);
    l = function(t) {
        function e() {
            return z = e.__super__.constructor.apply(this, arguments)
        }
        return Q(e, t), e
    }(Error), e = function() {
        function t() {
            this.progress = 0
        }
        return t.prototype.getElement = function() {
            var t;
            if (null == this.el) {
                if (t = document.querySelector(k.target), !t) throw new l;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el)
            }
            return this.el
        }, t.prototype.finish = function() {
            var t;
            return t = this.getElement(), t.className = t.className.replace("pace-active", ""), t.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
        }, t.prototype.update = function(t) {
            return this.progress = t, this.render()
        }, t.prototype.destroy = function() {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (t) {
                l = t
            }
            return this.el = void 0
        }, t.prototype.render = function() {
            var t, e, i, n, o, r, s;
            if (null == document.querySelector(k.target)) return !1;
            for (t = this.getElement(), n = "translate3d(" + this.progress + "%, 0, 0)", s = ["webkitTransform", "msTransform", "transform"], o = 0, r = s.length; o < r; o++) e = s[o], t.children[0].style[e] = n;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? i = "99" : (i = this.progress < 10 ? "0" : "", i += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + i)), this.lastRenderedProgress = this.progress
        }, t.prototype.done = function() {
            return this.progress >= 100
        }, t
    }(), a = function() {
        function t() {
            this.bindings = {}
        }
        return t.prototype.trigger = function(t, e) {
            var i, n, o, r, s;
            if (null != this.bindings[t]) {
                for (r = this.bindings[t], s = [], n = 0, o = r.length; n < o; n++) i = r[n], s.push(i.call(this, e));
                return s
            }
        }, t.prototype.on = function(t, e) {
            var i;
            return null == (i = this.bindings)[t] && (i[t] = []), this.bindings[t].push(e)
        }, t
    }(), $ = window.XMLHttpRequest, R = window.XDomainRequest, X = window.WebSocket, w = function(t, e) {
        var i, n, o;
        o = [];
        for (n in e.prototype) try {
            null == t[n] && "function" != typeof e[n] ? "function" == typeof Object.defineProperty ? o.push(Object.defineProperty(t, n, {
                get: function() {
                    return e.prototype[n]
                },
                configurable: !0,
                enumerable: !0
            })) : o.push(t[n] = e.prototype[n]) : o.push(void 0)
        } catch (r) {
            i = r
        }
        return o
    }, M = [], c.ignore = function() {
        var t, e, i;
        return e = arguments[0], t = 2 <= arguments.length ? _.call(arguments, 1) : [], M.unshift("ignore"), i = e.apply(null, t), M.shift(), i
    }, c.track = function() {
        var t, e, i;
        return e = arguments[0], t = 2 <= arguments.length ? _.call(arguments, 1) : [], M.unshift("track"), i = e.apply(null, t), M.shift(), i
    }, L = function(t) {
        var e;
        if (null == t && (t = "GET"), "track" === M[0]) return "force";
        if (!M.length && k.ajax) {
            if ("socket" === t && k.ajax.trackWebSockets) return !0;
            if (e = t.toUpperCase(), Z.call(k.ajax.trackMethods, e) >= 0) return !0
        }
        return !1
    }, u = function(t) {
        function e() {
            var t, i = this;
            e.__super__.constructor.apply(this, arguments), t = function(t) {
                var e;
                return e = t.open,
                    t.open = function(n, o, r) {
                        return L(n) && i.trigger("request", {
                            type: n,
                            url: o,
                            request: t
                        }), e.apply(t, arguments)
                    }
            }, window.XMLHttpRequest = function(e) {
                var i;
                return i = new $(e), t(i), i
            };
            try {
                w(window.XMLHttpRequest, $)
            } catch (n) {}
            if (null != R) {
                window.XDomainRequest = function() {
                    var e;
                    return e = new R, t(e), e
                };
                try {
                    w(window.XDomainRequest, R)
                } catch (n) {}
            }
            if (null != X && k.ajax.trackWebSockets) {
                window.WebSocket = function(t, e) {
                    var n;
                    return n = null != e ? new X(t, e) : new X(t), L("socket") && i.trigger("request", {
                        type: "socket",
                        url: t,
                        protocols: e,
                        request: n
                    }), n
                };
                try {
                    w(window.WebSocket, X)
                } catch (n) {}
            }
        }
        return Q(e, t), e
    }(a), W = null, x = function() {
        return null == W && (W = new u), W
    }, I = function(t) {
        var e, i, n, o;
        for (o = k.ajax.ignoreURLs, i = 0, n = o.length; i < n; i++)
            if (e = o[i], "string" == typeof e) {
                if (t.indexOf(e) !== -1) return !0
            } else if (e.test(t)) return !0;
        return !1
    }, x().on("request", function(e) {
        var i, n, o, r, s;
        if (r = e.type, o = e.request, s = e.url, !I(s)) return c.running || k.restartOnRequestAfter === !1 && "force" !== L(r) ? void 0 : (n = arguments, i = k.restartOnRequestAfter || 0, "boolean" == typeof i && (i = 0), setTimeout(function() {
            var e, i, s, a, l, u;
            if (e = "socket" === r ? o.readyState < 2 : 0 < (a = o.readyState) && a < 4) {
                for (c.restart(), l = c.sources, u = [], i = 0, s = l.length; i < s; i++) {
                    if (N = l[i], N instanceof t) {
                        N.watch.apply(N, n);
                        break
                    }
                    u.push(void 0)
                }
                return u
            }
        }, i))
    }), t = function() {
        function t() {
            var t = this;
            this.elements = [], x().on("request", function() {
                return t.watch.apply(t, arguments)
            })
        }
        return t.prototype.watch = function(t) {
            var e, i, n, o;
            if (n = t.type, e = t.request, o = t.url, !I(o)) return i = "socket" === n ? new d(e) : new f(e), this.elements.push(i)
        }, t
    }(), f = function() {
        function t(t) {
            var e, i, n, o, r, s, a = this;
            if (this.progress = 0, null != window.ProgressEvent)
                for (i = null, t.addEventListener("progress", function(t) {
                        return t.lengthComputable ? a.progress = 100 * t.loaded / t.total : a.progress = a.progress + (100 - a.progress) / 2
                    }, !1), s = ["load", "abort", "timeout", "error"], n = 0, o = s.length; n < o; n++) e = s[n], t.addEventListener(e, function() {
                    return a.progress = 100
                }, !1);
            else r = t.onreadystatechange, t.onreadystatechange = function() {
                var e;
                return 0 === (e = t.readyState) || 4 === e ? a.progress = 100 : 3 === t.readyState && (a.progress = 50), "function" == typeof r ? r.apply(null, arguments) : void 0
            }
        }
        return t
    }(), d = function() {
        function t(t) {
            var e, i, n, o, r = this;
            for (this.progress = 0, o = ["error", "open"], i = 0, n = o.length; i < n; i++) e = o[i], t.addEventListener(e, function() {
                return r.progress = 100
            }, !1)
        }
        return t
    }(), n = function() {
        function t(t) {
            var e, i, n, r;
            for (null == t && (t = {}), this.elements = [], null == t.selectors && (t.selectors = []), r = t.selectors, i = 0, n = r.length; i < n; i++) e = r[i], this.elements.push(new o(e))
        }
        return t
    }(), o = function() {
        function t(t) {
            this.selector = t, this.progress = 0, this.check()
        }
        return t.prototype.check = function() {
            var t = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                return t.check()
            }, k.elements.checkInterval)
        }, t.prototype.done = function() {
            return this.progress = 100
        }, t
    }(), i = function() {
        function t() {
            var t, e, i = this;
            this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function() {
                return null != i.states[document.readyState] && (i.progress = i.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0
            }
        }
        return t.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        }, t
    }(), r = function() {
        function t() {
            var t, e, i, n, o, r = this;
            this.progress = 0, t = 0, o = [], n = 0, i = E(), e = setInterval(function() {
                var s;
                return s = E() - i - 50, i = E(), o.push(s), o.length > k.eventLag.sampleCount && o.shift(), t = T(o), ++n >= k.eventLag.minSamples && t < k.eventLag.lagThreshold ? (r.progress = 100, clearInterval(e)) : r.progress = 100 * (3 / (t + 3))
            }, 50)
        }
        return t
    }(), p = function() {
        function t(t) {
            this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = k.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = H(this.source, "progress"))
        }
        return t.prototype.tick = function(t, e) {
            var i;
            return null == e && (e = H(this.source, "progress")), e >= 100 && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / k.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), i = 1 - Math.pow(this.progress / 100, k.easeFactor), this.progress += i * this.rate * t, this.progress = Math.min(this.lastProgress + k.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, t
    }(), O = null, B = null, y = null, F = null, m = null, v = null, c.running = !1, P = function() {
        if (k.restartOnPushState) return c.restart()
    }, null != window.history.pushState && (q = window.history.pushState, window.history.pushState = function() {
        return P(), q.apply(window.history, arguments)
    }), null != window.history.replaceState && (U = window.history.replaceState, window.history.replaceState = function() {
        return P(), U.apply(window.history, arguments)
    }), h = {
        ajax: t,
        elements: n,
        document: i,
        eventLag: r
    }, (C = function() {
        var t, i, n, o, r, s, a, l;
        for (c.sources = O = [], s = ["ajax", "elements", "document", "eventLag"], i = 0, o = s.length; i < o; i++) t = s[i], k[t] !== !1 && O.push(new h[t](k[t]));
        for (l = null != (a = k.extraSources) ? a : [], n = 0, r = l.length; n < r; n++) N = l[n], O.push(new N(k));
        return c.bar = y = new e, B = [], F = new p
    })(), c.stop = function() {
        return c.trigger("stop"), c.running = !1, y.destroy(), v = !0, null != m && ("function" == typeof g && g(m), m = null), C()
    }, c.restart = function() {
        return c.trigger("restart"), c.stop(), c.start()
    }, c.go = function() {
        var t;
        return c.running = !0, y.render(), t = E(), v = !1, m = D(function(e, i) {
            var n, o, r, s, a, l, u, h, d, f, m, T, g, b, S, w;
            for (h = 100 - y.progress, o = m = 0, r = !0, l = T = 0, b = O.length; T < b; l = ++T)
                for (N = O[l], f = null != B[l] ? B[l] : B[l] = [], a = null != (w = N.elements) ? w : [N], u = g = 0, S = a.length; g < S; u = ++g) s = a[u], d = null != f[u] ? f[u] : f[u] = new p(s), r &= d.done, d.done || (o++, m += d.tick(e));
            return n = m / o, y.update(F.tick(e, n)), y.done() || r || v ? (y.update(100), c.trigger("done"), setTimeout(function() {
                return y.finish(), c.running = !1, c.trigger("hide")
            }, Math.max(k.ghostTime, Math.max(k.minTime - (E() - t), 0)))) : i()
        })
    }, c.start = function(t) {
        S(k, t), c.running = !0;
        try {
            y.render()
        } catch (e) {
            l = e
        }
        return document.querySelector(".pace") ? (c.trigger("start"), c.go()) : setTimeout(c.start, 50)
    }, "function" == typeof define && define.amd ? define(["pace"], function() {
        return c
    }) : "object" == typeof exports ? module.exports = c : k.startOnPageLoad && c.start()
}.call(this),
    function() {
        "use strict";

        function t(e, n) {
            function o(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            var r;
            if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = e, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !t.notNeeded(e)) {
                for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, l = 0, c = s.length; l < c; l++) a[s[l]] = o(a[s[l]], a);
                i && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, i, n) {
                    var o = Node.prototype.removeEventListener;
                    "click" === t ? o.call(e, t, i.hijacked || i, n) : o.call(e, t, i, n)
                }, e.addEventListener = function(t, i, n) {
                    var o = Node.prototype.addEventListener;
                    "click" === t ? o.call(e, t, i.hijacked || (i.hijacked = function(t) {
                        t.propagationStopped || i(t)
                    }), n) : o.call(e, t, i, n)
                }), "function" == typeof e.onclick && (r = e.onclick, e.addEventListener("click", function(t) {
                    r(t)
                }, !1), e.onclick = null)
            }
        }
        var e = navigator.userAgent.indexOf("Windows Phone") >= 0,
            i = navigator.userAgent.indexOf("Android") > 0 && !e,
            n = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
            o = n && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            r = n && /OS [6-7]_\d/.test(navigator.userAgent),
            s = navigator.userAgent.indexOf("BB10") > 0;
        t.prototype.needsClick = function(t) {
            switch (t.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (t.disabled) return !0;
                    break;
                case "input":
                    if (n && "file" === t.type || t.disabled) return !0;
                    break;
                case "label":
                case "iframe":
                case "video":
                    return !0
            }
            return /\bneedsclick\b/.test(t.className)
        }, t.prototype.needsFocus = function(t) {
            switch (t.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !i;
                case "input":
                    switch (t.type) {
                        case "button":
                        case "checkbox":
                        case "file":
                        case "image":
                        case "radio":
                        case "submit":
                            return !1
                    }
                    return !t.disabled && !t.readOnly;
                default:
                    return /\bneedsfocus\b/.test(t.className)
            }
        }, t.prototype.sendClick = function(t, e) {
            var i, n;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(), n = e.changedTouches[0], i = document.createEvent("MouseEvents"), i.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
        }, t.prototype.determineEventType = function(t) {
            return i && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
        }, t.prototype.focus = function(t) {
            var e;
            n && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
        }, t.prototype.updateScrollParent = function(t) {
            var e, i;
            if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
                i = t;
                do {
                    if (i.scrollHeight > i.offsetHeight) {
                        e = i, t.fastClickScrollParent = i;
                        break
                    }
                    i = i.parentElement
                } while (i)
            }
            e && (e.fastClickLastScrollTop = e.scrollTop)
        }, t.prototype.getTargetElementFromEventTarget = function(t) {
            return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
        }, t.prototype.onTouchStart = function(t) {
            var e, i, r;
            if (t.targetTouches.length > 1) return !0;
            if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], n) {
                if (r = window.getSelection(), r.rangeCount && !r.isCollapsed) return !0;
                if (!o) {
                    if (i.identifier && i.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                    this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
        }, t.prototype.touchHasMoved = function(t) {
            var e = t.changedTouches[0],
                i = this.touchBoundary;
            return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
        }, t.prototype.onTouchMove = function(t) {
            return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
        }, t.prototype.findControl = function(t) {
            return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, t.prototype.onTouchEnd = function(t) {
            var e, s, a, l, c, u = this.targetElement;
            if (!this.trackingClick) return !0;
            if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
            if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
            if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, s = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, r && (c = t.changedTouches[0], u = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = u.tagName.toLowerCase(), "label" === a) {
                if (e = this.findControl(u)) {
                    if (this.focus(u), i) return !1;
                    u = e
                }
            } else if (this.needsFocus(u)) return t.timeStamp - s > 100 || n && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, t), n && "select" === a || (this.targetElement = null, t.preventDefault()), !1);
            return !(!n || o || (l = u.fastClickScrollParent, !l || l.fastClickLastScrollTop === l.scrollTop)) || (this.needsClick(u) || (t.preventDefault(), this.sendClick(u, t)), !1)
        }, t.prototype.onTouchCancel = function() {
            this.trackingClick = !1, this.targetElement = null
        }, t.prototype.onMouse = function(t) {
            return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
        }, t.prototype.onClick = function(t) {
            var e;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t), e || (this.targetElement = null), e)
        }, t.prototype.destroy = function() {
            var t = this.layer;
            i && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, t.notNeeded = function(t) {
            var e, n, o, r;
            if ("undefined" == typeof window.ontouchstart) return !0;
            if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!i) return !0;
                if (e = document.querySelector("meta[name=viewport]")) {
                    if (e.content.indexOf("user-scalable=no") !== -1) return !0;
                    if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
            }
            if (s && (o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), o[1] >= 10 && o[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
                if (e.content.indexOf("user-scalable=no") !== -1) return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
            return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (r = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(r >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (e.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
        }, t.attach = function(e, i) {
            return new t(e, i)
        }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
            return t
        }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t
    }(),
    function(t, e) {
        t(function() {
            "use strict";

            function t(t, e) {
                return null != t && null != e && t.toLowerCase() === e.toLowerCase()
            }

            function i(t, e) {
                var i, n, o = t.length;
                if (!o || !e) return !1;
                for (i = e.toLowerCase(), n = 0; n < o; ++n)
                    if (i === t[n].toLowerCase()) return !0;
                return !1
            }

            function n(t) {
                for (var e in t) l.call(t, e) && (t[e] = new RegExp(t[e], "i"))
            }

            function o(t) {
                return (t || "").substr(0, 500)
            }

            function r(t, e) {
                this.ua = o(t), this._cache = {}, this.maxPhoneWidth = e || 600
            }
            var s = {};
            s.mobileDetectRules = {
                phones: {
                    iPhone: "\\biPhone\\b|\\biPod\\b",
                    BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                    HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                    Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                    Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                    Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                    Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
                    LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)",
                    Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                    Asus: "Asus.*Galaxy|PadFone.*Mobile",
                    NokiaLumia: "Lumia [0-9]{3,4}",
                    Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                    Palm: "PalmSource|Palm",
                    Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                    Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                    Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                    Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                    iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                    SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                    Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                    Alcatel: "Alcatel",
                    Nintendo: "Nintendo (3DS|Switch)",
                    Amoi: "Amoi",
                    INQ: "INQ",
                    GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                },
                tablets: {
                    iPad: "iPad|iPad.*Mobile",
                    NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                    GoogleTablet: "Android.*Pixel C",
                    SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835",
                    Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                    SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                    HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                    AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                    BlackBerryTablet: "PlayBook|RIM Tablet",
                    HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                    MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                    NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                    AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                    ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                    LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                    FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                    PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                    LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-X304L|TB-8703F|Tab2A7-10F|TB2-X30L",
                    DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                    YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                    MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                    ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                    IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                    IRUTablet: "M702pro",
                    MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                    EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                    AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                    ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                    AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                    NokiaLumiaTablet: "Lumia 2520",
                    SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                    PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                    CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                    CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                    MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                    MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                    SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                    RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                    FlyTablet: "IQ310|Fly Vision",
                    bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus",
                    HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09",
                    NecTablet: "\\bN-06D|\\bN-08D",
                    PantechTablet: "Pantech.*P4100",
                    BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                    VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                    ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                    PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                    NabiTablet: "Android.*\\bNabi",
                    KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                    DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                    TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                    PlaystationTablet: "Playstation.*(Portable|Vita)",
                    TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                    PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                    AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                    DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                    GalapadTablet: "Android.*\\bG1\\b(?!\\))",
                    MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                    KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                    AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                    PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                    YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                    ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                    GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                    PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                    OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                    HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                    DPSTablet: "DPS Dream 9|DPS Dual 7",
                    VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                    CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                    MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                    ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                    GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                    ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                    VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                    ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                    StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                    VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                    EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                    RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                    iMobileTablet: "i-mobile i-note",
                    TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                    AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                    AMPETablet: "Android.* A78 ",
                    SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                    TecnoTablet: "TECNO P9|TECNO DP8D",
                    JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                    iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                    FX2Tablet: "FX2 PAD7|FX2 PAD10",
                    XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                    ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                    VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                    OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                    CaptivaTablet: "CAPTIVA PAD",
                    IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                    TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                    OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                    JaytechTablet: "TPC-PA762",
                    BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                    DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                    EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                    LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                    AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                    MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                    CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                    WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                    MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                    MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                    NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                    NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                    LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                    UbislateTablet: "UbiSlate[\\s]?7C",
                    PocketBookTablet: "Pocketbook",
                    KocasoTablet: "\\b(TB-1207)\\b",
                    HisenseTablet: "\\b(F5281|E2371)\\b",
                    Hudl: "Hudl HT7S3|Hudl 2",
                    TelstraTablet: "T-Hub2",
                    GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
                },
                oss: {
                    AndroidOS: "Android",
                    BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                    PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                    SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                    WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                    WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                    iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                    MeeGoOS: "MeeGo",
                    MaemoOS: "Maemo",
                    JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                    webOS: "webOS|hpwOS",
                    badaOS: "\\bBada\\b",
                    BREWOS: "BREW"
                },
                uas: {
                    Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                    Dolfin: "\\bDolfin\\b",
                    Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
                    Skyfire: "Skyfire",
                    Edge: "Mobile Safari/[.0-9]* Edge",
                    IE: "IEMobile|MSIEMobile",
                    Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                    Bolt: "bolt",
                    TeaShark: "teashark",
                    Blazer: "Blazer",
                    Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                    WeChat: "\\bMicroMessenger\\b",
                    UCBrowser: "UC.*Browser|UCWEB",
                    baiduboxapp: "baiduboxapp",
                    baidubrowser: "baidubrowser",
                    DiigoBrowser: "DiigoBrowser",
                    Puffin: "Puffin",
                    Mercury: "\\bMercury\\b",
                    ObigoBrowser: "Obigo",
                    NetFront: "NF-Browser",
                    GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                    PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                },
                props: {
                    Mobile: "Mobile/[VER]",
                    Build: "Build/[VER]",
                    Version: "Version/[VER]",
                    VendorID: "VendorID/[VER]",
                    iPad: "iPad.*CPU[a-z ]+[VER]",
                    iPhone: "iPhone.*CPU[a-z ]+[VER]",
                    iPod: "iPod.*CPU[a-z ]+[VER]",
                    Kindle: "Kindle/[VER]",
                    Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                    Coast: ["Coast/[VER]"],
                    Dolfin: "Dolfin/[VER]",
                    Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                    Fennec: "Fennec/[VER]",
                    Edge: "Edge/[VER]",
                    IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                    NetFront: "NetFront/[VER]",
                    NokiaBrowser: "NokiaBrowser/[VER]",
                    Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                    "Opera Mini": "Opera Mini/[VER]",
                    "Opera Mobi": "Version/[VER]",
                    UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                    MQQBrowser: "MQQBrowser/[VER]",
                    MicroMessenger: "MicroMessenger/[VER]",
                    baiduboxapp: "baiduboxapp/[VER]",
                    baidubrowser: "baidubrowser/[VER]",
                    SamsungBrowser: "SamsungBrowser/[VER]",
                    Iron: "Iron/[VER]",
                    Safari: ["Version/[VER]", "Safari/[VER]"],
                    Skyfire: "Skyfire/[VER]",
                    Tizen: "Tizen/[VER]",
                    Webkit: "webkit[ /][VER]",
                    PaleMoon: "PaleMoon/[VER]",
                    Gecko: "Gecko/[VER]",
                    Trident: "Trident/[VER]",
                    Presto: "Presto/[VER]",
                    Goanna: "Goanna/[VER]",
                    iOS: " \\bi?OS\\b [VER][ ;]{1}",
                    Android: "Android [VER]",
                    BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                    BREW: "BREW [VER]",
                    Java: "Java/[VER]",
                    "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                    "Windows Phone": "Windows Phone [VER]",
                    "Windows CE": "Windows CE/[VER]",
                    "Windows NT": "Windows NT [VER]",
                    Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                    webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                },
                utils: {
                    Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                    MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                    DesktopMode: "WPDesktop",
                    TV: "SonyDTV|HbbTV",
                    WebKit: "(webkit)[ /]([\\w.]+)",
                    Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                    Watch: "SM-V700"
                }
            }, s.detectMobileBrowsers = {
                fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                tabletPattern: /android|ipad|playbook|silk/i
            };
            var a, l = Object.prototype.hasOwnProperty;
            return s.FALLBACK_PHONE = "UnknownPhone", s.FALLBACK_TABLET = "UnknownTablet", s.FALLBACK_MOBILE = "UnknownMobile", a = "isArray" in Array ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                function() {
                    var t, e, i, o, r, c, u = s.mobileDetectRules;
                    for (t in u.props)
                        if (l.call(u.props, t)) {
                            for (e = u.props[t], a(e) || (e = [e]), r = e.length, o = 0; o < r; ++o) i = e[o], c = i.indexOf("[VER]"), c >= 0 && (i = i.substring(0, c) + "([\\w._\\+]+)" + i.substring(c + 5)), e[o] = new RegExp(i, "i");
                            u.props[t] = e
                        }
                    n(u.oss), n(u.phones), n(u.tablets), n(u.uas), n(u.utils), u.oss0 = {
                        WindowsPhoneOS: u.oss.WindowsPhoneOS,
                        WindowsMobileOS: u.oss.WindowsMobileOS
                    }
                }(), s.findMatch = function(t, e) {
                    for (var i in t)
                        if (l.call(t, i) && t[i].test(e)) return i;
                    return null
                }, s.findMatches = function(t, e) {
                    var i = [];
                    for (var n in t) l.call(t, n) && t[n].test(e) && i.push(n);
                    return i
                }, s.getVersionStr = function(t, e) {
                    var i, n, o, r, a = s.mobileDetectRules.props;
                    if (l.call(a, t))
                        for (i = a[t], o = i.length, n = 0; n < o; ++n)
                            if (r = i[n].exec(e), null !== r) return r[1];
                    return null
                }, s.getVersion = function(t, e) {
                    var i = s.getVersionStr(t, e);
                    return i ? s.prepareVersionNo(i) : NaN
                }, s.prepareVersionNo = function(t) {
                    var e;
                    return e = t.split(/[a-z._ \/\-]/i), 1 === e.length && (t = e[0]), e.length > 1 && (t = e[0] + ".", e.shift(), t += e.join("")), Number(t)
                }, s.isMobileFallback = function(t) {
                    return s.detectMobileBrowsers.fullPattern.test(t) || s.detectMobileBrowsers.shortPattern.test(t.substr(0, 4))
                }, s.isTabletFallback = function(t) {
                    return s.detectMobileBrowsers.tabletPattern.test(t)
                }, s.prepareDetectionCache = function(t, i, n) {
                    if (t.mobile === e) {
                        var o, a, l;
                        return (a = s.findMatch(s.mobileDetectRules.tablets, i)) ? (t.mobile = t.tablet = a, void(t.phone = null)) : (o = s.findMatch(s.mobileDetectRules.phones, i)) ? (t.mobile = t.phone = o, void(t.tablet = null)) : void(s.isMobileFallback(i) ? (l = r.isPhoneSized(n), l === e ? (t.mobile = s.FALLBACK_MOBILE, t.tablet = t.phone = null) : l ? (t.mobile = t.phone = s.FALLBACK_PHONE, t.tablet = null) : (t.mobile = t.tablet = s.FALLBACK_TABLET, t.phone = null)) : s.isTabletFallback(i) ? (t.mobile = t.tablet = s.FALLBACK_TABLET, t.phone = null) : t.mobile = t.tablet = t.phone = null)
                    }
                }, s.mobileGrade = function(t) {
                    var e = null !== t.mobile();
                    return t.os("iOS") && t.version("iPad") >= 4.3 || t.os("iOS") && t.version("iPhone") >= 3.1 || t.os("iOS") && t.version("iPod") >= 3.1 || t.version("Android") > 2.1 && t.is("Webkit") || t.version("Windows Phone OS") >= 7 || t.is("BlackBerry") && t.version("BlackBerry") >= 6 || t.match("Playbook.*Tablet") || t.version("webOS") >= 1.4 && t.match("Palm|Pre|Pixi") || t.match("hp.*TouchPad") || t.is("Firefox") && t.version("Firefox") >= 12 || t.is("Chrome") && t.is("AndroidOS") && t.version("Android") >= 4 || t.is("Skyfire") && t.version("Skyfire") >= 4.1 && t.is("AndroidOS") && t.version("Android") >= 2.3 || t.is("Opera") && t.version("Opera Mobi") > 11 && t.is("AndroidOS") || t.is("MeeGoOS") || t.is("Tizen") || t.is("Dolfin") && t.version("Bada") >= 2 || (t.is("UC Browser") || t.is("Dolfin")) && t.version("Android") >= 2.3 || t.match("Kindle Fire") || t.is("Kindle") && t.version("Kindle") >= 3 || t.is("AndroidOS") && t.is("NookTablet") || t.version("Chrome") >= 11 && !e || t.version("Safari") >= 5 && !e || t.version("Firefox") >= 4 && !e || t.version("MSIE") >= 7 && !e || t.version("Opera") >= 10 && !e ? "A" : t.os("iOS") && t.version("iPad") < 4.3 || t.os("iOS") && t.version("iPhone") < 3.1 || t.os("iOS") && t.version("iPod") < 3.1 || t.is("Blackberry") && t.version("BlackBerry") >= 5 && t.version("BlackBerry") < 6 || t.version("Opera Mini") >= 5 && t.version("Opera Mini") <= 6.5 && (t.version("Android") >= 2.3 || t.is("iOS")) || t.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || t.version("Opera Mobi") >= 11 && t.is("SymbianOS") ? "B" : (t.version("BlackBerry") < 5 || t.match("MSIEMobile|Windows CE.*Mobile") || t.version("Windows Mobile") <= 5.2, "C")
                }, s.detectOS = function(t) {
                    return s.findMatch(s.mobileDetectRules.oss0, t) || s.findMatch(s.mobileDetectRules.oss, t)
                }, s.getDeviceSmallerSide = function() {
                    return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
                }, r.prototype = {
                    constructor: r,
                    mobile: function() {
                        return s.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                    },
                    phone: function() {
                        return s.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                    },
                    tablet: function() {
                        return s.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                    },
                    userAgent: function() {
                        return this._cache.userAgent === e && (this._cache.userAgent = s.findMatch(s.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                    },
                    userAgents: function() {
                        return this._cache.userAgents === e && (this._cache.userAgents = s.findMatches(s.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                    },
                    os: function() {
                        return this._cache.os === e && (this._cache.os = s.detectOS(this.ua)), this._cache.os
                    },
                    version: function(t) {
                        return s.getVersion(t, this.ua)
                    },
                    versionStr: function(t) {
                        return s.getVersionStr(t, this.ua)
                    },
                    is: function(e) {
                        return i(this.userAgents(), e) || t(e, this.os()) || t(e, this.phone()) || t(e, this.tablet()) || i(s.findMatches(s.mobileDetectRules.utils, this.ua), e)
                    },
                    match: function(t) {
                        return t instanceof RegExp || (t = new RegExp(t, "i")), t.test(this.ua)
                    },
                    isPhoneSized: function(t) {
                        return r.isPhoneSized(t || this.maxPhoneWidth)
                    },
                    mobileGrade: function() {
                        return this._cache.grade === e && (this._cache.grade = s.mobileGrade(this)), this._cache.grade
                    }
                }, "undefined" != typeof window && window.screen ? r.isPhoneSized = function(t) {
                    return t < 0 ? e : s.getDeviceSmallerSide() <= t
                } : r.isPhoneSized = function() {}, r._impl = s, r.version = "1.4.3 2018-09-08", r
        })
    }(function(t) {
        if ("undefined" != typeof module && module.exports) return function(t) {
            module.exports = t()
        };
        if ("function" == typeof define && define.amd) return define;
        if ("undefined" != typeof window) return function(t) {
            window.MobileDetect = t()
        };
        throw new Error("unknown environment")
    }());
var objectFitImages = function() {
        "use strict";

        function t(t, e) {
            return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E"
        }

        function e(t) {
            if (t.srcset && !m && window.picturefill) {
                var e = window.picturefill._;
                t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
                    reselect: !0
                }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
                    reselect: !0
                })), t.currentSrc = t[e.ns].curSrc || t.src
            }
        }

        function i(t) {
            for (var e, i = getComputedStyle(t).fontFamily, n = {}; null !== (e = u.exec(i));) n[e[1]] = e[2];
            return n
        }

        function n(e, i, n) {
            var o = t(i || 1, n || 0);
            T.call(e, "src") !== o && y.call(e, "src", o)
        }

        function o(t, e) {
            t.naturalWidth ? e(t) : setTimeout(o, 100, t, e)
        }

        function r(t) {
            var r = i(t),
                a = t[c];
            if (r["object-fit"] = r["object-fit"] || "fill", !a.img) {
                if ("fill" === r["object-fit"]) return;
                if (!a.skipTest && p && !r["object-position"]) return
            }
            if (!a.img) {
                a.img = new Image(t.width, t.height), a.img.srcset = T.call(t, "data-ofi-srcset") || t.srcset, a.img.src = T.call(t, "data-ofi-src") || t.src, y.call(t, "data-ofi-src", t.src), t.srcset && y.call(t, "data-ofi-srcset", t.srcset), n(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
                try {
                    s(t)
                } catch (l) {
                    window.console && console.log("http://bit.ly/ofi-old-browser")
                }
            }
            e(a.img), t.style.backgroundImage = "url(" + (a.img.currentSrc || a.img.src).replace("(", "%28").replace(")", "%29") + ")", t.style.backgroundPosition = r["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", /scale-down/.test(r["object-fit"]) ? o(a.img, function() {
                a.img.naturalWidth > t.width || a.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
            }) : t.style.backgroundSize = r["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), o(a.img, function(e) {
                n(t, e.naturalWidth, e.naturalHeight)
            })
        }

        function s(t) {
            var e = {
                get: function(e) {
                    return t[c].img[e ? e : "src"]
                },
                set: function(e, i) {
                    return t[c].img[i ? i : "src"] = e, y.call(t, "data-ofi-" + i, e), r(t), e
                }
            };
            Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", {
                get: function() {
                    return e.get("currentSrc")
                }
            }), Object.defineProperty(t, "srcset", {
                get: function() {
                    return e.get("srcset")
                },
                set: function(t) {
                    return e.set(t, "srcset")
                }
            })
        }

        function a() {
            function t(t, e) {
                return t[c] && t[c].img && ("src" === e || "srcset" === e) ? t[c].img : t
            }
            d || (HTMLImageElement.prototype.getAttribute = function(e) {
                return T.call(t(this, e), e)
            }, HTMLImageElement.prototype.setAttribute = function(e, i) {
                return y.call(t(this, e), e, String(i))
            })
        }

        function l(t, e) {
            var i = !v && !t;
            if (e = e || {}, t = t || "img", d && !e.skipTest || !f) return !1;
            "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);
            for (var n = 0; n < t.length; n++) t[n][c] = t[n][c] || {
                skipTest: e.skipTest
            }, r(t[n]);
            i && (document.body.addEventListener("load", function(t) {
                "IMG" === t.target.tagName && l(t.target, {
                    skipTest: e.skipTest
                })
            }, !0), v = !0, t = "img"), e.watchMQ && window.addEventListener("resize", l.bind(null, t, {
                skipTest: e.skipTest
            }))
        }
        var c = "bfred-it:object-fit-images",
            u = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
            h = new Image,
            p = "object-fit" in h.style,
            d = "object-position" in h.style,
            f = "background-size" in h.style,
            m = "string" == typeof h.currentSrc,
            T = h.getAttribute,
            y = h.setAttribute,
            v = !1;
        return l.supportsObjectFit = p, l.supportsObjectPosition = d, a(), l
    }(),
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
! function(t, e) {
    "use strict";

    function i(i) {
        if ("undefined" == typeof i) throw new Error('Pathformer [constructor]: "element" parameter is required');
        if (i.constructor === String && (i = e.getElementById(i), !i)) throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
        if (!(i.constructor instanceof t.SVGElement || /^svg$/i.test(i.nodeName))) throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
        this.el = i, this.scan(i)
    }

    function n(t, e, i) {
        this.isReady = !1, this.setElement(t, e), this.setOptions(e), this.setCallback(i), this.isReady && this.init()
    }
    i.prototype.TYPES = ["line", "ellipse", "circle", "polygon", "polyline", "rect"], i.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"], i.prototype.scan = function(t) {
        for (var e, i, n, o, r = t.querySelectorAll(this.TYPES.join(",")), s = 0; s < r.length; s++) i = r[s], e = this[i.tagName.toLowerCase() + "ToPath"], n = e(this.parseAttr(i.attributes)), o = this.pathMaker(i, n), i.parentNode.replaceChild(o, i)
    }, i.prototype.lineToPath = function(t) {
        var e = {},
            i = t.x1 || 0,
            n = t.y1 || 0,
            o = t.x2 || 0,
            r = t.y2 || 0;
        return e.d = "M" + i + "," + n + "L" + o + "," + r, e
    }, i.prototype.rectToPath = function(t) {
        var e = {},
            i = parseFloat(t.x) || 0,
            n = parseFloat(t.y) || 0,
            o = parseFloat(t.width) || 0,
            r = parseFloat(t.height) || 0;
        return e.d = "M" + i + " " + n + " ", e.d += "L" + (i + o) + " " + n + " ", e.d += "L" + (i + o) + " " + (n + r) + " ", e.d += "L" + i + " " + (n + r) + " Z", e
    }, i.prototype.polylineToPath = function(t) {
        var e, i, n = {},
            o = t.points.trim().split(" ");
        if (t.points.indexOf(",") === -1) {
            var r = [];
            for (e = 0; e < o.length; e += 2) r.push(o[e] + "," + o[e + 1]);
            o = r
        }
        for (i = "M" + o[0], e = 1; e < o.length; e++) o[e].indexOf(",") !== -1 && (i += "L" + o[e]);
        return n.d = i, n
    }, i.prototype.polygonToPath = function(t) {
        var e = i.prototype.polylineToPath(t);
        return e.d += "Z", e
    }, i.prototype.ellipseToPath = function(t) {
        var e = {},
            i = parseFloat(t.rx) || 0,
            n = parseFloat(t.ry) || 0,
            o = parseFloat(t.cx) || 0,
            r = parseFloat(t.cy) || 0,
            s = o - i,
            a = r,
            l = parseFloat(o) + parseFloat(i),
            c = r;
        return e.d = "M" + s + "," + a + "A" + i + "," + n + " 0,1,1 " + l + "," + c + "A" + i + "," + n + " 0,1,1 " + s + "," + c, e
    }, i.prototype.circleToPath = function(t) {
        var e = {},
            i = parseFloat(t.r) || 0,
            n = parseFloat(t.cx) || 0,
            o = parseFloat(t.cy) || 0,
            r = n - i,
            s = o,
            a = parseFloat(n) + parseFloat(i),
            l = o;
        return e.d = "M" + r + "," + s + "A" + i + "," + i + " 0,1,1 " + a + "," + l + "A" + i + "," + i + " 0,1,1 " + r + "," + l, e
    }, i.prototype.pathMaker = function(t, i) {
        var n, o, r = e.createElementNS("http://www.w3.org/2000/svg", "path");
        for (n = 0; n < t.attributes.length; n++) o = t.attributes[n], this.ATTR_WATCH.indexOf(o.name) === -1 && r.setAttribute(o.name, o.value);
        for (n in i) r.setAttribute(n, i[n]);
        return r
    }, i.prototype.parseAttr = function(t) {
        for (var e, i = {}, n = 0; n < t.length; n++) {
            if (e = t[n], this.ATTR_WATCH.indexOf(e.name) !== -1 && e.value.indexOf("%") !== -1) throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");
            i[e.name] = e.value
        }
        return i
    };
    var o, r, s;
    n.LINEAR = function(t) {
        return t
    }, n.EASE = function(t) {
        return -Math.cos(t * Math.PI) / 2 + .5
    }, n.EASE_OUT = function(t) {
        return 1 - Math.pow(1 - t, 3)
    }, n.EASE_IN = function(t) {
        return Math.pow(t, 3)
    }, n.EASE_OUT_BOUNCE = function(t) {
        var e = -Math.cos(t * (.5 * Math.PI)) + 1,
            i = Math.pow(e, 1.5),
            n = Math.pow(1 - t, 2),
            o = -Math.abs(Math.cos(i * (2.5 * Math.PI))) + 1;
        return 1 - n + o * n
    }, n.prototype.setElement = function(i, n) {
        if ("undefined" == typeof i) throw new Error('Vivus [constructor]: "element" parameter is required');
        if (i.constructor === String && (i = e.getElementById(i), !i)) throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
        if (this.parentEl = i, n && n.file) {
            var o = e.createElement("object");
            o.setAttribute("type", "image/svg+xml"), o.setAttribute("data", n.file), o.setAttribute("built-by-vivus", "true"), i.appendChild(o), i = o
        }
        switch (i.constructor) {
            case t.SVGSVGElement:
            case t.SVGElement:
                this.el = i, this.isReady = !0;
                break;
            case t.HTMLObjectElement:
                var r, s;
                s = this, r = function(t) {
                    if (!s.isReady) {
                        if (s.el = i.contentDocument && i.contentDocument.querySelector("svg"), !s.el && t) throw new Error("Vivus [constructor]: object loaded does not contain any SVG");
                        return s.el ? (i.getAttribute("built-by-vivus") && (s.parentEl.insertBefore(s.el, i), s.parentEl.removeChild(i), s.el.setAttribute("width", "100%"), s.el.setAttribute("height", "100%")), s.isReady = !0, s.init(), !0) : void 0
                    }
                }, r() || i.addEventListener("load", r);
                break;
            default:
                throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')
        }
    }, n.prototype.setOptions = function(e) {
        var i = ["delayed", "sync", "async", "nsync", "oneByOne", "scenario", "scenario-sync"],
            o = ["inViewport", "manual", "autostart"];
        if (void 0 !== e && e.constructor !== Object) throw new Error('Vivus [constructor]: "options" parameter must be an object');
        if (e = e || {}, e.type && i.indexOf(e.type) === -1) throw new Error("Vivus [constructor]: " + e.type + " is not an existing animation `type`");
        if (this.type = e.type || i[0], e.start && o.indexOf(e.start) === -1) throw new Error("Vivus [constructor]: " + e.start + " is not an existing `start` option");
        if (this.start = e.start || o[0], this.isIE = t.navigator.userAgent.indexOf("MSIE") !== -1 || t.navigator.userAgent.indexOf("Trident/") !== -1 || t.navigator.userAgent.indexOf("Edge/") !== -1, this.duration = s(e.duration, 120), this.delay = s(e.delay, null), this.dashGap = s(e.dashGap, 1), this.forceRender = e.hasOwnProperty("forceRender") ? !!e.forceRender : this.isIE, this.reverseStack = !!e.reverseStack, this.selfDestroy = !!e.selfDestroy, this.onReady = e.onReady, this.map = [], this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null, this.ignoreInvisible = !!e.hasOwnProperty("ignoreInvisible") && !!e.ignoreInvisible, this.animTimingFunction = e.animTimingFunction || n.LINEAR, this.pathTimingFunction = e.pathTimingFunction || n.LINEAR, this.delay >= this.duration) throw new Error("Vivus [constructor]: delay must be shorter than duration")
    }, n.prototype.setCallback = function(t) {
        if (t && t.constructor !== Function) throw new Error('Vivus [constructor]: "callback" parameter must be a function');
        this.callback = t || function() {}
    }, n.prototype.mapping = function() {
        var e, i, n, o, r, a, l, c;
        for (c = a = l = 0, i = this.el.querySelectorAll("path"), e = 0; e < i.length; e++) n = i[e], this.isInvisible(n) || (r = {
            el: n,
            length: Math.ceil(n.getTotalLength())
        }, isNaN(r.length) ? t.console && console.warn && console.warn("Vivus [mapping]: cannot retrieve a path element length", n) : (this.map.push(r), n.style.strokeDasharray = r.length + " " + (r.length + 2 * this.dashGap), n.style.strokeDashoffset = r.length + this.dashGap, r.length += this.dashGap, a += r.length, this.renderPath(e)));
        for (a = 0 === a ? 1 : a, this.delay = null === this.delay ? this.duration / 3 : this.delay, this.delayUnit = this.delay / (i.length > 1 ? i.length - 1 : 1), this.reverseStack && this.map.reverse(), e = 0; e < this.map.length; e++) {
            switch (r = this.map[e], this.type) {
                case "delayed":
                    r.startAt = this.delayUnit * e, r.duration = this.duration - this.delay;
                    break;
                case "oneByOne":
                    r.startAt = l / a * this.duration, r.duration = r.length / a * this.duration;
                    break;
                case "sync":
                case "async":
                case "nsync":
                    r.startAt = 0, r.duration = this.duration;
                    break;
                case "scenario-sync":
                    n = r.el, o = this.parseAttr(n), r.startAt = c + (s(o["data-delay"], this.delayUnit) || 0), r.duration = s(o["data-duration"], this.duration), c = void 0 !== o["data-async"] ? r.startAt : r.startAt + r.duration, this.frameLength = Math.max(this.frameLength, r.startAt + r.duration);
                    break;
                case "scenario":
                    n = r.el, o = this.parseAttr(n), r.startAt = s(o["data-start"], this.delayUnit) || 0, r.duration = s(o["data-duration"], this.duration), this.frameLength = Math.max(this.frameLength, r.startAt + r.duration)
            }
            l += r.length, this.frameLength = this.frameLength || this.duration
        }
    }, n.prototype.drawer = function() {
        var t = this;
        if (this.currentFrame += this.speed, this.currentFrame <= 0) this.stop(), this.reset();
        else {
            if (!(this.currentFrame >= this.frameLength)) return this.trace(), void(this.handle = o(function() {
                t.drawer()
            }));
            this.stop(), this.currentFrame = this.frameLength, this.trace(), this.selfDestroy && this.destroy()
        }
        this.callback(this), this.instanceCallback && (this.instanceCallback(this), this.instanceCallback = null)
    }, n.prototype.trace = function() {
        var t, e, i, n;
        for (n = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength, t = 0; t < this.map.length; t++) i = this.map[t], e = (n - i.startAt) / i.duration, e = this.pathTimingFunction(Math.max(0, Math.min(1, e))), i.progress !== e && (i.progress = e, i.el.style.strokeDashoffset = Math.floor(i.length * (1 - e)), this.renderPath(t))
    }, n.prototype.renderPath = function(t) {
        if (this.forceRender && this.map && this.map[t]) {
            var e = this.map[t],
                i = e.el.cloneNode(!0);
            e.el.parentNode.replaceChild(i, e.el), e.el = i
        }
    }, n.prototype.init = function() {
        this.frameLength = 0, this.currentFrame = 0, this.map = [], new i(this.el), this.mapping(), this.starter(),
            this.onReady && this.onReady(this)
    }, n.prototype.starter = function() {
        switch (this.start) {
            case "manual":
                return;
            case "autostart":
                this.play();
                break;
            case "inViewport":
                var e = this,
                    i = function n() {
                        e.isInViewport(e.parentEl, 1) && (e.play(), t.removeEventListener("scroll", n))
                    };
                t.addEventListener("scroll", i), i()
        }
    }, n.prototype.getStatus = function() {
        return 0 === this.currentFrame ? "start" : this.currentFrame === this.frameLength ? "end" : "progress"
    }, n.prototype.reset = function() {
        return this.setFrameProgress(0)
    }, n.prototype.finish = function() {
        return this.setFrameProgress(1)
    }, n.prototype.setFrameProgress = function(t) {
        return t = Math.min(1, Math.max(0, t)), this.currentFrame = Math.round(this.frameLength * t), this.trace(), this
    }, n.prototype.play = function(t, e) {
        if (this.instanceCallback = null, t && "function" == typeof t) this.instanceCallback = t, t = null;
        else if (t && "number" != typeof t) throw new Error("Vivus [play]: invalid speed");
        return e && "function" == typeof e && !this.instanceCallback && (this.instanceCallback = e), this.speed = t || 1, this.handle || this.drawer(), this
    }, n.prototype.stop = function() {
        return this.handle && (r(this.handle), this.handle = null), this
    }, n.prototype.destroy = function() {
        this.stop();
        var t, e;
        for (t = 0; t < this.map.length; t++) e = this.map[t], e.el.style.strokeDashoffset = null, e.el.style.strokeDasharray = null, this.renderPath(t)
    }, n.prototype.isInvisible = function(t) {
        var e, i = t.getAttribute("data-ignore");
        return null !== i ? "false" !== i : !!this.ignoreInvisible && (e = t.getBoundingClientRect(), !e.width && !e.height)
    }, n.prototype.parseAttr = function(t) {
        var e, i = {};
        if (t && t.attributes)
            for (var n = 0; n < t.attributes.length; n++) e = t.attributes[n], i[e.name] = e.value;
        return i
    }, n.prototype.isInViewport = function(t, e) {
        var i = this.scrollY(),
            n = i + this.getViewportH(),
            o = t.getBoundingClientRect(),
            r = o.height,
            s = i + o.top,
            a = s + r;
        return e = e || 0, s + r * e <= n && a >= i
    }, n.prototype.docElem = t.document.documentElement, n.prototype.getViewportH = function() {
        var e = this.docElem.clientHeight,
            i = t.innerHeight;
        return e < i ? i : e
    }, n.prototype.scrollY = function() {
        return t.pageYOffset || this.docElem.scrollTop
    }, o = function() {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60)
        }
    }(), r = function() {
        return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || t.msCancelAnimationFrame || function(e) {
            return t.clearTimeout(e)
        }
    }(), s = function(t, e) {
        var i = parseInt(t, 10);
        return i >= 0 ? i : e
    }, "function" == typeof define && define.amd ? define([], function() {
        return n
    }) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = n : t.Vivus = n
}(window, document);