const renderLogo = require('./logo/template');

module.exports = (context) => `
<header class="header">
  ${renderLogo(context)}
</header>
`;
