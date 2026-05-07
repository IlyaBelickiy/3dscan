// PATIENT PAGE — with real photos

function PatientHero(){
  const { lang } = useLang();
  const T = {
    eyebrow:  { ru:'Пациентам',      kz:'Пациенттерге' },
    h1pre:    { ru:'Снимок зубов',   kz:'Тіс суреті' },
    h1em:     { ru:'без лишних',     kz:'артық сөзсіз' },
    h1post:   { ru:'разговоров.',    kz:'' },
    desc:     { ru:'Вы пришли на снимок — мы его делаем. Файл и распечатка — на руки, копия — вашему врачу. Никаких советов, рекомендаций или предложений «заодно подлечиться».',
                kz:'Сіз суретке келдіңіз — біз оны түсіреміз. Файл мен баспа — қолыңызға, көшірмесі — дәрігеріңізге. Ешқандай кеңес, ұсыным немесе «бірге емделіп кетейік» деген ұсыныс жоқ.' },
    book:     { ru:'Записаться',     kz:'Жазылу' },
    how:      { ru:'Как это работает', kz:'Қалай жұмыс істейді' },
    today:    { ru:'Сегодня свободно', kz:'Бүгін бос' },
    slots:    { ru:'8 окон',          kz:'8 орын' },
    pick:     { ru:'Выбрать время →', kz:'Уақыт таңдау →' },
    proc:     { ru:'Процедура',       kz:'Процедура' },
    procVal:  { ru:'9 секунд · безопасно', kz:'9 секунд · қауіпсіз' },
  };
  return (
    <section className="relative pt-32 pb-20 bg-paper" data-screen-label="Patient/Hero">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="hanim-1"><Eyebrow>{T.eyebrow[lang]}</Eyebrow></div>
            <h1 className="hanim-2 mt-6 font-medium text-[52px] sm:text-[80px] md:text-[104px] leading-[0.98] tracking-tighter2 max-w-[16ch]">
              {T.h1pre[lang]} <em className="font-display italic font-light text-brand">{T.h1em[lang]}</em>{T.h1post[lang] ? ' ' + T.h1post[lang] : '.'}
            </h1>
            <p className="hanim-3 mt-8 max-w-2xl text-[18px] text-mute leading-relaxed">
              {T.desc[lang]}
            </p>
            <div className="hanim-4 mt-10 flex flex-wrap gap-3">
              <Btn variant="primary" as="a" href="#book">{T.book[lang]}</Btn>
              <Btn variant="ghost" as="a" href="#process" icon={false}>{T.how[lang]}</Btn>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-paper2 p-6">
              <div className="flex items-center justify-between">
                <Label>{T.today[lang]}</Label>
                <span className="text-[13px] text-ink font-medium">{T.slots[lang]}</span>
              </div>
              <div className="mt-5 grid grid-cols-4 gap-2">
                {['09:00','10:30','11:15','12:00','14:00','15:30','16:45','18:00'].map((t,i)=>(
                  <button key={t} className={`py-2.5 text-[12.5px] rounded-full transition-colors ${i===2?'bg-ink text-paper':'bg-paper text-ink hover:bg-paper3'}`}>
                    {t}
                  </button>
                ))}
              </div>
              <a href="#book" className="mt-5 block w-full text-center bg-ink text-paper py-3 rounded-full text-[13.5px] font-medium hover:bg-ink2 transition-colors">
                {T.pick[lang]}
              </a>
            </div>
          </div>
        </div>

        {/* Hero photo — patient at scanner */}
        <div className="hanim-5 mt-16 rounded-2xl overflow-hidden relative bg-paper3" style={{aspectRatio:'21/9'}}>
          <img src={PHOTOS.patientHero} alt="Пациент у аппарата Morita Veraview X800" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition:'55% 40%'}} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/30 to-transparent"/>
          <div className="absolute left-8 bottom-8">
            <div className="bg-paper/90 backdrop-blur rounded-2xl px-6 py-4">
              <div className="text-[12px] text-brand tracking-[0.14em] uppercase">{T.proc[lang]}</div>
              <div className="text-[18px] font-medium text-ink mt-1">{T.procVal[lang]}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PatientProcess(){
  useReveal();
  const { lang } = useLang();
  const T = {
    eyebrow: { ru:'Как это работает', kz:'Қалай жұмыс істейді' },
    h2pre:   { ru:'Пять шагов от записи', kz:'Жазылудан нәтижеге дейін' },
    h2em:    { ru:'до результата.',       kz:'бес қадам.' },
    steps: {
      ru: [
        { n:'01', title:'Запись',           text:'Онлайн на сайте, по телефону или в WhatsApp. Выбираете удобное время.', time:'~ 60 сек' },
        { n:'02', title:'Приход',           text:'Приходите за 5 минут до записи. Без анкет, без очередей.',              time:'5 мин до' },
        { n:'03', title:'Снимок',           text:'Снимок занимает 9 секунд. Весь визит — около 7 минут.',                time:'9 сек' },
        { n:'04', title:'Пациент получает', text:'Файл DICOM и распечатка — на руки, дублируем на e-mail.',              time:'сразу' },
        { n:'05', title:'Врач получает',    text:'Если ваш врач у нас в системе — снимок приходит в его кабинет.',       time:'auto' },
      ],
      kz: [
        { n:'01', title:'Жазылу',          text:'Сайтта онлайн, телефон арқылы немесе WhatsApp-та. Ыңғайлы уақытты таңдайсыз.', time:'~ 60 сек' },
        { n:'02', title:'Келу',            text:'Жазылудан 5 минут бұрын келіңіз. Анкетасыз, кезексіз.',                         time:'5 мин дейін' },
        { n:'03', title:'Түсіру',          text:'Сурет 9 секунд алады. Барлық барыс — шамамен 7 минут.',                         time:'9 сек' },
        { n:'04', title:'Пациент алады',   text:'DICOM файлы мен баспа — қолыңызға, e-mail-ге дублейміз.',                      time:'бірден' },
        { n:'05', title:'Дәрігер алады',   text:'Дәрігеріңіз біздің жүйеде болса — сурет оның кабинетіне келеді.',              time:'auto' },
      ],
    },
  };
  const icons = [Icon.Calendar, Icon.Door, Icon.Scan, Icon.User, Icon.Cloud];
  const steps = T.steps[lang];
  return (
    <section id="process" className="py-24 md:py-32 bg-paper2" data-screen-label="Patient/Process">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="reveal mb-16 max-w-2xl">
          <Eyebrow>{T.eyebrow[lang]}</Eyebrow>
          <H2 className="mt-6">{T.h2pre[lang]} <em className="font-display italic font-light text-brand">{T.h2em[lang]}</em></H2>
        </div>
        <div className="reveal reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s,i)=>(
            <div key={s.n} className="relative rounded-2xl bg-paper p-7 flex flex-col">
              <div className="flex items-center justify-between">
                <Label>{s.n} / 05</Label>
                <span className="text-[12px] text-brand">{s.time}</span>
              </div>
              <span className="mt-10 h-12 w-12 rounded-full bg-paper2 inline-flex items-center justify-center text-brand">
                {React.createElement(icons[i], {className:"h-6 w-6"})}
              </span>
              <h3 className="mt-6 font-medium text-[24px] leading-tight tracking-tighter2">{s.title}</h3>
              <p className="mt-2 text-[14px] text-mute leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        {/* Process visual */}
        <div className="reveal mt-8 rounded-2xl overflow-hidden relative bg-paper3" style={{aspectRatio:'21/7'}}>
          <img src={PHOTOS.galleryWorkstation} alt="Кабинет диагностики 3D Scan" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition:'50% 45%'}} />
        </div>
      </div>
    </section>
  );
}

function PatientBenefits(){
  useReveal();
  const { lang } = useLang();
  const T = {
    eyebrow: { ru:'Преимущества',  kz:'Артықшылықтар' },
    h2pre:   { ru:'Понятно.',      kz:'Түсінікті.' },
    h2em:    { ru:'Без сюрпризов.', kz:'Сюрпризсіз.' },
    items: {
      ru: [
        { title:'Быстро',                    text:'7 минут — и вы свободны. Без очередей и анкет на 4 страницы.' },
        { title:'Безопасно',                 text:'Доза в 5 раз ниже стандартной КТ. Защита щитовидной железы по запросу.' },
        { title:'Точно',                     text:'Изображение в 80 микрон. Видно то, что не видно на 2D-снимках.' },
        { title:'Без лишних консультаций',   text:'Мы не клиника. Не назначим лечение и не позвоним «напомнить».' },
      ],
      kz: [
        { title:'Жылдам',         text:'7 минут — және сіз бостасыз. Кезексіз және 4 беттік анкетасыз.' },
        { title:'Қауіпсіз',       text:'Доза стандартты КТ-дан 5 есе төмен. Сұрау бойынша қалқанша безін қорғау.' },
        { title:'Дәл',            text:'Кескін 80 микрон. 2D-суреттерде көрінбейтін нәрсе көрінеді.' },
        { title:'Артық кеңессіз', text:'Біз клиника емеспіз. Емдеу тағайындамаймыз және «еске салу» үшін хабарламаймыз.' },
      ],
    },
  };
  const icons = [Icon.Bolt, Icon.Shield, Icon.Target, Icon.Minus];
  const items = T.items[lang];
  return (
    <section className="py-24 md:py-32 bg-paper" data-screen-label="Patient/Benefits">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="reveal mb-16 max-w-2xl">
          <Eyebrow>{T.eyebrow[lang]}</Eyebrow>
          <H2 className="mt-6">{T.h2pre[lang]}<br/> <em className="font-display italic font-light text-brand">{T.h2em[lang]}</em></H2>
        </div>

        {/* Benefits grid with image */}
        <div className="reveal grid lg:grid-cols-12 gap-6 mb-6">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden relative bg-paper3" style={{minHeight:'320px'}}>
            <img src={PHOTOS.equipmentXray} alt="3D снимок зубов" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition:'50% 40%'}} />
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {items.map((it,i)=>(
              <div key={it.title} className="rounded-2xl bg-paper2 p-7 flex flex-col">
                <span className="h-11 w-11 rounded-full bg-paper inline-flex items-center justify-center text-brand">
                  {React.createElement(icons[i], {className:"h-5 w-5"})}
                </span>
                <h3 className="mt-10 font-medium text-[22px] tracking-tighter2 leading-tight">{it.title}</h3>
                <p className="mt-2 text-[14px] text-mute leading-relaxed">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingTabs(){
  const { lang } = useLang();

  const dayNamesRu = ['вс','пн','вт','ср','чт','пт','сб'];
  const dayNamesKz = ['жс','дс','сс','ср','бс','жм','сн'];
  const monthNamesRu = ['янв','фев','мар','апр','мая','июн','июл','авг','сен','окт','ноя','дек'];
  const monthNamesKz = ['қаң','ақп','нау','сәу','мам','мау','шіл','там','қыр','қаз','қар','жел'];

  const today = new Date();
  const bookingDays = React.useMemo(() => {
    const dn = lang === 'kz' ? dayNamesKz : dayNamesRu;
    const mn = lang === 'kz' ? monthNamesKz : monthNamesRu;
    return Array.from({length:5}, (_,i) => {
      const d = new Date(today); d.setDate(today.getDate() + i + 1);
      return { label:`${dn[d.getDay()]} · ${d.getDate()}`, full:`${dn[d.getDay()]} · ${d.getDate()} ${mn[d.getMonth()]}` };
    });
  }, [lang]);

  const [tab, setTab] = useState('online');
  const [time, setTime] = useState('14:00');
  const [date, setDate] = useState(bookingDays[0].full);
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('');

  React.useEffect(() => { setDate(bookingDays[0].full); }, [lang]);

  const T = {
    eyebrow:    { ru:'Запись',           kz:'Жазылу' },
    h2pre:      { ru:'Три способа',      kz:'Жазылудың' },
    h2em:       { ru:'записаться.',      kz:'үш жолы.' },
    desc:       { ru:'Выберите удобный канал. Все три ведут к одному и тому же — забронированному времени и СМС с памяткой.',
                  kz:'Ыңғайлы арнаны таңдаңыз. Үшеуі де бір нәтижеге апарады — брондалған уақыт пен нұсқаулы СМС.' },
    info: {
      ru: [['Подтверждение','СМС за 24 часа'],['Отмена','до 1 часа до визита'],['Оплата','на месте, картой или налично']],
      kz: [['Растау','24 сағат бұрын СМС'],['Бас тарту','барысқа 1 сағат бұрын'],['Төлем','орнында, картамен немесе қолма-қол']],
    },
    tabOnline:  { ru:'Онлайн',    kz:'Онлайн' },
    tabPhone:   { ru:'Телефон',   kz:'Телефон' },
    tabWa:      { ru:'WhatsApp',  kz:'WhatsApp' },
    labelDate:  { ru:'Дата',      kz:'Күні' },
    labelTime:  { ru:'Время',     kz:'Уақыты' },
    labelName:  { ru:'Имя',       kz:'Аты' },
    labelPhone: { ru:'Телефон',   kz:'Телефон' },
    namePh:     { ru:'Ваше имя',  kz:'Атыңыз' },
    bookBtn:    { ru:(d,t)=>`Записаться на ${d}, ${t}`,  kz:(d,t)=>`${d}, ${t} — жазылу` },
    accepted:   { ru:'Заявка принята.',  kz:'Өтінім қабылданды.' },
    confirm:    { ru:(d,t)=>`Мы перезвоним в течение 10 минут, чтобы подтвердить запись на ${d} в ${t}.`,
                  kz:(d,t)=>`${d} күні ${t}-де жазылуды растау үшін 10 минут ішінде қоңырау шаламыз.` },
    again:      { ru:'↺ Записаться ещё раз',    kz:'↺ Қайта жазылу' },
    callLabel:  { ru:'Позвоните по номеру',      kz:'Нөмірге қоңырау шалыңыз' },
    callHours:  { ru:'Пн–Сб 09:00 — 21:00 · Вс 10:00 — 18:00', kz:'Дс–Сн 09:00 — 21:00 · Жс 10:00 — 18:00' },
    callBack:   { ru:'Или закажите обратный звонок',  kz:'Немесе кері қоңырау тапсырыңыз' },
    callMe:     { ru:'Перезвоните мне',               kz:'Маған қоңырау шалыңыз' },
    waLabel:    { ru:'Напишите в WhatsApp',            kz:'WhatsApp-қа жазыңыз' },
    waH3pre:    { ru:'Отвечаем за',                   kz:'5 минутта жауап' },
    waH3em:     { ru:'5 минут.',                      kz:'береміз.' },
    waDesc:     { ru:'Просто напишите «хочу снимок» — администратор подберёт время.',
                  kz:'Жай ғана «сурет алғым келеді» деп жазыңыз — әкімші уақытты таңдайды.' },
    waOpen:     { ru:'Открыть WhatsApp',              kz:'WhatsApp ашу' },
  };

  const tabs = [
    { id:'online', label:T.tabOnline[lang],  icon:Icon.Globe },
    { id:'phone',  label:T.tabPhone[lang],   icon:Icon.Phone },
    { id:'wa',     label:T.tabWa[lang],      icon:(p)=>(<svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>) },
  ];

  return (
    <section id="book" className="py-24 md:py-32 bg-paper2" data-screen-label="Patient/Booking">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>{T.eyebrow[lang]}</Eyebrow>
            <H2 className="mt-6">{T.h2pre[lang]} <em className="font-display italic font-light text-brand">{T.h2em[lang]}</em></H2>
            <p className="mt-6 text-mute max-w-md text-[16px] leading-relaxed">
              {T.desc[lang]}
            </p>
            <div className="mt-10 grid gap-4">
              {T.info[lang].map(([k,v])=>(
                <div key={k} className="flex items-center justify-between border-t border-line pt-3">
                  <Label>{k}</Label>
                  <span className="text-[14px] text-ink">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl bg-paper border border-line overflow-hidden">
            <div className="grid grid-cols-3 border-b border-line">
              {tabs.map(t=>(
                <button key={t.id} onClick={()=>{setTab(t.id); setSubmitted(false);}}
                  className={`p-5 flex items-center justify-center gap-3 transition-colors ${tab===t.id?'bg-paper2 text-ink':'text-mute hover:text-ink'}`}>
                  <t.icon className="h-5 w-5"/>
                  <span className="text-[14px] font-medium">{t.label}</span>
                </button>
              ))}
            </div>
            <div className="p-8 md:p-10 min-h-[420px]">
              {submitted ? (
                <div>
                  <span className="h-12 w-12 inline-flex items-center justify-center rounded-full bg-brandsoft text-brand"><Icon.Check className="h-6 w-6"/></span>
                  <h3 className="mt-6 font-medium text-[28px] tracking-tighter2">{T.accepted[lang]}</h3>
                  <p className="mt-3 text-mute max-w-md">{T.confirm[lang](date, time)}</p>
                  <button onClick={()=>setSubmitted(false)} className="mt-8 text-brand text-[13.5px]">{T.again[lang]}</button>
                </div>
              ) : tab==='online' ? (
                <form onSubmit={e=>{e.preventDefault(); setSubmitted(true);}} className="grid gap-6">
                  <div>
                    <Label>{T.labelDate[lang]}</Label>
                    <div className="mt-3 grid grid-cols-5 gap-2">
                      {bookingDays.map(d => {
                        const active = date === d.full;
                        return (
                          <button type="button" key={d.label} onClick={() => setDate(d.full)}
                            className={`py-3 text-[12.5px] rounded-full transition-colors ${active ? 'bg-ink text-paper' : 'bg-paper2 text-ink hover:bg-paper3'}`}>
                            {d.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <Label>{T.labelTime[lang]}</Label>
                    <div className="mt-3 grid grid-cols-5 gap-2">
                      {['09:00','10:30','11:15','12:00','13:30','14:00','15:30','16:45','18:00','19:15'].map((t,i)=>(
                        <button type="button" key={t} disabled={i===1} onClick={()=>setTime(t)}
                          className={`py-2.5 text-[12.5px] rounded-full transition-colors ${time===t?'bg-ink text-paper':'bg-paper2 text-ink hover:bg-paper3'} ${i===1?'opacity-30 line-through':''}`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label>{T.labelName[lang]}</Label>
                      <input className="mt-3 w-full border-b border-line py-3 outline-none focus:border-ink bg-transparent text-[15px]" placeholder={T.namePh[lang]}/>
                    </div>
                    <div>
                      <Label>{T.labelPhone[lang]}</Label>
                      <input value={phone} onChange={e=>setPhone(e.target.value)} className="mt-3 w-full border-b border-line py-3 outline-none focus:border-ink bg-transparent text-[15px]" placeholder="+7"/>
                    </div>
                  </div>
                  <button type="submit" className="mt-2 bg-ink text-paper px-6 py-4 rounded-full text-[14.5px] font-medium hover:bg-ink2 transition-colors flex items-center justify-between">
                    <span>{T.bookBtn[lang](date, time)}</span>
                    <Icon.Arrow className="h-4 w-4"/>
                  </button>
                </form>
              ) : tab==='phone' ? (
                <div className="grid gap-8 max-w-md">
                  <div>
                    <Label>{T.callLabel[lang]}</Label>
                    <a href="tel:+77172000000" className="mt-3 block font-medium text-[44px] md:text-[56px] tracking-tighter2 leading-none text-ink">+7 7172 00-00-00</a>
                    <p className="mt-3 text-mute text-[14.5px]">{T.callHours[lang]}</p>
                  </div>
                  <div className="border-t border-line pt-6">
                    <Label>{T.callBack[lang]}</Label>
                    <form onSubmit={e=>{e.preventDefault(); setSubmitted(true);}} className="mt-3 flex gap-3">
                      <input className="flex-1 border-b border-line py-3 outline-none focus:border-ink bg-transparent text-[15px]" placeholder="+7 ___ ___-__-__"/>
                      <button className="bg-ink text-paper px-5 rounded-full text-[13.5px] font-medium hover:bg-ink2">{T.callMe[lang]}</button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="grid gap-8 max-w-md">
                  <div>
                    <Label>{T.waLabel[lang]}</Label>
                    <h3 className="mt-3 font-medium text-[36px] md:text-[44px] tracking-tighter2 leading-tight">{T.waH3pre[lang]} <em className="font-display italic font-light text-brand">{T.waH3em[lang]}</em></h3>
                    <p className="mt-3 text-mute text-[15px]">{T.waDesc[lang]}</p>
                  </div>
                  <a href="https://wa.me/77172000000" className="bg-[#25D366] text-white px-6 py-4 rounded-full text-[14.5px] font-medium flex items-center justify-between hover:opacity-90 transition-opacity">
                    <span className="flex items-center gap-3"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> {T.waOpen[lang]}</span>
                    <Icon.Arrow className="h-4 w-4"/>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PagePatient(){
  return (<><PatientHero/><PatientProcess/><PatientBenefits/><BookingTabs/></>);
}

window.PagePatient = PagePatient;
