import React from 'react';

class AddThread extends React.Component{
 constructor(props){
   super(props);
   this.state = {
    comment:''
  }
  this.add = this.add.bind(this);
  this.updateComment = this.updateComment.bind(this);
  this.updateUserName = this.updateUserName.bind(this);

 }
 updateComment(e){
   this.setState({
     comment:e.target.value
   })
 }

 updateUserName(e){
   this.setState({
     userName:e.target.value
   })
 }
 add(){
   this.props.addThread(this.state.comment)
   this.setState({
     comment:''
   })
 }

 render() {
    return (
      <div>
        <div className="header">
          <h1>WELCOME BACK</h1>
          <div className="startT">
          <h2>START A THREAD</h2>
          </div>
        </div>
      <textarea className="textAr" onChange={this.updateComment} value={this.state.comment}>
        Type Something!
      </textarea>
       <div>
        <button className="threadButn" onClick={this.add}>Add Thread</button>
       </div>
      </div>
    );
  }
}
export default AddThread;
