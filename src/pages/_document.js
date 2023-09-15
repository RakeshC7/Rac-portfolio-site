import { Html, Head, Main, NextScript } from 'next/document';
// import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  const googleAnalyticsKey = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=outfit@400,900,800,300,500,600,200,100,700&display=swap"
          rel="stylesheet"
        />

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsKey}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsKey}', {
              page_path: window.location.pathname,
            });`
          }}
        />
      </Head>
      <body>
        <Main />

        <NextScript />
        {/* <Analytics /> */}
      </body>
    </Html>
  );
}