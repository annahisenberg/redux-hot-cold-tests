import React from 'react';
import { shallow } from 'enzyme';

import { Feedback } from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('renders the feedback', () => {
        let FEEDBACK = 'Your score is...';

        let wrapper = shallow(<Feedback feedback={FEEDBACK} />);
        expect(wrapper.contains(FEEDBACK)).toEqual(true);
    });
});