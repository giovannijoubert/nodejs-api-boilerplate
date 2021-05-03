export default class Product {
  public code: string;
  public price: number;
  public active: boolean;

  constructor() {
    this.code = null;
    this.price = null;
    this.active = true;
  }

  fill(newFields): void {
    for (const field in newFields) {
      if (this[field] !== undefined) {
        this[field] = newFields[field];
      }
    }
  }
}
