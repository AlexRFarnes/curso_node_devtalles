import { CreateTable } from './create-table.use-case';

describe('CreateTableUseCase', () => {
  test('should create table with default values', () => {
    const createTable = new CreateTable();
    const table = createTable.execute({ base: 2 });
    const rows = table.split('\n').filter(row => row.trim() !== '');

    expect(table).toContain('Tabla del 2');
    expect(rows.length).toBe(13);
    expect(table).toContain('2 x 1 = 2');
    expect(table).toContain('2 x 10 = 20');
  });

  test('should create table with custom values', () => {
    const createTable = new CreateTable();
    const table = createTable.execute({ base: 3, limit: 20 });
    const rows = table.split('\n').filter(row => row.trim() !== '');

    expect(table).toContain('Tabla del 3');
    expect(rows.length).toBe(23);
    expect(table).toContain('3 x 1 = 3');
    expect(table).toContain('3 x 20 = 60');
  });
});
