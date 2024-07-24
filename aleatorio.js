const nomes = ["Davi", "Fellipe", "Natã", "Grazy", "Samanta", "Angelline", "Clotilde"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)