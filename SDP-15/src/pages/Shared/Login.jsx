import { Button } from '@/components/ui/button';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Particles from '@/components/magicui/particles';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Particles className="absolute inset-0 z-0" />

            <div className="relative z-10 flex justify-center items-center w-full h-full">
                <Card className="w-full max-w-md p-8">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Login</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                                <FaUser className="mr-2 text-gray-500 dark:text-gray-400" />
                                <Input id="email" type="email" placeholder="@gmail.com" className="flex-grow" />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                                <FaLock className="mr-2 text-gray-500 dark:text-gray-400" />
                                <Input id="password" type="password" placeholder="Your password" className="flex-grow" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Login</Button>
                    </CardFooter>
                    <div className="mt-6 text-center">
                        <div className="flex items-center justify-center mb-4 text-gray-500 dark:text-gray-400">
                            <span className="border-t border-gray-300 dark:border-gray-700 w-1/3"></span>
                            <span className="mx-4">or</span>
                            <span className="border-t border-gray-300 dark:border-gray-700 w-1/3"></span>
                        </div>
                        <h1 className="text-gray-900 dark:text-white mb-4">
                            New to Moto-GenZ?
                            <Button
                                className="ml-2 text-white bg-gray-700 hover:bg-gray-900"
                                onClick={() => navigate('/register')}
                            >
                                Sign-up now
                            </Button>
                        </h1>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Login;
