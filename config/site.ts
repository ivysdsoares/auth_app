export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "AuthCorp",
  description: "Cheque a autenticação dos seus usuário",
  pages: {
    dashboard: "/dashboard",
    login: "/signin",
    signup: "/signup",
    about: "/about",
  },
  links: {
    github: "https://github.com/ivysdsoares",
    linkedin: "https://www.linkedin.com/in/ivys-soares/",
  },
  api: {
    signup: "register",
    signin: "login",
    signout: "logout",
    dashboard: "dashboard",
  },
};
