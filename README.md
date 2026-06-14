# ArtistLens

موقع استوديو ArtistLens. مبني بـ Astro، مخرجات ثابتة، ثنائي اللغة (إنجليزي
افتراضي تحت `/` وعربي تحت `/ar`)، وبنية المحتوى جاهزة لربط CMS لاحقاً.

A static, bilingual Astro site (English at `/`, Arabic at `/ar`) structured to be
CMS-ready and to deploy to Cloudflare Pages as a static site.

---

## المتطلبات / Requirements

- Node.js 20 أو 22 (LTS).
- npm.

## التشغيل محلياً / Local development

```
npm install
```

```
npm run dev
```

ثم افتح العنوان المحلي الظاهر في الطرفية (افتراضياً http://localhost:4321).

## البناء والمعاينة / Build and preview

```
npm run build
```

```
npm run preview
```

يُولَّد الموقع الثابت في مجلد `dist`.

---

## النشر على Cloudflare Pages / Deploy to Cloudflare Pages

عند الربط بالمستودع في Cloudflare Pages، استخدم الإعدادات التالية:

- Framework preset: Astro
- Build command:

```
npm run build
```

- Output directory:

```
dist
```

- إن لزم تحديد إصدار Node، أضف متغير بيئة في إعدادات Pages:

```
NODE_VERSION = 20
```

المخرجات ثابتة بالكامل، لذا لا حاجة إلى Workers أو KV أو D1 أو R2 في هذه المرحلة.

---

## بنية المشروع / Project structure

```
src/
  consts.ts              إعدادات الموقع المركزية (CMS-ready)
  content.config.ts      مخطط مجموعة المشاريع (البيانات منفصلة عن المكونات)
  content/projects/
    en/classpro.md         محتوى ClassPro الإنجليزي
    ar/classpro.md         محتوى ClassPro العربي
  i18n/ui.ts             نصوص الواجهة + مساعدات روابط اللغة
  layouts/BaseLayout.astro   يضبط lang وdir تلقائياً
  components/            Header, Footer, LangSwitch, ProjectCard
  pages/
    index.astro            /
    ar/index.astro         /ar
    projects/[slug].astro          /projects/[slug]
    ar/projects/[slug].astro       /ar/projects/[slug]
  styles/global.css      رموز تصميم محايدة مؤقتة + دعم RTL
public/                  أصول ثابتة + وسائط مؤقتة
```

## إضافة مشروع جديد / Adding a project

أنشئ ملفين بنفس قيمة `slug` للغتين:

```
src/content/projects/en/<slug>.md
```

```
src/content/projects/ar/<slug>.md
```

ولا تضع بيانات المشروع داخل المكونات. المكونات تستقبل البيانات من مجموعة المحتوى فقط.

---

## ملاحظات / Notes

- رموز التصميم في `src/styles/global.css` محايدة ومؤقتة، وستُربط الهوية البصرية
  المعتمدة لاحقاً في مرحلة الهوية.
- مكتبات الحركة (GSAP وLenis) غير مثبّتة عمداً، وتُضاف عند بدء مرحلة الحركة فقط:

```
npm install gsap lenis
```

- صور ClassPro الحالية مسارات مؤقتة. عند الانتقال إلى وسائط حقيقية يمكن توجيهها
  إلى شبكة توزيع دون أي تعديل في الشيفرة، لأن المسارات مخزّنة كنصوص في المحتوى.
