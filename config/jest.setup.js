import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { matchers } from '@emotion/jest'

configure({ adapter: new Adapter() })
expect.extend(matchers)
