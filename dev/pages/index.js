import React, { Component } from "react";
// import Home from "../content/home.md";
import Page from "../layouts/main";
export default () => (
  <div>
    <Page>
      <section className="section">
        <div className="leftTop">
          <h1>Sam Rose</h1>
        </div>
        <div className="rightTop"></div>
        <div className="leftBottom">
          <h4>
            Fullstack Web Engineer <br />
            UX/UI Designer
          </h4>
        </div>
        <div className="bottomFull">
          <nav>
            <span>Website coming soon...</span>
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
