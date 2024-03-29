! function(e) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
}(function(e) {
    function t(i, a, c, f) {
        function p() {
            return t._.node("div", t._.node("div", t._.node("div", t._.node("div", O.component.nodes(k.open), w.box), w.wrap), w.frame), w.holder, 'tabindex="-1"')
        }

        function h() {
            C.data(a, O).addClass(w.input).val(C.data("value") ? O.get("select", x.format) : i.value), x.editable || C.on("focus." + k.id + " click." + k.id, function(e) {
                e.preventDefault(), O.open()
            }).on("keydown." + k.id, $), r(i, {
                haspopup: !0,
                expanded: !1,
                readonly: !1,
                owns: i.id + "_root"
            })
        }

        function m() {
            r(O.$root[0], "hidden", !0)
        }

        function g() {
            O.$holder.on({
                keydown: $,
                "focus.toOpen": _,
                blur: function() {
                    C.removeClass(w.target)
                },
                focusin: function(e) {
                    O.$root.removeClass(w.focused), e.stopPropagation()
                },
                "mousedown click": function(t) {
                    var n = t.target;
                    n != O.$holder[0] && (t.stopPropagation(), "mousedown" != t.type || e(n).is("input, select, textarea, button, option") || (t.preventDefault(), O.$holder[0].focus()))
                }
            }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                var t = e(this),
                    n = t.data(),
                    o = t.hasClass(w.navDisabled) || t.hasClass(w.disabled),
                    r = d();
                r = r && (r.type || r.href), (o || r && !e.contains(O.$root[0], r)) && O.$holder[0].focus(), !o && n.nav ? O.set("highlight", O.component.item.highlight, {
                    nav: n.nav
                }) : !o && "pick" in n ? (O.set("select", n.pick), x.closeOnSelect && O.close(!0)) : n.clear ? (O.clear(), x.closeOnClear && O.close(!0)) : n.close && O.close(!0)
            })
        }

        function v() {
            var t;
            x.hiddenName === !0 ? (t = i.name, i.name = "") : (t = ["string" == typeof x.hiddenPrefix ? x.hiddenPrefix : "", "string" == typeof x.hiddenSuffix ? x.hiddenSuffix : "_submit"], t = t[0] + i.name + t[1]), O._hidden = e('<input type=hidden name="' + t + '"' + (C.data("value") || i.value ? ' value="' + O.get("select", x.formatSubmit) + '"' : "") + ">")[0], C.on("change." + k.id, function() {
                O._hidden.value = i.value ? O.get("select", x.formatSubmit) : ""
            })
        }

        function y() {
            b && l ? O.$holder.find("." + w.frame).one("transitionend", function() {
                O.$holder[0].focus()
            }) : O.$holder[0].focus()
        }

        function _(e) {
            e.stopPropagation(), C.addClass(w.target), O.$root.addClass(w.focused), O.open()
        }

        function $(e) {
            var t = e.keyCode,
                n = /^(8|46)$/.test(t);
            return 27 == t ? (O.close(!0), !1) : void((32 == t || n || !k.open && O.component.key[t]) && (e.preventDefault(), e.stopPropagation(), n ? O.clear().close() : O.open()))
        }
        if (!i) return t;
        var b = !1,
            k = {
                id: i.id || "P" + Math.abs(~~(Math.random() * new Date))
            },
            x = c ? e.extend(!0, {}, c.defaults, f) : f || {},
            w = e.extend({}, t.klasses(), x.klass),
            C = e(i),
            S = function() {
                return this.start()
            },
            O = S.prototype = {
                constructor: S,
                $node: C,
                start: function() {
                    return k && k.start ? O : (k.methods = {}, k.start = !0, k.open = !1, k.type = i.type, i.autofocus = i == d(), i.readOnly = !x.editable, i.id = i.id || k.id, "text" != i.type && (i.type = "text"), O.component = new c(O, x), O.$root = e('<div class="' + w.picker + '" id="' + i.id + '_root" />'), m(), O.$holder = e(p()).appendTo(O.$root), g(), x.formatSubmit && v(), h(), x.containerHidden ? e(x.containerHidden).append(O._hidden) : C.after(O._hidden), x.container ? e(x.container).append(O.$root) : C.after(O.$root), O.on({
                        start: O.component.onStart,
                        render: O.component.onRender,
                        stop: O.component.onStop,
                        open: O.component.onOpen,
                        close: O.component.onClose,
                        set: O.component.onSet
                    }).on({
                        start: x.onStart,
                        render: x.onRender,
                        stop: x.onStop,
                        open: x.onOpen,
                        close: x.onClose,
                        set: x.onSet
                    }), b = n(O.$holder[0]), i.autofocus && O.open(), O.trigger("start").trigger("render"))
                },
                render: function(t) {
                    return t ? (O.$holder = e(p()), g(), O.$root.html(O.$holder)) : O.$root.find("." + w.box).html(O.component.nodes(k.open)), O.trigger("render")
                },
                stop: function() {
                    return k.start ? (O.close(), O._hidden && O._hidden.parentNode.removeChild(O._hidden), O.$root.remove(), C.removeClass(w.input).removeData(a), setTimeout(function() {
                        C.off("." + k.id)
                    }, 0), i.type = k.type, i.readOnly = !1, O.trigger("stop"), k.methods = {}, k.start = !1, O) : O
                },
                open: function(n) {
                    return k.open ? O : (C.addClass(w.active), r(i, "expanded", !0), setTimeout(function() {
                        O.$root.addClass(w.opened), r(O.$root[0], "hidden", !1)
                    }, 0), n !== !1 && (k.open = !0, b && u.css("overflow", "hidden").css("padding-right", "+=" + o()), y(), s.on("click." + k.id + " focusin." + k.id, function(e) {
                        var t = e.target;
                        t != i && t != document && 3 != e.which && O.close(t === O.$holder[0])
                    }).on("keydown." + k.id, function(n) {
                        var o = n.keyCode,
                            r = O.component.key[o],
                            i = n.target;
                        27 == o ? O.close(!0) : i != O.$holder[0] || !r && 13 != o ? e.contains(O.$root[0], i) && 13 == o && (n.preventDefault(), i.click()) : (n.preventDefault(), r ? t._.trigger(O.component.key.go, O, [t._.trigger(r)]) : O.$root.find("." + w.highlighted).hasClass(w.disabled) || (O.set("select", O.component.item.highlight), x.closeOnSelect && O.close(!0)))
                    })), O.trigger("open"))
                },
                close: function(e) {
                    return e && (x.editable ? i.focus() : (O.$holder.off("focus.toOpen").focus(), setTimeout(function() {
                        O.$holder.on("focus.toOpen", _)
                    }, 0))), C.removeClass(w.active), r(i, "expanded", !1), setTimeout(function() {
                        O.$root.removeClass(w.opened + " " + w.focused), r(O.$root[0], "hidden", !0)
                    }, 0), k.open ? (k.open = !1, b && u.css("overflow", "").css("padding-right", "-=" + o()), s.off("." + k.id), O.trigger("close")) : O
                },
                clear: function(e) {
                    return O.set("clear", null, e)
                },
                set: function(t, n, o) {
                    var r, i, a = e.isPlainObject(t),
                        d = a ? t : {};
                    if (o = a && e.isPlainObject(n) ? n : o || {}, t) {
                        a || (d[t] = n);
                        for (r in d) i = d[r], r in O.component.item && (void 0 === i && (i = null), O.component.set(r, i, o)), "select" != r && "clear" != r || C.val("clear" == r ? "" : O.get(r, x.format)).trigger("change");
                        O.render()
                    }
                    return o.muted ? O : O.trigger("set", d)
                },
                get: function(e, n) {
                    if (e = e || "value", null != k[e]) return k[e];
                    if ("valueSubmit" == e) {
                        if (O._hidden) return O._hidden.value;
                        e = "value"
                    }
                    if ("value" == e) return i.value;
                    if (e in O.component.item) {
                        if ("string" == typeof n) {
                            var o = O.component.get(e);
                            return o ? t._.trigger(O.component.formats.toString, O.component, [n, o]) : ""
                        }
                        return O.component.get(e)
                    }
                },
                on: function(t, n, o) {
                    var r, i, a = e.isPlainObject(t),
                        d = a ? t : {};
                    if (t) {
                        a || (d[t] = n);
                        for (r in d) i = d[r], o && (r = "_" + r), k.methods[r] = k.methods[r] || [], k.methods[r].push(i)
                    }
                    return O
                },
                off: function() {
                    var e, t, n = arguments;
                    for (e = 0, namesCount = n.length; e < namesCount; e += 1) t = n[e], t in k.methods && delete k.methods[t];
                    return O
                },
                trigger: function(e, n) {
                    var o = function(e) {
                        var o = k.methods[e];
                        o && o.map(function(e) {
                            t._.trigger(e, O, [n])
                        })
                    };
                    return o("_" + e), o(e), O
                }
            };
        return new S
    }

    function n(e) {
        var t, n = "position";
        return e.currentStyle ? t = e.currentStyle[n] : window.getComputedStyle && (t = getComputedStyle(e)[n]), "fixed" == t
    }

    function o() {
        if (u.height() <= c.height()) return 0;
        var t = e('<div style="visibility:hidden;width:100px" />').appendTo("body"),
            n = t[0].offsetWidth;
        t.css("overflow", "scroll");
        var o = e('<div style="width:100%" />').appendTo(t),
            r = o[0].offsetWidth;
        return t.remove(), n - r
    }

    function r(t, n, o) {
        if (e.isPlainObject(n))
            for (var r in n) i(t, r, n[r]);
        else i(t, n, o)
    }

    function i(e, t, n) {
        e.setAttribute(("role" == t ? "" : "aria-") + t, n)
    }

    function a(t, n) {
        e.isPlainObject(t) || (t = {
            attribute: n
        }), n = "";
        for (var o in t) {
            var r = ("role" == o ? "" : "aria-") + o,
                i = t[o];
            n += null == i ? "" : r + '="' + t[o] + '"'
        }
        return n
    }

    function d() {
        try {
            return document.activeElement
        } catch (e) {}
    }
    var c = e(window),
        s = e(document),
        u = e(document.documentElement),
        l = null != document.documentElement.style.transition;
    return t.klasses = function(e) {
        return e = e || "picker", {
            picker: e,
            opened: e + "--opened",
            focused: e + "--focused",
            input: e + "__input",
            active: e + "__input--active",
            target: e + "__input--target",
            holder: e + "__holder",
            frame: e + "__frame",
            wrap: e + "__wrap",
            box: e + "__box"
        }
    }, t._ = {
        group: function(e) {
            for (var n, o = "", r = t._.trigger(e.min, e); r <= t._.trigger(e.max, e, [r]); r += e.i) n = t._.trigger(e.item, e, [r]), o += t._.node(e.node, n[0], n[1], n[2]);
            return o
        },
        node: function(t, n, o, r) {
            return n ? (n = e.isArray(n) ? n.join("") : n, o = o ? ' class="' + o + '"' : "", r = r ? " " + r : "", "<" + t + o + r + ">" + n + "</" + t + ">") : ""
        },
        lead: function(e) {
            return (e < 10 ? "0" : "") + e
        },
        trigger: function(e, t, n) {
            return "function" == typeof e ? e.apply(t, n || []) : e
        },
        digits: function(e) {
            return /\d/.test(e[1]) ? 2 : 1
        },
        isDate: function(e) {
            return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
        },
        isInteger: function(e) {
            return {}.toString.call(e).indexOf("Number") > -1 && e % 1 === 0
        },
        ariaAttr: a
    }, t.extend = function(n, o) {
        e.fn[n] = function(r, i) {
            var a = this.data(n);
            return "picker" == r ? a : a && "string" == typeof r ? t._.trigger(a[r], a, [i]) : this.each(function() {
                var i = e(this);
                i.data(n) || new t(this, n, o, r)
            })
        }, e.fn[n].defaults = o.defaults
    }, t
});