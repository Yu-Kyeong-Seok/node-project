declare type getPostRequestPath = {};
declare type getPostRequestBody = {};
declare type getPostRequestParams = {
  offset?: number;
  limit?: number;
};

/** 게시글 목록 조회 요청 */
declare type getPostsRequest = {
  params: getPostsRequestParams;
  path?: getPostsRequestPath;
  body?: getPostsRequestBody;
};

/** 게시글 목록 조회 응답 DTO */
declare type getPostsResponse = Array<IPostResponseDTO>;
declare type getPostDetailRequestPath = {
  postId: string;
};
declare type getPostDetailRequestBody = {};
declare type getPostDetailRequestParams = {};


/** 게시글 상세 조회 요청 */
declare type getPostDetailRequest = {
  params?: getPostDetailRequestParams;
  path: getPostDetailRequestPath;
  body?: getPostDetailRequestBody;
};
/** 게시글 상세 조회 응답 (DTO 참고) */
declare type getPostDetailResponse = IPostResponseDTO | null;
declare type createPostRequestPath = {};
declare type createPostRequestBody = {
  title: string;
  content: string;
  category:string;
  image?:string;
  likeCount:number;
  //commentCount:number;
};
declare type createPostRequestParams = {};


/** 게시글 생성 요청 */
declare type createPostRequest = {
  params?: createPostRequestParams;
  path?: createPostRequestPath;
  body: createPostRequestBody;
};


/** 게시글 생성 응답 */
declare type createPostResponse = IPostResponseDTO;
declare type updatePostRequestPath = {
  postId: string;
};
declare type updatePostRequestBody = {
  title: string;
  content: string;
  category?: string; //카테고리 수정여부는 사용자 마음..
  image?:string;
  likeCount:number;
  //commentCount:number;
};
declare type updatePostRequestParams = {};

/** 게시글 수정 요청 */
declare type updatePostRequest = {
  params?: updatePostRequestParams;
  path: updatePostRequestPath;
  body: updatePostRequestBody;
};
declare type updatePostResponse = void;
declare type deletePostRequestPath = {
  /** 게시글 ID */
  postId: string;
};
declare type deletePostRequestBody = {};
declare type deletePostRequestParams = {};


/** 게시글 삭제 요청 */
declare type deletePostRequest = {
  params?: deletePostRequestParams;
  path: deletePostRequestPath;
  body?: deletePostRequestBody;
};

/** 게시글 삭제 응답 */
declare type deletePostResponse = void;
