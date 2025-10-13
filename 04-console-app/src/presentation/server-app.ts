import { CreateTable } from '../domain/use-cases/create-table.use-case.js';
import { SaveFile } from '../domain/use-cases/save-file.use-case.js';

interface RunOptions {
  base: number;
  limit: number;
  displayTable: boolean;
}

export class ServerApp {
  static run({ base, limit, displayTable }: RunOptions) {
    console.log('Server running...');
    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      destination: `outputs/table-${base}`,
    });

    if (displayTable) console.log(table);

    wasCreated ? console.log('File created successfully') : console.log('File not created');
  }
}
