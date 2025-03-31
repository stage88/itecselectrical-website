import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Access Denied',
};

const AccessDeniedPage = () => {
  return (
    <section className='u-clearfix u-white u-section-3' id='sec-4b72'>
      <div className='u-clearfix u-sheet u-sheet-1'>
        <div className='u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1'>
          <div className='u-layout'>
            <div className='u-layout-row'>
              <div className='u-container-style u-layout-cell u-left-cell u-similar-fill u-size-30 u-layout-cell-1'>
                <div className='u-container-layout u-container-layout-1'>
                  <h3 className='u-heading-font u-text u-text-palette-1-base u-text-1'>
                    Access Denied
                  </h3>
                  <h2 className='u-heading-font u-text u-text-2'>Access Denied</h2>
                  <div className='u-border-3 u-border-palette-1-base u-line u-line-horizontal u-line-1'></div>
                  <p className='u-text u-text-font u-text-grey u-text-3'>
                    Sorry&nbsp;
                    <span role='img' aria-label='Pensive emoji'>
                      😔
                    </span>
                    &nbsp; you don&apos;t have access to the requested resource.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessDeniedPage;
