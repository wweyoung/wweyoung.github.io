// GE
function GetElement(id) {
    return document.getElementById(id);
}

// SV
function SetElementValue(id, value) {
    GetElement(id).value = value ? value : "";
}

// GV
function GetElementValue(id) {
    return GetElement(id).value;
}

// WV
function SwapElementValue(element1Id, element2Id) {
    const t = GetElementValue(element1Id);
    SetElementValue(element1Id, GetElementValue(element2Id));
    SetElementValue(element2Id, t);
}

// SO
function SetSelectElementSelected(elementId, selectValue) {
    const element = GetElement(elementId);
    selectValue = selectValue ? selectValue : "";
    for (let j = 0; j < element.options.length; j++) {
        if (element.options[j].value == selectValue) {
            element.selectedIndex = j;
        }
    }
}

// GO
function GetSelectElementValue(id) {
    const element = GetElement(id);
    return element.options[element.selectedIndex].value;
}

// SS
function SetElementShow(id, isShow) {
    GetElement(id).style.display = isShow ? "inline" : "none";
}

// GS
function isElementShow(id) {
    return GetElement(id).style.display != "none";
}

// SI
function SetElementVisibility(id, isVisible) {
    GetElement(id).style.visibility = isVisible ? "visible" : "hidden";
}

// GI
function IsElementVisibility(id) {
    return GetElement(id).style.visibility != "hidden";
}

// SD
function SetElementDisabled(id, isDisable) {
    GetElement(id).disabled = isDisable ? true : false;
}

// FS 聚焦
function FocusSelectElement(id) {
    GetElement(id).focus();
    GetElement(id).select();
}

// SR 设置class 为showrows 或 hiderows
function SetElementClassShowRow(id, isShowRow) {
    GetElement(id).className = isShowRow ? "showrows" : "hiderows";
}

// SH
function SetElementInnerHTML(id, html) {
    GetElement(id).innerHTML = html;
}

// ST
function SetElementInnerText(id, text) {
    GetElement(id).innerHTML = EncodeHTML(text);
}

// NE 替换\r\n => \n
function ReplaceRN2N(str) {
    return str.replace(/\r\n?/g, "\n");
}

// EH HTML转码（&"<>）
function EncodeHTML(html) {
    return html.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// EL HTML转码包含换行（\n&"<>）
function EncodeHTMLLine(html) {
    return html ? EncodeHTML(html.replace(/\n/g, "^$")).replace(/\^\$/g, "<BR>") : "";
}

// CU 转换URL文本为HTML标签
function ConvertURL2HTML(url) {
    return url ? url.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, function (url) {
        return "<a href=\"" + url + "\" target=\"_blank\">" + url + "</a>";
    }) : "";
}

// SB 替换 / => <wbr> 增加换行机会
function SetBreak(html) {
    return html.replace(/\//g, "/<wbr>");
}

// DT 获取时间戳
function DateTimestamp() {
    return Date.now();
}

// BR 组装url
function BuildURL(prefix, filename, paramMap) {
    var url = prefix + "ap_" + filename + ".php?";
    for (var j in paramMap) {
        if (paramMap[j] != null) {
            url += (j + "=" + escape(paramMap[j]) + "&");
        }
    }
    return url;
}

// BA 组装url 最后加随机数
function BuildURLNoCache(prefix, filename, paramMap) {
    return BuildURL(prefix, filename, paramMap) + "_=" + (DateTimestamp() + Math.random());
}

function HttpPostNoBody(filename, paramMap, callback, callbackArg) {
    HttpPost(filename, paramMap, "", callback, callbackArg);
}

// AP 发送POST请求
function HttpPost(filename, paramMap, body, callback, callbackArg) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", BuildURLNoCache("ap/", filename, paramMap), true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(filename, callbackArg, ((xhr.status == 200) && xhr.responseText) ? eval("(" + xhr.responseText + ")") : {});
        }
    };
    xhr.send(body);
}

var Bw = null;

function CE(w) {
    Bw = w;
    window.onerror = OnWindowError;
}

// TR
// function TR() {
//     var s = "";
//     for (var a = TR; a; a = a.caller) {
//         s += (a.name || a.toString().match(/function (\w*)/)) + "<";
//         if (a.caller == a) {
//             break;
//         }
//     }
//     return s;
// }

// SE 触发异常事件
function OnWindowError(m, u, l, w) {
    w = w || window;
    if (Bw) {
        if (Bw.SE) {
            Bw.SE(m, u, l, w);
        }
    } else {
        HttpPost("log_js_error", {}, m + "|" + (w ? w.location : "") + "|" + u + "|" + l + "|", function () {
        }, null);
    }
}

// RE alert
function ShowAlert(message) {
    alert(message);
}

// SC 设置Cookie
function SetCookie(name, value, s) {
    localStorage.setItem("family_"+name, value);
}

// GC
function GetCookie(name) {
    return localStorage.getItem("family_"+name);
}

function UL(l) {
    console.log(">UL", l)
    var dw = self.screen.width, dh = self.screen.height;
    if (top.innerHeight) {
        dw = top.innerWidth;
        dh = top.innerHeight;
    } else {
        if (top.document.documentElement && top.document.documentElement.clientHeight) {
            dw = top.document.documentElement.clientWidth;
            dh = top.document.documentElement.clientHeight;
        } else {
            if (top.document.body) {
                dw = top.document.body.clientWidth;
                dh = top.document.body.clientHeight;
            }
        }
    }
    var w = window.open(l.href, "uplink", "toolbar=1,location=1,status=1,menubar=1,scrollbars=1,resizable=1," + "width=" + (dw - 64) + ",height=" + (dh - 64));
    if (w) {
        w.focus();
    }
    return !w;
}

var Dp = false;
var Lp = false;

function _i(_4a) {
    return _4a;
}

// _t 翻译文本
function _t(text) {
    var _4c = Array.from(arguments);
    _4c = _4c.slice(1);
    text = SL(text, _4c);
    text = SN(text, _4c);
    return text;
}

// _h 翻译并转义HTML
function _h(text) {
    var _4e = Array.from(arguments);
    _4e = _4e.slice(1);
    text = SL(text, _4e);
    text = SN(text, _4e);
    text = EncodeHTML(text);
    text = SG(text, _4e);
    return text;
}

var Pr = null, ordinalRules = null;

function SL(text, _50) {
    console.log(">SL", arguments);
    if ((typeof Intl !== "undefined") && (typeof Intl.PluralRules !== undefined)) {
        if (!Pr) {
            Pr = new Intl.PluralRules(locale_value);
        }
        if (!ordinalRules) {
            ordinalRules = new Intl.PluralRules(locale_value, {"type": "ordinal"});
        }
    }
    var _51 = "str";
    var _52 = text.indexOf("#");
    if (_52 >= 0) {
        if (Pr) {
            var _53 = (text.substring(0, _52).match(/\$/g) || []).length;
            var _54 = _50[_53];
            if (Number.isInteger(parseFloat(_54))) {
                _51 = Pr.select(parseInt(_54));
            }
        }
    } else {
        var _55 = text.indexOf("^");
        if (_55 >= 0) {
            if (ordinalRules) {
                var _53 = (text.substring(0, _55).match(/\$/g) || []).length;
                var _54 = _50[_53];
                if (Number.isInteger(parseFloat(_54))) {
                    _51 = ordinalRules.select(parseInt(_54));
                }
            }
        }
    }
    var _56 = undefined;
    if (locale_phrases[text]) {
        _56 = locale_phrases[text][_51];
        var _57 = ["str", "many", "few", "two", "one", "zero"];
        for (var i = 0; i < _57.length; i++) {
            if (_56 !== undefined) {
                break;
            } else {
                _56 = locale_phrases[text][_57[i]];
            }
        }
    }
    if (_56 === undefined) {
        _56 = text;
    }
    if (Dp) {
        return "{" + _56 + "}";
    } else {
        if (Lp) {
            return _56 + _56;
        } else {
            return _56;
        }
    }
}

function SN(_59, _5a) {
    var _5b = (_59.match(/[\$\#\^]/g) || []).length;
    var _5c = _5b > 1;
    var _5d = _5c ? /([\#\$\^])([1-9])/ : /([\$\#\^])/;
    var _5e = 0;
    while (true) {
        var _5f = _59.slice(_5e).match(_5d);
        if (!_5f) {
            break;
        }
        var _60 = _59.indexOf(_5f[0], _5e);
        var _61 = _5f[0].length;
        var _62 = _5f[1];
        var _63 = _5c ? _5f[2] : 1;
        var _64 = _5a[_63 - 1];
        if (_64 === undefined) {
            _64 = _62;
        }
        if (Dp) {
            _64 = _62 + _64 + _62;
        }
        _59 = _59.substr(0, _60) + _64 + _59.substr(_60 + _61);
        _5e = _60 + _64.length;
    }
    _5a.splice(0, _5b);
    return _59;
}

function SG(_65, _66) {
    var _67 = 0;
    while (true) {
        var _68 = _65.indexOf("&lt;", _67);
        if (_68 >= 0) {
            var _69 = _65.indexOf("&gt;", _68);
        }
        if ((_68 >= 0) && (_69 >= 0)) {
            var _6a = _66.shift();
            if (_6a === undefined) {
                _6a = "a href=\"#\"";
            }
            _6a = _6a.trim();
            var _6b = _6a.search(/[ \t]/);
            if (_6b < 0) {
                _6b = _6a.length;
            }
            var _6c = _65.substr(_69 + 4);
            _65 = _65.substr(0, _68) + "<" + _6a + ">" + _65.substr(_68 + 4, _69 - _68 - 4) + "</" + _6a.substr(0, _6b) + ">" + _6c;
            _67 = _65.length - _6c.length;
        } else {
            break;
        }
    }
    return _65;
}

var Lf = null;

function LF(_6d) {
    Lf = _6d;
}

// LL 获取支持的语言列表
function LanguageList() {
    let ls = [];
    for (const l in locale_names) {
        ls[ls.length] = {l: l, c: locale_names[l], s: (l == locale_value)};
    }
    ls = ls.sort(function (a, b) {
        return a.c.localeCompare(b.c);
    });
    return ls;
}

// LC 展示语言选择框
function ShowLanguageContent() {
    var h = "<a id=\"langclose\" HREF=\"#\" TITLE=\"Close\" onClick=\"" + HideLanguageContent.name + "(); return false;\">&#x2715;</a>";
    h += "<div id=\"langtitle\">Please click to choose your preferred language:</div>";
    var ls = LanguageList();
    h += "<div id=\"langlist\">";
    for (var i = 0; i < ls.length; i++) {
        h += "<a href=\"#\" onClick=\"" + LanguageSelect.name + "('" + ls[i].l + "'); return false;\">" + (ls[i].s ? "<B>" : "") + EncodeHTML(ls[i].c) + (ls[i].s ? "</B>" : "") + "</a><br>";
    }
    h += "</div>";
    h += "<div id=\"langfooter\">Some of these translations are AI-generated, so they may not be perfect.<br>" + "Please <a href=\"?page=feedback\" target=\"_blank\">contact us</a> if you would like to help improve Famliy Echo in your language.</div>";
    SetElementInnerHTML("langcontent", h);
    GetElement("langoverlay").style.display = "flex";
}

// LH 隐藏语言选择框
function HideLanguageContent() {
    SetElementShow("langoverlay", false);
}

// LS 选择语言
function LanguageSelect(language) {
    SetCookie("lang", language, true);
    SetCookie("langnote", 1);
    if (Lf) {
        document.forms[Lf].submit();
    } else {
        const u = new URL(location.href);
        const m = "delete";
        u.searchParams[m]("lang");
        location.href = u.href;
    }
}
