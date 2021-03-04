import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';



describe('App', ()=>{

  it('App renders without crashing', () =>{
      const div = document.createElement('main');
      ReactDOM.render(<App storeProp={Store}/>, div);       
      ReactDOM.unmountComponentAtNode(div);
  });
});
