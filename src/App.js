import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Calculator from './components/calculator.js';
import Head from './polaris/card_polaris.js';
import FrameExample from './polaris/frame.js';
import Empty from './polaris/empty.js';
import Phone from './polaris/phone_no_input.js';
import SelectCountry from './polaris/select_country.js';
import Age from './polaris/age.js';
import Save from './polaris/save_button.js';

import Section from './polaris/section.js';
import Array from './array.js';
import {Button} from '@shopify/polaris';
import './index.css';

 
// Navbar Component
const Navbar=()=>
{
    return <h1>This is Navbar.</h1>
}
 
// Sidebar Component
const Sidebar=()=> {
    return <h1>This is Sidebar.</h1>
}
 
// Article list Component
const ArticleList=()=>
{
    return <>
    <h3>Article List Component Here</h3>
      <ul>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
        <li>List 4</li>
      </ul>
    </>
}
// Form Component
const Form=()=>
{
    return (
        <div>
            <input type = "text" placeholder = "Enter Text.." />
            <br />
            <br />
            <input type = "text" placeholder = "Enter Text.." />
            <br />
            <br />
            <button type = "submit">Submit</button>
        </div>
    );
} 
/// using Props Here
class PropsComponent extends React.Component{
  render(){
      return(
              <div>
                  {/*accessing information from props */}
                  <h2>Hello {this.props.user}</h2>
                  <h3>Text For Props Component Here</h3>
              </div>
          );
  }
}


class ArrayPropsClass extends React.Component{
  render(){
      return(
              <div>
                  {/* accessing array prop directly */}
                  <h1>Array Data For Props Are: {this.props.names}</h1>
              </div>
          );
  }
}

// Passing an array as prop
ArrayPropsClass.defaultProps = {
  names: ['Ram', 'Shyam', 'Raghav']
}



 
// App Component
const App=()=>
{
  //console.log(ArrayPropsClass);
    return(
            <div>
                {/* <Array /> */}
                <Head /><br />
                {/* <FrameExample /> */}
                {/* <Empty /> */}
                <Section /><br />
                <Phone /><br />
                <SelectCountry /><br />
                <Age /><br />
                <Button primary>Save Deatils</Button>
                {/* <Calculator />
                <Navbar />
                <hr></hr>
                <Sidebar />
                <hr></hr>
                <ArticleList />
                <hr></hr>
                <Form />
                <hr></hr>
                <PropsComponent user = "Using Props Of React" />
                <hr></hr>
                <ArrayPropsClass /> */}

            </div>
        );
}

export default App;