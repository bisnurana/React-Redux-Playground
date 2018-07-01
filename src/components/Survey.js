import React, { Component } from 'react';
import {generate as generateID} from 'shortid';
import Form from './Form';

class Survey extends Component {
  state = {
    fields: []
  }
  onSelect(e) {
    if (e.target.value === 'text') {
      this.setState({fields: this.state.fields.concat({
        id:generateID(),
        type: 'text',
        label:'Write your question ?',
        edit:false
      })})
    }
    if (e.target.value === 'checkbox') {
      this.setState({fields: this.state.fields.concat({
        id:generateID(),
        type: 'checkbox',
        label: 'What is your fav food?',
        options: [{
          label: 'option one',
          checked: true
        }]
      })})
    }
  }
  toggleInputChange=(id)=>{
    const index=this.state.fields.findIndex(field=>field.id===id);
    console.log(index);
    const toggledArray=this.state.fields.map(field=>{
      if(field.id===id){
        return Object.assign({},field,{edit:true});
      }else{
      return Object.assign({},field,{edit:false});}
    })
    console.log(toggledArray,'toggle')
    this.setState({...this.state.fields,fields:toggledArray});
  }
  render() {
    console.log(this.state.fields,'state')
    return (
      <div>
        <Form fields={this.state.fields} toggleInputChange={this.toggleInputChange} ></Form>
        <select onChange={(e)=> this.onSelect(e)}>
          <option>Choose field...</option>
          <option value="text">Text</option>
          <option value="checkbox">Checkbox</option>
        </select>
      </div>
    );
  }
}
export default Survey;
