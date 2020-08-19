import Head from "next/head";
// The purpose of this page to set some default styles for the whole application.
// Place things like background color and font here.
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta property="og:title" content="OpenMaze Experiment Design Toolbox" />
      <meta property="og:image" content="https://i.ibb.co/6nhQ4gh/Asset-1.png" />
      <meta property="og:description" content="OpenMaze is a general-purpose 3D experiment building toolbox, developed for use with Unity Software. OpenMaze requires no prior coding experience, allowing you to spend less time hacking and more time experimenting!"/>
      <meta property="og:url" content="https://openmaze.duncanlab.org/"/>  
      <title>OpenMaze</title>
 
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
      <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
      <link href='/favicon-96x96.png' rel='icon' type='image/png' sizes='96x96' />
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
