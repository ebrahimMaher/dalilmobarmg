---
title: عوامل التعيين (Assignment)
description: شرح عوامل التعيين (Assignment Operators) في البرمجة بالتفصيل
position: 6
category: intermediate
createdAt: 1613494938442
updatedAt: 1613494938442
new: false
updated: false
contributors:
  - ebrahimmaher
---

## مقدمة
درسنا سابقاً عن عامل التعيين اﻷساسي `=` في [درس المتغيرات](/tutorials/algorithms/fundamentals/variables) واﻵن سنتعمق في التعيين وتفاصيله المتقدمة وسنتعلم علامات جديدة.

## ما هو التعيين؟
**التعيين** أو **اﻹسناد** أو **Assignment** هو عملية إرفاق قيمة للمتغير، وكما قلنا سابقاً أننا عند إنشاء متغير نستخدم العلامة `=` لإرفاق قيمة للمتغير

```js
var num = 15;
console.log(num);
num = 10;
console.log(num);
```
<code-result>
15
<br>
10
</code-result>

## علامات التعيين

|العلامة|مثال على العلامة|المثال يساوي|
|:--------:|:-------:|:-------:|
|**`=`**|`num = 5`|`num = 5`|
|**`+=`**|`num += 5`|`num = num + 5`|
|**`-=`**|`num -= 5`|`num = num - 5`|
|**`*=`**|`num *= 5`|`num = num * 5`|
|**`/=`**|`num /= 5`|`num = num / 5`|


### العلامة `+=`
هذه العلامة هي إختصار للإضافة على قيمة متغير، فبدلاً من أن نكتب `x = x + 5` ممكن كتابة: `x += 5` وغالباً ما يستخدم المبرمجون هذه اﻹختصارات حيث تكون أسرع وأفضل.

```js
var num = 5;
num += 2; 
console.log(num);
```
<code-result>
7
</code-result>

وغالباً ما نستخدم هذه العلامة أيضاً في الحلقات التكرارية لتغيير قيمة متغير العداد.
```js
var i = 0;
while (i <= 3){
  console.log(i);
  i += 1; // instead of: i = i + 1;
}
```
<code-result>
0
1
2
3
</code-result>

## العلامة `-=`
هذه العلامة هي اختصار للطرح من قيمة متغير، فبدلاً من أن نكتب: `x = x - 5` يمكن كتابة `x -= 5`

```js
var num = 5;
num -= 2; 
console.log(num);
```
<code-result>
3
</code-result>

## العلامة `*=`
هذه العلامة هي اختصار للطرح من قيمة متغير، فبدلاً من أن نكتب: `x = x * 5` يمكن كتابة `x *= 5`

```js
var num = 5;
num *= 2; 
console.log(num);
```
<code-result>
10
</code-result>

## العلامة `/=`
هذه العلامة هي اختصار للطرح من قيمة متغير، فبدلاً من أن نكتب: `x = x / 2` يمكن كتابة `x /= 2`

```js
var num = 10;
num /= 2; 
console.log(num);
```
<code-result>
5
</code-result>

## أمثلة على التعيين

### مثال الجمع الديناميكي
> زيادة قيمة متغير بقيمة متغير آخر

```js
var addition = 2,
  num = 10;

num += addition;
console.log(num);
```
<code-result>
12
</code-result>


### مثال تكرار دمج النصوص
يمكن استخدام العلامة `+=` في دمج النصوص أيضاً
مثال حلقة تكرارية تطبع 30 نجمة في سطر واحد بإستخدام دمج النصوص... وعلامة التعيين المختصرة `+=`
> هذا استخدام نظري وليس استخداماً حقيقياً، ولكن في الحلقات التكرارية المتقدمة ستستخدمها في تمارين حقيقية
```js
var result = "";

var i = 0;
while(i < 30){
  result += "*";
  i = i + 1;
}
console.log(result);
```
<code-result>
******************************
</code-result>


## تمارين على التعيين
<quiz>

استخدم الحلقات التكرارية وعلامات التعيين المختصرة في طباعة ناتج حساب
**2<sup>10</sup>**
(ضرب العدد 2 في نفسه 10 مرات).

</quiz>

<expand full button-text="عرض الحل" hide-text="إخفاء الحل">

```js
var i = 0,
  result = 1;

while (i < 10){
  result *= 2;
  i += 1;
}
console.log(result);
```
<code-result>
1024
</code-result>

> استخدمنا `result *= 2` بدلاً من `result = result * 2`

<base-alert type="info">

يعتبر التعيين برمجياً من **التعبيرات**، لذلك يمكن إستخدامه كمُدخل لدالة مثلاً:

```js
var n = 5;
console.log(n += 4);
console.log(n);
```
<code-result>
9
<br>
9
</code-result>

</base-alert>
