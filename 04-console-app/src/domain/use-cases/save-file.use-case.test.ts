import { SaveFile } from './save-file.use-case';
import fs from 'fs';
import { jest } from '@jest/globals';

describe('SaveFileUseCase', () => {
  const customOptions = {
    fileContent: 'custom content',
    fileDestination: 'custom-outputs',
    fileName: 'custom-table-name',
  };

  const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

  afterEach(() => {
    // clean up
    if (fs.existsSync('outputs')) {
      fs.rmSync('outputs', { recursive: true });
    }
    if (fs.existsSync(customOptions.fileDestination)) {
      fs.rmSync(customOptions.fileDestination, { recursive: true });
    }
  });

  test('should save file with default values', () => {
    const filePath = 'outputs/table.txt';

    const options = {
      fileContent: 'Hello, world!',
    };

    const saveFile = new SaveFile();

    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe('Hello, world!');
  });

  test('should save file with custom values', () => {
    const saveFile = new SaveFile();

    const result = saveFile.execute(customOptions);
    const fileExists = fs.existsSync(customFilePath);
    const fileContent = fs.readFileSync(customFilePath, 'utf-8');

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(customOptions.fileContent);
  });

  test('should return false if the directory cannot be created', () => {
    const saveFile = new SaveFile();

    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
      throw new Error('Failed to create directory');
    });

    const result = saveFile.execute(customOptions);
    expect(result).toBe(false);

    mkdirSpy.mockRestore();
  });

  test('should return false if the file cannot be saved', () => {
    const saveFile = new SaveFile();

    const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
      throw new Error('Failed to create file');
    });

    const result = saveFile.execute(customOptions);
    expect(result).toBe(false);

    writeFileSpy.mockRestore();
  });
});
