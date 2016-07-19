import test from 'ava'
import {actionTest} from 'redux-ava'

import {changeSearch} from '../../src/actions/search'
import {fetchPosts, failPost} from '../../src/actions/posts'
import * as types from '../../src/constants'

test('posts action -> fetchPosts', actionTest(fetchPosts, null, {type: types.POSTS_LOAD_PENDING}))
test('posts action -> failPost', actionTest(failPost, 'Network error!', {type: types.POST_LOAD_FAILURE, error: 'Network error!'}))
test('search action -> change search action', actionTest(changeSearch, 'redux', {type: types.SEARCH_CHANGE, data: 'redux'}))
