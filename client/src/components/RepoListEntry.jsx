import React from 'react';

const RepoListEntry = (props) => (
  <div>
    <ul>
    <li><h4>{props.repo.name}</h4></li>
    </ul>
  </div>
)

export default RepoListEntry;