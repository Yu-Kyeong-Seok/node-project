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
}