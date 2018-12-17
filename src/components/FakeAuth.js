export const FakeAuth = {
  isAuthenticated: false,
  authenticate(time) {
    this.isAuthenticated = true;
    setTimeout(time, 10); // fake async
  },
  signOut(time) {
    this.isAuthenticated = false;
    setTimeout(time, 10);
  }
};
