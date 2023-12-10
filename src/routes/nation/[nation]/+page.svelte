<script lang="js">

	import Navbar from "$lib/Navbar.svelte";
    //@ts-ignore
    import mergeImages from "merge-images"
	import { onMount } from "svelte";
    export let data;

    const cards = [
        {
            title: "Civil Rights",
            state: "thriving",
            isGood: true 
        },
        {
            title: "Economy",
            state: "unheard of",
            isGood: false 
        },
        {
            title: "Security",
            state: "meh",
            isGood: false 
        }
    ]


        $: width = 0;
        onMount(() => {
            width = window.innerWidth
        })
</script>


<Navbar/>



<div class="mt-5 flex flex-col md:flex-row  md:space-x-9 md:ml-12 ">

    <div>
        <center>
            <img src="http://fakeimg.pl/300x150?text=flag&font=lobster"  id="flag" class="lg:h-40 xl:h-40 md:h-40 lg:w-80 xl:w-80 md:w-80 w-60 h-32"  alt=''/>
        </center>
    </div>

    <div class="mt-8">
        <p class="text-xs text-center md:text-left ">
            The Kingdom of 
        </p>
        <p class="text-xl text-stone-100 text-center  md:text-left md:text-3xl">
            The most secular state
        </p>
        
        <p class="tracking-wide opacity-80  md:text-lg text-center md:text-left">
            Unleashed Anarchist
        </p>

        <p class="mt-3 tracking-wide text-slate-300 md:text-sm text-xs text-center before:content-[attr(data-before)] after:content-[attr(data-after)] before:text-xl after:text-xl" data-after="”" data-before="“">
            Religion must be abandoned
        </p>
    </div>

</div>


<center>
    <div class="mt-12 flex md:flex-row md:space-x-7 md:space-y-0 space-y-7 flex-col justify-center content-center w-[80%]">
        {#each cards as card, i}
            <div class=" w-48 h-[4rem] rounded-xl  flex flex-col self-center {card.isGood ? 'bg-green-700' : 'bg-red-700'}">
                <div class="bg-neutral rounded-t-md text-sm p-1 ">
                    {card.title}
                </div>
                <div>
                    <div>
                        <p class="text-center text-stone-100  flex-1 mt-1  text-md">
                            {card.state}
                        </p>
                    </div>
                </div>
            </div>
        
        {/each}
    </div>
</center>


<div class="flex flex-row space-x-7">
    
    
    <div class="mt-16 md:ml-12 mr-6 text-sm text-left ml-3 md:text-left text-slate-200" >
        <p>The (Name of Government) of (Nation Name) is a (Nation Size and Adjectives) nation,
            governed with a (Leader Style) hand. Renowned for its (Unique Characteristics),
            (Nation Name) is a (Positive Attribute) of (Positive Attribute).</p>
         <br>
         <p>Its (Population Adjectives) population of (Population Size) (Citizenship Name) enjoy a
            (Degree of Freedom) level of freedom and prosperity, safeguarded by a (Legal System) and a
            commitment to (Core Value).</p>
         <br>
         <p>The (Government Size) government deftly balances the needs of its citizens, prioritizing
            (Top 3 Priorities). ensuring resources are distributed fairly and
            effectively.</p>
         <br>
         <p>(Nation Name)'s vibrant economy, valued at a staggering (GDP) annually, thrives on a diverse range of
            industries. The (Top Industry) sector reigns supreme, followed closely by (Other Major Industries).
            The average income of (Average Income) is distributed relatively evenly, with the wealthiest citizens
            earning only (Income Ratio) times as much as the least fortunate.</p>
       
    </div>

</div>

<div class="flex xs:flex-col sm:flex-row justify-evenly my-7 content-center ">
    <div class="btn btn-xs btn-neutral bg-neutral h-6 ">
        <p>
            trade with
            <br>
        </p>
    </div>
    <div class="btn btn-xs btn-neutral bg-neutral h-6">
        <p>
            declare war 
            <br>
        </p>
    </div>
    <div class="btn btn-xs btn-neutral bg-neutral h-6">
        <p>
            alliance with 
            <br>
        </p>
    </div>
</div>