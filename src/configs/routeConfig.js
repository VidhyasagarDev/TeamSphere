export const routeConfig = {
  auth: {
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
  },
  tasks: {
    list: "/tasks",
    create: "/tasks/create",
    edit: (taskId) => `/tasks/edit/${taskId}`,
  },
  projects: {
    list: "/projects",
    details: (projectId) => `/projects/${projectId}`,
  },
  profile: {
    view: "/profile",
    edit: "/profile/edit",
  },
  attendance: "/attendance",
  leave: {
    apply: "/leave/apply",
    manage: "/leave/manage",
  },
};
