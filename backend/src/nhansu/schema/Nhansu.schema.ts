import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose"; 

export enum Chucvu{
    TRUONGPHONG = 'Truongphong',
    PHOPHONG = 'PhoPhong',
    GIAMDOC = 'GiamDoc',
    NHANVIEN = 'NhanVien',
    KETOAN  = 'KeToan',
}

@Schema({
    timestamps:true
})

export class NhanSu {
    @Prop()
    Hoten:string;

    @Prop()
    Cccd:string;

    @Prop()
    Mnv:string;

    @Prop()
    Sdt:string;

    @Prop()
    luong:string;

    @Prop()
    Chucvu:Chucvu;
}

export const NhanSuSchema = SchemaFactory.createForClass(NhanSu)