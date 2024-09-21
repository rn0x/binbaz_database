

<div align="center">

# binbaz_database

<img src="binbaz_database.png" width="600px;"/><br> <br> 

 **مكشطة وقاعدة بيانات لـ موقع سماحة الشيخ الإمام ابن باز رحمه الله**

 [**binbaz.org**](https://binbaz.org.sa)

 # من هوا عبد العزيز بن باز ؟


  
  <table>
    <tr>
        <td align="center"><img src="https://www.okaz.com.sa/uploads/images/2022/04/23/1969441.jpg" width="100px;"/><br /><sub>عبد العزيز بن عبد الله بن باز</sub></td>
    </tr>
</table> <br> 

عبد العزيز بن عبد الله بن باز، قاض وفقيه سعودي، ولد في الرياض لأسرة علم، وتلقى علومه من مشايخ وعلماء بلدته، شغل منصب مفتي عام المملكة العربية السعودية منذ عام 1413 هـ الموافق 1992 حتى وفاته، بالإضافة لرئاسة هيئة كبار العلماء السعودية، ورئاسة إدارة البحوث العلمية والإفتاء، ورأس المجلس التأسيسي لرابطة العالم الإسلامي

- تاريخ ومكان الميلاد: 22 نوفمبر 1912، الرياض
- تاريخ ومكان الوفاة: 13 مايو 1999، مكة المكرمة

<br> <br>


# محتويات قاعدة البيانات



 <br> **الكتب** 
  <br> كتب عربية عددها 177 كتاب
  <br> كتب مترجمة عددها 162 كتاب
<br>
<br> **الفتاوى** 
 <br> نور على الدرب 12269 فتوى 
 <br> فتاوى الجامع الكبير 1783 فتوى
 <br> فتاوى الدروس 5675 فتوى

</div>
<br> 

<div align="center">

### تفاصيل البيانات 

<br>

**الكتب**

</div>

<br>

```json
{
		"id": 7,
		"title": "الفوائد العلمية من الدروس البازية على كتاب بلوغ المرام",
		"link": "https://binbaz.org.sa/books/21/الفواىد-العلمية-من-الدروس-البازية-على-كتاب-بلوغ-المرام",
		"image": "https://binbaz.org.sa/img/series-books.png",
		"pdf": [
			{
				"name": "العلمية من الدروس البازية على كتاب بلوغ المرام1",
				"link": "https://files.zadapps.info/binbaz.org.sa/الفوائد العلمية من الدروس البازية على كتاب بلوغ المرام1.pdf"
			},
			{
				"name": "العلمية من الدروس البازية على كتاب بلوغ المرام2",
				"link": "https://files.zadapps.info/binbaz.org.sa/الفوائد العلمية من الدروس البازية على كتاب بلوغ المرام2.pdf"
			}
		]
},
```

- id - رقم الكتاب | `number`
- title - العنوان | `string`
- link - رابط قراءة الكتاب | `string`
- image - صورة الكتاب | `string`
- pdf - مصفوفة تحتوي على أجزاء الكتاب | `array`
- - name - إسم الكتاب | `string`
- - link - رابط تحميل الكتاب | `string`

<br> <br> 

<div align="center">


**الفتاوى**

</div>

<br>


```json
{
		"id": 5672,
		"question": "هل يُردد خلف (المقيم) كالأذان؟ ",
		"title": "هل يجوز ترديد إقامة الصلاة مثل الأذان؟",
		"answer": "الجواب: نعم، يُستحبّ أن يُجيب المقيم كما أجاب المؤذن.[1]",
		"link": "https://binbaz.org.sa/fatwas/31709/هل-يجوز-ترديد-اقامة-الصلاة-مثل-الاذان",
		"audio": "https://files.zadapps.info/binbaz.org.sa/fatawa/fatawa_dross/aldurus almuhima 018.mp3.mp3",
		"categories": [
			"الأذان والإقامة"
		]
},
```

<br>

- id - رقم الفتوى | `number`
- question - السؤال ؟ | `number`
- title - العنوان | `string`
- answer - الجواب (الفتوى) | `string`
- link - رابط الفتوى | `string`
- audio - رابط الملف الصوتي للفتوى | `string`
- categories - فئة الفتوى | `array`


<br> <br>
<div align="center">

# المكشطة 

**المتطلبات**

</div>

- git 
- nodejs 

<div align="center">

**إستنساخ المستودع و تثبيت التبعيات**

```bash
git clone https://github.com/rn0x/binbaz_database
cd binbaz_database
npm i
```


**مكشطة الفتاوى**

```bash
npm run fatwas
```

**مكشطة الكتب**

```bash
npm run books
```

**تحميل الفتاوى (ملفات الصوت)**
ملاحظة : يجب عليك أولاُ تشغيل المكشطة

```bash
npm run download-fatwas
```

**تحميل الكتب (pdf)**
ملاحظة : يجب عليك أولاُ تشغيل المكشطة

```bash
npm run download-books
```

<br> <br><br>

# تنزيل قاعدة البيانات

<div align="center">


![binbaz_database](https://img.shields.io/github/downloads/rn0x/binbaz_database/total?color=blue&label=Total%20Downloads)

</div>

#### كتب عربية
- [json](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/books_ar.json)
- [csv](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/books_ar.csv)
- [xlsx](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/books_ar.xlsx)

#### كتب مترجمة
- [json](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/books_en.json)
- [csv](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/books_en.csv)
- [xlsx](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/books_en.xlsx)

#### نور على الدرب
- [json](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/nur_ealaa_aldarb.json)
- [csv](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/nur_ealaa_aldarb.csv)
- [xlsx](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/nur_ealaa_aldarb.xlsx)

#### فتاوى الجامع الكبير
- [json](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aljamie_alkabir.json)
- [csv](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aljamie_alkabir.csv)
- [xlsx](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aljamie_alkabir.xlsx)

#### فتاوى الدروس
- [json](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aldurus.json)
- [csv](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aldurus.csv)
- [xlsx](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aldurus.xlsx)


________

#### كتب (مسارات محلية) 
- [json-AR](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/books_ar-local.json)
- [json-EN](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/books_en-local.json)
- [كتب PDF - ملف مضغوط ZIP](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/books.zip) - 1.69 GB


__________

#### نور على الدرب (مسارات محلية) 
- [json](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/nur_ealaa_aldarb-local.json)

**نور على الدرب ملفات صوتية في ملف مضغوط .7z مقسم لعدة أقسام**
  
- [PART1.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/nur_ealaa_aldarb.7z.001) - 1.86 GB
- [PART2.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/nur_ealaa_aldarb.7z.002) - 1.86 GB
- [PART3.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/nur_ealaa_aldarb.7z.003) - 1.86 GB
- [PART4.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/nur_ealaa_aldarb.7z.004) - 1.86 GB
- [PART5.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/nur_ealaa_aldarb.7z.005) - 1.86 GB
- [PART6.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/nur_ealaa_aldarb.7z.006) - 1.86 GB
- [PART7.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/nur_ealaa_aldarb.7z.007) - 1.86 GB
- [PART8.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/nur_ealaa_aldarb.7z.008) - 1.86 GB
- [PART9.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/nur_ealaa_aldarb.7z.009) - 1.86 GB
- [PART10.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/nur_ealaa_aldarb.7z.010) - 1.16 GB


_________

#### فتاوى الجامع الكبير (مسارات محلية) 
- [json](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aldurus.json)

**فتاوى الجامع الكبير ملفات صوتية في ملف مضغوط .7z مقسم لعدة أقسام**

- [PART1.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aljamie_alkabir.7z.001) - 1.86 GB
- [PART2.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aljamie_alkabir.7z.002) - 1.86 GB
- [PART3.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aljamie_alkabir.7z.003) - 1.86 GB
- [PART4.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aljamie_alkabir.7z.004) - 374 MB

_________


#### فتاوى الدروس (مسارات محلية) 
- [json](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aldurus.json)

**فتاوى الدروس ملفات صوتية في ملف مضغوط .7z مقسم لعدة أقسام**

- [PART1.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aldurus.7z.001) - 1.86 GB
- [PART2.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aldurus.7z.002) - 1.86 GB
- [PART3.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aldurus.7z.003) - 1.86 GB
- [PART4.7z](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/fatawaa_aldurus.7z.004) - 380 MB


__________

تحميل جميع ملفات json و csv و xls في ملف واحد مضغوط [zip](https://github.com/Alsarmad/binbaz_database/releases/download/v1.0/database.zip)

# LICENSE

MIT license 


## لا تنسنا من دعوة صالحة في ظهر الغيب
</div>

