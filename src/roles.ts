export abstract class RittaRoles {
  abstract listRoles(): Promise<Role[]>;
  abstract role(name: string | number): Promise<Role | null>;
  abstract create(name: string): Promise<Role | null>;
}

export abstract class Role {
  abstract get name(): string;
  abstract get id(): number;
  abstract setName(name: string): void;
  abstract delete(): void;
  abstract permissions(): Promise<RolePermissions | null>;
}

export abstract class RolePermissions {
  abstract get(): string[];
  abstract set(permissions: string[]): void;
}
