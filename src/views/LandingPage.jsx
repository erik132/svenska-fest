import PageSwapButton from "../components/PageSwapButton.jsx"

function LandingPage({onPageSwap}){
    return (<div>
        <h1>LandingPage</h1>
        <PageSwapButton onPageSwap={onPageSwap} targetPage='LoginPage' displayName='Login' />
        <ul>
            <li>events here</li>
        </ul>
        <div>
            <p>Registration part here</p>
        </div>
        <div>
            <p>Event Creation here, but hide if user is not authenticated.</p>
        </div>
    </div>);
}

export default LandingPage;