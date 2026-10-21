const AlunoView = {
    elementos: {},
    incializar(){
        AlunoView.elementos.formulario= document.getElementById("form-aluno");
        AlunoView.elementos.ra= document.getElementById("ra");
        AlunoView.elementos.nome= document.getElementById("nome");
        AlunoView.elementos.email= document.getElementById("email");
        AlunoView.elementos.curso= document.getElementById("curso");
        AlunoView.elementos.turma= document.getElementById("turma");
        AlunoView.elementos.mensagem= document.getElementById("mensagem");
        AlunoView.elementos.corpoTabela= document.getElementById("corpo-tabela-alunos");
        AlunoView.elementos.totalAlunos= document.getElementById("total-alunoas");
        AlunoView.elementos.saidaJson= document.getElementById("saida-json");
        
    },
    configurarFormulario(aoEnviar){
        AlunoView.elementos.formulario.addEventListener(
            "submit",
            function(evento){
                evento.preventDefault();
                const dados = AlunoView.lerDados();
                aoEnviar(dados);
            }
        )
    },

    lerDados(){
        return{
            ra:prompt('Digite o RA do aluno:'),
            nome:prompt('Digite o nome do aluno:'),
            email:prompt('Digite o e-mail do aluno:'),
            curso:prompt('Digite o curso:'),
            turma:prompt('Digite a turma:')
        };
    },
    exibirSucesso(mensagem){
        AlunoView.elementos.mensagem.textContent = mensagem;
        AlunoView.elementos.mensagem.className = "mensagem sucesso";
    },
    exibirErro(mensagem){
        AlunoView.elementos.mensagem.textContent = mensagem;
        AlunoView.elementos.mensagem.className = "mensagem erro";
    },
    limparFormulario(){
        AlunoView.elementos.formulario.reset();
        AlunoView.elementos.ra.focus();
    },
    exibirLista(alunos){
        const corpoTabela = AlunoView.elementos.corpoTabela;
        corpoTabela.textContent = "";
        AlunoView.elementos.totalAlunos.textContent = `Total: ${alunos.lenght}`;
        if(alunos.length === 0){
            const linha = document.createElement("tr");
            const celula = document.createElement("td");
            celula.colSpan = 7;
            celula.textContent = "Nenhum aluno foi cadastrado.";
            linha.appendChild(celula);
            corpoTabela.appendChild(linha);
            return;
        }
        alunos.array.forEach(function (aluno){
            const linha = document.createElement("tr");
            const valores = [
                aluno.id,
                aluno.ra,
                aluno.nome,
                aluno.email,
                aluno.curso,
                aluno.turma,
                aluno.ativo ? "Ativo":"Inativo"
            ];
            valores.forEach(function (valor){
                const celula = document.createElement("td");
                celula.textContent = valor;
                linha.appendChild(celula);
            });
            corpoTabela.appendChild(linha);
        });
    },
    exibirJson(textoJson){
        AlunoView.elementos.saidaJson.textContent = textoJson;
    },
};