// import React,{useContext} from "react"
import axios from "axios"
import {config} from "./"
// import {Context} from "../components"

export function useAxios(){
//   let context = useContext(Context)

  let api = axios.create({
    baseURL:config.backendUrl,
    timeout: 10000,
    headers: {
    //   authorization:context.state.token,
      crossDomain: true,
      contentType: 'application/json; charset=utf-8'
    }
  });

  return api
}