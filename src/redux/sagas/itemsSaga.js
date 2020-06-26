import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItems(){
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };
      const response = yield axios.get('/api/item', config);
      yield put({ 
          type: 'SET_ITEMS',
          payload: response.data})
    } catch (error) {
        console.log('Item GET in itemSaga.js failed', error);    
    }
}

function* itemsSaga() {
    yield takeLatest('FETCH_ITEMS', fetchItems)
}

export default itemsSaga;