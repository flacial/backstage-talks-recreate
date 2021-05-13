/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './issues.style.sass';
import issue5 from '../../assets/backstagetalks_cover_issue_5.png';
import issue4 from '../../assets/backstagetalks_cover_issue_4.png';
import issue3 from '../../assets/backstagetalks_cover_issue_3.png';
import issue2 from '../../assets/backstagetalks_cover2017.png';
import issue1 from '../../assets/backstagetalks_cover2016_n.png';

// eslint-disable-next-line no-unused-vars
const issuesReducer = (title, imgUrl, num) => (
  <div className="issue" id={`issue${num}`}>
    <img src={imgUrl} alt="Issue" />
    <ul className="issue-detail">
      <li>
        { title }
      </li>
      <li>
        <a href="#">
          BUY HERE
        </a>
      </li>
      <li>
        <p>
          or in
          {' '}
          <a href="#">selected stores</a>
        </p>
      </li>
    </ul>
  </div>
);

const Issues = () => (
  <div className="issues-container">
    {issuesReducer('Issue #5', issue5, 5)}
    {issuesReducer('Issue #4', issue4, 4)}
    {issuesReducer('Issue #3', issue3, 3)}
    {issuesReducer('Issue #2', issue2, 2)}
    {issuesReducer('Issue #1', issue1, 1)}
  </div>
);

export default Issues;
