# HTML Element Angle

HTML要素の角度を求める関数。  
Chromeでのみ動作を確認。  

Functions to get the angle of an HTML element.  
Confirmed to work only in Chrome.

### デモ (Demo)

https://wolfeign.github.io/ElementAngle/

それぞれの角度は実行時に計算している。  

Each angle is calculated at runtime.

### 使用方法 (Usage)

関数は以下の2種  
getElementAngleInRadian(element, win)  
getElementAngleInDegree(element, win)  

引数のelementは要素、winは通常はwindowオブジェクトで省略可能。  
返り値は上が弧度で下が度数。エラーが起こればnullを返す。  

The following two types of functions.  
getElementAngleInRadian(element, win)  
getElementAngleInDegree(element, win)  

The argument element is a target element and win is usually a window object and can be omitted.  
The return value is radian on the top and degree on the bottom. Returns null if an error occurs.

### 既知の問題 (Known Issues)

今のところなし

None for now.

### バージョン履歴 (Version history)

・2023/06/12(Mon)  
重大なバグに伴う大幅な修正  
Major fixes with critical bugs.  

### 作者 (Author)

Wolfeign(@wolfeign)

### ライセンス (License)

The MIT License (MIT)
