const { format } = require('date-fns');
const renderAttributes = require('../attributes/template');

module.exports = ({ metadata }, additionalAttributes = {}) => `
<time
  datetime="${metadata.publicationDate.toISOString()}"
  ${renderAttributes(additionalAttributes)}
>
  ${format(metadata.publicationDate, 'DD.MM.YYYY')}
</time>
`;
