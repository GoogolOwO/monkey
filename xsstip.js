// ==UserScript==
// @name         Wikidot 反 XSS 检测
// @namespace    https://wikidot.com/
// @version      0.2.1
// @description  自动检测 XSS 脚本
// @author       Googol
// @match        http://*.wikidot.com/*
// @match        https://*.wikidot.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var wb=WIKIREQUEST.info.pageId;
    var wc=new Object();
    wc.page_id=wb;OZONE.ajax.requestModule("viewsource/ViewSourceModule",wc,function(source){window.source = source});
    let existXSS = document.getElementById("page-content").innerHTML.indexOf("<script") !== -1;
    if(existXSS){
        document.getElementById("abuse-report-button").style.color = "blue";
        document.getElementById("abuse-report-button").style.fontWeight = "bold";
    }
    setTimeout(() => {
        if(window.source.body.indexOf("<script") !== -1){
            document.getElementById("abuse-report-button").style.color = "red";
        }
    },3000);
})();
