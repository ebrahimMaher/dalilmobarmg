# dalilmobarmg.com
> هذا المستودع يحوي الكود المصدري لمنصة "دليل مبرمج" العربية وتتم المساهمة في التطوير والمحتوى والمدونة عن طريقه.

يعتمد المشروع برمجياً على تقنيات:
- nuxtjs
- nuxt content
- Vuejs
- TailwindCss

لذلك إن كنت ستعمل على البرمجة والتطوير، ألقِ نظرة على الوثائق الرسمية لـ [nuxtjs](https://nuxtjs.org) وأيضاً على [nuxt content](https://content.nuxtjs.org)

# كيف تبدأ في المساهمة؟
> هذه الخطوات لمن يعرف كيف يتعامل مع ***Git*** و ***Github*** ، غير ذلك يمكنك التوجه إلى خطوات المساهمة في المحتوى.
- اضغط على زر *fork* ليتم إضافة نسخة من المشروع إلى حساب جيتهاب  الخاص بك
- قم بعمل `clone` للمستودع الجديد المُضاف لحسابك:
```bash
git clone https://github.com/{username}/dalilmobarmg
```
لا تنسى وضع استبدال {username} بإسم المستخدم الخاص بك
- قم بإجراء أي تعديلات أو إضافات أو تطويرات إو إصلاح لأي مشكلات أو إضافة مقالات
- اعمل `commit` جديدة ثم اعمل `push` للتغيرات إلى مستودعك مرة أخرى
- اضغط على زر **Compare & pull request** ثم **Create Pull Request**
- سنقوم بمراجعة تعديلاتك واﻹضافة عليها ثم دمج التعديلات مع المستودع الرئيسي لتُصبح موجودة على المنصة.

# تعديل خطأ في المحتوى
> تعديل خطأ في المحتوى سواء كان لغوياً أو خطئاً بسيطاً أو خطأ في المعلومات الموجودة في الشرح.

## زر تعديل الصفحة على جيتهاب
أسفل كل درس من دروس أي دورة ستجد الجزء الخاص بالمساهمة وزر أو رابط **تعديل الدرس على Github** يمكنك الضغط عليه ليحولك مباشرة على الملف في المستودع الخاص بدليل مبرمج على Github، يمكنك الضغط على زر التعديل "ايقونة القلم" والتعديل على الملف وتصحيح الخطأ ثم إرسال **Pull Request** لندمج تعديلك مع المستودع الرئيسي والمنصة.


# المساهمة في محتوى الدورات فقط
- مسار محتوى الدورات في المسار `content/ar/tutorials/` ويمكنك [الضغط هنا للإنتقال إليه](tree/master/content/ar/tutorials)
## تعديل درس
يمكنك تعديل أي درس عن طريق فتح الملف الخاص به ثم إجراء التعديلات عن طريق زر التعديل (القلم) ثم إرسال **Pull Request** وسنراجع تعديلاتك ثم ندمجها مع المستودع الرئيسي
> نحن نستخدم **Markdown Syntax** لكتابة المحتوى وتنسيقه، لكن يمكنك الكتابة والتعديل بدون تنسيق، مجرد نص... وسنراجع تعديلاتك ونعيد كتابتها بـ **Markdown Syntax** وننسقها ونستخدم عناصر التصميم والعرض التي تدعمها منصتنا... لذلك ركز أنت فقط على المحتوى!

## إضافة درس جديد
> نحن نستخدم **Markdown Syntax** لكتابة المحتوى وتنسيقه، لكن يمكنك الكتابة بدون تنسيق، مجرد نص... وسنراجع الملف ونعيد كتابته بـ **Markdown Syntax** وننسقه ونرتب عناصره ونستخدم عناصر التصميم والعرض التي تدعمها منصتنا... لذلك ركز أنت فقط على المحتوى!

- اضغط على زر **Fork** ليتم إضافة نسخة من مستودع دليل مبرمج على حسابك على جيتهاب
- افتح النسخة الموجودة على حسابك، غالباً سيتم تحويلك لها تلقائياً
- انتقل إلى مسار محتوى الدورات: `content/ar/tutorials/` ويمكنك [الضغط هنا للإنتقال إليه](tree/master/content/ar/tutorials)
- افتح المجلد الخاص بالدورة التي ستكتب فيها، ثم الفئة
- أنشئ ملف جديد عن طريق `Add File` > `Create New File` واحفظه بصيغة `.md`
- انسخ الصيغة التالية وضعها في الملف ثم ابدأ بالتعديل عليها

```
---
title: ضع العنوان هنا
description: ضع الوصف هنا
position: رقم الترتيب هنا
category: اسم الفئة هنا
createdAt: اتركها فارغة وسنضعها
updatedAt: اتركها فارغة وسنضعها
contributors:
  - ضع إسمك هنا
---

ابدأ بكتابة الدرس هنا

```
> ويمكنك ترك أي قيمة من القيم الموجودة باﻷعلى وسنملأها نحن، مثلاً الترتيب أو الفئة، كذلك `createdAt` و `updatedAt`.
> اترك التنسيق علينا، وحتى اﻷخطاء اﻹملائية والنحوية سنقوم بإصلاحها...

- افتح `Pull Requests` ثم قم بإرسال `Pull Request` جديد وسيتم مراجعة الدرس وتعديله ودمجه مع المستودع الرئيسي


## إضافة وتعديل درس لمُتقني Git & Github
- fork this repository
- git clone forked repo
- use above example to create new file at `content/ar/tutorials/{name}/{category}
- start typing
- commit
- push
- pull request

### Lesson options & meta
[see below](#lesson-meta)

# المساهمة في مقالات المدونة فقط
- **مسار ملفات المقالات هنا: `content/ar/blog`**


## إضافة درس جديد
> نحن نستخدم **Markdown Syntax** لكتابة المحتوى وتنسيقه، لكن يمكنك الكتابة بدون تنسيق، مجرد نص... وسنراجع الملف ونعيد كتابته بـ **Markdown Syntax** وننسقه ونرتب عناصره ونستخدم عناصر التصميم والعرض التي تدعمها منصتنا... لذلك ركز أنت فقط على المحتوى!

- اضغط على زر **Fork** ليتم إضافة نسخة من مستودع دليل مبرمج على حسابك على جيتهاب
- افتح النسخة الموجودة على حسابك، غالباً سيتم تحويلك لها تلقائياً
- انتقل إلى مسار محتوى الدورات: `content/ar/blog/` ويمكنك [الضغط هنا للإنتقال إليه](tree/master/content/ar/blog)
- أنشئ ملف جديد عن طريق `Add File` > `Create New File` واحفظه بصيغة `.md`
- انسخ الصيغة التالية وضعها في الملف ثم ابدأ بالتعديل عليها

```
---
title: ضع العنوان هنا
description: ضع الوصف هنا
position: رقم الترتيب هنا
category: اسم الفئة هنا
createdAt: اتركها فارغة وسنضعها
updatedAt: اتركها فارغة وسنضعها
contributors:
  - ضع إسمك هنا
---

ابدأ بكتابة الدرس هنا

```
> ويمكنك ترك أي قيمة من القيم الموجودة باﻷعلى وسنملأها نحن، مثلاً الترتيب أو الفئة، كذلك `createdAt` و `updatedAt`.
> اترك التنسيق علينا، وحتى اﻷخطاء اﻹملائية والنحوية سنقوم بإصلاحها...

- افتح `Pull Requests` ثم قم بإرسال `Pull Request` جديد وسيتم مراجعة الدرس وتعديله ودمجه مع المستودع الرئيسي


```
---
title: ضع العنوان هنا
description: ضع الوصف هنا
date: 2021-01-10
authors:
  - name: اسمك هنا
    avatarUrl: رابط صورتك
    link: رابط جيتهاب الخاص بك
tags:
  - tag 1
  - tag 2
---

اكتب محتوى المقالة هنا
```
> اترك التنسيق علينا، وحتى اﻷخطاء اﻹملائية والنحوية سنقوم بإصلاحها...

- افتح `Pull Requests` ثم قم بإرسال `Pull Request` جديد وسيتم مراجعة الدرس وتعديله ودمجه مع المستودع الرئيسي


## Tutorials
### Lesson Meta
- `contributers`: **array of contributers** and it can be just a name or **ID**, to use ID you must add contributer object to `store/index.js` like this: `{id: 'ebrahimmaher', name: 'Ebrahim Maher', github: 'ebrahimMaher'}` then avatar will be imported from github, also if clicked, github profile will be opened
- `uncompleted`: if true, coming soon badge will be added
- `new`: if true, new badge will be always visible
- `updated`: if true, updated badge will be always visible
- `createdAt`: 
  this will be used to auto add **new badge** if ***48 hours*** haven't passed
  note: this value must be in **UTC** and must be **JS Timestamp**.
  you can use command that we created to get Now UTC Timestamp... type in CLI: `npm run timestamp`
  result will be like this:

  ```
  TIMESTAMP: 1610001603529

  --------| Meta |--------
  Now UTC: 1/7/2021 8:40:03 AM
  Now: 1/7/2021 10:40:03 AM
  ```
  copy timestamp: `1610001603529`

  > ***note: if you didn't define createdAt or updatedAd, nuxt will auto-add createdAt and updatedAt based on the file's actual created & updated datetime***

- `updatedAt`: 
  this will be used to auto add **updated badge** if ***48 hours*** haven't passed
  note: this value must be in **UTC** and must be **JS Timestamp**.
  you can use command that we created to get Now UTC Timestamp... type in CLI: `npm run timestamp` as we did in createdAt

full example:
```md
---
title: المتغيرات (variables)
description: إعداد بيئة العمل تمهيداً لكتابة أول كود برمجي
position: 4
category: fundamentals
new: false
createdAt: 1610001603529
updatedAt: 1610001603529
updated: false
contributors:
  - ebrahimmaher
  - ebrahimmaher2  
---

```

