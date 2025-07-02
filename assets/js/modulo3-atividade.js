// MÓDULO 3 QUESTÃO 1
var resposta = "Verdadeiro"; // Resposta correta
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
            $("#true1,#feedback1").addClass("resposta-correta")
            $("#false1,#feedback1").removeClass("resposta-incorreta")
        } else if (value === "Falso") {
            $("#true1,#feedback1").removeClass("resposta-correta")
            $("#false1,#feedback1").addClass("resposta-incorreta")
        }

        var mensagem = "";
        resposta == value ? mensagem = "A afirmação é verdadeira. O uso de PrEP é seguro para gestantes e lactantes."
            : mensagem = "A afirmação é verdadeira. O uso de PrEP é seguro para gestantes e lactantes.";
        $("#mensagem1").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem1").empty();
    }
});

// MÓDULO 3 QUESTÃO 2
var resposta2 = "C2"; // Resposta correta
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
        if (value !== "C2"){
            $("#feedback2").addClass("resposta-incorreta")
            $("#feedback2").removeClass("resposta-correta")
        } else {
            $("#feedback2").removeClass("resposta-incorreta")
            $("#feedback2").addClass("resposta-correta")
        }

        // Altera cor do input 
        if (value === "C2") {
            $("#A2").removeClass("resposta-incorreta")
            $("#B2").removeClass("resposta-incorreta")
            $("#C2").addClass("resposta-correta")
            $("#D2").removeClass("resposta-incorreta")
        } else if (value === "A2") {
            $("#A2").addClass("resposta-incorreta")
            $("#B2").removeClass("resposta-incorreta")
            $("#C2").removeClass("resposta-correta")
            $("#D2").removeClass("resposta-incorreta")
        } else if (value === "B2") {
            $("#A2").removeClass("resposta-incorreta")
            $("#B2").addClass("resposta-incorreta")
            $("#C2").removeClass("resposta-correta")
            $("#D2").removeClass("resposta-incorreta")
        } else if (value === "D2") {
            $("#C2").removeClass("resposta-correta")
            $("#A2").removeClass("resposta-incorreta")
            $("#B2").removeClass("resposta-incorreta")
            $("#D2").addClass("resposta-incorreta")
        }

        var mensagem = "";
        resposta2 == value ? mensagem = "As afirmações verdadeiras sobre as necessidades especiais de adolescentes e jovens que usam a PrEP são: “Podem se beneficiar de horários de atendimento flexíveis” e “Podem precisar de consultas de acompanhamento mais frequentes devido à mudança de rotina e às múltiplas necessidades”. Os adolescentes “podem achar a dosagem diária mais fácil de seguir do que a dosagem sob demanda, mesmo se forem candidatos à PrEP sob demanda”. Em vez de visitas frequentes para adolescentes e adultos jovens, as interações remotas entre profissionais de saúde e usuários podem ser interessantes e facilitar o atendimento às necessidades adicionais desses jovens." :
            mensagem = "As afirmações verdadeiras sobre as necessidades especiais de adolescentes e jovens que usam a PrEP são: “Podem se beneficiar de horários de atendimento flexíveis” e “Podem precisar de consultas de acompanhamento mais frequentes devido à mudança de rotina e às múltiplas necessidades”. Os adolescentes “podem achar a dosagem diária mais fácil de seguir do que a dosagem sob demanda, mesmo se forem candidatos à PrEP sob demanda”. Em vez de visitas frequentes para adolescentes e adultos jovens, as interações remotas entre profissionais de saúde e usuários podem ser interessantes e facilitar o atendimento às necessidades adicionais desses jovens.";
        $("#mensagem2").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem2").empty();
    }
});

// MÓDULO 3 QUESTÃO 3
var resposta3 = "Falso"; // Resposta correta
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

        if (value === "Verdadeiro") {
            $("#true3,#feedback3").addClass("resposta-incorreta")
            $("#false3,#feedback3").removeClass("resposta-correta")
        } else if (value === "Falso") {
            $("#true3,#feedback3").removeClass("resposta-incorreta")
            $("#false3,#feedback3").addClass("resposta-correta")
        }

        var mensagem = "";
        resposta3 == value ? mensagem = "A afirmação é falsa. Quando os usuários da PrEP se esquecem de tomar uma dose, sendo no mesmo dia, devem tomá-la assim que se lembrarem e não esperar até o dia seguinte."
            : mensagem = "A afirmação é falsa. Quando os usuários da PrEP se esquecem de tomar uma dose, sendo no mesmo dia, devem tomá-la assim que se lembrarem e não esperar até o dia seguinte.";
        $("#mensagem3").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem3").empty();
    }
});

// MÓDULO 3 QUESTÃO 4
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
        resposta4 == value ? mensagem = "A afirmação é verdadeira. Embora a PrEP proteja contra HIV, não previne as outras IST, e outras medidas de prevenção devem ser adotadas."
            : mensagem = "A afirmação é verdadeira. Embora a PrEP proteja contra HIV, não previne as outras IST, e outras medidas de prevenção devem ser adotadas.";
        $("#mensagem4").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem4").empty();
    }
});



// BOTÃO AVANÇAR
/*document.addEventListener("DOMContentLoaded", function () {
    const botaoAvancar = document.getElementById("botaoAvancar");
    
    // Desabilite o botão "Avançar" inicialmente
    botaoAvancar.setAttribute("disabled", "true");
    $("#botaoAvancar").addClass("desabilitado");

    // Adicione um evento de clique ao botão "Avançar"
    botaoAvancar.addEventListener("click", function (event) {
        // Verifique se ambas as questões foram respondidas
        const questao1Respondida = document.querySelector('input[name="questao1"]:checked');
        const questao2Respondida = document.querySelector('input[name="questao2"]:checked');
        const questao3Respondida = document.querySelector('input[name="questao3"]:checked');
        const questao4Respondida = document.querySelector('input[name="questao4"]:checked');

        if (!questao1Respondida || !questao2Respondida) {
            // Se uma das questões não foi respondida, impeça o avanço
            event.preventDefault();
        }
    });

    // Adicione um evento de mudança aos inputs das questões
    const inputsQuestao1 = document.querySelectorAll('input[name="questao1"]');
    const inputsQuestao2 = document.querySelectorAll('input[name="questao2"]');
    const inputsQuestao3 = document.querySelectorAll('input[name="questao3"]');
    const inputsQuestao4 = document.querySelectorAll('input[name="questao4"]');

    // Verifique se há respostas armazenadas e redefina as respostas
    const resetAnswers = () => {
        inputsQuestao1.forEach((input) => {
            input.checked = false;
        });

        inputsQuestao2.forEach((input) => {
            input.checked = false;
        });

        inputsQuestao3.forEach((input) => {
            input.checked = false;
        });

        inputsQuestao4.forEach((input) => {
            input.checked = false;
        });
    };

    // Chame a função de redefinir respostas ao carregar a página
    resetAnswers();

    function verificarRespostas() {
        // Verifique se ambas as questões foram respondidas
        const questao1Respondida = document.querySelector('input[name="questao1"]:checked');
        const questao2Respondida = document.querySelector('input[name="questao2"]:checked');
        const questao3Respondida = document.querySelector('input[name="questao3"]:checked');
        const questao4Respondida = document.querySelector('input[name="questao4"]:checked');

        // Habilite o botão "Avançar" apenas quando todas as questões forem respondidas
        if (questao1Respondida && questao2Respondida && questao3Respondida && questao4Respondida) {
            botaoAvancar.removeAttribute("disabled");
            $("#botaoAvancar").removeClass("desabilitado");
        } else {
            botaoAvancar.setAttribute("disabled", "true");
        }
    }

    inputsQuestao1.forEach(function (input) {
        input.addEventListener("change", verificarRespostas);
    });

    inputsQuestao2.forEach(function (input) {
        input.addEventListener("change", verificarRespostas);
    });

    inputsQuestao3.forEach(function (input) {
        input.addEventListener("change", verificarRespostas);
    });

    inputsQuestao4.forEach(function (input) {
        input.addEventListener("change", verificarRespostas);
    });
});*/