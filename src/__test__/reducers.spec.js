import test from 'ava'
import {reducerTest} from 'redux-ava'

import {search} from '../reducers/search'
import {changeSearch} from '../actions/search'

import * as types from '../constants'

test('search reducer handles change search', reducerTest(
  search,
  {phrase: null},
  changeSearch('Redux'),
  {phrase: 'Redux'}
))
