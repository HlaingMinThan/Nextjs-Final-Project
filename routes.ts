const ROUTES = {
  HOME: "/",
  TAGS: "/tags",
  QUESTIONS: "/questions",
  QUESTION_CREATE: "/questions/create",
  QUESTION_DETAILS: (id: string) => "/questions/" + id,
  LOGIN: "/login",
  REGISTER: "/register",
};

export default ROUTES;
