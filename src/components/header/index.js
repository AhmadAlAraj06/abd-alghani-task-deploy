import React from 'react';
import "../header/header.css";
import locationIcon from "./icons/location.png";
import favoriteIcon from "./icons/favorite.png";
import cartIcon from "./icons/cart.png";
import personIcon from "./icons/person.png";
import emailIcon from "./icons/email.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const ITEM_HEIGHT = 48;

const Header = () => {
	return (<div className="header">
		<h1 className='left'>GrapOne</h1>
		<img src={locationIcon} />
		<select name="Location" className='location'>
			<option value="">Auckland</option>
			<option value="irbid">Irbid</option>
			<option value="amman">Amman</option>
			<option value="madaba">Madaba</option>
			<option value="zarqa">Zarqa</option>
			<option value="aqaba">Aqaba</option>
		</select>
		<img className='fav' src={favoriteIcon} />
		<img className='fav' src={cartIcon} />
		<img className='person' src={personIcon} />
		<div >
			< ArrowDropDownIcon>
				<MoreVertIcon />
			</ ArrowDropDownIcon>
		</div>
		<img className='email' src={emailIcon} />
		<p className='sub'>Subscripe</p>
		<img src="https://new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_short.22da364cd455.png" />
	</div>)
};

export default Header;
