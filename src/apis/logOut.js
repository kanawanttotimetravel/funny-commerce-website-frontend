'use server'

import {deleteSession} from "@/apis/session";
import {redirect} from "next/navigation";

const logOut = async () => {
  await deleteSession();
  redirect('/login')
}

