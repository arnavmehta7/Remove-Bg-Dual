import IMG from '../../assets/images/line.jpg'
import {Link} from 'react-router-dom'

const CancellationPolicy = () =>{
	window.scrollTo(0, 0)

return(
<div>
<section className="contactbar terms-block">
	    <div className="container">
	        <h4><img src={IMG}/>GENERAL</h4>
	        <h2>Policy cancelation</h2>
	    </div>
	</section>
<section className="terms-content">
	    <div className="container left" >
	        <h4>Policy cancelation</h4>
	        <p >
	        	<b>If you are not 100% satisfied with your purchase, please contact us.</b>
			</p>
			<p>14 Days Money Back Guarantee.
The 14 Days Money Back Guarantee applies if
you have puchased a subscription for the first time,
the subscription was purchased within the last 14 days and
you are not satisfied with the result quality and have no use
for cut out images by <Link to="/">http://pixelbrandstudio.com/</Link></p>

	    </div>
</section>




</div>

)
}

export default CancellationPolicy;