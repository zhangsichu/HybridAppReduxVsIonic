import test from 'ava'
import {reducerTest} from 'redux-ava'

import {search} from '../../src/reducers/search'
import {changeSearch} from '../../src/actions/search'
import * as types from '../../src/constants'

test('search reducer handles change search', reducerTest(
  search,
  {phrase: null},
  changeSearch('Redux'),
  {phrase: 'Redux'}
))
