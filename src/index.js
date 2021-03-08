
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return []
  return matrix.map((it, index) => (index % 2 !== 0) ? it.sort((a,b) => b-a) : it).flat()
}
