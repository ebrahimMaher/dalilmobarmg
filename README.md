# dalilmobarmg.com

Universal Vue.js Application built with [Nuxt.js](https://github.com/nuxt/nuxt.js).

## Setup

```bash
git clone https://github.com/ebrahimMaher/dalilmobarmg.git
cd dalilmobarmg.com/
npm install
```

## Development

أمر بدء سيرفر التطوير، يمكنك فتحه على: [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```

## New Lesson
### Lesson Meta
- `contributers`: **array of contributers** and it can be just a name or **ID**, to use ID you must add contributer object to `store/index.js` like this: `{id: 'ebrahimmaher', name: 'Ebrahim Maher', github: 'ebrahimMaher'}` then avatar will be imported from github, also if clicked, github profile will be opened
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

## Blog


