import React, { Component } from 'react';
import ReactPlayer from 'react-player'


class InfoCard extends Component {
    render() {
        return (
            <>
                <div className="flex items-center h-auto w-10/12 float-right">
                    <div className="w-2/5 h-full align-middle -mr-24">
                        <ReactPlayer url={this.props.yt} width='100%' />
                    </div>
                    <div className="w-3/5 bg-white flex items-center h-full">
                        <div className='w-full'>
                        <div className="mx-32 my-24">
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
