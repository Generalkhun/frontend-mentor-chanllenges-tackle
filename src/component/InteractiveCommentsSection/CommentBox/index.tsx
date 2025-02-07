import Image from "next/image";
import LikeDislikeBox, { LikeDislikeDirection } from "../LikeDislikeBox"

interface UserProfile {
    profilePicURL: string;
    userName: string;
}
interface CommentBoxProps {
    commentDate:string;
    userProfile: UserProfile
    commentContent: string
    currentLikeDislikeValue: number,
    onAdjustCurrentLikeDislikeValue: (adjustDirection: LikeDislikeDirection) => void
}
const CommentBox = ({
    commentDate,
    userProfile,
    commentContent,
    currentLikeDislikeValue,
    onAdjustCurrentLikeDislikeValue
}: CommentBoxProps) => {
    return <div className="flex bg-gray-50 rounded-md">
        <LikeDislikeBox currentLikeDislikeValue={currentLikeDislikeValue} onAdjustCurrentLikeDislikeValue={onAdjustCurrentLikeDislikeValue}/>
        <div className="flex flex-col">
            <div className="flex">
            <Image src={userProfile.profilePicURL} sizes="10px" alt="user image"/>
                <div>{userProfile.userName}</div>
            <div>{commentDate}</div>
            </div>
            <div>{commentContent}</div>
        </div>
    </div>
}

export default CommentBox