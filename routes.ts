const ROUTES = {
  HOME: "/",
  TAGS: "/tags",
  PROFILE: (id: string) => "/profile/" + id,
  TAG_DETAILS: (id: string) => "/tags/" + id,
  QUESTIONS: "/questions",
  QUESTION_CREATE: "/questions/create",
  QUESTION_DETAILS: (id: string) => "/questions/" + id,
  LOGIN: "/login",
  REGISTER: "/register",
  COMMUNITY: "/community",
  BOOKMARKS: "/bookmarks",
  SETTINGS: "/settings",
  REPUTATION: "/reputation",
};

export default ROUTES;
