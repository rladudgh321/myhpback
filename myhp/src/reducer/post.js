import { produce } from "immer";

const initialState = {
    consultBox: [],
    consultLoading:false,
    consultDone:false,
    consultError:null,
    findallConsultLoading:false,
    findallConsultDone:false,
    findallConsultError:null,
}

export const dummyConsult = (data) => ({
    name: data.name,
    contact: data.contact,
    consult: data.consult,
    text: data.text,
});

export const CONSULT_REQUEST = 'CONSULT_REQUEST';
export const CONSULT_SUCCESS = 'CONSULT_SUCCESS';
export const CONSULT_FAILURE = 'CONSULT_FAILURE';
export const FINDALL_CONSULT_REQUEST = 'FINDALL_CONSULT_REQUEST';
export const FINDALL_CONSULT_SUCCESS = 'FINDALL_CONSULT_SUCCESS';
export const FINDALL_CONSULT_FAILURE = 'FINDALL_CONSULT_FAILURE';


const postReducer = (state=initialState,action) => produce(state, (draft=> {
    switch(action.type){
        case CONSULT_REQUEST :
            draft.consultLoading = true;
            draft.consultDone = false;
            draft.consultError = null;
            break;
        case CONSULT_SUCCESS :
            draft.consultLoading = false;
            draft.consultDone = true;
            draft.consultBox.unshift(dummyConsult(action.data));
            break;
        case CONSULT_FAILURE :
            draft.consultLoading = false;
            draft.consultError = action.error;
            break;
        case FINDALL_CONSULT_REQUEST :
            draft.consultLoading = true;
            draft.consultDone = false;
            draft.consultError = null;
            break;
        case FINDALL_CONSULT_SUCCESS :
            draft.consultLoading = false;
            draft.consultDone = true;
            draft.consultBox = action.data;
            break;
        case FINDALL_CONSULT_FAILURE :
            draft.consultLoading = false;
            draft.consultError = action.error;
            break;

        default :
            break;
    }
}));

export default postReducer;