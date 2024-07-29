import { Button } from '@/components/ui/button';
import { FaUser, FaEnvelope, FaKey, FaPhone } from 'react-icons/fa';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Particles from '@/components/magicui/particles';

const Register = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Particles className="absolute inset-0 z-0" />

      <div className="relative z-10 flex justify-center items-center w-full h-full">
        <Card className="w-full max-w-md p-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Create an account</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                <FaUser className="mr-2 text-gray-500 dark:text-gray-400" />
                <Input id="username" type="text" placeholder="Username" className="flex-grow" />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                <FaEnvelope className="mr-2 text-gray-500 dark:text-gray-400" />
                <Input id="email" type="email" placeholder="@gmail.com" className="flex-grow" />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                <FaKey className="mr-2 text-gray-500 dark:text-gray-400" />
                <Input id="password" type="password" placeholder="******" className="flex-grow" />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                <FaPhone className="mr-2 text-gray-500 dark:text-gray-400" />
                <Input id="phone" type="tel" placeholder="Phone Number" className="flex-grow" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create account</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
