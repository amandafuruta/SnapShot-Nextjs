import { useEffect, useContext ,useState } from 'react'

import {HomeStyle} from "../styles/home"

import Link from "next/link"

import Searchlist from '../components/Searchlist'

import { PhotoContext } from "../context/PhotoContext";

import { GoSearch } from "react-icons/go";


export default function Home() {

  const [ searchValue, setSearchValue ] = useState("")
  const { images, runSearch, loading} = useContext(PhotoContext);
  const [ seachField, setSearchField ] = useState(false)

  useEffect(() => {

    if(searchValue === ""){

      runSearch("mountain")
      setSearchValue("Mountain")

    } else {
      
      runSearch(searchValue)

    }

  }, [searchValue])


  function Search(e){
    let value = e.target.value
    setSearchValue(value)

    if (value != ""){
      console.log("Vazio")
      setSearchField(true)
    } else {
      console.log("náo")

      setSearchField(false)
    }
  }

  return (
    <HomeStyle>
      <div className='container'>
        
        <h1>SnapShot</h1>

        <div className='search_div'>
          <input 
            type="text" 
            placeholder='Search...'
            onChange={Search}
          />

          <button className={seachField === false ? "lightbutton" : "darkbutton"}><GoSearch color="#fff" size={18}/></button>
        </div>

        <div className='options'>
            <Link href="/"><a className='btn' onClick={()=> searchValue === "mountain" ? null : setSearchValue("mountain")}>Mountains</a></Link>
            <Link href="/"><a className='btn'  onClick={()=> searchValue === "beach" ? null : setSearchValue("beach")}>Beaches</a></Link>
            <Link href="/"><a className='btn' onClick={()=> searchValue === "bird" ? null : setSearchValue("bird")}>Birds</a></Link>
            <Link href="/"><a className='btn'  onClick={()=> searchValue === "food" ? null : setSearchValue("food")}>Foods</a></Link>
        </div>

        <Searchlist images={images} category={searchValue}/>

      </div>
    </HomeStyle>
  )
}
