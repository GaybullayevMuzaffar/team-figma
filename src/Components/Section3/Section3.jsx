import "./Section3.css";
import s from "../../public/Left.png"
function Section3() {
  return (
    <div className="container">
  <div className="workflow">
    
    <div className="left">
      <h1>Improve workflow</h1>

      <div className="button">
        <button>Research</button>
        <button>Plan</button>
        <button>Design</button>
      </div>

      <div className="salom">
        <p>
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque <br /> pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis <br /> at amet. Purus malesuada placerat arcu at enim elit in accumsan.
        </p>

        <p>Check the tools ➡️</p>
      </div>
    </div>

    <div className="img">
      <img src={s} alt="workflow" />
    </div>

  </div>
</div>
  )
}

export default Section3;