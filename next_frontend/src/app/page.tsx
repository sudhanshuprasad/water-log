"use client"
import Navbar from "@/components/Navbar";
import { Button } from "@nextui-org/react";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import IdInput from "@/components/IdInput";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";


export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(false)
  
  const { isAuthenticated } = useKindeBrowserClient();
  
  useEffect(() => {
    console.log(isAuthenticated);
    setIsLoggedIn(isAuthenticated);
  }, [isAuthenticated])

  return (
    <main className="items-center justify-between">
      <Navbar />
      <div>

        <IdInput />

        {/* <WaterMeter waterLevel={waterLevel || 0} />
        <LastOnline lastOnline={lastOnline} /> */}

        {isLoggedIn ? null :<div>

          <div className="text-center m-5">
            <LoginLink>
              <Button className='w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login</Button>
            </LoginLink>
          </div>

          <div className="text-center m-5">
            <Typography align="center">
              New User?
            </Typography>
            <RegisterLink>
              <Button className='w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign Up</Button>
            </RegisterLink>
          </div>

        </div>
        
        }
      </div>

    </main>
  );
}