export const areEqualLegalMoves = (moves1: string[], moves2: string[]): boolean => {
  const moveSet1 = new Set(moves1),
    moveSet2 = new Set(moves2);

  if (moveSet1.size !== moveSet2.size) return false;

  for (const move of moveSet1) {
    if (!moveSet2.has(move)) return false;
  }

  return true;
};
