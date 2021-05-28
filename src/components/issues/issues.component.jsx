/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from 'react';
import './issues.style.sass';
import _ from 'lodash';
import issue5 from '../../assets/backstagetalks_cover_issue_5.webp';
import issue4 from '../../assets/backstagetalks_cover_issue_4.webp';
import issue3 from '../../assets/backstagetalks_cover_issue_3.webp';
import issue2 from '../../assets/backstagetalks_cover2017.webp';
import issue1 from '../../assets/backstagetalks_cover2016_n.webp';
// eslint-disable-next-line no-unused-vars
const issuesReducer = (title, imgUrl, num, ref) => (
  <div className={`issue issue${num}`} ref={ref}>
    <img width="423" height="536" src={imgUrl} alt="Issue" />
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

const Issues = ({ setScrollCount }) => {
  const issue5Ref = useRef();
  const issue4Ref = useRef();
  const issue3Ref = useRef();
  const issue2Ref = useRef();
  const issue1Ref = useRef();

  const isScrolledIntoView = (el, isNeed) => {
    const elc = el.current || el;
    const rect = elc.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    // 355

    if (isNeed) {
      // elemBottom, elc.clientHeight);
      return (elemBottom >= 351 && elemBottom <= elc.clientHeight);
    }
    return (elemTop <= 350 && elemTop >= -20);
  };

  const changeIssueBackground = () => {
    switch (true) {
      case isScrolledIntoView(issue5Ref):
        document.body.style.background = '#00c1b5';
        setScrollCount(5);
        break;
      case isScrolledIntoView(issue4Ref):
        document.body.style.background = '#ff651a';
        setScrollCount(4);
        break;
      case isScrolledIntoView(issue3Ref):
        document.body.style.background = ' #ffbe00';
        // document.body.style.background = '#1d3fbb';
        setScrollCount(3);
        break;
      case isScrolledIntoView(issue2Ref):
        document.body.style.background = '#1d3fbb';
        // document.body.style.background = '#e30512';
        setScrollCount(2);
        break;
      case isScrolledIntoView(issue1Ref):
        document.body.style.background = '#e30512';
        setScrollCount(1);
        break;
      case isScrolledIntoView(document.querySelector('.info')):
        document.body.style.background = '#e30512';
        setScrollCount(1);
        break;
      default:
        break;
    }

    switch (true) {
      case isScrolledIntoView(issue5Ref, true):
        document.body.style.background = '#00c1b5';
        break;
      case isScrolledIntoView(issue4Ref, true):
        document.body.style.background = '#ff651a';
        break;
      case isScrolledIntoView(issue3Ref, true):
        document.body.style.background = ' #ffbe00';
        break;
      case isScrolledIntoView(issue2Ref, true):
        document.body.style.background = '#1d3fbb';
        break;
      case isScrolledIntoView(issue1Ref, true):
        document.body.style.background = '#e30512';
        break;
      case isScrolledIntoView(document.querySelector('.info'), true):
        document.body.style.background = '#e30512';
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', _.debounce(() => {
      changeIssueBackground();
    }, 50));
  }, []);

  // useEffect(() => {
  // }, [scrollCount]);

  return (
    <div className="issues-container">
      {issuesReducer('Issue #5', issue5, 5, issue5Ref)}
      {issuesReducer('Issue #4', issue4, 4, issue4Ref)}
      {issuesReducer('Issue #3', issue3, 3, issue3Ref)}
      {issuesReducer('Issue #2', issue2, 2, issue2Ref)}
      {issuesReducer('Issue #1', issue1, 1, issue1Ref)}
    </div>
  );
};

export default Issues;
