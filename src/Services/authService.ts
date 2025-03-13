
export interface LoginData {
    username: string;
    password: string;
  }
  
  export interface AuthResponse {
    success: boolean;
    token?: string;
    error?: string;
  }
  
  export const loginAPI = async (data: LoginData): Promise<AuthResponse> => {
    const validUsername = "admin";
    const validPassword = "password123";
  
    return new Promise((resolve) => {
      setTimeout(() => {
        if (data.username === validUsername && data.password === validPassword) {
          resolve({ success: true, token: "mock-jwt-token-12345" });
        } else {
          resolve({ success: false, error: "Invalid username or password" });
        }
      }, 1000);
    });
  };
  