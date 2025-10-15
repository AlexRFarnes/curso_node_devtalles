import { SaveFile } from './save-file.use-case';
import fs from 'fs';

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
    const saveFile = new SaveFile();
    const filePath = 'outputs/table.txt';

    const result = saveFile.execute({ fileContent: 'Hello, world!' });
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
    expect(fileContent).toBe('custom content');
  });
});
