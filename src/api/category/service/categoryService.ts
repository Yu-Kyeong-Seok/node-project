import HttpException from "@/api/common/exceptions/http.exception";
import { categoryResponseDTO } from "@/api/category/dto/categoryResponse.dto";
import { CategoriesService } from "@/api/category/service/categoryService.type";
import { CategoryRepository } from "@/api/category/repository/category.repository";
import { PostRepository } from "@/api/post/repository/post.repository";

export class CategoriesServiceImpl implements CategoriesService{
    constructor(
        private readonly _categoryRepository:CategoryRepository,
        private readonly _postRepository: PostRepository
    ){}

    async getCategory():Promise<categoryResponseDTO[]>{
        //카테고리 배열들이 받아와짐.
        //배열에는 해당 카테고리 객체들이 있음. ex> {{_id:"~~",name:"ANIMALS"},{~~}}
        const categories=await this._categoryRepository.findAll();
       //그럼 그 배열에서 Map함수로 순회함.
       //그럼 category에는 하나의 객체가 들어있겠지 ? {_id:"~~",name:"ANIMALS"}
        const newCategory=await Promise.all(
            categories.map((category)=>new categoryResponseDTO(category))
        );
        return newCategory;
       // throw new HttpException(401,'카테고리 없음.')
    }
    async getCategoryDetail(categoryName:string):Promise<categoryResponseDTO | null>{
        const category=await this._categoryRepository.findByName(categoryName);

        if(!category) 
            throw new HttpException(404,'해당 카테고리 없음.');

        const dtoCategory= await new categoryResponseDTO(category);
        return dtoCategory;
    }   

    async getCategoryName(categoryName: string): Promise<categoryResponseDTO | null> {
        const category=await this._categoryRepository.findByName(categoryName);

        if(!category){
            throw new HttpException(404,"해당 카테고리가 없습니다.")
            
        }return new categoryResponseDTO(category);
    }   
}
