---
title: الحلقات التكرارية (متوسط)
description: استكمال شرح الحلقات التكرارية (مستوى متوسط)
position: 8
category: intermediate
createdAt: 1610199050695
updatedAt: 1610199050695
new: false
updated: false
uncompleted: true
contributors:
  - ebrahimmaher
---




<quiz label="تمرين متقدم">

قم بكتابة برنامج يأخذ عدد كقيمة لمتغير اسمه `rows` ويطبع شكل مثلث قائم من النجوم `*` عدد صفوفه `rows`.

> عندما قيمة `rows` تساوي `4` يجب أن يكون الناتج:
<code-result>
*
<br>
**
<br>
***
<br>
****
</code-result>

</quiz>
<expand full button-text="الحصول على مساعدة" hide-text="إخفاء">

> سنستخدم **الحلقات التكرارية المتداخلة** (nested loops) فهناك حلقة تتكرر بعدد الصفوف، وحلقة تتكرر بعدد النجوم في كل صف، أيضاً سنستخدم **دمج النصوص** (concatenation) لدمج النجوم في كل صف.

</expand>
<!-- <expand full button-text="عرض الخوارزمية" hide-text="إخفاء الخوارزمية"> -->

<!-- - نقوم بإنشاء متغير `rows` وقيمته عدد الصفوف (كم صف من النجوم)
- ننشئ متغير `r` وقيمته `1` ليكون متغير التكرار، وتكون قيمته داخل الحلقة التكرارية حسب رقم الصف الحالي ولذلك بدأنا من `1`
- نقوم بإنشاء حلقة تكرارية بشرط `r` أقل من أو يساوي عدد الصفوف `rows`
-  -->

<!-- </expand> -->

<expand full button-text="عرض الحل" hide-text="إخفاء الحل">

```js
var rows = 4, // enter rows count here
  r = 1;
while (r <= rows){
  var i = 1;
  var stars = '';
  while(i <= r){
    stars = stars + '*';
    i = i + 1;
  }
  // print row stars
  console.log(stars);
  r = r + 1;
}
```
> جرب تغيير قيمة `rows` إلى `8` ليرسم مثلث كبير بقاعدة 8 نجوم

> استخدمنا دمج النصوص (concatenation) يمكنك مراجعته في [درس التعبيرات](/tutorials/algorithms/fundamentals/expressions#دمج-النصوص-concatenation)
</expand>
