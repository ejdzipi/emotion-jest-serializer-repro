import React from 'react'
import {mount} from 'enzyme'
import StyleArrayComponent from "./StyleArrayComponent";

describe('StyleArrayComponent', () => {
    it('enzyme - snapshot', () => {
        const component = mount(
            <StyleArrayComponent/>
        )

        expect(component).toMatchSnapshot()
    })
})
