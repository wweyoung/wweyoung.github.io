function GE(e) {
    return document.getElementById(e);
}

function SV(e, v) {
    GE(e).value = v ? v : "";
}

function GV(e) {
    return GE(e).value;
}

function WV(e1, e2) {
    var t = GV(e1);
    SV(e1, GV(e2));
    SV(e2, t);
}

function SO(e, v) {
    var s = GE(e);
    var v = v ? v : "";
    for (var j = 0; j < s.options.length; j++) {
        if (s.options[j].value == v) {
            s.selectedIndex = j;
        }
    }
}

function GO(e) {
    var v = GE(e);
    return v.options[v.selectedIndex].value;
}

function SS(e, s) {
    GE(e).style.display = s ? "inline" : "none";
}

function GS(e) {
    return GE(e).style.display != "none";
}

function SI(e, v) {
    GE(e).style.visibility = v ? "visible" : "hidden";
}

function GI(e) {
    return GE(e).style.visibility != "hidden";
}

function SD(e, v) {
    GE(e).disabled = v ? true : false;
}

function FS(e) {
    GE(e).focus();
    GE(e).select();
}

function SR(e, s) {
    GE(e).className = s ? "showrows" : "hiderows";
}

function SH(e, h) {
    GE(e).innerHTML = h;
}

function ST(e, t) {
    GE(e).innerHTML = EH(t);
}

function NE(s) {
    return s.replace(/\r\n?/g, "\n");
}

function EH(v) {
    return v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function EL(v) {
    return v ? EH(v.replace(/\n/g, "^$")).replace(/\^\$/g, "<BR>") : "";
}

function CU(v) {
    return v ? v.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, function (url) {
        return "<a href=\"" + url + "\" target=\"_blank\">" + url + "</a>";
    }) : "";
}

function SB(v) {
    return v.replace(/\//g, "/<wbr>");
}

function DT() {
    return (new Date()).getTime();
}

function BR(_23, _24, _25) {
    var url = _23 + "ap_" + _24 + ".php?";
    for (var j in _25) {
        if (_25[j] != null) {
            url += (j + "=" + escape(_25[j]) + "&");
        }
    }
    return url;
}

function BA(_28, _29, _2a) {
    return BR(_28, _29, _2a) + "_=" + (DT() + Math.random());
}

function AG(_2b, _2c, _2d, _2e) {
    AP(_2b, _2c, "", _2d, _2e);
}

function AP(_2f, _30, _31, _32, _33) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", BA("ap/", _2f, _30), true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            _32(_2f, _33, ((xhr.status == 200) && xhr.responseText) ? eval("(" + xhr.responseText + ")") : {});
        }
    };
    xhr.send(_31);
}

var Bw = null;

function CE(w) {
    Bw = w;
    window.onerror = SE;
}

function TR() {
    var s = "";
    for (var a = TR; a; a = a.caller) {
        s += (a.name || a.toString().match(/function (\w*)/)) + "<";
        if (a.caller == a) {
            break;
        }
    }
    return s;
}

function SE(m, u, l, w) {
    w = w || window;
    if (Bw) {
        if (Bw.SE) {
            Bw.SE(m, u, l, w);
        }
    } else {
        AP("log_js_error", {}, m + "|" + (w ? w.location : "") + "|" + u + "|" + l + "|", function () {
        }, null);
    }
}

function RE(e) {
    alert(e);
}

function SC(n, v, s) {
    var d = new Date();
    d.setTime(d.getTime() + 365 * 86400000);
    var t = ".familyecho.com";
    document.cookie = n + "=" + v + "; expires=" + d.toGMTString() + "; path=/" + ((s && (window.location.hostname.substr(-t.length) == t)) ? ("; domain=" + t) : "");
}

function GC(n) {
    var cs = document.cookie.split(";");
    for (var j = 0; j < cs.length; j++) {
        var c = cs[j];
        while (c.charAt(0) == " ") {
            c = c.substring(1, c.length);
        }
        if (c.substring(0, n.length + 1) == (n + "=")) {
            return c.substring(n.length + 1, c.length);
        }
    }
    return null;
}

function UL(l) {
    var dw = self.screen.width, dh = self.screen.height;
    if (top.innerHeight) {
        dw = top.innerWidth;
        dh = top.innerHeight;
    } else {
        if (top.document.documentElement && top.document.documentElement.clientHeight) {
            dw = top.document.documentElement.clientWidth;
            dh = top.document.documentElement.clientHeight;
        } else {
            if (top.document.body) {
                dw = top.document.body.clientWidth;
                dh = top.document.body.clientHeight;
            }
        }
    }
    var w = window.open(l.href, "uplink", "toolbar=1,location=1,status=1,menubar=1,scrollbars=1,resizable=1," + "width=" + (dw - 64) + ",height=" + (dh - 64));
    if (w) {
        w.focus();
    }
    return !w;
}

var Dp = false;
var Lp = false;

function _i(_4a) {
    return _4a;
}

function _t(_4b) {
    var _4c = Array.from(arguments);
    _4c = _4c.slice(1);
    _4b = SL(_4b, _4c);
    _4b = SN(_4b, _4c);
    return _4b;
}

function _h(_4d) {
    var _4e = Array.from(arguments);
    _4e = _4e.slice(1);
    _4d = SL(_4d, _4e);
    _4d = SN(_4d, _4e);
    _4d = EH(_4d);
    _4d = SG(_4d, _4e);
    return _4d;
}

var Pr = null, ordinalRules = null;

function SL(_4f, _50) {
    if ((typeof Intl !== "undefined") && (typeof Intl.PluralRules !== undefined)) {
        if (!Pr) {
            Pr = new Intl.PluralRules(locale_value);
        }
        if (!ordinalRules) {
            ordinalRules = new Intl.PluralRules(locale_value, {"type": "ordinal"});
        }
    }
    var _51 = "str";
    var _52 = _4f.indexOf("#");
    if (_52 >= 0) {
        if (Pr) {
            var _53 = (_4f.substring(0, _52).match(/\$/g) || []).length;
            var _54 = _50[_53];
            if (Number.isInteger(parseFloat(_54))) {
                _51 = Pr.select(parseInt(_54));
            }
        }
    } else {
        var _55 = _4f.indexOf("^");
        if (_55 >= 0) {
            if (ordinalRules) {
                var _53 = (_4f.substring(0, _55).match(/\$/g) || []).length;
                var _54 = _50[_53];
                if (Number.isInteger(parseFloat(_54))) {
                    _51 = ordinalRules.select(parseInt(_54));
                }
            }
        }
    }
    var _56 = undefined;
    if (locale_phrases[_4f]) {
        _56 = locale_phrases[_4f][_51];
        var _57 = ["str", "many", "few", "two", "one", "zero"];
        for (var i = 0; i < _57.length; i++) {
            if (_56 !== undefined) {
                break;
            } else {
                _56 = locale_phrases[_4f][_57[i]];
            }
        }
    }
    if (_56 === undefined) {
        _56 = _4f;
    }
    if (Dp) {
        return "{" + _56 + "}";
    } else {
        if (Lp) {
            return _56 + _56;
        } else {
            return _56;
        }
    }
}

function SN(_59, _5a) {
    var _5b = (_59.match(/[\$\#\^]/g) || []).length;
    var _5c = _5b > 1;
    var _5d = _5c ? /([\#\$\^])([1-9])/ : /([\$\#\^])/;
    var _5e = 0;
    while (true) {
        var _5f = _59.slice(_5e).match(_5d);
        if (!_5f) {
            break;
        }
        var _60 = _59.indexOf(_5f[0], _5e);
        var _61 = _5f[0].length;
        var _62 = _5f[1];
        var _63 = _5c ? _5f[2] : 1;
        var _64 = _5a[_63 - 1];
        if (_64 === undefined) {
            _64 = _62;
        }
        if (Dp) {
            _64 = _62 + _64 + _62;
        }
        _59 = _59.substr(0, _60) + _64 + _59.substr(_60 + _61);
        _5e = _60 + _64.length;
    }
    _5a.splice(0, _5b);
    return _59;
}

function SG(_65, _66) {
    var _67 = 0;
    while (true) {
        var _68 = _65.indexOf("&lt;", _67);
        if (_68 >= 0) {
            var _69 = _65.indexOf("&gt;", _68);
        }
        if ((_68 >= 0) && (_69 >= 0)) {
            var _6a = _66.shift();
            if (_6a === undefined) {
                _6a = "a href=\"#\"";
            }
            _6a = _6a.trim();
            var _6b = _6a.search(/[ \t]/);
            if (_6b < 0) {
                _6b = _6a.length;
            }
            var _6c = _65.substr(_69 + 4);
            _65 = _65.substr(0, _68) + "<" + _6a + ">" + _65.substr(_68 + 4, _69 - _68 - 4) + "</" + _6a.substr(0, _6b) + ">" + _6c;
            _67 = _65.length - _6c.length;
        } else {
            break;
        }
    }
    return _65;
}

var Lf = null;

function LF(_6d) {
    Lf = _6d;
    SS("footerlang", true);
    var c = locale_names[locale_value];
    ST("currentlang", c);
    if ((locale_value != "en") && GC("langnote")) {
        alert(_t("Some of the $ translation is AI-generated, so it may not be perfect.", c) + " " + _t("Please contact us if you would like to help improve the $ translation.", c));
        SC("langnote", "");
    }
}

function LL() {
    var ls = [];
    for (var l in locale_names) {
        ls[ls.length] = {l: l, c: locale_names[l], s: (l == locale_value)};
    }
    ls = ls.sort(function (a, b) {
        return a.c.localeCompare(b.c);
    });
    return ls;
}

function LC() {
    var h = "<a id=\"langclose\" HREF=\"#\" TITLE=\"Close\" onClick=\"LH(); return false;\">&#x2715;</a>";
    h += "<div id=\"langtitle\">Please click to choose your preferred language:</div>";
    var ls = LL();
    h += "<div id=\"langlist\">";
    for (var i = 0; i < ls.length; i++) {
        h += "<a href=\"#\" onClick=\"LS('" + ls[i].l + "'); return false;\">" + (ls[i].s ? "<B>" : "") + EH(ls[i].c) + (ls[i].s ? "</B>" : "") + "</a><br>";
    }
    h += "</div>";
    h += "<div id=\"langfooter\">Some of these translations are AI-generated, so they may not be perfect.<br>" + "Please <a href=\"?page=feedback\" target=\"_blank\">contact us</a> if you would like to help improve Famliy Echo in your language.</div>";
    SH("langcontent", h);
    GE("langoverlay").style.display = "flex";
}

function LH() {
    SS("langoverlay", false);
}

function LS(l) {
    SC("lang", l, true);
    SC("langnote", 1);
    if (Lf) {
        document.forms[Lf].submit();
    } else {
        var u = new URL(location.href);
        var m = "delete";
        u.searchParams[m]("lang");
        location.href = u.href;
    }
}
