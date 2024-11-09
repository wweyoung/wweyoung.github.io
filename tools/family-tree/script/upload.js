var Dsf = "u";
var Dsr = true;
var Dso = ["n", "a", "t", "s", "u"];
var Dec = 0;

function DGU(i, d) {
    var f = Eff[i];
    if (f) {
        var u = "file.php?f=" + escape(GetElementValue("familyid")) + "&p=" + escape(GetElementValue("personid")) + "&c=" + escape(GetElementValue("checksum")) + "&r=" + escape(i) + "&t=" + escape(f.t);
        if (d) {
            u += "&n=" + escape(f.n + (f.t ? ("." + f.t) : ""));
        }
    }
    return u;
}

function DSI(i) {
    var f = Eff[i];
    if (f) {
        var v = DTV(f.t);
        var _8 = (v == "iframe");
        var u = DGU(i, false);
        SetElementInnerText("fileviewname", f.n);
        SetElementInnerHTML("fileviewmeta", "<a href=\"" + EncodeHTML(DGU(i, true)) + "\" title=\"" + _h("Download file") + "\">" + _h("$1 $2", DSH(f.s), DTH(f.t)) + "</a>");
        SetElementInnerText("fileviewdate", _t("Uploaded $", DDT(f.u)));
        if (v == "iframe") {
            GetElement("fileviewiframe").src = "";
            GetElement("fileviewiframe").src = u;
        } else {
            if (v == "audio") {
                GetElement("fileviewaudio").src = "";
                GetElement("fileviewaudio").src = u;
            } else {
                GetElement("fileviewimage").src = "";
                GetElement("fileviewimage").src = u;
            }
            SetElementShow("fileviewimage", v != "audio");
            SetElementShow("fileviewaudio", v == "audio");
        }
        GetElement("fileviewiframe").style.display = _8 ? "block" : "none";
        GetElement("fileviewinline").style.display = _8 ? "none" : "flex";
        SetElementShow("fileviewdiv", true);
    }
}

function DHV() {
    SetElementShow("fileviewdiv", false);
}

function DST(s) {
    if (s >= 1073741824) {
        return Number.parseFloat(s / 1073741824).toFixed(1) + "G";
    } else {
        if (s >= 1048576) {
            return Number.parseFloat(s / 1048576).toFixed(1) + "M";
        } else {
            return Number.parseFloat(s / 1024).toFixed(0) + "K";
        }
    }
}

function DSH(s) {
    return EncodeHTML(DST(s));
}

function DMT(s) {
    if (s >= 1073741824) {
        return Math.floor(s / 1073741824) + "G";
    } else {
        if (s >= 1048576) {
            return Math.floor(s / 1048576) + "M";
        } else {
            return Math.floor(s / 1024) + "K";
        }
    }
}

function DTT(t, e) {
    var x = "";
    if (t) {
        var u = t.toUpperCase();
        switch (u) {
            case "JPG":
                x = e ? _t("$ image", "JPEG") : _t("Image");
                break;
            case "JPEG":
            case "BMP":
            case "PNG":
            case "GIF":
                x = e ? _t("$ image", u) : _t("Image");
                break;
            case "TXT":
                x = _t("Text");
                break;
            case "HTM":
                x = "HTML";
                break;
            case "MP3":
            case "WAV":
            case "OGG":
            case "M4A":
                x = e ? _t("$ audio", u) : _t("Audio");
                break;
            case "AVI":
            case "WMV":
            case "MPEG":
                x = e ? _t("$ video", u) : _t("Video");
                break;
            case "MPG":
                x = e ? _t("$ video", "MPEG") : _t("Video");
                break;
            case "MP4":
                x = e ? _t("$ video", "MPEG4") : _t("Video");
                break;
            case "MPV":
                x = e ? _t("$ video", "QuickTime") : _t("Video");
                break;
            case "ZIP":
            case "GZ":
                x = e ? _t("$ archive", u) : _t("Archive");
                break;
            case "DOC":
            case "DOCX":
                x = _t("Word");
                break;
            case "XLS":
            case "XLSX":
            case "XLSM":
                x = _t("Excel");
                break;
            case "PPT":
            case "PPTX":
                x = _t("PowerPoint");
                break;
            default:
                x = u;
                break;
        }
    }
    return x;
}

function DTH(t, e) {
    return EncodeHTML(DTT(t, e));
}

function DDT(u) {
    var d = new Date(u * 1000);
    return DateToString(d.getDate(), 1 + d.getMonth(), d.getFullYear());
}

function DCH(u) {
    return EncodeHTML(DDT(u));
}

function DTV(t) {
    switch (t.toUpperCase()) {
        case "JPG":
        case "JPEG":
        case "PNG":
        case "GIF":
            return "image";
        case "TXT":
        case "HTM":
        case "HTML":
        case "PDF":
            return "iframe";
        case "MP3":
        case "WAV":
        case "OGG":
        case "M4A":
            return "audio";
    }
    return false;
}

function DSD(a, b) {
    if (a.u < b.u) {
        return 1;
    } else {
        if (a.u > b.u) {
            return -1;
        } else {
            return 0;
        }
    }
}

function DDF(z) {
    if (z) {
        SetElementValue("filesfind", "");
        GetElement("filestable").style.tableLayout = "auto";
        SetElementShow("filesuploadfile", Eud);
    } else {
        DFL();
    }
    while (Dec > 0) {
        DEI(false);
    }
    var ss = GetElementValue("filesfind").trim().toLowerCase().split(" ");
    var fs = [];
    var l = 0;
    var hf = false;
    for (var i in Eff) {
        var f = Eff[i];
        hf = true;
        f.i = i;
        f.aa = DAO(f);
        var n = (f.n || "") + " " + (f.d || "");
        for (var j = 0; j < f.aa.length; j++) {
            n += " " + f.aa[j].s;
        }
        var m = n.toLowerCase();
        var x = true;
        for (var k = 0; k < ss.length; k++) {
            if (m.indexOf(ss[k]) < 0) {
                x = false;
                break;
            }
        }
        if (x) {
            if ((Dsf == "s") || (Dsf == "u")) {
                f.o = parseInt(f[Dsf]);
            } else {
                if (Dsf == "t") {
                    f.o = DTT(f.t).toLowerCase();
                } else {
                    if (Dsf == "a") {
                        f.o = f.aa.length ? f.aa[0].s : "";
                    } else {
                        f.o = new String(f.n).toLowerCase();
                    }
                }
            }
            fs[l] = f;
            l++;
        }
    }
    var t = GetElement("filesrows");
    t.innerHTML = "";
    if (l) {
        fs.sort(DSL);
        var exp = NSR(ss);
        for (var j = 0; j < l; j++) {
            var f = fs[j];
            var r = document.createElement("TR");
            r.className = "filesrow";
            r.id = "filesrow" + f.i;
            var c = document.createElement("TD");
            c.className = "fname";
            c.id = "filename" + f.i;
            c.innerHTML = DNH(f.i, f, exp);
            r.appendChild(c);
            var c = document.createElement("TD");
            c.className = "fdesc";
            c.id = "filedesc" + f.i;
            c.innerHTML = DDH(f.i, f, exp);
            r.appendChild(c);
            var c = document.createElement("TD");
            c.className = "fattach";
            c.id = "fileattach" + f.i;
            c.innerHTML = DAH(f.aa, exp);
            r.appendChild(c);
            var c = document.createElement("TD");
            c.className = "ftype";
            c.innerHTML = DTH(f.t);
            r.appendChild(c);
            var c = document.createElement("TD");
            c.className = "fsize";
            c.innerHTML = DSH(f.s);
            r.appendChild(c);
            var c = document.createElement("TD");
            c.className = "fuploaded";
            c.innerHTML = DCH(f.u);
            r.appendChild(c);
            var c = document.createElement("TD");
            c.className = "fbuttons";
            var h = "";
            if (Eed) {
                h += "<INPUT CLASS=\"sbutton4\" ID=\"fileedit" + EncodeHTML(f.i) + "\" TYPE=\"submit\" onClick=\"DCE('" + f.i + "'); return false;\" VALUE=\"" + _h("Edit") + "\"> " + "<INPUT CLASS=\"sbutton4\" ID=\"filesave" + EncodeHTML(f.i) + "\" TYPE=\"submit\" onClick=\"DCS('" + f.i + "', true); return false;\" VALUE=\"" + _h("Save") + "\" STYLE=\"display:none;\"> " + "<INPUT CLASS=\"sbutton4\" ID=\"filecancel" + EncodeHTML(f.i) + "\" TYPE=\"submit\" onClick=\"DCS('" + f.i + "', false); return false;\" VALUE=\"" + _h("Cancel") + "\" STYLE=\"display:none;\"> ";
            }
            if (Exd) {
                h += "<INPUT CLASS=\"sbutton4\" ID=\"filedelete" + EncodeHTML(f.i) + "\" TYPE=\"submit\" onClick=\"DCD('" + f.i + "'); return false;\" VALUE=\"" + _h("Delete") + "\">";
            }
            c.innerHTML = h;
            r.appendChild(c);
            t.appendChild(r);
        }
    } else {
        var r = document.createElement("TR");
        r.className = "filesrow";
        var c = document.createElement("TD");
        c.className = "fnone";
        c.colSpan = 7;
        c.innerHTML = hf ? _h("No files match the current search.") : _h("There are currently no files in this family.");
        r.appendChild(c);
        t.appendChild(r);
    }
    for (var j = 0; j < Dso.length; j++) {
        var o = Dso[j];
        SetElementInnerHTML("filessort" + o, (Dsf == o) ? (Dsr ? "&#x25BC;" : "&#x25B2;") : "<span style=\"visibility:hidden;\">&#x25B2;</span>");
    }
}

function DUS() {
    var c = 0;
    for (var i in Eff) {
        c++;
    }
    var h = _h("# file/s", c) + ", ";
    if (Eda > Edt) {
        h += _h("$1 used (plus $2 in other families) of $3 available", DST(Edt), DST(Eda - Edt), DMT(Edc));
    } else {
        h += _h("$1 used of $2 available", DST(Edt), DMT(Edc));
    }
    var np = [];
    if (!Edd) {
        np.push(_t("download"));
    }
    if (!Eud) {
        np.push(_t("upload"));
    }
    if (!Eed) {
        np.push(_t("edit"));
    }
    if (!Exd) {
        np.push(_t("delete"));
    }
    if (np.length) {
        h += " " + _h("You do not currently have permission to $ files.", np.join(", "));
    }
    SetElementInnerHTML("filesstatus", h);
}

function DFL() {
    var e = GetElement("filestable");
    if (e.style.tableLayout != "fixed") {
        var cs = GetElement("filesheader").getElementsByTagName("th");
        for (i = 0; i < cs.length; i++) {
            cs[i].style.width = (cs[i].offsetWidth - 1) + "px";
        }
        e.style.tableLayout = "fixed";
    }
}

function DNH(i, f, exp) {
    var h = "";
    if (Edd) {
        if (DTV(f.t)) {
            h += "<a href=\"#\" title=\"" + _h("View file") + "\" onclick=\"DSI('" + i + "'); return false;\">";
        } else {
            h += "<a href=\"" + EncodeHTML(DGU(i, true)) + "\" title=\"" + _h("Download file") + "\">";
        }
    }
    return h + NSE(f.n || _t("Untitled"), exp) + (Edd ? "</a>" : "");
}

function DDH(i, f, exp) {
    return NSE(f.d, exp);
}

function DAO(f) {
    var aa = [];
    if (f.ps) {
        for (var j in f.ps) {
            var p = Efa[j];
            if (p) {
                var a = {i: j, n: SPN(p)};
                a.s = a.n.toLowerCase();
                aa.push(a);
            }
        }
        aa.sort(DSA);
    }
    return aa;
}

function DAH(aa, exp) {
    var h = "";
    for (var k = 0; k < aa.length; k++) {
        h += (h ? ", " : "") + "<a href=\"#\" onclick=\"ESP('" + EncodeHTML(aa[k].i) + "', true); SWA(4); return false;\">" + NSE(aa[k].n, exp) + "</a>";
    }
    return h ? h : "none";
}

function DIF() {
    DDF(false);
}

function DSL(a, b) {
    var r = 0;
    if (a.o < b.o) {
        r = -1;
    } else {
        if (a.o > b.o) {
            r = 1;
        }
    }
    return Dsr ? (-r) : r;
}

function DSA(a, b) {
    var r = 0;
    if (a.s < b.s) {
        r = -1;
    } else {
        if (a.s > b.s) {
            r = 1;
        }
    }
    return ((Dsf == "a") && Dsr) ? (-r) : r;
}

function DCT(f, r) {
    if (Dsf == f) {
        Dsr = !Dsr;
    } else {
        Dsf = f;
        Dsr = r;
    }
    DDF(false);
}

function DEI(f) {
    if (f) {
        if (Dec == 0) {
            DFL();
            SetElementVisibility("filesfind", false);
        }
        Dec++;
    } else {
        Dec--;
        if (Dec == 0) {
            SetElementVisibility("filesfind", true);
        }
    }
}

function DCE(i) {
    DEI(true);
    var f = Eff[i];
    var c = GetElement("filename" + i);
    c.innerHTML = "<TEXTAREA ID=\"filenameedit" + EncodeHTML(i) + "\" STYLE=\"width:100%;\" ROWS=\"2\">" + EncodeHTML(f.n) + "</TEXTAREA>";
    var c = GetElement("filedesc" + i);
    c.innerHTML = "<TEXTAREA ID=\"filedescedit" + EncodeHTML(i) + "\" STYLE=\"width:100%;\" ROWS=\"2\">" + EncodeHTML(f.d) + "</TEXTAREA>";
    var c = GetElement("fileattach" + i);
    var ai = "fileattachrows" + i;
    c.innerHTML = "<TABLE ID=\"" + EncodeHTML(ai) + "\" STYLE=\"width:100%; border-spacing:0;\"></TABLE>";
    var aa = DAO(f);
    if (aa.length) {
        for (var k = 0; k < aa.length; k++) {
            DAA(ai, k == 0, aa[k].i);
        }
    } else {
        DAA(ai, true, "");
    }
    SetElementShow("fileedit" + i, false);
    if (Exd) {
        SetElementShow("filedelete" + i, false);
    }
    SetElementShow("filesave" + i, true);
    SetElementShow("filecancel" + i, true);
}

function DCS(i, s) {
    var f = Eff[i];
    if (s) {
        var sf = {};
        var sc = 0;
        var ic = 0;
        var n = GetElementValue("filenameedit" + i);
        if (n != f.n) {
            sf.n = n;
            sc++;
        }
        var d = GetElementValue("filedescedit" + i);
        if (d != f.d) {
            sf.d = d;
            sc++;
        }
        var ii = DRA("fileattachrows" + i);
        for (var j in ii) {
            if (!(f.ps && f.ps[j])) {
                EDC(i, {"+": j});
                ic++;
            }
        }
        if (f.ps) {
            for (var j in f.ps) {
                if (!ii[j]) {
                    EDC(i, {"-": j});
                    ic++;
                }
            }
        }
        if (sc) {
            EDC(i, sf);
        }
        if (sc || ic) {
            EUS(false, null, null, false, false);
            SaveFamily();
        }
    }
    f = Eff[i];
    GetElement("filename" + i).innerHTML = DNH(i, f);
    GetElement("filedesc" + i).innerHTML = DDH(i, f);
    GetElement("fileattach" + i).innerHTML = DAH(DAO(f));
    SetElementShow("fileedit" + i, true);
    if (Exd) {
        SetElementShow("filedelete" + i, true);
    }
    SetElementShow("filesave" + i, false);
    SetElementShow("filecancel" + i, false);
    DEI(false);
}

function DCD(i) {
    var f = Eff[i];
    if (f) {
        if (confirm(_t("Are you sure you want to permanently delete the file $?", f.n))) {
            HttpPost("file_delete", {
                f: GetElementValue("familyid"),
                p: GetElementValue("personid"),
                c: GetElementValue("checksum"),
                r: i,
                t: f.t
            }, "", DDR, {i: i});
        }
    }
}

function DDR(_5c, _5d, _5e) {
    if (_5e.ok) {
        EDC(_5d.i, {x: ""});
        GetElement("filesrows").removeChild(GetElement("filesrow" + _5d.i));
        var ds = parseInt(_5e.ds);
        if (!isNaN(ds)) {
            Edt = ds;
        }
        var da = parseInt(_5e.da);
        if (!isNaN(da)) {
            Eda = da;
        }
        DUS();
        SaveFamily();
        EUS(false, null, null, false, false);
    } else {
        ShowAlert(_5e.er || _t("The file could not be deleted - please try again."));
    }
}

function DAA(t, f, p) {
    var w = document.createElement("TR");
    var i = new String(100000000 + Math.floor(Math.random() * 900000000));
    w.id = "fileattachrow" + i;
    var m = document.createElement("TD");
    m.className = "fattachsel";
    var s = document.createElement("select");
    s.id = "fileattachsel" + i;
    m.appendChild(s);
    w.appendChild(m);
    var r = document.createElement("TD");
    r.className = "fattachpm";
    r.innerHTML = "<A HREF=\"#\" CLASS=\"fattachpmlink\" onClick=\"DDA(" + EncodeHTML(i) + "); return false;\" TITLE=\"" + _h("Detach this person") + "\"" + (f ? "STYLE=\"visibility:hidden;\" " : "") + ">&minus;</A> " + "<A HREF=\"#\" CLASS=\"fattachpmlink\" onClick=\"DAA('" + t + "', false); return false;\" TITLE=\"" + _h("Attach another person") + "\">+</A>";
    w.appendChild(r);
    GetElement(t).appendChild(w);
    var ra = [];
    for (var j in Efa) {
        ra.push(j);
    }
    SPP("fileattachsel" + i, ra, p, true);
}

function DDA(i) {
    var e = GetElement("fileattachrow" + i);
    e.parentNode.removeChild(e);
}

function DRA(t) {
    var ii = {};
    for (var r = GetElement(t).firstChild; r; r = r.nextSibling) {
        if (r.id.indexOf("fileattachrow") == 0) {
            var v = GetElementValue("fileattachsel" + r.id.substring(13));
            if (v) {
                ii[v] = true;
            }
        }
    }
    return ii;
}

function DTU(a, c) {
    var s = !isElementShow("uploaddiv");
    if (s) {
        SetElementValue("uploadfile", null);
        SetElementValue("uploadname", "");
        SetElementValue("uploaddesc", "");
        RemoveElementAllChild("uploadattachrows");
        DAA("uploadattachrows", true, a);
        SetElementInnerText("uploadmax", DMT(DMU()));
        if (c) {
            GetElement("uploadfile").click();
        }
    }
    GetElement("uploaddiv").style.display = s ? "flex" : "none";
}

function DMU() {
    return Math.min(Edm, Edc - (Eda || Edt || 0));
}

function DUC() {
    var fnt = DUI();
    if (fnt.s > DMU()) {
        alert(_t("This file is $1 in size, which is larger than the maximum of $2.", DST(fnt.s), DST(DMU())));
        SetElementValue("uploadfile", null);
    } else {
        SetElementValue("uploadname", fnt.n);
    }
}

function DUI() {
    var f = GetElement("uploadfile").files.item(0);
    var n = "";
    var t = "";
    var s = null;
    if (f) {
        n = new String(f.name);
        var p = n.lastIndexOf(".");
        if (p > 0) {
            t = n.substring(p + 1).toLowerCase();
            n = n.substring(0, p);
        }
        s = f.size;
    }
    return {f: f, n: n, t: t, s: s};
}

function DCU() {
    var ii = DRA("uploadattachrows");
    var fnt = DUI();
    if (fnt.f) {
        HttpPost("file_upload", {
            f: GetElementValue("familyid"),
            p: GetElementValue("personid"),
            c: GetElementValue("checksum"),
            t: fnt.t
        }, fnt.f, DUR, {n: GetElementValue("uploadname") || fnt.n, t: fnt.t, d: GetElementValue("uploaddesc"), ii: ii});
    } else {
        ShowAlert(_t("Please select a file to upload it."));
    }
}

function DUR(_7c, _7d, _7e) {
    if (_7e.r) {
        var ai = null;
        EDC(_7e.r, {n: _7d.n, t: _7d.t, u: _7e.d, s: _7e.s, d: _7d.d});
        for (var i in _7d.ii) {
            EDC(_7e.r, {"+": i});
            if ((i == SidebarPersonId) || (ai === null)) {
                ai = i;
            }
        }
        var ds = parseInt(_7e.ds);
        if (!isNaN(ds)) {
            Edt = ds;
        }
        var da = parseInt(_7e.da);
        if (!isNaN(da)) {
            Eda = da;
        }
        SaveFamily();
        EUS(false, ai, null, false, true);
        SWA(4);
        if (isElementShow("filesdiv")) {
            DDF(true);
            DUS();
        } else {
            ETF();
        }
        GetElement("uploaddiv").style.display = "none";
    } else {
        ShowAlert(_7e.er || _t("The file could not be uploaded - please try again."));
    }
}

// DAD 给main元素绑定事件
function MainElementAddEventListener() {
    GetElement("main").addEventListener("dragenter", OnMainElementDragEnter);
    GetElement("main").addEventListener("dragover", OnMainElementDragEnter);
    GetElement("main").addEventListener("dragleave", OnMainElementDragLeave);
    GetElement("main").addEventListener("drop", OnMainElementDrop);
}

var Dut = false;
var Dht = null;

// DDE
function OnMainElementDragEnter(e) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    }
    if (Dht) {
        clearTimeout(Dht);
        Dht = null;
    }
    if (!isElementShow("uploaddiv")) {
        Dut = true;
        DTU("", false);
    }
    return false;
}

// DDL
function OnMainElementDragLeave(e) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    }
    if (Dut && !Dht) {
        Dht = setTimeout(function () {
            if (isElementShow("uploaddiv")) {
                DTU();
            }
            Dut = false;
            Dht = null;
        }, 100);
    }
    return false;
}

// DDD
function OnMainElementDrop(e) {
    OnMainElementDragEnter();
    var f = e.dataTransfer.files;
    if (f.length == 1) {
        GetElement("uploadfile").files = f;
        DUC();
        FocusSelectElement("uploadname");
    }
    Dut = false;
    return false;
}