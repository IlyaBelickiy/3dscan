// App router (hash-based) + mount

const routeOf = () => {
  const h = (window.location.hash || '#/home').replace(/^#\/?/, '') || 'home';
  return h.split('/')[0];
};

// Safe localStorage wrapper (fails silently when blocked e.g. file://)
const safeLs = {
  get: (k, def='') => { try { return localStorage.getItem(k) || def; } catch(e){ return def; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch(e){} },
};

const LangContext = React.createContext({ lang:'ru', setLang:()=>{} });
window.LangContext = LangContext;
window.useLang = () => React.useContext(LangContext);

function App(){
  const [route, setRoute] = useState(routeOf());
  const [lang, setLangState] = useState(() => safeLs.get('3ds-lang', 'ru'));
  const setLang = (l) => { setLangState(l); safeLs.set('3ds-lang', l); };

  useEffect(()=>{
    const onHash = () => {
      const r = routeOf();
      setRoute(r);
      window.scrollTo({ top:0, behavior:'instant' });
    };
    window.addEventListener('hashchange', onHash);
    if(!window.location.hash) window.location.hash = '#/home';
    return ()=> window.removeEventListener('hashchange', onHash);
  },[]);

  let page = null;
  switch(route){
    case 'patient':  page = <PagePatient/>;  break;
    case 'doctor':   page = <PageDoctor/>;   break;
    case 'about':    page = <PageAbout/>;    break;
    case 'contacts': page = <PageContacts/>; break;
    case 'home':
    default:         page = <PageHome/>;     break;
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div data-route={route} data-lang={lang}>
        <Header route={route} lang={lang} setLang={setLang}/>
        <main>{page}</main>
        <Footer lang={lang}/>
      </div>
    </LangContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
