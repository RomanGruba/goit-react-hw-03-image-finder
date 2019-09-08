import React, { Component } from 'react';
import styles from './App.module.css';
import SearchForm from './SearchForm/SearchForm';
import * as API from '../services/API';
import Gallery from './Gallery/Gallery';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export default class App extends Component {
  state = {
    imagesArr: [],
    query: '',
    page: 1,
    isLoading: false,
  };

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
    this.setState({ isLoading: true });
    API.fetchImages(this.state.query, 1).then(res => {
      this.setState({ imagesArr: res.data.hits, page: 1, isLoading: false });
    });
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
    const { imagesArr, query, isLoading } = this.state;
    return (
      <div className={styles.app} ref={this.ulRef}>
        <SearchForm
          value={query}
          onSubmit={this.handleNewQuerySubmit}
          onChange={this.handleOnChange}
        />
        {isLoading ? (
          <Loader
            style={{ margin: '0 auto', fill: 'green' }}
            type="Circles"
            color="#somecolor"
            height={80}
            width={80}
          />
        ) : (
          <Gallery items={imagesArr} />
        )}

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
