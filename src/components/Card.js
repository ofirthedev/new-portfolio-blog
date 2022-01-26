import React from "react";

export default function ImgMediaCard(props) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <div className="card" style={{ backgroundColor: props.bgColor }}>
        <img src={props.img} alt="work" />
        <div className="card-body">
          <h2 style={{ color: props.headerColor }}>{props.title}</h2>
          <p style={{ color: props.headerColor }}>{props.desc}</p>
          <h5>{props.author}</h5>
        </div>
      </div>
    </a>
  );
}
//----------
//Components
//----------
