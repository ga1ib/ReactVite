
function Button(){
    //inline css

    const styles={
       
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
            transition: "background-color 0.3s ease-in-out"
        }
    

    return(<button style={styles}>click</button>);

 }
export default Button;