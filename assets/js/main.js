(function(){
  // ── 로고 이미지 삽입 (base64) ──
  const LOGO = 'assets/images/he_logo.png';
  ['navLogoImg','statPanelImg','footerLogoImg'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.src = LOGO;
  });

  // ── 네비게이션 스크롤 효과 ──
  const nav = document.getElementById('mainNav');
  const floatCta = document.getElementById('floatCta');
  const heroEl = document.querySelector('.hero');

  function onScroll(){
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 20);
    // 히어로 섹션 지나면 플로팅 버튼 표시
    const heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight * 0.5 : 400;
    floatCta.classList.toggle('show', y > heroBottom);
  }
  window.addEventListener('scroll', onScroll, {passive:true});

  // ── 모바일 메뉴 토글 ──
  window.toggleNav = function(){
    document.getElementById('mobileNav').classList.toggle('open');
  };

  // ── 스크롤 리빌 (IntersectionObserver) ──
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const d = +(e.target.dataset.d||0);
        setTimeout(()=>e.target.classList.add('vis'), d);
        io.unobserve(e.target);
      }
    });
  },{threshold:0.05, rootMargin:'0px 0px -10px 0px'});

  document.querySelectorAll('.tl-item').forEach((el,i)=>{ el.dataset.d=i*110; io.observe(el); });
  document.querySelectorAll