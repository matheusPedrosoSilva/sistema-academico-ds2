
const AlunoModel = {
    // funcao para padronizar o dado de entrada para garantir ele o usuario
    // tenha informado algo e que nao haja espaco no comeco ou no fim
    padronizarDado(dado){
        if(dado===null || dado===undefined){
            return'';
        }
        return String(dado).trim();
    },

    // verifica se o email digitado contem um @ e um . 
    validarEmail(email){
        return email.includes('@') && email.includes('.');
    },

    validar(dados){
        //instacia os dados em suas variaveis e padroniza eles
        const aluno = {
            ra : AlunoModel.padronizarDado(dados.ra),
            nome : AlunoModel.padronizarDado(dados.nome),
            email : AlunoModel.padronizarDado(dados.email).toLowerCase(),
            turma : AlunoModel.padronizarDado(dados.turma),
            curso : AlunoModel.padronizarDado(dados.curso)
        };
        
        //verifica se algum dos dados informados esta vazio
        if(
           aluno.ra === "" ||
           aluno.nome === "" ||
           aluno.email === "" ||
           aluno.turma === "" ||
           aluno.curso === "" 
        ) {
            return{
                sucesso:false,
                mensagem:"Favor informar todos os campos obrigatórios para finalizar o cadastro"
            };
        }
        if(!AlunoModel.validarEmail(aluno.email)){
            return{
                sucesso:false,
                mensagem:"Email digitado inválido"
            };
        }
        return {
            sucesso: true,
            dados: aluno
        };
    },
};