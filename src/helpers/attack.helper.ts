interface IAttackHelper {
  valid: boolean;
  message: string;
}

export const validateAttack = (attack: string):IAttackHelper => {

  //Validar que el número tenga 5 dígitos
  if (attack.length !== 5)
    return {valid: false, message: 'Number must have 5 digits'};

  //Validar que el string contenga solo números
  if (!/^\d+$/.test(attack))
    return {valid: false, message: 'Attack can only have numbers'}

  // Validar que ningún número se repita
  const numbers = attack.split('');
  const numerosUnicos = [...new Set(numbers)];
  if (numbers.length !== numerosUnicos.length) {
    return {valid: false, message: 'Attack must not have repeated numbers '};
  }

  // Validar que el primer número no sea 0
  if (numbers[0] === '0') {
    return {valid: false, message: 'First digit must not be 0'};
  }

  // Si se pasaron todas las validaciones, el número es válido
  return {valid: true, message: 'Valid Attack'};
}
