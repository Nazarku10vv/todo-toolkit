import React, { useState } from 'react'
import './Admin.css'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/slices/todo'

const Admin = () => {
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [img, setImg] = useState("")

	const dispatch = useDispatch()

	function handleSave() {
		let newObj = {
			name: name,
			lastName: lastName,
			img: img,
			id: Date.now()
		}

		dispatch(addTask(newObj))

		setName('')
		setLastName('')
		setImg('')
	}

	return (
		<div>
			<section id='admin'>
				<div className='container'>
					<div className='admin'>
						<div className='adminMainBlcok'>
							<h2>TODO</h2>
							<input
								onChange={e => setName(e.target.value)}
								type='text'
								placeholder='Name'
								value={name}
							/>
							<input
								onChange={e => setLastName(e.target.value)}
								type='text'
								placeholder='Last Name'
								value={lastName}
							/>
							<input
								onChange={e => setImg(e.target.value)}
								type='text'
								placeholder='image URL'
								value={img}
							/>
							<button onClick={handleSave}>create</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Admin
