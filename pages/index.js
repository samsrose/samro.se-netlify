import React, { Component } from "react";
// import Home from "../content/home.md";
import Page from "../layouts/main";
export default () => (
  <div>
    <Page>
      <section className="section">
        <div className="innerSection">
          <h1>Sam Rose</h1>
          <h4>Fullstack Engineer / Musician / Hacker</h4>
          <nav>
            <span>About</span>
            <span>Code</span>
            <span>Music</span>
            <span>Linkedin</span>
            <span>Splice</span>
          </nav>
        </div>
      </section>
    </Page>
  </div>
);

// export default class Home extends Component {
//   render() {
//     let { html , attributes:{ title, cats } } = content;
//     return (
//       <article>
//           <h1>{title}</h1>
//           <div dangerouslySetInnerHTML={{ __html: html }}/>
//           <ul>
//               { cats.map((cat, k) => (
//                   <li key={k}>
//                     <h2>{cat.name}</h2>
//                     <p>{cat.description}</p>
//                   </li>
//               ))}
//           </ul>
//       </article>
//     )
//   }
// }
