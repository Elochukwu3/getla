import { textProp } from "./type"

const HeaderText = ({header1, header2}:textProp)=>{
    return (
        <div className="font-clash space max-md:text-center max-sm:text-base    font-bold text-3xl text-white">
            <span className="block">{header1}</span>
            <span className="block text-custom-highlight">{header2}</span>
        </div>
    )
}
export default HeaderText