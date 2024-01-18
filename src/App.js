import Blogs from './components/Blogs';
import Header from './components/Header';
import Pagination from './components/Pagination';
import './App.css';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

export default function App() {
	const { fetchBlogsPosts } = useContext(AppContext);

	useEffect(() => {
		fetchBlogsPosts();
	}, []);
	return (
		<div className='w-full flex flex-col gap-y-1 justify-center items-center'>
			<Header />
			<Blogs />
			<Pagination />
		</div>
	);
}
