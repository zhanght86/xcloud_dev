"use strict";
var expandClassName = "dropdownexpand";
var collapseClassName = "dropdowncollapse";
var collapseTableClassName = "dropdowncollapsetable";
function ExpandorCollapseNode(a) {
    a = a.parentNode;
    if (a.className == expandClassName) {
        a.className = collapseClassName;
    } else {
        a.className = expandClassName;
    }
}
function ExpandorCollapseTableNode(a) {
    a = a.parentNode;
    if (a.className == expandClassName) {
        a.className = collapseTableClassName;
    } else {
        a.className = expandClassName;
    }
}
function ExpandorCollapseAllNodes(g, h, c) {
    var a = g.getAttribute("title");
    var b = g.parentNode;
    if (a == "collapse") {
        g.setAttribute("title", "expand");
        g.className = "dropdownAllButtonexpand";
        g.innerHTML = h;
    } else {
        g.setAttribute("title", "collapse");
        g.className = "dropdownAllButtoncollapse";
        g.innerHTML = c;
    }
    var f = b.getElementsByTagName("*");
    for (var d = 0; d < f.length; d++) {
        var e = f[d];
        if (e.className.indexOf(expandClassName) != -1 || e.className.indexOf(collapseClassName) != -1 || e.className.indexOf(collapseTableClassName) != -1) {
            if (a == "collapse") {
                if (e.tagName.toLowerCase() == "table") {
                    e.className = collapseTableClassName
                } else {
                    e.className = collapseClassName
                }
            } else {
                e.className = expandClassName
            }
        }
    }
}
