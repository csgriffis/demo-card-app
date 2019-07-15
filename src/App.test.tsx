import { shallow } from 'enzyme';
import React from 'react';
import setup from '../setupTest';
import App from './App';

beforeAll(() => {
  setup();
});

describe('App', () => {
  it('loads without error', () => {
    const component = shallow(<App />);

    expect(component).toBeTruthy();
  });
});
