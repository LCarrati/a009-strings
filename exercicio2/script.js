const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";


// a) Remova o excesso de espaços no final da string;
let minhaStringMod = minhaString.trim() 
console.log(minhaStringMod);

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log(`A frase antes da remoção dos espaços continha ${minhaString.length} e após a remoção ${minhaStringMod.length}`);

// c) Substitua os traços `________` por “sticioso”.
console.log(minhaStringMod.replaceAll("________", "sticioso"));
