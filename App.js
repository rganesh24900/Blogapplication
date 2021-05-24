import React from 'react'
//import './App.css';
import BlogCard from './card';

//dynamic blogs

class App extends React.Component {
  state={
    showBlogs:true,
    arr:[{id:1,title:'Blog Title1',des:'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',likeCount:0},{id:2,title:'Blog Title2',des:'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',likeCount:0},{id:3,title:'Blog Title3',des:'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',likeCount:0}]
  }
  
 
  onLikeBtnClick=(posi)=>{
    const updatedList = this.state.arr
    const updatedBlogObject = updatedList[posi];
    updatedBlogObject.likeCount = updatedBlogObject.likeCount+1;
    updatedList[posi] = updatedBlogObject;
    this.setState({arr:updatedList})
    console.log(updatedBlogObject)
  }
  
  hideItems=()=>{
    //let updateState = !this.state.showBlogs
    this.setState((prevState,prevProps)=>{return{showBlogs : !prevState.showBlogs}});
    console.log(this.state.showBlogs);
  }
  render(){
    console.log('Render Called');

    const cardarr=this.state.arr.map((items,pos)=>{
      //console.log(items);
      return(
        <BlogCard key={pos} title={items.title} des={items.des} id={items.id} likeCount={items.likeCount}
        onLikeBtnClick={()=>this.onLikeBtnClick(pos)} />
        
      )
    })

     return (
      <div className="App">
         <button onClick={this.hideItems}  >{this.state.showBlogs? 'Hide Items' : 'Show Items'}</button>
        <br></br>
        {this.state.showBlogs ? cardarr : null}
      </div>
  );}
}

export default App;