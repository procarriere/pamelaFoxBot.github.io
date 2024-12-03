const logo = document.querySelector(".logo");
logo.addEventListener("mouseover", () => {
  logo.style.color = "orange";
});
logo.addEventListener("mouseout", () => {
  logo.style.color = "white";
});

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".content h1");
  title.style.opacity = 0;
  let opacity = 0;

  const fadeIn = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.1;
      title.style.opacity = opacity;
    } else {
      clearInterval(fadeIn);
    }
  }, 100);
});

const menuLinks = document.querySelectorAll(".menu ul li a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});
