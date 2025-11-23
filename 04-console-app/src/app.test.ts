import { expect, jest, test, describe } from '@jest/globals';
import { ServerApp } from './presentation/server-app';

describe('App', () => {
  test('should call ServerApp with values', async () => {
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;
    process.argv = [
      'node',
      'src/app.ts',
      '-b',
      '5',
      '-l',
      '10',
      '-s',
      '-n',
      'table',
      '-d',
      'outputs',
    ];

    await import('./app');

    expect(serverRunMock).toHaveBeenCalledWith({
      base: 5,
      limit: 10,
      displayTable: true,
      fileName: 'table',
      fileDestination: 'outputs',
    });
  });
});
