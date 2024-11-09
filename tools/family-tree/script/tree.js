var ios = navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/);

function TND() {
    return {l: 0, r: 0, w: 0, t: 0, b: 0, h: 0, e: {}, n: [], p: [], yl: {}, yr: {}};
}

function TAE(d, i, p, x, y, k) {
    var di = d.e[i];
    if (di) {
        i += Math.random();
    }
    d.e[i] = {p: p, x: x, y: y, k: k, d: di};
    d.l = Math.min(d.l, x);
    d.r = Math.max(d.r, 1 + x);
    d.w = d.r - d.l;
    d.t = Math.min(d.t, y);
    d.b = Math.max(d.b, 1 + y);
    d.h = d.b - d.t;
    if (d.yl[y] === undefined) {
        d.yl[y] = x;
    } else {
        d.yl[y] = Math.min(d.yl[y], x);
    }
    if (d.yr[y] === undefined) {
        d.yr[y] = 1 + x;
    } else {
        d.yr[y] = Math.max(d.yr[y], 1 + x);
    }
}

function TAL(d, x1, y1, x2, y2, t) {
    d.n[d.n.length] = {x1: x1, y1: y1, x2: x2, y2: y2, t: t};
}

function TAP(d, i, si, x1, x2, y, b) {
    if (Math.abs(x1 - x2) > 1.1) {
        d.p[d.p.length] = {i: i, si: si, x1: x1, x2: x2, y: y, b: b};
    }
}

function TAD(od, d, dx, dy) {
    for (var j = 0; j < d.n.length; j++) {
        var n = d.n[j];
        TAL(od, n.x1 + dx, n.y1 + dy, n.x2 + dx, n.y2 + dy, n.t);
    }
    for (j = 0; j < d.p.length; j++) {
        var p = d.p[j];
        TAP(od, p.i, p.si, p.x1 + dx, p.x2 + dx, p.y + dy, p.b);
    }
    for (var i in d.e) {
        var e = d.e[i];
        TAE(od, e.p.i, e.p, e.x + dx, e.y + dy, e.k);
    }
}

function TDS(yb, zf, wf, bn, ts) {
    var ya = [yb.age, yb.bd, yb.j, yb.b, yb.v, yb.d, yb.y, yb.Z, yb.F, yb.U, yb.e, yb.e, yb.tku, yb.tku, yb.a, yb.a, yb.E, yb.I, yb.A];
    var yc = 0;
    for (var j = 0; j < ya.length; j++) {
        if (ya[j]) {
            yc++;
        }
    }
    var sz = {
        Tew: parseInt(((yc || yb.r || yb.pm || yb.TJ) ? 100 : 80) * zf * wf),
        Tnh: parseInt((yb["0p"] ? 0 : (((bn == 2) || yb.N) ? 50 : 40)) * zf),
        Tph: parseInt((yb.r ? 100 : 0) * zf),
        Tdh: parseInt(20 * yc * zf),
        Tmh: parseInt(40 * zf),
        Ths: parseInt(20 * zf),
        Tvs: parseInt(40 * zf),
        Tfs: (12 * zf * ts),
        Tds: (10 * zf * ts),
        partnerfontsize: (9 * zf * ts)
    };
    sz.Teh = parseInt(Math.max(sz.Tnh + sz.Tph + sz.Tdh, sz.Tmh));
    sz.Tep = Math.max(0, sz.Tew * 0.04);
    return sz;
}

function TRD(d, y, ad, bn, sf, c, ls, o, oi, wp, pr, zf, wf, ts, _35) {
    var _36 = wp ? (ios ? 1920 : 19200) : 0;
    var _37 = wp ? (ios ? 1200 : 12000) : 0;
    var yb = {};
    var ys = y.split(".");
    for (var j = 0; j < ys.length; j++) {
        yb[ys[j]] = true;
    }
    var mn = yb["pm"];
    var sp = yb["r"];
    var spn = !yb["0p"];
    var ssn = !yb["0lq"];
    var ni = yb["N"];
    var tj = yb["TJ"];
    var sz = TDS(yb, zf, wf, bn, ts);
    var tw = (sz.Tew + sz.Ths) * d.w - sz.Ths;
    var th = (sz.Teh + sz.Tvs) * d.h - sz.Tvs;
    if (!wp) {
        ox = sz.Tew / 2 - d.l * (sz.Tew + sz.Ths);
        oy = sz.Teh / 2 - d.t * (sz.Teh + sz.Tvs);
    } else {
        if (ios) {
            if (!(o.ios_width && o.ios_height)) {
                o.ios_width = GetElement("treebg").offsetWidth;
                o.ios_height = GetElement("treebg").offsetHeight;
            }
            ox = o.ios_width / 2 + _36 / 2;
            oy = o.ios_height / 2 + _37 / 2;
            o.style.left = (-_36 / 2) + "px";
            o.style.top = (-_37 / 2) + "px";
        } else {
            if (oi && o.ps[oi] && d.e[oi]) {
                ox = o.ps[oi].x - d.e[oi].x * (sz.Tew + sz.Ths);
                oy = o.ps[oi].y - d.e[oi].y * (sz.Teh + sz.Tvs);
            } else {
                ox = _36 - d.l * (sz.Tew + sz.Ths);
                oy = _37 - d.t * (sz.Teh + sz.Tvs);
            }
        }
    }
    o.innerHTML = "";
    o.ps = {};
    o.es = {
        l: (ox + (d.l - 0.5) * (sz.Tew + sz.Ths)),
        t: (oy + (d.t - 0.5) * (sz.Teh + sz.Tvs)),
        r: (ox + (d.r - 0.5) * (sz.Tew + sz.Ths)),
        b: (oy + (d.b - 0.5) * (sz.Teh + sz.Tvs))
    };
    var s = o.style;
    if (!wp) {
        s.width = (tw + _36 * 2) + "px";
        s.height = (th + _37 * 2) + "px";
    }
    for (var g = 1; g >= 0; g--) {
        for (var j = 0; j < d.n.length; j++) {
            var n = d.n[j];
            var ss = TGT(n.t, ls);
            if (ss.g ? (!g) : g) {
                continue;
            }
            var l = Math.min(n.x1, n.x2);
            var r = Math.max(n.x1, n.x2);
            var t = Math.min(n.y1, n.y2);
            var b = Math.max(n.y1, n.y2);
            var v = document.createElement("div");
            v.className = ((ss.d == 2) ? "ddashed" : ((ss.d == 1) ? "ddotted" : "dline")) + (ss.g ? " gray" : "");
            var ok = ss.d ? 0 : ss.k;
            var s = v.style;
            s.width = ((r == l) ? ok : (r - l) * (sz.Tew + sz.Ths) + ok) + "px";
            s.height = ((b == t) ? ok : (b - t) * (sz.Teh + sz.Tvs) - (ss.d ? 1 : 0)) + "px";
            s.left = ox + (l * (sz.Tew + sz.Ths)) - ((r == l) ? (ss.k / 2) : (ss.k / 2)) + "px";
            s.top = oy + (t * (sz.Teh + sz.Tvs)) - ((b == t) ? (ss.k / 2) : 0) + "px";
            if (ss.d) {
                s.borderTopWidth = ss.k + "px";
                s.borderLeftWidth = ss.k + "px";
            }
            o.appendChild(v);
        }
    }
    for (var j = 0; j < d.p.length; j++) {
        var p = d.p[j];
        var l = Math.min(p.x1, p.x2) + 0.5;
        var r = Math.max(p.x1, p.x2) - 0.5;
        var t = p.y - (p.b ? 0 : 0.25);
        var b = t + 0.25;
        var v = document.createElement("div");
        v.className = "dp";
        var s = v.style;
        s.width = (r - l) * (sz.Tew + sz.Ths) + sz.Ths + "px";
        s.height = (b - t) * (sz.Teh + sz.Tvs) + "px";
        s.left = ox + (l * (sz.Tew + sz.Ths)) - sz.Ths / 2 + "px";
        s.top = oy + (t * (sz.Teh + sz.Tvs)) + "px";
        s.fontSize = sz.partnerfontsize + "px";
        v.innerHTML = "<div class=\"" + (p.b ? "dpb" : "dpt") + "\">" + EncodeHTML(TGP(yb, d.e[p.i].p, p.si)) + "</div>";
        o.appendChild(v);
    }
    for (var i in d.e) {
        var e = d.e[i];
        var rs = "";
        var fn = FDN(e.p, true, (bn == 2) ? 2 : 1, sf, (bn == 1), true, true, true, true);
        var _53 = ((e.p.z == "1") && !pr) ? c.deceased : c.living;
        var sh = sz.Tnh;
        var ey = y ? TGL(yb, ad, e.p) : null;
        if (sp && e.p.r) {
            var er = e.p.r.split(" ");
            var uf = EIU || (opener && opener.top && opener.top.EIU);
            if (uf) {
                var u = uf(er[0]);
                var ew = sz.Tew - sz.Tep * 2;
                var eh = Math.min(ew, sz.Tph);
                if (er[1] && er[2]) {
                    if (parseInt(er[1]) > parseInt(er[2])) {
                        eh = Math.floor(ew * er[2] / er[1]);
                    } else {
                        ew = Math.floor(eh * er[1] / er[2]);
                    }
                }
                rs += "<TR HEIGHT=\"" + (ey ? sz.Tph : (sz.Tph + sz.Tep * 2)) + "\"><TD CLASS=\"dcell\" style=\"color:" + _53 + "; padding:0 " + sz.Tep + "px;\"><IMG SRC=\"" + u + "\" WIDTH=\"" + ew + "\" HEIGHT=\"" + eh + "\" TITLE=\"" + EncodeHTML(fn) + "\"></TD></TR>";
                sh += sz.Tph + sz.Tep * 2;
            }
        }
        if (ey) {
            rs += "<TR><TD CLASS=\"dcell\" STYLE=\"font-size:" + sz.Tds + "px;color:" + _53 + "; padding:0 " + sz.Tep + "px;\" TITLE=\"" + EncodeHTML(ey.replace(/\n/g, ", ")) + "\">" + EncodeHTMLLine(ey) + "</TD></TR>";
            sh += sz.Tdh;
        }
        var sx = ox + (e.x) * (sz.Tew + sz.Ths);
        var sy = oy + (e.y) * (sz.Teh + sz.Tvs);
        sh = Math.max(sh, sz.Tmh);
        TRB(o, sx - (sz.Tew / 2), sy - (sh / 2), sz.Tew, sh, e.k ? 3 : 1, (e.p.g == "f") ? c.female : ((e.p.g == "m") ? c.male : (((e.p.g || "").charAt(0) == "o") ? c.other : "#FFFFFF")), null);
        var v = document.createElement("div");
        v.className = "di";
        if (locale_rtl) {
            v.dir = "rtl";
        }
        var s = v.style;
        s.width = sz.Tew + "px";
        s.height = sh + "px";
        s.left = (sx - (sz.Tew / 2)) + "px";
        s.top = (sy - (sh / 2)) + "px";
        if (wp) {
            v.onmousedown = TCT;
            v.id = i;
            v.pid = e.p.i;
            o.ps[i] = {x: sx, y: sy};
        }
        if (spn) {
            var tn = FDN(e.p, mn, ssn ? ((bn == 2) ? 2 : 1) : 0, sf, (bn == 1), true, ni, tj, tj);
            var ns = "<TR><TD CLASS=\"dcell\" STYLE=\"font-size:" + (e.d ? sz.Tds : sz.Tfs) + "px;color:" + _53 + "; padding:0 " + sz.Tep + "px;\"" + " TITLE=\"" + (e.d ? (_h("Duplicate:") + " ") : "") + EncodeHTML(fn) + "\">" + (e.d ? "<I>" + _h("Duplicate:") + "</I><BR>" : "") + (spn ? (SetBreak(EncodeHTMLLine(tn))) : "") + "</TD></TR>";
        } else {
            var ns = "";
        }
        v.innerHTML = "<TABLE WIDTH=\"100%\" HEIGHT=\"100%\" STYLE=\"table-layout:fixed; border-collapse:collapse;\">" + ns + rs + "</TABLE>";
        o.appendChild(v);
    }
}

function TGT(t, ls) {
    var o = "normal";
    var tl = t.toLowerCase();
    switch (tl) {
        case "s":
            o = ls.current;
            break;
        case "p":
            o = ls.otherpartner;
            break;
        case "b":
            o = ls.biological;
            break;
        case "c":
            o = ls.otherparent;
            break;
    }
    var s = {k: 2, g: false, d: 0};
    switch (o) {
        case "thin":
            s.k = 1;
            break;
        case "thick":
            s.k = 4;
            break;
        case "gray":
            s.g = true;
            break;
        case "dashed":
            s.d = 2;
            break;
    }
    if (t == tl) {
        s.d = 1;
        s.k = Math.min(2, s.k);
    }
    return s;
}

function TGL(yb, ad, p) {
    var ey = "";
    if (yb["age"]) {
        var ae = false;
        if ((p.z == 1) && p.d) {
            var dl = FSL(p.d);
            if (dl && (DateObjCompare(dl, DateStrToObj(ad)) > 0)) {
                ae = true;
            }
        }
        if ((p.z != "1") || ae) {
            var de = p.b ? FSE(p.b) : null;
            if (de && (DateObjCompare(de, DateStrToObj(ad)) > 0)) {
                ey += _t("Not yet born") + "\n";
            } else {
                ey += FDR(p.b, ad, true) + "\n";
            }
        }
    }
    if (yb["bd"]) {
        var bs = DateDetailStrToYearStr(p.b);
        var ds = (p.z == "1") ? DateDetailStrToYearStr(p.d) : "";
        if (bs && ds) {
            ey += bs + ((("" + bs + ds).indexOf("~") >= 0) ? " - " : "-") + ds + "\n";
        } else {
            if (bs) {
                ey += _t("Born") + " " + bs + "\n";
            } else {
                if (ds) {
                    ey += _t("Died") + " " + ds + "\n";
                }
            }
        }
    }
    if (yb["j"] && p.j) {
        ey += p.j + "\n";
    }
    if (yb["b"] || yb["v"]) {
        var bs = yb["b"] ? DateDetailStrToString(p.b, false) : "";
        var vs = yb["v"] ? (p.v || "") : "";
        if (bs || vs) {
            ey += _t("Born") + " " + bs + ((bs && vs) ? ", " : "") + vs + "\n";
        }
    }
    var az = (yb["age"] && (p.z == "1") && !ae) ? FDR(p.b, p.d, false) : null;
    if ((yb["d"] || az || yb["y"] || yb["Z"]) && (p.z == "1")) {
        var ds = yb["d"] ? DateDetailStrToString(p.d, false) : "";
        var ys = yb["y"] ? (p.y || "") : "";
        var Zs = yb["Z"] ? (p.Z || "") : "";
        if (ds || az || ys || Zs) {
            ey += _t("Died") + " " + ds + ((ds && az) ? (" (" + az + ")") : (az ? (FDR(p.b, p.d, true)) : "")) + (((ds || az) && ys) ? ", " : "") + ys + (Zs ? (" (" + Zs + ")") : "") + "\n";
        }
    }
    if ((yb["F"] || yb["U"]) && (p.z == "1")) {
        var Fs = yb["F"] ? DateDetailStrToString(p.F, false) : "";
        var Us = yb["U"] ? (p.U || "") : "";
        if (Fs || Us) {
            ey += _t("Buried") + " " + Fs + ((Fs && Us) ? ", " : "") + Us + "\n";
        }
    }
    if (yb["e"] && p.e) {
        ey += p.e.replace(/@/g, "@ ") + "\n";
    }
    if (yb["tku"]) {
        if (p.t) {
            ey += p.t + " " + _t("(h)") + "\n";
        }
        if (p.k) {
            ey += p.k + " " + _t("(w)") + "\n";
        }
        if (p.u) {
            ey += p.u + " " + _t("(m)") + "\n";
        }
    }
    if (yb["a"] && p.a) {
        ey += p.a + "\n";
    }
    if (yb["E"] && p.E) {
        ey += p.E + "\n";
    }
    if (yb["I"] && p.I) {
        ey += p.I + "\n";
    }
    if (yb["A"] && p.A) {
        ey += p.A + "\n";
    }
    return ey.trim();
}

function TGG(y) {
    var m = {};
    var yd = ("." + y + ".");
    if (yd.indexOf(".sm.") >= 0) {
        m["m"] = true;
    }
    if (yd.indexOf(".sw.") >= 0) {
        m["w"] = true;
    }
    if (yd.indexOf(".sd.") >= 0) {
        m["d"] = true;
    }
    return m;
}

function TGP(yb, p, si) {
    var ml = "";
    var dl = "";
    if (yb["sm"] && p.gp && p.mp) {
        var t = p.gp[si];
        if ((t == "m") || (t == "s") || (t == "d") || (t == "a")) {
            var mt = DateDetailStrToString(p.mp[si]);
            if (mt) {
                ml += mt;
            }
        }
    }
    if (yb["sw"] && p.gp && p.wp) {
        var t = p.gp[si];
        if ((t == "m") || (t == "s") || (t == "d") || (t == "a") && p.wp[si]) {
            ml += (ml ? ", " : "") + p.wp[si];
        }
    }
    if (yb["sd"] && p.gp && p.dp) {
        if (p.gp[si] == "d") {
            var dt = DateDetailStrToString(p.dp[si]);
            if (dt) {
                dl += dt;
            }
        }
    }
    return (ml ? (_t("m.") + " " + ml) : "") + (dl ? ((ml ? ", " : "") + _t("d.") + " " + dl) : "");
}

function TCD(i, t) {
    var o = GetElement("treebg");
    if (i && o && o.ps && o.ps[i]) {
        var dw, dh;
        dw = o.offsetWidth;
        dh = o.offsetHeight;
        if (isElementShow("navdiv")) {
            dh -= GetElement("navdiv").offsetHeight;
        }
        if (isElementShow("optionsdiv")) {
            dh -= GetElement("optionsdiv").offsetHeight;
        }
        if ((dw < 64) || (dw > 4096)) {
            dw = self.outerWidth;
        }
        if ((dh < 64) || (dh > 4096)) {
            dh = self.outerHeight;
        }
        var sx = o.ps[i].x - dw / 2;
        var sy = o.ps[i].y - dh / 2;
        if (o.es) {
            var as = {l: sx + 64, t: sy + 32, r: sx + dw - 32, b: sy + dh - 64};
            sx += 0.9 * (Math.min(0, Math.max(o.es.l - as.l, o.es.r - as.r)) + Math.max(0, Math.min(o.es.l - as.l, o.es.r - as.r)));
            sy += 0.9 * (Math.min(0, Math.max(o.es.t - as.t, o.es.b - as.b)) + Math.max(0, Math.min(o.es.t - as.t, o.es.b - as.b)));
        }
        var scs = DateTimestamp();
        TSS(sx, sy, scs, scs + t, "_sel");
    }
}

function TRB(o, l, t, w, h, k, bg, _8e) {
    v = document.createElement("div");
    v.className = "dbox";
    var s = v.style;
    if (_8e) {
        s.visibility = "hidden";
        v.id = _8e;
    }
    s.position = "absolute";
    s.width = (w) + "px";
    s.height = (h) + "px";
    s.left = (l - k) + "px";
    s.top = (t - k) + "px";
    s.background = bg;
    s.borderWidth = k + "px";
    o.appendChild(v);
}

var Tpd = false;
var Tdx, Tdy, moveobject;

function TGS() {
    var e = GetElement("treebg");
    if (self.pageYOffset) {
        scrolltop = self.pageYOffset;
        scrollleft = self.pageXOffset;
    } else {
        if (document.documentElement && document.documentElement.scrollTop) {
            scrolltop = document.documentElement.scrollTop;
            scrollleft = document.documentElement.scrollLeft;
        } else {
            if (document.body) {
                scrolltop = document.body.scrollTop;
                scrollleft = document.body.scrollLeft;
            }
        }
    }
    return {top: -(e.offsetTop - e.parentNode.offsetTop), left: -(e.offsetLeft - e.parentNode.offsetLeft)};
}

// TIS 给图谱绑定事件
function TreeElementAddEventListener(element) {
    moveobject = element;
    element.onmousedown = function (e) {
        e = e ? e : window.event;
        Tpd = true;
        scrollpos = TGS();
        Tdx = scrollpos.left + e.screenX;
        Tdy = scrollpos.top + e.screenY;
    };
    document.onmouseup = function (e) {
        Tpd = false;
    };
    document.onmousemove = function (e) {
        e = e ? e : window.event;
        if (Tpd) {
            TSS(Tdx - e.screenX, Tdy - e.screenY, 0, 0, null);
        }
    };
    document.body.onselectstart = function (e) {
        if (Tpd) {
            return false;
        }
    };
    element.ontouchstart = function (e) {
        if ((e.target == moveobject) && (e.touches.length == 1)) {
            Tpd = true;
            scrollpos = TGS();
            Tdx = scrollpos.left + e.touches[0].screenX;
            Tdy = scrollpos.top + e.touches[0].screenY;
            e.preventDefault();
        }
    };
    element.ontouchend = function (e) {
        if (Tpd) {
            Tpd = false;
            e.preventDefault();
        }
    };
    element.onwheel = function (e) {
        var d = e.deltaY;
        if (e.deltaMode == 1) {
            d /= 12;
        }
        ZoomInOutScale(1 - d / 120);
        e.preventDefault();
    };
    document.ontouchmove = function (e) {
        if (Tpd) {
            TSS(Tdx - e.touches[0].screenX, Tdy - e.touches[0].screenY, 0, 0, null);
            e.preventDefault();
        }
    };
}

var Tst = null, Tsf, Tsd, Tss, Tse, Tsv;

function TSS(x, y, scs, scf, scv) {
    if (Tst) {
        clearTimeout(Tst);
        Tst = null;
    }
    Tsf = TGS();
    Tsd = {top: y, left: x};
    Tss = scs;
    Tse = scf;
    Tsv = scv;
    if (DateTimestamp() >= scf) {
        TST();
    } else {
        Tst = setTimeout("TST()", 10);
    }
}

function TST() {
    var n = DateTimestamp();
    if (n >= Tse) {
        TSD(Tsd.left, Tsd.top);
        if (Tsv && GetElement(Tsv)) {
            SetElementVisibility(Tsv, true);
        }
    } else {
        var p = (n - Tss) / (Tse - Tss);
        p = 1 - Math.pow(0.5, p / 0.2);
        TSD(Tsf.left + p * (Tsd.left - Tsf.left), Tsf.top + p * (Tsd.top - Tsf.top));
        Tst = setTimeout("TST()", 10);
    }
}

function TSD(x, y) {
    if (true) {
        GetElement("treebg").style.left = -x;
        GetElement("treebg").style.top = -y;
    }
}

function TCT() {
    if (parent && parent.postMessage) {
        parent.postMessage("click=" + this.pid, "*");
    }
    ESP(this.pid, true);
}

function TFE(o, i) {
    return (o.ps && i) ? o.ps[i] : null;
}

function TRT(efa, viewPersonId, personId, y, ad, bn, sf, c, l, fl, ch, ph, co, pi, zf, wf, ts, s) {
    console.log("TRT", arguments)
    var o = GetElement("treebg");
    var _b9 = null;
    if (TFE(o, viewPersonId)) {
        var oi = viewPersonId;
        var sd = 0;
        if (viewPersonId != pi) {
            _b9 = "_sel";
            if (GetElement(_b9)) {
                SetElementVisibility(_b9, false);
            }
        }
    } else {
        var oi = TFE(o, pi) ? pi : null;
        var sd = oi ? 250 : 0;
    }
    var pg = TGG(y);
    TRD(BFT(efa, viewPersonId, personId, ch, ph, co, fl, pg), y, ad, bn, sf, c, l, o, oi, true, false, zf, wf, ts, _b9);
    if (s && noCentering) {
        if (_b9 && GetElement(_b9)) {
            SetElementVisibility(_b9, true);
        }
    } else {
        setTimeout("TCD('" + viewPersonId + "', " + (s ? 250 : 0) + ")", sd);
    }
    o = GetElement("treediv");
    if (IsDarkMode()) {
        o.style.backgroundColor = "";
    } else {
        o.style.backgroundColor = c.back;
    }
}

function TPH(f, p, bn, sf, s) {
    if (p) {
        var h = "";
        for (var j = 0; j < p.length; j++) {
            var t = p[j].t;
            var i = p[j].i;
            var e = f[i];
            var fn = FDN(e, true, 1, sf, (bn == 1), true, true, true, true);
            var nj = p[j + 1] || s;
            var ni = nj ? nj.i : null;
            var n = ni ? f[ni] : {};
            var rt = "";
            switch (t) {
                case "p":
                    rt = FTP(f, e, ni, n);
                    if (e.gp && ((e.gp[ni] || "").charAt(0) == "o")) {
                        rt += " (" + e.gp[ni].substring(1) + ")";
                    }
                    break;
                case "o":
                    if (n && ((n.m == i) || (n.f == i))) {
                        rt = GetChildrenName(n.V, n.g);
                    } else {
                        if (n && ((n.X == i) || (n.Y == i))) {
                            rt = GetChildrenName(n.W, n.g);
                        } else {
                            if (n && ((n.K == i) || (n.L == i))) {
                                rt = GetChildrenName(n.Q, n.g);
                            }
                        }
                    }
                    break;
                case "g":
                    rt = GetChildrenName("g", n.g);
                    break;
                case "s":
                    var sc = 0;
                    var oc = 0;
                    var c = FLC(e, n);
                    for (var k in c) {
                        if (c[k].indexOf("s") >= 0) {
                            sc++;
                        } else {
                            oc++;
                        }
                    }
                    if ((sc > 0) && (oc == 0)) {
                        rt = GetStepSiblingName(n.g);
                    } else {
                        if (((e.m || e.f) && FTM(n, e.m, e.f)) || ((e.X || e.Y) && FTM(n, e.X, e.Y)) || ((e.K || e.L) && FTM(n, e.K, e.L))) {
                            rt = GetSiblingName(true, n.g);
                        } else {
                            rt = GetSiblingName(false, n.g);
                        }
                    }
                    break;
                case "a":
                    if (ni && ((e.m == ni) || (e.f == ni))) {
                        rt = GetParentName(e.V, n.g, "", 1);
                    } else {
                        if (ni && ((e.X == ni) || (e.Y == ni))) {
                            rt = GetParentName(e.W, n.g, "", 2);
                        } else {
                            if (ni && ((e.K == ni) || (e.L == ni))) {
                                rt = GetParentName(e.Q, n.g, "", 3);
                            }
                        }
                    }
                    break;
                case "d":
                    rt = GetParentName("g", n.g, "", 1);
                    break;
                case "oi":
                    if (n.g == "f") {
                        rt = _t("Daughter-in-law");
                    } else {
                        if (n.g == "m") {
                            rt = _t("Son-in-law");
                        } else {
                            rt = _t("Child-in-law");
                        }
                    }
                    break;
                case "ai":
                    if (n.g == "f") {
                        rt = _t("Mother-in-law");
                    } else {
                        if (n.g == "m") {
                            rt = _t("Father-in-law");
                        } else {
                            rt = _t("Parent-in-law");
                        }
                    }
                    break;
                case "si":
                    if (n.g == "f") {
                        rt = _t("Sister-in-law");
                    } else {
                        if (n.g == "m") {
                            rt = _t("Brother-in-law");
                        } else {
                            rt = _t("Sibling-in-law");
                        }
                    }
                    break;
                case "x":
                    rt = _t("Unrelated");
                    break;
                default:
                    var t1 = t.substring(0, 1);
                    var d = t.substring(1);
                    if ((t1 == "a") || (t1 == "o")) {
                        if (d <= 2) {
                            if (t1 == "a") {
                                var gs = {"f": _t("Grandmother"), "m": _t("Grandfather"), "": _t("Grandparent")};
                            } else {
                                var gs = {"f": _t("Granddaughter"), "m": _t("Grandson"), "": _t("Grandchild")};
                            }
                        } else {
                            if (d == 3) {
                                if (t1 == "a") {
                                    var gs = {
                                        "f": _t("Great-grandmother"),
                                        "m": _t("Great-grandfather"),
                                        "": _t("Great-grandparent")
                                    };
                                } else {
                                    var gs = {
                                        "f": _t("Great-granddaughter"),
                                        "m": _t("Great-grandson"),
                                        "": _t("Great-grandchild")
                                    };
                                }
                            } else {
                                if (d == 4) {
                                    if (t1 == "a") {
                                        var gs = {
                                            "f": _t("Great-great-grandmother"),
                                            "m": _t("Great-great-grandfather"),
                                            "": _t("Great-great-grandparent")
                                        };
                                    } else {
                                        var gs = {
                                            "f": _t("Great-great-granddaughter"),
                                            "m": _t("Great-great-grandson"),
                                            "": _t("Great-great-grandchild")
                                        };
                                    }
                                } else {
                                    if (t1 == "a") {
                                        var gs = {
                                            "f": _t("Great-...-grandmother (# gens)", d),
                                            "m": _t("Great-...-grandfather (# gens)", d),
                                            "": _t("Great-...-grandparent (# gens)", d)
                                        };
                                    } else {
                                        var gs = {
                                            "f": _t("Great-...-granddaughter (# gens)", d),
                                            "m": _t("Great-...-grandson (# gens)", d),
                                            "": _t("Great-...-grandchild (# gens)", d)
                                        };
                                    }
                                }
                            }
                        }
                        rt = gs[n.g] || gs[""];
                    } else {
                        if (t1 == "c") {
                            if (d <= 1) {
                                var gs = {"f": _t("Female cousin"), "m": _t("Male cousin"), "": _t("Cousin")};
                            } else {
                                if (d == 2) {
                                    var gs = {
                                        "f": _t("Female second cousin"),
                                        "m": _t("Male second cousin"),
                                        "": _t("Second cousin")
                                    };
                                } else {
                                    if (d == 3) {
                                        var gs = {
                                            "f": _t("Female third cousin"),
                                            "m": _t("Male third cousin"),
                                            "": _t("Third cousin")
                                        };
                                    } else {
                                        if (d == 4) {
                                            var gs = {
                                                "f": _t("Female fourth cousin"),
                                                "m": _t("Male fourth cousin"),
                                                "": _t("Fourth cousin")
                                            };
                                        } else {
                                            var gs = {
                                                "f": _t("Distant female cousin (# degrees)", d),
                                                "m": _t("Distant male cousin (# degrees)", d),
                                                "": _t("Distant cousin (# degrees)", d)
                                            };
                                        }
                                    }
                                }
                            }
                            rt = gs[n.g] || gs[""];
                        } else {
                            if (t1 == "u") {
                                if (d <= 1) {
                                    var gs = {"f": _t("Aunt"), "m": _t("Uncle"), "": _t("Auncle")};
                                } else {
                                    if (d == 2) {
                                        var gs = {
                                            "f": _t("Great-aunt"),
                                            "m": _t("Great-uncle"),
                                            "": _t("Great-auncle")
                                        };
                                    } else {
                                        if (d == 3) {
                                            var gs = {
                                                "f": _t("Great-great-aunt"),
                                                "m": _t("Great-great-uncle"),
                                                "": _t("Great-great-auncle")
                                            };
                                        } else {
                                            var gs = {
                                                "f": _t("Great-...-aunt (# gens)", d),
                                                "m": _t("Great-...-uncle (# gens)", d),
                                                "": _t("Great-...-auncle (# gens)", d)
                                            };
                                        }
                                    }
                                }
                                rt = gs[n.g] || gs[""];
                            } else {
                                if (t1 == "n") {
                                    if (d <= 1) {
                                        var gs = {"f": _t("Niece"), "m": _t("Nephew"), "": _t("Nibling")};
                                    } else {
                                        if (d == 2) {
                                            var gs = {
                                                "f": _t("Great-niece"),
                                                "m": _t("Great-nephew"),
                                                "": _t("Great-nibling")
                                            };
                                        } else {
                                            if (d == 3) {
                                                var gs = {
                                                    "f": _t("Great-great-niece"),
                                                    "m": _t("Great-great-nephew"),
                                                    "": _t("Great-great-nibling")
                                                };
                                            } else {
                                                var gs = {
                                                    "f": _t("Great-...-niece (# gens)", d),
                                                    "m": _t("Great-...-nephew (# gens)", d),
                                                    "": _t("Great-...-nibling (# gens)", d)
                                                };
                                            }
                                        }
                                    }
                                    rt = gs[n.g] || gs[""];
                                }
                            }
                        }
                    }
                    break;
            }
            if (j || !s) {
                h += "<p class=\"pi\" id=\"path-" + i + "\"><a href=\"#\" onClick=\"ESP('" + i + "', true); return false;\">" + EncodeHTML(fn) + "</a></p>";
                if (rt) {
                    h += "<p class=\"pa\">&darr;</p>";
                }
            }
            if (p[j].p) {
                h += "<p id=\"shortpath-" + i + "\" class=\"pr\"><a href=\"#\" onClick=\"SEP('" + i + "', true); return false;\" title=\"" + _h("Expand this relationship") + "\">" + EncodeHTML(rt) + "</a></p>";
                h += "<div id=\"longpath-" + i + "\" style=\"display:none;\">";
                h += "<p class=\"pr\"><a href=\"#\" onClick=\"SEP('" + i + "', false); return false;\" title=\"" + _h("Contract this relationship") + "\">" + EncodeHTML(rt) + "</a></p>";
                h += "<div class=\"pl\">";
                h += TPH(f, p[j].p, bn, sf, p[j + 1]);
                h += "</div></div>";
            } else {
                if (rt) {
                    h += "<p class=\"pr\">" + EncodeHTML(rt) + "</p>";
                }
            }
        }
        return h;
    } else {
        return "";
    }
}