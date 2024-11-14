// NSS 切换侧边栏展开按钮:展开/关闭
function SwapSideButton(isShow) {
    GetElement('sidehide').style.rotate = isShow ? '0deg' : '180deg';
}

function NKS(s) {
    SetElementInnerHTML("keylinktext", s ? "Hide" : "Show");
}

function NSD(d) {
    GetElement("detail_0p").checked = true;
    GetElement("detail_0lq").checked = true;
    var ds = (d + "").split(".");
    var db = {};
    for (var i = 0; i < ds.length; i++) {
        db[ds[i]] = true;
        var e = GetElement("detail_" + ds[i]);
        if (e) {
            e.checked = (ds[i].substr(0, 1) == "0") ? false : true;
        }
    }
    SetElementDisabled("detail_pm", db["0p"]);
    SetElementDisabled("detail_N", db["0p"]);
    SetElementDisabled("detail_TJ", db["0p"]);
    SetElementDisabled("detail_0lq", db["0p"]);
    SetElementShow("otherage", db["age"]);
}

// NGR 获取所有颜色配置
function GetConfigAllColors() {
    var c = {};
    for (var j = 0; j < ColorFields.length; j++) {
        var f = ColorFields[j];
        c[f] = GetElementValue("color" + f);
    }
    return c;
}

// NGL 获取所有连线配置
function GetConfigAllLines() {
    var l = {};
    for (var j = 0; j < LineFields.length; j++) {
        var f = LineFields[j];
        l[f] = GetElementValue("line" + f);
    }
    return l;
}

// NGD 获取要展示某时年龄值的指定日期
function GetConfigOtherAgeValue() {
    var inputDateStr = GetElementValue("otherage");
    var dateObj = DateStrToObj(inputDateStr);
    return dateObj.y ? inputDateStr : GetNowDateStr();
}

// NGB 获取姓氏选中值
function GetConfigBirthNameValue() {
    return parseInt(GetSelectElementValue("showbirthname"));
}

// NGS 名字前后选中值
function GetConfigSurnameFirstValue() {
    return parseInt(GetSelectElementValue("showsurnamefirst"));
}

// NGM 性别左右选中值
function GetConfigMaleLeftValue() {
    return parseInt(GetSelectElementValue("showmaleleft"));
}

// NGC 叔父代数
function GetConfigCousinsLevelValue() {
    return parseInt(GetSelectElementValue("showcousins"));
}

// NGH 子级代数
function GetConfigChildrenLevelValue() {
    return parseInt(GetSelectElementValue("showchildren"));
}

// NGA 父级代数
function GetConfigParentsLevelValue() {
    return parseInt(GetSelectElementValue("showparents"));
}

// NSP 设置 返回xxx按钮名称
function SetBackToText(personId) {
    SetElementInnerText("backtotext", (personId == OwnerPersonId) ? _t("Back to me") : (Efa[personId] ? _t("Back to $", Efa[personId].h) : _t("Back to start")));
}

function NRT() {
}

function NPF() {
    var r = GetElement("findfield").getBoundingClientRect();
    GetElement("findlist").style.left = r.left + "px";
}

// NRR 根据宽度调整 navrow 展示的元素
function JustifyNavrowElement() {
    var e = GetElement("navrow");
    e.className = "";
    for (let s = 1; s <= 5; s++) {
        if (e.scrollWidth <= e.offsetWidth) {
            break;
        }
        e.className += "nshrink" + s + " ";
    }
}

// NCP 更新展示的人员数量
function SetPersonCount(count) {
    GetElement("findfield").placeholder = _t("# people", count);
}

// NFF 展示人员搜索框
function ShowFindList() {
    NPF();
    NUF(null);
    SetElementShow("findlist", true);
    GetElement("findlist").onclick = function (e) {
        var i = e.target.id || e.target.parentElement.id;
        if (i.substring(0, 5) == "list_") {
            ESP(i.substring(5), true);
        }
    };
}

function NHF() {
    SetElementShow("findlist", false);
}

function NIF() {
    SetElementShow("findlist", true);
    setTimeout("NUF(" + GetElementValue("findfield").length + ");", 100);
}

function NUF(vl) {
    var ev = GetElementValue("findfield");
    if ((vl !== null) && (vl != ev.length)) {
        return;
    }
    NUL(GetElement("findlist"), ev, null, null, false);
}

function NUL(e, sv, ai, si, no) {
    var ss = sv.trim().toLowerCase().split(/[ \-]/);
    var bn = GetConfigBirthNameValue();
    var bn1 = (bn == 1);
    var sf = GetConfigSurnameFirstValue();
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
            reg += EncodeHTML(ss[k]).replace(esc, "\\$&") + "|";
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
    var h = EncodeHTML(t);
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