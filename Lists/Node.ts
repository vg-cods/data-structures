/**
 *      Single Linked List
 *    
 *      Implementetion of ageneric Node structure  
 * 
 *      @author M. Angel V. G.
 *      @date   9/28/2000 
 */

type NodeArgs<T> =
    | []
    | [value: T]
    | [value: T, next: Node<T>]

export default class Node<T> {

    value?: T
    next:  Node<T> | null

    constructor(value?: T, next: Node<T> | null = null) {
        this.value = value
        this.next  = next
    }  

}
