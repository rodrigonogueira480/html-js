let nome = 'Rodrigo'
let sobrenome = 'Nogueira'

//let funcao = 'Professor'

//console.log(funcao + ':', nome.toUpperCase(), sobrenome.toUpperCase()); // Professor Rodrigo Nogueira


let nomeUsuario = nome + '.' + sobrenome

//console.log(nomeUsuario.toLowerCase()); // Rodrigo.Nogueira

//Interpolação de strings
let usuario = `Nome de Usuário: ${nome.toLowerCase()}.${sobrenome.toLowerCase()}`;
console.log(usuario); 

//Nome de Usuário:// rodrigo.nogueira