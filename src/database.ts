import { Schema } from 'mongoose';

export abstract class RittaDatabase {
  abstract registerModel(name: string, model: Schema): Promise<Model>;
  abstract model(name: string): Promise<Model>;
}

export abstract class Model {
  abstract schema: Schema;
  abstract find(): Promise<Document[]>;
  abstract findOne(): Promise<Document | null>;
  abstract document(id: string): Promise<Document | null>;
  abstract newDocument(data: object): Promise<Document>;
}

export abstract class Document {
  abstract model: Model;
  abstract data: object;
  abstract save(): void;
  abstract delete(): void;
}
