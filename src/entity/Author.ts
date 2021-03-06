import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Photo } from './Photo';

@Entity()
export class Author {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;
    @Column({ type: 'varchar', length: 255 })
    name: string;
    @OneToMany(type => Photo, photo => photo.author)
    photos: Photo[];
}