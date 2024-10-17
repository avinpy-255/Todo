function SignIn () {
    const handleClick = () => {
        
        window.location.href = "http://localhost:3000/auth/google"
    }

    return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300">
        <img src="/togoicon.png" alt="logo" className="w-48 h-48 mb-0 mt-0" />  
        <p className="font-mono text-sm text-emerald-700 mb-2"> a simple todo web app built in go<br/>
         <a onClick={handleClick} className="text-blue-500 hover:text-blue-700">sign in</a> and enjoy!!<br/> 
        </p>
      </div>
    )
}

export default SignIn