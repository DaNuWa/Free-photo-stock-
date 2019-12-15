import React, { Component } from 'react'
import axios from 'axios';
import Imageload from './Imageload'
export class Search extends Component {
    constructor()
    {
      super();
      this.state={
        images:[],
        searchfield:'',
        url:'https://pixabay.com/api/',
        apikey:'8667132-8ba75bc8142107b84271964d0',
        amount:'20'

      }
    }
    SearchChange=(e)=>
    {
        this.setState({searchfield:e.target.value}
        , () => {
              axios
                .get(
                  `${this.state.url}/?key=${this.state.apikey}&q=${
                    this.state.searchfield
                  }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
                )
                .then(res => this.setState({ images: res.data.hits }))
                .catch(err => console.log(err));
            }
          );
        };
        click=(e)=>
        {
            e.preventDefault();
           // console.log('ss ',this.state.searchfield)
            this.setState({searchfield:''})
        }
    
    render() {
        console.log('hi ',this.state.images)
        return (
            <div>
            <div className="search">
            <form className="search-form">
                <input type="text" placeholder="Search for any images as you wish.." value={this.state.searchfield}
                onChange={this.SearchChange}/>
                <input type="submit" value="Search" onClick={this.click}/>
            </form>
            </div>
            <br/>   <br/>   
            <Imageload images={this.state.images}/>
        </div>
       
        );
    }
}

export default Search;
