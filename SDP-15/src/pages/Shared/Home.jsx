import GridPattern from '@/components/magicui/animated-grid-pattern';
import React from 'react';
import { cn } from "@/lib/utils";
import { BorderBeam } from '@/components/magicui/border-beam';
import Particles from '@/components/magicui/particles';
import { Button } from '@/components/ui/button';

const Home = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Particles />
            </div>

            <div className="relative z-10 flex items-center justify-between w-full h-full p-16">
                <div className="text-left">
                    <h1 className="text-4xl">Welcome to Moto-GenZ</h1>
                    <p className="text-2xl mt-4">Your one-stop solution for all automotive needs.</p>
                    <br />
                    <hr />
                    <Button>Book Now</Button>
                </div>
                <div className="w-1/2 h-auto">
                    <img src="/src/assets/img/hero.jpg" alt="Car6" className="object-cover" />
                </div>
            </div>
        </div>
    );
}

export default Home;
