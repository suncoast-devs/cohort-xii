New Game

- DONE When the user clicks the new game button
- DONE Use the new game API to request a new game
  - POST /games
  - Take what the API gives back and put that in the state
- DONE Display the number of the game we are playing

Draw the board

- DONE 8x8 grid of <tr> and <td> elements
- DONE comes from the state, the API calls this `board` (Render based on the state)
- DONE So for each element in the board, put
  the appropriate character in the table
- DONE Update the number of mines remaining

Check a cell

- Tell the API that the user checked a cell
  - DONE We need to tell it:
    - id (number of the game)
    - row
    - col
  - DONE POST /games/{id}/check
  - DONE Take what the API gives back and put that in the state

Flag a cell

- DONE Tell the API that the user flagged a cell

  - DONE We need to tell it:
    - id (number of the game)
    - row
    - col
  - DONE POST /games/{id}/flag
  - DONE Take what the API gives back and put that in the state

- DONE Handle a game over (display something to the user)

- DONE Handle easy/intermediate/expert
