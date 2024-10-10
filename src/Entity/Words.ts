import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Words {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idCategory: number

    @Column()
    word: string

    @Column()
    meaning: string

    @Column()
    examples: Array<string>

    @Column()
    association: Array<number>

    @Column()
    image: string

    @Column()
    status: boolean
}
