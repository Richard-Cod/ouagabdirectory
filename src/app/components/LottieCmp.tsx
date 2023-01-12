import Lottie from "react-lottie-player"

export default function LottieCmp({style,classNames,animationData}:{style?:any,classNames?:string,animationData:any}) {

  return (
    <Lottie
      loop
      animationData={animationData}
      play
      style={style}
      className={classNames}
    />
)
}

LottieCmp.defaultProps={

}