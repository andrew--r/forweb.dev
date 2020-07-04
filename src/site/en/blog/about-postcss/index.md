---
layout: article
tags: [articles, en]
date: 2015-07-18
title: "About PostCSS from its creator: interview with Andrey Sitnik"
description: Recently, the frontend development community has been actively discussing PostCSS. We asked Andrey Sitnik, the creator of PostCSS, about its purpose and applications.
---
<p class="paragraph--lead">
  Recently, the frontend development community has been actively discussing PostCSS. We asked <a href="http://sitnik.ru/">Andrey Sitnik</a>, the creator of PostCSS, about its purpose and applications.
</p>

<div class="chat">
  <p class="chat__message chat__message--out">
    Hi! Thank you for agreeing to talk. I think the conversation will be more or less spontaneous anyway, so I'll start with one question, and let the conversation take its course. Tell me a little bit about yourself?
  </p>

  <p class="chat__message chat__message--in">
    Born in Vladivostok. Lived in Yemen as a child. Graduated from the university in St. Pete. Now I'm working as a frontend developer on the Amplifr at Evil Martians, supporting the Autoprefixer and developing PostCSS.
  </p>

  <p class="chat__message chat__message--out">
    How did you even become a programmer? When and how did you first get interested in it? What path did you take before you end up with frontend?
  </p>

  <div class="chat__message chat__message--in">
    <p>
      As a child, I didn't want to be a programmer, I wanted to become a scientist. But I also had a big dream: to travel the world. And I thought programming was the easiest way to do it. And then I wrote my first program, launched it, and I saw that it worked. It was an inexpressible feeling when something you've done lives on its own.
    </p>
    <p>
      Next was Basic, Pascal, school competitions. Then I saw the world of PHP and the web and I liked it immediately. There was real freedom there. Dynamic language designed for creative work. And the result is available to everyone. Then I first saw Ruby on Rails. The video "blog in 5 minutes" was very exciting, because it showed the beginning of the completely new era.
    </p>
    <p>
      I wouldn't say I was striving for frontend. It was just easier for me to solve problems visually, easier to understand design. So as time went on I was doing more and more on the frontend and less and less on the backend.
    </p>
  </div>

  <p class="chat__message chat__message--out">
    So you originally did a little backend work, writing in PHP and Ruby? I can't tell much about PHP, but Ruby is very expressive and beautiful language. Do you have any regrets switching to JavaScript after Ruby?
  </p>

  <p class="chat__message chat__message--in">
    Let's say, I wouldn't be able to program on pure JS at all, but CoffeeScript, ES6 improve the language a lot up to some acceptable level. The language still lacks a lot of features, but it's tolerable already.
  </p>

  <p class="chat__message chat__message--out">
    JavaScript is developing a lot faster than CSS. ES6 release added a lot of innovations that allow to work without additional tools, like CoffeeScript. But in case of CSS using a preprocessor has already become a de facto standard. Did you use some kind of preprocessor before?
  </p>

  <div class="chat__message chat__message--in">
    <p>
      You make it sound like ES6 is supported in every browser. We just switched from one preprocessor (CoffeeScript) to another (Babel). Even when browsers add complete support for ES6, we will still use Babel for ES7 and so on. But compared to that, I really don't like the stagnation in the world of CSS preprocessors. Nothing has changed in Sass, Less, Stylus over the last year, and that looks like the death sentence.
    </p>
    <p>
      I used Sass before because I'm from the Ruby world.
    </p>
  </div>

  <div class="chat__message chat__message--out">
    <p>
      I used Sass before too, but it is soooooo sloooooow.
    </p>
    <p>
      The world of Sass/Less/Stylus really didn't change recently at all. But, truth be told, they solve their tasks pretty well. Still, stability without any progress is destructive.
    </p>
    <p>
      On the other hand, the CSS world got such tools as Rework and then PostCSS. Can you tell the uneducated readers in short what kind of tool it is, PostCSS, and most importantly, what problem does it solve?
    </p>
  </div>

  <div class="chat__message chat__message--in">
    <p>
      Technically <a href="https://github.com/postcss/postcss">PostCSS</a> is a tool that allows its JS plugins to rebuild a CSS file. But in reality, this tool allows us to take a very different approach to how we write CSS in general. It is possible to write brand new tools based on PostCSS that will help us with writing CSS code. Tools we didn't even think about before. It's not about variables or mixins. PostCSS is the next step where these things are no longer so important.
    </p>
    <p>
      For example, <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a> prefixes your rules only where it is necessary. No need to write mixins and alike, it works with regular CSS. Or <a href="http://cssnext.io/">cssnext</a> which compiles CSS4 into regular CSS (like Babel for ES6). And <a href="https://github.com/luisrudge/postcss-flexbugs-fixes">postcss-flexbugs-fixes</a> contains a database of flexbox implementation errors in browsers. It automatically fixes or warns you when the code will not work because of these errors.
    </p>
  </div>

  <p class="chat__message chat__message--out">
    So in fact PostCSS receives our CSS code (possibly invalid), performs certain manipulations with it, somehow modifies it and outputs already converted, valid CSS?
  </p>

  <div class="chat__message chat__message--in">
    <p>
      Yes. For example, the <a href="https://github.com/postcss/postcss-nested">postcss-nested</a> plugin is 60 lines long and just runs through CSS and replaces <code>a { b { } }</code> with <code>a b {}</code>. But PostCSS is not just about CSS transformations.
    </p>
    <p>
      For example, Twitter uses PostCSS to <a href="https://github.com/postcss/postcss-bem-linter"> check the BEM notation</a>. Or the <a href="https://github.com/anandthakker/doiuse">doiuse</a> plugin, which checks with Can I Use if all the properties you use are supported in the browsers you need. And recently announced <a href="https://github.com/stylelint/stylelint">stylelint</a> is a very smart CSS-linter built on a modular architecture like ESLint.
    </p>
  </div>

  <p class="chat__message chat__message--out">
    That's interesting. You mentioned Twitter. The PostCSS page on Github says that PostCSS is also used by Google, Alibaba and Shopify. Can you elaborate on that? What tasks do they perform with PostCSS?
  </p>

  <div class="chat__message chat__message--in">
    <p>
      Shopify uses Autoprefixer. Google uses Autoprefixer and recommends it as the one and only tool for working with browser prefixes. I don't know exact list of plugins used by Alibaba, but they develop <a href="https://github.com/cssdream/cssgrace">cssgrace</a> and several plugins for cssnext. So they use these two for sure. In China they have a big problem with IE support: versions 8, 7 and sometimes even 6 are still popular. So cssgrace is the opposite of cssnext. It finds features that are not supported in the legacy IE and inserts hacks for the code to work.
    </p>
    <p>
      Twitter moved even further: they completely abandoned the preprocessors. When I last spoke to <a href="https://github.com/necolas">Nikolas</a>, he said that they are using Rework now and are in progress of switching to PostCSS.
    </p>
  </div>

  <div class="chat__message chat__message--out">
    <p>
      I also heard that bootstrap 5 will probably <a href="https://twitter.com/mdo/status/591364406816079873">be rewritten in PostCSS</a>. That sounds like a revolution in the CSS world.
    </p>
    <p>
      The Twitter experience is quite curious. Many developers are afraid to completely switch to PostCSS. Best case scenario, they use some preprocessor together with Autoprefixer. Is it already possible to abandon preprocessors and continue with the same tasks, but with PostCSS? Or is it not designed to completely replace preprocessors?
    </p>
  </div>

  <div class="chat__message chat__message--in">
    <p>
      PostCSS was created to replace preprocessors right away. If we can solve such complex tasks, like Autoprefixer or cssnext do, it's very easy to support nesting or variables. Just this week was released <a href="https://github.com/jonathantneal/precss">PreCSS</a> – a set of plug-ins for PostCSS to assemble something like preprocessor.
    </p>
    <p>
      But there's an important nuance here. If your project is already written in Sass, you shouldn't migrate it to PreCSS, you should better add PostCSS after Sass. The thing is, Sass stagnation lasted for too long. As a result we have a lot of bad practices in code structure. I've seen whole programs written in Sass, and this is certainly a bad practice. It's like making SQL queries in templates: a high coupling. That's why in PostCSS we change the philosophy a bit. Your styles should be simple. @for should be used just to not repeat the same blocks, not to write algorithms. If you need complex logic, the best solution is to put it into JS. And when an old project is rewritten from Sass to PostCSS it is not just a question of changing the syntax, but rather a question of changing the way you think. It's best to try only PostCSS without preprocessors on a new project. It will help you understand philosophy behind PostCSS.
    </p>
  </div>

  <p class="chat__message chat__message--out">
    Tell me, how did you come up with the idea of creating PostCSS? Was there a problem that preprocessors couldn't solve?
  </p>

  <div class="chat__message chat__message--in">
    <p>
      It all started out of hatred. Hatred of Compass. They had terrible project management: you send PR, and they are silent for months. The last straw was when a friend of mine closed down her business through all the difficulties of Russian bureaucracy, and it still was easier and faster than Compass accepting my PR.
    </p>
    <p>
      So I figured Compass had to be replaced. And the main feature in Compass was the prefixes. I started to think how I could make the prefixes management even more simple. I did everything by the <abbr title="Also known as TIPS – the Theory of Inventive Problem Solving">TRIZ</abbr>, trying to invent the perfect solution to manage the prefixes. And I came up with the idea of the Autoprefixer, which was impossible to be made on preprocessors by design.
    </p>
    <p>
      But credits for general idea of modular processors go to TJ Holowaychuk and his Rework project. The first version of the Autoprefixer was even called rework-vendors. But Autoprefixer outgrew Rework very quickly: we needed a better parser, better code maps support. The guys from Rework didn't want to change the architecture. So I started PostCSS as an improvement of Rework's ideas.
    </p>
  </div>

  <p class="chat__message chat__message--out">
    Now you have completely abandoned preprocessors and use only PostCSS at work?
  </p>

  <p class="chat__message chat__message--in">
    Yes. But I needed very little from the preprocessors: nesting, some simple config with website colors, simple loops and mixins to avoid repeating the code. The only thing missing from preprocessors is a simple syntax like Stylus. But we are working on it. PostCSS 4.2 will support different parsers.
  </p>

  <p class="chat__message chat__message--out">
    Wow, this is really cool. And how do you deal with the syntax highlighting? Because, as far as I know, there are no color schemes tailored specifically for PostCSS. And the abundance of different plugins complicates this task.
  </p>

  <p class="chat__message chat__message--in">
    Plugins do not create any problem, because they don't introduce new syntactic constructions, only new properties or @directives. Right now SCSS highlighting works fine with PostCSS files, because PostCSS itself works with regular CSS, only with the nesting feature.
  </p>

  <p class="chat__message chat__message--out">
    Someone said on our <a href="http://vk.com/forwebdev">community</a> comments that it would be reasonable to introduce some special extension for style files written in PostCSS - well, at least to avoid confusion. Something like main.pcss. Have you thought about it?
  </p>

  <p class="chat__message chat__message--in">
    We will definitely have a special extension for shorthand syntax – SugarSS.
  </p>

  <p class="chat__message chat__message--out">
    What about the usual syntax?
  </p>

  <p class="chat__message chat__message--in">
    We didn't decide it yet. :) Some plugins like Autoprefixer, cssnext or postcss-focus do not add anything to CSS, they do not need an extension. Maybe they will come up with some kind of extension in the PreCSS project.
  </p>

  <p class="chat__message chat__message--out">
    PostCSS is called a postprocessor. And how is the postprocessor different from the preprocessor? Where did the term come from, anyway?
  </p>

  <p class="chat__message chat__message--in">
    I don't know where it came from. Now it lost its meaning already, the line is too blurry. Originally, postprocessor was the term for PostCSS plugins that work with ordinary CSS, for example, Autoprefixer, future standards polyfills. But for PostCSS, there is a set of PreCSS plug-ins that work completely like a preprocessor. I try not to use the term postprocessor anymore. :)
  </p>

  <p class="chat__message chat__message--out">
    If the creator himself recommends not to use this term, it is a sin now to pronounce it. :) And perhaps the last question is how many people are currently working on PostCSS and what are your plans for the future?
  </p>

  <div class="chat__message chat__message--in">
    <p>
      Since we have a modular project, we cannot say there is any apparent team. It's more like an interweaving of important modules.
    </p>
    <p>
      I mostly work on the core of PostCSS, although everyone else actively helps me with English. Maxime Thirouin from France develops cssnext and stylelint and is active community member. Ben Briggs from England develops important infrastructure plugins like postcss-use and helps beginners in <a href="https://gitter.im/postcss/postcss">gitter chat</a>. Jonathan Neal from USA develops PreCSS. 一丝 from China migrates codebase to PostCSS for Taobao and other Alibaba projects, and is responsible for PR in China. David Clark from the USA deals with linters (Stylelint and postcss-bem-linter) and writes excellent articles explaining PostCSS to newbies.
    </p>
    <p>
      This is the most obvious core of the project, but one way or another about 90 people are involved. Someone writes plug-ins, someone talks about PostCSS. And there is no hard line between the "core" and the others.
    </p>
  </div>

  <p class="chat__message chat__message--out">
    Wow, that's not bad. And what plans do you have?
  </p>

  <p class="chat__message chat__message--in">
    In version 4.2 we will add pluggable parsers. It will be possible to parse SCSS, Less, and a special syntax like Stylus, where you do not need to wrap anything in curly brackets ({}) or end statements with semicolons (;). In version 4.3 we will extend API adding selectors parser, values parser. And then there will be a big release 5.0, where we will fix the API, making it more logical, since some parts of the project were developed spontaneously. We are also planning a website and a small PostCSSConf meetup somewhere in Europe.
  </p>

  <p class="chat__message chat__message--out">
    Cool! Will there be colons in this Stylus-like syntax or not?
  </p>

  <p class="chat__message chat__message--in">
    It's not decided yet. I want to save the ability to write multi-line values (for example, for long gradients).
  </p>

  <p class="chat__message chat__message--out">
    It would be cool to implement a concise syntax from Stylus without colons. We'll be waiting for the news then. Thank you for the interview! It was nice to talk. We wish you and your project success!
  </p>
</div>
