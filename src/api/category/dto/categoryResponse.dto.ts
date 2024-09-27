export class categoryResponseDTO{
    id:string;
    name:string;
    constructor(category:any){
        this.id = category._id;
        this.name = category.name;
    }
}