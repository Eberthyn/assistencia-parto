// MÓDULO 1 QUESTÃO 1
var resposta = "A1"; // Resposta correta
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

    if (value !== "A1") {
      $("#feedback1").addClass("resposta-incorreta");
      $("#feedback1").removeClass("resposta-correta");
      $("input[name=questao1]").addClass("input-erro");
    } else {
      $("#feedback1").removeClass("resposta-incorreta");
      $("#feedback1").addClass("resposta-correta");
      $("input[name=questao1]").addClass("input-certo");
    }

    if (value === "A1") {
      $("#A1").addClass("resposta-correta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "B1") {
      $("#A1").removeClass("resposta-correta");
      $("#B1").addClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "C1") {
      $("#A1").removeClass("resposta-correta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").addClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "D1") {
      $("#A1").removeClass("resposta-correta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta == value) {
      mensagem =
        "Alternativa A: Excelente! Esta alternativa é a INCORRETA e, portanto, a resposta para a questão. A episiotomia não deve ser realizada rotineiramente. Seu uso deve ser restrito a situações específicas. A taxa recomendada pela Organização Mundial de Saúde (OMS) é de 10%. Episiotomias medianas devem ser proscritas. Quando indicada, recomenda-se a episiotomia mediolateral, realizada com ângulo entre 30° e 60°.";
    } else if (value == "B1") {
      mensagem =
        "Alternativa B: A alternativa apresenta uma informação correta sobre posição materna no período expulsivo, o que a torna INCORRETA para a questão. A liberdade de posição materna durante o período expulsivo é recomendada para otimizar o conforto e a progressão do trabalho de parto.";
    } else if (value == "C1") {
      mensagem =
        "Alternativa C: A alternativa apresenta uma informação correta sobre os critérios de período expulsivo prolongado, o que a torna INCORRETA para a questão. Os tempos de 3 e 4 horas definem um período expulsivo prolongado, variando entre nulíparas e multíparas, com ou sem analgesia.";
    } else if (value == "D1") {
      mensagem =
        "Alternativa D: A alternativa apresenta uma informação correta sobre tratamento de exaustão materna no período expulsivo com parto vaginal operatório, especificamente com o uso do vácuo extrator, o que a torna INCORRETA para a questão. O parto vaginal operatório pode ser uma opção em casos de exaustão materna, e o vácuo extrator é uma alternativa válida quando não há sofrimento fetal.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
