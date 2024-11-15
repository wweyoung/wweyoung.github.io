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

function TDS(yb, zoom, wf, bn, ts) {
    var ya = [yb.age, yb.bd, yb.j, yb.b, yb.v, yb.d, yb.y, yb.Z, yb.F, yb.U, yb.e, yb.e, yb.tku, yb.tku, yb.a, yb.a, yb.E, yb.I, yb.A];
    var yc = 0;
    for (var j = 0; j < ya.length; j++) {
        if (ya[j]) {
            yc++;
        }
    }
    var sz = {
        Tew: parseInt(((yc || yb.r || yb.pm || yb.TJ) ? 100 : 80) * zoom * wf),
        Tnh: parseInt((yb["0p"] ? 0 : (((bn == 2) || yb.N) ? 50 : 40)) * zoom),
        Tph: parseInt((yb.r ? 100 : 0) * zoom),
        Tdh: parseInt(20 * yc * zoom),
        Tmh: parseInt(40 * zoom),
        Ths: parseInt(20 * zoom),
        Tvs: parseInt(40 * zoom),
        Tfs: (12 * zoom * ts),
        Tds: (10 * zoom * ts),
        partnerfontsize: (9 * zoom * ts)
    };
    sz.Teh = parseInt(Math.max(sz.Tnh + sz.Tph + sz.Tdh, sz.Tmh));
    sz.Tep = Math.max(0, sz.Tew * 0.04);
    return sz;
}

function TRD(d, y, ad, bn, sf, c, ls, o, oi, wp, pr, zoom, wf, ts) {
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
    var sz = TDS(yb, zoom, wf, bn, ts);
    var tw = (sz.Tew + sz.Ths) * d.w - sz.Ths;
    var th = (sz.Teh + sz.Tvs) * d.h - sz.Tvs;
    if (!wp) {
        ox = sz.Tew / 2 - d.l * (sz.Tew + sz.Ths);
        oy = sz.Teh / 2 - d.t * (sz.Teh + sz.Tvs);
    } else {
        if (ios) {
            if (!(o.ios_width && o.ios_height)) {
                o.ios_width = TreeBg.offsetWidth;
                o.ios_height = TreeBg.offsetHeight;
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

// TGG 获取展示的结婚离婚字段码
function GetMarryAttrsByConfigFields(configFields) {
    var m = {};
    var yd = ("." + configFields + ".");
    if (yd.indexOf(".sm.") >= 0) { // 结婚日期
        m["m"] = true;
    }
    if (yd.indexOf(".sw.") >= 0) { // 结婚地点
        m["w"] = true;
    }
    if (yd.indexOf(".sd.") >= 0) { // 离婚日期
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

// TCD
function TreeFocusOnPerson(id, time = 250) {
    var o = TreeBg;
    if (id && o && o.ps && o.ps[id]) {
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
        var sx = o.ps[id].x - dw / 2;
        var sy = o.ps[id].y - dh / 2;
        if (o.es) {
            var as = {l: sx + 64, t: sy + 32, r: sx + dw - 32, b: sy + dh - 64};
            sx += 0.9 * (Math.min(0, Math.max(o.es.l - as.l, o.es.r - as.r)) + Math.max(0, Math.min(o.es.l - as.l, o.es.r - as.r)));
            sy += 0.9 * (Math.min(0, Math.max(o.es.t - as.t, o.es.b - as.b)) + Math.max(0, Math.min(o.es.t - as.t, o.es.b - as.b)));
        }
        var scs = Date.now();
        TSS(sx, sy, scs, scs + time);
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

var TreeIsPressed = false;
var Tdx, Tdy;

function TGS() {
    return {top: -TreeBg.offsetTop, left: -TreeBg.offsetLeft};
}

// TIS 给图谱绑定事件
function TreeElementAddEventListener(element) {
    document.body.onselectstart = function (e) {
        if (TreeIsPressed) { // 触摸时禁止选中
            return false;
        }
    };
    element.onmousedown = function (e) {
        // console.log("onmousedown", e);
        e = e ? e : window.event;
        TreeIsPressed = true;
        let scrollpos = TGS();
        Tdx = scrollpos.left + e.clientX;
        Tdy = scrollpos.top + e.clientY;
    };
    element.onmousemove = function (e) {
        // console.log("onmousemove", TreeIsPressed)
        e = e ? e : window.event;
        if (TreeIsPressed) {
            TreeSetOffset(Tdx - e.clientX, Tdy - e.clientY)
            // TSS(Tdx - e.clientX, Tdy - e.clientY, 0, 0);
        }
    };
    element.onmouseup = function (e) {
        TreeIsPressed = false;
    };
    element.onwheel = function (e) {
        var d = e.wheelDelta;
        ZoomInOutScale(d > 0 ? 1.2 : 0.9);
        e.preventDefault();
    };
    let lastTouches;
    element.ontouchstart = function (e) {
        console.log("ontouchstart", e)
        TreeIsPressed = true;
        let scrollpos = TGS();
        let {x, y} = GetTouchesAvgXY(e.touches);
        Tdx = scrollpos.left + x;
        Tdy = scrollpos.top + y;
        if (e.touches.length === 2) {
            lastTouches = e.touches;
        }
    };
    element.ontouchend = function (e) {
        console.log("ontouchend", e)
        lastTouches = null;
        if (TreeIsPressed) {
            TreeIsPressed = false;
        }
    };
    element.ontouchmove = function (e) {
        // console.log("ontouchmove", e.touches, e.type)
        if (TreeIsPressed) {
            let {x, y} = GetTouchesAvgXY(e.touches);
            TreeSetOffset(Tdx - x, Tdy - y)
            // TSS(Tdx - x, Tdy - y, 0, 0);
            e.preventDefault();
        }

        if (lastTouches?.length === 2 && e.touches.length === 2) {
            let lastTouchDistance = GetTouchDistance(lastTouches);
            let touchDistance = GetTouchDistance(e.touches);
            let scale = touchDistance / lastTouchDistance;
            ZoomInOutScale(scale)
        }
        lastTouches = e.touches;
    };
    element.onclick = function (e) {
        console.log("onclick", e)
        SwapSideBar(e.target.id !== 'treemargin')
    };
}

function GetTouchesAvgXY(touches) {
    let x = 0, y = 0;
    for (let i = 0; i < touches.length; i++) {
        x += touches[i].clientX;
        y += touches[i].clientY;
    }
    x /= touches.length;
    y /= touches.length;
    return {x, y}
}

function GetTouchDistance(touches) {
    return Math.sqrt(Math.pow(touches[0].clientX - touches[1].clientX, 2) + Math.pow(touches[0].clientY - touches[1].clientY, 2))
}
// TSS, TSE
var Tst = null, Tsf, Tsd, TreeAnimateStartTime, TreeAnimateEndTime;

function TSS(x, y, scs, scf) {
    if (Tst) {
        clearTimeout(Tst);
        Tst = null;
    }
    Tsf = TGS();
    Tsd = {top: y, left: x};
    TreeAnimateStartTime = scs;
    TreeAnimateEndTime = scf;
    TreeAnimateStep();
}

// TST
function TreeAnimateStep() {
    var now = Date.now();
    if (now >= TreeAnimateEndTime) {
        TreeSetOffset(Tsd.left, Tsd.top);
    } else {
        var p = (now - TreeAnimateStartTime) / (TreeAnimateEndTime - TreeAnimateStartTime);
        // p = 1 - Math.pow(0.5, p / 0.2);
        TreeSetOffset(Tsf.left + p * (Tsd.left - Tsf.left), Tsf.top + p * (Tsd.top - Tsf.top));
        Tst = setTimeout(TreeAnimateStep, 10);
    }
}

function TreeSetOffset(x, y) {
    TreeBg.style.left = -x;
    TreeBg.style.top = -y;
}

function TCT() {
    ESP(this.pid, true);
}

function TreeBgPsOf(i) {
    return (TreeBg.ps && i) ? TreeBg.ps[i] : null;
}

function TRT(family, viewPersonId, ownPersonId, personShowFields, otherAgeConfig, birthNameConfig, surnameFirstConfig,
             colorsConfig, linesConfig, maleLeftConfig, childrenLevelConfig, parentLevelConfig, cursionLevelConfig,
             preViewPersonId, zoomConfig, widthConfig, textSizeConfig, isFixed) {
    // console.log("TRT", arguments)
    // var _b9 = null;
    let oiPersonId, focusAnimationTime;
    if (TreeBgPsOf(viewPersonId)) {
        oiPersonId = viewPersonId;
        focusAnimationTime = 0;
        if (viewPersonId != preViewPersonId) {
            // _b9 = "_sel";
            // if (GetElement(_b9)) {
            //     SetElementVisibility(_b9, false);
            // }
        }
    } else {
        oiPersonId = TreeBgPsOf(preViewPersonId) ? preViewPersonId : null;
        focusAnimationTime = oiPersonId ? 250 : 0;
    }
    var showMarryAttrs = GetMarryAttrsByConfigFields(personShowFields);
    TRD(BFT(family, viewPersonId, ownPersonId, childrenLevelConfig, parentLevelConfig, cursionLevelConfig, maleLeftConfig, showMarryAttrs), personShowFields, otherAgeConfig, birthNameConfig, surnameFirstConfig, colorsConfig, linesConfig, TreeBg, oiPersonId, true, false, zoomConfig, widthConfig, textSizeConfig);
    // if (!isFixed) {
        setTimeout(() => TreeFocusOnPerson(viewPersonId, 250), focusAnimationTime);
    // }
    let treediv = GetElement("treediv");
    if (IsDarkMode()) {
        treediv.style.backgroundColor = "";
    } else {
        treediv.style.backgroundColor = colorsConfig.back;
    }
}

let AllTitle = {
    // 平辈
    '自己男': {伴: '妻子', is: '自己'},
    '自己女': {伴: '丈夫', is: '自己'},
    '伴': {伴: '自己', is: '自己&伴', name: '伴侣'},
    '丈夫': {父: '公公', 母: '婆婆', is: '伴'},
    '妻子': {父: '岳父', 母: '岳母', is: '伴'},
    '兄弟姐妹': {'父': '父', '母': '母'},
    '兄弟': {'子': '侄子', '女': '侄女', '伴': '兄弟媳妇', is: '兄弟姐妹'},
    '姐妹': {'子': '外甥', '女': '外甥女', '伴': '姐妹丈夫', is: '兄弟姐妹'},
    '堂兄弟': {is: '兄弟'},
    '堂姐妹': {is: '姐妹'},
    '表兄弟': {is: '兄弟'},
    '表姐妹': {is: '姐妹'},
    '兄弟媳妇': {'伴': '兄弟'},
    '姐妹丈夫': {'伴': '姐妹'},
    // 父辈
    '父母': {'子女': '兄弟姐妹', '子': '兄弟', '女': '姐妹', '伴': '父母'},
    '父': {'父': '亲祖父', '母': '亲祖母', '伴': '母', is: '父母', name: '父亲'},
    '母': {'父': '外祖父', '母': '外祖母', '伴': '父', is: '父母', name: '母亲'},
    '婆婆': {is: '母'},
    '公公': {is: '父'},
    '父系父辈': {'父': '祖父', '母': '祖母', '子': '兄弟', '女': '姐妹'},
    '伯叔': {is: '父系父辈'},
    '姑妈': {'伴': '姑父', is: '父系父辈'},
    '伯父': {'伴': '伯母', is: '伯叔'},
    '叔叔': {'伴': '婶婶', is: '伯叔'},
    '父的亲姊妹': {'父': '亲祖父', '母': '亲祖母'},
    '亲伯叔': {'子': '堂兄弟', '女': '堂姐妹', is: ['父的亲姊妹', '伯叔'], name: '伯叔'},
    '亲姑妈': {'子': '表兄弟', '女': '表姐妹', is: ['父的亲姊妹', '姑妈']},
    '亲伯父': {is: ['亲伯叔', '伯父'], name: '伯父'},
    '亲叔叔': {is: ['亲伯叔', '叔叔'], name: '叔叔'},
    '母的亲姊妹': {'父': '外祖父', '母': '外祖母', '子': '表兄弟', '女': '表姐妹'},
    '舅': {'伴': '舅妈', is: '母的亲姊妹'},
    '姨妈': {'伴': '姨父', is: '母的亲姊妹'},
    '岳父母': {'子': '舅子', '女': '姨子'},
    '岳父': {'父': '祖岳父', '母': '祖岳母', '伴': '岳母', is: '岳父母'},
    '岳母': {'父': '外祖岳父', '母': '外祖岳母', '伴': '岳父', is: '岳父母'},
    // 爷辈
    '祖父母': {'子': '伯叔', '女': '姑妈'},
    '祖父': {'父': '曾祖父', '母': '曾祖母', '伴': '祖母', is: '祖父母'},
    '祖母': {'父': '曾外祖父', '母': '曾外祖母', '伴': '祖父', is: '祖父母'},
    '亲祖父母': {'子': '亲伯叔', is: '祖父母'},
    '亲祖父': {'伴': '亲祖母', is: ['亲祖父母', '祖父'], name: '祖父'},
    '亲祖母': {'伴': '亲祖父', is: ['亲祖父母', '祖母'], name: '祖母'},
    '外祖父母': {'子': '舅', '女': '姨妈'},
    '外祖父': {'父': '外曾祖父', '母': '外曾祖母', '伴': '外祖母', is: '外祖父母'},
    '外祖母': {'父': '外曾外祖父', '母': '外曾外祖母', '伴': '外祖父', is: '外祖父母'},
    '祖岳父母': {'子': '伯岳父', '女': '姑岳母'},
    '祖岳父': {'伴': '祖岳父', is: '祖岳父母'},
    '祖岳母': {'伴': '祖岳母', is: '祖岳父母'},
    '曾祖': {'子': '祖父', '女': '姑奶奶'},
    '曾祖父': {'父': '高祖父', '母': '高祖母', '伴': '曾祖母', is: '曾祖'},
    '曾祖母': {'父': '高外祖父', '母': '高外祖母', '伴': '曾祖父', is: '曾祖'},
    '外曾祖': {'子': '祖父', '女': '姑奶奶'},
    '外曾祖父': {'父': '外高祖父', '母': '外高祖母', '伴': '外曾祖母', is: '外曾祖'},
    '外曾祖母': {'父': '外高外祖父', '母': '外高外祖母', '伴': '外曾祖父', is: '外曾祖'},
    // 高辈
    '高祖': {'子': '曾祖父', '女': '姑曾祖母'},
    '高祖父': {'父': '天祖父', '母': '天祖母', '伴': '高祖母', is: '高祖'},
    '高祖母': {'伴': '高祖父', is: '高祖'},
    '天祖': {'子': '高祖父', '女': '姑高祖母'},
    '天祖父': {'父': '烈祖父', '母': '烈祖母', '伴': '天祖母', is: '天祖'},
    '天祖母': {'伴': '天祖父', is: '天祖'},
    '烈祖': {'子': '天祖父', '女': '姑天祖母'},
    '烈祖父': {'父': '太祖父', '母': '太祖母', '伴': '烈祖母', is: '烈祖'},
    '烈祖母': {'伴': '烈祖父', is: '烈祖'},
    '太祖': {'子': '烈祖父', '女': '姑烈祖母'},
    '太祖父': {'父': '远祖父', '母': '远祖母', '伴': '太祖母', is: '太祖'},
    '太祖母': {'伴': '太祖父', is: '太祖'},
    // 子辈
    '子女': {'父母': '伴'},
    '子': {'子': '孙子', '女': '孙女', '伴侣': '儿媳', is: '子女', name: '儿子'},
    '女': {'子': '外孙子', '女': '外孙女', '伴': '女婿', is: '子女', name: '女儿'},
    // 孙辈
    '孙子女': {'父': '儿子', '母': '儿媳', '子': '曾孙', '女': '曾孙女'},
    '孙子': {'伴': '孙媳妇', is: '孙子女'},
    '孙女': {'伴': '孙女婿', is: '孙子女'},
    '外孙子女': {'父': '女婿', '母': '女儿', '子': '外曾孙', '女': '外曾孙女'},
    '外孙': {'伴': '外孙媳妇', is: '外孙子女'},
    '外孙女': {'伴': '外孙女婿', is: '外孙子女'},
    '曾孙子女': {'父': '孙子', '母': '孙媳妇', '子': '玄孙', '女': '玄孙女'},
    '曾孙': {'伴': '曾孙媳妇', is: '曾孙子女'},
    '曾孙女': {'伴': '曾孙女婿', is: '曾孙子女'},
}

let TitleChild = {};
Object.entries(AllTitle).forEach(([key, value]) => {
    let is = value.is || '';
    let childTitles = TitleChild[is] || (TitleChild[is] = []);
    childTitles.push(key);
});

function GetAppellationOf(title, of) {
    // 当前没有 而且 有父类
    let result;
    while (of) {
        let titleInfo = AllTitle[title];
        while (titleInfo && !titleInfo[of] && titleInfo.is) {
            if (titleInfo.is.constructor === String) {
                if (titleInfo.is === '自己') return of;
                titleInfo = AllTitle[titleInfo.is];
            } else {
                for (let is of titleInfo.is) {
                    let subTitle = GetAppellationOf(is, of);
                    if (subTitle) {
                        return subTitle;
                    }
                }
            }
        }
        result = titleInfo && titleInfo[of];
        if (result) {
            break;
        }
        of = AllTitle[of]?.is;
    }
    console.log(title + ' 的 ' + of + ' 是' + result);
    return result;
}


function GetAppellation(nowTitle = '自己男', toFinds = ['子', '女'], logRoutes = [], logI = 0) {
    if (!toFinds.length) {
        return [nowTitle];
    }
    let toFind = toFinds[0];
    let title = GetAppellationOf(nowTitle, toFind);
    let logRoute = logRoutes[logI] || (logRoutes[logI] = new Set());
    if (title) {
        logRoute.add(title);
        let titles = GetAppellation(title, toFinds.slice(1), logRoutes, logI + 1);
        return titles;
    }
    let subFinds = TitleChild[toFind];
    let titles = [];
    if (subFinds) {
        for (const subFind of subFinds) {
            let subTitles = GetAppellation(nowTitle, [subFind, ...toFinds.slice(1)], logRoutes, logI);
            if (subTitles.length) {
                titles = titles.concat(subTitles);
            }
        }
    }
    let subNowTitles = TitleChild[nowTitle];
    if (subNowTitles) {
        for (const subNowTitle of subNowTitles) {
            let subTitles = GetAppellation(subNowTitle, toFinds, logRoutes, logI);
            if (subTitles.length) {
                titles = titles.concat(subTitles);
            }
        }
    }
    titles = [...new Set(titles)];
    return titles;
}

function TPH(family, paths, bn, sf, s) {


    if (paths) {
        var h = "";
        for (var j = 0; j < paths.length; j++) {
            var t = paths[j].t;
            var i = paths[j].i;
            var e = family[i];
            var fn = FDN(e, true, 1, sf, (bn == 1), true, true, true, true);
            var nj = paths[j + 1] || s;
            var ni = nj ? nj.i : null;
            var n = ni ? family[ni] : {};
            var rt = "";
            switch (t) {
                case "p":
                    rt = FTP(family, e, ni, n);
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
                case "g": // 教子
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
            if (paths[j].p) {
                h += "<p id=\"shortpath-" + i + "\" class=\"pr\"><a href=\"#\" onClick=\"SEP('" + i + "', true); return false;\" title=\"" + _h("Expand this relationship") + "\">" + EncodeHTML(rt) + "</a></p>";
                h += "<div id=\"longpath-" + i + "\" style=\"display:none;\">";
                h += "<p class=\"pr\"><a href=\"#\" onClick=\"SEP('" + i + "', false); return false;\" title=\"" + _h("Contract this relationship") + "\">" + EncodeHTML(rt) + "</a></p>";
                h += "<div class=\"pl\">";
                h += TPH(family, paths[j].p, bn, sf, paths[j + 1]);
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

// TPH 废弃
// 计算关系路径HTML
function TPHNew(family, paths, bn, sf, s) {
    let fromId = paths[0].id;
    let logRoutes = []
    let title = GetAppellation(GetRelationTitle(RelationTitle.self, family[fromId]), paths.slice(0, -1).map(obj => obj.type), logRoutes).join('/') || '无关';
    // console.log(paths, logRoutes);

    let fromName = FDN(family[fromId], true, 1, sf, (bn == 1), true, true, true, true);
    let endId = paths[paths.length - 1].id;
    let strBuilder = [`<p class="pi" id="path-${fromId}" style="display: none;">\n' +
    '        <a href="#" onclick="ESP('${fromId}', true); return false;">${EncodeHTML(fromName)}</a>\n' +
    '    </p>
        <p class="pa">↓</p>
    <p id="shortpath-${fromId}" class="ptitle" style="display: none;">
        <a href="#" onclick="SEP('${fromId}', true); return false;" title="展开此关系">${title}</a>
    </p>
     <div id="longpath-${fromId}" style="display: inline-block;">
         <div class="pl">
    `];
    let name;
    for (let i = 1; i < paths.length; i++) {
        name = FDN(family[paths[i].id], true, 1, sf, (bn == 1), true, true, true, true);
        let nextTitle = paths[i - 1].type;
        nextTitle = AllTitle[nextTitle].name || nextTitle;
        strBuilder.push(`
            <p class="pr">${nextTitle}</p>
            <p class="pi" id="path-${paths[i].id}"><a href="#" onclick="ESP('${paths[i].id}', true); return false;">${EncodeHTML(name)}</a></p>
        `);
        if (logRoutes[i - 1]?.size) {
            let forFromTitle = Array.from(logRoutes[i - 1], (t) => AllTitle[t]?.name || t).join(' / ');
            strBuilder.push(`<p class="pr">(${forFromTitle})</p>`);
        }
        strBuilder.push('<p class="pa">↓</p>');
    }
    strBuilder.push(`
    </div>
    <p class="ptitle"><a href="#" onclick="SEP('${fromId}', false); return false;" title="收缩此关系">${title}</a></p>
    </div>
    <p class="ps" id="path-${endId}"><a href="#" onclick="ESP('${endId}', true); return false;">${EncodeHTML(name)}</a></p>
    `)
    return strBuilder.join('');
}