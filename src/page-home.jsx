// HOMEPAGE — clean placeholder cells, no photos

const PHOTOS = {
  homeHero: '/public/assets/photos/home-hero-morita.png',
  equipmentFront: '/public/assets/photos/equipment-front.png',
  equipmentSide: '/public/assets/photos/equipment-side.png',
  equipmentXray: '/public/assets/photos/equipment-xray.png',
  centerReception: '/public/assets/photos/center-reception.jpg',
  centerWorkstation: '/public/assets/photos/center-workstation.jpg',
  centerPanoramic: '/public/assets/photos/center-panoramic.png',
  galleryWorkstation: '/public/assets/photos/download.jpg',
  galleryWaiting: '/public/assets/photos/download-1.jpg',
  galleryReception: '/public/assets/photos/download-2.jpg',
  galleryScanner: '/public/assets/photos/download-3.jpg',
  patientHero: '/public/assets/photos/client.png',
  doctorWorkstation: '/public/assets/photos/DSC03803.jpg',
};
window.PHOTOS = PHOTOS;

// Clean image placeholder component
function PhotoSlot({ label, ratio='16/9', className='', dark=false, style={}, src='', position='center center', children }){
  return (
    <div
      className={`relative rounded-2xl overflow-hidden flex items-center justify-center ${dark ? 'bg-ink/5' : 'bg-paper3'} ${className}`}
      style={ratio ? {aspectRatio: ratio, ...style} : style}
    >
      {src ? (
        <img
          src={src}
          alt={label}
          className="absolute inset-0 h-full w-full object-cover"
          style={{objectPosition: position}}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-mute2 opacity-50">
            <rect x="3" y="5" width="18" height="14" rx="2"/>
            <circle cx="8.5" cy="10.5" r="1.5"/>
            <path d="M21 15l-5-5L5 19"/>
          </svg>
          <span className="text-[11px] tracking-[0.16em] uppercase text-mute2 opacity-60 text-center">{label}</span>
        </div>
      )}
      {children}
    </div>
  );
}
window.PhotoSlot = PhotoSlot;

function HomeHero(){
  const { lang } = useLang();
  const T = {
    open:       { ru:'Открыто сейчас',      kz:'Қазір ашық' },
    sub1:       { ru:'секунд снимок',        kz:'секунд сурет' },
    sub2:       { ru:'разрешение',           kz:'ажыратымдылық' },
    sub3:       { ru:'лучевая нагрузка',     kz:'сәуле дозасы' },
    desc:       { ru:'Независимый диагностический центр в Астане. Делаем точные снимки за 9\u00A0секунд — лечение и консультации остаются за вашим врачом.',
                  kz:'Астанадағы тәуелсіз диагностика орталығы. 9\u00A0секундта дәл суреттер түсіреміз — емдеу мен кеңес дәрігеріңізде қалады.' },
    scanning:   { ru:'Сканирование активно', kz:'Сканерлеу белсенді' },
    dose:       { ru:'Доза',                 kz:'Доза' },
  };
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-paper" data-screen-label="Home/Hero">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">

        <div className="hanim-1 flex items-center gap-3 mb-10">
          <Chip>Morita Veraview X800 · 3D / Pano / Ceph</Chip>
          <span className="hidden sm:inline-flex items-center gap-2 text-[12px] text-mute">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 bg-brand rounded-full pulse-dot"/>
            </span>
            {T.open[lang]}
          </span>
        </div>

        <h1 className="hanim-2 font-medium text-ink text-[52px] sm:text-[72px] md:text-[100px] lg:text-[120px] leading-[0.98] tracking-tighter2 max-w-[14ch]">
          3D‑диагностика<br/>
          <em className="italic font-light text-brand">на Morita</em><br/>
          Veraview&nbsp;X800
        </h1>

        <div className="hanim-3 mt-12 grid lg:grid-cols-12 gap-10 items-end">
          <p className="lg:col-span-6 text-[17px] md:text-[19px] text-mute leading-relaxed max-w-xl">
            {T.desc[lang]}
          </p>
          <div className="lg:col-span-6 grid grid-cols-3 gap-4 sm:gap-6">
            {[
              ['9',    T.sub1[lang]],
              ['80μm', T.sub2[lang]],
              ['−40%', T.sub3[lang]],
            ].map(([n,l],i)=>(
              <div key={i} className="border-l border-line2 pl-4 sm:pl-6">
                <div className="font-medium text-[30px] sm:text-[40px] text-ink leading-none">{n}</div>
                <div className="mt-2 text-[11px] tracking-[0.14em] uppercase text-mute">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hanim-4 mt-16">
          <PhotoSlot ratio="21/9" label="Кабинет с аппаратом Morita Veraview X800" className="w-full" src={PHOTOS.homeHero} position="54% 28%">
            <div className="absolute right-6 bottom-6 bg-paper/90 backdrop-blur rounded-full px-5 py-2.5 flex items-center gap-3 shadow-sm">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 bg-brand rounded-full pulse-dot"/>
              </span>
              <span className="text-[13px] text-ink">{T.scanning[lang]}</span>
              <span className="h-4 w-px bg-line2"/>
              <span className="text-[13px] text-mute">{T.dose[lang]} <span className="font-medium text-ink ml-1">14 μSv</span></span>
            </div>
          </PhotoSlot>
        </div>
      </div>
    </section>
  );
}

function HomeSplit(){
  const { lang } = useLang();
  const T = {
    forPatient:  { ru:'Для пациента · 01',  kz:'Пациентке · 01' },
    iPatient:    { ru:'пациент',             kz:'пациентпін' },
    iPatientPre: { ru:'Я',                   kz:'Мен' },
    patientDesc: { ru:'Запись на снимок за 60 секунд. Получаете результат на руки и по электронной почте.',
                   kz:'60 секундта суретке жазылу. Нәтижені қолыңызға және электрондық поштаңызға аласыз.' },
    steps:       { ru:'5 шагов',             kz:'5 қадам' },
    visit:       { ru:'~7 минут визита',     kz:'~7 минут барыс' },
    forDoctor:   { ru:'Для врача · 02',      kz:'Дәрігерге · 02' },
    iDoctor:     { ru:'врач',                kz:'дәрігермін' },
    iDoctorPre:  { ru:'Я',                   kz:'Мен' },
    doctorDesc:  { ru:'Снимки приходят в личный кабинет автоматически. Реферальная программа и обучение по чтению КЛКТ.',
                   kz:'Суреттер жеке кабинетке автоматты түрде келеді. Реферал бағдарламасы және ККЛТ оқу бойынша оқыту.' },
    cabinet:     { ru:'Личный кабинет',      kz:'Жеке кабинет' },
    community:   { ru:'Сообщество',          kz:'Қауымдастық' },
  };
  return (
    <section className="py-20 md:py-28 bg-paper" data-screen-label="Home/Split">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="reveal reveal-stagger grid md:grid-cols-2 gap-6">
          <a href="#/patient" className="group relative overflow-hidden rounded-2xl bg-paper2 hover:bg-paper3 transition-colors p-10 md:p-14 min-h-[440px] flex flex-col">
            <div className="flex items-start justify-between">
              <Eyebrow>{T.forPatient[lang]}</Eyebrow>
              <span className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-line2 group-hover:bg-ink group-hover:border-ink group-hover:text-paper transition-colors">
                <Icon.Arrow className="h-4 w-4"/>
              </span>
            </div>
            <div className="mt-auto pt-16">
              <h2 className="font-medium text-[56px] md:text-[80px] leading-[0.95] tracking-tighter2 text-ink">
                {T.iPatientPre[lang]} <em className="font-display italic font-light text-brand">{T.iPatient[lang]}</em>
              </h2>
              <p className="mt-5 text-mute max-w-sm text-[15px] leading-relaxed">
                {T.patientDesc[lang]}
              </p>
              <div className="mt-8 flex items-center gap-5 text-[13px] text-mute">
                <span>{T.steps[lang]}</span>
                <span className="h-px w-6 bg-line2"/>
                <span>{T.visit[lang]}</span>
              </div>
            </div>
          </a>

          <a href="#/doctor" className="group relative overflow-hidden rounded-2xl bg-ink text-paper p-10 md:p-14 min-h-[440px] flex flex-col hover:bg-ink2 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3 text-[12px] tracking-[0.16em] uppercase text-brand">
                <span className="h-1 w-1 rounded-full bg-brand"/>
                {T.forDoctor[lang]}
              </div>
              <span className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/20 group-hover:bg-deep group-hover:border-deep transition-colors">
                <Icon.Arrow className="h-4 w-4"/>
              </span>
            </div>
            <div className="mt-auto pt-16">
              <h2 className="font-medium text-[56px] md:text-[80px] leading-[0.95] tracking-tighter2 text-paper">
                {T.iDoctorPre[lang]} <em className="font-display italic font-light text-brand">{T.iDoctor[lang]}</em>
              </h2>
              <p className="mt-5 text-paper/60 max-w-sm text-[15px] leading-relaxed">
                {T.doctorDesc[lang]}
              </p>
              <div className="mt-8 flex items-center gap-5 text-[13px] text-paper/50">
                <span>{T.cabinet[lang]}</span>
                <span className="h-px w-6 bg-paper/20"/>
                <span>{T.community[lang]}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function HomeBenefits(){
  useReveal();
  const { lang } = useLang();
  const T = {
    eyebrow: { ru:'Преимущества',   kz:'Артықшылықтар' },
    h2pre:   { ru:'Почему пациенты', kz:'Неліктен пациенттер' },
    h2em:    { ru:'выбирают',        kz:'таңдайды' },
    h2post:  { ru:'наш центр.',      kz:'біздің орталықты.' },
    stat:    { ru:['80 мкм','9 сек','0 консультаций'], kz:['80 мкм','9 сек','0 кеңес'] },
    items: {
      ru: [
        { title:'Точность',      text:'Разрешение до 80 мкм. Видны каналы корня и микротрещины, незаметные на 2D-снимках.' },
        { title:'Скорость',      text:'Снимок за 9 секунд. На руки и врачу — в день обращения, без ожидания.' },
        { title:'Независимость', text:'Только диагностика. Не лечим, не консультируем — никаких конфликтов интересов.' },
      ],
      kz: [
        { title:'Дәлдік',        text:'80 мкм-ге дейін ажыратымдылық. 2D-суреттерде көрінбейтін тамыр арналары мен микрожарықтар.' },
        { title:'Жылдамдық',     text:'9 секундта сурет. Қолыңызға және дәрігерге — жүгінген күні, күтусіз.' },
        { title:'Тәуелсіздік',   text:'Тек диагностика. Емдемейміз, кеңес бермейміз — мүдделер қақтығысы жоқ.' },
      ],
    },
  };
  const icons = [Icon.Target, Icon.Bolt, Icon.Independence];
  const items = T.items[lang];
  return (
    <section className="py-24 md:py-32 bg-paper border-t border-line" data-screen-label="Home/Benefits">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="reveal mb-16 max-w-3xl">
          <Eyebrow>{T.eyebrow[lang]}</Eyebrow>
          <H2 className="mt-6">{T.h2pre[lang]} <em className="font-display italic font-light text-brand">{T.h2em[lang]}</em> {T.h2post[lang]}</H2>
        </div>
        <div className="reveal reveal-stagger grid md:grid-cols-3 gap-6">
          {items.map((it,i)=>(
            <div key={it.title} className="rounded-2xl bg-paper2 p-8 md:p-10 flex flex-col">
              <span className="h-12 w-12 rounded-full bg-paper inline-flex items-center justify-center text-brand">
                {React.createElement(icons[i], {className:"h-6 w-6"})}
              </span>
              <h3 className="mt-10 font-medium text-[28px] leading-tight tracking-tighter2 text-ink">{it.title}</h3>
              <p className="mt-3 text-[14.5px] text-mute leading-relaxed">{it.text}</p>
              <div className="mt-10 pt-5 border-t border-line2 flex items-center justify-between text-[12px] text-mute">
                <span>{`0${i+1} / 03`}</span>
                <span className="tracking-[0.14em] uppercase">{T.stat[lang][i]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeEquipment(){
  useReveal();
  const { lang } = useLang();
  const T = {
    eyebrow:   { ru:'Оборудование',   kz:'Жабдық' },
    h2a:       { ru:'Один аппарат.',  kz:'Бір аппарат.' },
    h2em:      { ru:'Сделанный безупречно.', kz:'Мінсіз жасалған.' },
    desc:      { ru:'Veraview X800 — флагман J. Morita. iF Design Gold Award. Единственный аппарат в нашем центре.',
                 kz:'Veraview X800 — J. Morita флагманы. iF Design Gold Award. Біздің орталықтың жалғыз аппараты.' },
    cbct:      { ru:'CBCT снимок',    kz:'CBCT сурет' },
    cbctRes:   { ru:'Разрешение 80μm · Ø40×H40', kz:'Ажыратымдылық 80μm · Ø40×H40' },
    serial:    { ru:'Серийный № X800-2024', kz:'Сериялық № X800-2024' },
    specs:     { ru:'Характеристики', kz:'Сипаттамалар' },
    specVer:   { ru:'Spec v.4',       kz:'Spec v.4' },
    specDesc:  { ru:'Гибридная система КТ, панорамных и цефалометрических снимков.',
                 kz:'КТ, панорамалық және цефалометриялық суреттердің гибридтік жүйесі.' },
    moreLink:  { ru:'Подробнее об аппарате', kz:'Аппарат туралы толығырақ' },
    specKeys: {
      ru: ['Производитель','Модель','Разрешение','Зона снимка','Экспозиция','Доза (КЛКТ)','Режимы','Награда'],
      kz: ['Өндіруші','Үлгі','Ажыратымдылық','Түсіру аймағы','Экспозиция','Доза (ККЛТ)','Режимдер','Марапат'],
    },
  };
  const specVals = ['J. Morita Mfg., Япония','Veraview X800','80 мкм','до Ø100 × 80 мм','от 9 секунд','от 85 µSv','CBCT · Panoramic · Cephalometric','iF Design Gold Award'];
  return (
    <section className="py-24 md:py-32 bg-paper2" data-screen-label="Home/Equipment">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="reveal mb-16 max-w-3xl">
          <Eyebrow>{T.eyebrow[lang]}</Eyebrow>
          <H2 className="mt-6">{T.h2a[lang]}<br/><em className="font-display italic font-light text-brand">{T.h2em[lang]}</em></H2>
          <p className="mt-6 text-mute text-[16px] max-w-xl leading-relaxed">
            {T.desc[lang]}
          </p>
        </div>

        <div className="reveal grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <PhotoSlot
              ratio="4/3"
              label="Morita Veraview X800 — вид спереди"
              src={PHOTOS.equipmentFront}
              position="50% 50%"
            />
            <div className="grid grid-cols-2 gap-4">
              <PhotoSlot
                ratio="4/3"
                label="Morita Veraview X800 — вид сбоку"
                src={PHOTOS.equipmentSide}
                position="50% 50%"
              />
              <PhotoSlot
                ratio="4/3"
                label="CBCT снимок"
                dark
                src={PHOTOS.equipmentXray}
                position="53% 50%"
              >
                <div className="absolute inset-x-0 top-0 p-5 flex items-start justify-between">
                  <Label className="text-paper/55">{T.cbct[lang]}</Label>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 to-transparent"/>
                <div className="absolute left-5 right-5 bottom-5 text-[12px] text-paper/60">{T.cbctRes[lang]}</div>
              </PhotoSlot>
            </div>
            <div className="flex items-center justify-between text-[12px] text-mute px-1">
              <span>J. Morita · Япония · iF Design Gold Award</span>
              <span>{T.serial[lang]}</span>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl bg-paper p-8 md:p-10 border border-line">
            <div className="flex items-baseline justify-between">
              <Eyebrow>{T.specs[lang]}</Eyebrow>
              <Label>{T.specVer[lang]}</Label>
            </div>
            <h3 className="mt-5 font-medium text-[28px] tracking-tighter2 leading-tight">Veraview X800</h3>
            <p className="mt-3 text-mute text-[14px] leading-relaxed">
              {T.specDesc[lang]}
            </p>
            <ul className="mt-8 divide-y divide-line">
              {T.specKeys[lang].map((k,i)=>(
                <li key={k} className="grid grid-cols-2 py-3 gap-4 items-baseline">
                  <span className="text-[12px] text-mute">{k}</span>
                  <span className="text-[13.5px] text-ink">{specVals[i]}</span>
                </li>
              ))}
            </ul>
            <a href="#/about" className="mt-8 inline-flex items-center gap-2 text-brand group">
              <span className="text-[13px]">{T.moreLink[lang]}</span>
              <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeClinicVisual(){
  useReveal();
  const { lang } = useLang();
  const T = {
    eyebrow: { ru:'Центр',           kz:'Орталық' },
    h2pre:   { ru:'Современное',     kz:'Дәл диагностикаға арналған' },
    h2em:    { ru:'пространство',    kz:'заманауи кеңістік' },
    h2post:  { ru:'для точной диагностики.', kz:'.' },
    cards: {
      ru: [['Ресепшен','3D Scan diagnostics center'],['Рабочее место','Просмотр и печать снимков'],['Ваш снимок','DICOM · Panoramic · Ceph']],
      kz: [['Ресепшн','3D Scan diagnostics center'],['Жұмыс орны','Суреттерді қарау және басып шығару'],['Сіздің суретіңіз','DICOM · Panoramic · Ceph']],
    },
  };
  return (
    <section className="py-24 md:py-32 bg-paper" data-screen-label="Home/Clinic">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="reveal mb-16 max-w-2xl">
          <Eyebrow>{T.eyebrow[lang]}</Eyebrow>
          <H2 className="mt-6">{T.h2pre[lang]} <em className="font-display italic font-light text-brand">{T.h2em[lang]}</em>{T.h2post[lang]}</H2>
        </div>
        <div className="reveal grid grid-cols-12 gap-4" style={{alignItems:'stretch'}}>
          <div className="col-span-12 md:col-span-7 flex">
            <PhotoSlot
              ratio={null}
              label="Ресепшен 3D Scan diagnostics center"
              className="w-full"
              style={{minHeight:'400px'}}
              src={PHOTOS.centerReception}
              position="50% 50%"
            />
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
            <div className="flex-1">
              <PhotoSlot
                ratio={null}
                label="Рабочее место врача"
                className="w-full h-full"
                style={{minHeight:'192px'}}
                src={PHOTOS.centerWorkstation}
                position="50% 54%"
              />
            </div>
            <div className="flex-1">
              <PhotoSlot
                ratio={null}
                label="Панорамный снимок"
                className="w-full h-full"
                style={{minHeight:'192px'}}
                dark
                src={PHOTOS.centerPanoramic}
                position="50% 50%"
              />
            </div>
          </div>
        </div>
        <div className="reveal mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {T.cards[lang].map(([t,s])=>(
            <div key={t} className="rounded-xl bg-paper2 px-5 py-4 border border-line">
              <div className="text-[14px] font-medium text-ink">{t}</div>
              <div className="text-[12px] text-mute mt-1">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeBookCTA(){
  useReveal();
  const { lang } = useLang();
  const T = {
    avail:   { ru:'Сегодня свободно: 11:00, 14:30, 17:00', kz:'Бүгін бос: 11:00, 14:30, 17:00' },
    h2pre:   { ru:'Сделайте снимок',   kz:'Бүгін суретке' },
    h2em:    { ru:'уже сегодня.',      kz:'түсіріңіз.' },
    desc:    { ru:'Без направления и очередей. Запись за минуту.',
               kz:'Жолдамасыз және кезексіз. Бір минутта жазылу.' },
    online:  { ru:'Записаться онлайн', kz:'Онлайн жазылу' },
    wa:      { ru:'Написать в WhatsApp', kz:'WhatsApp-қа жазу' },
  };
  return (
    <section className="pt-24 md:pt-32 pb-0 bg-paper2" data-screen-label="Home/CTA">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pb-24">
        <div className="reveal rounded-2xl border border-line bg-paper p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 bg-brand rounded-full pulse-dot"/>
              </span>
              <span className="text-[13px] text-mute">{T.avail[lang]}</span>
            </div>
            <h2 className="font-medium text-[40px] md:text-[56px] leading-[1.02] tracking-tighter2 text-ink">
              {T.h2pre[lang]}<br/>
              <em className="font-display italic font-light text-brand">{T.h2em[lang]}</em>
            </h2>
            <p className="mt-5 text-mute max-w-md text-[15.5px] leading-relaxed">
              {T.desc[lang]}
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <a href="#/patient" className="bg-ink text-paper px-6 py-3.5 rounded-full text-[14px] font-medium hover:bg-ink2 transition-colors flex items-center justify-between">
              <span>{T.online[lang]}</span>
              <Icon.Arrow className="h-4 w-4"/>
            </a>
            <a href="tel:+77172000000" className="border border-line2 text-ink px-6 py-3.5 rounded-full text-[14px] font-medium hover:border-ink transition-colors flex items-center justify-between">
              <span>+7 7172 00-00-00</span>
              <Icon.Phone className="h-4 w-4 text-mute"/>
            </a>
            <a href="https://wa.me/77172000000" className="border border-line2 text-ink px-6 py-3.5 rounded-full text-[14px] font-medium hover:border-ink transition-colors flex items-center justify-between">
              <span>{T.wa[lang]}</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PageHome(){
  return (
    <>
      <HomeHero/>
      <HomeSplit/>
      <HomeBenefits/>
      <HomeEquipment/>
      <HomeClinicVisual/>
      <HomeBookCTA/>
    </>
  );
}

window.PageHome = PageHome;
