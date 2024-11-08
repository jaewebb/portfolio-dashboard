import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import BarChart from '@/components/BarChart.vue'

describe('BarChart', () => {
  it('renders properly', () => {
    const wrapper = mount(BarChart)
    expect(wrapper).toBeTruthy()
  })
})
