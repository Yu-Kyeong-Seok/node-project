declare type getProfileRequestPath = {};

declare type getProfileRequestBody = {};

declare type getProfileRequestParams = {
    // /** offset */
    // offset?: number;
    // /** limit */
    // limit?: number;
};

/** 프로필 목록 조회 요청 */
declare type getProfileRequest = {
    params: getProfileRequestParams;
    path?: getProfileRequestPath;
    body?: getProfileRequestBody;
};

/** 프로필 목록 조회 응답 (DTO 참고) */
declare type getProfileResponse = Array<IProfile>;

declare type getProfileDetailRequestPath = {
    /** 프로필 ID */
    id: string;
};

declare type getProfileDetailRequestBody = {};

declare type getProfileDetailRequestParams = {};

/** 프로필 상세 조회 요청 */
declare type getProfileDetailRequest = {
    params?: getProfileDetailRequestParams;
    path: getProfileDetailRequestPath;
    body?: getProfileDetailRequestBody;
};

/** 프로필 상세 조회 응답 (DTO 참고) */
declare type getProfileDetailResponse = IProfile | null;

declare type createProfileRequestPath = {};

declare type createProfileRequestBody = Omit<IProfile, "id">;

declare type createProfileRequestParams = {};

/** 프로필 생성 요청 */
declare type createProfileRequest = {
    params?: createProfileRequestParams;
    path?: createProfileRequestPath;
    body: createProfileRequestBody;
};

/** 프로필 생성 응답 */
declare type createProfileResponse = IProfile;

declare type updateProfileRequestPath = {
    /** 프로필 ID */
    id: string;
};

declare type updateProfileRequestBody = Partial<IProfile>;

declare type updateProfileRequestParams = {};

/** 프로필 수정 요청 */
declare type updateProfileRequest = {
    params?: updateProfileRequestParams;
    path: updateProfileRequestPath;
    body: updateProfileRequestBody;
};

declare type updateProfileResponse = void;

declare type deleteProfileRequestPath = {
    /** 프로필 ID */
    id: string;
};

declare type deleteProfileRequestBody = {};

declare type deleteProfileRequestParams = {};

/** 프로필 삭제 요청 */
declare type deleteProfileRequest = {
    params?: deleteProfileRequestParams;
    path: deleteProfileRequestPath;
    body?: deleteProfileRequestBody;
};

/** 프로필 삭제 응답 */
declare type deleteProfileResponse = void;
