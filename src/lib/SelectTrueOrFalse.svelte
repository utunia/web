<script>
    export let state
    export let classes = ""
</script>

<div class="{classes} space-x-16 text-md" style="  display: flex;justify-content: center;">
    <div class:bd={state} on:click={() => state = true} class="item true" >Agree</div>
    <div class:bd={!state} on:click={() => state = false} class="item false" >Disagree</div>
</div>








<style>
    .bd {
        border-bottom: 4px;
        border-style: solid;
    }

    .item::after {
        content: '';
        width: 0;
        height: 4px;
        display: block;
        transition: all 0.3s ease-in;
    }

    .item:hover::after {
        width: 100%;
    }

    .true::after {
        background-color: #49cd4d;
    }

    .true {
        border-color: #49cd4d;
    }

    .false::after {
        background-color: #ff5252;
    }
    .false {
        border-color: #ff5252;
    }

    * {
        color: white;
    }
</style>