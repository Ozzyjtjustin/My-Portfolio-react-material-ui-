import React from 'react';


export class Work extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  workTabClick=()=>{
    console.log('in workTabClick')
    if(this.props.pageFill === 'work'){
      console.log('in conditional')
      return <div>This is the work page</div>
    } else return <div></div>
  }

  render(){
    return this.workTabClick()
  }
}
