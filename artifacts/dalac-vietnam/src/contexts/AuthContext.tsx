import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface User {
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const ACCOUNTS: Array<{ email: string; password: string; user: User }> = [
  {
    email: "admin@dalacvietnam.com.vn",
    password: "DaLac@2024",
    user: {
      name: "Lê Dụng Quang",
      email: "admin@dalacvietnam.com.vn",
      role: "Giám đốc / Director",
    },
  },
];

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
  isAuthenticated: false,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem("dalac_user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("dalac_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("dalac_user");
    }
  }, [user]);

  const login = (email: string, password: string): boolean => {
    const match = ACCOUNTS.find(
      (a) => a.email === email.trim() && a.password === password
    );
    if (match) {
      setUser(match.user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
