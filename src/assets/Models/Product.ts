import {Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn} from "typeorm";
import {Transaction} from "./Transaction"

@Entity("Product")
export class Product{
    @PrimaryGeneratedColumn({name: "id"})
    id!: number;
    
    @Column({name: "name", unique: true})
    name!: string;
    
    @Column({name:"category"})
    category!: string;

    @OneToMany(() => Transaction, transaction => transaction.product_type)
    transactions!: Transaction[];
}