import React from 'react'
import Pagination from '@mui/material/Pagination'

const PaginationBasket = ({ count, setPage }) => {

	function handlePagination(p, n) {
		setPage(n)
	}

	return (
		<div>
			<Pagination
				sx={{
					color: 'white'
				}}
				onChange={handlePagination}
				count={count}
				color='primary'
			/>
		</div>
	)
}

export default PaginationBasket
