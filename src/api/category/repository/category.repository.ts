export interface CategoryRepository{

    findAll():Promise<ICategory[]>;
    findById(categoryId:string):Promise<ICategory | null>;
    findByName(categoryName: string): Promise<ICategory | null>;  // 이름으로 조회하는 것도 있어야함. 사용자가 클릭하는 건 결국 카테고리 이름이니까 !!
}