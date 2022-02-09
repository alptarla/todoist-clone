import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '../config/firbease'
import { ITask } from '../context/TaskContext/types'
import { makeResObject } from '../helpers'

export async function getTaskById(id: string): Promise<ITask> {
  const res = await getDoc(doc(db, 'tasks', id))
  return makeResObject(res)
}

export async function createTask(task: ITask) {
  await setDoc(doc(db, 'tasks', task.id), task)
  return getTaskById(task.id)
}

export async function getAllTasks(): Promise<ITask[]> {
  const res = await getDocs(collection(db, 'tasks'))
  return res.docs.map(makeResObject)
}
