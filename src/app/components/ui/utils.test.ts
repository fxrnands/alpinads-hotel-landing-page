import { describe, expect, it } from 'vitest'

import { cn } from './utils'

describe('cn', () => {
  it('merges conflicting Tailwind classes', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })

  it('joins conditional class names', () => {
    expect(cn('base', false && 'hidden', true && 'block')).toBe('base block')
  })
})
