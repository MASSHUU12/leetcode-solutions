console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ])
);

function findCenter(edges: number[][]): number {
  const [e0, e1] = edges;

  if (e0[0] === e1[0] || e0[0] === e1[1]) return e0[0];
  return e0[1];
}
