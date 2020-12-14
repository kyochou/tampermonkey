// ==UserScript==
// @name         kyo-google_search
// @namespace    kyo.rocks
// @version      0.1
// @author       kyo
// @match        https://www.google.com/search?q=*
// @require      https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js

// ==/UserScript==
var interval_id_sst;
(function() {
    'use strict';

    interval_id_sst = setInterval(showSearchTools, 500);
})();

function showSearchTools() {
  if ('none' == $('#hdtbMenus').css('display')) {
    $('#hdtb-tls')[0].click();
    return;
  }
  clearInterval(interval_id_sst);
}
