import { ApiProperty } from '@nestjs/swagger';
import { Chucvu } from './../schema/Nhansu.schema';


export class createNhanSuDto{
    @ApiProperty()
    readonly Hoten:string;
    @ApiProperty()
    readonly Cccd:string;
    @ApiProperty()
    readonly Mnv:string;
    @ApiProperty()
    readonly Sdt:string;
    @ApiProperty()
    readonly luong:string;
    @ApiProperty()
    readonly Chucvu:Chucvu;
}