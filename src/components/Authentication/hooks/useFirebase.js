import auth from './../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const useFirebase = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    return {
        createUserWithEmailAndPassword,
        user, 
        loading,
        error
    };
};

export default useFirebase;