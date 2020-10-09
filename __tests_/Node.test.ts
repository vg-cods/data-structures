import { assertEquals, assertStrictEquals } from 'https://deno.land/std/testing/asserts.ts';
import { expect } from 'https://deno.land/x/expect/expect.ts'
import Node from '../Lists/Node.ts';


Deno.test("Testing Node Class default values", () => {

    const test_node = new Node<number>();
    assertEquals(test_node.value, undefined)
    assertEquals(test_node.next,  null)
})

Deno.test("Testing order of insertion and final values", () => {

    const test_node = new Node(12,
                        new Node(13,
                            new Node(14)));
    
    assertEquals(test_node.value, 12)
    assertEquals(test_node.next?.value, 13)
    assertEquals(test_node.next?.next?.value, 14)
    assertEquals(test_node.next?.next?.next,  null)
    assertEquals(test_node.next?.next?.next?.value, undefined)                    

})

Deno.test("Defined properties in Node class", () => {

    const test_node = new Node(12, 
                        new Node(13, 
                            new Node(14)));
    
    expect( test_node.value ).toBeDefined()
    expect( test_node.next ).toBeDefined()

})

Deno.test("Testing Iterator Iterable object", () => {

    const test_node = new Node(12, 
                        new Node(13, 
                            new Node(14,
                                new Node(15, 
                                    new Node(16)))));


   
})

Deno.test("Testing strict equality over iterator", () => {

    let node: Node<number>
    let node2: Node<string>

    node = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
    node2 = new Node('a', new Node('b', new Node('c', new Node('d'))))

})