import { REGEX } from "@/api/common/validations";
import * as yup from "yup";

/** 게시글 목록 조회 Validator */
export const getPostValidator = {};

const getPostDetailPathValidator = yup.object({
  postId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "postId는 필수 입력값입니다.")
    .required(),
});

/** 게시글 상세 조회 Validator */
export const getPostDetailValidator = {
  path: getPostDetailPathValidator,
};
