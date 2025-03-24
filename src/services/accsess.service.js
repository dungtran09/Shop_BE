class AccsessService {
  constructor() {}

  async signUp(userData) {
    console.log("Signup user:", userData);
    return { message: "User signed up successfully", user: userData };
  }

  async singIn(credentials) {
    console.log("Signin with:", credentials);
    return { message: "User signed in successfully", token: "fake-jwt-token" };
  }
}

export default new AccsessService();
