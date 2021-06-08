// ==UserScript==
// @name         Agar.io Click Buttons
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Click blue potion buttons automatically!
// @author       KanjiasDev
// @match        https://agar.io/
// @icon         https://www.google.com/s2/favicons?domain=agar.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var x = 0;

    function testing() {
        if (!window.core) return;

        console.log(core);

        var blueButtons = document.getElementsByClassName("potion-slot-button blue");
        if (blueButtons[0]) {
            blueButtons[0].click();
        }
    }

    setInterval(testing, 10000);
})();