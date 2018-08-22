// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

  render() {
    return (
      <html>
        <Head>
          <title>Next js Tutorial</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />

        </Head>
        <body>

          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}