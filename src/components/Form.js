import React, { Component } from 'react';

export default class Form extends Component {
  createField(field, index) {
    switch (field.type) {
      case 'checkbox':
        return (
          <div key={field.id}>
            <span>{index + 1}</span>
            <label>Option one</label>
            <input type="checkbox" />
          </div>
        );
      default:
        return (
          <div key={field.id}>
            <span>{index + 1}</span>
            {field.edit ? <input type="text" /> : <label onClick={id => this.props.toggleInputChange(field.id)}>{field.label}</label>}
            <br />
            <textarea type="text" />
          </div>
        );
    }
  }

  render() {
    const { fields } = this.props;
    return (
      <div>
        {
          fields.map((field, index) => this.createField(field, index))
        }
      </div>
    );
  }
}
