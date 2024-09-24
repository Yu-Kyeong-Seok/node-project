import { categoryResponseDTO } from "../dto/categoryResponse.dto"

export interface CategoriesService{
    /**카테고리 목록조회 */
    getCategory():Promise<categoryResponseDTO[]>
    /**카테고리 상세조회 */
    getCategoryDetail(categoryId:string):Promise<categoryResponseDTO | null>
}