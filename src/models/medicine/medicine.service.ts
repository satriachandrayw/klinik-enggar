import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateMedicineDto } from './dto/medicine.dto';
import { Medicine } from './medicine.entity';

@Injectable()
export class MedicineService {
  constructor(
    @InjectRepository(Medicine)
    private medicineRepository: Repository<Medicine>,
  ) {}

  async createMedicine(createMedicineDto: CreateMedicineDto): Promise<Medicine> {
    const newMedicine = Medicine.create(createMedicineDto);
    await newMedicine.save();

    return newMedicine;
  }

  async findOne(id: string): Promise<Medicine | undefined> {
    const medicine = await Medicine.findOne(id);
    
    if (!medicine){
      throw new NotFoundException('Medicine not found');
    }

    return medicine;
  }

  async findByName(medicineName: string): Promise<Medicine | undefined> {
    const medicine = await Medicine.findOne({
      where: { name: medicineName },
    });
    

    if (!medicine){
      throw new NotFoundException('Medicine not found');
    }

    return medicine;
  }

  async findByType(medicineType: string): Promise<Medicine | undefined> {
    const medicine = await Medicine.findOne({
      where: { type: medicineType },
    });

    if (!medicine){
      throw new NotFoundException('Medicine not found');
    }

    return medicine;
  }

  async findByCategory(medicineCategory: string): Promise<Medicine | undefined> {
    const medicine = await Medicine.findOne({
      where: { category: medicineCategory },
    });

    if (!medicine){
      throw new NotFoundException('Medicine not found');
    }

    return medicine;
  }

  deleteById(id: string): Promise<DeleteResult> {
    return this.medicineRepository.delete(id);
  }
}