import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import setup from '../../../../setupTest';
import { Card, CardProps } from '../Card';

beforeAll(() => {
  setup();
});

describe('Card', () => {
  let mountedComponent: ReactWrapper | null;
  let props: CardProps = {
    user: {
      id: '100',
      email: 'fake@email.com',
      name: 'Fake Example',
      phoneNumber: '(813) 555-0955',
      location: 'Tampa, FL',
      image: 'http://img'
    }
  }

  const mountCard = () => {
    if (!mountedComponent) {
      // spread mocked props to Card
      mountedComponent = mount(<Card {...props} />);
    }

    return mountedComponent;
  }

  afterEach(() => {
    mountedComponent = null;
  })

  it('renders without error', () => {
    const card = mountCard();

    expect(card).toBeTruthy();
  });
})
