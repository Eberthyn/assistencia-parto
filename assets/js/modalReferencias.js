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

          <p></p>

      `,
    ],
  },
  {
    id: "2",
    heading: "Módulo 2",
    body: [
      "Em desenvolvimento",
    ],
  },
  // {
  //   id: "3",
  //   heading: "Módulo 3",
  //   body: [
  //     "A evolução até a atualidade (10 mil anos) foi marcada pelo desenvolvimento da agricultura, aumento das densidades populacionais, maior miscigenação racial e aumento da ocorrência do sedentarismo. Além disso, a globalização da dieta hipercalórica norte-americana vem contribuindo para a progressão da obesidade no mundo, aumentando as taxas de distocia e a incidência de cesarianas.",
  //     "De acordo com o Ministério da Saúde (MS), em 2019 a prevalência de sobrepeso entre as mulheres brasileiras já alcançava 53,9%, enquanto a de obesidade já era de 20,7%.",
  //     "A projeção da Organização Mundial de Saúde (OMS) para o ano de 2025 é de que aproximadamente 2,3 bilhões de adultos estarão com sobrepeso e 700 milhões de pessoas com obesidade viverão no mundo.",
  //   ],
  // },
  // {
  //   id: "4",
  //   heading: "Módulo 4",
  //   body: [
  //     "A evolução até a atualidade (10 mil anos) foi marcada pelo desenvolvimento da agricultura, aumento das densidades populacionais, maior miscigenação racial e aumento da ocorrência do sedentarismo. Além disso, a globalização da dieta hipercalórica norte-americana vem contribuindo para a progressão da obesidade no mundo, aumentando as taxas de distocia e a incidência de cesarianas.",
  //     "De acordo com o Ministério da Saúde (MS), em 2019 a prevalência de sobrepeso entre as mulheres brasileiras já alcançava 53,9%, enquanto a de obesidade já era de 20,7%.",
  //     "A projeção da Organização Mundial de Saúde (OMS) para o ano de 2025 é de que aproximadamente 2,3 bilhões de adultos estarão com sobrepeso e 700 milhões de pessoas com obesidade viverão no mundo.",
  //   ],
  // },
  // {
  //   id: "5",
  //   heading: "Módulo 5",
  //   body: [
  //     "A evolução até a atualidade (10 mil anos) foi marcada pelo desenvolvimento da agricultura, aumento das densidades populacionais, maior miscigenação racial e aumento da ocorrência do sedentarismo. Além disso, a globalização da dieta hipercalórica norte-americana vem contribuindo para a progressão da obesidade no mundo, aumentando as taxas de distocia e a incidência de cesarianas.",
  //     "De acordo com o Ministério da Saúde (MS), em 2019 a prevalência de sobrepeso entre as mulheres brasileiras já alcançava 53,9%, enquanto a de obesidade já era de 20,7%.",
  //     "A projeção da Organização Mundial de Saúde (OMS) para o ano de 2025 é de que aproximadamente 2,3 bilhões de adultos estarão com sobrepeso e 700 milhões de pessoas com obesidade viverão no mundo.",
  //   ],
  // },
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
