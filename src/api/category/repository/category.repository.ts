export interface CategoryRepository{

    findAll():Promise<ICategory[]>;
    findById(categoryId:string):Promise<ICategory | null>;
}