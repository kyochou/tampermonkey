// ==UserScript==
// @name         kyo
// @namespace    kyo.rocks
// @version      0.1
// @description  try to take over the world!
// @author       kyochou
// @grant        none
// @require https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// ==/UserScript==
var k_j = jQuery.noConflict(true);
// add jquery to all sites
window.k_j = k_j;
(function() {
    'use strict';
    switch(window.location.host) {
        case "mp.weixin.qq.com":
            // 将微信显示的链接变为真正可用的链接
            k_j('span[style]').each(function(i){
                if(-1 != k_j(this).css('text-decoration').indexOf('underline')){
                    k_j(this).replaceWith('<a target="_blank" href="' + this.innerHTML + '">' + this.innerHTML + '</a>')
                }
            })
            break;
    }
})();
