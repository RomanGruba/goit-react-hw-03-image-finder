import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import * as API from '../services/API';
import Gallery from './Gallery/Gallery';

export default class App extends Component {
  state = {
    imagesArr: [],
    query: '',
  };

  // receiveImages = query => {
  //   API.fetchImages(query).then(res =>
  //     this.setState({ imagesArr: res.data.hits }),
  //   );
  // };

  handleSubmit = query => {
    API.fetchImages(query).then(res =>
      this.setState({ imagesArr: res.data.hits }),
    );
  };

  render() {
    const { imagesArr } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        <Gallery items={imagesArr} />
      </>
    );
  }
}
