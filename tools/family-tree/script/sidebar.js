var Sen = [{
    p: "personalname",
    N: "nickname",
    T: "title",
    J: "suffix",
    l: "familyname",
    q: "familybirth"
}, {
    e: "c_email",
    w: "website",
    B: "blog",
    P: "photosite",
    t: "hometel",
    k: "worktel",
    u: "mobile",
    S: "skype",
    a: "address",
    C: "othercontact"
}, {
    v: "birthplace",
    y: "deathplace",
    Z: "deathcause",
    U: "burialplace",
    j: "profession",
    E: "employer",
    I: "interests",
    A: "activities",
    o: "bionotes"
}];
var Sur = {w: "website", B: "blog", P: "photos"};
var Sec = ",de,del,delle,la,von,van,den,der,of,the,and,y,da,dos,das,by,in,las,av,le,du,di,af,della,ap,und,do,ferch,och,zu,zur,des,bei,los,mac,ingen,el,al,dit,e,";
var Sv1 = {
    e: _t("Email"),
    w: _t("Website"),
    B: _t("Blog"),
    P: _t("Photo site"),
    t: _t("Home tel"),
    k: _t("Work tel"),
    u: _t("Mobile"),
    a: _t("Address"),
    C: _t("Other"),
    S: _t("Skype")
};
var Sv2 = {
    v: _t("Birth place"),
    y: _t("Death place"),
    Z: _t("Cause of death"),
    U: _t("Burial place"),
    F: _t("Burial date"),
    j: _t("Profession"),
    E: _t("Company"),
    I: _t("Interests"),
    A: _t("Activities"),
    o: _t("Bio notes")
};
var Spt = {
    m: _t("Married"),
    e: _t("Engaged"),
    r: _t("Relationship"),
    s: _t("Separated"),
    d: _t("Divorced"),
    a: _t("Annulled"),
    o: _t("Other")
};
var Sat = {b: _t("Biological"), a: _t("Adopted"), f: _t("Foster"), s: _t("Step"), g: _t("Godparent")};
var Spe;
var Spa = 0;
var Sed = false;
var Srl;
var Sps = null;
var Spd = null;
var Spl = null;
var disable_family_tests = false;

function SPL() {
    CE(parent);
}

function SPW(i) {
    return Ece || (i && (Ewp == i));
}

function SPN(p) {
    return FDN(p, false, 1, NGS(), (NGB() == 1), true);
}

function SSE(i, e) {
    var p = Efa[i];
    if (!p) {
        return;
    }
    var pi = Spe;
    Spe = i;
    var md = (Spe == GV("personid"));
    var v = GE("nametitle");
    v.innerHTML = EH(SPN(p));
    v.className = p.p ? "sname" : "sdefname";
    SV("shareperson", _t("Invite $ to share family", p.h));
    SS("hideurl", false);
    GE("switchpanel3").style.display = p.cp ? "block" : "none";
    GE("switchpanel4").style.display = (Edd || Eud) ? "block" : "none";
    if (!md) {
        SV("showpath", _t("Show relationship to $", p.h));
        SS("showpath", true);
    } else {
        SS("showpath", false);
    }
    var uf = p.w ? "w" : (p.B ? "B" : (p.P ? "P" : null));
    SS("showurl", uf ? true : false);
    if (uf) {
        SV("urlmode", Sur[uf]);
        GE("urllink").href = p[uf];
        SV("showurl", _t("Show $1's $2", p.h, Sv1[uf].toLowerCase()));
    }
    SSA((((Spa == 3) && !p.cp) || ((pi != i) && ((e == "edit") || Sed))) ? 0 : Spa, (e == "edit") ? ((Sed && (pi == i)) ? null : true) : false);
    SIU(false);
}

function SSA(_a, _b) {
    if (Sed && ((_a != Spa) || (_b === false))) {
        try {
            GE("switchlink" + _a).focus();
        } catch (e) {
        }
    }
    Spa = _a;
    if (_b !== null) {
        Sed = _b;
    }
    var f = Efa;
    var p = f[Spe];
    var md = (Spe == GV("personid"));
    var pw = SPW(Spe);
    if (!pw) {
        Sed = false;
    }
    for (var j = 0; j <= 4; j++) {
        GE("switchpanel" + j).className = ((_a == j) ? "sswitched" : "sswitch");
        GE("switchlink" + j).className = ((_a == j) ? "sswitchedlink" : "");
    }
    var hne = p.N || p.T || p.J;
    SR("personalview", (Spa == 0) && !Sed);
    SR("personaledit1", (Spa == 0) && Sed);
    if ((_b === true) || (!Sed)) {
        SR("nameexpandedit", (Spa == 0) && Sed && hne);
        SS("nameexpand", !hne);
        GE("personalname").className = hne ? "sfield" : "sfieldexpand";
    }
    SR("personaledit2", (Spa == 0) && Sed);
    SR("personaleditdeath", (Spa == 0) && (p.z == 1) && Sed);
    SR("partnersviewedit", (Spa == 3));
    SR("contactview", (Spa == 1) && !Sed);
    SR("contactedit", (Spa == 1) && Sed);
    SR("contacteditskype", (Spa == 1) && Sed && p.S);
    SR("bioview", (Spa == 2) && !Sed);
    SR("bioedit1", (Spa == 2) && Sed);
    SR("bioeditdeath", (Spa == 2) && (p.z == 1) && Sed);
    SR("bioedit2", (Spa == 2) && Sed);
    SR("filesview", (Spa == 4));
    SR("filesview2", (Spa == 4) && !Sed);
    SR("viewfooter", pw && (!Sed) && (Spa != 4));
    SR("editfooter", Sed && (Spa != 4));
    SR("readonlyfooter", (!staticMode) && (!Ece) && (!Ewp));
    SR("writemefooter", (!Ece) && pw);
    SR("writenotfooter", Ewp && !pw);
    if (Spa == 3) {
        var et = _t("Edit partnership details");
    } else {
        var et = md ? _t("Edit my details") : _t("Edit $'s details", p.h);
    }
    if (Spa == 4) {
        SS("sideuploadfile", Eud);
    }
    SV("editbutton", et);
    SS("nonrelations", true);
    SS("shareperson", (!staticMode) && GV("sessionid") && (p.z != "1") && !md);
    SS("nonediting", !Sed);
    SR("relactions", Ece && !Sed);
    if (Sed) {
        var df = (_b === true);
        for (var j in Sen[Spa]) {
            SV(Sen[Spa][j], p[j]);
            if (df && (j != "y") && !GV(Sen[Spa][j])) {
                FS(Sen[Spa][j]);
                df = false;
            }
        }
    } else {
        if (Ece) {
            SRP(false);
        }
    }
    if (_a == 1) {
        SP1(_b === true);
    } else {
        if (_a == 2) {
            SP2(_b === true);
        } else {
            if (_a == 3) {
                SP3(_b === true);
            } else {
                if (_a == 4) {
                    SP4(_b === true);
                } else {
                    SP0(_b === true);
                }
            }
        }
    }
    SSF();
}

function SSF() {
    var om = !staticMode;
    var sl = ESL();
    SR("importfooter", om && (!sl.n) && (!sl.s) && (!sl.i) && Eca);
    SR("clearfooter", om && (sl.n || sl.i) && (!sl.s) && Ecd);
}

function SWA(p) {
    SSA(p, Sed);
}

function SED() {
    ECS();
    ESE(false, [Spe], Spe);
}

function SAS() {
    EFE(true);
}

function SCS() {
    EFE(false);
}

function SRR(e) {
    var v = GE(e);
    while (v.firstChild) {
        v.removeChild(v.firstChild);
    }
}

function SJR(e, v, h, s) {
    var r = document.createElement("TR");
    var a = document.createElement("TD");
    a.className = "sboth";
    a.innerHTML = h ? v : EL(v);
    a.colSpan = s;
    r.appendChild(a);
    GE(e).appendChild(r);
}

function SSR(e, t, v, h, a) {
    var r = document.createElement("TR");
    r.vAlign = a || "top";
    var a = document.createElement("TD");
    a.className = "sleft";
    if (t) {
        a.innerHTML = EH(t + ":");
    }
    var b = document.createElement("TD");
    b.className = "sright";
    b.innerHTML = h ? v : EL(v);
    r.appendChild(a);
    r.appendChild(b);
    GE(e).appendChild(r);
    return r;
}

function SUR(e, t, i, v, s) {
    SJR(e, "<INPUT TYPE=\"submit\" VALUE=\"" + EH(t) + "\" ID=\"" + EH(i + v) + "\" CLASS=\"sbutton\" onClick=\"SCB('" + EH(i) + "','" + EH(v) + "'); return false;\">", true, s);
}

function SPP(i, ra, s, no, o) {
    var f = Efa;
    var bn = NGB();
    var bn1 = (bn == 1);
    var sf = NGS();
    var v = GE(i);
    v.style.display = "none";
    v.options.length = 0;
    for (var j = 0; j < ra.length; j++) {
        if (ra[j] == s) {
            v.options[0] = new Option(s, s);
            break;
        }
    }
    if (!v.options.length) {
        v.options[0] = new Option("", "");
    }
    if (v.personinput) {
        var w = v.personinput;
    } else {
        w = document.createElement("input");
        v.parentNode.insertBefore(w, v);
        v.personinput = w;
    }
    if (v.personlist) {
        var x = v.personlist;
    } else {
        var x = document.createElement("div");
        v.parentNode.insertBefore(x, v);
        v.personlist = x;
    }
    w.className = "snameedit";
    w.style.cursor = "pointer";
    if (locale_rtl) {
        w.dir = "rtl";
    }
    w.value = (s && f[s]) ? FDN(f[s], false, 1, sf, bn1, true) : _t("(none)");
    w.onfocus = function () {
        w.tohide = false;
        w.oldvalue = w.value;
        w.value = "";
        w.style.cursor = "";
        w.style.textAlign = "start";
        x.style.display = "inline-block";
        SGP(v, w, x, no);
    };
    w.oninput = function () {
        SGP(v, w, x, no);
    };
    w.completed = function () {
        w.value = w.oldvalue;
        w.style.cursor = "pointer";
        w.style.textAlign = "";
        x.style.display = "none";
    };
    w.onblur = function () {
        w.tohide = true;
        setTimeout(function () {
            if (w.tohide) {
                w.completed();
            }
        }, 250);
    };
    w.onkeydown = function (e) {
        if ((e.key == "Escape") || (e.key == "Enter")) {
            w.completed();
            w.blur();
        }
    };
    x.className = "snamelist";
    x.style.display = "none";
    x.ids = ra;
    if (locale_rtl) {
        x.dir = "rtl";
    }
    x.onclick = function (e) {
        var i = e.target.id || e.target.parentElement.id;
        if (i.substring(0, 5) == "list_") {
            v.options.length = 0;
            var z = i.substring(5);
            v.options[0] = new Option(z, z);
            w.oldvalue = (z && f[z]) ? FDN(f[z], false, 1, sf, bn1, true) : _t("(none)");
            w.completed();
            if (v.onchange) {
                v.onchange();
            }
        } else {
            w.tohide = false;
        }
    };
    x.onfocus = function () {
        w.tohide = false;
    };
    x.onblur = function () {
        w.onblur();
    };
    if (o) {
        w.focus();
    }
}

function SGP(v, w, x, no) {
    NUL(x, w.value, x.ids, v.options[v.selectedIndex].value, no);
}

function SPT(i, b, s) {
    var v = GE(i);
    v.options.length = 0;
    v.options[v.options.length] = new Option("", "");
    for (var j in Sat) {
        if ((j != "b") || b) {
            v.options[v.options.length] = new Option(Sat[j], j);
        }
    }
    SO(i, s);
}

function SUT(i, df) {
    var f = Efa;
    var t = GO(i);
    var w = df ? _t("mother") : _t("father");
    if (t && f[t]) {
        var p = f[t];
        if (p.g == "m") {
            var w = _t("father");
        } else {
            if (p.g == "f") {
                var w = _t("mother");
            } else {
                if ((p.g || "").charAt(0) == "o") {
                    var w = _t("parent");
                }
            }
        }
    }
    ST(i + "title", w);
}

function SLR(e, s) {
    SJR(e, "<IMG CLASS=\"blankpixel\" WIDTH=\"1\" HEIGHT=\"4\">", true, s);
}

function SRB(t, i, v) {
    SUR("relactions", t, i, v, 1);
}

function SPR(e) {
    SRR("relactions");
    if (e) {
        SS("nonrelations", false);
    }
}

function SRP(e) {
    SPR(e);
    var f = Efa;
    var p = f[Spe];
    if (e) {
        var fd = false;
        var ns = false;
        SRB(_t("Set parents"), "treeparents", "");
        var ot = p.b && FPD(p.b).y;
        var bs = FLS(f, Spe, 1, ot);
        if (bs.length) {
            SRB(ot ? _t("Change multiple birth order") : _t("Change sibling order"), "changeorder", "");
        }
        if (p.cp) {
            SRB(((p.cp > 1) || !p.s) ? _t("Change partners") : _t("Change partner"), "changespouse", "");
        }
        if (Ecd) {
            if (Spe == Efo) {
                fd = true;
            } else {
                if (!disable_family_tests) {
                    var cf = FDF(f, Efo, null, null, null);
                    var df = FDF(f, Efo, Spe, null, null);
                    if ((df.length - cf.length) > 1) {
                        ns = true;
                    }
                }
                if (!ns) {
                    SRB(_t("Delete $", p.h), "delete", Spe);
                }
            }
        }
        SRB(_t("Cancel"), "cancel", "");
        if (Ecd) {
            if (ns) {
                SJR("relactions", "<BR>" + _h("This person cannot be deleted because that would split the tree. Try deleting outer people on the tree first."), true, 1);
            }
            if (fd) {
                SJR("relactions", "<BR>" + _h("This person started the tree and cannot be deleted."), true, 1);
            }
        } else {
            SJR("relactions", "<BR>" + _h("You do not have permission to delete people."), true, 1);
        }
    } else {
        var md = (GV("personid") == Spe);
        var ap = p.fg || Eaf || (GV("personid") == Efo);
        if (Eca) {
            SJR("relactions", md ? _t("Click to add your relatives:") : _t("Click to add relatives of $:", p.h), false, 1);
            if (ap) {
                if ((p.f && p.m) || ((p.V == "s") && (p.f || p.m))) {
                } else {
                    if (p.f) {
                        SRB((p.m2 || p.f2) ? _t("Add primary mother") : _t("Add mother"), "choosemother", "");
                    } else {
                        if (p.m) {
                            SRB((p.m2 || p.f2) ? _t("Add primary father") : _t("Add father"), "choosefather", "");
                        } else {
                            SRB((p.m2 || p.f2) ? _t("Add primary parents") : _t("Add new parents"), "addparents", "");
                        }
                    }
                }
            }
            SRB(_t("Add partner/ex"), "choosespouse", "");
            if (ap) {
                SRB(_t("Add brother/sister"), "addsibling", "");
            }
            SRB(_t("Add child"), "addchild", "");
            if (ap) {
                if ((p.X && p.Y) || ((p.W == "s") && (p.X || p.Y))) {
                } else {
                    if (p.Y) {
                        SRB(_t("Add second mother"), "choosemother2", "");
                    } else {
                        if (p.X) {
                            SRB(_t("Add second father"), "choosefather2", "");
                        } else {
                            if (p.f || p.m) {
                                SRB(_t("Add second parents"), "addparents2", "");
                            }
                        }
                    }
                }
                if ((p.K && p.L) || ((p.Q == "s") && (p.K || p.L))) {
                } else {
                    if (p.L) {
                        SRB(_t("Add third mother"), "choosemother3", "");
                    } else {
                        if (p.K) {
                            SRB(_t("Add third father"), "choosefather3", "");
                        } else {
                            if ((p.f || p.m) && (p.X || p.Y)) {
                                SRB(_t("Add third parents"), "addparents3", "");
                            }
                        }
                    }
                }
            }
        }
        var cf = 0;
        for (var j in f) {
            cf++;
            if (cf > 1) {
                SLR("relactions", 1);
                SRB(_t("More actions..."), "morelactions", "");
                break;
            }
        }
        if (Eca) {
            if (!ap) {
                var si = GV("sessionid");
                if (md) {
                    SJR("relactions", "<BR>" + (si ? _h("To add your parents, brothers or sisters, please sign in then create a new family branch.") : _h("To add your parents, brothers or sisters, please create a new family branch.")), true, 1);
                    if (si) {
                        SRB(_t("Create new family for me"), "startbranch", "");
                    }
                } else {
                    SJR("relactions", "<BR>" + (si ? _h("To add $'s parents, brothers or sisters, a new family branch can be created after signing in.", p.h) : _h("To add $'s parents, brothers or sisters, a new family branch can be created.", p.h)), true, 1);
                    if (si) {
                        SRB(_t("Create new family for $", p.h), "startbranch", "");
                    }
                }
            }
        } else {
            SJR("relactions", "<BR>" + _h("You do not have permission to add new people."), true, 1);
        }
        var ad = GE("advertisement");
        if (ad) {
            SLR("relactions", 1);
            SLR("relactions", 1);
            SJR("relactions", ad.innerHTML, true, 1);
        }
    }
}

function SP0(e) {
    var f = Efa;
    var p = f[Spe];
    var g = p.g || "";
    if (Sed) {
        GE("gender_f").checked = (g == "f");
        GE("gender_m").checked = (g == "m");
        GE("gender_o").checked = (g.charAt(0) == "o");
        GE("othergenderdiv").style.display = (g.charAt(0) == "o") ? "block" : "none";
        GE("alive").checked = (p.z != "1");
        if (e) {
            SH("birthdate", SDH("birth", "SCV('birth');"));
            SSD("birth", p.b);
            SH("deathdate", SDH("death", "SCV('death');"));
            SSD("death", p.d);
            SV("othergender", (g.charAt(0) == "o") ? p.g.substring(1) : "");
        }
    } else {
        SRR("personalview");
        var bn = NGB();
        var bn1 = (bn == 1);
        SSR("personalview", _t("Full name"), FDN(p, true, 1, NGS(), bn1, false, true, true, true), false);
        if (p.q && p.l && (p.q != p.l)) {
            SSR("personalview", bn1 ? _t("Surname now") : _t("Surname at birth"), bn1 ? p.l : p.q, false);
        }
        SSR("personalview", _t("Gender"), Fgn[g] ? Fgn[g] : ((g.charAt(0) == "o") ? g.substring(1) : Fgn[""]), false);
        SSR("personalview", _t("Birth date"), FDT(p.b, true), false);
        if (p.z == 1) {
            SSR("personalview", _t("Death date"), FDT(p.d, true), false);
        }
        var ac = FCR(f, Spe, true, false, false);
        var dc = FCR(f, Spe, false, true, false);
        SSR("personalview", _t("Tree stats"), (ac ? _t("# ancestor/s", ac) : _t("No ancestors")) + ", " + (dc ? _t("# descendant/s", dc) : _t("No descendants")));
    }
}

function SEN() {
    SR("nameexpandedit", true);
    SS("nameexpand", false);
    GE("personalname").className = "sfield";
}

function SP1(e) {
    var f = Efa;
    var p = f[Spe];
    if (!Sed) {
        SRR("contactview");
        for (var j in Sv1) {
            if (p[j] || ((!staticMode) && (j == "e"))) {
                if (j == "e") {
                    SSR("contactview", Sv1[j], p[j] ? ("<A HREF=\"mailto:" + EH(p[j]) + "\" DIR=\"ltr\">" + EH(p[j]) + "</A>") : "", true);
                } else {
                    if (j == "S") {
                        SSR("contactview", Sv1[j], p[j] ? ("<A HREF=\"callto:" + EH(p[j]) + "\" DIR=\"ltr\">" + EH(p[j]) + "</A>") : "", true);
                    } else {
                        if ((j == "w") || (j == "B") || (j == "P")) {
                            SSR("contactview", Sv1[j], p[j] ? ("<A HREF=\"" + EH(p[j]) + "\" TARGET=\"_new\" onClick=\"return UL(this);\" DIR=\"ltr\">" + EH(p[j]) + "</A>") : "", true);
                        } else {
                            if ((j == "t") || (j == "k") || (j == "u")) {
                                SSR("contactview", Sv1[j], "<SPAN DIR=\"ltr\">" + EH(p[j]) + "<SPAN>", true);
                            } else {
                                SSR("contactview", Sv1[j], p[j], false);
                            }
                        }
                    }
                }
            }
        }
        if (staticMode && !Esa) {
            SJR("contactview", "&nbsp;<BR>" + _h("To protect your privacy, phone numbers, addresses and emails have been removed."), true, 2);
        }
    }
}

function SP2(e) {
    var f = Efa;
    var p = f[Spe];
    if (Sed) {
        if (e) {
            SH("burialdate", SDH("burial", "SCV('burial');"));
            SSD("burial", p.F);
        }
    } else {
        SRR("bioview");
        for (var j in Sv2) {
            if (p[j] || (j == "v") || (j == "y")) {
                if (((j != "y") && (j != "U") && (j != "F")) || (p.z == 1)) {
                    var h = false;
                    if (j == "F") {
                        v = FDT(p[j], true);
                    } else {
                        if ((j == "j") || (j == "E") || (j == "I") || (j == "A") || (j == "o")) {
                            v = CU(EL(p[j]));
                            h = true;
                        } else {
                            v = p[j];
                        }
                    }
                    SSR("bioview", Sv2[j], v, h);
                }
            }
        }
    }
}

function S3R(f, p, pi, rc) {
    if (rc && GE("partnersviewedit").firstChild) {
        SLR("partnersviewedit", 2);
    }
    var cp = (p.s == pi) || (p.ep && (p.ep[pi] == 2)) || (p.z == 1);
    var pl = (p.z != 1) && (f[pi].z == 1);
    var gpi = new String(p.gp ? (p.gp[pi] || "") : "");
    var _77 = (gpi.charAt(0) == "o");
    if (gpi == "m") {
        var t = {m: _t("Marriage date"), w: _t("Location"), z: ((cp || pl) ? "" : _t("End date"))};
    } else {
        if (gpi == "e") {
            var t = {r: _t("Engagement date"), z: ((cp || pl) ? "" : _t("End date"))};
        } else {
            if (gpi == "s") {
                var t = {m: _t("Marriage date"), w: _t("Location"), s: _t("Separation date")};
            } else {
                if (gpi == "d") {
                    var t = {m: _t("Marriage date"), w: _t("Location"), d: _t("Divorce date")};
                } else {
                    if (gpi == "a") {
                        var t = {m: _t("Marriage date"), w: _t("Location"), a: _t("Annulment date")};
                    } else {
                        if (_77 || (gpi == "r")) {
                            var t = {b: _t("Start date"), z: ((p.s == pi) ? "" : _t("End date"))};
                        } else {
                            var t = {};
                        }
                    }
                }
            }
        }
    }
    if (rc) {
        SSR("partnersviewedit", FTP(f, p, pi, f[pi]), "<A HREF=\"#\" onClick=\"ESP('" + pi + "', true); return false;\">" + EH(SPN(f[pi])) + "</A>" + ((_77 && (gpi.length > 1) && !Sed) ? (" (" + gpi.substring(1) + ")") : ""), true);
    }
    if (Sed) {
        var e = "partner" + pi + "g";
        if (rc) {
            SSR("partnersviewedit", "Type", "<SELECT ID=\"" + EH(e) + "\" CLASS=\"sselect\" onChange=\"SCP('g', '" + EH(pi) + "')\"></SELECT><DIV ID=\"" + EH(e) + "odiv\" STYLE=\"margin-top:4px; display:none;\"><INPUT ID=\"" + EH(e) + "o\" class=\"sfield\" onchange=\"SCP('go', '" + EH(pi) + "')\"></DIV>", true, "baseline");
            var v = GE(e);
            v.options.length = 0;
            v.options[v.options.length] = new Option("", "");
            for (var j in Spt) {
                v.options[v.options.length] = new Option(Spt[j], j);
            }
            if (_77) {
                SV(e + "o", gpi.substring(1));
            }
        }
        SO(e, gpi.charAt(0));
        GE(e + "odiv").style.display = _77 ? "block" : "none";
        for (var ti in t) {
            if (t[ti]) {
                var tpi = p[ti + "p"] ? p[ti + "p"][pi] : "";
                if (ti == "w") {
                    var e = "partner" + pi + ti;
                    if (rc) {
                        SSR("partnersviewedit", t[ti], "<INPUT ID=\"" + EH(e) + "\" CLASS=\"sfield\" onChange=\"SCP('" + ti + "', '" + EH(pi) + "');\">", true, "middle");
                    }
                    SV(e, tpi);
                } else {
                    S3D(pi, t[ti], ti, tpi, rc);
                }
            }
        }
    } else {
        if (rc) {
            for (var ti in t) {
                if (t[ti]) {
                    var tpi = p[ti + "p"] ? p[ti + "p"][pi] : "";
                    SSR("partnersviewedit", t[ti], (ti == "w") ? tpi : FDT(tpi, true), false);
                }
            }
        }
    }
}

function S3D(pi, t, ti, d, rc) {
    if (rc) {
        var s = EH(pi + ti);
        var o = "SCP('" + EH(ti) + "', '" + EH(pi) + "');";
        var h = SDH("partner" + s, o);
        SSR("partnersviewedit", t, h, true, "baseline");
        SSD("partner" + pi + ti, d);
    }
}

function SDH(i, c) {
    return "<SPAN ID=\"" + i + "options\" STYLE=\"display:none;\"><SELECT ID=\"" + i + "variant\" CLASS=\"sselect\" onChange=\"" + c + "\"></SELECT>&nbsp;" + "<SPAN TITLE=\"" + _h("Before the Common Era (BC)") + "\"><INPUT ID=\"" + i + "bce\" TYPE=\"checkbox\" onClick=\"" + c + "\"><LABEL FOR=\"" + i + "bce\">" + _h("BCE") + "</LABEL></SPAN><br/></SPAN>" + "<SELECT ID=\"" + i + "dom1\" CLASS=\"sselect\" TITLE=\"" + _h("Day") + "\" onChange=\"" + c + "\"></SELECT>&nbsp;" + "<SELECT ID=\"" + i + "month1\" CLASS=\"sselect\" TITLE=\"" + _h("Month") + "\" onChange=\"" + c + "\"></SELECT>&nbsp;" + "<INPUT ID=\"" + i + "year1\" CLASS=\"syear\" TITLE=\"" + _h("Year") + "\" onChange=\"" + c + "\" MAXLENGTH=4>" + "<SPAN ID=\"" + i + "expand\"> <A HREF=\"#\" CLASS=\"sdatelink\" onClick=\"SDR('" + i + "')\" TITLE=\"" + _h("Show more date options") + "\">" + (locale_rtl ? "&#x25C4;" : "&#x25BA;") + "</A></SPAN>" + "<SPAN ID=\"" + i + "date2\" STYLE=\"display:none;\"> to<br/>" + "<SELECT ID=\"" + i + "dom2\" CLASS=\"sselect\" TITLE=\"" + _h("Day") + "\" onChange=\"" + c + "\"></SELECT>&nbsp;" + "<SELECT ID=\"" + i + "month2\" CLASS=\"sselect\" TITLE=\"" + _h("Month") + "\" onChange=\"" + c + "\"></SELECT>&nbsp;" + "<INPUT ID=\"" + i + "year2\" CLASS=\"syear\" TITLE=\"" + _h("Year") + "\" onChange=\"" + c + "\" MAXLENGTH=4>" + " <A HREF=\"#\" CLASS=\"sdatelink\" onClick=\"SWR('" + i + "')\" TITLE=\"" + _h("Swap two dates") + "\" STYLE=\"font-weight:bold;\">&#x21C5;</A></SPAN>";
}

function SDR(i) {
    SS(i + "options", true);
    SS(i + "expand", false);
}

function SWR(i) {
    WV(i + "dom1", i + "dom2");
    WV(i + "month1", i + "month2");
    WV(i + "year1", i + "year2");
}

function SP3(e) {
    var f = Efa;
    var p = f[Spe];
    var rr = FSS(p, p.s, true);
    if (Sed) {
        var rl = Spe;
        for (var pi in rr) {
            rl += " " + (p.gp ? (p.gp[pi] || "").charAt(0) : "") + pi + (p.ep ? (p.ep[pi] || "").charAt(0) : "");
        }
        var rc = (rl != Srl);
        Srl = rl;
    } else {
        Srl = null;
        var rc = true;
    }
    if (rc) {
        SRR("partnersviewedit");
    }
    for (var pi in rr) {
        S3R(f, p, pi, rc);
    }
}

function SP4(e) {
    SRR("filesview");
    var p = Efa[Spe];
    var l = 0;
    if (p.fs) {
        var fs = [];
        for (var j in p.fs) {
            var f = Eff[j];
            if (f) {
                fs[l] = Eff[j];
                fs[l].i = j;
                l++;
            }
        }
    }
    var t = GE("filesview");
    if (l) {
        fs.sort(DSD);
        for (var j = 0; j < l; j++) {
            var f = fs[j];
            var h = "";
            if (Edd) {
                if (DTV(f.t)) {
                    h += "<a href=\"#\" title=\"" + _h("View $1 $2", DSH(f.s), DTH(f.t)) + "\" onclick=\"DSI('" + f.i + "'); return false;\">";
                } else {
                    h += "<a href=\"" + EH(DGU(f.i, true)) + "\" title=\"" + _h("Download $1 $2", DSH(f.s), DTH(f.t)) + "\">";
                }
            }
            h += EH(f.n || _t("Untitled")) + (Edd ? "</a>" : "") + (f.d ? (" &ndash; " + f.d) : "");
            var c = document.createElement("TD");
            c.className = "fboth";
            c.colSpan = 2;
            c.innerHTML = h;
            var r = document.createElement("TR");
            r.appendChild(c);
            t.appendChild(r);
        }
    } else {
        var c = document.createElement("TD");
        c.className = "fboth";
        c.colSpan = 2;
        c.style.textAlign = "center";
        c.innerHTML = _h("This person has no files attached.");
        var r = document.createElement("TR");
        r.appendChild(c);
        t.appendChild(r);
    }
}

function SSG(v) {
    EFC(Spe, {g: v});
    EUF();
}

function SCV(i) {
    if (i == "birth") {
        EFC(Spe, {b: SGD("birth")});
        SHD("birth");
    } else {
        if (i == "death") {
            EFC(Spe, {d: SGD("death")});
            SHD("death");
        } else {
            if (i == "burial") {
                EFC(Spe, {F: SGD("burial")});
                SHD("burial");
            } else {
                if (i == "alive") {
                    EFC(Spe, {z: (GE(i).checked ? "0" : "1")});
                } else {
                    if (i == "othergender") {
                        EFC(Spe, {g: "o" + GV(i)});
                    } else {
                        for (var k = 0; k < Sen.length; k++) {
                            for (var j in Sen[k]) {
                                if (i == Sen[k][j]) {
                                    var c = {};
                                    var v = new String(GV(i));
                                    v = v.replace(/^\s+|\s+$/g, "");
                                    if ((j == "p") || (j == "l") || (j == "q")) {
                                        var s = v.split(" ");
                                        for (var w = 0; w < s.length; w++) {
                                            if ((s[w].length) && (Sec.indexOf("," + s[w] + ",") < 0) && (s[w].indexOf("'") < 0) && (s[w].indexOf("-") < 0)) {
                                                var cp = s[w].codePointAt(0);
                                                if ((cp < 4256) || (cp > 4351)) {
                                                    s[w] = s[w].charAt(0).toUpperCase() + s[w].substring(1);
                                                }
                                            }
                                        }
                                        v = s.join(" ");
                                    }
                                    if ((j == "w") || (j == "B") || (j == "P")) {
                                        if (v.length && (v.indexOf("://") < 0)) {
                                            v = "http://" + v;
                                        }
                                    }
                                    c[j] = v;
                                    EFC(Spe, c);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    EUF();
}

function SCP(ti, pi) {
    var e = "partner" + pi + ti;
    var c = {};
    var oth = false;
    if (ti == "g") {
        c[ti] = GO(e);
    } else {
        if (ti == "go") {
            c["g"] = "o" + GV(e);
        } else {
            if (ti == "w") {
                c[ti] = GV(e);
            } else {
                c[ti] = SGD(e);
                SHD(e);
            }
        }
    }
    EPC(Spe, pi, c);
    EUF();
    if ((ti == "g") && (c[ti] == "o")) {
        FS(e + "o");
    }
}

function SCM(s) {
    var f = Efa;
    var tm = GO("treemother" + s);
    var tf = GO("treefather" + s);
    SPP("treefather" + s, FAL(f, Spe, tm), tm ? f[tm].es : tf, true);
    if (!GO("treefather" + s)) {
        SO("treefather" + s, f[Spe][(s == 1) ? "f" : ((s == 2) ? "X" : "K")]);
    }
    SUT("treemother" + s, true);
    SUT("treefather" + s, false);
}

function SCF(s) {
    SUT("treefather" + s, false);
}

function SCT(s) {
    var b2 = (GO("treeparenttype1") != "b");
    if (s < 2) {
        SPT("treeparenttype2", b2, GO("treeparenttype2"));
    }
    if (s < 3) {
        SPT("treeparenttype3", b2 && (GO("treeparenttype2") != "b"), GO("treeparenttype3"));
    }
}

function SFV(i) {
    if (!GV(i)) {
        if (i == "familybirth") {
            var sn = GV("familyname");
            if (sn) {
                EFC(Spe, {q: sn});
                SV(i, sn);
                if (GV(i)) {
                    GE(i).blur();
                    setTimeout("FS('" + i + "')", 0);
                }
            }
        }
    }
}

function SAP(f, p, oi, spt, spm, apt, apm) {
    if (oi) {
        var op = f[oi];
    }
    var ps = [p.m1, p.f1, p.m2, p.f2, p.m3, p.f3];
    var hp = {};
    for (var j = 0; j < ps.length; j++) {
        if (ps[j]) {
            hp[ps[j]] = true;
        }
    }
    if (oi && (op.es || op.cp)) {
        if ((op.es) && !hp[op.es]) {
            SRB(_t(spt, SPN(f[op.es])), spm, op.es);
        }
        for (var pi in op.pc) {
            if ((pi != op.es) && !hp[pi]) {
                SRB(_t(spt, SPN(f[pi])), spm, pi);
            }
        }
        if (apm) {
            SRB(apt, apm, "");
        }
    } else {
        if (apm) {
            SCB(apm, "");
        }
    }
}

function SPX(f, i1, i2, ap) {
    if (i1 && i2 && f[i1] && f[i2] && (ap || !FRP(f, i1, i2))) {
        if (!(f[i1].ep && f[i1].ep[i2] && f[i2].ep && f[i2].ep[i1])) {
            EPC(i1, i2, {e: 1});
        }
    }
}

function SCB(i, v) {
    var f = Efa;
    var p = f[Spe];
    if ((i == "addparents") || (i == "addparentsstop")) {
        if (i == "addparents") {
            ECS();
        }
        var pd = (p.z == 1) && (p.c.length > 0);
        for (var j = 0; j < p.c.length; j++) {
            if (f[p.c[j]].z != 1) {
                pd = false;
            }
        }
        var fi = EFI();
        var fo = {"^": Spe, g: "m", l: p.q};
        if (pd) {
            fo.z = 1;
        }
        EFC(fi, fo);
        var mi = EFI();
        var mo = {"^": Spe, g: "f", s: fi, l: p.q};
        if (pd) {
            mo.z = 1;
        }
        EFC(mi, mo);
        EFC(Spe, {m: mi, f: fi});
        if (i == "addparents") {
            ESE(true, [mi, fi], Spe);
        }
    } else {
        if (i == "choosemother") {
            SPR(true);
            SAP(f, p, p.f, _i("Set mother to $"), "setmother", _t("Add new mother"), "addmother");
            SRB(_t("Cancel"), "cancel", "");
        } else {
            if (i == "choosefather") {
                SPR(true);
                SAP(f, p, p.m, _i("Set father to $"), "setfather", _t("Add new father"), "addfather");
                SRB(_t("Cancel"), "cancel", "");
            } else {
                if (i == "choosemother2") {
                    SPR(true);
                    SAP(f, p, p.Y, _i("Set second mother to $"), "setmother2", _t("Add new second mother"), "addmother2");
                    SRB(_t("Cancel"), "cancel", "");
                } else {
                    if (i == "choosefather2") {
                        SPR(true);
                        SAP(f, p, p.X, _i("Set second father to $"), "setfather2", _t("Add new second father"), "addfather2");
                        SRB(_t("Cancel"), "cancel", "");
                    } else {
                        if (i == "choosemother3") {
                            SPR(true);
                            SAP(f, p, p.L, _i("Set third mother to $"), "setmother3", _t("Add new third mother"), "addmother3");
                            SRB(_t("Cancel"), "cancel", "");
                        } else {
                            if (i == "choosefather3") {
                                SPR(true);
                                SAP(f, p, p.K, _i("Set third father to $"), "setfather3", _t("Add new third father"), "addfather3");
                                SRB(_t("Cancel"), "cancel", "");
                            } else {
                                if (i == "changeorder") {
                                    SPR(true);
                                    var ot = p.b && FPD(p.b).y;
                                    var bs = FLS(f, Spe, 1, ot);
                                    for (var j = 0; j < bs.length; j++) {
                                        if (FCC(f[bs[j]], p) >= 0) {
                                            break;
                                        }
                                    }
                                    SRB(_t("Move left (born earlier)"), "moveleft", "");
                                    SRB(_t("Move right (born later)"), "moveright", "");
                                    SRB(_t("Done"), "movedone", "");
                                    SD("moveleft", j <= 0);
                                    SD("moveright", j >= bs.length);
                                } else {
                                    if ((i == "moveleft") || (i == "moveright")) {
                                        var ot = p.b && FPD(p.b).y;
                                        var bs = FLS(f, Spe, 1, ot);
                                        for (var si = 0; si < bs.length; si++) {
                                            if (FCC(f[bs[si]], p) >= 0) {
                                                break;
                                            }
                                        }
                                        for (var j = 0; j < bs.length; j++) {
                                            if (FPO(f[bs[j]], ot) === null) {
                                                EFC(bs[j], {O: FBO(f, bs.slice(0, j), bs.slice(j + 1), ot)});
                                            }
                                        }
                                        var d = (i == "moveleft") ? -1 : 1;
                                        while (true) {
                                            si += d;
                                            if ((si < 0) || (si > bs.length)) {
                                                break;
                                            }
                                            if ((si == 0) || (si == bs.length) || (FPO(f[bs[si - 1]], ot) != FPO(f[bs[si]], ot))) {
                                                EFC(Spe, {O: FBO(f, bs.slice(0, si), bs.slice(si), ot)});
                                                break;
                                            }
                                        }
                                        EUF();
                                        SCB("changeorder", "");
                                    } else {
                                        if (i == "movedone") {
                                            ESS();
                                            SSA(Spa, false);
                                        } else {
                                            if (i == "choosespouse") {
                                                SPR(true);
                                                if (!p.s) {
                                                    for (var pi in p.pc) {
                                                        if (pi != p.s) {
                                                            SRB(_t("Set partner to $", SPN(f[pi])), "setspouse", pi);
                                                        }
                                                    }
                                                }
                                                if (p.s) {
                                                    SRB(_t("Add new primary partner"), "addspouse", "");
                                                    SRB(_t("Add new extra partner"), "addextraspouse", "");
                                                } else {
                                                    SRB(_t("Add new partner"), "addspouse", "");
                                                }
                                                SRB(_t("Add new ex-partner"), "addexspouse", "");
                                                var ra = FPL(f, Spe);
                                                if (ra.length) {
                                                    SRB(_t("Partner with person already on tree"), "treespouse", "");
                                                }
                                                SRB(_t("Cancel"), "cancel", "");
                                            } else {
                                                if (i == "changespouse") {
                                                    SPR(true);
                                                    if (!disable_family_tests) {
                                                        var cf = FDF(f, Spe, null, null, null);
                                                    }
                                                    for (var pi in p.pc) {
                                                        var pp = (pi == p.s);
                                                        var ep = p.ep && (p.ep[pi] == 2);
                                                        if (!pp) {
                                                            SRB(_t("Set primary partner to $", SPN(f[pi])), "setspouse", pi);
                                                        }
                                                        if (pp || ep) {
                                                            SRB(_t("Change $ to ex-partner", SPN(f[pi])), "toexspouse", pi);
                                                        }
                                                        if (pp || !ep) {
                                                            SRB(_t("Change $ to extra partner", SPN(f[pi])), "toextraspouse", pi);
                                                        }
                                                        if (!FLP(f, Spe, pi, true).length) {
                                                            if (!disable_family_tests) {
                                                                var df = FDF(f, Spe, null, Spe, pi);
                                                            }
                                                            if (disable_family_tests || (df.length <= cf.length)) {
                                                                SRB((pp || ep) ? _t("Remove partner $", SPN(f[pi])) : _t("Remove ex-partner $", SPN(f[pi])), "notanyspouse", pi);
                                                            }
                                                        }
                                                    }
                                                    SRB(_t("Cancel"), "cancel", "");
                                                } else {
                                                    if (i == "addchild") {
                                                        SPR(true);
                                                        var vt = v;
                                                        if (v == "a") {
                                                            var bt = {
                                                                ep: _i("Add adopted child with $"),
                                                                np: _i("Add adopted child with new partner"),
                                                                xp: _i("Add adopted child without partner")
                                                            };
                                                        } else {
                                                            if (v == "f") {
                                                                var bt = {
                                                                    ep: _i("Add foster child with $"),
                                                                    np: _i("Add foster child with new partner"),
                                                                    xp: _i("Add foster child without partner")
                                                                };
                                                            } else {
                                                                if (v == "g") {
                                                                    var bt = {
                                                                        ep: _i("Add godchild with $"),
                                                                        np: _i("Add godchild with new partner"),
                                                                        xp: _i("Add godchild without partner")
                                                                    };
                                                                } else {
                                                                    var bt = {
                                                                        ep: _i("Add child with $"),
                                                                        np: _i("Add child with new partner"),
                                                                        xp: _i("Add child without partner")
                                                                    };
                                                                    vt = " ";
                                                                }
                                                            }
                                                        }
                                                        if (p.es) {
                                                            SRB(_t(bt.ep, SPN(f[p.es])), "addchildwith", vt + p.es);
                                                        }
                                                        for (var pi in p.pc) {
                                                            if (pi != p.es) {
                                                                SRB(_t(bt.ep, SPN(f[pi])), "addchildwith", vt + pi);
                                                            }
                                                        }
                                                        SRB(_t(bt.np), "addchildwithnew", v);
                                                        SRB(_t(bt.xp), "addchildwithout", v);
                                                        if (!v) {
                                                            SLR("relactions", 1);
                                                            SRB(_t("Add adopted child"), "addchild", "a");
                                                            SRB(_t("Add foster child"), "addchild", "f");
                                                            SRB(_t("Add godchild"), "addchild", "g");
                                                            SLR("relactions", 1);
                                                        }
                                                        SRB(_t("Cancel"), "cancel", "");
                                                        SJR("relactions", "<BR>" + _h("To add a child who is already on the tree, select that child and set their parent to this person."), true, 1);
                                                    } else {
                                                        if (i == "addchildwith") {
                                                            ECS();
                                                            var ci = EFI();
                                                            var vt = v.substring(0, 1);
                                                            var pi = v.substring(1);
                                                            var mi = FSM(f, Spe, pi) ? Spe : pi;
                                                            var fi = FSM(f, Spe, pi) ? pi : Spe;
                                                            var c = {"^": Spe, m: mi, f: fi};
                                                            if (FRP(f, mi, fi)) {
                                                                c.l = p.l;
                                                                c.q = p.l;
                                                            }
                                                            if ((vt == "a") || (vt == "f") || (vt == "g")) {
                                                                c.V = vt;
                                                            }
                                                            EFC(ci, c);
                                                            ESE(true, [ci], ci);
                                                        } else {
                                                            if ((i == "addchildwithnew") || (i == "addchildwithout")) {
                                                                ECS();
                                                                var ci = EFI();
                                                                var c = {"^": Spe};
                                                                if (p.g == "m") {
                                                                    c.f = Spe;
                                                                } else {
                                                                    c.m = Spe;
                                                                }
                                                                if (v) {
                                                                    c.V = v;
                                                                }
                                                                if (i == "addchildwithnew") {
                                                                    var pi = EFI();
                                                                    if (p.g == "m") {
                                                                        c.m = pi;
                                                                    } else {
                                                                        c.f = pi;
                                                                    }
                                                                    EFC(ci, c);
                                                                    EFC(pi, {"^": ci, g: FIG(p.g)});
                                                                    ESE(true, [ci, pi], ci);
                                                                } else {
                                                                    c.l = p.l;
                                                                    c.q = p.l;
                                                                    EFC(ci, c);
                                                                    ESE(true, [ci], ci);
                                                                }
                                                            } else {
                                                                if (i == "addsibling") {
                                                                    ECS();
                                                                    var ap = !(p.m || p.f);
                                                                    if (ap) {
                                                                        SCB("addparentsstop", "");
                                                                    }
                                                                    var si = EFI();
                                                                    EFC(si, {"^": Spe, m: p.m, f: p.f, l: p.q, q: p.q});
                                                                    ESE(true, ap ? [si, p.m, p.f] : [si], si);
                                                                } else {
                                                                    if (i == "addmother") {
                                                                        ECS();
                                                                        SPX(f, p.f, p.m, false);
                                                                        var mi = EFI();
                                                                        EFC(Spe, {m: mi});
                                                                        EFC(mi, {"^": Spe, g: "f"});
                                                                        ESE(true, [mi], Spe);
                                                                    } else {
                                                                        if (i == "addfather") {
                                                                            ECS();
                                                                            SPX(f, p.f, p.m, false);
                                                                            var fi = EFI();
                                                                            EFC(Spe, {f: fi});
                                                                            EFC(fi, {"^": Spe, g: "m"});
                                                                            ESE(true, [fi], Spe);
                                                                        } else {
                                                                            if (i == "addmother2") {
                                                                                ECS();
                                                                                SPX(f, p.X, p.Y, false);
                                                                                var mi = EFI();
                                                                                EFC(Spe, {X: mi});
                                                                                EFC(mi, {"^": Spe, g: "f"});
                                                                                ESE(true, [mi], Spe);
                                                                            } else {
                                                                                if (i == "addfather2") {
                                                                                    ECS();
                                                                                    SPX(f, p.X, p.Y, false);
                                                                                    var fi = EFI();
                                                                                    EFC(Spe, {Y: fi});
                                                                                    EFC(fi, {"^": Spe, g: "m"});
                                                                                    ESE(true, [fi], Spe);
                                                                                } else {
                                                                                    if (i == "addmother3") {
                                                                                        ECS();
                                                                                        SPX(f, p.K, p.L, false);
                                                                                        var mi = EFI();
                                                                                        EFC(Spe, {K: mi});
                                                                                        EFC(mi, {"^": Spe, g: "f"});
                                                                                        ESE(true, [mi], Spe);
                                                                                    } else {
                                                                                        if (i == "addfather3") {
                                                                                            ECS();
                                                                                            SPX(f, p.K, p.L, false);
                                                                                            var fi = EFI();
                                                                                            EFC(Spe, {L: fi});
                                                                                            EFC(fi, {"^": Spe, g: "m"});
                                                                                            ESE(true, [fi], Spe);
                                                                                        } else {
                                                                                            if (i == "addspouse") {
                                                                                                ECS();
                                                                                                SPX(f, Spe, p.s, true);
                                                                                                var si = EFI();
                                                                                                EFC(si, {
                                                                                                    "^": Spe,
                                                                                                    s: Spe,
                                                                                                    l: p.l
                                                                                                });
                                                                                                ESE(true, [si], Spe);
                                                                                            } else {
                                                                                                if ((i == "addexspouse") || (i == "addextraspouse")) {
                                                                                                    ECS();
                                                                                                    var si = EFI();
                                                                                                    EFC(si, {"^": Spe});
                                                                                                    EPC(Spe, si, {e: ((i == "addextraspouse") ? 2 : 1)});
                                                                                                    ESE(true, [si], Spe);
                                                                                                } else {
                                                                                                    if ((i == "toexspouse") || (i == "toextraspouse")) {
                                                                                                        if (p.s == v) {
                                                                                                            EFC(Spe, {s: ""});
                                                                                                            EFC(v, {s: ""});
                                                                                                        }
                                                                                                        EPC(Spe, v, {e: (i == "toextraspouse") ? 2 : 1});
                                                                                                        ESS();
                                                                                                        EUF();
                                                                                                    } else {
                                                                                                        if (i == "notanyspouse") {
                                                                                                            if (p.s == v) {
                                                                                                                EFC(Spe, {s: ""});
                                                                                                                EFC(v, {s: ""});
                                                                                                            }
                                                                                                            if (p.ep && p.ep[v]) {
                                                                                                                EPC(Spe, v, {e: ""});
                                                                                                            }
                                                                                                            ESS();
                                                                                                            EUF();
                                                                                                        } else {
                                                                                                            if (i == "treespouse") {
                                                                                                                SPR(true);
                                                                                                                SJR("relactions", _t("Choose the person to partner with:"), false, 1);
                                                                                                                SJR("relactions", "<SELECT ID=\"treepartner\" CLASS=\"sselect\"></SELECT>", true, 1);
                                                                                                                SLR("relactions", 1);
                                                                                                                if (p.s) {
                                                                                                                    SRB(_t("Add as primary partner"), "treeaddspouse", "");
                                                                                                                    SRB(_t("Add as extra partner"), "treeaddextraspouse", "");
                                                                                                                } else {
                                                                                                                    SRB(_t("Add as partner"), "treeaddspouse", "");
                                                                                                                }
                                                                                                                SRB(_t("Add as ex-partner"), "treeaddexspouse", "");
                                                                                                                SRB(_t("Cancel"), "cancel", "");
                                                                                                                SPP("treepartner", FPL(f, Spe), null, true, true);
                                                                                                            } else {
                                                                                                                if (i == "treeaddspouse") {
                                                                                                                    var si = GO("treepartner");
                                                                                                                    if (si) {
                                                                                                                        SCB("setspouse", si);
                                                                                                                    }
                                                                                                                } else {
                                                                                                                    if ((i == "treeaddexspouse") || (i == "treeaddextraspouse")) {
                                                                                                                        var si = GO("treepartner");
                                                                                                                        if (si) {
                                                                                                                            ECS();
                                                                                                                            EPC(Spe, si, {e: (i == "treeaddextraspouse") ? 2 : 1});
                                                                                                                            ESS();
                                                                                                                            EUF();
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        if (i == "setmother") {
                                                                                                                            SPX(f, p.f, p.m, false);
                                                                                                                            EFC(Spe, {m: v});
                                                                                                                            ESS();
                                                                                                                            EUF();
                                                                                                                        } else {
                                                                                                                            if (i == "setfather") {
                                                                                                                                SPX(f, p.f, p.m, false);
                                                                                                                                EFC(Spe, {f: v});
                                                                                                                                ESS();
                                                                                                                                EUF();
                                                                                                                            } else {
                                                                                                                                if (i == "setmother2") {
                                                                                                                                    SPX(f, p.X, p.Y, false);
                                                                                                                                    EFC(Spe, {X: v});
                                                                                                                                    ESS();
                                                                                                                                    EUF();
                                                                                                                                } else {
                                                                                                                                    if (i == "setfather2") {
                                                                                                                                        SPX(f, p.X, p.Y, false);
                                                                                                                                        EFC(Spe, {Y: v});
                                                                                                                                        ESS();
                                                                                                                                        EUF();
                                                                                                                                    } else {
                                                                                                                                        if (i == "setmother3") {
                                                                                                                                            SPX(f, p.K, p.L, false);
                                                                                                                                            EFC(Spe, {K: v});
                                                                                                                                            ESS();
                                                                                                                                            EUF();
                                                                                                                                        } else {
                                                                                                                                            if (i == "setfather3") {
                                                                                                                                                SPX(f, p.K, p.L, false);
                                                                                                                                                EFC(Spe, {L: v});
                                                                                                                                                ESS();
                                                                                                                                                EUF();
                                                                                                                                            } else {
                                                                                                                                                if (i == "setstepmother2") {
                                                                                                                                                    SPX(f, p.X, p.Y, false);
                                                                                                                                                    EFC(Spe, {
                                                                                                                                                        X: v,
                                                                                                                                                        W: "s"
                                                                                                                                                    });
                                                                                                                                                    ESS();
                                                                                                                                                    EUF();
                                                                                                                                                } else {
                                                                                                                                                    if (i == "setstepfather2") {
                                                                                                                                                        SPX(f, p.X, p.Y, false);
                                                                                                                                                        EFC(Spe, {
                                                                                                                                                            Y: v,
                                                                                                                                                            W: "s"
                                                                                                                                                        });
                                                                                                                                                        ESS();
                                                                                                                                                        EUF();
                                                                                                                                                    } else {
                                                                                                                                                        if (i == "setstepmother3") {
                                                                                                                                                            SPX(f, p.K, p.L, false);
                                                                                                                                                            EFC(Spe, {
                                                                                                                                                                K: v,
                                                                                                                                                                Q: "s"
                                                                                                                                                            });
                                                                                                                                                            ESS();
                                                                                                                                                            EUF();
                                                                                                                                                        } else {
                                                                                                                                                            if (i == "setstepfather3") {
                                                                                                                                                                SPX(f, p.K, p.L, false);
                                                                                                                                                                EFC(Spe, {
                                                                                                                                                                    L: v,
                                                                                                                                                                    Q: "s"
                                                                                                                                                                });
                                                                                                                                                                ESS();
                                                                                                                                                                EUF();
                                                                                                                                                            } else {
                                                                                                                                                                if (i == "setspouse") {
                                                                                                                                                                    SPX(f, Spe, p.s, true);
                                                                                                                                                                    if (v) {
                                                                                                                                                                        SPX(f, v, f[v].s, true);
                                                                                                                                                                    }
                                                                                                                                                                    EFC(Spe, {s: v});
                                                                                                                                                                    ESS();
                                                                                                                                                                    EUF();
                                                                                                                                                                } else {
                                                                                                                                                                    if (i == "treeparents") {
                                                                                                                                                                        SPR(true);
                                                                                                                                                                        for (var j = 1; j <= 3; j++) {
                                                                                                                                                                            if (j == 2) {
                                                                                                                                                                                var lt = {
                                                                                                                                                                                    p: _h("Second parents"),
                                                                                                                                                                                    t: _h("Type of second parents")
                                                                                                                                                                                };
                                                                                                                                                                            } else {
                                                                                                                                                                                if (j == 3) {
                                                                                                                                                                                    var lt = {
                                                                                                                                                                                        p: _h("Third parents"),
                                                                                                                                                                                        t: _h("Type of third parents")
                                                                                                                                                                                    };
                                                                                                                                                                                } else {
                                                                                                                                                                                    var lt = {
                                                                                                                                                                                        p: _h("Primary parents"),
                                                                                                                                                                                        t: _h("Type of primary parents")
                                                                                                                                                                                    };
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                            SJR("relactions", lt.p + " &ndash; <SPAN ID=\"treemother" + j + "title\">" + _h("mother") + "</SPAN>:", true, 1);
                                                                                                                                                                            SJR("relactions", "<SELECT ID=\"treemother" + j + "\" CLASS=\"sselect\" onChange=\"SCM(" + j + ")\"></SELECT>", true, 1);
                                                                                                                                                                            SLR("relactions", 1);
                                                                                                                                                                            SJR("relactions", lt.p + " &ndash; <SPAN ID=\"treefather" + j + "title\">" + _h("father") + "</SPAN>:", true, 1);
                                                                                                                                                                            SJR("relactions", "<SELECT ID=\"treefather" + j + "\" CLASS=\"sselect\" onChange=\"SCF(" + j + ")\"></SELECT>", true, 1);
                                                                                                                                                                            SLR("relactions", 1);
                                                                                                                                                                            SJR("relactions", lt.t + ":", true, 1);
                                                                                                                                                                            SJR("relactions", "<SELECT ID=\"treeparenttype" + j + "\" CLASS=\"sselect\" onChange=\"SCT(" + j + ")\"></SELECT>", true, 1);
                                                                                                                                                                            SLR("relactions", 1);
                                                                                                                                                                            SLR("relactions", 1);
                                                                                                                                                                        }
                                                                                                                                                                        SRB(_t("OK"), "treesetparents", "");
                                                                                                                                                                        SRB(_t("Switch primary and second parents"), "switchparents", "");
                                                                                                                                                                        SRB(_t("Cancel"), "cancel", "");
                                                                                                                                                                        SPP("treemother1", FAL(f, Spe, null), p.m, true);
                                                                                                                                                                        SPP("treefather1", FAL(f, Spe, p.m), p.f, true);
                                                                                                                                                                        SPP("treemother2", FAL(f, Spe, null), p.X, true);
                                                                                                                                                                        SPP("treefather2", FAL(f, Spe, p.X), p.Y, true);
                                                                                                                                                                        SPP("treemother3", FAL(f, Spe, null), p.K, true);
                                                                                                                                                                        SPP("treefather3", FAL(f, Spe, p.K), p.L, true);
                                                                                                                                                                        SPT("treeparenttype1", true, p.V);
                                                                                                                                                                        SPT("treeparenttype2", p.V != "b", p.W);
                                                                                                                                                                        SPT("treeparenttype3", (p.V != "b") && (p.W != "b"), p.Q);
                                                                                                                                                                        SUT("treemother1", true);
                                                                                                                                                                        SUT("treefather1", false);
                                                                                                                                                                        SUT("treemother2", true);
                                                                                                                                                                        SUT("treefather2", false);
                                                                                                                                                                        SUT("treemother3", true);
                                                                                                                                                                        SUT("treefather3", false);
                                                                                                                                                                    } else {
                                                                                                                                                                        if ((i == "switchparents") || (i == "treesetparents")) {
                                                                                                                                                                            var s = {
                                                                                                                                                                                m: GO("treemother1"),
                                                                                                                                                                                f: GO("treefather1"),
                                                                                                                                                                                V: GO("treeparenttype1"),
                                                                                                                                                                                X: GO("treemother2"),
                                                                                                                                                                                Y: GO("treefather2"),
                                                                                                                                                                                W: GO("treeparenttype2"),
                                                                                                                                                                                K: GO("treemother3"),
                                                                                                                                                                                L: GO("treefather3"),
                                                                                                                                                                                Q: GO("treeparenttype3")
                                                                                                                                                                            };
                                                                                                                                                                            if (i == "switchparents") {
                                                                                                                                                                                s = {
                                                                                                                                                                                    m: s.X,
                                                                                                                                                                                    f: s.Y,
                                                                                                                                                                                    V: s.W,
                                                                                                                                                                                    X: s.m,
                                                                                                                                                                                    Y: s.f,
                                                                                                                                                                                    W: s.V
                                                                                                                                                                                };
                                                                                                                                                                            }
                                                                                                                                                                            var n = {};
                                                                                                                                                                            var o = {};
                                                                                                                                                                            for (var j in s) {
                                                                                                                                                                                if (s[j] != (p[j] || "")) {
                                                                                                                                                                                    n[j] = s[j];
                                                                                                                                                                                    o[j] = p[j];
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                            if (!disable_family_tests) {
                                                                                                                                                                                var cf = FDF(f, Spe, null, null, null);
                                                                                                                                                                            }
                                                                                                                                                                            SPX(f, p.f, p.m, false);
                                                                                                                                                                            SPX(f, p.X, p.Y, false);
                                                                                                                                                                            SPX(f, p.K, p.L, false);
                                                                                                                                                                            EFC(Spe, n);
                                                                                                                                                                            EUS(true, null, null, false, false);
                                                                                                                                                                            if (!disable_family_tests) {
                                                                                                                                                                                var df = FDF(f, Spe, null, null, null);
                                                                                                                                                                            }
                                                                                                                                                                            if ((!disable_family_tests) && (df.length > cf.length)) {
                                                                                                                                                                                RE(_t("This choice of parents is not allowed because it would split the tree. Please try deleting the parents and their relatives instead, or deleting this person."));
                                                                                                                                                                                EFC(Spe, o);
                                                                                                                                                                            }
                                                                                                                                                                            ESS();
                                                                                                                                                                            EUF();
                                                                                                                                                                        } else {
                                                                                                                                                                            if (i == "addparents2") {
                                                                                                                                                                                SPR(true);
                                                                                                                                                                                SRB(_t("Add adopted parents"), "addparents2go", "a");
                                                                                                                                                                                SRB(_t("Add foster parents"), "addparents2go", "f");
                                                                                                                                                                                SRB(_t("Add godmother"), "addgodparent", "2m");
                                                                                                                                                                                SRB(_t("Add godfather"), "addgodparent", "2f");
                                                                                                                                                                                if (p.V) {
                                                                                                                                                                                    if (p.V != "b") {
                                                                                                                                                                                        SRB(_t("Add biological parents"), "addparents2go", "b");
                                                                                                                                                                                    }
                                                                                                                                                                                } else {
                                                                                                                                                                                    SRB(_t("Add biological parents (was adopted)"), "addparents2go", "ba");
                                                                                                                                                                                    SRB(_t("Add biological parents (was fostered)"), "addparents2go", "bf");
                                                                                                                                                                                }
                                                                                                                                                                                SAP(f, p, p.f, _i("Set stepmother to $"), "setstepmother2", null, null);
                                                                                                                                                                                SAP(f, p, p.m, _i("Set stepfather to $"), "setstepfather2", null, null);
                                                                                                                                                                                SRB(_t("Choose parents from tree"), "treeparents", "");
                                                                                                                                                                                SRB(_t("Cancel"), "cancel", "");
                                                                                                                                                                            } else {
                                                                                                                                                                                if (i == "addparents3") {
                                                                                                                                                                                    SPR(true);
                                                                                                                                                                                    SRB(_t("Add adopted parents"), "addparents3go", "a");
                                                                                                                                                                                    SRB(_t("Add foster parents"), "addparents3go", "f");
                                                                                                                                                                                    SRB(_t("Add godmother"), "addgodparent", "3m");
                                                                                                                                                                                    SRB(_t("Add godfather"), "addgodparent", "3f");
                                                                                                                                                                                    SAP(f, p, p.f, _i("Set stepmother to $"), "setstepmother3", null, null);
                                                                                                                                                                                    SAP(f, p, p.m, _i("Set stepfather to $"), "setstepfather3", null, null);
                                                                                                                                                                                    SRB(_t("Choose parents from tree"), "treeparents", "");
                                                                                                                                                                                    SRB(_t("Cancel"), "cancel", "");
                                                                                                                                                                                } else {
                                                                                                                                                                                    if ((i == "addparents2go") || (i == "addparents3go")) {
                                                                                                                                                                                        ECS();
                                                                                                                                                                                        var fi = EFI();
                                                                                                                                                                                        var fo = {
                                                                                                                                                                                            "^": Spe,
                                                                                                                                                                                            g: "m"
                                                                                                                                                                                        };
                                                                                                                                                                                        EFC(fi, fo);
                                                                                                                                                                                        var mi = EFI();
                                                                                                                                                                                        var mo = {
                                                                                                                                                                                            "^": Spe,
                                                                                                                                                                                            g: "f",
                                                                                                                                                                                            s: fi
                                                                                                                                                                                        };
                                                                                                                                                                                        EFC(mi, mo);
                                                                                                                                                                                        if (i == "addparents2go") {
                                                                                                                                                                                            var po = {
                                                                                                                                                                                                X: mi,
                                                                                                                                                                                                Y: fi,
                                                                                                                                                                                                W: v.substring(0, 1)
                                                                                                                                                                                            };
                                                                                                                                                                                            var t1 = v.substring(1, 2);
                                                                                                                                                                                            if (t1) {
                                                                                                                                                                                                po.V = t1;
                                                                                                                                                                                            }
                                                                                                                                                                                        } else {
                                                                                                                                                                                            var po = {
                                                                                                                                                                                                K: mi,
                                                                                                                                                                                                L: fi,
                                                                                                                                                                                                Q: v.substring(0, 1)
                                                                                                                                                                                            };
                                                                                                                                                                                        }
                                                                                                                                                                                        EFC(Spe, po);
                                                                                                                                                                                        ESE(true, [mi, fi], Spe);
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (i == "addgodparent") {
                                                                                                                                                                                            ECS();
                                                                                                                                                                                            switch (v) {
                                                                                                                                                                                                case "2m":
                                                                                                                                                                                                    var g = "f";
                                                                                                                                                                                                    var a = "X";
                                                                                                                                                                                                    var t = "W";
                                                                                                                                                                                                    break;
                                                                                                                                                                                                case "2f":
                                                                                                                                                                                                    var g = "m";
                                                                                                                                                                                                    var a = "Y";
                                                                                                                                                                                                    var t = "W";
                                                                                                                                                                                                    break;
                                                                                                                                                                                                case "3m":
                                                                                                                                                                                                    var g = "f";
                                                                                                                                                                                                    var a = "K";
                                                                                                                                                                                                    var t = "Q";
                                                                                                                                                                                                    break;
                                                                                                                                                                                                case "3f":
                                                                                                                                                                                                    var g = "m";
                                                                                                                                                                                                    var a = "L";
                                                                                                                                                                                                    var t = "Q";
                                                                                                                                                                                                    break;
                                                                                                                                                                                            }
                                                                                                                                                                                            var fi = EFI();
                                                                                                                                                                                            var fo = {
                                                                                                                                                                                                "^": Spe,
                                                                                                                                                                                                g: g
                                                                                                                                                                                            };
                                                                                                                                                                                            EFC(fi, fo);
                                                                                                                                                                                            var po = {};
                                                                                                                                                                                            po[a] = fi;
                                                                                                                                                                                            po[t] = "g";
                                                                                                                                                                                            EFC(Spe, po);
                                                                                                                                                                                            ESE(true, [fi], Spe);
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (i == "delete") {
                                                                                                                                                                                                var p = Efa[v];
                                                                                                                                                                                                if (confirm(_t("Are you sure you want to permanently delete $?", SPN(p)))) {
                                                                                                                                                                                                    var ni = p["^"];
                                                                                                                                                                                                    if ((!ni) || (!f[ni])) {
                                                                                                                                                                                                        ni = p["^"] || p.es || p.f || p.m || p.X || p.Y || p.K || p.L || p.c[0];
                                                                                                                                                                                                    }
                                                                                                                                                                                                    ECS();
                                                                                                                                                                                                    SPX(f, p.f, p.m, false);
                                                                                                                                                                                                    SPX(f, p.X, p.Y, false);
                                                                                                                                                                                                    SPX(f, p.K, p.L, false);
                                                                                                                                                                                                    ESP(ni, true);
                                                                                                                                                                                                    EFC(v, {x: ""});
                                                                                                                                                                                                    EUF();
                                                                                                                                                                                                }
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (i == "cancel") {
                                                                                                                                                                                                    SSA(Spa, false);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (i == "morelactions") {
                                                                                                                                                                                                        SRP(true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (i == "startbranch") {
                                                                                                                                                                                                            var md = (GV("personid") == Spe);
                                                                                                                                                                                                            if (confirm((md ? _t("This will create a new family for your relatives.") : _t("This will create a new family for $'s relatives.", p.h)) + " " + _t("Are you sure you want to proceed?"))) {
                                                                                                                                                                                                                GE("startbranch").value = _t("Please wait a few moments...");
                                                                                                                                                                                                                EFB(Spe);
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
    }
}

function NSN(a, b) {
    if (a.l < b.l) {
        return -1;
    } else {
        if (b.l < a.l) {
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
    return 0;
}

function SSD(i, d) {
    var v = GE(i + "variant");
    v.options.length = 0;
    for (var j in Fvn) {
        v.options[v.options.length] = new Option(Fvn[j], j);
    }
    for (var n = 1; n <= 2; n++) {
        var v = GE(i + "dom" + n);
        v.options.length = 0;
        v.options[v.options.length] = new Option("", 0);
        for (var j = 1; j <= 31; j++) {
            v.options[v.options.length] = new Option(j, j);
        }
        var v = GE(i + "month" + n);
        v.options.length = 0;
        v.options[v.options.length] = new Option("", 0);
        for (var j = 1; j <= 12; j++) {
            v.options[v.options.length] = new Option(Fmn[j], j);
        }
    }
    var p = FPS(d ? d.toString() : "");
    var bce = (p.y1 < 0) || (p.y2 < 0);
    SV(i + "variant", p.v);
    GE(i + "bce").checked = bce;
    SS(i + "options", p.v || bce);
    SS(i + "expand", !(p.v || bce));
    SO(i + "dom1", p.d1);
    SO(i + "month1", p.m1);
    SV(i + "year1", bce ? -p.y1 : p.y1);
    SO(i + "dom2", p.d2);
    SO(i + "month2", p.m2);
    SV(i + "year2", bce ? -p.y2 : p.y2);
    SHD(i);
}

function SHD(i) {
    var v = GV(i + "variant");
    SS(i + "date2", v == "bet");
}

function SXD(i) {
    SS(i + "options", true);
    SS(i + "expand", false);
}

function SGD(i) {
    var y1 = GV(i + "year1");
    var y2 = GV(i + "year2");
    if (GE(i + "bce").checked) {
        y1 = -y1;
        y2 = -y2;
    }
    return FBS(GV(i + "variant"), GV(i + "dom1"), GV(i + "month1"), y1, GV(i + "dom2"), GV(i + "month2"), y2);
}

function SIU(u) {
    var p = Efa[Spe];
    var r = p ? p.r : null;
    var pw = (!Sed) && SPW(Spe) && GV("familyid");
    u = u && pw;
    if (u) {
        var v = GE("uploadiframe");
        v.src = "imageupload.php?f=" + escape(GV("familyid")) + "&p=" + escape(GV("personid")) + "&c=" + escape(GV("checksum")) + "&i=" + escape(Spe) + (r ? "&r=" + escape(r) : "") + (EID() ? "&d=1" : "");
    } else {
        if (r) {
            var v = GE("personimage");
            SIV(r, v);
            v.title = pw ? _t("Click to change photo") : "";
        }
    }
    SV("uploadbutton", (Spe == GV("personid")) ? _t("Add my photo") : _t("Add photo for $", p.h));
    SS("uploadbutton", pw && (!r) && (!u));
    SS("uploadiframe", u);
    SS("personimage", r && (!u));
}

function SIV(r, v) {
    var e = r.split(" ");
    var s = EIU(e[0]);
    if (v.src != s) {
        if (e[1] && e[2]) {
            v.style.width = Math.max(8, e[1]) + "px";
            v.style.height = Math.max(8, e[2]) + "px";
        } else {
            v.style.width = "";
            v.style.height = "";
            v.className = "blankpixel";
        }
        v.src = s;
    }
}

function SIC() {
    if (SPW(Spe) && !Sed) {
        SIU(true);
    }
}

function SIF(f, i, r, w, h) {
    EFC(i, {r: (r ? (r + " " + w + " " + h) : r)});
    ESS();
    EUF();
    SIU(false);
}

function SIA() {
    SIU(false);
}

function SCC() {
    if (confirm(_t("Are you sure you want to clear this entire family and start again?") + " " + _t("None of your work will be saved!"))) {
        ESA();
    }
}

function SUP(i) {
    if (i) {
        ST("pathtitle", SPN(Efa[i]));
        Sps = GV("personid");
        if (!(Sps && Efa[Sps])) {
            Sps = Efo;
        }
        Spd = i;
    }
    SH("pathcontent", TPH(Efa, FCP(Efa, Sps, Spd, true, true || GE("pathmarried").checked), NGB(), NGS(), false));
    SSP(Spe);
}

function SSP(i) {
    var p = Efa[i];
    var e = GE("path-" + Spl);
    if (e) {
        e.className = "pi";
    }
    var e = GE("path-" + i);
    if (e) {
        e.className = "ps";
    }
    Spl = i;
}

function SEP(i, e) {
    GE("shortpath-" + i).style.display = e ? "none" : "inline-block";
    GE("longpath-" + i).style.display = e ? "inline-block" : "none";
}

function SPS() {
    var ra = [];
    for (var j in Efa) {
        if (j != Evp) {
            ra[ra.length] = j;
        }
    }
    SPP("pathstartid", ra, Sps, false);
    SHP();
}

function SHP() {
    e = GE("path-" + Sps);
    if (e) {
        e.style.display = "none";
    }
}

function SSS() {
    Sps = GO("pathstartid");
    SUP(null);
    SHP();
}

function STM() {
    SUP(null);
    SHP();
}

function SUC() {
    var t = new Date();
    t.setDate(t.getDate() - 1);
    var y = t.getFullYear();
    var m = 1 + t.getMonth();
    var d = t.getDate();
    var es = [];
    for (var j in Efa) {
        var p = Efa[j];
        if (p.b && (p.z != 1)) {
            var bd = FPS(p.b);
            if (bd.d1 && bd.m1 && (!bd.v) && (((bd.y1 >= (y - 120)) && (bd.y1 < y)) || !bd.y1)) {
                es[es.length] = {d: bd.d1, m: bd.m1, y: bd.y1, t: "b", i1: j};
            }
        }
        if (p.es && (p.es > j) && Efa[p.es] && (Efa[p.es].es == j) && (p.z != 1) && (Efa[p.es].z != 1) && p.gp && (p.gp[p.es] == "m") && p.mp && p.mp[p.es]) {
            var md = FPS(p.mp[p.es]);
            if (md.d1 && md.m1 && (!md.v) && (((md.y1 >= (y - 100)) && (md.y1 < y)) || !md.y1)) {
                es[es.length] = {d: md.d1, m: md.m1, y: md.y1, t: "m", i1: j, i2: p.es};
            }
        }
    }
    for (var j = 0; j < es.length; j++) {
        var e = es[j];
        es[j].sy = y + (((e.m < m) || ((e.m == m) && (e.d < d))) ? 1 : 0);
        es[j].st = new Date(es[j].sy, e.m - 1, e.d).getTime();
    }
    es.sort(SCI);
    if (es.length) {
        var ms = ["", _t("Month_1"), _t("Month_2"), _t("Month_3"), _t("Month_4"), _t("Month_5"), _t("Month_6"), _t("Month_7"), _t("Month_8"), _t("Month_9"), _t("Month_10"), _t("Month_11"), _t("Month_12")];
        var sf = NGS();
        var bn = NGB();
        var h = "";
        var lmy = 0;
        h += "<table class=\"ct\">";
        for (var j = 0; j < es.length; j++) {
            var e = es[j];
            var my = e.m + e.sy * 12;
            if (my != lmy) {
                h += "<tr><td colspan=\"2\" class=\"cm\">" + ms[e.m] + " " + e.sy + "</td></tr>";
                lmy = my;
            }
            h += "<tr><td class=\"cl\" style=\"white-space:nowrap;\">" + _h("^", e.d) + "</td><td class=\"cr\">";
            if (e.i2) {
                h += "<a href=\"#\" onClick=\"ESP('" + e.i1 + "', true); return false;\">" + EH(FDN(Efa[e.i1], false, 1, sf, (bn == 1), true, false, false, false)) + "</a>";
                h += " and <a href=\"#\" onClick=\"ESP('" + e.i2 + "', true); return false;\">" + EH(FDN(Efa[e.i2], false, 1, sf, (bn == 1), true, false, false, false)) + "</a>";
            } else {
                h += "<a href=\"#\" onClick=\"ESP('" + e.i1 + "', true); return false;\">" + EH(FDN(Efa[e.i1], true, 1, sf, (bn == 1), true, true, true, true)) + "</a>";
            }
            if (e.t == "b") {
                h += " &ndash; " + (e.y ? _h("^ birthday", e.sy - e.y) : _h("birthday"));
            }
            if (e.t == "m") {
                h += " &ndash; " + (e.y ? _h("^ anniversary", e.sy - e.y) : _h("anniversary"));
            }
            h + "</td></tr>";
        }
        h += "</table>";
    } else {
        h = "<div style=\"text-align:center; padding:8px;\">" + _h("There are no birthdays or anniversaries to display.") + "</div>";
    }
    SS("showcalendar", true);
    SS("showtimeline", false);
    SH("caltimecontent", h);
}

function SUI() {
    var es = [];
    for (var j in Efa) {
        var p = Efa[j];
        if (p.b) {
            var bd = FSE(p.b) || FSL(p.b);
            if (bd) {
                bd.t = "b";
                bd.i1 = j;
                bd.fd = p.b;
                es[es.length] = bd;
            }
        }
        if ((p.z == 1) && p.d) {
            var dd = FSE(p.d) || FSL(p.d);
            if (dd) {
                dd.t = "d";
                dd.i1 = j;
                dd.fd = p.d;
                es[es.length] = dd;
            }
        }
        for (var pi in p.pc) {
            if ((pi > j) && Efa[pi] && p.gp && (p.gp[pi] == "m") && p.mp && p.mp[pi]) {
                var md = FSE(p.mp[pi]) || FSL(p.mp[pi]);
                if (md) {
                    md.t = "m";
                    md.i1 = j;
                    md.i2 = pi;
                    md.fd = p.mp[pi];
                    es[es.length] = md;
                }
            }
        }
    }
    es.sort(FCD);
    if (es.length) {
        var sf = NGS();
        var bn = NGB();
        var h = "";
        var ly = -99999999;
        h += "<table class=\"ct\">";
        for (var j = 0; j < es.length; j++) {
            var e = es[j];
            if (e.y != ly) {
                h += "<tr><td colspan=\"2\" class=\"cm\">" + FDY(e.y) + "</td></tr>";
                ly = e.y;
            }
            var dt = FDT(e.fd, true, true);
            h += "<tr><td class=\"cl\"" + ((dt.length < 14) ? " nowrap" : "") + ">" + dt + "</td><td class=\"cr\">";
            var l1 = "a href=\"#\" onClick=\"ESP('" + e.i1 + "', true); return false;\"";
            var l2 = e.i2 ? "a href=\"#\" onClick=\"ESP('" + e.i2 + "', true); return false;\"" : "";
            if (e.i2) {
                var n1 = FDN(Efa[e.i1], false, 1, sf, (bn == 1), true, false, false, false);
                var n2 = FDN(Efa[e.i2], false, 1, sf, (bn == 1), true, false, false, false);
            } else {
                var n1 = FDN(Efa[e.i1], true, 1, sf, (bn == 1), true, true, true, true);
                var n2 = "";
            }
            if (e.t == "b") {
                h += _h("<$> born", n1, l1);
            }
            if (e.t == "d") {
                h += _h("<$> died", n1, l1);
            }
            if (e.t == "m") {
                h += _h("<$1> and <$2> married", n1, n2, l1, l2);
            }
            h + "</td></tr>";
        }
        h += "</table>";
    } else {
        h = "<div style=\"text-align:center; padding:8px;\">" + _h("There are no birth dates, death dates or marriages to display.") + "</div>";
    }
    SS("showcalendar", false);
    SS("showtimeline", true);
    SH("caltimecontent", h);
}

function SCI(e1, e2) {
    return e1.st - e2.st;
}