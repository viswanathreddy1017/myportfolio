// ProgressBar.js 1.0.1
// https://kimmobrunfeldt.github.io/progressbar.js
// License: MIT

!function (a) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = a();
    else if ("function" == typeof define && define.amd)
        define([], a);
    else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
        b.ProgressBar = a()
    }
}
(function () {
    var a;
    return function b(a, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!a[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i)
                        return i(g, !0);
                    if (f)
                        return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND",
                    j
                }
                var k = c[g] = {
                    exports: {}
                };
                a[g][0].call(k.exports, function (b) {
                    var c = a[g][1][b];
                    return e(c ? c : b)
                }, k, k.exports, b, a, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)
            e(d[g]);
        return e
    }
    ({
        1: [function (b, c, d) {
                (function () {
                    var b = this || Function("return this")(),
                    e = function () {
                        "use strict";
                        function e() {}
                        function f(a, b) {
                            var c;
                            for (c in a)
                                Object.hasOwnProperty.call(a, c) && b(c)
                        }
                        function g(a, b) {
                            return f(b, function (c) {
                                a[c] = b[c]
                            }),
                            a
                        }
                        function h(a, b) {
                            f(b, function (c) {
                                "undefined" == typeof a[c] && (a[c] = b[c])
                            })
                        }
                        function i(a, b, c, d, e, f, g) {
                            var h,
                            i,
                            k,
                            l = f > a ? 0 : (a - f) / e;
                            for (h in b)
                                b.hasOwnProperty(h) && (i = g[h], k = "function" == typeof i ? i : o[i], b[h] = j(c[h], d[h], k, l));
                            return b
                        }
                        function j(a, b, c, d) {
                            return a + (b - a) * c(d)
                        }
                        function k(a, b) {
                            var c = n.prototype.filter,
                            d = a._filterArgs;
                            f(c, function (e) {
                                "undefined" != typeof c[e][b] && c[e][b].apply(a, d)
                            })
                        }
                        function l(a, b, c, d, e, f, g, h, j, l, m) {
                            v = b + c + d,
                            w = Math.min(m || u(), v),
                            x = w >= v,
                            y = d - (v - w),
                            a.isPlaying() && (x ? (j(g, a._attachment, y), a.stop(!0)) : (a._scheduleId = l(a._timeoutHandler, s), k(a, "beforeTween"), b + c > w ? i(1, e, f, g, 1, 1, h) : i(w, e, f, g, d, b + c, h), k(a, "afterTween"), j(e, a._attachment, y)))
                        }
                        function m(a, b) {
                            var c = {},
                            d = typeof b;
                            return "string" === d || "function" === d ? f(a, function (a) {
                                c[a] = b
                            }) : f(a, function (a) {
                                c[a] || (c[a] = b[a] || q)
                            }),
                            c
                        }
                        function n(a, b) {
                            this._currentState = a || {},
                            this._configured = !1,
                            this._scheduleFunction = p,
                            "undefined" != typeof b && this.setConfig(b)
                        }
                        var o,
                        p,
                        q = "linear",
                        r = 500,
                        s = 1e3 / 60,
                        t = Date.now ? Date.now : function () {
                            return +new Date
                        },
                        u = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : t;
                        p = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout : setTimeout;
                        var v,
                        w,
                        x,
                        y;
                        return n.prototype.tween = function (a) {
                            return this._isTweening ? this : (void 0 === a && this._configured || this.setConfig(a), this._timestamp = u(), this._start(this.get(), this._attachment), this.resume())
                        },
                        n.prototype.setConfig = function (a) {
                            a = a || {},
                            this._configured = !0,
                            this._attachment = a.attachment,
                            this._pausedAtTime = null,
                            this._scheduleId = null,
                            this._delay = a.delay || 0,
                            this._start = a.start || e,
                            this._step = a.step || e,
                            this._finish = a.finish || e,
                            this._duration = a.duration || r,
                            this._currentState = g({}, a.from) || this.get(),
                            this._originalState = this.get(),
                            this._targetState = g({}, a.to) || this.get();
                            var b = this;
                            this._timeoutHandler = function () {
                                l(b, b._timestamp, b._delay, b._duration, b._currentState, b._originalState, b._targetState, b._easing, b._step, b._scheduleFunction)
                            };
                            var c = this._currentState,
                            d = this._targetState;
                            return h(d, c),
                            this._easing = m(c, a.easing || q),
                            this._filterArgs = [c, this._originalState, d, this._easing],
                            k(this, "tweenCreated"),
                            this
                        },
                        n.prototype.get = function () {
                            return g({}, this._currentState)
                        },
                        n.prototype.set = function (a) {
                            this._currentState = a
                        },
                        n.prototype.pause = function () {
                            return this._pausedAtTime = u(),
                            this._isPaused = !0,
                            this
                        },
                        n.prototype.resume = function () {
                            return this._isPaused && (this._timestamp += u() - this._pausedAtTime),
                            this._isPaused = !1,
                            this._isTweening = !0,
                            this._timeoutHandler(),
                            this
                        },
                        n.prototype.seek = function (a) {
                            a = Math.max(a, 0);
                            var b = u();
                            return this._timestamp + a === 0 ? this : (this._timestamp = b - a, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, l(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, b), this.pause()), this)
                        },
                        n.prototype.stop = function (a) {
                            return this._isTweening = !1,
                            this._isPaused = !1,
                            this._timeoutHandler = e,
                            (b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.oCancelAnimationFrame || b.msCancelAnimationFrame || b.mozCancelRequestAnimationFrame || b.clearTimeout)(this._scheduleId),
                            a && (k(this, "beforeTween"), i(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), k(this, "afterTween"), k(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)),
                            this
                        },
                        n.prototype.isPlaying = function () {
                            return this._isTweening && !this._isPaused
                        },
                        n.prototype.setScheduleFunction = function (a) {
                            this._scheduleFunction = a
                        },
                        n.prototype.dispose = function () {
                            var a;
                            for (a in this)
                                this.hasOwnProperty(a) && delete this[a]
                        },
                        n.prototype.filter = {},
                        n.prototype.formula = {
                            linear: function (a) {
                                return a
                            }
                        },
                        o = n.prototype.formula,
                        g(n, {
                            now: u,
                            each: f,
                            tweenProps: i,
                            tweenProp: j,
                            applyFilter: k,
                            shallowCopy: g,
                            defaults: h,
                            composeEasingObject: m
                        }),
                        "function" == typeof SHIFTY_DEBUG_NOW && (b.timeoutHandler = l),
                        "object" == typeof d ? c.exports = n : "function" == typeof a && a.amd ? a(function () {
                            return n
                        }) : "undefined" == typeof b.Tweenable && (b.Tweenable = n),
                        n
                    }
                    ();
                    !function () {
                        e.shallowCopy(e.prototype.formula, {
                            easeInQuad: function (a) {
                                return Math.pow(a, 2)
                            },
                            easeOutQuad: function (a) {
                                return  - (Math.pow(a - 1, 2) - 1)
                            },
                            easeInOutQuad: function (a) {
                                return (a /= .5) < 1 ? .5 * Math.pow(a, 2) :  - .5 * ((a -= 2) * a - 2)
                            },
                            easeInCubic: function (a) {
                                return Math.pow(a, 3)
                            },
                            easeOutCubic: function (a) {
                                return Math.pow(a - 1, 3) + 1
                            },
                            easeInOutCubic: function (a) {
                                return (a /= .5) < 1 ? .5 * Math.pow(a, 3) : .5 * (Math.pow(a - 2, 3) + 2)
                            },
                            easeInQuart: function (a) {
                                return Math.pow(a, 4)
                            },
                            easeOutQuart: function (a) {
                                return  - (Math.pow(a - 1, 4) - 1)
                            },
                            easeInOutQuart: function (a) {
                                return (a /= .5) < 1 ? .5 * Math.pow(a, 4) :  - .5 * ((a -= 2) * Math.pow(a, 3) - 2)
                            },
                            easeInQuint: function (a) {
                                return Math.pow(a, 5)
                            },
                            easeOutQuint: function (a) {
                                return Math.pow(a - 1, 5) + 1
                            },
                            easeInOutQuint: function (a) {
                                return (a /= .5) < 1 ? .5 * Math.pow(a, 5) : .5 * (Math.pow(a - 2, 5) + 2)
                            },
                            easeInSine: function (a) {
                                return -Math.cos(a * (Math.PI / 2)) + 1
                            },
                            easeOutSine: function (a) {
                                return Math.sin(a * (Math.PI / 2))
                            },
                            easeInOutSine: function (a) {
                                return  - .5 * (Math.cos(Math.PI * a) - 1)
                            },
                            easeInExpo: function (a) {
                                return 0 === a ? 0 : Math.pow(2, 10 * (a - 1))
                            },
                            easeOutExpo: function (a) {
                                return 1 === a ? 1 : -Math.pow(2, -10 * a) + 1
                            },
                            easeInOutExpo: function (a) {
                                return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2)
                            },
                            easeInCirc: function (a) {
                                return  - (Math.sqrt(1 - a * a) - 1)
                            },
                            easeOutCirc: function (a) {
                                return Math.sqrt(1 - Math.pow(a - 1, 2))
                            },
                            easeInOutCirc: function (a) {
                                return (a /= .5) < 1 ?  - .5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                            },
                            easeOutBounce: function (a) {
                                return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                            },
                            easeInBack: function (a) {
                                var b = 1.70158;
                                return a * a * ((b + 1) * a - b)
                            },
                            easeOutBack: function (a) {
                                var b = 1.70158;
                                return (a -= 1) * a * ((b + 1) * a + b) + 1
                            },
                            easeInOutBack: function (a) {
                                var b = 1.70158;
                                return (a /= .5) < 1 ? .5 * (a * a * (((b *= 1.525) + 1) * a - b)) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
                            },
                            elastic: function (a) {
                                return -1 * Math.pow(4, -8 * a) * Math.sin((6 * a - 1) * (2 * Math.PI) / 2) + 1
                            },
                            swingFromTo: function (a) {
                                var b = 1.70158;
                                return (a /= .5) < 1 ? .5 * (a * a * (((b *= 1.525) + 1) * a - b)) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
                            },
                            swingFrom: function (a) {
                                var b = 1.70158;
                                return a * a * ((b + 1) * a - b)
                            },
                            swingTo: function (a) {
                                var b = 1.70158;
                                return (a -= 1) * a * ((b + 1) * a + b) + 1
                            },
                            bounce: function (a) {
                                return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                            },
                            bouncePast: function (a) {
                                return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 2 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 2 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 2 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                            },
                            easeFromTo: function (a) {
                                return (a /= .5) < 1 ? .5 * Math.pow(a, 4) :  - .5 * ((a -= 2) * Math.pow(a, 3) - 2)
                            },
                            easeFrom: function (a) {
                                return Math.pow(a, 4)
                            },
                            easeTo: function (a) {
                                return Math.pow(a, .25)
                            }
                        })
                    }
                    (),
                    function () {
                        function a(a, b, c, d, e, f) {
                            function g(a) {
                                return ((n * a + o) * a + p) * a
                            }
                            function h(a) {
                                return ((q * a + r) * a + s) * a
                            }
                            function i(a) {
                                return (3 * n * a + 2 * o) * a + p
                            }
                            function j(a) {
                                return 1 / (200 * a)
                            }
                            function k(a, b) {
                                return h(m(a, b))
                            }
                            function l(a) {
                                return a >= 0 ? a : 0 - a
                            }
                            function m(a, b) {
                                var c,
                                d,
                                e,
                                f,
                                h,
                                j;
                                for (e = a, j = 0; 8 > j; j++) {
                                    if (f = g(e) - a, l(f) < b)
                                        return e;
                                    if (h = i(e), l(h) < 1e-6)
                                        break;
                                    e -= f / h
                                }
                                if (c = 0, d = 1, e = a, c > e)
                                    return c;
                                if (e > d)
                                    return d;
                                for (; d > c; ) {
                                    if (f = g(e), l(f - a) < b)
                                        return e;
                                    a > f ? c = e : d = e,
                                    e = .5 * (d - c) + c
                                }
                                return e
                            }
                            var n = 0,
                            o = 0,
                            p = 0,
                            q = 0,
                            r = 0,
                            s = 0;
                            return p = 3 * b,
                            o = 3 * (d - b) - p,
                            n = 1 - p - o,
                            s = 3 * c,
                            r = 3 * (e - c) - s,
                            q = 1 - s - r,
                            k(a, j(f))
                        }
                        function b(b, c, d, e) {
                            return function (f) {
                                return a(f, b, c, d, e, 1)
                            }
                        }
                        e.setBezierFunction = function (a, c, d, f, g) {
                            var h = b(c, d, f, g);
                            return h.displayName = a,
                            h.x1 = c,
                            h.y1 = d,
                            h.x2 = f,
                            h.y2 = g,
                            e.prototype.formula[a] = h
                        },
                        e.unsetBezierFunction = function (a) {
                            delete e.prototype.formula[a]
                        }
                    }
                    (),
                    function () {
                        function a(a, b, c, d, f, g) {
                            return e.tweenProps(d, b, a, c, 1, g, f)
                        }
                        var b = new e;
                        b._filterArgs = [],
                        e.interpolate = function (c, d, f, g, h) {
                            var i = e.shallowCopy({}, c),
                            j = h || 0,
                            k = e.composeEasingObject(c, g || "linear");
                            b.set({});
                            var l = b._filterArgs;
                            l.length = 0,
                            l[0] = i,
                            l[1] = c,
                            l[2] = d,
                            l[3] = k,
                            e.applyFilter(b, "tweenCreated"),
                            e.applyFilter(b, "beforeTween");
                            var m = a(c, i, d, f, k, j);
                            return e.applyFilter(b, "afterTween"),
                            m
                        }
                    }
                    (),
                    function (a) {
                        function b(a, b) {
                            var c,
                            d = [],
                            e = a.length;
                            for (c = 0; e > c; c++)
                                d.push("_" + b + "_" + c);
                            return d
                        }
                        function c(a) {
                            var b = a.match(v);
                            return b ? (1 === b.length || a[0].match(u)) && b.unshift("") : b = ["", ""],
                            b.join(A)
                        }
                        function d(b) {
                            a.each(b, function (a) {
                                var c = b[a];
                                "string" == typeof c && c.match(z) && (b[a] = e(c))
                            })
                        }
                        function e(a) {
                            return i(z, a, f)
                        }
                        function f(a) {
                            var b = g(a);
                            return "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")"
                        }
                        function g(a) {
                            return a = a.replace(/#/, ""),
                            3 === a.length && (a = a.split(""), a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]),
                            B[0] = h(a.substr(0, 2)),
                            B[1] = h(a.substr(2, 2)),
                            B[2] = h(a.substr(4, 2)),
                            B
                        }
                        function h(a) {
                            return parseInt(a, 16)
                        }
                        function i(a, b, c) {
                            var d = b.match(a),
                            e = b.replace(a, A);
                            if (d)
                                for (var f, g = d.length, h = 0; g > h; h++)
                                    f = d.shift(), e = e.replace(A, c(f));
                            return e
                        }
                        function j(a) {
                            return i(x, a, k)
                        }
                        function k(a) {
                            for (var b = a.match(w), c = b.length, d = a.match(y)[0], e = 0; c > e; e++)
                                d += parseInt(b[e], 10) + ",";
                            return d = d.slice(0, -1) + ")"
                        }
                        function l(d) {
                            var e = {};
                            return a.each(d, function (a) {
                                var f = d[a];
                                if ("string" == typeof f) {
                                    var g = r(f);
                                    e[a] = {
                                        formatString: c(f),
                                        chunkNames: b(g, a)
                                    }
                                }
                            }),
                            e
                        }
                        function m(b, c) {
                            a.each(c, function (a) {
                                for (var d = b[a], e = r(d), f = e.length, g = 0; f > g; g++)
                                    b[c[a].chunkNames[g]] = +e[g];
                                delete b[a]
                            })
                        }
                        function n(b, c) {
                            a.each(c, function (a) {
                                var d = b[a],
                                e = o(b, c[a].chunkNames),
                                f = p(e, c[a].chunkNames);
                                d = q(c[a].formatString, f),
                                b[a] = j(d)
                            })
                        }
                        function o(a, b) {
                            for (var c, d = {}, e = b.length, f = 0; e > f; f++)
                                c = b[f], d[c] = a[c], delete a[c];
                            return d
                        }
                        function p(a, b) {
                            C.length = 0;
                            for (var c = b.length, d = 0; c > d; d++)
                                C.push(a[b[d]]);
                            return C
                        }
                        function q(a, b) {
                            for (var c = a, d = b.length, e = 0; d > e; e++)
                                c = c.replace(A, +b[e].toFixed(4));
                            return c
                        }
                        function r(a) {
                            return a.match(w)
                        }
                        function s(b, c) {
                            a.each(c, function (a) {
                                var d,
                                e = c[a],
                                f = e.chunkNames,
                                g = f.length,
                                h = b[a];
                                if ("string" == typeof h) {
                                    var i = h.split(" "),
                                    j = i[i.length - 1];
                                    for (d = 0; g > d; d++)
                                        b[f[d]] = i[d] || j
                                } else
                                    for (d = 0; g > d; d++)
                                        b[f[d]] = h;
                                delete b[a]
                            })
                        }
                        function t(b, c) {
                            a.each(c, function (a) {
                                var d = c[a],
                                e = d.chunkNames,
                                f = e.length,
                                g = b[e[0]],
                                h = typeof g;
                                if ("string" === h) {
                                    for (var i = "", j = 0; f > j; j++)
                                        i += " " + b[e[j]], delete b[e[j]];
                                    b[a] = i.substr(1)
                                } else
                                    b[a] = g
                            })
                        }
                        var u = /(\d|\-|\.)/,
                        v = /([^\-0-9\.]+)/g,
                        w = /[0-9.\-]+/g,
                        x = new RegExp("rgb\\(" + w.source + /,\s*/.source + w.source + /,\s*/.source + w.source + "\\)", "g"),
                        y = /^.*\(/,
                        z = /#([0-9]|[a-f]){3,6}/gi,
                        A = "VAL",
                        B = [],
                        C = [];
                        a.prototype.filter.token = {
                            tweenCreated: function (a, b, c, e) {
                                d(a),
                                d(b),
                                d(c),
                                this._tokenData = l(a)
                            },
                            beforeTween: function (a, b, c, d) {
                                s(d, this._tokenData),
                                m(a, this._tokenData),
                                m(b, this._tokenData),
                                m(c, this._tokenData)
                            },
                            afterTween: function (a, b, c, d) {
                                n(a, this._tokenData),
                                n(b, this._tokenData),
                                n(c, this._tokenData),
                                t(d, this._tokenData)
                            }
                        }
                    }
                    (e)
                }).call(null)
            }, {}
        ],
        2: [function (a, b, c) {
                var d = a("./shape"),
                e = a("./utils"),
                f = function (a, b) {
                    this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",
                    this.containerAspectRatio = 1,
                    d.apply(this, arguments)
                };
                f.prototype = new d,
                f.prototype.constructor = f,
                f.prototype._pathString = function (a) {
                    var b = a.strokeWidth;
                    a.trailWidth && a.trailWidth > a.strokeWidth && (b = a.trailWidth);
                    var c = 50 - b / 2;
                    return e.render(this._pathTemplate, {
                        radius: c,
                        "2radius": 2 * c
                    })
                },
                f.prototype._trailString = function (a) {
                    return this._pathString(a)
                },
                b.exports = f
            }, {
                "./shape": 7,
                "./utils": 8
            }
        ],
        3: [function (a, b, c) {
                var d = a("./shape"),
                e = a("./utils"),
                f = function (a, b) {
                    this._pathTemplate = "M 0,{center} L 100,{center}",
                    d.apply(this, arguments)
                };
                f.prototype = new d,
                f.prototype.constructor = f,
                f.prototype._initializeSvg = function (a, b) {
                    a.setAttribute("viewBox", "0 0 100 " + b.strokeWidth),
                    a.setAttribute("preserveAspectRatio", "none")
                },
                f.prototype._pathString = function (a) {
                    return e.render(this._pathTemplate, {
                        center: a.strokeWidth / 2
                    })
                },
                f.prototype._trailString = function (a) {
                    return this._pathString(a)
                },
                b.exports = f
            }, {
                "./shape": 7,
                "./utils": 8
            }
        ],
        4: [function (a, b, c) {
                b.exports = {
                    Line: a("./line"),
                    Circle: a("./circle"),
                    SemiCircle: a("./semicircle"),
                    Path: a("./path"),
                    Shape: a("./shape"),
                    utils: a("./utils")
                }
            }, {
                "./circle": 2,
                "./line": 3,
                "./path": 5,
                "./semicircle": 6,
                "./shape": 7,
                "./utils": 8
            }
        ],
        5: [function (a, b, c) {
                var d = a("shifty"),
                e = a("./utils"),
                f = {
                    easeIn: "easeInCubic",
                    easeOut: "easeOutCubic",
                    easeInOut: "easeInOutCubic"
                },
                g = function h(a, b) {
                    if (!(this instanceof h))
                        throw new Error("Constructor was called without new keyword");
                    b = e.extend({
                        duration: 800,
                        easing: "linear",
                        from: {},
                        to: {},
                        step: function () {}
                    }, b);
                    var c;
                    c = e.isString(a) ? document.querySelector(a) : a,
                    this.path = c,
                    this._opts = b,
                    this._tweenable = null;
                    var d = this.path.getTotalLength();
                    this.path.style.strokeDasharray = d + " " + d,
                    this.set(0)
                };
                g.prototype.value = function () {
                    var a = this._getComputedDashOffset(),
                    b = this.path.getTotalLength(),
                    c = 1 - a / b;
                    return parseFloat(c.toFixed(6), 10)
                },
                g.prototype.set = function (a) {
                    this.stop(),
                    this.path.style.strokeDashoffset = this._progressToOffset(a);
                    var b = this._opts.step;
                    if (e.isFunction(b)) {
                        var c = this._easing(this._opts.easing),
                        d = this._calculateTo(a, c),
                        f = this._opts.shape || this;
                        b(d, f, this._opts.attachment)
                    }
                },
                g.prototype.stop = function () {
                    this._stopTween(),
                    this.path.style.strokeDashoffset = this._getComputedDashOffset()
                },
                g.prototype.animate = function (a, b, c) {
                    b = b || {},
                    e.isFunction(b) && (c = b, b = {});
                    var f = e.extend({}, b),
                    g = e.extend({}, this._opts);
                    b = e.extend(g, b);
                    var h = this._easing(b.easing),
                    i = this._resolveFromAndTo(a, h, f);
                    this.stop(),
                    this.path.getBoundingClientRect();
                    var j = this._getComputedDashOffset(),
                    k = this._progressToOffset(a),
                    l = this;
                    this._tweenable = new d,
                    this._tweenable.tween({
                        from: e.extend({
                            offset: j
                        }, i.from),
                        to: e.extend({
                            offset: k
                        }, i.to),
                        duration: b.duration,
                        easing: h,
                        step: function (a) {
                            l.path.style.strokeDashoffset = a.offset;
                            var c = b.shape || l;
                            b.step(a, c, b.attachment)
                        },
                        finish: function (a) {
                            e.isFunction(c) && c()
                        }
                    })
                },
                g.prototype._getComputedDashOffset = function () {
                    var a = window.getComputedStyle(this.path, null);
                    return parseFloat(a.getPropertyValue("stroke-dashoffset"), 10)
                },
                g.prototype._progressToOffset = function (a) {
                    var b = this.path.getTotalLength();
                    return b - a * b
                },
                g.prototype._resolveFromAndTo = function (a, b, c) {
                    return c.from && c.to ? {
                        from: c.from,
                        to: c.to
                    }
                     : {
                        from: this._calculateFrom(b),
                        to: this._calculateTo(a, b)
                    }
                },
                g.prototype._calculateFrom = function (a) {
                    return d.interpolate(this._opts.from, this._opts.to, this.value(), a)
                },
                g.prototype._calculateTo = function (a, b) {
                    return d.interpolate(this._opts.from, this._opts.to, a, b)
                },
                g.prototype._stopTween = function () {
                    null !== this._tweenable && (this._tweenable.stop(), this._tweenable = null)
                },
                g.prototype._easing = function (a) {
                    return f.hasOwnProperty(a) ? f[a] : a
                },
                b.exports = g
            }, {
                "./utils": 8,
                shifty: 1
            }
        ],
        6: [function (a, b, c) {
                var d = a("./shape"),
                e = a("./circle"),
                f = a("./utils"),
                g = function (a, b) {
                    this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",
                    this.containerAspectRatio = 2,
                    d.apply(this, arguments)
                };
                g.prototype = new d,
                g.prototype.constructor = g,
                g.prototype._initializeSvg = function (a, b) {
                    a.setAttribute("viewBox", "0 0 100 50")
                },
                g.prototype._initializeTextContainer = function (a, b, c) {
                    a.text.style && (c.style.top = "auto", c.style.bottom = "0", a.text.alignToBottom ? f.setStyle(c, "transform", "translate(-50%, 0)") : f.setStyle(c, "transform", "translate(-50%, 50%)"))
                },
                g.prototype._pathString = e.prototype._pathString,
                g.prototype._trailString = e.prototype._trailString,
                b.exports = g
            }, {
                "./circle": 2,
                "./shape": 7,
                "./utils": 8
            }
        ],
        7: [function (a, b, c) {
                var d = a("./path"),
                e = a("./utils"),
                f = "Object is destroyed",
                g = function h(a, b) {
                    if (!(this instanceof h))
                        throw new Error("Constructor was called without new keyword");
                    if (0 !== arguments.length) {
                        this._opts = e.extend({
                            color: "#555",
                            strokeWidth: 1,
                            trailColor: null,
                            trailWidth: null,
                            fill: null,
                            text: {
                                style: {
                                    color: null,
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    padding: 0,
                                    margin: 0,
                                    transform: {
                                        prefix: !0,
                                        value: "translate(-50%, -50%)"
                                    }
                                },
                                autoStyleContainer: !0,
                                alignToBottom: !0,
                                value: null,
                                className: "progressbar-text"
                            },
                            svgStyle: {
                                display: "block",
                                width: "100%"
                            },
                            warnings: !1
                        }, b, !0),
                        e.isObject(b) && void 0 !== b.svgStyle && (this._opts.svgStyle = b.svgStyle),
                        e.isObject(b) && e.isObject(b.text) && void 0 !== b.text.style && (this._opts.text.style = b.text.style);
                        var c,
                        f = this._createSvgView(this._opts);
                        if (c = e.isString(a) ? document.querySelector(a) : a, !c)
                            throw new Error("Container does not exist: " + a);
                        this._container = c,
                        this._container.appendChild(f.svg),
                        this._opts.warnings && this._warnContainerAspectRatio(this._container),
                        this._opts.svgStyle && e.setStyles(f.svg, this._opts.svgStyle),
                        this.svg = f.svg,
                        this.path = f.path,
                        this.trail = f.trail,
                        this.text = null;
                        var g = e.extend({
                            attachment: void 0,
                            shape: this
                        }, this._opts);
                        this._progressPath = new d(f.path, g),
                        e.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value)
                    }
                };
                g.prototype.animate = function (a, b, c) {
                    if (null === this._progressPath)
                        throw new Error(f);
                    this._progressPath.animate(a, b, c)
                },
                g.prototype.stop = function () {
                    if (null === this._progressPath)
                        throw new Error(f);
                    void 0 !== this._progressPath && this._progressPath.stop()
                },
                g.prototype.destroy = function () {
                    if (null === this._progressPath)
                        throw new Error(f);
                    this.stop(),
                    this.svg.parentNode.removeChild(this.svg),
                    this.svg = null,
                    this.path = null,
                    this.trail = null,
                    this._progressPath = null,
                    null !== this.text && (this.text.parentNode.removeChild(this.text), this.text = null)
                },
                g.prototype.set = function (a) {
                    if (null === this._progressPath)
                        throw new Error(f);
                    this._progressPath.set(a)
                },
                g.prototype.value = function () {
                    if (null === this._progressPath)
                        throw new Error(f);
                    return void 0 === this._progressPath ? 0 : this._progressPath.value()
                },
                g.prototype.setText = function (a) {
                    if (null === this._progressPath)
                        throw new Error(f);
                    null === this.text && (this.text = this._createTextContainer(this._opts, this._container), this._container.appendChild(this.text)),
                    e.isObject(a) ? (e.removeChildren(this.text), this.text.appendChild(a)) : this.text.innerHTML = a
                },
                g.prototype._createSvgView = function (a) {
                    var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    this._initializeSvg(b, a);
                    var c = null;
                    (a.trailColor || a.trailWidth) && (c = this._createTrail(a), b.appendChild(c));
                    var d = this._createPath(a);
                    return b.appendChild(d), {
                        svg: b,
                        path: d,
                        trail: c
                    }
                },
                g.prototype._initializeSvg = function (a, b) {
                    a.setAttribute("viewBox", "0 0 100 100")
                },
                g.prototype._createPath = function (a) {
                    var b = this._pathString(a);
                    return this._createPathElement(b, a)
                },
                g.prototype._createTrail = function (a) {
                    var b = this._trailString(a),
                    c = e.extend({}, a);
                    return c.trailColor || (c.trailColor = "#eee"),
                    c.trailWidth || (c.trailWidth = c.strokeWidth),
                    c.color = c.trailColor,
                    c.strokeWidth = c.trailWidth,
                    c.fill = null,
                    this._createPathElement(b, c)
                },
                g.prototype._createPathElement = function (a, b) {
                    var c = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    return c.setAttribute("d", a),
                    c.setAttribute("stroke", b.color),
                    c.setAttribute("stroke-width", b.strokeWidth),
                    b.fill ? c.setAttribute("fill", b.fill) : c.setAttribute("fill-opacity", "0"),
                    c
                },
                g.prototype._createTextContainer = function (a, b) {
                    var c = document.createElement("div");
                    c.className = a.text.className;
                    var d = a.text.style;
                    return d && (a.text.autoStyleContainer && (b.style.position = "relative"), e.setStyles(c, d), d.color || (c.style.color = a.color)),
                    this._initializeTextContainer(a, b, c),
                    c
                },
                g.prototype._initializeTextContainer = function (a, b, c) {},
                g.prototype._pathString = function (a) {
                    throw new Error("Override this function for each progress bar")
                },
                g.prototype._trailString = function (a) {
                    throw new Error("Override this function for each progress bar")
                },
                g.prototype._warnContainerAspectRatio = function (a) {
                    if (this.containerAspectRatio) {
                        var b = window.getComputedStyle(a, null),
                        c = parseFloat(b.getPropertyValue("width"), 10),
                        d = parseFloat(b.getPropertyValue("height"), 10);
                        e.floatEquals(this.containerAspectRatio, c / d) || (console.warn("Incorrect aspect ratio of container", "#" + a.id, "detected:", b.getPropertyValue("width") + "(width)", "/", b.getPropertyValue("height") + "(height)", "=", c / d), console.warn("Aspect ratio of should be", this.containerAspectRatio))
                    }
                },
                b.exports = g
            }, {
                "./path": 5,
                "./utils": 8
            }
        ],
        8: [function (a, b, c) {
                function d(a, b, c) {
                    a = a || {},
                    b = b || {},
                    c = c || !1;
                    for (var e in b)
                        if (b.hasOwnProperty(e)) {
                            var f = a[e],
                            g = b[e];
                            c && l(f) && l(g) ? a[e] = d(f, g, c) : a[e] = g
                        }
                    return a
                }
                function e(a, b) {
                    var c = a;
                    for (var d in b)
                        if (b.hasOwnProperty(d)) {
                            var e = b[d],
                            f = "\\{" + d + "\\}",
                            g = new RegExp(f, "g");
                            c = c.replace(g, e)
                        }
                    return c
                }
                function f(a, b, c) {
                    for (var d = a.style, e = 0; e < p.length; ++e) {
                        var f = p[e];
                        d[f + h(b)] = c
                    }
                    d[b] = c
                }
                function g(a, b) {
                    m(b, function (b, c) {
                        null !== b && void 0 !== b && (l(b) && b.prefix === !0 ? f(a, c, b.value) : a.style[c] = b)
                    })
                }
                function h(a) {
                    return a.charAt(0).toUpperCase() + a.slice(1)
                }
                function i(a) {
                    return "string" == typeof a || a instanceof String
                }
                function j(a) {
                    return "function" == typeof a
                }
                function k(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                }
                function l(a) {
                    if (k(a))
                        return !1;
                    var b = typeof a;
                    return "object" === b && !!a
                }
                function m(a, b) {
                    for (var c in a)
                        if (a.hasOwnProperty(c)) {
                            var d = a[c];
                            b(d, c)
                        }
                }
                function n(a, b) {
                    return Math.abs(a - b) < q
                }
                function o(a) {
                    for (; a.firstChild; )
                        a.removeChild(a.firstChild)
                }
                var p = "Webkit Moz O ms".split(" "),
                q = .001;
                b.exports = {
                    extend: d,
                    render: e,
                    setStyle: f,
                    setStyles: g,
                    capitalize: h,
                    isString: i,
                    isFunction: j,
                    isObject: l,
                    forEachObject: m,
                    floatEquals: n,
                    removeChildren: o
                }
            }, {}
        ]
    }, {}, [4])(4)
});