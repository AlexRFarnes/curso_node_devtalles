import { jest } from '@jest/globals';

const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];

  const { yargsPlugin } = await import('./yargs.plugin');

  return yargsPlugin;
};

describe('Test args plugin', () => {
  const originalArgv = process.argv;

  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  test('should return default values', async () => {
    const args = await runCommand(['-b', '5']);

    expect(args).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: 'table',
        d: 'outputs',
      })
    );
  });

  test('should return custom values', async () => {
    const args = await runCommand([
      '-b',
      '5',
      '-l',
      '20',
      '-s',
      '-n',
      'custom-table',
      '-d',
      'custom-outputs',
    ]);

    expect(args).toEqual(
      expect.objectContaining({
        b: 5,
        l: 20,
        s: true,
        n: 'custom-table',
        d: 'custom-outputs',
      })
    );
  });
});
