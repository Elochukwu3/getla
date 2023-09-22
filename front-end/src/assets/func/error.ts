export class MyCustomError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'MyCustomError';
    }
  }