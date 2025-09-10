// Simple carousel, variant UI and contact form front-end handling
document.addEventListener('DOMContentLoaded', function(){
  // Carousel
  const slides = document.querySelectorAll('.slides img');
  const dots = document.querySelectorAll('.dot');
  let idx = 0;
  function goTo(i){
    slides.forEach((s)=>s.classList.remove('active'));
    dots.forEach((d)=>d.classList.remove('active'));
    slides[i].classList.add('active');
    dots[i].classList.add('active');
    idx = i;
  }
  goTo(0);
  dots.forEach(d=>d.addEventListener('click', ()=> goTo(parseInt(d.dataset.index))));
  // autoplay
  setInterval(()=> goTo((idx+1) % slides.length), 4500);

  // Variant selection (visual)
  const variantLabels = document.querySelectorAll('.variant');
  variantLabels.forEach(l=>{
    l.addEventListener('click', ()=>{
      variantLabels.forEach(x=> x.classList.remove('selected'));
      l.classList.add('selected');
      const input = l.querySelector('input');
      if(input) input.checked = true;
    });
  });

  // Sticky header shrink
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 40) header.classList.add('scrolled'); else header.classList.remove('scrolled');
  });

  // Nav toggle for small screens
  const navToggle = document.getElementById('navToggle');
  navToggle.addEventListener('click', ()=>{
    document.querySelector('.nav').classList.toggle('show');
  });

  // Contact form demo handler
  window.handleContact = function(e){
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    if(!name || !email || !message) {
      alert('Please fill all required fields.');
      return;
    }
    // Show a demo success (no backend)
    alert('Thanks ' + name + '! Your inquiry was recorded (demo).');
    form.reset();
  };
});