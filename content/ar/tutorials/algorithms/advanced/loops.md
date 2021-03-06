---
title: الحلقات التكرارية (متقدم)
description: شرح تفاصيل متقدمة عن الحلقات التكرارية وبعض اﻷنواع الجديدة منها (do.. while, forEach)
position: 3
category: advanced
createdAt: 1617216774949
updatedAt: 1617216774949
new: false
updated: false
contributors:
  - ebrahimmaher
---

## مقدمة
تحدثنا عن أساسيات الحلقات التكرارية في [درس الحلقات التكرارية](/tutorials/algorithms/fundamentals/loops) في المستوى اﻹبتدائي، وتعمقنا في الحلقات التكرارية وتفاصيلها المتقدمة في درس [الحلقات التكرارية (متوسط)](/tutorials/algorithms/intermediate/loops) واﻵن سنتعلم بعض اﻷمور  واﻷنواع الجديدة من الحلقات التكرارية التي لم نذكرها في المستويات السابقة.

## قطع الحلقة التكرارية `break`
في بعض اﻷحيان نحتاج لإيقاف الحلقة التكرارية إذا حدث شيئاً معين، يمكننا استخدام اﻷمر `break` لإعطاء المفسر أمر بالتوقف عن التكرار وقطع الحلقة التكرارية... 

<base-alert type="tip">

عندما يجد المفسر اﻷمر `break;` فإنه يقفز خارج كتلة الحلقة التكرارية ليقوم بتنفيذ اﻷسطر التي تأتي بعدها

</base-alert>

> لاحظ المثال التالي، حلقة تكرارية تطبع اﻷعداد من 0 إلى 10 ولكننا أعطينا المفسر أمر بإيقاف الحلقة التكرارية إن كانت قيمة `i` تساوي `3` وبالتالي تتوقف الحلقة التكرارية في الدورة الثالثة قبل طباعة 3 وتطبع فقط اﻷعداد 0, 1, 2

```js
for (var i = 0; i<= 10; i++){
  if (i === 3){
    break;
  }
  console.log(i);
}
```
<code-result>
0
<br>
1
<br>
2
</code-result>

<base-alert type="info">

يمكنك استخدام اﻷمر `break` مع أي نوع من الحلقات التكرارية (`while`, `for` ...)

</base-alert>


## الحلقة التكرارية `do.. while`
`do.. while` هو نوع جديد من الحلقات التكرارية ويُعتبر مماثل للحلقة التكرارية `while` لكن اﻹختلاف بينهم **أن المفسر يتحقق من الشرط بعد تنفيذ كتلة أوامر الحلقة التكرارية** وذلك يعني أن **كتلة اﻷوامر تُنفذ على اﻷقل مرة واحدة**.

> مثال لحلقة تكرارية تتنفذ أوامرها على الرغم من أن الشرط يساوي `false` (لا يتحقق)

```js
var i = 5;
do {
  console.log("test");
  i++
} while (i > 10)
```
<code-result>
test
</code-result>

<base-alert type="info">

يقوم المفسر بتنفيذ كتلة الأوامر أولاً (عندما يمر على `do`)، ثم بعد كتلة اﻷوامر يجد `while` فيتحقق من الشرط، إذا كان الشرط يساوي `true` يعود المفسر لتنفيذ كتلة اﻷوامر مرة أخرى، ثم يتحقق من الشرط... وتتكرر العملية إلى أن ﻻ يتحقق شرط الحلقة التكرارية (عندما يساوي `false`)

</base-alert>

<base-alert type="tip">

`do.. while` قليلة الاستخدام ولكننا نستخدمها إذا أردنا أن تتنفذ الحلقة التكرارية على اﻷقل مرة واحدة

</base-alert>


> مثال آخر على حلقة تكرارية تطبع اﻷعداد من 0 إلى 4
```js
var i = 0;
do {
  console.log(i);
  i++
} while (i <= 4)
```
<code-result>
0
<br>
1
<br>
2
<br>
3
<br>
4
</code-result>

## الحلقة التكرارية `forEach`
الحلقة `forEach` هي حلقة تكرارية كثيرة اﻹستخدام، حيث أنها تختصر وتسهل الوصول لكل عناصر المصفوفات، فبدلاً من استخدام الحلقة `while` أو الحلقة `for` للوصول لكل عناصر المصفوفة كما تعلمنا في درس [المصفوفات](/tutorials/algorithms/intermediate/arrays#الوصول-لكل-عناصر-المصفوفة) .. يمكننا اﻵن استخدام الحلقة التكرارية `forEach`

### كتابة الحلقة التكرارية `forEach`
```js
var numbers = [1, 2, 3, 4];
numbers.forEach(function (num){
  console.log(num);
});
```
<code-result>
1
<br>
2
<br>
3
<br>
4
</code-result>

<base-alert type="info">

لاحظ أن الحلقة التكرارية `forEach` تأخذ [دالة استجابة](/tutorials/algorithms/advanced/functions#كتابة-دوال-اﻹستجابة) كمدخل، وتقوم باستدعاء هذه الدالة مع كل عنصر من عناصر المصفوفة.

</base-alert>


### الوصول لمُفتاح عناصر المصفوفة
يمكننا إضافة مُدخل آخر لدالة الاستجابة مع الحلقة التكرارية `forEach` حتى نتمكن من الوصول لمُفتاح (index) العنصر الحالي...
```js
var countries = ["Palestine", "Syria", "Egypt"];
countries.forEach(function (country, index){
  console.log(index + ': ' + country);
});
```
<code-result>
0: Palestine
<br>
1: Syria
<br>
2: Egypt
</code-result>

<base-alert type="error">

لا يُمكن استخدام اﻷمر `break` لقطع الحلقة التكرارية `forEach`.. سيظهر لك الخطأ التالي
`Uncaught SyntaxError: Illegal break statement`

</base-alert>

<!-- 
<quiz>

قم بكتابة دالة تقوم بحساب اﻷسس (قوى العدد) 
مثلاً **2<sup>2</sup>**
 بحيث تأخذ مُدخلين، اﻷول عدد والثاني عدد (أس) وتقوم بطباعة العدد اﻷول أسّ الثاني..

مثلاً لو أدخلنا لها `(3, 2)` يكون الناتج **3<sup>2</sup>** يساوي **9**

</quiz>

<expand full button-text="الحصول على مساعدة" hide-text="إخفاء">


</expand>


<expand full button-text="عرض الحل" hide-text="إخفاء الحل">

```js

```

</expand>

<br> -->
