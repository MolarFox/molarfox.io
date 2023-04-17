# Personal portfolio

[![Site preview](/public/site-preview.png)](https://molarfox.io)

The landing page of my personal website. This is based on the [work](https://github.com/HamishMW/portfolio) of [HamishW](https://hamishw.com/) in his personal portfolio site, but is heavily modified from it since being forked.

Built with [Next.js](https://nextjs.org/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/). View the [live site](https://molarfox.io) or check out a live version of the [components storybook](https://storybook.hamishw.com).

## Install & run

Make sure you have nodejs `18.0.0` or higher and npm `8.6.0` or higher installed. Install dependencies with:

```bash
npm install
```

Once it's done start up a local server with:

```bash
npm run dev
```

To view the components storybook:

```bash
npm run storybook
```

To create a production build:

```bash
npm run build
```

## Deployment

Deploy the site to github pages

```bash
npm run deploy
```

```bash
npm run deploy -- -m "<Message to go on gh pages deploy>"
```

By default, these will deploy to a `gh-pages` branch, and will contain only the built page files for use in static hosting.

A lambda function will also need to be setup to handle the incoming requests from the contact form, I've heavily modified this from the default being used in the base repo. You can find the Python lambda I'm using under `src/functions`, and it is hosted for the live site using AWS APIGW, AWS Lambda, and AWS SES. 

I might release the specific bits of my private terraform definitions here later on, so that you can replicate my setup byte-for-byte if you're so inclined.

## Permissions

These are the original statements from base repo:

> _I'm cool with anyone using the code or parts of the code for their own site, it is open source so people can learn from it and adapt it. However, I would encourage you to modify the theme and components it to make it your own. If you are using the site's design largely unmodified, I'd appreciate being credited as the designer of the website._

> _I do not give permission to present any of my projects as your own (this is being actively used as my portfolio site and these are my real projects I've worked on)._

Basically I second these, and encourage you to fork and modify this site if you like what you see. Please ensure to attribute both myself, [MolarFox](https://github.com/molarFox/), and the original designer, [Hamish](https://github.com/HamishMW/), if you do so!

## FAQs

<details>
  <summary>How do I change the color on the <code>DisplacementSphere</code> (blobby rotating thing in the background).</summary>
  
  You'll need to edit the fragment shader. [Check out this issue for more details](https://github.com/HamishMW/portfolio/issues/19#issuecomment-870996615).
</details>
