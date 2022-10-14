import React from 'react';

import useSiteMetadata from '../hooks/useSiteMetadata';
import img_e36e61f2185bd84c29cebb9e46a4df90 from '../images/e36e61f2185bd84c29cebb9e46a4df90.png';

const Header: React.FC = () => {
  const { companyName, description, longDescription } = useSiteMetadata();

  return (
    <section className='u-clearfix u-image u-shading u-section-2' id='sec-cc32'>
      <div className='u-clearfix u-sheet u-sheet-1'>
        <div className='u-container-style u-group u-group-1'>
          <div className='u-container-layout u-container-layout-1'>
            <h2 className='u-heading-font u-text u-text-palette-1-base u-text-1'>{description}</h2>
            <h1 className='u-heading-font u-text u-text-2'>{companyName}</h1>
            <div className='u-border-3 u-border-palette-1-base u-line u-line-horizontal u-line-1'></div>
            <p className='u-text u-text-font u-text-3'>{longDescription}.</p>
            {/* <a href='#' className='u-border-radius-4 u-btn u-btn-round u-button-style u-custom u-palette-1-base u-text-white u-btn-1'>
              our portfolio
            </a>
            <a href='#' className='u-border-2 u-border-radius-4 u-border-white u-btn u-btn-round u-button-style u-custom u-btn-2'>
              about us
            </a> */}
          </div>
        </div>
        <img src={img_e36e61f2185bd84c29cebb9e46a4df90} className='u-hidden-xs u-image u-image-default u-image-1' />
      </div>
    </section>
  );
};

export default Header;
