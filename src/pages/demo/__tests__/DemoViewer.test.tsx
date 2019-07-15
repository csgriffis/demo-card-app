import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import setup from '../../../../setupTest';
import { DemoViewer } from '../DemoViewer';

beforeAll(() => {
  setup();
});

describe('Demo Viewer', () => {
  let mountedComponent: ReactWrapper | null;

  const mountDemoViewer = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<DemoViewer />);
    }

    return mountedComponent;
  }

  afterEach(() => {
    mountedComponent = null;
  })

  it('renders without error', () => {
    const demoViewer = mountDemoViewer();

    expect(demoViewer).toBeTruthy();
  });
});
