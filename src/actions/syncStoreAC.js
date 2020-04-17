import { SYNC_STORE } from '../constants/action-types'

export const syncStoreAC = (newstore) => ({
    type: SYNC_STORE,
    newstore
})
