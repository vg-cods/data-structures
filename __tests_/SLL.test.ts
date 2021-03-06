import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { expect } from 'https://deno.land/x/expect/expect.ts';
import SLL, { SingleLinkedList } from '../Lists/SLL.ts';
import Node from '../Lists/Node.ts'


Deno.test("Testing basic structure of a SSL", () => {

    const sll = new SLL();

    expect(sll).toHaveProperty('head');
    expect(sll).toHaveProperty('tail');
    expect(sll).toHaveProperty('size');
    
})

Deno.test("Testing default values", () => {

    const sll = new SLL();

    assertEquals(sll.head, new Node());
    assertEquals(sll.tail, new Node());
    assertEquals(sll.size, 0);

})

Deno.test("Testing adding many alues in same call", () => {

    const sll = new SLL();

    sll.addMany(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

    assertEquals(sll.size, 10)

    sll.addMany(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

    assertEquals(sll.size, 20)  

})

Deno.test("Testing addOne function with addMany", () => {

    const sll: SLL<number> = new SLL();

    sll.addMany(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    sll.addOne(1)

    assertEquals(sll.size, 11)

    sll.reset()

    sll.addOne(1)
    sll.addOne(1)
    sll.addOne(1)
    sll.addOne(1)
    sll.addOne(1)

    assertEquals(sll.size, 5)

    let slldouble: SLL<SingleLinkedList<any>> = new SLL()

    for(let i in  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {

        slldouble.addOne(new SLL().addMany(1, 2, 3, 4, 5, "6", "7", "8"))

    }

    expect(slldouble.size).toBe(10)

})

Deno.test("Testing order of insertion to head and tail", () => {

    let sll1: SLL<number> = new SLL<number>().addMany('head', 1,2,3,4,5,6,7,8,9)
    let sll2: SLL<number> = new SLL<number>().addMany('tail', 1,2,3,4,5,6,7,8,9)

    expect([...sll1.head][0]).toBe(9)
    expect([...sll2.head][0]).toBe(1)
    

})