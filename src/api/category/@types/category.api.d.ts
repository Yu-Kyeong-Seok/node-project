/**카테고리 목록 조회 */
type getCategoriesRequestPath={};
type getCategoriesRequestParams={
    categoryId:string;
}

type getCategoriesRequestBody={};


type getCategoriesRequest={
    path?:getCategoriesRequestPath;
    params:getCategoriesRequestParams,
    body?:getCategoriesRequestBody
}

/**카테고리 목록 조회(사용자) 응답 */
type getCategoriesResponse=ICategory[];

/**카테고리 세부 조회 */
type getCategoryDetailRequestPath={
    categoryId:string;
};
type getCategoryDetailRequestParams={
}
type getCategoryDetailRequestBody={};


type getCategoryDetailRequest={
    path:getCategoryDetailRequestPath;
    params?:getCategoryDetailRequestParams,
    body?:getCategoryDetailRequestBody
}
/**카테고리 세부 조회(사용자) 응답 */
type getCategoryDetailResponse=ICategory | null;