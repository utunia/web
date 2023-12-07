<script>
// @ts-nocheck

	import { fromJSON } from "postcss";

// @ts-nocheck

	let form_data = {
		nation_name: '',
		nation_flag: '',
		nation_motto: '',
		nation_currency: '',
		nation_classification: ''
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

    const nextPage = () => {
        if (current_pagination == 1 && (
            form_data.nation_name && form_data.nation_motto  &&
            form_data.nation_currency && classifications.includes(form_data.nation_classification)
            && form_data.nation_flag
        )) {
            current_pagination = 2;
        }
    }

    // @ts-ignore
    const uploadFlag =  (e) => {
        const file = e.target.files[0];
        let reader = new FileReader();
        // @ts-ignore
        reader.addEventListener('load', (e) => {
            // @ts-ignore
            form_data.nation_flag = e.target.result
        });
        reader.readAsDataURL(file);
        console.log(form_data)
    }
</script>

<svelte:head>
	<title>Utunia | Sign Up</title>
</svelte:head>

<div class="ll w-screen h-screen">
	<!-- svelte-ignore a11y-interactive-supports-focus -->
	<center>
		<br />
		<h1 class="text-primary text-xl">Establish Your Nation.</h1>

		<div class="w-[18.0625rem] h-full bg-accent p-3 mt-10">
			{#if current_pagination === 1}
				<div>
					<div class="flex justify-between content-center">

						<div>
                            <input type="file" name="file" class="hidden" id="flag" accept="image/*" on:change={uploadFlag}>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
							<img

                                on:click={() => {
                                    if (document.getElementById('flag')) document.getElementById('flag').click();
                                }}
								class="w-[6.9375rem] h-[3.8125rem] rotate-6 border-white border-2 cursor-pointer"
                                id="display"
								src="{form_data.nation_flag == '' ? 'https://dummyimage.com/300x160/fff.jpg?text=flag' : form_data.nation_flag}"
								alt=""
							/>
						</div>
					</div>

					<div class="mt-5 space-y-3">
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
								type="text"
								name="name"
								bind:value={form_data.nation_motto}
								class="inp"
								placeholder="Motto"
							/>
						</div>
						<div><input type="text" class="inp" bind:value={form_data.nation_currency} placeholder="Currency" /></div>
						<div>
                            <input type="text" class="inp" bind:value={form_data.nation_classification} placeholder="Classification" />
                            
                            <div class="w-[13.0625rem] max-h-24 min-h-24 overflow-auto absolute bg-neutral mx-auto left-0 right-0 chose" style="z-index: 3">
                                <div class="flex justify-start content-center flex-col">
                                    {#if form_data.nation_classification != ''}
                                        {#each classifications as classification}
                                            {#if classification.toLowerCase().includes(form_data.nation_classification.toLowerCase()) && classification != form_data.nation_classification}
                                                <!-- svelte-ignore a11y-click-events-have-key-events -->
                                                <!-- svelte-ignore a11y-no-static-element-interactions -->
                                                <div class="p-3 cursor-pointer hover:bg-[#394632]" on:click={() => (form_data.nation_classification = classification)}>
                                                    {classification}
                                                </div>
                                            {/if}
                                        {/each}
                                    {/if}
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			{:else if current_pagination == 2}
				<div></div>
			{:else}
				<div></div>
			{/if}
		</div>
        <div class="w-screen">
            <!-- svelte-ignore missing-declaration -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div

                role="button" on:click={() => nextPage()} class="w-[6.9375rem] h-[2.8125rem] rounded-[0.375rem] btn-primary btn  text-centerr absolute bottom-5 left-0 right-0 mx-auto" style="z-index: 2">

                    <div role="button">
                        <p>
                            {#if current_pagination == 3}
                                Create
                            {:else}
                                Next
                            {/if}
                        </p>
                    </div>
                </div>
        </div>
	</center>
</div>

<!--ignore-->
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

</style>
