import { REGEX } from "@/api/common/validations";
import * as yup from "yup";

const EMAIL_REGEX= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// 비밀번호 8~10자 이상이고 영문 숫자 포함 하고 대문자 1개는 꼭 들어가있어야하고, 특수문자도 1개 들어가있어야해.

const PASSWORD_REGEX =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,10}$/;


const createUserBodyValidator=yup.object({
    email:yup
    .string()
    .required("이메일은 필수 입력값입니다.")
    .matches(EMAIL_REGEX, "이메일 형식이 올바르지 않습니다."),

    password:yup
    .string()
    .required("비밀번호는 필수 입력값입니다.")
    .matches(PASSWORD_REGEX,"비밀번호는 8~10자 이상이고, 대문자 1개 이상 그리고 영문 숫자 포함하고, 특수문자는 1개 이상이어야합니다."),

    profile:yup.object({
        birth:yup
        .string()
        .matches(/^\d{4}-\d{2}-\d{2}$/, "생년월일 형식이 올바르지 않습니다.")
        .optional(),
        firstName: yup.string().required("이름은 필수 입력값입니다."),
        nickName: yup.string().required("닉네임은 필수 입력값입니다."),
    })
}) 

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
        "비밀번호는 8~10자 이상이고, 대문자 1개 이상 그리고 영문 숫자 포함하고, 특수문자는 1개 이상이어야합니다."
      )
      .optional(),
      profile:yup.object({
        id:yup.string(),
        birth:yup
        .string()
        .matches(/^\d{4}-\d{2}-\d{2}$/, "생년월일 형식이 올바르지 않습니다.")
        .optional(),
        firstName: yup.string().required("이름은 필수 입력값입니다."),
        nickName: yup.string().required("닉네임은 필수 입력값입니다."),
    })
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
  
  /**회원 탈퇴 사유 */
const withDrawUserBodyValidator=yup.object({
   
})