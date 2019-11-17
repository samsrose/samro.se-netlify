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
        background: #efefef;
        font-family: "Source Sans Pro";
        color: #fff;
        margin: 0;
        height: 100vh;
        width: 100%;
        user-select: none;
      }
      h1 {
        font-size: 8em;
        padding-top: 20px;
        margin-top: 50px;
        line-height: 0.25;
        text-shadow: #0005 -1px 1px 2px;
      }
      div {
        font-weight: 300;
        padding-top: 20px;
      }
      span {
        margin-right: 25px;
        letter-spacing: 1.25px;
        margin-top: 15px;
      }

      .innerSection {
        height: 100%;
        width: 50vw;
        background-size: cover;
        border-radius: 1px;
      }
      .innerSection h4 {
        margin: 0;
        font-size: 3em;
        text-shadow: #0005 -1px 1px 2px;
      }

      nav {
        width: 100%;
        margin-top: 50px;
      }
      nav span {
        color: #111;
        padding: 8px 15px;
        background: #fff;
        box-shadow: #0009 -1px 1px 3px;
        border-radius: 4px;
        border: 1px solid #0001;
        transition: 0.5s ease all;
      }
      nav span:nth-of-type(1),
      nav span:nth-of-type(2),
      nav span:nth-of-type(3) {
        background: #fff2;
        border-color: transparent;
      }
      nav span:nth-of-type(1):hover,
      nav span:nth-of-type(2):hover,
      nav span:nth-of-type(3):hover {
        cursor: default;
        opacity: 1;
      }

      nav span:hover {
        cursor: pointer;
        opacity: 0.75;
      }
      body {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: left;
        height: 100vh;
        top: 0;
        background-image: url(https://images.unsplash.com/photo-1565932887479-b18108f07ffd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
        background-size: cover;
        background-repeat: no-repeat;
      }
    `}</style>
  </div>
);
