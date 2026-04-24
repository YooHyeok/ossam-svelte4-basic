import { writable, derived } from "svelte/store"
import { initialBuckets } from "../../bucketData"
import { v4 as uuidv4 } from 'uuid'

const setBucketData = () => {
  let initBucketData = {
    buckets: initialBuckets,
    editMode: ''
  }
  let bucketData = { ...initBucketData }
  const { subscribe, update } = writable(bucketData)
  
  const onToggle = (id) => {
    update(datas => {
      const setDatas = datas.buckets.map(bucket => {
        return bucket.id === id ? {...bucket, chk: !bucket.chk} : bucket;
      })
      datas.buckets = setDatas;
      return datas;
    })
  }
  
  const onRemove = (id) => {
    update(datas => {
      const setDatas = datas.buckets.filter(bucket => bucket.id !== id)
      datas.buckets = setDatas;
      return datas;
    })
  }

  const onEditMode = (id) => {
    update(datas => {
      datas.editMode = id;
      return datas;
    })
  }
  const offEditMode = () => {
    update(datas => {
      datas.editMode = '';
      return datas;
    })
  }

  const onEditItem = (editBucket) => {
    update(datas => {
      const setDatas = datas.buckets.map(bucket => {
        if (bucket.id === editBucket.id) {
          bucket = editBucket
        }
        datas.buckets = setDatas;
        return datas;
      })
    })
    offEditMode();
  }

  const onSubmit = (bucketText) => {
    if (bucketText) {
      const bucket = {
        id: uuidv4(),
        text: bucketText,
        chk: false
      };
    
      update(datas => {
        const setDatas = [...datas.buckets, bucket];
        datas.buckets = setDatas;
        return datas;
      });
    }
  }
  return {
    subscribe,
    onToggle,
    onRemove,
    onEditMode,
    offEditMode,
    onEditItem,
    onSubmit
  }
}
const setFormBucket = () => {
  let formText = ''
  const { subscribe, set } = writable(formText)
  const resetForm = () => {
    set('')
  }
  return { 
    subscribe, 
    resetForm
  }
}
const setChkCount = () => {
  const count = derived(buckets, $buckets => {
    return $buckets.buckets.filter(bucket => !bucket.chk).length;
  }); // computed
  return count;
}

export const bucketText = setFormBucket();
export const buckets = setBucketData();
export const chkCount = setChkCount();