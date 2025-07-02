class ModalCreditos extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML  = `
        <style type="text/css">
            p {
                margin-bottom: 0px !important;
                margin-top: 30px !important;
            }

            h2 {
                font-size: 15px !important;
                margin-top: 30px !important;
                text-transform: uppercase;
            }
        </style>

        <h2>Ministério da Saúde</h2>

        <p>Nísia Trindade Lima</p>
        <i>Ministra</i>

        <p>Ethel Leonor Noia Maciel</p>
        <i>Secretária de Vigilância em Saúde</i>

        <p>Draurio Barreira Cravo Neto</p>
        <i>Diretor do Departamento de HIV/AIDS, Tuberculose, Hepatites Virais e Infecções Sexualmente Transmissíveis - DATHI</i>

        <p>Artur Olhovetchi Kalichman</p>
        <i>Coordenador Geral de Vigilância do HIV/AIDS e das Hepatites Virais</i>

        <h2>Fundação Oswaldo Cruz – Fiocruz</h2>

        <p>Mario Moreira</p>
        <i>Presidente</i>

        <p>Cristiani Vieira Machado</p>
        <i>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</i>

        <h2>Campus Virtual Fiocruz</h2>

        <p>Ana Cristina da Matta Furniel</p>
        <i>Coordenadora Geral</i>

        <p>Rosane Mendes</p>
        <i>Coordenadora Adjunta, Coordenadora da Plataforma Educare</i>

        <p>Renata Bernardes David</p>
        <i>Coordenadora de Produção</i>

        <p>Juliana Dutra</p>
        <i>Revisora Técnica de Conteúdo</i>

        <p>Isabela Schincariol</p>
        <i>Assessora de Comunicação</i>

        <p>Roberta Saboya</p>
        <i>Designer Educacional</i>

        <p>Daniela Botelho</p>
        <i>Designer UX/UI</i>

        <p>Eberthyn Marques</p>
        <i>Desenvolvedor</i>

        <p><b>Recursos Audiovisuais</b></p>

        <p>Bruno Athaydes</p>
        <i>Edição Audiovisual</i>

        <p><b>Recursos Educacionais</b></p>

        <p>Carmélia Brito</p>
        <i>Bibliotecária</i>

        <p>Natália Rasina</p>
        <i>Audiodescrição</i>

        <p>Maria Angélica Marcondes Drska</p>
        <i>Revisão de Português</i>

        <p><b>Suporte Técnico de Tecnologia da Informação</b></p>

        <p>Bruno Alexandre de Oliveira</p>
        <i>Desenvolvedor</i>

        <p>Eduardo Xavier da Silva</p>
        <i>Desenvolvedor</i>

        <p>Adriano Lourenço</p>
        <i>Analista de Suporte</i>

        <p>Orlando Terra</p>
        <i>Analista de Suporte</i>

        <h2>Coordenação Acadêmica</h2>

        <p>Marly Marques da Cruz</p>
        <i>Pesquisadora em Saúde Pública. Departamento de Endemias Samuel Pessoa (DENSP/ENSP/Fiocruz)<br>
        Diretora do Acordo de Cooperação entre a ENSP/Fiocruz e os Centros de Controle e Prevenção de Doenças dos Estados Unidos (CDC)</i>

        <p>Vanda Lúcia Cota</p>
        <i>Vice-Diretora do Acordo de Cooperação entre a ENSP/Fiocruz e o CDC</i>

        <h2>Coordenação Técnica</h2>

        <p>Tatianna Meireles Dantas de Alencar</p>
        <i>Analista Técnica de Políticas Sociais - Departamento de HIV/AIDS, Tuberculose, Hepatites Virais e Infecções Sexualmente Transmissíveis - DATHI do Ministério da Saúde</i>

        <h2>Coordenação Pedagógica</h2>

        <p>Ana Luisa Nepomuceno Silva</p>
        <i>Consultora técnica - Departamento de HIV/AIDS, Tuberculose, Hepatites Virais e Infecções Sexualmente Transmissíveis - DATHI do Ministério da Saúde</i>

        <h2>Conteudistas</h2>

        <p>Thiago Cherem Morelli</p>
        <i>Consultor Técnico</i>

        <p>Marihá Camelo de Moura Vasconcelos</p>
        <i>Analista Técnica de Políticas Sociais</i>

        <p>Tatianna Meireles Dantas de Alencar</p>
        <i>Analista Técnica de Políticas Sociais</i>

        <h2>Revisão Técnica</h2>

        <p>Thiago Cherem Morelli</p>
        <i>Consultor Técnico</i>

        <p>Marihá Camelo de Moura Vasconcelos</p>
        <i>Analista Técnica de Políticas Sociais</i>

        <p>Tatianna Meireles Dantas de Alencar</p>
        <i>Analista Técnica de Políticas Sociais</i>

        <p>Ana Luisa Nepomuceno Silva</p>
        <i>Consultora Técnica</i>

        <p>Francisco Álisson Paula de França</p>
        <i>Consultor Técnico</i>

        <p>Beatriz Brittes Kamiensk</p>
        <i>Consultora Técnica</i>

        <p>Maria Clara Gianna Garcia Ribeiro</p>
        <i>Consultora Técnica</i>

        <p>Aranaí Guarabyra</p>
        <i>Consultora Nacional IST/OPAS</i>
`
    }
}

customElements.define('modal-creditos', ModalCreditos);