/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from 'react';
import './issues.style.sass';
import _ from 'lodash';
import issue5 from '../../assets/backstagetalks_cover_issue_5.png';
import issue4 from '../../assets/backstagetalks_cover_issue_4.png';
import issue3 from '../../assets/backstagetalks_cover_issue_3.png';
import issue2 from '../../assets/backstagetalks_cover2017.png';
import issue1 from '../../assets/backstagetalks_cover2016_n.png';
// eslint-disable-next-line no-unused-vars
const issuesReducer = (title, imgUrl, num, ref) => (
  <div className={`issue issue${num}`} ref={ref}>
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

const isScrolledIntoView = (el, firstValue, secondValue, isNeed) => {
  const elc = el.current;
  console.log(elc);
  const rect = elc.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;
  console.log(`Top: ${elemTop}`, `Bottom: ${elemBottom}`, `Window: ${window.innerHeight}`);

  // 355

  if (isNeed) {
    return elemTop < window.innerHeight
    && elemBottom >= 0 && elemTop <= -220 && elemTop >= -270;
  }
  return (elemTop <= 350 && elemTop >= -20);
};

const Issues = ({ scrollCount, setScrollCount }) => {
  const issue5Ref = useRef();
  const issue4Ref = useRef();
  const issue3Ref = useRef();
  const issue2Ref = useRef();
  const issue1Ref = useRef();

  const changeIssueBackground = () => {
    switch (true) {
      case isScrolledIntoView(issue5Ref, 290, 360):
        document.body.style.background = '#00c1b5';
        // document.body.style.background = '#ff651a';
        setScrollCount(5);
        console.log('worked 5');
        break;
      case isScrolledIntoView(issue4Ref, 290, 360):
        document.body.style.background = '#ff651a';
        // document.body.style.background = ' #ffbe00';
        setScrollCount(4);
        console.log('worked 4');
        break;
      case isScrolledIntoView(issue3Ref, 290, 360):
        document.body.style.background = ' #ffbe00';
        // document.body.style.background = '#1d3fbb';
        setScrollCount(3);
        console.log('worked 3');
        break;
      case isScrolledIntoView(issue2Ref, 290, 360):
        document.body.style.background = '#1d3fbb';
        // document.body.style.background = '#e30512';
        setScrollCount(2);
        console.log('worked 2');
        break;
      case isScrolledIntoView(issue1Ref, 290, 360):
        document.body.style.background = '#e30512';
        setScrollCount(1);
        console.log('worked 1');
        break;
      default:
        console.log('Nothing');
        break;
    }

    // switch (true) {
    //   case isScrolledIntoView(issue5Ref, 900, 930, true):
    //     document.body.style.background = '#00c1b5';
    //     console.log('worked 5 2');
    //     break;
    //   // case isScrolledIntoView(issue4Ref, 900, 930, true):
    //   //   document.body.style.background = '#ff651a';
    //   //   console.log('worked 4 2');
    //   //   break;
    //   // case isScrolledIntoView(issue3Ref, 900, 930, true):
    //   //   document.body.style.background = ' #ffbe00';
    //   //   console.log('worked 3 2');
    //   //   break;
    //   // case isScrolledIntoView(issue2Ref, 900, 930, true):
    //   //   document.body.style.background = '#1d3fbb';
    //   //   console.log('worked 2 2');
    //   //   break;
    //   // case isScrolledIntoView(issue1Ref, 900, 930, true):
    //   //   document.body.style.background = '#e30512';
    //   //   console.log('worked 1 2');
    //   //   break;
    //   default:
    //     console.log('Nothing');
    //     break;
    // }
  };

  useEffect(() => {
    document.addEventListener('scroll', _.debounce(() => {
      changeIssueBackground();
    }, 200));
  }, []);

  useEffect(() => {
    console.log(scrollCount);
  }, [scrollCount]);

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