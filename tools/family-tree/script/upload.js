// DAD 给main元素绑定事件
function MainElementAddEventListener() {
    GetElement("main").addEventListener("dragenter", OnMainElementDragEnter);
    GetElement("main").addEventListener("dragover", OnMainElementDragEnter);
    GetElement("main").addEventListener("dragleave", OnMainElementDragLeave);
    GetElement("main").addEventListener("drop", OnMainElementDrop);
}

// DDE
function OnMainElementDragEnter(e) {
}

// DDL
function OnMainElementDragLeave(e) {
}

// DDD
function OnMainElementDrop(e) {
}