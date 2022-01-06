import React, { Component } from "react";

import axios from "axios";
import Pagination from "react-js-pagination";

import "./style1.scss";

class Page extends Component {
  state = {
    data: [],
    activePage: 1
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
      .then(res => {
        this.setState({
          data: res.data
        });
      });
  }
  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=20`
      )
      .then(res => {
        this.setState({
          data: res.data
        });
      });
    this.setState({ activePage: pageNumber });
  };
  render() {
    const allData = this.state.data.map(item => {
      return <li key={item.id}>{item.title}</li>;
    });
    return (
      <div>
        
<section class="mvBack">
  <div class="mvWrap">
    <div class="mv">
        <p>See Here More Blogs</p>
        <ul className="list1">
          <li>{allData}</li>
          </ul>
        <Pagination
          totalItemsCount={450}
          onChange={this.handlePageChange}
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          pageRangeDisplayed={5}
        />
      </div>
      </div></section>
      </div>
    );
  }
}
export default Page;

