export class Profile implements IProfile {
  id: string;
  birth?: string | undefined;
  nickName: string;
  firstName: string;
  thumbnail?: string | undefined;
  telNumber:string;
  greeting?: string | undefined;


  constructor(params: IProfile) {
    this.id = params.id;
    this.birth = params.birth;
    this.nickName = params.nickName;
    this.firstName = params.firstName;
    this.thumbnail = params.thumbnail;
    this.telNumber = params.telNumber;
    this.greeting = params.greeting;
  }
}
