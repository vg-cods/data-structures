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
    head: Node<T>
    tail: Node<T>
    size: number
}


 export default class SLL<T> implements SingleLinkedList<T> {

    head: Node<T> = new Node<T>()
    tail: Node<T> = new Node<T>()
    size: number  = 0

    constructor(...args: T[]) {
        this.addMany(...args)
    }

    reset() {
        this.head = new Node<T>()
        this.tail = new Node<T>()
        this.size = 0
    }

    addMany(...args: any[]) {
        let order: InsertionOrderType = 'head'
        
        if(typeof args[0] === 'string') {
            if(args[0] === 'tail')
                order = 'tail'
            args = args.slice(1)
        }

        for(const value of args) {
            this.addOne(value, order)
        }

        return this
    }

    // head -> 12 -> 13 -> 14  -> null

    addOne(value: T, insertIn: InsertionOrderType = 'head') {
        if(this.size === 0) {

            this.head = this.tail = new Node<T>(value)

        } else if(insertIn === 'head') {

            this.head = new Node<T>(value, this.head)

        } else if (insertIn === 'tail') {

            this.tail = this.tail.next = new Node<T>(value) 

        } else {

            throw new Error('insertIn is no one of "head" or "tail"')
            
        }

        this.size++

        return this
    }

    // Making the calss iterable if there is a node in the head
    *[Symbol.iterator](): IterableIterator<T> {
        yield * this.head
    }

 }