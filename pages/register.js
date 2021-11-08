import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {Link}  from 'components/Link';
import  {Layout}  from 'components/Layout';
import { userService} from 'pages/services/user.service';

export default Register;

function Register() {
    const router = useRouter();
    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required'),
        email: Yup.string()
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(user) {
        console.log(user)
        // return userService.register(user)
        //     .then(() => {
        //         alertService.success('Registration successful', { keepAfterRouteChange: true });
        //         router.push('login');
        //     })
        //     .catch(alertService.error);
        userService.register(user).then((response) => {
                console.log("RESPONSE")            
                console.log(response)            
                console.log("META")            
                console.log(response.meta)                       
                router.push('login');
            })
            .catch();
      
    }

    return (
        <Layout>
            <div className="card">
                <h4 className="card-header">Register</h4>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Username</label>
                            <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" type="email" {...register('email')} className={`form-control`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        {/* <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Register
                        </button> */}
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                        <Link href="/login" className="btn btn-link">Cancel</Link>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
