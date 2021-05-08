import Adapters from "next-auth/adapters"

// Extend the built-in models using class inheritance
export default class User extends Adapters.TypeORM.Models.User.model {
  constructor(name, email, image, emailVerified, project, role) {
    super(name, email, image, emailVerified)
    if (project) { this.project = project}
    if (role) { this.role = role}
  }
}

export const UserSchema = {
  name: "User",
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    project: {
      type: "varchar",
      nullable: true
    },
    role: {
      type: "varchar",
      nullable: true
    },
  },
}