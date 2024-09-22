import { REGEX } from "@/api/common/validations";
import * as yup from "yup";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// 비밀번호 8~16자 이상이고 영문 숫자 포함 하고 대문자 1개는 꼭 들어가있어야하고, 특수문자도 1개 들어가있어야해.
const PASSWORD_REGEX =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,16}$/;

// 조건부 검증을 할때는 when을 사용하면 됩니다.
const withDrawUserBodyValidator = yup.object({
  /** 탈퇴 사유 */
  reason: yup
    .string()
    .oneOf([
      "불편해요",
      "불만족이에요",
      "더이상 사용안해요",
      "기타 (직접 입력)",
    ])
    .required(),
  extraReason: yup.string().when("reason", (reason, schema) => {
    return reason.toString() === "기타 (직접 입력)"
      ? schema.required("기타 사유는 필수 입력값입니다.")
      : schema;
  }),
});

const createUserBodyValidator = yup.object({
  email: yup
    .string()
    .required("이메일은 필수 입력값입니다.")
    .matches(EMAIL_REGEX, "이메일 형식이 올바르지 않습니다."),
  // .matches(REGEX.EMAIL, "이메일 형식이 올바르지 않습니다."),
  password: yup
    .string()
    // .matches(
    //   PASSWORD_REGEX,
    //   "비밀번호는 8~16자 이상이고, 대문자 1개 이상 그리고 영문 숫자 포함하고, 특수문자는 1개 이상이어야합니다."
    // )
    .optional(),
  profile: yup.object({
    birth: yup
      .string()
      .matches(/^\d{4}-\d{2}-\d{2}$/, "생년월일 형식이 올바르지 않습니다.")
      .optional(),
    gender: yup
      .string()
      .oneOf(["M", "F"], "성별은 남자는 M 여자는 F로 입력되어야 합니다.")
      .optional(),
    firstName: yup.string().required("이름은 필수 입력값입니다."),
    lastName: yup.string().optional(),
    thubmnail: yup.string().optional(),
    bio: yup.string().optional(),
  }),
});

export const createUserValidator = {
  body: createUserBodyValidator,
};

const updateUserBodyValidator = yup.object({
  email: yup.string().matches(EMAIL_REGEX, "이메일 형식이 올바르지 않습니다."),
  // .matches(REGEX.EMAIL, "이메일 형식이 올바르지 않습니다."),
  password: yup
    .string()
    .matches(
      PASSWORD_REGEX,
      "비밀번호는 8~16자 이상이고, 대문자 1개 이상 그리고 영문 숫자 포함하고, 특수문자는 1개 이상이어야합니다."
    )
    .optional(),
  profile: yup.object({
    id: yup.string(),
    birth: yup
      .string()
      .matches(/^\d{4}-\d{2}-\d{2}$/, "생년월일 형식이 올바르지 않습니다.")
      .optional(),
    gender: yup
      .string()
      .oneOf(["M", "F"], "성별은 남자는 M 여자는 F로 입력되어야 합니다.")
      .optional(),
    firstName: yup.string(),
    lastName: yup.string().optional(),
    thubmnail: yup.string().optional(),
    bio: yup.string().optional(),
  }),
});

const updateUserPathValidator = yup.object({
  userId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "userId는 필수 입력값입니다."),
});

export const updateUserValidator = {
  body: updateUserBodyValidator,
  params: updateUserPathValidator,
};
