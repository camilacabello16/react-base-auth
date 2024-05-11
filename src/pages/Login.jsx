import { Button, Card, Form, Input, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "~/provider/authProvider";

const Login = () => {
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const onFinish = () => {
        setToken("this is test token");
        setIsLoginSuccess(true);
    };

    useEffect(() => {
        if (isLoginSuccess)
            navigate("/");
    }, [isLoginSuccess]);

    const signUp = () => {
        navigate("/signup");
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
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}

                        >
                            <Input placeholder="Phone number, username, or email" />
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

                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Log in</Button>
                </Form>
            </Card>
            <Card style={{ marginTop: 16, textAlign: 'center' }}>
                <Typography.Text>Don't have an account? <span className="text-link" onClick={signUp}>Sign up</span></Typography.Text>
            </Card>
        </div>
    );
}

export default Login;