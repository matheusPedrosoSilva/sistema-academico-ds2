const AlunoController = {
    iniciar(){
        AlunoView.inicializar();
        AlunoView.configurarFormulario(
            function(dados){
                AlunoController.cadastrar(dados);
            }
        );
        AlunoController.atualizarVisualizacao();
    },
    cadastrar(dados){
        const resultado = AlunoModel.cadastrar(dados);
        if(!resultado.sucesso){
            AlunoView.exibirErro(resultado.mensagem);
            return;
        }
        AlunoView.exbirSucesso(
            `Aluno ${resultado.aluno.nome} cadastrado com sucesso.`
        );
        AlunoView.limparFormulario();
        AlunoController.atualizarVisualizacao();
    },
    atualizarVisualizacao(){
        const alunos = AlunoModel.lista();
        AlunoView.exbirLista(alunos);
        const textoJson = JSON.stringify(alunos, null, 2);
        AlunoView.exibirJson(textoJson);
    }
};
AlunoController.iniciar();