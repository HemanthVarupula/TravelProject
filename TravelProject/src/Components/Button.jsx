const Button=({Name,onClick})=>{
    // const {Nmae}=props;
    return(
        <>
        <div className="h-11 w-auto border-2">
        <button className="m-2 cursor-pointer" onClick={onClick}>{Name}</button>
        </div>
        </>
    )
}

export default Button