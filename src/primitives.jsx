// Reusable primitives + reveal hook — light editorial medical aesthetic

const { useEffect, useRef, useState } = React;

function useReveal(){
  useEffect(()=>{
    const selectors = '.reveal:not(.in), .reveal-left:not(.in), .reveal-right:not(.in)';
    const els = document.querySelectorAll(selectors);
    if(!('IntersectionObserver' in window)){ els.forEach(e=>e.classList.add('in')); return; }
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    els.forEach(e=>io.observe(e));
    return ()=>io.disconnect();
  });
}

// Section eyebrow — small uppercase label with dot
function Eyebrow({ children, className='' }){
  return (
    <div className={`flex items-center gap-3 text-[12px] tracking-[0.16em] uppercase text-brand ${className}`}>
      <span className="h-1 w-1 rounded-full bg-brand"/>
      <span>{children}</span>
    </div>
  );
}

// Editorial display heading using Fraunces
function H2({ children, className='' }){
  return (
    <h2 className={`font-medium text-ink text-[40px] sm:text-[52px] md:text-[64px] leading-[1.02] tracking-tighter2 ${className}`}>
      {children}
    </h2>
  );
}

// Tiny label
function Label({ children, className='' }){
  return <span className={`text-[11px] tracking-[0.18em] uppercase text-mute ${className}`}>{children}</span>;
}

// Image placeholder — calm, soft cream with corner ticks (no harsh stripes)
function ImgSlot({ label, ratio='4/3', className='', children, tone='cream' }){
  const bg = tone==='cream' ? 'bg-paper2' : 'bg-paper3';
  return (
    <div
      className={`relative overflow-hidden ${bg} stripes ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 flex items-end justify-between p-5">
        <span className="text-[10px] tracking-[0.22em] uppercase text-ink/40">{label}</span>
        <span className="text-[10px] tracking-[0.22em] uppercase text-ink/30">img</span>
      </div>
      {children}
    </div>
  );
}

// Buttons — pill, calm
function Btn({ as='button', variant='primary', icon=true, children, className='', ...rest }){
  const Tag = as;
  const base = "group inline-flex items-center gap-2.5 text-[14.5px] font-medium px-6 py-3.5 rounded-full transition-colors";
  const map = {
    primary:  "bg-ink text-paper hover:bg-ink2",
    teal:     "bg-brand text-white hover:bg-brand2",
    clay:     "bg-deep text-white hover:opacity-90",
    deep:     "bg-deep text-white hover:opacity-90",
    soft:     "bg-paper2 text-ink hover:bg-paper3",
    ghost:    "border border-line2 text-ink hover:border-ink",
  };
  return (
    <Tag className={`${base} ${map[variant]||map.primary} ${className}`} {...rest}>
      <span>{children}</span>
      {icon && <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5"/>}
    </Tag>
  );
}

// Soft chip
function Chip({ children, className='' }){
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandsoft text-brand2 text-[12px] ${className}`}>
      <span className="h-1 w-1 rounded-full bg-brand"/>
      {children}
    </span>
  );
}

window.useReveal = useReveal;
window.Eyebrow = Eyebrow;
window.H2 = H2;
window.Label = Label;
window.ImgSlot = ImgSlot;
window.Btn = Btn;
window.Chip = Chip;
// Back-compat alias for old code
window.Mono = Label;
