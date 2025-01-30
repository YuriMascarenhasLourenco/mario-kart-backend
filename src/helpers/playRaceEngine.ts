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
        totalSkil1= diceresult1 +player1.velocidade
        totalSkil2 = diceresult2 + player2.velocidade
    }
    if (block === 'CURVA') {
        totalSkil1= diceresult1 + player1.manobrabilidade
        totalSkil2= diceresult2 + player2.manobrabilidade
    }
    if (block === 'CONFRONTO') {
        totalSkil1 = diceresult1 + player1.poder
        totalSkil2= diceresult2 + player2.poder
    }
    
  }
};
