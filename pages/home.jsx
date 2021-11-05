import styles from '../styles/Home.module.scss'
import { Button } from 'semantic-ui-react'
import {auth} from '../firebase'
import router from 'next/router';
import {onAuthStateChanged, signOut} from 'firebase/auth'
export default function Home(){
    
    onAuthStateChanged(auth, (user) => {
        if (user) {

        } else {
            router.push("/")
        }
      });

    function logout(){
        signOut(auth).then(() => {
            router.push('/')
          }).catch((error) => {
            console.log(error)
          });
    }

    return (<div className={styles.container}>
            <h1>Home</h1>
            <Button onClick={logout} color='red'>Sair</Button>
        </div>)
}