var Ecf = ["back", "male", "female", "other", "living", "deceased"];
var Elf = ["current", "otherpartner", "biological", "otherparent"];
var Efa = {};
var Eff = {};
var Efo;
var Ewp = null;
var Edt, Eda, Edc, Edm;
var Eve;
var Esd = null;
var Eeq = [];
var Esc = false;
var Ess = "", Eis = "";
var Eec = null;
var Epc = null;
var Esa;
var Edd, Edy, Ece, Eca, Ecd;
var Eed, Eud, Exd, Esf, Eaf;
var Elh, Ech;
var Elb = null;
var Ebi;
var Esb;
var Eoh = null;

function PL() {
    if (!staticMode) {
        CE();
        LF("topform");
    }
    if (hideSidebar) {
        ESI(false);
    }
    if (staticMode || (typeof (XMLHttpRequest) != "undefined")) {
        window.onbeforeunload = EPU;
        var c = GC("zoomfactor");
        var zf = parseFloat((c === null) ? defaultZoom : c);
        SV("showzoom", zf);
        var c = GC("showdetail");
        Esd = (c === null) ? defaultDetail : c;
        NSD(Esd);
        for (var j = 0; j < Ecf.length; j++) {
            var f = Ecf[j];
            var c = GC("color" + f);
            SV("color" + f, (c === null) ? defaultColors[f] : decodeURIComponent(c));
        }
        for (var j = 0; j < Elf.length; j++) {
            var f = Elf[j];
            var c = GC("line" + f);
            SV("line" + f, (c === null) ? defaultLines[f] : decodeURIComponent(c));
        }
        var c = GC("showbirthname");
        SO("showbirthname", (c === null) ? defaultBirthName : c);
        var c = GC("showsurnamefirst");
        SO("showsurnamefirst", (c === null) ? defaultSurnameFirst : c);
        var c = GC("showmaleleft");
        SO("showmaleleft", (c === null) ? defaultMaleLeft : c);
        var c = GC("showcousins");
        SO("showcousins", (c === null) ? defaultCousins : c);
        var c = GC("showchildren");
        SO("showchildren", (c === null) ? defaultChildren : c);
        var c = GC("showparents");
        SO("showparents", (c === null) ? defaultParents : c);
        var c = GC("widthfactor");
        var wf = parseFloat((c === null) ? defaultWidth : c);
        SV("showwidth", wf);
        var c = GC("textsize");
        var tf = parseFloat((c === null) ? defaultTextSize : c);
        SV("textsize", tf);
        var c = GC("otheragedate");
        if (c) {
            EWA(c);
        }
        Ebi = (document.all && (navigator.userAgent.toLowerCase().indexOf("msie") >= 0));
        Esb = (navigator.userAgent.toLowerCase().indexOf("safari") >= 0);
        TIS(GE("treemargin"));
        NRR();
        if (staticMode) {
            Efo = GV("founderid");
            var h = new String(window.location.hash);
            if (h.length && (h.charAt(0) == "#")) {
                h = h.substring(1);
            }
            var a = h.split(":");
            var m = a[0];
            var i = a[1];
            if (i) {
                SV("viewpersonid", i);
            }
            if (m) {
                SV("viewmode", m);
            }
            SS("printbutton", false);
            ERP(false);
        } else {
            Ece = true;
            Eca = true;
            Ecd = true;
            Efo = GV("personid");
            var fi = GV("familyid");
            var ic = GV("importcacheid");
            if (fi || ic) {
                AG("family_read", {
                    f: fi,
                    i: ic,
                    p: GV("personid"),
                    c: GV("checksum"),
                    s: GV("sessionid")
                }, EFR, fi && (ic || GV("newscript").length));
            } else {
                ERP(false);
            }
        }
    } else {
        SS("treebg", false);
        SS("noajax", true);
    }
}

function EPR() {
    NPF();
    NRR();
}

function ESB(l) {
    if (!Esb) {
        if (Ebi) {
            Eoh = l;
            setTimeout("GE('backframe').src='back.htm?" + l + "';", 100);
        } else {
            window.location.hash = l;
        }
    }
}

function EBI(l) {
    var h = new String(l.search);
    var p = h.lastIndexOf("?");
    if (p >= 0) {
        h = h.substring(p + 1);
    }
    if (Eoh && (Eoh != h)) {
        return;
    }
    Eoh = null;
    window.location.hash = h;
}

function EBT() {
    if (!Esb) {
        var h = new String(window.location.hash);
        if (h.length && (h.charAt(0) == "#")) {
            h = h.substring(1);
        }
        if (Eoh && (Eoh != h)) {
            return;
        }
        var a = h.split(":");
        var m = a[0];
        var i = a[1];
        Elh = Ech;
        Ech = m;
        if ((i && (i != GV("viewpersonid"))) || (m && (m != GV("viewmode")))) {
            if ((Eec !== null) && (i == Epc) && (m === "view")) {
                EFE(false);
            } else {
                if (i && Efa[i]) {
                    SV("viewpersonid", i);
                }
                if (m) {
                    SV("viewmode", m);
                }
                EUS(false, null, null, true, true);
            }
        }
    }
}

function EPU(e) {
    if ((!Esc) && (!staticMode)) {
        if (GV("newscript").length || GV("importcacheid")) {
            e = e || window.event;
            var m = _t("If you leave this page before saving, your changes to this family will be lost.");
            e.returnValue = m;
            return m;
        }
    }
}

function ESC() {
    Esc = true;
}

function EFR(_17, _18, _19) {
    if (_19.ok) {
        Efa = {};
        if (_19.f) {
            if (_19.ar) {
                ERS(_19.t);
                Ess = _19.t;
                Eve = _19.v;
                Ewp = _19.pw ? GV("personid") : null;
                Efo = _19.fp;
                Edd = _19.al;
                Edy = _19.ad;
                Ece = _19.aw;
                Eca = _19.an;
                Ecd = _19.ax;
                Eed = _19.ae;
                Eud = _19.au;
                Exd = _19.az;
                Esf = _19.as;
                Eaf = _19.aa;
                Edt = _19.ds;
                Eda = _19.da;
                Edc = _19.dc;
                Edm = _19.dm;
                var e = GE("lfamilylabels");
                e.innerHTML = "";
                var _1b = _19.fl;
                if (_1b && _1b.length) {
                    for (var j = 0; j < _1b.length; j++) {
                        var s = document.createElement("span");
                        s.className = "lfamilylabel";
                        s.innerText = _1b[j].charAt(0).toUpperCase() + _1b[j].substring(1);
                        e.appendChild(s);
                    }
                }
                if (Ewp && GE("welcomewrite")) {
                    SR("welcomewrite", true);
                }
                if (Eud) {
                    DAD();
                }
            } else {
                Ece = false;
                Eca = false;
                Ecd = false;
                RE(_t("You do not have permission to view this family."));
                if (GE("addfamily")) {
                    SS("addfamily", false);
                }
            }
        }
        if (_19.m) {
            ERS(_19.m);
            Eis = _19.m;
            if (_19.ro) {
                staticMode = true;
                Esa = true;
                Ece = false;
                Eca = false;
                Ecd = false;
                Ewp = null;
                SS("do_signin", false);
                SH("lfooterlinks", "Family displayed via the <A HREF=\"https://www.familyecho.com/\" TARGET=\"_blank\">Family Echo</A> API.");
            }
            if (_19.lo) {
                SH("lfamilyname", _19.lo);
            }
        }
    } else {
        RE(_t("This family could not currently be loaded.") + " " + _t("This may be due to occasional system maintenance, so please try again in a few hours."));
    }
    ERP(_18);
}

function ERP(_1e) {
    ERS(GV("newscript"));
    if (Esd === null) {
        Esd = "";
        for (var j in Efa) {
            if (Efa[j].r) {
                Esd = "r";
            }
        }
        NSD(Esd);
    }
    EUS(true, null, GV("viewmode"), true, false);
    if (_1e) {
        ESS();
    } else {
        EUL(false);
    }
    setInterval(EBT, 250);
}

function EMD(e) {
    e = e || window.event;
    var t = e.target || e.srcElement || e;
    if (!(GE("findfield").contains(t) || GE("findlist").contains(t))) {
        NHF();
    }
}

function EUS(r, i, m, d, s) {
    var pi = Evp = GV("viewpersonid");
    var pm = viewMode = GV("viewmode");
    if (r) {
        var ap = GV("personid");
        if (Efo && !Efa[Efo]) {
            Efa[Efo] = {};
        }
        FRF(Efa, ap, Efo);
        if (ap && Efa[ap]) {
            NSP(ap);
            SV("name", FDN(Efa[ap], false, 1, false, false, false));
            SV("email", Efa[ap].e);
        } else {
            NSP(Efo);
        }
        var fc = 0;
        for (var j in Efa) {
            fc++;
        }
        NCP(fc);
        if ((staticMode || GV("familyid")) && Efo && Efa[Efo]) {
            var fb = FDN(Efa[Efo], false, 1, false, false, false);
            ST("lfamilyinfo", _t("Founded by $", fb));
            if (!staticMode) {
                SS("historybutton", true);
            }
        } else {
            ST("lfamilyinfo", "");
        }
    }
    if (i) {
        Evp = i;
    }
    if (m) {
        viewMode = m;
    }
    if ((!Evp) || (!Efa[Evp])) {
        if (Efo && Efa[Efo]) {
            Evp = Efo;
        } else {
            for (Evp in Efa) {
                break;
            }
        }
    }
    SV("viewpersonid", Evp);
    SV("viewmode", viewMode);
    if (Evp != pi) {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    }
    if (viewMode == "history") {
        ESI(true);
        if ((!Esb && Elh != viewMode) || (Esb && m)) {
            GE("extraframe").src = "history.php?f=" + escape(GV("familyid")) + "&p=" + escape(GV("personid")) + "&c=" + escape(GV("checksum")) + "&s=" + escape(GV("sessionid")) + (EID() ? "&d=1" : "");
        }
        SI("extradiv", true);
    } else {
        if (viewMode == "share") {
            ESI(true);
            GE("extraframe").src = "share.php?f=" + escape(GV("familyid")) + "&p=" + escape(GV("personid")) + "&c=" + escape(GV("checksum")) + "&i=" + escape(Evp) + "&s=" + escape(GV("sessionid")) + "&z=" + ((Efa[Evp].z != "1") ? 0 : 1) + (EID() ? "&d=1" : "");
            SI("extradiv", true);
        } else {
            if (viewMode == "download") {
                ESI(true);
                GE("extraframe").src = "download.php?f=" + escape(GV("familyid")) + "&p=" + escape(GV("personid")) + "&c=" + escape(GV("checksum")) + "&s=" + escape(GV("sessionid")) + (EID() ? "&d=1" : "");
                SI("extradiv", true);
            } else {
                if (viewMode == "print") {
                    ESI(true);
                    if (m) {
                        GE("extraframe").src = "print.php?f=" + escape(GV("familyid")) + "&p=" + escape(GV("personid")) + "&c=" + escape(GV("checksum")) + "&s=" + escape(GV("sessionid")) + (EID() ? "&d=1" : "");
                    }
                    SI("extradiv", true);
                } else {
                    if (viewMode == "import") {
                        ESI(true);
                        GE("extraframe").src = "import.php?p=" + escape(GV("personid")) + (EID() ? "&d=1" : "");
                        SI("extradiv", true);
                    } else {
                        if (viewMode == "importfinish") {
                        } else {
                            if (GI("extradiv")) {
                                GE("extraframe").src = "";
                                SI("extradiv", false);
                            }
                        }
                    }
                }
            }
        }
    }
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)) {
        SS("extradiv", GI("extradiv"));
    }
    SSE(Evp, viewMode);
    if (i || m) {
        ESB(viewMode + ":" + Evp);
    }
    if (d || (Evp != pi)) {
        TRT(Efa, Evp, GV("personid"), Esd, NGD(), NGB(), NGS(), NGR(), NGL(), NGM(), NGH(), NGA(), NGC(), pi, GV("showzoom"), GV("showwidth"), GV("textsize"), s);
        NRT();
    }
    if (m == "path") {
        SUP(Evp);
        SPS();
        SS("pathdiv", true);
    }
    if (m == "calendar") {
        SUC();
        SS("caltimediv", true);
        ESI(true);
    }
    if (m == "timeline") {
        SUI();
        SS("caltimediv", true);
        ESI(true);
    }
    if (viewMode == "path") {
        SSP(Evp);
    } else {
        SS("pathdiv", false);
    }
    if ((viewMode != "calendar") && (viewMode != "timeline")) {
        SS("caltimediv", false);
    }
    if (r || (Evp != pi)) {
        if (parent && parent.postMessage) {
            parent.postMessage("focus=" + Evp, "*");
        }
    }
}

function EUF() {
    EUS(true, null, null, true, false);
}

function ERF() {
    EUS(false, null, null, true, true);
}

function ERI() {
    EUS(false, null, null, true, false);
}

function ESP(i, s) {
    EHW();
    for (var j = 0; j < (Eeq.length - 1); j++) {
        if (Eeq[j] == i) {
            Eeq.splice(j, 1);
            EUS(false, i, "edit", false, s);
            return;
        }
    }
    var vm = GV("viewmode");
    Eeq = [];
    EUS(false, i, ((vm == "share") || (vm == "print") || (vm == "history") || (vm == "path") || (vm == "calendar") || (vm == "timeline") || (vm == "users")) ? null : "view", false, s);
}

function ESM(m) {
    EUS(false, null, m, false, false);
}

function ECS() {
    Eec = GV("newscript").length;
    Epc = GV("viewpersonid");
}

function ESE(r, i, b) {
    Eeq = [];
    for (var j = 1; j < i.length; j++) {
        Eeq[Eeq.length] = i[j];
    }
    Eeq[Eeq.length] = b;
    EHW();
    EUS(r, i[0], "edit", r, true);
}

function EFE(a) {
    if (a) {
        if (Eeq.length <= 1) {
            ESS();
            EHW();
            EUS(false, Eeq.length ? Eeq[0] : null, "view", false, true);
            Eec = null;
        } else {
            EUS(false, Eeq.shift(), "edit", false, true);
        }
    } else {
        if (Eec !== null) {
            ESM("view");
            Efa = {};
            ERS(Ess);
            ERS(Eis);
            var ks = GV("newscript");
            ks = ks.substring(0, Eec);
            SV("newscript", ks);
            ERS(ks);
            Eec = null;
            EUS(true, Epc, "view", true, true);
        } else {
            EUS(true, null, "view", true, true);
        }
        EUL(false);
    }
}

function EFV(i, p, v) {
    if (i) {
        Efa[i] = Efa[i] || {};
        if ((p == "x") || (p == "s")) {
            if (Efa[i].s && Efa[Efa[i].s]) {
                Efa[Efa[i].s].s = null;
            }
        }
        if (p == "x") {
            delete Efa[i];
        } else {
            if ((p == "s") && v) {
                Efa[v] = Efa[v] || {};
                if (Efa[v].s && Efa[Efa[v].s]) {
                    Efa[Efa[v].s].s = null;
                }
                Efa[v].s = i;
            }
            Efa[i][p] = v ? v : null;
        }
    }
}

function EPV(i1, i2, p, v) {
    if (i1 && i2) {
        Efa[i1] = Efa[i1] || {};
        Efa[i2] = Efa[i2] || {};
        var fn = p + "p";
        Efa[i1][fn] = Efa[i1][fn] || {};
        Efa[i2][fn] = Efa[i2][fn] || {};
        Efa[i1][fn][i2] = v.length ? v : null;
        Efa[i2][fn][i1] = v.length ? v : null;
    }
}

function EDV(i, p, v) {
    if (i) {
        Eff[i] = Eff[i] || {};
        if (p == "x") {
            delete Eff[i];
        } else {
            if (p == "+") {
                Eff[i].ps = Eff[i].ps || {};
                Eff[i].ps[v] = true;
                if (Efa[v]) {
                    Efa[v].fs = Efa[v].fs || {};
                    Efa[v].fs[i] = true;
                }
            } else {
                if (p == "-") {
                    if (Eff[i] && Eff[i].ps) {
                        delete Eff[i].ps[v];
                    }
                    if (Efa[v] && Efa[v].fs) {
                        delete Efa[v].fs[i];
                    }
                } else {
                    Eff[i][p] = v;
                }
            }
        }
    }
}

function ERS(s) {
    var c = ECL(s);
    for (var j = 0; j < c.length; j++) {
        var e = c[j];
        var t = e.t.charAt(0);
        var i = e.t.substring(1);
        var v = e.v.replace(/\\t/g, "\t").replace(/\\n/g, "\n").replace(/\\\\/g, "\\");
        if (t == "i") {
            EFV(i, e.p, v);
        } else {
            if (t == "p") {
                var ii = i.split(" ");
                EPV(ii[0], ii[1], e.p, v);
            } else {
                if (t == "d") {
                    EDV(i, e.p, v);
                }
            }
        }
    }
}

function ECL(s) {
    var l = NE(s).split("\n");
    var c = [];
    for (var j = 0; j < l.length; j++) {
        var e = l[j].split("\t");
        for (var k = 1; k < e.length; k++) {
            c[c.length] = {t: e[0], p: e[k].charAt(0), v: e[k].substring(1, e[k].length)};
        }
    }
    return c;
}

function EOS(s) {
    var c = ECL(s);
    var os = "";
    var pi = null;
    var pc = [];
    for (var j = 0; j < c.length; j++) {
        var e = c[j];
        if (e.t != pi) {
            if (pi) {
                os += pi + "\t" + pc.join("\t") + "\n";
            }
            pi = e.t;
            pc = [];
        }
        var pl = pc.length;
        if ((pl > 0) && (pc[pl - 1].charAt(0) == e.p) && (e.p != "+") && (e.p != "-")) {
            pc[pl - 1] = e.p + e.v;
        } else {
            pc[pl] = e.p + e.v;
        }
    }
    if (pi) {
        os += pi + "\t" + pc.join("\t") + "\n";
    }
    return os;
}

function EFC(i, c) {
    for (var p in c) {
        var v = c[p] ? NE(new String(c[p])) : "";
        EFV(i, p, v);
        GE("newscript").value += "\ni" + i + "\t" + p.charAt(0) + EEF(v);
    }
    EUL(false);
}

function EPC(i1, i2, c) {
    for (var p in c) {
        var v = c[p] ? NE(new String(c[p])) : "";
        EPV(i1, i2, p, v);
        GE("newscript").value += "\np" + i1 + " " + i2 + "\t" + p.charAt(0) + EEF(v);
    }
    EUL(false);
}

function EDC(i, c) {
    for (var p in c) {
        var v = c[p] ? NE(new String(c[p])) : "";
        EDV(i, p, v);
        GE("newscript").value += "\nd" + i + "\t" + p.charAt(0) + EEF(v);
    }
    EUL(false);
}

function EEF(s) {
    return s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t");
}

function EFI() {
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var j = 0; j < 1000; j++) {
        var i = "";
        for (var k = 0; k < 5; k++) {
            i += c.charAt(Math.floor(Math.random() * (k ? 36 : 26)));
        }
        if (!Efa[i]) {
            break;
        }
    }
    return i;
}

var Edf = false;

function ESS() {
    if (!staticMode) {
        var fi = GV("familyid");
        var ic = GV("importcacheid");
        if (fi && !Edf) {
            var len = GV("newscript").length;
            if (len || ic) {
                Edf = true;
                AP("family_append", {
                    f: fi,
                    i: ic,
                    p: GV("personid"),
                    c: GV("checksum"),
                    v: Eve
                }, EOS(GV("newscript")), ESR, len);
                EUL(false);
            } else {
                Edf = true;
                EUL(false);
                Edf = false;
                setTimeout("EUL(true);", 500);
            }
        }
    }
}

function ESR(_6e, len, _70) {
    Edf = false;
    if (_70.ok) {
        Eve = _70.v;
        Ess += "\n" + Eis;
        Eis = "";
        SV("importcacheid", "");
        var ns = GV("newscript");
        Ess += ns.substring(0, len);
        SV("newscript", ns.substring(len, ns.length));
        if (_70.t) {
            Efa = {};
            ERS(_70.t);
            Ess = _70.t;
            ERS(GV("newscript"));
            EUS(true, null, null, true, false);
        }
    } else {
        RE(_t("The family could not be saved - please try again."));
    }
    EUL(true);
}

function EUL(js) {
    if (!staticMode) {
        var len = GV("newscript").length;
        var ic = GV("importcacheid");
        if (Edf) {
            p = "lsaving";
        } else {
            if (len || ic) {
                p = "lsave";
            } else {
                if (!Ece) {
                    p = Ewp ? "lwriteone" : "lreadonly";
                } else {
                    p = js ? "lsaved" : "linitial";
                }
            }
        }
        var es = ["linitial", "lreadonly", "lwriteone", "lsave", "lsaving", "lsaved"];
        for (var j = 0; j < es.length; j++) {
            SS(es[j], p == es[j]);
        }
        var fi = GV("familyid");
        var si = GV("sessionid");
        SS("savefamily", (Ece || len || ic) && fi);
        SS("sharebutton", Esf && si && fi && !Eaf);
        SS("usersbutton", Eaf && si && fi);
        SS("downloadbutton", fi && Edy && !Eis.length);
        SS("filesbutton", fi && (Edd || Eud) && !GS("filesdiv"));
        NRR();
        SSF();
    }
}

function EAS() {
    AP("userfamily_add", {s: GV("sessionid"), f: GV("familyid"), p: GV("personid"), c: GV("checksum")}, "", EAR, null);
}

function EAR(_79, _7a, _7b) {
    if (_7b.ok) {
        ST("lfamilyname", _7b.n);
        SS("addfamily", false);
    } else {
        RE(_7b.er || _t("The family could not be added to your account - please try again."));
    }
}

function EBS() {
    var ap = GV("personid");
    ESP((ap && Efa[ap]) ? ap : Efo, true);
}

function ECZ(zi) {
    EZD(zi ? 1.138788634756692 : 0.878126080186649);
}

function EZD(zd) {
    var zf = Math.max(0.5, Math.min(4, GV("showzoom") * zd));
    SC("zoomfactor", zf);
    SV("showzoom", zf);
    ERF();
}

function ESZ() {
    SC("zoomfactor", GV("showzoom"));
    ERI();
}

function ECD(_80) {
    var i = _80.id;
    if (i.substr(0, 7) == "detail_") {
        var d = i.substr(7);
        var c = _80.checked;
        if (d.substr(0, 1) == "0") {
            c = !c;
        }
        var ds = "." + (Esd || "") + ".";
        if (c) {
            if (ds.indexOf("." + d + ".") < 0) {
                Esd = (ds + d);
            }
        } else {
            Esd = ds.replace(new RegExp("\\." + d + "\\.", "g"), ".");
        }
        Esd = Esd.replace(/^\.+/, "").replace(/\.+$/, "");
        NSD(Esd);
        SC("showdetail", Esd);
        ERF();
    }
}

function ECA() {
    var e = GE("otherage");
    var v = GV("otherage");
    if (v == "on") {
        if (e.options.length > 2) {
            var p = FPD(e.options[2].value);
        } else {
            var d = new Date();
            var p = {y: d.getFullYear(), m: 1 + d.getMonth(), d: d.getDate()};
        }
        var f = FDE(Math.abs(p.y), 9999, 4) + "-" + FDE(p.m, 12, 2) + "-" + FDE(p.d, 31, 2) + ((p.y < 0) ? " B" : "");
        while (true) {
            var f = prompt(_t("Show ages on which date? Please enter the date in YYYY-MM-DD format and add \"B\" for BCE."), f);
            if (f === null) {
                SV("otherage", "");
                break;
            }
            if (EWA(f)) {
                e.selectedIndex = 2;
                SC("otheragedate", f);
                break;
            }
        }
    }
    ERF();
}

function EWA(f) {
    var b = (f.toLowerCase().indexOf("b") >= 0);
    var s = f.replace(/[^0-9-]/g, "").split("-");
    if (s.length == 3) {
        var y = parseInt(s[0]);
        var m = parseInt(s[1]);
        var o = parseInt(s[2]);
        if ((y >= 1) && (y <= 9999) && (m >= 1) && (m <= 12) && (o >= 1) && (o <= 31)) {
            if (b) {
                y = -y;
            }
            GE("otherage").options[2] = new Option("on " + FSD(o, m, y), FDS(o, m, y));
            return true;
        }
    }
    return false;
}

function ECR(_90) {
    var i = _90.id;
    if (i.substr(0, 5) == "color") {
        var f = i.substr(5);
        SC("color" + f, _90.value);
        ERF();
    }
}

function ECE(_93) {
    var i = _93.id;
    if (i.substr(0, 4) == "line") {
        var f = i.substr(4);
        SC("line" + f, _93.value);
        ERF();
    }
}

function ERC(f, c) {
    SV("color" + f, c);
    SC("color" + f, c);
    ERF();
}

function ESN() {
    SC("showbirthname", NGB());
    ERF();
}

function ESF() {
    SC("showsurnamefirst", NGS());
    ERF();
}

function EML() {
    SC("showmaleleft", NGM());
    ERF();
}

function ECO() {
    SC("showcousins", NGC());
    ERF();
}

function ECH() {
    SC("showchildren", NGH());
    ERF();
}

function ECP() {
    SC("showparents", NGH());
    ERF();
}

function ECW() {
    SC("widthfactor", GV("showwidth"));
    ERI();
}

function ERW() {
    SV("showwidth", 1);
    SC("widthfactor", 1);
    ERF();
}

function ECT() {
    SC("textsize", GV("textsize"));
    ERI();
}

function ERT() {
    SV("textsize", 1);
    SC("textsize", 1);
    ERF();
}

function ETO() {
    var s = !GS("optionsdiv");
    if (s && GS("filesdiv")) {
        ETF();
    }
    if (s && GS("usersdiv")) {
        ETU();
    }
    SS("optionsdiv", s);
    SH("optionslinktext", s ? _h("Hide options") : _h("Options"));
    GE("treemargin").style.paddingBottom = (s ? (GE("optionsdiv").offsetHeight + "px") : 0);
    TCD(Evp, 250);
}

function ETF() {
    var s = !GS("filesdiv");
    if (s && GS("optionsdiv")) {
        ETO();
    }
    if (s && GS("usersdiv")) {
        ETU();
    }
    if (s) {
        DDF(true);
        DUS();
    }
    SS("filesdiv", s);
    SS("filesbutton", !s);
    SS("filestreebutton", s);
    GE("treemargin").style.paddingBottom = (s ? (GE("filesdiv").offsetHeight + "px") : 0);
    TCD(Evp, 250);
}

function ETU() {
    var s = !GS("usersdiv");
    if (s && GS("optionsdiv")) {
        ETO();
    }
    if (s && GS("filesdiv")) {
        ETF();
    }
    if (s) {
        GE("usersframe").src = "users.php?f=" + escape(GV("familyid")) + "&p=" + escape(GV("personid")) + "&c=" + escape(GV("checksum")) + "&s=" + escape(GV("sessionid")) + (EID() ? "&d=1" : "");
    }
    SS("usersdiv", s);
    SS("usersbutton", !s);
    SS("userstreebutton", s);
    GE("treemargin").style.paddingBottom = (s ? (GE("usersdiv").offsetHeight + "px") : 0);
    TCD(Evp, 250);
}

function ETI() {
    var w = GE("leftdiv").offsetWidth;
    var s = TGS();
    var v = GI("leftdiv");
    ESM("view");
    ESI(!v);
    NRR();
    TSD(s.left + (v ? -w : w), s.top);
    TCD(Evp, 250);
}

function ESI(s) {
    var c = s ? "marginon" : "marginoff";
    GE("treemargin").className = c;
    GE("fileviewmargin").className = c;
    GE("navmargin").className = c;
    GE("welcomemargin").className = c;
    GE("optionsmargin").className = c;
    GE("filesmargin").className = c;
    GE("usersmargin").className = c;
    SI("leftdiv", s);
    NSS(s);
}

function EID() {
    return (document.body.className == "dark");
}

function ETD() {
    if (EID()) {
        var oc = "dark";
        var nc = "light";
        var sb = true;
    } else {
        var oc = "light";
        var nc = "dark";
        var sb = false;
    }
    document.body.className = nc;
    var fs = ["extraframe", "uploadiframe", "usersframe"];
    for (var j = 0; j < fs.length; j++) {
        var e = GE(fs[j]).contentDocument;
        if (e) {
            e.body.className = e.body.className.replace(oc, nc);
        }
    }
    SS("backspan", sb);
    ERF();
}

function EFB(i) {
    var sf = FCS(Efa, i);
    SV("do_startbranch", sf.join("\t"));
    document.topform.submit();
}

function EIU(r) {
    if (staticMode) {
        var e = GE("image-" + r);
        return e ? e.src : "image-" + r + ".jpg";
    } else {
        return BR("ap/", "image_read", {f: GV("familyid"), p: GV("personid"), c: GV("checksum"), r: r});
    }
}

function EHW() {
    SS("welcomediv", false);
}

function ESL() {
    return {s: Ess.length, i: Eis.length, n: GV("newscript").length};
}

function ECI(c, s) {
    EHW();
    SV("importcacheid", c);
    SV("newscript", "");
    Efa = {};
    Eis = s;
    ERS(s);
    EUS(true, null, "view", true, false);
    EUL(false);
}

function ESA() {
    SV("importcacheid", "");
    SV("newscript", "");
    Efa = {};
    Eis = "";
    EUS(true, null, "edit", true, false);
    EUL(false);
    SS("welcomediv", true);
}

function EES(s) {
    SS("exporttext", s);
    if (s) {
        SV("exporttext", GV(s).trim());
        GE("exporttext").select();
        GE("exporttext").scrollTop = 0;
        GE("exporttext").dir = (locale_rtl && (s == "text")) ? "rtl" : "ltr";
    } else {
        SV("exporttext", "");
    }
    var ls = ["", "gedcom", "newscript", "csv", "text"];
    for (var j = 0; j < ls.length; j++) {
        GE("export_show_" + ls[j]).className = (s == ls[j]) ? "selbold" : "";
    }
}
