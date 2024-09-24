import { MongooseCategory } from "../model/category.schema";
import { CategoryRepository } from "./category.repository";

export class MongooseCategoryRepository implements CategoryRepository{
    async findAll():Promise<ICategory[]>{
        const categories=await MongooseCategory.find();
        return categories;
    }
    async findById(categoryId: string): Promise<ICategory | null> {
        try{
            const findCategory=await MongooseCategory.findById(categoryId)
            return findCategory;
        }catch(error:any){
            const message = error.message.toString();
            if (message.includes("Cast to ObjectId failed")) {
              return null;
            }
            throw error;
        }
       
    }
    async findByName(categoryName:string):Promise<ICategory | null>{
        try{
            //요소 하나만 찾겠다.
            const findCategoryName = await MongooseCategory.findOne({ name: categoryName } )
            return findCategoryName;
        }catch(error){
            console.log(error)
            return null;
        }
    }
}