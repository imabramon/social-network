import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadableContent = ({isLoading, children}) =>{
    if(isLoading){
        return <ClipLoader />
    }

    return children;
}

export default LoadableContent;