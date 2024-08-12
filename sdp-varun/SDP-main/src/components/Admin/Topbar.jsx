import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ModeToggle } from '../mode-toggle'

const Topbar = () => {
    return (
        <div className='h-[6vh] w-full flex justify-center items-center shadow-sm shadow-primary'>
            <div className='w-[95%] h-full flex items-center justify-end gap-4'>
                <ModeToggle/>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>MM</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Topbar