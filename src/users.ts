import { Role } from './roles';

export abstract class RittaUsers {
  abstract listUsers(): Promise<User[]>;
  abstract user(name: string): Promise<User | null>;
}

export abstract class User {
  abstract name(): Promise<string>;
  abstract id(): Promise<number>;
  abstract setFirstName(firstName: string): Promise<void>;
  abstract setMiddleNames(middleNames: string[]): Promise<void>;
  abstract setLastName(lastName: string): Promise<void>;
  abstract setNickname(nickname: string): Promise<void>;
  abstract setPassword(password: string): Promise<void>;
  abstract setMFASecret(password: string): Promise<void>;
  abstract setMFABackup(backupCode: string): Promise<void>;
  abstract delete(): Promise<void>;
  abstract accounts(): Promise<UserAccounts>;
  abstract store(): Promise<Store>;
}

export abstract class UserAccounts {
  abstract get(): Promise<Set<UserAccount>>;
  abstract set(accounts: Set<UserAccount>): Promise<Set<UserAccount>>;
  abstract create(): Promise<UserAccount>;
}

export abstract class UserAccount {
  abstract id(): Promise<string>;
  abstract setFirstName(firstName: string): Promise<void>;
  abstract setMiddleNames(middleNames: string[]): Promise<void>;
  abstract setLastName(lastName: string): Promise<void>;
  abstract setNickname(nickname: string): Promise<void>;
  abstract delete(): Promise<void>;
  abstract role(): Promise<Role>;
  abstract store(): Promise<Store>;
  abstract roleStore(): Promise<Store>;
  abstract setRole(role: string | number): Promise<void>;
}

export abstract class Store extends Map<string, any> {
  abstract set(key: string, value: any): this;
}
