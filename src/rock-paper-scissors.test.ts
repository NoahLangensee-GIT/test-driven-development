import { play } from "./rock-paper-scissors";

describe('Rock Paper Scissors - play function', () => {
  const invalidTestCases: [string, string, { error: string }][] = [
    ['lizard', 'rock', { error: 'Invalid move: lizard' }],
    ['paper', 'spock', { error: 'Invalid move: spock' }],
    [' LIZARD ', ' SPOCK ', { error: 'Invalid move: lizard' }],
    ['', 'rock', { error: 'Invalid move: ' }],
    ['scissors', ' ', { error: 'Invalid move: ' }],
    [' invalid ', ' invalid ', { error: 'Invalid move: invalid' }],
  ];

  const validTestCases: [string, string, number][] = [
    ['rock', 'rock', 0],
    ['paper', 'paper', 0],
    ['scissors', 'scissors', 0],
    ['  RoCk ', ' rOCK ', 0],

    ['rock', 'scissors', 1],
    ['scissors', 'paper', 1],
    ['paper', 'rock', 1],
    ['ROCK', 'scissors', 1],
    [' paper ', ' rock ', 1],

    ['scissors', 'rock', 2],
    ['paper', 'scissors', 2],
    ['rock', 'paper', 2],
    ['rock', 'PAPER', 2],
];
  test.each(invalidTestCases)(
    "play('%s', '%s') should result in Error",
    (move1, move2, expected) => {
        expect(() => play(move1, move2)).toThrow(expected.error);
    }
  );
  test.each(validTestCases)(
    "play('%s', '%s') should result in %p",
    (move1, move2, expected) => {
        expect(play(move1, move2)).toBe(expected);
    }
  );
});