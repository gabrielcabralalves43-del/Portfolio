const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const subjects = {
  "banco-dados": {
    title: "Modelagem de Banco de Dados",
    startWeek: 22,
    endWeek: 28,
  },
  "inteligencia-artificial": {
    title: "Inteligência Artificial",
    startWeek: 21,
    endWeek: 26,
  },
  backend: {
    title: "Back-end",
    startWeek: 22,
    endWeek: 28,
  },
  frontend: {
    title: "Front-end",
    startWeek: 22,
    endWeek: 28,
  },
  versionamento: {
    title: "Versionamento",
    startWeek: 21,
    endWeek: 26,
  },
  mobile: {
    title: "Programação Mobile",
    startWeek: 22,
    endWeek: 28,
  },
};

const subjectTitle = document.querySelector("#subject-title");
const subjectPeriod = document.querySelector("#subject-period");
const weeksGrid = document.querySelector("#weeks-grid");

if (subjectTitle && subjectPeriod && weeksGrid) {
  const parameters = new URLSearchParams(window.location.search);
  const subjectId = parameters.get("materia");

  const subject = subjects[subjectId];

  if (!subject) {
    subjectTitle.textContent = "Matéria não encontrada";
    subjectPeriod.textContent = "";
  } else {
    document.title = `${subject.title} | Gabriel Cabral`;

    subjectTitle.textContent = subject.title;
    subjectPeriod.textContent =
      `Semanas ${subject.startWeek} a ${subject.endWeek}`;

    for (
      let week = subject.startWeek;
      week <= subject.endWeek;
      week++
    ) {
      const card = document.createElement("article");
      card.className = "week-card";

      card.innerHTML = `
        <strong>Semana ${week}</strong>
        <h2>Atividade da semana ${week}</h2>
        <p>
          Adicione aqui a descrição da atividade, os objetivos,
          o conteúdo estudado e os resultados obtidos.
        </p>
      `;

      weeksGrid.appendChild(card);
    }
  }
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventEvent();
    alert("Mensagem enviada com sucesso!");
    contactForm.reset();
  });
}