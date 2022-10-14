import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Welcome: React.FC = () => {
  const { name } = useSiteMetadata();

  return (
    <section className='u-clearfix u-white u-section-3' id='sec-4b72'>
      <div className='u-clearfix u-sheet u-sheet-1'>
        <div className='u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1'>
          <div className='u-layout'>
            <div className='u-layout-row'>
              <div className='u-container-style u-layout-cell u-left-cell u-similar-fill u-size-30 u-layout-cell-1'>
                <div className='u-container-layout u-container-layout-1'>
                  <h3 className='u-heading-font u-text u-text-palette-1-base u-text-1'>WELCOME TO</h3>
                  <h2 className='u-heading-font u-text u-text-2'>{name}</h2>
                  <div className='u-border-3 u-border-palette-1-base u-line u-line-horizontal u-line-1'></div>
                  <p className='u-text u-text-font u-text-grey u-text-3'>
                    We are the leader with 25 years of experience
                    <br />
                    in providing quality electrical services!
                  </p>
                </div>
              </div>
              <div className='u-container-style u-layout-cell u-right-cell u-similar-fill u-size-30 u-layout-cell-2'>
                <div className='u-container-layout'>
                  <p className='u-text u-text-font u-text-4'>
                    {name} are a team of experienced, professional electricians servicing the Canberra / Queanbeyan region and beyond. We
                    pride ourselves on completing jobs quickly, efficiently, and seamlessly from start to finish, leaving you with the peace
                    of mind of a job well done.
                    <br />
                    <br />
                    Our highly-trained, electricians have years of experience and are ready to assess your complete electrical needs 24
                    hours a day. No matter how big or small your job is, from powerpoint installation to entire black outs, we can find the
                    right solution for you, fast the first time. 
                    <br />
                    <br />
                    We specialise in:
                    <ul>
                      <li>Electrical and Security System requirements</li>
                      <li>Commercial Fit outs & New Designs</li>
                      <li>Commercial Maintenance across Canberra / Queanbeyan</li>
                      <li>A Full Guarantee On All Workmanship & Products</li>
                    </ul>
                  </p>
                  {/* <a href='#' className='u-border-radius-4 u-btn u-btn-round u-button-style u-custom u-palette-1-base u-text-white u-btn-1'>
                    read more
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    
  );
};

export default Welcome;
