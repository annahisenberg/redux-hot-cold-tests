import React from 'react';
import { shallow } from 'enzyme';

import { GuessList } from './guess-list';

describe('<GuessList />', () => {
    it('renders the component without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });

    it('renders a ul with all the guesses', () => {
        const guesses = [1, 2, 3, 4, 5];
        let wrapper = shallow(<GuessList guesses={guesses} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(guesses.length);
        guesses.forEach((guess, index) => {
            expect(items.at(index).text()).toEqual(guess.toString());
        });
    });
});

    // expect(wrapper.find('ul').children()).toEqual.lengthOf(guesses.length);