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
        "Alternativa D: Parabéns! Esta é a alternativa INCORRETA e, portanto, a resposta para a questão. Embora a pesagem de compressas e a avaliação visual subestimem a perda sanguínea, são métodos adjuvantes recomendados devido à sua simplicidade e baixo custo. A alternativa erra ao considerá-las dispensáveis.";
    } else if (value == "A1") {
      mensagem =
        "Alternativa A: A alternativa apresenta uma informação correta sobre manobra de compressão uterina bimanual, o que a torna INCORRETA para a questão. Esse é um passo inicial essencial para reduzir o sangramento, devendo ser realizada prontamente.";
    } else if (value == "B1") {
      mensagem =
        "Alternativa B: A alternativa apresenta uma informação correta sobre monitoramento dos dados vitais, o que a torna INCORRETA para a questão. O monitoramento e o cálculo do índice de choque são importantes para estimar a perda sanguínea e auxiliar no planejamento das hemotransfusões.";
    } else if (value == "C1") {
      mensagem =
        "Alternativa C: A alternativa apresenta uma informação correta sobre manejo inicial da hemorragia pós-parto, o que a torna INCORRETA para a questão. A resposta enfatiza a importância de providenciar dois acessos venosos calibrosos para permitir a infusão de fluidos e medicamentos, além da coleta de amostras para exames.";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});
