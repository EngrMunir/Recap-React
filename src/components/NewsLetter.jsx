import ActionButton from "./ActionButton"

export const NewsLetter =() =>{
    const handleSubscribe =() =>{
        alert("Thank you for subscribing to our newsLetter!");
    }
    return (
        <div>
            <h2>Subscribe to Newsletter</h2>
            <ActionButton text="Subscribe" onClick={handleSubscribe}/>
        </div>
    )
}