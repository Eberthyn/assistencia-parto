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
        
        
          <p>BRASIL. Ministério da Saúde. Plataforma integrada de vigilância em saúde. <b>Painel de Monitoramento da Mortalidade Materna</b>. Brasília, DF: MS, 2024.
          Disponível em: <a href="http://plataforma.saude.gov.br/mortalidade/materna/" target="_blank">http://plataforma.saude.gov.br/mortalidade/materna/</a>.
          Acesso em: 10 abr. 2025.</p>


          <p>BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde.
          Departamento de Análise em Saúde e Vigilância de Doenças Não Transmissíveis.
          Vigitel Brasil 2019. <b>Vigilância de fatores de risco e proteção para doenças crônicas por inquérito telefônico</b>.
          Brasília, DF: MS, 2020. 139 p.</p>


          <p>CÂMARA, R.; BURLÁ, M.; FERRARI, J.; LIMA, L.; AMIM JUNIOR, J.; BRAGA, A. <i>et al.</i>
          Cesarean section by maternal request. <b>Revista do Colégio Brasileiro de Cirurgiões</b>. 2016;43(4):301-10.</p>


          <p>CEDERGREN, M. I. Non-elective caesarean delivery due to ineffective uterine contractility or due to obstructed labour in relation to maternal body mass index.
          <b>European Journal of Obstetrics & Gynecology and Reproductive Biology</b>.
          2009;145(2):163-6.</p>

          DIAS, M. A. B.; DOMINGUES, R. M. S. M.; SCHILITHZ, A. O. C.; NAKAMURA-PEREIRA, M.; DINIZ, C. S. G.; BRUM, I. R. <i>et al.</i>
          Incidência do <i>near miss</i> materno no parto e pós-parto hospitalar: dados da pesquisa Nascer no Brasil.
          <b>Cadernos de Saúde Pública</b>.
          2014;30(1):169-81.

          <p>DINIZ, S. G. Gênero, Saúde Materna e o Paradoxo Perinatal.
          <b>Rev. Brasileira de Crescimento e Desenvolvimento Humano</b>. 2009;19(2):313-26.</p>

          <p>FAUCETT, A. M.; METZ, T. D. Delivery of the Obese Gravida.
          <b>Clinical Obstetrics and Gynecology</b>.
          2016;59(1):180-92. DOI: 10.1097/GRF.0000000000000175.</p>

          <p>FIGO COMMITTE FOR THE ETHICAL ASPECT OF HUMAN REPRODUCTION AND WOMEN’S HEALTH.
          <b>International Journal of Gynecology & Obstetrics</b>. 1999;64:317-22.</p>

          <p>HU, R.; YIN, H.; LI, X. Changing Trends of Adverse Pregnancy Outcomes With Maternal Pre-pregnancy Body Mass Index: A Join-Point Analysis.
          <b>Frontiers in Medicine</b>.
          2022; 9:872490. DOI: 10.3389/fmed.2022.872490.</p>

          <p>INSTITUTO NACIONAL DE SAÚDE DA MULHER, DA CRIANÇA E DO ADOLESCENTE FERNANDES FIGUEIRA.
          <b>Portal de boas práticas em Saúde da Mulher, da Criança e do Adolescente.</b>
          Rio de Janeiro: Fiocruz, 2021.
          Disponível em: <a href="https://portaldeboaspraticas.iff.fiocruz.br/atencao-mulher/fazemos-parte-da-alianca-nacional-para-o-parto-seguro-e-respeitoso/" target="_blank">https://portaldeboaspraticas.iff.fiocruz.br/atencao-mulher/fazemos-parte-da-alianca-nacional-para-o-parto-seguro-e-respeitoso/</a>.
          Acesso em: 28 jan. 2025.</p>

          <p>LEAL, M. C.; SILVA, A. A. M.; DIAS, M. A. B.; GAMA, S. G. N.; RATTNER, D.; MOREIRA, M. E. <i>et al.</i>
          Birth in Brazil: national survey into labour and birth.
          <b>Reproductive Health</b>.
          2012;9:15.
          Disponível em: <a href="https://doi.org/10.1186/1742-4755-9-15" target="_blank">https://doi.org/10.1186/1742-4755-9-15</a>.</p>

          <p>MACLEAN, C.; THOMPSON, I. S.
          Postpartum Care and Contraception in Obese Women.
          <b>Clinical Obstetrics and Gynecology.</b>
          2016;59(1):204-15.
          DOI: 10.1097/GRF.0000000000000176.</p>
        
          <p>NOMURA, K.; MINAMIZONO, S.; NAGASHIMA, K.; ONO, M.; KITANO, N.
          Maternal Body Mass Index and Breastfeeding Non-Initiation and Cessation: A Quantitative Review of the Literature.
          <b>Nutrients.</b>
          2020;12(9):2684.
          DOI: 10.3390/nu12092684.</p>

          <p>OBSERVATÓRIO OBSTÉTRICO BRASILEIRO (OOBR).
          Disponível em: <a href="https://observatorioobstetricobr.org/publicacoes/oobr-apresenta-dados-de-mortalidade-gestantes-e-puerperas-no-brasil/" target="_blank">https://observatorioobstetricobr.org/publicacoes/oobr-apresenta-dados-de-mortalidade-gestantes-e-puerperas-no-brasil/</a>.
          Acesso em: 21 nov. 2024.</p>

          <p>ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU).
          <b>Objetivos de Desenvolvimento Sustentável.</b>
          Genebra: ONU, 2018. Disponível em: <a href="https://www.unicef.org/brazil/objetivos-de-desenvolvimento-sustentavel" target="_blank">https://www.unicef.org/brazil/objetivos-de-desenvolvimento-sustentavel</a>.
          Acesso em: 1º mar. 2024.</p>

          <p>ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU).
          <b>Transformando Nosso Mundo:</b> a Agenda 2030 para o Desenvolvimento Sustentável.
          Genebra: ONU, 2015. Disponível em: <a href="https://sdgs.un.org/2030agenda" target="_blank">https://sdgs.un.org/2030agenda</a>.
          Acesso em: 1º nov. 2024.</p>

          <p>ROY, R. P. A Darwinian view of obstructed labor.
          <b>Obstetrics & Gynecology.</b>
          2003; 101(2): 397-401.</p>

          <p>TRENDS in maternal mortality 2000 to 2020:
          estimates by WHO, UNICEF, UNFPA, World Bank Group and UNDESA/Population Division.
          Genebra: World Health Organization, 2023. Licença: CC BY-NC-SA 3.0 IGO.</p>

          <p>WITTMAN, A. B.; WALL, L. L. The Evolutionary Origins of Obstructed Labor:
          Bipedalism, Encephalization, and the Human Obstetric Dilemma.
          <b>Obstetrics & Gynecology.</b>
          Sur 2007; 62(11), 739-48.</p>

          <p>WORLD HEALTH ORGANIZATION (WHO).
          <b>Robson Classification:</b>
          Implementation Manual.
          Genebra: WHO, 2017.
          Licença: CCBY-NC-SA3.0IGO.</p>

          <p>YE, J.; BÉTRAN, A. P.; VELA, M. G.; SOUZA, J. P.; ZHANG, J. Searching for the optimal rate medically necessary cesarean delivery.
          <b>Birth.</b>
          2014;41(3):237-44.
          DOI: 10.1111/birt.12104. Epub. 2014 Apr 11.</p>

          <p>ZHANG, J.; BRICKER, L.; WRAY, Q. S. Poor uterine contractility in obese women.
          <b>BJOG: An International Journal of Obstetrics & Gynaecology.</b>
          2007; 114:343-348.</p>

          <h1>Aula 2</h1>

          <p>ABALOS, E.; OLADAPO, O. T.; CHAMILLARD, M. <i>et al.</i> 
          Duration of spontaneous labour in ‘low-risk’women with ‘normal’perinatal outcomes: a systematic review.
          <b>European Journal of Obstetrics & Gynecology and Reproductive Biology.</b> 2018; 223, 123-132.</p>

          <p>ALFIREVIC, Z.; DEVANE, D.; GYTE, G. M. L. Continuous cardiotocography (CTG) as a form of electronic fetal monitoring (EFM) for fetal assessment during labour. 
          Cochrane Database of Systematic Reviews. <b>The Cochrane Library</b>, Issue 10, Art. N. CD006066. DOI: 10.1002/14651858.CD006066.pub3.</p>

          <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS (ACOG). 
          ACOG Practice Bulletin N. 106: Intrapartum fetal heart rate monitoring: nomenclature, interpretation, and general management principles. <b>Obstetrics & Gynecology.</b> 2009; 114:192. </p>

          <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS (ACOG). Immersion in water during Labor and Delivery. Committee Opinion N. 679. <b>Obstetrics & Gynecology.</b> 2016;128:e231-6. </p>

          <p>ANIM-SOMUAH, M.; SMYTH R, J. L. Epidural versus non-epidural or no analgesia in labour. Cochrane Database of Systematic Reviews. <b>The Cochrane Library.</b> Issue 10, Art. N. CD000331. DOI: 10.1002/14651858.CD000331.pub1.</p>

          <p>BASEVI, V.; LAVENDER, T. Routine perineal shaving on admission in labour. Cochrane Database of Systematic Reviews. <b>The Cochrane Library</b>, Issue 02, Art. N. CD001236. DOI: 10.1002/14651858.CD001236.pub1.</p>

          <p>BERGHELLA, V.; BAXTER, J. K.; CHAUHAN, S. P. Evidence-based labor and delivery management. <b>American Journal of Obstetrics & Gynecology.</b> 2008;199(5):445-54. DOI: 10.1016/j.ajog.2008.06.093.</p>

          <p>BONET, M.; OLADAPO, O. T.; SOUZA, J. P. et al. Diagnostic accuracy of the partograph alert and action lines to predict adverse birth outcomes: a systematic review. <b>BJOG: An International Journal of Obstetrics & Gynaecology.</b> 2019; 126(13), 1524-1533.</p>

          <p>BRASIL. Presidência da República. Casa Civil. Subchefia para Assuntos Jurídicos.
          <b>Lei nº 11.108, de 7 de abril de 2005.</b> Dispõe sobre a garantia às parturientes o direito à presença de acompanhante durante o trabalho de parto, parto e pós-parto imediato, no âmbito do Sistema Único de Saúde.
          Brasília, DF: Pres. da Rep., 8 abr. 2005. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11108.htm." target="_blank">https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11108.htm.</a> 
          Acesso em: 10 dez. 2024.</p>

          <p>BRASIL. Ministério da Saúde. Agência Nacional de Vigilância Sanitária. <b>Resolução n° 36, de 3 de junho de 2008.</b> Dispõe sobre Regulamento Técnico para funcionamento dos Serviços de Atenção Obstétrica e Neonatal.
          Brasília, DF: MS, 2008. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2008/res0036_03_06_2008_rep.html#:~:text=Disp%C3%B5e%20sobre%20Regulamento%20T%C3%A9cnico%20para,de%20Aten%C3%A7%C3%A3o%20Obst%C3%A9trica%20e%20Neonatal.&text=Considerando%20as%20disposi%C3%A7%C3%B5es%20constitucionais%20e%20a%20Lei%20Federal%20n." target="_blank">https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2008/res0036_03_06_2008_rep.html#:~:text=Disp%C3%B5e%20sobre%20Regulamento%20T%C3%A9cnico%20para,de%20Aten%C3%A7%C3%A3o%20Obst%C3%A9trica%20e%20Neonatal.&text=Considerando%20as%20disposi%C3%A7%C3%B5es%20constitucionais%20e%20a%20Lei%20Federal%20n.</a> Acesso em: 5 dez. 2024.</p>

          <p>BRASIL. Ministério da Saúde. Comissão Nacional de Incorporação de Tecnologias no Sistema Único de Saúde. 
          <b>Diretrizes Nacionais de Assistência ao parto normal.</b> Brasília, DF: MS, 2016. 381 p. Disponível em: <a href="https://www.gov.br/conitec/pt-br/assuntos/noticias/2017/marco/diretrizes-nacionais-de-assistencia-ao-parto-normal" target="_blank">https://www.gov.br/conitec/pt-br/assuntos/noticias/2017/marco/diretrizes-nacionais-de-assistencia-ao-parto-normal</a>. 
          Acesso em: 10 out. 2024. </p>

          <p>CHANG, X. S. Técnica de Punho-Tornozelo. In: FILHO, R. <b>Acupuntura do Punho Tornozelo.</b> São Paulo: Editora Brasileira de Medicina Chinesa, 2014. p. 296-314.</p>

          <p>CLUETT, E. R.; BURNS, E.; CUTHBERT, A. Immersion in water during labour and birth.
          <b>Cochrane Database of Systematic Reviews.</b> 2018, Issue 5. Art. N.: CD000111. DOI: 10.1002/14651858.CD000111.pub4.</p>

          <p>DUFF, M.; BARCLAY, L.; BRODIE, P. M. A study of labour. <b>Semanthic Scholar.</b> 2005.
          Disponível em: <a href="https://api.semanticscholar.org/CorpusID:36428951" target="_blank">https://api.semanticscholar.org/CorpusID:36428951</a>. Acesso em: 10 dez. 2024. </p>

          <p>FRIEDMAN, E. The graphic analysis of labor. <b>American Journal of Obstetrics and Gynecology.</b> 1954 Dec;68(6):1568-75. DOI: 10.1016/0002-9378(54)90311-7. PMID: 13207246.</p>

          <p>GYTE, G. M.; RICHENS, Y. Routine prophylactic drugs in normal labour for reducing gastric aspiration and its effects. <b>Cochrane Database of Systematic Reviews.</b> 2006. </p>

          <p>HAWKINS, J.; KOONIN, L. O.; PALMER, S.; GIBBS, C. Anesthesia related deaths during obstetric delivery in the United States, 1979-1990. <b>Anesthesiology.</b> 1997; 86:277-284.</p>

          <p>HODNETT, E. D.; GATES, S.; HOFMEYR, G. J.; SAKALA, C. Continuous support for women during childbirth. Cochrane Database of Systematic Reviews.
          <b>The Cochrane Library.</b> Issue 02, Art. N. CD003766. DOI: 10.1002/14651858.CD003766.pub3.</p>

          <p>KLOMP, T.; VAN POPPEL, M.; JONES, L.; LAZET, J.; DI NISIO, M.; LAGRO-JANSSEN, A. L. M. Inhaled analgesia for pain management in labour.
          <b>Cochrane Database of Systematic Reviews.</b> Issue 7, 2014 (Status in this issue: NEW). </p>

          <p>LAWRENCE, A.; LEWIS, L.; HOFMEYR, G. J.; DOWSWELL, T.; STYLES, C. Maternal positions and mobility during first stage labour. Cochrane Database of Systematic Reviews.
          <b>The Cochrane Library.</b> Issue 02, Art. N. CD003934. DOI: 10.1002/14651858.CD003934.pub2.</p>

          <p>LAUZON, L.; HODNETT, E. D. Labour assessment programs to delay admission to labour wards. Cochrane Database of Systematic Reviews.
          <b>The Cochrane Library.</b> Issue 2, Art. N. CD000936. DOI: 10.1002/14651858.CD000936.pub4. </p>

          <p>LAVENDER, T.; BERNITZ, S. Use of the partograph - Current thinking. <b>Best Practice & Research Clinical Obstetrics & Gynaecology.</b>
          2020 Aug;67:33-43. DOI: 10.1016/j.bpobgyn.2020.03.010. Epub 2020 Mar 26. PMID: 32321672.</p>

          <p>LAVENDER, T.; CUTHBERT, A.; SMYTH, R. M. Effect of partograph use on outcomes for women in spontaneous labour at term and their babies.
          <b>Cochrane Database of Systematic Reviews.</b> 2018; (8).</p>

          <p>MAKVANDI, S.; LATIFNEJAD, R. R.; SADEGHI, R.; KARIMI, L. Effect of birth ball on labor pain relief: A Systematic review and meta-Analysis.
          <b>Journal of Obstetrics & Gynaecology Research.</b> 2015;41:1679. </p>

          <p>MENDELSON, C. L. The aspiration of stomach contents into the lungs during obstetric anesthesia. <b>American Journal of Obstetrics and Gynecology.</b>1946; 52:191-206.</p>

          <p>MICHAEL, S.; REILLY, C. S.; CAUNT, J. A. Policies for oral intake during labour.
          A survey of maternity units in England and Wales. <b>Anaesthesia.</b> v. 46, n.12, p. 1071-3, Dec 1991. </p>

          <p>NATIONAL INSTITUTE FOR HEALTH AND CARE EXCELLENCE. Intrapartum care: care of healthy women and their babies during childbirth.
          <b>NICE Clinical Guideline.</b> 190, Dec. 2014. Disponível em: <a href="http://www.nice.org.uk/accreditation">http://www.nice.org.uk/accreditation</a>.
          Acesso em: 10 jan. 2025.</p>

          <p>NORFOLK AND NORWICH UNIVERSITY HOSPITALS. Guideline for the Management of Women Requesting Immersion in Water for Active Labour and/or Birth.
          <b>NHS Foundation Trust.</b> 2017;1-9. </p>

          <p>OLADAPO, O. T.; DIAZ, V.; BONET, M. et al. Cervical dilatation patterns of ‘low‐risk’ women with spontaneous labour and normal perinatal outcomes: a systematic review. 
          <b>BJOG: An International Journal of Obstetrics & Gynaecology.</b> 2018, 125(8), 944-954.</p>

          <p>O’SULLIVAN, G. et al. NPO during labor. Is there any scientific validation? <b>Anesthesiology Clinics of North America.</b> 2003; 21(1):87-98.</p>

          <p>PHILPOTT, R. H.; CASTLE, W. M. Cervicographs in the management of labour in primigravidae. II. The action line and treatment of abnormal labour. 
          <b>The Journal Of Obstetrics and Gynaecology of the British Commonwealth.</b> 1972;79(7):599-602. </p>

          <p>REVEIZ, L.; GAITÁN, H. G.; CUERVO, L. G. Enemas during labour. Cochrane Database of Systematic Reviews. 
          <b>The Cochrane Library.</b> Issue 02, Art. N. CD000330. DOI: 10.1002/14651858.CD000330.pub1.</p>

          <p>ROYAL COLLEGE OF OBSTETRICIANS AND GYNAECOLOGISTS AND THE ROYAL COLLEGE OF MIDWIVES. Immersion in water during Labor and Birth. <b>Joint Statement.</b> N.1. 2009;1-5.</p>

          <p>SAFE prevention of the primary cesarean delivery. Obstetric Care Consensus n° 1. 
          American College of Obstetricians and Gynecologists. <b>Obstetrics & Gynecology.</b> 2014;123:693-711.</p>

          <p>SCHEEPERS, H. C.; ESSED, G. G.; BROUNS, F. Aspects of food and fluid intake during labour. Policies of midwives and obstetricians in The Netherlands. 
          <b>European Journal of Obstetrics & Gynecology and Reproductive Biology.</b> v. 78, n. 1, p. 37-40, May 1998.</p>

          <p>SIMMONS, S. W.; TAGHIZADEH, N.; DENNIS, A. T.; HUGHES, D.; CYNA, A. M. Combined spinal-epidural versus epidural analgesia in labour. Cochrane Database of Systematic Reviews. 
          <b>The Cochrane Library.</b> Issue 10, Art. N. CD003401. DOI: 10.1002/14651858.CD003401.pub4.</p>

          <p>SLEUTEL, M.; GOLDEN, S. S. Fasting in Labor: relic or requirement. <b>JOGNN – Journal of Obstetric, Gynecologic, and Neonatal Nursing.</b>  1999; 28:507-512.</p>

          <p>SMITH, C. A.; COLLINS, C. T.; CROWTHER, C. A.; LEVETT, K. M. Acupuncture or acupressure for pain management in labour. Cochrane Database of Systematic Reviews. <b>The Cochrane Library.</b>
          Issue 10, Art. N. CD009232. DOI: 10.1002/14651858.CD009232.pub7.</p>

          <p>SMYTH, R. M.; MARKHAM, C.; DOWSWELL, T. Amniotomy for shortening spontaneous labour. <b>Cochrane Database of Systematic Reviews.</b> 2013; CD006167. </p>

          <p>SMYTH, R. M.; MARKHAM, C.; DOWSWELL, T. Amniotomy for shortening spontaneous labour. <b>Cochrane Database of Systematic Reviews.</b> 2013; CD006167. </p>

          <p>SOUZA, J. P.; OLADAPO, O. T.; FAWOLE, B. et al. Cervical dilatation over time is a poor predictor of severe adverse birth outcomes: a diagnostic accuracy study. 
          <b>BJOG: An International Journal of Obstetrics & Gynaecology.</b> 2018; 125(8), 991-1000.</p>

          <p>WEI, S. et al. Early amniotomy and early oxytocin for prevention of, or therapy for, delay in first stage spontaneous labour compared with routine care. 
          <b>Cochrane Database of Systematic Reviews.</b> v. 8, CD006794, 2013.</p>

          <p>WORLD HEALTH ORGANIZATION (WHO). World Health Organization partograph in management of labour. World Health Organization Maternal Health and Safe Motherhood Programme. 
          <b>Lancet.</b> 1994;4:343(8910):1399-404.</p>

          <p>WORLD HEALTH ORGANIZANIZATION (WHO). Department of Reproductive Health and Research, Family and Community Health. 
          <b>Pregnancy, Childbirth, Postpartum and Newborn Care:</b> a guide for essential practice. Genebra: WHO, 2003; 179p.</p>

          <p>WORLD HEALTH ORGANIZATION et al. <b>Trends in maternal mortality 2000 to 2020:</b> estimates by WHO, UNICEF, UNFPA, World Bank Group and UNDESA/Population Division: executive summary. 
          Genebra: WHO, 2023.</p>

          <p>WORLD HEALTH ORGANIZATION (WHO). <b>World Health Organization recommendations:</b> intrapartum care for a positive childbirth experience. 
          Genebra: WHO, 2018. Licença: CC BY-NC-SA 3.0 IGO.</p>

          <p>WORLD HEALTH ORGANIZATION (WHO). <b>WHO labour care guide:</b> user’s manual. 
          Genebra: WHO, 2020. Disponível em: <a href="https://www.who.int/publications/i/item/9789240017566">https://www.who.int/publications/i/item/9789240017566</a>. Acesso em: 18 nov. 2024. </p>

          <p>ZHANG, J.; TROENDLE, J. F.; YANCEY, M. K. Reassessing the labor curve in nulliparous women. 
          <b>American Journal of Obstetrics & Gynecology.</b> 2002;187(4):824-8. Doi: 10.1067/mob.2002.127142.</p>

          <p>ZHANG, J.; LANDY, H. J. BRANCH, D. W. et al. Contemporary patterns of spontaneous labor with normal neonatal outcomes. 
          <b>Obstetrics & Gynecology.</b> 2010; 116(6), 1281-1287.</p>

          <h1>Aula 3</h1>
          <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS (ACOG). Obstetrics Care Consensus. Safe prevention of the primary cesarean delivery. 
          <b>Obstetrics & Gynecology.</b> 2014;123:693-711.</p>

          <p>AASHEIM, V.; NILSEN, A. B. V.; REINAR, L. M.; LUKASSE, M. Perineal techniques during the second stage of labour for reducing perineal trauma (Review). 
          <b>Cochrane Database of Systematic Reviews,</b> 2017. </p>

          <p>ABU-ZAID, A.; BARADWAN, S.; ALSHAHRANE, M. S.; BAKHSH, H.; BADGHISH, E.; KHADAWARDI, K. <i>et al.</i> Prophylactic tranexamic acid among women undergoing vaginal delivery to reduce postpartum blood loss and related morbidities: a systematic review and meta-analysis of 17 randomized controlled trials. 
          <b>Journal of Gynecology Obstetrics and Human Reproduction.</b> 2022;51(6):102378. DOI:10.1016/j.jogoh.2022.102378.</p>

          <p>AKYILDIZ, D.; COBAN, A. How the Clamping Distance of the Umbilical Cord affects Microbial Colonization and Cord Separation Time: A Randomized Trial. 
          <b>Puerto Rico Health Sciences Journal.</b> 2023.</p>

          <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS (ACOG). Obstetrics Care Consensus. Safe prevention of the primary cesarean delivery. 
          <b>Obstetrics & Gynecology.</b> 2014;123:693-711.</p>

          <p>BECKMANN, M. M.; STOCK, O. M. Antenatal perineal massage for reducing perineal trauma. 
          <b>Cochrane Database of Systematic Reviews.</b> 2013:CD005123.</p>

          <p>BEGLEY, C. M.; GYTE, G. M.; DEVANE, D.; MCGUIRE, W.; WEEKS, A.; BIESTY, L. M. Active versus expectant management for women in the third stage of labour. 
          <b>Cochrane Database of Systematic Reviews.</b> 2 (2019), p. CD007412.</p>

          <p>BOUILLE, L.; SICHITIU, J.; FAVRE, J.; DESSEAUVE, D.  Assessing feasibility and maternal acceptability of a biomecanically-optimized supine birth position: a pilot study. 
          <b>PLoS One.</b> 2021;16(9):e0257285. DOI: 10.1371/journal.pone.0257285.</p>

          <p>BROUWER, E.; KNOL, R.; VERNOOIJ, A. S. N. <i>et al.</i> Physiological-based cord clamping in preterm infants using a new purpose-built resuscitation table: a feasibility study. 
          <b>Archives of Disease in Childhood - Fetal Neonatal Edition.</b> 2019;104:F396.</p>

          <p>BROWN, B. E.; SHAH, P. S.; AFIFI, J. K. <i>et al.</i> Delayed cord clamping in small for gestational age preterm infants. 
          <b>American Journal of Obstetrics & Gynecology.</b> 2022; 226:247.e1.</p>

          <p>COMMITTEE ON PRACTICE BULLETINS-OBSTETRICS. Practice Bulletin N. 183: postpartum hemorrhage. 
          <b>Obstetrics & Gynecology.</b> 2017;130(4):e168-86. DOI: 10.1097/AOG.0000000000002351.</p>

          <p>CUNNINGHAM, F. G.; LEVENO, K. J.; BLOOM, S. L. <i>et al.</i> <b>Williams obstetrics.</b> 25. ed. New York, USA: McGraw-Hill Education, 2018.</p>

          <p>DEYER, T. W.; ASHTON-MILLER, J. A.; VAN BAREN, P. M.; PEARLMAN, M. D. Myometrial contractile strain at uteroplacental separation during parturition. 
          <b>American Journal of Obstetrics & Gynecology.</b> 2000;183:156-9.</p>

          <p>DOMBROWSKI, M. P.; BOTTOMS, S. F.; SALEH, A. A.; HURD, W. W.; ROMERO, R. Third stage of labor: analysis of duration and clinical practice. 
          <b>American Journal of Obstetrics & Gynecology.</b> 1995;172:1279-84.</p>

          <p>ESCOBAR, M. F.; NASSAR, A. H.; THERON, G.; BARNEA, E. R.; NICHOLSON, W.; RAMASAUSKAITE, D. <i>et al.</i> FIGO recommendations on the management of postpartum hemorrhage 2022. 
          <b>The International Journal of Gynecology & Obstetrics.</b> 2022;157 Suppl 1:3-50. DOI: 10.1002/ijgo.14116.</p>

          <p>FUWA, K.; TABATA, N.; OGAWA, R. <i>et al.</i> Umbilical cord milking versus delayed cord clamping in term infants: a systematic review and meta-analysis. 
          <b>Journal of Perinatology.</b> 2021; 41:1549.</p>

          <p>GIMOVSKY, A. C.; BERGHELLA, V. Evidence-based labor management: second stage of labor (part 4). 
          <b>American Journal of Obstetrics & Gynecology MFM.</b> 2022 Mar;4(2):100548. DOI: 10.1016/j.ajogmf.2021.100548. <i>Epub</i> 2021 Dec 4. PMID: 34871779.</p>

          <p>GOLD, E. Pelvic drive in obstetrics. An X-ray study of 100 cases. <b>American Journal of Obstetrics & Gynecology.</b> 1950; 59:890. </p>

          <p>GRAHAM <i>et al.</i> Canadian Institute for Health Information. <b>Discharge Abstract Database.</b> 1989-1990 to 1997-1998. 1997.</p>

          <p>GUNGOR, S.; TEKSOZ, E.; CEYAN, T. <i>et al.</i> Oronasopharyngeal suction versus no suction in normal, term and vaginally born infants: a prospective randomized controlled trial. 
          <b>Australian and New Zealand Journal of Obstetrics and Gynaecology.</b> 2005; 45:453.</p>

          <p>GUPTA, J. K.; HOFMEYR, G. J.; SHEHMAR, M. Position in the second stage of labour for women without epidural anaesthesia. 
          Cochrane Database of Systematic Reviews. <b>The Cochrane Library.</b> Issue 10, Art. N. CD002006. DOI: 10.1002/14651858.CD002006.pub1.</p>

          <p>HAYES, E. H. Placentophagy, Lotus Birth, and Other Placenta Practices: What Does the Evidence Tell Us? <b>The Journal of Perinatal and Neonatal Nursing.</b> 2019;33:99.</p>

          <p>HERSH, A. R. <i>et al.</i> Third stage of labor: evidence-based practice for prevention of adverse maternal and neonatal outcomes. 
          <b>American Journal of Obstetrics & Gynecology.</b> March 2024; S1046-60.</p>

          <p>HOFMEYR, G. J.; ABDEL-ALEEM, H.; ABDEL-ALEEM, M. A. Uterine massage for preventing postpartum haemorrhage. 
          <b>Cochrane Database of Systematic Reviews.</b> 2016 (2013); p. CD006431.</p>

          <p>HOOPER, S. B.; TE PAS, A. B.; LANG, J. <i>et al.</i> Cardiovascular transition at birth: a physiological sequence. 
          <b>Pediatric Research.</b> 2015;77:608.</p>

          <p>HOSONO, S.; MUGISHIMA, H.; FUJITA, H. <i>et al.</i> Umbilical cord milking reduces the need for red cell transfusions and improves neonatal adaptation in infants born at less than 29 weeks' gestation: a randomised controlled trial. 
          <b>Archives of Disease in Childhood - Fetal and Neonatal Edition.</b> 2008.</p>

          <p>HUGO SABATINO lança livro sobre Atenção ao Nascimento Humanizado. <b>Transparência Ativa.</b> Unicamp, Campinas, SP. 2014. 
          Disponível em: <a href="https://unicamp.br/unicamp/noticias/2014/12/01/hugo-sabatino-lanca-livro-sobre-atencao-ao-nascimento-humanizado">https://unicamp.br/unicamp/noticias/2014/12/01/hugo-sabatino-lanca-livro-sobre-atencao-ao-nascimento-humanizado</a>. 
          Acesso em: 13 dez. 2024.</p>

          <p>IRWIN H. Practical considerations for the routine application of lateral Sims position for vaginal delivery. <b>American Journal of Obstetrics & Gynecology.</b> 1978;131. 
          </p>

          <p>JIANG, H.; QIAN, X.; CARROLI, G.; GARNER, P. Selective versus routine use of episiotomy for vaginal birth. 
          <b>Cochrane Database of Systematic Reviews.</b> 2017, Issue 2. Art. N.: CD000081. DOI: 10.1002/14651858.CD000081.pub3.</p>

          <p>KNOL, R.; BROUWER, E.; VAN DEN AKKER, T. <i>et al.</i> Physiological-based cord clamping in very preterm infants - Randomised controlled trial on effectiveness of stabilisation. 
          <b>Resuscitation.</b> 2020;147:26.</p>

          <p>LAINE, K.; SKJELDESTAD, F. E.; SANDVIK, L.; STAFF, A. C. Incidence of obstetric anal sphincter injuries after training to protect the perineum: cohort study. <b>BMJ Open.</b> 2012;2:e001649. DOI:10.1136/bmjopen-2012-001649.</p>

          <p>LALONDE, A.; DAVISS, B. A.; ACOSTA, A.; HERSCHDERFER, K. Postpartum hemorrhage today: ICM/FIGO initiative 2004-2006. <b>The International Journal of Gynecology & Obstetrics.</b> 
          2006;94(3):243-53. DOI:10.1016/j.ijgo.2006.04.016.</p>

          <p>LEAVITT, B. G.; HUFF, D. L.; BELL, L. A.; THURNAU, G. R. Placental drainage of fetal blood at cesarean delivery and feto maternal transfusion: a randomized controlled trial. 
          <b>Obstetrics & Gynecology.</b> 2007;110:608.</p>

          <p>LIYANAGE, S. K.; NINAN, K; MCDONALD, S. D. Guidelines on Deferred Cord Clamping and Cord Milking: A Systematic Review. <b>Pediatrics.</b> 2020;146.</p>

          <p>MCDONALD, S. J.; MIDDLETON, P.; DOWSWELL, T.; MORRIS, P. S. Effect of timing of umbilical cord clamping of term infants on maternal and neonatal outcomes. 
          <b>Cochrane Database of Systematic Reviews.</b> 2013; CD004074.</p>

          <p>MICHEL, S. C. A.; RAKKE, A.; TREIBER, K. <i>et al.</i> MR obstetric pelvimetry: effect of birthing position on pelvic bony dimensions. 
          <b>American Journal of Roentgenology.</b> 2002; 179:1063-7.</p>

          <p>MOORE, E. R.; BERGMAN, N.; ANDERSON, G. C.; MEDLEY, N. Early skin-to-skin contact for mothers and their healthy newborn infants. 
          <b>Cochrane Database of Systematic Reviews.</b> 11 (2016), p. CD003519.</p>

          <p>MURPHY, D. J.; STRACHAN, B. K.; BAHL, R. Royal College of Obstetricians and Gynaecologists. 
          Assisted vaginal birth: Green-top guideline n. 26. <b>BJOG.</b> 2020;127(9):e70-112. DOI: 10.1111/1471-0528.16092.</p>

          <p>NATIONAL HEALTH SERVICES (NHS). NHS Maternity Statistics, England:1995-96 to 1997-98. <b>NHS Digital.</b> Bulletin 2001/14, June 2001. </p>

          <p>NATIONAL LIBRARY OF MEDICINE. ACOG Practice Bulletin. Episiotomy. <b>Clinical Management Guidelines for Obstetrician-Gynecologists.</b> April 2006:71.  </p>

          <p>NATIONAL LIBRARY OF MEDICINE. ACOG Practice Bulletin N. 154: operative vaginal delivery. 
          <b>Obstetrics & Gynecology.</b> 2015;126(5):e56-65. DOI: 10.1097/AOG.0000000000001147.</p>

          <p>NAVANEETHAKRISHNAN, R.; ANDERSON, A.; HOLDING, S. <i>et al.</i> A randomised controlled trial of placental cord drainage to reduce feto-maternal transfusion. 
          <b>European Journal of Obstetrics & Gynecology and Reproductive Biology.</b> 2010;149:27-49.</p>

          <p>NORWIRTZ, E. R.; FUNAI, E. F. <b>Labor and delivery:</b> Management of the normal third stage after vaginal birth. Official reprint from UpToDate. 
          www.uptodate.com © 2024 + UpToDate, Inc. and/or its affiliates. All Rights Reserved. Oct 2024.</p>

          <p>ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE. <b>Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica.</b> Brasília, DF: OPAS, 2018.</p>

          <p>ORGANIZACION MUNDIAL DE LA SALUD (OMS). Integrated Management of Pregnancy and Childbirth. <b>Manejo de las complicaciones del embarazo e el parto:</b> Guía para obstetrices y médicos. 
          Genebra: OMS, 2002. 438 p.</p>

          <p>OSANAN, G. C.; PADILLA, H.; REIS, M. I.; TAVARES, A. B. Strategy for zero maternal deaths by hemorrhage in Brazil: a multidisciplinary initiative to combat maternal morbimortality. 
          <b>Revista Brasileira de Ginecologia e Obstetrícia.</b> 2018;40(3):103-5. DOI: 10.1055/s-0038-1639587.</p>

          <p>PACHECO, L. D.; CLIFTON, R. G.; SAADE, G. R.; WEINER, S. J.; PARRY, S.; THORP, J. M. <i>et al.</i> Tranexamic acid to prevent obstetrical hemorrhage after cesarean delivery. 
          <b>New England Journal of Medicine.</b> 2023;388(15):1365-75. DOI: 10.1056/NEJMoa2207419.</p>

          <p>PRINS, M.; BOXEM, J.; LUCAS, C.; HUTTON, E. Effect of spontaneous pushing versus Valsalva pushing in the second stage of labour on mother and fetus: a systematic review of randomised trials. 
          <b>BJOG: An International Journal of Obstetrics & Gynaecology.</b> 2011;118(6):662-70. DOI: 10.1111/j.1471-0528.2011.02910.x. Epub 2011 Mar 10.</p>

          <p>PROLONGED third stage of labor: morbidity and risk factors. <b>Obstetrics & Gynecology.</b> 1991;77:863-5.</p>

          <p>RABE, H.; DIAZ-ROSSELLO, J. L.; DULEY, L.; DOWSWELL, T. Effect of timing of umbilical cord clamping and other strategies to influence placental transfusion at preterm birth on maternal and infant outcomes. 
          <b>Cochrane Database of Systematic Reviews.</b> 2012:CD003248.</p>

          <p>SACCONE, G.; CAISSUTTI, C.; CIARDULLI, A.; ABDEL-ALEEM, H.; HOFMEYR, G. J.; BERGHELLA, V. Uterine massage as part of active management of the third stage of labour for preventing postpartum haemorrhage during vaginal delivery: a systematic review and meta-analysis of randomised trials. 
          <b>BJOG: An International Journal of Obstetrics & Gynaecology.</b> 125 (2018), p. 778-781.</p>

          <p>SANCHEZ-RAMOS, L.; CULLOUGH, D. M.; MITTA, M.; GONZALEZ, K.; KAUNITZ, A. M.; ROECKNER, J. Does umbilical cord milking increase the risk of severe intraventricular hemorrhage in extreme preterm neonates? A multitreatment comparison. 
          <b>American Journal of Obstetrics & Gynecology.</b> 2020;223:590-92.</p>

          <p>SEIDLER, A. L.; GYTE, G. M. L.; RABE, H. <i>et al.</i> Umbilical Cord Management for Newborns American College of Obstetricians and Gynecologists’ Committee on Obstetric Practice. 
          Delayed Umbilical Cord Clamping After Birth: ACOG Committee Opinion, Number 814. <b>Obstetrics & Gynecology.</b> 2020;136:e100. Reaffirmed 2023. 

          <p>SENTILHES, L.; GROMEZ, A.; CLAVIER, E.; RESCH, B.; DESCAMPS, P.; MARPEAU, L. Long-term psychological impact of severe postpartum hemorrhage. 
          <b>Acta Obstetricia et Gynecologica Scandinavica.</b> 2011;90(6):615-20. DOI: 10.1111/j.1600-0412.2011.01119.x.</p>

          <p>SENTILHES, L.; SÉNAT, M. V.; LE LOUS, M.; WINER, N; ROZENBERG, P.; KAYEM, G. <i>et al.</i> Tranexamic acid for the prevention of blood loss after cesarean delivery. 
          <b>New England Journal of Medicine.</b> 2021;384(17):1623-34. DOI: 10.1056/NEJMoa2028788.</p>

          <p>SOLTANI, H.; POULOSE, T. A.; HUTCHON, D. R. Placental cord drainage after vaginal delivery as part of the management of the third stage of labour. 
          <b>Cochrane Database of Systematic Reviews.</b> 2011:CD004665.</p>

          <p>SOSA, C. G.; ALTHABE, F.; BELIZÁN, J. M.; BUEKENS, P. Risk factors for postpartum hemorrhage in vaginal deliveries in a Latin-American population. 
          <b>Obstetrics & Gynecology.</b> 2009;113(6):1313-9. DOI:10.1097/AOG.0b013e3181a66b05.</p>

          <p>SPONG, C. Y.; BERGHELLA, V.; WENSTROM, K. D.; MERCER, B. M.; SAADE, G. R. Preventing the First Cesarean Delivery. 
          <b>Obstetrics & Gynecology.</b> 2012;120:1181-93. DOI: http://10.1097/AOG.0b013e3182704880.</p>

          <p>VOGEL, J. P.; WILLIAMS, M.; GALLOS, I.; ALTHABE, F.; OLADAPO, O. T. WHO recommendations on uterotonics for postpartum haemorrhage prevention: what works, and which one? 
          <b>BMJ Global Health.</b> 2019;4(2):e001466. DOI: 10.1136/bmjgh-2019-001466.</p>

          <p>WIDSTRÖM, A. M.; LILJA, G.; AALTOMAA-MICHALIAS, P.; DAHLLÖF, A.; LINTULA, M.; NISSEN, E. Newborn behaviour to locate the breast when skin-to-skin: a possible method for enabling early self-regulation. 
          <b>Acta Paediatrica.</b> 2011;100:79-85.</p>

          <p>WORLD HEALTH ORGANIZATION (WHO). Department of Reproductive Health and Research, Family and Community Health. <b>Pregnancy, Childbirth, Postpartum and Newborn Care:</b> A guide for essential practice. 2003, 179p.</p>

          <p>WORLD HEALTH ORGANIZATION (WHO). <b>WHO labour care guide:</b> user’s manual. 2020.
          Disponível em: <a href="https://www.who.int/publications/i/item/9789240017566">https://www.who.int/publications/i/item/9789240017566</a>. Acesso em: 28 out. 2024. </p>

          <p>WORLD HEALTH ORGANIZATION (WHO). <b>WHO recommendations:</b> uterotonics for the prevention of postpartum haemorrhage. Genebra: WHO, 2018 [citado em: 12 out. 2020]. 
          Disponível em: <a href="https://apps.who.int/iris/bitstream/handle/10665/277283/WHO-RHR-18.34-eng.pdf">https://apps.who.int/iris/bitstream/handle/10665/277283/WHO-RHR-18.34-eng.pdf</a>. Acesso em: 10 dez. 2024.</p>

          <p>YAMADA, N. K.; SZYLD, E.; STRAND, M. L. <i>et al.</i> 2023 American Heart Association and American Academy of Pediatrics Focused Update on Neonatal Resuscitation: 
          An Update to the American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. <b>Pediatrics.</b> 2024; 153. </p>

          <p>ZHANG, J.; TROENDLE, J. F.; YANCEY, M. K. Reassessing the labor curve in nulliparous women. <b>American Journal of Obstetrics & Gynecology.</b> 
          2002;187(4):824-8. DOI: 10.1067/mob.2002.127142.</p>

          <h1>Aula 4</h1>

          <p>AASHEIM, V.; NILSEN, A. B. V.; REINAR, L. M.; LUKASSE, M. Perineal techniques during the second stage of labour for reducing perineal trauma (Review). 
          <b>Cochrane Database of Systematic Reviews,</b> 2017. </p>

          <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS. ACOG Practice Bulletin. Episiotomy. <b>Clinical Management Guidelines for Obstetrician-Gynecologists.</b> 
          April 2006:71.  </p>

          <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS. ACOG Practice Bulletin N. 154: operative vaginal delivery. <b>Obstetrics & Gynecology.</b> 
          2015;126(5):e56-65. DOI: 10.1097/AOG.0000000000001147.</p>

          <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS (ACOG). Prevention and Management of Obstetric Lacerations at Vaginal Delivery. 
          Practice Bulletin. n. 198. <b>Obstetrics & Gynecology.</b> 2018;132(3):e87-e102. </p>

          <p>BECKMANN, M. M.; STOCK, O. M. Antenatal perineal massage for reducing perineal trauma. <b>Cochrane Database of Systematic Reviews.</b> 2013; :CD005123. </p>

          <p>CANAVAN, T. <b>Lacerações Perineais de Terceiro e Quarto Graus.</b> ALSO Brasil. Advanced Life Support in Obstetrics. Manual e Programa de Estudos. 
          São Paulo: Sarvier, 2016. p. 337-53.</p>

          <p>CORMIER, J.; MIROUSE, L.; BARBOT, J.; GOFFINET, F.; RAY, C. L. Evolution of episiotomy incidence and Obstetric Anal Sphincter Injury over 10 Years: a mixed-methods study. <b>BJOG: An International Journal of Obstetrics & Gynaecology.</b> 
          2024;0:1-10. DOI: https://doi.org/10.1111/1471-0528.17999.  </p>

          <p>FRANCISCO, A. A.; OLIVEIRA, S. M. J. V.; STEEN, M.; NOBRE, M. R. C.; SOUZA, E. V. Ice pack induced perineal analgesia after spontaneous vaginal birth: randomized controlled trial. <b>Women Birth.</b> 2018;31:e334–e340. 
          Disponível em: <a href="https://doi.org/10.1016/j.wombi.2017.12.011">https://doi.org/10.1016/j.wombi.2017.12.011</a>. Acesso em: 5 fev. 2025. </p>

          <p>GRAHAM <i>et al.</i> Canadian Institute for Health Information. <b>Discharge Abstract Database.</b> 1989-1990 to 1997-1998. 1997. </p>

          <p>JIANG, H.; QIAN, X.; CARROLI, G.; GARNER, P. Selective versus routine use of episiotomy for vaginal birth. <b>Cochrane Database of Systematic Reviews.</b>
          2017, Issue 2. Art. N.: CD000081. DOI: 10.1002/14651858.CD000081.pub3. </p>

          <p>LAINE, K.; SKJELDESTAD, F. E.; SANDVIK, L.; STAFF, A. C. Incidence of obstetric anal sphincter injuries after training to protect the perineum: cohort study. 
          <b>BMJ Open.</b> 2012;2:e001649. DOI:10.1136/bmjopen-2012-001649.</p>

          <p>MENDES, N. A.; MAZZAIA, M. C.; ZANETTI, M. R. D. Análise crítica sobre a utilização do Epi-No na gestação e parto. <b>ABCS Health Sciences.</b> 2018;43(2):117-23. 
          DOI: http://dx.doi.org/10.7322/abcshs.v43i2.1091.</p>

          <p>MURPHY, D. J.; STRACHAN, B. K.; BAHL, R. Royal College of Obstetricians and Gynaecologists. Assisted vaginal birth: Green-top guideline n. 26. <b>BJOG: An International Journal of Obstetrics & Gynaecology.</b> 
          2020;127(9):e70-112. DOI: 10.1111/1471-0528.16092.</p>

          <p>NATIONAL HEALTH SERVICES (NHS). <b>NHS Maternity Statistics.</b> England:1995-96 to 1997-98. Bulletin 2001/14, June 2001. </p>

          <p>NORWIRTZ, E. R.; FUNAI, E. F. <b>Labor and delivery:</b> management of the normal third stage after vaginal birth. 
          Official reprint from UpToDate www.uptodate.com © 2024 + UpToDate, Inc. and/or its affiliates. All Rights Reserved. Oct 2024.</p>

          <p>ORGANIZACION MUNDIAL DE LA SALUD (OMS). Integrated Management of Pregnancy and Childbirth. 
          <b>Manejo de las complicaciones del embarazo e el parto:</b> Guía para obstetrices y médicos. Genebra: OMS, 2002. 438 p.</p>

          <p>SEDANO, L. M.; SEDANO, M. C.; SEDANO, M. R. Resena histórica e hitos de la Obstetricia. <b>Revista Médica Clínica las Condes.</b> 2014;25(6)866-73.</p>

          <p>VAN DE GRAFF, K. M. Sistema genital feminino. 6 ed. <b>Anatomia humana.</b> Barueri: Manole, 2003. p. 725-53.</p>

      `,
    ],
  },
  {
    id: "2",
    heading: "Módulo 2",
    body: [
      `
      <h1>Aula 1</h1>
      <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS (ACOG). 
      <b>Committee Opinion n. 745:</b> mode of term singleton breech delivery.  2018;132(2):e60-3. DOI: 10.1097/AOG.0000000000002755 </p>

      <p>BENZECRY, R. <b>Fórcipe passo a passo.</b> Rio de Janeiro: Revinter, 2006. </p>

      <p>BOGNER, G.; STROBL, M.; SCHAUSBERGER, C.; FISCHER, T.; REISENBERGER, K.; JACOBS, V. R. Breech delivery in the all fours position: a prospective observational comparative study with classic assistance. 
      <b>Journal of Perinatal Medicine.</b> 2015;43(6):707-13. DOI: 10.1515/jpm-2014-0048</p>

      <p>CASTEELS, M.; PODEVYN, K.; VANOVERSCHELDE, H.; LOUWEN, F. Implementation of a breech program in a Belgian obstetric team. 
      <b>International Journal of Gynecology & Obstetrics.</b> 2021;158(2):432-8. DOI: 10.1002/ijgo.14003</p>

      <p>CRONK, M. Keep your hands off the breech. <b>AIMS - Alberta Infant Motor Scale.</b> 1998;10(3).</p>

      <p>DE HUNDT, M.; VLEMMIX, F.; BAIS, J. M.; HUTTON, E. K.; DE GROOT, C. J.; MOL, B. W. <i>et al.</i> Risk factors for developmental dysplasia of the hip: a meta-analysis. 
      <b>European Journal of Obstetrics, Gynecology and Reproductive Biology.</b> 2012;165(1):8-17. DOI: 10.1016/j.ejogrb.2012.06.030</p>

      <p>FORD, J. B.; ROBERTS, C. L.; NASSAR, N.; GILES, W.; MORRIS, J. M. Recurrence of breech presentation in consecutive pregnancies. 
      <b>BJOG.</b> 2010;117(7):830-6. DOI: 10.1111/j.1471-0528.2010.02576.x</p>

      <p>GAILLARD, T.; GIRAULT, A.; ALEXANDER, S.; GOFFINET, F.; LE RAY, C. Is induction of labor a reasonable option for breech presentation?  
      <b>Acta Obstetricia et Gynecologica Scandinavica.</b> 2019;98(7):885-93. DOI: 10.1111/aogs.13557</p>

      <p>GIRAULT, A.; CARTEAU, M.; KEFELIAN, F.; MENARD, S.; GOFFINET, F.; LE RAY, C. Benefits of the «en caul» technique for extremely preterm breech vaginal delivery.  
      <b>Journal of Gynecology Obstetrics and Human Reproduction.</b> 2022;51(2):102284. DOI: 10.1016/j.jogoh.2021.102284</p>

      <p>GOFFINET, F.; CARAYOL, M.; FOIDART, J. M.; ALEXANDER, S.; UZAN, S.; SUBTIL, D. <i>et al.</i> Is planned vaginal delivery for breech presentation at term still an option? Results of an observational prospective survey in France and Belgium. 
      <b>American Journal of Obstetrics & Gynecology.</b> 2006;194(4):1002-11. DOI: 10.1016/j.ajog.2005.10.817</p>

      <p>GROSFELD, O.; KRETOWICZ, J.; BROKOWSKI, J. The temporomandibular joint in children after breech delivery. 
      <b>Journal of Oral Rehabilitation.</b> 1980;7(1):65-72. DOI: 10.1111/j.1365-2842.1980.tb01464.x</p>

      <p>HANNAH, M. E.; HANNAH, W. J.; HEWSON, S. A.; HODNETT, E. D.; SAIGAL, S.; WILLAN, A. R. Planned caesarean section versus planned vaginal birth for breech presentation at term: a randomised multicentre trial. 
      Term Breech Trial Collaborative Group. <b>Lancet.</b> 2000;356(9239):1375-83. DOI: 10.1016/s0140-6736(00)02840-3</p>

      <p>HEHIR, M. P. Trends in vaginal breech delivery. <b>Journal of Epidemiology Community Health.</b> 2015;69(12):1237-9. DOI: 10.1136/jech-2015-205592</p>

      <p>HICKOK, D. E.; GORDON, D. C.; MILBERG JA, Williams MA, Daling JR. The frequency of breech presentation by gestacional age at birth: a large population-based study. 
      <b>American Journal of Obstetrics & Gynecology.</b> 1992;166(3):851-2. DOI: 10.1016/0002-9378(92)91347-d</p>

      <p>HOFMEYR, G. J.; KULIER, R.; WEST, H. M. External cephalic version for breech presentation at term. <b>Cochrane Database of Systematic Reviews.</b> 
      2015;2015(4):CD000083.  DOI: 10.1002/14651858.CD000083.pub3</p>

      <p>HOFMEYR, G. J.; HANNAH, M.; LAWRIE, T. A. Planned caesarean section for term breech delivery. <b>Cochrane Database of Systematic Reviews.</b> 
      2015;2015(7):CD000166. DOI: 10.1002/14651858.CD000166.pub2</p>

      <p>HOFMEYR, G. J. <b>Delivery of the singleton fetus in breech presentation.</b> 2023. 
      Disponível em: <a href="https://www.uptodate.com/contents/delivery-of-the-singleton-fetus-in-breech-presentation">https://www.uptodate.com/contents/delivery-of-the-singleton-fetus-in-breech-presentation</a>. Acesso em: 10 jan. 2025.</p>

      <p>JENNEWEIN, L.; ALLERT, R.; MÖLLMANN, C. J.; PAUL, B.; KIELLAND-KAISEN, U.; RAIMANN, F. J. <i>et al.</i> The influence of the fetal leg position on the outcome in vaginally intended deliveries out of breech presentation at term – A FRABAT prospective cohort study. 
      <b>PLoS One.</b> 2019;14(12):e0225546. DOI: 10.1371/journal.pone.0225546</p>

      <p>JETTESTAD, M. C.; SCHIØTZ, H. A.; YLI, B. M.; KESSLER, J. Fetal monitoring in term breech labor - a review. <b>European Journal of Obstetrics, Gynecology and Reproductive Biology.</b> 
      2019;239:45-51. DOI: 10.1016/j.ejogrb.2019.05.009</p>

      <p>JOTKOWITZ, M. W.; PICTON, F. C. An appraisal of an anatomically and physiologically correct method of breech delivery: the Bracht manoeuvre.  <b>Australian and New Zealand Journal of Obstetrics and Gynaecology.</b> 
      1970;10(3):151-9. DOI: 10.1111/j.1479-828x.1970.tb00421.x</p>

      <p>KIELLAND-KAISEN, U.; PAUL, B.; JENNEWEIN, L.; KLEMT, A.; MÖLLMANN, C. J.; BOCK, N. <i>et al.</i> Maternal and neonatal outcome after vaginal breech delivery of nulliparous versus multiparous women of singletons at term-a prospective evaluation of the Frankfurt breech at term cohort (FRABAT). 
      <b>European Journal of Obstetrics, Gynecology and Reproductive Biology.</b> 2020;252:583-7. DOI: 10.1016/j.ejogrb.2020.04.029 </p>

      <p>KOTASKA, A.; MENTICOGLOU, S.; GAGNON, R. Maternal Fetal Medicine Committee. Vaginal delivery of breech presentation. 
      <b>Journal of Obstetrics and Gynaecology of Canada.</b> 2009;31(6):557-66. DOI: 10.1016/S1701-2163(16)34221-9</p>

      <p>LOUWEN, F.; DAVISS, B. A.; JOHNSON, K. C.; REITTER, A. Does breech delivery in an upright position instead of on the back improve outcomes and avoid cesareans? 
      <b>International Journal of Gynecology & Obstetrics.</b> 2017;136(2):151-61. DOI: 10.1002/ijgo.12033</p>

      <p>NORDBORG, J. W.; SVANBERG, T.; STRANDELL, A.; CARLSSON, Y. Term breech presentation-intended cesarean section versus intended vaginal delivery-a systematic review and meta-analysis. 
      <b>Acta Obstetricia et Gynecologica Scandinavica.</b> 2022;101(6):564-76. DOI: 10.1111/aogs.14333</p>

      <p>OWADA, M.; SUZUKI, S. Outcomes of “one-day trial of vaginal breech delivery of singleton pregnancy” at 37-38 weeks' gestation at a Japanese perinatal center. 
      <b>Journal of Maternal-Fetal & Neonatal Medicine.</b> 2021;34(21):3510-3. DOI: 10.1080/14767058.2019.1686471</p>

      <p>PIPER, E. B.; BACHMAN, C. The prevention of fetal injuries in breech delivery. <b>Journal of the American Medical Association,</b> v. 92, p. 217-221, 1929. 
      <b>American Journal of Obstetrics & Gynecology.</b> 1972;112(5):713. </p>

      <p>REZENDE, J. <b>Obstetrícia.</b> 8. ed. Rio de Janeiro: Guanabara Koogan, 1998. Versão. Extração podal. p. 1269-89 (mesma paginação do capítulo da  referência 35).</p>

      <p>SANDBERG, E. C. The Zavanelli maneuver: 12 years of recorded experience. <b>Obstetrics & Gynecology.</b> 1999;93(2):312-7. DOI: 10.1016/s0029-7844(98)00340-8</p>

      <p>SENTILHES, L.; SCHMITZ, T.; AZRIA, E.; GALLOT, D.; DUCARME, G.; KORB, D. <i>et al.</i> Breech presentation: clinical practice guidelines from the French College of Gynaecologists and Obstetricians (CNGOF). 
      <b>European Journal of Obstetrics, Gynecology and Reproductive Biology.</b> 2020;252:599-604. DOI: 10.1016/j.ejogrb.2020.03.033</p>

      <p>TOIJONEN, A. E.; HEINONEN, S.T.; GISSLER, M.; MACHAREY, G. A comparison of risk factors for breech presentation in preterm and term labor: a nationwide, population-based case-control study. 
      <b>Archives of Gynecology and Obstetrics.</b> 2020;301(2):393-403. DOI: 10.1007/s00404-019-05385-5</p>

      <p>TOIJONEN, A.; HEINONEN, S. T.; GISSLER, M.; MACHAREY, G. Neonatal outcome in vaginal breech labor at 32 + 0-36 + 0 weeks of gestation: a nationwide, population-based record linkage study. 
      <b>BMC Pregnancy Childbirth.</b> 2022;22(1):211. DOI: 10.1186/s12884-022-04547-9</p>

      <p>VLEMMIX, F.; BERGENHENEGOUWEN, L.; SCHAAF, J. M.; ENSING, S.; ROSMAN, A. N.; RAVELLI, A. C. <i>et al.</i> Term breech deliveries in the Netherlands: did the increased cesarean rate affect neonatal outcome? A population-based cohort study. 
      <b>Acta Obstetricia et Gynecologica Scandinavica.</b> 2014;93(9):888-96. DOI: 10.1111/aogs.12449</p>

      <p>WELLE-STRAND, J. A.; TAPPERT, C.; EGGEBØ, T. M. Induction of labor in breech presentations - a retrospective cohort study.  <b>Acta Obstetricia et Gynecologica Scandinavica.</b> 
      2021;100(7):1336-44. DOI: 10.1111/aogs.14083</p>

      <p>WESTGREN, M.; EDVALL, H.; NORDSTRÖM, L.; SVALENIUS, E.; RANSTAM, J. Spontaneous cephalic version of breech presentation in the last trimester. <b>British Journal of Obstetrics Gynaecology.</b> 
      1985;92(1):19-22. DOI: 10.1111/j.1471-0528.1985.tb01043.x</p>

      <p>WESTGREN, M.; GRUNDSELL, H.; INGEMARSSON, I.; MÜHLOW, A.; SVENNINGSEN, N. W. Hyperextension of the fetal head in breech presentation. A study with long-term follow-up. 
      <b>British Journal of Obstetrics and Gynaecology.</b> 1981;88(2):101-4. DOI: 10.1111/j.1471-0528.1981.tb00949.x</p>

      <p>WESTGREN, L. M.; SONGSTER, G.; PAUL, R. H. Preterm breech delivery: another retrospective study.  <b>Obstetrics & Gynecology.</b> 1985;66(4):481-4.</p>

      <p>WHYTE, H.; HANNAH, M. E.; SAIGAL, S.; HANNAH, W. J.; HEWSON, S.; AMANKWAH, K. <i>et al.</i> Outcomes of children at 2 years after planned cesarean birth versus planned vaginal birth for breech presentation at term: the International Randomized Term Breech Trial. 
      <b>American Journal of Obstetrics & Gynecology.</b> 2004;191(3):864-71. DOI: 10.1016/j.ajog.2004.06.056</p>

      <p>WIGAND, J. H.; NAEGELE, F. K. <b>Die Geburt des Menschen, in physiologisch-diätetischer und pathologisch-therapeutischer Beziehung.</b> Berlin: Nicolai; 1820. </p>

      <p>WILSON, A.; TRUCHANOWICZ, E. G.; ELMOGHAZY, D.; MACARTHUR, C.; COOMARASAMY, A. Symphysiotomy for obstructed labour: a systematic review and meta-analysis. 
      <b>BJOG.</b> 2016;123(9):1453-61. DOI: 10.1111/1471-0528.14040</p>

      <h1>Aula 2</h1>
      <p>AL-SUHEL, R.; GILL, S.; ROBSON, S.; SHADBOLT, B. Kjelland’s forceps in the new millennium. Maternal and neonatal outcomes of attempted rotational forceps delivery.  
      <b>Australian and New Zealand Journal of Obstetrics and Gynaecology.</b> 2009;49(5):510-4. DOI: 10.1111/j.1479-828X.2009.01060.x</p>

      <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS (ACOG). Acog Practice Bulletin n. 154: operative vaginal delivery. 
      <b>Obstetrics & Gynecology.</b>  2015;126(5):e56-65. DOI: 10.1097/AOG.0000000000001147</p>

      <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS (ACOG). American Academy of Pediatrics. Neonatal encephalopathy and neurologic outcome. 2nd ed. 
      Washington (DC): <b>ACOG, </b> 2014. </p>

      <p>BAHL, R.; MURPHY, D. J.; STRACHAN, B. Qualitative analysis by interviews and video recordings to establish the components of a skilled low-cavity non-rotational vacuum delivery. 
      <b>BJOG.</b> 2009;116(2):319-26. DOI: 10.1111/j.1471-0528.2008.01967.x </p>

      <p>BENZECRY, R. <b>Fórcipe passo a passo.</b> Rio de Janeiro: Revinter; 2006.</p>

      <p>CHU BESANÇON. <b>Odon Device™:</b> vers une nouvelle expérience de l’accouchement instrumental, 2020. 
      Disponível em: <a href="https://www.chu-besancon.fr/le-chu/actualites-du-chu/actualite/odon-devicetm-vers-une-nouvelle-experience-de-laccouchement-instrumental.html">https://www.chu-besancon.fr/le-chu/actualites-du-chu/actualite/odon-devicetm-vers-une-nouvelle-experience-de-laccouchement-instrumental.html</a>. Acesso em: 10 jan. 2025.</p>

      <p>COMMITTEE ON PRACTICE BULLETINS-OBSTETRICS. Practice Bulletin n. 178: shoulder dystocia. 
      <b>Obstetrics & Gynecology.</b> 2017;129(5):e123-33. DOI: 10.1097/AOG.0000000000002043</p>

      <p>CRANE, A. K.; GELLER, E. J.; BANE, H.; JU, R.; MYERS, E.; MATTHEWS, C. A. Evaluation of pelvic floor symptoms and sexual function in primiparous women who underwent operative vaginal delivery versus cesarean delivery for second-stage arrest. 
      <b>Female Pelvic Medicine & Reconstrutive Surgery.</b> 2013;19(1):13-6. DOI: 10.1097/SPV.0b013e31827bfd7b</p>

      <p>DE LEEUW, J. W.; DE WIT, C.; KUIJKEN, J. P.; BRUINSE, H. W. Mediolateral episiotomy reduces the risk for anal sphincter injury during operative vaginal delivery. 
      <b>BJOG.</b> 2008;115(1):104-8. DOI: 10.1111/j.1471-0528.2007.01554.x</p>

      <p>DEMISSIE, K.; RHOADS, G. G.; SMULIAN, J. C.; BALASUBRAMANIAN, B. A.; GANDHI, K.; JOSEPH, K. S. <i>et al.</i> Operative vaginal delivery and neonatal and infant adverse outcomes: population based retrospective analysis. 
      <b>BMJ.</b> 2004;329(7456):24-9. DOI: 10.1136/bmj.329.7456.24</p>

      <p>FITZGERALD, M. P.; WEBER, A. M.; HOWDEN, N.; CUNDIFF, G. W.; BROWN, M. B. Risk factors for anal sphincter tear during vaginal delivery. 
      <b>Obstetrics & Gynecology.</b> 2007;109(1):29-34. DOI: 10.1097/01.AOG.0000242616.56617.ff</p>

      <p>GUROL-URGANCI, I.; CROMWELL, D. A.; EDOZIEN, L. C.; MAHMOOD, T. A.; ADAMS, E. J.; RICHMOND, D. H. <i>et al.</i> Third and fourth degree perineal tears among primiparous women in England between 2000 and 2012: time trends and risk factors. 
      <b>BJOG.</b> 2013;120(12):1516-25. DOI: 10.1111/1471-0528.12363</p>

      <p>HOTTON, E. J.; LENGUERRAND, E.; ALVAREZ, M.; O’BRIEN, S.; DRAYCOTT, T. J.; CROFTS, J. F. Outcomes of the novel Odon Device in indicated operative vaginal birth. 
      <b>American Journal of Obstetrics & Gynecology.</b> 2021;224(6):607.e1-17. DOI: 10.1016/j.ajog.2020.12.017</p>

      <p>JEVE, Y. B.; NAVTI, O. B.; KONJE, J. C. Comparison of techniques used to deliver a deeply impacted fetal head at full dilatation: a systematic review and meta-analysis. 
      <b>BJOG.</b> 2016;123(3):337-45. DOI: 10.1111/1471-0528.13593</p>

      <p>JOHANSON, R. B.; MENON, V. Soft versus rigid vacuum extractor cups for assisted vaginal delivery. 
      <b>Cochrane Database of Systematic Reviews.</b> 2000;(2):CD000446. DOI: 10.1002/14651858.CD000446</p>

      <p>JOHANSON, R. B.; MENON, B. K. Vacuum extraction versus forceps for assisted vaginal delivery. <b>Cochrane Database of Systematic Reviews.</b> 
      2000;(2):CD000224. DOI: 10.1002/14651858.CD000224</p>

      <p>KNIGHT, M.; CHIOCCHIA, V.; PARTLETT, C.; RIVERO-ARIAS, O.; HUA, X.; HINSHAW, K. <i>et al.</i> Prophylactic antibiotics in the prevention of infection after operative vaginal delivery (ANODE): a multicentre randomised controlled trial. 
      <b>Lancet.</b> 2019;393(10189):2395-403. DOI: 10.1016/S0140-6736(19)30773-1</p>

      <p>LATTUS, J. O.; PAREDES, A. V.; JUNEMANN, K. C.; MARTIC, A. V.; CONTRERAS, P. N.; BAEZA, N. P. <i>et al.</i> Espátulas de Thierry <i>versus</i> fórceps de Kjelland. <b>Revista Chilena de Obstetricia y Ginecología.</b> 
      2003;68(6):477-86. DOI: 10.4067/S0717-75262003000600004</p>

      <p>LAUFE, L. E.; BERKUS, M. D. <b>Assisted vaginal delivery:</b> obstetric fórceps and vacum extraction techniques. New York: McGraw-Hill; 1992. </p>

      <p>LUND, N. S.; PERSSON, L. K.; JANGÖ, H.; GOMMESEN, D.; WESTERGAARD, H. B. Episiotomy in vacuum-assisted delivery affects the risk of obstetric anal sphincter injury: a systematic review and metaanalysis. <b>European Journal of Obstetrics, Gynecology and Reproductive Biology.</b> 
      2016;207:193-9. DOI: 10.1016/j.ejogrb.2016.10.013</p>

      <p>MAPPA, I.; TARTAGLIA, S.; MAQINA, P.; MAKATSARIYA, A.; GHI, T.; RIZZO, G. <i>et al.</i> Ultrasound versus routine care before instrumental vaginal delivery: a systematic review and meta-analysis.  
      <b>Acta Obstetricia et Gynecologica Scandinavica.</b> 2021;100(11):1941-8. DOI: 10.1111/aogs.14236</p>

      <p>MULDER, F. E.; SCHOFFELMEER, M. A.; HAKVOORT, R. A.; LIMPENS, J.; MOL, B. W.; VAN DER POST, J. A. <i>et al.</i> Risk factors for postpartum urinary retention: a systematic review and meta-analysis. 
      <b>BJOG.</b> 2012;119(12):1440-6. DOI: 10.1111/j.1471-0528.2012.03459.x</p>

      <p>MURPHY, D. J.; MACLEOD, M.; BAHL, R.; STRACHAN, B. A cohort study of maternal and neonatal morbidity in relation to use of sequential instruments at operative vaginal delivery.  
      <b>European Journal of Obstetrics, Gynecology and Reproductive Biology.</b> 2011;156(1):41-5. DOI: 10.1016/j.ejogrb.2011.01.004</p>

      <p>MURPHY, D. J.; STRACHAN, B. K.; BAHL, R. Royal College of Obstetricians and Gynaecologists. Assisted vaginal birth: Green-top guideline no. 26. 
      <b>BJOG.</b> 2020;127(9):e70-112. DOI: 10.1111/1471-0528.16092</p>

      <p>NIKPOOR, P.; BAIN, E. Analgesia for forceps delivery. <b>Cochrane Database of Systematic Reviews.</b> 2013;9:CD008878. DOI: 10.1002/14651858.CD008878.pub2</p>

      <p>POUSADA, D. G. S.; SÁENZ, N. H. V. <b>Espátulas de Velasco y de Thierry.</b> Medicina (Guayaquil). 2009;14(2):179-83.</p>

      <p>PRACTICE guidelines for obstetric anesthesia: an updated report by the American Society of Anesthesiologists Task Force on Obstetric Anesthesia and the Society for Obstetric Anesthesia and Perinatology. 
      <b>Anesthesiology.</b> 2016;124(2):270-300. DOI: 10.1097/ALN.0000000000000935 </p>

      <p>ROYAL AUSTRALIAN AND NEW ZEALAND COLLEGE OF OBSTETRICIANS AND GYNAECOLOGISTS. <b>Instrumental vaginal delivery:</b> C-Obs 16. Melbourne: RANZCOG, 2020. 
      Disponível em: <a href="https://ranzcog.edu.au/wp-content/uploads/2022/05/Instrumental-vaginal-birth.pdf">https://ranzcog.edu.au/wp-content/uploads/2022/05/Instrumental-vaginal-birth.pdf</a>. Acesso em: 15 jan. 2025.</p>

      <p>ROYAL COLLEGE OF OBSTETRICIANS AND GYNAECOLOGISTS. <b>Reducing the risk of venous thromboembolism during pregnancy and the puerperium.</b> London: RCOG, 2015.</p>

      <p>SARTORE, A.; DE SETA, F.; MASO, G.; PREGAZZI, R.; GRIMALDI, E.; GUASCHINO, S. The effects of mediolateral episiotomy on pelvic floor function after vaginal delivery. 
      <b>Obstetrics & Gynecology.</b> 2004;103(4):669-73. DOI: 10.1097/01.AOG.0000119223.04441.c9</p>

      <p>SCHWARZMAN, P.; WALFISCH, A.; WAINSTOCK, T.; SEGAL, I.; LANDAU, D.; SHEINER, E. Vacuum extraction for the preterm newborn and the long-term neurological outcome. 
      <b>American Journal of Obstetrics & Gynecology.</b> 2017;216(1):S549. DOI:<a href="https://doi.org/10.1016/j.ajog.2016.11.883">https://doi.org/10.1016/j.ajog.2016.11.883</a>. </p>

      <p>SPENCER, C.; MURPHY, D.; BEWLEY, S. Caesarean section in the second stage of labour. <b>BMJ.</b> 2006;333(7569):613-4. DOI: 10.1136/bmj.38971.466979.DE</p>

      <p>SILVESTRI, P.; Meccanico d’auto ha inventato Odón Device un dispositivo per facilitare il parto. <b>Virtualblognews,</b> 2013. 
      Disponível em: <a href="https://virtualblognews.altervista.org/meccanico-dauto-ha-inventato-odon-device-un-dispositivo-per-facilitare-il-parto-video/25817512/">https://virtualblognews.altervista.org/meccanico-dauto-ha-inventato-odon-device-un-dispositivo-per-facilitare-il-parto-video/25817512/</a>. Acesso em: 20 dez. 2024.</p>

      <p>SULTAN, A. H.; THAKAR, R.; ISMAIL, K. M.; KALIS, V.; LAINE, K.; RÄISÄNEN, S. H. <i>et al.</i> The role of mediolateral epiosiotomy during operative vaginal delivery.  
      <b>European Journal of Obstetrics, Gynecology and Reproductive Biology.</b> 2019;240:192-6. DOI: 10.1016/j.ejogrb.2019.07.005</p>

      <p>TOWNER, D.; CASTRO, M. A.; EBY-WILKENS, E.; GILBERT, W. M. Effect of mode of delivery in nulliparaous women on neonatal intracranial injury. 
      <b>New England Journal of Medicine.</b> 1999;341(23):1709-14. DOI: 10.1056/NEJM199912023412301</p>

      <p>VACCA, A. The trouble with vacuum extraction. <b>Current Obstetrics and Gynecology Reports.</b> 1999;9(1):41-5. DOI: 10.1016/S0957-5847(99)90072-0</p>

      <p>WALSH, C.; ROBSON, M.; MCAULIFFE, F. 647: neonatal morbidity and mortality of operative vaginal delivery: a 10-year study of 82,000 infants. 
      <b>American Journal of Obstetrics & Gynecology.</b> 2012;206(1 Suppl):S290.</p>

      <p>WALSH, C. A.; ROBSON, M.; MCAULIFFE, F. M. Mode of delivery at term and adverse neonatal outcomes.  
      <b>Obstetrics & Gynecology.</b> 2013;121(1):122-8. DOI: 10.1097/aog.0b013e3182749ac9</p>

      <p>YEOMANS, E. R. Operative vaginal delivery. <b>Obstetrics & Gynecology.</b> 2010;115(3):645-53. DOI: 10.1097/AOG.0b013e3181cfbefd</p>

      <h1>Aula 3</h1>
      <p>ACADEMIA AMERICANA DE MÉDICOS DE FAMÍLIA. <b>Also Brasil – Suporte avançado de vida em obstetrícia - Manual e Programa de Estudos.</b> 
      São Paulo: Sarvier Livros Médicos, 2016.</p>

      <p>AMORIM, M. M. R.; DUARTE, A. C.; ANDREUCCI, C. B.; KNOBEL, R.; TAKEMOTO,  M. L. S. Distocia de ombro: proposta de um novo algoritmo para conduta em partos em posições não supinas. 
      <b>Femina.</b> 2013;41(3):115-24.</p>

      <p>ANSELL, L.; ANSELL, D. A.; MCARA-COUPER, J.; LARMER, P. J.; GARRETT, N K. G. Axillary traction: an effective method of resolving shoulder dystocia. 
      <b>Australian and New Zealand Journal of Obstetrics and Gynaecology.</b> 2019;59:627-33.</p>

      <p>BEALL, M. H.; SPONG, C.; MCKAY, J.; ROSS, M. G. Objetive definition of shoulder dystocia: a prospective evaluation. 
      <b>American Journal of Obstetrics & Gynecology.</b> 1998;179(4):934-7.</p>

      <p>BJÖRKLUND, K. Minimally invasive surgery for obstructed labour: a review of symphysiotomy during the twentieth century (including 5000 cases). 
      <b>BJOG.</b> 2002;109(3):236-48.</p>

      <p>BRUNER, J. P.; DRUMMOND, S. B.; MEENAN, A. L.; GASKIN, I. M. All-four maneuver for reducing shoulder dystocia during labor. 
      <b>Journal of Reproductive Medicine.</b> 1998;43(5):439-43.</p>

      <p>CAMPBELL, M. K.; OSTBYE, T.; IRGENS, L. M. Post-term birth: risk factors and outcomes in a 10-year cohort of Norwegian births. 
      <b>Obstetrics & Gynecology.</b> 1997:89(4):543-8.</p>

      <p>CLUVER, C. A.; HOFMEYR, G. J. Posterior axilla sling traction for shoulder dystocia: case review and a new method of shoulder rotation with the sling. 
      <b>American Journal of Obstetrics & Gynecology.</b> 2015;212(6):784.e1-7.</p>

      <p>COMMITTE ON PRACTICE BULLETINS - OBSTETRICS. Practice Bulletin n. 178: Shoulder Dystocia.  
      <b>Obstetrics & Gynecology.</b> 2017;129(5):e123-33. Reaffirmed 2019. </p>

      <p>COMMITTEE ON PRACTICE BULLETINS - OBSTETRICS. Practice Bulletin No 216: Macrosomia.  <b>Obstetrics & Gynecology.</b> 2020;135(1):e18-35.</p>

      <p>DALL’ASTA, A.; GHI, T.; PEDRAZZI, G.; FRUSCA, T. Does vacuum delivery carry a higher risk of shoulder dystocia? Review and meta-analysis of the literature.  
      <b>European Journal of Obstetrics, Gynecology and Reproductive Biology.</b> 2016;204:62-8.</p>

      <p>FOAD, S. L.; MEHLMAN, C. T.; YING, J. The epidemiology of neonatal brachial plexus palsy in the United States. 
      <b>Journal of Bone & Joint Surgery.</b> 2008;90(6):1258-64.</p>

      <p>GACHON, B.; DESSEAUVE, D.; FRITEL, X.; PIERRE, F. Is fetal manipulation during shoulder dystocia management associated with severe maternal and neonatal morbidities? 
      <b>Archives of Gynecologyand Obstetrics.</b> 2016;294:505-9.</p>

      <p>GHERMAN, R. B. Shoulder dystocia: na evidence-based evaluation of the obstetric nightmare. 
      <b>Clinical Obstetrics and Gynecology.</b> 2002;45(2):345-62.</p>

      <p>GÜLMEZOGLU, A. M.; CROWTHER, C. A.; MIDDLETON, P.; HEATLEY, E. Induction of labour for improving birth outcomes for women at or beyond term. 
      <b>Cochrane Database of Systematic Reviews.</b> 2012;6(6):CD004945. </p>

      <p>HARDER, U. Sofortmaßnahmen bei Schulterdystokie. <b>Hebamme.</b> 2005;18(3):138-45. </p>

      <p>HARTLING, L.; DRYDEN, D. M.; GUTHRIE, A.; MUISE, M.; VANDERMEER, B.; DONOVAN, L. Benefits and harms of treating gestational diabetes mellitus: a systematic review and meta-analysis for the U.S. 
      Preventive Services Task Force and the National Institutes of Health Office of Medical Applications of Research. <b>Annals of Internal Medicine.</b> 2013;159(2):123-9.</p>

      <p>HOFFMAN, M. K.; BAILIT, J. L.; BRANCH, D. W.; BURKMAN, R. T.; VELDHUSIEN, P. V.; LU, L. <i>et al.</i> A comparison of obstetric maneuvers for the acute management of shoulder dystocia. 
      <b>Obstetrics & Gynecology.</b> 2011;117(6):1272-8.</p>

      <p>JOHNSON, G. J.; DENNING, S.; CLARK, S. L.; DAVIDSON, C. Pathophysiologic origins of brachial plexus injury. <b>Obstetrics & Gynecology.</b> 2020;136(4):725-30.</p>

      <p>KLEITMAN, V.; FELDMAN, R.; WALFISCH, A.; TOLEDANO, R.; SHEINER, E. Recurrent shoulder dystocia: is it predictable? 
      <b>Archives of Gynecology and Obstetrics.</b> 2016;294:1161-6.</p>

      <p>LAUGHON, S. K.; BERGHELLA, V.; REDDY, U. M.; SUNDARAM, R.; LU, Z; HOFFMAN, M. K. Neonatal and maternal outcomes with prolonged second stage of labor.  
      <b>Obstetrics & Gynecology.</b> 2014;124(1):57-67.</p>

      <p>LEUNG, T. Y.; STUART, O.; SUEN, S. S.; SAHOTA, D. S.; LAU, T. K.; LAO, T. T. Comparison of perinatal outcomes of shoulder dystocia alleviated by different type and sequence of manoeuvres: a retrospective review. 
      <b>BJOG.</b> 2011;118(8):985-90.</p>

      <p>LEUNG, T. Y.; STUART, O.; SAHOTA, D. S.; SUEN, S. S. H.; LAU, T. K.; LAO, T. T. Head-to-body delivery interval and risk of fetal acidosis and hypoxic ischaemic encephalopathy in shoulder dystocia: a retrospective review. 
      <b>BJOG.</b> 2011;118(4):474-9. </p>

      <p>MACKENZIE, I. Z.; SHAH, M.; LEAN, K.; DUTON, S.; NEWDICK, H.; TUCKER, D. E. Management of shoulder dystocia: trends in incidence and maternal and neonatal morbidity. 
      <b>Obstetrics & Gynecology.</b> 2007;110(5):1059-68.</p>

      <p>MCFARLAND, M. B.; TRYLOVICH, C. G.; LANGER, O. Anthropometric differences in macrosomic infants of diabetic and nondiabetic mothers. 
      <b>Journal of Maternal-Fetal & Neonatal Medicine.</b> 1998;7(6):292-5. </p>

      <p>MENTICOGLOU, S. M. A modified technique to deliver the posterior arm in severe shoulder dystocia.  <b>Obstetrics & Gynecology.</b> 2006;108:755-7.</p>

      <p>O’LEARY, J. A.; CUVA, A. Abdominal rescue after failed cephalic replacement.  <b>Obstetrics & Gynecology.</b> 1992;80:514-6. </p>

      <p>OLSON, D. N.; LOGAN, L.; GIBSON, K. S. Evaluation of multidisciplinary shoulder dystocia simulation training on knowledge, performance, and documentation.  
      <b>American Journal of Obstetrics & Gynecology MFM.</b> 2021 Sep 1;3(5):100401. DOI:10.1016/j.ajogmf.2021.100401.</p>

      <p>ØVERLAND, E. A.; VATTEN, L. J.; ESKILD, A. Pregnancy week at delivery and the risk of shoulder dystocia: a population study of 2.014.956 deliveries. 
      <b>BJOG.</b> 2014;121(1):34-41.</p>

      <p>ROBINSON, R.; WALKER, K. F.; WHITE, V. A.; BUGG, G. J.; SNELL, K. I. E.; JONES, N. W. The test accuracy of antenatal ultrasound definitions of fetal macrosomia to predict birth injury: a systematic review. 
      <b>European Journal of Obstetrics, Gynecology and Reproductive Biology.</b> 2020;246:79-85.</p>

      <p>RODIS, J. F.; LOCKWOOD, C. J.; BARSS, V. A. Shoulder dystocia: risk factors and planning delivery of high-risk pregnancies. <b>Uptodate</b> 2022A.</p>

      <p>RODIS, J. F.; LOCKWOOD, C. J.; BARSS, V. A. Shoulder dystocia: intrapartum diagnosis, management, and outcome. <b>Uptodate</b> 2022B.</p>

      <p>SANCETTA, R.; KHANZADA, H.; LEANTE, R. Shoulder Shrug maneuver to facilite delivery during shoulder dystocia. <b>Obstetrics & Gynecology.</b> 2019;133(6):1178-81.</p>

      <p>SANDBERG, E. C. The Zavanelli maneuver: 12 years of recorded experience.  <b>Obstetrics & Gynecology.</b> 1999;93(2):312-7. </p>

      <p>TULLY, G. FlipFLOP: four steps to remember. <b>Midwifery Today International Midwife.</b> 2012;(103):9-11.</p>

      <p>VIDARSDOTTIR, H.; GEIRSSON, R. T.; HARDARDOTTIR, H.; VALDIMARSDOTTIR, U.; DAGBJARTSSON, A. Obstetric and neonatal risks among extremely macrosomic babies and their mothers. 
      <b>American Journal of Obstetrics & Gynecology.</b> 2011;204(5):423.e1-e6</p>

      <p>WITKOP, C. T.; NEALE, D.; WILSON, L. M.; BASS, E. B.; NICHOLSON, W. K. Active compared with expectant delivery management in women with gestational diabetes: a systematic review.  
      <b>Obstetrics & Gynecology.</b> 2009;113(1):206-17.</p>

      <p>WOODS, C. E.; WESTBURY, N. Y. A principle of physics as applicable to shoulder delivery. <b>American Journal of Obstetrics & Gynecology.</b> 1943;45:796-804.</p>

      <p>ZHANG, C.; WU, Y.; LI, S.; ZHANG, D. Maternal prepregnancy obesity and the risk of shoulder dystocia: a meta-analysis. <b>BJOG.</b> 2018;125(4):407-13.</p>

      <p>ZUCKERWISE, L. C.; HUSTEDT, M. M.; LIPKIND, H. S.; FUNAI, E. F.; RAAB, C. A.; PETTKER, C. M. Effect of implementing a standardized shoulder dystocia documentation form on quality of delivery notes. 
      <b>Journal of Patient Safety.</b> 2020;16(4)259-63.</p>

      <h1>Aula 4</h1>
      <p>AMMITZBØLL, I. L.; ANDERSEN, B. R.; LANGE, K. H.; CLAUSEN, T.; LØKKEGAARD, E. C. Risk factors for and consequences of difficult fetal extraction in emergency caesarean section. A retrospective registry-based cohort study. 
      <b>European Journal of Obstetrics, Gynecology and Reproductive Biology.</b> 2023;283:74-80. DOI: 10.1016/j.ejogrb.2023.02.012</p>

      <p>ARAD, I.; LINDER, N.; BERCOVICI, B. Vacuum extraction at cesarean section – neonatal outcome. 
      <b>Journal of Perinatal Medicine.</b> 1986;14(2):137-40. DOI: 10.1515/jpme.1986.14.2.137</p>

      <p>BARBIERI, R. L. The fetal pillow: a new option for delivering the deeply impacted fetal head. <b>OBG Management.</b> 2020;32(7):8-11. DOI: 10.12788/obgm.0015</p>

      <p>BERHAN, Y.; BERHAN, A. A meta-analysis of reverse breech extraction to deliver a deeply impacted head during cesarean delivery. 
      <b>International Journal of Gynecology & Obstetrics.</b> 2014;124(2):99-105. DOI: 10.1016/j.ijgo.2013.08.014</p>

      <p>BLICKSTEIN, I. Difficult delivery of the impacted fetal head during cesarean section: intraoperative disengagement dystocia. 
      <b>Journal of Perinatal Medicine.</b> 2004;32(6):465-9. DOI: 10.1515/JPM.2004.152</p>

      <p>CHEN, C. L.; GUO, H. X.; LIU, P.; HUANG, R.; YANG, Z. B.; TANG, L. et al. Three-dimensional reconstruction of the uterine vascular supply through vascular casting and thin slice computed tomography scanning. 
      <b>Minimally invasive therapy and allied technologies.</b> 2009;18(2):98-102. DOI: 10.1080/13645700902720324</p>

      <p>CORNTHWAITE, K. R.; BAHL, R.; LATTEY, K.; DRAYCOTT, T. Management of impacted fetal head at cesarean delivery.  
      <b>American Journal of Obstetrics & Gynecology.</b> 2023 Aug 5. DOI: 10.1016/j.ajog.2022.10.037. </p>

      <p>CORNTHWAITE, K.; DRAYCOTT, T.; BAHL, R.; HOTTON, E.; WINTER, C.; LENGUERRAND, E. Impacted fetal head: a retrospective cohort study of emergency caesarean section. 
      <b>European Journal of Obstetrics, Gynecology and Reproductive Biology.</b> 2021;261:85-91. DOI: 10.1016/j.ejogrb.2021.04.021</p>

      <p>DI GIROLAMO, R.; GALLIANI, C.; BUCA, D.; LIBERATI, M.; D'ANTONIO, F. Outcomes of second stage cesarean section following the use of a fetal head elevation device: a systematic review and meta-analysis. 
      <b>European Journal of Obstetrics, Gynecology and Reproductive Biology.</b> 2021;262:1-6. DOI: 10.1016/j.ejogrb.2021.04.043</p>

      <p>DUFOUR, P.; VINATIER, D.; PUECH, F. The use of intravenous nitroglycerin for cervico-uterine relaxation: a review of the literature. 
      <b>Archives of Gynecology and Obstetrics.</b> 1997;261(1):1-7. DOI: 10.1007/s004040050189</p>

      <p>EL-AGWANY, A. S. Considerable observations in cesarean section surgical technique and proposed steps. 
      <b>Archives of Gynecology and Obstetrics.</b> 2018;297(5):1075-7. DOI: 10.1007/s00404-018-4672-1</p>

      <p>ELSHWAIKH, S. L.; ELSOKARY, A. A.; ABUHAMAMA, A. M. Internal podalic version for delivery of high floating head during cesarean section and neonatal outcome. 
      <b>Journal of Obstetrics and Gynaecology Research.</b> 2019;45(7):1328-33. DOI: 10.1111/jog.13979</p>

      <p>FONG, Y. F.; ARULKUMARAN, S. Breech extraction--an alternative method of delivering a deeply engaged head at cesarean section. 
      <b>International Journal of Gynecology & Obstetrics.</b> 1997;56(2):183-4. DOI: 10.1016/s0020-7292(96)02817-2</p>

      <p>GQ PEAK, A.; BARWISE, E.; WALKER, K. F. Techniques for managing an impacted fetal head at caesarean section: a systematic review. 
      <b>European Journal of Obstetrics, Gynecology and Reproductive Biology.</b> 2023;281:12-22. DOI: 10.1016/j.ejogrb.2022.12.017</p>

      <p>JEVE, Y. B.; NAVTI, O. B.; KONJE, J. C. Comparison of techniques used to deliver a deeply impacted fetal head at full dilation: a systematic review and meta-analysis. 
      <b>BJOG.</b> 2016;123(3):337-45. DOI: 10.1111/1471-0528.13593</p>

      <p>LANDESMAN, R.; GRABER, E. A. Abdominovaginal delivery: modification of the cesarean section operation to facilitate delivery of the impacted head. 
      <b>American Journal of Obstetrics & Gynecology.</b> 148(6):707-10. DOI: 10.1016/0002-9378(84)90551-9</p>

      <p>LEVY, R.; CHERNOMORETZ, T.; APPELMAN, Z.; LEVIN, D.; OR, Y.; HAGAY, Z. J. Head pushing versus reverse breech extraction in cases of impacted fetal head during cesarean section. 
      <b>European Journal of Obstetrics, Gynecology and Reproductive Biology.</b> 2005;121(1):24-6. DOI: 10.1016/j.ejogrb.2004.09.014</p>

      <p>LIPPERT, T. H. Abdominovaginal delivery in case of impacted head in cesarean section operation. 
      <b>American Journal of Obstetrics & Gynecology.</b> 1985;151(5):703. DOI: 10.1016/0002-9378(85)90172-3</p>

      <p>LIPPERT, T. H. Bimanual delivery of the fetal head at cesarean section with the fetal head in midcavity. 
      <b>Archives of Gynecology and Obstetrics.</b> 1983;234(1):59-60. DOI: 10.1007/BF02114726</p>

      <p>MUKHOPADHYAY, P.; NASKAR, T.; DELUI, R.; HAZRA, S.; BHATTACHARYA, D. Evaluation of Patwardhan’s technic - a four-year study in a rural teaching hospital. 
      <b>Journal of Obstetrics and Gynecology of India.</b> 2005;55(3):244-6. </p>

      <p>NATIONAL INSTITUTE FOR HEALTH AND CARE EXCELLENCE (NICE). Insertion of a balloon device to disimpact an engaged fetal head before an emergency caesarean section. <b>Interventional procedures guidance</b> [IPG515]. 2015. 
      Disponível em: <a href="https://www.nice.org.uk/guidance/ipg515/chapter/1-Recommendations">https://www.nice.org.uk/guidance/ipg515/chapter/1-Recommendations</a>. Acesso em: 5 dez. 2024.</p>

      <p>PALACIOS-JARAQUEMADA, J. M. How to reduce the incidence of placenta accreta spectrum independently of the number of cesarean? 
      <b>Maternal-Fetal Medicine.</b> 2019;1(2):69-9. DOI: 10.1097/FM9.0000000000000020</p>

      <p>PATWARDHAN, B. D.; MOTASHAW, N. D. Caesarean section. <b>Journal of Obstetrics and Gynecology of India.</b> 1957;8(1):1-15. </p>

      <p>PERGIALIOTIS, V.; MITSOPOULOU, D.; BILIOU, E.; BELLOS, I.; KARAGIANNIS, V.; PAPAPANAGIOTOU, A. <i>et al.</i> Cephalad-caudad versus transverse blunt expansion of the low transverse hysterotomy during cesarean delivery decreases maternal morbidity: a meta-analysis. 
      <b>American Journal of Obstetrics & Gynecology.</b> 2021;225(2):128.e1-13. DOI: 10.1016/j.ajog.2021.04.231</p>

      <p>PURISCH, S. E.; <b>Gyamfi-Bannerman,</b> C. Epidemiology of preterm birth. <b>Seminars in Perinatology.</b> 2017;41(7):387-91. DOI: 10.1053/j.semperi.2017.07.009</p>

      <p>SCHWARZMAN, P.; WALFISCH, A.; WAINSTOCK, T.; SEGAL, I.; LANDAU, D.; SHEINER, E. Vacuum extraction for the preterm newborn and the long-term neurological outcome. 
      <b>American Journal of Obstetrics & Gynecology.</b> 2017;216(1S):S549. DOI: 10.1016/j.ajog.2016.11.883</p>

      <p>SHAO, Y.; PRADHAN, M. Higher incision at upper part of lower segment caesarean section. 
      <b>JNMA - Journal of Nepal Medical Association.</b> 2014;52(194):764-70. DOI: 10.31729/jnma.2727</p>

      <p>SPENCER, C.; MURPHY, D.; BEWLEY, S. Caesarean delivery in the second stage of labour. <b>BMJ.</b> 2006;333(7569):613-4. DOI: 10.1136/bmj.38971.466979.DE</p>

      <p>STEER, P. J. Is a fractured skull discovered in the neonate after caesarean section delivery always evidence of negligence? 
      <b>BJOG.</b> 2016;123(3):336. DOI: 10.1111/1471-0528.13613</p>

      <p>SUNG, J. F.; DANIELS, K. I.; BRODZINSKY, L. EL-SAYED, Y. Y.; CAUGHEY, A. B.; LYELL, D. J. Cesarean delivery outcomes after a prolonged second stage of labor. 
      <b>American Journal of Obstetrics & Gynecology.</b> 2007;197(3):306.e1-5. DOI: 10.1016/j.ajog.2007.07.005</p>

      <p>TAN, E. K. Difficult caesarean delivery of an impacted head and neonatal skull fracture: can the morbidity be avoided? 
      <b>Journal of Obstetrics and Gynaecology.</b>  2007;27(4):427-8. DOI: 10.1080/01443610701325861</p>

      <p>WATERFALL, H.; GRIVELL, R. M.; DODD, J. M. Techniques for assisting difficult delivery at caesarean section. 
      <b>Cochrane Database of Systematic Reviews.</b> 2016;2016(1):CD004944. DOI: 10.1002/14651858.CD004944.pub3</p>

      <p>VIKHAREVA, O. O.; VALENTIN, L. Risk factors for incomplete healing of the uterine incision after caesarean section. 
      <b>BJOG.</b> 2010;117(9):1119-26. DOI: 10.1111/j.1471-0528.2010.02631.x</p>

      <p>WYN JONES, N.; MITCHELL, E. J.; WAKEFIELD, N.; KNIGHT, M.; DORLING, J.; THORNTON, J. G. et al. Impacted fetal head during second stage caesarean birth: a prospective observational study. 
      <b>European Journal of Obstetrics, Gynecology and Reproductive Biology.</b> 2022;272:77-81. DOI: 10.1016/j.ejogrb.2022.03.00</p>

      <p>YOO, K. Y.; LEE, J. C.; YOON, M. H.; SHIN, M. H.; KIM, S. J.; KIM, Y. H. <i>et al.</i> The effects of volatile anesthetics on spontaneous contractility of isolated human pregnant uterine muscle: a comparison among sevoflurane, desflurane, isoflurane, and halothane. 
      <b>Anesthesia & Analgesia.</b> 2006;103(2):443-7. DOI: 10.1213/01.ane.0000236785.17606.58</p>
    `,
    ],
  },
  {
    id: "3",
    heading: "Módulo 3",
    body: [
      `
      <h1>Aula 1</h1>
      <p>ABU-ZAID, A.; BARADWAN, S.; ALSHAHRANE, M. S.; BAKHSH, H.; BADGHISH, E.; KHADAWARDI, K. <i>et al.</i> Prophylactic tranexamic acid among women undergoing vaginal delivery to reduce postpartum blood loss and related morbidities: a systematic review and meta-analysis of 17 randomized controlled trials. 
      <b>Journal of Gynecology Obstetrics and Human Reproduction.</b> 2022;51(6):102378. DOI:10.10</p>

      <p>AGENCY FOR HEALTHCARE RESEARCH AND QUALITY. <b>TeamSTEPPS 2.0:</b> Module 11. Implementation planning. 2016 [cited 2020 Oct 12). 
      Disponível em: <a href="https://www.ahrq.gov/sites/default/files/wysiwyg/professionals/education/curriculum-tools/teamstepps/instructor/fundamentals/module11/igimplement.pdf">https://www.ahrq.gov/sites/default/files/wysiwyg/professionals/education/curriculum-tools/teamstepps/instructor/fundamentals/module11/igimplement.pdf</a>. Acesso em: 5 jun. 2025.</p>

      <p>AL KADRI, H. M.; AL ANAZI, B. K.; TAMIM, H. M. Visual estimation versus gravimetric measurement of postpartum blood loss: a prospective cohort study. 
      <b>Archives of Gynecology and Obstetrics.</b> 2011;283(6):1207-13. DOI: 10.1007/s00404-010-1522-1</p>

      <p>ANDERSON, J. M.; ETCHES, D. Prevention and management of postpartum hemorrhage. <b>American Family Physician.</b> 2007;75(6):875-82</p>

      <p>BAKRI, Y. N.; RAMIN, S. M.; BARSS, V. A. Uso de balões intrauterinos em pacientes com hemorragia pós-parto (Use of intrauterine balloon catheters for control of uterine hemorrhage). <b>Femina.</b> jul./ago. V. 42, n. 4. 
      Disponível em: <a href="https://somepomed.org/articulos/contents/mobipreview.htm">https://somepomed.org/articulos/contents/mobipreview.htm </a>. Acesso em: 23 out. 2024.</p>

      <p>BOSE, P.; REGAN, F.; PATERSON-BROWN, S. Improving the accuracy of estimated blood loss at obstetric haemorrhage using clinical reconstructions. 
      <b>BJOG.</b> 2006;113(8):919-24. DOI:10.1111/j.1471-0528.2006.01018.x</p>

      <p>CANNON, C. M.; BRAXTON, C. C.; KLING-SMITH, M.; MAHNKEN, J. D.; CARLTON, E.; MONCURE, M. Utility of the shock index in predicting mortality in traumatically injured patients. 
      <b>Journal of Trauma.</b> 2009 Dec;67(6):1426-30. DOI: 10.1097/TA.0b013e3181bbf728</p>

      <p>CEBEKHULU, S. N.; ABDUL, H.; BATTING, J.; CHAUKE, L.; DLAKAVUS, F.; FAWCUS, S. <i>et al.</i> “Suction tube uterine tamponade” for treatment of refractory postpartum hemorrhage: internal feasibility and acceptability pilot of a randomized clinical trial. 
      <b>International Journal of Gynecology & Obstetrics.</b> 2022;158(1):79-85.DOI: 10.1002/ijgo.13963</p>

      <p>CHANTRAPITAK, W.; ANANSAKALWAT, W.; SUWIKROM, S.; WATTANALUANGARUN, R.; PUANGSA-ART, S. Postpartum hemorrhage outcome in lower uterine segment compression maneuver: a 20-year experience in Charoenkrung Pracharak Hospital. 
      <b>Journal of the Medical Association of Thailand.</b> 2018;101(4):495-500.</p>

      <p>CHO, Y.; RIZVI, C.; UPPAL, T.; CONDOUS, G. Ultrasonographic visualization of balloon placement for uterine tamponade in massive primary postpartum hemorrhage. 
      <b>Ultrasound in Obstetrics & Gynecology.</b> 2008;32(5):711-13. DOI: 10.1002/uog.5408</p>

      <p>COMMITTEE ON PRACTICE BULLETINS-OBSTETRICS. <b>Practice Bulletin</b> n. 183: postpartum hemorrhage. Obstet Gynecol. 2017;130(4):e168-86. DOI: 10.1097/AOG.0000000000002351</p>

      <p>CONDOUS, G. C.; ARULKUMARAN, S.; SYMONDS, I.; CHAPMAN, R.; SINHA, A.; RAZVI, K. The “tamponade test” in the management of massive postpartum hemorrhage. 
      <b>Obstetrics & Gynecology.</b> 2003;101(4):767-72. DOI: 10.1016/s0029-7844(03)00046-2</p>

      <p>D’ALTON, M. E. D.; ROOD, K. M.; SMID, M. C.; SIMHAN, H. N.; SKUPSKI, D. W.; SUBRAMANIAM, A. <i>et al.</i> Intrauterine vacuum-induced hemorrhage-control device for rapid treatment of postpartum hemorrhage. 
      <b>Obstetrics & Gynecology.</b> 2020;136(5):882-91. DOI: 10.1097/AOG.0000000000004138</p>

      <p>DILDY, G. A. 3rd; PAINE, A. R.; GEORGE, N. C.; VELASCO, C. Estimating blood loss: can teaching significantly improve visual estimation? 
      <b>Obstetrics & Gynecology.</b> 2004;104(3):601-6. DOI: 10.1097/01. AOG.0000137873.07820.34</p>

      <p>EINERSON, B. D.; SON, M.; SCHNEIDER, P.; FIELDS, I.; MILLER, E. S. The association between intrauterine balloon tamponade duration and postpartum hemorrhage outcomes. 
      <b>American Journal of Obstetrics & Gynecology.</b> 2017;216(3):300.e1-e5. DOI: 10.1016/j.ajog.2016.10.040</p>

      <p>ESCOBAR, M. F.; NASSAR, A. H.; THERON, G.; BARNEA, E. R.; NICHOLSON, W.; RAMASAUSKAITE D. <i>et al.</i> FIGO recommendations on the management of postpartum hemorrhage 2022. 
      <b>International Journal of Gynecology & Obstetrics.</b> 2022;157 Suppl 1:3-50. DOI: 10.1002/ijgo.14116</p>

      <p>GEORGIOU, C. Balloon tamponade in the management of postpartum hemorrhage: a review. <b>BJOG.</b> 2009;116(6):748-57. DOI: 10.1111/j.1471-0528.2009.02113.x</p>

      <p>GOFFMAN, D.; ROOD, K. M.; BIANCO, A.; BIGGIO, J. R.; DIETZ, P.; DRAKE, K. <i>et al.</i> Real-word utilization of an intrauterine, vacuum-induced, hemorrhage-control device. 
      <b>Obstetrics & Gynecology.</b> 2023;142(5):1006-16. DOI: 10.1097/AOG.0000000000005366</p>

      <p>HASLINGER, C.; WEBER, K.; ZIMMERMANN, R. Vacuum-induced tamponade for treatment of postpartum hemorrhage. 
      <b>Obstetrics & Gynecology.</b> 2021;138(3):361-5. DOI: 10.1097/AOG.0000000000004510</p>

      <p>HENRIQUE, M. C.; ALVES, A. L.; LOPES, A. V. Balões de tamponamento intrauterino na hemorragia pós-parto: atualizações. 
      <b>Femina.</b> 2022;50(12):711-7.</p>

      <p>LALONDE, A.; DAVISS, B. A.; ACOSTA, A.; HERSCHDERFER, K. Postpartum hemorrhage today: ICM/FIGO initiative 2004-2006. 
      <b>International Journal of Gynecology & Obstetrics.</b> 2006;94(3):243-53. DOI: 10.1016/j.ijgo.2006.04.016</p>

      <p>LERTBUNNAPHONG, T.; LAPTHANAPAT, N.; LEETHEERAGUL, J.; HAKULARB, P.; OWNON, A. Postpartum blood loss: visual estimation versus objective quantification with a novel birthing drape. 
      <b>Singapore Medical Journal.</b> 2016;57(6):325-8. DOI: 10.11622/smedj.2016107</p>

      <p>LILLEY, G.; BURKETT-ST-LAURENT, D.; PRECIOUS, E.; BRUYNSEELS, D.; KAYE, A.; SANDERS, J. <i>et al.</i> Measurement of blood loss during postpartum haemorrhage. 
      <b>International Journal of Obstetric Anesthesia.</b> 2015;24(1):8-14. DOI:10.1016/j.ijoa.2014.07.009</p>

      <p>LIU, Y.; SHEN, Y.; ZHU, W.; QIU, J. B.; HUANG, Q.; YE, W. Q. Clinical assessment indicators of postpartum hemorrhage: a systematic review. 
      <b>Chinese Nursing Research.</b> 2017;4(4):170-7. DOI: 10.1016/j.cnre.2017.10.003</p>

      <p>MILLER, S.; MARTIN, H. B.; MORRIS, J. L. Anti-shock garment in postpartum haemorrhage. <b>Best Practice and Research Clinical Obstetrics and Gynaecology.</b> 
      2008;22(6):1057-74. DOI: 10.1016/j.bpobgyn.2008.08.008</p>

      <p>MORI, H.; SHIBATA, E.; KUWAZURU, T.; UCHIMURA, T.; KONDO, E.; YOSHINO, K. The utility of shock index and heart rate in the management of postpartum blood loss in pregnant women complicated with hypertensive disorders in pregnancy. 
      <b>Journal of Obstetrics and Gynaecology Research.</b> 2021;47(9):3179-85. DOI:10.1111/jog.14896</p>

      <p>MOTA, C. R.; MOTA, P. R.; LACERDA, J. B.; ALVES, A. L.; LOPES, A. V. Especificidades técnicas no tamponamento uterino com balões e algumas dificuldades técnicas. 
      <b>Femina.</b> 2023;51(8):486-90.</p>

      <p>NATHAN, H. L.; EL AYADI, A.; HEZELGRAVE, N. L.; SEED, P.; BUTRICK, E.; MILLER, S. <i>et al.</i> Shock index: an effective predictor of outcome in postpartum haemorrhage? 
      <b>BJOG.</b> 2015;122(2):268-75. DOI:10.1111/1471-0528.13206</p>

      <p>ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE. <b>Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica.</b> Brasília, DF: OPAS; 2018.</p>

      <p>OSANAN, G. C.; PADILLA, H.; REIS, M. I.; TAVARES, A. B. Strategy for zero maternal deaths by hemorrhage in Brazil: a multidisciplinary initiative to combat maternal morbimortality (Estratégia zero morte materna por hemorragia no Brasil: uma iniciativa multidisciplinar de combate à morbimortalidade maternal). 
      <b>Revista Brasileira de Ginecologia e  Obstetrícia.</b> 2018;40(3):103-5. DOI: 10.1055/s-0038-1639587</p>

      <p>PACHECO, L. D.; CLIFTON, R. G.; SAADE, G. R.; WEINER, S. J.; PARRY, S.; THORP, J. M. <i>et al.</i> Tranexamic acid to prevent obstetrical hemorrhage after cesarean delivery. 
      <b>New England Journal of Medicine.</b> 2023;388(15):1365-75. DOI: 10.1056/NEJMoa2207419</p>

      <p>PARK, J. E.; PARK, J. K.; JO, H. C.; CHO, I. A.; BAEK, J. C. The association between intrauterine balloon tamponade volume and postpartum hemorrhage outcomes. 
      <b>International Journal of Gynecology & Obstetrics.</b> 2020 Mar;148(3):325-330.  doi: 10.1002/ijgo.13069. Epub 2019 Dec 12.</p>

      <p>PREVENTION and management of postpartum haemorrhage: Green-top Guideline n. 52. <b>BJOG.</b> 2016;124(5):e106-49. DOI: 10.1111/1471-0528.14178</p>

      <p>SENTILHES, L.; GROMEZ, A.; CLAVIER, E.; RESCH, B.; DESCAMPS, P.; MARPEAU, L. Long-term psychological impact of severe postpartum hemorrhage. 
      <b>Acta Obstetricia et Gynecologica Scandinavica.</b> 2011;90(6):615-20. DOI: 10.1111/j.1600-0412.2011.01119.x</p>

      <p>SENTILHES, L.; SÉNAT, M. V.; LE LOUS, M.; WINER, N.; ROZENBERG, P.; KAYEM, G. <i>et al.</i> Tranexamic acid for the prevention of blood loss after cesarean delivery. 
      <b>New England Journal of Medicine.</b> 2021;384(17):1623-34. DOI: 10.1056/NEJMoa2028788</p>

      <p>SOSA, C. G.; ALTHABE, F.; BELIZÁN, J. M.; BUEKENS, P. Risk factors for postpartum hemorrhage in vaginal deliveries in a Latin-American population. 
      <b>Obstetrics & Gynecology.</b> 2009;113(6):1313-9. DOI:10.1097/AOG.0b013e3181a66b05 </p>

      <p>SUAREZ, S.; CONDE-AGUDELO, A.; BOROVAC-PINHEIRO, A.; SUAREZ-REBLING, D.; ECKARDT, M.; THERON, G. <i>et al.</i> Uterine balloon tamponade for the treatment of postpartum hemorrhage: a systematic review and meta-analysis. 
      <b>American Journal of Obstetrics & Gynecology.</b> 2020;222(4):293.e1-e52. DOI: 10.1016/j.ajog.2019.11.1287</p>

      <p>VOGEL, J. P.; WILLIAMS, M.; GALLOS, I.; ALTHABE, F.; OLADAPO, O. T. WHO recommendations on uterotonics for postpartum haemorrhage prevention: what works, and which one? <b>BMJ Global Health.</b> 2019;4(2):e001466. 
      DOI: 10.1136/bmjgh-2019-001466</p>

      <p>WILKES, J. Reducing obstetric hemorrhage: recommendations from the National Partnership for Maternal Safety. <b>American Family Physician.</b> 2015;92(7):643.</p>

      <p>WOMAN TRIAL COLLABORATORS. An international, randomised, double-blind, placebo-controlled trial. <b>Lancet.</b> 2017;389(10084):2105-16. DOI: 10.1016/S0140-6736(17)30638-4</p>

      <p>WOMAN TRIAL COLLABORATORS. Effect of early tranexamic acid administration on mortality, hysterectomy, and other morbidities in women with post-partum haemorrhage. 
      <b>Lancet.</b> 2017 May 27;389(10084):2105-2116. DOI: 10.1016/S0140-6736(17)30638-4. Epub 2017 Apr 26.</p>

      <p>WONG, M. S.; DELLAPIANA, G.; GREENE, N.; GREGORY, K. D. Antibiotics during intrauterine balloon tamponade is associated with a reduction in endometritis. 
      <b>American Journal of Perinatology.</b> 2019;36(12):1211-5. DOI: 10.1055/s-0039-1683888</p>

      <p>WORLD HEALTH ORGANIZATION. <b>WHO recommendations:</b> uterotonics for the prevention of postpartum haemorrhage. Geneva: WHO; 2018 [cited 2020 Oct 12]. 
      Disponível em: <a href="https://apps.who.int/iris/bitstream/handle/10665/277283/WHO-RHR-18.34-eng.pdf">https://apps.who.int/iris/bitstream/handle/10665/277283/WHO-RHR-18.34-eng.pdf </a>. Acesso em: 16 ago. 2024. </p>

      <p>ZAIDI, A.; KOHLI, R.; DARU, J.; ESTCOURT, L.; KHAN, K. S.; THANGARATINAM, S. <i>et al.</i> Early use of fibrinogen replacement therapy in postpartum hemorrhage. A systematic review. 
      <b>Transfusion Medicine Reviews.</b> 2020;34(2):101-7. DOI: 10.1016/j.tmrv.2019.12.002</p>
      
      <h1>Aula 2</h1>
      <p>ABOULFALAH, A.; FAKHIR, B.; KADDOUR, Y. A. B.; ASMOUKI, H.; SOUMMANI, A. A new removable uterine compression by a brace suture in the management of severe postpartum hemorrhage. 
      <b>Frontiers in Surgery.</b> 2014;1:43. DOI: 10.3389/fsurg.2014.00043</p>
      
      <p>ALVES, A. L. L.; SENRA, J. C.; SÃO JOSÉ, C. N.; RIBEIRO, B. R.; FURTADO, R. S.; SILVA, L. B. <i>et al.</i> Uterine devascularization associated with compressive uterine suture (UD-CUS) in surgical treatment of postpartum hemorrhage. 
      <b>International Journal of Gynecology & Obstetrics.</b> 2020;149(1):111-2. DOI: 10.1002/ijgo.13081</p>

      <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS. Committee on Practice Bulletins-Obstetrics. Practice Bulletin No 183: postpartum hemorrhage. 
      <b>Obstetrics & Gynecology.</b> 2017;130(4):e168-86. DOI: 10.1097/AOG.0000000000002351</p>

      <p>BARKER, D. E.; KAUFMAN, H. J.; SMITH, L. A.; CIRAULO, D. L.; RICHART, C. L.; BURNS, R. P. Vacuum pack technique of temporary abdominal closure: a 7-year experience with 112 patients. 
      <b>Journal of trauma.</b> 2000;48(2):201-7. DOI: 10.1097/00005373-200002000-00001</p>

      <p>BODELON, C.; BERNABE-ORTIZ, A.; SCHIFF, M. A.; REED, S. D. Factors associated with peripartum hysterectomy. 
      <b>Obstetrics & Gynecology.</b> 2009;114(1):115-23. DOI: 10.1097/AOG.0b013e3181a81cdd</p>

      <p>CARVAJAL, J. A.; RAMOS, I.; KUSANOVIC, J. P.; ESCOBAR, M. F. Damage-control resuscitation in obstetrics. 
      <b>Journal of Maternal-Fetal and Neonatal Medicine.</b> 2020 Feb 26. DOI: 10.1080/14767058.2020.1730800. [ahead of print]</p>

      <p>CHANDRAHARAN, E.; ARULKUMARAN, S. Surgical aspects of postpartum haemorrhage. <b>Best Practice and Research Clinical Obstetrics and Gynaecology.</b> 
      2008;22(6):1089-102. DOI: 10.1016/j.bpobgyn.2008.08.001</p>

      <p>CHAROENKWAN, K. Effective use of the Bakri postpartum balloon for posthysterectomy pelvic floor hemorrhage. 
      <b>American Journal of Obstetrics & Gynecology.</b> 2014;210(6):586.e1-e3. DOI: 10.1016/j.ajog.2014.03.068</p>

      <p>CLARK, S. L.; HANKINS, G. D. V. Preventing maternal death: 10 clinical diamonds. <b>Obstetrics & Gynecology.</b> 
      2012;119(2 Pt 1):360-4. DOI: 10.1097/AOG.0b013e3182411907</p>

      <p>DOUMOUCHTSIS, S. K.; PAPAGEORGHIOU, A. T.; ARULKUMARAN, S. Systematic review of conservative management of postpartum haemorrhage: what to do when medical treatment fails. 
      <b>Obstetrical & Gynecological Survey.</b> 2007;62(8):540-7. DOI: 10.1097/01.ogx.0000271137.81361.93</p>

      <p>GHAEM-MAGHAMI, S.; BROCKBANK, E.; BRIDGES, J. Survey of surgical experience during training in obstetrics and gynaecology in the UK. 
      <b>Journal of Obstetrics and Gynaecology.</b> 2006;26(4):297-301. DOI: 10.1080/01443610600594740</p>

      <p>KAYA, B.; DAMARER, Z.; DAGLAR, K.; UNAL, O.; SOLIMAN, A.; GURALP, O. Is there yet a role for internal iliac artery ligation in obstetric hemorrhage with the current gain in popularity of other uterus sparing techniques? 
      <b>Journal of Maternal-Fetal & Neonatal Medicine.</b> 2017;30(11):1325-32. DOI: 10.1080/14767058.2016.1212333</p>

      <p>KAYA, B.; TUTEN, A.; DAGLAR, K.; ONKUN, M.; SUCU, S.; DOGAN, A. <i>et al.</i> B-Lynch uterine compression sutures in the conservative surgical management of uterine atony. 
      <b>Archives of Gynecology and Obstetrics.</b> 2015;291(5):1005-14. DOI: 10.1007/s00404-014-3511-2</p>

      <p>MALLAPPA SAROJA, C. S.; NANKANI, A.; EL-HAMAMY, E. Uterine compression sutures, an update: review of efficacy, safety and complications of B-Lynch suture and other uterine compression techniques for postpartum haemorrhage. 
      <b>Archives of Gynecology and Obstetrics.</b> 2010;281(4):581-8. DOI: 10.1007/s00404-009-1249-z</p>

      <p>MOISE JUNIOR, K. J.; BELFORT, M. A. Damage control for the obstetric patient. <b>Surgical Clinics of North America.</b> 
      1997;77(4):835-52. DOI: 10.1016/s0039-6109(05)70588-0</p>

      <p>MOREL, O.; MALARTIC, C.; MUHLSTEIN, J.; GAYAT, E.; JUDLIN, P.; SOYER, P. <i>et al.</i> Pelvic arterial ligations for severe post-partum hemorraghe. 
      Indications and techniques. <b>Journal of Visceral Surgery.</b> 2011;148(2):e95-102. DOI: 10.1016/j.jviscsurg.2011.02.002</p>

      <p>PALACIOS-JARAQUEMADA, J. M. Caesarean section in cases of placenta praevia and accreta.  <b>Best Practice and Research Clinical Obstetrics and Gynaecology.</b> 
      2013;27(2):221-32. DOI: 10.1016/j.bpobgyn.2012.10.003</p>

      <p>PALACIOS-JARAQUEMADA, J. M. Efficacy of surgical techniques to control obstetric hemorrhage: analysis of 539 cases. 
      <b>Acta Obstetricia et Gynecologica Scandinavica.</b> 2011;90(9):1036-42. DOI: 10.1111/j.1600-0412.2011.01176.x</p>

      <p>PALACIOS-JARAQUEMADA, J. M. Surgical anatomy. <i>In:</i> PALACIOS-JARAQUEMADA, J. M. <b>Placental Adhesive Disorders.</b> Berlin: De Gruyter; 2012. p. 43-78.</p>

      <p>PELOSI, M. A. Modified cesarean hysterectomy for placenta previa percreta with bladder invasion: retrovesical lower uterine segment bypass. 
      <b>Obstetrics & Gynecology.</b> 1999;93(5 Pt 2):830-3. DOI: 10.1016/s0029-7844(98)00426-8</p>

      <p>POSADAS-NAVA, A.; MORENO-SANTILLÁN, A. A.; CELIS-GONZÁLEZ, C.; CRUZ-MARTÍNEZ, E. Control efectivo de la hemorragia obstétrica posparto mediante desarterialización selectiva uterina. 
      Descripción de la técnica Posadas. <b>Ginecología y Obstetricia de México.</b> 2016;84(12):808-13.</p>

      <p>REZENDE-NETO, J. B.; CUNHA-MELO, J. R.; ANDRADE, M. V. Cobertura temporária da cavidade abdominal com curativo a vácuo. <b>Revista do Colégio Brasileiro de Cirurgiões.</b> 
      2007;34(5):336-9. DOI: 10.1590/S0100-69912007000500011</p>

      <p>SOLTAN, M. H.; FARAGALLAH, M. F.; MOSABAH, M. H.; AL-ADAWY, A. R. External aortic compression device: the first aid for postpartum hemorrhage control. 
      <b>Journal of Obstetrics and Gynaecology Research.</b> 2009;35(3):453-8. DOI: 10.1111/j.1447-0756.2008.00975.x</p>

      <p>SZILLER, I.; HUPUCZI, P.; PAPP, Z. Hypogastric artery ligation for severe hemorrhage in obstetric patients. 
      <b>Journal of Perinatal Medicine.</b> 2007;35(3):187-92. DOI: 10.1515/JPM.2007.049</p>

      <p>WAKS, A.; TABSH, K.; TABSH, K.; AFSHAR, Y. Balloon uterine tamponade device after peripartum histerectomy for morbidly adherent placenta. 
      <b>Obstetrics & Gynecology.</b> 2018;132(3):643-6. DOI: 10.1097/AOG. 0000000000002792</p>

      <p>YOONG, W.; RIDOUT, A.; MEMTSA, M.; STAVROULIS, A.; AREF-ADIB, M.; RAMSAY-MARCELLE, Z. <i>et al.</i> Application of uterine compression suture in association with intrauterine balloon tamponade (‘uterine sandwich’) for postpartum hemorrhage. 
      <b>Acta Obstetricia et Gynecologica Scandinavica.</b> 2012;91(1):147-51. DOI: 10.1111/j.1600-0412.2011.01153.x</p>

      <p>ZHANG, Z. W.; LIU, C. Y.; YU, N.; GUO, W. Removable uterine compression sutures for postpartum hemorrhage. <b>BJOG.</b> 2015;122(3):429-33. DOI: 10.1111/1471-0528.13025</p>


      `,
    ],
  },
  {
    id: "4",
    heading: "Módulo 4",
    body: [
      `
      <h1>Aula 1</h1>
      <p>NATIONAL CENTER FOR HEALTH STATISTICS (U.S.). <i>Maternal mortality rates in the United States, 2021.</i> 2023. 
      Disponível em: <a href="https://stacks.cdc.gov/view/cdc/124678/cdc_124678_DS1.pdf">https://stacks.cdc.gov/view/cdc/124678/cdc_124678_DS1.pdf</a>. Acesso em: 18 jul. 2025.</p>

      <p>HENSLEY, M. K. et al. Incidence of maternal sepsis and sepsis-related maternal deaths in the United States. <i>JAMA,</i> v. 322, p. 890-892, 2019.</p>

      <p>WORLD HEALTH ORGANIZATION. <i>Statement on maternal sepsis.</i> 2023.</p>

      <p>BAUER, M. E. et al. Alliance for innovation on maternal health: consensus bundle on sepsis in obstetric care. <i>Obstetrics & Gynecology,</i> v. 142, p. 481-492, 2023.</p>

      <p>SINGER, M. et al. The Third International Consensus definitions for sepsis and septic shock (sepsis-3). <i>JAMA,</i> v. 315, p. 801-810, 2016.</p>

      <p>ARINA, P.; SINGER, M. Pathophysiology of sepsis. <i>Current Opinion in Anaesthesiology,</i> v. 34, p. 77-84, 2021.</p>

      <p>VINCENT, J. L. et al. The SOFA score to describe organ dysfunction/failure. <i>Intensive Care Medicine,</i> v. 22, p. 707-710, 1996.</p>

      <p>SHIELDS, A. D. et al. Society for Maternal-Fetal Medicine Consult Series #67: Maternal sepsis. <i>American Journal of Obstetrics and Gynecology,</i> v. 229, p. B2-B19, 2023</p>

      <p>BOWYER, L. et al. SOMANZ guidelines for the investigation and management of sepsis in pregnancy. <i>Aust NZ J Obstet Gynaecol,</i> 2017, p. 1–12.</p>

      <p>EDWARDS, S. E. et al. Modified obstetric early warning scoring systems (MEOWS): validating the diagnostic performance. <i>Am J Obstet Gynecol,</i> v. 212, p. 536.e1-8, 2015.</p>

      <p>SINGH, S. et al. A validation study of the CEMACH MEOWS. <i>Anaesthesia,</i> v. 67, p. 12-18, 2012.</p>

      <p>EVANS, L. et al. Executive summary: surviving sepsis campaign. <i>Crit Care Med,</i> v. 49, p. 1974-1982, 2021.</p>

      <p>KUMAR, A. et al. Duration of hypotension and antimicrobial therapy. <i>Crit Care Med,</i> v. 34, p. 1589-1596, 2006.</p>

      <p>ALEJANDRIA, M. M. et al. Intravenous immunoglobulin for sepsis. <i>Cochrane Database Syst Rev,</i> 2013: Cd001090.</p>

      <p>ZHOU, F. et al. Fluid resuscitation in a rat model. <i>Crit Care Med,</i> v. 42, p. e270-e278, 2014.</p>

      <p>LEVIN, M. et al. Evidence from re-analysis of the FEAST trial. <i>Lancet Respir Med,</i> v. 7, p. 581-593, 2019.</p>

      <p>HAMMOND, D. A. et al. Balanced crystalloids vs saline. <i>Ann Pharmacother,</i> v. 54, p. 5-13, 2020.</p>

      <p>PAN, J. et al. Early lactate clearance-guided therapy. <i>Medicine (Baltimore),</i> v. 98, e14453, 2019.</p>

      <p>GOYAL, P. et al. Serial serum lactic acid in pregnancy-associated sepsis. <i>J Obstet Gynaecol India,</i> v. 70, p. 342-348, 2020.</p>

      <p>LANDESBERG, G. et al. Troponin elevation in severe sepsis. <i>Crit Care Med,</i> v. 42, p. 790-800, 2014.</p>

      <p>L'HEUREUX, M. et al. Sepsis-induced cardiomyopathy. <i>Curr Cardiol Rep,</i> v. 22, p. 35, 2020.</p>

      <p>PRONOVOST, P. et al. Catheter-related bloodstream infections. <i>N Engl J Med,</i> v. 355, p. 2725-2732, 2006.</p>

      <p>SEPPANEN, P. et al. Health-related quality of life before and after ICU. <i>Aust Crit Care,</i> v. 32, p. 116-121, 2019.</p>

      <p>VLAKE, J. H. et al. Psychological impairments after critical illness. <i>J Intensive Care,</i> v. 8, p. 6, 2020.</p>

      <p>RAWAL, G.; YADAV, S.; KUMAR, R. Post-intensive care syndrome. <i>J Transl Int Med,</i> v. 5, p. 90-92, 2017.</p>

      <p>RAMLAKHAN, K. P. et al. Long-term quality of life after ICU. <i>BJOG,</i> v. 130, p. 813-822, 2023.</p>

      <p>KNOWLES, S. J. et al. Maternal sepsis incidence. <i>BJOG,</i> v. 122, p. 663-671, 2015.</p>

      <p>CHENG, M. P. et al. Blood culture before and after antibiotics. <i>Ann Intern Med,</i> v. 171, p. 547-554, 2019.</p>

      <p>SHIELDS, A.; DE ASSIS, V.; HALSCOTT, T. Maternal sepsis: top 10 pearls. <i>Obstet Gynecol,</i> v. 138, p. 289-304, 2021.</p>

      <p>INTERIM UK GUIDELINES. Management of close community contacts. <i>Commun Dis Public Health,</i> v. 7, p. 354-361, 2004.</p>

      <p>LIN, G. L. et al. Viral sepsis: epidemiology and immune pathogenesis. <i>Front Immunol,</i> v. 9, p. 2147, 2018.</p>

      <p>DELAHOY, M. J. et al. COVID-19 outcomes in pregnant women. <i>MMWR Morb Mortal Wkly Rep,</i> v. 69, p. 1347-1354, 2020.</p>

      <p>GAFFNEY, A. et al. Projected health outcomes: Supreme Court. <i>JAMA Netw Open,</i> v. 6, e2315578, 2023.</p>

      <p>ESCHENBACH, D. A. Treating septic abortions. <i>Obstet Gynecol,</i> v. 125, p. 1042-1048, 2015.</p>

      <p>ZIMBELMAN, J. et al. Clindamycin vs beta-lactam. <i>Pediatr Infect Dis J,</i> v. 18, p. 1096-1100, 1999.</p>

      <p>ARONOFF, D. M.; MARRAZZO, J. M. Clostridium infections after unsafe abortion. <i>Lancet Infect Dis,</i> v. 23, p. e48-e55, 2023.</p>

      <p>WOODD, S. L. et al. Incidence of maternal peripartum infection. <i>PLoS Med,</i> v. 16, e1002984, 2019.</p>

      <p>JUNG, E. et al. Clinical chorioamnionitis at term. <i>Am J Obstet Gynecol,</i> mar. 2024, p. S807-S840.</p>

      <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS. Committee Opinion No. 712. <i>Obstet Gynecol,</i> v. 130, p. e95-e101, 2017.</p>

      <p>MACKEEN, A. D. et al. Antibiotic regimens for postpartum endometritis. <i>Cochrane Database Syst Rev,</i> 2015: Cd001067.</p>

      <p>GONZALO-CARBALLES, M. et al. Postpartum complications: pictorial review. <i>Radiographics,</i> v. 40, p. 2117-2141, 2020.</p>

      <p>GIRALDO-ISAZA, M. A.; JASPAN, D.; COHEN, A. W. Postpartum endometritis by herpes. <i>Obstet Gynecol,</i> v. 117, n. 2 Pt 2, p. 466-467, 2011.</p>

      <p>HAMILTON, S. M. et al. Group A streptococcal infections: pregnancy-related. <i>Clin Infect Dis,</i> v. 57, p. 870-876, 2013.</p>

      <p>RIMAWI, B. H.; SOPER, D. E.; ESCHENBACH, D. A. Streptococcal infections in obstetrics. <i>Clin Obstet Gynecol,</i> v. 55, p. 864-874, 2012.</p>

      <p>SMITH, L. A. et al. Risk factors for perineal trauma. <i>BMC Pregnancy Childbirth,</i> v. 13, p. 59, 2013.</p>

      <p>DUGGAL, N. et al. Antibiotic prophylaxis for perineal wound. <i>Obstet Gynecol,</i> v. 111, p. 1268-1273, 2008.</p>

      <p>WALDMAN, R. ACOG Practice Bulletin No. 198. <i>Obstet Gynecol,</i> v. 133, p. 185, 2019.</p>

      <p>OKEAHIALAM, N. A. et al. Obstetric anal sphincter injury. <i>Am J Obstet Gynecol,</i> v. 227, p. 182-191, 2022.</p>

      <p>GALLUP, D. G. et al. Necrotizing fasciitis in OB-GYN patients. <i>Am J Obstet Gynecol,</i> v. 187, p. 305-310, 2002.</p>

      <p>TIAN, C.; NING, P. Staphylococcal shock in lactating woman. <i>Int J Surg Case Rep,</i> v. 91, 106739, 2022.</p>

      <p>PANDIT, K. et al. Toxic shock syndrome in lactation. <i>Ann Med Surg (Lond),</i> v. 57, p. 133-136, 2020.</p>

      <p>ABOU-DAKN, M. et al. Inflammatory breast diseases during lactation. <i>Breast Care (Basel),</i> v. 5, p. 33-37, 2010.</p>

      <h1>Aula 2</h1>
      <p>WORLD HEALTH ORGANIZATION. <i>World Malaria Report 2023.</i> Geneva: WHO, 2023.</p>

      <p>BRASIL. Ministério da Saúde. <i>Dia da Malária nas Américas - Um panorama da malária no Brasil em 2022 e no primeiro semestre de 2023.</i> 
      Brasília: Ministério da Saúde, 2023.</p>

      <p>DOMBROWSKI, J. G. et al. Mapping and characterizing areas with high levels of malaria in pregnancy in Brazil. 
      <i>Lancet Regional Health – Americas,</i> v. 27, n. 12, p. 100285, 2022. DOI: 10.1016/j.lana.2022.100285.</p>

      <p>BRASIL. Ministério da Saúde. <i>Guia de Tratamento da Malária no Brasil.</i> 2. ed. Brasília: Ministério da Saúde, 2021.</p>

      <p>BRASIL. Ministério da Saúde. <i>Malária.</i> Disponível em: <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/m/malaria">https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/m/malaria</a>. Acesso em: 18 jul. 2025.</p>

      <p>FERRAMENTAS laboratoriais para diagnóstico da malária. <i>UpToDate,</i> 2024. 37 p.</p>

      <p>FEBRASGO. <i>Malária na gravidez.</i> São Paulo: Federação Brasileira das Associações de Ginecologia e Obstetrícia, 2021.</p>

      <p>MALÁRIA na gravidez: prevenção e tratamento. <i>UpToDate,</i> 2024. 35 p.</p>



      `,
    ],
  },
  {
    id: "5",
    heading: "Módulo 5",
    body: [
      `
      <h1>Aula 1</h1>

      <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS. Gestational Hypertension and Preeclampsia: ACOG Practice Bulletin, Number 222. <i>Obstetrics</i> & <i>Gynecology</i>, v. 135, n. 6, p. e237-e260, jun. 2020.</p>

      <p>BISSON, C. <i>et al</i>. Preeclampsia pathophysiology and adverse outcomes during pregnancy and postpartum. <i>Frontiers in Medicine (Lausanne)</i>, v. 10, p. 1144170, 2023.</p>
      
      <p>ELECSYS® PlGF package insert. Basel: Roche Diagnostics Documentation, nov. 2014.</p>

      <p>GOMES, A. S.; CHAVES, A. F. L.; SILVA, R. B. et al. Análise dos níveis pressóricos em gestantes no diagnóstico precoce da síndrome hipertensiva gestacional. <i>Revista Eletrônica de Enfermagem</i>, v. 15, n. 4, p. 923-931, 2013. Disponível em: <a href="http://dx.doi.org/10.5216/ree.v15i4.19766" target="_blank">http://dx.doi.org/10.5216/ree.v15i4.19766</a>. Acesso em: 10 jun. 2025.</p>
      
      <p>GORBER, S. C.; TREMBLAY, M.; CAMPBELL, N.; HARDT, J. The accuracy of self-reported hypertension: a systematic review and meta-analysis. <i>Current Hypertension Review</i>, v. 4, p. 36–62, 2008.</p>
      
      <p>HUND, M.; ALLEGRANZA, D.; SCHOEDL, M. et al. Multicenter prospective clinical study to evaluate the prediction of short-term outcome in pregnant women with suspected preeclampsia (PROGNOSIS): study protocol. <i>BMC Pregnancy and Childbirth</i>, v. 14, p. 324, 2014.</p>

      <p>HUPPERTZ, B. Placental origins of preeclampsia: challenging the current hypothesis. <i>Hypertension</i>, v. 51, n. 4, p. 970-975, 2008.</p>

      <p>HURRELL, A.; WEBSTER, L.; CHAPPELL, L. C.; SHENNAN, A. H. The assessment of blood pressure in pregnant women: pitfalls and novel approaches. <i>American Journal of Obstetrics & Gynecology</i>, v. 226, n. 2S, p. S804-S818, 2022.</p>

      <p>HYPERTENSION in pregnancy. Report of the American College of Obstetricians and Gynecologists’ Task Force on Hypertension in Pregnancy. <i>Obstetrics & Gynecology</i>, v. 122, n. 5, p. 1122-1131, 2013.</p>

      <p>LAJOS, G. J.; HADDAD, S. M.; TEDESCO, R. P. et al. Brazilian Multicenter Study on Preterm Birth study group. Intracluster correlation coefficients for the Brazilian Multicenter Study on Preterm Birth (EMIP): methodological and practical implications. <i>BMC Medical Research Methodology</i>, v. 14, p. 54, 2014.</p>

      <p>MAXWELL, M. H. et al. Error in blood-pressure measurement due to incorrect cuff size in obese patients. <i>Lancet</i>, v. 2, n. 8288, p. 33-36, 1982.</p>
      
      <p>MCEVOY, J. W. et al. 2024 ESC Guidelines for the management of elevated blood pressure and hypertension. <i>European Heart Journal</i>, v. 45, n. 38, p. 3912-4018, 2024.</p>

      <p>MELO, P. F. M. V. de; ROEVER, L.; MENDONÇA, T. M. S. et al. Ophthalmic artery Doppler in the complementary diagnosis of preeclampsia: a systematic review and meta-analysis. <i>BMC Pregnancy and Childbirth</i>, v. 23, n. 1, p. 343, 2023.</p>

      <p>MYERS, M. C.; BRANDT, D. S.; PRUNTY, A. et al. Effect of positioning on blood pressure measurement in pregnancy. <i>Pregnancy Hypertension</i>, v. 27, p. 110-114, 2022.</p>

      <p>NATIONAL HIGH BLOOD PRESSURE EDUCATION PROGRAM. Report of the National High Blood Pressure Education Program Working Group on High Blood Pressure in Pregnancy. <i>American Journal of Obstetrics & Gynecology</i>, v. 183, n. 1, p. S1-S22, 2000.</p>

      <p>OLIVEIRA, L. G.; KARUMANCHI, A.; SASS, N. Pré-eclâmpsia: estresse oxidativo, inflamação e disfunção endotelial. <i>Revista Brasileira de Ginecologia e Obstetrícia</i>, v. 32, n. 12, p. 609-616, 2010.</p>

      <p>PERAÇOLI, J. C.; COSTA, M. L.; CAVALLI, R. C. et al. Pré-eclâmpsia - Protocolo 2023. Rede Brasileira de Estudos sobre Hipertensão na Gravidez (RBEHG), 2023.</p>
      
      <p>PERAÇOLI, J. C.; RAMOS, J. G. L.; SASS, N. et al. Pré-eclâmpsia/eclâmpsia – Protocolo nº 01. Rede Brasileira de Estudos sobre Hipertensão e Gravidez (RBEHG), 2020.</p>

      <p>REDMAN, C. W.; SARGENT, I. L. Circulating microparticles in normal pregnancy and preeclampsia. <i>Placenta</i>, v. 29, supl. A, p. S73-S77, 2008.</p>

      <p>SOCIEDADE BRASILEIRA DE CARDIOLOGIA; SOCIEDADE BRASILEIRA DE HIPERTENSÃO; SOCIEDADE BRASILEIRA DE NEFROLOGIA. IV Diretrizes Brasileiras de Hipertensão Arterial: epidemiologia. <i>Revista Brasileira de Hipertensão</i>, v. 9, n. 4, p. 359-408, 2002.</p>

      <p>SOCIEDADE BRASILEIRA DE CARDIOLOGIA; SOCIEDADE BRASILEIRA DE HIPERTENSÃO; SOCIEDADE BRASILEIRA DE NEFROLOGIA. VI Diretrizes Brasileiras de Hipertensão. <i>Arquivos Brasileiros de Cardiologia</i>, v. 95, n. 1, supl. 1, p. 1-51, 2010.</p>

      <p>TRANQUILLI, A. L.; DEKKER, G.; MAGEE, L. et al. The classification, diagnosis and management of the hypertensive disorders of pregnancy: a revised statement from the ISSHP. <i>Pregnancy Hypertension</i>, v. 4, n. 2, p. 97-104, 2014.</p>

      <p>VERLOHREN, S.; GALINDO, A.; SCHLEMBACH, D. et al. An automated method for the determination of the sFlt-1/PlGF ratio in the assessment of preeclampsia. <i>American Journal of Obstetrics & Gynecology</i>, v. 202, n. 2, p. 161.e1-161.e11, 2010.</p>

      <p>VERLOHREN, S.; HERRAIZ, I.; LAPAIRE, O. et al. New gestational phase-specific cutoff values for the use of the soluble fms-like tyrosine kinase-1/placental growth factor ratio as a diagnostic test for preeclampsia. <i>Hypertension</i>, v. 63, n. 2, p. 346-352, 2014.</p>

      <p>VON DADELSZEN, P.; MAGEE, L. A.; ROBERTS, J. M. Subclassification of preeclampsia. <i>Hypertension in Pregnancy</i>, v. 22, n. 2, p. 143-148, 2003.</p>

      <p>WORLD HEALTH ORGANIZATION. Managing eclampsia. In: EDUCATION material for teachers of midwifery: midwifery education modules. 2. ed. Geneva: WHO, 2008.</p>

      <p>ZANETTE, E.; PARPINELLI, M. A.; SURITA, F. G. et al. Brazilian Network for Surveillance of Severe Maternal Morbidity Group. Maternal near miss and death among women with severe hypertensive disorders: a Brazilian multicenter surveillance study. <i>Reproductive Health</i>, v. 11, n. 1, p. 4, 2014</p>

      <h1>Aula 2</h1>

      <p>COWANS, N. J.; STAMATOPOULOU, A.; MATWEJEW, E.; VON KAISENBERG, C. S.; SPENCER, K. First-trimester placental growth factor as a marker for hypertensive disorders and SGA. <i>Prenatal Diagnosis</i>, v. 30, n. 6, p. 565-570, 2010.</p>

      <p>DEKKER, G. A.; DE VRIES, J. I.; DOELITZSCH, P. M. et al. Underlying disorders associated with severe early-onset preeclampsia. <i>American Journal of Obstetrics & Gynecology</i>, v. 173, n. 4, p. 1042-1048, 1995.</p>

      <p>FENAKEL, K.; FENAKEL, G.; APPELMAN, Z. et al. Nifedipine in the treatment of severe preeclampsia. <i>Obstetrics & Gynecology</i>, v. 77, n. 3, p. 331-337, 1991.</p>

      <p>HUPPERTZ, B. Placental origins of preeclampsia: challenging the current hypothesis. <i>Hypertension</i>, v. 51, n. 4, p. 970-975, 2008.</p>

      <p>JIM, B.; SHARMA, S.; KEBEDE, T.; ACHARYA, A. Hypertension in pregnancy: a comprehensive update. <i>Cardiology in Review</i>, v. 18, n. 4, p. 178-189, 2010.</p>

      <p>KHONG, T. Y.; DE WOLF, F.; ROBERTSON, W. B.; BROSENS, I. Inadequate maternal vascular response to placentation in pregnancies complicated by preeclampsia and by small-for-gestational age infants. <i>British Journal of Obstetrics & Gynaecology</i>, v. 93, p. 1049-1059, 1986.</p>

      <p>LAMBERT-MESSERLIAN, G. M.; PALOMAKI, G. E.; NEVEUX, L. M.; CHIEN, E.; FRIEDMAN, A.; ROSENE-MONTELLA, K. et al. Early onset preeclampsia and second trimester serum markers. <i>Prenatal Diagnosis</i>, v. 29, n. 12, p. 1109-1117, 2009.</p>

      <p>LISONKOVA, S.; SABR, Y.; MAYER, C. et al. Maternal morbidity associated with early-onset and late-onset preeclampsia. <i>Obstetrics & Gynecology</i>, v. 124, n. 4, p. 771-781, 2014.</p>

      <p>MACKAY, A. P.; BERG, C. J.; ATRASH, H. K. Pregnancy-related mortality from preeclampsia and eclampsia. <i>Obstetrics & Gynecology</i>, v. 97, n. 4, p. 533-538, 2001.</p>

      <p>MAGEE, L. A.; NICOLAIDES, K. H.; VON DADELSZEN, P. Preeclampsia. <i>New England Journal of Medicine</i>, v. 386, n. 19, p. 1817-1832, 2022.</p>

      <p>MONGRAW-CHAFFIN, M. L.; CIRILLO, P. M.; COHN, B. A. Preeclampsia and cardiovascular disease death: prospective evidence from the child health and development studies cohort. <i>Hypertension</i>, v. 56, p. 166-171, 2010.</p>

      <p>MURPHY, D. J.; STIRRAT, G. M. Mortality and morbidity associated with early-onset preeclampsia. <i>Hypertension in Pregnancy</i>, v. 19, n. 2, p. 221-231, 2000.</p>

      <p>NESS, R. B.; SIBAI, B. M. Shared and disparate components of the pathophysiologies of fetal growth restriction and preeclampsia. <i>American Journal of Obstetrics & Gynecology</i>, v. 195, n. 1, p. 40-49, 2006.</p>

      <p>PLOUIN, P. F.; CHATELLIER, G.; BREART, G. et al. Frequency and perinatal consequences of hypertensive disease of pregnancy. <i>Advances in Nephrology from the Necker Hospital</i>, v. 15, p. 57-69, 1986.</p>

      <p>REDMAN, C. W.; SACKS, G. P.; SARGENT, I. L. Preeclampsia: an excessive maternal inflammatory response to pregnancy. <i>American Journal of Obstetrics & Gynecology</i>, v. 180, p. 499-506, 1999.</p>

      <p>REDMAN, C. W.; SARGENT, I. L.; STAFF, A. C. IFPA Senior Award Lecture: making sense of preeclampsia – two placental causes of preeclampsia? <i>Placenta</i>, v. 35, supl., p. S20-S25, 2014.</p>

      <p>REIS, Z. S. N.; LAGE, E. M.; TEIXEIRA, P. G. et al. Pré-eclâmpsia precoce e tardia: uma classificação mais adequada para o prognóstico materno e perinatal? <i>Revista Brasileira de Ginecologia e Obstetrícia</i>, v. 32, n. 12, p. 584-590, 2010.</p>

      <p>RIISE, H. K. R.; SULO, G.; TELL, G. S. et al. Association between gestational hypertension and risk of cardiovascular disease among 617 589 Norwegian women. <i>Journal of the American Heart Association</i>, v. 7, p. 13, 2018.</p>

      <p>ROBERTS, J. M.; TAYLOR, R. N.; MUSCI, T. J. et al. Preeclampsia: an endothelial cell disorder. <i>American Journal of Obstetrics & Gynecology</i>, v. 161, p. 1200-1204, 1989.</p>

      <p>ROBERTS, J. M.; RICH-EDWARDS, J. W.; MCELRATH, T. F.; GARMIRE, L.; MYATT, L.; GLOBAL PREGNANCY COLLABORATION. Subtypes of preeclampsia: recognition and determining clinical usefulness. <i>Hypertension</i>, v. 77, p. 1430-1441, 2021.</p>

      <p>SIBAI, B. M. Maternal and uteroplacental hemodynamics for the classification and prediction of preeclampsia. <i>Hypertension</i>, v. 52, n. 5, p. 805-806, 2008.</p>

      <p>SIBAI, B.; DEKKER, G.; KUPFERMINC, M. Preeclampsia. <i>Lancet</i>, v. 365, n. 9461, p. 785-799, 2005.</p>

      <p>VAN DER MERWE, J. L.; HALL, D. R.; WRIGHT, C.; SCHUBERT, P.; GROVÉ, D. Are early and late preeclampsia distinct subclasses of the disease – what does the placenta reveal? <i>Hypertension in Pregnancy</i>, v. 29, n. 4, p. 457-467, 2010.</p>

      <p>VINCE, G. S.; STARKEY, P. M.; AUSTGULEN, R. et al. Interleukin-6, tumour necrosis factor and soluble tumour necrosis factor receptors in women with preeclampsia. <i>British Journal of Obstetrics & Gynaecology</i>, v. 102, n. 1, p. 20-25, 1995.</p>

      <p>VON DADELSZEN, P.; WATSON, R. W.; NOORWALI, F. et al. Maternal neutrophil apoptosis in normal pregnancy, preeclampsia, and normotensive intrauterine growth restriction. <i>American Journal of Obstetrics & Gynecology</i>, v. 181, p. 408-414, 1999.</p>

      <p>VON DADELSZEN, P.; WILKINS, T.; REDMAN, C. W. Maternal peripheral blood leukocytes in normal and preeclamptic pregnancies. <i>British Journal of Obstetrics & Gynaecology</i>, v. 106, p. 576-581, 1999.</p>

      <p>VON DADELSZEN, P.; MAGEE, L. A.; ROBERTS, J. M. Subclassification of preeclampsia. <i>Hypertension in Pregnancy</i>, v. 22, n. 2, p. 143-148, 2003.</p>

      <h1> Aula 3</h1>

      <p>AAGAARD-TILLERY, K. M.; BELFORT, M. A. Eclampsia: morbidity, mortality, and management. Clinical Obstetrics and Gynecology. 2005;48(1):12-23.</p>

      <p>ABBADE, J. F. Esquema de Zuspan versus esquema alternativo com sulfato de magnésio na prevenção e tratamento da eclâmpsia – Comparação da concentração sérica de magnésio. 2005. Tese (Doutorado em Ginecologia, Obstetrícia e Mastologia). Botucatu, Universidade Estadual Paulista, 2005.</p>

      <p>ABRAMOVICI, D.; FRIEDMAN, S. A.; MERCER, B. M. et al. Neonatal outcome in severe preeclampsia at 24 to 36 weeks' gestation: does the HELLP (hemolysis, elevated liver enzymes, and low platelet count) syndrome matter? American Journal of Obstetrics & Gynecology. 1999; 180:221.</p>

      <p>ABRAMOVICI, D; MATAR, F.; SIBAI, B. M. Hypertensive disorders in pregnancy. In: RANSON, S. B. Practical strategies in obstetrics and gynecology. Philadelphia: W.B. Saunders Company, 2000. p. 37-380-9.</p>

      <p>ACOG Practice Bulletin n. 202: Gestational Hypertension and Preeclampsia. Obstetrics & Gynecology. 2019; 133:el.</p>

      <p>ALEXANDER, J. M.; BLOOM, S. L.; MCINTIRE, D. D.; LEVENO, K. J. Severe preeclampsia and the very low birth weight infant: Is induction of labor harmful? Obstetrics & Gynecology. 1999;93(4 SUPPL.):485-488.</p>

      <p>ALSULYMAN, O. M.; CASTRO, M. A.; ZUCKERMAN, E. et al. Preeclampsia and liver infarction in early pregnancy associated with the antiphospholipid syndrome. Obstetrics & Gynecology. 1996; 88:644.</p>

      <p>AMORIM, M. M. R.; SANTOS, L. C.; PORTO, A. M. F.; MARTINS, L. K. D.; VIEIRA, V. Recorrência da Crise Convulsiva após Terapia Anticonvulsivante com Sulfato de Magnésio em Pacientes com Eclâmpsia. Revista Brasileira de Ginecologia e Obstetrícia. v. 22, n. 3, 2000. p. 159-165.</p>

      <p>ANDERSON, P.; SCHIERHOUT, G.; ROBERTS, I.; BUNN, F. Colloids versus crystaloids for fluid resuscitation in critically ill patients (Cochrane Review). In: The Cochrane Lybrary, Issue 3. Chichestes, UK: John Wiley & Sons, 2004.</p>

      <p>AUDIBERT, F.; FRIEDMAN, S. A.; FRANGIEH, A. Y.; SIBAI, B. M. Clinical utility of strict diagnostic criteria for the HELLP (hemolysis, elevated liver enzymes, and low platelets) syndrome. American Journal of Obstetrics & Gynecology. 1996; 175:460.</p>

      <p>BARTAL M, F.; SIBAI, B. M. Eclampsia in the 21st century. American Journal of Obstetrics and Gynecology. 2022;226(2S):S1237-S1253.</p>

      <p>BARTON, J. R.; SIBAI, B. M. Cerebral pathology in eclampsia. Clinics in Perinatology. 1991; 18:891-910. </p>

      <p>BAYLISS, H.; BEEVERS, D. G.; CHURCHILL, D. A study of puerperal blood pressure in hypertensive and normotensive pregnancies. Hypertension in Pregnancy 2002;21(Suppl 1):33.</p>

      <p>BROWN, M. A.; MAGEE, L. A.; KENNY, L. C. et al. International Society for the Study of Hypertension in Pregnancy (ISSHP). The hypertensive disorders of pregnancy: ISSHP classification, diagnosis & management recommendations for international practice. Pregnancy Hypertension. 2018;13:291-310.</p>

      <p>CHOU, M. M.; CHEN, Y. F.; KUNG, H. F. et al. Extensive hepatic infarction in severe preeclampsia as part of the HELLP syndrome (hemolysis, elevated liver enzymes, and low platelets): evolution of CT findings and successful treatment with plasma exchange therapy. Taiwanese Journal of Obstetrics and Gynecology. 2012; 51:418.</p>

      <p>CINCOTTA, R.; ROSS, A. A review of eclampsia in Melbourne: 1978-1992. Australian and New Zealand Journal of Obstetrics and Gynaecology. 1996; 36:264-7.</p>

      <p>DANTAS, E. M.; PEREIRA, F. V.; QUEIROZ, J. W. et al. Preeclampsia is associated with increased maternal body weight in a northeastern Brazilian population. BMC Pregnancy and Childbirth. 2013;13:159.</p>

      <p>DE SOUZA, F. L. P.; SASS, N. Sindrome HELLP. In: KORKES, H. A.; MARQUES, E. M.; ANDRE, M. G.; PADOVANI, T. R. (eds.). Atualizações em Obstetrícia. 2. ed. São Paulo: EDUC -PUC/SP, 2022. p. 187-97.</p>

      <p>DICARLO, A. LAMASSA, M.; CONSOLI, D.; INZITARI, D. et al. Sex differences in presentation, severity, and management of stroke in a population based study. Neurology. 2010;75:670-1.</p>

      <p>DILDY III, G. A. Complications of preeclampsia. In: DILDY III, G. A.; BELFORT, M. A.; SAADE, G. R.; PHELAN, J. P.; HANKINS, G. D. V.; CLARK, S. L. (eds.). Critical Care Obstetrics. 4th ed. Malden, Massachussetts: Blackwell Science; 2004.</p>

      <p>DOUGLAS, K. A.; REDMAN, C. W. G. Eclampsia in the United Kingdom. Br Med Journal. 1994; 390:1395-400.</p>

      <p>DUARTE, N. M. N.; RIFFEL, M. J.; MATTOS, L. Assistência de enfermagem na aplicação do sulfato de magnésio em pacientes portadoras de pré-eclâmpsia no Hospital de Clínicas de Porto Alegre - HCPA. Revista Gaúcha de Enfermagem. v. 8, n. 1, 1987. p. 1-16.</p>

      <p>DULEY, L. The global impact of pre-eclampsia and eclampsia. Seminars in Perinatology. 2009;33(3):130-137. </p>

      <p>DULEY, L.; MEHER, S.; JONES. L. Drugs for treatment of very high blood pressure during pregnancy. Cochrane Database of Systematic Reviews. 2013;(7):CD001449.</p>

      <p>DULEY, L.; WILLIAMS, J.; HENDERSON-SMART, D. J. Plasma volume expansion for treatment of women with pre-eclampsia. Cochrane Database of Systematic Reviews. 2000;(2):CD001805.</p>

      <p>DULEY, L.; WILLIAMS, J.; HENDERSON-SMART, D. J. Plasma volume expansion for treatment of pre-eclampsia (Cochrane Review). In: The Cochrane Lybrary, Issue I. Oxford: Update Software, 2005.</p>

      <p>FEDERAÇÃO BRASILEIRA DAS ASSOCIAÇÕES DE GINECOLOGIA E OBSTETRÍCIA (FEBRASGO). Síndrome HELLP. São Paulo: FEBRASGO, 2024.</p>

      <p>GAIO, D. S.; SCHMIDT, M. I.; DUNCAN, B. B. et al. Hypertensive disorders in pregnancy: frequency and associated factors in a cohort of Brazilian women. Hypertension in Pregnancy. 2001;20(03):269-281.</p>

      <p>GESTATIONAL Hypertension and Preeclampsia: ACOG Practice Bulletin, n. 222. Obstetrics & Gynecology. 2020;135(6):e237-e260.</p>

      <p>GOODLIN, R. C. Hemolysis, elevated liver enzymes, and low platelets syndrome. Obstetrics & Gynecology. 1984;64(3):449-50.</p>

      <p>GUIDA, J. P. S.; ANDRADE, B. G.; PISSINATTI, L. G. F. et al. Prevalence of Preeclampsia in Brazil: An Integrative Review. Revista Brasileira de Ginecologia e Obstetrícia. v. 44, n. 7, 2022. p. 686-691.</p>

      <p>HERROEDER, S.; SCHÖNHERR, M. E.; DE HERT, S. G.; HOLLMANN, M. W. Magnesium-essentials for anesthesiologists. Anesthesiology. 2011;114(4):971-93.</p>

      <p>HURWITZ, A. S.; BRICE, J. H.; OVERBY, B. A.; EVENSON, K. R. Directed use of the Cincinnati prehospital stroke scale by laypersons. Prehospital Emergency Care. 2005;9:292-6.</p>

      <p>HYPERTENSION in pregnancy. Report of the American College of Obstetricians and Gynecologists’ Task Force on Hypertension in Pregnancy. Obstetrics & Gynecology. 2013;122(5):1122-1131.</p>

      <p>ILBERY, M.; JONES, A. R.; SAMPSON, J. Lupus anticoagulant and HELLP syndrome complicated by placental abruption, hepatic, dermal and adrenal infarction. Australian and New Zealand Journal of Obstetrics and Gynaecology. 1995; 35:215.</p>

      <p>KAHHALE S.; ZUGAIB, M. Síndromes hipertensivas na gravidez. Rio de Janeiro: Atheneu, 1995. p. 115-40.</p>

      <p>KARUMANCHI, A. S.; LINDHEIMER, M. D. Advances in the understanding of eclampsia. Current Hypertension Reports. 2008; 10(1):305-12.</p>

      <p>KOTHARI, R. U.; PANCHIOLI, A.; LIU, T.; BROTT, T.; BRODERICK, J. Cincinnati prehospital stroke scale: reproducibility and validity. Annals of Emergency Medicine. 1999;33:373-8.</p>

      <p>MAGANN, E. F.; MARTIN JR, J. N. Twelve steps to optimal management of HELLP syndrome. Clinical Obstetrics & Gynecology. 1999;42(3):532-50.</p>

      <p>MARTIN JR., J. N.; BLAKE, P. G.; LOWRY, S. L.; PERRY JR., K. G.; FILES, J. C.; MORRISSON, J. C. Pregnancy Complicated by preeclampsia with the syndrome of hemolysis, elevated liver enzymes, and low platelet count. How rapid is postpartum recovery? Obstetrics & Gynecology. 1990;76 (5 Pt1 ):737-41.</p>

      <p>MARTINS-COSTA, S. H.; RAMOS, J. G. L. Eclampsia. In: FREITAS, F.; MARTINS-COSTA, S. H.; RAMOS, J. G. L.; MAGALHÃES, J. A. Rotinas em obstetrícia. 5. ed. Porto Alegre: ArtMed, 2006. p. 414-23.</p>

      <p>MENEGAZZO, A. B. B. R. Determinação do valor da heptoglobina sérica para diagnóstico de hemólise na síndrome HELLP. Dissertação (Mestrado em Obstetrícia) – Universidade Estadual Paulista, São Paulo, 2014.</p>

      <p>NORWITZ, E. R.; HSU, C.; REPKE, J. T. Acute complications of preeclampsia. Clinical Obstetrics & Gynecology. 2002;45:308-29.</p>

      <p>O’BRIEN, J. M.; BARTON, J. R. Controversies with the diagnosis nad management of HELLP Syndrome. Clinical Obstetrics & Gynecology. 2005; 48 (2):460-77.</p>

      <p>PAUZNER, R.; DULITZKY, M.; CARP, H. et al. Hepatic infarctions during pregnancy are associated with the antiphospholipid syndrome and in addition with complete or incomplete HELLP syndrome. Journal of Thrombosis and Haemostasias. 2003; 1:1758.</p>

      <p>PRITCHARD, J. A.; CUNNINGHAM, F. G.; PRITCHARD, S. A. The Parkland Memorial Hospital protocol for treatment of eclampsia: evaluation of 245 cases. American Journal of Obstetrics & Gynecology. 1984;148:951-63.</p>

      <p>RAMOS FILHO, F. L.; ANTUNES, C. M. F. Hypertensive disorders: prevalence, perinatal outcomes and cesarean section rates in pregnant women hospitalized for delivery. Revista Brasileira de Ginecologia e Obstetrícia. v. 42, n. 11, 2022. p. 690-696.</p>

      <p>RAMOS, J. G. L.; MARTINS-COSTA, S. H.; SASS, N. Eclampsia in Brazil in the 21st Century. Revista Brasileira de Ginecologia e Obstetrícia. v. 44, n. 7, 2022. p. 637-639.</p>

      <p>RAMOS, J. G.; MARTINS-COSTA, S. H.; VALÉRIO, E. G. Síndrome de HELLP. In: FREITAS, F.; MARTINS-COSTA, S. H.; RAMOS, J. G. L.; MAGALHÃES, J. A. Rotinas em Obstetrícia. 5. ed. Porto Alegre: Artmed, 2006. p. 409-413.</p>

      <p>ROBERTS, W. E.; PERRY JR., K. G.; WOODS, J. B.; FILES, J. C.; BLAKE, P. G.; MARTIN JR., J. N. The intrapartum platelet count in patients with HELLP (hemolysis, elevated liver enzymes, and low platelets) syndrome: is it predictive of later hemorrhagic complications? American Journal of Obstetrics & Gynecology. 1994;171(3):799-804.</p>

      <p>SAPHIER, C. J.; REPKE, J. T. Hemolysis, elevated liver enymes and low platelets (HELLP) syndrome: a review of diagnosis and management. Seminars in Perinatology. 1998;22(2):118-33.</p>

      <p>SAPWELL, J. A Seventeenth-century case of eclampsia. American Journal of Obstetrics and Gynecology. 1979;214:232.</p>

      <p>SEIGE, M.; SCHWEIGART, U.; MOESSMER, G. et al. Extensive hepatic infarction caused by thrombosis of right portal vein branches and arterial vasospasm in HELLP syndrome associated with homozygous factor V Leiden. American Journal of Gastroenterology. 1998; 93:473.</p> 
      
      <p>SIBAI, B. M. Eclampsia. VI. Maternal-perinatal outcome in 254 consecutive cases. American Journal of Obstetrics and Gynecology. 1990;163:1049-54.</p>

      <p>SIBAI, B. M. Hypertension. In: GABBE, S. G.; NIEBYL, J. R.; SIMPSON, J. L. (eds). Obstetrics - Normal and Problem Pregnancies. 5. ed. Philadelphia: Elsevier Churchill Livingstone, 2007. Chap 33.</p>

      <p>SIBAI, B. M.; ABDELLA, T. N.; SPINNATO, J. A.; ANDERSON, G. D. Eclampsia. V. The incidence of nonpreventable eclampsia. American Journal of Obstetrics & Gynecology. 1986; 154:581-6.</p>

      <p>SIBAI, B. M.; DEKKER, G.; KUPFERMINC, M. Pre-eclampsia. Lancet. 2005; 365:785-99.</p>

      <p>SIBAI, B. M. Diagnosis, controversies, and management of the syndrome of hemolysis, elevated liver enzymes, and low platelet count. Obstetrics & Gynecology. 2004;103:981-91.</p>

      <p>SIBAI, B. M.; GORDON, T.; THOM, E.; CARITIS, S. N.; KLEBANOFF, M.; MCNELLIS, D. et al. Risk factors for preeclampsia in healthy nulliparous women: a prospective multicenter study. American Journal of Obstetrics & Gynecology. 1995; 172:642-8.</p>

      <p>SIBAI, B. M. HELLP syndrome. (online). Disponível em: <a href="https://www.uptodate.com/contents/hellp-syndrome">https://www.uptodate.com/contents/hellp-syndrome</a>. Acesso em: 23 ago. 2018.</p>
      
      <p>SIBAI, B. M. HELLP syndrome (hemolysis, elevated liver enzymes, and low platelets). In: LOCKWOOD, C. J.; LINDOR, K. D.; BARSS, V. A. (ed.). Up-to-Date [online]. Waltham (MA): UpToDate, 2020. Disponível em: <a href="https://www.uptodate.com/contents/hellp-syndrome-hemolysis-elevated-liver-enzymes-and-low-platelets">https://www.uptodate.com/contents/hellp-syndrome-hemolysis-elevated-liver-enzymes-and-low-platelets</a>. Acesso em: 10 jun. 2025.</p> 

      <p>SIBAI, B. M.; TASLIMI, M. M.; EL-NAZER, A.; AMON, E.; MABIE, B. C.; RYAN, G. M. Maternal-perinatal outcome associated with the syndrome of hemolysis, elevated liver enzymes, and low platelets in severe preeclampsia-eclampsia. American Journal of Obstetrics & Gynecology. 1986;155(3):501-9.</p>

      <p>SIBAI, B. M. The HELLP syndrome (hemolysis, elevated liver enzymes, and low platelets): much ado about nothing? American Journal of Obstetrics & Gynecology. 1990;162(2):311-6.</p>

      <p>SIBAI, B. M.; RAMADAN, M. K.; USTA, I.; SALAMA, M.; MERCER, B. M.; FRIEDMAN, S. A. Maternal morbidity and mortality in 442 pregnancies with hemolysis, elevated liver enzymes, and low platelets (HELLP syndrome). American Journal of Obstetrics & Gynecology. 1993;169:1000-6.</p>

      <p>SIBAI, B. M.; SPINNATO, J. A.; WATSON, D. L. et al. Pregnancy outcome in 303 cases with severe preeclampsia. Obstetrics & Gynecology. 1984; 64:319.</p>

      <p>SOUZA, A. S.; AMORIM, M. M.; COUTINHO, I. C. et al. Effect of the loading dose of magnesium sulfate (MgSO4) on the parameters of Doppler flow velocity in the uterine, umbilical and middle cerebral arteries in severe preeclampsia. Hypertension in Pregnancy. 2010;29(2):123-34.</p>

      <p>SULLIVAN, C. A.; MAGANN, E. F.; PERRY JR., K. G.; ROBERTS, W. E.; BLAKE, P. G.; MARTIN JR., J. N. The recurrence risk of the syndrome of hemolysis, elevated liver enzymes, and low platelets (HELLP) in subsequent gestations. American Journal of Obstetrics & Gynecology. 1994;171(4):940-3.</p>

      <p>TOMSEN, T. R. HELLP syndrome (hemolysis, elevated liver enzymes, and low platelets) presenting as generalized malaise. American Journal of Obstetrics & Gynecology. 1995;172(6):1876-8; discussion 1878-80.</p>

      <p>WALKER, J. J. Sever preeclampsia and eclampsia. Balliere’s Best Practice Research Clinical Obstetrics & Gynecology. 2000;14:57-71.</p>

      <p>WALTERS, B. N. J.; THOMPSON, M. E.; LEE, A.; DE SWIET, M. Blood pressure in the puerperium. Clinical Science. 1986;71:589-94.</p>

      <p>WATSON, D. L.; SIBAI, B. M.; SHAVER, D. C.; DACUS, J. V.; ANDERSON, G. D. Late postpartum eclampsia: an update. Southern Medical Journal. 1983;76(12):1487-9.</p>

      <p>WEINSTEIN, L. Syndrome of hemolysis, elevated liver enzymes, and low platelet count: a severe consequence of hypertension in pregnancy. American Journal of Obstetrics & Gynecology. 1982;142(2):159-67.</p>

      <p>WORLD HEALTH ORGANIZATION. WHO Recommendations for Prevention and Treatment of Pre-Eclampsia and Eclampsia. Geneva: World Health Organization, 2011.</p>

      <p>ZEEMAN, M. D.; ROBERTS, J. M.; CUNNINGHAM, F. G. Cerebrovascular (patho) physiology in preeclampsia/eclampsia. In: LINDHEIMER et al. Chesley’s hypertensive disorders in pregnancy. 3. ed. San Diego: Academic Press, 2009. p. 227.</p>

      <h1>Aula 4</h1>

      <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS. ACOG Practice Bulletin n. 202: Gestational Hypertension and Preeclampsia. Obstetrics & Gynecology. 2019;133(1):1.</p>

      <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS. ACOG Practice Bulletin n. 203 Summary: Chronic Hypertension in Pregnancy. Obstetrics & Gynecology. 2019;133(1):215-219.</p>

      <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS. Committee on Practice Bulletins – Obstetrics. ACOG Practice Bulletin n. 203: Chronic Hypertension in Pregnancy. Obstetrics & Gynecology. 2019;133(1):e26-e50.</p>

      <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS. Task Force on Hypertension in Pregnancy. Hypertension in pregnancy. Report of the American College of Obstetricians and Gynecologists’ Task Force on Hypertension in Pregnancy. Obstetrics & Gynecology. 2013;122(5):1122–31.</p>

      <p>BATEMAN, B. T.; BANSIL, P.; HERNANDEZ-DIAZ, S. et al. Prevalence, trends, and outcomes of chronic hypertension: a nationwide sample of delivery admissions. American Journal of Obstetrics & Gynecology. 2012;206:134.e1-8.</p>

      <p>BERKS, D.; STEEGERS, E. A.; MOLAS, M.; VISSER, W. Resolution of hypertension and proteinuria after preeclampsia. Obstetrics & Gynecology. 2009;114:1307–14.</p>

      <p>BRAMHAM, K.; PARNELL, B.; NELSON-PIERCY, C. et al. Chronic hypertension and pregnancy outcomes: systematic review and meta-analysis. BMJ. 2014;348:g2301.</p>

      <p>BROWN, M. A.;MAGEE, L. A.; KENNY, L. C. et al. International Society for the Study of Hypertension in Pregnancy (ISSHP). The hypertensive disorders of pregnancy: ISSHP classification, diagnosis & management recommendations for international practice. Pregnancy Hypertension. 2018;13:291-310.</p>

      <p>CAMARGO, E. B.; MORAES, L. F.; SOUZA, C. M. et al. Survey of calcium supplementation to prevent preeclampsia: the gap between evidence and practice in Brazil. BMC Pregnancy Childbirth. 2013;13:206.</p>

      <p>DE MATTIA, N. C.; BARBIN, R. L.; BORGES, V. T. et al. Doppler echocardiographic assessment of pregnant women with chronic arterial hypertension. ABC Cardiol. 2002;79(6):579-84, 573-8.</p>

      <p>DE SOUZA, E. A.; MOMENTTI, A. C.; ASSIS NEVES, R. de. et al. Calcium intake in high-risk pregnant women assisted in a high-complexity hospital. Molecular Biology Reports. 2019;46(3):2851-2856.</p>

      <p>DE SOUSA, F. L. 0. P.; CUNHA FILHO, E. V.; KORKES, H. A. et al. Hipertensão Arterial Crônica – Protocolo n. 01/2023. Rede Brasileira de Estudos sobre Hipertensão na Gravidez (RBEHG), 2023.</p>

      <p>Elecsys® sFlt-1 package insert (Nov 2014). Roche Diagnostics Documentation, Basel.</p>

      <p>GILBERT, W. M.; YOUNG, A. L.; DANIELSEN, B. Pregnancy outcomes in women with chronic hypertension: a population-based study. Journal of Reproductive Medicine. 2007;52:1046–51.</p>

      <p>GOMES, C.B.; MALTA, M. B.; CORRENTE, J. E. et al. Alta prevalência de inadequação da ingestão dietética de cálcio e vitamina D em duas coortes de gestantes. Cadernos de Saúde Pública, v. 32, n. 12, 2016.</p>

      <p>GORBER, S. C.; TREMBLAY, M.; CAMPBELL, N.; HARDT, J. The accuracy of self-reported hypertension: a systematic review and meta-analysis. Current Hypertension Reviews. 2008;4:36-62.</P>

      <p>GREENE, M. F.; WILLIAMS, W. W. Treating Hypertension in Pregnancy. New England Journal of Medicine. 2022. Doi: 10.1056/NEJMe2203388.</p>

      <p>HUND, M.; ALLEGRANZA, D.; SCHOEDL, M. et al. Multicenter prospective clinical study to evaluate the prediction of short-term outcome in pregnant women with suspected preeclampsia (PROGNOSIS): study protocol. BMC Pregnancy Childbirth. 2014;14:324.</p>

      <p>MAGEE, L. A.; NICOLAIDES, K. H.; VON DADELSZEN, P. Preeclampsia. New England Journal of Medicine. 2022;386(19):1817-1832.</p>

      <p>MARTIN, J. A.; HAMILTON, B. E.; VENTURA, S. J. et al. Births: final data for 2009. National Vital Statistics Reports. 2011;60:1–70.</p>

      <p>MAXWELL, M. H. et al. Error in blood-pressure measurement due to incorrect cuff size in obese patients. Lancet. 1982;2(8288):33-36.</p>

      <p>MESQUITA, M. R. S.; SASS, N.; STAVALLE, J. N.; CAMANO, L. O leito placentário no descolamento prematuro da placenta. Revista Brasileira de Ginecologia & Obstetrícia, v. 25, n. 8, p. 585-91, 2003.</p>

      <p>NATIONAL HIGH BLOOD PRESSURE EDUCATION PROGRAM. Report of the National High Blood Pressure Education Program Working Group on High Blood Pressure in Pregnancy. American Journal of Obstetrics & Gynecology. 2000; 183(1):S1-S22.</p>

      <p>NATIONAL INSTITUTE FOR HEALTH AND CARE EXCELLENCE. Hypertension in adults: diagnosis and management. London: NICE; 2023.</p>

      <p>NILSON, T. V.; AMATO, A. A.; RESENDE, C. N. et al. Unplanned pregnancy in Brazil: national study in eight university hospitals. Revista de Saúde Pública. v. 57, n. 35, 2023.</p>

      <p>PANAITESCU, A. M.; BASCHAT, A. A.; AKOLEKAR, R. et al. Association of chronic hypertension with birth of small-for-gestational-age neonate. Ultrasound in Obstetrics & Gynecology. 2017;50:361–6.</p>

      <p>PÓVOA, R. M. S. Hipertensão Arterial Secundária. Revista Brasileira de Hipertensão, v. 26, n. 2, p. 52-62, 2019.</p>

      <p>RAMOS, J. G.; MARTINS-COSTA, S.; EDELWEISS, M. I.; COSTA, C. A. Placental bed lesions and infant birth weight in hypertensive pregnant women. Brazilian Journal of  Medical and Biological Research. 1995;28(4):447-55.</p>

      <p>ROCHE DIAGNOSTICS. Elecsys® sFlt-1 package insert. Basel: Roche Diagnostics Documentation, nov. 2014.</p>

      <p>SIBAI, B. M. Chronic hypertension in pregnancy. Obstetrics & Gynecology. 2002; 100: 369-77.</p>

      <p>SIBAI, B. M.; LINDHEIMER, M.; HAUTH, J. et al. Risk factors for preeclampsia, abruptio placentae, and adverse neonatal outcomes among women with chronic hypertension. National Institute of Child Health and Human Development Network of Maternal–Fetal Medicine Units. New England Journal of Medicine. 1998;339:667–71.</p>

      <p>SILVA, C. A.; ATALLAH, A. N. et al. Evaluation of calcium and folic acid supplementation in prenatal care in São Paulo. Sao Paulo Medical Journal. 2010;128(6):324-7.</p>

      <p>SOCIEDADE BRASILEIRA DE CARDIOLOGIA. 7ª Diretriz Brasileira de Hipertensão Arterial. Arquivos Brasileiros de Cardiologia, v. 107, n. 3, Supl.3, p. 1-83, 2016.</p>

      <p>SOUSA, F. L. P. A Morfologia Vascular do Leito Placentário na Hipertensão Arterial Crônica Segundo a sua Expressão Clínica. Revista da Associação Médica Brasileira. V. 54, n. 6, dez. 2008.</p>

      <p>SOUSA, F. L. P.; SASS, N.; CAMANO, L. et al. Estudo da Morfologia Vascular do Leito Placentário na Hipertensão Arterial Crônica. Revista da Associação Médica Brasileira, v. 54, n. 6, p. 537-42, 2008.</p>

      <p>TAYLOR, R. N.; ROBERTS, J. M.; CUNNINGHAM, F. G.; LINDHEIMER, M. D. (eds.) Chesley’s hypertensive disorders in pregnancy. 4th ed. San Diego (CA): Academic Press; 2015.</p>

      <p>VAN SCHELTINGA, J. A. T.; KRABBENDAM, I.; SPAANDERMAN, M. E. Differentiating between gestational and chronic hypertension; an explorative study. Acta Obstetricia et Gynecologica Scandinavica. 2013;92:312–7.</p>

      <p>VERLOHREN, S.; GALINDO, A.; SCHLEMBACH, D. et al. An automated method for the determination of the sFlt-1/PIGF ratio in the assessment of preeclampsia. American Journal of Obstetrics & Gynecology. 2010;202(2):161.e1-161.e11.</p>

      <p>VERLOHREN, S.; HERRAIZ, I.; LAPAIRE, O. et al. New gestational phase-specific cutoff values for the use of the soluble fms-like tyrosine kinase-1/placental growth factor ratio as a diagnostic test for preeclampsia. Hypertension. 2014;63(2):346-52.</p>

      <h1>Aula 5</h1>

      <p>AMERICAN COLLEGE OF OBSTETRICIANS AND GYNECOLOGISTS. Committee Opinion No. 767: Emergent therapy for acute-onset, severe hypertension during pregnancy and the postpartum period. <i>Obstetrics & Gynecology</i>, v. 133, n. 2, p. e174-e180, 2019.</p>

      <p>BAYLISS, H.; BEEVERS, D. G.; CHURCHILL, D. A study of puerperal blood pressure in hypertensive and normotensive pregnancies. <i>Hypertension in Pregnancy</i>, v. 21, supl. 1, p. 33, 2002.</p>

      <p>BELFORT, M.; ALLRED, J.; DILDY, G. Magnesium sulfate decreases cerebral perfusion pressure in preeclampsia. <i>Hypertension in Pregnancy</i>, v. 27, n. 4, p. 315-327, 2008.</p>

      <p>BELFORT, M. A.; VARNER, M. W.; DIZON-TOWNSON, D. S. <i>et al</i>. Cerebral perfusion pressure, and not cerebral blood flow, may be the critical determinant of intracranial injury in preeclampsia: a new hypothesis. <i>American Journal of Obstetrics and Gynecology</i>, v. 187, n. 3, p. 626-634, 2002.</p>

      <p>BROWN, M. A.; MAGEE, L. A.; KENNY, L. C. <i>et al</i>. International Society for the Study of Hypertension in Pregnancy (ISSHP). Hypertensive disorders of pregnancy: ISSHP classification, diagnosis, and management recommendations for international practice. <i>Hypertension</i>, v. 72, p. 24-43, 2018.</p>

      <p>BUCHBINDER, A.; SIBAI, B. M.; CARITIS, S. <i>et al</i>. Adverse perinatal outcomes are significantly higher in severe gestational hypertension than in mild preeclampsia. <i>American Journal of Obstetrics and Gynecology</i>, v. 186, p. 66-71, 2002.</p>

      <p>DULEY, L.; MEHER, S.; JONES, L. Drugs for treatment of very high blood pressure during pregnancy. <i>Cochrane Database of Systematic Reviews</i>, n. 7, CD001449, 2013.</p>

      <p>ECLAMPSIA TRIAL COLLABORATIVE GROUP. Which anticonvulsant for women with eclampsia? Evidence from the collaborative eclampsia trial. <i>Lancet</i>, v. 345, p. 1455-1463, 1995.</p>

      <p>HAUTH, J. C.; EWELL, M. G.; LEVINE, R. J. <i>et al</i>. Pregnancy outcomes in healthy nulliparas who developed hypertension. Calcium for Preeclampsia Prevention Study Group. <i>Obstetrics & Gynecology</i>, v. 95, p. 24-28, 2000.</p>

      <p>HURWITZ, A. S.; BRICE, J. H.; OVERBY, B. A.; EVENSON, K. R. Directed use of the Cincinnati prehospital stroke scale by laypersons. <i>Prehospital Emergency Care</i>, v. 9, p. 292-296, 2005.</p>

      <p>KORKES HA, Ramos JGL, de Oliveira LG, Sass N, Peraçoli JC, Cavalli RC, Martins-Costa SH, de Sousa FLP, Cunha Filho EV, Mesquita MRS, Corrêa Jr MD, Araujo ACPF, Zaconeta ACM, Freire CHE, Rocha Filho EAP, Costa ML. Pré-eclâmpsia – Protocolo 2025. Rede Brasileira de Estudos sobre Hipertensão na Gravidez (RBEHG), 2025.</p>

      <p>KOTHARI, R. U.; PANCHIOLI, A.; LIU, T.; BROTT, T.; BRODERICK, J. Cincinnati prehospital stroke scale: reproducibility and validity. <i>Annals of Emergency Medicine</i>, v. 33, p. 373-378, 1999.</p>

      <p>LEWIS, G. (ed.). <i>Saving mothers’ lives: reviewing maternal deaths to make motherhood safer – 2003–2005</i>. London: Confidential Enquiry into Maternal and Child Health, 2007.</p>

      <p>LIAO, A. W. <i>et al</i>. Doença hipertensiva específica da gestação. In: ZUGAIB, M. <i>Zugaib obstetrícia</i>. 3. ed. Barueri: Manole, 2016. cap. 34.</p>

      <p>MAGEE, L. A.; VON DADELSZEN, P.; SINGER, J. <i>et al</i>. The CHIPS randomized controlled trial (Control of Hypertension in Pregnancy Study): is severe hypertension just an elevated blood pressure? <i>Hypertension</i>, v. 68, p. 1153-1159, 2016.</p>

      <p>MARTIN, J. N.; THIGPEN, B. D.; MOORE, R. C. <i>et al</i>. Stroke and severe preeclampsia and eclampsia: a paradigm shift focusing on systolic blood pressure. <i>Obstetrics & Gynecology</i>, v. 105, p. 246-254, 2005.</p>

      <p>MYERS, M. C.; BRANDT, D. S.; PRUNTY, A. <i>et al</i>. Effect of positioning on blood pressure measurement in pregnancy. <i>Pregnancy Hypertension</i>, v. 27, p. 110-114, 2022.</p>

      <p>NARUSE, K.; SHIGEMI, D.; HASHIGUCHI, M. <i>et al</i>. Placental abruption in each hypertensive disorders of pregnancy phenotype: a retrospective cohort study using a national inpatient database in Japan. <i>Hypertension Research</i>, v. 44, n. 2, p. 232-238, 2021.</p>

      <p>NATIONAL INSTITUTE FOR HEALTH AND CARE EXCELLENCE. <i>Hypertension in pregnancy: diagnosis and management: NICE guideline</i> [NG133]. London: NICE, 2019.</p>

      <p>NOBRE, F. VI Diretrizes Brasileiras de Hipertensão. <i>Arquivos Brasileiros de Cardiologia</i>, v. 95, p. 1-51, 2010.</p>

      <p>OHNO, Y. Prevention and treatment of stroke and eclampsia. In: SAITO, S. <i>Preeclampsia: basic, genomic, and clinical</i>. Singapore: Springer, 2018. p. 253-270.</p>

      <p>RAMOS, J. G. L.; SASS, N.; MARTINS COSTA, S. H. Preeclampsia. <i>Revista Brasileira de Ginecologia e Obstetrícia</i>, v. 39, p. 496-512, 2017.</p>

      <p>SASS, N.; ITAMOTO, C. H.; SILVA, M. P.; TORLONI, M. R.; ATALLAH, A. N. Does sodium nitroprusside kill babies? A systematic review. <i>São Paulo Medical Journal</i>, v. 125, n. 2, p. 108-111, 2007.</p>

      <p>SASS, N.; NAGAHAMA, G.; KORKES, H. A. Placental abruption in each phenotype of hypertensive disorders of pregnancy: a retrospective cohort study using a national inpatient database in Japan. <i>Hypertension Research</i>, v. 44, n. 2, p. 250-252, 2021.</p>

      <p>SOCIEDADE BRASILEIRA DE CARDIOLOGIA. 7ª Diretriz Brasileira de Hipertensão Arterial. <i>Arquivos Brasileiros de Cardiologia</i>, v. 107, n. 3, supl. 3, p. 1-83, 2016.</p>

      <p>SOUZA, A. S.; AMORIM, M. M.; COUTINHO, I. C. <i>et al</i>. Effect of the loading dose of magnesium sulfate (MgSO₄) on the parameters of Doppler flow velocity in the uterine, umbilical and middle cerebral arteries in severe preeclampsia. <i>Hypertension in Pregnancy</i>, v. 29, n. 2, p. 123-134, 2010.</p>

      <p>STRANDGAARD, S. Autoregulation of cerebral circulation in hypertension. <i>Acta Neurologica Scandinavica Supplementum</i>, v. 66, p. 1-82, 1978.</p>

      <p>WALTERS, B. N. J.; THOMPSON, M. E.; LEE, A.; DE SWIET, M. Blood pressure in the puerperium. <i>Clinical Science</i>, v. 71, p. 589-594, 1986.</p>

      <p>WILES, K.; DAMODARAM, M.; FRISE, C. Severe hypertension in pregnancy. <i>Clinical Medicine</i>, v. 21, n. 5, p. e451-e456, 2021. DOI: 10.7861/clinmed.2021-0508</p>
      `,
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
  // 1) Cria o container principal da modal
  const modal = el("div", {
    class: "modal fade",
    id: "modalReferencias",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "modalReferenciasLabel",
    "aria-hidden": "true",
  });

  // 2) Diálogo (note que agora uso modal-dialog-centered + modal-lg + scrollable)
  const dialog = el("div", {
    class: "modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable",
    role: "document",
  });

  // 3) content
  const content = el("div", { class: "modal-content" });

  // 4) header (cópia da modalCreditos, trocando apenas texto e id do título)
  const header = el(
    "div",
    { class: "modal-header" },
    el(
      "h1",
      {
        class: "modal-title",
        id: "modalReferenciasLabel",
        style: "color: #c04caf; margin-top: 0 !important;",
      },
      "Referências Bibliográficas"
    ),
    el(
      "button",
      {
        type: "button",
        class: "close",
        "data-dismiss": "modal",
        "aria-label": "Fechar",
      },
      el("span", { "aria-hidden": "true" }, "×")
    )
  );

  // 5) body: aqui você pode injetar o seu accordion
  const body = el(
    "div",
    { class: "modal-body" },
    buildAccordionDom(accordions)
  );

  // 6) footer: mesmo botão “Fechar” da modalCreditos
  const footer = el(
    "div",
    { class: "modal-footer" },
    el(
      "button",
      {
        id: "botaoComecar",
        type: "button",
        class: "btn btn-primary",
        "data-dismiss": "modal",
      },
      "Fechar"
    )
  );

  // monta tudo
  content.append(header, body, footer);
  dialog.appendChild(content);
  modal.appendChild(dialog);
  document.body.appendChild(modal);
}

document.addEventListener("DOMContentLoaded", criarModalReferencias);
