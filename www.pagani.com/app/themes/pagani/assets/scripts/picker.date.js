! function(e) {
    "function" == typeof define && define.amd ? define(["./picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
}(function(e, t) {
    function n(e, t) {
        var n = this,
            a = e.$node[0],
            i = a.value,
            r = e.$node.data("value"),
            o = r || i,
            s = r ? t.formatSubmit : t.format,
            l = function() {
                return a.currentStyle ? "rtl" == a.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
            };
        n.settings = t, n.$node = e.$node, n.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        }, n.item = {}, n.item.clear = null, n.item.disable = (t.disable || []).slice(0), n.item.enable = - function(e) {
            return e[0] === !0 ? e.shift() : -1
        }(n.item.disable), n.set("min", t.min).set("max", t.max).set("now"), o ? n.set("select", o, {
            format: s,
            defaultValue: !0
        }) : n.set("select", null).set("highlight", n.item.now), n.key = {
            40: 7,
            38: -7,
            39: function() {
                return l() ? -1 : 1
            },
            37: function() {
                return l() ? 1 : -1
            },
            go: function(e) {
                var t = n.item.highlight,
                    a = new Date(t.year, t.month, t.date + e);
                n.set("highlight", a, {
                    interval: e
                }), this.render()
            }
        }, e.on("render", function() {
            e.$root.find("." + t.klass.selectMonth).on("change", function() {
                var n = this.value;
                n && (e.set("highlight", [e.get("view").year, n, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
            }), e.$root.find("." + t.klass.selectYear).on("change", function() {
                var n = this.value;
                n && (e.set("highlight", [n, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
            })
        }, 1).on("open", function() {
            var a = "";
            n.disabled(n.get("now")) && (a = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + a + ", select").attr("disabled", !1)
        }, 1).on("close", function() {
            e.$root.find("button, select").attr("disabled", !0)
        }, 1)
    }
    var a = 7,
        i = 6,
        r = e._;
    n.prototype.set = function(e, t, n) {
        var a = this,
            i = a.item;
        return null === t ? ("clear" == e && (e = "select"), i[e] = t, a) : (i["enable" == e ? "disable" : "flip" == e ? "enable" : e] = a.queue[e].split(" ").map(function(i) {
            return t = a[i](e, t, n)
        }).pop(), "select" == e ? a.set("highlight", i.select, n) : "highlight" == e ? a.set("view", i.highlight, n) : e.match(/^(flip|min|max|disable|enable)$/) && (i.select && a.disabled(i.select) && a.set("select", i.select, n), i.highlight && a.disabled(i.highlight) && a.set("highlight", i.highlight, n)), a)
    }, n.prototype.get = function(e) {
        return this.item[e]
    }, n.prototype.create = function(e, n, a) {
        var i, o = this;
        return n = void 0 === n ? e : n, n == -(1 / 0) || n == 1 / 0 ? i = n : t.isPlainObject(n) && r.isInteger(n.pick) ? n = n.obj : t.isArray(n) ? (n = new Date(n[0], n[1], n[2]), n = r.isDate(n) ? n : o.create().obj) : n = r.isInteger(n) || r.isDate(n) ? o.normalize(new Date(n), a) : o.now(e, n, a), {
            year: i || n.getFullYear(),
            month: i || n.getMonth(),
            date: i || n.getDate(),
            day: i || n.getDay(),
            obj: i || n,
            pick: i || n.getTime()
        }
    }, n.prototype.createRange = function(e, n) {
        var a = this,
            i = function(e) {
                return e === !0 || t.isArray(e) || r.isDate(e) ? a.create(e) : e
            };
        return r.isInteger(e) || (e = i(e)), r.isInteger(n) || (n = i(n)), r.isInteger(e) && t.isPlainObject(n) ? e = [n.year, n.month, n.date + e] : r.isInteger(n) && t.isPlainObject(e) && (n = [e.year, e.month, e.date + n]), {
            from: i(e),
            to: i(n)
        }
    }, n.prototype.withinRange = function(e, t) {
        return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
    }, n.prototype.overlapRanges = function(e, t) {
        var n = this;
        return e = n.createRange(e.from, e.to), t = n.createRange(t.from, t.to), n.withinRange(e, t.from) || n.withinRange(e, t.to) || n.withinRange(t, e.from) || n.withinRange(t, e.to)
    }, n.prototype.now = function(e, t, n) {
        return t = new Date, n && n.rel && t.setDate(t.getDate() + n.rel), this.normalize(t, n)
    }, n.prototype.navigate = function(e, n, a) {
        var i, r, o, s, l = t.isArray(n),
            c = t.isPlainObject(n),
            d = this.item.view;
        if (l || c) {
            for (c ? (r = n.year, o = n.month, s = n.date) : (r = +n[0], o = +n[1], s = +n[2]), a && a.nav && d && d.month !== o && (r = d.year, o = d.month), i = new Date(r, o + (a && a.nav ? a.nav : 0), 1), r = i.getFullYear(), o = i.getMonth(); new Date(r, o, s).getMonth() !== o;) s -= 1;
            n = [r, o, s]
        }
        return n
    }, n.prototype.normalize = function(e) {
        return e.setHours(0, 0, 0, 0), e
    }, n.prototype.measure = function(e, t) {
        var n = this;
        return t ? "string" == typeof t ? t = n.parse(e, t) : r.isInteger(t) && (t = n.now(e, t, {
            rel: t
        })) : t = "min" == e ? -(1 / 0) : 1 / 0, t
    }, n.prototype.viewset = function(e, t) {
        return this.create([t.year, t.month, 1])
    }, n.prototype.validate = function(e, n, a) {
        var i, o, s, l, c = this,
            d = n,
            u = a && a.interval ? a.interval : 1,
            h = c.item.enable === -1,
            f = c.item.min,
            m = c.item.max,
            p = h && c.item.disable.filter(function(e) {
                if (t.isArray(e)) {
                    var a = c.create(e).pick;
                    a < n.pick ? i = !0 : a > n.pick && (o = !0)
                }
                return r.isInteger(e)
            }).length;
        if ((!a || !a.nav && !a.defaultValue) && (!h && c.disabled(n) || h && c.disabled(n) && (p || i || o) || !h && (n.pick <= f.pick || n.pick >= m.pick)))
            for (h && !p && (!o && u > 0 || !i && u < 0) && (u *= -1); c.disabled(n) && (Math.abs(u) > 1 && (n.month < d.month || n.month > d.month) && (n = d, u = u > 0 ? 1 : -1), n.pick <= f.pick ? (s = !0, u = 1, n = c.create([f.year, f.month, f.date + (n.pick === f.pick ? 0 : -1)])) : n.pick >= m.pick && (l = !0, u = -1, n = c.create([m.year, m.month, m.date + (n.pick === m.pick ? 0 : 1)])), !s || !l);) n = c.create([n.year, n.month, n.date + u]);
        return n
    }, n.prototype.disabled = function(e) {
        var n = this,
            a = n.item.disable.filter(function(a) {
                return r.isInteger(a) ? e.day === (n.settings.firstDay ? a : a - 1) % 7 : t.isArray(a) || r.isDate(a) ? e.pick === n.create(a).pick : t.isPlainObject(a) ? n.withinRange(a, e) : void 0
            });
        return a = a.length && !a.filter(function(e) {
            return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
        }).length, n.item.enable === -1 ? !a : a || e.pick < n.item.min.pick || e.pick > n.item.max.pick
    }, n.prototype.parse = function(e, t, n) {
        var a = this,
            i = {};
        return t && "string" == typeof t ? (n && n.format || (n = n || {}, n.format = a.settings.format), a.formats.toArray(n.format).map(function(e) {
            var n = a.formats[e],
                o = n ? r.trigger(n, a, [t, i]) : e.replace(/^!/, "").length;
            n && (i[e] = t.substr(0, o)), t = t.substr(o)
        }), [i.yyyy || i.yy, +(i.mm || i.m) - 1, i.dd || i.d]) : t
    }, n.prototype.formats = function() {
        function e(e, t, n) {
            var a = e.match(/[^\x00-\x7F]+|\w+/)[0];
            return n.mm || n.m || (n.m = t.indexOf(a) + 1), a.length
        }

        function t(e) {
            return e.match(/\w+/)[0].length
        }
        return {
            d: function(e, t) {
                return e ? r.digits(e) : t.date
            },
            dd: function(e, t) {
                return e ? 2 : r.lead(t.date)
            },
            ddd: function(e, n) {
                return e ? t(e) : this.settings.weekdaysShort[n.day]
            },
            dddd: function(e, n) {
                return e ? t(e) : this.settings.weekdaysFull[n.day]
            },
            m: function(e, t) {
                return e ? r.digits(e) : t.month + 1
            },
            mm: function(e, t) {
                return e ? 2 : r.lead(t.month + 1)
            },
            mmm: function(t, n) {
                var a = this.settings.monthsShort;
                return t ? e(t, a, n) : a[n.month]
            },
            mmmm: function(t, n) {
                var a = this.settings.monthsFull;
                return t ? e(t, a, n) : a[n.month]
            },
            yy: function(e, t) {
                return e ? 2 : ("" + t.year).slice(2)
            },
            yyyy: function(e, t) {
                return e ? 4 : t.year
            },
            toArray: function(e) {
                return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            },
            toString: function(e, t) {
                var n = this;
                return n.formats.toArray(e).map(function(e) {
                    return r.trigger(n.formats[e], n, [0, t]) || e.replace(/^!/, "")
                }).join("")
            }
        }
    }(), n.prototype.isDateExact = function(e, n) {
        var a = this;
        return r.isInteger(e) && r.isInteger(n) || "boolean" == typeof e && "boolean" == typeof n ? e === n : (r.isDate(e) || t.isArray(e)) && (r.isDate(n) || t.isArray(n)) ? a.create(e).pick === a.create(n).pick : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && (a.isDateExact(e.from, n.from) && a.isDateExact(e.to, n.to))
    }, n.prototype.isDateOverlap = function(e, n) {
        var a = this,
            i = a.settings.firstDay ? 1 : 0;
        return r.isInteger(e) && (r.isDate(n) || t.isArray(n)) ? (e = e % 7 + i, e === a.create(n).day + 1) : r.isInteger(n) && (r.isDate(e) || t.isArray(e)) ? (n = n % 7 + i, n === a.create(e).day + 1) : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && a.overlapRanges(e, n)
    }, n.prototype.flipEnable = function(e) {
        var t = this.item;
        t.enable = e || (t.enable == -1 ? 1 : -1)
    }, n.prototype.deactivate = function(e, n) {
        var a = this,
            i = a.item.disable.slice(0);
        return "flip" == n ? a.flipEnable() : n === !1 ? (a.flipEnable(1), i = []) : n === !0 ? (a.flipEnable(-1), i = []) : n.map(function(e) {
            for (var n, o = 0; o < i.length; o += 1)
                if (a.isDateExact(e, i[o])) {
                    n = !0;
                    break
                }
            n || (r.isInteger(e) || r.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && i.push(e)
        }), i
    }, n.prototype.activate = function(e, n) {
        var a = this,
            i = a.item.disable,
            o = i.length;
        return "flip" == n ? a.flipEnable() : n === !0 ? (a.flipEnable(1), i = []) : n === !1 ? (a.flipEnable(-1), i = []) : n.map(function(e) {
            var n, s, l, c;
            for (l = 0; l < o; l += 1) {
                if (s = i[l], a.isDateExact(s, e)) {
                    n = i[l] = null, c = !0;
                    break
                }
                if (a.isDateOverlap(s, e)) {
                    t.isPlainObject(e) ? (e.inverted = !0, n = e) : t.isArray(e) ? (n = e, n[3] || n.push("inverted")) : r.isDate(e) && (n = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                    break
                }
            }
            if (n)
                for (l = 0; l < o; l += 1)
                    if (a.isDateExact(i[l], e)) {
                        i[l] = null;
                        break
                    }
            if (c)
                for (l = 0; l < o; l += 1)
                    if (a.isDateOverlap(i[l], e)) {
                        i[l] = null;
                        break
                    }
            n && i.push(n)
        }), i.filter(function(e) {
            return null != e
        })
    }, n.prototype.nodes = function(e) {
        var t = this,
            n = t.settings,
            o = t.item,
            s = o.now,
            l = o.select,
            c = o.highlight,
            d = o.view,
            u = o.disable,
            h = o.min,
            f = o.max,
            m = function(e, t) {
                return n.firstDay && (e.push(e.shift()), t.push(t.shift())), r.node("thead", r.node("tr", r.group({
                    min: 0,
                    max: a - 1,
                    i: 1,
                    node: "th",
                    item: function(a) {
                        return [e[a], n.klass.weekdays, 'scope=col title="' + t[a] + '"']
                    }
                })))
            }((n.showWeekdaysFull ? n.weekdaysFull : n.weekdaysShort).slice(0), n.weekdaysFull.slice(0)),
            p = function(e) {
                return r.node("div", " ", n.klass["nav" + (e ? "Next" : "Prev")] + (e && d.year >= f.year && d.month >= f.month || !e && d.year <= h.year && d.month <= h.month ? " " + n.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + r.ariaAttr({
                    role: "button",
                    controls: t.$node[0].id + "_table"
                }) + ' title="' + (e ? n.labelMonthNext : n.labelMonthPrev) + '"')
            },
            y = function() {
                var a = n.showMonthsShort ? n.monthsShort : n.monthsFull;
                return n.selectMonths ? r.node("select", r.group({
                    min: 0,
                    max: 11,
                    i: 1,
                    node: "option",
                    item: function(e) {
                        return [a[e], 0, "value=" + e + (d.month == e ? " selected" : "") + (d.year == h.year && e < h.month || d.year == f.year && e > f.month ? " disabled" : "")]
                    }
                }), n.klass.selectMonth, (e ? "" : "disabled") + " " + r.ariaAttr({
                    controls: t.$node[0].id + "_table"
                }) + ' title="' + n.labelMonthSelect + '"') : r.node("div", a[d.month], n.klass.month)
            },
            g = function() {
                var a = d.year,
                    i = n.selectYears === !0 ? 5 : ~~(n.selectYears / 2);
                if (i) {
                    var o = h.year,
                        s = f.year,
                        l = a - i,
                        c = a + i;
                    if (o > l && (c += o - l, l = o), s < c) {
                        var u = l - o,
                            m = c - s;
                        l -= u > m ? m : u, c = s
                    }
                    return r.node("select", r.group({
                        min: l,
                        max: c,
                        i: 1,
                        node: "option",
                        item: function(e) {
                            return [e, 0, "value=" + e + (a == e ? " selected" : "")]
                        }
                    }), n.klass.selectYear, (e ? "" : "disabled") + " " + r.ariaAttr({
                        controls: t.$node[0].id + "_table"
                    }) + ' title="' + n.labelYearSelect + '"')
                }
                return r.node("div", a, n.klass.year)
            };
        return r.node("div", (n.selectYears ? g() + y() : y() + g()) + p() + p(1), n.klass.header) + r.node("table", m + r.node("tbody", r.group({
            min: 0,
            max: i - 1,
            i: 1,
            node: "tr",
            item: function(e) {
                var i = n.firstDay && 0 === t.create([d.year, d.month, 1]).day ? -7 : 0;
                return [r.group({
                    min: a * e - d.day + i + 1,
                    max: function() {
                        return this.min + a - 1
                    },
                    i: 1,
                    node: "td",
                    item: function(e) {
                        e = t.create([d.year, d.month, e + (n.firstDay ? 1 : 0)]);
                        var a = l && l.pick == e.pick,
                            i = c && c.pick == e.pick,
                            o = u && t.disabled(e) || e.pick < h.pick || e.pick > f.pick,
                            m = r.trigger(t.formats.toString, t, [n.format, e]);
                        return [r.node("div", e.date, function(t) {
                            return t.push(d.month == e.month ? n.klass.infocus : n.klass.outfocus), s.pick == e.pick && t.push(n.klass.now), a && t.push(n.klass.selected), i && t.push(n.klass.highlighted), o && t.push(n.klass.disabled), t.join(" ")
                        }([n.klass.day]), "data-pick=" + e.pick + " " + r.ariaAttr({
                            role: "gridcell",
                            label: m,
                            selected: !(!a || t.$node.val() !== m) || null,
                            activedescendant: !!i || null,
                            disabled: !!o || null
                        })), "", r.ariaAttr({
                            role: "presentation"
                        })]
                    }
                })]
            }
        })), n.klass.table, 'id="' + t.$node[0].id + '_table" ' + r.ariaAttr({
            role: "grid",
            controls: t.$node[0].id,
            readonly: !0
        })) + r.node("div", r.node("button", n.today, n.klass.buttonToday, "type=button data-pick=" + s.pick + (e && !t.disabled(s) ? "" : " disabled") + " " + r.ariaAttr({
            controls: t.$node[0].id
        })) + r.node("button", n.clear, n.klass.buttonClear, "type=button data-clear=1" + (e ? "" : " disabled") + " " + r.ariaAttr({
            controls: t.$node[0].id
        })) + r.node("button", n.close, n.klass.buttonClose, "type=button data-close=true " + (e ? "" : " disabled") + " " + r.ariaAttr({
            controls: t.$node[0].id
        })), n.klass.footer)
    }, n.defaults = function(e) {
        return {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            today: "Today",
            clear: "Clear",
            close: "Close",
            closeOnSelect: !0,
            closeOnClear: !0,
            format: "d mmmm, yyyy",
            klass: {
                table: e + "table",
                header: e + "header",
                navPrev: e + "nav--prev",
                navNext: e + "nav--next",
                navDisabled: e + "nav--disabled",
                month: e + "month",
                year: e + "year",
                selectMonth: e + "select--month",
                selectYear: e + "select--year",
                weekdays: e + "weekday",
                day: e + "day",
                disabled: e + "day--disabled",
                selected: e + "day--selected",
                highlighted: e + "day--highlighted",
                now: e + "day--today",
                infocus: e + "day--infocus",
                outfocus: e + "day--outfocus",
                footer: e + "footer",
                buttonClear: e + "button--clear",
                buttonToday: e + "button--today",
                buttonClose: e + "button--close"
            }
        }
    }(e.klasses().picker + "__"), e.extend("pickadate", n)
});