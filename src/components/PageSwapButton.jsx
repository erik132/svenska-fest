
function PageSwapButton({onPageSwap, targetPage, displayName}){
    return <button onClick={() => onPageSwap(targetPage)}>{displayName}</button>
}

export default PageSwapButton;