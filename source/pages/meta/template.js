const layout = require('../../partials/layout/template');

const renderPage = () => `
<h1 class="heading heading--1">Типографика</h1>
<p class="paragraph paragraph--lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse rem eveniet delectus! Doloribus laboriosam nam optio sequi tempore molestiae a eligendi repellendus vel facere veritatis deleniti rerum, in dolores.</p>

<p class="heading heading--1">Первый уровень</p>
<p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum voluptatem placeat assumenda aliquid officia repudiandae voluptate provident praesentium perferendis. Quia quis ab quibusdam doloremque voluptatem? Suscipit pariatur labore esse.</p>
<p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum voluptatem placeat assumenda aliquid officia repudiandae voluptate provident praesentium perferendis. Quia quis ab quibusdam doloremque voluptatem? Suscipit pariatur labore esse.</p>

<p class="heading heading--2">Второй уровень</p>
<p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum voluptatem placeat assumenda aliquid officia repudiandae voluptate provident praesentium perferendis. Quia quis ab quibusdam doloremque voluptatem? Suscipit pariatur labore esse.</p>
<p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum voluptatem placeat assumenda aliquid officia repudiandae voluptate provident praesentium perferendis. Quia quis ab quibusdam doloremque voluptatem? Suscipit pariatur labore esse.</p>

<p class="heading heading--3">Третий уровень</p>
<p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum voluptatem placeat assumenda aliquid officia repudiandae voluptate provident praesentium perferendis. Quia quis ab quibusdam doloremque voluptatem? Suscipit pariatur labore esse.</p>
<p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum voluptatem placeat assumenda aliquid officia repudiandae voluptate provident praesentium perferendis. Quia quis ab quibusdam doloremque voluptatem? Suscipit pariatur labore esse.</p>
`;

module.exports = (context) => layout(context, renderPage(context));
