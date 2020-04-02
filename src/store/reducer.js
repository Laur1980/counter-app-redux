import * as actionType from "./actions";

const initialState = {
  message: "Hello world!",
  total: 0,
  lines: [
    { id: 1, elements: 23 },
    { id: 2, elements: 34 },
    { id: 3, elements: 56 },
    { id: 4, elements: 12 },
    { id: 5, elements: 101 },
    { id: 6, elements: 0 }
  ]
};

const updateTotal = state => {
  const lines = state.lines;
  const total = lines.reduce(
    (accumulator, line) => accumulator + line.elements,
    0
  );
  return {
    ...state,
    total: total
  };
};

const changeLine = (state, line) => {
  const id = line.id;
  //copy lines array
  const lines = state.lines.slice();
  let ind;
  // find index
  lines.find((e, index) => {
    ind = index;
    return e.id === id;
  });
  lines[ind] = line;
  return {
    ...state,
    lines: lines
  };
};

const removeLine = (state, id) => {
  const lines = state.lines.slice();
  let ind;
  lines.find((e, index) => {
    ind = index;
    return e.id === id;
  });
  lines.splice(ind, 1);
  return {
    ...state,
    lines: lines
  };
};

const reducer = (state = initialState, action) => {
  const type = action.type;
  switch (type) {
    case actionType.UPDATE_TOTAL:
      return updateTotal(state);
    case actionType.CHANGE_LINE:
      return changeLine(state, action.line);
    case actionType.REMOVE_LINE:
      return removeLine(state, action.id);
    default:
      return state;
  }
};

export default reducer;
