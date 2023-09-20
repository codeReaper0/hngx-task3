// mockBackend.js

// Simulated user data (you can replace this with your own data)
const users = [
  {
    username: "user@example.com",
    password: "1Password",
  },
];

// Dummy backend function
export async function authenticate(username: string, password: string) {
  // Simulate a delay to mimic a real API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Check if the provided username and password match a user in the database
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    return {success: true, user};
  } else {
    return {success: false, error: "Invalid credentials"};
  }
}
