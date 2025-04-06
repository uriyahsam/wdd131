// Responsive Navbar Toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});

// Dynamic Service Cards (index.html)
const services = [
  {
    title: "Web Development",
    image: "images/webdev.jpg",
    desc: "Custom websites for businesses, organizations, and startups."
  },
  {
    title: "Online Learning",
    image: "images/learning.jpg",
    desc: "Interactive education platform for learners in Ghana and beyond."
  },
  {
    title: "E-Commerce Marketplace",
    image: "images/ecommerce.jpg",
    desc: "Your trusted online shopping destination for quality products."
  }
];

const serviceContainer = document.getElementById("service-cards");
if (serviceContainer) {
  services.forEach(service => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${service.image}" alt="${service.title}" loading="lazy" />
      <h3>${service.title}</h3>
      <p>${service.desc}</p>
    `;
    serviceContainer.appendChild(card);
  });
}

// Contact Form Handling
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const response = document.getElementById("form-response");

    if (!name || !email || !message) {
      response.textContent = "Please fill out all fields.";
      response.style.color = "red";
      return;
    }

    // Store in localStorage
    localStorage.setItem("contact", JSON.stringify({ name, email, message }));

    response.textContent = `Thanks, ${name}! We'll get back to you soon.`;
    response.style.color = "green";

    // Clear fields
    form.reset();
  });
}
