import { FaArrowRight } from "react-icons/fa";
import "./Section1.css";
import sec_img02 from "../../assets/Left.png"

function Section1() {

  return (

    <div className="container02">
       <img src={sec_img02} alt="img02" />
       <div className="sec_box02">
        <h2 className="sec_title">Enjoy your time<br></br> working</h2>
        <p className="sec_text">Etiam condimentum duis molestie malesuada volutpat pellentesque sed.<br></br> Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis<br></br> massa tellus imperdiet aenean nulla id.</p>
        <button href="#" className="link">See how it helped others <FaArrowRight /></button>
       </div>
    </div>
  
)
}

export default Section1;