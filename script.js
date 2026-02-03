document.addEventListener("DOMContentLoaded", () => {
  const overlays = document.querySelectorAll(".overlay");
  const header = document.querySelector("header");

  // Delay reveal (simulate waiting for model animation)
  setTimeout(() => {
    // show overlays
    overlays.forEach(el => {
      el.classList.remove("hidden");
      el.classList.add("visible");
    });

    // show header
    header.classList.remove("hidden");
    header.classList.add("visible");
  }, 3200); // 3s delay
});

// About Section
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about");
  const aboutImage = document.querySelector(".about-image");
  const aboutText = document.querySelector(".about-text");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutImage.classList.add("visible");
        aboutText.classList.add("visible");
        obs.unobserve(entry.target); // trigger once
      }
    });
  }, { threshold: 0.8 }); // trigger when 30% is visible

  if (aboutSection) observer.observe(aboutSection);
});





// Partners section
document.addEventListener("DOMContentLoaded", () => {
  const partners = document.querySelector(".partners");
  if (!partners) return;

  // Select items to animate (text + button + cards)
  const itemsToReveal = [
    partners.querySelector("h2"),
    partners.querySelector(".description"),
    partners.querySelector(".contact-btn"),
    ...partners.querySelectorAll(".partner-card")
  ].filter(Boolean); // remove nulls in case something is missing

  // Observer setup
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Staggered reveal effect
        itemsToReveal.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 250); // 250ms gap between items
        });

        obs.unobserve(partners); // run once
      }
    });
  }, { threshold: 0.2 }); // trigger when 20% is visible

  observer.observe(partners);
});


// Contact
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const status = document.getElementById("status");
  const contactSection = document.querySelector(".contact-container");

  // Form fake sending effect
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "🔐 Encrypting & sending securely...";
    status.style.color = "#00f0ff";

    setTimeout(() => {
      status.textContent = "✅ Your secure message has been sent!";
      status.style.color = "#0f0";
      form.reset();
    }, 3000);
  });

  // Intersection Observer for popup animation
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactSection.classList.add("visible");
        obs.unobserve(entry.target); // run once
      }
    });
  }, { threshold: 0.6 }); // trigger when 30% visible

  if (contactSection) observer.observe(contactSection);
});
