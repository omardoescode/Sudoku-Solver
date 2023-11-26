# Installation Steps

1. Clone the repo to your local disk
2. run in a terminal window `npm install && npm start`

# The Sudoku Solver

The algorithm is based on various concepts that contribute to finding the solution to the sudoku given. Some of which are the generative recursion, trees, mutual and self recursion, higher-order functions in javascript, backtracking search and so more

The solution depends on at each step, out of a given sudoku, we fill the first blank box with values from 1 to 9. Then, we validate each and filter out the invalid ones and keep the valid ones, repeating the process until a sudoku board is found such that there is no blank box; since we kept only the valid ones, the first to be filled with numbers is the answer to the sudoku puzzle

[[image1.png]]
