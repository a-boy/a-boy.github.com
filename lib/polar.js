/*!
 * polar.js v1.0.0
 * (c) 2018-2019 Cody Luo
 * Released under the MIT License.
 */

function _(id) {
    if (id == null) return document.body;
    if(Number.isInteger(id)) return document.body.children[id];
    return document.getElementById(id)
}

function $(sel) {
    return document.querySelector(sel);
}

function $all(sel) {
    return document.querySelectorAll(sel);
}

//let w=window;