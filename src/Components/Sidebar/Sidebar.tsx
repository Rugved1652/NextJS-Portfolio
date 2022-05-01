import Image from "next/image"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import user from '../../../public/user.jpg'


export const Sidebar = () => {
    return (
        <div>
            <div>
                <Image
                className="m-auto border-4 border-solid rounded-full border-[#40a9ff] h-36 w-36 img"
                src={user} width={250} height={250} />
            </div>
            <h3 className="text-3xl font-medium tracking-wider text-[#f4f8fc] tracking"><span>Rugved </span>Patel</h3>
            <p className="btn1">Full Stack Developer</p>
          

            {/* Social Icons */}
            <div className="mt-4 text-black ">
                <div className="flex items-center justify-center px-3 my-2 btn2">
                    <AiFillLinkedin className="socialicons" />
                    <AiFillGithub className="socialicons" />
                    <AiFillTwitterCircle className="socialicons" />
                    <AiFillInstagram className="socialicons" />
                </div>
            </div>

            {/* address */}
            <div className="flex items-center justify-center my-1 text-white">
                <GoLocation className="w-6 h-4 px-1" /> Ahmedabad,India
            </div>

            <div className="flex flex-col">
                <button className="btn2">Email Me</button>
            </div>
            
            <p className="btn1">Download CV</p>
            
            <div className="flex flex-col py-5 my-5 text-white bg-black rounded-xl">
                <div className="flex my-2 text-white justify-evenly">
                <span className="tag">#Fullstack</span>
                <span className="tag">#Fullstack</span>
                <span className="tag">#Fullstack</span>
                </div>
                <div className="flex my-2 text-white justify-evenly">
                <span className="tag">#Fullstack</span>
                <span className="tag">#Fullstack</span>
                <span className="tag">#Fullstack</span>
                </div>
            </div>

        </div>
    )
}
