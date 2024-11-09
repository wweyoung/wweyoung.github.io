// Ecf 所有颜色配置field
var ColorFields = ["back", "male", "female", "other", "living", "deceased"];
// Elf 所有连线配置field
var LineFields = ["current", "otherpartner", "biological", "otherparent"];
// 人员列表
let Efa = {};
var Eff = {};
// Efo 家谱OwnerId
var OwnerPersonId;
// Ewp 允许编辑的人员
var AllowWritePersonId = null;
var Edt, Eda, Edc, Edm;
// Eve 脚本长度 废弃
var ScriptTextLength;
// Esd 要展示的人员属性
var PersonShowFields = null;
var Eeq = [];
var Esc = false;
// Ess 家谱脚本
var ScriptText = "";
var Eis = "";
var Eec = null;
var Epc = null;
var Esa;
var Edd;
// Edy
var AllowDownload = true;
// Ece 是否允许编辑
let AllowWrite;
let Eca, Ecd;
var Eed, Eud, Exd, Esf, Eaf;
var Elh, Ech;
var Elb = null;
// Ebi 是否IE浏览器
var IsIEBrowser;
// Esb 是否safari浏览器
var IsSafariBrowser;
var Eoh = null;
// Evp 当前选中的节点
let ViewPersonId;
let FileHandler;
let FileWriteHandler;


// PL
function OnBodyOnload() {
    if (!staticMode) {
        CE();
        LF("topform");
    }
    if (hideSidebar) {
        SwapHideSideBar(false);
    }
    if (staticMode || (typeof (XMLHttpRequest) != "undefined")) {
        window.onbeforeunload = OnWindowBeforeUnload;
        var c = GetCookie("zoomfactor");
        var zf = parseFloat((c === null) ? defaultZoom : c);
        SetElementValue("showzoom", zf);
        var c = GetCookie("showdetail");
        PersonShowFields = (c === null) ? defaultDetail : c;
        NSD(PersonShowFields);
        for (var j = 0; j < ColorFields.length; j++) {
            var f = ColorFields[j];
            var c = GetCookie("color" + f);
            SetElementValue("color" + f, (c === null) ? defaultColors[f] : decodeURIComponent(c));
        }
        for (var j = 0; j < LineFields.length; j++) {
            var f = LineFields[j];
            var c = GetCookie("line" + f);
            SetElementValue("line" + f, (c === null) ? defaultLines[f] : decodeURIComponent(c));
        }
        var c = GetCookie("showbirthname");
        SetSelectElementSelected("showbirthname", (c === null) ? defaultBirthName : c);
        var c = GetCookie("showsurnamefirst");
        SetSelectElementSelected("showsurnamefirst", (c === null) ? defaultSurnameFirst : c);
        var c = GetCookie("showmaleleft");
        SetSelectElementSelected("showmaleleft", (c === null) ? defaultMaleLeft : c);
        var c = GetCookie("showcousins");
        SetSelectElementSelected("showcousins", (c === null) ? defaultCousins : c);
        var c = GetCookie("showchildren");
        SetSelectElementSelected("showchildren", (c === null) ? defaultChildren : c);
        var c = GetCookie("showparents");
        SetSelectElementSelected("showparents", (c === null) ? defaultParents : c);
        var c = GetCookie("widthfactor");
        var wf = parseFloat((c === null) ? defaultWidth : c);
        SetElementValue("showwidth", wf);
        var c = GetCookie("textsize");
        var tf = parseFloat((c === null) ? defaultTextSize : c);
        SetElementValue("textsize", tf);
        var c = GetCookie("otheragedate");
        if (c) {
            EWA(c);
        }
        IsIEBrowser = (document.all && (navigator.userAgent.toLowerCase().indexOf("msie") >= 0));
        IsSafariBrowser = (navigator.userAgent.toLowerCase().indexOf("safari") >= 0);
        TreeElementAddEventListener(GetElement("treemargin"));
        JustifyNavrowElement();
        if (staticMode) {
            OwnerPersonId = GetElementValue("founderid");
            var h = new String(window.location.hash);
            if (h.length && (h.charAt(0) == "#")) {
                h = h.substring(1);
            }
            var a = h.split(":");
            var m = a[0];
            var i = a[1];
            if (i) {
                SetElementValue("viewpersonid", i);
            }
            if (m) {
                SetElementValue("viewmode", m);
            }
            SetElementShow("printbutton", false);
            ERP(false);
        } else {
            AllowWrite = true;
            Eca = true;
            Ecd = true;
            OwnerPersonId = GetElementValue("personid");
            var familyId = GetElementValue("familyid");
            var ic = GetElementValue("importcacheid");
            if (familyId || ic) {
                LoadScriptText()
                // HttpPostNoBody("family_read", {
                //     f: fi,
                //     i: ic,
                //     p: GetElementValue("personid"),
                //     c: GetElementValue("checksum"),
                //     s: GetElementValue("sessionid")
                // }, EFR, fi && (ic || GetElementValue("newscript").length));
            } else {
                ERP(false);
            }
        }
    } else {
        SetElementShow("treebg", false);
        SetElementShow("noajax", true);
    }
}

// EPR
function OnBodyResize() {
    NPF();
    JustifyNavrowElement();
}

function ESB(l) {
    if (!IsSafariBrowser) {
        if (IsIEBrowser) {
            Eoh = l;
            setTimeout("GetElement('backframe').src='back.htm?" + l + "';", 100);
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
    if (!IsSafariBrowser) {
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
        if ((i && (i != GetElementValue("viewpersonid"))) || (m && (m != GetElementValue("viewmode")))) {
            if ((Eec !== null) && (i == Epc) && (m === "view")) {
                ConfirmOrCancelPerson(false);
            } else {
                if (i && Efa[i]) {
                    SetElementValue("viewpersonid", i);
                }
                if (m) {
                    SetElementValue("viewmode", m);
                }
                EUS(false, null, null, true, true);
            }
        }
    }
}

// EPU 页面退出触发
function OnWindowBeforeUnload(e) {
    if ((!Esc) && (!staticMode)) {
        if (GetElementValue("newscript").length || GetElementValue("importcacheid")) {
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

// EFR
function LoadScriptText(script = "iSTART", familyId) {
    console.log(arguments)
    ParseScriptText(script);
    ScriptText = script; // t
    AllowWritePersonId = null;
    OwnerPersonId = 'START'; // fp
    Edd = true; // al
    AllowDownload = true; // dy
    AllowWrite = true; // aw
    Eca = true; // an
    Ecd = true; // ax
    Eed = true; // ae
    Eud = true; // au
    Exd = true; // az
    Esf = true; // as
    Eaf = true; // aa
    Edt = 0; // ds
    Eda = "0"; // da
    Edc = 10485760; // dc
    Edm = 16777216; // dm
    var e = GetElement("lfamilylabels");
    e.innerHTML = "";
    var _1b = ['test', 'test2']; // fl
    if (_1b && _1b.length) {
        for (var j = 0; j < _1b.length; j++) {
            var s = document.createElement("span");
            s.className = "lfamilylabel";
            s.innerText = _1b[j].charAt(0).toUpperCase() + _1b[j].substring(1);
            e.appendChild(s);
        }
    }
    SetElementValue("familyid", familyId);

    if (AllowWritePersonId && GetElement("welcomewrite")) {
        SetElementClassShowRow("welcomewrite", true);
    }
    if (Eud) {
        MainElementAddEventListener();
    }
    ERP(false);
    HideWelcome();
}

function ERP(isNeedSaveFamily) {
    ParseScriptText(GetElementValue("newscript"));
    if (PersonShowFields === null) {
        PersonShowFields = "";
        for (var j in Efa) {
            if (Efa[j].r) {
                PersonShowFields = "r";
            }
        }
        NSD(PersonShowFields);
    }
    EUS(true, null, GetElementValue("viewmode"), true, false);
    if (isNeedSaveFamily) {
        SaveFamily();
    } else {
        OnSavingScript(false);
    }
    setInterval(EBT, 250);
}

function EMD(e) {
    e = e || window.event;
    var t = e.target || e.srcElement || e;
    if (!(GetElement("findfield").contains(t) || GetElement("findlist").contains(t))) {
        NHF();
    }
}

function EUS(r, viewPersonId, viewMode, d, s) {
    console.log('>EUS', arguments)
    var preViewPersonId = ViewPersonId = GetElementValue("viewpersonid");
    var preViewMode = GetElementValue("viewmode");
    if (r) {
        var personId = GetElementValue("personid");
        if (OwnerPersonId && !Efa[OwnerPersonId]) {
            Efa[OwnerPersonId] = {};
        }
        FRF(Efa, personId, OwnerPersonId);
        if (personId && Efa[personId]) {
            SetBackToText(personId);
            SetElementValue("name", FDN(Efa[personId], false, 1, false, false, false));
            SetElementValue("email", Efa[personId].e);
        } else {
            SetBackToText(OwnerPersonId);
        }
        SetPersonCount(Object.entries(Efa).length);
        if ((staticMode || GetElementValue("familyid")) && OwnerPersonId && Efa[OwnerPersonId]) {
            var fb = FDN(Efa[OwnerPersonId], false, 1, false, false, false);
            SetElementInnerText("lfamilyinfo", _t("Founded by $", fb));
            if (!staticMode) {
                SetElementShow("historybutton", true);
            }
        } else {
            SetElementInnerText("lfamilyinfo", "");
        }
    }
    if (viewPersonId) {
        ViewPersonId = viewPersonId;
    }
    if (viewMode) {
        preViewMode = viewMode;
    }
    if ((!ViewPersonId) || (!Efa[ViewPersonId])) {
        if (OwnerPersonId && Efa[OwnerPersonId]) {
            ViewPersonId = OwnerPersonId;
        } else {
            for (ViewPersonId in Efa) {
                break;
            }
        }
    }
    SetElementValue("viewpersonid", ViewPersonId);
    SetElementValue("viewmode", preViewMode);
    if (ViewPersonId != preViewPersonId) {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    }
    if (preViewMode == "history") {
        SwapHideSideBar(true);
        if ((!IsSafariBrowser && Elh != preViewMode) || (IsSafariBrowser && viewMode)) {
            GetElement("extraframe").src = "history.php?f=" + escape(GetElementValue("familyid")) + "&p=" + escape(GetElementValue("personid")) + "&c=" + escape(GetElementValue("checksum")) + "&s=" + escape(GetElementValue("sessionid")) + (IsDarkMode() ? "&d=1" : "");
        }
        SetElementVisibility("extradiv", true);
    } else if (preViewMode == "share") {
        SwapHideSideBar(true);
        GetElement("extraframe").src = "share.php?f=" + escape(GetElementValue("familyid")) + "&p=" + escape(GetElementValue("personid")) + "&c=" + escape(GetElementValue("checksum")) + "&i=" + escape(ViewPersonId) + "&s=" + escape(GetElementValue("sessionid")) + "&z=" + ((Efa[ViewPersonId].z != "1") ? 0 : 1) + (IsDarkMode() ? "&d=1" : "");
        SetElementVisibility("extradiv", true);
    } else if (preViewMode == "download") {
        SwapHideSideBar(true);
        GetElement("extraframe").src = "download.php?f=" + escape(GetElementValue("familyid")) + "&p=" + escape(GetElementValue("personid")) + "&c=" + escape(GetElementValue("checksum")) + "&s=" + escape(GetElementValue("sessionid")) + (IsDarkMode() ? "&d=1" : "");
        SetElementVisibility("extradiv", true);
    } else if (preViewMode == "print") {
        SwapHideSideBar(true);
        if (viewMode) {
            GetElement("extraframe").src = "print.php?f=" + escape(GetElementValue("familyid")) + "&p=" + escape(GetElementValue("personid")) + "&c=" + escape(GetElementValue("checksum")) + "&s=" + escape(GetElementValue("sessionid")) + (IsDarkMode() ? "&d=1" : "");
        }
        SetElementVisibility("extradiv", true);
    } else if (preViewMode == "import") {

    } else if (preViewMode == "importfinish") {
    } else if (IsElementVisibility("extradiv")) {
        GetElement("extraframe").src = "";
        SetElementVisibility("extradiv", false);
    }


    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)) {
        SetElementShow("extradiv", IsElementVisibility("extradiv"));
    }
    SetSidebarPersonAndViewMode(ViewPersonId, preViewMode);
    if (viewPersonId || viewMode) {
        ESB(preViewMode + ":" + ViewPersonId);
    }
    if (d || (ViewPersonId != preViewPersonId)) {
        TRT(Efa, ViewPersonId, GetElementValue("personid"), PersonShowFields, GetConfigOtherAgeValue(), GetConfigBirthNameValue(),
            GetConfigSurnameFirstValue(), GetConfigAllColors(), GetConfigAllLines(), GetConfigMaleLeftValue(),
            GetConfigChildrenLevelValue(), GetConfigParentsLevelValue(), GetConfigCousinsLevelValue(), preViewPersonId,
            GetElementValue("showzoom"), GetElementValue("showwidth"), GetElementValue("textsize"), s);
        NRT();
    }
    if (viewMode == "path") {
        CalculateRelationPath(ViewPersonId);
        SPS();
        SetElementShow("pathdiv", true);
    }
    if (viewMode == "calendar") {
        SwitchToCalendar();
        SetElementShow("caltimediv", true);
        SwapHideSideBar(true);
    }
    if (viewMode == "timeline") {
        SwichToTimeLine();
        SetElementShow("caltimediv", true);
        SwapHideSideBar(true);
    }
    if (preViewMode == "path") {
        SSP(ViewPersonId);
    } else {
        SetElementShow("pathdiv", false);
    }
    if ((preViewMode != "calendar") && (preViewMode != "timeline")) {
        SetElementShow("caltimediv", false);
    }
    if (r || (ViewPersonId != preViewPersonId)) {
        if (parent && parent.postMessage) {
            parent.postMessage("focus=" + ViewPersonId, "*");
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


function ESM(m) {
    EUS(false, null, m, false, false);
}

function ImportScriptFile() {
    console.log('import')
    window.showOpenFilePicker({
        types: [
            {
                description: "Text file",
                accept: {
                    "text/plain": [".txt"],
                },
            },
        ],
        suggestedName: "testFile",
        excludeAcceptAllOption: true,
        multiple: false,
    }).then(async fileHandle => {
        let file = await fileHandle[0].getFile();
        console.log(file)
        let reader = new FileReader();
        // 新建 FileReader 对象

        reader.onload = function () {
            LoadScriptText(this.result, file.name);
            SetElementInnerText("lfamilyname", file.name);
        };
        reader.readAsText(file);
        FileHandler = fileHandle[0];
    });
}

function ESP(i, s) {
    HideWelcome();
    for (var j = 0; j < (Eeq.length - 1); j++) {
        if (Eeq[j] == i) {
            Eeq.splice(j, 1);
            EUS(false, i, "edit", false, s);
            return;
        }
    }
    var viewMode = GetElementValue("viewmode");
    Eeq = [];
    EUS(false, i, (viewMode == "share" || viewMode == "print" || viewMode == "history" || viewMode == "path"
        || viewMode == "calendar" || viewMode == "timeline" || viewMode == "users") ? null : "view", false, s);
}

function ECS() {
    Eec = GetElementValue("newscript").length;
    Epc = GetElementValue("viewpersonid");
}

function ESE(r, i, b) {
    Eeq = [];
    for (var j = 1; j < i.length; j++) {
        Eeq[Eeq.length] = i[j];
    }
    Eeq[Eeq.length] = b;
    HideWelcome();
    EUS(r, i[0], "edit", r, true);
}

// EFE 人物保存/取消
function ConfirmOrCancelPerson(isConfirm) {
    if (isConfirm) {
        if (Eeq.length <= 1) {
            SaveFamily();
            HideWelcome();
            EUS(false, Eeq.length ? Eeq[0] : null, "view", false, true);
            Eec = null;
        } else {
            EUS(false, Eeq.shift(), "edit", false, true);
        }
    } else {
        if (Eec !== null) {
            ESM("view");
            Efa = {};
            ParseScriptText(ScriptText);
            ParseScriptText(Eis);
            var ks = GetElementValue("newscript");
            ks = ks.substring(0, Eec);
            SetElementValue("newscript", ks);
            ParseScriptText(ks);
            Eec = null;
            EUS(true, Epc, "view", true, true);
        } else {
            EUS(true, null, "view", true, true);
        }
        OnSavingScript(false);
    }
}

// EFV 更新家谱对象
function UpdatePersonField(id, prop, value) {
    if (id) {
        Efa[id] = Efa[id] || {};
        if ((prop == "x") || (prop == "s")) {
            if (Efa[id].s && Efa[Efa[id].s]) {
                Efa[Efa[id].s].s = null;
            }
        }
        if (prop == "x") {
            delete Efa[id];
        } else {
            if ((prop == "s") && value) {
                Efa[value] = Efa[value] || {};
                if (Efa[value].s && Efa[Efa[value].s]) {
                    Efa[Efa[value].s].s = null;
                }
                Efa[value].s = id;
            }
            Efa[id][prop] = value ? value : null;
        }
    }
}

// EPV 更新人员间的关系
function UpdatePersonRelationField(personId1, personId2, field, value) {
    if (personId1 && personId2) {
        Efa[personId1] = Efa[personId1] || {};
        Efa[personId2] = Efa[personId2] || {};
        var key = field + "p";
        Efa[personId1][key] = Efa[personId1][key] || {};
        Efa[personId2][key] = Efa[personId2][key] || {};
        Efa[personId1][key][personId2] = value.length ? value : null;
        Efa[personId2][key][personId1] = value.length ? value : null;
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

// ERS 解析脚本文本
function ParseScriptText(script) {
    var operates = ScriptToOperateArray(script);
    for (let j = 0; j < operates.length; j++) {
        var node = operates[j];
        var type = node.t.charAt(0);
        var id = node.t.substring(1);
        var value = node.v.replace(/\\t/g, "\t").replace(/\\n/g, "\n").replace(/\\\\/g, "\\");
        if (type == "i") {
            UpdatePersonField(id, node.p, value);
        } else if (type == "p") {
            var ii = id.split(" ");
            UpdatePersonRelationField(ii[0], ii[1], node.p, value);
        } else if (type == "d") {
            EDV(id, node.p, value);
        }
    }


}

// ECL 脚本转更新记录
function ScriptToOperateArray(script) {
    var l = ReplaceRN2N(script).split("\n");
    var c = [];
    for (var j = 0; j < l.length; j++) {
        var e = l[j].split("\t");
        for (var k = 1; k < e.length; k++) {
            c[c.length] = {t: e[0], p: e[k].charAt(0), v: e[k].substring(1, e[k].length)};
        }
    }
    return c;
}

// EOS 计算操作记录，获取最终保存脚本
function GetSaveScript(historyScript) {
    const operations = ScriptToOperateArray(historyScript);
    let persons = {};
    for (let i = 0; i < operations.length; i++) {
        let operation = operations[i];
        if (operation.p === 'x') {
            delete persons[operation.t];
            continue;
        }
        if (!persons[operation.t]) {
            persons[operation.t] = {};
        }
        persons[operation.t][operation.p] = operation.v;
    }
    console.log(persons);
    let scriptBuilder = [];
    Object.entries(persons).forEach(([type, fields])=>{
        scriptBuilder.push(type);
        Object.entries(fields).forEach(([paramName, value])=>{
            scriptBuilder.push('\t', paramName, value);
        })
        scriptBuilder.push('\n');
    })
    return scriptBuilder.join('');
    // var script = "";
    // var type = null;
    // var fields = [];
    // for (var j = 0; j < operates.length; j++) {
    //     var e = operates[j];
    //     if (e.t != type) {
    //         if (type) {
    //             script += type + "\t" + fields.join("\t") + "\n";
    //         }
    //         type = e.t;
    //         fields = [];
    //     }
    //     var fieldsSize = fields.length;
    //     if ((fieldsSize > 0) && (fields[fieldsSize - 1].charAt(0) == e.p) && (e.p != "+") && (e.p != "-")) {
    //         fields[fieldsSize - 1] = e.p + e.v;
    //     } else {
    //         fields[fieldsSize] = e.p + e.v;
    //     }
    // }
    // if (type) {
    //     script += type + "\t" + fields.join("\t") + "\n";
    // }
    return script;
}

// EFC 更新人员变更数据
function UpdatePerson(id, props) {
    console.log("EFC", arguments)
    for (const key in props) {
        const value = props[key] ? ReplaceRN2N(new String(props[key])) : "";
        UpdatePersonField(id, key, value);
        GetElement("newscript").value += "\ni" + id + "\t" + key.charAt(0) + EscapeEF(value);
    }
    OnSavingScript(false);
}

// EPC 更新关系?变更数据
function EPC(i1, i2, c) {
    console.log("EPC", arguments)
    for (var p in c) {
        var v = c[p] ? ReplaceRN2N(new String(c[p])) : "";
        UpdatePersonRelationField(i1, i2, p, v);
        GetElement("newscript").value += "\np" + i1 + " " + i2 + "\t" + p.charAt(0) + EscapeEF(v);
    }
    OnSavingScript(false);
}

function EDC(i, c) {
    for (var p in c) {
        var v = c[p] ? ReplaceRN2N(new String(c[p])) : "";
        EDV(i, p, v);
        GetElement("newscript").value += "\nd" + i + "\t" + p.charAt(0) + EscapeEF(v);
    }
    OnSavingScript(false);
}

// EEF 字符串转义（\,\n,\t）
function EscapeEF(s) {
    return s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t");
}

// EFI 获取随机id
function GenerateId() {
    let i;
    const c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let j = 0; j < 1000; j++) {
        i = "";
        for (let k = 0; k < 5; k++) {
            i += c.charAt(Math.floor(Math.random() * (k ? 36 : 26)));
        }
        if (!Efa[i]) {
            break;
        }
    }
    return i;
}

// Edf 是否正在保存
var IsSaving = false;

// ESS 保存
function SaveFamily() {
    if (!staticMode) {
        var fi = GetElementValue("familyid");
        var ic = GetElementValue("importcacheid");
        if (!IsSaving) {
            let newScript = GetElementValue("newscript");
            var len = newScript.length;
            if (len || ic) {
                IsSaving = true;
                let script = GetSaveScript(ScriptText+'\n'+newScript);
                console.log(script);
                SaveScriptToFile(script).then(()=>{
                    ScriptText = script;
                    SetElementValue("newscript", '')
                    IsSaving = false;
                    OnSavingScript(true);
                    // SavedCallback('', script.length)
                })
                OnSavingScript(false);
            } else {
                IsSaving = true;
                OnSavingScript(false);
                IsSaving = false;
                setTimeout("OnSavingScript(true);", 500);
            }
        }
    }
}

async function SaveScriptToFile(script) {
    await FileHandler.requestPermission();
    let writableStream = await FileHandler.createWritable();
    writableStream.write(script);
    writableStream.close();
}

// ESR 保存回调 废弃
// function SavedCallback(filename, length, result) {
//     IsSaving = false;
//     if (result.ok) {
//         ScriptText += "\n" + Eis;
//         Eis = "";
//         SetElementValue("importcacheid", "");
//         var ns = GetElementValue("newscript");
//         ScriptText += ns.substring(0, length);
//         SetElementValue("newscript", ns.substring(length, ns.length));
//         if (result.t) {
//             Efa = {};
//             ParseScriptText(result.t);
//             ScriptText = result.t;
//             ParseScriptText(GetElementValue("newscript"));
//             EUS(true, null, null, true, false);
//         }
//     } else {
//         ShowAlert(_t("The family could not be saved - please try again."));
//     }
//     OnSavingScript(true);
// }

// EUL 保存时触发的动作
function OnSavingScript(isSaved) {
    if (!staticMode) {
        var newScriptLength = GetElementValue("newscript").length;
        var ic = GetElementValue("importcacheid");
        let p;
        if (IsSaving) {
            p = "lsaving";
        } else if (newScriptLength || ic) {
            p = "lsave";
        } else if (!AllowWrite) {
            p = AllowWritePersonId ? "lwriteone" : "lreadonly";
        } else {
            p = isSaved ? "lsaved" : "linitial";
        }

        var es = ["linitial", "lreadonly", "lwriteone", "lsave", "lsaving", "lsaved"];
        for (var j = 0; j < es.length; j++) {
            SetElementShow(es[j], p == es[j]);
        }
        var familyId = GetElementValue("familyid");
        var si = GetElementValue("sessionid");
        SetElementShow("savefamily", (AllowWrite || newScriptLength || ic) && familyId);
        SetElementShow("sharebutton", Esf && si && familyId && !Eaf);
        SetElementShow("usersbutton", Eaf && si && familyId);
        SetElementShow("downloadbutton", familyId && AllowDownload && !Eis.length);
        SetElementShow("filesbutton", familyId && (Edd || Eud) && !isElementShow("filesdiv"));
        JustifyNavrowElement();
        SSF();
    }
}

function EAS() {
    HttpPost("userfamily_add", {
        s: GetElementValue("sessionid"),
        f: GetElementValue("familyid"),
        p: GetElementValue("personid"),
        c: GetElementValue("checksum")
    }, "", EAR, null);
}

function EAR(_79, _7a, _7b) {
    if (_7b.ok) {
        SetElementInnerText("lfamilyname", _7b.n);
        SetElementShow("addfamily", false);
    } else {
        ShowAlert(_7b.er || _t("The family could not be added to your account - please try again."));
    }
}

// EBS 返回到personid
function BackToPersonId() {
    var ap = GetElementValue("personid");
    ESP((ap && Efa[ap]) ? ap : OwnerPersonId, true);
}

// ECZ 画布单位放大/缩小
function ZoomInOut(zi) {
    ZoomInOutScale(zi ? 1.138788634756692 : 0.878126080186649);
}

// EZD 画布放大/缩小
function ZoomInOutScale(scale) {
    var zf = Math.max(0.5, Math.min(4, GetElementValue("showzoom") * scale));
    SetCookie("zoomfactor", zf);
    SetElementValue("showzoom", zf);
    ERF();
}

// ESZ 保存画布比例大小
function SaveZoomSize() {
    SetCookie("zoomfactor", GetElementValue("showzoom"));
    ERI();
}

// ECD 改变家谱图选项checkbox
function OnConfigCheckBoxChanged(target) {
    const id = target.id;
    if (id.substr(0, 7) == "detail_") {
        var d = id.substr(7);
        var c = target.checked;
        if (d.substr(0, 1) == "0") {
            c = !c;
        }
        var ds = "." + (PersonShowFields || "") + ".";
        if (c) {
            if (ds.indexOf("." + d + ".") < 0) {
                PersonShowFields = (ds + d);
            }
        } else {
            PersonShowFields = ds.replace(new RegExp("\\." + d + "\\.", "g"), ".");
        }
        PersonShowFields = PersonShowFields.replace(/^\.+/, "").replace(/\.+$/, "");
        NSD(PersonShowFields);
        SetCookie("showdetail", PersonShowFields);
        ERF();
    }
}

// ECA
function OnConfigOtherAgeChanged() {
    var e = GetElement("otherage");
    var v = GetElementValue("otherage");
    if (v == "on") {
        if (e.options.length > 2) {
            var p = DateStrToObj(e.options[2].value);
        } else {
            var d = new Date();
            var p = {y: d.getFullYear(), m: 1 + d.getMonth(), d: d.getDate()};
        }
        var f = DateNumberToStr(Math.abs(p.y), 9999, 4) + "-" + DateNumberToStr(p.m, 12, 2) + "-" + DateNumberToStr(p.d, 31, 2) + ((p.y < 0) ? " B" : "");
        while (true) {
            var f = prompt(_t("Show ages on which date? Please enter the date in YYYY-MM-DD format and add \"B\" for BCE."), f);
            if (f === null) {
                SetElementValue("otherage", "");
                break;
            }
            if (EWA(f)) {
                e.selectedIndex = 2;
                SetCookie("otheragedate", f);
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
            GetElement("otherage").options[2] = new Option("on " + DateToString(o, m, y), GetDateStr(o, m, y));
            return true;
        }
    }
    return false;
}

// ECR 改变家谱图选项色彩
function OnConfigColorChanged(target) {
    var id = target.id;
    if (id.substr(0, 5) == "color") {
        var f = id.substr(5);
        SetCookie("color" + f, target.value);
        ERF();
    }
}

// ECE 改变连接线所选样式
function OnLineStyleChanged(field) {
    var i = field.id;
    if (i.substr(0, 4) == "line") {
        var f = i.substr(4);
        SetCookie("line" + f, field.value);
        ERF();
    }
}

// ERC 设置家谱图选项色彩
function SetConfigColor(field, color) {
    SetElementValue("color" + field, color);
    SetCookie("color" + field, color);
    ERF();
}

// ESN 改变姓氏展示选项
function OnConfigBirthNameChanged() {
    SetCookie("showbirthname", GetConfigBirthNameValue());
    ERF();
}

// ESF 改变名字前后展示选项
function OnConfigSurnameFirstChanged() {
    SetCookie("showsurnamefirst", GetConfigSurnameFirstValue());
    ERF();
}

// EML 改变男性左右选项
function OnMaleLeftChanged() {
    SetCookie("showmaleleft", GetConfigMaleLeftValue());
    ERF();
}

// ECO 改变旁系代数
function OnCousinsLevelChanged() {
    SetCookie("showcousins", GetConfigCousinsLevelValue());
    ERF();
}

// ECH 改变子级代数
function OnChildrenLevelChanged() {
    SetCookie("showchildren", GetConfigChildrenLevelValue());
    ERF();
}

// ECP 改变父级代数
function OnParentsLevelChanged() {
    SetCookie("showparents", GetConfigParentsLevelValue());
    ERF();
}

// ECW 改变家谱图框宽度
function OnConfigWidthChanged() {
    SetCookie("widthfactor", GetElementValue("showwidth"));
    ERI();
}

// ERW 重置家谱图框宽度
function ResetConfigWidth() {
    SetElementValue("showwidth", 1);
    SetCookie("widthfactor", 1);
    ERF();
}

// ECT 改变家谱图文字大小
function OnConfigTextSizeChanged() {
    SetCookie("textsize", GetElementValue("textsize"));
    ERI();
}

// ERT 重置家谱图文字大小
function ResetConfigTextSize() {
    SetElementValue("textsize", 1);
    SetCookie("textsize", 1);
    ERF();
}

function ETO() {
    var s = !isElementShow("optionsdiv");
    if (s && isElementShow("filesdiv")) {
        ETF();
    }
    if (s && isElementShow("usersdiv")) {
        ETU();
    }
    SetElementShow("optionsdiv", s);
    SetElementInnerHTML("optionslinktext", s ? _h("Hide options") : _h("Options"));
    GetElement("treemargin").style.paddingBottom = (s ? (GetElement("optionsdiv").offsetHeight + "px") : 0);
    TCD(ViewPersonId, 250);
}

function ETF() {
    var s = !isElementShow("filesdiv");
    if (s && isElementShow("optionsdiv")) {
        ETO();
    }
    if (s && isElementShow("usersdiv")) {
        ETU();
    }
    if (s) {
        DDF(true);
        DUS();
    }
    SetElementShow("filesdiv", s);
    SetElementShow("filesbutton", !s);
    SetElementShow("filestreebutton", s);
    GetElement("treemargin").style.paddingBottom = (s ? (GetElement("filesdiv").offsetHeight + "px") : 0);
    TCD(ViewPersonId, 250);
}

function ETU() {
    var s = !isElementShow("usersdiv");
    if (s && isElementShow("optionsdiv")) {
        ETO();
    }
    if (s && isElementShow("filesdiv")) {
        ETF();
    }
    if (s) {
        GetElement("usersframe").src = "users.php?f=" + escape(GetElementValue("familyid")) + "&p=" + escape(GetElementValue("personid")) + "&c=" + escape(GetElementValue("checksum")) + "&s=" + escape(GetElementValue("sessionid")) + (IsDarkMode() ? "&d=1" : "");
    }
    SetElementShow("usersdiv", s);
    SetElementShow("usersbutton", !s);
    SetElementShow("userstreebutton", s);
    GetElement("treemargin").style.paddingBottom = (s ? (GetElement("usersdiv").offsetHeight + "px") : 0);
    TCD(ViewPersonId, 250);
}

function ETI() {
    var w = GetElement("leftdiv").offsetWidth;
    var s = TGS();
    var v = IsElementVisibility("leftdiv");
    ESM("view");
    SwapHideSideBar(!v);
    JustifyNavrowElement();
    TSD(s.left + (v ? -w : w), s.top);
    TCD(ViewPersonId, 250);
}

// ESI 侧边栏展开/收起
function SwapHideSideBar(isShow) {
    var c = isShow ? "marginon" : "marginoff";
    GetElement("treemargin").className = c;
    GetElement("fileviewmargin").className = c;
    GetElement("navmargin").className = c;
    GetElement("welcomemargin").className = c;
    GetElement("optionsmargin").className = c;
    GetElement("filesmargin").className = c;
    GetElement("usersmargin").className = c;
    SetElementVisibility("leftdiv", isShow);
    SwapSideButton(isShow);
}

// EID 是否夜间模式
function IsDarkMode() {
    return (document.body.className == "dark");
}

// ETD 切换白天/夜间模式
function SwapDayNightMode() {
    if (IsDarkMode()) {
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
        var e = GetElement(fs[j]).contentDocument;
        if (e) {
            e.body.className = e.body.className.replace(oc, nc);
        }
    }
    SetElementShow("backspan", sb);
    ERF();
}

function EFB(i) {
    var sf = FCS(Efa, i);
    SetElementValue("do_startbranch", sf.join("\t"));
    document.topform.submit();
}

function EIU(r) {
    if (staticMode) {
        var e = GetElement("image-" + r);
        return e ? e.src : "image-" + r + ".jpg";
    } else {
        return BuildURL("ap/", "image_read", {
            f: GetElementValue("familyid"),
            p: GetElementValue("personid"),
            c: GetElementValue("checksum"),
            r: r
        });
    }
}

// EHW 隐藏 welcomediv
function HideWelcome() {
    SetElementShow("welcomediv", false);
}

function ESL() {
    return {s: ScriptText.length, i: Eis.length, n: GetElementValue("newscript").length};
}

function ECI(c, s) {
    HideWelcome();
    SetElementValue("importcacheid", c);
    SetElementValue("newscript", "");
    Efa = {};
    Eis = s;
    ParseScriptText(s);
    EUS(true, null, "view", true, false);
    OnSavingScript(false);
}

// ESA 清除数据
function ClearAndRestart() {
    SetElementValue("importcacheid", "");
    SetElementValue("newscript", "");
    Efa = {};
    Eis = "";
    EUS(true, null, "edit", true, false);
    OnSavingScript(false);
    SetElementShow("welcomediv", true);
}

function EES(s) {
    SetElementShow("exporttext", s);
    if (s) {
        SetElementValue("exporttext", GetElementValue(s).trim());
        GetElement("exporttext").select();
        GetElement("exporttext").scrollTop = 0;
        GetElement("exporttext").dir = (locale_rtl && (s == "text")) ? "rtl" : "ltr";
    } else {
        SetElementValue("exporttext", "");
    }
    var ls = ["", "gedcom", "newscript", "csv", "text"];
    for (var j = 0; j < ls.length; j++) {
        GetElement("export_show_" + ls[j]).className = (s == ls[j]) ? "selbold" : "";
    }
}
