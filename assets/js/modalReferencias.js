// Helper para criar elementos
function el(tag, attrs = {}, ...children) {
  const e = document.createElement(tag);
  for (let [k, v] of Object.entries(attrs)) {
    if (k === "class") e.className = v;
    else e.setAttribute(k, v);
  }
  for (let c of children) {
    if (typeof c === "string") e.appendChild(document.createTextNode(c));
    else if (c instanceof Node) e.appendChild(c);
  }
  return e;
}

// Dados do seu accordion
const accordions = [
  {
    id: "1",
    heading: "Módulo 1",
    body: [
      `
          <h1>Aula 1</h1>
          <p>BRASIL. Agência Nacional de Saúde Suplementar. <b>Parto adequado</b> . 2014. Brasília, DF: ANS, 2024.
          Disponível em: <a href="https://www.gov.br/ans/pt-br/assuntos/gestaosaude/parto-adequado-1" target="_blank">https://www.gov.br/ans/pt-br/assuntos/gestaosaude/parto-adequado-1</a>.
          Acesso em: 15 jan. 2025.</p> 
        
         
          <p>BRASIL. Ministério da Saúde. Portal de Boas Práticas em Saúde da Mulher, da Criança e do Adolescente. <b>Mortalidade Materna no Brasil</b>. Boletim Epidemiológico n° 20. Brasília, DF: MS, 2020.
          Disponível em: <a href="https://portaldeboaspraticas.iff.fiocruz.br/" target="_blank">https://portaldeboaspraticas.iff.fiocruz.br/</a>.
          Acesso em: 20 mar. 2025.</p>
        
        
          <b>BRASIL. Ministério da Saúde.</b> Plataforma integrada de vigilância em saúde. Painel de Monitoramento da Mortalidade Materna. Brasília, DF: MS, 2024.<br>
          Disponível em: <a href="http://plataforma.saude.gov.br/mortalidade/materna/" target="_blank">http://plataforma.saude.gov.br/mortalidade/materna/</a>.<br>
          Acesso em: 10 abr. 2025.
        
        
          <b>BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Análise em Saúde e Vigilância de Doenças Não Transmissíveis.</b> Vigitel Brasil 2019. Vigilância de fatores de risco e proteção para doenças crônicas por inquérito telefônico. Brasília, DF: MS, 2020. 139 p.
        
        
          <b>CÂMARA, R.; BURLÁ, M.; FERRARI, J.; LIMA, L.; AMIM JUNIOR, J.; BRAGA, A. et al.</b> Cesarean section by maternal request. Revista do Colégio Brasileiro de Cirurgiões. 2016;43(4):301-10.
        
        
          <b>CEDERGREN, M. I.</b> Non-elective caesarean delivery due to ineffective uterine contractility or due to obstructed labour in relation to maternal body mass index. European Journal of Obstetrics & Gynecology and Reproductive Biology. 2009;145(2):163-6.
        
        
          <b>DIAS, M. A. B.; DOMINGUES, R. M. S. M.; SCHILITHZ, A. O. C.; NAKAMURA-PEREIRA, M.; DINIZ, C. S. G.; BRUM, I. R. et al.</b> Incidência do near miss materno no parto e pós-parto hospitalar: dados da pesquisa Nascer no Brasil. Cadernos de Saúde Pública. 2014;30(1):169-81.
        
        
          <b>DINIZ, S. G.</b> Gênero, Saúde Materna e o Paradoxo Perinatal. Rev. Brasileira de Crescimento e Desenvolvimento Humano. 2009;19(2):313-26.
        
        
          <b>FAUCETT, A. M.; METZ, T. D.</b> Delivery of the Obese Gravida. Clinical Obstetrics and Gynecol. 2016;59(1):180-92. DOI: 10.1097/GRF.0000000000000175.
        
        
          <b>FIGO COMMITTEE FOR THE ETHICAL ASPECT OF HUMAN REPRODUCTION AND WOMEN'S HEALTH.</b> International Journal of Gynecology & Obstetrics. 1999;64:317-22.
        
        
          <b>HU, R.; YIN, H.; LI, X.</b> Changing Trends of Adverse Pregnancy Outcomes With Maternal Pre-pregnancy Body Mass Index: A Join-Point Analysis. Frontiers in Medicine. 2022; 9:872490. DOI: 10.3389/fmed.2022.872490.
        
        
          <b>INSTITUTO NACIONAL DE SAÚDE DA MULHER, DA CRIANÇA E DO ADOLESCENTE FERNANDES FIGUEIRA.</b> Portal de boas práticas em Saúde da Mulher, da Criança e do Adolescente. Rio de Janeiro: Fiocruz, 2021.<br>
          Disponível em: <a href="https://portaldeboaspraticas.iff.fiocruz.br/atencao-mulher/fazemos-parte-da-alianca-nacional-para-o-parto-seguro-e-respeitoso/" target="_blank">https://portaldeboaspraticas.iff.fiocruz.br/atencao-mulher/fazemos-parte-da-alianca-nacional-para-o-parto-seguro-e-respeitoso/</a>.<br>
          Acesso em: 28 jan. 2025.
        
        
          <b>LEAL, M. C.; SILVA, A. A. M.; DIAS, M. A. B.; GAMA, S. G. N.; RATTNER, D.; MOREIRA, M. E. et al.</b> Birth in Brazil: national survey into labour and birth. Reproductive Health. 2012;9:15.<br>
          Disponível em: <a href="https://doi.org/10.1186/1742-4755-9-15" target="_blank">https://doi.org/10.1186/1742-4755-9-15</a>.
        
        
          <b>MACLEAN, C.; THOMPSON, I. S.</b> Postpartum Care and Contraception in Obese Women. Clinical Obstetrics and Gynecology. 2016;59(1):204-15. DOI: 10.1097/GRF.0000000000000176.
        
        
          <b>NOMURA, K.; MINAMIZONO, S.; NAGASHIMA, K.; ONO, M.; KITANO, N.</b> Maternal Body Mass Index and Breastfeeding Non-Initiation and Cessation: A Quantitative Review of the Literature. Nutrients. 2020;12(9):2684. DOI: 10.3390/nu12092684.
        
        
          <b>OBSERVATÓRIO OBSTÉTRICO BRASILEIRO (OOBR).</b> Disponível em: <a href="https://observatorioobstetricobr.org/publicacoes/oobr-apresenta-dados-de-mortalidade-gestantes-e-puerperas-no-brasil/" target="_blank">https://observatorioobstetricobr.org/publicacoes/oobr-apresenta-dados-de-mortalidade-gestantes-e-puerperas-no-brasil/</a>. Acesso em: 21 nov. 2024.
        
        
          <b>ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU).</b> Objetivos de Desenvolvimento Sustentável. Genebra: ONU, 2018. Disponível em: <a href="https://www.unicef.org/brazil/objetivos-de-desenvolvimento-sustentavel" target="_blank">https://www.unicef.org/brazil/objetivos-de-desenvolvimento-sustentavel</a>. Acesso em: 1º mar. 2024.
        
        
          <b>ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU).</b> Transformando Nosso Mundo: a Agenda 2030 para o Desenvolvimento Sustentável. Genebra: ONU, 2015. Disponível em: <a href="https://sdgs.un.org/2030agenda" target="_blank">https://sdgs.un.org/2030agenda</a>. Acesso em: 1º nov. 2024.
        
        
          <b>ROY, R. P.</b> A Darwinian view of obstructed labor. Obstetrics & Gynecology. 2003; 101(2): 397-401.
        
        
          <b>TRENDS in maternal mortality 2000 to 2020:</b> estimates by WHO, UNICEF, UNFPA, World Bank Group and UNDESA/Population Division. Genebra: World Health Organization, 2023. Licença: CC BY-NC-SA 3.0 IGO.
        
`,
    ],
  },
  {
    id: "2",
    heading: "Módulo 2",
    body: [
      "A evolução até a atualidade (10 mil anos) foi marcada pelo desenvolvimento da agricultura, aumento das densidades populacionais, maior miscigenação racial e aumento da ocorrência do sedentarismo. Além disso, a globalização da dieta hipercalórica norte-americana vem contribuindo para a progressão da obesidade no mundo, aumentando as taxas de distocia e a incidência de cesarianas.",
      "De acordo com o Ministério da Saúde (MS), em 2019 a prevalência de sobrepeso entre as mulheres brasileiras já alcançava 53,9%, enquanto a de obesidade já era de 20,7%.",
      "A projeção da Organização Mundial de Saúde (OMS) para o ano de 2025 é de que aproximadamente 2,3 bilhões de adultos estarão com sobrepeso e 700 milhões de pessoas com obesidade viverão no mundo.",
    ],
  },
  {
    id: "3",
    heading: "Módulo 3",
    body: [
      "A evolução até a atualidade (10 mil anos) foi marcada pelo desenvolvimento da agricultura, aumento das densidades populacionais, maior miscigenação racial e aumento da ocorrência do sedentarismo. Além disso, a globalização da dieta hipercalórica norte-americana vem contribuindo para a progressão da obesidade no mundo, aumentando as taxas de distocia e a incidência de cesarianas.",
      "De acordo com o Ministério da Saúde (MS), em 2019 a prevalência de sobrepeso entre as mulheres brasileiras já alcançava 53,9%, enquanto a de obesidade já era de 20,7%.",
      "A projeção da Organização Mundial de Saúde (OMS) para o ano de 2025 é de que aproximadamente 2,3 bilhões de adultos estarão com sobrepeso e 700 milhões de pessoas com obesidade viverão no mundo.",
    ],
  },
  {
    id: "4",
    heading: "Módulo 4",
    body: [
      "A evolução até a atualidade (10 mil anos) foi marcada pelo desenvolvimento da agricultura, aumento das densidades populacionais, maior miscigenação racial e aumento da ocorrência do sedentarismo. Além disso, a globalização da dieta hipercalórica norte-americana vem contribuindo para a progressão da obesidade no mundo, aumentando as taxas de distocia e a incidência de cesarianas.",
      "De acordo com o Ministério da Saúde (MS), em 2019 a prevalência de sobrepeso entre as mulheres brasileiras já alcançava 53,9%, enquanto a de obesidade já era de 20,7%.",
      "A projeção da Organização Mundial de Saúde (OMS) para o ano de 2025 é de que aproximadamente 2,3 bilhões de adultos estarão com sobrepeso e 700 milhões de pessoas com obesidade viverão no mundo.",
    ],
  },
  {
    id: "5",
    heading: "Módulo 5",
    body: [
      "A evolução até a atualidade (10 mil anos) foi marcada pelo desenvolvimento da agricultura, aumento das densidades populacionais, maior miscigenação racial e aumento da ocorrência do sedentarismo. Além disso, a globalização da dieta hipercalórica norte-americana vem contribuindo para a progressão da obesidade no mundo, aumentando as taxas de distocia e a incidência de cesarianas.",
      "De acordo com o Ministério da Saúde (MS), em 2019 a prevalência de sobrepeso entre as mulheres brasileiras já alcançava 53,9%, enquanto a de obesidade já era de 20,7%.",
      "A projeção da Organização Mundial de Saúde (OMS) para o ano de 2025 é de que aproximadamente 2,3 bilhões de adultos estarão com sobrepeso e 700 milhões de pessoas com obesidade viverão no mundo.",
    ],
  },
];

function buildAccordionDom(data) {
  const acc = el("div", { class: "accordion", id: "accordionDemo" });
  data.forEach((item, idx) => {
    const collapseId = "collapse" + item.id;
    const headingId = "heading" + item.id;
    // CARD
    const card = el("div", { class: "card" });
    // HEADER
    const head = el(
      "div",
      { class: "card-header", id: headingId },
      el(
        "a",
        {
          class: "collapsed",
          "data-toggle": "collapse",
          "data-target": "#" + collapseId,
          "aria-expanded": "false",
          "aria-controls": collapseId,
        },
        el(
          "p",
          {},
          el("b", {}, item.heading),
          el("i", { class: "fas fa-window-minimize" })
        )
      )
    );
    // BODY
    const body = el(
      "div",
      {
        id: collapseId,
        class: "collapse",
        "aria-labelledby": headingId,
        "data-parent": "#accordionDemo",
      },
      el(
        "div",
        { class: "card-body" },
        ...item.body.map((htmlStr) => {
          const wrapper = document.createElement("div");
          wrapper.innerHTML = htmlStr;
          return wrapper;
        })
      )
    );
    card.appendChild(head);
    card.appendChild(body);
    acc.appendChild(card);
  });
  return acc;
}

function criarModalReferencias() {
  const modal = el("div", {
    class: "modal fade",
    id: "modalReferencias",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "modalReferenciasLabel",
    "aria-hidden": "true",
  });

  const dialog = el("div", {
    class: "modal-dialog modal-lg modal-dialog-scrollable",
    role: "document",
  });
  const content = el("div", { class: "modal-content" });

  // Modal header (fechar)
  const header = el(
    "div",
    { class: "modal-header border-bottom-0" },
    el(
      "button",
      {
        type: "button",
        class: "close ml-auto",
        "data-dismiss": "modal",
        "aria-label": "Fechar",
      },
      el("span", { "aria-hidden": "true" }, "×")
    )
  );

  // Body: Título + accordion
  const body = el("div", { class: "modal-body" });
  body.appendChild(
    el(
      "div",
      { class: "text-center mb-4" },
      el(
        "h5",
        { id: "modalReferenciasLabel", class: "d-inline-block ml-2" },
        "Referências Bibliográficas"
      )
    )
  );
  body.appendChild(buildAccordionDom(accordions));

  content.append(header, body);
  dialog.appendChild(content);
  modal.appendChild(dialog);

  document.body.appendChild(modal);
}

document.addEventListener("DOMContentLoaded", criarModalReferencias);
