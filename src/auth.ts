import { FastifyReply, FastifyRequest } from 'fastify';

export abstract class RittaAuth {
  abstract list(): Promise<Strategy[]>;
  abstract register(): Promise<Strategy>;
}

export abstract class Strategy {
  abstract name: string;
  abstract image: string;
  abstract showInLogin: boolean;
  abstract bypassMFA: boolean;
  abstract authStart(req: FastifyRequest, reply: FastifyReply): void;
  abstract callback(req: FastifyRequest): Promise<String | null>;
}
