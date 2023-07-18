import { IAttackState } from "../store/reducers/attacks/attack.interface";
import { IPlayerState } from "../store/reducers/players/player.interface";
import { IRound } from "../store/reducers/rounds/round.interface";

export interface IResponseObject {
  players: IPlayerState,
  attacks: IAttackState,
  round: IRound
}

export interface IAttackObject {
  playerAttacker: string;
  playerDefender: string;
  deaths: number;
  injuries: number;
}
