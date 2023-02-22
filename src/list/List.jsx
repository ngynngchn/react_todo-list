import Element from "./Element.jsx";

import data from "./data.js";

import { v4 as uuidv4 } from "uuid";

const List = () => {
	console.log(data);
	return (
		<ul>
			{data.map((chore) => {
				return <Element task={chore} key={uuidv4()} />;
			})}
		</ul>
	);
};

export default List;
