import PageSwapButton from "../components/PageSwapButton.jsx"

function LoginPage({onPageSwap}){
    return (<div>
        <h1>Login page</h1>
        <PageSwapButton onPageSwap={onPageSwap} targetPage='LandingPage' displayName='Back to main' />
    </div>);
}

export default LoginPage;