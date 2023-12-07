<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import SelectTrueOrFalse from '$lib/SelectTrueOrFalse.svelte';
	import SignUpSelect from '$lib/SignUpSelect.svelte';
	import { fromJSON } from 'postcss';
	// @ts-nocheck

	let form_data = {
		nation_name: '',
		nation_flag: '',
		nation_motto: '',
		nation_currency: '',
		nation_classification: '',
		nation_ideology: '',
		q1: false,
		q2: false,
		q3: false,
		q4: false,
		q5: false,
		q6: false,
		q7: false,
		q8: false,
		q9: false,
		q10: false,
		password: ''
	};
	$: current_pagination = 1;

	const classifications = [
		'Republic',
		'Monarchy',
		'Parliamentary',
		'Empire',
		'Confederation',
		'Duchy',
		'Principality',
		'Emirate',
		'Commonwealth',
		'Sultanate',
		'Grand Duchy',
		'Caliphate',
		'Theocracy',
		'Autocracy',
		'Dictatorship',
		'Oligarchy',
		'Plutocracy',
		'Kleptocracy',
		'Totalitarian State',
		'Authoritarian State',
		'Military Junta',
		'Autonomous Region',
		'Special Administrative Region',
		'Free City',
		'Crown Dependency',
		'Dependent Territory',
		'Associated State',
		'Protectorate',
		'Mandate',
		'Trust Territory',
		'Colony',
		'Dominion',
		'Commonwealth Realm',
		'Union',
		'Kingdom',
		'Tsardom',
		'Khanate',
		'Imamate',
		'State',
		'Province',
		'Territory',
		'District',
		'Municipality',
		'City',
		'Town',
		'Village',
		'Hamlet',
		'Settlement',
		'Enclave'
	];

	const ideologies = [
		'Anarchic',
		'Libertarian',
		'Capitalist',
		'Liberal',
		'Centrist',
		'Conservative',
		'Socialist',
		'Authoritarian',
		'Tyrannical',
		'Communist',
		'Fascist',
		'Nationalist',
		'Feminist',
		'Technocratic'
	];

	const questions = [
		'1. Compulsory 1-year military service and a strong military?',
		'2. Democracy is superior.',
		'3. Religion as the main law.',
		'4. Absolute freedom of speech, even for hate speech.',
		'5. Direct punishment for criminals, and the death penalty is appropriate?',
		'6. Military intervention for human rights, and privatization is good?',
		'7. Immigration contributes positively to cultural diversity.',
		'8. War can be justified?',
		'9. The nation should have an official religion to promote a shared identity.',
		'10. The state should remain neutral and not interfere in religious matters.'
	];

	const nextPage = () => {
		if (
			current_pagination == 1 &&
			form_data.nation_name &&
			form_data.nation_motto &&
			form_data.nation_currency &&
			ideologies.includes(form_data.nation_ideology) &&
			classifications.includes(form_data.nation_classification) &&
			form_data.nation_flag
		) {
			current_pagination = 2;
		}

		if (current_pagination == 2) {
			current_pagination = 3;
		}
	};

	// @ts-ignore
	const uploadFlag = (e) => {
		const file = e.target.files[0];
		let reader = new FileReader();
		// @ts-ignore
		reader.addEventListener('load', (e) => {
			// @ts-ignore
			form_data.nation_flag = e.target.result;
		});
		reader.readAsDataURL(file);
	};
</script>

<svelte:head>
	<title>Utunia | Sign Up</title>
</svelte:head>

<div class="ll w-screen h-screen">
	<!-- svelte-ignore a11y-interactive-supports-focus -->
	<center>
		
		<h1 class="text-primary text-xl">Establish Your Nation.</h1>

		<div class="md:w-[20.0625rem] lg:w-[25.0625rem] w-[80%] h-full p-3 mt-10">
			{#if current_pagination === 1}
				<div>
					<div class="flex justify-between content-center">
						<div class="w-[6.9375rem] h-[3.8125rem]">
							<input
								type="file"
								name="file"
								class="hidden"
								id="flag"
								accept="image/*"
								on:change={uploadFlag}
							/>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
							<div>
								<img
									on:click={() => {
										if (document.getElementById('flag')) document.getElementById('flag').click();
									}}
									class="w-[6.9375rem] h-[3.8125rem] rotate-6 border-white border-2 cursor-pointer"
									id="display"
									src={form_data.nation_flag == ''
										? 'https://dummyimage.com/300x160/fff.jpg?text=upload+your+flag'
										: form_data.nation_flag}
									alt=""
								/>

								<img
									on:click={() => {
										if (document.getElementById('flag')) document.getElementById('flag').click();
									}}
									class="rotate-6 border-white border-2 absolute top-[5.05rem] w-[6.9375rem] h-[3.8125rem] cursor-pointer"
									src={'/images/flagripplebg.png'}
									alt=""
								/>
							</div>
						</div>
					</div>

					<div class="mt-5 space-y-3">
						<div class="grid grid-cols-2 justify-center content-center ">
							
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    bind:value={form_data.nation_name}
                                    class="inp"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="name"
                                    bind:value={form_data.password}
                                    class="inp"
                                    placeholder="Passkey"
                                />
                            </div>
						</div>
						<div>
							<input
								type="text"
								name="name"
								bind:value={form_data.nation_motto}
								class="inp"
								placeholder="Motto"
							/>
						</div>
						<div>
							<input
								type="text"
								class="inp"
								bind:value={form_data.nation_currency}
								placeholder="Currency"
							/>
						</div>
						<div>
							<SignUpSelect
								bind:value={form_data.nation_classification}
								arr={classifications}
								placeholder="Classification"
							/>
						</div>

						<div>
							<SignUpSelect
								bind:value={form_data.nation_ideology}
								arr={ideologies}
								placeholder="Ideology"
							/>
						</div>
					</div>
				</div>
			{:else if current_pagination == 2}
				{#each questions as question, i}
					<div class="mb-10">
						<p class="text-xs mb-5 text-accent text-left">
							Q{question}
						</p>
						<SelectTrueOrFalse bind:state={form_data[`q${i + 1}`]} classes="text-md" />
					</div>
				{/each}
			{/if}
		</div>
		<!-- svelte-ignore missing-declaration -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			role="button"
			on:click={() => nextPage()}
			class="w-[6.9375rem] h-[2.8125rem] rounded-[0.375rem] btn-primary btn text-center my-5"
			style="z-index: 2"
		>
			<div role="button">
				<p>
					{#if current_pagination == 2}
						Create
					{:else}
						Next
					{/if}
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
