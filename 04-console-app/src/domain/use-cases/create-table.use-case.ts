export interface CreateTableUseCase {
  execute: (options: Options) => string;
}

export interface Options {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor /**
   * DI - Dependency Injection
   */() {}

  execute({ base, limit = 10 }: Options) {
    let output = '';
    output += `===================================
        Tabla del ${base}
===================================\n
`;
    for (let i = 1; i <= limit; i++) {
      output += `${base} x ${i} = ${base * i}`;
      if (i < limit) output += '\n';
    }
    return output;
  }
}
