import { Injectable } from '@nestjs/common';
import * as readlineSync from 'readline-sync';
import { choosePlayer, playerName } from './helpers/choosePlayer';
import { players } from './helpers/players';
import { playRaceEngine } from './helpers/playRaceEngine';

@Injectable()
export class AppService {
  async executeTask() {
    console.log(
      'Escolha um personagem entre Mario, Yoshi ,Bowser, Peach, Luigi e Donkey Kong',
    );
    const name: playerName = readlineSync.question(
      'Digite o nome do personagem:\n',
    );
    const player1 = choosePlayer(name);
    const player2 = players[Math.ceil(Math.random() * 6)];
    console.log(
      `🏁🚨 Corrida entre ${player1.nome} e ${player2.nome} começado... \n`,
    );
    await playRaceEngine(player1, player2);
  }
}
