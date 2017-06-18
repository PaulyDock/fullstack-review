import React from 'react';

const RepoList = (props) => (
  <div>
    <RepoListEntry repos='repos'/>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;