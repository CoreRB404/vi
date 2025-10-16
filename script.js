// Modern full-screen hero site: theme toggle, smooth scroll, nav highlighting
(function(){
  const themeBtn = document.getElementById('themeToggle');
  const root = document.documentElement;
  const year = document.getElementById('year');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Fill current year
  if(year) year.textContent = new Date().getFullYear();

  // Theme toggle
  function setTheme(isLight){
    if(isLight) root.classList.add('light');
    else root.classList.remove('light');
    themeBtn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    try{
      localStorage.setItem('vivian_light', isLight ? '1' : '0');
    }catch(e){/* ignore */}
  }

  themeBtn.addEventListener('click', ()=>{
    const isLight = !root.classList.contains('light');
    setTheme(isLight);
  });

  // Init theme from preference
  try{
    const pref = localStorage.getItem('vivian_light');
    if(pref === '1') setTheme(true);
  }catch(e){/* ignore */}

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id], main[id]');
  
  function highlightNav(){
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if(window.pageYOffset >= sectionTop - 100){
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if(link.getAttribute('href') === '#' + current){
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNav);

  // Download CV placeholder (you can link to a real PDF later)
  const downloadBtn = document.getElementById('downloadCV');
  if(downloadBtn){
    downloadBtn.addEventListener('click', (e)=>{
      // For now, just show an alert. Replace with actual CV download link
      e.preventDefault();
      alert('CV download feature - link your resume PDF in the href attribute!');
    });
  }

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      // Add your form submission logic here (e.g., EmailJS, Formspree, or backend API)
      alert('Form submission feature - integrate with a backend service or email API!');
      contactForm.reset();
    });
  }
})();
