import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
/* import { getGifs } from '../helpers/getGifs'
 */import { GifGriditem } from './GifGriditem'

export const GifGrid = ({categoria}) => {

    


 const {data,loading} = useFetchGifs(categoria);


/* 
const [images, setimages] = useState([])







   */

  


    return (
<>
<h3>{categoria}</h3>
{loading && <p>Loading..</p>}
{
<div className='card-grid'>
   
        <ol>
            {
                data.map(data =>{
                    return <GifGriditem key={data.id} {...data}></GifGriditem>

                })
            }
        </ol>
   </div> }

</>
  )
}
