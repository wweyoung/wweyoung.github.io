var Btc = {pd: 4};

function BMG(f, i, si, pg) {
    var eg = 0;
    var p = f[i];
    if (pg["m"] && si) {
        if (p.gp && p.mp) {
            var t = p.gp[si];
            if (((t == "m") || (t == "s") || (t == "d") || (t == "a")) && FAD(p.mp[si])) {
                eg = Math.max(eg, 0.625);
            }
        }
    }
    if (pg["w"] && si) {
        if (p.gp && p.wp) {
            var t = p.gp[si];
            if (((t == "m") || (t == "s") || (t == "d") || (t == "a")) && p.wp[si]) {
                eg = Math.max(eg, 1.125);
            }
        }
    }
    if (pg["d"] && si) {
        if (p.gp && p.dp) {
            if ((p.gp[si] == "d") && FAD(p.dp[si])) {
                eg = Math.max(eg, 0.625);
            }
        }
    }
    return 1 + eg;
}

function BGC(f, pi, ci, h, fl, pg, dp, _f) {
    var ds = [], ss = [], gs = [];
    var tw = 0;
    for (var j = 0; j < ci.length; j++) {
        var i = ci[j];
        var p = f[i];
        var d = BGD(f, i, h, fl, pg, dp);
        var pr = (p.m1 == pi) || (p.f1 == pi);
        var gr = FNB(p, pi);
        if ((p.m2 || p.f2) && (p.m2 != pi) && (p.f2 != pi) && ((!_f) || ((p.m2 != _f) && (p.f2 != _f)))) {
            TAL(d, pr ? 0.05 : -0.05, 0, pr ? 0.05 : -0.05, -0.55, gr ? "b" : "c");
        }
        if ((p.m3 || p.f3) && (p.m3 != pi) && (p.f3 != pi) && ((!_f) || ((p.m3 != _f) && (p.f3 != _f)))) {
            TAL(d, pr ? 0.1 : -0.1, 0, pr ? 0.1 : -0.1, -0.6, gr ? "b" : "c");
        }
        ds[ds.length] = d;
        ss[ss.length] = !pr;
        gs[gs.length] = gr;
        tw += d.w;
    }
    var _1a = ds[0].l;
    var lr = ds[ds.length - 1].r;
    return {ds: ds, ss: ss, gs: gs, tw: tw, fl: _1a, lr: lr, aw: (tw + _1a - lr)};
}

function BDC(d, dd, cx, cy, vx, vy, yo) {
    var ds = dd.ds;
    var gs = dd.gs;
    var aw = dd.aw;
    var ax = [];
    var x = cx - aw / 2 + dd.fl;
    for (var j = 0; j < ds.length; j++) {
        var cd = ds[j];
        ax[j] = x - cd.l;
        TAD(d, cd, ax[j], cy);
        x += cd.w;
    }
    BDL(d, vx, ax, vy, cy, gs, yo);
}

function BDL(d, vx, ax, vy, cy, gs, yo) {
    var sb = false;
    var sg = false;
    var _33 = vx, _34 = vx;
    var _35 = vx, _36 = vx;
    var ay = (vy + cy) / 2 + yo;
    for (var j = 0; j < gs.length; j++) {
        var x = ax[j];
        if (gs[j]) {
            sg = true;
            _34 = Math.min(_34, x);
            _36 = Math.max(_36, x);
        } else {
            sb = true;
            _33 = Math.min(_33, x);
            _35 = Math.max(_35, x);
        }
        TAL(d, x, ay, x, cy, gs[j] ? "C" : "B");
    }
    var _3a = Math.min(_33, _34);
    var _3b = Math.max(_35, _36);
    for (var g = 0; g <= 1; g++) {
        if (g ? sg : sb) {
            var s = g ? "C" : "B";
            if ((vx < _3a) || (vx > _3b)) {
                var x = (vx < _3a) ? _3a : _3b;
                var y = (vy + ay / 2);
                TAL(d, vx, vy, vx, y, s);
                TAL(d, vx, y, x, y, s);
                TAL(d, x, y, x, ay, s);
            } else {
                TAL(d, vx, vy, vx, ay, s);
            }
            TAL(d, g ? _34 : _33, ay, g ? _36 : _35, ay, s);
        }
    }
}

function BDD(d, f, i, si, x, y, pd, sr, da) {
    var p = f[i];
    TAE(d, i, p, x, y);
    if (pd) {
        if (p.m1 || p.f1) {
            TAL(d, x, y, x, y - 0.425, FSB(p, 1) ? "c" : "b");
        }
        if (p.m2 || p.f2) {
            TAL(d, x + 0.05, y, x + 0.05, y - 0.45, FSB(p, 2) ? "c" : "b");
        }
    }
    if ((sr !== null) && (p.cp > ((si && p.pc[si]) ? 1 : 0))) {
        TAL(d, x, y, x + (sr ? 0.475 : -0.475), y, (p.s && f[p.s] && p.s != si) ? "s" : "p");
    }
    if (da) {
        BAC(d, f, i, x, y);
    }
}

function BAC(d, f, i, x, y) {
    var ac = FLA(f, i);
    if (ac.length) {
        var sb = false;
        var sg = false;
        for (var j = 0; j < ac.length; j++) {
            if (FNB(f[ac[j]], i)) {
                sg = true;
            } else {
                sb = true;
            }
        }
        if (sb) {
            TAL(d, x, y, x, y + 0.35, "b");
        }
        if (sg) {
            TAL(d, x, y, x, y + 0.35, "c");
        }
    }
}

function BDA(d, f, i, si, h, dr, fx, cy, fl, pg, dp, _5d, pcx, _5f) {
    var p = f[i];
    var ps = FSS(p, si, false);
    var yt = 0;
    for (var pi in ps) {
        yt++;
    }
    var ot = Math.min(0.1 * (yt - 1), 0.15);
    var ly = cy + ot / 2;
    var lo = (yt > 1) ? (ot / (yt - 1)) : 0;
    var uo = 0.1 / (yt + 1);
    var uy = cy - 0.5 + uo * (yt + 1);
    var ax = [];
    for (var pi in ps) {
        if (dp.p[i + "-" + pi]) {
            TAL(d, fx, ly, fx + (dr ? 0.475 : -0.475), ly, FUP(f, i, pi) ? "s" : "p");
        } else {
            dp.p[i + "-" + pi] = true;
            dp.p[pi + "-" + i] = true;
            var pc = FLP(f, i, pi);
            if (_5d) {
                ArrayRemoveAll(pc, _5d);
            }
            BDH(d, f, i, pi, pc, h, dr, fx, cy, ly, uy, fl, pg, dp, ax, pcx, _5f);
        }
        ly -= lo;
        uy -= uo;
    }
}

function BDH(d, f, i, pi, ci, h, dr, fx, cy, ly, uy, fl, pg, dp, ax, pcx, _7b) {
    var g = BMG(f, i, pi, pg);
    if (ci.length) {
        var ds = BGC(f, i, ci, h, fl, pg, dp, _7b);
        var cx = dr ? (d.r - ds.fl + ds.aw / 2) : (d.l - ds.lr - ds.aw / 2);
        var px = cx + (dr ? 0.5 : -0.5);
        BDC(d, ds, cx, cy + 1, (pi && f[pi]) ? cx : fx, ly, (pi === null) ? -0.15 : 0);
    } else {
        var px = dr ? (d.r) : (d.l - 1);
    }
    if (pi) {
        pcx[pi] = px - (dr ? 0.5 : -0.5);
    }
    if (pi && f[pi]) {
        var s = FUP(f, i, pi) ? "S" : "P";
        if (ax.length) {
            var xo = (dr ? 0.5 : -0.5);
            var x1 = ax[0] - xo * (1 + (ax.length) / 10);
            var x2 = ax[ax.length - 1] + xo + xo / 10;
            TAL(d, fx, ly, x1, ly, s);
            TAL(d, x1, ly, x1, uy, s);
            TAL(d, x1, uy, x2, uy, s);
            TAL(d, x2, uy, x2, ly, s);
            TAL(d, x2, ly, px, ly, s);
            if (Math.abs(px - x2) >= (g - 1)) {
                TAP(d, i, pi, x2 + (dr ? -0.5 : 0.5), px, ly, false);
            } else {
                TAP(d, i, pi, x2 + (dr ? -1.5 : -0.5), x2 + (dr ? 0.5 : 1.5), uy, true);
            }
        } else {
            TAL(d, fx, ly, px, ly, s);
            TAP(d, i, pi, fx, px, ly, true);
        }
        BDD(d, f, pi, i, px, cy, true, dr, true);
        ax[ax.length] = px;
    }
}

function BSS(d, f, p, si, h, dr, cy, fl, pg, dp) {
    var li = [], ri = [];
    for (var j = 0; j < si.length; j++) {
        var r = (dr === null) ? (FCC(p, f[si[j]]) < 0) : dr;
        if (r) {
            ri[ri.length] = si[j];
        } else {
            li[li.length] = si[j];
        }
    }
    var apl = BDS(d, f, p, li, h, false, cy, fl, pg, dp);
    var apr = BDS(d, f, p, ri, h, true, cy, fl, pg, dp);
    var al = apl[""];
    var ar = apr[""];
    var ap = apl;
    for (var j in apr) {
        ap[j] = apr[j];
    }
    return {al: al, ar: ar, ap: ap, ll: li.length, rl: ri.length};
}

function BDS(d, f, p, si, h, dr, cy, fl, pg, dp) {
    var al = {"": 0};
    for (var j = 0; j < si.length; j++) {
        var k = dr ? j : (si.length - j - 1);
        var sd = BGD(f, si[k], h, fl, pg, dp);
        if (sd.h == 1) {
            var x = dr ? (d.yr[cy] - sd.l) : (d.yl[cy] - sd.r);
        } else {
            var x = dr ? (d.r - sd.l) : (d.l - sd.r);
        }
        TAD(d, sd, x, cy);
        if (f[si[k]].m2 || f[si[k]].f2) {
            TAL(d, x + 0.05, cy, x + 0.05, cy - 0.45, FNB(f[si[k]], p.m1 || p.f1) ? "b" : "c");
        }
        al[f[si[k]].i] = x;
        al[""] = x;
    }
    return al;
}

function BPS(d, f, pi, oi, ph, h, dr, fx, fl, pg, dp) {
    var p = f[pi];
    if (p.m1 || p.f1) {
        if (p.m2 || p.f2) {
            TAL(d, fx + 0.05, -1, fx + 0.05, -1.45, FSB(p, 2) ? "c" : "b");
        }
        if (ph <= 1) {
            TAL(d, fx, -1, fx, -1.4, FSB(p, 1) ? "c" : "b");
        } else {
            var gs = [FNB(p, p.m1 || p.f1)];
            var ax = [fx];
            var bx = fx;
            var od = oi && f[oi] && (f[oi].f1 || f[oi].m1);
            if (h > 0) {
                var bs = FLS(f, pi, 1);
                if (bs.length) {
                    if (od) {
                        var aa = BSS(d, f, p, bs, h - 1, dr, -1, fl, pg, dp);
                    } else {
                        var aa = BSS(d, f, p, bs, h - 1, null, -1, fl, pg, dp);
                        var al = aa.ll ? aa.al : fx;
                        var ar = aa.rl ? aa.ar : fx;
                        var bx = (al + ar) / 2;
                        if (Math.abs(bx - fx) > Btc.pd) {
                            bx = fx + 0.5 * (aa.rl - aa.ll);
                        }
                    }
                    var ap = aa.ap;
                    for (var j = 0; j < bs.length; j++) {
                        gs[gs.length] = FNB(f[bs[j]], p.m1 || p.f1);
                        ax[ax.length] = ap[bs[j]];
                    }
                }
            }
            var ad = BGA(f, pi, ph - 1, od ? dr : null, h <= 0, fl, pg, dp);
            TAD(d, ad, bx, -1);
            if (h > 0) {
                BDL(d, bx + (ad.yl[-1] + ad.yr[-1] - 1) / 2, ax, -2, -1, gs, 0);
            }
        }
    }
}

function BGA(f, i, h, dr, da, fl, pg, dp) {
    var d = TND();
    var p = f[i];
    if ((h > 0) && !dp.a[i]) {
        dp.a[i] = true;
        var x1 = 0;
        var x2 = 0;
        if (p.m1 || p.f1) {
            if (p.m1 && p.f1) {
                var g = BMG(f, p.m1, p.f1, pg);
                if (dr === null) {
                    var m1 = !fl;
                    var d1 = false, d2 = true;
                    x1 -= g / 2;
                } else {
                    var m1 = fl ? (!dr) : dr;
                    var d1 = dr, d2 = dr;
                }
                var i1 = m1 ? p.m1 : p.f1;
                var i2 = m1 ? p.f1 : p.m1;
                TAD(d, BGA(f, i1, h - 1, d1, true, fl, pg, dp), x1, -1);
                BDD(d, f, i1, i2, x1, -1, false, d1, true);
                x2 = d2 ? (d.r + g - 1) : (d.l - g);
                TAD(d, BGA(f, i2, h - 1, d2, true, fl, pg, dp), x2, -1);
                BDD(d, f, i2, i1, x2, -1, false, d2, true);
                TAL(d, x1, -1, x2, -1, FUP(f, i1, i2) ? "S" : "P");
                TAP(d, i1, i2, x1, x2, -1, false);
            } else {
                var pi = p.m1 || p.f1;
                TAD(d, BGA(f, pi, h - 1, dr, true, fl, pg, dp), x1, -1);
                BDD(d, f, pi, null, x1, -1, false, f[pi].g != (fl ? "f" : "m"), false);
            }
            if (da) {
                var gr = FSB(p, 1);
                var x = (x1 + x2) / 2;
                TAL(d, x, -0.5, x, -1, gr ? "C" : "B");
                TAL(d, x, -0.5, 0, -0.5, gr ? "C" : "B");
                TAL(d, 0, -0.5, 0, 0, gr ? "C" : "B");
                var bs = FLS(f, i, 1);
                if (bs.length) {
                    var sl = false;
                    var sr = false;
                    if ((dr === null) || (!p.m1) || (!p.f1)) {
                        for (var j = 0; j < bs.length; j++) {
                            if (FCC(p, f[bs[j]]) < 0) {
                                sr = true;
                            } else {
                                sl = true;
                            }
                        }
                    } else {
                        if (dr) {
                            sr = true;
                        } else {
                            sl = true;
                        }
                    }
                    var lx = x - (sl ? (sr ? 0.05 : 0.1) : 0);
                    TAL(d, lx, -0.5, lx + 0.1, -0.5, gr ? "c" : "b");
                }
            }
        }
    } else {
        if (p.m1 || p.f1) {
            TAL(d, 0, -0.4, 0, 0, FSB(p, 1) ? "c" : "b");
        }
    }
    if (da && (p.m2 || p.f2)) {
        TAL(d, 0.05, -0.45, 0.05, 0, FSB(p, 2) ? "c" : "b");
    }
    return d;
}

function BGD(f, i, h, fl, pg, dp) {
    var p = f[i];
    var d = TND();
    var sr = FSM(f, i, p.es);
    var g = BMG(f, i, p.es, pg);
    if (fl) {
        sr = !sr;
    }
    var sx = sr ? g : -g;
    if (h > 0) {
        TAE(d, i, p, 0, 0);
        var c = p.c.slice();
        if (p.es) {
            ArrayMergeDistinct(c, f[p.es].c);
        }
        var _e3 = [];
        var _e4 = [];
        var _e5 = [];
        var _e6 = [];
        var _e7 = {};
        var _e8 = {};
        for (var j = 0; j < c.length; j++) {
            var ci = c[j];
            var cp = f[ci];
            if ((cp.m1 == i) || (cp.f1 == i)) {
                _e4[_e4.length] = ci;
                if (p.es) {
                    if ((cp.m2 == p.es) || (cp.f2 == p.es)) {
                        _e6[_e6.length] = {j: 2, i: ci};
                    } else {
                        if ((cp.m3 == p.es) || (cp.f3 == p.es)) {
                            _e6[_e6.length] = {j: 3, i: ci};
                        }
                    }
                }
            } else {
                if ((cp.m1 == p.es) || (cp.f1 == p.es)) {
                    _e3[_e3.length] = ci;
                    if ((cp.m2 == i) || (cp.f2 == i)) {
                        _e5[_e5.length] = {j: 2, i: ci};
                    } else {
                        if ((cp.m3 == i) || (cp.f3 == i)) {
                            _e5[_e5.length] = {j: 3, i: ci};
                        }
                    }
                } else {
                    if ((cp.m2 == i) || (cp.f2 == i) || (cp.m3 == i) || (cp.f3 == i)) {
                        _e4[_e4.length] = ci;
                    } else {
                        _e3[_e3.length] = ci;
                    }
                }
            }
        }
        var ac = FLA(f, i);
        ArrayRemoveAll(ac, _e3);
        _e7[""] = 0;
        if (ac.length) {
            if (dp.c[i]) {
                BAC(d, f, i, 0, 0);
            } else {
                dp.c[i] = true;
                var ds = BGC(f, i, ac, h - 1, fl, pg, dp, p.es);
                BDC(d, ds, 0, 1, 0, 0, 0);
            }
        }
        if (p.es) {
            if (dp.p[i + "-" + p.es]) {
                TAL(d, 0, 0, sr ? 0.475 : -0.475, 0, FUP(f, i, p.es) ? "s" : "p");
            } else {
                dp.p[i + "-" + p.es] = true;
                dp.p[p.es + "-" + i] = true;
                var tc = FLP(f, i, p.es);
                ArrayRemoveAll(tc, _e3);
                if (tc.length) {
                    var ds = BGC(f, i, tc, h - 1, fl, pg, dp);
                    if (ac.length) {
                        sx = sr ? Math.max(g, (d.r + (ds.tw - ds.fl - ds.lr) / 2 + 0.5)) : Math.min(-g, (d.l - (ds.tw + ds.lr + ds.fl) / 2 - 0.5));
                        var cx = sr ? (sx - 0.5) : (sx + 0.5);
                    } else {
                        var cx = sr ? (sx - g / 2) : (sx + g / 2);
                    }
                    BDC(d, ds, cx, 1, cx, 0, 0);
                    _e7[p.es] = cx;
                    _e8[i] = cx;
                }
                TAL(d, 0, 0, sx, 0, FUP(f, i, p.es) ? "S" : "P");
                TAP(d, i, p.es, 0, sx, 0, false);
                BDD(d, f, p.es, i, sx, 0, true, null, false);
                _e8[""] = sx;
                var pac = FLA(f, p.es);
                ArrayRemoveAll(pac, _e4);
                if (pac.length) {
                    if (dp.c[p.es]) {
                        BAC(d, f, p.es, sx, 0);
                    } else {
                        dp.c[p.es] = true;
                        var ds = BGC(f, p.es, pac, h - 1, fl, pg, dp);
                        BDC(d, ds, sr ? (d.r + (ds.tw - ds.fl - ds.lr) / 2) : (d.l - (ds.tw + ds.lr + ds.fl) / 2), 1, sx, 0, -0.15);
                    }
                }
                BDA(d, f, p.es, i, h - 1, sr, sx, 0, fl, pg, dp, _e4, _e8, i);
            }
        }
        BDA(d, f, i, p.es, h - 1, !sr, 0, 0, fl, pg, dp, _e3, _e7, p.es);
        for (k = 2; k <= 3; k++) {
            var oxy = (k - 1) * 0.05;
            for (var j = 0; j < _e5.length; j++) {
                if (_e5[j].j == k) {
                    var ci = _e5[j].i;
                    if (d.e[ci]) {
                        var op = (f[ci]["m" + k] == i) ? f[ci]["f" + k] : f[ci]["m" + k];
                        BDL(d, _e7[op || ""] + 0, [d.e[ci].x + oxy], 0, 1, [FSB(f[ci], k)], -oxy);
                    }
                }
            }
            for (var j = 0; j < _e6.length; j++) {
                if (_e6[j].j == k) {
                    var ci = _e6[j].i;
                    if (d.e[ci]) {
                        var op = (f[ci]["m" + k] == p.es) ? f[ci]["f" + k] : f[ci]["m" + k];
                        BDL(d, _e8[op || ""] + 0, [d.e[ci].x + oxy], 0, 1, [FSB(f[ci], k)], -oxy);
                    }
                }
            }
        }
    } else {
        BDD(d, f, i, null, 0, 0, false, sr, true);
    }
    return d;
}

function BGH(f, i) {
    var p = f[i];
    if (p) {
        var hc = p.es;
        var ac = FLA(f, i);
        if (hc && (!p.m1) && (!p.f1) && p.pc[hc] && (p.cp == 1) && (ac.length == 0)) {
            return hc;
        }
    }
    return null;
}

function BFT(f, i, m, ch, ph, oh, fl, pg) {
    var p = f[i];
    var hc = BGH(f, i);
    if (ch && hc && !BGH(f, hc)) {
        var d = TND();
        var od = BFT(f, hc, m, ch, ph, oh, fl, pg);
        TAD(d, od, -od.e[i].x, -od.e[i].y);
        d.e[hc].k = false;
    } else {
        var dp = {a: {}, p: {}, c: {}};
        var d = BGD(f, i, ch, fl, pg, dp);
        if (ph > 0) {
            var px = 0;
            var gs = [FSB(p, 1)];
            var ax = [0];
            var bs = FLS(f, i, 1);
            if (bs.length) {
                var aa = BSS(d, f, p, bs, oh, null, 0, fl, pg, dp);
                px = (aa.al + aa.ar) / 2;
                if (Math.abs(px) > Btc.pd) {
                    px = 0.5 * (aa.rl - aa.ll);
                }
                for (var j = 0; j < bs.length; j++) {
                    gs[gs.length] = FNB(f[bs[j]], p.m1 || p.f1);
                    ax[ax.length] = aa.ap[bs[j]];
                }
            }
            if (p.m1 || p.f1) {
                var mx = px, fx = px;
                var p2 = p.m2 || p.f2;
                var p3 = p.m3 || p.f3;
                BDL(d, px, ax, -1, 0, gs, 0);
                if (p.m1 && p.f1) {
                    dp.p[p.m1 + "-" + p.f1] = true;
                    dp.p[p.f1 + "-" + p.m1] = true;
                    var o = BMG(f, p.m1, p.f1, pg) / 2;
                    mx += (fl ? o : -o);
                    fx += (fl ? -o : o);
                    TAL(d, mx, -1, fx, -1, FUP(f, p.m1, p.f1) ? "S" : "P");
                    TAP(d, p.m1, p.f1, mx, fx, -1, false);
                }
                if (p.m1) {
                    BDD(d, f, p.m1, p.f1, mx, -1, false, p2 ? fl : null, p2);
                }
                if (p.f1) {
                    BDD(d, f, p.f1, p.m1, fx, -1, false, p2 ? (!fl) : null, p2);
                }
                if (p2) {
                    var dr2 = (bs.length == 0) || (aa.ll >= aa.rl);
                    var eu = {};
                    for (j = 2; j <= 3; j++) {
                        var drj = dr2;
                        var mj = p["m" + j];
                        var fj = p["f" + j];
                        if (mj || fj) {
                            var ej = null;
                            var ei = null;
                            var ex = null;
                            var em = false;
                            if (mj && ((fj == p.m1) || (fj == p.f1)) && !eu[fj]) {
                                ej = mj;
                                drj = (fj == p.m1) ? fl : !fl;
                                ei = fj;
                                ex = fx;
                                fj = null;
                                em = true;
                            } else {
                                if (fj && (mj == p.m1) || (mj == p.f1) && !eu[mj]) {
                                    ej = fj;
                                    drj = (fj == p.m1) ? fl : !fl;
                                    ei = mj;
                                    ex = mx;
                                    mj = null;
                                    em = true;
                                } else {
                                    if (!(mj && fj)) {
                                        ej = mj || fj;
                                        if (f[ej].pc[p.m1] && !eu[p.m1]) {
                                            drj = fl;
                                            ei = p.m1;
                                            ex = mx;
                                        } else {
                                            if (f[ej].pc[p.f1] && !eu[p.f1]) {
                                                drj = !fl;
                                                ei = p.f1;
                                                ex = fx;
                                            } else {
                                                ej = null;
                                            }
                                        }
                                    }
                                }
                            }
                            var gr2 = FSB(p, j);
                            var g = ej ? BMG(f, ej, ei, pg) : 1;
                            var m2x = drj ? (d.yr[-1] + g - 1) : (d.yl[-1] - g);
                            var f2x = m2x;
                            if (mj && fj) {
                                var g = BMG(f, mj, fj, pg);
                                m2x += (fl ? (drj ? g : 0) : (drj ? 0 : -g));
                                f2x = m2x + (fl ? -g : g);
                                TAL(d, m2x, -1, f2x, -1, FUP(f, mj, fj) ? "S" : "P");
                                TAP(d, mj, fj, m2x, f2x, -1, false);
                            }
                            var p2x = em ? ((m2x + ex) / 2) : ((m2x + f2x) / 2);
                            var oy = ((j == 2) && p3) ? -0.1 : -0.05;
                            var ox = drj ? (j - 1) * 0.05 : -(j - 1) * 0.05;
                            TAL(d, ox, 0, ox, -0.5 + oy, gr2 ? "C" : "B");
                            TAL(d, ox, -0.5 + oy, p2x, -0.5 + oy, gr2 ? "C" : "B");
                            TAL(d, p2x, -0.5 + oy, p2x, -1, gr2 ? "C" : "B");
                            var bs2 = FLS(f, i, j);
                            if (bs2.length) {
                                TAL(d, p2x, -0.5 + oy, p2x + (drj ? 0.1 : -0.1), -0.5 + oy, gr2 ? "c" : "b");
                            }
                            if (mj) {
                                BDD(d, f, mj, fj, m2x, -1, true, fl, false);
                            }
                            if (fj) {
                                BDD(d, f, fj, mj, f2x, -1, true, !fl, false);
                            }
                            if (ej && ei) {
                                TAL(d, ex, -1, m2x, -1, FUP(f, ej, ei) ? "S" : "P");
                                TAP(d, ej, ei, ex, m2x, -1, false);
                                eu[ei] = true;
                            }
                        }
                    }
                } else {
                    if (p.m1) {
                        var ac = FLA(f, p.m1);
                        if (ac.length && p.f1) {
                            BDH(d, f, p.m1, null, ac, oh, fl, mx, -1, -1, -1, fl, pg, dp, [], {});
                        }
                        BDA(d, f, p.m1, p.f1, oh, fl, mx, -1, fl, pg, dp, [], {});
                    }
                    if (p.f1) {
                        var ac = FLA(f, p.f1);
                        if (ac.length && p.m1) {
                            BDH(d, f, p.f1, null, ac, oh, !fl, fx, -1, -1, -1, fl, pg, dp, [], {});
                        }
                        BDA(d, f, p.f1, p.m1, oh, !fl, fx, -1, fl, pg, dp, [], {});
                    }
                }
                if (p.m1) {
                    BPS(d, f, p.m1, p.f1, ph, oh, fl, mx, fl, pg, dp);
                }
                if (p.f1) {
                    BPS(d, f, p.f1, p.m1, ph, oh, !fl, fx, fl, pg, dp);
                }
            }
        } else {
            if (p.m1 || p.f1) {
                TAL(d, 0, 0, 0, -0.425, FSB(p, 1) ? "c" : "b");
                if (p.m2 || p.f2) {
                    TAL(d, 0.05, 0, 0.05, -0.45, FSB(p, 2) ? "c" : "b");
                }
            }
        }
    }
    d.e[i].k = true;
    if (m && d.e[m]) {
        d.e[m].m = true;
    }
    return d;
}