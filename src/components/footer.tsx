import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Footer: React.FC = () => {
  const { title, author, sourceUrl, authorUrl } = useSiteMetadata();

  return (
    <section className='u-backlink u-clearfix u-grey-80'>
      <p className='u-text'>
        <span>&copy; {new Date().getFullYear()} by {title}</span>
      </p><br />
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
