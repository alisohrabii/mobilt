import React,{useState,useContext} from 'react';
import './search.css';
import {withRouter} from 'react-router-dom';
import SearchShow from './SearchShow';
import {CloseIcon, SearchIcon} from '../util/Icons';
import {ProductContext} from '../context/ProductContext'

const Search = (props) => {
  const {handelProductDetail}=useContext(ProductContext);    
   
  const [Icon, setIcon] = useState('search');
    const [SearchTerm2, setSearchTerm2] = useState('');
    const [SearchTerm, setSearchTerm] = useState('');
  const handlesearch=(e)=>{
    setSearchTerm2(e.target.value);
    props.handleParentSearch(e.target.value);
  }
  const handlesearchshow=()=>{
    setIcon('close');
const elem= document.getElementById('searchshow')
elem.style.display='block';

  }
  const  handlChild=(proid,proname)=>{
      
    const elem= document.getElementById('searchshow')
    elem.style.display="none";
    setIcon('search');
      setSearchTerm2(proname); 
      
    const elem4= document.getElementById('searchinput')
    elem4.style.color="rgb(166,166,166)";
                    
                      handelProductDetail(proid);
                    props.history.push('/ProductDetail');
                
}
  const handledissearchshow=()=>{
  
    setIcon('search');
    const elem= document.getElementById('searchshow')
    elem.style.display="none";
      }
    return (
        <div className='search'>
          <div style={{position:'absolute',left:"19px", top:"9px"}}>
          {Icon=='search'?(<SearchIcon width='22px' color="rgb(84,84,84)"/>):(<div onClick={handledissearchshow}><CloseIcon  width='22px' color="rgb(84,84,84)"/></div>)}
          </div>
            <div  className='search-input-con'> <input  id='searchinput' type='text' value={SearchTerm2} onFocus={handlesearchshow} onChange={handlesearch} placeholder=' کالای مورد نظر را جستجو کنید'></input></div> 
           <div id='searchshow' className='searchshow'> <SearchShow  handleParentSearch={handlChild} items={props.searchshowitems}/></div> 
        </div>
    );
};
export default withRouter(Search);
