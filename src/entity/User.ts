import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @Column({ type: "varchar", length: 200 })
    firstName: string;

    @Column({ type: "varchar", length: 200 })
    lastName: string;

    @Column({ type: "int" })
    age: number;

}
