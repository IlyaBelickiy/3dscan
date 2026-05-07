// ABOUT — with clinic photo gallery replacing team block

function AboutHero(){
  const { lang } = useLang();
  const T = {
    eyebrow: { ru:'О центре',         kz:'Орталық туралы' },
    h1pre:   { ru:'Делаем',           kz:'Тек бір нәрсе' },
    h1em:    { ru:'только одно.',     kz:'жасаймыз.' },
    h1post:  { ru:'Хорошо.',          kz:'Жақсы.' },
    desc:    { ru:'3D Scan — независимый диагностический центр в Астане. Мы не лечим зубы, не делаем гигиену и не предлагаем «заодно посмотреть». Делаем точные снимки на одном аппарате премиум-класса — и больше ничего.',
               kz:'3D Scan — Астанадағы тәуелсіз диагностика орталығы. Біз тіс емдемейміз, гигиена жасамаймыз және «сонымен бірге қарайық» деп ұсынбаймыз. Премиум класстағы бір аппаратта дәл суреттер түсіреміз — және одан артық ештеңе.' },
  };
  return (
    <section className="pt-32 pb-20 bg-paper" data-screen-label="About/Hero">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="hanim-1"><Eyebrow>{T.eyebrow[lang]}</Eyebrow></div>
        <h1 className="hanim-2 mt-6 font-medium text-[52px] sm:text-[80px] md:text-[104px] leading-[0.98] tracking-tighter2 max-w-[16ch]">
          {T.h1pre[lang]} <em className="font-display italic font-light text-brand">{T.h1em[lang]}</em><br/>{T.h1post[lang]}
        </h1>
        <p className="hanim-3 mt-8 max-w-2xl text-[18px] text-mute leading-relaxed">
          {T.desc[lang]}
        </p>
      </div>
    </section>
  );
}

function AboutPrinciples(){
  useReveal();
  const { lang } = useLang();
  const T = {
    eyebrow: { ru:'Принципы',   kz:'Принциптер' },
    h2pre:   { ru:'Четыре правила,', kz:'Біз бұзбайтын' },
    h2em:    { ru:'которые мы не нарушаем.', kz:'төрт ереже.' },
    items: {
      ru: [
        { n:'01', title:'Независимость',    text:'У нас нет лечащих врачей. Никто не «найдёт» у вас лишний кариес, чтобы записать на лечение.' },
        { n:'02', title:'Один аппарат',     text:'Veraview X800 — флагман J. Morita. Все процессы выстроены вокруг одной машины.' },
        { n:'03', title:'Без советов',      text:'Расшифровка и план лечения — задача вашего врача. Мы передаём только данные.' },
        { n:'04', title:'Прозрачные цены',  text:'Один тариф за исследование. Никаких «доплат за дополнительные проекции» по факту.' },
      ],
      kz: [
        { n:'01', title:'Тәуелсіздік',    text:'Бізде емдеуші дәрігерлер жоқ. Ешкім емдеуге жазу үшін сізде «артық кариес» таппайды.' },
        { n:'02', title:'Бір аппарат',    text:'Veraview X800 — J. Morita флагманы. Барлық процестер бір машина айналасында құрылған.' },
        { n:'03', title:'Кеңессіз',       text:'Шифрды ашу мен емдеу жоспары — дәрігеріңіздің міндеті. Біз тек деректерді береміз.' },
        { n:'04', title:'Мөлдір бағалар', text:'Зерттеу үшін бір тариф. Нақты «қосымша проекциялар үшін доплат» жоқ.' },
      ],
    },
  };
  const items = T.items[lang];
  return (
    <section className="py-24 md:py-32 bg-paper2" data-screen-label="About/Principles">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="reveal mb-16 max-w-2xl">
          <Eyebrow>{T.eyebrow[lang]}</Eyebrow>
          <H2 className="mt-6">{T.h2pre[lang]} <em className="font-display italic font-light text-brand">{T.h2em[lang]}</em></H2>
        </div>
        <div className="reveal reveal-stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(it=>(
            <div key={it.n} className="rounded-2xl bg-paper p-7">
              <Label className="text-brand">{it.n}</Label>
              <h3 className="mt-12 font-medium text-[24px] tracking-tighter2 leading-tight">{it.title}</h3>
              <p className="mt-3 text-[14px] text-mute leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutEquipment(){
  useReveal();
  const { lang } = useLang();
  const T = {
    eyebrow:   { ru:'Оборудование',   kz:'Жабдық' },
    h2pre:     { ru:'Veraview X800.', kz:'Veraview X800.' },
    h2em:      { ru:'Один аппарат',   kz:'Біз толығымен назар аударатын бір аппарат' },
    h2post:    { ru:', на котором мы сосредоточены полностью.', kz:'.' },
    installed: { ru:'Установлен',     kz:'Орнатылған' },
    instDate:  { ru:'Январь 2024 · ввод в эксплуатацию', kz:'2024 қаңтар · пайдалануға берілді' },
    stats: {
      ru: [['Сделано','2 840'],['Пациентов','2 100'],['Точность','99.8%']],
      kz: [['Жасалды','2 840'],['Пациент','2 100'],['Дәлдік','99.8%']],
    },
  };
  return (
    <section className="py-24 md:py-32 bg-paper" data-screen-label="About/Equipment">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="reveal mb-16 max-w-2xl">
          <Eyebrow>{T.eyebrow[lang]}</Eyebrow>
          <H2 className="mt-6">{T.h2pre[lang]} <em className="font-display italic font-light text-brand">{T.h2em[lang]}</em>{T.h2post[lang]}</H2>
        </div>
        <div className="reveal grid lg:grid-cols-12 gap-6" style={{alignItems:'stretch'}}>
          <div className="lg:col-span-7 flex">
            <PhotoSlot
              ratio={null}
              label="Morita Veraview X800 — вид спереди"
              className="w-full"
              style={{minHeight:'420px'}}
              src={PHOTOS.equipmentFront}
              position="50% 32%"
            />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex-1">
              <PhotoSlot
                ratio={null}
                label="Morita Veraview X800 — вид сбоку"
                className="w-full h-full"
                style={{minHeight:'200px'}}
                src={PHOTOS.equipmentSide}
                position="50% 15%"
              />
            </div>
            <div className="rounded-2xl bg-paper2 p-6">
              <Label>{T.installed[lang]}</Label>
              <div className="mt-2 text-[16px] text-ink">{T.instDate[lang]}</div>
              <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-line">
                {T.stats[lang].map(([k,v])=>(
                  <div key={k}><Label>{k}</Label><div className="font-medium text-[20px] text-ink mt-1">{v}</div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutClinicGallery(){
  useReveal();
  const { lang } = useLang();
  const T = {
    eyebrow: { ru:'Наш центр',      kz:'Біздің орталық' },
    h2pre:   { ru:'Пространство,',  kz:'Дәл диагностикаға арналған' },
    h2em:    { ru:'созданное',      kz:'кеңістік' },
    h2post:  { ru:'для точной диагностики.', kz:'.' },
    desc:    { ru:'Современный интерьер, зона ожидания без лишних процедур, работа без выходных с 09:00 до 21:00.',
               kz:'Заманауи интерьер, артық процедурасыз күту аймағы, демалыссыз 09:00-ден 21:00-ге дейін жұмыс.' },
  };
  return (
    <section className="py-24 md:py-32 bg-paper2" data-screen-label="About/Gallery">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="reveal mb-16 max-w-2xl">
          <Eyebrow>{T.eyebrow[lang]}</Eyebrow>
          <H2 className="mt-6">{T.h2pre[lang]} <em className="font-display italic font-light text-brand">{T.h2em[lang]}</em>{T.h2post[lang]}</H2>
          <p className="mt-6 text-mute text-[16px] leading-relaxed max-w-lg">
            {T.desc[lang]}
          </p>
        </div>
        <div className="reveal flex flex-col gap-4">
          <div className="grid grid-cols-12 gap-4 items-stretch">
            <div className="col-span-12 md:col-span-8">
              <PhotoSlot ratio="16/9" label="Фото · Кабинет сканирования" className="w-full h-full" src={PHOTOS.galleryWorkstation} position="55% 45%" />
            </div>
            <div className="col-span-12 md:col-span-4">
              <PhotoSlot ratio={null} label="Фото · Зона ожидания" className="w-full h-full" style={{aspectRatio:'16/9'}} src={PHOTOS.galleryWaiting} position="50% 35%" />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-stretch">
            <div className="col-span-12 md:col-span-4">
              <PhotoSlot ratio={null} label="Фото · Ресепшн" className="w-full h-full" style={{aspectRatio:'16/9'}} src={PHOTOS.galleryReception} position="50% 30%" />
            </div>
            <div className="col-span-12 md:col-span-8">
              <PhotoSlot ratio="16/9" label="Фото · Позиционирование пациента" className="w-full h-full" src={PHOTOS.galleryScanner} position="55% 40%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutFAQ(){
  useReveal();
  const { lang } = useLang();
  const T = {
    eyebrow:  { ru:'Вопросы',         kz:'Сұрақтар' },
    h2pre:    { ru:'Часто',           kz:'Жиі' },
    h2em:     { ru:'спрашивают.',     kz:'сұрайды.' },
    hint:     { ru:'Не нашли ответа? Напишите в WhatsApp — отвечаем за 5 минут.',
                kz:'Жауап таба алмадыңыз ба? WhatsApp-қа жазыңыз — 5 минутта жауап береміз.' },
    contact:  { ru:'Связаться →',     kz:'Байланысу →' },
    faqs: {
      ru: [
        { q:'Можете ли вы расшифровать снимок?',
          a:'Нет. Мы передаём вам файл и распечатку — расшифровкой и планом лечения занимается ваш лечащий врач. Это сознательная позиция: мы не вмешиваемся в работу вашего стоматолога.' },
        { q:'Как долго хранится снимок?',
          a:'Все снимки хранятся в нашем защищённом хранилище 7 лет. Вы можете в любой момент запросить копию по электронной почте или через личный кабинет вашего врача.' },
        { q:'Можно прийти без направления?',
          a:'Да. Наличие направления необязательно — но если оно есть, обязательно покажите администратору. Мы передадим снимок указанному в направлении врачу автоматически.' },
        { q:'Какая доза облучения у КЛКТ X800?',
          a:'От 85 µSv на исследование — это в 5–7 раз ниже стандартной медицинской КТ и сопоставимо с обычной панорамой. Подробные параметры всегда указываются в DICOM-файле.' },
        { q:'Сколько стоит снимок?',
          a:'Цены фиксированные и опубликованы на странице услуг. Никаких «доплат за дополнительные проекции» по факту — если в процессе нужны дополнительные кадры, делаем без доплаты.' },
      ],
      kz: [
        { q:'Суретті шешіп бере аласыздар ма?',
          a:'Жоқ. Біз сізге файл мен баспа береміз — шифрды ашу мен емдеу жоспарымен сіздің дәрігеріңіз айналысады. Бұл саналы ұстаным: біз стоматологыңыздың жұмысына кірмейміз.' },
        { q:'Сурет қанша уақыт сақталады?',
          a:'Барлық суреттер қорғалған қоймамызда 7 жыл сақталады. Кез келген уақытта электрондық пошта арқылы немесе дәрігеріңіздің жеке кабинеті арқылы көшірмені сұрай аласыз.' },
        { q:'Жолдамасыз келуге болады ма?',
          a:'Иә. Жолдама болу міндетті емес — бірақ болса, міндетті түрде әкімшіге көрсетіңіз. Жолдамада көрсетілген дәрігерге суретті автоматты түрде жібереміз.' },
        { q:'X800 ККЛТ сәулесінің дозасы қандай?',
          a:'Зерттеуге 85 µSv-тан — бұл стандартты медициналық КТ-дан 5–7 есе төмен және қарапайым панорамамен салыстырмалы. Толық параметрлер әрдайым DICOM-файлда көрсетіледі.' },
        { q:'Сурет қанша тұрады?',
          a:'Бағалар тұрақты және қызметтер бетінде жарияланған. Нақты «қосымша проекциялар үшін доплат» жоқ — процесс барысында қосымша кадрлар қажет болса, қосымша ақысыз жасаймыз.' },
      ],
    },
  };
  const [open, setOpen] = useState(0);
  const faqs = T.faqs[lang];
  return (
    <section className="py-24 md:py-32 bg-paper" data-screen-label="About/FAQ">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="reveal grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Eyebrow>{T.eyebrow[lang]}</Eyebrow>
            <H2 className="mt-6">{T.h2pre[lang]} <em className="font-display italic font-light text-brand">{T.h2em[lang]}</em></H2>
            <p className="mt-6 text-mute">{T.hint[lang]}</p>
            <a href="#/contacts" className="mt-6 inline-flex items-center gap-2 text-brand text-[13.5px]">{T.contact[lang]}</a>
          </div>
          <div className="lg:col-span-8">
            {faqs.map((f,i)=>{
              const active = open===i;
              return (
                <div key={i} className="border-b border-line">
                  <button onClick={()=>setOpen(active?-1:i)} className="w-full text-left py-6 flex items-start gap-6">
                    <Label className="pt-1.5 w-10">{`0${i+1}`}</Label>
                    <span className="flex-1 font-medium text-[22px] tracking-tighter2 text-ink">{f.q}</span>
                    <span className={`flex-none h-7 w-7 rounded-full inline-flex items-center justify-center border border-line2 transition-transform ${active?'rotate-45 bg-ink text-paper border-ink':''}`}>
                      <Icon.Plus className="h-3.5 w-3.5"/>
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${active?'grid-rows-[1fr] opacity-100 pb-6':'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden pl-16 pr-12 text-[15px] text-mute leading-relaxed max-w-2xl">
                      {f.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PageAbout(){
  return (<><AboutHero/><AboutPrinciples/><AboutEquipment/><AboutClinicGallery/><AboutFAQ/></>);
}

window.PageAbout = PageAbout;
