function NSS(s) {
    SS("sidehide", s);
    SS("sideshow", !s);
}

function NKS(s) {
    SH("keylinktext", s ? "Hide" : "Show");
}

function NSD(d) {
    GE("detail_0p").checked = true;
    GE("detail_0lq").checked = true;
    var ds = (d + "").split(".");
    var db = {};
    for (var i = 0; i < ds.length; i++) {
        db[ds[i]] = true;
        var e = GE("detail_" + ds[i]);
        if (e) {
            e.checked = (ds[i].substr(0, 1) == "0") ? false : true;
        }
    }
    SD("detail_pm", db["0p"]);
    SD("detail_N", db["0p"]);
    SD("detail_TJ", db["0p"]);
    SD("detail_0lq", db["0p"]);
    SS("otherage", db["age"]);
}

function NGR() {
    var c = {};
    for (var j = 0; j < Ecf.length; j++) {
        var f = Ecf[j];
        c[f] = GV("color" + f);
    }
    return c;
}

function NGL() {
    var l = {};
    for (var j = 0; j < Elf.length; j++) {
        var f = Elf[j];
        l[f] = GV("line" + f);
    }
    return l;
}

function NGD() {
    var v = GV("otherage");
    var p = FPD(v);
    return p.y ? v : FNS();
}

function NGB() {
    return parseInt(GO("showbirthname"));
}

function NGS() {
    return parseInt(GO("showsurnamefirst"));
}

function NGM() {
    return parseInt(GO("showmaleleft"));
}

function NGC() {
    return parseInt(GO("showcousins"));
}

function NGH() {
    return parseInt(GO("showchildren"));
}

function NGA() {
    return parseInt(GO("showparents"));
}

function NSP(i) {
    ST("backtotext", (i == GV("personid")) ? _t("Back to me") : (Efa[i] ? _t("Back to $", Efa[i].h) : _t("Back to start")));
}

function NRT() {
}

function NPF() {
    var r = GE("findfield").getBoundingClientRect();
    GE("findlist").style.left = r.left + "px";
}

function NRR() {
    var e = GE("navrow");
    e.className = "";
    for (s = 1; s <= 5; s++) {
        if (e.scrollWidth <= e.offsetWidth) {
            break;
        }
        e.className += "nshrink" + s + " ";
    }
}

function NCP(i) {
    GE("findfield").placeholder = _t("# people", i);
}

function NFF() {
    NPF();
    NUF(null);
    SS("findlist", true);
    GE("findlist").onclick = function (e) {
        var i = e.target.id || e.target.parentElement.id;
        if (i.substring(0, 5) == "list_") {
            ESP(i.substring(5), true);
        }
    };
}

function NHF() {
    SS("findlist", false);
}

function NIF() {
    SS("findlist", true);
    setTimeout("NUF(" + GV("findfield").length + ");", 100);
}

function NUF(vl) {
    var ev = GV("findfield");
    if ((vl !== null) && (vl != ev.length)) {
        return;
    }
    NUL(GE("findlist"), ev, null, null, false);
}

function NUL(e, sv, ai, si, no) {
    var ss = sv.trim().toLowerCase().split(/[ \-]/);
    var bn = NGB();
    var bn1 = (bn == 1);
    var sf = NGS();
    if (ai === null) {
        ai = [];
        for (var j in Efa) {
            ai[ai.length] = j;
        }
    }
    var jn = [];
    if (no) {
        var m = _t("(none)");
        var i = true;
        for (var k = 0; k < ss.length; k++) {
            if (m.indexOf(ss[k]) < 0) {
                i = false;
                break;
            }
        }
        if (i) {
            jn[jn.length] = {i: "", n: m};
        }
    }
    for (var j = 0; j < ai.length; j++) {
        var p = Efa[ai[j]];
        var n = (FDN(p, true, 2, sf, bn1, true, true, true, true) + FYS(p)).trim();
        var m = n.toLowerCase();
        var i = true;
        for (var k = 0; k < ss.length; k++) {
            if (m.indexOf(ss[k]) < 0) {
                i = false;
                break;
            }
        }
        if (i) {
            var sn1 = (bn1 ? (p.q || p.l) : (p.l || p.q)) || "";
            var sn2 = (sn1 ? (bn1 ? p.l : p.q) : "") || "";
            if (sn1 == sn2) {
                sn2 = "";
            }
            jn[jn.length] = {i: ai[j], l: sn1, q: sn2, p: (p.p || ""), n: n};
        }
    }
    jn.sort(NSB);
    var exp = NSR(ss);
    var h = "";
    for (var j = 0; j < jn.length; j++) {
        if (jn[j].n.length) {
            h += "<a href=\"#\" id=\"list_" + jn[j].i + "\" onclick=\"return false;\">" + NSE(jn[j].n, exp) + "</a>";
        }
    }
    if (!h) {
        h = "<div>" + _h("No matches found") + "</div>";
    }
    e.innerHTML = h;
    if (locale_rtl) {
        e.dir = "rtl";
    }
    var i = e.querySelector("#list_" + (si || ""));
    if (i) {
        i.className = "snamesel";
        e.scrollTop = i.offsetTop - (i.offsetHeight + e.offsetHeight) / 2;
    }
}

function NSR(ss) {
    var esc = /[-\/\\^$*+?.()|[\]{}]/g;
    var reg = "";
    for (var k = 0; k < ss.length; k++) {
        if (ss[k].length) {
            reg += EH(ss[k]).replace(esc, "\\$&") + "|";
        }
    }
    if (reg.length) {
        var exp = new RegExp(reg.slice(0, -1), "ig");
    } else {
        var exp = null;
    }
    return exp;
}

function NSE(t, exp) {
    var h = EH(t);
    if (exp) {
        h = h.replace(exp, "<u>$&</u>");
    }
    return h;
}

function NSB(a, b) {
    if (a.l < b.l) {
        return -1;
    } else {
        if (b.l < a.l) {
            return 1;
        }
    }
    if (a.q < b.q) {
        return -1;
    } else {
        if (b.q < a.q) {
            return 1;
        }
    }
    if (a.p < b.p) {
        return -1;
    } else {
        if (b.p < a.p) {
            return 1;
        }
    }
    if (a.n < b.n) {
        return -1;
    } else {
        if (b.n < a.n) {
            return 1;
        }
    }
    return 0;
}