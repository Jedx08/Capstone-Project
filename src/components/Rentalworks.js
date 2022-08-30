import React from 'react';
import '../css/rentalworks.css';
import divBg from '../media/rentalworks.mp4';

const Rentalworks = () => {
  return (
    <div className='mainjd'>
      <div className='overlay'></div>
      <div>
      <div className='banner'><video src={divBg} autoPlay loop muted /></div>
        <div className='content'>
          <div className='title'><h2>HOW DOES THE<br/>RENTCAR RENTAL WORKS</h2></div>
          <div className='contenta'>
              <div className='contentimg'>
                <div><img src='https://autostar.templines.org/wp-content/uploads/2018/12/steps01.png'/></div>
              </div>
              <div className='contentp'>
                <div><p>Once selected, Book<br/>our auto and set a<br/>pickup date / time</p></div>
              </div>
          </div>
          <div className='contenta'>
              <div className='contentimg'>
                <div><img src='https://autostar.templines.org/wp-content/uploads/2018/12/steps02.png'/></div>
              </div>
              <div className='contentp'>
                <div><p>Once selected, Book<br/>our auto and set a<br/>pickup date / time</p></div>
              </div>
          </div>
          <div className='contenta'>
              <div className='contentimg'>
                <div><img src='https://autostar.templines.org/wp-content/uploads/2018/12/steps03.png'/></div>
              </div>
              <div className='contentp'>
                <div><p>Once selected, Book<br/>our auto and set a<br/>pickup date / time</p></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rentalworks