import React from 'react';
import "./main.css";
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
const list = ["Featured Auckland deals", "Collections", "Escapes", "Picked for you", "Store", "Automotiv", "Fitness & sports "]
const Main = () => {
	return (
		<div className="mai">
			<div className="desktopheaderimage">
				<img className="mainimg" src="https://mediacdn.grabone.co.nz/asset/E8rOLoskPU" />
				<p>Covid 19 Update: We encourage you to shop as normal for all your products but shipping delays may occur. Stay safe NZ!</p>
				<p>Full Early Bird Christmas terms and conditions here.</p>

			</div>
			<div className="mainItem">
				<div className="menuMain">
					<Paper sx={{ width: 350, maxWidth: '100%' }}>

						{list.map(item =>
							<MenuList>
								<MenuItem>
									<ListItemText>{item}</ListItemText>
								</MenuItem>
								<Divider /></MenuList>
						)}

					</Paper>
				</div>
				<div className="divCl">
					<img className="im" src="https://www.scubastore.com/f/13785/137858413/adidas-logo-3-units-face-mask.jpg" />
					<hr />
					<h1> Face Mask  </h1>
					<p> price : 10 $</p>

				</div>
				<div className="divCl">
					<img className="im" src="https://m.media-amazon.com/images/I/612oCx1r4hL._AC_UL480_FMwebp_QL65_.jpg" />
					<hr />
					<h1> Nike T Shirt  </h1>
					<p> price : 50 $</p>

				</div>

			</div>

		</div>
	)
};

export default Main;
