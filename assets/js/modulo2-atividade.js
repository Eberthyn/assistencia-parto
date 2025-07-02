// MÓDULO 2 QUESTÃO 1
var resposta = "Falso"; // Resposta correta
$("input[name=questao1]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps = $("input[name=questao1]:checked");
    if (resps.length) {
        $("#feedback1").removeClass("escondeFeedback")
        resps.each(function () {
            // concatena os values
            value += $(this).val();
        });

        if (value === "Verdadeiro") {
            $("#true1,#feedback1").addClass("resposta-incorreta")
            $("#false1,#feedback1").removeClass("resposta-correta")
        } else if (value === "Falso") {
            $("#true1,#feedback1").removeClass("resposta-incorreta")
            $("#false1,#feedback1").addClass("resposta-correta")
        }

        var mensagem = "";
        resposta == value ? mensagem = "A afirmação é falsa. O resultado do exame de creatinina sérica para pessoas sem histórico de doença renal ou fatores de risco (como HAS e DM2 descompensadas) não deve atrasar o início da PrEP."
            : mensagem = "A afirmação é falsa. O resultado do exame de creatinina sérica para pessoas sem histórico de doença renal ou fatores de risco (como HAS e DM2 descompensadas) não deve atrasar o início da PrEP.";
        $("#mensagem1").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem1").empty();
    }
});

// MÓDULO 2 QUESTÃO 2
var resposta2 = "B2"; // Resposta correta
$("input[name=questao2]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps2 = $("input[name=questao2]:checked");
    if (resps2.length) {
        $("#feedback2").removeClass("escondeFeedback")
        resps2.each(function () {
            // concatena os values
            value += $(this).val();
        });
        // Altera cor mensagem da resposta
        if (value !== "B2") {
            $("#feedback2").addClass("resposta-incorreta")
            $("#feedback2").removeClass("resposta-correta")
        } else {
            $("#feedback2").removeClass("resposta-incorreta")
            $("#feedback2").addClass("resposta-correta")
        }

        if (value === "C2") {
            $("#A2").removeClass("resposta-incorreta")
            $("#B2").removeClass("resposta-correta")
            $("#C2").addClass("resposta-incorreta")
        } else if (value === "A2") {
            $("#A2").addClass("resposta-incorreta")
            $("#B2").removeClass("resposta-correta")
            $("#C2").removeClass("resposta-incorreta")
        } else if (value === "B2") {
            $("#A2").removeClass("resposta-incorreta")
            $("#B2").addClass("resposta-correta")
            $("#C2").removeClass("resposta-incorreta")
        }

        var mensagem = "";
        resposta2 == value ? mensagem = "Estão corretas as afirmativas II, III e IV. Para Homens cisgêneros heterossexuais, bissexuais, gays e outros homens cisgêneros que fazem sexo com homens (HSH), pessoas não binárias designadas como do sexo masculino ao nascer, e travestis e mulheres transexuais - que não estejam em uso de hormônios à base de estradiol existe a possibilidade de utilizar a PrEP diária ou a PrEP sob demanda." :
            mensagem = "Estão corretas as afirmativas II, III e IV. Para Homens cisgêneros heterossexuais, bissexuais, gays e outros homens cisgêneros que fazem sexo com homens (HSH), pessoas não binárias designadas como do sexo masculino ao nascer, e travestis e mulheres transexuais - que não estejam em uso de hormônios à base de estradiol existe a possibilidade de utilizar a PrEP diária ou a PrEP sob demanda.";
        $("#mensagem2").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem2").empty();
    }
});

// MÓDULO 2 QUESTÃO 3
var resposta3 = "B3"; // Resposta correta
$("input[name=questao3]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps3 = $("input[name=questao3]:checked");
    if (resps3.length) {
        $("#feedback3").removeClass("escondeFeedback")
        resps3.each(function () {
            // concatena os values
            value += $(this).val();
        });

        // Altera cor mensagem da resposta
        if (value !== "B3") {
            $("#feedback3").addClass("resposta-incorreta")
            $("#feedback3").removeClass("resposta-correta")
        } else {
            $("#feedback3").removeClass("resposta-incorreta")
            $("#feedback3").addClass("resposta-correta")
        }

        if (value === "C3") {
            $("#A3").removeClass("resposta-incorreta")
            $("#B3").removeClass("resposta-correta")
            $("#C3").addClass("resposta-incorreta")
        } else if (value === "A3") {
            $("#A3").addClass("resposta-incorreta")
            $("#B3").removeClass("resposta-correta")
            $("#C3").removeClass("resposta-incorreta")
        } else if (value === "B3") {
            $("#A3").removeClass("resposta-incorreta")
            $("#B3").addClass("resposta-correta")
            $("#C3").removeClass("resposta-incorreta")
        }

        var mensagem = "";
        resposta3 == value ? mensagem = "Apenas a alternativa I é verdadeira." :
            mensagem = "Apenas a alternativa I é verdadeira.";
        $("#mensagem3").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem3").empty();
    }
});

// MÓDULO 2 QUESTÃO 4
var resposta4 = "Verdadeiro"; // Resposta correta
$("input[name=questao4]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps4 = $("input[name=questao4]:checked");
    if (resps4.length) {
        $("#feedback4 ").removeClass("escondeFeedback")
        resps4.each(function () {
            // concatena os values
            value += $(this).val();
        });

        if (value === "Verdadeiro") {
            $("#true4,#feedback4").addClass("resposta-correta")
            $("#false4,#feedback4").removeClass("resposta-incorreta")
        } else if (value === "Falso") {
            $("#true4,#feedback4").removeClass("resposta-correta")
            $("#false4,#feedback4").addClass("resposta-incorreta")
        }

        var mensagem = "";
        resposta4 == value ? mensagem = "A afirmação é verdadeira. Durante a primeira consulta, você deve fazer um teste de HIV ou obter um resultado de exame de HIV recente para avaliar o estado sorológico com relação à infecção por HIV, de acordo com o algoritmo da diretriz nacional de testagem de HIV. Para a retirada do medicamento em uma UDM do SUS, o exame de HIV deve ter no máximo 7 dias de validade a partir da data da coleta do exame."
            : mensagem = "A afirmação é verdadeira. Durante a primeira consulta, você deve fazer um teste de HIV ou obter um resultado de exame de HIV recente para avaliar o estado sorológico com relação à infecção por HIV, de acordo com o algoritmo da diretriz nacional de testagem de HIV. Para a retirada do medicamento em uma UDM do SUS, o exame de HIV deve ter no máximo 7 dias de validade a partir da data da coleta do exame.";
        $("#mensagem4").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem4").empty();
    }
});