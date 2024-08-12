// função para a navbar aparecer em todas as páginas

function loadNav() {
  fetch("../components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", loadNav);

// emite um alerta quando o formalário é preenchido, exibido o nome colocado nele

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  alert(`Obrigada, ${name}. Irei responder assim que possível`);

  document.getElementById("form").reset();
});
