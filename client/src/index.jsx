import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    console.log(`index.jsx: ${term} was searched`);
    requestUser(term);
    // TODO
    //invoke search - post request to server
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

function requestUser(username) {
  $.ajax({
    method: 'POST',
    url: 'http://127.0.0.1:1128/repos/import',
    data: username,
    success: function(data) {
      console.log('posted data: ', data);
    },
    error: function() {
      console.log('post failed');
    }
  });
};
    // dataType: 'plain/text'