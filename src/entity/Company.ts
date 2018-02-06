import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Company {

    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @Column({ type: "varchar", length: 200 })
    name: string;

    @Column({ type: "varchar", length: 200 })
    address: string;
}
