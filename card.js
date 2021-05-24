
import React from 'react'
import { checkCards } from './check'
import classes from './Blog.module.css'


const blogCard=(props)=>  {
    
    // onLikeBtnClick=()=>{
    //     this.setState((prevState,prevProps)=>{
    //        return{ likeCount:prevState.likeCount+1}
    //     })

    //}
    
    checkCards(props)

    
    return(
        <div className={classes.BlogCard} >
         <h1>{props.title}</h1> <br/>
        <p>{props.des}</p>
        <p>Like Count:<span className={classes.likeCount}>{props.likeCount}</span></p>     
        <button onClick={props.onLikeBtnClick}>Like</button>
        </div>
        
    )
 
}
export default blogCard