import React from "react";
import Csm from "../csm/Csm";

function Home() {
	return (
		<div className='twoColWrap'>
			<div className='colLeft'>
				<Csm />
			</div>
			<div className='colRight'></div>
		</div>
	);
}

export default Home;
