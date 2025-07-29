// MÓDULO 1 QUESTÃO 1
var resposta = "B1"; // Resposta correta
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

    if (value !== "B1") {
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
      $("#B1").removeClass("resposta-correta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "B1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").addClass("resposta-correta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "C1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-correta");
      $("#C1").addClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "D1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-correta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta == value) {
      mensagem =
        "Alternativa B: Muito bem! Você acertou! A alternativa apresenta uma informação incorreta sobre o diagnóstico de malária em gestantes, o que a torna a RESPOSTA CORRETA para a questão. A alternativa afirma que, devido à baixa sensibilidade, o exame de gota espessa deve ser realizado em consultas de pré-natal de gestantes sintomáticas, associando seu resultado à aplicação de critérios clínicos. A justificativa, no entanto, enfatiza que nas áreas endêmicas, o exame de gota espessa deve ser realizado durante todas as consultas de pré-natal, incluindo as gestantes assintomáticas, e que o exame é o método oficialmente recomendado no Brasil e considerado padrão-ouro pela Organização Mundial de Saúde.";
    } else if (value == "A1") {
      mensagem =
        "Alternativa A: A alternativa A está incorreta. A alternativa apresenta uma informação correta sobre a relevância da malária na gestação e sua localização no Brasil, o que a torna INCORRETA para a questão. A malária na gestação é uma condição de alta relevância clínica, associada a complicações maternas e fetais graves, e a totalidade dos casos no Brasil tem sido reiteradamente registrada na região amazônica. A justificativa detalha dados epidemiológicos que confirmam essa afirmação.";
    } else if (value == "C1") {
      mensagem =
        "Alternativa C: A alternativa C está incorreta. A alternativa apresenta uma informação correta sobre a transmissão da malária, o que a torna INCORRETA para a questão. A transmissão congênita da malária é rara, e a transmissão materno-fetal ocorre predominantemente por via placentária, principalmente da espécie <i>Plasmodium falciparum</i>. A justificativa detalha o mecanismo de transmissão placentária e o acúmulo do <i>Plasmodium falciparum</i> na placenta.";
    } else if (value == "D1") {
      mensagem =
        "Alternativa D: A alternativa D está incorreta. A alternativa apresenta uma informação correta sobre o tratamento da malária gestacional não complicada por <i>Plasmodium falciparum</i>, o que a torna INCORRETA para a questão. A justificativa afirma que a malária gestacional por <i>Plasmodium falciparum</i> não complicada deve ser tratada em todos os trimestres com TCA, utilizando artemeter (20 mg) e lumefantrina (120 mg) durante três dias (4 comprimidos de 12 em 12 horas), esquema considerado o mais seguro na gestação.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
