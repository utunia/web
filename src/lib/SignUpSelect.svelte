<script lang="ts">
    export let value: string
    export let arr: [string]
    export let placeholder: string

</script>

<div>
    <input
        type="text"
        class="inp"
        bind:value={value}
        placeholder="{placeholder}"
    />

    <div
        class="w-[13.0625rem] max-h-36 min-h-24 overflow-auto absolute bg-neutral mx-auto left-0 right-0 chose"
        style="z-index: 3"
    >
        <div class="flex justify-start content-center flex-col">
            {#if value != ''}
                {#each arr as item}
                    {#if item
                        .toLowerCase()
                        .includes(value.toLowerCase()) && item != value}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div
                            class="p-3 cursor-pointer hover:bg-[#394632]"
                            on:click={() => (value = item)}
                        >
                            {item}
                        </div>
                    {/if}
                {/each}
            {/if}
        </div>
    </div>

</div>



<style>
    
    .chose::-webkit-scrollbar {
      width: 5px;
    }
  
    .chose::-webkit-scrollbar-track {
      background: #3a4833;
    }
  
    .chose::-webkit-scrollbar-thumb {
      background: rgb(44, 54, 38);
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
  

</style>