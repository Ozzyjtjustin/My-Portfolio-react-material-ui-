import React from 'react';


export class RonQuote extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      quoteLoaded:null,
      ronsQuote: null
    }
  }
  componentDidMount(){
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(res => res.json())
        .then((quote)=>{
          setInterval(()=>{
            this.setState({
              ronsQuote: quote[0],
              quoteLoaded:true
          })},1500)
        }
      )
  }


  isQuoteLoaded=()=>{
    if(!this.state.quoteLoaded){
      return <div> Loading... prepare to be inspired!</div>
    }return this.state.ronsQuote
  }

  render(){
    return (
      <div className='ronsQuote'>
        <div>
        {this.isQuoteLoaded() }
        </div>
        <div>
          <div style={{alignItems: 'center'}}>-Ron Swanson  </div>
          <div style={{fontSize: '8px', fontFamily: 'sansSerif' }}>(refresh the page for a new quote!)</div>
        </div>
      </div>
    )
  }
}
