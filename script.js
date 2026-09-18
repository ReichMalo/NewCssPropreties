var onglets = document.querySelectorAll(".demo-onglets .onglet");
var panneauAccueil = document.getElementById("panneau-accueil");
var panneauAutre = document.getElementById("panneau-autre");

function afficherPanneau(cible) {
  panneauAccueil.hidden = cible !== "accueil";
  panneauAutre.hidden = cible !== "autre";
  onglets.forEach(function (bouton) {
    bouton.classList.toggle("est-actif", bouton.dataset.cible === cible);
  });
}

onglets.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    var cible = bouton.dataset.cible;
    if (document.startViewTransition) {
      document.startViewTransition(function () {
        afficherPanneau(cible);
      });
    } else {
      afficherPanneau(cible);
    }
  });
});

var curseur = document.getElementById("mix-curseur");
var pastille = document.getElementById("mix-pastille");
var sortie = document.getElementById("mix-sortie");

curseur.addEventListener("input", function () {
  pastille.style.setProperty("--taux", curseur.value + "%");
  sortie.textContent = curseur.value + "%";
});

var boiteLightDark = document.getElementById("ld-boite");
var boutonsLightDark = document.querySelectorAll(".ld-bouton");

boutonsLightDark.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    boiteLightDark.style.colorScheme = bouton.dataset.mode;
  });
});