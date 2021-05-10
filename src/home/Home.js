import React from "react";
import Csm from "../csm/Csm";
import Csm2 from "../csm2/Csm2";

function Home() {
	return (
		<div className='twoColWrap'>
			<div className='colLeft'>
				<Csm />
			</div>
			<div className='colRight'>
				<Csm2 />
			</div>
		</div>
	);
}

export default Home;
