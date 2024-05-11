import { Button, Card, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log(values);
    }

    const logIn = () => {
        navigate("/login");
    }

    return (
        <div className="card-center">
            <Card>
                <Form
                    name="basic"
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                    onFinish={onFinish}
                >
                    <div>
                        <Form.Item
                            name="phoneNumber"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your mobile phone',
                                },
                            ]}

                        >
                            <Input placeholder="Mobile number" />
                        </Form.Item>
                        <Form.Item
                            name="fullname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your full name!',
                                },
                            ]}
                        >
                            <Input placeholder="Fullname" />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your user name!',
                                },
                            ]}
                        >
                            <Input placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password placeholder="Password" />
                        </Form.Item>
                    </div>

                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Sign up</Button>
                </Form>
            </Card>
            <Card style={{ marginTop: 16, textAlign: 'center' }}>
                <Typography.Text>Have an account? <span className="text-link" onClick={logIn}>Log in</span></Typography.Text>
            </Card>
        </div>
    );
};

export default Signup;