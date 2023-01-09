import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    this.id = uuidV4();
    this.admin = false;
  }

  setAdmin(admin: boolean): void {
    this.admin = admin;
    this.updated_at = new Date();
  }
}

export { User };
