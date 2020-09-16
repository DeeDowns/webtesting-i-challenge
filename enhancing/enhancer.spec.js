const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('should return a new item with durability restored to 100', () => {
            const item = {
                name: 'hammer',
                durability: 10,
                enhancement: 0
            }

            const result = enhancer.repair(item)

            expect(result.durability).toBe(100)
        })
    })
    describe('success', () => {
        it('should return a new item with the items enhancemebt increased by 1', () => {
            const item = {
                name: 'hammer',
                durability: 10,
                enhancement: 1
            }

            const result = enhancer.success(item)

            expect(result.enhancement).toBe(2)
        })
        it('should not increase enhancement level if the item enhancement is 20', () => {
            const item = {
                name: 'hammer',
                durability: 10,
                enhancement: 20
            }

            const result = enhancer.success(item)

            expect(result.enhancement).toBeLessThanOrEqual(20)
        })
        it.todo('should have the items durability as a number from 0 to 100')
     
    })
    
})
