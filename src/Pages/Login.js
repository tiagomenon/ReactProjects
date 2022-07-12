import Input from "../Components/Input";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import firebase from "../Settings/firebase";
function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            const responseUser = await firebase.auth.signInWithEmailAndPassword(
                data.email,
                data.password
            );
            console.log("responseUser", responseUser);
        } catch (e) {
            console.log("error", e);
        }
    };
    return (
        <>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Email: "
                    type="email"
                    register={{ ...register("email", { required: true }) }}
                />
                {errors.email && <span>El campo nombre es obligatorio</span>}
                <Input
                    label="Password: "
                    type="password"
                    register={{ ...register("password", { required: true }) }}
                />
                {errors.password && <span>El campo nombre es obligatorio</span>}
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </>
    );
}
export default Login;
