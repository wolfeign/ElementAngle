// 要素の角度取得関数(弧度および度数の2種)
// Element angle acquisition functions (2 types: radian and degree)
// 
// Author:  Wolfeign(@wolfeign)
// Release: 2023/06/08(Thu)
// Update:  2023/06/12(Mon)
// License: MIT


// 要素の角度を弧度法で得る
// Get element angle in radian
// 
// 引数:element=要素、win=通常はwindowオブジェクト(iframe内の要素はフレームのcontentWindow)
// Arguments: element=Traget element, win=Usually a window object (The element inside the iframe is the frame's contentWindow)
// 
// 返り値:弧度(失敗したらnull)
// Return value: Radian angle (null on failure)
function getElementAngleInRadian(element, win = window) {
    if (!element || !win)
        return null;

    const style = win.getComputedStyle(element, null);
    const matrix = style.getPropertyValue("-webkit-transform") ||
        style.getPropertyValue("-moz-transform") ||
        style.getPropertyValue("-ms-transform") ||
        style.getPropertyValue("-o-transform") ||
        style.getPropertyValue("transform") ||
        "none";
    const regex = /matrix\((.*)\)/i;

    if (regex.test(matrix)) {
        const values = matrix.match(regex)[1].replace(/\s*/g, "").split(",");

        const a = parseFloat(values[0]);
        const b = parseFloat(values[1]);

        // scale値が必要な場合は以下を使用 (If you need scale value use below code)
        // const c = parseFloat(values[2]);
        // const d = parseFloat(values[3]);
        // const scaleX = Math.hypot(a, c);
        // const scaleY = Math.hypot(b, d);

        const radian = Math.atan2(b, a);
        if (radian < 0)
            return 2 * 3.1415926535 + radian;

        return radian;
    }

    return 0;
}


// 要素の角度を度数法で得る
// Get element angle in degree
// 
// 引数:element=要素、win=通常はwindowオブジェクト(iframe内の要素はフレームのcontentWindow)
// Arguments: element=Traget element, win=Usually a window object (The element inside the iframe is the frame's contentWindow)
// 
// 返り値:角度(0～360)
// Return value: Degree angle (0 to 360)
function getElementAngleInDegree(element, win = window) {
    if (!element || !win)
        return null;

    const style = win.getComputedStyle(element, null);
    const matrix = style.getPropertyValue("-webkit-transform") ||
        style.getPropertyValue("-moz-transform") ||
        style.getPropertyValue("-ms-transform") ||
        style.getPropertyValue("-o-transform") ||
        style.getPropertyValue("transform") ||
        "none";
    const regex = /matrix\((.*)\)/i;

    if (regex.test(matrix)) {
        const values = matrix.match(regex)[1].replace(/\s*/g, "").split(",");

        const a = parseFloat(values[0]);
        const b = parseFloat(values[1]);

        // scale値が必要な場合は以下を使用 (If you need scale value use below code)
        // const c = parseFloat(values[2]);
        // const d = parseFloat(values[3]);
        // const scaleX = Math.hypot(a, c);
        // const scaleY = Math.hypot(b, d);

        const radian = Math.atan2(b, a);

        // 572957は、180/3.1415 の10000倍 (572957 is 10000 times 180/3.1415)
        const degree = parseFloat((radian * 572957 / 10000).toFixed(3));
        if (degree < 0)
            return 360 + degree;

        return degree;
    }

    return 0;
}


document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 5; i++) {
        document.getElementById("transform" + i).textContent = document.getElementById("text" + i).style.transform;
        document.getElementById("angle" + i).textContent = getElementAngleInDegree(document.getElementById("text" + i)) + "°";
    }

    document.getElementById("input").addEventListener("input", () => {
        try {
            document.getElementById("text").style.transform = document.getElementById("input").value;
            document.getElementById("angle").textContent = getElementAngleInDegree(document.getElementById("text")) + "°";
        } catch (e) {
        }
    }, false);
}, false);
