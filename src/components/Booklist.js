import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Allstyle.css";
import { list } from "../services/book.service";
import nobooks from "./nobooks.jpg";
class Booklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booklist: list,
      filterData: list,
      showDetailsList: true,
      showDetailsGrid: false,
      text1: false,
      text2: false,
      text3: false,
      text4: false,
      text5: false,
      text6: false,
      typedData: ""
    };
    this.setState({
      filterData: list
    });
  }
  changeText1 = () => {
    const { text1 } = this.state;
    this.setState({
      text1: !text1
    });
    if (text1 === true) {
      this.sortByBookNameAsc();
    } else {
      this.sortByBookNameDesc();
    }
  };
  changeText2 = () => {
    const { text2 } = this.state;
    this.setState({
      text2: !text2
    });
    if (text2 === true) {
      this.sortByIdAsc();
    }
    if (text2 === false) {
      this.sortByIdDesc();
    }
  };
  changeText3 = () => {
    const { text3 } = this.state;
    this.setState({
      text3: !text3
    });
    if (text3 === true) {
      this.sortByAuthorAsc();
    } else {
      this.sortByAuthorDesc();
    }
  };
  changeText4 = () => {
    const { text4 } = this.state;
    this.setState({
      text4: !text4
    });
    if (text4 === true) {
      this.sortByPriceAsc();
    } else {
      this.sortByPriceDesc();
    }
  };
  changeText5 = () => {
    const { text5 } = this.state;
    this.setState({
      text5: !text5
    });
    if (text5 === true) {
      this.sortByEmailAsc();
    } else {
      this.sortByEmailDesc();
    }
  };
  changeText6 = () => {
    const { text6 } = this.state;
    this.setState({
      text6: !text6
    });
    if (text6 === true) {
      this.sortBySalePriceAsc();
    } else {
      this.sortBySalePriceDesc();
    }
  };
  sortByIdAsc = () => {
    this.setState(() => {
      this.state.filterData.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    });
    console.log("ascending");
  };
  sortByIdDesc = () => {
    this.setState(() => {
      this.state.filterData
        .sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
        .reverse();
    });
    console.log("desceding");
  };
  sortByPriceAsc = () => {
    this.setState(() => {
      this.state.filterData.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    });
    console.log("ascending");
  };
  sortByPriceDesc = () => {
    this.setState(() => {
      this.state.filterData
        .sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
        .reverse();
    });
    console.log("desceding");
  };
  sortBySalePriceAsc = () => {
    this.setState(() => {
      this.state.filterData.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    });
    console.log("ascending");
  };
  sortBySalePriceDesc = () => {
    this.setState(() => {
      this.state.filterData
        .sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
        .reverse();
    });
    console.log("desceding");
  };
  sortByBookNameAsc = () => {
    this.setState(() => {
      this.state.filterData.sort((a, b) => {
        if (a.bookname < b.bookname) {
          return -1;
        }
        if (a.bookname > b.bookname) {
          return 1;
        }
        return 0;
      });
    });
  };
  sortByBookNameDesc = () => {
    this.setState(() => {
      this.state.filterData.sort((a, b) => {
        if (a.bookname > b.bookname) {
          return -1;
        }
        if (a.bookname < b.bookname) {
          return 1;
        }
        return 0;
      });
    });
  };
  sortByEmailAsc = () => {
    this.setState(() => {
      this.state.filterData.sort((a, b) => {
        if (a.email < b.email) {
          return -1;
        }
        if (a.email > b.email) {
          return 1;
        }
        return 0;
      });
    });
  };
  sortByEmailDesc = () => {
    this.setState(() => {
      this.state.filterData.sort((a, b) => {
        if (a.email > b.email) {
          return -1;
        }
        if (a.email < b.email) {
          return 1;
        }
        return 0;
      });
    });
  };
  sortByAuthorAsc = () => {
    this.setState(() => {
      this.state.filterData.sort((a, b) => {
        if (a.author < b.author) {
          return -1;
        }
        if (a.author > b.author) {
          return 1;
        }
        return 0;
      });
    });
  };
  sortByAuthorDesc = () => {
    this.setState(() => {
      this.state.filterData.sort((a, b) => {
        if (a.author > b.author) {
          return -1;
        }
        if (a.author < b.author) {
          return 1;
        }
        return 0;
      });
    });
  };
  handleChange = event => {
    let { showDetailsGrid, showDetailsList } = this.state;
    if (event.target.value === "grid") {
      this.setState({ showDetailsGrid: !showDetailsGrid });
      this.setState({ showDetailsList: !showDetailsList });
    }
    if (event.target.value === "list") {
      this.setState({ showDetailsGrid: !showDetailsGrid });
      this.setState({ showDetailsList: !showDetailsList });
    }
  };

  handleSearchInputChange = e => {
    this.setState({ typedData: e.target.value }, () => {
      this.getInput();
    });
    // console.log([e.target.value]);
  };
  getInput = () => {
    let newDetails = [...this.state.booklist];
    // let { booklist } = this.state;
    let filterData = newDetails.filter(book => {
      console.log(book.id);
      console.log(newDetails);
      return (
        book.bookname
          .toLowerCase()
          .indexOf(this.state.typedData.toLowerCase()) !== -1 ||
        book.id.toLowerCase().indexOf(this.state.typedData.toLowerCase()) !==
          -1 ||
        book.price.toString().indexOf(this.state.typedData.toLowerCase()) !==
          -1 ||
        book.saleprice
          .toString()
          .indexOf(this.state.typedData.toLowerCase()) !== -1 ||
        book.email.toLowerCase().indexOf(this.state.typedData.toLowerCase()) !==
          -1 ||
        book.author
          .toLowerCase()
          .indexOf(this.state.typedData.toLowerCase()) !== -1
      );
    });
    if (filterData.length === 0) {
      console.log("no data found");
      window.confirm("No Such Data Found");
    } else {
      this.setState({
        filterData: filterData
      });
    }
    console.log(`Filtered Data ---->${filterData.length}`);
  };
  deleteBook = book => {
    let { filterData } = this.state;
    this.setState({ filterData: filterData.filter(item => item !== book) });
  };

  render() {
    if (this.state.filterData.length === 0) {
      return (
        <div className="text-center">
          <p className="no-books">OOPS!! No Books Found</p>
          <img style={{ width: 500 }} src={nobooks} alt={"nobooks"} />
        </div>
      );
    }
    let { showDetailsGrid, showDetailsList, filterData } = this.state;
    return (
      <div>
        <p className="title"> BOOK STORE </p>
        <div className="search">
          <input
            className="search-input-field"
            name={this.state.typedData}
            onChange={e => this.handleSearchInputChange(e)}
            placeholder="Search Here"
          />
        </div>
        <div className="text-center mb-5">
          <select
            className="view-dropdown"
            onChange={event => this.handleChange(event)}
          >
            <option value="list">List View</option>
            <option value="grid">Grid View</option>
          </select>
          <Link
            to="/books/new"
            className="btn btn-primary rounded-circle float-right"
          >
            <i className="fa fa-plus" aria-hidden="true" />
          </Link>
        </div>
        {showDetailsList && (
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>
                  Bookname <span />
                  <Button
                    outline
                    color="primary"
                    type="button"
                    onClick={e => this.changeText1(e)}
                  >
                    {this.state.text1 ? "▲" : "▼"}
                  </Button>
                </th>
                <th>
                  Price <span />
                  <Button
                    outline
                    color="warning"
                    type="button"
                    onClick={e => this.changeText4(e)}
                  >
                    {this.state.text4 ? "▲" : "▼"}
                  </Button>
                </th>
                <th>
                  Sale Price <span />
                  <Button
                    outline
                    color="secondary"
                    type="button"
                    onClick={e => this.changeText6(e)}
                  >
                    {this.state.text6 ? "▲" : "▼"}
                  </Button>
                </th>
                <th>
                  Id <span />
                  <Button
                    outline
                    color="success"
                    type="button"
                    onClick={e => this.changeText2(e)}
                  >
                    {this.state.text2 ? "▲" : "▼"}
                  </Button>
                </th>
                <th>
                  Author <span />
                  <Button
                    outline
                    color="info"
                    type="button"
                    onClick={e => this.changeText3(e)}
                  >
                    {this.state.text3 ? "▲" : "▼"}
                  </Button>
                </th>
                <th>
                  Mail Id <span />
                  <Button
                    outline
                    color="danger"
                    type="button"
                    onClick={e => this.changeText5(e)}
                  >
                    {this.state.text5 ? "▲" : "▼"}
                  </Button>
                </th>
                <th> Edit </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              {filterData.map(book => {
                return (
                  <tr key={book.id}>
                    <td> {book.bookname}</td>
                    <td> {book.price} </td>
                    <td> {book.saleprice} </td>
                    <td> {book.id}</td>
                    <td> {book.author}</td>
                    <td> {book.email}</td>
                    <td>
                      <Link to={`/books/${book.id}/edit`}>
                        <i className="text-primary fas fa-edit icon-color" />
                      </Link>
                    </td>
                    <td>
                      <i
                        onClick={() => this.deleteBook(book)}
                        className="text-danger far fa-trash-alt"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {
          <div className="container">
            <div className="row">
              {showDetailsGrid &&
                filterData.map(book => {
                  return (
                    <div className="col-md-4 bg-info font-weight-bold grid-layout border">
                      <div key={book.id}>
                        <p>Book Name: {book.bookname} </p>
                        <hr />
                        <p>Price: {book.price}</p>
                        <hr />
                        <p>Sale Price: {book.saleprice}</p>
                        <hr />
                        <p>ID: {book.id} </p>
                        <hr />
                        <p>Author: {book.author} </p>
                        <hr />
                        <p>Email Id: {book.email} </p>
                        <hr />
                        <p>
                          Edit:
                          <Link to={`/books/${book.id}/edit`}>
                            <i className="text-black fas fa-edit icon-color" />
                          </Link>
                        </p>{" "}
                        <hr />
                        <p>
                          Delete:
                          <i
                            onClick={() => this.deleteBook(book)}
                            className="text-danger far fa-trash-alt"
                          />
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        }
      </div>
    );
  }
}
export default Booklist;
