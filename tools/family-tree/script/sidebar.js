// Sen 人员字段
var PersonColumnFields = [{
    l: "familyname", // 姓
    p: "personalname", // 名
    N: "nickname", // 号
    T: "title", // 字
    J: "suffix",
    q: "formername" // 曾用名
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
// Sv1
var PersonColumnName1 = {
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
// Sv2
var PersonColumnName2 = {
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
// Spt 伴侣关系
var PartnerTypeNames = {
    m: _t("Married"),
    e: _t("Engaged"),
    r: _t("Relationship"),
    s: _t("Separated"),
    d: _t("Divorced"),
    a: _t("Annulled"),
    o: _t("Other")
};
// Sat 子女关系
var ChildrenTypeNames = {b: _t("Biological"), a: _t("Adopted"), f: _t("Foster"), s: _t("Step"), g: _t("Godparent")};
// Spe 侧边栏展示人物
var SidebarPersonId;
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
    return AllowWrite;
}

function SPN(p) {
    return FDN(p, false, 1, GetConfigSurnameFirstValue(), (GetConfigBirthNameValue() == 1), true);
}

// SSE 设置侧边栏展示的人物和
function SetSidebarPersonAndViewMode(id, viewMode) {
    // console.log("SetSidebarPersonAndViewMode", arguments)
    var person = Efa[id];
    if (!person) {
        return;
    }
    var pi = SidebarPersonId;
    SidebarPersonId = id;
    var md = (SidebarPersonId == OwnerPersonId);
    var v = GetElement("nametitle");
    v.innerHTML = EncodeHTML(SPN(person));
    v.className = person.p ? "sname" : "sdefname";
    // SetElementValue("shareperson", _t("Invite $ to share family", person.h));
    SetElementShow("hideurl", false);
    GetElement("switchpanel3").style.display = person.cp ? "block" : "none";
    GetElement("switchpanel4").style.display = (Edd || Eud) ? "block" : "none";
    if (!md) {
        SetElementValue("showpath", _t("Show relationship to $", person.h));
        SetElementShow("showpath", true);
    } else {
        SetElementShow("showpath", false);
    }
    var uf = person.w ? "w" : (person.B ? "B" : (person.P ? "P" : null));
    SetElementShow("showurl", uf ? true : false);
    if (uf) {
        SetElementValue("urlmode", Sur[uf]);
        GetElement("urllink").href = person[uf];
        SetElementValue("showurl", _t("Show $1's $2", person.h, PersonColumnName1[uf].toLowerCase()));
    }
    SSA((((Spa == 3) && !person.cp) || ((pi != id) && ((viewMode == "edit") || Sed))) ? 0 : Spa, (viewMode == "edit") ? ((Sed && (pi == id)) ? null : true) : false);
    SIU(false);
}

function SSA(_a, _b) {
    // console.log("SSA", arguments)
    if (Sed && ((_a != Spa) || (_b === false))) {
        try {
            GetElement("switchlink" + _a).focus();
        } catch (e) {
        }
    }
    Spa = _a;
    if (_b !== null) {
        Sed = _b;
    }
    var f = Efa;
    var p = f[SidebarPersonId];
    var md = (SidebarPersonId == OwnerPersonId);
    var pw = SPW(SidebarPersonId);
    if (!pw) {
        Sed = false;
    }
    for (var j = 0; j <= 4; j++) {
        GetElement("switchpanel" + j).className = ((_a == j) ? "sswitched" : "sswitch");
        GetElement("switchlink" + j).className = ((_a == j) ? "sswitchedlink" : "");
    }
    var hne = p.N || p.T || p.J;
    SetElementClassShowRow("personalview", (Spa == 0) && !Sed);
    SetElementClassShowRow("personaledit1", (Spa == 0) && Sed);
    if ((_b === true) || (!Sed)) {
        SetElementClassShowRow("nameexpandedit", (Spa == 0) && Sed && hne);
        SetElementShow("nameexpand", !hne);
        GetElement("personalname").className = hne ? "sfield" : "sfieldexpand";
    }
    SetElementClassShowRow("personaledit2", (Spa == 0) && Sed);
    SetElementClassShowRow("personaleditdeath", (Spa == 0) && (p.z == 1) && Sed);
    SetElementClassShowRow("partnersviewedit", (Spa == 3));
    SetElementClassShowRow("contactview", (Spa == 1) && !Sed);
    SetElementClassShowRow("contactedit", (Spa == 1) && Sed);
    SetElementClassShowRow("contacteditskype", (Spa == 1) && Sed && p.S);
    SetElementClassShowRow("bioview", (Spa == 2) && !Sed);
    SetElementClassShowRow("bioedit1", (Spa == 2) && Sed);
    SetElementClassShowRow("bioeditdeath", (Spa == 2) && (p.z == 1) && Sed);
    SetElementClassShowRow("bioedit2", (Spa == 2) && Sed);
    SetElementClassShowRow("filesview", (Spa == 4));
    SetElementClassShowRow("filesview2", (Spa == 4) && !Sed);
    SetElementClassShowRow("viewfooter", pw && (!Sed) && (Spa != 4));
    SetElementClassShowRow("editfooter", Sed && (Spa != 4));
    if (Spa == 3) {
        var et = _t("Edit partnership details");
    } else {
        var et = md ? _t("Edit my details") : _t("Edit $'s details", p.h);
    }
    if (Spa == 4) {
        SetElementShow("sideuploadfile", Eud);
    }
    SetElementValue("editbutton", et);
    SetElementShow("nonrelations", true);
    SetElementShow("shareperson", (!staticMode) && GetElementValue("sessionid") && (p.z != "1") && !md);
    SetElementShow("nonediting", !Sed);
    SetElementClassShowRow("relactions", AllowWrite && !Sed);
    if (Sed) {
        var df = (_b === true);
        for (var j in PersonColumnFields[Spa]) {
            SetElementValue(PersonColumnFields[Spa][j], p[j]);
            if (df && (j != "y") && !GetElementValue(PersonColumnFields[Spa][j])) {
                FocusSelectElement(PersonColumnFields[Spa][j]);
                df = false;
            }
        }
    } else {
        if (AllowWrite) {
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
    // console.log("SSF", arguments)
    var om = !staticMode;
    var sl = ESL();
    SetElementClassShowRow("importfooter", om && (!sl.n) && (!sl.s) && (!sl.i) && Eca);
    SetElementClassShowRow("clearfooter", om && (sl.n || sl.i) && (!sl.s) && Ecd);
}

function SWA(p) {
    // console.log("SWA", arguments)
    SSA(p, Sed);
}

function SED() {
    // console.log("SED", arguments)
    ECS();
    ESE(false, [SidebarPersonId], SidebarPersonId);
}

// SAS 点击保存人物事件
function OnPersonConfirmButtonClick() {
    ConfirmOrCancelPerson(true);
}

// SAS 取消保存人物事件
function OnPersonCancelButtonClick() {
    ConfirmOrCancelPerson(false);
}

// SRR 移除元素所有子元素
function RemoveElementAllChild(e) {
    var v = GetElement(e);
    while (v.firstChild) {
        v.removeChild(v.firstChild);
    }
}

// SJR 表格追加行
function TableAppendContent(tableId, content, isHtml, colSpan) {
    var r = document.createElement("TR");
    var a = document.createElement("TD");
    a.className = "sboth";
    a.innerHTML = isHtml ? content : EncodeHTMLLine(content);
    a.colSpan = colSpan;
    r.appendChild(a);
    GetElement(tableId).appendChild(r);
}

// SSR 表格追加表单项
function TableAppendFieldContent(tableId, fieldName, content, isHtml, a) {
    var r = document.createElement("TR");
    r.vAlign = a || "top";
    var a = document.createElement("TD");
    a.className = "sleft";
    if (fieldName) {
        a.innerHTML = EncodeHTML(fieldName + ":");
    }
    var b = document.createElement("TD");
    b.className = "sright";
    b.innerHTML = isHtml ? content : EncodeHTMLLine(content);
    r.appendChild(a);
    r.appendChild(b);
    GetElement(tableId).appendChild(r);
    return r;
}

// SUR 表格添加按钮
function TableAppendButton(tableId, content, option, subOption, s) {
    TableAppendContent(tableId, "<INPUT TYPE=\"submit\" VALUE=\"" + EncodeHTML(content)
        + "\" ID=\"" + EncodeHTML(option + subOption)
        + "\" CLASS=\"sbutton\" onClick=\"PersonOperate('" + EncodeHTML(option) + "','" + EncodeHTML(subOption) + "'); return false;\">", true, s);
}

function SPP(i, ra, s, no, o) {
    var f = Efa;
    var bn = GetConfigBirthNameValue();
    var bn1 = (bn == 1);
    var sf = GetConfigSurnameFirstValue();
    var v = GetElement(i);
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
    var v = GetElement(i);
    v.options.length = 0;
    v.options[v.options.length] = new Option("", "");
    for (var j in ChildrenTypeNames) {
        if ((j != "b") || b) {
            v.options[v.options.length] = new Option(ChildrenTypeNames[j], j);
        }
    }
    SetSelectElementSelected(i, s);
}

function SUT(i, df) {
    var f = Efa;
    var t = GetSelectElementValue(i);
    var w = df ? _t("mother") : _t("father");
    if (t && f[t]) {
        var p = f[t];
        if (p.g == "m") {
            var w = _t("father");
        } else if (p.g == "f") {
            var w = _t("mother");
        } else if ((p.g || "").charAt(0) == "o") {
            var w = _t("parent");
        }
    }
    SetElementInnerText(i + "title", w);
}

function SLR(e, s) {
    TableAppendContent(e, "<IMG CLASS=\"blankpixel\" WIDTH=\"1\" HEIGHT=\"4\">", true, s);
}

// SRB 关系部分添加操作按钮
function RelactionAppendButton(content, option, subOption) {
    TableAppendButton("relactions", content, option, subOption, 1);
}

// SPR 侧边栏隐藏关系等信息
function HideRelactions(isHideNonRelations) {
    RemoveElementAllChild("relactions");
    if (isHideNonRelations) {
        SetElementShow("nonrelations", false);
    }
}

function SRP(e) {
    HideRelactions(e);
    var f = Efa;
    var p = f[SidebarPersonId];
    if (e) {
        var fd = false;
        var ns = false;
        RelactionAppendButton(_t("Set parents"), "treeparents", "");
        var ot = p.b && DateStrToObj(p.b).y;
        var bs = FLS(f, SidebarPersonId, 1, ot);
        if (bs.length) {
            RelactionAppendButton(ot ? _t("Change multiple birth order") : _t("Change sibling order"), "changeorder", "");
        }
        if (p.cp) {
            RelactionAppendButton(((p.cp > 1) || !p.s) ? _t("Change partners") : _t("Change partner"), "changespouse", "");
        }
        if (Ecd) {
            if (SidebarPersonId == OwnerPersonId) {
                fd = true;
            } else {
                if (!disable_family_tests) {
                    var cf = FDF(f, OwnerPersonId, null, null, null);
                    var df = FDF(f, OwnerPersonId, SidebarPersonId, null, null);
                    if ((df.length - cf.length) > 1) {
                        ns = true;
                    }
                }
                if (!ns) {
                    RelactionAppendButton(_t("Delete $", p.h), "delete", SidebarPersonId);
                }
            }
        }
        RelactionAppendButton(_t("Cancel"), "cancel", "");
        if (Ecd) {
            if (ns) {
                TableAppendContent("relactions", "<BR>" + _h("This person cannot be deleted because that would split the tree. Try deleting outer people on the tree first."), true, 1);
            }
            if (fd) {
                TableAppendContent("relactions", "<BR>" + _h("This person started the tree and cannot be deleted."), true, 1);
            }
        } else {
            TableAppendContent("relactions", "<BR>" + _h("You do not have permission to delete people."), true, 1);
        }
    } else {
        var md = (OwnerPersonId == SidebarPersonId);
        var ap = p.fg || Eaf || (OwnerPersonId == OwnerPersonId);
        if (Eca) {
            TableAppendContent("relactions", md ? _t("Click to add your relatives:") : _t("Click to add relatives of $:", p.h), false, 1);
            if (ap) {
                if ((p.f && p.m) || ((p.V == "s") && (p.f || p.m))) {
                } else if (p.f) {
                    RelactionAppendButton((p.m2 || p.f2) ? _t("Add primary mother") : _t("Add mother"), "choosemother", "");
                } else if (p.m) {
                    RelactionAppendButton((p.m2 || p.f2) ? _t("Add primary father") : _t("Add father"), "choosefather", "");
                } else {
                    RelactionAppendButton((p.m2 || p.f2) ? _t("Add primary parents") : _t("Add new parents"), "addparents", "");
                }
            }
            RelactionAppendButton(_t("Add partner/ex"), "choosespouse", "");
            if (ap) {
                RelactionAppendButton(_t("Add brother/sister"), "addsibling", "");
            }
            RelactionAppendButton(_t("Add child"), "addchild", "");
            if (ap) {
                if ((p.X && p.Y) || ((p.W == "s") && (p.X || p.Y))) {
                } else if (p.Y) {
                    RelactionAppendButton(_t("Add second mother"), "choosemother2", "");
                } else if (p.X) {
                    RelactionAppendButton(_t("Add second father"), "choosefather2", "");
                } else if (p.f || p.m) {
                    RelactionAppendButton(_t("Add second parents"), "addparents2", "");
                }

                if ((p.K && p.L) || ((p.Q == "s") && (p.K || p.L))) {
                } else if (p.L) {
                    RelactionAppendButton(_t("Add third mother"), "choosemother3", "");
                } else if (p.K) {
                    RelactionAppendButton(_t("Add third father"), "choosefather3", "");
                } else if ((p.f || p.m) && (p.X || p.Y)) {
                    RelactionAppendButton(_t("Add third parents"), "addparents3", "");
                }

            }
        }
        if (SidebarPersonId !== OwnerPersonId) {
            SLR("relactions", 1);
            RelactionAppendButton("设置为自己", "setme", "");
        }
        var cf = 0;
        for (var j in f) {
            cf++;
            if (cf > 1) {
                SLR("relactions", 1);
                RelactionAppendButton(_t("More actions..."), "morelactions", "");
                break;
            }
        }
        if (Eca) {
            if (!ap) {
                var si = GetElementValue("sessionid");
                if (md) {
                    TableAppendContent("relactions", "<BR>" + (si ? _h("To add your parents, brothers or sisters, please sign in then create a new family branch.") : _h("To add your parents, brothers or sisters, please create a new family branch.")), true, 1);
                    if (si) {
                        RelactionAppendButton(_t("Create new family for me"), "startbranch", "");
                    }
                } else {
                    TableAppendContent("relactions", "<BR>" + (si ? _h("To add $'s parents, brothers or sisters, a new family branch can be created after signing in.", p.h) : _h("To add $'s parents, brothers or sisters, a new family branch can be created.", p.h)), true, 1);
                    if (si) {
                        RelactionAppendButton(_t("Create new family for $", p.h), "startbranch", "");
                    }
                }
            }
        } else {
            TableAppendContent("relactions", "<BR>" + _h("You do not have permission to add new people."), true, 1);
        }
        var ad = GetElement("advertisement");
        if (ad) {
            SLR("relactions", 1);
            SLR("relactions", 1);
            TableAppendContent("relactions", ad.innerHTML, true, 1);
        }
    }
}

function SP0(e) {
    var f = Efa;
    var p = f[SidebarPersonId];
    var g = p.g || "";
    if (Sed) {
        GetElement("gender_f").checked = (g == "f");
        GetElement("gender_m").checked = (g == "m");
        GetElement("gender_o").checked = (g.charAt(0) == "o");
        GetElement("othergenderdiv").style.display = (g.charAt(0) == "o") ? "block" : "none";
        GetElement("alive").checked = (p.z != "1");
        if (e) {
            SetElementInnerHTML("birthdate", SDH("birth", "OnPersonFieldValueChanged('birth');"));
            SSD("birth", p.b);
            SetElementInnerHTML("deathdate", SDH("death", "OnPersonFieldValueChanged('death');"));
            SSD("death", p.d);
            SetElementValue("othergender", (g.charAt(0) == "o") ? p.g.substring(1) : "");
        }
    } else {
        RemoveElementAllChild("personalview");
        var bn = GetConfigBirthNameValue();
        var bn1 = (bn == 1);
        TableAppendFieldContent("personalview", "姓", p.l, false);
        TableAppendFieldContent("personalview", "名", p.p, false);
        p.T && TableAppendFieldContent("personalview", "字", p.T, false);
        p.N && TableAppendFieldContent("personalview", "号", p.N, false);
        p.q && TableAppendFieldContent("personalview", "曾用名", p.q, false);
        p.J && TableAppendFieldContent("personalview", "字辈", p.J, false);
        TableAppendFieldContent("personalview", _t("Gender"), GenderNames[g] ? GenderNames[g] : ((g.charAt(0) == "o") ? g.substring(1) : GenderNames[""]), false);
        TableAppendFieldContent("personalview", _t("Birth date"), DateDetailStrToString(p.b, true), false);
        if (p.z == 1) {
            TableAppendFieldContent("personalview", _t("Death date"), DateDetailStrToString(p.d, true), false);
        }
        var ac = FCR(f, SidebarPersonId, true, false, false);
        var dc = FCR(f, SidebarPersonId, false, true, false);
        TableAppendFieldContent("personalview", _t("Tree stats"), (ac ? _t("# ancestor/s", ac) : _t("No ancestors")) + ", " + (dc ? _t("# descendant/s", dc) : _t("No descendants")));
    }
}

function SEN() {
    SetElementClassShowRow("nameexpandedit", true);
    SetElementShow("nameexpand", false);
    GetElement("personalname").className = "sfield";
}

function SP1(e) {
    var f = Efa;
    var p = f[SidebarPersonId];
    if (!Sed) {
        RemoveElementAllChild("contactview");
        for (var j in PersonColumnName1) {
            if (p[j] || ((!staticMode) && (j == "e"))) {
                if (j == "e") {
                    TableAppendFieldContent("contactview", PersonColumnName1[j], p[j] ? ("<A HREF=\"mailto:" + EncodeHTML(p[j]) + "\" DIR=\"ltr\">" + EncodeHTML(p[j]) + "</A>") : "", true);
                } else {
                    if (j == "S") {
                        TableAppendFieldContent("contactview", PersonColumnName1[j], p[j] ? ("<A HREF=\"callto:" + EncodeHTML(p[j]) + "\" DIR=\"ltr\">" + EncodeHTML(p[j]) + "</A>") : "", true);
                    } else {
                        if ((j == "w") || (j == "B") || (j == "P")) {
                            TableAppendFieldContent("contactview", PersonColumnName1[j], p[j] ? ("<A HREF=\"" + EncodeHTML(p[j]) + "\" TARGET=\"_new\" onClick=\"return UL(this);\" DIR=\"ltr\">" + EncodeHTML(p[j]) + "</A>") : "", true);
                        } else {
                            if ((j == "t") || (j == "k") || (j == "u")) {
                                TableAppendFieldContent("contactview", PersonColumnName1[j], "<SPAN DIR=\"ltr\">" + EncodeHTML(p[j]) + "<SPAN>", true);
                            } else {
                                TableAppendFieldContent("contactview", PersonColumnName1[j], p[j], false);
                            }
                        }
                    }
                }
            }
        }
        if (staticMode && !Esa) {
            TableAppendContent("contactview", "&nbsp;<BR>" + _h("To protect your privacy, phone numbers, addresses and emails have been removed."), true, 2);
        }
    }
}

function SP2(e) {
    var f = Efa;
    var p = f[SidebarPersonId];
    if (Sed) {
        if (e) {
            SetElementInnerHTML("burialdate", SDH("burial", "OnPersonFieldValueChanged('burial');"));
            SSD("burial", p.F);
        }
    } else {
        RemoveElementAllChild("bioview");
        for (var j in PersonColumnName2) {
            if (p[j] || (j == "v") || (j == "y")) {
                if (((j != "y") && (j != "U") && (j != "F")) || (p.z == 1)) {
                    var h = false;
                    if (j == "F") {
                        v = DateDetailStrToString(p[j], true);
                    } else {
                        if ((j == "j") || (j == "E") || (j == "I") || (j == "A") || (j == "o")) {
                            v = ConvertURL2HTML(EncodeHTMLLine(p[j]));
                            h = true;
                        } else {
                            v = p[j];
                        }
                    }
                    TableAppendFieldContent("bioview", PersonColumnName2[j], v, h);
                }
            }
        }
    }
}

function S3R(f, p, pi, rc) {
    if (rc && GetElement("partnersviewedit").firstChild) {
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
        TableAppendFieldContent("partnersviewedit", FTP(f, p, pi, f[pi]), "<A HREF=\"#\" onClick=\"ESP('" + pi + "', true); return false;\">" + EncodeHTML(SPN(f[pi])) + "</A>" + ((_77 && (gpi.length > 1) && !Sed) ? (" (" + gpi.substring(1) + ")") : ""), true);
    }
    if (Sed) {
        var e = "partner" + pi + "g";
        if (rc) {
            TableAppendFieldContent("partnersviewedit", "Type", "<SELECT ID=\"" + EncodeHTML(e) + "\" CLASS=\"sselect\" onChange=\"SCP('g', '" + EncodeHTML(pi) + "')\"></SELECT><DIV ID=\"" + EncodeHTML(e) + "odiv\" STYLE=\"margin-top:4px; display:none;\"><INPUT ID=\"" + EncodeHTML(e) + "o\" class=\"sfield\" onchange=\"SCP('go', '" + EncodeHTML(pi) + "')\"></DIV>", true, "baseline");
            var v = GetElement(e);
            v.options.length = 0;
            v.options[v.options.length] = new Option("", "");
            for (var j in PartnerTypeNames) {
                v.options[v.options.length] = new Option(PartnerTypeNames[j], j);
            }
            if (_77) {
                SetElementValue(e + "o", gpi.substring(1));
            }
        }
        SetSelectElementSelected(e, gpi.charAt(0));
        GetElement(e + "odiv").style.display = _77 ? "block" : "none";
        for (var ti in t) {
            if (t[ti]) {
                var tpi = p[ti + "p"] ? p[ti + "p"][pi] : "";
                if (ti == "w") {
                    var e = "partner" + pi + ti;
                    if (rc) {
                        TableAppendFieldContent("partnersviewedit", t[ti], "<INPUT ID=\"" + EncodeHTML(e) + "\" CLASS=\"sfield\" onChange=\"SCP('" + ti + "', '" + EncodeHTML(pi) + "');\">", true, "middle");
                    }
                    SetElementValue(e, tpi);
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
                    TableAppendFieldContent("partnersviewedit", t[ti], (ti == "w") ? tpi : DateDetailStrToString(tpi, true), false);
                }
            }
        }
    }
}

function S3D(pi, t, ti, d, rc) {
    if (rc) {
        var s = EncodeHTML(pi + ti);
        var o = "SCP('" + EncodeHTML(ti) + "', '" + EncodeHTML(pi) + "');";
        var h = SDH("partner" + s, o);
        TableAppendFieldContent("partnersviewedit", t, h, true, "baseline");
        SSD("partner" + pi + ti, d);
    }
}

function SDH(i, c) {
    return "<SPAN ID=\"" + i + "options\" STYLE=\"display:none;\">" +
        "<SELECT ID=\"" + i + "variant\" CLASS=\"sselect\" onChange=\"" + c + "\"></SELECT>&nbsp;" +
        "<SPAN TITLE=\"" + _h("Before the Common Era (BC)") + "\">" +
        "<INPUT ID=\"" + i + "bce\" TYPE=\"checkbox\" onClick=\"" + c + "\">" +
        "<LABEL FOR=\"" + i + "bce\">" + _h("BCE") + "</LABEL>" +
        "</SPAN><br/></SPAN>" +
        "<INPUT ID=\"" + i + "year1\" CLASS=\"syear\" placeholder='年' TITLE=\"" + _h("Year") + "\" onChange=\"" + c + "\" MAXLENGTH=4>" +
        "<SELECT ID=\"" + i + "month1\" CLASS=\"sselect\" TITLE=\"" + _h("Month") + "\" onChange=\"" + c + "\"></SELECT>&nbsp;" +
        "<SELECT ID=\"" + i + "dom1\" CLASS=\"sselect\" TITLE=\"" + _h("Day") + "\" onChange=\"" + c + "\"></SELECT>&nbsp;" +
        "<SPAN ID=\"" + i + "expand\"> <A HREF=\"#\" CLASS=\"sdatelink\" onClick=\"SDR('" + i + "')\" TITLE=\"" + _h("Show more date options") + "\">" +
        (locale_rtl ? "&#x25C4;" : "&#x25BA;") + "</A></SPAN>" + "<SPAN ID=\"" + i + "date2\" STYLE=\"display:none;\"> to<br/>" +
        "<INPUT ID=\"" + i + "year2\" CLASS=\"syear\" placeholder='年' TITLE=\"" + _h("Year") + "\" onChange=\"" + c + "\" MAXLENGTH=4>" +
        "<SELECT ID=\"" + i + "month2\" CLASS=\"sselect\" TITLE=\"" + _h("Month") + "\" onChange=\"" + c + "\"></SELECT>&nbsp;" +
        "<SELECT ID=\"" + i + "dom2\" CLASS=\"sselect\" TITLE=\"" + _h("Day") + "\" onChange=\"" + c + "\"></SELECT>&nbsp;" +
        " <A HREF=\"#\" CLASS=\"sdatelink\" onClick=\"SWR('" + i + "')\" TITLE=\"" + _h("Swap two dates") + "\" STYLE=\"font-weight:bold;\">&#x21C5;</A></SPAN>";
}

function SDR(i) {
    SetElementShow(i + "options", true);
    SetElementShow(i + "expand", false);
}

function SWR(i) {
    SwapElementValue(i + "dom1", i + "dom2");
    SwapElementValue(i + "month1", i + "month2");
    SwapElementValue(i + "year1", i + "year2");
}

function SP3(e) {
    var f = Efa;
    var p = f[SidebarPersonId];
    var rr = FSS(p, p.s, true);
    if (Sed) {
        var rl = SidebarPersonId;
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
        RemoveElementAllChild("partnersviewedit");
    }
    for (var pi in rr) {
        S3R(f, p, pi, rc);
    }
}

function SP4(e) {
    RemoveElementAllChild("filesview");
    var p = Efa[SidebarPersonId];
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
    var t = GetElement("filesview");
    if (l) {
        fs.sort(DSD);
        for (var j = 0; j < l; j++) {
            var f = fs[j];
            var h = "";
            if (Edd) {
                if (DTV(f.t)) {
                    h += "<a href=\"#\" title=\"" + _h("View $1 $2", DSH(f.s), DTH(f.t)) + "\" onclick=\"DSI('" + f.i + "'); return false;\">";
                } else {
                    h += "<a href=\"" + EncodeHTML(DGU(f.i, true)) + "\" title=\"" + _h("Download $1 $2", DSH(f.s), DTH(f.t)) + "\">";
                }
            }
            h += EncodeHTML(f.n || _t("Untitled")) + (Edd ? "</a>" : "") + (f.d ? (" &ndash; " + f.d) : "");
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
    UpdatePerson(SidebarPersonId, {g: v});
    EUF();
}

// SCV
function OnPersonFieldValueChanged(field) {
    if (field == "birth") {
        UpdatePerson(SidebarPersonId, {b: SGD("birth")});
        SHD("birth");
    } else if (field == "death") {
        UpdatePerson(SidebarPersonId, {d: SGD("death")});
        SHD("death");
    } else if (field == "burial") {
        UpdatePerson(SidebarPersonId, {F: SGD("burial")});
        SHD("burial");
    } else if (field == "alive") {
        UpdatePerson(SidebarPersonId, {z: (GetElement(field).checked ? "0" : "1")});
    } else if (field == "othergender") {
        UpdatePerson(SidebarPersonId, {g: "o" + GetElementValue(field)});
    } else {
        for (var k = 0; k < PersonColumnFields.length; k++) {
            for (var j in PersonColumnFields[k]) {
                if (field == PersonColumnFields[k][j]) {
                    var c = {};
                    var v = new String(GetElementValue(field));
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
                    UpdatePerson(SidebarPersonId, c);
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
        c[ti] = GetSelectElementValue(e);
    } else {
        if (ti == "go") {
            c["g"] = "o" + GetElementValue(e);
        } else {
            if (ti == "w") {
                c[ti] = GetElementValue(e);
            } else {
                c[ti] = SGD(e);
                SHD(e);
            }
        }
    }
    EPC(SidebarPersonId, pi, c);
    EUF();
    if ((ti == "g") && (c[ti] == "o")) {
        FocusSelectElement(e + "o");
    }
}

function SCM(s) {
    var f = Efa;
    var tm = GetSelectElementValue("treemother" + s);
    var tf = GetSelectElementValue("treefather" + s);
    SPP("treefather" + s, FAL(f, SidebarPersonId, tm), tm ? f[tm].es : tf, true);
    if (!GetSelectElementValue("treefather" + s)) {
        SetSelectElementSelected("treefather" + s, f[SidebarPersonId][(s == 1) ? "f" : ((s == 2) ? "X" : "K")]);
    }
    SUT("treemother" + s, true);
    SUT("treefather" + s, false);
}

function SCF(s) {
    SUT("treefather" + s, false);
}

function SCT(s) {
    var b2 = (GetSelectElementValue("treeparenttype1") != "b");
    if (s < 2) {
        SPT("treeparenttype2", b2, GetSelectElementValue("treeparenttype2"));
    }
    if (s < 3) {
        SPT("treeparenttype3", b2 && (GetSelectElementValue("treeparenttype2") != "b"), GetSelectElementValue("treeparenttype3"));
    }
}

// SFV
// function SFV(i) {
//     if (!GetElementValue(i)) {
//         if (i == "formername") {
//             var sn = GetElementValue("familyname");
//             if (sn) {
//                 UpdatePerson(SidebarPersonId, {q: sn});
//                 SetElementValue(i, sn);
//                 if (GetElementValue(i)) {
//                     GetElement(i).blur();
//                     setTimeout("FocusSelectElement(' )" + i + "')", 0);
//                 }
//             }
//         }
//     }
// }

function SAP(f, p, oi, spt, spm, apt, apm) {
    if (oi) {
        var op = f[oi];
    }
    var parentIds = [p.m1, p.f1, p.m2, p.f2, p.m3, p.f3];
    var hp = {};
    for (var j = 0; j < parentIds.length; j++) {
        if (parentIds[j]) {
            hp[parentIds[j]] = true;
        }
    }
    if (oi && (op.es || op.cp)) {
        if ((op.es) && !hp[op.es]) {
            RelactionAppendButton(_t(spt, SPN(f[op.es])), spm, op.es);
        }
        for (var pi in op.pc) {
            if ((pi != op.es) && !hp[pi]) {
                RelactionAppendButton(_t(spt, SPN(f[pi])), spm, pi);
            }
        }
        if (apm) {
            RelactionAppendButton(apt, apm, "");
        }
    } else {
        if (apm) {
            PersonOperate(apm, "");
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

/**
 * SCB 人员操作
 * addparents 添加父母
 *
 * @param operation
 * @param v
 * @constructor
 */
function PersonOperate(operation, v) {
    // console.log("SCB", arguments)
    var f = Efa;
    var person = f[SidebarPersonId];
    if (operation === "setme") {
        OwnerPersonId = SidebarPersonId;
        EUF();
    } else if ((operation == "addparents") || (operation == "addparentsstop")) {
        if (operation == "addparents") {
            ECS();
        }
        var isParentDeceased = (person.z == 1) && (person.c.length > 0); // 父母是否已故
        for (var j = 0; j < person.c.length; j++) {
            if (f[person.c[j]].z != 1) {
                isParentDeceased = false;
            }
        }
        var fatherId = GenerateId();
        var fatherObject = {"^": SidebarPersonId, g: "m", l: person.l};
        if (isParentDeceased) {
            fatherObject.z = 1;
        }
        UpdatePerson(fatherId, fatherObject);
        var motherId = GenerateId();
        var motherObject = {"^": SidebarPersonId, g: "f", s: fatherId, l: person.q};
        if (isParentDeceased) {
            motherObject.z = 1;
        }
        UpdatePerson(motherId, motherObject);
        UpdatePerson(SidebarPersonId, {m: motherId, f: fatherId});
        if (operation == "addparents") {
            ESE(true, [fatherId, motherId], SidebarPersonId);
        }
    } else if (operation == "choosemother") {
        HideRelactions(true);
        SAP(f, person, person.f, _i("Set mother to $"), "setmother", _t("Add new mother"), "addmother");
        RelactionAppendButton(_t("Cancel"), "cancel", "");
    } else if (operation == "choosefather") {
        HideRelactions(true);
        SAP(f, person, person.m, _i("Set father to $"), "setfather", _t("Add new father"), "addfather");
        RelactionAppendButton(_t("Cancel"), "cancel", "");
    } else if (operation == "choosemother2") {
        HideRelactions(true);
        SAP(f, person, person.Y, _i("Set second mother to $"), "setmother2", _t("Add new second mother"), "addmother2");
        RelactionAppendButton(_t("Cancel"), "cancel", "");
    } else if (operation == "choosefather2") {
        HideRelactions(true);
        SAP(f, person, person.X, _i("Set second father to $"), "setfather2", _t("Add new second father"), "addfather2");
        RelactionAppendButton(_t("Cancel"), "cancel", "");
    } else if (operation == "choosemother3") {
        HideRelactions(true);
        SAP(f, person, person.L, _i("Set third mother to $"), "setmother3", _t("Add new third mother"), "addmother3");
        RelactionAppendButton(_t("Cancel"), "cancel", "");
    } else if (operation == "choosefather3") {
        HideRelactions(true);
        SAP(f, person, person.K, _i("Set third father to $"), "setfather3", _t("Add new third father"), "addfather3");
        RelactionAppendButton(_t("Cancel"), "cancel", "");
    } else if (operation == "changeorder") {
        HideRelactions(true);
        var ot = person.b && DateStrToObj(person.b).y;
        var bs = FLS(f, SidebarPersonId, 1, ot);
        for (var j = 0; j < bs.length; j++) {
            if (FCC(f[bs[j]], person) >= 0) {
                break;
            }
        }
        RelactionAppendButton(_t("Move left (born earlier)"), "moveleft", "");
        RelactionAppendButton(_t("Move right (born later)"), "moveright", "");
        RelactionAppendButton(_t("Done"), "movedone", "");
        SetElementDisabled("moveleft", j <= 0);
        SetElementDisabled("moveright", j >= bs.length);
    } else if ((operation == "moveleft") || (operation == "moveright")) {
        var ot = person.b && DateStrToObj(person.b).y;
        var bs = FLS(f, SidebarPersonId, 1, ot);
        for (var si = 0; si < bs.length; si++) {
            if (FCC(f[bs[si]], person) >= 0) {
                break;
            }
        }
        for (var j = 0; j < bs.length; j++) {
            if (FPO(f[bs[j]], ot) === null) {
                UpdatePerson(bs[j], {O: FBO(f, bs.slice(0, j), bs.slice(j + 1), ot)});
            }
        }
        var d = (operation == "moveleft") ? -1 : 1;
        while (true) {
            si += d;
            if ((si < 0) || (si > bs.length)) {
                break;
            }
            if ((si == 0) || (si == bs.length) || (FPO(f[bs[si - 1]], ot) != FPO(f[bs[si]], ot))) {
                UpdatePerson(SidebarPersonId, {O: FBO(f, bs.slice(0, si), bs.slice(si), ot)});
                break;
            }
        }
        EUF();
        PersonOperate("changeorder", "");
    } else if (operation == "movedone") {
        SaveFamily();
        SSA(Spa, false);
    } else if (operation == "choosespouse") {
        HideRelactions(true);
        if (!person.s) {
            for (var pi in person.pc) {
                if (pi != person.s) {
                    RelactionAppendButton(_t("Set partner to $", SPN(f[pi])), "setspouse", pi);
                }
            }
        }
        if (person.s) {
            RelactionAppendButton(_t("Add new primary partner"), "addspouse", "");
            RelactionAppendButton(_t("Add new extra partner"), "addextraspouse", "");
        } else {
            RelactionAppendButton(_t("Add new partner"), "addspouse", "");
        }
        RelactionAppendButton(_t("Add new ex-partner"), "addexspouse", "");
        var ra = FPL(f, SidebarPersonId);
        if (ra.length) {
            RelactionAppendButton(_t("Partner with person already on tree"), "treespouse", "");
        }
        RelactionAppendButton(_t("Cancel"), "cancel", "");
    } else if (operation == "changespouse") {
        HideRelactions(true);
        if (!disable_family_tests) {
            var cf = FDF(f, SidebarPersonId, null, null, null);
        }
        for (var pi in person.pc) {
            var pp = (pi == person.s);
            var ep = person.ep && (person.ep[pi] == 2);
            if (!pp) {
                RelactionAppendButton(_t("Set primary partner to $", SPN(f[pi])), "setspouse", pi);
            }
            if (pp || ep) {
                RelactionAppendButton(_t("Change $ to ex-partner", SPN(f[pi])), "toexspouse", pi);
            }
            if (pp || !ep) {
                RelactionAppendButton(_t("Change $ to extra partner", SPN(f[pi])), "toextraspouse", pi);
            }
            if (!FLP(f, SidebarPersonId, pi, true).length) {
                if (!disable_family_tests) {
                    var df = FDF(f, SidebarPersonId, null, SidebarPersonId, pi);
                }
                if (disable_family_tests || (df.length <= cf.length)) {
                    RelactionAppendButton((pp || ep) ? _t("Remove partner $", SPN(f[pi])) : _t("Remove ex-partner $", SPN(f[pi])), "notanyspouse", pi);
                }
            }
        }
        RelactionAppendButton(_t("Cancel"), "cancel", "");
    } else if (operation == "addchild") {
        HideRelactions(true);
        var vt = v;
        if (v == "a") {
            var bt = {
                ep: _i("Add adopted child with $"),
                np: _i("Add adopted child with new partner"),
                xp: _i("Add adopted child without partner")
            };
        } else if (v == "f") {
            var bt = {
                ep: _i("Add foster child with $"),
                np: _i("Add foster child with new partner"),
                xp: _i("Add foster child without partner")
            };
        } else if (v == "g") {
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

        if (person.es) {
            RelactionAppendButton(_t(bt.ep, SPN(f[person.es])), "addchildwith", vt + person.es);
        }
        for (var pi in person.pc) {
            if (pi != person.es) {
                RelactionAppendButton(_t(bt.ep, SPN(f[pi])), "addchildwith", vt + pi);
            }
        }
        RelactionAppendButton(_t(bt.np), "addchildwithnew", v);
        RelactionAppendButton(_t(bt.xp), "addchildwithout", v);
        if (!v) {
            SLR("relactions", 1);
            RelactionAppendButton(_t("Add adopted child"), "addchild", "a");
            RelactionAppendButton(_t("Add foster child"), "addchild", "f");
            RelactionAppendButton(_t("Add godchild"), "addchild", "g");
            SLR("relactions", 1);
        }
        RelactionAppendButton(_t("Cancel"), "cancel", "");
        TableAppendContent("relactions", "<BR>" + _h("To add a child who is already on the tree, select that child and set their parent to this person."), true, 1);
    } else if (operation == "addchildwith") {
        ECS();
        var ci = GenerateId();
        var vt = v.substring(0, 1);
        var pi = v.substring(1);
        var motherId = FSM(f, SidebarPersonId, pi) ? SidebarPersonId : pi;
        var fatherId = FSM(f, SidebarPersonId, pi) ? pi : SidebarPersonId;
        var c = {"^": SidebarPersonId, m: motherId, f: fatherId};
        if (FRP(f, motherId, fatherId)) {
            c.l = Efa[fatherId].l; // 跟随父姓
        }
        if ((vt == "a") || (vt == "f") || (vt == "g")) {
            c.V = vt;
        }
        UpdatePerson(ci, c);
        ESE(true, [ci], ci);
    } else if ((operation == "addchildwithnew") || (operation == "addchildwithout")) {
        // 创建儿子
        ECS();
        var childrenId = GenerateId();
        var childrenObj = {"^": SidebarPersonId};
        if (person.g == "m") { // 添加的父亲
            childrenObj.f = SidebarPersonId;
            childrenObj.l = person.l; // 继承父姓
        } else {
            childrenObj.m = SidebarPersonId;
        }
        if (v) {
            childrenObj.V = v;
        }
        if (operation == "addchildwithnew") {
            var newParentId = GenerateId();
            if (person.g == "m") {
                childrenObj.m = newParentId;
            } else {
                childrenObj.f = newParentId;
            }
            UpdatePerson(childrenId, childrenObj);
            UpdatePerson(newParentId, {"^": childrenId, g: FIG(person.g)});
            ESE(true, [childrenId, newParentId], childrenId);
        } else {
            childrenObj.l = person.l;
            childrenObj.q = person.l;
            UpdatePerson(childrenId, childrenObj);
            ESE(true, [childrenId], childrenId);
        }
    } else if (operation == "addsibling") {
        ECS();
        var ap = !(person.m || person.f);
        if (ap) {
            PersonOperate("addparentsstop", "");
        }
        var si = GenerateId();
        UpdatePerson(si, {
            "^": SidebarPersonId,
            m: person.m,
            f: person.f,
            l: person.l
        });
        ESE(true, ap ? [si, person.f, person.m] : [si], si);
    } else if (operation == "addmother") {
        ECS();
        SPX(f, person.f, person.m, false);
        var mi = GenerateId();
        UpdatePerson(SidebarPersonId, {m: mi});
        UpdatePerson(mi, {"^": SidebarPersonId, g: "f"});
        ESE(true, [mi], SidebarPersonId);
    } else if (operation == "addfather") {
        ECS();
        SPX(f, person.f, person.m, false);
        var fi = GenerateId();
        UpdatePerson(SidebarPersonId, {f: fi});
        UpdatePerson(fi, {"^": SidebarPersonId, g: "m"});
        ESE(true, [fi], SidebarPersonId);
    } else if (operation == "addmother2") {
        ECS();
        SPX(f, person.X, person.Y, false);
        var mi = GenerateId();
        UpdatePerson(SidebarPersonId, {X: mi});
        UpdatePerson(mi, {"^": SidebarPersonId, g: "f"});
        ESE(true, [mi], SidebarPersonId);
    } else if (operation == "addfather2") {
        ECS();
        SPX(f, person.X, person.Y, false);
        var fi = GenerateId();
        UpdatePerson(SidebarPersonId, {Y: fi});
        UpdatePerson(fi, {"^": SidebarPersonId, g: "m"});
        ESE(true, [fi], SidebarPersonId);
    } else if (operation == "addmother3") {
        ECS();
        SPX(f, person.K, person.L, false);
        var mi = GenerateId();
        UpdatePerson(SidebarPersonId, {K: mi});
        UpdatePerson(mi, {
            "^": SidebarPersonId,
            g: "f"
        });
        ESE(true, [mi], SidebarPersonId);
    } else if (operation == "addfather3") {
        ECS();
        SPX(f, person.K, person.L, false);
        var fi = GenerateId();
        UpdatePerson(SidebarPersonId, {L: fi});
        UpdatePerson(fi, {
            "^": SidebarPersonId,
            g: "m"
        });
        ESE(true, [fi], SidebarPersonId);
    } else if (operation == "addspouse") {
        ECS();
        SPX(f, SidebarPersonId, person.s, true);
        var si = GenerateId();
        UpdatePerson(si, {
            "^": SidebarPersonId,
            s: SidebarPersonId,
            g: person.g === 'm' ? 'f' : 'm'
        });
        ESE(true, [si], SidebarPersonId);
    } else if ((operation == "addexspouse") || (operation == "addextraspouse")) {
        ECS();
        var si = GenerateId();
        UpdatePerson(si, {"^": SidebarPersonId});
        EPC(SidebarPersonId, si, {e: ((operation == "addextraspouse") ? 2 : 1)});
        ESE(true, [si], SidebarPersonId);
    } else if ((operation == "toexspouse") || (operation == "toextraspouse")) {
        if (person.s == v) {
            UpdatePerson(SidebarPersonId, {s: ""});
            UpdatePerson(v, {s: ""});
        }
        EPC(SidebarPersonId, v, {e: (operation == "toextraspouse") ? 2 : 1});
        SaveFamily();
        EUF();
    } else if (operation == "notanyspouse") {
        if (person.s == v) {
            UpdatePerson(SidebarPersonId, {s: ""});
            UpdatePerson(v, {s: ""});
        }
        if (person.ep && person.ep[v]) {
            EPC(SidebarPersonId, v, {e: ""});
        }
        SaveFamily();
        EUF();
    } else if (operation == "treespouse") {
        HideRelactions(true);
        TableAppendContent("relactions", _t("Choose the person to partner with:"), false, 1);
        TableAppendContent("relactions", "<SELECT ID=\"treepartner\" CLASS=\"sselect\"></SELECT>", true, 1);
        SLR("relactions", 1);
        if (person.s) {
            RelactionAppendButton(_t("Add as primary partner"), "treeaddspouse", "");
            RelactionAppendButton(_t("Add as extra partner"), "treeaddextraspouse", "");
        } else {
            RelactionAppendButton(_t("Add as partner"), "treeaddspouse", "");
        }
        RelactionAppendButton(_t("Add as ex-partner"), "treeaddexspouse", "");
        RelactionAppendButton(_t("Cancel"), "cancel", "");
        SPP("treepartner", FPL(f, SidebarPersonId), null, true, true);
    } else if (operation == "treeaddspouse") {
        var si = GetSelectElementValue("treepartner");
        if (si) {
            PersonOperate("setspouse", si);
        }
    } else if ((operation == "treeaddexspouse") || (operation == "treeaddextraspouse")) {
        var si = GetSelectElementValue("treepartner");
        if (si) {
            ECS();
            EPC(SidebarPersonId, si, {e: (operation == "treeaddextraspouse") ? 2 : 1});
            SaveFamily();
            EUF();
        }
    } else if (operation == "setmother") {
        SPX(f, person.f, person.m, false);
        UpdatePerson(SidebarPersonId, {m: v});
        SaveFamily();
        EUF();
    } else if (operation == "setfather") {
        SPX(f, person.f, person.m, false);
        UpdatePerson(SidebarPersonId, {f: v});
        SaveFamily();
        EUF();
    } else if (operation == "setmother2") {
        SPX(f, person.X, person.Y, false);
        UpdatePerson(SidebarPersonId, {X: v});
        SaveFamily();
        EUF();
    } else if (operation == "setfather2") {
        SPX(f, person.X, person.Y, false);
        UpdatePerson(SidebarPersonId, {Y: v});
        SaveFamily();
        EUF();
    } else if (operation == "setmother3") {
        SPX(f, person.K, person.L, false);
        UpdatePerson(SidebarPersonId, {K: v});
        SaveFamily();
        EUF();
    } else if (operation == "setfather3") {
        SPX(f, person.K, person.L, false);
        UpdatePerson(SidebarPersonId, {L: v});
        SaveFamily();
        EUF();
    } else if (operation == "setstepmother2") {
        SPX(f, person.X, person.Y, false);
        UpdatePerson(SidebarPersonId, {
            X: v,
            W: "s"
        });
        SaveFamily();
        EUF();
    } else if (operation == "setstepfather2") {
        SPX(f, person.X, person.Y, false);
        UpdatePerson(SidebarPersonId, {
            Y: v,
            W: "s"
        });
        SaveFamily();
        EUF();
    } else if (operation == "setstepmother3") {
        SPX(f, person.K, person.L, false);
        UpdatePerson(SidebarPersonId, {
            K: v,
            Q: "s"
        });
        SaveFamily();
        EUF();
    } else if (operation == "setstepfather3") {
        SPX(f, person.K, person.L, false);
        UpdatePerson(SidebarPersonId, {
            L: v,
            Q: "s"
        });
        SaveFamily();
        EUF();
    } else if (operation == "setspouse") {
        SPX(f, SidebarPersonId, person.s, true);
        if (v) {
            SPX(f, v, f[v].s, true);
        }
        UpdatePerson(SidebarPersonId, {s: v});
        SaveFamily();
        EUF();
    } else if (operation == "treeparents") {
        HideRelactions(true);
        for (var j = 1; j <= 3; j++) {
            if (j == 2) {
                var lt = {
                    p: _h("Second parents"),
                    t: _h("Type of second parents")
                };
            } else if (j == 3) {
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

            TableAppendContent("relactions", lt.p + " &ndash; <SPAN ID=\"treemother" + j + "title\">" + _h("mother") + "</SPAN>:", true, 1);
            TableAppendContent("relactions", "<SELECT ID=\"treemother" + j + "\" CLASS=\"sselect\" onChange=\"SCM(" + j + ")\"></SELECT>", true, 1);
            SLR("relactions", 1);
            TableAppendContent("relactions", lt.p + " &ndash; <SPAN ID=\"treefather" + j + "title\">" + _h("father") + "</SPAN>:", true, 1);
            TableAppendContent("relactions", "<SELECT ID=\"treefather" + j + "\" CLASS=\"sselect\" onChange=\"SCF(" + j + ")\"></SELECT>", true, 1);
            SLR("relactions", 1);
            TableAppendContent("relactions", lt.t + ":", true, 1);
            TableAppendContent("relactions", "<SELECT ID=\"treeparenttype" + j + "\" CLASS=\"sselect\" onChange=\"SCT(" + j + ")\"></SELECT>", true, 1);
            SLR("relactions", 1);
            SLR("relactions", 1);
        }
        RelactionAppendButton(_t("OK"), "treesetparents", "");
        RelactionAppendButton(_t("Switch primary and second parents"), "switchparents", "");
        RelactionAppendButton(_t("Cancel"), "cancel", "");
        SPP("treemother1", FAL(f, SidebarPersonId, null), person.m, true);
        SPP("treefather1", FAL(f, SidebarPersonId, person.m), person.f, true);
        SPP("treemother2", FAL(f, SidebarPersonId, null), person.X, true);
        SPP("treefather2", FAL(f, SidebarPersonId, person.X), person.Y, true);
        SPP("treemother3", FAL(f, SidebarPersonId, null), person.K, true);
        SPP("treefather3", FAL(f, SidebarPersonId, person.K), person.L, true);
        SPT("treeparenttype1", true, person.V);
        SPT("treeparenttype2", person.V != "b", person.W);
        SPT("treeparenttype3", (person.V != "b") && (person.W != "b"), person.Q);
        SUT("treemother1", true);
        SUT("treefather1", false);
        SUT("treemother2", true);
        SUT("treefather2", false);
        SUT("treemother3", true);
        SUT("treefather3", false);
    } else if ((operation == "switchparents") || (operation == "treesetparents")) {
        var s = {
            m: GetSelectElementValue("treemother1"),
            f: GetSelectElementValue("treefather1"),
            V: GetSelectElementValue("treeparenttype1"),
            X: GetSelectElementValue("treemother2"),
            Y: GetSelectElementValue("treefather2"),
            W: GetSelectElementValue("treeparenttype2"),
            K: GetSelectElementValue("treemother3"),
            L: GetSelectElementValue("treefather3"),
            Q: GetSelectElementValue("treeparenttype3")
        };
        if (operation == "switchparents") {
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
            if (s[j] != (person[j] || "")) {
                n[j] = s[j];
                o[j] = person[j];
            }
        }
        if (!disable_family_tests) {
            var cf = FDF(f, SidebarPersonId, null, null, null);
        }
        SPX(f, person.f, person.m, false);
        SPX(f, person.X, person.Y, false);
        SPX(f, person.K, person.L, false);
        UpdatePerson(SidebarPersonId, n);
        EUS(true, null, null, false, false);
        if (!disable_family_tests) {
            var df = FDF(f, SidebarPersonId, null, null, null);
        }
        if ((!disable_family_tests) && (df.length > cf.length)) {
            ShowAlert(_t("This choice of parents is not allowed because it would split the tree. Please try deleting the parents and their relatives instead, or deleting this person."));
            UpdatePerson(SidebarPersonId, o);
        }
        SaveFamily();
        EUF();
    } else if (operation == "addparents2") {
        HideRelactions(true);
        RelactionAppendButton(_t("Add adopted parents"), "addparents2go", "a");
        RelactionAppendButton(_t("Add foster parents"), "addparents2go", "f");
        RelactionAppendButton(_t("Add godmother"), "addgodparent", "2m");
        RelactionAppendButton(_t("Add godfather"), "addgodparent", "2f");
        if (person.V) {
            if (person.V != "b") {
                RelactionAppendButton(_t("Add biological parents"), "addparents2go", "b");
            }
        } else {
            RelactionAppendButton(_t("Add biological parents (was adopted)"), "addparents2go", "ba");
            RelactionAppendButton(_t("Add biological parents (was fostered)"), "addparents2go", "bf");
        }
        SAP(f, person, person.f, _i("Set stepmother to $"), "setstepmother2", null, null);
        SAP(f, person, person.m, _i("Set stepfather to $"), "setstepfather2", null, null);
        RelactionAppendButton(_t("Choose parents from tree"), "treeparents", "");
        RelactionAppendButton(_t("Cancel"), "cancel", "");
    } else if (operation == "addparents3") {
        HideRelactions(true);
        RelactionAppendButton(_t("Add adopted parents"), "addparents3go", "a");
        RelactionAppendButton(_t("Add foster parents"), "addparents3go", "f");
        RelactionAppendButton(_t("Add godmother"), "addgodparent", "3m");
        RelactionAppendButton(_t("Add godfather"), "addgodparent", "3f");
        SAP(f, person, person.f, _i("Set stepmother to $"), "setstepmother3", null, null);
        SAP(f, person, person.m, _i("Set stepfather to $"), "setstepfather3", null, null);
        RelactionAppendButton(_t("Choose parents from tree"), "treeparents", "");
        RelactionAppendButton(_t("Cancel"), "cancel", "");
    } else if ((operation == "addparents2go") || (operation == "addparents3go")) {
        ECS();
        var fi = GenerateId();
        var fo = {
            "^": SidebarPersonId,
            g: "m"
        };
        UpdatePerson(fi, fo);
        var mi = GenerateId();
        var mo = {
            "^": SidebarPersonId,
            g: "f",
            s: fi
        };
        UpdatePerson(mi, mo);
        if (operation == "addparents2go") {
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
        UpdatePerson(SidebarPersonId, po);
        ESE(true, [fi, mi], SidebarPersonId);
    } else if (operation == "addgodparent") {
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
        var fi = GenerateId();
        var fo = {
            "^": SidebarPersonId,
            g: g
        };
        UpdatePerson(fi, fo);
        var po = {};
        po[a] = fi;
        po[t] = "g";
        UpdatePerson(SidebarPersonId, po);
        ESE(true, [fi], SidebarPersonId);
    } else if (operation == "delete") {
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
            UpdatePerson(v, {x: ""});
            EUF();
        }
    } else if (operation == "cancel") {
        SSA(Spa, false);
    } else if (operation == "morelactions") {
        SRP(true);
    } else if (operation == "startbranch") {
        var md = (OwnerPersonId == SidebarPersonId);
        if (confirm((md ? _t("This will create a new family for your relatives.") : _t("This will create a new family for $'s relatives.", person.h)) + " " + _t("Are you sure you want to proceed?"))) {
            GetElement("startbranch").value = _t("Please wait a few moments...");
            EFB(SidebarPersonId);
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
    var v = GetElement(i + "variant");
    v.options.length = 0;
    for (var j in DateDecorates) {
        v.options[v.options.length] = new Option(DateDecorates[j], j);
    }
    for (var n = 1; n <= 2; n++) {
        var v = GetElement(i + "dom" + n);
        v.options.length = 0;
        v.options[v.options.length] = new Option("日", 0);
        for (var j = 1; j <= 31; j++) {
            v.options[v.options.length] = new Option(j+'日', j);
        }
        var v = GetElement(i + "month" + n);
        v.options[0] = new Option('月', 0)
        for (let j = 1; j <= 12; j++) {
            v.options[j] = new Option(j+'月', j);
        }
    }
    var p = DateDetailStrToObj(d ? d.toString() : "");
    var bce = (p.y1 < 0) || (p.y2 < 0);
    SetElementValue(i + "variant", p.v);
    GetElement(i + "bce").checked = bce;
    SetElementShow(i + "options", p.v || bce);
    SetElementShow(i + "expand", !(p.v || bce));
    SetSelectElementSelected(i + "dom1", p.d1);
    SetSelectElementSelected(i + "month1", p.m1);
    SetElementValue(i + "year1", bce ? -p.y1 : p.y1);
    SetSelectElementSelected(i + "dom2", p.d2);
    SetSelectElementSelected(i + "month2", p.m2);
    SetElementValue(i + "year2", bce ? -p.y2 : p.y2);
    SHD(i);
}

function SHD(i) {
    var v = GetElementValue(i + "variant");
    SetElementShow(i + "date2", v == "bet");
}

function SXD(i) {
    SetElementShow(i + "options", true);
    SetElementShow(i + "expand", false);
}

function SGD(i) {
    var y1 = GetElementValue(i + "year1");
    var y2 = GetElementValue(i + "year2");
    if (GetElement(i + "bce").checked) {
        y1 = -y1;
        y2 = -y2;
    }
    return BuildDateDetailStr(GetElementValue(i + "variant"), GetElementValue(i + "dom1"), GetElementValue(i + "month1"), y1, GetElementValue(i + "dom2"), GetElementValue(i + "month2"), y2);
}

function SIU(u) {
    var p = Efa[SidebarPersonId];
    var r = p ? p.r : null;
    var pw = (!Sed) && SPW(SidebarPersonId) && GetElementValue("familyid");
    u = u && pw;
    if (u) {
        var v = GetElement("uploadiframe");
        v.src = "imageupload.php"
    } else {
        if (r) {
            var v = GetElement("personimage");
            SIV(r, v);
            v.title = pw ? _t("Click to change photo") : "";
        }
    }
    // 关闭添加照片功能
    // SetElementValue("uploadbutton", (SidebarPersonId == OwnerPersonId) ? _t("Add my photo") : _t("Add photo for $", p.h));
    // SetElementShow("uploadbutton", pw && (!r) && (!u));
    SetElementShow("uploadiframe", u);
    SetElementShow("personimage", r && (!u));
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
    if (SPW(SidebarPersonId) && !Sed) {
        SIU(true);
    }
}

function SIF(f, i, r, w, h) {
    UpdatePerson(i, {r: (r ? (r + " " + w + " " + h) : r)});
    SaveFamily();
    EUF();
    SIU(false);
}

function SIA() {
    SIU(false);
}

// SCC
function ShowClearAndRestartConfirm() {
    if (confirm(_t("Are you sure you want to clear this entire family and start again?") + " " + _t("None of your work will be saved!"))) {
        ClearAndRestart();
    }
}

// SUP 计算渲染关系路径
function CalculateRelationPath(personId) {
    if (personId) {
        SetElementInnerText("pathtitle", SPN(Efa[personId]));
        Sps = OwnerPersonId;
        if (!(Sps && Efa[Sps])) {
            Sps = OwnerPersonId;
        }
        Spd = personId;
    }
    SetElementInnerHTML("pathcontent", TPHNew(Efa, GetBaseRelationRoutes(Efa, Sps, Spd, 1, 1),
        GetConfigBirthNameValue(), GetConfigSurnameFirstValue(), false));
    SSP(SidebarPersonId);
}

function SSP(i) {
    var p = Efa[i];
    var e = GetElement("path-" + Spl);
    if (e) {
        e.className = "pi";
    }
    var e = GetElement("path-" + i);
    if (e) {
        e.className = "ps";
    }
    Spl = i;
}

function SEP(i, e) {
    GetElement("shortpath-" + i).style.display = e ? "none" : "inline-block";
    GetElement("longpath-" + i).style.display = e ? "inline-block" : "none";
}

function SPS() {
    var ra = [];
    for (var j in Efa) {
        if (j != ViewPersonId) {
            ra[ra.length] = j;
        }
    }
    SPP("pathstartid", ra, Sps, false);
    SHP();
}

function SHP() {
    e = GetElement("path-" + Sps);
    if (e) {
        e.style.display = "none";
    }
}

function SSS() {
    Sps = GetSelectElementValue("pathstartid");
    CalculateRelationPath(null);
    SHP();
}

function STM() {
    CalculateRelationPath(null);
    SHP();
}

// 切换为日历展示
function SwitchToCalendar() {
    var t = new Date();
    t.setDate(t.getDate() - 1);
    var y = t.getFullYear();
    var m = 1 + t.getMonth();
    var d = t.getDate();
    var es = [];
    for (var j in Efa) {
        var p = Efa[j];
        if (p.b && (p.z != 1)) {
            var bd = DateDetailStrToObj(p.b);
            if (bd.d1 && bd.m1 && (!bd.v) && (((bd.y1 >= (y - 120)) && (bd.y1 < y)) || !bd.y1)) {
                es[es.length] = {d: bd.d1, m: bd.m1, y: bd.y1, t: "b", i1: j};
            }
        }
        if (p.es && (p.es > j) && Efa[p.es] && (Efa[p.es].es == j) && (p.z != 1) && (Efa[p.es].z != 1) && p.gp && (p.gp[p.es] == "m") && p.mp && p.mp[p.es]) {
            var md = DateDetailStrToObj(p.mp[p.es]);
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
        var sf = GetConfigSurnameFirstValue();
        var bn = GetConfigBirthNameValue();
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
                h += "<a href=\"#\" onClick=\"ESP('" + e.i1 + "', true); return false;\">" + EncodeHTML(FDN(Efa[e.i1], false, 1, sf, (bn == 1), true, false, false, false)) + "</a>";
                h += " and <a href=\"#\" onClick=\"ESP('" + e.i2 + "', true); return false;\">" + EncodeHTML(FDN(Efa[e.i2], false, 1, sf, (bn == 1), true, false, false, false)) + "</a>";
            } else {
                h += "<a href=\"#\" onClick=\"ESP('" + e.i1 + "', true); return false;\">" + EncodeHTML(FDN(Efa[e.i1], true, 1, sf, (bn == 1), true, true, true, true)) + "</a>";
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
    SetElementShow("showcalendar", true);
    SetElementShow("showtimeline", false);
    SetElementInnerHTML("caltimecontent", h);
}

// SUI 切换为时间线展示
function SwichToTimeLine() {
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
    es.sort(DateObjCompare);
    if (es.length) {
        var sf = GetConfigSurnameFirstValue();
        var bn = GetConfigBirthNameValue();
        var h = "";
        var ly = -99999999;
        h += "<table class=\"ct\">";
        for (var j = 0; j < es.length; j++) {
            var e = es[j];
            if (e.y != ly) {
                h += "<tr><td colspan=\"2\" class=\"cm\">" + DateYearToString(e.y) + "</td></tr>";
                ly = e.y;
            }
            var dt = DateDetailStrToString(e.fd, true, true);
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
    SetElementShow("showcalendar", false);
    SetElementShow("showtimeline", true);
    SetElementInnerHTML("caltimecontent", h);
}

function SCI(e1, e2) {
    return e1.st - e2.st;
}