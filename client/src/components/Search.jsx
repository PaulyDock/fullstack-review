import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange(e) {
    //console.log('onChange occurred, current this.state: ', this.state);
    this.setState({
      term: e.target.value
    });
    // console.log('onChange, state of term: ', this.state);
  }

  search() {
    // console.log('Search.jsx: search invoked');
    this.props.onSearch(this.state.term);
    //this.state.repos =
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.onChange.bind(this)}/>       
      <button onClick={this.search.bind(this)}> Add Repos </button>
    </div>) 
  }
}

export default Search;