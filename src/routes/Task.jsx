function Task() {
  return (
    <div class="container mx-auto py-5">
      <div class="grid grid-cols-3 gap-5">
        <div class="grid place-items-end">
          <button class="rounded-full bg-yellow-400 p-2">
            <img src="https://icongr.am/clarity/add.svg?size=50&color=currentColor" alt="" />
          </button>
        </div>
        <div class="grid place-items-center">
            <h1 class="rounded-full h-1/2 w-full text-center bg-yellow-200">Title</h1>
        </div>
        <div>
          <button class="rounded-full bg-yellow-400 p-2">
            <img src="https://icongr.am/clarity/user.svg?size=50&color=currentColor" alt="" />
          </button>
        </div>
      </div>
      <div class="bg-red-300 my-16 rounded-xl container p-10 h-full">
        <form>
            <input type="text" class="bg-transparent rounded-xl w-full" id="" placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto explicabo id ducimus dicta voluptatem optio quibusdam, rem placeat quo molestias inventore dolorem provident repellat quam, rerum reiciendis aut ab officia?" />
            <input type="text" class="bg-transparent rounded-xl w-full" id="" placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto explicabo id ducimus dicta voluptatem optio quibusdam, rem placeat quo molestias inventore dolorem provident repellat quam, rerum reiciendis aut ab officia?" />
            <input type="text" class="bg-transparent rounded-xl w-full" id="" placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto explicabo id ducimus dicta voluptatem optio quibusdam, rem placeat quo molestias inventore dolorem provident repellat quam, rerum reiciendis aut ab officia?" />
        </form>
      </div>
    </div>
  );
}

export default Task;
