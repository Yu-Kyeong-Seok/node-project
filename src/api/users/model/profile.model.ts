export class Profile implements IProfile {
  id: string;
  birth?: string | undefined;

  firstName: string;
  nickName: string;
  thumbnail?: string | undefined;
  telNumber:string;


  constructor(params: IProfile) {
    this.id = params.id;
    this.birth = params.birth;
    this.firstName = params.firstName;
    this.nickName=params.nickName;
    this.telNumber=params.telNumber
  }
}
