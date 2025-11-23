import { expect, jest, test, describe, beforeEach } from '@jest/globals';
import { ServerApp } from './server-app';
import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

describe('ServerApp', () => {
  const options = {
    base: 10,
    limit: 20,
    displayTable: true,
    fileName: 'test-filaname.txt',
    fileDestination: 'test-destination',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should create server app instance', () => {
    const serverApp = new ServerApp();

    expect(serverApp).toBeInstanceOf(ServerApp);
  });

  test('should run Serverapp with options', () => {
    const logSpy = jest.spyOn(console, 'log');
    const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
    const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');
    ServerApp.run(options);
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy).toHaveBeenCalledWith('Server running...');
    expect(logSpy).toHaveBeenLastCalledWith('File created successfully');
    expect(createTableSpy).toHaveBeenCalledTimes(1);
    expect(createTableSpy).toHaveBeenCalledWith({ base: options.base, limit: options.limit });
    expect(saveFileSpy).toHaveBeenCalledTimes(1);
    expect(saveFileSpy).toHaveBeenCalledWith({
      fileContent: expect.any(String),
      fileName: options.fileName,
      fileDestination: options.fileDestination,
    });
  });

  test('should run with custom values mocked', () => {
    const logMock = jest.fn();
    const errorLogMock = jest.fn();
    const createTableMock = jest.fn().mockReturnValue('1 x 1 = 1\n');
    const saveFileMock = jest.fn().mockReturnValue(true);

    console.log = logMock;
    console.error = errorLogMock;
    CreateTable.prototype.execute = createTableMock;
    SaveFile.prototype.execute = saveFileMock;

    ServerApp.run(options);

    expect(logMock).toHaveBeenCalledWith('Server running...');
    expect(createTableMock).toHaveBeenCalledWith({ base: options.base, limit: options.limit });
    expect(saveFileMock).toHaveBeenCalledWith({
      fileContent: '1 x 1 = 1\n',
      fileName: options.fileName,
      fileDestination: options.fileDestination,
    });

    expect(logMock).toHaveBeenCalledWith('File created successfully');
    expect(errorLogMock).not.toHaveBeenCalled();
  });
});
