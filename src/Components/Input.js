import { Form } from "react-bootstrap";
function Input(props) {
    const { type, label, register, name } = props;
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{label}</Form.Label>
                <Form.Control type={type} name={name} {...register} />
            </Form.Group>
        </Form>
    );
}
export default Input;
