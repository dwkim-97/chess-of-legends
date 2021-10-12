import { Map } from 'immutable'; // immutable한 자료구조를 위한 라이브러리
import { handleActions, createAction } from 'redux-actions';

// Ducks 구조

const SET_HEADER_VISIBILITY = 'base/SET_HEADER_VISIBILITY'; // if header render

export const setHeaderVisibility = createAction(SET_HEADER_VISIBILITY); // visible

const initialState = Map({
    header: Map({
        visibile: true
    })
});

export default handleActions({
    [SET_HEADER_VISIBILITY]: (state, action) => state.setIn(['header', 'visible'], action.payload)
}, initialState);

