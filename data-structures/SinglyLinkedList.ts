/**
 * 
 * @author M Angel V G
 * @date   10/09/2020
 }
 */

import { SinglyNode } from './Nodes.ts';

type InsertIn = 'head' | 'tail';

// Abstract Singly Linked List
abstract class ASinglyLinkedList<T> {

    head?: SinglyNode<T>;
    tail?: SinglyNode<T>;
    size?: number;

    abstract addOne(value: T, insertIn: InsertIn): SinglyLinkedList<T>;
    abstract addMany(value: T[], insertIn: InsertIn): SinglyLinkedList<T>;
    abstract delete(value: T): SinglyLinkedList<T>;
    abstract update(value: T): SinglyLinkedList<T>;
    abstract find(value: T): SinglyNode<T> | undefined;
    abstract [Symbol.iterator]() : IterableIterator<T>;

}

class SinglyLinkedList<T> extends ASinglyLinkedList<T>{

    head?: SinglyNode<T> = undefined;
    tail?: SinglyNode<T> = undefined;
    size: number = 0;

    // Add one value
    addOne(value: T, insertIn: InsertIn = 'head'): SinglyLinkedList<T> {

        // Checking if the SLL is empty
        if(this.size === 0) {
            this.head = this.tail = { value };
            this.size++;
            return this;
        }

        // Inserting values on the head
        if(insertIn === 'head') {
            this.head = { value, next: this.head };
        }

        else if(insertIn === 'tail') {
            this.tail = this.tail!.next = { value };
        }

        else {
            throw Error("param: insertIn must be = 'head' | 'tail' ");
        }

        this.size++;

        return this

    }
    // Add an array of values
    addMany(args: T[], insertIn: InsertIn = 'head') {
        
        for(const value of args) {

            this.addOne(value, insertIn);

        }

        return this;
    }
   //  Delete all values that match 
   delete(value: T) {

        let prev: SinglyNode<T> | undefined = this.head;
        let curr: SinglyNode<T> | undefined = prev?.next;

        while(curr) {

            if(curr.value === value) {

                prev!.next = curr.next;
                this.size--;

            }

            prev = curr;
            curr = prev.next;

        }

        return this;

   }

   // Update all values that matches the passed value
   update(value: T) {

        let tempNode: SinglyNode<T> | undefined = this.head;

        while(tempNode) {
            
            if(tempNode.value === value) {
                tempNode.value = value;
            }
            
        }

        return this;

   }
   // Find the first node that matches the passed value
   find(value: T) {

    let tempNode: SinglyNode<T> | undefined = this.head;

        while(tempNode) {
            
            if(tempNode.value === value) {
                break;
            }
            
        }

        return tempNode;

   }

   * [Symbol.iterator]() {

        let tempNode: SinglyNode<T> | undefined = this.head;

        while(tempNode) {

            let reset: any = yield tempNode.value;
            tempNode = tempNode.next;

            if(reset === '$reset') { 
                tempNode = this.head;
            }

        }

   }
   
}