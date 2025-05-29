class User {
  static count = 0;

  constructor(name, login, password, grade) {
    this._name = name;
    this._login = login;
    this._password = password;
    this._grade = grade;
    User.count++;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get login() {
    return this._login;
  }

  set login(newLogin) {
    return "Невозможно изменить логин!";
  }

  get password() {
    return "********";
  }

  set password(newPassword) {
    this._password = newPassword;
  }

  get grade() {
    return "Неизвестное свойство grade";
  }

  set grade(newGrade) {
    return "Неизвестное свойство grade";
  }

  showInfo() {
    console.log(`Name: ${this.name}, Login: ${this.login}`);
  }

  eq(otherUser) {
    return this._grade === otherUser._grade;
  }

  lt(otherUser) {
    return this._grade < otherUser._grade;
  }

  gt(otherUser) {
    return this._grade > otherUser._grade;
  }
}

class SuperUser extends User {
  static count = 0;

  constructor(name, login, password, role, grade) {
    super(name, login, password, grade);
    this._role = role;
    SuperUser.count++;
  }

  get role() {
    return this._role;
  }

  set role(newRole) {
    this._role = newRole;
  }

  showInfo() {
    console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this.role}`);
  }
}
