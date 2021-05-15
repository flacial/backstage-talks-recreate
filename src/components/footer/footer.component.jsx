/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from 'react';

import './footer.style.sass';
import _ from 'lodash';
import { withRouter } from 'react-router';

const Footer = ({ history }) => {
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

  const setHash = (hash) => {
    window.history.pushState('', '', `#issue${hash}`);
  };

  const translateHandler = (value, isLink) => {
    const issue = document.querySelector(`.issue${value}`);
    const issuesContainer = document.querySelector('.issues-container');

    if (isLink) {
      switch (parseInt(value, 10)) {
        case 5:
          issuesContainer.style.transform = `translate3d(0, ${0}px, 0)`;
          console.log(5);
          break;
        case 4:
          issuesContainer.style.transform = `translate3d(0, -${issue.clientHeight}px, 0)`;
          console.log(4);
          break;
        case 3:
          issuesContainer.style.transform = `translate3d(0, -${issue.clientHeight * 2}px, 0)`;
          console.log(3);
          break;
        case 2:
          issuesContainer.style.transform = `translate3d(0, -${issue.clientHeight * 3}px, 0)`;
          console.log(2);
          break;
        case 1:
          issuesContainer.style.transform = `translate3d(0, -${issue.clientHeight * 4}px, 0)`;
          console.log(1);
          break;
        default:
          break;
      }
      return;
    }

    if (deltaY > 0) {
      console.log('Down');
      switch (value) {
        case 4:
          issuesContainer.style.transform = `translate3d(0, -${issue.clientHeight}px, 0)`;
          setHash(4);
          break;
        case 3:
          issuesContainer.style.transform = `translate3d(0, -${issue.clientHeight * 2}px, 0)`;
          setHash(3);
          break;
        case 2:
          issuesContainer.style.transform = `translate3d(0, -${issue.clientHeight * 3}px, 0)`;
          setHash(2);
          break;
        case 1:
          issuesContainer.style.transform = `translate3d(0, -${issue.clientHeight * 4}px, 0)`;
          setHash(1);
          break;
        default:
          break;
      }
    }

    if (deltaY < 0) {
      console.log('Up');
      switch (value) {
        case 5:
          issuesContainer.style.transform = `translate3d(0, ${0}px, 0)`;
          setHash(5);
          console.log('Hi');
          break;
        case 4:
          issuesContainer.style.transform = `translate3d(0, -${issue.clientHeight}px, 0)`;
          setHash(4);
          break;
        case 3:
          issuesContainer.style.transform = `translate3d(0, ${issue.clientHeight - (issue.clientHeight * 3)}px, 0)`;
          setHash(3);
          break;
        case 2:
          issuesContainer.style.transform = `translate3d(0, ${issue.clientHeight - (issue.clientHeight * 4)}px, 0)`;
          setHash(2);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    // window.addEventListener('wheel', _.debounce(wheelHandler, 200));
    document.querySelectorAll('.bookmarks > li').forEach((el) => el.addEventListener('click', (e) => {
      e.preventDefault();
      translateHandler(e.target.hash[e.target.hash.length - 1], true);
      window.history.pushState('', '', e.target.hash);
    }));

    window.addEventListener('scroll', _.debounce(() => {
      // const scrollPos = window.scrollY ||
      // window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
      // const value = Math.abs(parseInt(scrollPos -
      //  (document.querySelector('.issue5').clientHeight / 2), 10));
      // console.log(Math.abs(parseInt(scrollPos -
      //  (document.querySelector('.issue5').clientHeight / 2), 10)));
      // console.log('scrollPos', scrollPos);
      // console.log(value <= 20 && value > 15);
    }, 200));
  }, []);

  useEffect(() => {
    switch (scrollCount) {
      case 5:
        document.body.style.background = '#00c1b5';
        translateHandler(5);
        bookmarkHandler(5);
        break;
      case 4:
        document.body.style.background = '#ff651a';
        translateHandler(4);
        bookmarkHandler(4);
        break;
      case 3:
        document.body.style.background = ' #ffbe00';
        translateHandler(3);
        bookmarkHandler(3);
        break;
      case 2:
        document.body.style.background = '#1d3fbb';
        translateHandler(2);
        bookmarkHandler(2);
        break;
      case 1:
        document.body.style.background = '#e30512';
        translateHandler(1);
        bookmarkHandler(1);
        break;
      default:
        break;
    }
    console.log(scrollCount);
  }, [scrollCount]);

  useEffect(() => {
    switch (history.location.hash) {
      case '#issue5':
        document.body.style.background = '#00c1b5';
        translateHandler(5, true);
        bookmarkHandler(5);
        break;
      case '#issue4':
        document.body.style.background = '#ff651a';
        translateHandler(4, true);
        bookmarkHandler(4);
        break;
      case '#issue3':
        document.body.style.background = ' #ffbe00';
        translateHandler(3, true);
        bookmarkHandler(3);
        break;
      case '#issue2':
        document.body.style.background = '#1d3fbb';
        translateHandler(2, true);
        bookmarkHandler(2);
        break;
      case '#issue1':
        document.body.style.background = '#e30512';
        translateHandler(1, true);
        bookmarkHandler(1);
        break;
      default:
        break;
    }
  }, [history.location.hash]);

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
          <a href="#issue5" ref={bm5} onClick={() => bookmarkHandler(5)}>
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

export default withRouter(Footer);
