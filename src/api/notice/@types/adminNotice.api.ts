/**NOTICE 목록 조회 */
type adminGetNoticesRequestPath={
  noticeId:string;
};
type adminGetNoticesRequestParams={
    noticeId:string;
}

type adminGetNoticesRequestBody={};


type adminGetNoticesRequest={
    path?:adminGetNoticesRequestPath;
    params?:adminGetNoticesRequestParams,
    body?:adminGetNoticesRequestBody
}

/**NOTICE 목록 조회 응답 */
type adminGetNoticesResponse=INotice[];

/**NOTICE 세부 조회 */
type adminGetNoticeDetailRequestPath={
    noticeId:string;
};
type adminGetNoticeDetailRequestParams={
}
type adminGetNoticeDetailRequestBody={};


type adminGetNoticeDetailRequest={
    path:adminGetNoticeDetailRequestPath;
    params?:adminGetNoticeDetailRequestParams,
    body?:adminGetNoticeDetailRequestBody
}
/**NOTICE 세부 조회 응답 */
type adminGetNoticeDetailResponse=INotice | null;

declare type adminCreateNoticeRequestBody = {
  question: string;
  answer: string;
};

declare type adminCreateNoticeRequestPath = {};

declare type adminCreateNoticeRequestParams = {};

/** NOTICE 생성 요청 */
type adminCreateNoticeRequest = {
  params?: adminCreateNoticeRequestParams;
  path?: adminCreateNoticeRequestPath;
  body: adminCreateNoticeRequestBody;
};

/** NOTICE 생성 응답 */
declare type adminCreateNoticeResponse = INotice;

declare type adminUpdateNoticeRequestBody = Omit<INotice, "id">;

declare type adminUpdateNoticeRequestPath = {
  /** NOTICE ID */
  noticeId: string;
};

declare type adminUpdateNoticeRequestParams = {};

/** NOTICE 수정 요청 */
declare type adminUpdateNoticeRequest = {
  params?: adminUpdateNoticeRequestParams;
  path: adminUpdateNoticeRequestPath;
  body: adminUpdateNoticeRequestBody;
};

/** NOTICE 수정 응답 */
declare type adminUpdateNoticeResponse = void;

declare type adminDeleteNoticeRequestPath = {
  /** NOTICE ID */
  noticeId: string;
};

declare type adminDeleteNoticeRequestBody = {};

declare type adminDeleteNoticeRequestParams = {};

/** NOTICE 삭제 요청 */
declare type adminDeleteNoticeRequest = {
  params?: adminDeleteNoticeRequestParams;
  path: adminDeleteNoticeRequestPath;
  body?: adminDeleteNoticeRequestBody;
};

/** NOTICE 삭제 응답 */
declare type adminDeleteNoticeResponse = void;