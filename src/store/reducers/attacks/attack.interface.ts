export interface IAttack {
  attack_player: string;
  defender_player: string;
  attack_number: number;
  deaths: number;
  injuries: number;
}

export interface IAttackState {
  attacks: IAttack[];
}
