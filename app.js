
/* ===== Original inline script 1 ===== */

    const activeSection = { id: 'home' };
    function showSection(id) {
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        const el = document.getElementById(id);
        if (el) { el.classList.add('active'); activeSection.id = id; window.scrollTo({ top: 0, behavior: 'smooth' }); }
        document.querySelectorAll('#nav-list button').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${id}'`));
        });
    }
    function toggleMobileNav() {
        const nav = document.getElementById('mobileNav');
        const btn = document.getElementById('hamburger');
        nav.classList.toggle('open');
        btn.classList.toggle('open');
    }
    function closeMobileNav() {
        document.getElementById('mobileNav').classList.remove('open');
        document.getElementById('hamburger').classList.remove('open');
    }
    window.addEventListener('scroll', () => {
        document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
    });
    document.addEventListener('DOMContentLoaded', () => { showSection('home'); });


/* ===== Original inline script 2 ===== */

(function () {
    /* ═══ إعدادات: عدّل هنا ═══ */
    const CONFIG = {
        phone: '201023278000',
        minOrder: 0,

        // ⏰ ساعات العمل (خليها enabled:true لتفعيلها). لو الإغلاق بعد منتصف الليل اكتب close أصغر من open
        hours: { enabled: false, open: '12:00', close: '02:00', tz: 'Africa/Cairo' },

        // 🌐 رابط سكريبت Google (Apps Script) للتحقق من الكوبون لأول طلب من أي جهاز. سيبه فاضي = تحقق على نفس الجهاز بس
        couponApi: 'https://script.google.com/macros/s/AKfycbzoNNPfliuE1Cp87iylF0GtJGxrYSMRfnatHjIBHefLAwIzvv8T4BQzKfFYp_G2OALr/exec',

        // 🎟️ الكوبونات: percent = نسبة %, fixed = مبلغ ثابت, min = أقل مجموع للطلب (اختياري)
        coupons: {
            'RED20':   { type: 'percent', value: 20, firstOrderOnly: true },
            'WELCOME': { type: 'fixed',   value: 20, min: 150, firstOrderOnly: true }
        },

        areas: [
            { name: 'الطالبية التأمين الصحي', fee: 55 },
            { name: 'العمرانية الشرقية', fee: 65 },
            { name: 'العمرانية الغربية', fee: 55 },
            { name: 'المحولات - الهرم', fee: 45 },
            { name: 'المريوطية - هرم 1', fee: 35 },
            { name: 'المريوطية - هرم 2', fee: 45 },
            { name: 'المريوطية - هرم 3', fee: 55 },
            { name: 'المساحة - فيصل', fee: 50 },
            { name: 'اللبيني - فيصل', fee: 35 },
            { name: 'اللبيني - هرم', fee: 40 },
            { name: 'ترعة عبد العال', fee: 55 },
            { name: 'حدائق الأهرام - بوابة أولى', fee: 55 },
            { name: 'حدائق الأهرام - بوابة ثانية جديدة', fee: 55 },
            { name: 'حدائق الأهرام - بوابة ثالثة (ثانية قديمة)', fee: 55 },
            { name: 'حدائق الأهرام - بوابة رابعة', fee: 65 },
            { name: 'حدائق الأهرام - مساكن الضباط', fee: 55 },
            { name: 'شارع العمدة', fee: 45 },
            { name: 'شارع المستشفى', fee: 30 },
            { name: 'شارع سهل حمزة', fee: 35 },
            { name: 'فيصل - أول فيصل', fee: 55 },
            { name: 'فيصل - آخر فيصل', fee: 35 },
            { name: 'فيصل - التعاون 2', fee: 40 },
            { name: 'فيصل - الطالبية', fee: 45 },
            { name: 'فيصل - الطوابق', fee: 35 },
            { name: 'فيصل - الطوابق التاني', fee: 35 },
            { name: 'فيصل - العشرين 1', fee: 50 },
            { name: 'فيصل - الكوم الأخضر', fee: 35 },
            { name: 'فيصل - الملكة نازلي', fee: 50 },
            { name: 'فيصل - المريوطية 2', fee: 35 },
            { name: 'فيصل - المريوطية 3', fee: 30 },
            { name: 'فيصل - المطبعة 2', fee: 45 },
            { name: 'فيصل - حسن محمد', fee: 40 },
            { name: 'فيصل - حسن محمد 2', fee: 40 },
            { name: 'فيصل - طريق المنشية البكاري', fee: 40 },
            { name: 'فيصل - كعبيش', fee: 35 },
            { name: 'فيصل - كوم بكار 2', fee: 40 },
            { name: 'الهرم - ترسا', fee: 40 },
            { name: 'الهرم - التعاون', fee: 40 },
            { name: 'الهرم - الثلاثيني 2', fee: 40 },
            { name: 'الهرم - العروبة', fee: 45 },
            { name: 'الهرم - العريش', fee: 30 },
            { name: 'الهرم - المجزر الآلي', fee: 45 },
            { name: 'الهرم - المنصورية', fee: 45 },
            { name: 'الهرم - ويمبي', fee: 45 },
            { name: 'الهرم - تربية رياضية', fee: 50 },
            { name: 'الهرم - مشعل', fee: 40 },
            { name: 'الهرم - نزلة السمان', fee: 45 },
            { name: 'الهرم - الرماية', fee: 45 }
        ]
    };

    /* ═══ الإضافات — ضع رابط الصورة في img (لو فاضي بيظهر الإيموجي) ═══ */
    const EXTRA_GROUPS = [
        { key: 'meat',   title: '🍗 قطع الدجاج واللحوم' },
        { key: 'cheese', title: '🧀 الجبن والخضار والإضافات' },
        { key: 'bread',  title: '🍞 الخبز' },
        { key: 'combo',  title: '🔥 كومبو' }
    ];
    const EXTRAS = [
        { id:'strips',       group:'meat',   name:'قطعة استربس',    en:'Strips Piece',     price:35, emoji:'🍗', img:'https://i.ibb.co/NgmmHJ3z/image.jpg' },
        { id:'zinger',       group:'meat',   name:'قطعة زينجر',     en:'Zinger Piece',     price:55, emoji:'🍗', img:'https://i.ibb.co/My6D5s22/image.jpg' },
        { id:'chicken',      group:'meat',   name:'قطعة دجاج',      en:'Chicken Piece',    price:65, emoji:'🍗', img:'https://i.ibb.co/ZzXg9KkX/image.jpg' },
        { id:'burger',       group:'meat',   name:'قطعة برجر',      en:'Burger Piece',     price:55, emoji:'🥩', img:'https://i.ibb.co/5xRM244V/image.jpg' },
        { id:'beefbacon',    group:'meat',   name:'بيف بيكون',      en:'Beef Bacon',       price:25, emoji:'🥓', img:'https://i.ibb.co/PZdQm9jw/image.png' },
        { id:'smokedturkey', group:'meat',   name:'تركي مدخن',      en:'Smoked Turkey',    price:20, emoji:'🦃', img:'https://i.ibb.co/4g0SJMSd/image.png' },
        { id:'roastbeef',    group:'meat',   name:'روست بيف',       en:'Roast Beef',       price:20, emoji:'🥩', img:'https://i.ibb.co/C5zK0hhW/image.png' },

        { id:'cheese',       group:'cheese', name:'جبنة أمريكي',    en:'American Cheese',  price:10, emoji:'🧀', img:'https://i.ibb.co/0Vf0c1vr/image.png' },
        { id:'mozzarella',   group:'cheese', name:'قطعة موتزاريلا', en:'Mozzarella Piece', price:15, emoji:'🧀', img:'https://i.postimg.cc/HxXpCHnt/5.jpg' },
        { id:'cheddar',      group:'cheese', name:'قطعة شيدر',      en:'Cheddar Piece',    price:15, emoji:'🧀', img:'https://i.postimg.cc/4ywRJ3gz/5.jpg' },
        { id:'mushroom',     group:'cheese', name:'مشروم',          en:'Mushroom',         price:20, emoji:'🍄', img:'https://i.ibb.co/0jp3zbP9/image.png' },
        { id:'jalapeno',     group:'cheese', name:'هالبينو',        en:'Jalapeno',         price:10, emoji:'🌶️', img:'https://i.ibb.co/q3WCv2CN/jalipino.jpg' },
        { id:'pickles',      group:'cheese', name:'خيار مخلل',      en:'Pickles',          price:10, emoji:'🥒', img:'https://i.ibb.co/B27tHnLV/picles.png' },

        { id:'bun',          group:'bread',  name:'خبز كايزر',      en:'Bun',              price:5,  emoji:'🍞', img:'https://i.ibb.co/hR7dVyN5/image.jpg' },
        { id:'supreme',      group:'bread',  name:'خبز سوبريم',     en:'Supreme Bread',    price:15, emoji:'🥖', img:'https://i.ibb.co/rfQZ3fQf/image.png' },
        { id:'brioche',      group:'bread',  name:'خبز بريوش',      en:'Brioche Bread',    price:15, emoji:'🍞', img:'https://i.ibb.co/m5DKp2wT/images.jpg' },
        { id:'tortilla',     group:'bread',  name:'خبز تورتيلا',    en:'Tortilla Bread',   price:15, emoji:'🫓', img:'https://i.ibb.co/fz3jNJjK/image.jpg' },

        { id:'combo',        group:'combo',  name:'كومبو (بطاطس + مشروب)', en:'Combo',     price:50, emoji:'🍟', img:'https://i.ibb.co/gBfWM1B/Combo.png' }
    ];
    const getExtra = id => EXTRAS.find(e => e.id === id);

    /* ═══ الصوصات — hot:true = سبايسي. ضع رابط الصورة في img (لو فاضي بيظهر الإيموجي) ═══ */
    const SAUCES = [
        { name:'رانش كب',            en:'Ranch Cup',            price:20, hot:false, img:'https://i.ibb.co/6JWXhXkT/ransh.png' },
        { name:'مايونيز كب',         en:'Mayonnaise Cup',       price:25, hot:false, img:'https://i.ibb.co/Sw473tFD/image.jpg' },
        { name:'بيبر مايونيز كب',    en:'Pepper Mayonnaise Cup',price:25, hot:false, img:'https://i.ibb.co/WvCM8hTp/image.png' },
        { name:'ريد روستر صوص',      en:'Redrooster Sauce',     price:30, hot:false, img:'https://i.ibb.co/SDRwZhvr/image.png' },
        { name:'باربكيو صوص',        en:'Barbecue Sauce',       price:20, hot:false, img:'https://i.ibb.co/21bWFJJn/image.png' },
        { name:'تومية',              en:'Tomia',                price:15, hot:false, img:'https://i.ibb.co/wZYNK0hj/image.jpg' },
        { name:'تكساس كب',           en:'Texas Cup',            price:25, hot:false, img:'https://i.ibb.co/4wbRHXdF/image.jpg' },
        { name:'ثاوزند أيلاند',      en:'Thousand Island',      price:20, hot:false, img:'https://i.ibb.co/FbSQppY7/image.jpg' },
        { name:'مانجو صوص',          en:'Mango Sauce',          price:25, hot:false, img:'' },

        { name:'شيلي مايونيز كب',    en:'Chili Mayonnaise Cup', price:25, hot:true,  img:'' },
        { name:'تايجر كب',           en:'Tiger Cup',            price:20, hot:true,  img:'' },
        { name:'سويت تشيلي',         en:'Sweet Chili',          price:20, hot:true,  img:'https://i.ibb.co/0y1QbFhD/image.png' },
        { name:'ديناميت صوص',        en:'Dynamite Sauce',       price:25, hot:true,  img:'https://i.ibb.co/Ps9FLRgS/image.png' }
    ];
    // أقسام مفيهاش اختيار "حار/عادي"
    const NO_SPICE_SECTIONS = ['extras', 'sauces', 'drinks', 'appetizers', 'beef-sandwiches', 'kids-meals'];
      const NO_CHIPS_SECTIONS = ['extras', 'sauces', 'drinks'];
    const QUICK_CHIPS = ['بدون صوص', 'بدون خضار', 'بدون مخلل', 'بدون بصل', 'بدون جبنة', 'صوص زيادة'];
    const NASH_LEVELS = [
        { v: 'Mild',  t: '🟢 Mild — خفيف' },
        { v: 'Hot',   t: '🟠 Hot — حار' },
        { v: 'Extra', t: '🔴 Extra — حار جداً' }
    ];

    const $ = id => document.getElementById(id);
    const fmt = n => n + ' ج.م';
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const toEn = s => String(s).replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
    const LS = {
        get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } },
        set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
    };
    // تطبيع النص العربي للبحث (يتجاهل التشكيل والهمزات والتاء المربوطة)
       const norm = s => toEn(String(s)).toLowerCase()
        .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
        .replace(/[أإآ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه')
        .replace(/\s+/g, ' ').trim();

    // أصناف بيف داخل أقسام تانية (بالاسم)
    const NO_SPICE_NAMES = ['كومبو الروقان', 'عرض الفسحة 3'].map(s => norm(s));
    let cart = LS.get('rr_cart', []);
    let coupon = null; // { code, def }
    /* ═══ اختيارات العروض ═══ */
    const CHICKEN  = ['تركي ميلت', 'وايلد مشروم', 'تشيلي جان', 'سموكي تشيكن', 'مانجو فاير']; // كل الدجاج عدا المايتي زينجر
    const BEEF     = ['كلاسيك كينج', 'مشروم كراون', 'بيكون ستار', 'ريد وار', 'رويال بايت', 'ميكسكانو']; // عدا تاستي لورد وبيف تاشيو
    const TWISTER  = ['تويستر تشيكن', 'فاهيتا'];
    const SUPREME  = ['زينجر سوبريم', 'فيليه سوبريم'];
    const CHICKEN_SUP = CHICKEN.concat(SUPREME); // ساندوتشات الدجاج + السوبريم
    const RIZO = ['ريزو استربس باربكيو', 'ريزو فاهيتا باربكيو', 'ريزو استربس سبايسي تايجر', 'ريزو فاهيتا سبايسي'];
    const CHOICES_RAW = {
        'كلاسيك الروقان':   [{ title: 'ساندوتش التشيكن', options: CHICKEN_SUP }, { title: 'اختار كول سلو أو مشروب', options: ['كول سلو', 'مشروب'] }],
        'كومبو الروقان':    [{ title: 'ساندوتش البرجر',  options: BEEF }],
        'عرض الروقان 1':    [{ title: 'اختار نوع الدجاج', options: ['2 قطعة دجاج', '4 قطعة استربس'] }],
        'عرض الروقان 2':    [{ title: 'ساندوتش التشيكن', options: CHICKEN_SUP }],
        'عرض الروقان 3':    [{ title: 'التويستر', options: TWISTER }],
        'عرض الروقان 5':    [{ title: 'التويستر', options: TWISTER }, { title: 'السوبريم', options: SUPREME }],
        'دابل راب':         [{ title: 'الراب الأول', options: TWISTER }, { title: 'الراب التاني', options: TWISTER }],
        'عرض اللانش بوكس 1': [{ title: 'التويستر', options: TWISTER }],
                'عرض الفسحة 2':     [
            { title: 'ساندوتش التشيكن', options: CHICKEN },
            { title: 'التويستر',        options: TWISTER },
            { title: 'السوبريم',        options: SUPREME }
        ],
        'عرض الفسحة 3':     [
            { title: 'ساندوتش البيف الأول',  options: BEEF },
            { title: 'ساندوتش البيف التاني', options: BEEF }
        ],
        'عرض الريزو':       [{ title: 'نوع الريزو', options: RIZO }],
        'عرض الروقان 4':    [{ title: 'نوع الريزو', options: RIZO }],
        'عرض اللانش بوكس 2': [{ title: 'نوع الريزو', options: RIZO }],
        'Red Power Deal':   [
            { title: 'ساندوتش البيف',   options: BEEF },
            { title: 'ساندوتش التشيكن', options: CHICKEN_SUP }
        ],
    };
    // مفاتيح مطبّعة عشان الأرقام العربي (١) والإنجليزي (1) يشتغلوا سوا
    const CHOICES = {};
    Object.keys(CHOICES_RAW).forEach(k => CHOICES[norm(k)] = CHOICES_RAW[k]);
    /* ═══ ساعات العمل ═══ */
    function isOpenNow() {
        const h = CONFIG.hours;
        if (!h.enabled) return true;
        let now;
        try {
            now = new Intl.DateTimeFormat('en-GB', { timeZone: h.tz, hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date());
        } catch (e) { const d = new Date(); now = d.getHours() + ':' + d.getMinutes(); }
        const m = t => { const [a, b] = t.split(':').map(Number); return a * 60 + b; };
        const n = m(now), o = m(h.open), c = m(h.close);
        return o <= c ? (n >= o && n < c) : (n >= o || n < c);
    }
    const closedMsg = () => `⏰ إحنا مقفولين دلوقتي. مواعيد الشغل من ${CONFIG.hours.open} إلى ${CONFIG.hours.close}`;

    /* ═══ الحسابات ═══ */
    const subtotal = () => cart.reduce((s, i) => s + i.price * i.qty, 0);
    function discount() {
        if (!coupon) return 0;
        const sub = subtotal(), d = coupon.def;
        if (d.min && sub < d.min) return 0;
        const v = d.type === 'percent' ? Math.round(sub * d.value / 100) : d.value;
        return Math.min(v, sub);
    }

    /* ═══ السلة ═══ */
    function addItem(o) {
        const full = o.label ? `${o.name} (${o.label})` : o.name;
        const opts = o.opts || [];
        const key = [full, o.price, opts.join(','), o.note || ''].join('|');
        const it = cart.find(i => i.key === key);
        if (it) it.qty += o.qty; else cart.push({ key, name: full, price: o.price, qty: o.qty, opts, note: o.note || '' });
        LS.set('rr_cart', cart); render(); toast('✅ تمت إضافة ' + full);
    }

    function render() {
        const count = cart.reduce((s, i) => s + i.qty, 0);
        document.querySelectorAll('.cart-count').forEach(e => { e.textContent = count; e.style.display = count ? 'flex' : 'none'; });
        const body = $('cartBody');
        if (!cart.length) {
            body.innerHTML = '<div class="cart-empty"><span>🛒</span>السلة فاضية.. ضيف أكلتك المفضلة!</div>';
            $('cartFoot').style.display = 'none';
            return;
        }
        $('cartFoot').style.display = '';
        const _st = body.scrollTop;
        const norm = s => s.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[^\u0600-\u06FFA-Za-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
        if (!window.__rrImgMap) {
            const map = {};
            const add = (nameEl, imgEl) => {
                if (!nameEl || !imgEl) return;
                const src = imgEl.getAttribute('src'); if (!src) return;
                const full = nameEl.textContent, ar = full.split(/[A-Za-z]/)[0];
                [norm(full), norm(ar)].forEach(k => { if (k && !map[k]) map[k] = src; });
            };
            document.querySelectorAll('.card').forEach(c => add(c.querySelector('.card-name'), c.querySelector('.card-img') || c.querySelector('img:not(.rr-fav)')));
            document.querySelectorAll('.siniya-card').forEach(c => add(c.querySelector('.siniya-card-name'), c.querySelector('img')));
            document.querySelectorAll('.school-featured').forEach(c => add(c.querySelector('.school-featured-name'), c.querySelector('img')));
            document.querySelectorAll('.siniya-featured').forEach(c => add(c.querySelector('.siniya-featured-name'), c.querySelector('img')));
            /* احتياطي: أي صورة alt بتطابق الاسم */
            document.querySelectorAll('img[alt]').forEach(im => { const a = norm(im.alt || ''); if (a && !map[a] && im.getAttribute('src')) map[a] = im.getAttribute('src'); });
            window.__rrImgMap = map;
        }
        const imgFor = name => {
            const map = window.__rrImgMap, full = norm(name), base = norm(name.replace(/\s*\(.*\)\s*$/, ''));
            if (map[full]) return map[full]; if (map[base]) return map[base];
            const k = Object.keys(map).find(x => x === base || x.startsWith(base + ' ') || base.startsWith(x + ' '));
            return k ? map[k] : '';
        };
        const rows = cart.map((i, idx) => {
            const extras = [...(i.opts || [])];
            const optsHtml = (extras.length || i.note)
                ? `<div class="cart-line-opts">${extras.length ? '<b>' + esc(extras.join(' • ')) + '</b>' : ''}${i.note ? (extras.length ? '<br>' : '') + '📝 ' + esc(i.note) : ''}</div>` : '';
            const src = imgFor(i.name);
            return `
            <div class="ct-row">
                <div class="ct-img">${src ? `<img src="${esc(src)}" alt="" loading="lazy" decoding="async">` : '🍗'}</div>
                <div class="ct-name"><div class="cart-line-name">${esc(i.name)}</div>${optsHtml}</div>
                <div class="ct-unit" data-l="السعر">${fmt(i.price)}</div>
                <div class="ct-qty">
                    <button type="button" data-act="inc" data-i="${idx}" aria-label="زيادة">+</button>
                    <input type="number" inputmode="numeric" min="1" max="99" value="${i.qty}" data-act="set" data-i="${idx}" aria-label="الكمية">
                    <button type="button" data-act="dec" data-i="${idx}" aria-label="نقص">−</button>
                </div>
                <div class="ct-tot" data-l="الإجمالي">${fmt(i.price * i.qty)}</div>
                <button type="button" class="ct-del" data-act="del" data-i="${idx}" aria-label="حذف">🗑️</button>
            </div>`;
        }).join('');
        body.innerHTML = `<div class="ct-head"><span>الصورة</span><span>المنتج</span><span>السعر</span><span>الكمية</span><span>الإجمالي</span><span>مسح</span></div>${rows}
            <button type="button" class="ct-clear" data-act="clear">🗑️ تفريغ السلة</button>`;
        body.scrollTop = _st;
        const d = discount();
        $('cartDiscRow').style.display = d ? '' : 'none';
        $('cartDisc').textContent = '− ' + fmt(d);
        $('cartSubtotal').textContent = fmt(subtotal() - d);
        if (coupon) refreshCouponMsg();
    }

    $('cartBody').addEventListener('click', e => {
        const b = e.target.closest('[data-act]'); if (!b) return;
        const i = +b.dataset.i, act = b.dataset.act;
        if (act === 'inc') cart[i].qty++;
        if (act === 'dec') { cart[i].qty--; if (cart[i].qty <= 0) cart.splice(i, 1); }
        if (act === 'del') cart.splice(i, 1);
        if (act === 'clear') { if (!confirm('تفريغ السلة بالكامل؟')) return; cart.length = 0; }
        LS.set('rr_cart', cart); render();
    });

    $('cartBody').addEventListener('change', e => {
        const el = e.target.closest('input[data-act="set"]'); if (!el) return;
        const i = +el.dataset.i; let q = parseInt(el.value, 10);
        if (!q || q < 1) q = 1; if (q > 99) q = 99;
        cart[i].qty = q; LS.set('rr_cart', cart); render();
    });

    /* ═══ الكوبون (بيتضاف تلقائي في السلة) ═══ */
    const foot = $('cartFoot');
    const cRow = document.createElement('div');
    cRow.innerHTML = `
        <div class="coupon-row"><input id="couponInput" placeholder="كود الخصم 🎟️" autocomplete="off"><button type="button" id="couponBtn">تطبيق</button></div>
        <div class="coupon-msg" id="couponMsg"></div>
        <div class="sum-row disc" id="cartDiscRow" style="display:none"><span>🎟️ خصم الكوبون</span><span id="cartDisc"></span></div>`;
    foot.insertBefore(cRow, foot.firstChild);
    if (!Object.keys(CONFIG.coupons).length) cRow.querySelector('.coupon-row').style.display = 'none';

    function setCouponMsg(t, ok) { const m = $('couponMsg'); m.textContent = t; m.className = 'coupon-msg ' + (ok ? 'ok' : 'bad'); }
    function refreshCouponMsg() {
        const d = coupon.def;
        if (d.min && subtotal() < d.min) setCouponMsg(`الكوبون يحتاج طلب بقيمة ${fmt(d.min)} أو أكتر`, false);
        else setCouponMsg(`✅ تم تطبيق ${coupon.code}`, true);
    }
    /* ═══ الكوبون لأول طلب بس: بنسجّل الكود اللي استخدم (على الجهاز + رقم الموبايل) ═══ */
    const normPhone = p => toEn(p || '').replace(/\D/g, '').replace(/^(0020|20)/, '0').slice(-11);
    const usedCoupons = () => LS.get('rr_used_coupons', {});
    function couponUsed(code, phone) {
        const u = usedCoupons()[code]; if (!u) return false;
        const p = normPhone(phone);
        return !!u.device || (p.length === 11 && (u.phones || []).includes(p));
    }
    function markCouponUsed(code, phone, dev = true) {
        const all = usedCoupons(), u = all[code] || { phones: [] }, p = normPhone(phone);
        if (dev) u.device = true; u.at = new Date().toISOString();
        if (p.length === 11 && !u.phones.includes(p)) u.phones.push(p);
        all[code] = u; LS.set('rr_used_coupons', all);
    }
    const USED_MSG = code => `❌ كود ${code} تم استخدامه من قبل. الخصم متاح لأول طلب بس.`;
    function dropUsedCoupon(phone) {
        if (coupon && coupon.def.firstOrderOnly && couponUsed(coupon.code, phone)) {
            const c = coupon.code; coupon = null; $('couponInput').value = '';
            setCouponMsg(USED_MSG(c), false); render(); renderSummary();
            toast('⚠️ كود ' + c + ' استخدم قبل كده، اتشال من طلبك');
            return true;
        }
        return false;
    }

    /* ═══ التحقق من السيرفر (Google Sheets) ═══ */
    const apiUrl = (q) => CONFIG.couponApi + (CONFIG.couponApi.includes('?') ? '&' : '?') + q;
    async function checkCoupon(code, phone) {
        if (!CONFIG.couponApi) return null;
        try {
            const r = await fetch(apiUrl('action=check&code=' + encodeURIComponent(code) + '&phone=' + normPhone(phone)));
            const j = await r.json(); return j && j.ok ? !!j.used : null;
        } catch (e) { return null; }
    }
    async function claimCoupon(code, phone) {
        if (!CONFIG.couponApi) return 'local';
        try {
            const ctl = new AbortController(), to = setTimeout(() => ctl.abort(), 9000);
            const r = await fetch(CONFIG.couponApi, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ action: 'claim', code, phone: normPhone(phone) }), signal: ctl.signal });
            clearTimeout(to); const j = await r.json();
            return j && j.ok ? (j.used ? 'used' : 'ok') : 'error';
        } catch (e) { return 'error'; }
    }
    async function serverDrop(phone) {
        if (!coupon || !coupon.def.firstOrderOnly || !CONFIG.couponApi) return;
        const p = normPhone(phone); if (p.length !== 11) return;
        const code = coupon.code, used = await checkCoupon(code, p);
        if (used === true && coupon && coupon.code === code) { markCouponUsed(code, p, false); dropUsedCoupon(p); }
    }

    window.RR_API = CONFIG.couponApi;
    async function applyLoyalty(code) {
        setCouponMsg('⏳ بنتحقق من الكود...', true);
        try {
            const r = await fetch(apiUrl('action=validate&code=' + encodeURIComponent(code))), j = await r.json();
            if (j && j.ok && j.valid) { coupon = { code, def: { type: 'fixed', value: +j.value, loyalty: true } }; render(); return; }
            coupon = null; setCouponMsg(j && j.ok && j.used ? '❌ كود النقاط ده اتستخدم قبل كده' : '❌ كود النقاط غير صحيح', false); render();
        } catch (e) { coupon = null; setCouponMsg('⚠️ تعذّر التحقق من الكود، جرّب تاني', false); render(); }
    }
    $('couponBtn').addEventListener('click', () => {
        const code = $('couponInput').value.trim().toUpperCase();
        if (!code) { coupon = null; setCouponMsg('', true); render(); return; }
        const def = CONFIG.coupons[code];
        if (!def && /^RR-/.test(code) && CONFIG.couponApi) { applyLoyalty(code); return; }
        if (!def) { coupon = null; setCouponMsg('❌ الكوبون غير صحيح', false); render(); return; }
        if (def.firstOrderOnly && couponUsed(code, (LS.get('rr_customer', {}) || {}).phone)) { coupon = null; setCouponMsg(USED_MSG(code), false); render(); return; }
        coupon = { code, def }; render();
        if (def.firstOrderOnly) serverDrop((LS.get('rr_customer', {}) || {}).phone || $('f_phone').value);
    });

    /* ═══ فتح/قفل ═══ */
    function openEl(id) { $(id).classList.add('open'); $('rrOverlay').classList.add('open'); document.body.classList.add('no-scroll'); }
    function closeAll() {
        ['cartDrawer', 'checkoutModal', 'itemModal', 'rrOverlay'].forEach(id => $(id).classList.remove('open'));
        document.body.classList.remove('no-scroll');
    }
    document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', closeAll));
    $('rrOverlay').addEventListener('click', closeAll);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
    function openCart() { closeAll(); openEl('cartDrawer'); }

    /* ═══ زراير السلة (عائم + الهيدر) ═══ */
    const fab = document.createElement('button');
    fab.className = 'cart-fab';
    fab.innerHTML = '🛒 السلة <span class="cart-count"></span>';
    fab.onclick = openCart;
    document.body.appendChild(fab);

    const headBtn = document.createElement('button');
    headBtn.className = 'cart-head-btn';
    headBtn.setAttribute('aria-label', 'السلة');
    headBtn.innerHTML = '🛒<span class="cart-count"></span>';
    headBtn.onclick = openCart;
    const hb = $('hamburger');
    hb.parentNode.insertBefore(headBtn, hb);

    /* ═══ بوب أب الصنف ═══ */
    /* ═══ قواعد الاقتراحات: حسب الاسم (أولوية) أو حسب القسم ═══ */
    const SUGGEST_BY_NAME_RAW = {
        'تركي ميلت':        ['smokedturkey', 'beefbacon', 'cheese', 'jalapeno', 'combo'],
        'ناش كول':          ['cheese', 'jalapeno', 'pickles', 'combo'],
        'سويتي هيت ناش':    ['cheese', 'jalapeno', 'pickles', 'combo'],
        'ناش راب':          ['cheese', 'jalapeno', 'combo'],
        'مايتي دبل ناشفيل': ['cheese', 'beefbacon', 'jalapeno', 'pickles', 'combo'],
        'مانجو فاير':       ['cheese', 'mozzarella', 'combo'],
        'مايتي زينجر':      ['beefbacon', 'smokedturkey', 'jalapeno', 'combo']
    };
    const SUGGEST_BY_SECTION = {
        'beef-sandwiches':    ['beefbacon', 'cheese', 'mushroom', 'jalapeno', 'combo'],
        'chicken-sandwiches': ['smokedturkey', 'beefbacon', 'cheese', 'jalapeno', 'combo'],
        'twister-supreme':    ['smokedturkey', 'roastbeef', 'cheese', 'combo']
    };
    const SUGGEST_BY_NAME = {};
    Object.keys(SUGGEST_BY_NAME_RAW).forEach(k => SUGGEST_BY_NAME[norm(k)] = SUGGEST_BY_NAME_RAW[k]);
    const suggestFor = o => (SUGGEST_BY_NAME[norm(o.name)] || SUGGEST_BY_SECTION[o.sec] || [])
        .map(getExtra).filter(Boolean);
    let cur = null;
    const imType = $('im_type'), imChips = $('im_chips');
    const imChoices = $('im_choices');
    const imSuggest = $('im_suggest');
    const imNash = $('im_nash');
    const NASH_SAUCE_PRICE = 25;
    let nashN = 0, nashMax = 0, nashLvl = 'Mild';
    const extrasSum = () => [...imSuggest.querySelectorAll('.sg-card.sel')].reduce((t, b) => t + (+b.dataset.price), 0) + nashN * NASH_SAUCE_PRICE;
    // عدد قطع الدجاج + الاستربس في الصنف (من الوصف، أو الاسم لو مفيش وصف)
    const PIECE_WORDS = { 'اربع': 4, 'ثلاث': 3, 'خمس': 5, 'ست': 6 };
    const chickenPieces = o => {
        const t = norm(o.desc || o.name);
        const re = /(\d+|اربع|ثلاث|خمس|ست)?\s*(قطعتين|قطعه|قطع)\s*(?:كرسبي\s*)?(?:دجاج|استربس|استريبس|استرايبس)/g;
        const counts = []; let m;
        while ((m = re.exec(t))) {
            counts.push(m[1] ? (PIECE_WORDS[m[1]] || +m[1]) : (m[2] === 'قطعتين' ? 2 : 1));
        }
        if (!counts.length) return 0;
        return / او /.test(t) ? Math.max(...counts) : counts.reduce((x, y) => x + y, 0);
    };
    function paintNash() {
        const n = $('nsN'); if (!n) return;
        n.textContent = nashN;
        $('nsLvl').style.display = nashN ? '' : 'none';
        $('nsSum').textContent = nashN ? `+${nashN * NASH_SAUCE_PRICE} ج.م` : '';
        paintQty();
    }
    imNash.addEventListener('click', e => {
        const b = e.target.closest('button'); if (!b) return;
        if (b.id === 'nsPlus' && nashN < nashMax) nashN++;
        else if (b.id === 'nsMinus' && nashN > 0) nashN--;
        else if (b.dataset.lvl) {
            nashLvl = b.dataset.lvl;
            imNash.querySelectorAll('[data-lvl]').forEach(x => x.classList.toggle('sel', x === b));
            return;
        }
        paintNash();
    });
    imSuggest.addEventListener('click', e => {
        const b = e.target.closest('.sg-card'); if (!b) return;
        b.classList.toggle('sel'); paintQty();
    });
    imChoices.addEventListener('click', e => {
        const b = e.target.closest('button'); if (!b) return;
        const g = b.closest('.choice-group');
        g.querySelectorAll('button').forEach(x => x.classList.remove('sel'));
        b.classList.add('sel'); g.classList.remove('err');
    });
    function paintQty() {
        $('im_qty').textContent = cur.qty;
        $('im_total').textContent = fmt((cur.price + extrasSum()) * cur.qty);
    }
    function openItem(o) {
        cur = { ...o, qty: 1 };
        $('im_title').textContent = o.label ? `${o.name} (${o.label})` : o.name;
        $('im_price').textContent = fmt(o.price);
        $('im_note').value = '';

        // النوع: ناشفيل (درجة الحرارة) أو حار/عادي أو مفيش
        const list = o.nash ? NASH_LEVELS.map(x => ({ v: x.v, t: x.t }))
                   : o.spice ? [{ v: 'عادي', t: 'عادي' }, { v: 'حار 🌶️', t: 'حار 🌶️' }] : [];
        $('im_type_wrap').style.display = list.length ? '' : 'none';
        $('im_type_title').textContent = o.nash ? '🔥 درجة الناشفيل' : 'النوع';
        imType.innerHTML = list.map((x, i) => `<button type="button" data-v="${esc(x.v)}" class="${i === 0 ? 'sel' : ''}">${esc(x.t)}</button>`).join('');

        const noChips = NO_CHIPS_SECTIONS.includes(o.sec);
imChips.innerHTML = noChips ? '' : QUICK_CHIPS.map(c => `<button type="button" data-v="${esc(c)}">${esc(c)}</button>`).join('');
imChips.previousElementSibling.style.display = noChips ? 'none' : '';
        const groups = CHOICES[norm(o.name)] || [];
        imChoices.innerHTML = groups.map(g => `
            <div class="choice-group" data-title="${esc(g.title)}">
                <div class="form-title">${esc(g.title)} <i class="req">*</i></div>
                <div class="opt-row">${g.options.map(x => `<button type="button" data-v="${esc(x)}">${esc(x)}</button>`).join('')}</div>
            </div>`).join('');
        nashN = 0; nashLvl = 'Mild'; nashMax = o.nash ? 0 : chickenPieces(o);
        imNash.innerHTML = nashMax ? `
            <div class="nash-up">
                <div class="form-title">🔥 عايز الدجاج أو الاستربس ناشفيل؟</div>
                <p class="nash-note">لو حابب الدجاج أو الاستربس ده يبقى ناشفيل، ضيف ناش صوص بـ ${NASH_SAUCE_PRICE} ج.م للقطعة وهتتحول لناشفيل.</p>
                <div class="nash-ctl">
                    <div class="qty"><button type="button" id="nsPlus">+</button><span id="nsN">0</span><button type="button" id="nsMinus">−</button></div>
                    <small>عدد القطع اللي تتحول (لحد ${nashMax})</small>
                    <b id="nsSum"></b>
                </div>
                <div id="nsLvl" style="display:none"><div class="form-title">🌶️ اختار درجة الناشفيل</div><div class="opt-row">${NASH_LEVELS.map(x => `<button type="button" data-lvl="${esc(x.v)}" class="${x.v === 'Mild' ? 'sel' : ''}">${esc(x.t)}</button>`).join('')}</div></div>
            </div>` : '';
        const sg = suggestFor(o);
        imSuggest.innerHTML = sg.length ? `
            <div class="form-title">⭐ زوّد ساندوتشك</div>
            <div class="sg-row">${sg.map(x => `
                <button type="button" class="sg-card" data-price="${x.price}" data-name="${esc(x.name)}">
                    ${x.img ? `<img class="sg-ph" src="${esc(x.img)}" alt="">` : `<span class="sg-ph">${x.emoji}</span>`}
                    <b>${esc(x.name)}</b><small>+${x.price} ج.م</small>
                </button>`).join('')}
            </div>` : '';
        paintQty(); closeAll(); openEl('itemModal');
    }
    imType.addEventListener('click', e => {
        const b = e.target.closest('button'); if (!b) return;
        imType.querySelectorAll('button').forEach(x => x.classList.remove('sel')); b.classList.add('sel');
    });
    imChips.addEventListener('click', e => { const b = e.target.closest('button'); if (b) b.classList.toggle('sel'); });
    $('im_inc').onclick = () => { cur.qty++; paintQty(); };
    $('im_dec').onclick = () => { if (cur.qty > 1) { cur.qty--; paintQty(); } };
    $('im_add').onclick = () => {
        const opts = [];
        let missing = null;
        imChoices.querySelectorAll('.choice-group').forEach(g => {
            const s = g.querySelector('button.sel');
            if (!s) { g.classList.add('err'); missing = missing || g; }
            else opts.push(g.dataset.title + ': ' + s.dataset.v);
        });
        if (missing) {
            toast('من فضلك اختار: ' + missing.dataset.title);
            missing.scrollIntoView({ block: 'center', behavior: 'smooth' });
            return;
        }
        const t = imType.querySelector('button.sel'); if (t) opts.push(cur.nash ? 'ناشفيل ' + t.dataset.v : t.dataset.v);
        imChips.querySelectorAll('button.sel').forEach(b => opts.push(b.dataset.v));
        if (nashN) opts.push(`🔥 ناش صوص × ${nashN} (+${nashN * NASH_SAUCE_PRICE}) — ناشفيل ${nashLvl}`);
        const extraBtns = [...imSuggest.querySelectorAll('.sg-card.sel')];
        extraBtns.forEach(b => opts.push('➕ ' + b.dataset.name + ' (+' + b.dataset.price + ')'));
        addItem({ name: cur.name, label: cur.label, price: cur.price + extrasSum(), qty: cur.qty, opts, note: $('im_note').value.trim() });
        closeAll();
    };
    /* ═══ اختيار المنطقة (بحث) ═══ */
    const areaQ = $('f_area_q'), areaVal = $('f_area'), areaList = $('areaList');
    let hlIdx = -1, shown = [];

    function setArea(i) {
        areaVal.value = i;
        areaQ.value = CONFIG.areas[i].name;
        areaList.classList.remove('open'); areaQ.setAttribute('aria-expanded', 'false');
        areaQ.parentNode.parentNode.classList.remove('err');
        renderSummary();
    }
    function paintList() {
        const q = norm(areaQ.value);
        const words = q.split(' ').filter(Boolean);
        shown = CONFIG.areas.map((a, i) => ({ a, i }))
            .filter(x => { const n = norm(x.a.name); return words.every(w => n.includes(w)); });
        hlIdx = shown.length ? 0 : -1;
        areaList.innerHTML = shown.length
            ? shown.map((x, k) => `<div class="combo-item${k === 0 ? ' hl' : ''}" data-i="${x.i}" role="option"><span>${esc(x.a.name)}</span><b>${x.a.fee} ج.م</b></div>`).join('')
            : '<div class="combo-empty">مفيش منطقة بالاسم ده 🤔</div>';
        areaList.classList.add('open'); areaQ.setAttribute('aria-expanded', 'true');
    }
    function moveHl(d) {
        const items = areaList.querySelectorAll('.combo-item'); if (!items.length) return;
        items[hlIdx]?.classList.remove('hl');
        hlIdx = (hlIdx + d + items.length) % items.length;
        items[hlIdx].classList.add('hl'); items[hlIdx].scrollIntoView({ block: 'nearest' });
    }
    areaQ.addEventListener('focus', paintList);
    areaQ.addEventListener('input', () => { areaVal.value = ''; renderSummary(); paintList(); });
    areaQ.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown') { e.preventDefault(); moveHl(1); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); moveHl(-1); }
        else if (e.key === 'Enter' && areaList.classList.contains('open')) {
            e.preventDefault(); if (shown[hlIdx]) setArea(shown[hlIdx].i);
        }
    });
    // mousedown بدل click عشان الـ blur ما يقفلش القائمة قبل الاختيار
    areaList.addEventListener('mousedown', e => {
        const it = e.target.closest('.combo-item'); if (!it) return;
        e.preventDefault(); setArea(+it.dataset.i);
    });
    document.addEventListener('click', e => { if (!e.target.closest('.combo')) areaList.classList.remove('open'); });

    /* ═══ إتمام الطلب ═══ */
    const fields = ['name', 'phone', 'phone2', 'street', 'station', 'building', 'floor', 'apt', 'landmark'];
    const saved = LS.get('rr_customer', {});
    fields.forEach(f => { if (saved[f]) $('f_' + f).value = saved[f]; });
    if (saved.area !== undefined && CONFIG.areas[saved.area]) { areaVal.value = saved.area; areaQ.value = CONFIG.areas[saved.area].name; }

    const pk = () => $('f_type').value === 'pickup';
    const PAY_NUM = '01062516200';
    function payLines() {
        const p = $('f_pay').value;
        if (p === 'wallet') return ['💳 *الدفع:* محفظة إلكترونية (فودافون كاش)', '📲 التحويل على الرقم: ' + PAY_NUM, '📸 هبعتلكم صورة التحويل هنا على الواتساب لتأكيد الطلب'];
        if (p === 'instapay') return ['💳 *الدفع:* حساب بنكي (إنستا باي)', '📲 التحويل على الرقم: ' + PAY_NUM, '📸 هبعتلكم صورة التحويل هنا على الواتساب لتأكيد الطلب'];
        return ['💵 الدفع: كاش عند الاستلام'];
    }
    function setPay(v) {
        $('f_pay').value = v;
        document.querySelectorAll('#paygrid button').forEach(b => b.classList.toggle('on', b.dataset.v === v));
        const n = $('payNote');
        if (v === 'cash') n.innerHTML = '💵 الدفع كاش عند الاستلام. الطلب بيتبعت على واتساب وهنأكده معاك.';
        else n.innerHTML = '📲 برجاء التحويل على الرقم التالي: <b class="pay-num" id="payNum">' + PAY_NUM + '</b> <button type="button" id="payCopy">نسخ الرقم</button><br>📸 بعد التحويل هنطلب منك تبعتلنا <b>صورة التحويل على الواتساب</b> لتأكيد طلبك.';
    }
    document.querySelectorAll('#paygrid button').forEach(b => b.addEventListener('click', () => setPay(b.dataset.v)));
    document.addEventListener('click', e => { if (e.target.id === 'payCopy') { (navigator.clipboard ? navigator.clipboard.writeText(PAY_NUM) : Promise.reject()).then(() => toast('✅ تم نسخ الرقم'), () => toast('الرقم: ' + PAY_NUM)); } });
    const curFee = () => pk() ? 0 : (areaVal.value === '' ? null : CONFIG.areas[+areaVal.value].fee);
    function setType(v) {
        $('f_type').value = v;
        document.querySelectorAll('#otype button').forEach(b => b.classList.toggle('on', b.dataset.v === v));
        const p = v === 'pickup';
        $('pickupBox').style.display = p ? '' : 'none';
        $('addrTitle').style.display = p ? 'none' : '';
        ['f_area_q', 'f_street', 'f_station', 'f_building', 'f_floor', 'f_apt', 'f_landmark', 'f_phone2'].forEach(id => { const w = $(id).closest('.field'); if (w) w.style.display = p ? 'none' : ''; });
        document.querySelector('#checkoutModal .drawer-head h3').textContent = p ? '📝 بيانات الاستلام' : '📝 بيانات التوصيل';
        document.querySelectorAll('#checkoutForm .field.err').forEach(f => f.classList.remove('err'));
        renderSummary();
    }
    document.querySelectorAll('#otype button').forEach(b => b.addEventListener('click', () => setType(b.dataset.v)));

    function renderSummary() {
        const fee = curFee(), sub = subtotal(), d = discount();
        $('checkoutSummary').innerHTML =
            cart.map(i => `<div class="mini"><span>${i.qty} × ${esc(i.name)}${(i.opts && i.opts.length) ? ' <small>(' + esc(i.opts.join('، ')) + ')</small>' : ''}${i.note ? ' <small>📝 ' + esc(i.note) + '</small>' : ''}</span><span>${fmt(i.price * i.qty)}</span></div>`).join('') +
            `<div class="sum-row" style="margin-top:10px"><span>المجموع</span><span>${fmt(sub)}</span></div>` +
            (d ? `<div class="sum-row disc"><span>🎟️ خصم (${esc(coupon.code)})</span><span>− ${fmt(d)}</span></div>` : '') +
            `<div class="sum-row"><span>${pk() ? 'استلام من الفرع' : 'التوصيل'}</span><span>${pk() ? 'بدون رسوم' : (fee === null ? 'اختار المنطقة' : fmt(fee))}</span></div>` +
            `<div class="sum-row total"><span>الإجمالي</span><span>${fmt(sub - d + (fee || 0))}</span></div>` +
            (pk() ? '' : `<div class="delivery-time-note">⏱️ وقت التوصيل يبدأ من تأكيد الأوردر ويستغرق 60 دقيقة كحد أقصى</div>`);
    }

    $('goCheckout').addEventListener('click', () => {
        if (!isOpenNow()) { toast(closedMsg()); return; }
        if (CONFIG.minOrder && subtotal() < CONFIG.minOrder) { toast(`أقل قيمة للطلب ${fmt(CONFIG.minOrder)}`); return; }
        closeAll(); renderSummary(); openEl('checkoutModal');
    });

    const phoneOk = v => /^01[0125]\d{8}$/.test(toEn(v).replace(/\D/g, ''));

    function validate() {
        let ok = true, first = null;
        let need = { name: v => v.trim().length > 1, phone: phoneOk, street: v => v.trim(), building: v => v.trim(), floor: v => v.trim(), apt: v => v.trim(), landmark: v => v.trim() };
        if (pk()) need = { name: need.name, phone: need.phone, ptime: v => v };
        Object.keys(need).forEach(k => {
            const el = $('f_' + k), good = !!need[k](el.value);
            (el.closest('.field') || el.parentNode).classList.toggle('err', !good);
            if (!good) { ok = false; first = first || el; }
        });
        const p2 = $('f_phone2'), p2ok = pk() || !p2.value.trim() || phoneOk(p2.value);
        p2.parentNode.classList.toggle('err', !p2ok);
        if (!p2ok) { ok = false; first = first || p2; }
        const aok = pk() || areaVal.value !== '';
        areaQ.parentNode.parentNode.classList.toggle('err', !aok);
        if (!aok) { ok = false; first = first || areaQ; }
        if (first) first.focus();
        return ok;
    }

    $('f_phone').addEventListener('change', () => { if (!dropUsedCoupon($('f_phone').value)) serverDrop($('f_phone').value); });

    $('checkoutForm').addEventListener('submit', async e => {
        e.preventDefault();
        if (!cart.length) { toast('السلة فاضية'); return; }
        if (!isOpenNow()) { toast(closedMsg()); return; }
        if (!validate()) return;
        if (dropUsedCoupon($('f_phone').value)) return;
        /* حجز الكوبون على السيرفر قبل الإرسال (نافذة الواتساب بتتفتح الأول عشان المتصفح مايمنعهاش) */
        let pre = null;
        const sbtn = $('checkoutForm').querySelector('[type=submit]');
        if (coupon && coupon.def.firstOrderOnly && discount() > 0 && CONFIG.couponApi) {
            pre = window.open('', '_blank'); if (sbtn) sbtn.disabled = true; toast('⏳ بنتحقق من كود الخصم...');
            const r = await claimCoupon(coupon.code, $('f_phone').value);
            if (sbtn) sbtn.disabled = false;
            if (r === 'used') {
                if (pre) pre.close();
                markCouponUsed(coupon.code, $('f_phone').value, false); dropUsedCoupon($('f_phone').value); return;
            }
        }

        const v = id => $(id).value.trim();
        const pickup = pk();
        const area = pickup ? { name: 'استلام من الفرع', fee: 0 } : CONFIG.areas[+areaVal.value];
        const fmtT = s => { const [h, m] = s.split(':').map(Number); return ((h % 12) || 12) + ':' + String(m).padStart(2, '0') + ' ' + (h >= 12 ? 'م' : 'ص'); };
        const sub = subtotal(), d = discount(), total = sub - d + area.fee;
        const num = id => toEn(v(id));

        const itemLines = [];
        cart.forEach((i, n) => {
            itemLines.push(`${n + 1}. ${i.name} × ${i.qty} = ${i.price * i.qty} ج.م`);
            const extra = [...(i.opts || [])];
            if (extra.length) itemLines.push('    ↳ ' + extra.join(' | '));
            if (i.note) itemLines.push('    ↳ 📝 ' + i.note);
        });

        const lines = [
            '🐓 *طلب جديد - Red Roosters*',
            '━━━━━━━━━━━━━━',
            '👤 *الاسم:* ' + v('f_name'),
            '📞 *الموبايل:* ' + num('f_phone'),
            (!pickup && v('f_phone2')) ? '📱 *رقم إضافي:* ' + num('f_phone2') : null,
            '',
            ...(pickup ? ['🏪 *استلام من الفرع*', '📍 *الفرع:* فرع فيصل المريوطية', '🗺️ *العنوان:* شارع المريوطية الرئيسي، بجوار كشري العريس وأسفل بهجت جيم', '🔗 *الموقع:* https://share.google/mH8rRsAZG6cKkEdwe', '⏰ *موعد الاستلام:* ' + fmtT(v('f_ptime'))] : [
            '📍 *العنوان*',
            '• المنطقة: ' + area.name,
            '• الشارع: ' + v('f_street'),
            v('f_station') ? '• المحطة: ' + v('f_station') : null,
            '• رقم العمارة: ' + v('f_building'),
            '• الدور: ' + v('f_floor'),
            '• الشقة: ' + v('f_apt'),
            '• علامة مميزة: ' + v('f_landmark')
        ]),
            '',
            '🛒 *الطلبات*',
            ...itemLines,
            '',
            '━━━━━━━━━━━━━━',
            '💰 المجموع: ' + sub + ' ج.م',
            d ? '🎟️ خصم (' + coupon.code + '): − ' + d + ' ج.م' : null,
            pickup ? '🏪 استلام من فرع فيصل المريوطية (بدون رسوم توصيل)' : '🛵 التوصيل (' + area.name + '): ' + area.fee + ' ج.م',
            '✅ *الإجمالي: ' + total + ' ج.م*',
            pickup ? null : '⏱️ وقت التوصيل يبدأ من تأكيد الأوردر ويستغرق 60 دقيقة كحد أقصى',
            ...payLines(),
            v('f_notes') ? '\n📝 *ملاحظات عامة:* ' + v('f_notes') : null
        ].filter(l => l !== null).join('\n');

        const data = pickup ? Object.assign({}, saved, { name: v('f_name'), phone: v('f_phone') }) : { area: +areaVal.value };
        if (!pickup) fields.forEach(f => data[f] = v('f_' + f));
        LS.set('rr_customer', data);

        const waUrl = 'https://wa.me/' + CONFIG.phone + '?text=' + encodeURIComponent(lines);
        if (pre && !pre.closed) pre.location.href = waUrl; else window.open(waUrl, '_blank');

        if (coupon && coupon.def.firstOrderOnly && d > 0) markCouponUsed(coupon.code, v('f_phone'));
        if (window.rrOrderHook) rrOrderHook({ phone: v('f_phone'), total: Math.max(0, subtotal() - d), code: (coupon && coupon.def.loyalty) ? coupon.code : '' });
        cart = []; coupon = null; $('couponInput').value = ''; setCouponMsg('', true);
        LS.set('rr_cart', cart); render(); closeAll();
        toast('تم تجهيز طلبك ✅ اضغط إرسال في الواتساب لتأكيده');
    });

    /* ═══ Toast ═══ */
    let tt;
    function toast(msg) {
        const t = $('rrToast'); t.textContent = msg; t.classList.add('show');
        clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 2600);
    }

    /* ═══ رسم قسم الإضافات ═══ */
    (function buildExtras() {
        const wrap = $('extrasBody'); if (!wrap) return;
        wrap.innerHTML = EXTRA_GROUPS.map(g => `
            <p class="offer-section-title">${g.title}</p>
            <div class="menu-grid">${EXTRAS.filter(e => e.group === g.key).map(e => `
                <div class="card">
                    ${e.img ? `<img loading="lazy" decoding="async" class="card-img" src="${esc(e.img)}" alt="${esc(e.en)}">`
                            : `<div class="card-img-placeholder">${e.emoji}</div>`}
                    <div class="card-body">
                        <div class="card-name">${esc(e.name)} <span class="card-name-en">${esc(e.en)}</span></div>
                        <div class="card-footer"><span class="price-badge">${e.price} LE</span></div>
                    </div>
                </div>`).join('')}
            </div>`).join('');
    })();

    /* ═══ رسم قسم الصوصات ═══ */
    (function buildSauces() {
        const wrap = $('saucesBody'); if (!wrap) return;
        const card = x => `
            <div class="card${x.hot ? ' sauce-hot' : ''}">
                ${x.img ? `<img loading="lazy" decoding="async" class="card-img" src="${esc(x.img)}" alt="${esc(x.en)}">`
                        : `<div class="card-img-placeholder">${x.hot ? '🌶️' : '🥣'}</div>`}
                <div class="card-body">
                    <div class="card-name">${esc(x.name)} <span class="card-name-en">${esc(x.en)}</span></div>
                    <div class="card-footer"><span class="price-badge">${x.price} LE</span></div>
                </div>
            </div>`;
        wrap.innerHTML = `
            <p class="offer-section-title">🥣 صوصات عادية</p>
            <div class="menu-grid">${SAUCES.filter(x => !x.hot).map(card).join('')}</div>
            <div class="hot-banner">
                <div class="hot-banner-ico">🌶️🔥</div>
                <div><h3>صوصات سبايسي</h3><p>تنبيه: الصوصات دي حارة — اختار على قد حرارتك!</p></div>
            </div>
            <div class="menu-grid hot-grid">${SAUCES.filter(x => x.hot).map(card).join('')}</div>`;
    })();

    /* ═══ زراير "أضف للسلة" على كل الكروت — بتفتح البوب أب ═══ */
    const TYPES = [
        { sel: '.card',              name: '.card-name',             price: '.price-badge',      foot: '.card-footer' },
        { sel: '.siniya-card',       name: '.siniya-card-name',      price: '.siniya-price',     foot: '.siniya-card-footer' },
        { sel: '.siniya-featured',   name: '.siniya-featured-name',  price: '.siniya-price',     foot: '.siniya-card-footer' },
        { sel: '.school-featured',   name: '.school-featured-name',  price: '.price-badge',      foot: '.card-footer' },
        { sel: '.zsb-banner',        name: 'h2',                     price: '.zsb-price',        foot: '.zsb-price-row' },
        { sel: '.power-deal-banner', name: 'h2',                     price: '.power-deal-price', foot: '.power-deal-price-row' }
    ];
    const LABELS = { S: 'صغير', M: 'وسط', L: 'كبير' };
    const cleanName = el => {
        const c = el.cloneNode(true);
        c.querySelectorAll('span').forEach(s => s.remove());
            return c.textContent.replace(/[\u{1F300}-\u{1FAFF}\u2600-\u27BF]/gu, '').replace(/\s+/g, ' ').trim();
    };
    const parsePrices = t => {
        const m = [...t.matchAll(/([A-Za-z]+)\s*(\d+)/g)];
        if (m.length > 1) return m.map(x => ({ label: LABELS[x[1].toUpperCase()] || x[1], price: +x[2] }));
        const n = t.match(/\d+/);
        return n ? [{ label: '', price: +n[0] }] : [];
    };

    TYPES.forEach(T => document.querySelectorAll(T.sel).forEach(box => {
        if (box.dataset.cart) return;
        const nEl = box.querySelector(T.name), pEl = box.querySelector(T.price), ft = box.querySelector(T.foot);
        if (!nEl || !pEl || !ft) return;
        const prices = parsePrices(pEl.textContent);
        if (!prices.length) return;
        box.dataset.cart = '1';
        const name = cleanName(nEl);
        const desc = ((box.querySelector('.card-desc, .school-featured-includes') || {}).textContent || '').replace(/\s+/g, ' ').trim();
        const sec = (box.closest('section') || {}).id || '';
        const nash = sec === 'nashville' || !!box.querySelector('.nashville') || /ناش/.test(name);
        const spice = !nash && !NO_SPICE_SECTIONS.includes(sec) && !NO_SPICE_NAMES.includes(norm(name));
        ft.querySelectorAll('a[href*="wa.me"]').forEach(a => a.remove());
        prices.forEach(p => {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'add-cart-btn';
            b.textContent = '🛒 أضف للسلة' + (p.label ? ' — ' + p.label : '');
            b.onclick = () => openItem({ name, price: p.price, label: p.label, nash, spice, sec, desc });
            ft.appendChild(b);
        });
    }));
    /* ═══ بوب أب الخصم عند فتح الموقع ═══ */
    const promo = $('promoModal');
    function closePromo() { promo.classList.remove('open'); $('rrOverlay').classList.remove('open'); document.body.classList.remove('no-scroll'); }
    setTimeout(() => { promo.classList.add('open'); $('rrOverlay').classList.add('open'); document.body.classList.add('no-scroll'); }, 600);
    $('promoClose').onclick = closePromo;
    $('promoGo').onclick = closePromo;
    $('rrOverlay').addEventListener('click', closePromo);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closePromo(); });

    /* ═══ نسخ كود الخصم من الشريط ═══ */
    $('promoTicker').addEventListener('click', () => {
        const done = () => toast('✅ تم نسخ كود RED20');
        if (navigator.clipboard) navigator.clipboard.writeText('RED20').then(done, done);
        else done();
    });

    render();
})();


/* ===== Original inline script 3 ===== */

(function(){
  /* header shadow on scroll */
  var h=document.querySelector('header');
  addEventListener('scroll',function(){h.classList.toggle('scrolled',scrollY>8)},{passive:true});
 
  /* images: lazy-load + fade out the shimmer when ready */
  document.querySelectorAll('img.card-img').forEach(function(i){
    i.loading='lazy'; i.decoding='async';
    if(i.complete) i.classList.add('is-loaded');
    else{i.addEventListener('load',function(){i.classList.add('is-loaded')});
         i.addEventListener('error',function(){i.classList.add('is-loaded')});}
  });
 
  /* cart badge "bump" whenever the count changes */
  document.querySelectorAll('.cart-count').forEach(function(el){
    new MutationObserver(function(){
      el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
    }).observe(el,{childList:true,characterData:true,subtree:true});
  });
})();


/* ===== Original inline script 4 ===== */

(function(){
  var $=function(s,r){return (r||document).querySelector(s)}, $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
  var norm=function(s){return String(s).toLowerCase().replace(/[\u064B-\u065F\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/\s+/g,' ').trim()};
 
  /* 1 ─ sticky category chips (built from the existing nav) */
  var SKIP=['home','about','branches','notes'], chips=[];
  var strip=document.createElement('div'); strip.className='cat-strip';
  var inner=document.createElement('div'); inner.className='cat-strip-in'; strip.appendChild(inner);
  $$('#nav-list button').forEach(function(b){
    var m=(b.getAttribute('onclick')||'').match(/'([^']+)'/); if(!m||SKIP.indexOf(m[1])>-1) return;
    var c=document.createElement('button'); c.type='button'; c.className='chip'; c.dataset.id=m[1];
    c.textContent=b.textContent.trim(); c.onclick=function(){clearSearch();showSection(m[1])};
    inner.appendChild(c); chips.push(c);
  });
  $('header').after(strip);
  var _show=window.showSection;
  window.showSection=function(id){
    _show(id);
    chips.forEach(function(c){var on=c.dataset.id===id;c.classList.toggle('on',on);
      if(on) c.scrollIntoView({inline:'center',block:'nearest',behavior:'smooth'});});
  };
 
  /* 2 ─ search across the whole menu */
  var box=document.createElement('div'); box.className='search-box';
  box.innerHTML='<input type="search" placeholder="دوّر على أكلتك... (مثال: زينجر، ناشفيل، ريزو)" aria-label="بحث في المنيو">';
  var empty=document.createElement('div'); empty.className='no-results'; empty.textContent='مفيش نتيجة بالاسم ده 🤔 جرّب كلمة تانية';
  var main=$('main'); main.insertBefore(empty,main.firstChild); main.insertBefore(box,main.firstChild);
  var inp=$('input',box), ITEMS='.card,.siniya-card,.school-featured,.siniya-featured';
  function run(q){
    q=norm(q); document.body.classList.toggle('searching',!!q);
    var total=0;
    $$('.section').forEach(function(s){
      var hits=0;
      $$(ITEMS,s).forEach(function(c){var ok=!q||norm(c.textContent).indexOf(q)>-1;c.style.display=ok?'':'none';if(ok)hits++});
      s.classList.toggle('no-hit',!!q&&!hits); total+=hits;
    });
    document.body.classList.toggle('none',!!q&&!total);
  }
  function clearSearch(){inp.value='';run('')}
  var t; inp.addEventListener('input',function(){clearTimeout(t);t=setTimeout(function(){run(inp.value)},120)});
 
  /* 3 ─ trust strip under the hero */
  var hero=$('#home .hero');
  if(hero){var tr=document.createElement('div');tr.className='trust';
    tr.innerHTML='<div><b>🛵</b>توصيل سريع<small>من 30 ج.م حسب المنطقة</small></div><div><b>💵</b>كاش عند الاستلام<small>من غير أي مصاريف</small></div><div><b>🍗</b>دجاج طازج<small>بتتحضّر لما تطلب</small></div>';
    hero.after(tr);}
 
  /* 4 ─ round "+" buttons need an accessible name */
  $$('.add-cart-btn').forEach(function(b){
    if(b.textContent.indexOf('—')>-1) b.classList.add('has-label'); else b.setAttribute('aria-label','أضف للسلة');
  });
 
  /* 5 ─ cart bar shows live total */
  var fab=$('.cart-fab');
  function sync(){
    var c=[]; try{c=JSON.parse(localStorage.getItem('rr_cart'))||[]}catch(e){}
    var n=0,t=0; c.forEach(function(i){n+=i.qty;t+=i.qty*i.price});
    fab.classList.toggle('empty',!n); fab.dataset.total=t?t+' ج.م':'';
  }
  $$('.cart-count').forEach(function(el){new MutationObserver(sync).observe(el,{childList:true,characterData:true,subtree:true})});
  sync(); showSection('home');
})();


/* ===== Original inline script 5 ===== */

(function(){
  var $=function(s,r){return (r||document).querySelector(s)}, $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
  var prog=$('#rrProg'), top=$('#rrTop'), hd=$('header');
  window.addEventListener('scroll',function(){
    var h=document.documentElement, p=h.scrollTop/(h.scrollHeight-h.clientHeight||1);
    prog.style.width=(p*100)+'%'; top.classList.toggle('show',h.scrollTop>600);
  },{passive:true});
  top.onclick=function(){window.scrollTo({top:0,behavior:'smooth'})};
  /* ظهور الكروت */
  var io='IntersectionObserver' in window ? new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{rootMargin:'0px 0px -6% 0px'}) : null;
  function watch(root){
    $$('.card,.cat-card,.siniya-card',root).forEach(function(el,i){
      if(el.dataset.rv) return; el.dataset.rv=1;
      if(!io){return}
      el.classList.add('rr-rv'); el.style.transitionDelay=((i%6)*45)+'ms'; io.observe(el);
    });
    $$('img.card-img',root).forEach(function(im){
      if(im.complete&&im.naturalWidth) im.classList.add('ld');
      else {im.addEventListener('load',function(){im.classList.add('ld')}); im.addEventListener('error',function(){im.classList.add('ld')});}
    });
  }
  watch(document);
  var wt; new MutationObserver(function(){ clearTimeout(wt); wt=setTimeout(function(){ watch(document) },200); }).observe(document.body,{childList:true,subtree:true});
  /* شريط التنقل السفلي */
  var tabs=$('#rrTabs');
  tabs.addEventListener('click',function(e){
    var b=e.target.closest('button'); if(!b) return; var t=b.dataset.t;
    if(t==='home'){ showSection('home'); window.scrollTo({top:0,behavior:'smooth'}); }
    else if(t==='menu'){ if(typeof toggleMobileNav==='function') toggleMobileNav(); }
    else if(t==='cart'){ var f=$('.cart-fab')||$('.cart-head-btn'); if(f) f.click(); }
    else if(t==='call'){ location.href='tel:0237721525'; }
    if(t==='home'||t==='menu'){ $$('button',tabs).forEach(function(x){x.classList.toggle('on',x===b)}); }
  });
  /* عداد السلة في التاب */
  var badge=$('b',tabs.children[2]);
  setInterval(function(){
    var c=$('.cart-fab .cart-count'); var n=c?parseInt(c.textContent)||0:0;
    badge.textContent=n; badge.style.display=n?'flex':'none';
  },1500);
})();


/* ===== Original inline script 6 ===== */

(function(){
  var im=document.getElementById('itemModal'); if(!im) return;
  /* صورة الصنف داخل الشيت */
  var body=im.querySelector('.checkout-body'), hero=document.createElement('img');
  hero.id='imHero'; hero.alt=''; body.insertBefore(hero, body.firstChild);
  function setHero(){
    var title=(document.getElementById('im_title').textContent||'').replace(/\s*\(.*\)\s*$/,'').trim(), src='';
    document.querySelectorAll('.card .card-name').forEach(function(n){
      if(!src && n.textContent.trim()===title){ var cc=n.closest('.card'), i=cc.querySelector('.card-img')||cc.querySelector('.school-featured-img')||cc.querySelector('img'); if(i) src=i.currentSrc||i.src; }
    });
    var d=''; document.querySelectorAll('.card').forEach(function(c){ var nm=c.querySelector('.card-name'); if(!d && nm && nm.textContent.trim()===title){ var p=c.querySelector('.card-desc'); if(p) d=p.textContent.trim(); } });
    var de=document.getElementById('imDesc'); if(de){ de.textContent=d; de.style.display=d?'':'none'; }
    hero.classList.toggle('on',!!src); if(src) hero.src=src;
    body.scrollTop=0;
  }
  new MutationObserver(function(){ if(im.classList.contains('open')) setHero(); }).observe(im,{attributes:true,attributeFilter:['class']});
  /* سحب لأسفل للإغلاق */
  var y0=null, dy=0;
  function start(e){ if(!e.target.closest('.drawer-head,.im-grip')) return; y0=(e.touches?e.touches[0]:e).clientY; dy=0; }
  function move(e){ if(y0===null) return; dy=(e.touches?e.touches[0]:e).clientY-y0;
    if(dy>0){ im.classList.add('drag'); im.style.transform='translate(-50%,'+dy+'px)'; } }
  function end(){ if(y0===null) return; y0=null; im.classList.remove('drag'); im.style.transform='';
    if(dy>110){ var x=im.querySelector('[data-close]'); if(x) x.click(); } dy=0; }
  im.addEventListener('touchstart',start,{passive:true}); im.addEventListener('touchmove',move,{passive:true}); im.addEventListener('touchend',end); im.addEventListener('touchcancel',end);
  var grip=document.createElement('div'); grip.className='im-grip'; im.insertBefore(grip, im.firstChild);
  var hd=im.querySelector('.drawer-head'); hd.addEventListener('mousedown',function(e){ start(e); var mv=move, up=function(){ end(); document.removeEventListener('mousemove',mv); document.removeEventListener('mouseup',up); }; document.addEventListener('mousemove',mv); document.addEventListener('mouseup',up); });
  /* المفضلة */
  var KEY='rr_favs', favs=[]; try{ favs=JSON.parse(localStorage.getItem(KEY)||'[]') }catch(e){}
  var KF=function(s){s=s||'';var a=s.split(/[A-Za-z]/)[0];if(!/[\u0600-\u06FF0-9]/.test(a))a=s;return a.replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/[^\u0600-\u06FFA-Za-z0-9 ]/g,' ').replace(/\s+/g,' ').trim()};
  favs=favs.map(KF).filter(function(x,i,a){return x&&a.indexOf(x)===i});
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify(favs)) }catch(e){} bar.textContent='❤️ المفضلة ('+favs.length+')'; }
  var bar=document.createElement('button'); bar.id='rrFavBar'; document.body.appendChild(bar);
  bar.onclick=function(){ var on=document.body.classList.toggle('favonly'); bar.classList.toggle('on',on);
    if(on && !favs.length){ document.body.classList.remove('favonly'); bar.classList.remove('on'); var t=document.getElementById('rrToast'); if(t){t.textContent='اضغط ❤️ على أي صنف لإضافته للمفضلة'; t.classList.add('show'); setTimeout(function(){t.classList.remove('show')},2200);} } };
  var KF=function(s){s=s||'';var a=s.split(/[A-Za-z]/)[0];if(!/[\u0600-\u06FF0-9]/.test(a))a=s;return a.replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/[^\u0600-\u06FFA-Za-z0-9 ]/g,' ').replace(/\s+/g,' ').trim()};
  function name(c){ var n=c.querySelector('.card-name,.siniya-card-name,.siniya-featured-name,.school-featured-name,.power-deal-content h2'); return n?KF(n.textContent):''; }
  function decorate(){
    document.querySelectorAll('[data-cart="1"]').forEach(function(c){
      if(!c.querySelector('.rr-fav')){
        var b=document.createElement('button'); b.className='rr-fav'; b.type='button'; b.setAttribute('aria-label','المفضلة'); b.textContent='♥';
        b.addEventListener('click',function(e){ e.stopPropagation(); e.preventDefault(); var n=name(c), i=favs.indexOf(n);
          if(i<0) favs.push(n); else favs.splice(i,1); save(); decorate(); }, true);
        c.appendChild(b);
      }
      var f=favs.indexOf(name(c))>-1; c.classList.toggle('isfav',f); c.querySelector('.rr-fav').classList.toggle('on',f);
    });
  }
  save(); decorate();
  new MutationObserver(function(){ clearTimeout(decorate.t); decorate.t=setTimeout(decorate,120); }).observe(document.body,{childList:true,subtree:true});
})();


/* ===== Original inline script 7 ===== */

(function(){
  var im=document.getElementById('itemModal'); if(!im||document.getElementById('imDesc')) return;
  var body=im.querySelector('.checkout-body'), hero=document.getElementById('imHero');
  var top=document.createElement('div'); top.className='im-top';
  var info=document.createElement('div'); info.className='im-info';
  var pill=document.createElement('span'); pill.className='im-pill'; pill.textContent='متاح';
  var desc=document.createElement('p'); desc.id='imDesc';
  info.appendChild(document.getElementById('im_title')); info.appendChild(pill);
  info.appendChild(document.getElementById('im_price')); info.appendChild(desc);
  top.appendChild(info); if(hero) top.appendChild(hero);
  body.insertBefore(top, body.firstChild);
  /* إخفاء عنوان "الكمية" ونقل الكمية وزرار الإضافة للفوتر */
  body.querySelectorAll('.form-title').forEach(function(f){ if(f.textContent.trim()==='الكمية') f.style.display='none'; });
  var foot=document.createElement('div'); foot.className='im-foot';
  foot.appendChild(document.getElementById('im_add')); foot.appendChild(body.querySelector('.im-qty'));
  im.appendChild(foot);
})();


/* ===== Original inline script 8 ===== */

(function(){var b=document.getElementById('rrFavBar');if(!b)return;
function u(){var m=(b.textContent.match(/\d+/)||[0])[0];if(b.dataset.n!==m)b.dataset.n=m}
new MutationObserver(u).observe(b,{childList:true,characterData:true,subtree:true});u();})();


/* ===== Original inline script 9 ===== */

(function(){
  var tabs=document.getElementById('rrTabs'); if(!tabs||typeof showSection!=='function') return;
  var orig=window.showSection;
  function mark(which){ [].forEach.call(tabs.querySelectorAll('button'),function(b){ b.classList.toggle('on', b.dataset.t===which); }); }
  window.showSection=function(id){
    orig.apply(this,arguments);
    mark(id==='home'?'home':'menu');
    setTimeout(function(){
      if(id==='home'){ window.scrollTo({top:0,behavior:'smooth'}); return; }
      var sec=document.getElementById(id); if(!sec) return;
      var tt=sec.querySelector('.section-title')||sec;
      var y=tt.getBoundingClientRect().top+window.pageYOffset-150;
      window.scrollTo({top:Math.max(0,y),behavior:'smooth'});
    },80);
  };
  tabs.addEventListener('click',function(e){
    var b=e.target.closest('button'); if(!b) return;
    var t=b.dataset.t;
    if(t==='home'){ e.stopImmediatePropagation(); closeMobileNav(); showSection('home'); }
    else if(t==='menu'){ e.stopImmediatePropagation(); var nav=document.getElementById('mobileNav'); toggleMobileNav(); mark(nav.classList.contains('open')?'menu':(document.querySelector('#home.active')?'home':'menu')); }
  },true);
  /* لو الدروار اتقفل من برّه، نرجّع التمييز لحالة الصفحة */
  document.getElementById('mobileNav').addEventListener('click',function(){ setTimeout(function(){ mark(document.querySelector('#home.active')?'home':'menu'); },120); });
})();


/* ===== Original inline script 10 ===== */

(function(){
  var bar=document.getElementById('rrFavBar'), ov=document.getElementById('rrFavOv'), sh=document.getElementById('rrFavSheet'), list=document.getElementById('rrFavList');
  if(!bar) return;
  function favs(){ try{return JSON.parse(localStorage.getItem('rr_favs')||'[]')}catch(e){return []} }
  var KF=function(s){s=s||'';var a=s.split(/[A-Za-z]/)[0];if(!/[\u0600-\u06FF0-9]/.test(a))a=s;return a.replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/[^\u0600-\u06FFA-Za-z0-9 ]/g,' ').replace(/\s+/g,' ').trim()}; function nm(c){var n=c.querySelector('.card-name,.siniya-card-name,.siniya-featured-name,.school-featured-name,.power-deal-content h2');return n?KF(n.textContent):''}
  function close(){ ov.classList.remove('open'); sh.classList.remove('open'); }
  function render(){
    var f=favs(), seen={}, html=0; list.innerHTML='';
    document.querySelectorAll('[data-cart="1"]').forEach(function(c){
      var n=nm(c); if(!n||seen[n]||f.indexOf(n)<0) return; seen[n]=1; html++;
      var im=c.querySelector('.card-img')||c.querySelector('.school-featured-img')||c.querySelector('img'), pr=c.querySelector('.price-badge,.siniya-price,.power-deal-price');
      var r=document.createElement('div'); r.className='fv-row';
      r.innerHTML='<img alt=""><div class="fv-info"><b></b><small></small><div class="fv-act"></div></div>';
      if(im) r.querySelector('img').src=im.currentSrc||im.getAttribute('src')||im.src; r.querySelector('b').textContent=n; if(pr) r.querySelector('small').textContent=pr.textContent.trim();
      var act=r.querySelector('.fv-act');
      c.querySelectorAll('.add-cart-btn').forEach(function(b){
        var x=document.createElement('button'); x.textContent=b.textContent.trim(); x.onclick=function(){ close(); setTimeout(function(){ b.click() },250); }; act.appendChild(x);
      });
      var rm=document.createElement('button'); rm.className='rm'; rm.textContent='إزالة'; rm.onclick=function(){ var h=c.querySelector('.rr-fav'); if(h) h.click(); setTimeout(render,60); }; act.appendChild(rm);
      list.appendChild(r);
    });
    if(!html) list.innerHTML='<div class="fv-empty">لسه مفيش أصناف في المفضلة 💔<br>اضغط ♥ على أي صنف في المنيو وهيظهر هنا</div>';
  }
  bar.onclick=function(e){ e.stopPropagation(); document.body.classList.remove('favonly'); bar.classList.remove('on'); render(); ov.classList.add('open'); sh.classList.add('open'); };
  ov.onclick=close; document.getElementById('rrFavX').onclick=close;
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') close(); });
})();


/* ===== Original inline script 11 ===== */

(function(){
  var tx=document.getElementById('ptText'), nat=document.getElementById('f_ptime'), ap=document.getElementById('ptAp'), btn=document.getElementById('ptBtn'), hint=document.getElementById('ptHint');
  if(!tx||!nat) return;
  var per='pm', HINT='اكتب الوقت أو اضغط على رمز الساعة 🕒';
  function en(s){return s.replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)})}
  function setAp(p){per=p; [].forEach.call(ap.querySelectorAll('button'),function(b){b.classList.toggle('on',b.dataset.v===p)})}
  function show(h,m){ var h12=(h%12)||12, p=h>=12?'م':'ص'; hint.textContent='✔ موعد الاستلام: '+h12+':'+('0'+m).slice(-2)+' '+p; hint.className='ptime-hint ok'; }
  function clear(txt){ nat.value=''; hint.textContent=txt||HINT; hint.className='ptime-hint'; }
  function fromText(){
    var d=en(tx.value).replace(/\D/g,'').slice(0,4);
    tx.value = d.length>2 ? d.slice(0,d.length-2)+':'+d.slice(-2) : d;
    if(!d){ clear(); return; }
    var h,m;
    if(d.length<=2){h=+d;m=0} else {h=+d.slice(0,d.length-2); m=+d.slice(-2)}
    if(h>23||m>59||(d.length<=2&&h===0)){ clear('⚠️ الوقت غير صحيح'); return; }
    if(h>12){ setAp('pm'); } else if(h===0){ setAp('am'); }
    var h24=h; if(h<=12&&h!==0){ h24=(h%12)+(per==='pm'?12:0); } 
    nat.value=('0'+h24).slice(-2)+':'+('0'+m).slice(-2); show(h24,m);
    nat.dispatchEvent(new Event('input',{bubbles:true}));
  }
  tx.addEventListener('input',fromText);
  ap.addEventListener('click',function(e){var b=e.target.closest('button'); if(!b) return; setAp(b.dataset.v); fromText();});
  function fromNative(){
    if(!nat.value){ return; } var p=nat.value.split(':'), h=+p[0], m=+p[1];
    setAp(h>=12?'pm':'am'); tx.value=((h%12)||12)+':'+('0'+m).slice(-2); show(h,m);
  }
  nat.addEventListener('change',fromNative); nat.addEventListener('input',fromNative);
  btn.addEventListener('click',function(){ try{ if(nat.showPicker) nat.showPicker(); }catch(e){} });
})();


/* ===== Original inline script 12 ===== */

(function(){
  var b=document.body, y=0, locked=false;
  function lock(){ y=window.pageYOffset; b.style.position='fixed'; b.style.top='-'+y+'px'; b.style.left='0'; b.style.right='0'; b.style.width='100%'; locked=true; }
  function unlock(){ b.style.position=''; b.style.top=''; b.style.left=''; b.style.right=''; b.style.width=''; locked=false; window.scrollTo({top:y,left:0,behavior:'instant'}); }
  new MutationObserver(function(){ var on=b.classList.contains('no-scroll'); if(on&&!locked) lock(); else if(!on&&locked) unlock(); })
    .observe(b,{attributes:true,attributeFilter:['class']});
  var fs=document.getElementById('rrFavSheet');
  if(fs) new MutationObserver(function(){ b.classList.toggle('no-scroll', fs.classList.contains('open')); }).observe(fs,{attributes:true,attributeFilter:['class']});
})();


/* ===== Original inline script 13 ===== */

(function(){
  function ready(){ requestAnimationFrame(function(){ requestAnimationFrame(function(){ document.documentElement.classList.add('rr-ready'); }); }); }
  if(document.readyState==='complete') ready(); else window.addEventListener('load',ready);
  setTimeout(function(){ document.documentElement.classList.add('rr-ready'); },3000);
})();


/* ===== Original inline script 14 ===== */

(function(){
  var code=document.getElementById('pmCode'), hint=document.getElementById('pmCopyHint'), go=document.getElementById('promoGo');
  if(!code) return;
  code.addEventListener('click',function(){
    var done=function(){ hint.textContent='✅ تم نسخ الكود'; setTimeout(function(){ hint.textContent='اضغط للنسخ 📋'; },2200); };
    try{ navigator.clipboard.writeText('RED20').then(done,done); }catch(e){ done(); }
  });
  /* "يلا نطلب": بنطبّق الكود في السلة تلقائي */
  go.addEventListener('click',function(){
    setTimeout(function(){ var i=document.getElementById('couponInput'), b=document.getElementById('couponBtn'); if(i&&b){ i.value='RED20'; b.click(); } },60);
  });
})();


/* ===== Original inline script 15 ===== */

(function(){
  var bar=document.getElementById('rrCartBar'), n=document.getElementById('rrCbN'), tt=document.getElementById('rrCbT');
  function upd(){ var c=[]; try{ c=JSON.parse(localStorage.getItem('rr_cart')||'[]') }catch(e){}
    var q=0,s=0; c.forEach(function(i){ q+=i.qty||0; s+=(i.price||0)*(i.qty||0) });
    n.textContent=q; tt.textContent=s+' ج.م'; bar.classList.toggle('show',q>0); }
  bar.onclick=function(){ var f=document.querySelector('.cart-fab')||document.querySelector('#rrTabs [data-t=cart]'); if(f) f.click(); };
  upd(); setInterval(upd,900); window.addEventListener('storage',upd);
})();


/* ===== Original inline script 16 ===== */

(function(){
  var grid=document.querySelector('#home .category-grid'); if(!grid||document.getElementById('rrHs')) return;
  var wrap=document.createElement('div');
  wrap.innerHTML='<div class="rr-chips"><span>🛵 دليفري</span><span>🏪 استلام من فرع فيصل المريوطية</span><span>💵 كاش</span><span>📱 فودافون كاش</span><span>🏦 إنستا باي</span></div>'+
    '<div class="rr-row-title"><h2>🔥 الأكثر طلباً</h2><small>اسحب ←</small></div><div class="rr-hs" id="rrHs"></div>'+
    '<div class="rr-row-title"><h2>الأقسام</h2></div>';
  grid.parentNode.insertBefore(wrap,grid);
  var hs=document.getElementById('rrHs');
  var picks=[]; ['#new-items','#nashville','#chicken-sandwiches','#beef-sandwiches','#twister-supreme'].forEach(function(s){
    var cs=[].slice.call(document.querySelectorAll(s+' .card[data-cart="1"]')).slice(0,s==='#new-items'?3:2); picks=picks.concat(cs); });
  picks.slice(0,10).forEach(function(c){
    var im=c.querySelector('.card-img'), nm=c.querySelector('.card-name'), pr=c.querySelector('.price-badge'), ad=c.querySelector('.add-cart-btn');
    if(!im||!nm) return;
    var d=document.createElement('div'); d.className='rr-tile';
    d.innerHTML='<img alt="" loading="lazy"><div class="tb"><b></b><div class="tp"><span></span><button type="button" class="plus" aria-label="أضف">+</button></div></div>';
    d.querySelector('img').src=im.getAttribute('src'); d.querySelector('b').textContent=nm.textContent.split(/[A-Za-z]/)[0].trim()||nm.textContent.trim();
    d.querySelector('.tp span').textContent=pr?pr.textContent.trim():'';
    d.addEventListener('click',function(){ (ad||c).click(); });
    hs.appendChild(d);
  });
  /* القسم النشط في الشريط العلوي يتوسّط تلقائياً */
  var o=window.showSection;
  if(typeof o==='function') window.showSection=function(){ o.apply(this,arguments); setTimeout(function(){ var a=document.querySelector('#nav-list button.active'); if(a&&a.scrollIntoView) a.scrollIntoView({inline:'center',block:'nearest',behavior:'smooth'}); },120); };
})();


/* ===== Original inline script 17 ===== */

(function(){
  var API=window.RR_API, tabs=document.getElementById('rrTabs'); if(!API||!tabs) return;
  var $=function(i){return document.getElementById(i)}, STEP=2000, PER=10;
  function norm(p){return String(p||'').replace(/[٠-٩]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'.indexOf(d)}).replace(/\D/g,'').replace(/^(0020|20)/,'0').slice(-11)}
  function u(q){return API+(API.indexOf('?')>-1?'&':'?')+q}
  function post(b){return fetch(API,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(b)}).then(function(r){return r.json()})}
  var b=document.createElement('button'); b.setAttribute('data-t','pts'); b.innerHTML='<span>⭐</span>نقاطي'; tabs.insertBefore(b,tabs.children[3]);
  function open(){ var ph=''; try{ph=(JSON.parse(localStorage.getItem('rr_customer')||'{}')||{}).phone||''}catch(e){} if(!$('ptPhone').value) $('ptPhone').value=norm(ph); $('rrPtsOv').classList.add('open'); $('rrPtsSheet').classList.add('open'); if(norm($('ptPhone').value).length===11) load(); }
  function close(){ $('rrPtsOv').classList.remove('open'); $('rrPtsSheet').classList.remove('open'); }
  b.addEventListener('click',open); $('rrPtsOv').onclick=close; $('rrPtsX').onclick=close; $('ptGo').onclick=load;
  function mine(){try{return JSON.parse(localStorage.getItem('rr_my_codes')||'[]')}catch(e){return []}}
  function load(){
    var ph=norm($('ptPhone').value), out=$('ptOut'); if(ph.length!==11){ out.innerHTML='<p class="pt-note">⚠️ اكتب رقم موبايل صحيح (11 رقم)</p>'; return; }
    out.innerHTML='<p class="pt-note">⏳ جاري التحميل...</p>';
    fetch(u('action=points&phone='+ph)).then(function(r){return r.json()}).then(function(j){
      if(!j||!j.ok) throw 0; var p=j.points, next=(Math.floor(p/STEP)+1)*STEP, pct=Math.min(100,Math.round((p%STEP)/STEP*100));
      var h='<div class="pt-card"><small>رصيدك الحالي</small><b>'+p+'</b><small>نقطة · قيمة تعادل '+(p/PER).toFixed(0)+' جنيه</small><div class="pt-bar"><i style="width:'+pct+'%"></i></div><small style="display:block;margin-top:6px">باقي '+(next-p)+' نقطة للحصول على خصم '+(next/PER)+' جنيه</small></div>';
      if(j.pending>0) h+='<p class="pt-note">⏳ نقاط قيد التأكيد: '+j.pending+' (بتتضاف بعد ما المطعم يأكد استلامك للطلب)</p>';
      h+='<div class="pt-h">🛍️ متجر النقاط</div>';
      [2000,4000,6000,10000].forEach(function(t){ h+='<div class="pt-tier"><span>خصم '+(t/PER)+' ج<small>'+t+' نقطة</small></span><button class="pt-btn" data-p="'+t+'"'+(p>=t?'':' disabled')+'>استبدل</button></div>'; });
      var m=mine().filter(function(c){return c.phone===ph});
      if(m.length){ h+='<div class="pt-h">🎟️ أكوادي</div>'; m.forEach(function(c){ h+='<div class="pt-code"><span><strong>'+c.code+'</strong><br><small>خصم '+c.value+' ج</small></span><button class="pt-btn" data-use="'+c.code+'">استخدم</button></div>'; }); }
      out.innerHTML=h+'<p class="pt-note">الكود صالح لاستخدام واحد، وبتكتبه في خانة الكوبون في السلة.</p>';
    }).catch(function(){ out.innerHTML='<p class="pt-note">⚠️ تعذّر تحميل النقاط، جرّب تاني بعد شوية</p>'; });
  }
  $('ptOut').addEventListener('click',function(e){
    var r=e.target.closest('[data-p]'), us=e.target.closest('[data-use]');
    if(r){ r.disabled=true; r.textContent='...'; post({action:'redeem',phone:norm($('ptPhone').value),points:+r.dataset.p}).then(function(j){
        if(j&&j.ok){ var a=mine(); a.unshift({code:j.code,value:j.value,phone:norm($('ptPhone').value)}); localStorage.setItem('rr_my_codes',JSON.stringify(a)); } load(); }).catch(load); }
    if(us){ var i=document.getElementById('couponInput'), cb=document.getElementById('couponBtn'); if(i&&cb){ i.value=us.dataset.use; cb.click(); } close(); }
  });
  /* بعد كل طلب: نسجّل النقاط (قيد التأكيد) ونحرق كود النقاط المستخدم */
  window.rrOrderHook=function(o){ var ph=norm(o.phone); if(ph.length!==11) return;
    if(o.total>0) post({action:'order',phone:ph,total:o.total,orderId:'RR'+Date.now()}).catch(function(){});
    if(o.code) post({action:'useCode',code:o.code}).catch(function(){}); };
})();


/* ===== Original inline script 18 ===== */

(function(){
  var hb=document.querySelector('.cart-head-btn'), tab=document.querySelector('#rrTabs [data-t=pts]');
  if(!hb||!tab||document.querySelector('.pts-head')) return;
  var b=document.createElement('button'); b.type='button'; b.className='pts-head'; b.innerHTML='⭐ نقاطي';
  b.onclick=function(){ tab.click(); };
  hb.parentNode.insertBefore(b,hb);
})();



/* ===== RR data catalog hydration + accessibility/performance ===== */
(function(){
  'use strict';
  function norm(s){
    return String(s||'').toLowerCase()
      .replace(/[\u064B-\u065F\u0640]/g,'')
      .replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه')
      .replace(/[^\u0600-\u06FFa-z0-9 ]/g,' ')
      .replace(/\s+/g,' ').trim();
  }
  function key(section,name){ return String(section||'')+'|'+norm(name); }
  function getCardName(card){
    var n=card.querySelector('.card-name'); if(!n) return '';
    var clone=n.cloneNode(true); clone.querySelectorAll('span').forEach(function(s){s.remove()});
    return clone.textContent.replace(/[\u{1F300}-\u{1FAFF}\u2600-\u27BF]/gu,'').replace(/\s+/g,' ').trim();
  }
  fetch('./menu.json',{cache:'no-cache'}).then(function(r){
    if(!r.ok) throw new Error('menu.json HTTP '+r.status);
    return r.json();
  }).then(function(data){
    var map=new Map();
    (data.items||[]).forEach(function(item){ map.set(key(item.section,item.name),item); });
    document.querySelectorAll('.card').forEach(function(card){
      var section=(card.closest('section')||{}).id||'unknown';
      var item=map.get(key(section,getCardName(card)));
      if(!item) return;
      card.dataset.menuId=item.id;
      var desc=card.querySelector('.card-desc');
      if(desc && item.description) desc.textContent=item.description;
      var img=card.querySelector('img.card-img');
      if(img && item.image){
        if(img.getAttribute('src')!==item.image) img.setAttribute('src',item.image);
        img.setAttribute('alt',item.imageAlt||item.name);
        img.setAttribute('loading','lazy'); img.setAttribute('decoding','async');
      }
      var price=card.querySelector('.price-badge');
      if(price && item.priceLabel) price.textContent=item.priceLabel;
    });
    document.documentElement.dataset.menuLoaded='true';
    window.dispatchEvent(new CustomEvent('rr:menu-loaded',{detail:{count:(data.items||[]).length}}));
  }).catch(function(err){
    console.warn('[Red Roosters] Menu data unavailable; using embedded HTML fallback.',err);
  });
  // Fix image layout shift and icon-only controls' accessible names.
  document.querySelectorAll('img').forEach(function(img){
    if(!img.hasAttribute('decoding')) img.decoding='async';
    if(!img.hasAttribute('loading')) img.loading='lazy';
  });
  document.querySelectorAll('button').forEach(function(b){
    if(!b.getAttribute('aria-label') && !b.textContent.trim()){
      var title=b.getAttribute('title')||b.dataset.label;
      if(title) b.setAttribute('aria-label',title);
    }
  });
  // Respect reduced motion and keyboard escape for dialogs.
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){
      document.querySelectorAll('[role="dialog"].open,[role="dialog"][aria-modal="true"]').forEach(function(el){
        var close=el.querySelector('[data-close],.x-btn,button[aria-label*="إغلاق"]');
        if(close) close.click();
      });
    }
  });
})();


/* PWA service worker registration: only on HTTP(S), not file:// */
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('./service-worker.js').catch(function(e){
      console.warn('[Red Roosters] Service worker registration failed',e);
    });
  });
}
