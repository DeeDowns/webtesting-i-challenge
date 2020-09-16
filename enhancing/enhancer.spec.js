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

    describe('success()', () => {
        it('should return a new item with the items enhancement increased by 1', () => {
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

            expect(result.enhancement).toEqual(20)
        })
        it('should have the item durability as a number from 0 to 100', () => {
            const item = {
                name: 'hammer',
                durability: 10,
                enhancement: 20
            }

            const result = enhancer.success(item)
            expect(result.durability).not.toBeNaN()
            expect(result.durability).toBeLessThanOrEqual(100)
            expect(result.durability).toBeGreaterThanOrEqual(0)
        })
    })
    
    describe('fail()', () => {
        it('should decrease the item durability by 5, if the item enhancement is less than 15', () => {
            const item = {
                name: 'hammer',
                durability: 10,
                enhancement: 14
            }

            const result = enhancer.fail(item)

            expect(result.durability).toBe(5)

        })
    
        it('should decrease the item durability by 10, if the item enhancement is 15 or more', () => {
            const item = {
                name: 'hammer',
                durability: 10,
                enhancement: 15
            } 

            const result = enhancer.fail(item)

            expect(result.durability).toBe(0)
        })
        it('should decrease the enhancement level by 1, if the item enhancement is greater than 16', () => {
            const item = {
                name: 'hammer',
                durability: 10,
                enhancement: 18
            } 

            const result = enhancer.fail(item)

            expect(result.enhancement).toBe(17)
        })
    })

    describe('get()', () => {
        it('should not modify item name if enhancement level is 0', () => {
            const item = {
                name: 'hammer',
                durability: 10,
                enhancement: 0
            } 

            const result = enhancer.get(item)

            expect(result.name).toBe('hammer')
            
        })

        it('should change item name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item name, if enhancement level is greater than 0', () => {
            const item = {
                name: 'hammer',
                durability: 10,
                enhancement: 10
            } 

            const result = enhancer.get(item)

            expect(result.name).toBe('[+10] hammer')
            
        })
    })
    
})
