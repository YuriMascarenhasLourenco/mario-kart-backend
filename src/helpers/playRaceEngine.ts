import { Racer } from 'src/types/racer';
import { rollDice } from './rollDice';

export const getRandomBlock = async () => {
  let random = Math.random();
  let result;
  switch (true) {
    case random < 0.33:
      result = 'RETA';
      break;
    case random > 0.33 && random < 0.66:
      result = 'CURVA';
      break;
    default:
      result = 'CONFRONTO';
      break;
  }
  return result;
};
const logs = async (
  block: string,
  player: Racer,
  diceresult: number,
  skill: number,
) => {
  console.log(
    `${player.nome} rolou um dado 🎲 de ${block} ${diceresult} +${skill} = ${diceresult + skill}`,
  );
};
const winnerGame=(player1:Racer,player2:Racer)=>{
if(player1.pontos>player2.pontos){
  console.log(`${player1.nome} venceu a corrida!`)
}
if(player2.pontos>player1.pontos){
  console.log(`${player2.nome} venceu a corrida!`)
}
}
export const playRaceEngine = async (player1: Racer, player2: Racer) => {
  for (let i = 1; i <= 5; i++) {
    console.log(`🏁 Rodada ${i}`);

    let block = await getRandomBlock();
    console.log(`Bloco ${block}`);

    let diceresult1 = await rollDice();
    let diceresult2 = await rollDice();

    let totalSkil1 = 0;
    let totalSkil2 = 0;
    if (block === 'RETA') {
      totalSkil1 = diceresult1 + player1.velocidade;
      totalSkil2 = diceresult2 + player2.velocidade;
      await logs('VELOCIDADE', player1, diceresult1, player1.velocidade);
      await logs('VELOCIDADE', player2, diceresult2, player2.velocidade);
    }
    if (block === 'CURVA') {
      totalSkil1 = diceresult1 + player1.manobrabilidade;
      totalSkil2 = diceresult2 + player2.manobrabilidade;
      await logs(
        'MANOBRABILIDADE',
        player1,
        diceresult1,
        player1.manobrabilidade,
      );
      await logs(
        'MANOBRABILIDADE',
        player2,
        diceresult2,
        player2.manobrabilidade,
      );
    }
    if (block === 'CONFRONTO') {
      let power1 = diceresult1 + player1.poder;
      let power2 = diceresult2 + player2.poder;

      console.log(`${player1.nome} confrontou com ${player2.nome}`);
      await logs('CONFRONTO', player1, diceresult1, player1.poder);
      await logs('CONFRONTO', player2, diceresult2, player2.poder);
      player2.pontos -= power1 > power2 && player2.pontos > 0 ? 1 : 0;
      player1.pontos -= power2 > power1 && player1.pontos > 0 ? 1 : 0;
      console.log(
        power1 === power2
          ? 'EMPATE! O confronto tá acirrado, ninguém perdeu ponto'
          : '',
      );
    }

    if (totalSkil1 > totalSkil2) {
      console.log(`no bloco ${block} ${player1.nome} fez um ponto!`);
      player1.pontos++;
    } else if (totalSkil2 > totalSkil1) {
      console.log(`noo bloco ${block} ${player2.nome} fez um ponto!`);
      player2.pontos++;
    }
  }
  winnerGame(player1,player2);
};
