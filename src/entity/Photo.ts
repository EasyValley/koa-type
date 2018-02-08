import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, ManyToMany } from "typeorm";
import { PhotoMetadata } from './PhotoMetadata';
import { Author } from './Author';
import { Album } from './Album';
@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column("text")
    description: string;

    @Column()
    filename: string;

    @Column("double")
    views: number;

    @Column()
    isPublished: boolean;

    @ManyToMany(type => Album, album => album.photos, {
        cascadeInsert: true, // 在添加Album时，会自动添加相册里的Photo
        cascadeUpdate: true, // 在更新Album时，会自动更新相册里的Photo 
    })
    albums: Album[]

    @ManyToOne(type => Author, author => author.photos)
    author: Author;

    @OneToOne(type => PhotoMetadata, photoMetadata => photoMetadata.photo)
    metadata: PhotoMetadata
}