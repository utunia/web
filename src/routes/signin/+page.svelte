<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';


	let form_data = {
		nation_name: '',
        password: '',
    }

</script>

<svelte:head>
	<title>Utunia | Sign Up</title>
</svelte:head>

<div class="ll w-screen h-screen">
	<!-- svelte-ignore a11y-interactive-supports-focus -->
	<center>
		
		<h1 class="text-primary text-xl mt-1">Establish Your Nation.</h1>

		<div class="md:w-[20.0625rem] lg:w-[25.0625rem] w-[80%] h-full p-3 mt-10">
				<div>
		
					<div class="mt-5 space-y-16">
						<div>
							<input
								type="text"
								name="name"
								bind:value={form_data.nation_name}
								class="inp"
								placeholder="Nation Name"
							/>
						</div>
						<div>
							<input
								type="text"
								class="inp"
								bind:value={form_data.password}
								placeholder="Password"
							/>
						</div>
					
					</div>
				</div>
			
		</div>
		<!-- svelte-ignore missing-declaration -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			role="button"
			class="w-[6.9375rem] h-[2.8125rem] rounded-[0.375rem] btn-primary btn text-center mx-auto left-0 right-0 absolute bottom-10"
			style="z-index: 2"
		>
			<div role="button">
				<p>
                    Login
				</p>
			</div>
		</div>
	</center>
</div>

<style>
	.ll {
		background: linear-gradient(
				0deg,
				transparent 45%,
				#0b0c0a 45%,
				#0b0c0a 55%,
				transparent 55%,
				transparent 20%,
				#0b0c0a 20%,
				#0b0c0a 30%,
				transparent 30%
			),
			linear-gradient(
				90deg,
				transparent 45%,
				#0b0c0a 45%,
				#0b0c0a 55%,
				transparent 55%,
				transparent 20%,
				#0b0c0a 20%,
				#0b0c0a 30%,
				transparent 30%
			);
		background-size: 2em 2em;
		background-color: #070806;
		opacity: 1;
		overflow-x: hidden;
	}

	.inp {
		border-bottom: 2px solid #94b0ad;
		border-top: none;
		border-left: none;
		border-right: none;
		background-color: transparent;
		color: white;
		outline: none;
		width: 80%;
		height: 0.5rem;
		padding: 1rem 0.3rem;
		margin: 0; /* Added margin */
	}

	.inp:focus {
		border-bottom: 2px solid #62877e;
	}

	.inp::placeholder {
		color: rgba(255, 255, 255, 0.733);
	}

	.chose::-webkit-scrollbar {
		width: 5px;
	}

	.chose::-webkit-scrollbar-track {
		background: #3a4833;
	}

	.chose::-webkit-scrollbar-thumb {
		background: rgb(44, 54, 38);
	}
	/*   
    * {
      color: white;
    } */
</style>
