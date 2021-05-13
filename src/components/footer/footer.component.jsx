/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from 'react';

import './footer.style.sass';
import _ from 'lodash';

const Footer = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentIssue, setCurrentIssue] = useState(0);
  const [scrollCount, setScrollCount] = useState(5);
  const [deltaY, setDeltaY] = useState(null);

  const bm1 = useRef(null);
  const bm2 = useRef(null);
  const bm3 = useRef(null);
  const bm4 = useRef(null);
  const bm5 = useRef(null);

  const bookmarkHandler = (value) => {
    setCurrentIssue(value);
    setScrollCount(value);
    console.log('bookmarkHandler: 23');
  };

  const wheelHandler = (e) => {
    setDeltaY(e.deltaY);
    setScrollCount((prevState) => {
      if (e.deltaY > 0) {
        if (prevState !== 1 && prevState > 0) {
          return prevState - 1;
        }
        return 1;
      }

      if (e.deltaY < 0) {
        if (prevState !== 5 && prevState < 5) {
          return prevState + 1;
        }
        return 5;
      }

      return undefined;
    });
  };

  useEffect(() => {
    window.addEventListener('wheel', _.debounce(wheelHandler, 200));
  }, []);

  const translateHandler = (value) => {
    console.log('Translate value: ', value);
    const issue = document.querySelector(`#issue${value}`);
    const issuesContainer = document.querySelector('.issues-container');
    // if (scrollCount > 0) {
    //   console.log('Down');
    //   issuesContainer.style.transform =
    // `translate3d(0, -${issue.clientHeight - issue.clientHeight}px, 0)`;
    // }
    console.log(deltaY);
    if (deltaY > 0) {
      issuesContainer.style.transform = `translate3d(0, -${issue.clientHeight * (value - (value - 1))}px, 0)`;
      console.log(issue.clientHeight * (value - (value - 1)), issue.clientHeight, value);
      // if (scrollCount === 4) {
      // } else {
      //   if (scrollCount !== 1 && scrollCount > 0) {
      //     issuesContainer.style.transform =
      // `translate3d(0, -${issue.clientHeight * value}px, 0)`;
      //     console.log('Down');
      //     console.log(issue.clientHeight * value);
      //     return;
      //   }
      //   return;
      // }
      // return;
    }

    if (deltaY < 0) {
      if (scrollCount !== 5 && scrollCount < 5) {
        issuesContainer.style.transform = `translate3d(0, -${issue.clientHeight - issue.clientHeight}px, 0)`;
        console.log('Up');
      }
    }
  };

  useEffect(() => {
    switch (scrollCount) {
      case 4:
        console.log('issue 4 translate');
        // document.body.style.background = '#ff651a';
        // bm4.current.click();
        translateHandler(4);
        break;
      case 3:
        // document.body.style.background = ' #ffbe00';
        // bm3.current.click();
        translateHandler(3);
        break;
      case 2:
        // document.body.style.background = '#1d3fbb';
        // bm2.current.click();
        translateHandler(2);
        break;
      case 1:
        // document.body.style.background = '#e30512';
        // bm1.current.click();
        translateHandler(1);
        break;
      default:
        // document.body.style.background = '#00c1b5';
        // bm5.current.click();
        translateHandler(5);
        break;
    }
    console.log(scrollCount);
  }, [scrollCount]);

  useEffect(() => {
    switch (currentIssue) {
      case 4:
        document.body.style.background = '#ff651a';
        break;
      case 3:
        document.body.style.background = ' #ffbe00';
        break;
      case 2:
        document.body.style.background = '#1d3fbb';
        break;
      case 1:
        document.body.style.background = '#e30512';
        break;
      default:
        document.body.style.background = '#00c1b5';
        break;
    }
  }, [currentIssue]);

  return (
    <footer>
      <div className="l-footer-content">
        <div className="info">
          Backstage Talks is a magazine
          {' '}
          <br />
          {' '}
          of casual, but in depth dialogues on design
          and business.
          Our decisions shape and influence this complex world—to
          have a chance to make the right ones, we need to talk.
        </div>
        <p className="credits">
          © 2021
          {' '}
          <a href="#">Published by studio Milk</a>
        </p>
        <a href="#" className="policy">
          Privacy Policy
        </a>
      </div>
      <ul className="bookmarks">
        <li>
          <a href="#issue5" ref={bm5} onClick={() => { document.querySelector('.issues-container').style.transform = 'translate3d(0, 0, 0)'; bookmarkHandler(5); }}>
            Issue #5
          </a>
        </li>
        <li>
          <a href="#issue4" ref={bm4} onClick={() => bookmarkHandler(4)}>
            Issue #4
          </a>
        </li>
        <li>
          <a href="#issue3" ref={bm3} onClick={() => bookmarkHandler(3)}>
            Issue #3
          </a>
        </li>
        <li>
          <a href="#issue2" ref={bm2} onClick={() => bookmarkHandler(2)}>
            Issue #2
          </a>
        </li>
        <li>
          <a href="#issue1" ref={bm1} onClick={() => bookmarkHandler(1)}>
            Issue #1
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
