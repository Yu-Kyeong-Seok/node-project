export class commentResponseDTO{
    postId:string;
    //commentId:string;
    content:string;
    createdAt:Date;
    image?:string;
   

    constructor(params:IComment){
        this.postId=params.postId.toString();
       // this.commentId=params.commentId;
        this.content=params.content,
        this.createdAt=params.createdAt,
        this.image=params.image;
        
    }
}