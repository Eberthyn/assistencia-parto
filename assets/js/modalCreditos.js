class ModalCreditos extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style type="text/css">
            p {
                margin-bottom: 0px !important;
                margin-top: 30px !important;
            }

            h2 {
                font-size: 15px !important;
                margin-top: 30px !important;
                text-transform: uppercase;
                font-family: "Prelo Bold";
            }
        </style>

        <h2>Ministério da Saúde</h2>

        <p>Alexandre Padilha</p>
        <i>Ministro</i>

        <h2>Fundação Oswaldo Cruz – Fiocruz</h2>

        <p>Mario Moreira</p>
        <i>Presidente</i>

        <p>Marly Cruz</p>
        <i>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</i>

        <h2>Campus Virtual Fiocruz</h2>

        <p>Ana Cristina da Matta Furniel</p>
        <i>Coordenadora Geral</i>

        <p>Rosane Mendes</p>
        <i>Coordenadora Adjunta</i>

        <p>Renata Bernardes David</p>
        <i>Coordenadora de Produção</i>

        <p>Juliana Dutra</p>
        <i>Gerente de Produção</i>

        <p>Claúdia Reis</p>
        <i>Assessora Pedagógica</i>

        <p>Isabela Schincariol</p>
        <i>Assessora de Comunicação</i>

        <p>Fernanda Sousa</p>
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

        <p>Janaina Vieira</p>
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

        <p>Fábio Carneiro</p>
        <i>Designer Gráfico e Web Designer</i>

        <h2>Coordenação Acadêmica</h2>

        <p>Maria do Carmo Leal</p>
        <i>Escola Nacional de Saúde Pública Sérgio Arouca – ENSP/FIOCRUZ</i>

        <h2>Coordenação do Projeto</h2>

        <p>Michele Rocha de Araújo El Kadri</p>
        <i>Instituto Leônidas e Maria Deane – ILMD/Fiocruz Amazônia</i>

        <h2>Equipe ILMD/Fiocruz Amazônia</h2>

        <p>Letícia Santos de Souza <br>
        Rosinete Lacerda Alves <br>
        Tatiane Figueiredo</p>

        <h2>Conteudista</h2>
        <p>Álvaro Luiz Lage Alves</p>
        <i>Hospital das Clínicas da Universidade Federal de Minas Gerais – Belo Horizonte / MG</i>

        <h2>Tutores</h2>
        <p>Juliana Augusta Dias</p>
        <i>Universidade Federal dos Vales de Jequitinhonha e Mucuri – UFVJM</i>

        <p>Alexandre Massao Nozaki</p>
        <i>Universidade de São Paulo – USP</i>

        <p>Lucas Barbosa da Silva</p>
        <i>Hospital das Clínicas – UFMG</i>

        <p>Paulo Roberto Mansoldo Alves</p>
        <i>UNIMED – BH</i>

        <p>Francisco Lázaro Pereira de Sousa</p>
        <i>Centro Universitário Luzíadas – Santos - SP</i>

        <h2>Ilustração</h2>
        
        <p>Felipe Starling</p>

`;
  }
}

customElements.define("modal-creditos", ModalCreditos);
