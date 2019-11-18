import Head from "next/head";
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        defer
      />

      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900,300italic"></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      ></link>
    </Head>
    <style jsx global>{`
      body {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: left;
        height: 100vh;
        color: #fff;
        width: 100vw;
        overflow: hidden;
        background-size: cover;
        background-repeat: no-repeat;
      }
      .rightTop {
        background-image: url(https://media0.giphy.com/media/l3vR0qrBQUyCO2sA8/giphy.gif?cid=790b761184cde77c9da931eb67c4b2319cef62439c4c090d&rid=giphy.gif);
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        width: 50vw;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
      }

      .leftBottom {
        height: 50vh;
        width: 50vw;
        background: #100a;
        color: #fff;
        position: fixed;
        left: 0;
        bottom: 25vh;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .leftTop h1 {
        font-size: 4.5em;
        line-height: 1;
        margin-left: 50px;
      }
      .leftTop {
        height: 25vh;
        width: 50vw;
        background: #fff;
        color: #111;
        position: fixed;
        left: 0;
        top: 0;
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;

        justify-content: center;
      }
      .leftBottom h4 {
        margin: 0;
        margin-left: 50px;
        font-size: 2em;
        text-shadow: #0005 -1px 1px 2px;
      }
      .bottomFull {
        background: #111;
        width: 100vw;
        height: 25vh;
        position: fixed;
        left: 0;
        bottom: 0;
      }
      .bottomFull nav {
        width: 100%;
      }
      nav {
        display: inline-flex;
        flex-direction: column;
        salign-items: center;
        justify-content: center;
      }
      nav span {
        color: #fff;
        font-size: 1.25em;
        text-align: center;
        margin-top: 5vh;
        border-radius: 2px;
        transition: 0.5s ease all;
      }

      nav span:hover {
        // cursor: pointer;
        opacity: 0.75;
      }
    `}</style>
  </div>
);
