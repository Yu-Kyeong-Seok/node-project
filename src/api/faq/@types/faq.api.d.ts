/**FAQ 목록 조회 */
type getFaqsRequestPath={
  faqId:string;
};
type getFaqsRequestParams={
    faqId:string;
}

type getFaqsRequestBody={};


type getFaqsRequest={
    path:getFaqsRequestPath;
    params?:getFaqsRequestParams,
    body?:getFaqsRequestBody
}

/**FAQ 목록 조회(사용자) 응답 */
// type getFaqsResponse=IFaq[];

// /**FAQ 세부 조회 */
// type getFaqDetailRequestPath={
//     faqId:string;
// };
// type getFaqDetailRequestParams={
// }
// type getFaqDetailRequestBody={};


// type getFaqDetailRequest={
//     path:getFaqDetailRequestPath;
//     params?:getFaqDetailRequestParams,
//     body?:getFaqDetailRequestBody
// }
/**FAQ 세부 조회(사용자) 응답 */
type getFaqDetailResponse=IFaq | null;