import React from 'react';
import { shallow, mount } from 'enzyme';

import { TopNav } from './top-nav';
import { restartGame, generateAuralUpdate } from '../actions';

describe('<TopNav />', () => {
    it('renders the component without crashing', () => {
        shallow(<TopNav />);
    });

    it('dispatches the restartGame action', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<TopNav dispatch={dispatch} />);
        const randomNum = 45;
        const link = wrapper.find('.new');
        link.simulate('click');
        expect(dispatch).toHaveBeenCalledWith();
    });
});


// it('Should dispatch onMakeGuess when the form is submitted', () => {
//     const dispatch = jest.fn();
//     const wrapper = mount(<GuessForm dispatch={dispatch} />);
//     const value = '10';
//     wrapper.find('input[type="number"]').instance().value = value;
//     wrapper.simulate('submit');
//     expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
// });