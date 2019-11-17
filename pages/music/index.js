import React, { Component } from "react";
import content from "../content/music.md";

export default class Music extends Component {
  render() {
    let {
      html,
      attributes: { title, cats }
    } = content;
    return (
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    );
  }
}
