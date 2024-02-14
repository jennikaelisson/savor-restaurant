const Cheat = () => {
	return (
		<>
			<p className="h1">Cheatpage</p>
			<hr />
			<p className="h3 p-2 bg-light border">Spacing - padding</p>
			<br />
			<div className="p-1 bg-primary">Padding 1 (p-1)</div>
			<br />
			<div className="p-2 bg-primary">Padding 2 (p-2)</div>
			<br />
			<div className="p-3 bg-primary">Padding 3 (p-3)</div>

			<br />
			<div className="p-3  p-lg-0 bg-primary">
				Padding 3 (p-3) i mobilt, 0 i large
			</div>
			<br />
			<div className="py-3 bg-primary">Padding vertikalt 3 (py-3)</div>
			<hr />

			<p className="h3 m-2 bg-light border">Spacing - margin</p>
			<br />
			<div className="m-1 bg-secondary">Margin 1 (m-1)</div>
			<br />
			<div className="m-2 bg-secondary">Margin 2 (m-2)</div>
			<br />
			<div className="m-3 bg-secondary">Margin 3 (m-3)</div>

			<br />
			<div className="m-3  m-lg-0 bg-secondary">
				Margin 3 (m-3) i mobilt, 0 i large
			</div>
			<br />

			<div className="my-3 bg-secondary">Margin vertikalt 3 (my-3)</div>

			<hr />
			<p className="h3 p-2 bg-light border">Kolumnsystem</p>
			<br />
			<div className="row border">
				<div className="col-8 border bg-light">col-8</div>
				<div className="col-4 border bg-light">col-4</div>
			</div>
			<br />
			<div className="row border">
				<div className="col-12 col-lg-6 border bg-light">
					col-8, col-12 i stort läge
				</div>
				<div className="col-12 col-lg-6 border bg-light">
					col-4, col-12 i stort läge
				</div>
			</div>
			<br />
			<div className="row border">
				<div className="col-12 col-md-6 col-lg-3 border bg-light">
					col-12(mobilt), col-6 (ipad), col-3 (stort)
				</div>
				<div className="col-12 col-md-6 col-lg-3 border bg-light">
					col-12(mobilt), col-6 (ipad), col-3 (stort)
				</div>
				<div className="col-12 col-lg-6 border bg-light">
					col-12(mobilt), col-6 (stort)
				</div>
			</div>
			<hr />
			<p className="h3 p-2 bg-light border">Knappar</p>
			<button type="button" className="btn btn-outline-primary">
				Huvudknapp
			</button>
			<button type="button" className="btn btn-outline-secondary">
				Alternativ knapp
			</button>
			<hr />
			<p className="h3 p-2 bg-light border"> Alert:</p>
			<div
				className="alert alert-danger alert-dismissible fade show"
				role="alert"
			>
				Alert
				<button
					type="button"
					className="btn-close"
					data-bs-dismiss="alert"
					aria-label="Close"
				></button>
			</div>
			<hr />
			<p className="h3 p-2 bg-light border"> Popup (modal):</p>

			<button
				type="button"
				className="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
			>
				Öppna popup (modal)
			</button>

			<div
				className="modal fade"
				id="exampleModal"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Titel
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">bla bla bla</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Stäng
							</button>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<p className="h3 p-2 bg-light border">Formulär</p>
			<form className="col-lg-6">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<div className="mb-3 form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="exampleCheck1"
					/>
					<label className="form-check-label" htmlFor="exampleCheck1">
						Check me out
					</label>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</>
	);
};

export default Cheat;
