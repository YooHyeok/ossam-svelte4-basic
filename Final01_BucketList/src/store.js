import { writable, derived } from "svelte/store"
import { initialBuckets } from "./bucketData"
import { v4 as uuidv4 } from 'uuid'

const setBucketData = () => {}
const setFromBucket = () => {}
const setChkCount = () => {}

export const bucketText = setBucketData();
export const buckets = setFromBucket();
export const chkCount = setChkCount();