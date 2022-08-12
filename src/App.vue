<template>
  <div class="mx-20 my-5 flex md:mx-10 sm:flex-col sm:m-10">
    <a href="#" class="px-4 py-2 mr-5 border text-base rounded-md bg-clip-border text-white bg-blue-500 hover:bg-blue-600 md:text-lg sm:w-full sm:mb-10"> Заказать в Москву </a>
    <a href="#" class="px-4 py-2 border text-base rounded-md bg-clip-border text-white bg-green-500 hover:bg-green-600 md:text-lg sm:w-full"> Заказать в Санкт-Петербург </a>
  </div>
  <div class="w-full h-full fixed inset-0 opacity-70 bg-black z-10"></div>
  <div class="w-full h-full fixed inset-0 flex justify-center items-center z-20">
      <div class="w-fit h-1/3 fixed bg-white opacity-1 rounded">
        <form class="p-6">
          <h2 class="text-2xl">Заказать звонок</h2>
          <div class="flex mt-7">
            <div class="flex flex-col">
              <label for="name">Имя*</label>
              <input class="appearance-none block text-gray-700 border-gray-700 hover:border-gray-800 bg-white border rounded mr-5 py-3 px-2 w-44 leading-tight focus:outline-none" type="text" id="name" name="name" placeholder="Иван Иванов" required>
            </div>
            <div class="flex flex-col">
              <label for="phone">Телефон*</label>
              <the-mask :mask="['###', '###-#', '###-##']"><input class="appearance-none block text-gray-700 border-gray-700 hover:border-gray-800 bg-white border rounded mr-5 py-3 px-2 w-44 leading-tight focus:outline-none" type="tel" id="phone" name="phone" placeholder="Phone" required></the-mask>
            </div>
            <div class="flex flex-col">
              <label for="email">Email*</label>
              <input class="appearance-none block text-gray-700 border-gray-700 hover:border-gray-800 bg-white border rounded shadow mr-5 py-3 px-2 w-44 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" name="email" placeholder="you@example.com" required>
            </div>
            <div class="flex flex-col">
              <label for="city">Город*</label>
              <div class="inline-block relative w-44">
                <select class="block appearance-none w-full bg-white border border-gray-700 hover:border-gray-800 rounded shadow px-2 py-3 leading-tight focus:outline-none focus:shadow-outline"  id="city" name="city" value="London" required>
                  <option value="Naples">Naples</option>
                  <option value="London">London</option>
                  <option value="Berlin">Berlin</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
          </div>
            </div>
          </div>
          <button type="submit" class="absolute right-7 px-11 py-2.5 mt-4 rounded bg-green-500 ">Отправить</button>
        </form>
      </div>
  </div>
  
</template>