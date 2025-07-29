// MÓDULO 1 QUESTÃO 1
var resposta = "C1"; // Resposta correta
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

    if (value !== "C1") {
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
      $("#C1").removeClass("resposta-correta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "B1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").addClass("resposta-incorreta");
      $("#C1").removeClass("resposta-correta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "C1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").addClass("resposta-correta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "D1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-correta");
      $("#D1").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta == value) {
      mensagem =
        "Alternativa C: Muito bom! Esta alternativa é a INCORRETA e, portanto, a resposta para a questão, pois afirma que as apresentações pélvicas incompletas modo de joelhos ou de pés, e os limites de peso entre 2.000 e 3.500 gramas, são critérios seguros para o parto pélvico vaginal.<br><br> Gestantes com fetos em apresentação pélvica incompleta modo de nádegas pura ou pélvica completa, pesando entre 2.000 e 4.000 gramas, na ausência de restrição intrauterina do crescimento fetal, anomalias passíveis de distocias e hiperextensão do polo cefálico, em trabalho de parto espontâneo ou sob indução planejada no termo, com desejo e consentimento materno, e com médico obstetra experiente disponível, parecem ser as mais elegíveis para o parto vaginal.";
    } else if (value == "A1") {
      mensagem =
        "Alternativa A: A alternativa apresenta uma informação correta sobre os critérios de elegibilidade para o parto pélvico vaginal, o que a torna INCORRETA para a questão. As apresentações listadas, por permitirem melhor encaixe e descida, são geralmente mais favoráveis ao parto vaginal pélvico.";
    } else if (value == "B1") {
      mensagem =
        "Alternativa B: A alternativa apresenta uma informação correta sobre manobras iniciais para o desprendimento da cabeça derradeira no parto pélvico vaginal em posição de litotomia, o que a torna INCORRETA para a questão. Mauriceau e Bracht são as técnicas essenciais, minimizando riscos para o bebê.";
    } else if (value == "D1") {
      mensagem =
        "Alternativa D: A alternativa apresenta uma informação correta sobre assistência ao parto pélvico vaginal na posição de quatro apoios, o que a torna INCORRETA para a questão. Os sinais apresentados são importantes para avaliar a progressão e o bem-estar fetal durante o parto pélvico em quatro apoios.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
