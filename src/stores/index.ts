import { observable, action, decorate } from "mobx";

export class AppState {
  users = [
    "Kim",
    "Tom",
    "Sam"
  ];

  selectedUser = "Kim";

  selectUser(user: string) {
    this.selectedUser = user;
  }
}

decorate (AppState, {
  users: observable,
  selectedUser: observable,
  selectUser: action
});


export const stories = {
  AppState: new AppState(),
}