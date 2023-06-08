// 要素の角度取得関数(弧度および度数の2種)
// 
// 制作者:Wolfeign(@wolfeign)
// 公開日:2023/06/08(Thu)
// 更新日:---
// ライセンス:MIT


// 要素の角度を弧度法で得る
// 引数:element=要素、win=通常はwindowオブジェクト(iframe内の要素はフレームのcontentWindow)
// 返り値:弧度(失敗したらnull)
function getElementAngleByRadian(element, win = window) {
    if (!element || !win)
        return null;

    const matrix = win.getComputedStyle(element, null).transform;
    const regx = /matrix\((.*)\)/i;

    if (matrix && regx.test(matrix)) {
        const values = matrix.match(regx)[1].replace(/\s*/g, "").split(",");

        // scale値が必要な場合は以下を使用
        // const scaleX = Math.hypot(parseFloat(values[0]), parseFloat(values[2]));
        // const scaleY = Math.hypot(parseFloat(values[1]), parseFloat(values[3]));

        const radian = Math.atan2(parseFloat(values[1]), parseFloat(values[3]));
        if (radian < 0)
            return 2 * 3.1415926535 + radian;

        return radian;
    }

    return 0;
}

// 要素の角度を度数法で得る
// 引数:element=要素、win=通常はwindowオブジェクト(iframe内の要素はフレームのcontentWindow)
// 返り値:角度(0～360)
function getElementAngleByDegree(element, win = window) {
    if (!element || !win)
        return null;

    const matrix = win.getComputedStyle(element, null).transform;
    const regx = /matrix\((.*)\)/i;

    if (matrix && regx.test(matrix)) {
        const values = matrix.match(regx)[1].replace(/\s*/g, "").split(",");
        const radian = Math.atan2(parseFloat(values[1]), parseFloat(values[3]));

        // 572957は、180/3.1415 の10000倍
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
        document.getElementById("angle" + i).textContent = getElementAngleByDegree(document.getElementById("text" + i)) + "°";
    }

    document.getElementById("input").addEventListener("input", () => {
        try {
            document.getElementById("text").style.transform = document.getElementById("input").value;
            document.getElementById("angle").textContent = getElementAngleByDegree(document.getElementById("text")) + "°";
        } catch (e) {
        }
    }, false);
}, false);
