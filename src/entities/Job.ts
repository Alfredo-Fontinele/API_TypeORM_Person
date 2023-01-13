import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Person } from './Person'

@Entity('jobs')
export class Job {

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    name!: string

    @Column()
    level!: string

    @ManyToMany(() => Person, person => person.jobs, { 
        onDelete: 'CASCADE', onUpdate: 'CASCADE'
    })
    @JoinTable({
        name: 'person_job',
        joinColumn: {
            name: 'person_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'job_id',
            referencedColumnName: 'id'
        }
    })
    persons!: Person[]

}
