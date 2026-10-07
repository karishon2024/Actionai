(function(){
  var P = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    spark:'<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    slides:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M12 17v4M8 21h8M7 9h6M7 12h10"/>',
    link:'<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.3 10.8l7.4-3.6M8.3 13.2l7.4 3.6"/>',
    check:'<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.6 2.6L16 9.6"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    text:'<path d="M4 6h16M4 10h16M4 14h10M4 18h7"/>',
    image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/>',
    share:'<path d="M12 15V3M7 8l5-5 5 5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/>',
    zap:'<path d="M13 2L4 14h7l-1 8 9-12h-7z" fill="currentColor" stroke="none"/>',
    chev:'<path d="M9 5l7 7-7 7"/>',
    palette:'<path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.9 1.8-1.9 0-1.4-1.1-1.8-1.1-3 0-1 .8-1.6 1.8-1.6H17a4 4 0 0 0 4-4C21 6.4 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7.2" r="1.2"/>',
    cake:'<path d="M4 21h16M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7"/><path d="M5 16c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0"/><path d="M12 12V8M12 5.5c.8-.8.8-1.7 0-2.5-.8.8-.8 1.7 0 2.5z"/>',
    mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/>',
    party:'<path d="M4 20l5-14 9 9z"/><path d="M14 4c.5 1.2.2 2.3-.8 3M20 10c-1.2-.5-2.3-.2-3 .8M17 3l.5 1.5M21 7l-1.5.5M19.5 4.5l-1.8 1.8"/>',
    users:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9" r="2.5"/><path d="M16 14.2c2.9.2 5 2.6 5 5.8"/>',
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>',
    wallet:'<path d="M4 7a2 2 0 0 1 2-2h11v4"/><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 13.5h2"/>',
    brain:'<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
    film:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
    shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>'
  };
  document.querySelectorAll('[data-ic]').forEach(function(el){
    el.innerHTML = '<svg viewBox="0 0 24 24" '+P+' aria-hidden="true">'+(ICONS[el.dataset.ic]||'')+'</svg>';
  });

  // night sky: stars + slow glow orbs on every dark slide
  function rnd(a,b){return a+Math.random()*(b-a)}
  document.querySelectorAll('.slide.dark').forEach(function(s){
    var sky=document.createElement('div'); sky.className='sky'; sky.setAttribute('aria-hidden','true');
    var orbs=[['var(--acc-glow)',760,'-8%','-12%'],['rgba(52,80,122,.55)',900,'62%','-18%'],['rgba(52,65,84,.6)',700,'30%','70%']];
    orbs.forEach(function(o,i){
      var d=document.createElement('div'); d.className='orb';
      d.style.cssText='width:'+o[1]+'px;height:'+o[1]+'px;left:'+o[2]+';top:'+o[3]+';background:'+o[0]+';--t:'+(18+i*5)+'s;--x:'+rnd(-120,120)+'px;--y:'+rnd(-80,80)+'px;opacity:.75';
      sky.appendChild(d);
    });
    for(var i=0;i<120;i++){
      var st=document.createElement('span'); st.className='star'; var z=rnd(1,2.6);
      st.style.cssText='left:'+rnd(0,100)+'%;top:'+rnd(0,100)+'%;width:'+z+'px;height:'+z+'px;--t:'+rnd(2.5,6.5)+'s;--dl:'+rnd(-6,0)+'s;--o:'+rnd(.35,.95);
      sky.appendChild(st);
    }
    s.insertBefore(sky, s.firstChild);
  });

  var stage=document.getElementById('stage');
  var slides=[].slice.call(stage.querySelectorAll('.slide'));
  var countEl=document.getElementById('count');
  var cur=-1, step=0, typeTimers=[];
  function maxStep(s){var m=0;s.querySelectorAll('[data-step]').forEach(function(e){m=Math.max(m,+e.dataset.step)});return m}
  function applySteps(){
    slides[cur].querySelectorAll('[data-step]').forEach(function(e){e.classList.toggle('shown', +e.dataset.step<=step)});
  }
  function runTyping(s){
    typeTimers.forEach(clearTimeout); typeTimers=[];
    s.querySelectorAll('[data-type]').forEach(function(el){
      var txt=el.dataset.type, delay=+(el.dataset.typeDelay||0);
      if(matchMedia('(prefers-reduced-motion: reduce)').matches){el.textContent=txt;return}
      el.textContent='';
      for(var i=1;i<=txt.length;i++){(function(n){typeTimers.push(setTimeout(function(){el.textContent=txt.slice(0,n)}, delay+n*42))})(i)}
    });
  }
  function go(i, s){
    if(i<0||i>=slides.length) return;
    if(cur>=0 && cur!==i) slides[cur].classList.remove('active');
    var el=slides[i];
    el.classList.remove('active'); void el.offsetWidth; el.classList.add('active');
    cur=i; step=s;
    applySteps(); runTyping(el);
    var dark=el.classList.contains('dark');
    stage.classList.toggle('is-dark',dark); stage.classList.toggle('is-light',!dark);
    stage.classList.toggle('is-cover', el.classList.contains('cover'));
    countEl.textContent=String(i+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');
    try{history.replaceState(null,'','#slide-'+(i+1))}catch(e){}
  }
  function next(){ if(step<maxStep(slides[cur])){step++;applySteps()} else go(cur+1,0) }
  function prev(){ if(step>0){step--;applySteps()} else if(cur>0) go(cur-1, maxStep(slides[cur-1])) }

  document.addEventListener('keydown',function(e){
    if(e.metaKey||e.ctrlKey||e.altKey) return;
    var k=e.key;
    if(k==='ArrowRight'||k===' '||k==='PageDown'||k==='Enter'){ if(k==='Enter'&&document.activeElement&&document.activeElement.id==='fs')return; e.preventDefault(); next() }
    else if(k==='ArrowLeft'||k==='PageUp'||k==='Backspace'){ e.preventDefault(); prev() }
    else if(k==='Home'){ go(0,0) } else if(k==='End'){ go(slides.length-1, maxStep(slides[slides.length-1])) }
    else if(k==='f'||k==='F'){ toggleFs() }
  });
  stage.addEventListener('click',function(e){
    if(e.target.closest('#fs')) return;
    var r=stage.getBoundingClientRect();
    if(e.clientX < r.left + r.width*0.3) prev(); else next();
  });
  var tx=null;
  stage.addEventListener('touchstart',function(e){tx=e.touches[0].clientX},{passive:true});
  stage.addEventListener('touchend',function(e){ if(tx===null)return; var dx=e.changedTouches[0].clientX-tx; if(Math.abs(dx)>50){ e.preventDefault(); dx<0?next():prev() } tx=null });

  function toggleFs(){
    try{
      if(!document.fullscreenElement){ var p=document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen(); if(p&&p.catch)p.catch(function(){}) }
      else { document.exitFullscreen() }
    }catch(e){}
  }
  document.getElementById('fs').addEventListener('click',function(e){e.stopPropagation();toggleFs()});

  function fit(){
    var vw=window.innerWidth-32, vh=window.innerHeight-32;
    var sc=Math.min(vw/1920, vh/1080);
    stage.style.transform='scale('+sc+') translate(-50%,-50%)';
    stage.style.borderRadius=(document.fullscreenElement?0:18)+'px';
  }
  window.addEventListener('resize',fit); document.addEventListener('fullscreenchange',fit); fit();

  var m=/^#slide-(\d+)$/.exec(location.hash||'');
  var start=m?Math.min(Math.max(+m[1]-1,0),slides.length-1):0;
  go(start, 0);
})();
