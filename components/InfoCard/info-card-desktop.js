import React, { Component } from 'react';
import ReactPlayer from 'react-player'


class InfoCard extends Component {
    render() {
        return (
            <>
                <div className="lg:flex lg:items-center h-auto lg:w-10/12 lg:float-right md:justify-center flex-wrap md:m-12 sm:m-4 m-4 lg:m-0 xl:m-0">
                    <div className="lg:w-2/5 h-full lg:align-middle lg:-mr-24 md:mx-16 -mb-12 lg:mb-0">
                        <ReactPlayer url={this.props.yt} width='100%' />
                    </div>
                    <div className="lg:w-3/5 bg-white flex lg:items-center h-full md:w-full">
                        <div className='md:w-full'>
                        <div className="md:mx-32 my-24 mx-12">
                            <div>
                                <p className="text-2xl font-bold"><span className="text-red-100">&#9679; </span>{this.props.title}</p>
                            </div>
                            <div className="mt-4">
                                <p className="font-light">{this.props.description}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default InfoCard
