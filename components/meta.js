import Head from "next/head";

// The purpose of this page to set some default styles for the whole application.
// Place things like background color and font here.
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
        rel="stylesheet"
        type="text/css"
      ></link>
    </Head>
    <style jsx global>{`
      body { 
        background: #131319;
        font: Roboto;
        color: rgba(0, 0, 0, 0.87);};
      }
    `}</style>
  </div>
);
