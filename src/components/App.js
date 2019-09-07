import React, { Component } from 'react';
import styles from './App.module.css';
import SearchForm from './SearchForm/SearchForm';
import * as API from '../services/API';
import Gallery from './Gallery/Gallery';

export default class App extends Component {
  state = {
    imagesArr: [],
    query: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imagesArr !== this.state.imagesArr) {
      const scrollHeight = window.offsetTop + window.clientHeight;
      console.log(window.offsetTop);
      console.log(window.clientHeight);
      console.log(scrollHeight);
      // window.scrollTo(0, scrollHeight);
    }
  }

  handleOnChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (query, page) => {
    API.fetchImages(query, page).then(res =>
      this.setState(prevState => ({
        imagesArr: [...prevState.imagesArr, ...res.data.hits],
      })),
    );
  };

  handleNewQuerySubmit = e => {
    e.preventDefault();
    API.fetchImages(this.state.query, 1).then(res =>
      this.setState({ imagesArr: res.data.hits, page: 1 }),
    );
  };

  loadMoreItems = e => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => this.handleSubmit(this.state.query, this.state.page),
    );
  };

  render() {
    const { imagesArr, query } = this.state;
    return (
      <div className={styles.app}>
        <SearchForm
          value={query}
          onSubmit={this.handleNewQuerySubmit}
          onChange={this.handleOnChange}
        />
        <Gallery items={imagesArr} />
        {imagesArr.length > 11 ? (
          <button
            type="button"
            className={styles.loadMore}
            onClick={this.loadMoreItems}
          >
            Load more
          </button>
        ) : null}
      </div>
    );
  }
}
