
function Button(){
    let count = 0;
    const handleclick = (name) =>{
        if (count< 3) {
             count++;
             console.log(`${name} you clicked me ${count} time/s`);
        }else {
             console.log(`${name} stop cliking me`);
    }
};

    return(
<button onClick={() => handleclick("Galib")}>Click</button>
    );

}
export default Button;