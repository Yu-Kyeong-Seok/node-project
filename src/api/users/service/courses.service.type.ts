import { courseResponseDTO } from "../dto/courseResponse.dto";

export interface CourseService{
    /**강의 신청 */
    registerCourse(): Promise<courseResponseDTO>;
    /**강의 목록 조회 */
    getCourses():Promise<courseResponseDTO[]>;
     /**강의 세부 조회 */
    getCourseDetail(): Promise<courseResponseDTO>;
    /**강의 신청 변경 */
    updateCourses():Promise<void>;
    /**강의 신청 취소 */
    deleteCourse():Promise<void>;
    /**강의 등록 */
    createCourse():Promise<courseResponseDTO>;
}