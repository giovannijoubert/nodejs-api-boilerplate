export default class Product {
  public code: string;
  public price: number;

  constructor() {
    this.code = null;
    this.price = null;
  }

  fill(newFields): void {
    for (const field in newFields) {
      if (this[field] !== undefined) {
        this[field] = newFields[field];
      }
    }
  }
}
