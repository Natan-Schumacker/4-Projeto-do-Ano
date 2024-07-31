const nomes = ["Clotilde", "Davi", "Natã","Grazy","Samanta","Angelline","Rozyclallva","Rozinalva","Boleslau","Estanslau","Nicanor"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)