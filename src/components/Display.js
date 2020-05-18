import React from 'react';
import '../index.css';

function Display({bankdetails, searchChange, cityChange, categoryChange, cityValue, categoryValue, resultSize, currentPage, pageSize, changePage, changePageSize }){
    const lastIndex = currentPage * pageSize;
    const firstIndex = lastIndex - pageSize + 1;
    const lastPage = (resultSize%pageSize===0)?(resultSize/pageSize):(resultSize/pageSize)+1;

    return (
        <div className="content-wrap">
            <div className="d-flex justify-content-between main">
                <div className="w-50"><h4>Banks</h4></div>
                {/* dropdown - city */}
                <div className="dropdown-city">
                    <select value={cityValue.length===0?"Select City":cityValue} onChange={cityChange}>
                        <option value="">Select City</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                    </select>
                </div> 
                {/* dropdown - category */}
                <div className="dropdown-cat">
                    <select value={categoryValue.length===0?"Select Category":categoryValue} onChange={categoryChange}>
                        <option value="">Select Category</option>
                        <option value="BankName">Bank Name</option>
                        <option value="Branch">Branch</option>
                        <option value="IFSC">IFSC</option>
                    </select>
                </div>
                {/* search */}
                <div className="input-search">
                    <input type='text' placeholder='&#128269;' onChange={searchChange}/>
                </div>
            </div>
            <div className="details" style={{'overflowX':'auto'}}>
                {/* table listing details */}
                <table className="table table-sm table-hover">
                    <thead className="thead-dark">
                        <tr>
                        <th colSpan="1"></th>
                        <th colSpan="2">Bank</th>
                        <th colSpan="2">IFSC</th>
                        <th colSpan="2">Branch</th>
                        <th colSpan="1">Bank ID</th>
                        <th colSpan="4">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        { bankdetails.map((item) => <tr key={item.ifsc}>
                                <th colSpan="1">&#9734;</th>
                                <td colSpan="2">{item.bank_name}</td>
                                <td colSpan="2">{item.ifsc}</td>
                                <td colSpan="2">{item.branch}</td>
                                <td colSpan="1">{item.bank_id}</td>
                                <td colSpan="4">{item.address}</td>
                            </tr>) }
                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-between w-50 pagination">
                {/* pagination */}
                <div className="row">Rows Per Pages:
                    <div className="ML10">
                        <select value={pageSize} onChange={changePageSize}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </div>
                <div className="row">{firstIndex}-{lastIndex} of {resultSize}
                    <div className="row ML10">
                        <div className="left" onClick={() => (currentPage===1)?changePage(currentPage):changePage(currentPage-1)}>&#10094;</div>
                        <div className="right ML10" onClick={() => (currentPage===lastPage)?changePage(lastPage):changePage(currentPage+1)}>&#10095;</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Display;


