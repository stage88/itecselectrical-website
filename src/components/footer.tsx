import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Footer: React.FC = () => {
  const { title, author, sourceUrl, authorUrl, abn, acn, actlic, nswlic, aspl2, austel, nswacc } =
    useSiteMetadata();

  return (
    <section className='u-backlink u-clearfix u-grey-80'>
      <p className='u-text'>
        <span>
          &copy; {new Date().getFullYear()} by {title}
        </span>
        <br />
        <br />
        <span>
          ABN: {abn}, ACN: {acn}
        </span>
        <br />
        <span>
          ACT LIC: {actlic}, NSW LIC: {nswlic}
        </span>
        <br />
        <span>
          Essential Energy ASP L-2: {aspl2}, ACRS Master LIC: {austel}
        </span>
        <br />
        <span>NSW Accreditation: {nswacc}</span>
      </p>

      <br />

      <a className='u-link' href={sourceUrl} target='_blank'>
        <span>Theme</span>
      </a>
      <p className='u-text'>
        <span>&nbsp;&nbsp;created by&nbsp;&nbsp;</span>
      </p>
      <a className='u-link' href={authorUrl} target='_blank'>
        <span>{author}</span>
      </a>
    </section>
  );
};

export default Footer;
