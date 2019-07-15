import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import setup from '../../../../setupTest';
import { Card } from '../Card';
import { CardsViewer, CardViewerProps } from '../CardsViewer';

beforeAll(() => {
  setup();
});

describe('Cards Viewer', () => {
  let mountedComponent: ReactWrapper | null;
  let props: CardViewerProps = {
    // the users array could be moved to a __fixtures__ folder and imported as json if it grows larger
    users: [
      {
        id: '100',
        email: 'fake@email.com',
        name: 'Fake Example',
        phoneNumber: '(813) 555-0955',
        location: 'Tampa, FL',
        image: 'http://img'
      },
      {
        id: '101',
        email: 'fake1@email.com',
        name: 'Fake1 Example',
        phoneNumber: '(813) 555-0966',
        location: 'Miami, FL',
        image: 'http://img'
      },
      {
        id: '102',
        email: 'user@email.com',
        name: 'User Name',
        phoneNumber: '(727) 555-1010',
        location: 'Savannah, GA',
        image: 'http://img'
      }
    ],
    filter: ''
  }

  const mountCardsViewer = (propsToOverwrite?: CardViewerProps) => {
    if (!mountedComponent) {
      // use propsToOverwrite to change props passed to component between tests
      mountedComponent = mount(<CardsViewer {...Object.assign(props, propsToOverwrite)} />);
    }

    return mountedComponent;
  }

  afterEach(() => {
    mountedComponent = null;
  });

  it('renders without error', () => {
    const cardsViewer = mountCardsViewer();

    expect(cardsViewer).toBeTruthy();
  });

  it('shows the expected number of cards', () => {
    const cardsViewer = mountCardsViewer();

    expect(cardsViewer.find(Card)).toHaveLength(props.users.length);
  })

  it('filters cards by input', () => {
    const cardsViewer = mountCardsViewer({ users: props.users, filter: 'fl' });

    expect(cardsViewer.find(Card)).toHaveLength(2);
  });

});
