

const CustomButton = () => {
    const handleClick =(e)=>{
        console.log("Click coordinates", e.clientX, e.clientY);
        alert("Thanks for liking!");
    }
    return (
        <div>
            <button onClick={handleClick}>Like</button>
        </div>
    );
};

export default CustomButton;