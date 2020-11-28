import { EditLocationRounded, HelpRounded, NotificationImportantRounded, PeopleRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import React from 'react'
import './ChatHeader.css'

function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    Test Channel Name
                </h3>
            </div>

            <div className="chatHeader__right">
                <NotificationImportantRounded />
                <EditLocationRounded />
                <PeopleRounded />

                <div className="chatHeader__search">
                    <input type="text" placeholder = 'Search'/>
                    <SearchRounded />
                </div>

                <SendRounded />
                <HelpRounded />
            </div>
        </div>
    )
}

export default ChatHeader
