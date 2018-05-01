import React from 'react'
import './Post.css'

const Post = () => {
    return (
        <article className="Post">
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                        <img
                            src="https://media.licdn.com/dms/image/C4E03AQEWZFNLN-L9Vg/profile-displayphoto-shrink_200_200/0?e=1530381600&v=beta&t=V5NjqeB6r3rGJ-Kai3dH3nB9J3BzfIT_hC0mExJq_og"
                            alt="José Varela"
                        />
                    </div>
                    <div className="Post-user-nickname">
                        <span>José Varela</span>
                    </div>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img
                        src="https://cdn-images-1.medium.com/max/800/1*EOMP0V69RZ5xChG5pRoFyA.png"
                        alt="GraphQL"
                    />
                </div>
                <div className="Post-caption">
                    <strong>José Varela</strong> learning new tools
                </div>
            </div>
        </article>
    )
}

export default Post