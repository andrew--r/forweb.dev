const digestWidget = require('../digest-widget/template');

module.exports = (context, children) => `
<article>
  ${children}
</article>
${digestWidget(context)}
`;
