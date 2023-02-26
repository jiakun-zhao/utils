import { describe, expect, it } from 'vitest'

import { repeat } from '.'

describe('index', () => {
    it('should work', () => {
        expect(repeat(2)).toStrictEqual([0, 1])
    })
})
