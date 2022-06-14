import { useState } from "react";
import { List } from "../styles/list"

const Searchlist = (props) => {
    const [list, setList] = useState([])
    const images = props.images
    let imageList = []
      
    if (images.length > 0) {

      images.map((image) => {
        let farm = image.farm;
        let server = image.server;
        let id = image.id;
        let secret = image.secret;
        let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
        imageList.push({url})
     
      });
    }

    return (
      <List>

        <p>{props.category} Picture</p>

        <div className="listBox">

            {imageList.map((item, index) => {
            return(

              <div className="imgBox" key={index}> 
                <img src={item.url}/>
              </div>

            )
            })}

        </div>
      </List>
    )
}

export default Searchlist