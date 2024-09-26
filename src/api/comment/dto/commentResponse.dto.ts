export class commentResponseDTO{
    postId:string;
    //commentId:string;
    _id:string;
    content:string;
    createdAt:Date;
    image?:string;
   

    constructor(params:IComment){
        this.postId=params.postId.toString();
        this._id=params.commentId;
       // this.commentId=params.commentId;
        this.content=params.content,
        this.createdAt=params.createdAt,
        this.image=params.image;
        
    }
}