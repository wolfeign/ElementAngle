# HTML Element Angle

HTML要素の角度を求める関数。

A function to find the angle of an HTML element.

### デモ (Demo)

https://wolfeign.github.io/ElementAngle/

それぞれの角度は実行時に計算している。

Each angle is calculated at runtime.

### 使用方法 (Usage)

関数は以下の2種
getElementAngleByRadian(element, win)
getElementAngleByDegree(element, win)

引数のelementは要素、winは通常はwindowオブジェクトで省略可能。
返り値は上が弧度で下が度数。エラーが起こればnullを返す。

The following two types of functions.
getElementAngleByRadian(element, win)
getElementAngleByDegree(element, win)

The argument element is an element and win is usually a window object and can be omitted.
The return value is radians on the top and degrees on the bottom. Returns null if an error occurs.

### 既知の問題 (Known Issues)

今のところなし

None for now.

### 作者 (Author)

Wolfeign(@wolfeign)

### ライセンス (License)

The MIT License (MIT)
