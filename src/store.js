import _ from 'lodash';
import { getBoard } from './utils/utils';

let getEntry = (haystack, name) => {
  return _.find(haystack, (e) => { return e.name === name; });
};

export default {
  debug: true,
  state: {
    board: null
  },
  loadBoard: function (boardId) {
    getBoard(boardId).then((obj) => {
      this.state.board = _.cloneDeep(obj);
    });
  },
  togglePossibility: function (name, type) {
    let entry = getEntry(this.state.board[type], name);
    if (entry.state === 1) {
      entry.state = 0;
    } else if (entry.state === 0) {
      entry.state = 1;
    }
  },
  setPossible: function (name, type) {
    let entry = getEntry(this.state.board[type], name);
    entry.state = 0;
  },
  setCertain: function (name, type) {
    let entry = getEntry(this.state.board[type], name);
    entry.state = 2;
  }
};
