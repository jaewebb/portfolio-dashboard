import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import DashboardCard from '@/components/DashboardCard.vue'

describe('Card', () => {
  it('renders properly', () => {
    const wrapper = mount(DashboardCard)
    expect(wrapper).toBeTruthy()
  })
})
