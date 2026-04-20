function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('active');
}

function toggleDropdown(event) {
  event.preventDefault();
  const parent = event.target.closest('.dropdown');
  parent.classList.toggle('open');
}


// ✅ Interactive Construction Hero Parallax Effect
document.addEventListener('mousemove', (e) => {
  const bg = document.querySelector('.bg-rays');
  const monitor = document.querySelector('.monitor-group');
  const crane = document.querySelector('.crane-group');
  const laptop = document.querySelector('.laptop-group');
  const floating = document.querySelector('.floating-elements');
  const leftGears = document.querySelector('.left-gears');
  
  if (!bg) return;
  
  const moveX = (e.clientX - window.innerWidth / 2);
  const moveY = (e.clientY - window.innerHeight / 2);
  
  bg.style.transform = `translate(${moveX * 0.01}px, ${moveY * 0.01}px)`;
  if (monitor) monitor.style.transform = `translate(${moveX * 0.02}px, ${moveY * 0.02}px)`;
  if (laptop) laptop.style.transform = `translate(180px, 280px) scale(0.8) translate(${moveX * 0.03}px, ${moveY * 0.03}px)`;
  if (crane) crane.style.transform = `translate(450px, 0) translate(${moveX * 0.04}px, ${moveY * 0.04}px)`;
  if (floating) floating.style.transform = `translate(${moveX * 0.05}px, ${moveY * 0.05}px)`;
  if (leftGears) leftGears.style.transform = `translate(100px, 500px) translate(${moveX * -0.02}px, ${moveY * -0.02}px)`;
});



// Cards Section of  index page
function flipCard(card) {
  card.classList.toggle('flipped');
}





// Slider Code (already there above)




// 🔥 Counter Logic
const counters = document.querySelectorAll(".counter-box h2");
let started = false;

const startCount = (counter) => {
  const target = +counter.getAttribute("data-count");
  let current = 0;
  const speed = Math.ceil(target / 60);

  const update = () => {
    current += speed;
    if (current > target) current = target;
    counter.innerText = current + "+"; // ✅ ADD "+" here
    if (current < target) requestAnimationFrame(update);
  };
  update();
};

// Trigger on visible
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        counters.forEach(startCount);
        started = true;
        observer.disconnect();
      }
    });
  },
  { threshold: 0.5 }
);

const counterSection = document.querySelector(".counter-section");
if (counterSection) {
  observer.observe(counterSection);
}


// Know Me
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 1000,
    once: true
  });
}




// Contact Page 
if (typeof emailjs !== 'undefined') {
  (function () {
     emailjs.init("rairoshan69883@gmail.com"); 
   })();
}

  // // Listen for form submission
  // document
  //   .getElementById("contact-form")
  //   .addEventListener("submit", function (e) {
  //     e.preventDefault(); // Stop default form submit

  //     // Basic validation check
  //     const name = this.from_name.value.trim();
  //     const email = this.reply_to.value.trim();
  //     const phone = this.phone.value.trim();
  //     const message = this.message.value.trim();

  //     if (!name || !email || !phone || !message) {
  //       alert("Please fill out all fields.");
  //       return;
  //     }

  //     // Send via EmailJS
  //     emailjs
  //       .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
  //       .then(
  //         function () {
  //           alert("✅ Message sent successfully!");
  //           document.getElementById("contact-form").reset(); // Clear form
  //         },
  //         function (error) {
  //           console.error("EmailJS Error:", error);
  //           alert("❌ Failed to send message. Please try again.");
  //         }
  //       );
// ✅ Success Stories (Testimonials) Slider Logic
function initTestimonialSlider() {
  const slides = document.querySelectorAll('.t-slide');
  const dots = document.querySelectorAll('.t-dot');
  const carousel = document.getElementById('testimonial-carousel');
  
  if (!slides.length || !dots.length) return;

  let currentT = 0;
  let tInterval;

  function rotateTestimonial() {
    slides[currentT].classList.remove('active');
    dots[currentT].classList.remove('active');
    currentT = (currentT + 1) % slides.length;
    slides[currentT].classList.add('active');
    dots[currentT].classList.add('active');
  }

  function startTInterval() {
    tInterval = setInterval(rotateTestimonial, 3000);
  }

  function stopTInterval() {
    clearInterval(tInterval);
  }

  startTInterval();

  if (carousel) {
    carousel.addEventListener('mouseenter', stopTInterval);
    carousel.addEventListener('mouseleave', startTInterval);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopTInterval();
      slides[currentT].classList.remove('active');
      dots[currentT].classList.remove('active');
      currentT = index;
      slides[currentT].classList.add('active');
      dots[currentT].classList.add('active');
      startTInterval();
    });
  });
}

// Run only when DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTestimonialSlider);
} else {
  initTestimonialSlider();
}

// ✅ Growth Knowledge Hub (FAQ) Toggle Logic
function toggleFaq(header) {
  const item = header.parentElement;
  const isActive = item.classList.contains('active');

  // Close all other FAQ items first
  document.querySelectorAll('.faq-item').forEach(otherItem => {
    if (otherItem !== item) {
      otherItem.classList.remove('active');
    }
  });

  // Toggle the clicked item
  if (isActive) {
    item.classList.remove('active');
  } else {
    item.classList.add('active');
  }
}