import React, { Component } from 'react';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    query: '',
  };

  componentDidMount() {
    this.props.onSubmit('spring');
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({
      query: '',
    });
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    const { query } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          value={query}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
