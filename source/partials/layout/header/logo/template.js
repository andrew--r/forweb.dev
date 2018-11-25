module.exports = (context) => `
<h1 class="logo">
  <a class="unstyled-link logo__link" href="/">
    <img
      class="logo__image"
      src="${context.getAssetUrl('logo.svg')}"
      alt=""
    />
    For Web
  </a>
</h1>
`;
