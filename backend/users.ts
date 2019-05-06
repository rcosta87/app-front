export class User {

  constructor(
              public userName:string,
              public email:string,
              public name: string,
              public password: string){}

  matches(another: User) : boolean{
    return another !== undefined
            && another.userName  === this.userName
            && another.password === this.password
  }
}

export const users: {[key:string]: User} = {
  "admin": new User('admin', 'admin@email.com', 'Admin',  'admin1234'),
  "person": new User('person','person@email.com', 'Person',  'user123'),
  "rhada": new User('rhada','rhadacosta@gmail.com', 'Rhada',  'r1234'),
  "paulo": new User('paulo','paulo@email.com', 'Paulo',  'paulo1234')
}
