import React from 'react';
import { ApplicationContextProvider } from '@commercetools-frontend/application-shell-connectors';
import { render } from 'react-testing-library';
import { TPermissions, TPermissionName } from '../../types';
import { permissions } from '../../constants';
import useIsAuthorized from './use-is-authorized';

type TestProps = {
  demandedPermissions: TPermissionName[];
  shouldMatchSomePermissions: boolean;
};

const TestComponent = (props: TestProps) => {
  const isAuthorized = useIsAuthorized({
    demandedPermissions: props.demandedPermissions,
    shouldMatchSomePermissions: props.shouldMatchSomePermissions,
  });
  return (
    <ul>
      <li>Is authorized: {isAuthorized ? 'Yes' : 'No'}</li>
    </ul>
  );
};

const testRender = ({
  demandedPermissions,
  shouldMatchSomePermissions,
  actualPermissions = { canManageProject: true },
}: {
  demandedPermissions: TPermissionName[];
  shouldMatchSomePermissions: boolean;
  actualPermissions?: TPermissions;
}) =>
  render(
    <ApplicationContextProvider
      project={{
        key: 'test-with-big-data',
        version: 43,
        name: 'Test with big data',
        countries: ['de', 'en'],
        currencies: ['EUR', 'GBP'],
        languages: ['de', 'en-GB'],
        owner: {
          id: 'project-id-1',
        },
        permissions: actualPermissions,
      }}
      environment={{
        applicationName: 'my-app',
        frontendHost: 'localhost:3001',
        mcApiUrl: 'https://mc-api.commercetools.com',
        location: 'eu',
        env: 'production',
        cdnUrl: 'http://localhost:3001',
        servedByProxy: false,
      }}
      projectDataLocale="en"
    >
      <TestComponent
        demandedPermissions={demandedPermissions}
        shouldMatchSomePermissions={shouldMatchSomePermissions}
      />
    </ApplicationContextProvider>
  );

describe('when only one permission matches', () => {
  describe('when it should match some permission', () => {
    it('should indicate being authorized', () => {
      const { queryByText } = testRender({
        demandedPermissions: [
          permissions.ManageCustomers,
          permissions.ManageOrders,
        ],
        actualPermissions: {
          canManageCustomers: true,
        },
        shouldMatchSomePermissions: true,
      });

      expect(queryByText('Is authorized: Yes')).toBeInTheDocument();
    });
  });
  describe('when it should not match some permission', () => {
    describe('when `ManageProject` permission is set', () => {
      it('should indicate being authorized', () => {
        const { queryByText } = testRender({
          demandedPermissions: [
            permissions.ManageCustomers,
            permissions.ManageProject,
          ],
          shouldMatchSomePermissions: false,
        });

        expect(queryByText('Is authorized: Yes')).toBeInTheDocument();
      });
    });
    describe('when `ManageProject` permission is not set', () => {
      it('should indicate being not authorized', () => {
        const { queryByText } = testRender({
          actualPermissions: {
            canManageCustomers: true,
          },
          demandedPermissions: [
            permissions.ManageCustomers,
            permissions.ManageProject,
          ],
          shouldMatchSomePermissions: false,
        });

        expect(queryByText('Is authorized: No')).toBeInTheDocument();
      });
    });
  });
});