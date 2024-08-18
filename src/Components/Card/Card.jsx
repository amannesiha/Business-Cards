import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  render() {
    let { name, email, phone, color } = this.props;
    return (
      <div className={`container ${this.props.color}`}>
        <p>Name: {name}</p>
        <p>Email:{email}</p>
        {phone && <p> Phone:{phone}</p>}
        {/* This printed only the data is transfered */}
      </div>
    );
  }
}

export default Card;
// If their is a change u can pass with props and render in app.jsx after importing the card.jsx
// mikeyayer neger sinor be props mastelalef kezam app.jsx lay render maderg after import
// then transfer to parent components

// `${5+7}` string and javascript with back tick
//  back tick is part of javascript syntax
// template iteral sign
// props adis data mastelalef
// component reusability
// u can call from database using api key and render
// using datastructure format
