import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Store from './store';
import renderer from 'react-test-renderer';


/* Smoke Tests */
describe('First List renders correctly', ()=>{
    it('List renders without crashing', () =>{
        const div = document.createElement('div');
        const currentStore = Store;
        ReactDOM.render(<List listStore={currentStore} listId={currentStore.lists[0].id} listHeader={currentStore.lists[0].header} listCardIds={currentStore.lists[0].cardIds} key={1} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('Second List renders correctly', ()=>{
    it('List renders without crashing', () =>{
        const div = document.createElement('div');
        const currentStore = Store;
        ReactDOM.render(<List listStore={currentStore} listId={currentStore.lists[1].id} listHeader={currentStore.lists[1].header} listCardIds={currentStore.lists[1].cardIds} key={2} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('Third List renders correctly', ()=>{
    it('List renders without crashing', () =>{
        const div = document.createElement('div');
        const currentStore = Store;
        ReactDOM.render(<List listStore={currentStore} listId={currentStore.lists[2].id} listHeader={currentStore.lists[2].header} listCardIds={currentStore.lists[2].cardIds} key={3} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('Fourth List renders correctly', ()=>{
    it('List renders without crashing', () =>{
        const div = document.createElement('div');
        const currentStore = Store;
        ReactDOM.render(<List listStore={currentStore} listId={currentStore.lists[3].id} listHeader={currentStore.lists[3].header} listCardIds={currentStore.lists[3].cardIds} key={4} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

/* Snapshot Tests */

describe('First List UI renders as expected', ()=>{
    it('renders the List UI as expected', () =>{
        const currentStore = Store;    
        const tree = renderer.create(<List listStore={currentStore} listId={currentStore.lists[0].id} listHeader={currentStore.lists[0].header} listCardIds={currentStore.lists[0].cardIds} key={1} />).toJSON();
        expect(tree).toMatchSnapshot();     
    });
});

describe('Second List UI renders as expected', ()=>{
    it('renders the List UI as expected', () =>{
        const currentStore = Store;    
        const tree = renderer.create(<List listStore={currentStore} listId={currentStore.lists[1].id} listHeader={currentStore.lists[1].header} listCardIds={currentStore.lists[1].cardIds} key={2} />).toJSON();
        expect(tree).toMatchSnapshot();     
    });
});

describe('Third List UI renders as expected', ()=>{
    it('renders the List UI as expected', () =>{
        const currentStore = Store;    
        const tree = renderer.create(<List listStore={currentStore} listId={currentStore.lists[2].id} listHeader={currentStore.lists[2].header} listCardIds={currentStore.lists[2].cardIds} key={3} />).toJSON();
        expect(tree).toMatchSnapshot();     
    });
});

describe('Fourth List UI renders as expected', ()=>{
    it('renders the List UI as expected', () =>{
        const currentStore = Store;    
        const tree = renderer.create(<List listStore={currentStore} listId={currentStore.lists[3].id} listHeader={currentStore.lists[3].header} listCardIds={currentStore.lists[3].cardIds} key={4} />).toJSON();
        expect(tree).toMatchSnapshot();     
    });
});

