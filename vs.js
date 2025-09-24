


lucide.createIcons();

document.getElementById("menu-toggle").onclick = () =>
  document.querySelector(".nav-menu").classList.toggle("active");


const observer = new IntersectionObserver(entries =>
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("active");
      if (e.target.classList.contains("skills"))
        document.querySelectorAll(".bar span")
          .forEach(s => s.style.width = s.dataset.skill + "%");
    }
  }), { threshold: 0.2 }
);
document.querySelectorAll(".reveal").forEach(r => observer.observe(r));

const backToTop = document.getElementById("backToTop");
window.onscroll = () => backToTop.classList.toggle("show", scrollY > 300);
backToTop.onclick = () => scrollTo({ top: 0, behavior: "smooth" });

const typingElement = document.querySelector(".typing");
const words = ["Frontend Developer", "Java Programmer", "UI/UX Designer"];
let i = 0, j = 0, del = false;

(function type() {
  typingElement.textContent = words[i].slice(0, j);
  j += del ? -1 : 1;
  if (!del && j === words[i].length) return setTimeout(() => { del = true; type(); }, 1500);
  if (del && j === 0) { del = false; i = (i + 1) % words.length; }
  setTimeout(type, del ? 80 : 120);
})();