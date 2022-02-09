import { DocumentSnapshot } from 'firebase/firestore'

export const makeResObject = (doc: DocumentSnapshot): any => ({ id: doc.id, ...doc.data() })
