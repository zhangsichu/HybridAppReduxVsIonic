import React from 'react'
import { mount, shallow } from 'enzyme'
import Subheader from '../../src/components/subheader'

describe('<Subheader />', ()=>{
  it('should not have a title', ()=>{
    const wrapper = shallow(<Subheader title='Test'/>)
    expect(wrapper.find('h2')).to.have.length(1)
  })
})
