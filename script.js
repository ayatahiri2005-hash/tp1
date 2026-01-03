// ========== QCM ==========
function resetQCM() {
  document.getElementById("qcmForm").reset();
}

function showCorrection() {
  let win = window.open("", "", "width=600,height=600");
  win.document.write("<h2>Corrigé du QCM</h2>");
  win.document.write(
    "<p>1. <u style='color:green'>Un langage interprété</u></p>"
  );
  win.document.write("<p>2. <u style='color:green'>&lt;script&gt;</u></p>");
  win.document.write("<p>3. <u style='color:green'>Number, String</u></p>");
  win.document.write("<p>4. <u style='color:green'>let, var</u></p>");
  win.document.write("<p>5. <u style='color:green'>for, while</u></p>");
}

function showResult() {
  let score = 0;

  if (document.querySelector('input[name="q1"]:checked')?.value === "true")
    score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "true")
    score++;

  score += checkMultiple("q3", 2);
  score += checkMultiple("q4", 2);
  score += checkMultiple("q5", 2);

  let win = window.open("", "", "width=400,height=300");
  win.document.write(`<h2>Résultat</h2><p>Votre score : ${score}/5</p>`);
}

function checkMultiple(name, correctCount) {
  let checked = document.querySelectorAll(`input[name="${name}"]:checked`);
  let correct = 0;
  checked.forEach((c) => {
    if (c.value === "true") correct++;
  });
  return checked.length === correctCount && correct === correctCount ? 1 : 0;
}

// ========== Email ==========
function checkEmail() {
  let email = document.getElementById("email").value;
  let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
  document.getElementById("emailResult").textContent = regex.test(email)
    ? "Email valide ✅"
    : "Email invalide ❌";
}

// ========== Tri ==========
function sortNumbers() {
  let values = document.getElementById("numbers").value.split(",").map(Number);

  let sorted = trier(values);
  document.getElementById("sortResult").textContent =
    "Tableau trié : " + sorted.join(", ");
}

function trier(tab) {
  return tab.sort((a, b) => a - b);
}
//===========exo4=======
function calculerSomme() {
  // Récupérer les valeurs des trois temps
  const h1 = parseInt(document.getElementById("h1").value) || 0;
  const m1 = parseInt(document.getElementById("m1").value) || 0;
  const s1 = parseInt(document.getElementById("s1").value) || 0;

  const h2 = parseInt(document.getElementById("h2").value) || 0;
  const m2 = parseInt(document.getElementById("m2").value) || 0;
  const s2 = parseInt(document.getElementById("s2").value) || 0;

  const h3 = parseInt(document.getElementById("h3").value) || 0;
  const m3 = parseInt(document.getElementById("m3").value) || 0;
  const s3 = parseInt(document.getElementById("s3").value) || 0;

  // Convertir tout en secondes
  let totalSecondes =
    h1 * 3600 +
    m1 * 60 +
    s1 +
    (h2 * 3600 + m2 * 60 + s2) +
    (h3 * 3600 + m3 * 60 + s3);

  // Calculer les jours
  const jours = Math.floor(totalSecondes / 86400);
  totalSecondes %= 86400;

  // Calculer les heures
  const heures = Math.floor(totalSecondes / 3600);
  totalSecondes %= 3600;

  // Calculer les minutes
  const minutes = Math.floor(totalSecondes / 60);

  // Calculer les secondes restantes
  const secondes = totalSecondes % 60;

  // Afficher les résultats
  document.getElementById("jours").value = jours;
  document.getElementById("heures").value = heures;
  document.getElementById("minutes").value = minutes;
  document.getElementById("secondes").value = secondes;
}

function effacer() {
  // Réinitialiser tous les champs
  document.getElementById("h1").value = 0;
  document.getElementById("m1").value = 0;
  document.getElementById("s1").value = 0;
  document.getElementById("h2").value = 0;
  document.getElementById("m2").value = 0;
  document.getElementById("s2").value = 0;
  document.getElementById("h3").value = 0;
  document.getElementById("m3").value = 0;
  document.getElementById("s3").value = 0;
  document.getElementById("jours").value = 0;
  document.getElementById("heures").value = 0;
  document.getElementById("minutes").value = 0;
  document.getElementById("secondes").value = 0;
}
