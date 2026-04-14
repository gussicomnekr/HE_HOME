(function(){
  var LOGO='assets/images/he_logo.png';
  ['navLogoImg','statPanelImg','footerLogoImg'].forEach(function(id){
    var el=document.getElementById(id); if(el) el.src=LOGO;
  });
  var nav=document.getElementById('mainNav');
  var flt=document.getElementById('floatCta');
  var hero=document.querySelector('.hero');
  function onScroll(){
    var y=window.scrollY;
    if(nav) nav.classList.toggle('scrolled',y>20);
    if(flt&&hero) flt.classList.toggle('show',y>hero.offsetTop+hero.offsetHeight*0.5);
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  window.toggleNav=function(){
    var m=document.getElementById('mobileNav'); if(m) m.classList.toggle('open');
  };
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          setTimeout(function(){e.target.classList.add('vis');},(+e.target.dataset.d||0));
          io.unobserve(e.target);
        }
      });
    },{threshold:0.05,rootMargin:'0px 0px -10px 0px'});
    ['tl-item','cred-badge','svc-card','why-pt','reveal'].forEach(function(cls,ci){
      var delays=[110,90,80,90,0];
      document.querySelectorAll('.'+cls).forEach(function(el,i){
        el.dataset.d=i*delays[ci]; io.observe(el);
      });
    });
  }
})();