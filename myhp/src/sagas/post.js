
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { 
    CONSULT_FAILURE, CONSULT_REQUEST, CONSULT_SUCCESS, 
    FINDALL_CONSULT_FAILURE, FINDALL_CONSULT_REQUEST, FINDALL_CONSULT_SUCCESS 
} from '@/reducer/post';


function consultAPI(data){
    return axios.post('/admin/consult', data);
}

function* consult(action) {
    const result = yield call(consultAPI, action.data);
    try {
        yield put({
            type:CONSULT_SUCCESS,
            data: result.data,
        })
    } catch (err) {
        console.error(err);
        yield put({
            type:CONSULT_FAILURE,
            error:err.response.data,
        })
    }
}

function findAllConsultAPI(){
    return axios.get('/admin/consult');
}

function* findAllConsult() {
    const result = yield call(findAllConsultAPI);
    try {
        yield put({
            type: FINDALL_CONSULT_SUCCESS,
            data: result.data,
        })
    } catch (err) {
        console.error(err);
        yield put({
            type: FINDALL_CONSULT_FAILURE,
            error:err.response.data,
        })
    }
}

function* watchConsult() {
    yield takeLatest(CONSULT_REQUEST, consult);
}

function* watchFindAllConsult() {
    yield takeLatest(FINDALL_CONSULT_REQUEST, findAllConsult);
}

function* postSaga() {
    yield all([
        fork(watchConsult),
        fork(watchFindAllConsult)
    ]);
}

export default postSaga;