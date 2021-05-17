/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from 'react';

import './footer.style.sass';
import _ from 'lodash';
import { withRouter } from 'react-router';
import isMediaQuery from '../../utils/isMediaQuery';

const Footer = ({ history, scrollCount, setScrollCount }) => {
  // eslint-disable-next-line no-unused-vars
  const [currentIssue, setCurrentIssue] = useState(0);
  // const [scrollCount, setScrollCount] = useState(5);
  const [deltaY, setDeltaY] = useState(null);
  // const [mediaQuery1000, setMediaQuery1000] = useState(isMediaQuery(1000));

  const bm1 = useRef(null);
  const bm2 = useRef(null);
  const bm3 = useRef(null);
  const bm4 = useRef(null);
  const bm5 = useRef(null);

  const bookmarks = document.querySelectorAll('.bookmarks > li');

  const scrollCountRef = useRef({});
  scrollCountRef.current = scrollCount;

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
        console.log('e.deltay Y false');
        return 5;
      }

      return undefined;
    });
  };

  const setHash = (hash) => {
    window.history.pushState('', '', `#issue${hash}`);
  };

  const bookmarkColorChanger = (num) => {
    bookmarks.forEach((ele) => {
      console.log(ele.children[0].hash[ele.children[0].hash.length - 1], `${num}`);
      if (ele.children[0].hash[ele.children[0].hash.length - 1] !== `${num}`) {
        ele.children[0].style.textShadow = 'inherit';
      } else {
        ele.children[0].style.textShadow = '-0.8px 0 0';
      }
    });
  };

  const translateHandler = (value, isLink) => {
    const issue = document.querySelector(`.issue${value}`);
    const issuesContainer = document.querySelector('.issues-container');
    const transition = () => { issuesContainer.style.transition = 'all 0.7s ease'; };

    if (isLink) {
      switch (parseInt(value, 10)) {
        case 5:
          issuesContainer.style.transform = `translate3d(0, ${0}px, 0)`;
          transition();
          console.log(5);
          break;
        case 4:
          issuesContainer.style.transform = `translate3d(0, -${issue.clientHeight}px, 0)`;
          transition();
          console.log(4);
          break;
        case 3:
          issuesContainer.style.transform = `translate3d(0, -${
            issue.clientHeight * 2
          }px, 0)`;
          transition();
          console.log(3);
          break;
        case 2:
          issuesContainer.style.transform = `translate3d(0, -${
            issue.clientHeight * 3
          }px, 0)`;
          transition();
          console.log(2);
          break;
        case 1:
          issuesContainer.style.transform = `translate3d(0, -${
            issue.clientHeight * 4
          }px, 0)`;
          transition();
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
          transition();
          bookmarkColorChanger(4);
          break;
        case 3:
          issuesContainer.style.transform = `translate3d(0, -${
            issue.clientHeight * 2
          }px, 0)`;
          setHash(3);
          transition();
          bookmarkColorChanger(3);
          break;
        case 2:
          issuesContainer.style.transform = `translate3d(0, -${
            issue.clientHeight * 3
          }px, 0)`;
          setHash(2);
          transition();
          bookmarkColorChanger(2);
          break;
        case 1:
          issuesContainer.style.transform = `translate3d(0, -${
            issue.clientHeight * 4
          }px, 0)`;
          setHash(1);
          transition();
          bookmarkColorChanger(1);
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
          transition();
          bookmarkColorChanger(5);
          setHash(5);
          break;
        case 4:
          issuesContainer.style.transform = `translate3d(0, -${issue.clientHeight}px, 0)`;
          transition();
          bookmarkColorChanger(4);
          setHash(4);
          break;
        case 3:
          issuesContainer.style.transform = `translate3d(0, ${
            issue.clientHeight - issue.clientHeight * 3
          }px, 0)`;
          transition();
          bookmarkColorChanger(3);
          setHash(3);
          break;
        case 2:
          issuesContainer.style.transform = `translate3d(0, ${
            issue.clientHeight - issue.clientHeight * 4
          }px, 0)`;
          transition();
          bookmarkColorChanger(2);
          setHash(2);
          break;
        default:
          break;
      }
    }
  };

  // let debounceTimeVar = true;
  // const debounceTime = () => {
  //   console.log('debounceTimer: ', debounceTimeVar);
  //   if (debounceTimeVar) {
  //     console.log('debounceTimer true: ', debounceTimeVar);
  //     debounceTimeVar = false;
  //     return 100;
  //   }
  //   console.log('debounceTimer false: ', debounceTimeVar);
  //   debounceTimeVar = true;
  //   return 200;
  // };

  const WindowWidth = window.innerWidth;

  useEffect(() => {
    const debounceWheel = _.throttle(wheelHandler, 600, {
      leading: true,
      trailing: false,
    });

    if (!isMediaQuery(1000)) {
      window.addEventListener('wheel', debounceWheel);

      bookmarks.forEach((el) => el.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.style.textShadow = '-0.8px 0 0';
        bookmarks.forEach((ele) => {
          if (ele.children[0].hash !== e.target.hash) {
            ele.children[0].style.textShadow = 'inherit';
          }
        });
        translateHandler(e.target.hash[e.target.hash.length - 1], true);
        window.history.pushState('', '', e.target.hash);
      }));
    }

    window.addEventListener(
      'resize',
      _.debounce(() => {
        const issue2 = document.querySelector('.issue2');
        const issuesContainer = document.querySelector('.issues-container');

        console.log(scrollCountRef.current);
        if (isMediaQuery(1000)) {
          if (WindowWidth !== window.innerWidth) {
            issuesContainer.style.transition = 'none';
            issuesContainer.style.transform = `translate3d(0, ${0}px, 0)`;
            document.querySelector(`.issue${scrollCountRef.current}`).scrollIntoView();
            alert('RESIZE 1', scrollCountRef.current);
            window.removeEventListener('wheel', debounceWheel);
            issuesContainer.classList.add('disabled-wheel');
          }
        } else {
          switch (scrollCountRef.current) {
            case 5:
              document.querySelector(`.issue${scrollCount}`).scrollIntoView();
              issuesContainer.style.transform = `translate3d(0, ${0}px, 0)`;
              console.log(555555);
              break;
            case 4:
              document.querySelector(`.issue${scrollCount}`).scrollIntoView();
              issuesContainer.style.transform = `translate3d(0, -${issue2.clientHeight}px, 0)`;
              console.log(444444);
              break;
            case 3:
              document.querySelector(`.issue${scrollCount}`).scrollIntoView();
              issuesContainer.style.transform = `translate3d(0, -${
                issue2.clientHeight * 2
              }px, 0)`;
              console.log(333333);
              break;
            case 2:
              document.querySelector(`.issue${scrollCount}`).scrollIntoView();
              issuesContainer.style.transform = `translate3d(0, -${
                issue2.clientHeight * 3
              }px, 0)`;
              console.log(222222);
              break;
            case 1:
              document.querySelector(`.issue${scrollCount}`).scrollIntoView();
              issuesContainer.style.transform = `translate3d(0, -${
                issue2.clientHeight * 4
              }px, 0)`;
              console.log(111111);
              break;
            default:
              break;
          }

          if ((issuesContainer?.classList[0] === 'disabled-wheel' || issuesContainer?.classList[1] === 'disabled-wheel') && !isMediaQuery(1000)) {
            window.addEventListener('wheel', debounceWheel);
            issuesContainer.classList.remove('disabled-wheel');
          }

          console.log('RESIZE 2', scrollCountRef.current);
        }
      }, 200),
    );
  }, []);

  useEffect(() => console.log(scrollCount), [scrollCount]);

  useEffect(() => {
    if (!isMediaQuery(1000)) {
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
    }
    // console.log(scrollCount);
  }, [scrollCount]);

  useEffect(() => {
    switch (history.location.hash) {
      case '#issue5':
        document.body.style.background = '#00c1b5';
        if (isMediaQuery(1000)) {
          console.log('issue5 media q');
          document.querySelector('.issue5').scrollIntoView();
        } else {
          translateHandler(5, true);
        }
        bookmarkHandler(5);
        break;
      case '#issue4':
        document.body.style.background = '#ff651a';
        if (isMediaQuery(1000)) {
          console.log('issue4 media q');
          document.querySelector('.issue4').scrollIntoView();
        } else {
          translateHandler(4, true);
        }
        bookmarkHandler(4);
        break;
      case '#issue3':
        document.body.style.background = ' #ffbe00';
        if (isMediaQuery(1000)) {
          console.log('issue3 media q');
          document.querySelector('.issue3').scrollIntoView();
        } else {
          translateHandler(3, true);
        }
        bookmarkHandler(3);
        break;
      case '#issue2':
        document.body.style.background = '#1d3fbb';
        if (isMediaQuery(1000)) {
          console.log('issue2 media q');
          document.querySelector('.issue2').scrollIntoView();
        } else {
          translateHandler(2, true);
        }
        bookmarkHandler(2);
        break;
      case '#issue1':
        document.body.style.background = '#e30512';
        if (isMediaQuery(1000)) {
          console.log('issue1 media q');
          document.querySelector('.issue1').scrollIntoView();
        } else {
          translateHandler(1, true);
        }
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
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.
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
          <a href="#issue5" id="issue5-link" ref={bm5} onClick={() => bookmarkHandler(5)}>
            Issue #5
          </a>
        </li>
        <li>
          <a href="#issue4" id="issue4-link" ref={bm4} onClick={() => bookmarkHandler(4)}>
            Issue #4
          </a>
        </li>
        <li>
          <a href="#issue3" id="issue3-link" ref={bm3} onClick={() => bookmarkHandler(3)}>
            Issue #3
          </a>
        </li>
        <li>
          <a href="#issue2" id="issue2-link" ref={bm2} onClick={() => bookmarkHandler(2)}>
            Issue #2
          </a>
        </li>
        <li>
          <a href="#issue1" id="issue1-link" ref={bm1} onClick={() => bookmarkHandler(1)}>
            Issue #1
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default withRouter(Footer);
