import Button from "../components/Button"

function SignIn () {
 
    const handleClick = () => {
        window.location.href = "http://localhost:3000/auth/google"
    }

    return (
        <div>
             <h1>ToDo - Go</h1>
            <div>
                <p>Sign In</p>
            </div>
            <div>
            <Button onClick={handleClick} label="Click Me" />
            </div>
        </div>
    )
}

export default SignIn