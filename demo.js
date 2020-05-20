document.getElementById("output").style.visibility = "hidden";
document.getElementById("kginput").addEventListener("input", function (e) {
  const kg = e.target.value;
    document.getElementById("output").style.visibility = "visible";
  document.getElementById("grams").innerHTML = kg * 1000;
  document.getElementById("pounds").innerHTML = kg * 2.2046;
  document.getElementById("ounce").innerHTML = kg * 37.254;
});
