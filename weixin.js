// ==UserScript==
// @name         kyo-weixin
// @namespace    kyo.rocks
// @version      0.1
// @author       kyo
// @match        https://mp.weixin.qq.com/*
// @require      https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js

// ==/UserScript==
(function() {
    'use strict';
    $(document).dblclick(function(el) {
        var text = $.trim($(el.target).text());
        if (0 == text.indexOf('http')) {
            window.open(text);
        }
    });
})();

