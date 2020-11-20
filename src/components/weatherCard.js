import React from 'react';
import '../style/weatherCard.css';
import pic01 from '../img/01.png';
import pic02 from '../img/02.png';
import pic03 from '../img/03.png';
import pic04 from '../img/04.png';
import pic05 from '../img/05.png';

const weatherCard = props => {
  return (
    <React.Fragment>
      <div onMouseOver={mouseOver} onMouseOut={mouseOut} className='card'>
        <h2 className='data one'>{props.name}</h2>
        <img
          src={
            (props.sky === '01' ? pic01 : '') ||
            (props.sky === '02' ? pic02 : '') ||
            (props.sky === '03' ? pic03 : '') ||
            (props.sky === '04' ? pic04 : '') ||
            (props.sky === '05' ? pic05 : '')
          }
          className='data one'
          alt='weather'
          height='80px'
          width='80px'
        />
        <h1 id='temp1' className='data digit one'>
          {props.temp}
        </h1>

        {/* second card showing more details */}
        {/* <h2 className='data two'>{props.name}</h2> */}
        <h2 className='data two hide'>Day 2</h2>
        <img
          src={
            (props.sky === '01' ? pic01 : '') ||
            (props.sky === '02' ? pic02 : '') ||
            (props.sky === '03' ? pic03 : '') ||
            (props.sky === '04' ? pic04 : '') ||
            (props.sky === '05' ? pic05 : '')
          }
          className='data two hide'
          alt='weather'
          height='80px'
          width='80px'
        />
        <h1 id='temp2' className='data two hide digit'>
          temp
        </h1>
      </div>
    </React.Fragment>
  );
};

let mouseOver = event => {
  console.log('hover on');

  // if (event.target.matches('.data')) {
  //   event.preventDefault();
  // }
  if (event.target.matches('.card')) {
    console.log('one');
    let pageOne = event.target.querySelectorAll('.one');
    let pageTwo = event.target.querySelectorAll('.two');

    for (let child of pageOne) {
      child.classList.add('hide');
    }
    for (let child of pageTwo) {
      child.classList.remove('hide');
    }

    // event.target.classlist.add('.hide')

    // for (let child of event.target.children) {
    //   if (child.matches('.one')) {

    //else      console.log('child one', child);

    //     child.classList.add('hide');
    //   } else if (child.matches('.two')) {
    //     console.log('child two', child);

    //     child.classList.remove('hide');
    //   }
    // }
  }
};

let mouseOut = event => {
  console.log('hover off');

  // if (event.target.matches('.data')) {
  //   event.preventDefault();
  // }
  if (event.target.matches('.card')) {
    let pageOne = event.target.querySelectorAll('.one');
    let pageTwo = event.target.querySelectorAll('.two');
    for (let child of pageOne) {
      child.classList.remove('hide');
    }
    for (let child of pageTwo) {
      child.classList.add('hide');
    }
  }

  // for (let child of event.target.children) {
  //   if (child.matches('.one')) {
  //     child.classList.remove('hide');
  //   } else if (child.matches('.two')) {
  //     child.classList.add('hide');
  //   }
  // }

  // for (let elem of pageOne) {
  //   elem.classList.add('show');
  //   elem.classList.remove('hide');
  // }
  // for (let elem of pageTwo) {
  //   elem.classList.add('hide');
  //   elem.classList.remove('show');
  // }
};

// let pageOne = document.getElementsByClassName('one');
// let pageTwo = document.getElementsByClassName('two');

// let mouseOver = () => {
//   console.log('hover on');
//   for (let elem of pageOne) {
//     elem.classList.add('hide');
//     elem.classList.remove('show');
//   }
//   for (let elem of pageTwo) {
//     elem.classList.add('show');
//     elem.classList.remove('hide');
//   }
// };

// let mouseOut = () => {
//   console.log('hover off');
//   for (let elem of pageOne) {
//     elem.classList.add('show');
//     elem.classList.remove('hide');
//   }
//   for (let elem of pageTwo) {
//     elem.classList.add('hide');
//     elem.classList.remove('show');
//   }
// };

export default weatherCard;
