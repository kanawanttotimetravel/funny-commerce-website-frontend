'use server'

import {getSession} from "@/apis/session";
import {cache} from "react";

export const initializeSession = cache( async () => {return await getSession()})
