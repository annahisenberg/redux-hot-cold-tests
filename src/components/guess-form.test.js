import React from 'react';
import { shallow, mount } from 'enzyme';

import { GuessForm } from './guess-form';
import { makeGuess } from '../actions';

describe('<GuessForm />', () => {
    it('renders the component', () => {
        shallow(<GuessForm />);
    });

    it('Should dispatch onMakeGuess when the form is submitted', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const value = '10';
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
    });

    it('should reset the input when the form is submitted', () => {
        const wrapper = mount(<GuessForm dispatch={() => { }} />);
        const input = wrapper.find('input[type="number"]');
        input.instance().value = '10';
        input.simulate('focus')
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    });
});