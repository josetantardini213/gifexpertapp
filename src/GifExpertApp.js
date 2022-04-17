import React,{useState} from 'react'
import { AddCategories } from './components/AddCategories'
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = ()=>{

   // const categories = ['Moto','Auto','Camioneta']
   const [categories,setCategoria] = useState(['Moto']);
/* 
    const handleAdd = ()=>{

        setCategoria(['bicicleta',...categories]);

    }
 */

    return (
                <>
                    <h2>GifExpertApp</h2>
                    <AddCategories setCategories={setCategoria}></AddCategories>
                    <hr></hr>
                    <ol>
                        {
                            categories.map((categoria,index) =>{
                                return <GifGrid key={categoria} categoria={categoria}></GifGrid>
                            })
                        }
                    </ol>

                </>
    )


}