try {
  // typing effect
  var text = "Junior Software Developer, berbasis di Karawang.";
  var out = document.getElementById('typedOut');
  var i = 0;
  function type(){
    if(i <= text.length){
      out.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 38);
    }
  }
  type();

  // mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var navList = document.getElementById('navList');
  navToggle.addEventListener('click', function(){ navList.classList.toggle('open'); });
  var navLinks = navList.querySelectorAll('a');
  for(var n = 0; n < navLinks.length; n++){
    navLinks[n].addEventListener('click', function(){ navList.classList.remove('open'); });
  }

  // reveal on scroll (with fallback if IntersectionObserver isn't supported)
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      for(var e = 0; e < entries.length; e++){
        if(entries[e].isIntersecting){ entries[e].target.classList.add('in'); io.unobserve(entries[e].target); }
      }
    }, { threshold: 0.15 });
    for(var r = 0; r < revealEls.length; r++){ io.observe(revealEls[r]); }
  } else {
    for(var r2 = 0; r2 < revealEls.length; r2++){ revealEls[r2].classList.add('in'); }
  }
} catch(err) {
  // fail-safe: never let a script error leave content permanently hidden
  var all = document.querySelectorAll('.reveal');
  for(var f = 0; f < all.length; f++){ all[f].classList.add('in'); }
}