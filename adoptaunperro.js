function configurarCard(id) {
    const card = document.getElementById(`perroCard${id}`);
    const texto = document.getElementById(`textoCard${id}`);
    const btnAdoptar = document.getElementById(`btnAdoptar${id}`);
    const btnCancelar = document.getElementById(`btnCancelar${id}`);

    // Botón Adoptar
    btnAdoptar.addEventListener("click", () => {
        card.classList.add("border", "border-success", "shadow");
        texto.textContent = "¡Este perrito ha sido seleccionado para adopción! 🐶❤️";
        texto.classList.remove("d-none");
    });

    // Botón Cancelar
    btnCancelar.addEventListener("click", () => {
        card.classList.remove("border", "border-success", "shadow");
        texto.classList.add("d-none");
    });
}

// Configurar las 3 cards
[1, 2, 3].forEach(configurarCard);
