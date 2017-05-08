import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
  // constructor(){
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  //go to store is the method to be created when we submit
  goToStore(event){
    event.preventDefault();
    console.log('You changed the URL');
    //first grab the text from the box
    //const value = $('input').val();
    //console.log(this.storeInput.value);
    const storeId =  this.storeInput.value;
    console.log(`Going to ${storeId}`);
    //secondly we need to transition from / to /store/;storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render(){
    //return <p>Hello</p>
    //return React.createElement('p',{className: 'Testing'}, 'I love to code and become a fullstack developer');
    //create a ref an arrow function
    //onSubmit = {this.goToStore.bind(this)}
    return(
      <form className = "store-selector" onSubmit={(e) => {this.goToStore(e)}}>
      <h2>Please Enter A Store</h2>
      <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
      <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
