import React, { useState } from 'react'
import styles from './Tabs.module.css'

const Tabs = (props) => {

    const [currentTab, setCurrentTab] = useState(0)

    const selectTab = (tabIndex) => {
        setCurrentTab(tabIndex)
    }

    return (
        <div>
            <div className={styles.tabs}>
                {
                    //maps tabs array of objects from props
                    props.tabs.map((item, index) => (
                        //run this function per item, making a button that sets the current tab for each item in props.tabs
                        <button key={index} onClick={() => selectTab(index)}>
                            {item.label}
                        </button>
                    ))
                }
                
                <div className={ styles.tabContent}>
                    {props.tabs[currentTab].content}
                </div>
            </div>
        </div>
    )
}



export default Tabs