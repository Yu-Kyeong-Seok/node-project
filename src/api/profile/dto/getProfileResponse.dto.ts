export class GetProfileResponseDTO {
    id: string;
    birth?: string;
    nickName:string;
    firstName: string;
    thumbnail?: string;
    telNumber: string;
    constructor(profile: IProfile) {
        this.id = profile.id;
        this.birth = profile.birth;
        this.nickName = profile.nickName;
        this.firstName = profile.firstName;
        this.thumbnail = profile.thumbnail;
        this.telNumber = profile.telNumber;
    }
} 

