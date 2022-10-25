import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

import img_world_map from '../images/world-map.png';
import img_logo from '../images/itecs-logo.png';

const Contact: React.FC = () => {
  const { companyName, constactEmail, mobile } = useSiteMetadata();

  return (
    <section className='u-clearfix u-white u-section-7'>
      <div className='u-clearfix u-sheet u-sheet-1'>
        <div className='u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1'>
          <div className='u-layout'>
            <div className='u-layout-row'>
              <div className='u-align-center-md u-container-style u-expand-resize u-layout-cell u-left-cell u-similar-fill u-size-30 u-white u-layout-cell-1'>
                <div className='u-container-layout u-valign-middle-md u-valign-middle-sm u-container-layout-1'>
                  <img className='u-expanded-width-xs u-image u-image-1' src={img_world_map} />
                </div>
              </div>
              <div className='u-container-style u-layout-cell u-right-cell u-similar-fill u-size-30 u-layout-cell-2'>
                <div className='u-container-layout u-valign-middle'>
                  <h3 className='u-heading-font u-text u-text-palette-1-base u-text-1' id='contact-us'>Contact Us</h3>
                  <h2 className='u-heading-font u-text u-text-2'>Our Contact Details</h2>
                  <div className='u-border-3 u-border-palette-1-base u-line u-line-horizontal u-line-1'></div>
                  <img className='u-image' src={img_logo} style={{ marginTop: '36px', width: 'max-content' }} />
                  <p className='u-text u-text-font u-text-3'>
                    Ivan - Mobile: <a href={`tel:${mobile}`} style={{ color: '#000' }}>{mobile}</a>
                  </p>
                  <p className='u-text u-text-font u-text-3'>
                  {companyName} <br />
                  PO Box 1295 <br />
                  Queanbeyan NSW 2620 <br/>
                  </p>
                  <a href={`mailto:${constactEmail}`} className='u-border-radius-4 u-btn u-btn-round u-button-style u-custom u-palette-1-base u-text-white u-btn-1'>
                    {constactEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
