import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Job } from "./Job";

@Entity("persons")
export class Employee {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "text" })
    name!: string;

    @Column({ type: "text" })
    email!: string;

    @Column({ type: "text", select: false })
    password!: string;

    @ManyToMany(() => Job, (job) => job.persons, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    jobs!: Job[];
}
