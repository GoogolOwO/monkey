// ==UserScript==
// @name         Wikidot 反 XSS 检测
// @namespace    https://wikidot.com/
// @version      2024-07-21
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
    let existXSS = document.getElementById("page-content").innerHTML.indexOf("<script") !== -1;
    if(existXSS){
        document.getElementById("abuse-report-button").style.color = "red";
    }
})();
