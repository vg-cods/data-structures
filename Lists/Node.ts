export default class Node<T> {

    value?: T
    next:  Node<T> | null

    constructor(value?: T, next: Node<T> | null = null) {
        this.value = value
        this.next  = next
    }

    *[Symbol.iterator](): IterableIterator<T> {
        let node: Node<T> | null 
        node = this
        while(node && node.value) {
            yield node.value
            node = node.next
        }
    }   

}
