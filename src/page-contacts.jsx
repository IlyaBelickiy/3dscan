// CONTACTS — with real embedded map and photos

function ContactsHero(){
  const { lang } = useLang();
  const T = {
    eyebrow: { ru:'Контакты',   kz:'Байланыс' },
    h1pre:   { ru:'Найдите нас', kz:'Бізді Астана' },
    h1em:    { ru:'в центре',   kz:'орталығынан' },
    h1post:  { ru:'Астаны.',    kz:'табыңыз.' },
  };
  return (
    <section className="pt-32 pb-12 bg-paper" data-screen-label="Contacts/Hero">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="hanim-1"><Eyebrow>{T.eyebrow[lang]}</Eyebrow></div>
        <h1 className="hanim-2 mt-6 font-medium text-[52px] sm:text-[80px] md:text-[104px] leading-[0.98] tracking-tighter2 max-w-[18ch]">
          {T.h1pre[lang]} <em className="font-display italic font-light text-brand">{T.h1em[lang]}</em> {T.h1post[lang]}
        </h1>
      </div>
    </section>
  );
}

function ContactsBlock(){
  useReveal();
  const { lang } = useLang();
  const T = {
    addr:      { ru:'01 / Адрес',         kz:'01 / Мекенжай' },
    addrFloor: { ru:'ЖК «Nurkent», 1 этаж', kz:'«Nurkent» ТҚ, 1 қабат' },
    near: {
      ru: ['Хан Шатыр — 8 мин пешком','ЭКСПО — 12 мин пешком','Бесплатный паркинг'],
      kz: ['Хан Шатыр — 8 мин жаяу','ЭКСПО — 12 мин жаяу','Тегін тұрақ'],
    },
    conn:      { ru:'02 / Связь',         kz:'02 / Байланыс' },
    phone:     { ru:'Телефон',            kz:'Телефон' },
    hours:     { ru:'03 / Часы работы',   kz:'03 / Жұмыс уақыты' },
    days: {
      ru: [['Пн — Пт','09:00 — 21:00'],['Суббота','09:00 — 21:00'],['Воскресенье','10:00 — 18:00']],
      kz: [['Дс — Жм','09:00 — 21:00'],['Сенбі','09:00 — 21:00'],['Жексенбі','10:00 — 18:00']],
    },
    open:      { ru:'Открыто сейчас',     kz:'Қазір ашық' },
    nodays:    { ru:'Работаем без выходных', kz:'Демалыссыз жұмыс істейміз' },
    coords:    { ru:'51.1797° N · 71.4460° E · Астана, Казахстан', kz:'51.1797° N · 71.4460° E · Астана, Қазақстан' },
    gis:       { ru:'Открыть в 2GIS →',   kz:'2GIS-те ашу →' },
  };
  return (
    <section className="bg-paper" data-screen-label="Contacts/Main">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-12">
        <div className="reveal reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-paper2 p-8">
            <div className="flex items-start justify-between">
              <Label>{T.addr[lang]}</Label>
              <Icon.Pin className="h-5 w-5 text-brand"/>
            </div>
            <div className="mt-12 font-medium text-[26px] tracking-tighter2 leading-tight">Астана<br/>пр. Кабанбай батыра, 15/1</div>
            <p className="mt-3 text-[14.5px] text-mute">{T.addrFloor[lang]}</p>
            <ul className="mt-8 space-y-2 text-[14px] text-ink">
              {T.near[lang].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[10px] tracking-[0.18em] uppercase text-mute mt-1.5">{i < 2 ? '↦' : 'P'}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-paper2 p-8">
            <div className="flex items-start justify-between">
              <Label>{T.conn[lang]}</Label>
              <Icon.Phone className="h-5 w-5 text-brand"/>
            </div>
            <div className="mt-12 grid gap-6">
              <a href="tel:+77172000000" className="block">
                <Label>{T.phone[lang]}</Label>
                <div className="mt-1 font-medium text-[26px] md:text-[28px] text-ink hover:text-brand transition-colors">+7 7172 00-00-00</div>
              </a>
              <a href="https://wa.me/77172000000" className="block">
                <Label>WhatsApp</Label>
                <div className="mt-1 text-[18px] text-ink flex items-center gap-2"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> +7 7172 00-00-00</div>
              </a>
              <a href="mailto:hello@3dscan.kz" className="block">
                <Label>E-mail</Label>
                <div className="mt-1 text-[18px] text-ink flex items-center gap-2"><Icon.Mail className="h-5 w-5"/> hello@3dscan.kz</div>
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-paper2 p-8">
            <div className="flex items-start justify-between">
              <Label>{T.hours[lang]}</Label>
              <span className="relative inline-flex h-2 w-2 mt-1.5">
                <span className="absolute inset-0 bg-brand rounded-full pulse-dot"/>
              </span>
            </div>
            <div className="mt-12 grid gap-3 text-[15px]">
              {T.days[lang].map(([d,h])=>(
                <div key={d} className="flex justify-between border-b border-line pb-3">
                  <span className="text-mute">{d}</span><span className="text-ink">{h}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-line">
              <div className="flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase text-brand">
                <span className="h-1 w-1 rounded-full bg-brand"/> {T.open[lang]}
              </div>
              <div className="mt-1 text-[14.5px] text-ink">{T.nodays[lang]}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pb-24">
        <div className="reveal rounded-2xl overflow-hidden" style={{height:'420px', position:'relative'}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.9!2d71.4460!3d51.1797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDEwJzQ3LjAiTiA3McKwMjYnNDUuNiJF!5e0!3m2!1sru!2skz!4v1620000000000!5m2!1sru!2skz"
            width="100%"
            height="420"
            style={{border:0, filter:'grayscale(15%) contrast(1.05)'}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="3D Scan на карте"
          />
          <div className="absolute left-6 top-6 bg-paper/95 backdrop-blur rounded-2xl px-5 py-4 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-full bg-brand inline-flex items-center justify-center text-white flex-shrink-0">
                <Icon.Pin className="h-4 w-4"/>
              </span>
              <div>
                <div className="text-[13px] font-medium text-ink">3D Scan</div>
                <div className="text-[12px] text-mute">пр. Кабанбай батыра, 15/1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-4 justify-between">
          <Label>{T.coords[lang]}</Label>
          <a href="https://2gis.kz/astana" target="_blank" rel="noopener noreferrer" className="text-brand text-[13.5px]">{T.gis[lang]}</a>
        </div>
      </div>
    </section>
  );
}

function ContactsCTA(){
  const { lang } = useLang();
  const T = {
    eyebrow: { ru:'Готовы записаться?',   kz:'Жазылуға дайынсыз ба?' },
    h2pre:   { ru:'Снимок — за',          kz:'Сурет —' },
    h2em:    { ru:'7 минут.',             kz:'7 минутта.' },
    desc:    { ru:'Выберите время на сайте или напишите в WhatsApp — администратор подберёт окно.',
               kz:'Сайтта уақыт таңдаңыз немесе WhatsApp-қа жазыңыз — әкімші уақыт таңдайды.' },
    online:  { ru:'Записаться онлайн',    kz:'Онлайн жазылу' },
  };
  return (
    <section className="pt-24 md:pt-32 pb-0 bg-paper2" data-screen-label="Contacts/CTA">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <Eyebrow>{T.eyebrow[lang]}</Eyebrow>
            <H2 className="mt-6 whitespace-nowrap">{T.h2pre[lang]} <em className="font-display italic font-light text-brand">{T.h2em[lang]}</em></H2>
            <p className="mt-6 text-mute max-w-md text-[16px] leading-relaxed">
              {T.desc[lang]}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Btn variant="primary" as="a" href="#/patient">{T.online[lang]}</Btn>
            <Btn variant="ghost" as="a" href="https://wa.me/77172000000" icon={false}>WhatsApp</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

function PageContacts(){
  return (<><ContactsHero/><ContactsBlock/><ContactsCTA/></>);
}

window.PageContacts = PageContacts;
