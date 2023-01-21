let searchParams = new URLSearchParams(window.location.search);
let to = searchParams.get("to");
$(document).ready(function () {
  init();
});
function init() {
  hideAll();
  $("#step1").fadeIn("slow");
}

function showStep2() {
  hideAll();
  $("#step2").fadeIn("slow");
  $("#answer").focus();
}

function showCongrats() {
  if ($("#answer").val() == 4) {
    hideAll();
    hideAllCongrats();
    $("#congrats").fadeIn("slow");
    $("#" + to).fadeIn("7000");
  } else {
    M.toast({ html: "Respuesta incorrecta, intenta de nuevo 🙂" });
    $("#answer").val("");
    $("#answer").focus();
  }
}

function chooseYes() {
  M.toast({ html: 'Por favor selecciona la opción "SI" 👍' });
}

function hideAll() {
  $(".contenedor").each((i, e) => {
    $(e).hide();
  });
}

function hideAllCongrats() {
  $(".congrats").each((i, e) => {
    $(e).hide();
  });
}
