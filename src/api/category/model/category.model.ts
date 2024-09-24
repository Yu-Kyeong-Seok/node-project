export class Category implements ICategory{
    id:string;
    name:string;

    constructor(params:ICategory){
        this.id=params.id;
        this.name=params.name;
    }
}