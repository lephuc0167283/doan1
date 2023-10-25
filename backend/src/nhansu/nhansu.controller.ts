import { UpdateNhanSuDto } from './dto/update-Nhansu.dto';
import { Promise } from 'mongoose';
import { NhansuService } from './nhansu.service';
import { Controller,Get, Post,Body,Param, Put,Delete } from '@nestjs/common';
import { NhanSu } from './schema/Nhansu.schema';
import { createNhanSuDto } from './dto/create-Nhansu.dto';
import { ApiTags } from '@nestjs/swagger/dist';


    @ApiTags('Nhân Sự')

@Controller('nhansu')
export class NhansuController {
    constructor(private NhansuService: NhansuService) {}

        @Get()
        async getAllNhanSu(): Promise<NhanSu[]>{
        return this.NhansuService.findAll();
        }

        @Post()
        async createNhansu(
            @Body()
            NhanSu: createNhanSuDto
        ):Promise<NhanSu>{
            return this.NhansuService.create(NhanSu);
        }

        @Get(':id')
        async getNhansu(
            @Param('id')
            id: string,
        ): Promise<NhanSu>{
        return this.NhansuService.findById(id);
        }


        @Put(':id')
        async UpdateNhanSu(
            @Param('id')
            id: string,
            @Body()
            NhanSu: UpdateNhanSuDto,
        ):Promise<NhanSu>{
            return this.NhansuService.updateById(id, NhanSu);
        }

        @Delete(':id')
        async DeleteNhansu(
            @Param('id')
            id: string,
        ): Promise<NhanSu>{
        return this.NhansuService.deleteById(id);
        }

    }
