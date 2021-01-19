let environment = process.env.REACT_APP_ENV

let configEnv = {
    development:{
        backendUrl:"http://localhost:5000",
    },
    production:{
        backendUrl:"",
    },
    global:{}
}

export const config = {
    ...configEnv.global,
    ...configEnv[environment]
}