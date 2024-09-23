type adminGetUsersRequestPath = {};

type adminGetUsersRequestParams = {};

type adminGetUsersRequestBody = {};

/** 유저 목록 조회 (관리자) 요청 */
type adminGetUsersRequest = {
  params?: getUsersRequestParams;
  path?: getUsersRequestPath;
  body?: getUsersRequestBody;
};

/** 유저 목록 조회 (관리자) 응답 */
type adminGetUsersResponse = Array<{
  id: string;
  email: string;
  profile: {
    firstName: string;
  };
}>;

type adminGetUserRequestPath = {
  /** 유저 ID */
  userId: string;
};

type adminGetUserRequestParams = {
  isMan: boolean;
};

type adminGetUserRequestBody = {
  name: string;
};

/** 유저 상세 조회 (관리자) 요청 */
type adminGetUserRequest = {
  params: getUserRequestParams;
  path: adminGetUserRequestPath;
  body: getUserRequestBody;
};

/** 유저 상세 조회 (관리자) 응답 */
type adminGetUserResponse = IUser | null;

type adminCreateUserRequestPath = {};

type adminCreateUserRequestParams = {};

type adminCreateUserRequestBody = Omit<IUser, "id">;

/** 유저 생성 (관리자) 요청 */
type adminCreateUserRequest = {
  params?: createUserRequestParams;
  path?: createUserRequestPath;
  body: adminCreateUserRequestBody;
};

/** 유저 생성 (관리자) 응답 */
type adminCreateUserResponse = IUser;

type adminUpdateUserRequestPath = {
  /** 유저 ID */
  userId: string;
};

type adminUpdateUserRequestParams = {};

type adminUpdateUserRequestBody = Partial<IUser>;

/** 유저 수정 (관리자) 요청 */
type adminUpdateUserRequest = {
  params?: updateUserRequestParams;
  path: adminUpdateUserRequestPath;
  body: adminUpdateUserRequestBody;
};

/** 유저 수정 (관리자) 응답 */
type adminUpdateUserResponse = void;

type adminDeleteUserRequestPath = {
  /** 유저 ID */
  userId: string;
};

type adminDeleteUserRequestParams = {};

type adminDeleteUserRequestBody = {};

/** 유저 삭제 (관리자) 요청 */
type adminDeleteUserRequest = {
  params?: deleteUserRequestParams;
  path: adminDeleteUserRequestPath;
  body?: deleteUserRequestBody;
};

/** 유저 삭제 (관리자) 응답 */
type adminDeleteUserResponse = void;
