import { BANKINFO_REQUEST_PENDING, BANKINFO_REQUEST_SUCCESS, BANKINFO_REQUEST_FAILED,
    CHANGE_SEARCHFIELD, CHANGE_CITY, CHANGE_CATEGORY, CHANGE_CURRENT_PAGE, CHANGE_RESULTS_PER_PAGE } from './constants';

const initialStateBankInfo = {
    isPending: false,
    error: '',
    data: []
}
export const requestBankInfo = (state=initialStateBankInfo, action={}) => {
    switch(action.type){
        case BANKINFO_REQUEST_PENDING:
            return Object.assign({}, state, { isPending: true });
        case BANKINFO_REQUEST_SUCCESS:
            return Object.assign({}, state, { isPending: false, data: action.payload });
        case BANKINFO_REQUEST_FAILED:
            return Object.assign({}, state, { isPending: false, error: action.payload });
        default: 
            return state;
    }
}

const initialStateSearch = {
    search: ''
}
export const searchBank = (state=initialStateSearch, action={}) => {
    switch(action.type){
      case CHANGE_SEARCHFIELD:
        return Object.assign({}, state, { search: action.payload });
      default:
        return state;
    }
}

const initialStateCity = {
    city: ''
}
export const changeCity = (state=initialStateCity, action={}) => {
    switch(action.type){
      case CHANGE_CITY:
        return Object.assign({}, state, { city: action.payload });
      default:
        return state;
    }
}

const initialStateCategory = {
    category: 'BankName'
}
export const changeCategory = (state=initialStateCategory, action={}) => {
    switch(action.type){
      case CHANGE_CATEGORY:
        return Object.assign({}, state, { category: action.payload });
      default:
        return state;
    }
}

const initialStateCurrentPage = {
    currentPage: 1
}
export const changeCurrentPage = (state=initialStateCurrentPage, action={}) => {
    switch(action.type){
      case CHANGE_CURRENT_PAGE:
        return Object.assign({}, state, { currentPage: action.payload });
      default:
        return state;
    }
}

const initialStatePageSize = {
    pageSize: 10
}
export const changePageSize = (state=initialStatePageSize, action={}) => {
    switch(action.type){
      case CHANGE_RESULTS_PER_PAGE:
        return Object.assign({}, state, { pageSize: action.payload });
      default:
        return state;
    }
}