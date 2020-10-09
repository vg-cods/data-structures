import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { expect } from 'https://deno.land/x/expect/expect.ts';
import SLL from '../Lists/SLL.ts';
import Node from '../Lists/Node.ts'


Deno.test("Testing basic structure of a SSL", () => {

    const sll = new SLL();

    expect(sll).toHaveProperty('head');
    expect(sll).toHaveProperty('tail');
    expect(sll).toHaveProperty('size');
    expect(sll[Symbol.iterator]).toBeDefined();
    
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

    let slldouble: SLL<SLL<any>> = new SLL()

    for(let i in  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {

        slldouble.addOne(new SLL().addMany(1, 2, 3, 4, 5, "6", "7", "8"))

    }

    expect(slldouble.size).toBe(10)

})

Deno.test("Testing order of insertion to head and tail", () => {

    let sll1: SLL<number> = new SLL<number>().addMany('head', 1,2,3,4,5,6,7,8,9)
    let sll2: SLL<number> = new SLL<number>().addMany('tail', 1,2,3,4,5,6,7,8,9)
    let sll3: SLL<number> = new SLL<number>().addMany(1,2,3,4,5,6,7,8,9)

    expect([...sll1][0]).toBe(9)
    expect([...sll2][0]).toBe(1)

    expect([...sll1][1]).toBe(8)
    expect([...sll2][1]).toBe(2)

    expect([...sll3][0]).toBe(9)
    expect([...sll3][1]).toBe(8)    

})

Deno.test("Order of insertion SLL Constructor ", () => {

    let sll1: SLL<number> = new SLL<number>('head', 1,2,3,4,5,6,7,8,9)
    let sll2: SLL<number> = new SLL<number>('tail', 1,2,3,4,5,6,7,8,9)
    let sll3: SLL<number> = new SLL<number>(1,2,3,4,5,6,7,8,9)

    expect([...sll1][0]).toBe(9)
    expect([...sll2][0]).toBe(1)

    expect([...sll1][1]).toBe(8)
    expect([...sll2][1]).toBe(2)

    expect([...sll3][0]).toBe(9)
    expect([...sll3][1]).toBe(8)    

})

Deno.test("Order of insertion addOne() ", () => {

    let sll1: SLL<number> = new SLL<number>()
    
    sll1
    .addOne(12, 'head')
    .addOne(13, 'tail')
    .addOne(14, 'head')
    .addOne(15, 'tail')
    .addOne(16, 'head')
    .addOne(17, 'tail')
    .addOne(18, 'tail')
    .addOne(19, 'head')

    expect([...sll1]).toEqual([19,16,14,12,13,15,17,18])

})

Deno.test("Testing iterator", () => {

    let sll1: SLL<number> = new SLL();
    sll1.addMany(1, 2, 3, 4 ,5, 6, 7, 8, 9)

    let iterator = sll1[Symbol.iterator]()

    expect(typeof iterator).toBe('object')
    expect(typeof iterator.next).toBe('function')
    expect(typeof iterator.next()).toBe('object')
    
    let iterator2 = sll1[Symbol.iterator]()
    
    let obj: IteratorResult<number>

    do {
        obj = iterator2.next()

        expect(typeof obj.value).toBe('number')

    } while (  (obj = iterator2.next()).value )

    let sll2 = new SLL()
    sll2.addOne(0)

    let iterator3 = sll2[Symbol.iterator]()

    expect(sll2.size).toBe(1)
    expect(iterator3.next).toBeDefined()
    expect(iterator3.next().value).toBe(0)

})