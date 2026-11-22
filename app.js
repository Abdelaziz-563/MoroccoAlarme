// قاعدة بيانات المدن والأقاليم المغربية الكاملة مرتبة أبجدياً من الألف إلى الياء
const RAW_MOROCCAN_CITIES = [
  { name: "أسا", province: "آسا-الزاك", lat: 28.6167, lng: -9.4167 },
  { name: "أزرو", province: "إفران", lat: 33.4342, lng: -5.2214 },
  { name: "أزغنغان", province: "الناظور", lat: 35.1667, lng: -3.0167 },
  { name: "أزمور", province: "الجديدة", lat: 33.2886, lng: -8.3422 },
  { name: "أزيلال", province: "أزيلال", lat: 31.9667, lng: -6.5667 },
  { name: "أصيلة", province: "طنجة-أصيلة", lat: 35.4653, lng: -6.0347 },
  { name: "أغبالو", province: "ميدلت", lat: 32.3667, lng: -4.9667 },
  { name: "أفورار", province: "أزيلال", lat: 32.2167, lng: -6.5167 },
  { name: "أقا", province: "طاطا", lat: 29.3917, lng: -8.2667 },
  { name: "أكادير", province: "أكادير إداوتنان", lat: 30.4278, lng: -9.5981 },
  { name: "أكدز", province: "زاكورة", lat: 30.6958, lng: -6.4536 },
  { name: "أكنول", province: "تازة", lat: 34.6500, lng: -3.8667 },
  { name: "أكليم", province: "بركان", lat: 34.9333, lng: -2.4167 },
  { name: "أكوراي", province: "الحاجب", lat: 33.6500, lng: -5.4333 },
  { name: "الأخصاص", province: "سيدي إفني", lat: 29.3833, lng: -9.8500 },
  { name: "الدار البيضاء", province: "الدار البيضاء", lat: 33.5731, lng: -7.5898 },
  { name: "الداخلة", province: "وادي الذهب", lat: 23.6848, lng: -15.9580 },
  { name: "الدريوش", province: "الدريوش", lat: 34.9833, lng: -3.3833 },
  { name: "الدشيرة الجهادية", province: "إنزكان آيت ملول", lat: 30.3667, lng: -9.5333 },
  { name: "الدروة", province: "برشيد", lat: 33.4167, lng: -7.5333 },
  { name: "الرباط", province: "الرباط", lat: 34.0209, lng: -6.8416 },
  { name: "الرشيدية", province: "الرشيدية", lat: 31.9314, lng: -4.4244 },
  { name: "الريصاني", province: "الرشيدية", lat: 31.2833, lng: -4.2667 },
  { name: "الريش", province: "ميدلت", lat: 32.2667, lng: -4.5000 },
  { name: "الزمامرة", province: "سيدي بنور", lat: 32.6333, lng: -8.7000 },
  { name: "السمارة", province: "السمارة", lat: 26.7384, lng: -11.6719 },
  { name: "السعيدية", province: "بركان", lat: 35.0833, lng: -2.2333 },
  { name: "الصخيرات", province: "الصخيرات-تمارة", lat: 33.8500, lng: -7.0333 },
  { name: "الصويرة", province: "الصويرة", lat: 31.5085, lng: -9.7595 },
  { name: "العرائش", province: "العرائش", lat: 35.1932, lng: -6.1557 },
  { name: "العروي", province: "الناظور", lat: 35.0167, lng: -3.0000 },
  { name: "العطاوية", province: "قلعة السراغنة", lat: 31.8333, lng: -7.3167 },
  { name: "العيون", province: "العيون", lat: 27.1536, lng: -13.2033 },
  { name: "العيون سيدي ملوك", province: "تاوريرت", lat: 34.5833, lng: -2.5000 },
  { name: "الفقيه بن صالح", province: "الفقيه بن صالح", lat: 32.5000, lng: -6.6833 },
  { name: "الفنيدق", province: "المضيق-الفنيدق", lat: 35.8500, lng: -5.3500 },
  { name: "القباب", province: "خنيفرة", lat: 32.9833, lng: -5.4500 },
  { name: "القصيبة", province: "بني ملال", lat: 32.5667, lng: -6.0167 },
  { name: "القصر الصغير", province: "الفحص-أنجرة", lat: 35.8333, lng: -5.5667 },
  { name: "القصر الكبير", province: "العرائش", lat: 35.0000, lng: -5.9000 },
  { name: "القليعة", province: "إنزكان آيت ملول", lat: 30.2833, lng: -9.4667 },
  { name: "القنيطرة", province: "القنيطرة", lat: 34.2610, lng: -6.5802 },
  { name: "الكارة", province: "برشيد", lat: 33.2667, lng: -7.5667 },
  { name: "الكنتور", province: "اليوسفية", lat: 32.3333, lng: -8.8500 },
  { name: "الكويرة", province: "أوسرد", lat: 21.7833, lng: -17.0333 },
  { name: "المضيق", province: "المضيق-الفنيدق", lat: 35.6859, lng: -5.3253 },
  { name: "المعازيز", province: "الخميسات", lat: 33.6167, lng: -6.2833 },
  { name: "المحمدية", province: "المحمدية", lat: 33.6861, lng: -7.3830 },
  { name: "المرسى", province: "العيون", lat: 27.1000, lng: -13.4167 },
  { name: "المنصورية", province: "بن سليمان", lat: 33.7500, lng: -7.2833 },
  { name: "المنزل", province: "صفرو", lat: 33.8667, lng: -4.5500 },
  { name: "المهدية", province: "القنيطرة", lat: 34.2500, lng: -6.6667 },
  { name: "الناظور", province: "الناظور", lat: 35.1681, lng: -2.9335 },
  { name: "النواصر", province: "النواصر", lat: 33.3667, lng: -7.6167 },
  { name: "الوليدية", province: "سيدي بنور", lat: 32.7333, lng: -9.0333 },
  { name: "اليوسفية", province: "اليوسفية", lat: 32.2454, lng: -8.5266 },
  { name: "انزكان", province: "إنزكان آيت ملول", lat: 30.3550, lng: -9.5370 },
  { name: "أيت أورير", province: "الحوز", lat: 31.5667, lng: -7.6667 },
  { name: "أيت إسحاق", province: "خنيفرة", lat: 32.9167, lng: -5.3500 },
  { name: "آيت باها", province: "اشتوكة آيت باها", lat: 30.0667, lng: -9.1500 },
  { name: "آيت عتاب", province: "أزيلال", lat: 32.1333, lng: -6.4833 },
  { name: "آيت عميرة", province: "اشتوكة آيت باها", lat: 30.1667, lng: -9.4500 },
  { name: "آيت ملول", province: "إنزكان آيت ملول", lat: 30.3342, lng: -9.4972 },
  { name: "إفران", province: "إفران", lat: 33.5228, lng: -5.1106 },
  { name: "إغرم", province: "تارودانت", lat: 30.0917, lng: -8.4667 },
  { name: "إملشيل", province: "ميدلت", lat: 32.1667, lng: -5.6000 },
  { name: "إمليل", province: "الحوز", lat: 31.1333, lng: -7.9167 },
  { name: "إمنتانوت", province: "شيشاوة", lat: 31.1667, lng: -8.9000 },
  { name: "إمزورن", province: "الحسيمة", lat: 35.1469, lng: -3.8492 },
  { name: "إيموزار كندر", province: "صفرو", lat: 33.7333, lng: -5.0167 },
  { name: "ابن أحمد", province: "سطات", lat: 33.0667, lng: -7.2500 },
  { name: "ابزو", province: "أزيلال", lat: 31.9833, lng: -6.7500 },
  { name: "اجدير", province: "الحسيمة", lat: 35.1833, lng: -3.8833 },
  { name: "أجلموس", province: "خنيفرة", lat: 32.8667, lng: -5.5667 },
  { name: "أحفير", province: "بركان", lat: 34.9500, lng: -2.1000 },
  { name: "اساكن", province: "الحسيمة", lat: 34.8833, lng: -4.2000 },
  { name: "أسني", province: "الحوز", lat: 31.2500, lng: -7.9833 },
  { name: "أرفود", province: "الرشيدية", lat: 31.4333, lng: -4.2333 },
  { name: "أمزميز", province: "الحوز", lat: 31.2667, lng: -8.0833 },
  { name: "أوسرد", province: "أوسرد", lat: 22.5500, lng: -14.3333 },
  { name: "أوطاط الحاج", province: "بولمان", lat: 33.3333, lng: -3.7000 },
  { name: "أوريكة", province: "الحوز", lat: 31.3333, lng: -7.7167 },
  { name: "باب برد", province: "شفشاون", lat: 35.0333, lng: -5.0833 },
  { name: "باب تازة", province: "شفشاون", lat: 35.0500, lng: -5.1833 },
  { name: "برشيد", province: "برشيد", lat: 33.2655, lng: -7.5875 },
  { name: "بركان", province: "بركان", lat: 34.9200, lng: -2.3197 },
  { name: "بريكشة", province: "وزان", lat: 35.1167, lng: -5.8500 },
  { name: "بني انصار", province: "الناظور", lat: 35.2667, lng: -2.9333 },
  { name: "بني بوعياش", province: "الحسيمة", lat: 35.1167, lng: -3.8333 },
  { name: "بني تجيت", province: "فكيك", lat: 32.1667, lng: -2.7500 },
  { name: "بني ملال", province: "بني ملال", lat: 32.3373, lng: -6.3498 },
  { name: "بهاليل", province: "صفرو", lat: 33.8667, lng: -4.8500 },
  { name: "بوجدور", province: "بوجدور", lat: 26.1258, lng: -14.4847 },
  { name: "بودينار", province: "الدريوش", lat: 35.0667, lng: -3.6000 },
  { name: "بوذنيب", province: "الرشيدية", lat: 31.9833, lng: -4.1333 },
  { name: "بوعرفة", province: "فكيك", lat: 32.5333, lng: -1.9667 },
  { name: "بوعنان", province: "فكيك", lat: 32.0333, lng: -3.0667 },
  { name: "بوفكران", province: "مكناس", lat: 33.7667, lng: -5.4833 },
  { name: "بومالن دادس", province: "تنغير", lat: 31.4333, lng: -6.0167 },
  { name: "بومية", province: "ميدلت", lat: 32.7167, lng: -5.1167 },
  { name: "بويزكارن", province: "كلميم", lat: 29.1833, lng: -10.0833 },
  { name: "بوزنيقة", province: "بن سليمان", lat: 33.7894, lng: -7.1597 },
  { name: "بوسكورة", province: "النواصر", lat: 33.4500, lng: -7.6500 },
  { name: "بيوكرى", province: "اشتوكة آيت باها", lat: 30.2167, lng: -9.3667 },
  { name: "تارودانت", province: "تارودانت", lat: 30.4703, lng: -8.8770 },
  { name: "تارجيست", province: "الحسيمة", lat: 34.9333, lng: -4.3167 },
  { name: "تازة", province: "تازة", lat: 34.2133, lng: -4.0103 },
  { name: "تازناخت", province: "ورزازات", lat: 30.5667, lng: -7.2000 },
  { name: "تاكلفت", province: "أزيلال", lat: 31.8833, lng: -6.3167 },
  { name: "تالوين", province: "تارودانت", lat: 30.5333, lng: -7.9167 },
  { name: "تامصلوحت", province: "الحوز", lat: 31.3500, lng: -8.1333 },
  { name: "تامسنا", province: "الصخيرات-تمارة", lat: 33.8333, lng: -6.9167 },
  { name: "تانانت", province: "أزيلال", lat: 31.7667, lng: -6.8833 },
  { name: "تاونات", province: "تاونات", lat: 34.5364, lng: -4.6397 },
  { name: "تاوريرت", province: "تاوريرت", lat: 34.4073, lng: -2.8973 },
  { name: "تبانت", province: "أزيلال", lat: 31.7500, lng: -6.4833 },
  { name: "تطوان", province: "تطوان", lat: 35.5889, lng: -5.3626 },
  { name: "تحناوت", province: "الحوز", lat: 31.3500, lng: -7.9500 },
  { name: "تزطوطين", province: "الناظور", lat: 34.9833, lng: -3.1000 },
  { name: "تفرسيت", province: "الدريوش", lat: 34.8667, lng: -3.5000 },
  { name: "تمارة", province: "الصخيرات-تمارة", lat: 33.9278, lng: -6.9061 },
  { name: "تمسمان", province: "الدريوش", lat: 35.0333, lng: -3.7167 },
  { name: "التمسية", province: "إنزكان آيت ملول", lat: 30.3500, lng: -9.4167 },
  { name: "تندرارة", province: "فكيك", lat: 32.0333, lng: -1.8500 },
  { name: "تنديت", province: "بولمان", lat: 33.0333, lng: -4.2333 },
  { name: "تنجداد", province: "الرشيدية", lat: 31.5167, lng: -5.0167 },
  { name: "تنغير", province: "تنغير", lat: 31.5147, lng: -5.5328 },
  { name: "تويسيت", province: "جرادة", lat: 34.4667, lng: -1.7667 },
  { name: "تونفيت", province: "ميدلت", lat: 32.4667, lng: -4.9667 },
  { name: "تيزنيت", province: "تيزنيت", lat: 29.6974, lng: -9.7316 },
  { name: "تيزي وسلي", province: "تازة", lat: 34.8833, lng: -3.7667 },
  { name: "تيسة", province: "تاونات", lat: 34.3333, lng: -4.6833 },
  { name: "تيفلت", province: "الخميسات", lat: 33.8947, lng: -6.3064 },
  { name: "تيكريكرة", province: "إفران", lat: 33.3667, lng: -5.2333 },
  { name: "تيمحضيت", province: "إفران", lat: 33.2333, lng: -5.0667 },
  { name: "تيط مليل", province: "مديونة", lat: 33.5500, lng: -7.4833 },
  { name: "تيداس", province: "الخميسات", lat: 33.4333, lng: -6.1667 },
  { name: "الجبهة", province: "شفشاون", lat: 35.2167, lng: -4.6667 },
  { name: "الجديدة", province: "الجديدة", lat: 33.2316, lng: -8.5007 },
  { name: "الجرف", province: "الرشيدية", lat: 31.4667, lng: -4.1500 },
  { name: "جرسيف", province: "جرسيف", lat: 34.2257, lng: -3.3635 },
  { name: "جرادة", province: "جرادة", lat: 34.3167, lng: -2.1667 },
  { name: "جرف الملحة", province: "سيدي قاسم", lat: 34.4833, lng: -5.5167 },
  { name: "جمعة سحيم", province: "آسفي", lat: 32.5167, lng: -8.8167 },
  { name: "حاسي بركان", province: "الناظور", lat: 34.8667, lng: -3.2833 },
  { name: "الحاجب", province: "الحاجب", lat: 33.6833, lng: -5.3667 },
  { name: "حد السوالم", province: "برشيد", lat: 33.4667, lng: -7.7000 },
  { name: "الحسيمة", province: "الحسيمة", lat: 35.2446, lng: -3.9317 },
  { name: "خريبكة", province: "خريبكة", lat: 32.8811, lng: -6.9063 },
  { name: "الخميسات", province: "الخميسات", lat: 33.8241, lng: -6.0661 },
  { name: "خنيفرة", province: "خنيفرة", lat: 32.9394, lng: -5.6675 },
  { name: "دار الكبداني", province: "الدريوش", lat: 35.0500, lng: -3.4167 },
  { name: "دار بوعزة", province: "النواصر", lat: 33.5333, lng: -7.7167 },
  { name: "دار ولد زيدوح", province: "الفقيه بن صالح", lat: 32.3333, lng: -6.8333 },
  { name: "دبدو", province: "تاوريرت", lat: 33.9833, lng: -2.9833 },
  { name: "دمنات", province: "أزيلال", lat: 31.7333, lng: -7.0000 },
  { name: "راس الماء", province: "الناظور", lat: 35.1333, lng: -2.4167 },
  { name: "راس الواد", province: "تاونات", lat: 34.4333, lng: -4.4833 },
  { name: "راس عصفور", province: "جرادة", lat: 34.7000, lng: -2.6500 },
  { name: "رباط الخير", province: "صفرو", lat: 33.8000, lng: -4.4333 },
  { name: "الرماني", province: "الخميسات", lat: 33.5333, lng: -6.6000 },
  { name: "زاوية الشيخ", province: "بني ملال", lat: 32.6500, lng: -5.9333 },
  { name: "زايدة", province: "ميدلت", lat: 32.8167, lng: -4.9667 },
  { name: "زايو", province: "الناظور", lat: 34.9333, lng: -2.7333 },
  { name: "زاكورة", province: "زاكورة", lat: 30.3314, lng: -5.8381 },
  { name: "الزاك", province: "آسا-الزاك", lat: 28.0000, lng: -10.2500 },
  { name: "زومي", province: "وزان", lat: 34.8167, lng: -5.3667 },
  { name: "سبع عيون", province: "الحاجب", lat: 33.8667, lng: -5.3667 },
  { name: "سبت جزولة", province: "آسفي", lat: 32.2833, lng: -8.9167 },
  { name: "سطات", province: "سطات", lat: 33.0010, lng: -7.6166 },
  { name: "سكورة", province: "ورزازات", lat: 31.0667, lng: -6.5500 },
  { name: "سلا", province: "سلا", lat: 34.0531, lng: -6.7985 },
  { name: "سلوان", province: "الناظور", lat: 35.0667, lng: -2.9667 },
  { name: "سيدي إفني", province: "سيدي إفني", lat: 29.3797, lng: -10.1720 },
  { name: "سيدي بطاش", province: "بن سليمان", lat: 33.4333, lng: -7.2333 },
  { name: "سيدي بنور", province: "سيدي بنور", lat: 32.6500, lng: -8.4333 },
  { name: "سيدي بوبكر", province: "جرادة", lat: 34.4833, lng: -2.2333 },
  { name: "سيدي حرازم", province: "فاس", lat: 34.0333, lng: -4.8667 },
  { name: "سيدي رحال", province: "قلعة السراغنة", lat: 31.6500, lng: -7.4667 },
  { name: "سيدي رحال الشاطئ", province: "برشيد", lat: 33.4833, lng: -7.9500 },
  { name: "سيدي سليمان", province: "سيدي سليمان", lat: 34.2648, lng: -5.9260 },
  { name: "سيدي سليمان شراعة", province: "بركان", lat: 34.9333, lng: -2.1833 },
  { name: "سيدي الطيبي", province: "القنيطرة", lat: 34.2667, lng: -6.6333 },
  { name: "سيدي علال البحراوي", province: "الخميسات", lat: 34.0000, lng: -6.5333 },
  { name: "سيدي علال التازي", province: "القنيطرة", lat: 34.5167, lng: -6.3167 },
  { name: "سيدي قاسم", province: "سيدي قاسم", lat: 34.2214, lng: -5.7078 },
  { name: "سيدي المختار", province: "شيشاوة", lat: 31.6833, lng: -8.4333 },
  { name: "سيدي يحيى زعير", province: "الصخيرات-تمارة", lat: 33.8333, lng: -6.9000 },
  { name: "سيدي يحيى الغرب", province: "سيدي سليمان", lat: 34.3000, lng: -6.3000 },
  { name: "شفشاون", province: "شفشاون", lat: 35.1688, lng: -5.2636 },
  { name: "الشماعية", province: "اليوسفية", lat: 32.0833, lng: -8.6500 },
  { name: "شيشاوة", province: "شيشاوة", lat: 31.5333, lng: -8.7667 },
  { name: "صفرو", province: "صفرو", lat: 33.8300, lng: -4.8300 },
  { name: "طاطا", province: "طاطا", lat: 29.7278, lng: -7.9736 },
  { name: "طانطان", province: "طانطان", lat: 28.4380, lng: -11.1033 },
  { name: "طنجة", province: "طنجة-أصيلة", lat: 35.7595, lng: -5.8340 },
  { name: "طهر السوق", province: "تاونات", lat: 34.5833, lng: -4.2333 },
  { name: "طرفاية", province: "طرفاية", lat: 27.9392, lng: -12.9264 },
  { name: "عرباوة", province: "القنيطرة", lat: 34.8833, lng: -5.9333 },
  { name: "عين بني مطهر", province: "جرادة", lat: 34.0167, lng: -2.0167 },
  { name: "عين تاوجطات", province: "الحاجب", lat: 33.9333, lng: -5.2167 },
  { name: "عين حرودة", province: "المحمدية", lat: 33.6333, lng: -7.4500 },
  { name: "عين الزهرة", province: "الدريوش", lat: 34.9167, lng: -3.2500 },
  { name: "عين الشقف", province: "مولاي يعقوب", lat: 33.9167, lng: -4.9667 },
  { name: "عين عودة", province: "الصخيرات-تمارة", lat: 33.8167, lng: -6.7833 },
  { name: "عين الله", province: "مولاي يعقوب", lat: 34.0500, lng: -5.1333 },
  { name: "عين اللوح", province: "إفران", lat: 33.2833, lng: -5.3500 },
  { name: "عين الركادة", province: "بركان", lat: 34.9333, lng: -2.2000 },
  { name: "غفساي", province: "تاونات", lat: 34.6500, lng: -4.9167 },
  { name: "فاس", province: "فاس", lat: 34.0331, lng: -5.0003 },
  { name: "فرخانة", province: "الناظور", lat: 35.2333, lng: -2.9500 },
  { name: "فكيك", province: "فكيك", lat: 32.0833, lng: -1.2333 },
  { name: "فم الجمعة", province: "أزيلال", lat: 31.9500, lng: -6.8833 },
  { name: "فم الحصن", province: "طاطا", lat: 29.0167, lng: -9.1667 },
  { name: "فم زكيد", province: "طاطا", lat: 30.0833, lng: -6.8667 },
  { name: "قرية أركمان", province: "الناظور", lat: 35.1000, lng: -2.7667 },
  { name: "قرية با محمد", province: "تاونات", lat: 34.4833, lng: -5.0667 },
  { name: "قنفودة", province: "جرادة", lat: 34.6167, lng: -2.4167 },
  { name: "قلعة السراغنة", province: "قلعة السراغنة", lat: 32.0485, lng: -7.4083 },
  { name: "قلعة مكونة", province: "تنغير", lat: 31.2333, lng: -6.1333 },
  { name: "كاسيطا", province: "الدريوش", lat: 34.9500, lng: -3.6500 },
  { name: "كتامة", province: "الحسيمة", lat: 34.9167, lng: -4.5667 },
  { name: "كرامة", province: "ميدلت", lat: 32.3333, lng: -4.8333 },
  { name: "كلميم", province: "كلميم", lat: 28.9833, lng: -10.0667 },
  { name: "كلميمة", province: "الرشيدية", lat: 31.6833, lng: -4.8833 },
  { name: "كيكو", province: "بولمان", lat: 33.5833, lng: -4.7500 },
  { name: "لعيون", province: "تاوريرت", lat: 34.5833, lng: -2.4833 },
  { name: "لعتمات", province: "بركان", lat: 34.5333, lng: -2.3500 },
  { name: "مراكش", province: "مراكش", lat: 31.6295, lng: -7.9811 },
  { name: "مرتيل", province: "المضيق-الفنيدق", lat: 35.6167, lng: -5.2667 },
  { name: "مريرت", province: "خنيفرة", lat: 33.1667, lng: -5.5667 },
  { name: "مرس الخير", province: "الصخيرات-تمارة", lat: 33.8500, lng: -6.8500 },
  { name: "مشرع بلقصيري", province: "سيدي قاسم", lat: 34.5667, lng: -5.9500 },
  { name: "مطالسة", province: "الدريوش", lat: 34.9333, lng: -3.5500 },
  { name: "مكناس", province: "مكناس", lat: 33.8935, lng: -5.5473 },
  { name: "مولاي إدريس زرهون", province: "مكناس", lat: 34.0500, lng: -5.5167 },
  { name: "مولاي بوعزة", province: "خنيفرة", lat: 33.6167, lng: -6.0167 },
  { name: "مولاي بوسلهام", province: "القنيطرة", lat: 34.8667, lng: -6.2833 },
  { name: "مولاي علي الشريف", province: "الرشيدية", lat: 31.2667, lng: -4.2667 },
  { name: "مولاي يعقوب", province: "مولاي يعقوب", lat: 34.0833, lng: -5.1833 },
  { name: "ميدلت", province: "ميدلت", lat: 32.6855, lng: -4.7451 },
  { name: "ميضار", province: "الدريوش", lat: 34.9333, lng: -3.5333 },
  { name: "مير اللفت", province: "سيدي إفني", lat: 29.5833, lng: -10.0333 },
  { name: "ميسور", province: "بولمان", lat: 33.0333, lng: -3.9833 },
  { name: "مقريصات", province: "وزان", lat: 34.9667, lng: -5.7500 },
  { name: "مداغ", province: "بركان", lat: 35.0333, lng: -2.3833 },
  { name: "مديونة", province: "مديونة", lat: 33.4500, lng: -7.5167 },
  { name: "معتركة", province: "فكيك", lat: 32.0167, lng: -2.8667 },
  { name: "واد أمليل", province: "تازة", lat: 34.2167, lng: -4.2667 },
  { name: "واد لاو", province: "تطوان", lat: 35.4500, lng: -5.1000 },
  { name: "وادي زم", province: "خريبكة", lat: 32.8628, lng: -6.5736 },
  { name: "والماس", province: "الخميسات", lat: 33.6000, lng: -6.0333 },
  { name: "واويزغت", province: "أزيلال", lat: 32.1667, lng: -6.3667 },
  { name: "وجدة", province: "وجدة-أنجاد", lat: 34.6814, lng: -1.9086 },
  { name: "ورززات", province: "ورزازات", lat: 30.9335, lng: -6.9370 },
  { name: "وزان", province: "وزان", lat: 34.7947, lng: -5.5819 },
  { name: "ويركان", province: "الحوز", lat: 31.1667, lng: -8.0333 },
  { name: "ويسلان", province: "مكناس", lat: 33.8833, lng: -5.4833 },
  { name: "آسفي", province: "آسفي", lat: 32.2994, lng: -9.2372 },
  { name: "بن جرير", province: "الرحامنة", lat: 32.2359, lng: -7.9538 },
  { name: "بن سليمان", province: "بن سليمان", lat: 33.6122, lng: -7.1211 },
  { name: "بن الطيب", province: "الدريوش", lat: 35.0667, lng: -3.4667 },
  { name: "بولمان", province: "بولمان", lat: 33.3625, lng: -4.7303 },
  { name: "البئر الجديد", province: "الجديدة", lat: 33.3667, lng: -8.0000 },
  { name: "البروج", province: "سطات", lat: 32.5000, lng: -7.1833 },
  { name: "أولاد برحيل", province: "تارودانت", lat: 30.6333, lng: -8.4667 },
  { name: "أولاد تايمة", province: "تارودانت", lat: 30.3983, lng: -9.2117 },
  { name: "أولاد عبو", province: "برشيد", lat: 33.1167, lng: -7.9333 },
  { name: "أولاد عياد", province: "الفقيه بن صالح", lat: 32.2000, lng: -6.8000 },
  { name: "أولوز", province: "تارودانت", lat: 30.7000, lng: -8.1500 },
  { name: "سوق الأربعاء الغرب", province: "القنيطرة", lat: 34.6833, lng: -6.0000 },
  { name: "سوق السبت أولاد النمة", province: "الفقيه بن صالح", lat: 32.2950, lng: -6.7017 },
  { name: "ستي فاطمة", province: "الحوز", lat: 31.2250, lng: -7.6750 },
  { name: "برادية", province: "الفقيه بن صالح", lat: 32.3167, lng: -6.7500 }
];

const MOROCCAN_CITIES = RAW_MOROCCAN_CITIES.sort((a, b) => a.name.localeCompare(b.name, "ar"));

const ADHKAR_DATA = {
  "الصباح": [
    { id: "m1", text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.", source: "رواه مسلم", target: 1 },
    { id: "m2", text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", source: "رواه مسلم", target: 100 },
    { id: "m3", text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.", source: "رواه البخاري ومسلم", target: 100 }
  ],
  "المساء": [
    { id: "e1", text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ.", source: "رواه مسلم", target: 1 },
    { id: "e2", text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.", source: "رواه مسلم", target: 3 }
  ],
  "النوم": [
    { id: "s1", text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.", source: "رواه البخاري", target: 1 },
    { id: "s2", text: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ.", source: "متفق عليه", target: 33 }
  ],
  "الاستيقاظ": [
    { id: "w1", text: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.", source: "رواه البخاري", target: 1 }
  ],
  "الأذان": [
    { id: "a1", text: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ.", source: "رواه البخاري", target: 1 }
  ],
  "الذهاب إلى المسجد": [
    { id: "q1", text: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي لِسَانِي نُورًا، وَاجْعَلْ فِي سَمْعِي نُورًا، وَاجْعَلْ فِي بَصَرِي نُورًا.", source: "رواه مسلم", target: 1 }
  ]
};

const STORAGE_KEY = "moroccan_prayer_alarm_state_v2";

const defaultState = {
  city: MOROCCAN_CITIES.find(c => c.name === "الدار البيضاء") || MOROCCAN_CITIES[0],
  locationMode: "manual",
  theme: "dark",
  dstPlusOne: true,
  calendarType: "hijri",
  dayOffset: 0,
  fajrAlarm: {
    enabled: false,
    offset: "0",
    customTime: "05:00",
    source: "app",
    appSound: "assets/salat.mp3",
    systemSound: "system_adhan",
    customFileName: "",
    customFileUrl: "",
    vibrate: true
  },
  adhkarCategory: "الصباح",
  tasbihCounts: {},
  compassAngle: 0
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(defaultState),
      ...parsed,
      city: { ...defaultState.city, ...(parsed.city || {}) },
      fajrAlarm: { ...defaultState.fajrAlarm, ...(parsed.fajrAlarm || {}) },
      tasbihCounts: parsed.tasbihCounts || {}
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function applyTheme() {
  let effective = state.theme;
  if (state.theme === "system") {
    effective = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  document.body.classList.toggle("theme-light", effective === "light");
  document.body.classList.toggle("theme-dark", effective !== "light");

  document.querySelectorAll(".theme-choices .chip-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.theme === state.theme);
  });
}

// حساب مواقيت الصلاة وفق معايير وزارة الأوقاف المغربية
// الفجر: 19° | العشاء: 17° | العصر: المذهب المالكي (معامل الظل 1.0)
// ملاحظة فلكية: الفارق الزمني بين شرق المغرب وغربه (مثل إساكن وبيوكرى) ناتج طبيعياً عن اختلاف خط الطول (4 دقائق لكل درجة طول)
function deg2rad(d) { return (d * Math.PI) / 180; }
function rad2deg(r) { return (r * 180) / Math.PI; }
function normHour(h) { return ((h % 24) + 24) % 24; }

function getJulianDay(date) {
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  const d = date.getDate();
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
}

function computeSolarTimes(date, lat, lng, utcOffsetHours) {
  const jd = getJulianDay(date);
  const d = jd - 2451545.0;

  const g = deg2rad((357.529 + 0.98560028 * d) % 360);
  const q = (280.459 + 0.98564736 * d) % 360;
  const L = deg2rad((q + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g)) % 360);
  const e = deg2rad(23.439 - 0.00000036 * d);

  const sinDecl = Math.sin(e) * Math.sin(L);
  const decl = Math.asin(sinDecl);

  let ra = rad2deg(Math.atan2(Math.cos(e) * Math.sin(L), Math.cos(L))) / 15;
  ra = normHour(ra);

  const eqTimeHours = normHour(q / 15 - ra);
  const eqTimeSignedHours = eqTimeHours > 12 ? eqTimeHours - 24 : eqTimeHours;

  const solarNoonHours = 12 + utcOffsetHours - lng / 15 - eqTimeSignedHours;
  const latRad = deg2rad(lat);

  function hourAngleHoursForZenith(zenithDeg) {
    const zRad = deg2rad(zenithDeg);
    const cosH =
      (Math.cos(zRad) - Math.sin(latRad) * Math.sin(decl)) /
      (Math.cos(latRad) * Math.cos(decl));
    const clamped = Math.max(-1, Math.min(1, cosH));
    return rad2deg(Math.acos(clamped)) / 15;
  }

  // المذهب المالكي: معامل الظل = 1.0
  const shadowFactor = 1.0;
  const cotAsr = shadowFactor + Math.tan(Math.abs(latRad - decl));
  const asrAltRad = Math.atan(1 / cotAsr);
  const asrZenithDeg = 90 - rad2deg(asrAltRad);

  const fajrH = hourAngleHoursForZenith(109);
  const sunriseH = hourAngleHoursForZenith(90.833);
  const asrH = hourAngleHoursForZenith(asrZenithDeg);
  const sunsetH = hourAngleHoursForZenith(90.833);
  const ishaH = hourAngleHoursForZenith(107);

  // تقريب متوافق مع الحصة الشهرية لوزارة الأوقاف المغربية
  return [
    { key: "fajr", name: "الفجر", minutes: Math.round((solarNoonHours - fajrH) * 60) },
    { key: "sunrise", name: "الشروق", minutes: Math.floor((solarNoonHours - sunriseH) * 60) },
    { key: "dhuhr", name: "الظهر", minutes: Math.ceil(solarNoonHours * 60) },
    { key: "asr", name: "العصر", minutes: Math.round((solarNoonHours + asrH) * 60) },
    { key: "maghrib", name: "المغرب", minutes: Math.ceil((solarNoonHours + sunsetH) * 60) },
    { key: "isha", name: "العشاء", minutes: Math.round((solarNoonHours + ishaH) * 60) }
  ];
}

function formatMinutesToHHMM(totalMin) {
  const m = ((Math.round(totalMin) % 1440) + 1440) % 1440;
  const hh = String(Math.floor(m / 60)).padStart(2, "0");
  const mm = String(m % 60).padStart(2, "0");
  return `${hh}:${mm}`;
}

function formatSecondsToHMS(sec) {
  const s = Math.max(0, Math.floor(sec));
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const r = String(s % 60).padStart(2, "0");
  return `${h}:${m}:${r}`;
}

function getEffectiveDate() {
  const d = new Date();
  d.setDate(d.getDate() + state.dayOffset);
  return d;
}

function getUtcOffset() {
  return state.dstPlusOne ? 1 : 0;
}

function renderDateAndLocation() {
  const effDate = getEffectiveDate();
  const provinceText = state.city.province ? ` (إقليم ${state.city.province})` : "";
  document.getElementById("currentCityLabel").textContent = `${state.city.name}${provinceText}`;
  const tzLabel = state.dstPlusOne ? "+1" : "+0";
  const modeLabel = state.locationMode === "gps" ? "GPS" : "يدوي";
  document.getElementById("currentModeBadge").textContent = `الأوقاف المغربية (${modeLabel} • GMT${tzLabel})`;

  const calBtn = document.getElementById("btnToggleCalendar");
  if (state.calendarType === "hijri") {
    calBtn.textContent = "هجري";
    const hijriStr = new Intl.DateTimeFormat("ar-MA-u-ca-islamic", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(effDate);
    document.getElementById("dateDisplay").textContent = hijriStr;
  } else {
    calBtn.textContent = "ميلادي";
    const gregStr = new Intl.DateTimeFormat("ar-MA", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(effDate);
    document.getElementById("dateDisplay").textContent = gregStr;
  }
}

function renderPrayersAndCounters() {
  const now = new Date();
  const effDate = getEffectiveDate();
  const prayers = computeSolarTimes(effDate, state.city.lat, state.city.lng, getUtcOffset());

  const fajrItem = prayers.find(p => p.key === "fajr");
  if (fajrItem) {
    document.getElementById("fajrTimeInfo").textContent = `وقت الفجر المحسوب: ${formatMinutesToHHMM(fajrItem.minutes)}`;
  }

  const nowSec = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const events = prayers.map(p => ({
    ...p,
    sec: Math.round(p.minutes * 60)
  }));

  let nextEvent = events.find(e => e.sec > nowSec);
  if (!nextEvent) {
    nextEvent = { ...events[0], sec: events[0].sec + 86400 };
  }

  let prevEvent = null;
  for (let i = events.length - 1; i >= 0; i--) {
    if (events[i].sec <= nowSec) {
      prevEvent = events[i];
      break;
    }
  }
  if (!prevEvent) {
    const last = events[events.length - 1];
    prevEvent = { ...last, sec: last.sec - 86400 };
  }

  const nextLabelPrefix = nextEvent.key === "sunrise" ? "موعد الشروق" : `صلاة ${nextEvent.name}`;
  const prevLabelPrefix = prevEvent.key === "sunrise" ? "وقت الشروق" : `صلاة ${prevEvent.name}`;

  document.getElementById("countdownGreenLabel").textContent = `باقي على ${nextLabelPrefix}`;
  document.getElementById("countdownGreenValue").textContent = formatSecondsToHMS(nextEvent.sec - nowSec);

  document.getElementById("countdownRedLabel").textContent = `انقضى من ${prevLabelPrefix}`;
  document.getElementById("countdownRedValue").textContent = formatSecondsToHMS(nowSec - prevEvent.sec);

  const grid = document.getElementById("prayersGrid");
  grid.innerHTML = "";
  events.forEach(ev => {
    const isNext = ev.key === nextEvent.key;
    const card = document.createElement("div");
    card.className = `prayer-card ${isNext ? "next-prayer" : ""}`;
    card.innerHTML = `
      <div class="prayer-name">${ev.name}</div>
      <div class="prayer-time">${formatMinutesToHHMM(ev.minutes)}</div>
      ${isNext ? `<span class="next-badge">القادمة</span>` : ""}
    `;
    grid.appendChild(card);
  });
}

function calculateQiblaBearing(lat, lng) {
  const kaabaLat = deg2rad(21.4225);
  const uLat = deg2rad(lat);
  const dLng = deg2rad(39.8262 - lng);
  const y = Math.sin(dLng);
  const x = Math.cos(uLat) * Math.tan(kaabaLat) - Math.sin(uLat) * Math.cos(dLng);
  return ((rad2deg(Math.atan2(y, x)) % 360) + 360) % 360;
}

function renderQibla() {
  const qiblaDeg = calculateQiblaBearing(state.city.lat, state.city.lng);
  document.getElementById("qiblaCityInfo").textContent = `المدينة: ${state.city.name}`;
  document.getElementById("qiblaAngleText").textContent = `${Math.round(qiblaDeg)}° من الشمال نحو القبلة`;
  const rotation = (qiblaDeg + state.compassAngle) % 360;
  document.getElementById("compassDial").style.transform = `rotate(${rotation}deg)`;
}

function renderAdhkarCategories() {
  const wrap = document.getElementById("adhkarCategories");
  wrap.innerHTML = "";
  Object.keys(ADHKAR_DATA).forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `cat-pill ${state.adhkarCategory === cat ? "active" : ""}`;
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      state.adhkarCategory = cat;
      saveState();
      renderAdhkarCategories();
      renderAdhkarList();
    });
    wrap.appendChild(btn);
  });
}

function renderAdhkarList() {
  const listEl = document.getElementById("adhkarList");
  listEl.innerHTML = "";
  const items = ADHKAR_DATA[state.adhkarCategory] || [];

  items.forEach(item => {
    const count = state.tasbihCounts[item.id] || 0;
    const isDone = count >= item.target;
    const card = document.createElement("div");
    card.className = "dhikr-card";
    card.innerHTML = `
      <div class="dhikr-text">${item.text}</div>
      <div class="dhikr-source">المصدر: ${item.source} • العدد المطلوب: ${item.target}</div>
      <div class="dhikr-actions">
        <button class="tasbih-btn ${isDone ? "done" : ""}" data-id="${item.id}" data-target="${item.target}">
          تسبيح: ${count} / ${item.target}
        </button>
        <button class="reset-btn" data-reset="${item.id}">تصفير</button>
      </div>
    `;
    listEl.appendChild(card);
  });

  listEl.querySelectorAll(".tasbih-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const target = Number(btn.dataset.target);
      const curr = state.tasbihCounts[id] || 0;
      if (curr < target) {
        state.tasbihCounts[id] = curr + 1;
        saveState();
        renderAdhkarList();
      }
    });
  });

  listEl.querySelectorAll(".reset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.reset;
      state.tasbihCounts[id] = 0;
      saveState();
      renderAdhkarList();
    });
  });
}

function renderCitiesList(filterText = "") {
  const container = document.getElementById("citiesButtonsList");
  const query = filterText.trim().toLowerCase();
  const filtered = query
    ? MOROCCAN_CITIES.filter(c =>
        c.name.toLowerCase().includes(query) ||
        (c.province && c.province.toLowerCase().includes(query))
      )
    : MOROCCAN_CITIES;

  container.innerHTML = "";
  filtered.forEach(city => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `city-choice-btn ${state.city.name === city.name ? "selected" : ""}`;
    btn.innerHTML = `<span>${city.name}</span><small>${city.province || ""}</small>`;
    btn.addEventListener("click", () => {
      state.city = city;
      state.locationMode = "manual";
      saveState();
      renderDateAndLocation();
      renderPrayersAndCounters();
      renderQibla();
      // يحفظ المدينة ويعود إلى نافذة الإعدادات العامة وليس إلى التبويب الرئيسي
      document.getElementById("gpsStatusText").textContent = `تم اختيار: ${city.name} (إقليم ${city.province})`;
      closeModal("cityPickerModal");
      openModal("settingsModal");
    });
    container.appendChild(btn);
  });
}

function openDrawer() {
  document.getElementById("drawerBackdrop").style.display = "block";
  requestAnimationFrame(() => document.getElementById("sideDrawer").classList.add("open"));
}

function closeDrawer() {
  document.getElementById("sideDrawer").classList.remove("open");
  setTimeout(() => {
    document.getElementById("drawerBackdrop").style.display = "none";
  }, 240);
}

function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function playSelectedSound() {
  const player = document.getElementById("audioPlayer");
  const srcType = state.fajrAlarm.source;
  player.pause();
  player.currentTime = 0;

  if (srcType === "app") {
    player.src = state.fajrAlarm.appSound;
    player.play().catch(() => {});
  } else if (srcType === "file" && state.fajrAlarm.customFileUrl) {
    player.src = state.fajrAlarm.customFileUrl;
    player.play().catch(() => {});
  } else {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = state.fajrAlarm.systemSound === "system_adhan" ? 528 : 660;
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch {}
  }

  if (state.fajrAlarm.vibrate && navigator.vibrate) {
    navigator.vibrate([250, 120, 250]);
  }
}

function bindEvents() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
    });
  });

  document.querySelectorAll(".sub-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".sub-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".subtab-content").forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`subtab-${btn.dataset.subtab}`).classList.add("active");
    });
  });

  document.getElementById("btnToggleCalendar").addEventListener("click", () => {
    state.calendarType = state.calendarType === "hijri" ? "gregorian" : "hijri";
    saveState();
    renderDateAndLocation();
  });

  document.getElementById("btnDatePlus").addEventListener("click", () => {
    state.dayOffset += 1;
    saveState();
    renderDateAndLocation();
    renderPrayersAndCounters();
  });

  document.getElementById("btnDateMinus").addEventListener("click", () => {
    state.dayOffset -= 1;
    saveState();
    renderDateAndLocation();
    renderPrayersAndCounters();
  });

  document.getElementById("btnOpenDrawer").addEventListener("click", openDrawer);
  document.getElementById("btnCloseDrawer").addEventListener("click", closeDrawer);
  document.getElementById("drawerBackdrop").addEventListener("click", closeDrawer);

  document.getElementById("menuSettings").addEventListener("click", () => {
    closeDrawer();
    openModal("settingsModal");
  });

  document.getElementById("menuAbout").addEventListener("click", () => {
    closeDrawer();
    openModal("aboutModal");
  });

  document.getElementById("menuShare").addEventListener("click", async () => {
    closeDrawer();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "منبه الصلاة المغربي - Moroccan Prayer Alarm",
          text: "تطبيق منبه الصلاة المغربي بمواقيت وزارة الأوقاف والمنبه والقبلة والأذكار."
        });
      } catch {}
    } else {
      alert("خيارات المشاركة متاحة على هاتفك عند فتح التطبيق على أندرويد.");
    }
  });

  document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", () => closeModal(btn.dataset.close));
  });

  document.getElementById("btnOpenDua").addEventListener("click", () => openModal("duaModal"));
  document.getElementById("btnConfirmDua").addEventListener("click", () => closeModal("duaModal"));

  document.querySelectorAll(".theme-choices .chip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.theme = btn.dataset.theme;
      saveState();
      applyTheme();
    });
  });

  const dstToggle = document.getElementById("dstPlusOneToggle");
  dstToggle.checked = state.dstPlusOne;
  document.getElementById("dstStatusHint").textContent = state.dstPlusOne
    ? "مفعل حالياً: +1 (إلغاء التفعيل يجعل التوقيت +0)"
    : "معطل حالياً: +0 (تفعيل الزر يجعل التوقيت +1)";

  dstToggle.addEventListener("change", () => {
    state.dstPlusOne = dstToggle.checked;
    saveState();
    document.getElementById("dstStatusHint").textContent = state.dstPlusOne
      ? "مفعل حالياً: +1 (إلغاء التفعيل يجعل التوقيت +0)"
      : "معطل حالياً: +0 (تفعيل الزر يجعل التوقيت +1)";
    renderDateAndLocation();
    renderPrayersAndCounters();
  });

  // فتح اختيار المدينة وزر الرجوع إلى الإعدادات
  document.getElementById("btnManualCity").addEventListener("click", () => {
    closeModal("settingsModal");
    openModal("cityPickerModal");
    const input = document.getElementById("citySearchInput");
    input.value = "";
    renderCitiesList("");
    setTimeout(() => input.focus(), 50);
  });

  document.getElementById("btnBackToSettings").addEventListener("click", () => {
    closeModal("cityPickerModal");
    openModal("settingsModal");
  });

  document.getElementById("citySearchInput").addEventListener("input", e => {
    renderCitiesList(e.target.value);
    e.target.focus();
  });

  document.getElementById("btnAutoGps").addEventListener("click", () => {
    const statusEl = document.getElementById("gpsStatusText");
    if (!navigator.geolocation) {
      statusEl.textContent = "حساس GPS غير مدعوم في هذا المتصفح.";
      return;
    }
    statusEl.textContent = "جارٍ تحديد الموقع عبر GPS...";
    navigator.geolocation.getCurrentPosition(
      pos => {
        state.city = {
          name: "موقعي الحالي (GPS)",
          province: "تحديد تلقائي",
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        state.locationMode = "gps";
        saveState();
        statusEl.textContent = "تم تحديد الموقع بدقة عبر GPS.";
        renderDateAndLocation();
        renderPrayersAndCounters();
        renderQibla();
      },
      () => {
        statusEl.textContent = "تعذر الوصول إلى GPS، يمكنك اختيار مدينتك يدوياً.";
      }
    );
  });

  const alarmEnabledEl = document.getElementById("fajrAlarmEnabled");
  alarmEnabledEl.checked = state.fajrAlarm.enabled;
  alarmEnabledEl.addEventListener("change", () => {
    state.fajrAlarm.enabled = alarmEnabledEl.checked;
    saveState();
  });

  document.querySelectorAll("#fajrPresets .chip-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.offset === state.fajrAlarm.offset);
    btn.addEventListener("click", () => {
      document.querySelectorAll("#fajrPresets .chip-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.fajrAlarm.offset = btn.dataset.offset;
      document.getElementById("customTimeBox").style.display = btn.dataset.offset === "custom" ? "flex" : "none";
      saveState();
    });
  });

  const customTimeInput = document.getElementById("customFajrTime");
  customTimeInput.value = state.fajrAlarm.customTime;
  document.getElementById("customTimeBox").style.display = state.fajrAlarm.offset === "custom" ? "flex" : "none";
  customTimeInput.addEventListener("change", () => {
    state.fajrAlarm.customTime = customTimeInput.value;
    saveState();
  });

  document.querySelectorAll('input[name="soundSource"]').forEach(radio => {
    radio.checked = radio.value === state.fajrAlarm.source;
    radio.addEventListener("change", () => {
      state.fajrAlarm.source = radio.value;
      document.getElementById("appSoundsBox").style.display = radio.value === "app" ? "block" : "none";
      document.getElementById("systemSoundBox").style.display = radio.value === "system" ? "block" : "none";
      document.getElementById("customFileBox").style.display = radio.value === "file" ? "block" : "none";
      saveState();
    });
  });

  document.getElementById("appSoundsBox").style.display = state.fajrAlarm.source === "app" ? "block" : "none";
  document.getElementById("systemSoundBox").style.display = state.fajrAlarm.source === "system" ? "block" : "none";
  document.getElementById("customFileBox").style.display = state.fajrAlarm.source === "file" ? "block" : "none";

  const appSoundSelect = document.getElementById("appSoundSelect");
  appSoundSelect.value = state.fajrAlarm.appSound;
  appSoundSelect.addEventListener("change", () => {
    state.fajrAlarm.appSound = appSoundSelect.value;
    saveState();
  });

  const systemSoundSelect = document.getElementById("systemSoundSelect");
  systemSoundSelect.value = state.fajrAlarm.systemSound;
  systemSoundSelect.addEventListener("change", () => {
    state.fajrAlarm.systemSound = systemSoundSelect.value;
    saveState();
  });

  const fileInput = document.getElementById("customAudioFile");
  if (state.fajrAlarm.customFileName) {
    document.getElementById("selectedFileName").textContent = `الملف المختار: ${state.fajrAlarm.customFileName}`;
  }
  fileInput.addEventListener("change", () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    state.fajrAlarm.customFileName = file.name;
    state.fajrAlarm.customFileUrl = URL.createObjectURL(file);
    document.getElementById("selectedFileName").textContent = `الملف المختار: ${file.name}`;
    saveState();
  });

  const vibEl = document.getElementById("vibrateEnabled");
  vibEl.checked = state.fajrAlarm.vibrate;
  vibEl.addEventListener("change", () => {
    state.fajrAlarm.vibrate = vibEl.checked;
    saveState();
  });

  document.getElementById("btnPreviewSound").addEventListener("click", playSelectedSound);

  document.getElementById("btnRotateTest").addEventListener("click", () => {
    state.compassAngle = (state.compassAngle + 30) % 360;
    saveState();
    renderQibla();
  });

  document.getElementById("btnCompassSensor").addEventListener("click", async () => {
    if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
      try {
        const perm = await DeviceOrientationEvent.requestPermission();
        if (perm !== "granted") return;
      } catch {}
    }
    window.addEventListener("deviceorientation", event => {
      const heading = event.webkitCompassHeading || (360 - (event.alpha || 0));
      if (typeof heading === "number" && !Number.isNaN(heading)) {
        state.compassAngle = -heading;
        renderQibla();
      }
    });
  });
}

applyTheme();
bindEvents();
renderDateAndLocation();
renderPrayersAndCounters();
renderQibla();
renderAdhkarCategories();
renderAdhkarList();
setInterval(renderPrayersAndCounters, 1000);
function scheduleNativeFajrAlarm(hour, minute, label = "منبه الفجر") {
  const payload = {
    hour: Number(hour),
    minute: Number(minute),
    label: label
  };

  if (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
    if (window.MoroccoAlarmBridge && typeof window.MoroccoAlarmBridge.setAlarm === "function") {
      window.MoroccoAlarmBridge.setAlarm(JSON.stringify(payload));
      return true;
    }
  }

  console.log("معاينة المنبه على الويب:", payload);
  return false;
}