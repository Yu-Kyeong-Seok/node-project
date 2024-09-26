/**댓글 목록 조회 */

declare type getCommentsRequestPath={
    postId:string;
   // commentId:string;
};
declare type getCommentsRequestParams={

};
declare type getCommentsRequestBody={

};
declare type getCommentsRequest={
    path:getCommentsRequestPath;
    params:getCommentsRequestParams;
    body?:getCommentsRequestBody
}

declare type getCommentsResponse=Array<ICommentResponseDTO>;


/** 댓글 등록 */
declare type createCommentRequestPath = {
    postId: string; // postId를 포함
};

declare type createCommentRequestBody = {
    content: string; // 댓글 내용
    /** 댓글 이미지 */
    image?: string; // 선택 사항,

};

declare type createCommentRequestParams = {
    // 필요에 따라 수정 가능 (현재 비워둠)
};

/** 댓글 목록 조회 */
declare type getCommentsRequestPath = {
    postId: string; // 게시글 ID
};

declare type getCommentsRequestParams = {}; // 필요에 따라 수정 가능

declare type getCommentsRequestBody = {}; // 필요에 따라 수정 가능

declare type getCommentsRequest = {
    path: getCommentsRequestPath;
    params: getCommentsRequestParams;
    body?: getCommentsRequestBody; // body는 선택 사항
};

declare type getCommentsResponse = Array<ICommentResponseDTO>; // 댓글 목록 응답

/** 댓글 등록 */
declare type createCommentRequestPath = {
    postId: string; // 게시글 ID
};

declare type createCommentRequestBody = {
    content: string; // 댓글 내용
    image?: string; // 댓글 이미지 (선택 사항)
};

declare type createCommentRequestParams = {}; // 필요에 따라 수정 가능

declare type createCommentRequest = {
    path: createCommentRequestPath; // 경로 정의
    body: createCommentRequestBody; // 요청 본문 정의
    params?: createCommentRequestParams; // params는 선택 사항
};

declare type createCommentResponse=ICommentResponseDTO;

/**댓글 수정 */
declare type updateCommentRequestPath={
    commentId:string;
};
declare type updateCommentRequestBody=//{content:string;image?:string;};
        Omit<IComment,"_id" | "commentId"| "postId" | "author" | "createdAt">;
declare type updateCommentRequestParams={};
declare type updateCommentRequest={
    path:updateCommentRequestPath;
    params?:updateCommentRequestParams;
    body:updateCommentRequestBody;
};
declare type updateCommentResponse=void;


/**댓글 삭제 */
declare type deleteCommentRequestPath={
    commentId:string;
}
declare type deleteCommentRequestBody={};

declare type deleteCommentRequestParams={};
declare type deleteCommentRequest={
    path:deleteCommentRequestPath;
    body?:deleteCommentRequestBody;
    params?:deleteCommentRequestParams;
}
declare type deleteCommentResponse=void;