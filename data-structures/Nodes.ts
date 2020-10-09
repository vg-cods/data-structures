/**
 * 
 * @author M Angel V G
 * @date   10/09/2020
 }
 */


 // Node to implement Singly and Circular Linked List
export interface SinglyNode<T> {

    value: T;
    next?: SinglyNode<T>;

}

// Node to implement Doubly Linked and Circular List 
export interface DoublyNode<T> {

    value: T;
    prev?: DoublyNode<T>;
    next?: DoublyNode<T>;

}

// Node to implement DBS FBS and Trees
export interface TreeNode<T> {

    value: T;
    left?:  TreeNode<T>;
    right?: TreeNode<T>

}


// Node to implement Graph structures
export interface GraphNode<T> {

    value: T;
    edges?: GraphNode<T>[]; 

}