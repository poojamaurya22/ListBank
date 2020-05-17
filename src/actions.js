import { BANKINFO_REQUEST_PENDING, BANKINFO_REQUEST_SUCCESS, BANKINFO_REQUEST_FAILED, URL,
    CHANGE_SEARCHFIELD, CHANGE_CITY, CHANGE_CATEGORY, CHANGE_CURRENT_PAGE, CHANGE_RESULTS_PER_PAGE } from './constants';

export const requestBankInfo = () => (dispatch) => {
    dispatch({ type: BANKINFO_REQUEST_PENDING });
    fetch(URL)
        .then(res => res.json())
        .then(data => dispatch({ type: BANKINFO_REQUEST_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: BANKINFO_REQUEST_FAILED, payload: error }))
}

export const searchBank = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const changeCity = (text) => ({ type: CHANGE_CITY, payload: text })

export const changeCategory = (text) => ({ type: CHANGE_CATEGORY, payload: text })

export const changeCurrentPage = (text) => ({ type: CHANGE_CURRENT_PAGE, payload: text })

export const changePageSize = (text) => ({ type: CHANGE_RESULTS_PER_PAGE, payload: text })