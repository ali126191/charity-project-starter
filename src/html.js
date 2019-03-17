import React, { Component } from 'react'
import favicon from './assets/img/favicon.ico'

export default class HTML extends Component {
  render() {
    return (
      <html lang='en' className='has-navbar-fixed-top'>
        <head>
          <meta charSet='utf-8' />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" /><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
          <meta name="generator" content="Gatsby 2.1.23" />
          <title>Shri Vitthal Hindu Mandir - Toronto Mississauga Brampton Hindu Temple &amp; Mandir</title>
          <meta name="description" content="Shri Vitthal Hindu Mandir is an innovative culture and community center located in the greater Toronto area in Mississauga. We are more than just a temple - see why." />
          <link rel="canonical" href="https://shrivitthal.com/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Shri Vitthal Hindu Mandir - Mississauga Temple &amp; Community" />
          <meta property="og:description" content="Shri Vitthal Hindu Mandir is an innovative culture and community center located in Mississauga. We are more than just a temple - see why." />
          <meta property="og:url" content="https://shrivitthal.com/" />
          <meta property="og:site_name" content="Shri Vitthal Hindu Mandir" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content="Shri Vitthal Hindu Mandir is an innovative culture and community center located in Mississauga. We are more than just a temple - see why." />
          <meta name="twitter:title" content="Shri Vitthal Hindu Mandir - Mississauga Temple &amp; Community" />
          <meta name="twitter:site" content="@shri_vitthal" />
          <meta name="twitter:domain" content="Shri Vitthal Hindu Mandir" />
          <meta name="twitter:image" content="https://shrivitthal.com/wp-content/uploads/2018/02/25497478040_140ce47f31_k.jpg" />
          <meta name="twitter:creator" content="@shri_vitthal" />
          <link rel="shortcut icon" href="/charity-project-starter/icons/icon-48x48.png?v=07fab8ad5473f1e15e5f98b64f5d02eda19b8316" />
          <link rel="manifest" href="/charity-project-starter/manifest.webmanifest" />
          <meta name="theme-color" content="#663399" />
          <link rel="apple-touch-icon" sizes="48x48" href="/charity-project-starter//icons/icon-48x48.png?v=07fab8ad5473f1e15e5f98b64f5d02eda19b8316" />
          <link rel="apple-touch-icon" sizes="72x72" href="/charity-project-starter/icons/icon-72x72.png?v=07fab8ad5473f1e15e5f98b64f5d02eda19b8316" />
          <link rel="apple-touch-icon" sizes="96x96" href="/charity-project-starter/icons/icon-96x96.png?v=07fab8ad5473f1e15e5f98b64f5d02eda19b8316" />
          <link rel="apple-touch-icon" sizes="144x144" href="/charity-project-starter/icons/icon-144x144.png?v=07fab8ad5473f1e15e5f98b64f5d02eda19b8316" />
          <link rel="apple-touch-icon" sizes="192x192" href="/charity-project-starter/icons/icon-192x192.png?v=07fab8ad5473f1e15e5f98b64f5d02eda19b8316" />
          <link rel="apple-touch-icon" sizes="256x256" href="/charity-project-starter/icons/icon-256x256.png?v=07fab8ad5473f1e15e5f98b64f5d02eda19b8316" />
          <link rel="apple-touch-icon" sizes="384x384" href="/charity-project-starter/icons/icon-384x384.png?v=07fab8ad5473f1e15e5f98b64f5d02eda19b8316" />
          <link rel="apple-touch-icon" sizes="512x512" href="/charity-project-starter/icons/icon-512x512.png?v=07fab8ad5473f1e15e5f98b64f5d02eda19b8316" />
          <link as="script" rel="preload" href="/charity-project-starter/webpack-runtime-ba5298afb76100472ba5.js" />
          <link as="script" rel="preload" href="/charity-project-starter/app-af465d18bebaf9307b17.js" />
          <link as="script" rel="preload" href="/charity-project-starter/component---node-modules-gatsby-plugin-offline-app-shell-js-caa6f560410bfe9ffa16.js" />
          <link as="fetch" rel="preload" href="/charity-project-starter/static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json" crossOrigin="use-credentials" />
          {this.props.headComponents}
          <link rel="dns-prefetch" href="https://www.google.com" />
          <link rel="dns-prefetch" href="https://yt3.ggpht.com" />
          <link rel="dns-prefetch" href="https://static.doubleclick.net" />
          <link rel="dns-prefetch" href="https://s.ytimg.com" />
          <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
          <link rel="dns-prefetch" href="https://i.ytimg.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link rel='shortcut icon' href={favicon} />
        </head>
        <body>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
