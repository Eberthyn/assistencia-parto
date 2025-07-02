      // JavaScript para abrir e fechar modais
      document.querySelectorAll(".open-modal").forEach((button) => {
        button.addEventListener("click", function (e) {
          e.preventDefault();
          const modalId = this.getAttribute("data-modal");
          document.getElementById(modalId).style.display = "flex";
        });
      });

      document.querySelectorAll(".close").forEach((span) => {
        span.addEventListener("click", function () {
          const modalId = this.getAttribute("data-close");
          document.getElementById(modalId).style.display = "none";
        });
      });

      window.addEventListener("click", function (event) {
        if (event.target.classList.contains("modal")) {
          event.target.style.display = "none";
        }
      });