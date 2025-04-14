export function play(player1: string, player2: string): number {
  const VALID_MOVES = ['rock', 'paper', 'scissors'] as const;
  const p1Move = player1.trim().toLowerCase();
  const p2Move = player2.trim().toLowerCase();
  if (!(VALID_MOVES as readonly string[]).includes(p1Move)) {
    throw new Error(`Invalid move: ${p1Move}`);
  }
  if (!(VALID_MOVES as readonly string[]).includes(p2Move)) {
    throw new Error(`Invalid move: ${p2Move}`);
  }
  if (p1Move === p2Move) {
    return 0;
  }
  if (
    (p1Move === 'rock' && p2Move === 'scissors') ||
    (p1Move === 'scissors' && p2Move === 'paper') ||
    (p1Move === 'paper' && p2Move === 'rock')
  ) {
    return 1;
  }
  return 2;
}
