// MÓDULO 1 QUESTÃO 1
var resposta = "D1"; // Resposta correta
$("input[name=questao1]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps = $("input[name=questao1]:checked");
  if (resps.length) {
    $("#feedback1").removeClass("escondeFeedback");
    $("input[name=questao1]").removeClass("input-erro input-certo");
    resps.each(function () {
      // concatena os values
      value += $(this).val();
    });

    if (value !== "D1") {
      $("#feedback1").addClass("resposta-incorreta");
      $("#feedback1").removeClass("resposta-correta");
      $("input[name=questao1]").addClass("input-erro");
    } else {
      $("#feedback1").removeClass("resposta-incorreta");
      $("#feedback1").addClass("resposta-correta");
      $("input[name=questao1]").addClass("input-certo");
    }

    if (value === "A1") {
      $("#A1").addClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-correta");
    } else if (value === "B1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").addClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-correta");
    } else if (value === "C1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").addClass("resposta-incorreta");
      $("#D1").removeClass("resposta-correta");
    } else if (value === "D1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").addClass("resposta-correta");
    }

    var mensagem = "";

    if (resposta == value) {
      mensagem =
        "Alternativa D: Isso mesmo! A posição da gestante tem um efeito muito importante na aferição da pressão arterial e nos valores de aferição. Os menores valores são encontrados no decúbito lateral esquerdo, seguido pelo decúbito dorsal e pela posição semissentada (posição Fowler). Os maiores valores são encontrados na posição sentada.";
    } else if (value == "A1") {
      mensagem =
        "Alternativa A: A resposta está <b>incorreta</b>, pois a literatura não demonstra superioridade entre os agentes hipotensores no tratamento de crise hipertensiva na gestação. As principais opções são Nifedipina, Hidralazina, Labetalol e Nitroprussiato de Sódio. O Captopril e a Losartana não são opções de escolha para esse tratamento.";
    } else if (value == "B1") {
      mensagem =
        "Alternativa B: A alternativa <b>não está correta</b>, pois demonstra entendimento equivocado sobre a classificação e gravidade da pré-eclâmpsia. A pré-eclâmpsia é classificada como precoce quando surge antes da 34ª semana de gestação e tardia quando ocorre após a 34ª semana. A pré-eclâmpsia precoce é menos frequente, porém mais grave para a mãe e o feto.";
    } else if (value == "C1") {
      mensagem =
        "Alternativa C: A alternativa C está <b>incorreta</b> ao incluir trombocitose como critério da síndrome HELLP. A síndrome HELLP é caracterizada por hemólise (H: <i>hemolysis</i>), elevação das enzimas hepáticas (E: <i>elevated</i>; L: <i>liver enzymes</i>) e plaquetopenia (L: <i>low</i>; P: <i>platelets</i>).";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
