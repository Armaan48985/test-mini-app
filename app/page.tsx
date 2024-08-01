'use client'
import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";


interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData)
    }
  }, [])
  return (
    <div>
      Welcome to the no idea app
      {userData && (
        <h1>{userData.first_name}</h1>
      )}
    </div>
  );
}
