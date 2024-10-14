export class commentResponseDTO{
    postId:string;
    //commentId:string;
    _id:string;
//    author:IUser;
    author:{
        id: string;
       // userName: string;
        nickName : string;
      };
    content:string;
    createdAt:Date;
    image?:string;
   

    constructor(params:IComment){
        this.postId=params.postId.toString();
        this._id=params._id;
       // this.commentId=params.commentId;
        // this.author=params.author;
        this.author={
            id:params.author?.id,
         //   userName:params.author?.profile?.firstName,
            nickName:params.author?.userName
        }
        this.content=params.content,
        this.createdAt=params.createdAt,
        this.image=params.image;
        
    }
}