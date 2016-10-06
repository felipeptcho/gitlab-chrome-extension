/* global describe, it, expect*/

import reducer, {initialState} from 'reducers/favorite-projects'
import mockFavoriteProjects from 'mocks/favorite-projects'
import {
  FETCH_FAVORITE_PROJECTS,
  ADD_PROJECT_TO_FAVORITES,
  REMOVE_PROJECT_FROM_FAVORITES
} from 'constants/action-types'

describe('reducers', () => {
  describe('favorite-projects', () => {
    it('should return the initial state', () => {
      expect(
        reducer(undefined, {})
      ).toEqual(initialState)
    })

    it('should handle FETCH_FAVORITE_PROJECTS', () => {

      expect(
        reducer(initialState, {
          favoriteProjects: mockFavoriteProjects,
          type: FETCH_FAVORITE_PROJECTS,
        })
      ).toEqual({...initialState, ...mockFavoriteProjects})
    })
  })
})
