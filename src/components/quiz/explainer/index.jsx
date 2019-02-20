import React from 'react';

import style from './style';

export default ({ frontmatter: { title, points }, html }) => (
  <article>
    <style jsx>{style}</style>

    <h2 className="title">{title}</h2>

    {points && (
      <ul>
        {points.map(({ title: pointTitle }) => (
          <li key={pointTitle}>
            <p>{pointTitle}</p>
          </li>
        ))}
      </ul>
    )}

    {/* eslint-disable-next-line react/no-danger */}
    <div className="text" dangerouslySetInnerHTML={{ __html: html }} />
  </article>
);
