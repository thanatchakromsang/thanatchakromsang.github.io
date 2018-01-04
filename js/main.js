window.onload = function() {
   Particles.init({
     selector: '.background',
     connectParticles: true,
     minDistance: 90,
     color: '#123456',

     responsive: [{
      breakpoint: 768,
      options: {
        maxParticles: 40,
      }
     }]
   });
 };

 var typed = new Typed('.typed', {
  strings: ["a web developer.", "a mobile app developer","an infrastructure engineer.", "a linux freak.", "a vim enthusiast."],
  typeSpeed: 70,
  startDelay: 500,
  backDelay: 500,
  backSpeed: 50,
  showCursor: false,
  cursorChar: "▋",
  loop: true,
});

 var terminal1 = new Typed('.terminal1', {
  strings: ["whoami^1000 <br>`Full Name : Thanatchaya Kromsaeng <br> Age : 21 years old <br> Education : KMITL Engineering class of 2015-2019 <br> Nationality : Thai <br> Language : Thai (Native), &nbsp;English (Intermediate) <br> Email : thanatchakromsang@gmail.com <br> Contact : +66882978450` <br> `<span class='prompt'>thanatchaya@local:~$ </span>`^10000"],
  typeSpeed: 70,
  startDelay: 1000,
  showCursor: false,
  cursorChar: "▋",
  onComplete: function(self) { terminal1.reset() },
});
