const { format } = require('date-fns');
const digestWidget = require('../digest-widget/template');

module.exports = (context, children) => {
  const { metadata } = context.currentPage;

  return `
  <article itemscope itemtype="http://schema.org/BlogPosting">
    <header>
      <time datetime="${metadata.publicationDate.toISOString()}" itemprop="datePublished">
        ${format(metadata.publicationDate, 'DD.MM.YYYY')}
      </time>

      <h2 class="heading heading--1" itemprop="name headline">
        ${metadata.title}
      </h2>
    </header>

    <div itemprop="articleBody">
      ${children}
    </div>
  </article>
  ${digestWidget(context)}
  `;
};
