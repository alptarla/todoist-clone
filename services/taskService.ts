import {
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  Query,
  QueryConstraint,
  setDoc,
  updateDoc,
  where
} from 'firebase/firestore'
import { db } from '../config/firbease'
import { FiltersType, ITask } from '../context/TaskContext/types'
import { makeResObject } from '../helpers'

export async function getTaskById(id: string): Promise<ITask> {
  const res = await getDoc(doc(db, 'tasks', id))
  return makeResObject(res)
}

export async function createTask(task: ITask) {
  await setDoc(doc(db, 'tasks', task.id), task)
  return getTaskById(task.id)
}

export async function getTasks(filters?: FiltersType): Promise<ITask[]> {
  let refs: Query | CollectionReference = collection(db, 'tasks')
  let queries: QueryConstraint[] = []

  if (filters?.date) queries.push(where('date', '==', filters.date))
  if (filters?.project) queries.push(where('project', '==', filters.project))

  if (queries.length) {
    refs = query(collection(db, 'tasks'), ...queries)
  }

  const res = await getDocs(refs)
  return res.docs.map(makeResObject)
}

export async function updateTask(taskId: string, fields: any) {
  await updateDoc(doc(db, 'tasks', taskId), { ...fields })
  return getTaskById(taskId)
}

export async function removeTask(id: string) {
  await deleteDoc(doc(db, 'tasks', id))
}
