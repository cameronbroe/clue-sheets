import _ from 'lodash';

export async function getBoard (boardId) {
  let gamesListResponse = await fetch('static/games-list.json');
  let gamesList = await gamesListResponse.json();
  let listEntry = _.find(gamesList.games, (e) => { return e.boardId === boardId; });
  let gameBoardResponse = await fetch(`static/${listEntry.filename}`);
  let gameBoard = await gameBoardResponse.json();
  return gameBoard;
}
