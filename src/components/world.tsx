import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

import img_be60b4bef50944a54eb655fa128f19f5 from '../images/be60b4bef50944a54eb655fa128f19f5.png';

const World: React.FC = () => {
  const { name, description, longDescription } = useSiteMetadata();

  return (
    <section className='u-clearfix u-white u-section-7' id='sec-8c14'>
      <div className='u-clearfix u-sheet u-sheet-1'>
        <div className='u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1'>
          <div className='u-layout'>
            <div className='u-layout-row'>
              <div className='u-align-center-md u-container-style u-expand-resize u-layout-cell u-left-cell u-similar-fill u-size-30 u-white u-layout-cell-1'>
                <div className='u-container-layout u-valign-middle-md u-valign-middle-sm u-container-layout-1'>
                  <img className='u-expanded-width-xs u-image u-image-1' src={img_be60b4bef50944a54eb655fa128f19f5} />
                </div>
              </div>
              <div className='u-container-style u-layout-cell u-right-cell u-similar-fill u-size-30 u-layout-cell-2'>
                <div className='u-container-layout u-valign-middle'>
                  <h3 className='u-heading-font u-text u-text-palette-1-base u-text-1'>{description}</h3>
                  <h2 className='u-heading-font u-text u-text-2'>{name}</h2>
                  <div className='u-border-3 u-border-palette-1-base u-line u-line-horizontal u-line-1'></div>
                  <p className='u-text u-text-font u-text-3'>
                   {longDescription}
                  </p>
                  <a href='#' className='u-border-radius-4 u-btn u-btn-round u-button-style u-custom u-palette-1-base u-text-white u-btn-1'>
                    Read More
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

export default World;
