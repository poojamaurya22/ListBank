import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestBankInfo, searchBank, changeCity, changeCategory, changeCurrentPage, changePageSize } from '../actions';
import Display from '../components/Display';

const mapStateToProps = state => {
    return {
        searchValue: state.searchBank.search,
        loading: state.requestBankInfo.isPending,
        error: state.requestBankInfo.error,
        results: state.requestBankInfo.data,
        cityValue: state.changeCity.city,
        categoryValue: state.changeCategory.category,
        currentPage: state.changeCurrentPage.currentPage,
        pageSize: state.changePageSize.pageSize
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onrequestBankInfo: () => dispatch(requestBankInfo()),
        onSearchChange: (event) => dispatch(searchBank(event.target.value)),
        onCityChange: (event) => dispatch(changeCity(event.target.value)),
        onCategoryChange: (event) => dispatch(changeCategory(event.target.value)),
        onChangePage: (value) => dispatch(changeCurrentPage(value)),
        onChangePageSize: (event) => dispatch(changePageSize(event.target.value))
    }
}

class Home extends Component {

    componentDidMount() {
        this.props.onrequestBankInfo();
    }

    render() {
        const { searchValue, loading, results, cityValue, categoryValue, currentPage, pageSize,
            onSearchChange, onCityChange, onCategoryChange, onChangePage, onChangePageSize } = this.props;
        
        const lastIndex = currentPage * pageSize;
        const firstIndex = lastIndex - pageSize;
    
        // filtering data based on dropdown and search change
        const filteredResult = results.filter(result => {
            const filter2 = result.city.toLowerCase().includes(cityValue.toLowerCase());

            if(categoryValue === "BankName"){
                const filter1 = result.bank_name.toLowerCase().includes(searchValue.toLowerCase()); 
                return filter1 && filter2;
            }
            if(categoryValue === "Branch"){
                const filter1 = result.branch.toLowerCase().includes(searchValue.toLowerCase());
                return filter1 && filter2;
            }
            if(categoryValue === "IFSC"){
                const filter1 = result.ifsc.toLowerCase().includes(searchValue.toLowerCase());
                return filter1 && filter2;
            }
            return filter2;
        });

        const resultSize = filteredResult.length;

        // current page data 
        const finalResult = filteredResult.slice(firstIndex, lastIndex);

        return (
            <div className="container">
                {loading ? <div className="text-center MT50">Loading...</div> : 
                    <Display bankdetails={finalResult} searchChange={onSearchChange} cityChange={onCityChange}
                    categoryChange={onCategoryChange} cityValue={cityValue} categoryValue={categoryValue} resultSize={resultSize}
                    currentPage={currentPage} pageSize={pageSize} changePage={onChangePage} changePageSize={onChangePageSize}/>}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);