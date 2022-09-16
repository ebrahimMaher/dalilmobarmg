---
title: عدد اﻷيام بين تاريخين
description: تحدي كتابة دالة تحسب عدد اﻷيام لأقرب رقم صحيح بين تاريخين الأول أكبر من الآخر بصيغة نصّ (شهر/يوم/سنة)
position: 8
category: advanced
createdAt: 1612462477328
updatedAt: 1612462477328
new: false
updated: false
practical: true
contributors:
  - ebrahimmaher
  - abdallahessamgaber
  
daysBetweenDatesCases: [
  [[ '05/28/2021, 05/27/2021' ], 1],
  [[ '08/02/2501, 08/02/2500' ], 365],
  [[ '06/05/2021, 06/27/2019' ], 709],
  [[ '04/07/2021, 07/26/2013' ], 2812],
  [[ '04/29/2014, 06/27/2006' ], 2863],
]
---

<challenge :cases="daysBetweenDatesCases" label="تحدي عدد اﻷيام بين تاريخين" function-name="daysBetweenDates" :parameters="['dateOne', 'dateTwo']">

قم بكتابة دالة `daysBetweenDates` تأخذ تاريخين الأول اكبر من الثاني بصورة **نصّ بصيغة (شهر/يوم/سنة)** كمُدخل (مثلاً "05/06/2021" و "03/01/2006") وتقوم بإرجاع **عدد اﻷيام بين التاريخ الأول والثاني لأقرب عدد صحيح**، مثلاً:
`daysBetweenDates("05/28/2021", "05/27/2021")` تقوم بإرجاع `1`


</challenge>

