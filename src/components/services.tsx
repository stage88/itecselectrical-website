import React from 'react';

import DesignServiceIcon from '../components/icons//services/design';
import BuildServiceIcon from '../components/icons/services/build';
import PaintServiceIcon from '../components/icons/services/paint';
import ConstructServiceIcon from '../components/icons//services/construct';
import DocumentServiceIcon from '../components/icons/services/document';
import SupportServiceIcon from '../components/icons/services/support';

const Services: React.FC = () => {
  return (
    <>
      <section className='u-clearfix u-white u-section-4' id='sec-ffe9'>
        <div className='u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1'>
          <div className='u-layout'>
            <div className='u-layout-row'>
              <div className='u-container-style u-image u-layout-cell u-left-cell u-shading u-similar-fill u-size-20 u-size-20-md u-image-1'>
                <div className='u-container-layout u-valign-bottom'>
                  <h3 className='u-heading-font u-text u-text-1'>DESIGN &amp; BUILDING</h3>
                  <div className='u-border-3 u-border-palette-1-base u-line u-line-horizontal u-line-1'></div>
                  <p className='u-text u-text-font u-text-2'>
                    Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
                  </p>
                </div>
              </div>
              <div className='u-container-style u-image u-layout-cell u-shading u-similar-fill u-size-20 u-size-20-md u-image-2'>
                <div className='u-container-layout u-valign-bottom'>
                  <h3 className='u-heading-font u-text u-text-3'>CONSTRUCTION RENOVATION</h3>
                  <div className='u-border-3 u-border-palette-1-base u-line u-line-horizontal u-line-2'></div>
                  <p className='u-text u-text-font u-text-4'>
                    Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
                  </p>
                </div>
              </div>
              <div className='u-container-style u-image u-layout-cell u-right-cell u-shading u-similar-fill u-size-20 u-size-20-md u-image-3'>
                <div className='u-container-layout u-valign-bottom'>
                  <h3 className='u-heading-font u-text u-text-5'>FINISHING INTERIORS</h3>
                  <div className='u-border-3 u-border-palette-1-base u-line u-line-horizontal u-line-3'></div>
                  <p className='u-text u-text-font u-text-6'>
                    Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='u-clearfix u-white u-section-5' id='sec-e8bd'>
        <div className='u-clearfix u-sheet u-sheet-1'>
          <div className='u-align-center u-container-style u-group u-similar-fill u-group-1'>
            <div className='u-container-layout u-valign-middle u-container-layout-1'>
              <h3 className='u-heading-font u-text u-text-palette-1-base u-text-1'>SPECIAL OFFER</h3>
              <h2 className='u-heading-font u-text u-text-2'>OUR BEST SERVICES</h2>
              <div className='u-border-3 u-border-palette-1-base u-line u-line-horizontal u-line-1'></div>
            </div>
          </div>
          <div className='u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1'>
            <div className='u-layout'>
              <div className='u-layout-col'>
                <div className='u-size-30 u-size-60-md'>
                  <div className='u-layout-row'>
                    <div className='u-container-style u-layout-cell u-left-cell u-similar-fill u-size-20 u-size-20-md u-layout-cell-1'>
                      <div className='u-container-layout'>
                        <DesignServiceIcon />

                        <h3 className='u-heading-font u-text u-text-3'>DESIGN &amp; PLANNING</h3>
                        <p className='u-text u-text-font u-text-4'>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </div>
                    <div className='u-container-style u-layout-cell u-similar-fill u-size-20 u-size-20-md u-layout-cell-2'>
                      <div className='u-container-layout'>
                        <BuildServiceIcon />

                        <h3 className='u-heading-font u-text u-text-5'>BUILDING RENOVATION</h3>
                        <p className='u-text u-text-font u-text-6'>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </div>
                    <div className='u-container-style u-layout-cell u-right-cell u-similar-fill u-size-20 u-size-20-md u-layout-cell-3'>
                      <div className='u-container-layout'>
                        <PaintServiceIcon />

                        <h3 className='u-heading-font u-text u-text-7'>INTERIOR DESIGN</h3>
                        <p className='u-text u-text-font u-text-8'>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='u-size-30 u-size-60-md'>
                  <div className='u-layout-row'>
                    <div className='u-container-style u-layout-cell u-left-cell u-similar-fill u-size-20 u-size-20-md u-layout-cell-4'>
                      <div className='u-container-layout'>
                        <ConstructServiceIcon />

                        <h3 className='u-heading-font u-text u-text-9'>CONSTRUCTION SERVICES</h3>
                        <p className='u-text u-text-font u-text-10'>
                          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                    <div className='u-container-style u-layout-cell u-similar-fill u-size-20 u-size-20-md u-layout-cell-5'>
                      <div className='u-container-layout'>
                        <DocumentServiceIcon />

                        <h3 className='u-heading-font u-text u-text-11'>DOCUMENTATION</h3>
                        <p className='u-text u-text-font u-text-12'>
                          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                    <div className='u-container-style u-layout-cell u-right-cell u-similar-fill u-size-20 u-size-20-md u-layout-cell-6'>
                      <div className='u-container-layout'>
                        <SupportServiceIcon />

                        <h3 className='u-heading-font u-text u-text-13'>PROFESSIONAL SUPPORT</h3>
                        <p className='u-text u-text-font u-text-14'>
                          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
