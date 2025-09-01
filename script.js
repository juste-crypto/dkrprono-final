// Year in footer
document.addEventListener('DOMContentLoaded', function(){
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
  },{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // Subtle sparkle on brand title (keeps name "toujours en action d'animation")
  let step = 0; const brand = document.querySelector('.brand-title');
  setInterval(()=>{ step = (step+1)%360; if(brand) brand.style.filter = 'drop-shadow(0 0 6px rgba(124,77,255,0.35)) hue-rotate(' + step + 'deg)'; }, 60);
});
