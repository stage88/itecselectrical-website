import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Buy: React.FC = () => {
  const { companyName, description } = useSiteMetadata();

  return (
    <section className='u-clearfix u-palette-1-base u-section-13' id='sec-4b3c'>
      <div className='u-clearfix u-sheet u-sheet-1'>
        <div className='u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1'>
          <div className='u-layout'>
            <div className='u-layout-row'>
              <div className='u-container-style u-layout-cell u-left-cell u-size-34 u-layout-cell-1'>
                <div className='u-container-layout u-valign-middle'>
                  <h2 className='u-heading-font u-text u-text-white u-text-1'>{companyName}</h2>
                  <p className='u-text u-text-font u-text-white u-text-2'>{description}</p>
                </div>
              </div>
              <div className='u-align-left-sm u-align-right-lg u-align-right-md u-align-right-xl u-align-right-xs u-container-style u-layout-cell u-right-cell u-similar-fill u-size-26 u-layout-cell-2'>
                <div className='u-container-layout u-container-layout-2'>
                  <a href='#' className='u-border-2 u-border-radius-4 u-border-white u-btn u-btn-round u-button-style u-custom u-btn-1'>
                    purchase now
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

export default Buy;
