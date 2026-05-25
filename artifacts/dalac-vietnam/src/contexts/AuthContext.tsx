import { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  isAuthenticated: boolean;
}

const ACCOUNTS: Array<{ email: string; password: string; user: User }> = [
  {
    email: "admin@dalacvietnam.com.vn",
    password: "DaLac@2024",
    user: {
      id: "admin-001",
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
  updateUser: () => {},
  isAuthenticated: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
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

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
