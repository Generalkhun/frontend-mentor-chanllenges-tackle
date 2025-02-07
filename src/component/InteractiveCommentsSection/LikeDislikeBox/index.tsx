export type LikeDislikeDirection = "like" | "dislike";
interface LikeDislikeBoxProp {
    currentLikeDislikeValue: number;
    onAdjustCurrentLikeDislikeValue: (adjustDirection: LikeDislikeDirection) => void

}
const LikeDislikeBox = ({
    currentLikeDislikeValue,
    onAdjustCurrentLikeDislikeValue
}: LikeDislikeBoxProp) => {
const onLike = () => {
    onAdjustCurrentLikeDislikeValue("like")
}
const onDisLike = () => {
    onAdjustCurrentLikeDislikeValue("dislike")
}
    return <div className="w-4 h-10 flex flex-col bg-blue-200">
       <button onClick={onLike}>+</button>
       <div>{currentLikeDislikeValue}</div>
       <button onClick={onDisLike}>-</button>
    </div>
}

export default LikeDislikeBox