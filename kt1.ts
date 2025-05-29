class User {
  static count = 0;

  constructor(name, login, password, grade) {
    this.name = name;
    this.login = login;
    this.password = password;
    this.grade = grade;
    User.count++;
  }

  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }

  get login() {
    return this.login;
  }

  set login(newLogin) {
    return ;
  }

  get password() {
    return "********";
  }

  set password(newPassword) {
    this.password = newPassword;
  }

  get grade() {
    return ;
  }

  set grade(newGrade) {
    return ;
  }

  showInfo() {
    console.log(`Name: ${this.name}, Login: ${this.login}`);
  }

  eq(otherUser) {
    return this.grade === otherUser._grade;
  }

  lt(otherUser) {
    return this.grade < otherUser._grade;
  }

  gt(otherUser) {
    return this.grade > otherUser._grade;
  }
}

class SuperUser extends User {
  static count = 0;

  constructor(name, login, password, role, grade) {
    super(name, login, password, grade);
    this.role = role;
    SuperUser.count++;
  }

  get role() {
    return this.role;
  }

  set role(newRole) {
    this.role = newRole;
  }

  showInfo() {
    console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this.role}`);
  }
}
