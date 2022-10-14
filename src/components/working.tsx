import React from 'react';

import PlanningStepIcon from '../components/icons/steps/planning';
import DesignStepIcon from '../components/icons/steps/design';
import BuildingStepIcon from '../components/icons/steps/building';
import FinishStepIcon from '../components/icons/steps/finish';

const Working: React.FC = () => {
  return (
    <section className='u-clearfix u-white u-section-9' id='sec-b3e5'>
      <div className='u-clearfix u-sheet u-sheet-1'>
        <div className='u-align-center u-container-style u-group u-similar-fill u-group-1'>
          <div className='u-container-layout u-valign-middle u-container-layout-1'>
            <h3 className='u-heading-font u-text u-text-palette-1-base u-text-1'>STEP BY STEP</h3>
            <h2 className='u-heading-font u-text u-text-2'>HOW IT'S WORKING</h2>
            <div className='u-border-3 u-border-palette-1-base u-line u-line-horizontal u-line-1'></div>
          </div>
        </div>
        <div className='u-clearfix u-disable-padding u-expanded-width u-gutter-20 u-layout-wrap u-layout-wrap-1'>
          <div className='u-layout'>
            <div className='u-layout-row'>
              <div className='u-align-center u-container-style u-layout-cell u-left-cell u-similar-fill u-size-15 u-size-30-md u-layout-cell-1'>
                <div className='u-container-layout u-valign-middle u-container-layout-2'>
                  <PlanningStepIcon />

                  <h3 className='u-heading-font u-text u-text-3'>PLANNING</h3>
                  <p className='u-text u-text-font u-text-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus.
                  </p>
                </div>
              </div>
              <div className='u-align-center u-container-style u-layout-cell u-similar-fill u-size-15 u-size-30-md u-layout-cell-2'>
                <div className='u-container-layout u-valign-middle u-container-layout-3'>
                  <DesignStepIcon />

                  <h3 className='u-heading-font u-text u-text-5'>design</h3>
                  <p className='u-text u-text-font u-text-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus.
                  </p>
                </div>
              </div>
              <div className='u-align-center u-container-style u-layout-cell u-similar-fill u-size-15 u-size-30-md u-layout-cell-3'>
                <div className='u-container-layout u-valign-middle u-container-layout-4'>
                  <BuildingStepIcon />

                  <h3 className='u-heading-font u-text u-text-7'>BUILDING</h3>
                  <p className='u-text u-text-font u-text-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus.
                  </p>
                </div>
              </div>
              <div className='u-align-center u-container-style u-layout-cell u-right-cell u-similar-fill u-size-15 u-size-30-md u-layout-cell-4'>
                <div className='u-container-layout u-valign-middle u-container-layout-5'>
                  <FinishStepIcon />

                  <h3 className='u-heading-font u-text u-text-9'>FINISH</h3>
                  <p className='u-text u-text-font u-text-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus.
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

export default Working;
