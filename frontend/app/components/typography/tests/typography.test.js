import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { shallow, mount } from 'enzyme';

import { Body, BodyStyle } from 'components/typography/Body.js';
import { Caption, CaptionStyle } from 'components/typography/Caption.js';
import { Description, DescriptionStyle } from 'components/typography/Description.js';
import { Placeholder, PlaceholderStyle } from 'components/typography/Placeholder.js';
import { Subtitle, SubtitleStyle } from 'components/typography/Subtitle.js';
import { Title, TitleStyle } from 'components/typography/Title.js';


const testText = 'test';

describe('<Body />', () => {
  it('renders Body without crashing', () => {
    const wrapper = shallow(<Body text={ testText } />);
  });

  it('renders BodyStyle without crashing', () => {
    const wrapper = shallow(<BodyStyle text={ testText } />);
  });

  it('renders the passed in text string correctly', () => {
    const wrapper = mount(<Body text={ testText } />);
    expect(wrapper.text()).toEqual(testText);
  });

  it('renders the text with color:black if no color prop is included', () => {
    const wrapper = mount(<Body text={ testText } />);
    expect(wrapper).toHaveStyleRule('color', 'black');
  });

  it('renders the text with the specified color if a color prop is included', () => {
    const wrapper = mount(<Body text={ testText } color="#ccc" />);
    expect(wrapper).toHaveStyleRule('color', '#ccc');
  });

  it('should render a <div> tag', () => {
    const wrapper = shallow(<BodyStyle />);
    expect(wrapper.type()).toEqual('div');
  });
});


describe('<Caption />', () => {
  it('renders Caption without crashing', () => {
    const wrapper = shallow(<Caption text={ testText } />);
  });

  it('renders CaptionStyle without crashing', () => {
    const wrapper = shallow(<CaptionStyle text={ testText } />);
  });

  it('renders the passed in text string correctly', () => {
    const wrapper = mount(<Caption text={ testText } />);
    expect(wrapper.text()).toEqual(testText);
  });

  it('renders the text with color:black if no color prop is included', () => {
    const wrapper = mount(<Caption text={ testText } />);
    expect(wrapper).toHaveStyleRule('color', '#414650');
  });

  it('renders the text with the specified color if a color prop is included', () => {
    const wrapper = mount(<Caption text={ testText } color="#ccc" />);
    expect(wrapper).toHaveStyleRule('color', '#ccc');
  });

  it('should render a <div> tag', () => {
    const wrapper = shallow(<CaptionStyle />);
    expect(wrapper.type()).toEqual('div');
  });
});


describe('<Description />', () => {
  it('renders Description without crashing', () => {
    const wrapper = shallow(<Description text={ testText } />);
  });

  it('renders DescriptionStyle without crashing', () => {
    const wrapper = shallow(<DescriptionStyle text={ testText } />);
  });

  it('renders the passed in text string correctly', () => {
    const wrapper = mount(<Description text={ testText } />);
    expect(wrapper.text()).toEqual(testText);
  });

  it('should render a <div> tag', () => {
    const wrapper = shallow(<DescriptionStyle />);
    expect(wrapper.type()).toEqual('div');
  });
});


describe('<Placeholder />', () => {
  it('renders Placeholder without crashing', () => {
    const wrapper = shallow(<Placeholder text={ testText } />);
  });

  it('renders PlaceholderStyle without crashing', () => {
    const wrapper = shallow(<PlaceholderStyle text={ testText } />);
  });

  it('renders the passed in text string correctly', () => {
    const wrapper = mount(<Placeholder text={ testText } />);
    expect(wrapper.text()).toEqual(testText);
  });

  it('should render a <div> tag', () => {
    const wrapper = shallow(<PlaceholderStyle />);
    expect(wrapper.type()).toEqual('div');
  });
});


describe('<Subtitle />', () => {
  it('renders Subtitle without crashing', () => {
    const wrapper = shallow(<Subtitle text={ testText } />);
  });

  it('renders SubtitleStyle without crashing', () => {
    const wrapper = shallow(<SubtitleStyle text={ testText } />);
  });

  it('renders the passed in text string correctly', () => {
    const wrapper = mount(<Subtitle text={ testText } />);
    expect(wrapper.text()).toEqual(testText);
  });

  it('should render a <div> tag', () => {
    const wrapper = shallow(<SubtitleStyle />);
    expect(wrapper.type()).toEqual('div');
  });
});


describe('<Title />', () => {
  it('renders Title without crashing', () => {
    const wrapper = shallow(<Title text={ testText } />);
  });

  it('renders TitleStyle without crashing', () => {
    const wrapper = shallow(<TitleStyle text={ testText } />);
  });

  it('renders the passed in text string correctly', () => {
    const wrapper = mount(<Title text={ testText } />);
    expect(wrapper.text()).toEqual(testText);
  });

  it('should render a <div> tag', () => {
    const wrapper = shallow(<TitleStyle />);
    expect(wrapper.type()).toEqual('div');
  });
});
