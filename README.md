# brittanyellich.com
![AWS CodeBuild Badge](https://codebuild.us-west-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiMjNZempaRDRDSTlQTHpCemsvKzh2eWduT1pCT0k0a1NPa2NHUnFWNUdCVnNzNVpMQXJzNUNkVGc2djNzbTI3d1pQc01hRTZXa2NhSkVIbk9KNGdNVWVvPSIsIml2UGFyYW1ldGVyU3BlYyI6IlFnWEJtWVNRMUM4eWhDcTMiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

This is a personal website and blog built from a starter template with [Ghost](https://ghost.org) & [Gatsby](https://gatsbyjs.org)

# Installing

```bash
# With Gatsby CLI
gatsby new gatsby-starter-ghost https://github.com/TryGhost/gatsby-starter-ghost.git
```

```bash
# From Source
git clone https://github.com/TryGhost/gatsby-starter-ghost.git
cd gatsby-starter-ghost
```

Then install dependencies

```bash
yarn
```

&nbsp;

# Running

Start the development server. You now have a Gatsby site pulling content from headless Ghost.

```bash
gatsby develop
```

By default, the starter will populate content from a default Ghost install located at https://gatsby.ghost.io.

To use your own install, edit the `.ghost.json` config file with your credentials. You can find your `contentApiKey` in the "Integrations" screen in Ghost Admin. The minimum required version for Ghost is `2.10.0` in order to use this starter without issues.

&nbsp;

# Optimising

You can disable the default Ghost Handlebars Theme front-end by enabling the `Make this site private` flag within your Ghost settings. This enables password protection in front of the Ghost install and sets `<meta name="robots" content="noindex" />` so your Gatsby front-end becomes the source of truth for SEO.

&nbsp;

# Extra options

```bash
# Run a production build, locally
gatsby build

# Serve a production build, locally
gatsby serve
```

Gatsby `develop` uses the `development` config in `.ghost.json` - while Gatsby `build` uses the `production` config.

&nbsp;

# Copyright & License

Copyright (c) 2013-2019 Ghost Foundation - Released under the [MIT license](LICENSE).
