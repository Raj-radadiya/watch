import React from 'react'
import ManWatchSection from './manWatchSection'
import ManWatch from './menWatch'
import WomanWatch from './womanWatch'
import WomanWatchSection from './WomanWatchSection'

export default function Watch() {
    return (
        <div>
            <ManWatch />
            <ManWatchSection />
            {/* <WomanWatch/> */}
            {/* <WomanWatchSection/> */}
        </div>
    )
}
