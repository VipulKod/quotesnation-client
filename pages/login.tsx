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

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
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
        <div className="grid grid-cols-2 gap-4 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-3xl py-4">Sign In</h1>
              <Input
                label="Username"
                type="text"
                placeholder="Enter your username"
                value={username}
                icon={<AiOutlineUser size={20} />}
                onChange={handleUsernameChange}
              />
              <Input
                label="password"
                type="password"
                placeholder="Enter password"
                value={password}
                icon={<BsKey size={20} />}
                onChange={handlePasswordChange}
              />

              <div>
                <div className="flex">
                  <p>Don&apos;t have an account?&nbsp;</p>
                  <Link className="text-blue-600" href="/register">
                    Sign Up
                  </Link>
                </div>

                <div className="flex">
                  <p>Forgot Password?&nbsp;</p>
                  <Link className="text-blue-600" href="#">
                    Reset
                  </Link>
                </div>
              </div>
              <Button onClick={handleClick} className="px-2 my-2">
                <AiOutlineLogin /> <p className="px-1">Sign In</p>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/Quotes Nation.png"
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
