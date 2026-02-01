document.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("update-date");

  if (dateElement) {
    const today = new Date();
    const options = { month: "long", year: "numeric" };
    const formattedDate = today.toLocaleDateString("pt-BR", options);
    dateElement.textContent = `Atualizado em: ${formattedDate}`;
    const capitalizedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    dateElement.textContent = `Atualizado em: ${capitalizedDate}`;
  }
});
