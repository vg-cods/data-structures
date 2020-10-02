/**
 *      Single Linked List
 *    
 *      Implementetion of ageneric Node structure  
 * 
 *      @author M. Angel V. G.
 *      @date   9/28/2000 
 */


export default class Node<T> {

    value?: T
    next:  Node<T> | null

    constructor(value?: T, next: Node<T> | null = null) {
        this.value = value
        this.next  = next
    }

    // Making the class Iterable
    *[Symbol.iterator](): IterableIterator<T> {
        let node: Node<T> | null 
        node = this
        while(node && node.value) {
            yield node.value
            node = node.next
        }
    }   

}