		<Modal
					styles={{
						drawer: { background: "rgb(248, 249, 250)" },
						closeButton: {
							color: "#ffff",
							"&:hover": {
								color: "red",
							},
						},
						title: { color: "#ffff", fontWeight: "600" },
						header: {
							padding: "10px",
							backgroundColor: "#228BE6",
							marginRight: "0px",
						},
						root: {
							width: "70%",
							margin: "0 auto",
						},
						body: {
							padding: "2rem",
						},
					}}
					size="full"
					centered
					opened={true}
					onClose={() => {}}
					title="Work Order Form">
					<div>
						<WorkOrderForm />
					</div>
				</Modal>
