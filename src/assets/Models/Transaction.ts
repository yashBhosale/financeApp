import {Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn} from "typeorm";
import {Product} from "./Product"

@Entity("Transaction")
export class Transaction{
    @PrimaryGeneratedColumn({name: "id"})
    id!: number;

    @ManyToOne( () => Product, product => product.transactions )
    @JoinColumn({name: "product_type"})
    product_type!: Product;

    @Column('datetime')
    transaction_date!: Date;

    // Understanding that a negative amount constitutes  
    // a payment, and a positive amount constitutes a sale
    @Column()
    amount!: number;
}

export default Transaction;
