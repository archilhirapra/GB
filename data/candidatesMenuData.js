module.exports = [
  {
    id: 1,
    name: "Dashboard",
    icon: "la-home",
    routePath: "/candidates-dashboard/dashboard",
    active: "active",
  },
  {
    id: 2,
    name: "My Profile",
    icon: "la-user-tie",
    routePath: "/candidates-dashboard/my-profile",
    active: "",
  },
  {
    id: 3,
    name: "My Resume",
    icon: "la la-file-invoice",
    routePath: "/candidates-dashboard/my-resume",
    alterRoutePath: "/candidates-dashboard/my-resume?apply=true",
    active: "",
  },
  {
    id: 4,
    name: "Applied Jobs",
    icon: "la-briefcase",
    routePath: "/candidates-dashboard/applied-jobs",
    active: "",
  },
  {
    id: 5,
    name: "Job Alerts",
    icon: "la la-bell",
    routePath: "/candidates-dashboard/job-alerts",
    active: "",
  },
  // {
  //   id: 6,
  //   name: "Shortlisted Jobs",
  //   icon: "la-bookmark-o",
  //   routePath: "/candidates-dashboard/short-listed-jobs",
  //   active: "",
  // },
  // {
  //   id: 7,
  //   name: "CV manager",
  //   icon: "la la-file-invoice",
  //   routePath: "/candidates-dashboard/cv-manager",
  //   active: "",
  // },
  // {
  //   id: 8,
  //   name: "Packages",
  //   icon: "la-box",
  //   routePath: "/candidates-dashboard/packages",
  //   active: "",
  // },
  // {
  //   id: 9,
  //   name: "Messages",
  //   icon: "la-comment-o",
  //   routePath: "/candidates-dashboard/messages",
  //   active: "",
  // },
  {
    id: 10,
    name: "Change Password",
    icon: "la-lock",
    routePath: "/candidates-dashboard/change-password",
    active: "",
  },
  {
    id: 11,
    name: "Logout",
    icon: "la-sign-out",
    routePath: "/login",
    active: "",
  },
  {
    id: 12,
    name: "Delete Profile",
    icon: "la-trash",
    routePath: "/",
    active: "",
  },
];
