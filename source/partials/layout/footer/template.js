module.exports = (context) => `
<footer class="footer">
  <p>© 2014–... <a href="${context.siteData.author.url}">${
  context.siteData.author.name
}</a></p>
</footer>
`;
