// DOCTOR PAGE — light editorial

function DoctorHero(){
  const { lang } = useLang();
  const T = {
    eyebrow:  { ru:'Врачам и клиникам',   kz:'Дәрігерлер мен клиникаларға' },
    h1pre:    { ru:'Партнёрство',          kz:'Мүдделер' },
    h1em:     { ru:'без',                  kz:'қақтығысынсыз' },
    h1post:   { ru:'конфликта интересов.', kz:'серіктестік.' },
    desc:     { ru:'Мы — независимый диагностический центр. Не лечим. Не консультируем. Делаем точные снимки и отправляем вам файл DICOM в личный кабинет — пока пациент возвращается к вам.',
                kz:'Біз — тәуелсіз диагностика орталығы. Емдемейміз. Кеңес бермейміз. Дәл суреттер түсіріп, DICOM файлын жеке кабинетіңізге жібереміз — пациент сізге оралып жатқанда.' },
    partner:  { ru:'Стать партнёром',       kz:'Серіктес болу' },
    flow:     { ru:'Как работает поток',    kz:'Ағын қалай жұмыс істейді' },
    cabinet:  { ru:'Личный кабинет',        kz:'Жеке кабинет' },
    login:    { ru:'Войти в кабинет',       kz:'Кабинетке кіру' },
    stats: {
      ru: [['Снимков','1 248'],['Пациентов','432'],['Партнёрство','18 мес'],['Реферал, %','12']],
      kz: [['Сурет','1 248'],['Пациент','432'],['Серіктестік','18 ай'],['Реферал, %','12']],
    },
  };
  return (
    <section className="relative pt-32 pb-20 bg-paper" data-screen-label="Doctor/Hero">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="hanim-1 flex items-center gap-3 text-[12px] tracking-[0.16em] uppercase text-deep">
              <span className="h-1 w-1 rounded-full bg-deep"/>
              {T.eyebrow[lang]}
            </div>
            <h1 className="hanim-2 mt-6 font-medium text-[52px] sm:text-[80px] md:text-[104px] leading-[0.98] tracking-tighter2 max-w-[16ch]">
              {T.h1pre[lang]}<br/> <em className="font-display italic font-light text-deep">{T.h1em[lang]}</em>{' '}
              {T.h1post[lang]}
            </h1>
            <p className="hanim-3 mt-8 max-w-2xl text-[18px] text-mute leading-relaxed">
              {T.desc[lang]}
            </p>
            <div className="hanim-4 mt-10 flex flex-wrap gap-3">
              <Btn variant="deep" as="a" href="#partner">{T.partner[lang]}</Btn>
              <Btn variant="ghost" as="a" href="#workflow" icon={false}>{T.flow[lang]}</Btn>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-paper2 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase text-deep">
                  <span className="h-1 w-1 rounded-full bg-deep"/> {T.cabinet[lang]}
                </div>
                <Label>v.4.2</Label>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {T.stats[lang].map(([k,v])=>(
                  <div key={k} className="rounded-xl bg-paper p-3.5">
                    <div className="text-[11px] text-mute tracking-[0.12em] uppercase">{k}</div>
                    <div className="mt-1.5 font-medium text-[22px] text-ink">{v}</div>
                  </div>
                ))}
              </div>
              <a href="#" className="mt-5 block bg-ink text-paper rounded-full px-4 py-2.5 text-[13px] text-center hover:bg-ink2">{T.login[lang]}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DoctorWorkflow(){
  useReveal();
  const { lang } = useLang();
  const T = {
    eyebrow: { ru:'Поток работы',   kz:'Жұмыс ағыны' },
    h2pre:   { ru:'Четыре шага',    kz:'Жолдамадан кейін' },
    h2em:    { ru:'без вашего участия', kz:'сіздің қатысуыңызсыз' },
    h2post:  { ru:'после направления.', kz:'төрт қадам.' },
    steps: {
      ru: [
        { n:'01', title:'Врач направляет',      text:'Вы выписываете направление пациенту — в кабинете или присылаете ссылку.' },
        { n:'02', title:'Снимок',               text:'Мы делаем КЛКТ или панораму на Veraview X800. 7 минут — пациент свободен.' },
        { n:'03', title:'Результат — пациенту', text:'Распечатка и DICOM-файл выдаются на руки. Дублируется на e-mail.' },
        { n:'04', title:'Снимок — врачу',       text:'Через защищённый сервер DICOM/PACS файл моментально появляется в вашем кабинете.' },
      ],
      kz: [
        { n:'01', title:'Дәрігер жібереді',   text:'Сіз пациентке жолдама жазасыз — кабинетте немесе сілтеме жібересіз.' },
        { n:'02', title:'Түсіру',             text:'Біз Veraview X800-де ККЛТ немесе панорама жасаймыз. 7 минут — пациент бос.' },
        { n:'03', title:'Нәтиже — пациентке', text:'Баспа мен DICOM-файл қолға беріледі. E-mail-ге дублейді.' },
        { n:'04', title:'Сурет — дәрігерге',  text:'Қорғалған DICOM/PACS сервері арқылы файл лезде кабинетіңізде пайда болады.' },
      ],
    },
    infocards: {
      ru: [['Передача снимка','Защищённый канал DICOM / PACS'],['Хранение','До 7 лет, шифрование AES-256'],['Интеграция','API · Medesk · DISIS · 1С Медицина']],
      kz: [['Суретті беру','Қорғалған DICOM / PACS арнасы'],['Сақтау','7 жылға дейін, AES-256 шифрлау'],['Интеграция','API · Medesk · DISIS · 1С Медицина']],
    },
  };
  const icons = [Icon.Mail, Icon.Scan, Icon.User, Icon.Server];
  const steps = T.steps[lang];
  return (
    <section id="workflow" className="py-24 md:py-32 bg-paper2" data-screen-label="Doctor/Workflow">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="reveal mb-16 max-w-2xl">
          <Eyebrow>{T.eyebrow[lang]}</Eyebrow>
          <H2 className="mt-6">{T.h2pre[lang]} <em className="font-display italic font-light text-deep">{T.h2em[lang]}</em> {T.h2post[lang]}</H2>
        </div>
        <div className="reveal reveal-stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s,i)=>(
            <div key={s.n} className="relative rounded-2xl bg-paper p-7 flex flex-col">
              <div className="flex items-center justify-between">
                <Label>{s.n} / 04</Label>
                {React.createElement(icons[i], {className:"h-6 w-6 text-deep"})}
              </div>
              <h3 className="mt-12 font-medium text-[24px] tracking-tighter2 leading-tight">{s.title}</h3>
              <p className="mt-3 text-[14px] text-mute leading-relaxed">{s.text}</p>
              {i<steps.length-1 && (
                <Icon.Arrow className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-4 w-4 text-mute2 bg-paper2 rounded-full p-0.5"/>
              )}
            </div>
          ))}
        </div>
        <div className="reveal mt-10 grid md:grid-cols-3 gap-4">
          {T.infocards[lang].map(([k,v])=>(
            <div key={k} className="rounded-2xl bg-paper p-6">
              <Label>{k}</Label>
              <div className="mt-2 text-[15px] text-ink">{v}</div>
            </div>
          ))}
        </div>

        {/* Doctor workflow visual */}
        <div className="reveal mt-8 rounded-2xl overflow-hidden relative bg-paper" style={{aspectRatio:'21/7'}}>
          <img src={PHOTOS.doctorWorkstation} alt="Кабинет диагностики — рабочее место" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition:'50% 40%'}} />
        </div>
      </div>
    </section>
  );
}

function DoctorFeatures(){
  useReveal();
  const { lang } = useLang();
  const T = {
    eyebrow: { ru:'Что входит',       kz:'Не кіреді' },
    h2pre:   { ru:'Не только',        kz:'Тек суреттер' },
    h2em:    { ru:'снимки.',          kz:'емес.' },
    cards: {
      ru: [
        { title:'Личный кабинет',   text:'Архив всех снимков ваших пациентов, направление в один клик, экспорт DICOM.',          tag:'web · iOS · android' },
        { title:'Обучение',          text:'Бесплатный курс по чтению КЛКТ, обновляемая база клинических кейсов.',                tag:'12 модулей' },
        { title:'Сообщество',        text:'Закрытый чат с разбором сложных случаев. Консилиум за 24 часа.',                      tag:'80+ врачей' },
        { title:'Техподдержка 7/7',  text:'Помощь по интерпретации файлов и работе с ПО — каждый день.',                        tag:'< 15 мин' },
      ],
      kz: [
        { title:'Жеке кабинет',     text:'Пациенттеріңіздің барлық суреттер мұрағаты, бір кликпен жолдама, DICOM экспорты.',   tag:'web · iOS · android' },
        { title:'Оқыту',             text:'ККЛТ оқу бойынша тегін курс, жаңартылатын клиникалық жағдайлар базасы.',            tag:'12 модуль' },
        { title:'Қауымдастық',       text:'Күрделі жағдайларды талдайтын жабық чат. 24 сағатта консилиум.',                    tag:'80+ дәрігер' },
        { title:'Техқолдау 7/7',     text:'Файлдарды түсіндіру және бағдарламалық жасақтамамен жұмыс бойынша көмек — күн сайын.', tag:'< 15 мин' },
      ],
    },
  };
  const icons = [Icon.Dashboard, Icon.Book, Icon.Users, Icon.Headset];
  const cards = T.cards[lang];
  return (
    <section className="py-24 md:py-32 bg-paper" data-screen-label="Doctor/Features">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="reveal mb-16 max-w-2xl">
          <Eyebrow>{T.eyebrow[lang]}</Eyebrow>
          <H2 className="mt-6">{T.h2pre[lang]} <em className="font-display italic font-light text-deep">{T.h2em[lang]}</em></H2>
        </div>
        <div className="reveal reveal-stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c,i)=>(
            <div key={c.title} className="rounded-2xl bg-paper2 p-7 flex flex-col hover:bg-paper3 transition-colors">
              <span className="h-11 w-11 rounded-full bg-paper inline-flex items-center justify-center text-deep">
                {React.createElement(icons[i], {className:"h-5 w-5"})}
              </span>
              <h3 className="mt-10 font-medium text-[22px] tracking-tighter2">{c.title}</h3>
              <p className="mt-2 text-[14px] text-mute leading-relaxed">{c.text}</p>
              <div className="mt-10 pt-4 border-t border-line2">
                <Label className="text-deep">{c.tag}</Label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorTestimonials(){
  useReveal();
  const { lang } = useLang();
  const T = {
    eyebrow:    { ru:'Отзывы партнёров',         kz:'Серіктестер пікірлері' },
    h2pre:      { ru:'Врачи, которые',            kz:'Бізге жіберетін' },
    h2em:       { ru:'направляют',                kz:'дәрігерлер' },
    h2post:     { ru:'к нам.',                    kz:'.' },
    doctorsLbl: { ru:'врачей',                    kz:'дәрігер' },
    renewLbl:   { ru:'продлевают',                kz:'жалғастырады' },
  };
  const items = [
    { name:'Асхат Жумабеков', role:'Имплантолог · «Дента Плюс»',
      quote:'Качество КЛКТ настолько стабильное, что я перестал перепроверять снимки. Файл приходит, пока пациент возвращается ко мне.' },
    { name:'Айгерим Сейткали', role:'Эндодонтист · Частная практика',
      quote:'Когда есть гарантия, что центр не «перехватит» моего пациента — это меняет всё. Направляю смело, рекомендую коллегам.' },
    { name:'Дмитрий Ли', role:'Ортопед · Astana Smile',
      quote:'X800 + их рабочий процесс = в среднем минус 2 дня к плану лечения. По имплантации это критично.' },
  ];
  return (
    <section className="py-24 md:py-32 bg-paper2" data-screen-label="Doctor/Testimonials">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="reveal mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow>{T.eyebrow[lang]}</Eyebrow>
            <H2 className="mt-6 max-w-3xl">{T.h2pre[lang]} <em className="font-display italic font-light text-deep">{T.h2em[lang]}</em> {T.h2post[lang]}</H2>
          </div>
          <div className="flex items-center gap-6 text-mute">
            <div><span className="font-medium text-[28px] text-ink">80</span><Label className="ml-2">{T.doctorsLbl[lang]}</Label></div>
            <div className="h-10 w-px bg-line2"/>
            <div><span className="font-medium text-[28px] text-ink">94%</span><Label className="ml-2">{T.renewLbl[lang]}</Label></div>
          </div>
        </div>
        <div className="reveal reveal-stagger grid md:grid-cols-3 gap-4">
          {items.map((t,i)=>(
            <figure key={i} className="rounded-2xl bg-paper p-8 flex flex-col">
              <div className="flex gap-1">{Array.from({length:5}).map((_,k)=>(<span key={k} className="h-1.5 w-1.5 rounded-full bg-deep"/>))}</div>
              <blockquote className="mt-8 font-medium text-[22px] leading-snug text-ink tracking-tighter2">
                «{t.quote}»
              </blockquote>
              <figcaption className="mt-auto pt-8 flex items-center gap-4 border-t border-line">
                <div className="h-11 w-11 rounded-full bg-paper2 flex items-center justify-center text-[11px] text-mute">{t.name.split(' ').map(n=>n[0]).join('')}</div>
                <div>
                  <div className="text-[14px] font-medium text-ink">{t.name}</div>
                  <div className="text-[12px] text-mute mt-0.5">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerForm(){
  const { lang } = useLang();
  const [form, setForm] = useState({ name:'', clinic:'', phone:'', email:'', focus:'imp' });
  const [sent, setSent] = useState(false);

  const T = {
    eyebrow:  { ru:'Заявка на партнёрство',   kz:'Серіктестік өтінімі' },
    h2pre:    { ru:'Заполните',               kz:'60 секундта' },
    h2em:     { ru:'за 60 секунд.',           kz:'толтырыңыз.' },
    desc:     { ru:'Мы свяжемся в течение рабочего дня, заведём профиль клиники и отправим логин для личного кабинета.',
                kz:'Жұмыс күні ішінде хабарласамыз, клиника профилін ашамыз және жеке кабинет логинін жібереміз.' },
    list: {
      ru: [['01','Реферальный процент','15% с каждого снимка'],['02','Подключение','без оплаты, по договору'],['03','Обучение персонала','бесплатно для администраторов']],
      kz: [['01','Реферал пайызы','Әр суреттен 15%'],['02','Қосылу','тегін, шарт бойынша'],['03','Персоналды оқыту','әкімшілер үшін тегін']],
    },
    fields: {
      ru: [['name','Имя и фамилия','Иван Иванов'],['clinic','Клиника','Название или практика'],['phone','Телефон','+7'],['email','E-mail','doctor@clinic.ru']],
      kz: [['name','Аты-жөні','Ахмет Ахметов'],['clinic','Клиника','Атауы немесе тәжірибе'],['phone','Телефон','+7'],['email','E-mail','doctor@clinic.kz']],
    },
    spec:     { ru:'Специализация',  kz:'Мамандандыру' },
    comment:  { ru:'Комментарий',    kz:'Түсініктеме' },
    commentPh:{ ru:'Сколько направлений в месяц планируете, какие исследования',
                kz:'Айына қанша жолдама жоспарлайсыз, қандай зерттеулер' },
    respond:  { ru:'Отвечаем в течение рабочего дня', kz:'Жұмыс күні ішінде жауап береміз' },
    submit:   { ru:'Отправить заявку',   kz:'Өтінім жіберу' },
    sentH3:   { ru:'Заявка отправлена.', kz:'Өтінім жіберілді.' },
    sentDesc: { ru:(c)=>`Свяжемся по ${c} в течение рабочего дня.`, kz:(c)=>`${c} арқылы жұмыс күні ішінде хабарласамыз.` },
    again:    { ru:'↺ Подать ещё одну заявку', kz:'↺ Тағы бір өтінім беру' },
    focuses: {
      ru: [{ id:'imp', label:'Имплантология' },{ id:'endo', label:'Эндодонтия' },{ id:'orto', label:'Ортодонтия' },{ id:'orto2', label:'Ортопедия' },{ id:'ter', label:'Терапия' },{ id:'other', label:'Другое' }],
      kz: [{ id:'imp', label:'Имплантология' },{ id:'endo', label:'Эндодонтия' },{ id:'orto', label:'Ортодонтия' },{ id:'orto2', label:'Ортопедия' },{ id:'ter', label:'Терапия' },{ id:'other', label:'Басқа' }],
    },
  };

  return (
    <section id="partner" className="py-24 md:py-32 bg-paper" data-screen-label="Doctor/Partner">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>{T.eyebrow[lang]}</Eyebrow>
            <H2 className="mt-6">{T.h2pre[lang]} <em className="font-display italic font-light text-deep">{T.h2em[lang]}</em></H2>
            <p className="mt-6 text-mute max-w-md text-[16px] leading-relaxed">
              {T.desc[lang]}
            </p>
            <div className="mt-10 grid gap-3 max-w-md">
              {T.list[lang].map(([n,k,v])=>(
                <div key={n} className="border-t border-line pt-3 grid grid-cols-[auto_1fr] items-baseline gap-4">
                  <Label className="text-deep">{n}</Label>
                  <div>
                    <span className="text-ink">{k}</span>
                    <Label className="block mt-0.5">{v}</Label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl bg-paper2 p-8 md:p-10">
            {sent ? (
              <div className="py-12">
                <span className="h-12 w-12 inline-flex items-center justify-center rounded-full bg-deepsoft text-deep"><Icon.Check className="h-6 w-6"/></span>
                <h3 className="mt-6 font-medium text-[28px] tracking-tighter2">{T.sentH3[lang]}</h3>
                <p className="mt-3 text-mute max-w-md">{T.sentDesc[lang](form.phone || form.email || (lang==='kz'?'берілген байланыс':'указанным контактам'))}</p>
                <button onClick={()=>setSent(false)} className="mt-8 text-deep text-[13.5px]">{T.again[lang]}</button>
              </div>
            ) : (
              <form onSubmit={e=>{e.preventDefault(); setSent(true);}} className="grid gap-7">
                <div className="grid sm:grid-cols-2 gap-5">
                  {T.fields[lang].map(([k,l,p])=>(
                    <div key={k}>
                      <Label>{l}</Label>
                      <input value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})}
                        className="mt-3 w-full bg-transparent border-b border-line py-3 outline-none focus:border-ink text-[15px] text-ink placeholder-mute2" placeholder={p}/>
                    </div>
                  ))}
                </div>
                <div>
                  <Label>{T.spec[lang]}</Label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {T.focuses[lang].map(f=>(
                      <button type="button" key={f.id} onClick={()=>setForm({...form, focus:f.id})}
                        className={`px-4 py-2 rounded-full text-[13px] transition-colors ${form.focus===f.id?'bg-deep text-white':'bg-paper text-ink hover:bg-paper3'}`}>
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>{T.comment[lang]}</Label>
                  <textarea rows="3" className="mt-3 w-full bg-transparent border-b border-line py-3 outline-none focus:border-ink text-[15px] text-ink placeholder-mute2 resize-none"
                    placeholder={T.commentPh[lang]}/>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between pt-2">
                  <Label>{T.respond[lang]}</Label>
                  <button type="submit" className="bg-deep text-white px-6 py-4 rounded-full text-[14.5px] font-medium hover:opacity-90 transition flex items-center gap-3">
                    {T.submit[lang]}
                    <Icon.Arrow className="h-4 w-4"/>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function PageDoctor(){
  return (<><DoctorHero/><DoctorWorkflow/><DoctorFeatures/><DoctorTestimonials/><PartnerForm/></>);
}

window.PageDoctor = PageDoctor;
