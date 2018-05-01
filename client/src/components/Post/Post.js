import React from 'react'
import './Post.css'

const Post = (props) => {
    const {
        nickname,
        avatar,
        image,
        caption
    } = props

    return (
        <article className="Post">
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                        <img
                            src={avatar}
                            alt={nickname}
                        />
                    </div>
                    <div className="Post-user-nickname">
                        <span>{nickname}</span>
                    </div>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img
                        src={image}
                        alt={nickname}
                    />
                </div>
                <div className="Post-caption">
                    <strong>{nickname}</strong> {caption}
                </div>
            </div>
        </article>
    )
}

export default Post