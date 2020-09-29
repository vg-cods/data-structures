/**
 *      Single Linked List
 *    
 *      Implementetion of ageneric SLL   
 * 
 *      @author M. Angel V. G.
 *      @date   9/28/2000 
 */

 import Node from './Node.ts'

type InsertionOrderType = 'head' | 'tail' 

export interface SingleLinkedList<T> {
    head: Node<T> | null
    tail: Node<T> | null
    size: number

    insertionOrder: InsertionOrderType
    
}


 export default class SLL<T> implements SingleLinkedList<T> {

    head: Node<T> | null = null
    tail: Node<T> | null = null
    size: number  = 0

    insertionOrder: InsertionOrderType = 'head'

    constructor(...args: T[]) {
        this.addMany(...args)
    }

    reset() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    addMany(...args: T[]) {

        for(const value of args) {
            this.addOne(value)
        }

        return this
    }

    addOne(value: T) {
        
        if(this.insertionOrder === 'head') {
            this.head = new Node(value, this.head)
            this.size++
        }

        return this
    }

    // Making the calss iterable if there is a node in the head
    *[Symbol.iterator]() {
        if(this.head)
            yield * this.head
    }

 }