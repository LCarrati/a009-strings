const nomeDoUsuario = prompt(`Qual o seu nome?`)

// Forma de fazer 1 - Com 3 perguntas e 3 variáveis
const comidaFav1 = prompt(`Qual sua comida favorita?`)
const comidaFav2 = prompt(`Qual sua segunda comida favorita?`)
const comidaFav3 = prompt(`Qual sua terceira comida favorita?`)

console.log(`Estas são as comidas favoritas de ${nomeDoUsuario}
- ${comidaFav1}
- ${comidaFav2}
- ${comidaFav3}`)

// Forma de fazer 2 - Com 1 pergunta e 1 variável
let comidaFav4 = prompt(`Liste suas 3 comidas favoritas:`)
console.log(`Estas são as comidas favoritas de ${nomeDoUsuario}
- ${comidaFav4.split(" ")[0]}
- ${comidaFav4.split(" ")[1]}
- ${comidaFav4.split(" ")[2]}`)