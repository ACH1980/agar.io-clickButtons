// ==UserScript==
// @name         Agar.io Click Buttons
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Click blue potion buttons automatically!
// @author       KanjiasDev
// @match        https://agar.io/
// @icon         https://www.google.com/s2/favicons?domain=agar.io
// @grant        none
// @license GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
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