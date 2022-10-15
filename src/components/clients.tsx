import React from 'react';

import img_client_4 from '../images/client-4.png';
import img_client_6 from '../images/client-6.png';
import img_client_2 from '../images/client-2.png';
import img_client_1 from '../images/client-1.png';
import img_client_3 from '../images/client-3.png';
import img_client_5 from '../images/client-5.png';

const Clients: React.FC = () => {
  return (
    <section className='u-clearfix u-palette-3-base u-section-11' id='sec-d16b'>
      <div className='u-clearfix u-sheet u-sheet-1'>
        <div className='u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1'>
          <div className='u-layout'>
            <div className='u-layout-row'>
              <div className='u-align-center-md u-align-center-sm u-container-style u-layout-cell u-left-cell u-similar-fill u-size-10 u-size-30-md u-layout-cell-1'>
                <div className='u-container-layout u-valign-middle-md u-valign-middle-sm u-container-layout-1'>
                  <img src={img_client_4} className='u-image u-image-default u-image-1' />
                </div>
              </div>
              <div className='u-align-center-md u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-similar-fill u-size-10 u-size-30-md u-layout-cell-2'>
                <div className='u-container-layout u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-2'>
                  <img src={img_client_6} className='u-image u-image-default u-image-2' />
                </div>
              </div>
              <div className='u-align-center-md u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-similar-fill u-size-10 u-size-30-md u-layout-cell-3'>
                <div className='u-container-layout u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-3'>
                  <img src={img_client_2} className='u-image u-image-default u-image-3' />
                </div>
              </div>
              <div className='u-align-center-md u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-similar-fill u-size-10 u-size-30-md u-layout-cell-4'>
                <div className='u-container-layout u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-4'>
                  <img src={img_client_1} className='u-image u-image-default u-image-4' />
                </div>
              </div>
              <div className='u-align-center-md u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-similar-fill u-size-10 u-size-30-md u-layout-cell-5'>
                <div className='u-container-layout u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-5'>
                  <img src={img_client_3} className='u-image u-image-default u-image-5' />
                </div>
              </div>
              <div className='u-align-center-md u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-right-cell u-similar-fill u-size-10 u-size-30-md u-layout-cell-6'>
                <div className='u-container-layout u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-6'>
                  <img src={img_client_5} className='u-image u-image-default u-image-6' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
