import { Chucvu } from './../schema/Nhansu.schema';


export class UpdateNhanSuDto{
    readonly Hoten:string;
    readonly Cccd:string;
    readonly Mnv:string;
    readonly Sdt:string;
    readonly luong:string;
    readonly Chucvu:Chucvu;
}