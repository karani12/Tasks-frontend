// eslint-disable-next-line react/prop-types
const AuthLayout = ({children}) =>{
    return(
        <section className="max-w-7xl  min-h-screen mx-auto flex  items-center flex-col justify-center ">
            <div className="logo mb-10 text-center">
                <h1 className=" font-bold italic text-3xl text-purple-600">Tasky</h1>
            </div>
            <div className="contents min-w-96 grow  bg-red-400">
                {children}
            </div>
        </section>
    )
}

export default AuthLayout