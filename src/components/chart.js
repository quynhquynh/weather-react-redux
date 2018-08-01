import React from 'react'
import _ from 'lodash'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

export default ({data, color, units}) => {
    return(
        <div>
            <Sparklines height={120} width={100} data={data}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type='mean' />
            </Sparklines>
            <div>{average(data)} {units}</div>
        </div>
    )
}

const average = data => {
    return _.round(_.sum(data)/data.length)
}

