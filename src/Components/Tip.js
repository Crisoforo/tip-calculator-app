import React from 'react'
import '../CSS/Tip.css'

function Tip() {
  
  return (
    <div className='container calc-container'>
      <div id="calc-container">
        <div className="bill-side">
          <div className="bill">
            <h3 className='color-grey'>Bill</h3>
            <input type="number" name="bill" className='bill-amount' value="0" onChange="calc()"/>
          </div>
          <div className="tips">
            <h3 className='color-grey'>Select Tip %</h3>
            <div className="tip amounts">
              <input type="button" className="tip-percentage" value="5%" onclick="addTip(.05)"/>
              <input type="button" className="tip-percentage" value="10%" onclick="addTip(.1)"/>
              <input type="button" className="tip-percentage" value="15%" onclick="addTip(.15)"/>
              <input type="button" className="tip-percentage" value="25%" onclick="addTip(.25)"/>
              <input type="button" className="tip-percentage" value="50%" onclick="addTip(.50)"/>
              <input type="number" className="tip-percentage custom" value="0" placeholder="Custom" onChange=""/>
            </div>
          </div>
          <div className="people">
            <h3 className='color-grey'>Number of People</h3>
            <input  type="number" name="people" className="people-number" value="0" onChange="calc()"/>
          </div>
        </div>
        <div className="total-side">
          <div className="tip-amount">
            <h3 className='color-white'>Tip Amount</h3> <span className="tip-person cian">$0.00</span>
            <p>/ person</p>
            
          </div>  
          <div className="total">
            <h3 className='color-white'>Total</h3> <span className="total-person cian">$0.00</span>
            <p>/ person</p>
          </div>
          <div className="reset">
            <button className="reset-button">RESET</button> 
          </div>
        </div>
      </div>
      
      
    </div>

  )
}

export default Tip
