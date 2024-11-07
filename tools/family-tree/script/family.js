var Fmn = ["", _t("Mth_1"), _t("Mth_2"), _t("Mth_3"), _t("Mth_4"), _t("Mth_5"), _t("Mth_6"), _t("Mth_7"), _t("Mth_8"), _t("Mth_9"), _t("Mth_10"), _t("Mth_11"), _t("Mth_12")];
var Fgn = {"": "", "f": _t("Female"), "m": _t("Male"), "o": _t("Other")};
var Fvn = {
    "": _t("Known date"),
    "app": _t("Approximate"),
    "bef": _t("Before"),
    "aft": _t("After"),
    "bet": _t("Date range")
};

function FAA(a, v) {
    a[a.length] = v;
}

function FAN(a, a2) {
    for (var j = 0; j < a2.length; j++) {
        if (a.indexOf(a2[j]) < 0) {
            a[a.length] = a2[j];
        }
    }
}

function FAI(a, ar) {
    for (var j = 0; j < ar.length; j++) {
        var i = a.indexOf(ar[j]);
        if (i >= 0) {
            a.splice(i, 1);
        }
    }
}

function FRF(f, ap, fp) {
    for (var i in f) {
        var p = f[i];
        p.c = [];
        p.pc = {};
        p.fg = false;
        if (p.m && !f[p.m]) {
            p.m = null;
        }
        if (p.f && !f[p.f]) {
            p.f = null;
        }
        if (p.s && !f[p.s]) {
            p.s = null;
        }
        if (p.X && !f[p.X]) {
            p.X = null;
        }
        if (p.Y && !f[p.Y]) {
            p.Y = null;
        }
        if (p.K && !f[p.K]) {
            p.K = null;
        }
        if (p.L && !f[p.L]) {
            p.L = null;
        }
        if (p.s) {
            p.pc[p.s] = true;
        }
        if (p.ep) {
            for (var j in p.ep) {
                if (p.ep[j] && f[j]) {
                    p.pc[j] = true;
                }
            }
        }
    }
    var ai = 0;
    for (var i in f) {
        var p = f[i];
        var j = 0;
        if (p.m || p.f) {
            j++;
            p["m" + j] = p.m;
            p["f" + j] = p.f;
            p["t" + j] = p.V;
        }
        if (p.X || p.Y) {
            j++;
            p["m" + j] = p.X;
            p["f" + j] = p.Y;
            p["t" + j] = p.W;
        }
        if (p.K || p.L) {
            j++;
            p["m" + j] = p.K;
            p["f" + j] = p.L;
            p["t" + j] = p.Q;
        }
        while (j < 3) {
            j++;
            p["m" + j] = null;
            p["f" + j] = null;
            p["t" + j] = null;
        }
        var m1 = p.m1;
        var f1 = p.f1;
        var m2 = p.m2;
        var f2 = p.f2;
        var m3 = p.m3;
        var f3 = p.f3;
        p.i = i;
        p.h = null;
        ai++;
        p.ai = ai;
        if (p.p) {
            p.h = FDN(p, false, 0);
        }
        if (m1 && f1) {
            f[m1].pc[f1] = true;
            f[f1].pc[m1] = true;
        }
        if (m2 && f2) {
            f[m2].pc[f2] = true;
            f[f2].pc[m2] = true;
        }
        if (m3 && f3) {
            f[m3].pc[f3] = true;
            f[f3].pc[m3] = true;
        }
        if (m1) {
            FAA(f[m1].c, i);
        }
        if (f1 && (f1 != m1)) {
            FAA(f[f1].c, i);
        }
        if (m2 && (m2 != m1) && (m2 != f1)) {
            FAA(f[m2].c, i);
        }
        if (f2 && (f2 != m1) && (f2 != f1) && (f2 != m2)) {
            FAA(f[f2].c, i);
        }
        if (m3 && (m3 != m1) && (m3 != f1) && (m3 != m2) && (m3 != f2)) {
            FAA(f[m3].c, i);
        }
        if (f3 && (f3 != m1) && (f3 != f1) && (f3 != m2) && (f3 != f2) && (f3 != m3)) {
            FAA(f[f3].c, i);
        }
    }
    for (var i in f) {
        var p = f[i];
        var mi = p.m1;
        var fi = p.f1;
        if (!p.h) {
            if (i == ap) {
                p.h = _t("Me");
            } else {
                if (i == fp) {
                    p.h = _t("Founder");
                } else {
                    var r = p["^"];
                    if (r && f[r] && f[r].h) {
                        var s = null;
                        if ((r == mi) || (r == fi)) {
                            s = FIT(p.V, p.g);
                        } else {
                            if (f[r].m == i) {
                                s = FPT(f[r].V, p.g, "f", 1);
                            } else {
                                if (f[r].f == i) {
                                    s = FPT(f[r].V, p.g, "m", 1);
                                } else {
                                    if (f[r].X == i) {
                                        s = FPT(f[r].W, p.g, "f", 2);
                                    } else {
                                        if (f[r].Y == i) {
                                            s = FPT(f[r].W, p.g, "m", 2);
                                        } else {
                                            if (f[r].K == i) {
                                                s = FPT(f[r].W, p.g, "f", 3);
                                            } else {
                                                if (f[r].L == i) {
                                                    s = FPT(f[r].W, p.g, "m", 3);
                                                } else {
                                                    if ((mi && (f[r].m == mi)) || (fi && (f[r].f == fi))) {
                                                        s = FST((f[r].m == mi) && (f[r].f == fi), p.g);
                                                    } else {
                                                        if ((r == p.s) || (p.ep && (p.ep[r] == 2))) {
                                                            s = _t("Partner");
                                                        } else {
                                                            if (f[r].pc[i]) {
                                                                s = _t("Ex-partner");
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (s) {
                            p.h = _t("$1 of $2", s, f[r].h);
                        }
                    }
                }
            }
            if (!p.h) {
                p.h = _t("Anon #", p.ai);
            }
        }
        p.cp = 0;
        for (var pi in p.pc) {
            p.cp++;
        }
        p.es = p.s || ((p.cp == 1) ? pi : null);
    }
    if (fp) {
        FSR(f, fp, "fg", true, true, true, true, true, false);
    }
}

function FSR(f, i, l, u, uu, d, dd, a, aa) {
    if (i && f[i] && !f[i][l]) {
        var p = f[i];
        p[l] = true;
        if (u) {
            FSR(f, p.m, l, uu, uu, dd, dd, aa, aa);
            FSR(f, p.f, l, uu, uu, dd, dd, aa, aa);
            FSR(f, p.X, l, uu, uu, dd, dd, aa, aa);
            FSR(f, p.Y, l, uu, uu, dd, dd, aa, aa);
            FSR(f, p.K, l, uu, uu, dd, dd, aa, aa);
            FSR(f, p.L, l, uu, uu, dd, dd, aa, aa);
        }
        if (d) {
            for (var j = 0; j < p.c.length; j++) {
                FSR(f, p.c[j], l, false, false, dd, dd, aa, aa);
            }
        }
        if (a) {
            FSR(f, p.es, l, uu, uu, dd, dd, aa, aa);
            for (var pi in p.pc) {
                FSR(f, pi, l, uu, uu, dd, dd, aa, aa);
            }
        }
    }
}

function FCR(f, i, uu, dd, aa) {
    for (var j in f) {
        f[j].nf = false;
    }
    FSR(f, i, "nf", uu, uu, dd, dd, aa, aa);
    var c = 0;
    for (var j in f) {
        if (f[j].nf) {
            c++;
        }
    }
    return c - 1;
}

function FDF(f, i, si, sf, st) {
    for (var j in f) {
        f[j].cf = false;
    }
    var q = [i];
    while (q.length) {
        var j = q[q.length - 1];
        q.length--;
        f[j].cf = true;
        var p = f[j];
        if (p) {
            var t = [p.m, p.f, p.X, p.Y, p.K, p.L].concat(p.c);
            for (var pi in p.pc) {
                t[t.length] = pi;
            }
            for (var k = 0; k < t.length; k++) {
                var ti = t[k];
                if (ti && f[ti] && (!f[ti].cf) && (ti != si) && ((j != sf) || (ti != st))) {
                    q[q.length] = ti;
                }
            }
        }
    }
    var df = [];
    for (var j in f) {
        if (!f[j].cf) {
            df[df.length] = j;
        }
    }
    return df;
}

function FCS(f, i) {
    for (var j in f) {
        f[j].sf = false;
    }
    FSR(f, i, "sf", true, true, true, true, false, true);
    FSR(f, f[i].es, "sf", false, false, true, true, false, true);
    for (var pi in f[i].pc) {
        FSR(f, pi, "sf", false, false, true, true, false, true);
    }
    var sf = [];
    for (var j in f) {
        if (f[j].sf) {
            sf[sf.length] = j;
        }
    }
    return sf;
}

function FRP(f, mi, fi) {
    return f[mi] && f[fi] && (f[mi].s == fi) && (f[fi].s == mi);
}

function FUP(f, mi, fi) {
    return FRP(f, mi, fi) || (f[mi] && f[mi].ep && (f[mi].ep[fi] == 2));
}

function FGM(g) {
    return (g == "f") ? -1 : ((g == "m") ? 1 : 0);
}

function FCM(p1, p2) {
    return (p1 ? FGM(p1.g) : 0) - (p2 ? FGM(p2.g) : 0);
}

function FPM(f, i) {
    var m = 0;
    if (i && f[i]) {
        var ca = f[i].c;
        for (var j = 0; j < ca.length; j++) {
            var c = f[ca[j]];
            if (c.m == i) {
                m--;
            }
            if (c.f == i) {
                m++;
            }
            if (c.X == i) {
                m--;
            }
            if (c.Y == i) {
                m++;
            }
            if (c.K == i) {
                m--;
            }
            if (c.L == i) {
                m++;
            }
        }
    }
    return m;
}

function FSM(f, i, si) {
    var cm = FPM(f, i) - FPM(f, si);
    if (!cm) {
        cm = FCM(i ? f[i] : null, si ? f[si] : null);
    }
    return cm ? (cm < 0) : (si ? (i < si) : false);
}

function FIG(g) {
    return (g == "m") ? "f" : ((g == "f") ? "m" : null);
}

function FPL(f, i) {
    var p = f[i];
    var ra = [];
    for (var j in f) {
        if ((j != i) && !p.pc[j]) {
            FAA(ra, j);
        }
    }
    return ra;
}

function FSS(p, si, s) {
    var ps = [];
    for (var pi in p.pc) {
        if (pi != si) {
            var gpi = new String(p.gp ? (p.gp[pi] || "") : "");
            var _60 = (gpi.charAt(0) == "o");
            var d = 99999999;
            if ((gpi == "m") || (gpi == "s") || (gpi == "d") || (gpi == "a")) {
                if (p.mp && p.mp[pi]) {
                    d = p.mp[pi];
                }
            } else {
                if (gpi == "e") {
                    if (p.rp && p.rp[pi]) {
                        d = p.rp[pi];
                    }
                } else {
                    if (_60 || (gpi == "r")) {
                        if (p.bp && p.bp[pi]) {
                            d = p.bp[pi];
                        }
                    }
                }
            }
            var ds = FPD(new String(d));
            ds.i = pi;
            ps[ps.length] = ds;
        }
    }
    ps.sort(FCD);
    var po = {};
    if (s && si) {
        po[si] = true;
    }
    for (var j = 0; j < ps.length; j++) {
        po[ps[j].i] = true;
    }
    return po;
}

function FAL(f, i, si) {
    for (var j in f) {
        f[j].pf = false;
    }
    FSR(f, i, "pf", false, false, true, true, false, false);
    var pa = [];
    for (var j in f) {
        if ((!f[j].pf) && (si != j)) {
            FAA(pa, j);
        }
    }
    return pa;
}

function FAD(d) {
    var p = FPD(d);
    return (p.m || p.y) ? true : false;
}

function FPD(d) {
    try {
        var bce = (d.substring(0, 1) == "B");
        if (bce) {
            d = d.substring(1);
        }
        var yr = parseInt(d.substring(0, 4), 10);
        if (bce) {
            yr = -yr;
        }
        return {d: parseInt(d.substring(6, 8), 10), m: parseInt(d.substring(4, 6), 10), y: yr};
    } catch (e) {
        return {};
    }
}

function FCD(d1, d2) {
    if (d1.y != d2.y) {
        return d1.y - d2.y;
    } else {
        if (d1.m != d2.m) {
            return d1.m - d2.m;
        } else {
            return d1.d - d2.d;
        }
    }
}

function FPS(d, o) {
    var s1 = FPD(d);
    var p = {v: "", d1: s1.d, m1: s1.m, y1: s1.y};
    var hi = d.indexOf("-");
    if (hi >= 0) {
        var s2 = FPD(d.substring(hi + 1));
        if (o && (FCD(s1, s2) > 0)) {
            p = {v: "", d1: s2.d, m1: s2.m, y1: s2.y};
            s2 = s1;
        }
        p.v = "bet";
        p.d2 = s2.d;
        p.m2 = s2.m;
        p.y2 = s2.y;
    } else {
        if (d.indexOf("~") >= 0) {
            p.v = "app";
        } else {
            if (d.indexOf(">") >= 0) {
                p.v = "bef";
            } else {
                if (d.indexOf("<") >= 0) {
                    p.v = "aft";
                }
            }
        }
    }
    return p;
}

function FDY(y) {
    var t = "";
    if (y) {
        t += Math.abs(y);
        if (y < 0) {
            t = _t("$ BCE", t);
        }
    }
    return t;
}

function FSD(d, m, y) {
    if (m) {
        if (d) {
            var f = y ? "j M Y" : "j M";
        } else {
            var f = y ? "M Y" : "M";
        }
    } else {
        f = y ? "Y" : "";
    }
    return f.replaceAll("j", String(d)).replaceAll("M", Fmn[m]).replaceAll("Y", FDY(y));
}

function FDT(d, c, b) {
    var p = FPS(d ? d.toString() : "", true);
    var s = "";
    if (p) {
        if (p.v == "bet") {
            if (p.y1 && p.y2 && ((p.y2 - p.y1) == 1) && (!p.m1) && (!p.m2)) {
                var s = FCT(p.y1, p.y2);
            } else {
                var sy = (p.y1 == p.y2);
                var us = false;
                if (p.m1 && p.m2 && sy) {
                    p.y1 = "";
                } else {
                    if ((p.y1 < 0) && (p.y2 < 0) && (!p.m1) && (!p.m2)) {
                        p.y1 = -p.y1;
                    }
                }
                if (sy && (p.m1 == p.m2) && p.d1 && p.d2) {
                    var s1 = p.d1;
                    us = ((p.d2 - p.d1) == 1);
                } else {
                    var s1 = FSD(p.d1, p.m1, p.y1);
                    us = sy && p.m1 && p.m2 && ((p.m2 - p.m1) == 1) && (!p.d1) && (!p.d2);
                }
                var s2 = FSD(p.d2, p.m2, p.y2);
                if (s1 && s2) {
                    var s = s1 + (((s1 + "").indexOf(" ") > 0) ? " ~ " : (us ? "/" : "~")) + s2;
                } else {
                    if (s1 || s2) {
                        var s = (b ? ("~ " + s1 + s2) : (c ? _t("Approx $", s1 + s2) : _t("approx $", s1 + s2)));
                    }
                }
            }
        } else {
            s = FSD(p.d1, p.m1, p.y1);
            if (s) {
                if (b) {
                    var es = {"app": "~ ", "bef": "< ", "aft": "> "};
                    s = (es[p.v] || "") + s;
                } else {
                    var ts = {
                        "app": c ? _i("Approx $") : _i("approx $"),
                        "bef": c ? _i("Before $") : _i("before $"),
                        "aft": c ? _i("After $") : _i("after $")
                    };
                    if (ts[p.v]) {
                        s = _t(ts[p.v], s);
                    }
                }
            }
        }
    }
    return s;
}

function FYT(d) {
    var p = FPS(d ? d.toString() : "", true);
    var s = "";
    if (p.v == "bet") {
        if (p.y1 && p.y2) {
            if (p.y1 == p.y2) {
                s = FDY(p.y1);
            } else {
                if ((p.y2 - p.y1) == 1) {
                    s = FCT(p.y1, p.y2);
                } else {
                    s = Math.abs(p.y1) + "~" + FDY(p.y2);
                }
            }
        } else {
            if (p.y1 || p.y2) {
                s = "~" + FDY(p.y1) + FDY(p.y2);
            }
        }
    } else {
        s = FDY(p.y1);
        if (s) {
            var es = {"app": "~", "bef": "<", "aft": ">"};
            s = (es[p.v] || "") + s;
        }
    }
    return s;
}

function FCT(y1, y2) {
    var d = 1000000;
    var bce = (y1 < 0);
    if (bce) {
        var t = y1;
        y1 = -y2;
        y2 = -t;
    }
    if (Math.floor(y1 / 100) == Math.floor(y2 / 100)) {
        d = (Math.floor(y1 / 10) == Math.floor(y2 / 10)) ? 10 : 100;
    }
    var s = y1 + "/" + (y2 % d);
    if (bce) {
        s = _t("$ BCE", s);
    }
    return s;
}

function FYS(p) {
    if (!p) {
        return "";
    }
    var by = FYT(p.b);
    var dy = (p.z == "1") ? FYT(p.d) : "";
    var y = (by || "") + ((("" + by + dy).indexOf("~") >= 0) ? " - " : "-") + (dy || "");
    return (by || dy) ? (" (" + y.trim() + ")") : "";
}

function FDE(v, m, l) {
    v = parseInt(v);
    v = "0000" + ((isNaN(v) || (v < 0)) ? 0 : ((v > m) ? m : v));
    return v.substring(v.length - l, v.length);
}

function FDS(d, m, y) {
    return ((y < 0) ? "B" : "") + FDE((y < 0) ? -y : y, 9999, 4) + FDE(m, 12, 2) + FDE(d, 31, 2);
}

function FNS() {
    var d = new Date();
    return FDS(d.getDate(), 1 + d.getMonth(), d.getFullYear());
}

function FBS(v, d1, m1, y1, d2, m2, y2) {
    var s = FDS(d1, m1, y1);
    if (v == "bet") {
        s += "-" + FDS(d2, m2, y2);
    } else {
        if (v == "app") {
            s += "~";
        } else {
            if (v == "bef") {
                s += ">";
            } else {
                if (v == "aft") {
                    s += "<";
                }
            }
        }
    }
    return s;
}

function FDN(p, mn, sn, sf, bn, ah, ni, ti, su) {
    if (!p) {
        return _t("Unknown");
    }
    var fn = p.p || "";
    var n = fn;
    if (!mn) {
        var fns = fn.trim().split(" ");
        n = fns[0] || "";
    }
    if (ni && p.N) {
        n += (n ? " " : "") + "\"" + p.N + "\"";
    }
    if (n && sn) {
        var an = bn ? p.q : p.l;
        if (!an) {
            an = bn ? p.l : p.q;
        } else {
            if (sn >= 2) {
                var cn = bn ? p.l : p.q;
                if (cn && (cn != an)) {
                    an += "/" + cn;
                }
            }
        }
        if (an) {
            if (n) {
                if (sf) {
                    n = an + " " + n;
                } else {
                    n += " " + an;
                }
            } else {
                n = an;
            }
        }
    }
    if (n && ti && p.T) {
        n = p.T + " " + n;
    }
    if (n && su && p.J) {
        n += " " + p.J;
    }
    if ((!n) && ah) {
        n = p.h;
    }
    return n;
}

function FIT(t, g) {
    if (t == "b") {
        var gs = {"f": _t("Biological daughter"), "m": _t("Biological son"), "": _t("Biological child")};
    } else {
        if (t == "a") {
            var gs = {"f": _t("Adopted daughter"), "m": _t("Adopted son"), "": _t("Adopted child")};
        } else {
            if (t == "f") {
                var gs = {"f": _t("Foster daughter"), "m": _t("Foster son"), "": _t("Foster child")};
            } else {
                if (t == "s") {
                    var gs = {"f": _t("Stepdaughter"), "m": _t("Stepson"), "": _t("Stepchild")};
                } else {
                    if (t == "g") {
                        var gs = {"f": _t("Goddaughter"), "m": _t("Godson"), "": _t("Godchild")};
                    } else {
                        var gs = {"f": _t("Daughter"), "m": _t("Son"), "": _t("Child")};
                    }
                }
            }
        }
    }
    return gs[g] || gs[""];
}

function FPT(t, g, dg, s) {
    if (t == "b") {
        var gs = {"f": _t("Biological mother"), "m": _t("Biological father"), "": _t("Biological parent")};
    } else {
        if (t == "a") {
            var gs = {"f": _t("Adopted mother"), "m": _t("Adopted father"), "": _t("Adopted parent")};
        } else {
            if (t == "f") {
                var gs = {"f": _t("Foster mother"), "m": _t("Foster father"), "": _t("Foster parent")};
            } else {
                if (t == "s") {
                    var gs = {"f": _t("Stepmother"), "m": _t("Stepfather"), "": _t("Stepparent")};
                } else {
                    if (t == "g") {
                        var gs = {"f": _t("Godmother"), "m": _t("Godfather"), "": _t("Godparent")};
                    } else {
                        if (s == 2) {
                            var gs = {"f": _t("Second mother"), "m": _t("Second father"), "": _t("Second parent")};
                        } else {
                            if (s == 3) {
                                var gs = {"f": _t("Third mother"), "m": _t("Third father"), "": _t("Third parent")};
                            } else {
                                var gs = {"f": _t("Mother"), "m": _t("Father"), "": _t("Parent")};
                            }
                        }
                    }
                }
            }
        }
    }
    return gs[g] || (((g || "").charAt(0) == "o") ? gs[""] : gs[dg]) || gs[""];
}

function FST(b, g) {
    if (b) {
        var gs = {"f": _t("Sister"), "m": _t("Brother"), "": _t("Sibling")};
    } else {
        var gs = {"f": _t("Half sister"), "m": _t("Half brother"), "": _t("Half sibling")};
    }
    return gs[g] || gs[""];
}

function FET(g) {
    var gs = {"f": _t("Stepsister"), "m": _t("Stepbrother"), "": _t("Stepsibling")};
    return gs[g] || gs[""];
}

function FPO(p, o) {
    var d = FPD(p.b);
    if ((!o) && d.y) {
        return d.y * 10000 + d.m * 100 + d.d;
    }
    if (p.O && !isNaN(parseFloat(p.O))) {
        return parseFloat(p.O);
    }
    return null;
}

function FBO(f, os, ys, o) {
    var lb = null;
    var ub = null;
    for (var j = 0; j < os.length; j++) {
        var od = FPO(f[os[j]], o);
        if (od !== null) {
            lb = lb ? Math.max(lb, od) : od;
        }
    }
    for (var j = 0; j < ys.length; j++) {
        var od = FPO(f[ys[j]], o);
        if (od !== null) {
            ub = ub ? Math.min(ub, od) : od;
        }
    }
    if (lb) {
        if (ub) {
            var o = Math.round((lb + ub) / 2);
            return ((o > lb) && (o < ub)) ? o : ((lb + ub) / 2);
        } else {
            return lb + 10000;
        }
    } else {
        return ub ? (ub - 10000) : (parseInt(FNS()) - 1000000);
    }
}

function FCC(p1, p2) {
    var b1 = FPO(p1);
    var b2 = FPO(p2);
    if (b1 == b2) {
        b1 = FPO(p1, true);
        b2 = FPO(p2, true);
    }
    if (b1 === null) {
        b1 = 99999999;
    }
    if (b2 === null) {
        b2 = 99999999;
    }
    if (b1 < b2) {
        return -1;
    } else {
        if (b2 < b1) {
            return 1;
        }
    }
    if (p1.ai < p2.ai) {
        return -1;
    } else {
        if (p1.ai > p2.ai) {
            return 1;
        }
    }
    return 0;
}

function FSC(f, ci) {
    var cp = [];
    for (var j = 0; j < ci.length; j++) {
        cp[cp.length] = f[ci[j]];
    }
    cp.sort(FCC);
    ci.length = 0;
    for (var j = 0; j < cp.length; j++) {
        ci[ci.length] = cp[j].i;
    }
}

function FPP(p, i) {
    var x = null;
    if (i == p.m1) {
        x = "f1";
    } else {
        if (i == p.f1) {
            x = "m1";
        } else {
            if (i == p.m2) {
                x = "f2";
            } else {
                if (i == p.f2) {
                    x = "m2";
                } else {
                    if (i == p.m3) {
                        x = "f3";
                    } else {
                        if (i == p.f3) {
                            x = "m3";
                        }
                    }
                }
            }
        }
    }
    return x;
}

function FNB(p, pi) {
    if ((pi == p.m1) || (pi == p.f1)) {
        if (p.t1) {
            return (p.t1 == "a") || (p.t1 == "f") || (p.t1 == "s") || (p.t1 == "g");
        } else {
            if ((p.t2 == "b") || (p.t3 == "b")) {
                return true;
            } else {
                return false;
            }
        }
    }
    if ((pi == p.m2) || (pi == p.f2)) {
        if (p.t2) {
            return (p.t2 == "a") || (p.t2 == "f") || (p.t2 == "s") || (p.t2 == "g");
        } else {
            if ((p.t1 == "b") || (p.t3 == "b")) {
                return true;
            } else {
                return false;
            }
        }
    }
    if ((pi == p.m3) || (pi == p.f3)) {
        if (p.t3) {
            return (p.t3 == "a") || (p.t3 == "f") || (p.t3 == "s") || (p.t3 == "g");
        } else {
            if ((p.t1 == "b") || (p.t2 == "b")) {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}

function FSB(p, s) {
    return FNB(p, p["m" + s] || p["f" + s]);
}

function FPG(p, pi) {
    if ((pi == p.m1) || (pi == p.f1)) {
        return (p.t1 == "g");
    }
    if ((pi == p.m2) || (pi == p.f2)) {
        return (p.t2 == "g");
    }
    if ((pi == p.m3) || (pi == p.f3)) {
        return (p.t3 == "g");
    }
    return false;
}

function FLA(f, i) {
    var ac = [];
    var c = f[i].c;
    for (var j = 0; j < c.length; j++) {
        var cp = f[c[j]];
        var pf = FPP(cp, i);
        var oi = pf ? cp[pf] : null;
        if (!(oi && f[oi])) {
            FAA(ac, c[j]);
        }
    }
    FSC(f, ac);
    return ac;
}

function FLP(f, i, pi) {
    var tc = [];
    var c = f[i].c;
    for (var j = 0; j < c.length; j++) {
        var cp = f[c[j]];
        var pf = FPP(cp, i);
        if (pf && cp[pf] == pi) {
            FAA(tc, c[j]);
        }
    }
    FSC(f, tc);
    return tc;
}

function FLS(f, i, s, t) {
    var bs = [];
    var mi = f[i]["m" + s];
    var fi = f[i]["f" + s];
    var cs = {};
    if (mi && f[mi]) {
        var c = f[mi].c;
        for (var j = 0; j < c.length; j++) {
            cs[c[j]] = true;
        }
    }
    if (fi && f[fi]) {
        var c = f[fi].c;
        for (var j = 0; j < c.length; j++) {
            cs[c[j]] = true;
        }
    }
    for (var j in cs) {
        if (j != i) {
            if (FTM(f[j], mi, fi)) {
                if ((!t) || (f[i].b == f[j].b)) {
                    FAA(bs, j);
                }
            }
        }
    }
    FSC(f, bs);
    return bs;
}

function FLC(p1, p2) {
    var ps = [p1, p2];
    var ts = [{}, {}];
    var c = {};
    for (var j = 0; j < 2; j++) {
        var p = ps[j];
        if (p.m) {
            ts[j][p.m] = p.V || "";
        }
        if (p.f) {
            ts[j][p.f] = p.V || "";
        }
        if (p.X) {
            ts[j][p.X] = p.W || "";
        }
        if (p.Y) {
            ts[j][p.Y] = p.W || "";
        }
        if (p.K) {
            ts[j][p.K] = p.Q || "";
        }
        if (p.L) {
            ts[j][p.L] = p.Q || "";
        }
    }
    for (var i in ts[0]) {
        if (i in ts[1]) {
            c[i] = "" + ts[0][i] + ts[1][i];
        }
    }
    return c;
}

function FTM(p, mi, fi) {
    return ((p.m1 == mi) && (p.f1 == fi)) || ((p.m1 == fi) && (p.f1 == mi)) || ((p.m2 == mi) && (p.f2 == fi)) || ((p.m2 == fi) && (p.f2 == mi)) || ((p.m3 == mi) && (p.f3 == fi)) || ((p.m3 == fi) && (p.f3 == mi));
}

function FTP(f, p, si, sp) {
    var cp = (p.s == si) || (p.ep && (p.ep[si] == 2)) || (p.z == 1);
    var pl = (p.z != 1) && (sp.z == 1);
    var pw = (p.z == 1) && (sp.z != 1);
    var pz = p.zp && p.zp[si];
    var gpi = new String(p.gp ? p.gp[si] : "");
    var s = "";
    var cm = -FGM(sp.g);
    if (((gpi == "m") && (cp || pl)) || (gpi == "s")) {
        if (pl) {
            s = cm ? ((cm > 0) ? _t("Late wife") : _t("Late husband")) : _t("Late spouse");
        } else {
            if (pw) {
                s = cm ? ((cm > 0) ? _t("Widow") : _t("Widower")) : _t("Widowed spouse");
            } else {
                s = cm ? ((cm > 0) ? _t("Wife") : _t("Husband")) : _t("Spouse");
            }
        }
        if (gpi == "s") {
            s = _t("$ (separated)", s);
        }
    } else {
        if ((gpi == "m") || (gpi == "d") || (gpi == "a")) {
            s = cm ? ((cm > 0) ? _t("Ex-wife") : _t("Ex-husband")) : _t("Ex-spouse");
        } else {
            if ((gpi == "e") && (cp || pl)) {
                if (pl) {
                    s = (cm > 0) ? _t("Late fiancee") : _t("Late fiance");
                } else {
                    s = (cm > 0) ? _t("Fiancee") : _t("Fiance");
                }
            } else {
                if (gpi == "e") {
                    s = (cm > 0) ? _t("Ex-fiancee") : _t("Ex-fiance");
                } else {
                    if ((gpi == "r") && FAD(pz) && (!((p.z == 1) && (p.d == pz))) && (!((sp.z == 1) && (sp.d == pz)))) {
                        s = _t("Ex-partner");
                    } else {
                        s = pl ? _t("Late partner") : (cp ? _t("Partner") : _t("Ex-partner"));
                    }
                }
            }
        }
    }
    return s;
}

function FCP(f, fi, ti, m, a) {
    var p = {};
    var s = {};
    var i = null;
    p[fi] = ".";
    s[fi] = true;
    while (!p[ti]) {
        var sn = {};
        if (a) {
            for (var si in s) {
                var pc = f[si].pc;
                for (var i in pc) {
                    if (i && f[i] && !p[i]) {
                        p[i] = "p" + si;
                        sn[i] = true;
                    }
                }
            }
        }
        for (var si in s) {
            var c = f[si].c;
            for (var j = 0; j < c.length; j++) {
                i = c[j];
                if (i && f[i] && !p[i]) {
                    p[i] = (FPG(f[i], si) ? "g" : "o") + si;
                    sn[i] = true;
                }
            }
        }
        for (var si in s) {
            var tp = [];
            var fsi = f[si];
            var tp = [(fsi.V == "g") ? null : fsi.m, (fsi.V == "g") ? null : fsi.f, (fsi.W == "g") ? null : fsi.X, (fsi.W == "g") ? null : fsi.Y, (fsi.Q == "g") ? null : fsi.K, (fsi.Q == "g") ? null : fsi.L];
            for (var j = 0; j < tp.length; j++) {
                var pi = tp[j];
                if (pi && f[pi]) {
                    var c = f[pi].c;
                    for (var k = 0; k < c.length; k++) {
                        i = c[k];
                        if (i && f[i] && !p[i]) {
                            p[i] = "s" + si;
                            sn[i] = true;
                        }
                    }
                }
            }
        }
        for (var si in s) {
            var t = (f[si].V == "g") ? "d" : "a";
            i = f[si].m;
            if (i && f[i] && !p[i]) {
                p[i] = t + si;
                sn[i] = true;
            }
            i = f[si].f;
            if (i && f[i] && !p[i]) {
                p[i] = t + si;
                sn[i] = true;
            }
        }
        for (var si in s) {
            var t = (f[si].W == "g") ? "d" : "a";
            i = f[si].X;
            if (i && f[i] && !p[i]) {
                p[i] = t + si;
                sn[i] = true;
            }
            i = f[si].Y;
            if (i && f[i] && !p[i]) {
                p[i] = t + si;
                sn[i] = true;
            }
        }
        for (var si in s) {
            var t = (f[si].Q == "g") ? "d" : "a";
            i = f[si].K;
            if (i && f[i] && !p[i]) {
                p[i] = t + si;
                sn[i] = true;
            }
            i = f[si].L;
            if (i && f[i] && !p[i]) {
                p[i] = t + si;
                sn[i] = true;
            }
        }
        s = sn;
        sc = 0;
        for (var j in s) {
            sc++;
        }
        if (!sc) {
            break;
        }
    }
    var r = [{"t": ".", "i": ti}];
    if (p[ti]) {
        i = ti;
        while (true) {
            var ni = p[i].substring(1);
            if (!ni) {
                break;
            }
            r[r.length] = {"t": p[i].substring(0, 1), "i": ni};
            i = ni;
        }
    } else {
        r[r.length] = {"t": "x", "i": fi};
    }
    r = r.reverse();
    return m ? FMP(f, r) : r;
}

function FMP(f, r) {
    for (var j = 0; j < (r.length - 1); j++) {
        r[j].p = [{"i": r[j].i, "t": r[j].t}];
    }
    for (var j = 0; j < (r.length - 1); j++) {
        if ((r[j].t == "a")) {
            var d = 1;
            while (r[j + d] && (r[j + d].t == "a")) {
                d++;
            }
            if (r[j + d] && (r[j + d].t == "s")) {
                var ic = true;
                for (var k = 1; k <= d; k++) {
                    if (!(r[j + d + k] && (r[j + d + k].t == "o"))) {
                        ic = false;
                        break;
                    }
                }
                if (ic) {
                    FME(r, j + 1, d * 2, "c" + d);
                }
            }
        }
    }
    for (var j = 0; j < (r.length - 1); j++) {
        if (r[j].t == "a") {
            var d = 1;
            while (r[j + 1] && (r[j + 1].t == "a")) {
                FME(r, j + 1, 1, "a" + (++d));
            }
            if (r[j + 1] && (r[j + 1].t == "s")) {
                FME(r, j + 1, 1, "u" + d);
                if (FIM(f, r, j + 1)) {
                    FME(r, j + 1, 1, "u" + d);
                }
            } else {
                if ((d == 1) && FIM(f, r, j - 1)) {
                    FME(r, j, 1, "ai");
                }
            }
        }
        if (r[j].t == "o") {
            var d = 1;
            while (r[j + 1] && (r[j + 1].t == "o")) {
                FME(r, j + 1, 1, "o" + (++d));
            }
            if (r[j - 1] && (r[j - 1].t == "s")) {
                FME(r, j, 1, "n" + d);
                if (FIM(f, r, j - 2)) {
                    FME(r, j - 1, 1, "n" + d);
                }
            } else {
                if ((d == 1) && FIM(f, r, j + 1)) {
                    FME(r, j + 1, 1, "oi");
                }
            }
        }
    }
    for (var j = 0; j < (r.length - 1); j++) {
        if (FIM(f, r, j)) {
            if (r[j + 1] && (r[j + 1].t == "s")) {
                FME(r, j + 1, 1, "si");
                if (FIM(f, r, j + 1)) {
                    FME(r, j + 1, 1, "si");
                }
            } else {
                if (r[j - 1] && (r[j - 1].t == "s")) {
                    FME(r, j, 1, "si");
                }
            }
        }
    }
    for (var j = 0; j < (r.length - 1); j++) {
        if (r[j].p.length == 1) {
            r[j].p = null;
        }
    }
    return r;
}

function FME(r, i, n, t) {
    FAP(r, i, n, r[i - 1].p);
    r[i - 1].t = t;
    r.splice(i, n);
}

function FAP(r, i, n, p) {
    for (var j = i; j < (i + n); j++) {
        if (r[j].p) {
            FAP(r[j].p, 0, r[j].p.length, p);
        } else {
            p[p.length] = {"i": r[j].i, "t": r[j].t};
        }
    }
}

function FIM(f, r, j) {
    if (r[j] && r[j + 1] && (r[j].t == "p")) {
        var jp = f[r[j].i];
        var gjp = (jp && jp.gp) ? jp.gp[r[j + 1].i] : "";
        if ((gjp == "m") || (gjp == "s")) {
            return true;
        }
    }
    return false;
}

function FSE(d) {
    var p = FPS(d || "", true);
    var e = null;
    if ((p.v != "bef") && p.y1) {
        e = {d: p.d1, m: p.m1, y: p.y1};
        if (!e.m) {
            e.m = 1;
        }
        if (!e.d) {
            e.d = 1;
        }
        if (p.v == "app") {
            e.a = true;
        }
    }
    return e;
}

function FSL(d) {
    var p = FPS(d || "", true);
    var l = null;
    if (p.v == "bet") {
        if (p.y2) {
            l = {d: p.d2, m: p.m2, y: p.y2};
        }
    } else {
        if (p.v != "aft") {
            if (p.y1) {
                l = {d: p.d1, m: p.m1, y: p.y1};
                if (p.v == "app") {
                    l.a = true;
                }
            }
        }
    }
    if (l) {
        if (!l.m) {
            l.m = 12;
        }
        if (!l.d) {
            l.d = new Date(l.y, l.m, 0).getDate();
        }
    }
    return l;
}

function FBA(b, t) {
    if (b && t) {
        var da = (t.d >= b.d);
        var ma = (t.m > b.m) || ((t.m == b.m) && da);
        var ba = (b.y < 0) && (t.y > 0);
        var y = t.y - b.y - (ma ? 0 : 1) - (ba ? 1 : 0);
        if (y > 0) {
            var a = {"t": "y", "v": y};
        } else {
            var m = (t.y * 12 + t.m) - (b.y * 12 + b.m) - (ba ? 12 : 0) - (da ? 0 : 1);
            if (m > 0) {
                var a = {"t": "m", "v": m};
            } else {
                var d = Math.round((new Date(t.y + 10000, t.m - 1, t.d) - new Date(b.y + 10000, b.m - 1, b.d)) / 86400000);
                if (d > 0) {
                    var a = {"t": "d", "v": d};
                } else {
                    var a = {"t": "d", "v": 0};
                }
            }
        }
        a.a = b.a || t.a;
        return a;
    } else {
        return null;
    }
}

function FAS(a, o) {
    var m = {
        "d": o ? _i("# day/s old") : _i("# day/s"),
        "m": o ? _i("# month/s old") : _i("# month/s"),
        "y": o ? _i("# year/s old") : _i("# year/s")
    };
    return a ? (m[a.t] ? _t(m[a.t], a.v) : a.v) : null;
}

function FDR(b, t, o) {
    var l = FBA(FSL(b), FSE(t));
    var u = FBA(FSE(b), FSL(t));
    var s = "";
    if (l) {
        if (u && (l.t == u.t)) {
            if (l.v == u.v) {
                s = FAS(u, o);
            } else {
                s = l.v + "-" + FAS(u, o);
            }
        } else {
            if (u) {
                s = FAS(l, o) + " - " + FAS(u, o);
            } else {
                s = _t("at least $", FAS(l, o));
            }
        }
    } else {
        if (u) {
            s = _t("at most $", FAS(u, o));
        }
    }
    if ((l && l.a) || (u && u.a)) {
        s = _t("approx $", s);
    }
    return s;
}
