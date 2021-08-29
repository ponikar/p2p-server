declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      VITE_SITE_URL: string;
      DATABASE_URL: string;
    }
  }
}

export {};
