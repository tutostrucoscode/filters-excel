import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyAmj7FCG61FkRXdvuXyz08PgZO0nmeaCC4',
    authDomain: 'excel-filters-bda9f.firebaseapp.com',
    projectId: 'excel-filters-bda9f',
    storageBucket: 'excel-filters-bda9f.appspot.com',
    messagingSenderId: '855420185613',
    appId: '1:855420185613:web:3c63177343a916547c7944',
    measurementId: 'G-W1BWVV0DPX',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const analytics = getAnalytics(app)
const storage = getStorage(app)

export { auth, db, analytics, storage }
