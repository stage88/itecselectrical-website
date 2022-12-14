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
                  <h3 className='u-heading-font u-text u-text-palette-1-base u-text-1'>Welcome To</h3>
                  <h2 className='u-heading-font u-text u-text-2'>{name}</h2>
                  <div className='u-border-3 u-border-palette-1-base u-line u-line-horizontal u-line-1'></div>
                  <p className='u-text u-text-font u-text-grey u-text-3'>
                    We are the leader with 29 years of experience
                    <br />
                    in providing quality electrical services!
                  </p>
                </div>
              </div>
              <div className='u-container-style u-layout-cell u-right-cell u-similar-fill u-size-30 u-layout-cell-2'>
                <div className='u-container-layout'>
                  <p className='u-text u-text-font u-text-4'>
                    {name} is a Canberra / Queanbeyan operated business established in 1993. We provide services for Commercial, Industrial,
                    Rural and Domestic electrical repairs as well as new installations and upgrades in Canberra, Queanbeyan, and surrounding
                    areas. We also provide security surveillance, data, and telephone services.
                    <br />
                    <br />
                    {name} is Level 2 authorised with Essential Energy providing metering and underground connections to the premises. All
                    our work is guaranteed and of high standard that complies with the latest Australian Standards.
                    <br />
                    <br />
                    We pride ourselves on completing jobs quickly, efficiently, and seamlessly from start to finish, leaving you with the
                    peace of mind of a job well done.
                    <br />
                    <br />
                    Our highly-trained, electricians have years of experience and are ready to assess your complete electrical needs. No
                    matter how big or small your job is, from powerpoint installation to entire black outs, we can find the right solution
                    for you, fast the first time.
                    <br />
                    <br />
                  </p>
                  <span className='u-text u-text-font u-text-4'>
                    We specialise in:
                    <ul className='u-text u-text-font u-text-4' style={{ marginTop: 0 }}>
                      <li>Electrical and security system requirements</li>
                      <li>Residential electrical fit outs for new builds or renovations</li>
                      <li>Commercial fit outs & new designs</li>
                      <li>Residential and commercial maintenance across Canberra / Queanbeyan</li>
                      <li>A full guarantee on all workmanship and products</li>
                    </ul>
                  </span>

                  <a
                    href='#contact-us'
                    className='u-border-radius-4 u-btn u-btn-round u-button-style u-custom u-palette-1-base u-text-white u-btn-1'
                  >
                    Contact Us
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

export default Welcome;
