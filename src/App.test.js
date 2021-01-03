import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme'
import App from './App';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App {...props} />);
    // state
    if (state) wrapper.setState(state);
    return wrapper;
}

describe('<App/>', () => {
    it('should in <App/> component tobe 1 div', () => {
        // shallow mengambil isi dari component
        // const appComponent = shallow(<App/>);
        const appComponent = setup();
        // yang diharapkan dari test case ini sesuai atau tidak
        expect(appComponent.find('div').length).toBe(1)
    });
    it('should in class is called at least once', function () {
        const wrapper = setup();
        expect(wrapper.find("[className='App']").length).toBe(1);
        // const counterDisplay = findByAttr(wrapper,'App');
        // expect(counterDisplay.length).toEqual(1)
    })
    it('should in BrowserRouter is called at least once', function () {
        const wrapper = setup();
        expect(wrapper.find(<BrowserRouter/>).length).toBe(1);
        // const counterDisplay = findByAttr(wrapper,'App');
        // expect(counterDisplay.length).toEqual(1)
    })
    describe("<Navbar/>",()=>{
        it('should be 4 div in Navbar',function(){
            const wrapper = shallow(<Navbar/>);
            expect(wrapper.find('div').length).toBe(4);
        });
    })
});