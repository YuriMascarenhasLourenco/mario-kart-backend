import { Racer } from 'src/types/racer';
import {
  playerBowser,
  playerDonkey,
  playerLuigi,
  playerMario,
  playerPeach,
  playerYoshi,
} from 'src/users/user';

// Lista de jogadores possíveis

export type playerName =
  | 'Mario'
  | 'Luigi'
  | 'Peach'
  | 'Donkey Kong'
  | 'Bowser'
  | 'Yoshi';
// Função para escolher um jogador
export const choosePlayer = (playerName: playerName): Racer => {
  switch (playerName) {
    case 'Mario':
      return playerMario;
    case 'Luigi':
      return playerLuigi;
    case 'Peach':
      return playerPeach;
    case 'Yoshi':
      return playerYoshi;
    case 'Bowser':
      return playerBowser;
    case 'Donkey Kong':
      return playerDonkey;
    default:
      return;
  }
};
