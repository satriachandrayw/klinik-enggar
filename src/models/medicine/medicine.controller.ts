import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateMedicineDto } from './dto/medicine.dto';
import { Medicine } from './medicine.entity';
import { MedicineService } from './medicine.service';

@Controller('medicine')
export class MedicineController {
  constructor(private medicineService: MedicineService){}

  @Post()
  create(@Body() createMedicineDto: CreateMedicineDto): Promise<Medicine>{
    return this.medicineService.createMedicine(createMedicineDto);
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Medicine> {
    return this.medicineService.findOne(id);
  }

  @Get()
  findByName(@Body('name') name: string): Promise<Medicine> {
    console.log(name);
    
    return this.medicineService.findByName(name);
  }

  @Get()
  findByType(@Body('type') type: string): Promise<Medicine> {
    return this.medicineService.findByType(type);
  }

  @Get()
  findByCategory(@Body('category') category: string): Promise<Medicine> {
    return this.medicineService.findByCategory(category);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string): Promise<DeleteResult> {
    return this.medicineService.deleteById(id);
  }


}