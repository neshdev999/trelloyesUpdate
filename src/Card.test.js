import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Store from './store';
import renderer from 'react-test-renderer';

/* Smoke Tests */
describe('First List cards renders correctly', ()=>{

    it('card renders without crashing', () =>{
        const div = document.createElement('div');
        const currentStore = Store;
        const currentCardIds = ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm'];

        currentCardIds.map(ites => {
            ReactDOM.render(<Card id={ites} cardStore={currentStore} />, div);
        });    
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('Second List cards renders correctly', ()=>{

    it('card renders without crashing', () =>{
        const div = document.createElement('div');
        const item = 'a';
        const currentStore = Store;
        const currentCardIds = ['b', 'c', 'd', 'f', 'h', 'i', 'k'];

        currentCardIds.map(ites => {
            ReactDOM.render(<Card id={ites} cardStore={currentStore} />, div);
        });    
        ReactDOM.unmountComponentAtNode(div);
    });
});


describe('Third List cards renders correctly', ()=>{

    it('card renders without crashing', () =>{
        const div = document.createElement('div');
        const item = 'a';
        const currentStore = Store;
        const currentCardIds = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

        currentCardIds.map(ites => {
            ReactDOM.render(<Card id={ites} cardStore={currentStore} />, div);
        });    
        ReactDOM.unmountComponentAtNode(div);
    });
});


describe('Fourth List cards renders correctly', ()=>{

    it('card renders without crashing', () =>{
        const div = document.createElement('div');
        const item = 'a';
        const currentStore = Store;
        const currentCardIds = ['l', 'm'];

        currentCardIds.map(ites => {
            ReactDOM.render(<Card id={ites} cardStore={currentStore} />, div);
        });    
        ReactDOM.unmountComponentAtNode(div);
    });
});


/* Snapshot Tests */



describe('First List cards UI renders as expected', ()=>{
    it('renders the UI as expected', () =>{
        const currentStore = Store;
        const currentCardIds = ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm'];
        
    
        currentCardIds.map(ites => {
            const tree = renderer.create(<Card id={ites} cardStore={currentStore} />).toJSON();
            expect(tree).toMatchSnapshot();
        }); 
    });
});

describe('Second List cards UI renders as expected', ()=>{
    it('renders the UI as expected', () =>{
        const currentStore = Store;
        const currentCardIds = ['b', 'c', 'd', 'f', 'h', 'i', 'k'];
        
    
        currentCardIds.map(ites => {
            const tree = renderer.create(<Card id={ites} cardStore={currentStore} />).toJSON();
            expect(tree).toMatchSnapshot();
        }); 
    });
});

describe('Third List cards UI renders as expected', ()=>{
    it('renders the UI as expected', () =>{
        const currentStore = Store;
        const currentCardIds = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
        
    
        currentCardIds.map(ites => {
            const tree = renderer.create(<Card id={ites} cardStore={currentStore} />).toJSON();
            expect(tree).toMatchSnapshot();
        }); 
    });
});

describe('Fourth List cards UI renders as expected', ()=>{
    it('renders the UI as expected', () =>{
        const currentStore = Store;
        const currentCardIds = ['l', 'm'];
        
    
        currentCardIds.map(ites => {
            const tree = renderer.create(<Card id={ites} cardStore={currentStore} />).toJSON();
            expect(tree).toMatchSnapshot();
        }); 
    });
});
