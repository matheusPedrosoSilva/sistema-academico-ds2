
const AlunoModel = {    
    
    //array que contem todos alunos cadastrados
    alunos: [],
    // funcao para padronizar o dado de entrada para garantir ele o usuario
    // tenha informado algo e que nao haja espaco no comeco ou no fim
    padronizarDado(dado){
        if(dado===null || dado===undefined){
            return'';
        }
        return dado.trim();
    },

    // verifica se o email digitado contem um @ e um . 
    validarEmail(email){
        return email.includes('@') && email.includes('.');
    },

    //valida se o ra informado ja nao esta cadastrado
    verificarRa(ra){
        return AlunoModel.alunos.find(
            aluno => aluno.ra === ra
        );
    },

    cadastrarAluno(dados){
        //instacia os dados em suas variaveis e padroniza eles
        const ra = AlunoModel.padronizarDado(dados.ra);
        const nome = AlunoModel.padronizarDado(dados.nome);
        const email = AlunoModel.padronizarDado(dados.email);
        const turma = AlunoModel.padronizarDado(dados.turma);
        const curso = AlunoModel.padronizarDado(dados.curso);
        //verifica se algum dos dados informados esta vazio
        if(
           ra === "" ||
           nome === "" ||
           email === "" ||
           turma === "" ||
           curso === "" 
        ) {
            return{
                sucesso:false,
                mensagem:"Favor informar todos os campos obrigatórios para finalizar o cadastro"
            };
        }
        if(!AlunoModel.validarEmail(email)){
            return{
                sucesso:false,
                mensagem:"Email digitado inválido"
            };
        }
        if(AlunoModel.verificarRa(ra)){
            return{
                sucesso:false,
                mensagem:'Já existe um usuário com este RA.'
            };
        }
        const aluno ={
            id: AlunoModel.alunos.length+1,
            ra:ra,
            nome:nome,
            email: email,
            curso: curso,
            turma: turma,
            ativo:true
        };
        AlunoModel.alunos.push(aluno);
        return {
            sucesso: true,
            aluno: aluno
        };
    },

    listar(){return [...AlunoModel.alunos];},

    limpar(){
        AlunoModel.alunos.length = 0;
    }
};