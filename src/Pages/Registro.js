import Input from "../Components/Input";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import firebase from "../Settings/firebase";
function Registro() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            const responseUsers =
                await firebase.auth.createUserWithEmailAndPassword(
                    data.email,
                    data.password
                );
            console.log("responseUsers", responseUsers);
            if (responseUsers) {
                const document = await firebase.db.collection("Usuarios").add({
                    name: data.nombre,
                    lastname: data.apellido,
                    userId: responseUsers.user.uid,
                });
                console.log("document", document);
            }
        } catch (e) {
            console.log("error", e);
        }
    };
    return (
        <>
            <h1>Register</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Nombre: "
                    type="text"
                    register={{ ...register("nombre", { required: true }) }}
                />
                {errors.nombre && <span>El campo nombre es obligatorio</span>}
                <Input
                    label="Apellido: "
                    type="text"
                    register={{ ...register("apellido", { required: true }) }}
                />
                {errors.apellido && <span>El campo nombre es obligatorio</span>}
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
                    Register
                </Button>
            </Form>
        </>
    );
}
export default Registro;
