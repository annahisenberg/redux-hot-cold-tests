import React from 'react';
import { shallow } from 'enzyme';

import { GuessCount } from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('renders the guess count', () => {
        let GUESSCOUNT = 10;

        let wrapper = shallow(<GuessCount guessCount={GUESSCOUNT} />);
        expect(wrapper.text()).toEqual(`You've made ${GUESSCOUNT} guesses!`);
    });
});