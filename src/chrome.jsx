// Header + footer + mobile nav — medical blue, Astana

const NAV = [
  { id:'home',     label:{ ru:'Главная',   kz:'Басты' } },
  { id:'about',    label:{ ru:'О центре',  kz:'Орталық туралы' } },
  { id:'contacts', label:{ ru:'Контакты',  kz:'Байланыс' } },
];

// Patient/Doctor audience toggle
function AudienceToggle({ route, lang }){
  const isPatient = route === 'patient';
  const isDoctor  = route === 'doctor';
  const active = isPatient ? 'patient' : (isDoctor ? 'doctor' : null);
  const T = {
    patient: { ru:'Я пациент', kz:'Пациент' },
    doctor:  { ru:'Я врач',    kz:'Дәрігер' },
  };
  return (
    <div className="inline-grid grid-cols-2 items-center rounded-full border border-line2 bg-paper p-[3px] text-[13px]">
      <a href="#/patient"
         aria-current={active==='patient' ? 'page' : undefined}
         className={`min-w-[104px] px-3.5 py-2 rounded-full text-center transition-all duration-200 whitespace-nowrap font-medium leading-none ${active==='patient' ? 'bg-brand text-white shadow-sm' : 'text-mute hover:text-ink'}`}>
        {T.patient[lang]}
      </a>
      <a href="#/doctor"
         aria-current={active==='doctor' ? 'page' : undefined}
         className={`min-w-[104px] px-3.5 py-2 rounded-full text-center transition-all duration-200 whitespace-nowrap font-medium leading-none ${active==='doctor' ? 'bg-deep text-white shadow-sm' : 'text-mute hover:text-ink'}`}>
        {T.doctor[lang]}
      </a>
    </div>
  );
}

function LangSwitcher({ lang, setLang }){
  return (
    <div className="inline-flex items-center text-[12px] tracking-[0.08em] uppercase text-mute">
      <button onClick={()=>setLang('ru')} className={`px-1.5 py-1 transition-colors ${lang==='ru'?'text-ink font-medium':'hover:text-ink'}`}>RU</button>
      <span className="text-line2">/</span>
      <button onClick={()=>setLang('kz')} className={`px-1.5 py-1 transition-colors ${lang==='kz'?'text-ink font-medium':'hover:text-ink'}`}>KZ</button>
    </div>
  );
}

const LOGO_SRC = "/public/assets/logo.png";

function Logo({ variant='dark' }){
  return (
    <a href="#/home" className="inline-flex items-center" aria-label="3D Scan — главная">
      <img
        src={LOGO_SRC}
        alt="3D Scan"
        className="h-8 w-auto block"
      />
    </a>
  );
}

function Header({ route, lang, setLang }){
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);

  const T = {
    cabinet: { ru:'Личный кабинет', kz:'Жеке кабинет' },
    book:    { ru:'Записаться',     kz:'Жазылу' },
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled?'bg-paper/90 backdrop-blur border-b border-line':'bg-transparent border-b border-transparent'}`}>
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 h-[68px] flex items-center justify-between gap-4">
        <div className="flex items-center gap-5 xl:gap-7 min-w-0">
          <Logo/>
          <nav className="hidden xl:flex items-center gap-0">
            {NAV.map(n=>{
              const active = route===n.id;
              return (
                <a key={n.id} href={`#/${n.id}`} className={`px-2.5 py-2 text-[13.5px] transition-colors ${active?'text-ink':'text-mute hover:text-ink'}`}>
                  {active && <span className="mr-2 inline-block h-1 w-1 rounded-full bg-brand align-middle"/>}
                  {n.label[lang]}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <AudienceToggle route={route} lang={lang}/>
          <span className="h-5 w-px bg-line"/>
          <LangSwitcher lang={lang} setLang={setLang}/>
          <a href="#/cabinet" onClick={(e)=>{ e.preventDefault(); alert(lang==='ru'?'Личный кабинет — скоро':'Жеке кабинет — жақында'); }}
             aria-label={T.cabinet[lang]}
             title={T.cabinet[lang]}
             className="inline-flex items-center gap-2 border border-line2 text-ink px-3 lg:px-3.5 py-2 rounded-full text-[13px] hover:border-ink transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
            </svg>
            <span className="hidden xl:inline">{T.cabinet[lang]}</span>
          </a>
          <a href="#/patient" className="bg-ink text-paper px-4 lg:px-5 py-2.5 rounded-full text-[13px] font-medium hover:bg-ink2 transition-colors whitespace-nowrap">
            {T.book[lang]}
          </a>
        </div>

        <button className="md:hidden h-9 w-9 inline-flex items-center justify-center" onClick={()=>setOpen(!open)} aria-label="Меню">
          <span className="flex flex-col gap-[5px]">
            <span className={`block h-px w-5 bg-ink transition ${open?'translate-y-[3px] rotate-45':''}`}/>
            <span className={`block h-px w-5 bg-ink ${open?'opacity-0':''}`}/>
            <span className={`block h-px w-5 bg-ink transition ${open?'-translate-y-[3px] -rotate-45':''}`}/>
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-line">
          <div className="px-6 py-5 flex flex-col gap-4">
            <AudienceToggle route={route} lang={lang}/>
            <div className="flex flex-col">
              {NAV.map(n=>(
                <a key={n.id} href={`#/${n.id}`} onClick={()=>setOpen(false)}
                   className={`py-3 text-[15px] border-b border-line/60 ${route===n.id?'text-ink':'text-mute'}`}>
                  {n.label[lang]}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2">
              <LangSwitcher lang={lang} setLang={setLang}/>
              <a href="#/cabinet" onClick={(e)=>{ e.preventDefault(); setOpen(false); alert(lang==='ru'?'Личный кабинет — скоро':'Жеке кабинет — жақында'); }}
                 className="text-[13px] text-ink underline-offset-4 underline decoration-line2">
                {T.cabinet[lang]}
              </a>
            </div>
            <a href="#/patient" onClick={()=>setOpen(false)} className="bg-ink text-paper px-4 py-3 rounded-full text-center text-[14px] font-medium">
              {T.book[lang]}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer({ lang='ru' }){
  const T = {
    tagline: {
      ru:'Независимый центр 3D-диагностики на Morita Veraview\u00A0X800. Только снимки — без лечения и консультаций.',
      kz:'Morita Veraview\u00A0X800 негізіндегі тәуелсіз 3D-диагностика орталығы. Тек суреттер — емдеусіз және кеңессіз.'
    },
    book:    { ru:'Записаться', kz:'Жазылу' },
    forDocs: { ru:'Врачам',     kz:'Дәрігерлерге' },
    nav:     { ru:'Навигация',  kz:'Шарлау' },
    contacts:{ ru:'Контакты',   kz:'Байланыс' },
    address: { ru:'Адрес',      kz:'Мекенжай' },
    hours1:  { ru:'Пн–Сб 09:00 — 21:00', kz:'Дс–Сб 09:00 — 21:00' },
    hours2:  { ru:'Вс 10:00 — 18:00',    kz:'Жс 10:00 — 18:00' },
    addrLine:{ ru:'Астана, пр. Кабанбай батыра, 15/1', kz:'Астана, Қабанбай батыр д-лы, 15/1' },
    license: { ru:'© 2026 3D Scan · Лицензия № 22-019843', kz:'© 2026 3D Scan · Лицензия № 22-019843' },
    privacy: { ru:'Политика обработки данных', kz:'Деректерді өңдеу саясаты' },
    offer:   { ru:'Договор оферты',           kz:'Оферта шарты' },
  };
  const navItems = [
    ...NAV,
    { id:'patient', label:{ ru:'Пациентам', kz:'Пациенттерге' } },
    { id:'doctor',  label:{ ru:'Врачам',    kz:'Дәрігерлерге' } },
  ];
  return (
    <footer className="bg-paper2 border-t border-line" data-screen-label="Footer">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo/>
          <p className="mt-7 max-w-sm text-[15.5px] text-mute leading-relaxed">
            {T.tagline[lang]}
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#/patient" className="bg-ink text-paper px-5 py-2.5 rounded-full text-[13.5px] font-medium hover:bg-ink2">{T.book[lang]}</a>
            <a href="#/doctor"  className="border border-line2 text-ink px-5 py-2.5 rounded-full text-[13.5px] hover:border-ink">{T.forDocs[lang]}</a>
          </div>
        </div>
        <div className="md:col-span-2">
          <Label>{T.nav[lang]}</Label>
          <ul className="mt-5 space-y-3 text-[14px] text-ink">
            {navItems.map(n=>(<li key={n.id}><a href={`#/${n.id}`} className="hover:text-brand">{n.label[lang]}</a></li>))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <Label>{T.contacts[lang]}</Label>
          <ul className="mt-5 space-y-3 text-[14px] text-ink">
            <li>+7 7172 00-00-00</li>
            <li>WhatsApp 24/7</li>
            <li>hello@3dscan.kz</li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <Label>{T.address[lang]}</Label>
          <ul className="mt-5 space-y-3 text-[14px] text-ink">
            <li>{T.addrLine[lang]}</li>
            <li className="text-mute">{T.hours1[lang]}</li>
            <li className="text-mute">{T.hours2[lang]}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-mute">
          <div>{T.license[lang]}</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">{T.privacy[lang]}</a>
            <a href="#" className="hover:text-ink">{T.offer[lang]}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Header = Header;
window.Footer = Footer;
window.NAV = NAV;
