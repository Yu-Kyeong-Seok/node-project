/**NOTICE 목록 조회 */
type getNoticesRequestPath={
  noticeId:string;
};
type getNoticesRequestParams={
    noticeId:string;
}

type getNoticesRequestBody={};


type getNoticesRequest={
    path:getNoticesRequestPath;
    params?:getNoticesRequestParams,
    body?:getNoticesRequestBody
}

/**NOTICE 목록 조회(사용자) 응답 */
type getNoticesResponse=INotice[];

/**NOTICE 세부 조회 */
type getNoticeDetailRequestPath={
    noticeId:string;
};
type getNoticeDetailRequestParams={
}
type getNoticeDetailRequestBody={};


type getNoticeDetailRequest={
    path:getNoticeDetailRequestPath;
    params?:getNoticeDetailRequestParams,
    body?:getNoticeDetailRequestBody
}
/**NOTICE 세부 조회(사용자) 응답 */
type getNoticeDetailResponse=INotice | null;