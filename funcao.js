//Sintaxe da função
/*function nome(/*argumentos, parâmetros*//*) {//são entradas de dados para a função utilizar
    //bloco de código/ lógica
}

//executar, chamando pelo nome e passa os parâmetros se houver, se não fica vazio '()'
nome()

//1- somar dois números
function somarDoisNumeros(n1, n2) {
    //let n1 = 50;
    //let n2 = 70;

    let resultado = n1 + n2;
    console.log(resultado) // 120

    //código é interrompido após o return, se houver algo abaixo, não será executado
    return resultado; 
}
//console.log(somarDoisNumeros())

//Os parâmetros/argumentos 
somarDoisNumeros(20, 50) //undefined, pois não tem parâmetros na função
somarDoisNumeros(100, 400) //500*/

function verificarIdade(idade) {
    if (typeof idade !== 'string') {
        const mensagem = `Idade: ${idade} anos`
        console.log(mensagem);


if (idade >= 60) {
    console.log(`Véi`);
} else if (idade >= 12 && idade <= 18) {
    console.log(`Você é aborrecente`);
} else if (idade < 12) {
    console.log(`Tira a catinga do mijo`);
} else {
    console.log(`Você é adulto`);
}
} else {
        console.log('Por favor, insira uma idade válida.');
    }       
}

verificarIdade('60') // Chamada da função com o parâmetro idade