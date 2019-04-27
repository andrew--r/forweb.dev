const digestWidget = require('../digest-widget/template');
const pagePublicationDate = require('../page-publication-date/template');

module.exports = (context, children) => {
  const { metadata } = context.currentPage;

  return `
  <article itemscope itemtype="http://schema.org/BlogPosting">
    <header>
      ${pagePublicationDate(context.currentPage, { itemprop: 'datePublished' })}

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
