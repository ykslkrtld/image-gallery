import data from "../helper/data"

export default function Picture() {
  return (
    <div>
    <p className="title">Image Gallery</p>
    <div className="container">
      {
        data.map((item, index) => 
          <div key={index} className="item" >
            <div className="item-cont">
              <img src={item.src.large}/>
            </div>
            <p>{item.photographer}</p>
          </div>
        )
      }
    </div>
  </div>
  )
}

