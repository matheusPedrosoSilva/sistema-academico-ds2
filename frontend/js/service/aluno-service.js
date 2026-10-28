const AlunoService = {
    URL_API: "http://localhost:3000/api/alunos",

    async processarResposta(reposta){
        let resultado;
        try{
            resultado = await reposta.json();
        }
        catch(erro){
            throw new Error("O servidor retornou uma reposta inválida.");
        }
        if(!reposta.ok){
            throw new Error(resultado.mensagem || "Não foi possível concluir a operação.");
        }
        return resultado;
    },
    async requisitar(opcoes = {}){
        let reposta;
        try{
            reposta = await fetch(
                AlunoService.URL_API,
                opcoes
            );
        }
        catch{
            throw new Error(
                "Não foi possível conectar ao servidor."
            )
        }
        return AlunoService.processarResposta(reposta);
    },
    async listar(){
        const resultado = await AlunoService.requisitar({
            method: "GET",
            headers: {
                "Accept":"application/json"
            }
        });
        return resultado.dados;
    },
    async cadastrar(alunos){
        return AlunoService.requisitar({
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(alunos)
        });
    }
};