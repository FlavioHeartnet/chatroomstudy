import { collection, query, where, getDocs } from 'firebase/firestore'
import {db} from '../firebase'

export default class User {
    
   async getDocByid(uid){
        let data = {}
        const userRef = query(collection(db,'user'), where('uid', '==', uid))
        const docSnap = await getDocs(userRef)
         docSnap.forEach((doc) => {
            data = doc.data()
        })
        return data
    }
}