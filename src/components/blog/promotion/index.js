/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const PromotionBanner = ({ image, title, description, isDark }) => {
  if (description === 'bluepipeNew') {
    renderDescription = (
      <div>
        {' '}
        <a href="https://s.bluepipe.dev/new-blog" target="_blank">
          bluepipe.new
        </a>{' '}
        enables you to create React-based, headless UI enterprise applications within your browser that you
        can preview, tweak and download instantly.
        <br />
        <br />
        🚀 By visually combining options for your preferred ✨<b> React platform,</b> ✨ <b>UI framework</b>,
        ✨ <b>backend connector</b>, and ✨ <b>auth provider</b>; you can create tailor-made architectures for
        your project in seconds. It feels like having access to thousands of project templates at your
        fingertips, allowing you to choose the one that best suits your needs!
        <br />
        <br />
        <br />
      </div>
    );
  } else {
    renderDescription = description ?? (
      <div>
        Meet the headless, React-based solution to build sleek <b>CRUD</b> applications. With bluepipe, you
        can be confident that your codebase will always stay clean and boilerplate-free.
        <br />
        <br />
        Try{' '}
        <a href="https://github.com/1stblue/1stblue.github.io" target="_blank">
          bluepipe
        </a>{' '}
        to rapidly build your next <b>CRUD</b> project, whether {"it's"} an admin panel, dashboard, internal
        tool or storefront.
      </div>
    );
  }

  return (
    <a href="https://s.bluepipe.dev/hackathon2" target="_blank" rel="noreferrer">
      <img src="https://bluepipe.ams3.cdn.digitaloceanspaces.com/hackathon-2/hackathon_cover.png" />
    </a>
  );
};

export default PromotionBanner;

