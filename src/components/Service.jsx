import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

function Service(){
    return(
        <div>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-10 mx-auto text-left">
                        <div className="row gy-4">
                            {
                                Sdata.map((val, index,) => {
                                    return(
                                        <Card key={index}
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                            text={val.text}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Service