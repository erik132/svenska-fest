
function PageSwapButton({onPageSwap, targetPage, displayName}){
    return <button className="button" onClick={() => onPageSwap(targetPage)}>{displayName}</button>
}

export default PageSwapButton;