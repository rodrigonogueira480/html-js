//1 - Cria uma função que calcule a soma de 3 números exiba no console o resultado e a média aritmética dos 3 números.
//function somaTresNumeros(n1, n2, n3) {
   // let resultado = n1 + n2 + n3;
   // let media = resultado / 3;
   // console.log('Resultado: ' + resultado);
   // console.log('Média: ' + media);
  //  return resultado, media;
//}
//somaTresNumeros(234, 567, 890); // Resultado: 60, Média: 20

//2- Cria duas funções que calcule a soma e a média de 3 números exiba no console o resultado e a média aritmética dos 3 números.

function somaTresNumeros(n1, n2, n3) {
    let soma = n1 + n2 + n3;
    console.log('Resultado: ' + soma);
    return soma;
}
somaTresNumeros(234, 567, 890); // Resultado: 1891

function mediaTresNumeros(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    console.log('Média: ' + media);
    return media;
}
mediaTresNumeros(234, 567, 890); // Média: 630.3333333333334