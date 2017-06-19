import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoListEntry from './components/RepoListEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    };
    fetchRepos.call(this);

  }

  search(term) {
    // console.log(`index.jsx: ${term} was searched`);
    requestUser.call(this, term);
    fetchRepos.call(this);

  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

function requestUser(username) {
  let that = this;
  $.ajax({
    method: 'POST',
    url: 'http://127.0.0.1:1128/repos/import',
    data: username,
    success: function(data) {
      console.log('posted data: ', data);
      console.log('this.state', that.state);
      // that.state.repos = data;
    },
    error: function() {
      console.log('post failed');
    }
  });
};

function fetchRepos() {
  let that = this;
  $.ajax({
    method: 'GET',
    url: 'http://127.0.0.1:1128/repos',
    //data: username,
    success: function(data) {
      console.log('retrieved data: ', data[0]);
      that.setState({
        repos: data
      });
      console.log('this.state', that.state);
    },
    error: function() {
      console.log('post failed');
    }
  });
};
    // dataType: 'plain/text'