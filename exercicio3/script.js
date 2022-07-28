// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase);

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const frase2 = frase.replaceAll("verde", "rosa").replaceAll("azul", "laranja") //empilhando
console.log(frase2);

//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

// Forma de fazer 1 - True ou False
console.log(`A nova string inclui "verde"?`, frase2.includes("verde"));
console.log(`A nova string inclui "laranja"?`, frase2.includes("laranja"));

// Forma de fazer 2 - IF/ELSE
if (frase2.includes("verde"))
r1 = ("inclui verde");
else 
r1 = ("não inclui verde");

if (frase2.includes("laranja"))
r2 = ("inclui laranja");
else 
r2 = ("não inclui laranja");

console.log(`A nova string ${r1} e ${r2}`);

//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
console.log(frase2.replaceAll("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR"));
