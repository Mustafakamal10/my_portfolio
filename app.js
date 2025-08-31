
const nav = document.querySelector("nav");
const navItems = document.querySelector(".items");


const toggleBtn = document.createElement("div");
toggleBtn.classList.add("nav-toggle");
toggleBtn.innerHTML = `<i class="fas fa-bars"></i>`;
nav.appendChild(toggleBtn);


toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navItems.classList.toggle("active");
  toggleBtn.classList.toggle("open");
  toggleBtn.innerHTML = toggleBtn.classList.contains("open")
    ? `<i class="fas fa-times"></i>`
    : `<i class="fas fa-bars"></i>`;
});


document.addEventListener("click", function (e) {
  if (!nav.contains(e.target)) {
    navItems.classList.remove("active");
    toggleBtn.classList.remove("open");
    toggleBtn.innerHTML = `<i class="fas fa-bars"></i>`;
  }
});

var typed = new Typed("#changing-text", {
  strings: [
        "<span style='color:#e63946'>Web Developer</span>",
    "<span style='color:#2a9d8f'>Frontend Developer</span>",
  ],
  typeSpeed: 70,    
  backSpeed: 30,    
  loop: true        
});


document.querySelectorAll('a[href$="Resume.pdf"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const fileURL = this.getAttribute("href");

    const anchor = document.createElement("a");
    anchor.href = fileURL;
    anchor.download = "Mustafakamal_Resume.pdf"; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  });
});


  (function() {
  emailjs.init("7LrMEWoehu5ABuAMs"); 
})();

document.getElementById("contact").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_b2b12vr", "template_blwloxk", this)
    .then(function() {
      document.getElementById("status").innerHTML = "Message sent successfully!";
    }, function(error) {
      document.getElementById("status").innerHTML = "Failed to send message.";
      console.log(error);
    });

  this.reset();
});
