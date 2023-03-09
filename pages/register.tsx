import { Inter } from "next/font/google";
import Image from "next/image";
import { Input } from "@/components/ui/input/Input";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { Button } from "@/components/ui/button/Button";
import { AiOutlineLogin, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    console.log(username, password);
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4  rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-3xl py-4">Sign Up</h1>
              <Input
                label="Username"
                type="text"
                placeholder="Enter your username"
                value={username}
                icon={<AiOutlineUser size={20} />}
                onChange={handleUsernameChange}
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your Email"
                value={email}
                icon={<AiOutlineMail size={20} />}
                onChange={handleEmailChange}
              />
              <Input
                label="password"
                type="password"
                placeholder="Enter password"
                value={password}
                icon={<BsKey size={20} />}
                onChange={handlePasswordChange}
              />

              <div className="flex">
              <p>Already have an account?&nbsp;</p>
              <Link className="text-blue-600" href="/login">Sign In</Link>
              </div>
              

              <Button onClick={handleClick} className="px-2 my-2">
                <AiOutlineLogin /> <p className="px-1">Sign In</p>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/QN_Register.png"
              alt="brand image"
              width={500}
              height={500}
              className="h-full drop-shadow-2xl rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
