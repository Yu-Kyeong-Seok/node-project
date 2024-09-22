/** 게시글 라우터 */
const POST_ROUTES = {
  /** 관리자 게시글 API */
  ADMIN_POSTS_API: "/admin-api/posts",
  /** 게시글 API */
  POSTS_API: "/api/posts",
  /** 관리자 게시글 뷰 */
  ADMIN_POST_VIEW: "/admin/posts",
  /** 게시글 뷰 */
  POST_VIEW: "/posts",
} as const;

/** 인증 라우터 */
const AUTH_ROUTES = {
  /** Auth API */
  AUTH_API: "/api/auth",
  /** 유저 인증 뷰 */
  AUTH_VIEW: "/auth",
  /** 관리자 인증 뷰 */
  ADMIN_AUTH_VIEW: "/admin/auth",
} as const;

/** 사용자 라우터 */
const USER_ROUTES = {
  /** 유저 관리자 API */
  ADMIN_USERS_API: "/admin-api/users",
  /** 유저 API */
  USERS_API: "/api/users",
  /** 유저 관리자 뷰 */
  ADMIN_USER_VIEW: "/admin/users",
  /** 유저 뷰 */
  USER_VIEW: "/users",
} as const;


/** 업로드 라우터 */
const UPLOAD_ROUTES = {
  /** 업로드 API */
  UPLOAD_API: "/api/upload",
  /** 업로드 뷰 */
  UPLOAD_VIEW: "/upload",
} as const;

export const ROUTES_INDEX = {
  ...POST_ROUTES,
  ...AUTH_ROUTES,
  ...USER_ROUTES,
  ...UPLOAD_ROUTES,
} as const;
