class ModalReferencais extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style type="text/css">
        a {
            word-wrap: break-word;
        }
        </style>
        
        <p>BRASIL. Ministério da Saúde. Secretaria de Ciência, Tecnologia, Inovação e Insumos Estratégicos em Saúde. Secretaria de Vigilância em Saúde. <b>Protocolo Clínico e Diretrizes Terapêuticas para Profilaxia Pré-Exposição (PrEP) de Risco à Infecção pelo HIV.</b> Brasília: 2022. Disponível em: <a href="https://www.gov.br/aids/pt-br/central-de-conteudo/pcdts/2017/hiv-aids/pcdt-prep-versao-eletronica-22_09_2022.pdf/view" target="_blank" rel="noopener noreferrer">https://www.gov.br/aids/pt-br/central-de-conteudo/pcdts/2017/hiv-aids/pcdt-prep-versao-eletronica-22_09_2022.pdf/view</a>. Acesso em: 3 maio 2023.</p>

        <p>BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Doenças de Condições Crônicas e Infecções Sexualmente Transmissíveis. <b>Nota Técnica nº 8/2023 – CGAHV/. DCCI/SVS/MS</b> - Dispõe sobre recomendações e atualizações acerca do uso da Profilaxia Pré-Exposição de risco à infecção pelo HIV (PrEP) oral, incluindo a modalidade “sob demanda”. 2023. Disponível em: <a href="https://www.gov.br/aids/pt-br/central-de-conteudo/notas-tecnicas/2023/nota-tecnica-no-8_2023-cgahv_-dcci_svs_ms.pdf/view" target="_blank" rel="noopener noreferrer">https://www.gov.br/aids/pt-br/central-de-conteudo/notas-tecnicas/2023/nota-tecnica-no-8_2023-cgahv_-dcci_svs_ms.pdf/view</a>. Acesso em: 3 maio 2023.</p>

        <p>BRASIL. Ministério da Saúde. Secretaria de Ciência, Tecnologia, Inovação e Insumos Estratégicos em Saúde. Secretaria de Vigilância em Saúde. <b>Protocolo Clínico e Diretrizes Terapêuticas para Profilaxia Pós-Exposição de Risco (PEP) à Infecção pelo HIV, IST e Hepatites Virais.</b> Brasília: Ministério da Saúde, 2022. Disponível em:  <a href="https://www.gov.br/aids/pt-br/central-de-conteudo/pcdts/2021/hiv-aids/prot_clinico_diretrizes_terap_pep_-risco_infeccao_hiv_ist_hv_2021.pdf/view" target="_blank" rel="noopener noreferrer">https://www.gov.br/aids/pt-br/central-de-conteudo/pcdts/2021/hiv-aids/prot_clinico_diretrizes_terap_pep_-risco_infeccao_hiv_ist_hv_2021.pdf/view</a>. Acesso em: 3 maio 2023.</p>
        
        <p>BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Doenças de Condições Crônicas e Infecções Sexualmente Transmissíveis. <b>Nota Técnica Nº 26/2024-CGAHV/. DATHI/SVSA/MS</b> - uso do autoteste de HIV para início e seguimento da Profilaxia Pré-Exposição (PrEP). 2024. Disponível em: <a href="https://www.gov.br/aids/pt-br/central-de-conteudo/notas-tecnicas/2024/nota-tecnica-no-26-2024-cgahv-dathi-svsa-ms.pdf/view" target="_blank" rel="noopener noreferrer">https://www.gov.br/aids/pt-br/central-de-conteudo/notas-tecnicas/2024/nota-tecnica-no-26-2024-cgahv-dathi-svsa-ms.pdf/view</a>. Acesso em: 3 maio 2023.</p>
        
        <p>ORGANIZACIÓN PANAMERICANA DE LA SALUD (OPAS). Curso Virtual: Profilaxis Oral Previa a la Exposición (PrEP) al VIH. Herramienta de aprendizaje en línea para profesionales clínicos. <b>Campus Virtual</b> de la Salud. FIOCRUZ. 2023. Disponível em: <a href="https://campus.paho.org/es/curso/profilaxis-oral-previa-la-exposicion-prep-al-vih-herramienta-de-aprendizaje-en-linea-para" target="_blank" rel="noopener noreferrer">https://campus.paho.org/es/curso/profilaxis-oral-previa-la-exposicion-prep-al-vih-herramienta-de-aprendizaje-en-linea-para</a>. Acesso em: 3 maio 2023.</p>
`

    }
}

customElements.define('modal-referencias', ModalReferencais);