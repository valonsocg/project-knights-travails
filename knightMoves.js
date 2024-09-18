function knightMoves(start, end) {
  const BOARD_SIZE = 8;
  const moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  function isValid([x, y]) {
    return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;
  }

  function bfs(start, end) {
    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString);

    while (queue.length) {
      const path = queue.shift();
      const [x, y] = path[path.length - 1];

      if (x === end[0] && y === end[1]) {
        return path;
      }

      for (const [dx, dy] of moves) {
        const nextPos = [x + dx, y + dy];
        if (isValid(nextPos) && !visited.has(nextPos.toString())) {
          queue.push([...path, nextPos]);
        }
      }
    }
  }

  const result = bfs(start, end);
  console.log(`You made it in ${result.length - 1} moves! Here's your path:`);

  result.forEach((move) => console.log(move));
}

knightMoves([0, 0], [7, 7]);
