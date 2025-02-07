"use client"
import { InteractiveCommentsSection } from "@/component"
import { LikeDislikeDirection } from "@/component/InteractiveCommentsSection/LikeDislikeBox"
import { useState } from "react"

const InteractiveCommentsSectionPage = () => {
    const [likeScore, setLikeScore] = useState<number>(0)
    const onAdjustCurrentLikeDislikeValue = (adjustDirection: LikeDislikeDirection) =>  {
        setLikeScore(p => adjustDirection === "dislike" ? p-1 : p+1)
    }
    return <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] py-8">
        <div className="flex flex-col w-[50%] min-w-[200px] h-full">
            <div className="h-full w-full flex flex-col gap-4">
                <InteractiveCommentsSection.CommentBox 
                commentDate="1 month ago"
                userProfile={{profilePicURL: '', userName:'amyrobson'}}
                 commentContent="Impressive Though it seem the drag feature..."
                  currentLikeDislikeValue={likeScore}
                   onAdjustCurrentLikeDislikeValue={onAdjustCurrentLikeDislikeValue}
                   />
            </div>
            <div className="h-28 bg-gray-50 rounded-md">
                </div>
        </div>
        

    </div>
}
export default InteractiveCommentsSectionPage