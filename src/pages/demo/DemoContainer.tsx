import React from 'react';
import { UserProvider } from '../../providers';
import { DemoViewer } from './DemoViewer';

/**
 * Wrap the Demo Viewer in the User Context
 */

export function DemoContainer() {
  return (
    <UserProvider>
      <DemoViewer />
    </UserProvider>
  )
}
