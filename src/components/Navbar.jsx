import { A } from "@solidjs/router";

function Navbar() {
  return (
    <div class="bg-blue-400 p-4 flex">
      <div class="w-full grid grid-cols-3">
        <div class="flex place-content-start gap-5 py-1 text-white font-bold text-xl">
          <A href="/Home">Home</A>
          <A href="/Feature">Feature</A>
          <A href="/About">About</A>
          <A href="/Price">Price</A>
        </div>
        <div class="flex place-content-center py-1 font-bold text-xl text-white">
          <A href="/">Index</A>
        </div>
        <div class="flex place-content-end gap-2 font-bold">
          <A
            class="bg-yellow-400 px-2 py-1 w-20 text-center rounded-xl border-black border-2"
            href="/Login">
            Login
          </A>
          <A
            class="bg-yellow-200 px-2 py-1 w-20 text-center rounded-xl border-black border-2"
            href="/Create">
            Create
          </A>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
