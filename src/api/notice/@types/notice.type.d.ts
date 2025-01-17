import { ObjectId } from "mongoose";

export interface INotice {
      /** NOTICE ID */
      _id: ObjectId | string;
      /** NOTICE 제목 */
      title: string;
      /** NOTICE 내용 */
      content: string;
      /** 작성일 */
      createdAt?: Date;
      /** 수정일 */
      updatedAt?: Date;
      /** 작성자  */
      // author: IUser;
}