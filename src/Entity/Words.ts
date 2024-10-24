import { Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"

@Entity()
export class Words extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idCategory: number

    @Column()
    type: number

    @Column()
    word: string

    @Column()
    meaning: number

    @Column()
    image: string

    @Column()
    sound: string

    @Column()
    status: boolean
}
